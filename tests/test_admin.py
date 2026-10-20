import base64
import copy
import io
import json
from pathlib import Path
import sys
import tempfile
import time
import unittest
import uuid
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT));sys.path.insert(0,str(ROOT/"tests"))
from backend.service import Service,Settings
from backend.security import UserError,hash_password,verify_password,authenticated,LIMITER
from backend.github_store import GitHubRepo
from fake_repo import FakeRepo


class AdministrationTests(unittest.TestCase):
    def setUp(self):
        LIMITER.values.clear()
        files={str(p.relative_to(ROOT)).replace("\\","/"):p.read_bytes() for p in (ROOT/"assets").glob("*") if p.is_file()}
        self.public=FakeRepo(files)
        self.private=FakeRepo(private=True)
        self.settings=Settings(token="test",password_hash=hash_password("Test-admin-code-2026!"),public_repo="test/public",private_repo="test/private",timeout=60)
        self.service=Service(self.settings,ROOT,self.public,self.private)
        self.session={}

    def login(self):return self.service.dispatch(self.session,{"action":"login","password":"Test-admin-code-2026!"},"test")
    def event(self,op,doc=None,**kwargs):
        return {"action":"cms_save","id":str(uuid.uuid4()),"operation":op,"head":self.public.head(),"document":doc or self.service.admin_data(self.session)["document"],"uploads":[],**kwargs}
    def secret(self,**kwargs):
        return {"action":"question_submit","id":str(uuid.uuid4()),"title":"비공개 테스트 제목","content":"절대로 공개 전송하면 안 되는 테스트 본문","nickname":"테스트",**kwargs}

    def test_password_and_login_throttling(self):
        self.assertTrue(verify_password("Test-admin-code-2026!",self.settings.password_hash))
        self.assertFalse(verify_password("wrong",self.settings.password_hash))
        for _ in range(5):
            with self.assertRaises(UserError):self.service.dispatch({}, {"action":"login","password":"wrong"},"limited")
        with self.assertRaisesRegex(UserError,"요청이 많"):
            self.service.dispatch({}, {"action":"login","password":"Test-admin-code-2026!"},"limited")

    def test_all_admin_requests_denied_without_authentication(self):
        for action in ["admin_load","cms_save","questions_list","question_detail","question_save","activity"]:
            with self.subTest(action=action),self.assertRaises(UserError):
                self.service.dispatch({"isAdmin":True},{"action":action,"id":str(uuid.uuid4())})

    def test_sessions_expire_and_logout_scrubs_private_state(self):
        self.login()
        self.assertFalse(authenticated({},60))
        self.session["private_response"]={"secret":"private"}
        self.session["last_activity"]=time.time()-61
        self.assertFalse(authenticated(self.session,60))
        self.assertNotIn("private_response",self.session)
        self.login();self.service.dispatch(self.session,{"action":"logout"})
        self.assertNotIn("authenticated",self.session)

    def test_draft_is_not_public_then_publish_and_restore(self):
        self.login();doc=self.service.admin_data(self.session)["document"]
        original=doc["site"]["title"];doc["site"]["title"]="초안 변경"
        self.service.dispatch(self.session,self.event("draft",doc))
        self.assertEqual(self.service.public_payload()["site"]["title"],original)
        self.service.dispatch(self.session,self.event("publish",doc))
        self.assertEqual(self.service.public_payload()["site"]["title"],"초안 변경")
        data=self.service.admin_data(self.session)
        self.service.dispatch(self.session,self.event("restore",version=data["history"][0]["id"]))
        self.assertEqual(self.service.admin_data(self.session)["document"]["site"]["title"],original)
        self.assertEqual(self.service.public_payload()["site"]["title"],"초안 변경")

    def test_concurrent_edits_and_duplicate_commit(self):
        self.login();event=self.event("publish")
        self.service.dispatch(self.session,event)
        count=len(self.public.versions)
        self.service.dispatch(self.session,event)
        self.assertEqual(len(self.public.versions),count)
        with self.assertRaisesRegex(UserError,"충돌"):
            self.service.dispatch(self.session,{**event,"id":str(uuid.uuid4())})

    def test_successful_commit_with_lost_response_is_idempotent(self):
        self.login();event=self.event("publish")
        self.public.lose_response=True
        with self.assertRaises(UserError):self.service.dispatch(self.session,event)
        count=len(self.public.versions)
        self.service.dispatch(self.session,event)
        self.assertEqual(len(self.public.versions),count)

    def test_image_upload_and_json_in_same_commit(self):
        self.login();doc=self.service.admin_data(self.session)["document"]
        buffer=io.BytesIO();Image.new("RGB",(32,32),"red").save(buffer,"PNG")
        upload_id=str(uuid.uuid4());doc["apps"][0]["thumbnail"]="upload:"+upload_id
        self.service.dispatch(self.session,self.event("publish",doc,uploads=[{"id":upload_id,"data":base64.b64encode(buffer.getvalue()).decode()}]))
        state=json.loads(self.public.read("data/cms.json"))
        path=state["published"]["apps"][0]["thumbnail"]
        self.assertIsNotNone(self.public.read(path))
        self.assertTrue(path.endswith(".webp"))
        self.assertTrue(self.service.public_payload()["apps"][0]["thumbnail"].startswith("data:image/webp"))

    def test_fake_image_and_unsafe_link_rejected_without_write(self):
        self.login();before=self.public.head();doc=self.service.admin_data(self.session)["document"]
        with self.assertRaises(UserError):self.service.dispatch(self.session,self.event("draft",doc,uploads=[{"id":str(uuid.uuid4()),"data":base64.b64encode(b"<script>").decode()}]))
        doc["apps"][0]["appUrl"]="javascript:alert(1)"
        with self.assertRaises(UserError):self.service.dispatch(self.session,self.event("publish",doc))
        self.assertEqual(before,self.public.head())

    def test_hiding_examples_trash_and_section_order(self):
        self.login();doc=self.service.admin_data(self.session)["document"]
        removed=doc["apps"].pop(0);doc["trash"].append({"kind":"app","value":removed})
        doc["apps"][0]["visible"]=False
        doc["sections"].reverse();doc["sections"][0]["visible"]=False
        self.service.dispatch(self.session,self.event("publish",doc))
        p=self.service.public_payload()
        self.assertEqual(len(p["apps"]),4);self.assertNotIn("trash",p)
        self.assertEqual(p["sections"][0]["id"],doc["sections"][1]["id"])
        draft=self.service.admin_data(self.session)["document"]
        draft["apps"].append(draft["trash"].pop()["value"])
        self.service.dispatch(self.session,self.event("draft",draft))
        self.assertEqual(len(self.service.admin_data(self.session)["document"]["apps"]),6)

    def test_secret_content_never_enters_public_repository_or_payload(self):
        event=self.secret(appId="classroom-notebook")
        result=self.service.dispatch({},event,"writer")
        self.assertEqual(set(result),{"message","receipt"})
        self.assertNotIn(event["content"],json.dumps(self.service.public_payload(),ensure_ascii=False))
        self.assertFalse(any("questions" in p for p in self.public.versions[self.public.head()]))
        self.login();questions=self.service.dispatch(self.session,{"action":"questions_list"})
        self.assertEqual(questions["questions"][0]["content"],event["content"])
        detail=self.service.dispatch(self.session,{"action":"question_detail","questionId":result["receipt"]})
        self.assertEqual(detail["question"]["appTitle"],"수업 기록 노트")

    def test_private_repository_must_remain_private_and_app_is_valid(self):
        self.private.is_private=False
        with self.assertRaises(UserError):self.service.dispatch({},self.secret())
        self.private.is_private=True
        with self.assertRaises(UserError):self.service.dispatch({},self.secret(appId="not-an-app"))

    def test_secret_duplicate_and_rate_limit(self):
        event=self.secret();session={}
        self.service.dispatch(session,event,"writer")
        count=len(self.private.versions)
        self.service.dispatch(session,event,"writer")
        self.assertEqual(len(self.private.versions),count)
        with self.assertRaisesRegex(UserError,"연속 제출"):
            self.service.dispatch(session,self.secret(),"writer")

    def test_private_reply_delete_and_conflict(self):
        receipt=self.service.dispatch({},self.secret(),"writer")["receipt"]
        self.login();head=self.private.head()
        event={"action":"question_save","id":str(uuid.uuid4()),"questionId":receipt,"privateHead":head,"operation":"update","status":"답변 완료","reply":"비공개 메모"}
        self.service.dispatch(self.session,event)
        with self.assertRaises(UserError):self.service.dispatch(self.session,{**event,"id":str(uuid.uuid4())})
        self.assertNotIn("비공개 메모",json.dumps(self.service.public_payload(),ensure_ascii=False))
        self.service.dispatch(self.session,{**event,"id":str(uuid.uuid4()),"privateHead":self.private.head(),"operation":"delete"})
        self.assertEqual(self.service.questions(self.session)["questions"],[])

    def test_repository_survives_new_service_and_disk_reload(self):
        self.login();doc=self.service.admin_data(self.session)["document"];doc["site"]["title"]="재시작 유지"
        self.service.dispatch(self.session,self.event("publish",doc))
        with tempfile.TemporaryDirectory() as directory:
            path=Path(directory)/"repository.json";self.public.disk=path;self.public.persist()
            restored=FakeRepo(disk=path)
            new_service=Service(self.settings,ROOT,restored,self.private)
            self.assertEqual(new_service.public_payload()["site"]["title"],"재시작 유지")

    def test_fixed_server_paths(self):
        for bad in ["../secret.json","assets/../../app.py","/absolute","data//double"]:
            with self.assertRaises(UserError):GitHubRepo.path(bad)
        with self.assertRaises(UserError):Settings.from_mapping({"PUBLIC_REPO":"a/b","PRIVATE_REPO":"a/b"})
        with self.assertRaises(UserError):Settings.from_mapping({"PUBLIC_REPO":"A/B","PRIVATE_REPO":"a/b"})

    def test_failure_preserves_previous_publication(self):
        self.login();doc=self.service.admin_data(self.session)["document"];doc["site"]["title"]="반영되면 안 됨";self.public.fail=True
        with self.assertRaises(UserError):self.service.dispatch(self.session,self.event("publish",doc))
        self.assertNotEqual(self.service.public_payload()["site"]["title"],"반영되면 안 됨")


if __name__=="__main__":unittest.main(verbosity=2)
