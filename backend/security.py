from __future__ import annotations
import base64
import hashlib
import hmac
import secrets
import time
from threading import Lock


class UserError(Exception):
    pass


def hash_password(password: str) -> str:
    if len(password) < 12:
        raise UserError("관리자 코드는 12자 이상으로 정하세요.")
    salt = secrets.token_bytes(16)
    digest = hashlib.scrypt(password.encode(), salt=salt, n=16384, r=8, p=1, dklen=32)
    return "scrypt$16384$8$1$" + salt.hex() + "$" + base64.b64encode(digest).decode()


def verify_password(password: str, encoded: str) -> bool:
    try:
        kind, n, r, p, salt, expected = encoded.split("$")
        if (kind, n, r, p) != ("scrypt", "16384", "8", "1") or len(password) > 512:
            return False
        digest = hashlib.scrypt(password.encode(),salt=bytes.fromhex(salt),n=16384,r=8,p=1,dklen=32)
        return hmac.compare_digest(digest,base64.b64decode(expected,validate=True))
    except (ValueError, TypeError):
        return False


class AttemptLimiter:
    """Process-local supplementary protection, not a distributed anti-spam service."""
    def __init__(self):
        self.values = {}
        self.lock = Lock()

    def check(self, key, limit=5, window=60):
        now=time.time()
        with self.lock:
            self.values = {k:[t for t in v if t > now-window] for k,v in self.values.items() if any(t>now-window for t in v)}
            recent=self.values.setdefault(key,[])
            if len(recent)>=limit:
                raise UserError("요청이 많습니다. 잠시 후 다시 시도하세요.")
            recent.append(now)


LIMITER=AttemptLimiter()


def authenticated(session: dict, timeout: int, touch=False, now=None) -> bool:
    now=time.time() if now is None else now
    if not session.get("authenticated") or now-session.get("last_activity",0) >= timeout:
        session.pop("authenticated",None)
        session.pop("last_activity",None)
        session.pop("private_response",None)
        session.pop("admin_payload",None)
        session.pop("responses",None)
        return False
    if touch:
        session["last_activity"]=now
    return True


def require_admin(session, timeout):
    if not authenticated(session,timeout,touch=True):
        raise UserError("관리자 인증이 필요하거나 만료되었습니다. 다시 로그인하세요.")
