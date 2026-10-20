# 참고 UI와 기술 선택

확인일: 2026-10-20

참고 저장소: https://github.com/pse915/datastructureapp

확인한 main 커밋: `70d1ce5d5c022b68408d2ca5a195411afb78df12`

일반 Git 접속과 웹 조회는 이 환경에서 실패했지만, GitHub API와 raw 파일을 통해 소스를 확인했습니다. 참고 앱 자체를 로그인하거나 실행한 화면은 확인하지 않았습니다. 아래는 실제 화면 실행 결과가 아닌 소스 기반 분석입니다.

## 확인한 자료

- README.md: React UI + Streamlit 호스트, 좌측 rail, 피드·스토리·모바일 하단 메뉴 설명
- app.py: Streamlit 실행 진입점, components v1 사용
- frontend/package.json: React 18, Vite, streamlit-component-lib
- frontend/src/App.jsx: 공통 메뉴·프로필·아이콘과 화면 구성
- frontend/src/styles.css: 크림·흰색 바탕, 잉크색 글자, 큰 헤딩, 둥근 카드, 미세한 테두리·그림자, 반응형 규칙
- frontend/src/theme/insta.css 및 naver.css: 추가 테마와 피드 컴포넌트 스타일
- frontend/src/components/FeedCard.jsx 및 StoryBar.jsx: 포스트 카드와 원형 카테고리 버튼
- 저장소 파일 목록: 별도 PNG/JPG/SVG/WebP 파일과 LICENSE/COPYING 파일은 발견되지 않았습니다.

## 반영한 특징

| 참고 특징 | 홈페이지 적용 |
|---|---|
| 데스크톱 좌측 rail | 홈·앱 모음·제작자·방명록 메뉴 |
| 중앙 content canvas | 넓은 여백과 카드 중심의 소개 화면 |
| 원형 story 버튼 | 카테고리 바로가기 |
| 피드형 카드 | 썸네일·분류·설명·태그·상세 진입 |
| 크림 배경·검정 글자·둥근 모서리 | 조절 가능한 CSS 토큰과 어두운 테마 |
| 모바일 compact bar와 하단 메뉴 | 터치용 고정 내비게이션 |

소스 코드나 기존 자산은 복사하지 않았습니다. 공개 라이선스가 확인되지 않았으므로 새 React·TypeScript 코드와 직접 작성한 SVG·CSS 일러스트로 구현했습니다. 참고 코드의 임의 좋아요 수나 학습·성적·Google Sheets 기능은 가져오지 않았습니다.

## Streamlit components v2 선택

공식 문서가 권장하는 v2를 검토하고 실제 설치된 Streamlit **1.65.0**으로 실행 검증했습니다. Python 의존성을 이 버전으로 고정했습니다. v2의 공식 `parentElement`·`data` API로 React 루트를 렌더링하며 스타일은 shadow root에 격리합니다. iframe 기반 v1과 달리 현재 앱 URL을 브라우저 History API로 다룰 수 있어 상세 공유와 앞/뒤로 이동에 적합했습니다. Node 없이 배포할 수 있도록 하나의 ES 모듈로 사전 빌드했습니다.

참고 문서:

- https://docs.streamlit.io/develop/concepts/custom-components/overview
- https://docs.streamlit.io/develop/concepts/custom-components/components-v2/package-based
- https://docs.streamlit.io/develop/api-reference/custom-components/st.components.v2.component
- https://giscus.app/ko
- https://github.com/giscus/giscus-component

외부 서비스의 실제 설정·로그인·Cloud 배포와 참고 앱 실행은 미검증입니다. 홈페이지의 모의 giscus 테스트와 실제 댓글 게시 검증은 구분되어 있습니다.
