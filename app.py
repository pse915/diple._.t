"""Streamlit Cloud entry point with a server-only event API."""
from pathlib import Path
import hashlib
import uuid
import streamlit as st
from backend.service import Service, Settings
from backend.security import UserError, authenticated

ROOT=Path(__file__).resolve().parent


@st.cache_resource
def production_service():
    try:
        secrets=dict(st.secrets)
    except Exception:
        secrets={}
    return Service(Settings.from_mapping(secrets),ROOT)


def run(service=None):
    st.set_page_config(page_title="기술교사의 앱 공방",page_icon="✳",layout="wide")
    try:
        service=service or production_service()
        payload=service.public_payload()
        js=(ROOT/"frontend/build/workshop.js").read_text(encoding="utf-8")
        css=(ROOT/"frontend/src/styles.css").read_text(encoding="utf-8")+(ROOT/"frontend/src/admin.css").read_text(encoding="utf-8")
    except (UserError,OSError,ValueError):
        st.error("홈페이지 데이터를 불러오지 못했습니다. GitHub 연결과 설정을 확인하고 새로고침하세요.")
        st.stop()
    state=st.session_state.setdefault("server_state",{})
    state.setdefault("session_id",str(uuid.uuid4()))
    is_admin=authenticated(state,service.settings.timeout)
    if not is_admin and state.get("response_private"):
        state.pop("response",None)
        state.pop("response_private",None)
    payload["access"]={"authenticated":is_admin,"adminConfigured":service.configured,"privateConfigured":bool(service.private_repo and service.settings.token),"expiresAt":int((state.get("last_activity",0)+service.settings.timeout)*1000) if is_admin else 0}
    payload["response"]=state.get("response")
    st.html("""<style>header[data-testid="stHeader"]{display:none}[data-testid="stMainBlockContainer"]{padding:0;max-width:none}[data-testid="stMain"]{overflow-x:clip}[data-testid="stVerticalBlock"]{gap:0}</style>""")
    component=st.components.v2.component("app_workshop",html=" ",js=js,css=css,isolate_styles=True)
    result=component(data=payload,key="workshop",height="content",on_event_change=lambda:None)
    event=result.event
    if not isinstance(event,dict):
        state.pop("handled_event",None)
    if isinstance(event,dict) and event.get("id")!=state.get("handled_event"):
        state["handled_event"]=event.get("id")
        try:
            ip=st.context.ip_address or state["session_id"]
            client_key=hashlib.sha256(str(ip).encode()).hexdigest()
            response=service.dispatch(state,event,client_key)
            state["response"]={"id":event.get("id"),"ok":True,"result":response}
        except (UserError,ValueError,TypeError,KeyError) as error:
            message=str(error) if isinstance(error,UserError) else "요청 데이터를 확인하세요. 입력 내용은 유지됩니다."
            state["response"]={"id":event.get("id"),"ok":False,"error":message}
        except Exception:
            state["response"]={"id":event.get("id"),"ok":False,"error":"처리 중 오류가 발생했습니다. 저장 여부를 확인한 뒤 다시 시도하세요."}
        state["response_private"]=bool(state.get("authenticated") and event.get("action") not in ["question_submit","refresh","heartbeat","activity"])
        st.rerun()


if __name__=="__main__":
    run()
