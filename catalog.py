"""Read-only repository catalog. No credentials or runtime writes required."""
from __future__ import annotations

import base64
import json
import math
import re
from datetime import date
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
CATEGORIES = ["수업 도구", "교무 업무", "교육용 게임", "생활 편의", "기타"]


def web_url(value: object) -> str:
    if not isinstance(value, str) or re.search(r"[\x00-\x20\x7f]", value):
        return ""
    try:
        url = urlsplit(value)
        return value if url.scheme in ("https", "http") and url.hostname and not url.username and not url.password else ""
    except ValueError:
        return ""


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8-sig"))


def local_image(value: object, root: Path = ROOT) -> str:
    if not isinstance(value, str) or not value:
        return ""
    try:
        path = (root / value).resolve()
    except (OSError, ValueError):
        return ""
    allowed = (root / "assets").resolve()
    if not path.is_relative_to(allowed) or not path.is_file():
        return ""
    mime = {".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp"}.get(path.suffix.lower())
    if not mime or path.stat().st_size > 5 * 1024 * 1024:
        return ""
    return f"data:{mime};base64,{base64.b64encode(path.read_bytes()).decode('ascii')}"


def validate_apps(raw: object, categories: list[str] = CATEGORIES) -> tuple[list[dict], list[str]]:
    if not isinstance(raw, list):
        raise ValueError("apps.json의 최상위 값은 배열이어야 합니다.")
    apps, warnings, seen = [], [], set()
    for index, item in enumerate(raw):
        label = f"앱 {index + 1}"
        if not isinstance(item, dict):
            warnings.append(f"{label}: 객체가 아니므로 제외했습니다.")
            continue
        app_id = item.get("id", "")
        if not isinstance(app_id, str) or not re.fullmatch(r"[a-z0-9][a-z0-9_-]{0,79}", app_id) or app_id in seen:
            warnings.append(f"{label}: id가 잘못되었거나 중복되어 제외했습니다.")
            continue
        if not isinstance(item.get("title"), str) or not item["title"].strip():
            warnings.append(f"{label}: 제목이 없어 제외했습니다.")
            continue
        seen.add(app_id)
        app = {"id": app_id, "title": item["title"].strip()}
        for field in ["summary", "description", "thumbnail", "status"]:
            app[field] = item.get(field, "") if isinstance(item.get(field, ""), str) else ""
        for field in ["tags", "screenshots", "features", "targetUsers", "supportedDevices", "useCases", "instructions", "changelog"]:
            value = item.get(field, [])
            app[field] = [v for v in value if isinstance(v, str)] if isinstance(value, list) else []
        app["category"] = item.get("category") if item.get("category") in categories else "기타"
        app["featured"] = item.get("featured") is True
        app["isExample"] = item.get("isExample") is True
        order = item.get("sortOrder", 999)
        app["sortOrder"] = order if type(order) in (int, float) and math.isfinite(order) else 999
        for field in ["appUrl", "githubUrl", "guideUrl"]:
            app[field] = web_url(item.get(field, ""))
            if item.get(field) and not app[field]:
                warnings.append(f"{app_id}: {field} 주소를 사용할 수 없어 숨겼습니다.")
        try:
            app["updatedAt"] = date.fromisoformat(item.get("updatedAt", "")).isoformat()
        except (TypeError, ValueError):
            app["updatedAt"] = ""
            warnings.append(f"{app_id}: updatedAt은 YYYY-MM-DD 형식이어야 합니다.")
        apps.append(app)
    return apps, warnings


def load_payload(root: Path = ROOT) -> dict:
    site = read_json(root / "config/site.json")
    if not isinstance(site, dict) or not isinstance(site.get("title"), str):
        raise ValueError("site.json의 title 설정을 확인하세요.")
    categories = site.get("categories", CATEGORIES)
    if not isinstance(categories, list) or not categories or any(not isinstance(c, str) for c in categories):
        raise ValueError("categories는 비어 있지 않은 문자열 배열이어야 합니다.")
    site["categories"] = list(dict.fromkeys([*categories, "기타"]))
    site.setdefault("brand", "APP ATELIER")
    site.setdefault("tagline", "")
    site.setdefault("footer", "")
    profile = site.get("profile") if isinstance(site.get("profile"), dict) else {}
    for key, default in [("name", "제작자"), ("role", ""), ("bio", "")]:
        if not isinstance(profile.get(key), str):
            profile[key] = default
    profile["principles"] = [v for v in profile.get("principles", []) if isinstance(v, str)] if isinstance(profile.get("principles", []), list) else []
    links = profile.get("links", [])
    profile["links"] = [{"label": str(link.get("label", "외부 링크")), "url": web_url(link.get("url"))} for link in links if isinstance(link, dict) and web_url(link.get("url"))] if isinstance(links, list) else []
    site["profile"] = profile
    apps, warnings = validate_apps(read_json(root / "data/apps.json"), site["categories"])
    for app in apps:
        app["thumbnail"] = local_image(app["thumbnail"], root)
        app["screenshots"] = [local_image(value, root) for value in app["screenshots"]]
    try:
        giscus = read_json(root / "config/giscus.json")
        if not isinstance(giscus, dict):
            raise ValueError("객체가 필요합니다")
    except (OSError, ValueError) as exc:
        giscus = {}
        warnings.append(f"댓글 설정을 읽지 못해 댓글을 비활성화했습니다: {exc}")
    required = ["repo", "repoId", "category", "categoryId"]
    for key in required:
        if not isinstance(giscus.get(key), str):
            giscus[key] = ""
    enabled = giscus.get("enabled") is True and all(isinstance(giscus.get(k), str) and giscus[k].strip() for k in required)
    enabled = enabled and bool(re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", giscus.get("repo", "")))
    urls = giscus.get("discussionUrls", {})
    safe_discussions = {}
    if isinstance(urls, dict):
        for key, value in urls.items():
            if web_url(value) and re.fullmatch(r"https://github\.com/" + re.escape(giscus.get("repo", "")) + r"/discussions/\d+", value):
                safe_discussions[str(key)] = value
    if giscus.get("enabled") and not enabled:
        warnings.append("댓글 식별값이 불완전하여 댓글을 비활성화했습니다.")
    return {"site": site, "apps": apps, "warnings": warnings, "giscus": {"enabled": bool(enabled), **{k: giscus.get(k, "") for k in required}, "discussionUrls": safe_discussions}}
