"""Create a deployable ZIP without development caches or node_modules."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT.parent / "outputs" / "diplet-admin-cms-v2.zip"
OUT.parent.mkdir(exist_ok=True)
EXCLUDED = {"node_modules", "__pycache__", ".git", ".pytest_cache", "test-results", "playwright-report"}
files = sorted(p for p in ROOT.rglob("*") if p.is_file() and not any(part in EXCLUDED for part in p.relative_to(ROOT).parts) and p.name not in ("secrets.toml", "manifest.json") and not p.name.endswith(".log"))
manifest = {str(p.relative_to(ROOT)).replace("\\", "/"): {"bytes":p.stat().st_size,"sha256":hashlib.sha256(p.read_bytes()).hexdigest()} for p in files}
(ROOT / "verification/manifest.json").write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding="utf-8")
with ZipFile(OUT,"w",ZIP_DEFLATED) as archive:
    for file in files:
        archive.write(file,file.relative_to(ROOT))
    archive.write(ROOT / "verification/manifest.json", "verification/manifest.json")
with ZipFile(OUT) as archive:
    assert archive.testzip() is None
    assert all(name in archive.namelist() for name in ["app.py","catalog.py","requirements.txt","frontend/build/workshop.js","frontend/package-lock.json",".streamlit/config.toml","data/apps.json","README.md"])
print(json.dumps({"file":str(OUT),"files":len(files)+1,"bytes":OUT.stat().st_size,"sha256":hashlib.sha256(OUT.read_bytes()).hexdigest()},ensure_ascii=False))
