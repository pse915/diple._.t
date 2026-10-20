# Diplet · 기술교사의 앱 공방 — 관리자 CMS v2

React·TypeScript 화면을 Streamlit Community Cloud에서 실행합니다. 앱과 홈페이지를 관리자 화면에서 편집하고 GitHub에 임시 저장·게시할 수 있습니다. 질문게시판의 공개 질문은 giscus, 비밀 질문은 **별도의 비공개 GitHub 저장소**를 사용합니다.

**배포 실행 파일은 `app.py`입니다.** React 빌드 파일이 포함되어 있어 배포 서버에서 npm을 실행할 필요가 없습니다.

## 구현 내용

- 서버에서 관리자 코드 인증, 세션별 권한, 로그인 시도 제한, 활동 만료, 로그아웃
- 앱 생성·편집·정렬·대표 지정·숨김·예시 배지·삭제·휴지통 복원
- 이미지 업로드와 실제 형식 검사, WebP 변환, 이미지와 설정의 원자적 저장
- 사이트 문구·메인 이미지·일러스트 문구·프로필·카테고리·외부 링크 편집
- 홈 섹션 추가·복제·숨김·삭제·위/아래 이동, 카드/목록·개수·열 수 선택
- 초안 임시 저장, 관리자 미리보기, 게시, 초안 취소, 최근 20회 게시 전 버전 복구
- 질문게시판과 앱별 비밀댓글, 관리자 전용 조회·검색·상태·비공개 답변·삭제
- GitHub 최신 게시 데이터 로딩, 저장 충돌 감지, 중복 요청 처리

초기 앱 6개와 SVG 미리보기는 예시 콘텐츠입니다. 실제 서비스 주소·통계·연락처는 임의로 넣지 않았습니다.

## 실제 확인 범위

공개 저장소 `pse915/diple._.t`의 커밋 `b33f0bf6669b2f3fcd61cf491bab07d92155548d`에서 기존 앱 소스를 확인했습니다. 주요 소스는 이 대화에서 만든 기존 프로젝트와 같았고, 원격 apps.json을 기준으로 데이터도 가져왔습니다.

`https://diplet.streamlit.app/` 직접 접속과 배포 설정 조회는 성공하지 못했습니다. 이 저장소와 운영 사이트의 실제 배포 연결은 확인되지 않았습니다. **실제 GitHub 저장소 수정이나 운영 배포는 수행하지 않았습니다.**

실행 검증: 서버 테스트 29개, 브라우저 테스트 17개 통과. GitHub 저장은 모의 저장소·모의 HTTP 응답으로 검증했습니다. 실제 토큰을 이용한 GitHub 쓰기·giscus 로그인·Cloud 운영 배포는 미검증입니다. `TEST_RESULTS.md`에 구분했습니다.

## 1. GitHub에 업로드

1. ZIP을 PC에 압축 해제합니다.
2. 현재 홈페이지 저장소를 먼저 백업합니다.
3. ZIP **안의 파일과 폴더**를 기존 홈페이지 저장소에 업로드합니다. ZIP 자체만 올리면 실행되지 않습니다.
4. 저장소 루트에 `app.py`, `requirements.txt`, `backend`, `frontend`, `config`, `data`, `assets`가 있어야 합니다.
5. `.streamlit/config.toml`도 포함합니다.
6. `frontend/build/workshop.js`, `frontend/src/styles.css`, `frontend/src/admin.css`를 빠뜨리지 않습니다.

기존 Streamlit 앱의 저장소·브랜치·진입점이 같으면 그 앱을 그대로 갱신할 수 있습니다. 배포 설정에서 먼저 실제 연결 저장소를 확인하세요. 신규 배포라면 https://share.streamlit.io/ 에서 GitHub 저장소를 연결하고 Main file path를 **app.py**, Python을 **3.12 이상**으로 지정합니다.

## 2. 비밀 질문용 비공개 저장소 생성

1. GitHub에서 새 저장소를 만듭니다. 이름은 자유입니다.
2. **Private**을 선택합니다.
3. README 추가를 선택해 저장소와 `main` 브랜치를 초기화합니다.
4. 공개 홈페이지 저장소와 반드시 다른 저장소를 사용합니다.

비밀 질문은 이 저장소에만 저장합니다. 서버가 제출·관리 시 API로 실제 private 상태를 확인하고, 공개 상태이면 거부합니다. 홈페이지 관리자 외에도 이 비공개 저장소에 권한이 있는 GitHub 계정은 원본을 볼 수 있습니다.

## 3. 최소 권한 GitHub 토큰 발급

1. GitHub 계정 Settings → Developer settings → Personal access tokens → Fine-grained tokens로 이동합니다.
2. 새 토큰을 생성하고 적절한 만료일을 지정합니다.
3. Repository access에서 **현재 홈페이지 저장소와 비밀 질문 저장소만** 선택합니다.
4. Repository permissions의 **Contents: Read and write**를 부여합니다. Metadata 읽기는 기본 포함됩니다.
5. 토큰을 복사합니다. 코드나 JSON에 넣지 않습니다.

토큰으로 워크플로 파일을 수정하지 않으므로 Workflows 권한은 요구하지 않습니다. 브랜치 보호 규칙이 직접 쓰기를 막으면 저장이 거부될 수 있습니다. 운영 정책에 맞는 별도의 데이터 저장소·브랜치를 사용하거나 해당 권한 구성을 확인하세요.

## 4. 관리자 비밀번호 해시 생성

Python이 설치된 PC에서 프로젝트 폴더를 연 다음 실행합니다.

```bash
python -m pip install -r requirements.txt
python tools/hash_admin_password.py
```

12자 이상의 충분히 긴 관리자 코드를 두 번 입력합니다. 입력값은 화면에 표시되지 않습니다. 출력된 `ADMIN_PASSWORD_HASH = "scrypt$..."` 한 줄을 복사합니다.

관리 화면에서는 **원래 입력한 관리자 코드**를 사용합니다. 해시 문자열을 로그인창에 입력하지 않습니다. 기본 관리자 코드는 없습니다.

## 5. Streamlit Secrets 입력

Streamlit Cloud의 해당 앱 설정에서 Secrets를 열고 `secrets.example.toml`을 참고하여 실제 값을 입력합니다.

```toml
ADMIN_PASSWORD_HASH = "해시 생성 도구의 실제 출력값"
GITHUB_TOKEN = "실제 fine-grained 토큰"
PUBLIC_REPO = "pse915/diple._.t"
PUBLIC_BRANCH = "main"
CMS_PATH = "data/cms.json"
IMAGE_PREFIX = "assets/uploads"
PRIVATE_REPO = "본인계정/실제비공개저장소"
PRIVATE_BRANCH = "main"
ADMIN_TIMEOUT_SECONDS = 1800
```

설명용 값을 그대로 사용하지 마세요. `PUBLIC_REPO`는 **실제로 데이터를 저장할 저장소**로 바꿀 수 있습니다. 처음에는 코드와 같은 공개 저장소를 권장합니다. 별도의 공개 데이터 저장소를 쓰면 기존 `assets` 파일도 그 저장소에 먼저 복사해야 합니다.

Secrets 저장 후 앱을 재부팅합니다. 설정 객체를 서버에서 캐시하므로 토큰·해시·저장소 설정을 바꿀 때도 재부팅하세요. 실제 Secrets 파일은 GitHub에 올리지 않습니다.

설정이 없으면 공개 홈페이지는 기본 파일로 열립니다. 관리자 저장과 비밀 질문 제출은 설정 안내와 함께 비활성화됩니다. GitHub 영구 저장인 것처럼 로컬 저장으로 대체하지 않습니다.

## 6. 관리자 사용

1. 상단 ‘관리자 모드’ 또는 앱 모음의 ‘관리자 모드로 앱 편집’을 누릅니다.
2. 관리자 코드를 입력합니다.
3. 앱 관리 / 사이트 문구 / 홈 배치 / 카테고리 / 제작자·링크 / 휴지통 / 게시 버전 / 비밀 질문 탭을 사용합니다.
4. **임시 저장**은 GitHub에 초안만 보관합니다.
5. **저장 전 미리보기**는 현재 관리자에게만 편집 내용을 보여 줍니다.
6. **게시하기**를 눌러야 일반 홈페이지에 반영됩니다.

초안은 공개 저장소에 저장되므로 GitHub 파일과 커밋 이력에서는 보일 수 있습니다. 숨김 앱과 휴지통도 비밀 보관 기능이 아닙니다. 개인정보·비밀 내용은 공개 콘텐츠 편집창에 넣지 마세요.

다른 방문자는 새로고침하거나 자동 갱신 주기가 지나면 게시된 정보를 받습니다. 공개 서버 캐시는 최대 15초, 열린 브라우저의 확인 주기는 약 60초입니다. GitHub 접근 오류 시 처음 로딩에서 오래된 로컬 파일로 조용히 되돌아가지 않고 연결 점검 안내를 표시합니다.

자세한 작업 순서는 `ADMIN_MANUAL.md`를 보세요.

## 7. 질문게시판과 giscus

기존 `?view=guestbook` 주소와 giscus `term="guestbook"`은 유지됩니다. 화면의 방명록 명칭을 질문게시판으로 바꾸었으므로 기존 공개 댓글을 새로 연결할 필요가 없습니다.

공개 질문을 사용하려면 기존과 같이 다음을 설정합니다.

1. 공개 댓글 저장소에서 Discussions 활성화
2. https://github.com/apps/giscus 에서 해당 저장소에 앱 설치
3. https://giscus.app/ko 에서 실제 식별값 확인
4. `config/giscus.json`의 `enabled`, `repo`, `repoId`, `category`, `categoryId` 설정

앱 댓글은 `app:영구앱ID`, 질문게시판은 `guestbook`, strict specific 매핑을 사용합니다. 공개 질문에는 GitHub 로그인이 필요합니다. giscus를 통한 댓글 인증에는 관리자용 GitHub 토큰을 브라우저에 전달하지 않습니다.

비밀 질문은 별도의 자체 폼입니다. 누구나 제출할 수 있지만 제출 후에는 접수번호만 표시하고 내용 조회를 제공하지 않습니다. 관리자 답변은 비공개 운영 메모이며 작성자에게 전달되지 않습니다. 이메일·푸시 알림도 구현 범위에 포함하지 않습니다.

## 8. 데이터 구조

| 경로 | 용도 |
|---|---|
| config/site.json | 최초 기본 사이트 정보 |
| config/layout.json | 최초 기본 홈 섹션 |
| data/apps.json | 최초 기본 앱 목록 |
| data/cms.json | GitHub 관리 데이터: published·draft·history |
| data/cms_versions/고유ID.json | 게시 전 공개 버전 스냅샷 |
| data/cms_operations/요청ID.json | 공개 변경 중복 요청 확인 |
| assets/uploads/콘텐츠해시.webp | 검증·변환된 업로드 이미지 |
| 비공개 저장소의 questions/index.json | 관리자 검색용 비공개 색인 |
| 비공개 저장소의 questions/messages/요청ID.json | 비밀 글 원문·관리자 메모 |
| 비공개 저장소의 questions/operations/요청ID.json | 비밀 관리 작업 중복 확인 |

`data/cms.json`이 생성된 뒤에는 그것이 기준 데이터입니다. 이후 기존 apps.json만 수정해도 게시 데이터는 바뀌지 않습니다. 관리 화면이나 CMS 데이터를 이용하세요. 원래 코드 파일을 되돌려도 CMS 데이터는 별도로 보존됩니다.

## 9. 로컬 실행·프런트엔드 수정

일반 실행:

```bash
python -m pip install -r requirements.txt
python -m streamlit run app.py
```

로컬에서 실제 저장을 시험하려면 `.streamlit/secrets.toml`에 실제 설정을 넣습니다. 이 파일은 GitHub에 올리지 않습니다.

TypeScript 소스 변경 시 Node 24 LTS를 권장합니다.

```bash
cd frontend
npm ci
npm run build
```

소스와 새 `frontend/build/workshop.js`를 함께 커밋합니다. CSS는 `styles.css`와 `admin.css`를 서버가 직접 읽습니다. 관리자 콘텐츠 수정에는 React 재빌드가 필요하지 않습니다.

`tools/create_examples.py`는 최초 예시 데이터를 다시 만드는 도구입니다. 운영 콘텐츠를 등록한 뒤에는 실행하지 마세요. 기존 기본 apps.json과 예시 이미지를 덮어씁니다.

## 10. 검증 다시 실행

```bash
python -m unittest discover -s tests -p "test_*.py" -v
cd frontend
npm ci
npx playwright install chromium
npm run test:e2e
```

테스트 설정이 로컬 8520~8523 포트를 사용합니다. Python이 PATH에 있어야 합니다. 관리 기능 검증 서버의 테스트 비밀번호와 모의 저장소는 `tests/admin_fixture.py`에만 있으며 운영 앱은 이 코드를 사용하지 않습니다. **배포 진입점으로 tests 폴더의 파일을 선택하지 마세요.**

## 11. 운영상 한계와 문제 해결

- 잘못된 관리자 코드: 원문 비밀번호와 Secrets 해시를 확인합니다. 5회 실패 시 60초 후 재시도합니다.
- GitHub 권한 오류: 토큰 만료·저장소 선택·Contents 권한·브랜치 보호를 확인합니다.
- 동시 수정 충돌: 입력이 유지됩니다. 내용을 별도로 확인한 뒤 최신본을 불러와 다시 적용합니다. 자동 덮어쓰기는 하지 않습니다.
- 비밀 질문 비활성화: 별도의 비공개 저장소·토큰·브랜치 초기화를 확인합니다.
- 게시 직후 연결 끊김: 같은 저장소의 코드 배포가 재시작될 수 있습니다. 새로고침 후 다시 로그인하고 최신본을 확인합니다.
- 서버 코드 롤백과 콘텐츠 복구는 별개입니다. 관리자 ‘게시 버전’에서 콘텐츠를 복구합니다.
- 비밀 글은 최대 500건입니다. 한도 도달 시 새 제출을 거부합니다. 관리자가 정리하거나 보관 정책을 마련해야 합니다.
- 로그인·제출 제한은 서버 세션과 프로세스 내 제한입니다. 여러 서버를 아우르는 완전한 스팸 방지·계정 인증 서비스는 아닙니다.
- 삭제해도 GitHub 과거 커밋에서 완전히 사라지지는 않습니다. 영구 삭제가 필요하면 별도 Git 이력 정리가 필요합니다.

자세한 데이터 보호 범위와 미검증 사항은 `KNOWN_LIMITATIONS.md`, 콘텐츠 관리 범위는 `CONTENT_INVENTORY.md`에 정리했습니다.
