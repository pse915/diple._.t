"""Validated public boards and navigation; no executable templates or client paths."""
from datetime import date
from catalog import web_url
from .model import text, strings, ID
from .security import UserError

BUILTIN_MENUS=["home","apps","about","guestbook"]


def normalize_boards(value):
    if not isinstance(value,list) or len(value)>20:
        raise UserError("게시판은 최대 20개입니다.")
    result=[];seen=set();total=0
    for board in value:
        if not isinstance(board,dict):raise UserError("게시판 형식을 확인하세요.")
        bid=board.get("id","")
        if not isinstance(bid,str) or not ID.fullmatch(bid) or bid in seen:
            raise UserError("게시판 ID가 올바르지 않거나 중복되었습니다.")
        seen.add(bid)
        title=text(board.get("title",""),80)
        if not title:raise UserError("게시판 이름을 입력하세요.")
        posts=board.get("posts",[])
        if not isinstance(posts,list) or len(posts)>200:raise UserError("게시판별 글은 최대 200개입니다.")
        total+=len(posts)
        if total>1000:raise UserError("게시글은 전체 1,000개 이내로 관리하세요.")
        clean_posts=[];post_ids=set()
        for post in posts:
            if not isinstance(post,dict):raise UserError("게시글 형식을 확인하세요.")
            pid=post.get("id","")
            if not isinstance(pid,str) or not ID.fullmatch(pid) or pid in post_ids:
                raise UserError("게시글 ID가 올바르지 않거나 중복되었습니다.")
            post_ids.add(pid)
            name=text(post.get("title",""),150)
            if not name:raise UserError("게시글 제목을 입력하세요.")
            updated=text(post.get("updatedAt",""),10)
            if updated:
                try:
                    if date.fromisoformat(updated).isoformat()!=updated:raise ValueError()
                except ValueError:raise UserError("게시글 날짜는 YYYY-MM-DD 형식으로 입력하세요.") from None
            links=post.get("links",[])
            if not isinstance(links,list) or len(links)>10:raise UserError("게시글 자료 링크는 최대 10개입니다.")
            clean_links=[]
            for link in links:
                if not isinstance(link,dict):raise UserError("자료 링크 형식을 확인하세요.")
                url=text(link.get("url",""),2000);label=text(link.get("label",""),100)
                if not url or not web_url(url):raise UserError("자료 링크는 올바른 http/https 주소를 입력하세요.")
                clean_links.append({"label":label or "자료 열기","url":url})
            clean_posts.append({"id":pid,"title":name,"summary":text(post.get("summary",""),1000),
                "content":text(post.get("content",""),30000),"tags":strings(post.get("tags",[]),20,50),
                "links":clean_links,"updatedAt":updated,"visible":post.get("visible",True) is True,
                "pinned":post.get("pinned",False) is True,"deleted":post.get("deleted",False) is True})
        result.append({"id":bid,"title":title,"description":text(board.get("description",""),2000),
            "icon":board.get("icon") if board.get("icon") in ["layers","calendar","grid","user","chat","spark"] else "layers",
            "layout":"grid" if board.get("layout")=="grid" else "list",
            "visible":board.get("visible",True) is True,"posts":clean_posts})
    return result


def normalize_navigation(value,boards):
    known=BUILTIN_MENUS+["board:"+b["id"] for b in boards]
    if value is None:value=known
    if not isinstance(value,list) or len(value)>24 or any(not isinstance(x,str) or x not in known for x in value) or len(set(value))!=len(value):
        raise UserError("메뉴 순서 또는 게시판 연결을 확인하세요.")
    return value+[x for x in known if x not in value]
