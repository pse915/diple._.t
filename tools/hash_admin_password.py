"""Run from project root: python tools/hash_admin_password.py"""
import getpass
from pathlib import Path
import sys
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from backend.security import hash_password
if __name__=="__main__":
    password=getpass.getpass("새 관리자 코드 (12자 이상): ")
    if password!=getpass.getpass("한 번 더 입력: "):
        raise SystemExit("입력이 다릅니다.")
    print('ADMIN_PASSWORD_HASH = "'+hash_password(password)+'"')
