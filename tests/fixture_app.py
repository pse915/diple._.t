"""Isolated browser-test fixture. Its IDs and URLs are synthetic; never deploy this file."""
import sys
from pathlib import Path
import streamlit as st

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from catalog import load_payload

st.set_page_config(layout="wide")
payload = load_payload()
payload["giscus"] = {"enabled": True, "repo": "test-owner/test-comments", "repoId": "R_TEST_ONLY", "category": "Comments", "categoryId": "DIC_TEST_ONLY", "discussionUrls": {}}
payload["apps"][0]["appUrl"] = "https://example.com/test-only"
payload["apps"][0]["githubUrl"] = "https://github.com/test-owner/test-comments"
payload["apps"][0]["guideUrl"] = "javascript:alert('blocked')"
st.components.v2.component("fixture_workshop", html='<div id="workshop-root"></div>', js=(ROOT / "frontend/build/workshop.js").read_text(encoding="utf-8"), css=(ROOT / "frontend/src/styles.css").read_text(encoding="utf-8"))(data=payload,key="fixture")
