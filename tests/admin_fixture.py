"""TEST ONLY: no real GitHub credentials. Deploy app.py, never this file."""
from pathlib import Path
import os
import sys
import streamlit as st
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
sys.path.insert(0,str(ROOT/"tests"))
from backend.service import Service,Settings
from backend.security import hash_password
from fake_repo import FakeRepo
from app import run

@st.cache_resource
def fixture_service():
    files={str(p.relative_to(ROOT)).replace("\\","/"):p.read_bytes() for p in (ROOT/"assets").glob("*") if p.is_file()}
    disk=Path(os.environ["TEST_STORE_DIR"]) if os.environ.get("TEST_STORE_DIR") else None
    public=FakeRepo(files,disk=disk/"public.json" if disk else None)
    private=FakeRepo(private=True,disk=disk/"private.json" if disk else None)
    settings=Settings(token="TEST_ONLY_NOT_A_TOKEN",password_hash=hash_password("Test-admin-code-2026!"),public_repo="test-owner/public",private_repo="test-owner/private",timeout=int(os.environ.get("TEST_AUTH_TIMEOUT","1800")))
    return Service(settings,ROOT,public,private)

run(fixture_service())
