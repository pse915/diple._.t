from __future__ import annotations
import copy
import re
from pathlib import Path
from catalog import read_json, validate_apps, web_url
from .security import UserError

SECTION_TYPES={"hero","categories","featured","recent","invite","text"}
ID=re.compile(r"[a-z0-9][a-z0-9_-]{0,79}")


def text(value,limit=5000):
    if not isinstance(value,str) or len(value)>limit or any(ord(c)<32 and c not in "\n\r\t" for c in value):
        raise UserError("문자열 형식 또는 입력 길이를 확인하세요.")
    return value.strip()


def image_path(value):
    value=text(value,220)
    if not value:
        return ""
    if not re.fullmatch(r"assets/[A-Za-z0-9_./-]+\.(png|jpg|jpeg|webp|svg)",value) or ".." in value:
        raise UserError("이미지는 assets 안의 허용된 파일이어야 합니다.")
    return value


def strings(value,limit=50,item_limit=1000):
    if not isinstance(value,list) or len(value)>limit:
        raise UserError("목록 항목 수를 확인하세요.")
    return [text(x,item_limit) for x in value if x!=""]


def initial_document(root:Path):
    site=read_json(root/"config/site.json")
    defaults={
        "brandMark":"a", "topNote":"아이디어를 나눕니다",
        "hero":{"title":"작은 아이디어,\n쓸모 있는 변화.","buttonLabel":"앱 둘러보기","buttonView":"apps","image":"","illustration":True,"note":"오늘의 불편함을\n내일의 도구로.","caption":"조금 더 편한 하루","sticker":"care."},
        "sidebar":{"visible":True,"title":"교실의 작은 변화","body":"하나의 아이디어에서\n쓸모 있는 도구까지."},
        "categoryItems":[{"name":c,"icon":icon,"visible":True} for c,icon in zip(site["categories"],["layers","calendar","game","sun","spark"])],
        "footerVisible":True,
    }
    for key,value in defaults.items():site.setdefault(key,value)
    for key,value in {"image":"","visible":True,"heading":"교실에서 떠올리고,\n직접 만듭니다.","showPrinciples":True,"showInvite":True,"inviteTitle":"함께 만들어 가는 공방","inviteBody":"필요한 도구에 대한 이야기를 들려주세요.","buttonLabel":"질문 남기기"}.items():site["profile"].setdefault(key,value)
    sections=[]
    for key,title,eye in [("hero","작은 아이디어, 쓸모 있는 변화.","TOOLS FOR A BETTER SCHOOL DAY"),("categories","어떤 도구를 찾으세요?","FIND YOUR TOOL"),("featured","먼저 만나보세요","CURATED FOR YOU"),("recent","최근 작업한 앱","FRESH FROM THE WORKSHOP"),("invite","더 좋은 도구는 대화에서 시작돼요.","LET’S TALK")]:
        sections.append({"id":key,"type":key,"title":title,"eyebrow":eye,"body":"앱 사용 중 궁금한 점이나 개선 아이디어를 남겨주세요." if key=="invite" else "","visible":True,"isExample":key=="hero","showExampleBadge":False,"layout":"list" if key=="recent" else "grid","count":3,"columns":3,"image":"","buttonLabel":"질문게시판으로","buttonView":"guestbook"})
    if (root/"config/layout.json").is_file():sections=read_json(root/"config/layout.json")
    apps=read_json(root/"data/apps.json")
    for app in apps:
        app.setdefault("visible",True)
        app.setdefault("showExampleBadge",True)
    return normalize_document({"site":site,"apps":apps,"sections":sections,"trash":[]})


def normalize_document(doc):
    if not isinstance(doc,dict):
        raise UserError("편집 데이터 형식을 확인하세요.")
    site=doc.get("site",{})
    if not isinstance(site,dict):
        raise UserError("사이트 설정 형식을 확인하세요.")
    clean={k:text(site.get(k,""),200 if k!="tagline" else 1000) for k in ["title","brand","brandMark","tagline","footer","topNote"]}
    if not clean["title"]:
        raise UserError("사이트 이름을 입력하세요.")
    clean["footerVisible"]=site.get("footerVisible",True) is True
    items=site.get("categoryItems",[])
    if not isinstance(items,list) or len(items)>20:
        raise UserError("카테고리는 최대 20개입니다.")
    cats=[];seen=set()
    for item in items:
        name=text(item.get("name",""),40)
        if not name or name in seen:
            raise UserError("카테고리 이름이 비어 있거나 중복되었습니다.")
        seen.add(name)
        cats.append({"name":name,"icon":item.get("icon") if item.get("icon") in ["layers","calendar","game","sun","spark","grid","user"] else "spark","visible":item.get("visible",True) is True})
    if "기타" not in seen:
        cats.append({"name":"기타","icon":"spark","visible":True})
    clean["categoryItems"]=cats
    clean["categories"]=[c["name"] for c in cats if c["visible"]]
    profile=site.get("profile",{})
    clean["profile"]={k:text(profile.get(k,""),5000) for k in ["name","role","bio"]}
    clean["profile"].update({"visible":profile.get("visible",True) is True,"image":image_path(profile.get("image","")),"principles":strings(profile.get("principles",[]),20,200)})
    for key in ["heading","inviteTitle","inviteBody","buttonLabel"]:clean["profile"][key]=text(profile.get(key,""),2000)
    for key in ["showPrinciples","showInvite"]:clean["profile"][key]=profile.get(key,True) is True
    links=profile.get("links",[])
    if not isinstance(links,list) or len(links)>20:
        raise UserError("외부 링크 개수를 확인하세요.")
    clean["profile"]["links"]=[]
    for l in links:
        url=text(l.get("url",""),2000)
        if url and not web_url(url):
            raise UserError("외부 링크는 올바른 http/https 주소여야 합니다.")
        clean["profile"]["links"].append({"label":text(l.get("label",""),80),"url":url})
    hero=site.get("hero",{})
    clean["hero"]={k:text(hero.get(k,""),1000) for k in ["title","buttonLabel","note","caption","sticker"]}
    clean["hero"].update({"buttonView":hero.get("buttonView") if hero.get("buttonView") in ["apps","about","guestbook"] else "apps","image":image_path(hero.get("image","")),"illustration":hero.get("illustration",True) is True})
    sidebar=site.get("sidebar",{})
    clean["sidebar"]={"visible":sidebar.get("visible",True) is True,"title":text(sidebar.get("title",""),200),"body":text(sidebar.get("body",""),500)}
    raw=doc.get("apps",[])
    if not isinstance(raw,list) or len(raw)>150:
        raise UserError("앱 목록 형식 또는 개수를 확인하세요.")
    apps,warnings=validate_apps(raw,[c["name"] for c in cats])
    if warnings or len(apps)!=len(raw):
        raise UserError("앱 ID·제목·날짜·주소를 확인하세요. "+" ".join(warnings[:3]))
    for app,source in zip(apps,raw):
        for key in ["title","summary","description","status"]:
            app[key]=text(app[key],10000 if key=="description" else 1000)
        app["visible"]=source.get("visible",True) is True
        app["showExampleBadge"]=source.get("showExampleBadge",True) is True
        app["thumbnail"]=image_path(app["thumbnail"])
        app["screenshots"]=[image_path(p) for p in strings(app["screenshots"],8,220)]
        for key in ["tags","features","targetUsers","supportedDevices","useCases","instructions","changelog"]:
            app[key]=strings(app[key])
    sections=doc.get("sections",[])
    if not isinstance(sections,list) or len(sections)>30:
        raise UserError("홈 섹션은 최대 30개입니다.")
    normalized=[];seen=set()
    for s in sections:
        sid=s.get("id","")
        if not isinstance(sid,str) or not ID.fullmatch(sid) or sid in seen or s.get("type") not in SECTION_TYPES:
            raise UserError("홈 섹션 ID·종류를 확인하세요.")
        seen.add(sid)
        section={k:text(s.get(k,""),2000) for k in ["title","eyebrow","body","buttonLabel"]}
        section.update({"id":sid,"type":s["type"],"visible":s.get("visible",True) is True,"isExample":s.get("isExample",False) is True,"showExampleBadge":s.get("showExampleBadge",False) is True,"layout":"list" if s.get("layout")=="list" else "grid","count":min(20,max(1,int(s.get("count",3)))),"columns":min(4,max(2,int(s.get("columns",3)))),"image":image_path(s.get("image","")),"buttonView":s.get("buttonView") if s.get("buttonView") in ["apps","about","guestbook"] else "guestbook"})
        normalized.append(section)
    trash=doc.get("trash",[])
    if not isinstance(trash,list) or len(trash)>200:
        raise UserError("휴지통 항목을 정리하세요.")
    # Only previously normalized app/section snapshots; never executable content.
    safe_trash=[]
    for entry in trash:
        if not isinstance(entry,dict) or entry.get("kind") not in ["app","section"] or not isinstance(entry.get("value"),dict):
            raise UserError("휴지통 항목 형식을 확인하세요.")
        nested={"site":clean,"apps":[entry["value"]] if entry["kind"]=="app" else [],"sections":[entry["value"]] if entry["kind"]=="section" else [],"trash":[]}
        checked=normalize_document(nested)
        safe_trash.append({"kind":entry["kind"],"value":checked["apps" if entry["kind"]=="app" else "sections"][0]})
    from .boards import normalize_boards, normalize_navigation
    boards=normalize_boards(doc.get("boards",[]))
    board_trash=normalize_boards(doc.get("boardTrash",[]))
    if {b["id"] for b in boards}&{b["id"] for b in board_trash}:
        raise UserError("휴지통과 현재 게시판의 ID가 중복되었습니다.")
    return {"site":clean,"apps":apps,"sections":normalized,"trash":safe_trash,
            "boards":boards,"boardTrash":board_trash,"menuOrder":normalize_navigation(doc.get("menuOrder"),boards)}
