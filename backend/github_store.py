"""GitHub adapter: immutable commit reads and atomic fast-forward publication."""
from __future__ import annotations
import base64
import json
import re
from urllib.parse import quote
import requests
from .security import UserError


class GitHubRepo:
    def __init__(self, repository: str, branch: str, token: str = "", transport=None):
        if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+",repository):
            raise UserError("GitHub 저장소는 계정/저장소 형식으로 설정하세요.")
        if not branch or ".." in branch or not re.fullmatch(r"[A-Za-z0-9_./-]+",branch):
            raise UserError("브랜치 설정을 확인하세요.")
        self.repository,self.branch,self.token=repository,branch,token
        self.http=transport or requests.Session()

    def api(self, method, suffix="", **kwargs):
        headers={"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"}
        if self.token:
            headers["Authorization"]="Bearer "+self.token
        try:
            response=self.http.request(method,"https://api.github.com/repos/"+self.repository+suffix,headers=headers,timeout=(5,20),allow_redirects=False,**kwargs)
        except requests.RequestException:
            raise UserError("GitHub 연결이 지연되었습니다. 입력을 유지하고 다시 확인하세요.") from None
        if response.status_code==404:
            return None
        if response.status_code in (409,422):
            raise UserError("다른 변경과 충돌했습니다. 최신본을 불러온 뒤 변경을 다시 적용하세요.")
        if response.status_code in (401,403,429):
            raise UserError("GitHub 토큰·권한 또는 API 사용 제한을 확인하세요.")
        if not 200<=response.status_code<300:
            raise UserError("GitHub 저장 결과를 확인하지 못했습니다. 새로고침 후 다시 확인하세요.")
        try:
            return response.json()
        except ValueError:
            raise UserError("GitHub 응답 형식을 확인하지 못했습니다.") from None

    def private(self):
        result=self.api("GET")
        return bool(result and result.get("private") is True)

    def head(self):
        result=self.api("GET","/git/ref/heads/"+quote(self.branch,safe="/"))
        if not result:
            raise UserError("저장소에 README를 먼저 만들고 브랜치를 확인하세요.")
        return result["object"]["sha"]

    @staticmethod
    def path(path):
        if not isinstance(path,str) or not re.fullmatch(r"[A-Za-z0-9_./-]+",path) or path.startswith("/") or any(p in (".","..","") for p in path.split("/")):
            raise UserError("허용되지 않은 저장 경로입니다.")
        return quote(path,safe="/")

    def read(self, path, ref=None):
        result=self.api("GET","/contents/"+self.path(path),params={"ref":ref or self.head()})
        if not result:
            return None
        if not isinstance(result,dict) or result.get("type")!="file":
            raise UserError("데이터 파일 형식을 확인하세요.")
        content=result.get("content","")
        if result.get("encoding")=="none" or not content:
            blob=self.api("GET","/git/blobs/"+result["sha"])
            content=blob["content"]
        return base64.b64decode(content)

    def list_files(self, prefix, ref=None):
        ref=ref or self.head()
        # Git trees avoids the Contents directory endpoint's 1000-entry cap.
        commit=self.api("GET","/git/commits/"+ref)
        tree=self.api("GET","/git/trees/"+commit["tree"]["sha"],params={"recursive":"1"})
        if tree.get("truncated"):
            raise UserError("질문 저장소가 커졌습니다. 분할 보관 후 다시 시도하세요.")
        return [x["path"] for x in tree["tree"] if x["type"]=="blob" and x["path"].startswith(prefix+"/")]

    def commit(self, files: dict[str,bytes|None], expected: str, message: str):
        if not self.token:
            raise UserError("GitHub 쓰기 토큰을 설정하세요.")
        if self.head()!=expected:
            raise UserError("다른 변경과 충돌했습니다. 최신본을 불러온 뒤 다시 적용하세요.")
        parent=self.api("GET","/git/commits/"+expected)
        entries=[]
        for path, content in files.items():
            self.path(path)
            if content is None:
                sha=None
            else:
                blob=self.api("POST","/git/blobs",json={"content":base64.b64encode(content).decode(),"encoding":"base64"})
                sha=blob["sha"]
            entries.append({"path":path,"mode":"100644","type":"blob","sha":sha})
        tree=self.api("POST","/git/trees",json={"base_tree":parent["tree"]["sha"],"tree":entries})
        commit=self.api("POST","/git/commits",json={"message":message,"tree":tree["sha"],"parents":[expected]})
        # If another writer won since the first check, this sibling commit cannot fast-forward.
        result=self.api("PATCH","/git/refs/heads/"+quote(self.branch,safe="/"),json={"sha":commit["sha"],"force":False})
        if not result or result.get("object",{}).get("sha")!=commit["sha"]:
            raise UserError("저장 결과를 확인하지 못했습니다. 최신 데이터를 확인하세요.")
        return commit["sha"]


def json_bytes(value):
    return json.dumps(value,ensure_ascii=False,indent=2,allow_nan=False).encode()
