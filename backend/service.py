from __future__ import annotations
import base64
import copy
import hashlib
import io
import json
import re
import time
import uuid
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from threading import RLock
from PIL import Image, UnidentifiedImageError
from catalog import load_payload, local_image
from .github_store import GitHubRepo, json_bytes
from .model import initial_document, normalize_document, text, image_path
from .mail import ResendMailer, MailFailure, email_address
from .security import UserError, require_admin, authenticated, verify_password, LIMITER


@dataclass(frozen=True)
class Settings:
    token:str=""
    password_hash:str=""
    public_repo:str=""
    public_branch:str="main"
    private_repo:str=""
    private_branch:str="main"
    cms_path:str="data/cms.json"
    image_prefix:str="assets/uploads"
    resend_api_key:str=""
    mail_from:str=""
    timeout:int=1800

    @classmethod
    def from_mapping(cls, value):
        def s(k,default=""):
            v=value.get(k,default)
            return str(v).strip()
        settings=cls(s("GITHUB_TOKEN"),s("ADMIN_PASSWORD_HASH"),s("PUBLIC_REPO"),s("PUBLIC_BRANCH","main"),s("PRIVATE_REPO"),s("PRIVATE_BRANCH","main"),s("CMS_PATH","data/cms.json"),s("IMAGE_PREFIX","assets/uploads"),s("RESEND_API_KEY"),s("MAIL_FROM"),max(60,min(86400,int(value.get("ADMIN_TIMEOUT_SECONDS",1800)))))
        for p in [settings.cms_path,settings.image_prefix]:
            GitHubRepo.path(p)
        if not settings.cms_path.startswith("data/") or not settings.image_prefix.startswith("assets/"):
            raise UserError("데이터 경로는 data 안, 이미지 경로는 assets 안으로 설정하세요.")
        if settings.private_repo and settings.private_repo.lower()==settings.public_repo.lower():
            raise UserError("비밀 글 저장소는 공개 데이터 저장소와 달라야 합니다.")
        return settings


def now_iso():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def request_id(value):
    try:
        return str(uuid.UUID(value))
    except (ValueError,TypeError,AttributeError):
        raise UserError("요청 식별자가 잘못되었습니다.") from None


class Service:
    def __init__(self,settings:Settings,root:Path,public=None,private=None,mailer=None):
        self.settings,self.root=settings,root
        self.public=public or (GitHubRepo(settings.public_repo,settings.public_branch,settings.token) if settings.public_repo else None)
        self.private_repo=private or (GitHubRepo(settings.private_repo,settings.private_branch,settings.token) if settings.private_repo else None)
        self.mailer=mailer or ResendMailer(settings.resend_api_key,settings.mail_from)
        self.initial=initial_document(root)
        self.base_payload=load_payload(root)
        self.lock=RLock()
        self.public_cache=None
        self.image_cache={}

    @property
    def configured(self):
        return bool(self.settings.password_hash and self.public and self.settings.token)

    def snapshot(self):
        if not self.public:
            return {"head":"local","envelope":{"schemaVersion":2,"published":copy.deepcopy(self.initial),"draft":copy.deepcopy(self.initial),"history":[]}}
        head=self.public.head()
        raw=self.public.read(self.settings.cms_path,head)
        if raw is None:
            envelope={"schemaVersion":2,"published":copy.deepcopy(self.initial),"draft":copy.deepcopy(self.initial),"history":[]}
        else:
            try:
                envelope=json.loads(raw)
                envelope["published"]=normalize_document(envelope["published"])
                envelope["draft"]=normalize_document(envelope["draft"])
                if not isinstance(envelope.get("history"),list):
                    raise ValueError()
            except (KeyError,ValueError,TypeError):
                raise UserError("게시 데이터 형식을 확인하세요. 기존 데이터를 덮어쓰지 않았습니다.") from None
        return {"head":head,"envelope":envelope}

    def image(self,path,head):
        if not path:
            return ""
        try:
            image_path(path)
            if not self.public or head=="local":
                return local_image(path,self.root)
            key=(head,path)
            with self.lock:
                if key in self.image_cache:
                    return self.image_cache[key]
            blob=self.public.read(path,head)
            ext=path.rsplit(".",1)[-1]
            mime={"svg":"image/svg+xml","png":"image/png","jpg":"image/jpeg","jpeg":"image/jpeg","webp":"image/webp"}.get(ext)
            result="data:"+mime+";base64,"+base64.b64encode(blob).decode() if blob and mime and len(blob)<=5*1024*1024 else ""
            with self.lock:
                if len(self.image_cache)>400:
                    self.image_cache.clear()
                self.image_cache[key]=result
            return result
        except UserError:
            return ""

    def present(self,doc,head,preview=False):
        doc=copy.deepcopy(doc)
        if not preview:
            doc["apps"]=[a for a in doc["apps"] if a.get("visible",True)]
            doc["sections"]=[s for s in doc["sections"] if s.get("visible",True)]
        images={}
        def resolve(path):
            if path not in images:
                images[path]=self.image(path,head)
            return images[path]
        for app in doc["apps"]:
            app["thumbnail"]=resolve(app.get("thumbnail",""))
            app["screenshots"]=[resolve(p) for p in app.get("screenshots",[])]
        for section in doc["sections"]:
            section["image"]=resolve(section.get("image",""))
        doc["site"]["profile"]["image"]=resolve(doc["site"]["profile"].get("image",""))
        doc["site"]["hero"]["image"]=resolve(doc["site"]["hero"].get("image",""))
        return {"site":doc["site"],"apps":doc["apps"],"sections":doc["sections"],"giscus":copy.deepcopy(self.base_payload["giscus"]),"warnings":[]}

    def public_payload(self):
        with self.lock:
            if self.public_cache and time.monotonic()-self.public_cache[0]<15:
                return copy.deepcopy(self.public_cache[1])
        snap=self.snapshot()
        payload=self.present(snap["envelope"]["published"],snap["head"])
        with self.lock:
            self.public_cache=(time.monotonic(),copy.deepcopy(payload))
        return payload

    def admin_data(self,session):
        require_admin(session,self.settings.timeout)
        snap=self.snapshot()
        doc=snap["envelope"]["draft"]
        paths=set()
        for a in doc["apps"]:
            paths.update([a["thumbnail"],*a["screenshots"]])
        paths.update(s["image"] for s in doc["sections"])
        paths.update([doc["site"]["profile"]["image"],doc["site"]["hero"]["image"]])
        return {"head":snap["head"],"document":doc,"history":snap["envelope"].get("history",[]),"images":{p:self.image(p,snap["head"]) for p in paths if p}}

    def normalize_uploads(self,doc,uploads):
        if not isinstance(uploads,list) or len(uploads)>10:
            raise UserError("한 번에 이미지 10개까지 올릴 수 있습니다.")
        replacements={};files={};total=0
        for upload in uploads:
            key=request_id(upload.get("id"))
            try:
                encoded=upload.get("data","")
                if not isinstance(encoded,str) or len(encoded)>6*1024*1024:
                    raise ValueError()
                raw=base64.b64decode(encoded,validate=True)
                total+=len(raw)
                if len(raw)>3*1024*1024 or total>12*1024*1024:
                    raise UserError("이미지당 3MiB, 합계 12MiB 이내로 올리세요.")
                with Image.open(io.BytesIO(raw)) as im:
                    if im.format not in ["PNG","JPEG","WEBP"] or im.width*im.height>16000000 or im.width<1 or im.height<1:
                        raise UserError("PNG/JPG/WebP 이미지와 크기를 확인하세요.")
                    im.load()
                    im=im.convert("RGB")
                    im.thumbnail((1920,1920))
                    output=io.BytesIO();im.save(output,"WEBP",quality=85)
                    blob=output.getvalue()
            except (ValueError,UnidentifiedImageError,OSError,Image.DecompressionBombError):
                raise UserError("실제 이미지 파일만 업로드할 수 있습니다.") from None
            path=self.settings.image_prefix+"/"+hashlib.sha256(blob).hexdigest()+".webp"
            replacements["upload:"+key]=path
            files[path]=blob
        def replace(value):
            if isinstance(value,dict):return {k:replace(v) for k,v in value.items()}
            if isinstance(value,list):return [replace(v) for v in value]
            return replacements.get(value,value) if isinstance(value,str) else value
        return normalize_document(replace(doc)),files

    def save(self,session,event):
        require_admin(session,self.settings.timeout)
        if not self.public or not self.settings.token:
            raise UserError("GitHub 저장 설정을 완료하세요.")
        rid=request_id(event.get("id"))
        marker="data/cms_operations/"+rid+".json"
        snap=self.snapshot();head=snap["head"]
        prior=self.public.read(marker,head)
        if prior:
            return {"message":"이미 반영된 요청입니다.","commit":head}
        if event.get("head")!=head:
            raise UserError("다른 변경과 충돌했습니다. 편집 내용을 유지한 채 최신본을 확인하세요.")
        operation=event.get("operation")
        envelope=copy.deepcopy(snap["envelope"])
        files={}
        if operation in ["draft","publish"]:
            doc,files=self.normalize_uploads(event.get("document"),event.get("uploads",[]))
            # A client may not rename an existing id via 'originalId'; the full catalog id is stable in UI.
            envelope["draft"]=doc
            if operation=="publish":
                version=str(uuid.uuid4())
                files["data/cms_versions/"+version+".json"]=json_bytes(envelope["published"])
                envelope["history"]=([{ "id":version,"createdAt":now_iso()}]+envelope.get("history",[]))[:20]
                envelope["published"]=copy.deepcopy(doc)
        elif operation=="discard":
            envelope["draft"]=copy.deepcopy(envelope["published"])
        elif operation=="restore":
            version=request_id(event.get("version"))
            if version not in [v["id"] for v in envelope.get("history",[])]:
                raise UserError("복구할 게시 버전이 없습니다.")
            raw=self.public.read("data/cms_versions/"+version+".json",head)
            if not raw:raise UserError("복구 파일이 없습니다.")
            envelope["draft"]=normalize_document(json.loads(raw))
        else:
            raise UserError("알 수 없는 저장 작업입니다.")
        # Ensure every referenced image already exists or is part of this atomic commit.
        candidate=envelope["draft"]
        paths={candidate["site"]["hero"]["image"],candidate["site"]["profile"]["image"]}
        paths.update(s["image"] for s in candidate["sections"])
        for a in candidate["apps"]:paths.update([a["thumbnail"],*a["screenshots"]])
        for path in paths:
            if path and path not in files and self.public.read(path,head) is None:
                raise UserError("등록되지 않은 이미지 경로입니다. 이미지를 업로드하거나 경로를 확인하세요.")
        envelope.update({"schemaVersion":2,"updatedAt":now_iso()})
        if len(json_bytes(envelope))>1500000:
            raise UserError("편집 데이터가 너무 큽니다. 휴지통과 불필요한 항목을 정리하세요.")
        files[self.settings.cms_path]=json_bytes(envelope)
        files[marker]=json_bytes({"requestId":rid,"operation":operation,"createdAt":now_iso()})
        commit=self.public.commit(files,head,"CMS "+operation+" "+rid)
        with self.lock:self.public_cache=None
        return {"message":"GitHub에 저장했습니다." if operation!="publish" else "GitHub에 게시했습니다.","commit":commit}

    def private_store(self):
        repo=self.private_repo
        if not repo or not self.settings.token:
            raise UserError("비밀 질문 저장소 설정을 준비하고 있습니다.")
        if repo is self.public or (self.settings.private_repo and self.settings.private_repo.lower()==self.settings.public_repo.lower()) or not repo.private():
            raise UserError("비밀 질문은 별도의 비공개 저장소에만 저장할 수 있습니다.")
        return repo

    def submit_secret(self,session,event,client_key):
        repo=self.private_store() # no private data is ever sent in the response
        rid=request_id(event.get("id"));path="questions/messages/"+rid+".json"
        for attempt in range(3):
            if not repo.private():raise UserError("비공개 저장소 상태를 확인하세요.")
            head=repo.head()
            if repo.read(path,head):
                return {"message":"접수되었습니다.","receipt":rid}
            if attempt==0:
                if time.time()-session.get("last_submission",0)<20:
                    raise UserError("연속 제출을 잠시 기다려 주세요.")
                LIMITER.check("submit:"+client_key,10,600)
            title=text(event.get("title",""),150);content=text(event.get("content",""),5000)
            if not title or not content:raise UserError("제목과 내용을 입력하세요.")
            email=email_address(event.get("email"))
            if event.get("emailConsent") is not True:raise UserError("이메일 사용 안내를 확인하고 동의해 주세요.")
            app_id=text(event.get("appId",""),80)
            app=next((a for a in self.public_payload()["apps"] if a["id"]==app_id),None)
            if app_id and not app:raise UserError("관련 앱을 확인하세요.")
            record={"email":email,"emailConsentAt":now_iso(),"replySchema":2,"internalNote":"","mailStatus":"not_sent","id":rid,"requestId":rid,"appId":app_id,"appTitle":app["title"] if app else "전체 질문","authorNickname":text(event.get("nickname",""),60),"title":title,"content":content,"createdAt":now_iso(),"status":"미확인","adminReply":"","repliedAt":""}
            index_raw=repo.read("questions/index.json",head)
            index=json.loads(index_raw) if index_raw else []
            if len(index)>=500:raise UserError("질문 보관함이 가득 찼습니다. 관리자에게 다른 경로로 문의하세요.")
            summary={k:record[k] for k in ["id","appId","appTitle","authorNickname","title","content","createdAt","status"]}
            try:
                repo.commit({path:json_bytes(record),"questions/index.json":json_bytes([summary,*index])},head,"Private question "+rid)
                session["last_submission"]=time.time()
                return {"message":"접수되었습니다.","receipt":rid}
            except UserError as exc:
                if "충돌" not in str(exc) or attempt==2:raise
        raise UserError("저장 결과를 확인하지 못했습니다. 같은 요청으로 다시 시도하세요.")

    def questions(self,session):
        require_admin(session,self.settings.timeout)
        repo=self.private_store();head=repo.head()
        raw=repo.read("questions/index.json",head)
        records=json.loads(raw) if raw else []
        return {"questions":records,"privateHead":head}

    def question_detail(self,session,event):
        require_admin(session,self.settings.timeout)
        repo=self.private_store();head=repo.head();qid=request_id(event.get("questionId"))
        raw=repo.read("questions/messages/"+qid+".json",head)
        if not raw:raise UserError("질문을 찾을 수 없습니다.")
        return {"question":self.question_view(json.loads(raw)),"privateHead":head}

    @staticmethod
    def question_view(record):
        record=copy.deepcopy(record)
        # v1 replies were private memos. Never silently turn them into outgoing mail.
        if record.get("replySchema")!=2:
            record["internalNote"]=record.get("adminReply","")
            record["adminReply"]=""
            record["mailStatus"]="legacy_no_email"
        record.setdefault("email","")
        record.setdefault("internalNote","")
        return record

    def question_result(self,repo,qid,message):
        head=repo.head();raw=repo.read("questions/messages/"+qid+".json",head)
        return {"message":message,"question":self.question_view(json.loads(raw)) if raw else None,"privateHead":head}

    def question_save(self,session,event):
        require_admin(session,self.settings.timeout)
        repo=self.private_store();head=repo.head();rid=request_id(event.get("id"));qid=request_id(event.get("questionId"))
        marker="questions/operations/"+rid+".json"
        prior=repo.read(marker,head)
        if prior:
            job=json.loads(prior).get("mailJobId")
            message=self.deliver_reply(session,qid,job) if job else "이미 저장했습니다."
            return self.question_result(repo,qid,message)
        if event.get("privateHead")!=head:raise UserError("질문이 변경되었습니다. 입력은 유지됩니다. 최신 글을 다시 불러온 뒤 수정하세요.")
        raw=repo.read("questions/messages/"+qid+".json",head)
        if not raw:raise UserError("질문을 찾을 수 없습니다.")
        record=self.question_view(json.loads(raw));index_raw=repo.read("questions/index.json",head);index=json.loads(index_raw) if index_raw else []
        path="questions/messages/"+qid+".json";job_id=None
        operation=event.get("operation")
        if operation=="delete":
            files={path:None};index=[x for x in index if x["id"]!=qid]
            for p in repo.list_files("questions/outbox",head):
                job=json.loads(repo.read(p,head))
                if job.get("questionId")==qid:files[p]=None
        elif operation=="update":
            status=event.get("status")
            if status not in ["미확인","확인","답변 완료"]:raise UserError("질문 상태를 확인하세요.")
            reply=text(event.get("reply",""),5000)
            if record.get("mailJobId") and reply!=record.get("adminReply",""):
                old_raw=repo.read("questions/outbox/"+record["mailJobId"]+".json",head)
                if old_raw and json.loads(old_raw).get("status")!="accepted":
                    raise UserError("이전 답변의 발송 결과를 먼저 확인하세요. 재시도 또는 메일 서비스 로그 확인 후 수정할 수 있습니다.")
            changed=bool(reply and reply!=record.get("adminReply",""))
            record.update({"replySchema":2,"status":status,"adminReply":reply,"internalNote":text(event.get("internalNote",record.get("internalNote","")),5000)})
            if changed:
                record["repliedAt"]=now_iso()
                if record.get("email"):
                    email_address(record["email"])
                    if not self.mailer.configured:
                        raise UserError("이메일 발송 Secrets를 먼저 설정하세요. 답변 입력은 유지됩니다.")
                    job_id=rid
                    job={"id":job_id,"questionId":qid,"status":"pending","createdAt":now_iso(),"firstAttemptAt":0,"payload":self.mailer.payload(record,reply)}
                    record.update({"mailJobId":job_id,"mailStatus":"pending"})
                else:
                    record["mailStatus"]="legacy_no_email"
            files={path:json_bytes(record)}
            if job_id:files["questions/outbox/"+job_id+".json"]=json_bytes(job)
            index=[{**x,"status":status} if x["id"]==qid else x for x in index]
        else:raise UserError("질문 관리 작업을 확인하세요.")
        files.update({"questions/index.json":json_bytes(index),marker:json_bytes({"requestId":rid,"mailJobId":job_id})})
        repo.commit(files,head,"Private question update "+rid)
        message=self.deliver_reply(session,qid,job_id) if job_id else "질문 관리를 저장했습니다."
        if operation=="update" and record.get("mailStatus")=="legacy_no_email":message="답변을 저장했습니다. 기존 글에 이메일이 없어 발송하지 않았습니다."
        return self.question_result(repo,qid,message)

    def deliver_reply(self,session,qid,job_id):
        require_admin(session,self.settings.timeout)
        repo=self.private_store();job_path="questions/outbox/"+request_id(job_id)+".json"
        head=repo.head();raw=repo.read(job_path,head);record_path="questions/messages/"+qid+".json"
        record_raw=repo.read(record_path,head)
        if not raw or not record_raw:raise UserError("발송 대기 글을 찾을 수 없습니다.")
        job=json.loads(raw);record=json.loads(record_raw)
        if job.get("questionId")!=qid or record.get("mailJobId")!=job_id:raise UserError("현재 답변의 발송 요청이 아닙니다.")
        if job["status"]=="accepted":return "답변을 저장했습니다. 이메일 발송 요청은 이미 접수되었습니다."
        # Provider idempotency lasts 24 hours; never blindly replay an ambiguous send after that window.
        first=job.get("firstAttemptAt",0)
        if first and time.time()-first>=23*3600:
            return "답변은 저장되어 있습니다. 재시도 안전 시간이 지나 자동 재발송을 중단했습니다. 메일 서비스 로그를 확인하세요."
        if not self.mailer.configured:return "답변은 저장되어 있습니다. 메일 Secrets 설정 후 발송 재시도를 누르세요."
        job.update({"status":"sending","firstAttemptAt":first or time.time()})
        record["mailStatus"]="sending"
        repo.commit({job_path:json_bytes(job),record_path:json_bytes(record)},head,"Claim reply mail "+job_id)
        try:
            provider_id=self.mailer.send(job["payload"],job_id)
            job.update({"status":"accepted","providerId":provider_id,"acceptedAt":now_iso(),"error":""})
            message="답변을 저장했습니다. 이메일 발송 요청이 접수되었습니다. 수신함 도착은 메일 서비스에서 확인하세요."
        except MailFailure as exc:
            job.update({"status":"unknown" if exc.uncertain else "failed","error":str(exc)})
            message="답변은 저장했습니다. 이메일 "+("발송 결과 확인이 필요합니다. " if exc.uncertain else "발송에 실패했습니다. ")+str(exc)
        # Merge delivery status into latest record without overwriting a concurrent admin edit.
        for attempt in range(3):
            try:
                repo=self.private_store();head=repo.head();current_raw=repo.read(record_path,head)
                if not current_raw:return message
                current=json.loads(current_raw)
                files={job_path:json_bytes(job)}
                if current.get("mailJobId")==job_id:
                    current.update({"mailStatus":job["status"],"mailAcceptedAt":job.get("acceptedAt",""),"mailError":job.get("error","")})
                    files[record_path]=json_bytes(current)
                repo.commit(files,head,"Record reply mail result "+job_id)
                return message
            except UserError:
                if attempt==2:return message+" 발송 결과의 GitHub 기록이 지연되었습니다. 같은 발송 요청으로 확인하세요."
        return message

    def question_mail_retry(self,session,event):
        require_admin(session,self.settings.timeout)
        repo=self.private_store();qid=request_id(event.get("questionId"));head=repo.head()
        raw=repo.read("questions/messages/"+qid+".json",head)
        if not raw:raise UserError("질문을 찾을 수 없습니다.")
        record=json.loads(raw);job_id=record.get("mailJobId")
        if not job_id:raise UserError("이 글에는 발송할 이메일 답변이 없습니다.")
        return self.question_result(repo,qid,self.deliver_reply(session,qid,job_id))
    def dispatch(self,session,event,client_key="session"):
        if not isinstance(event,dict):raise UserError("요청 형식을 확인하세요.")
        action=event.get("action")
        if action=="login":
            if not self.configured:raise UserError("관리자 Secrets 설정을 완료하세요.")
            LIMITER.check("login:"+client_key,5,60)
            if not verify_password(str(event.get("password","")),self.settings.password_hash):raise UserError("관리자 코드가 올바르지 않습니다.")
            session["authenticated"]=True;session["last_activity"]=time.time()
            return {"message":"관리자로 로그인했습니다.","admin":self.admin_data(session)}
        if action=="logout":
            for k in ["authenticated","last_activity","private_response","admin_payload","responses"]:session.pop(k,None)
            return {"message":"로그아웃했습니다."}
        if action=="heartbeat":
            authenticated(session,self.settings.timeout)
            return {}
        if action=="activity":
            require_admin(session,self.settings.timeout);return {}
        if action=="admin_load":return {"admin":self.admin_data(session)}
        if action=="cms_save":
            result=self.save(session,event)
            return {**result,"admin":self.admin_data(session)}
        if action=="question_submit":return self.submit_secret(session,event,client_key)
        if action=="questions_list":return self.questions(session)
        if action=="question_detail":return self.question_detail(session,event)
        if action=="question_save":return self.question_save(session,event)
        if action=="question_mail_retry":return self.question_mail_retry(session,event)
        if action=="refresh":
            with self.lock:self.public_cache=None
            return {"message":"최신 게시 정보를 확인했습니다."}
        raise UserError("지원하지 않는 요청입니다.")
