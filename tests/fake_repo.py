"""TEST ONLY: transactional repository emulator. Never used by production app.py."""
import base64
import copy
import json
import uuid
from threading import RLock
from pathlib import Path
from backend.security import UserError


class FakeRepo:
    def __init__(self,files=None,private=False,disk:Path|None=None):
        self.disk=disk
        self.lock=RLock()
        self.is_private=private
        self.fail=False
        self.lose_response=False
        self.head_value="initial"
        self.versions={self.head_value:files or {}}
        if disk and disk.exists():
            state=json.loads(disk.read_text())
            self.head_value=state["head"]
            self.versions={k:{p:base64.b64decode(v) for p,v in entries.items()} for k,entries in state["versions"].items()}

    def persist(self):
        if self.disk:
            self.disk.parent.mkdir(parents=True,exist_ok=True)
            self.disk.write_text(json.dumps({"head":self.head_value,"versions":{k:{p:base64.b64encode(v).decode() for p,v in entries.items()} for k,entries in self.versions.items()}}))

    def private(self):return self.is_private
    def head(self):return self.head_value
    def read(self,path,ref=None):return self.versions[ref or self.head_value].get(path)
    def list_files(self,prefix,ref=None):return [p for p in self.versions[ref or self.head_value] if p.startswith(prefix+"/")]
    def commit(self,files,expected,message):
        with self.lock:
            if self.fail:raise UserError("GitHub 연결 오류 (모의)")
            if self.head_value!=expected:raise UserError("다른 변경과 충돌했습니다.")
            updated=copy.deepcopy(self.versions[self.head_value])
            for p,b in files.items():
                if b is None:updated.pop(p,None)
                else:updated[p]=b
            self.head_value=str(uuid.uuid4());self.versions[self.head_value]=updated;self.persist()
            if self.lose_response:
                self.lose_response=False
                raise UserError("응답이 끊겼습니다. 같은 요청으로 확인하세요.")
            return self.head_value
