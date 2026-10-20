import {test,expect,Page} from '@playwright/test';
const base='http://127.0.0.1:8521';
async function login(page:Page){
  await page.goto(base);await page.getByRole('button',{name:'관리자 모드',exact:true}).click();
  await page.getByLabel('관리자 코드',{exact:true}).fill('Test-admin-code-2026!');
  await page.getByRole('button',{name:'관리자 로그인',exact:true}).click();
  await expect(page.getByRole('button',{name:'새 앱 작성',exact:true})).toBeVisible();
}
async function save(page:Page,label='임시 저장'){
  if(label==='게시하기')page.once('dialog',d=>d.accept());
  await page.getByRole('button',{name:label,exact:true}).click();
  await expect(page.getByRole('status')).toContainText(label==='게시하기'?'게시했습니다':'저장했습니다',{timeout:20000});
}

test('private submission, server auth, session separation, admin reply and logout',async({browser,page})=>{
  const guest=await browser.newPage();const received:string[]=[];
  guest.on('websocket',socket=>socket.on('framereceived',frame=>received.push(typeof frame.payload==='string'?frame.payload:frame.payload.toString('utf8'))));
  await guest.goto(base+'/?view=guestbook');
  await expect(guest.getByRole('heading',{name:'공개 질문',exact:true})).toBeVisible();
  await guest.getByRole('button',{name:'비밀 글 작성',exact:true}).click();
  await guest.getByLabel('답변 받을 이메일 (필수)',{exact:true}).fill('writer@example.com');
  await guest.getByLabel('이메일의 비공개 보관 및 답변 발송에 동의합니다.').check();
  await guest.getByLabel('비밀 글 제목',{exact:true}).fill('PRIVATE_SENTINEL_TITLE');
  await guest.getByLabel('비밀 글 내용',{exact:true}).fill('PRIVATE_SENTINEL_BODY_2026');
  await guest.getByRole('button',{name:'비밀 글 접수',exact:true}).click();
  await expect(guest.getByRole('status')).toContainText('접수되었습니다');
  expect(received.join('')).not.toContain('PRIVATE_SENTINEL_BODY_2026');
  await guest.reload();await expect(guest.getByText('PRIVATE_SENTINEL_TITLE')).toHaveCount(0);
  await page.goto(base);await page.getByRole('button',{name:'관리자 모드',exact:true}).click();
  await page.getByLabel('관리자 코드',{exact:true}).fill('wrong-code');await page.getByRole('button',{name:'관리자 로그인',exact:true}).click();
  await expect(page.getByRole('alert')).toContainText('올바르지');
  await page.getByLabel('관리자 코드',{exact:true}).fill('Test-admin-code-2026!');await page.getByRole('button',{name:'관리자 로그인',exact:true}).click();
  await page.getByRole('button',{name:'비밀 질문',exact:true}).click();await page.getByRole('button',{name:'질문 불러오기',exact:true}).click();
  await page.getByRole('button',{name:/PRIVATE_SENTINEL_TITLE/}).first().click();
  await expect(page.locator('.private-body')).toContainText('PRIVATE_SENTINEL_BODY_2026');
  await page.getByLabel('이메일로 보낼 답변',{exact:true}).fill('PRIVATE_ADMIN_REPLY');
  await page.getByLabel('관리자 내부 메모 (발송하지 않음)',{exact:true}).fill('PRIVATE_NOTE_NOT_SENT');
  await page.getByLabel('질문 상태',{exact:true}).selectOption('답변 완료');
  await page.getByRole('button',{name:'답변 저장·이메일 발송',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('이메일 발송 요청이 접수');
  await expect(page.getByRole('note')).toContainText('메일 서비스 접수 완료');
  await page.screenshot({path:'../screenshots/07-email-reply-admin.png'});
  await guest.getByRole('button',{name:'관리자 모드',exact:true}).click();
  await expect(guest.getByLabel('관리자 코드',{exact:true})).toBeVisible();
  await expect(guest.getByText('PRIVATE_ADMIN_REPLY')).toHaveCount(0);
  await page.getByRole('button',{name:/PRIVATE_SENTINEL_TITLE/}).first().click();
  await expect(page.getByLabel('이메일로 보낼 답변',{exact:true})).toHaveValue('PRIVATE_ADMIN_REPLY');
  await page.getByRole('button',{name:'로그아웃',exact:true}).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();await expect(page.getByText('PRIVATE_SENTINEL_BODY_2026')).toHaveCount(0);
  await page.getByRole('button',{name:'관리자 모드',exact:true}).click();await expect(page.getByLabel('관리자 코드',{exact:true})).toBeVisible();
  await guest.close();
});

test('app editor: upload, server validation, draft isolation, preview, publish, delete and restore',async({page,browser})=>{
  const name='브라우저 검증 앱 '+Date.now();
  await login(page);await page.getByRole('button',{name:'새 앱 작성',exact:true}).click();
  await page.getByLabel('앱 이름',{exact:true}).fill(name);
  await page.getByLabel('한 줄 소개',{exact:true}).fill('임시 저장과 게시를 검증하는 도구');
  await page.getByLabel('앱 실행 주소',{exact:true}).fill('javascript:alert(1)');
  const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jVFoAAAAASUVORK5CYII=','base64');
  await page.getByLabel('썸네일 업로드',{exact:true}).setInputFiles({name:'test.png',mimeType:'image/png',buffer:png});
  await page.getByRole('button',{name:'임시 저장',exact:true}).click();await expect(page.getByRole('alert')).toContainText('주소');
  await expect(page.getByLabel('앱 이름',{exact:true})).toHaveValue(name);
  await page.getByLabel('앱 실행 주소',{exact:true}).fill('https://example.com/test-only');await save(page);
  const publicPage=await browser.newPage();await publicPage.goto(base+'/?view=apps');await expect(publicPage.getByRole('button',{name:name+' 상세 보기'})).toHaveCount(0);
  await page.getByRole('button',{name:'저장 전 미리보기',exact:true}).click();await expect(page.getByText('관리자 전용 미리보기 · 아직 게시되지 않았습니다.')).toBeVisible();
  await page.getByRole('button',{name:'앱 모음',exact:true}).click();await expect(page.getByRole('button',{name:name+' 상세 보기',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'편집으로 돌아가기',exact:true}).click();await save(page,'게시하기');
  await publicPage.reload();await expect(publicPage.getByRole('button',{name:name+' 상세 보기',exact:true})).toBeVisible();
  await page.screenshot({path:'../screenshots/03-app-editor.png'});
  page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'앱 삭제',exact:true}).click();await save(page,'게시하기');
  await publicPage.reload();await expect(publicPage.getByRole('button',{name:name+' 상세 보기'})).toHaveCount(0);
  await page.getByRole('button',{name:'휴지통',exact:true}).click();await page.locator('.trash-row').filter({hasText:name}).getByRole('button',{name:'복원',exact:true}).click();await save(page,'게시하기');
  await publicPage.reload();await expect(publicPage.getByRole('button',{name:name+' 상세 보기',exact:true})).toBeVisible();
  await publicPage.close();
});

test('section creation, reordering, preview, cancellation guard and historical recovery',async({page,browser})=>{
  await login(page);await page.getByRole('button',{name:'홈 배치',exact:true}).click();await page.getByRole('button',{name:'새 섹션 추가',exact:true}).click();
  await page.getByLabel('섹션 제목',{exact:true}).fill('새로운 학교 이야기');await page.getByLabel('섹션 내용',{exact:true}).fill('관리자가 직접 편집한 안내입니다.');
  const up=page.getByRole('button',{name:'새로운 학교 이야기 위로',exact:true});
  for(let i=0;i<5;i++)await up.click();
  await save(page,'게시하기');
  const viewer=await browser.newPage();await viewer.goto(base);await expect(viewer.locator('[data-section-id]').first().getByRole('heading',{name:'새로운 학교 이야기'})).toBeVisible();
  await page.screenshot({path:'../screenshots/04-layout-manager.png'});
  await page.getByLabel('섹션 제목',{exact:true}).fill('취소할 변경');page.once('dialog',d=>d.dismiss());await page.getByRole('button',{name:'관리자 닫기',exact:true}).click();await expect(page.getByRole('dialog')).toBeVisible();
  page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'최신본 불러오기',exact:true}).click();
  await expect(page.getByLabel('섹션 제목',{exact:true})).toHaveValue('새로운 학교 이야기');
  await page.getByRole('button',{name:'게시 버전',exact:true}).click();
  page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'이 버전을 초안으로 복구',exact:true}).first().click();
  await expect(page.getByRole('status')).toContainText('저장했습니다');
  await save(page,'게시하기');await viewer.reload();
  await expect(viewer.getByRole('heading',{name:'새로운 학교 이야기',exact:true})).toHaveCount(0);
  await viewer.close();
});

test('mobile manager and question board screenshots',async({page})=>{
  await page.setViewportSize({width:390,height:844});await login(page);
  await expect(page.getByLabel('앱 이름',{exact:true})).toBeVisible();
  expect(await page.locator('.admin-shell').evaluate(el=>el.scrollWidth>el.clientWidth)).toBe(false);
  expect((await page.locator('.item-row').first().boundingBox())!.height).toBeGreaterThanOrEqual(70);
  await page.screenshot({path:'../screenshots/05-admin-mobile.png'});
  await page.getByRole('button',{name:'관리자 닫기',exact:true}).click();
  await page.getByRole('navigation',{name:'모바일 메뉴'}).getByRole('button',{name:'질문게시판',exact:true}).click();
  await expect(page.getByRole('heading',{name:'관리자에게 비밀 질문 보내기',exact:true})).toBeVisible();
  await page.screenshot({path:'../screenshots/06-questions-mobile.png'});
});

test('real server inactivity expiry clears administrator interface',async({page})=>{
  await page.goto('http://127.0.0.1:8523/');await page.getByRole('button',{name:'관리자 모드',exact:true}).click();
  await page.getByLabel('관리자 코드',{exact:true}).fill('Test-admin-code-2026!');await page.getByRole('button',{name:'관리자 로그인',exact:true}).click();
  await expect(page.getByRole('button',{name:'새 앱 작성',exact:true})).toBeVisible();
  await expect(page.getByLabel('관리자 코드',{exact:true})).toBeVisible({timeout:8000});
  await expect(page.getByRole('button',{name:'비밀 질문',exact:true})).toHaveCount(0);
});
