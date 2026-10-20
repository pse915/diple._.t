"""Create original illustrative previews and explicitly labeled example content."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
ASSETS.mkdir(exist_ok=True)
items = [
    ("classroom-notebook", "수업 기록 노트", "수업 도구", "학생의 생각과 배움의 과정을 한곳에 모으는 포트폴리오.", ["포트폴리오", "수업 기록"], "#dce7db", "#56745b", "01", ["주차별 활동 기록", "학생별 학습 과정 확인", "피드백을 통한 성장 기록"]),
    ("school-timetable", "우리 학교 시간표", "교무 업무", "복잡한 시간표와 수업 변경을 조금 더 간편하게.", ["시간표", "업무 효율"], "#e6dfd4", "#8b7054", "02", ["교사별 시간표 조회", "수업 변경 확인", "변경 내역 안내"]),
    ("future-diary", "미래 다이어리", "교육용 게임", "선택으로 만나는 미래, 생애설계를 경험하는 작은 마을.", ["생애설계", "픽셀 RPG"], "#ead9ce", "#a67258", "03", ["생애설계 선택 체험", "미래 마을 탐험", "활동 후 생각 정리"]),
    ("lab-inventory", "기술실 도구함", "교무 업무", "기자재 현황부터 대여 기록까지, 기술실의 정돈된 일상.", ["기자재", "업무 효율"], "#dce4e9", "#5f7c8c", "04", ["기자재 목록 조회", "대여와 반납 기록", "수리 필요 항목 확인"]),
    ("lesson-planner", "오늘의 수업 설계", "수업 도구", "학습 목표와 활동을 연결하고 수업의 흐름을 정리해요.", ["수업 설계", "활동"], "#e9e3c9", "#8a7e48", "05", ["수업 목표 정리", "활동 순서 구성", "수업 후 성찰 기록"]),
    ("daily-check", "하루 정리 체크", "생활 편의", "작은 할 일을 가볍게 적고, 하루를 차분하게 마무리해요.", ["체크리스트", "일상"], "#e5deeb", "#83708b", "06", ["할 일 목록 정리", "중요한 일정 표시", "완료한 활동 돌아보기"]),
]


def svg_preview(title, bg, ink, number, variant=0):
    rows = "".join(f'<rect x="{277+c*65}" y="{240+r*45}" width="56" height="36" rx="5" fill="{ink if (r+c+variant)%3==0 else bg}" opacity="{.85 if (r+c+variant)%3==0 else 1}"/>' for r in range(3) for c in range(5))
    if number == "03":
        rows = '<rect x="278" y="233" width="318" height="143" rx="6" fill="#d7dfc0"/>'
        for x,y in [(310,255),(385,285),(465,250),(545,310)]:
            rows += f'<rect x="{x}" y="{y}" width="33" height="27" fill="#fff1d5"/><path d="m{x-5} {y} 21-20 21 20Z" fill="#b97f62"/><rect x="{x+13}" y="{y+12}" width="8" height="15" fill="#94846a"/>'
        rows += '<path d="M278 345h318M436 233v143" stroke="#e8cba5" stroke-width="16"/><rect x="428" y="322" width="10" height="15" fill="#6b6f80"/>'
    if number in ("01","04","06"):
        rows=''.join(f'<rect x="278" y="{239+r*43}" width="315" height="34" rx="6" fill="{bg}"/><rect x="291" y="{250+r*43}" width="11" height="11" rx="3" fill="{ink}"/><rect x="315" y="{250+r*43}" width="{140-r*22}" height="6" rx="3" fill="{ink}" opacity=".4"/>' for r in range(3))
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">
<rect width="960" height="600" fill="{bg}"/><circle cx="815" cy="70" r="210" fill="{ink}" opacity=".07"/><circle cx="75" cy="540" r="160" fill="#fff" opacity=".17"/>
<text x="57" y="77" font-family="Arial,sans-serif" font-size="14" fill="{ink}" letter-spacing="3">APP ATELIER / COLLECTION {number}</text>
<g transform="translate(63 111) rotate(-3 410 210)"><rect x="98" y="26" width="600" height="378" rx="20" fill="{ink}" opacity=".13"/><rect x="85" y="13" width="600" height="378" rx="18" fill="#fdfcf9"/>
<rect x="85" y="13" width="138" height="378" rx="18" fill="{ink}"/><rect x="201" y="13" width="22" height="378" fill="{ink}"/>
<circle cx="117" cy="47" r="4" fill="#fff" opacity=".7"/><circle cx="133" cy="47" r="4" fill="#fff" opacity=".4"/><circle cx="149" cy="47" r="4" fill="#fff" opacity=".25"/>
<text x="108" y="112" fill="#fff" font-family="Arial,sans-serif" font-size="18" font-weight="bold">atelier.</text>
<rect x="105" y="143" width="98" height="29" rx="6" fill="#fff" opacity=".2"/>
<path d="M116 157h65m-65 42h51m-51 36h60m-60 36h39" stroke="#fff" stroke-width="5" opacity=".5" stroke-linecap="round"/>
<text x="257" y="69" fill="{ink}" font-family="Arial,sans-serif" font-size="12" letter-spacing="2">YOUR EVERYDAY TOOL</text>
<text x="257" y="111" fill="#383d35" font-family="Malgun Gothic, sans-serif" font-size="27" font-weight="bold">{title}</text>
<rect x="257" y="138" width="375" height="63" rx="9" fill="{bg}"/><rect x="277" y="156" width="125" height="7" rx="3" fill="{ink}" opacity=".6"/><rect x="277" y="175" width="210" height="5" rx="3" fill="{ink}" opacity=".25"/>
{rows}</g>
<text x="57" y="554" fill="{ink}" font-family="Malgun Gothic, sans-serif" font-size="14">소개용 일러스트 · 실제 서비스 화면이 아닙니다</text><text x="850" y="554" fill="{ink}" font-family="Georgia,serif" font-size="36">{number}</text></svg>'''


apps=[]
for idx,(app_id,title,cat,summary,tags,bg,ink,n,features) in enumerate(items):
    files=[]
    for variant in range(2):
        name=f"{app_id}{'-detail' if variant else ''}.svg"
        (ASSETS / name).write_text(svg_preview(title,bg,ink,n,variant),encoding="utf-8")
        files.append("assets/"+name)
    apps.append(dict(id=app_id,title=title,summary=summary,description="실제 앱 정보를 등록하기 전 홈페이지 구성을 확인할 수 있는 예시 콘텐츠입니다. "+summary+"\n소개 문구, 주요 기능, 활용 예시는 운영할 서비스에 맞게 변경해 주세요.",category=cat,tags=tags,thumbnail=files[0],screenshots=files,appUrl="",githubUrl="",guideUrl="",features=features,targetUsers=["교사","학생"] if cat in ("수업 도구","교육용 게임") else ["교사"],supportedDevices=["PC","태블릿","모바일"],status="소개 준비 중",featured=idx<3,sortOrder=idx+1,updatedAt="2026-10-20",isExample=True,useCases=["사용하려는 상황과 기대하는 변화를 여기에 적어 주세요."],instructions=["앱 소개와 사용 방법을 확인합니다.","운영자가 실제 앱 주소를 등록하면 앱 실행 버튼을 사용할 수 있습니다."],changelog=["2026-10-20 · 홈페이지 예시 콘텐츠 등록"]))
(ROOT / "data").mkdir(exist_ok=True)
(ROOT / "data/apps.json").write_text(json.dumps(apps,ensure_ascii=False,indent=2),encoding="utf-8")
print(f"Created {len(apps)} example apps, {len(apps)*2} original SVG previews")
