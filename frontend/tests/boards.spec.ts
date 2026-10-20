import {test,expect,Page} from '@playwright/test';
const base='http://127.0.0.1:8834';
async function login(page:Page){
  await page.goto(base);await page.getByRole('button',{name:'관리자 모드',exact:true}).click();
  await page.getByLabel('관리자 코드',{exact:true}).fill('Test-admin-code-2026!');
  await page.getByRole('button',{name:'관리자 로그인',exact:true}).click();
  await page.getByRole('button',{name:'게시판·메뉴',exact:true}).click();
}
async function save(page:Page,operation='게시하기'){
  if(operation==='게시하기')page.once('dialog',d=>d.accept());
  await page.getByRole('button',{name:operation,exact:true}).click();
  await expect(page.getByRole('status')).toContainText(operation==='게시하기'?'게시했습니다':'저장했습니다');
}
async function create(page:Page,title:string){
  await page.getByRole('button',{name:'새 게시판 만들기',exact:true}).click();
  await page.getByLabel('게시판 이름',{exact:true}).fill(title);
  await page.getByLabel('게시판 설명',{exact:true}).fill('연수 자료를 모아 놓은 게시판입니다.');
  const id=await page.getByLabel('게시판 영구 ID',{exact:true}).inputValue();
  await page.getByRole('button',{name:'새 게시글 작성',exact:true}).click();
  await page.getByLabel('게시글 제목',{exact:true}).fill('수업 앱 만들기 연수');
  await page.getByLabel('게시글 요약',{exact:true}).fill('실습 안내와 자료 링크');
  await page.getByLabel('게시글 본문',{exact:true}).fill('실습 순서입니다.\n<script>window.__boardXSS=true</script>');
  await page.getByLabel('게시글 태그 (쉼표로 구분)',{exact:true}).fill('연수, 실습');
  await page.getByRole('button',{name:'자료 링크 추가',exact:true}).click();
  await page.getByLabel('자료 1 이름',{exact:true}).fill('연수 자료 열기');
  await page.getByLabel('자료 1 주소',{exact:true}).fill('https://example.com/training-test.pdf');
  return id;
}

test('board creation, draft isolation, preview, publish, menu order and deep URLs',async({page,browser})=>{
  await login(page);const title='연수자료';const id=await create(page,title);
  const guest=await browser.newPage();await guest.goto(base);
  await expect(guest.getByRole('navigation',{name:'주 메뉴'}).getByRole('button',{name:title,exact:true})).toHaveCount(0);
  await save(page,'임시 저장');await guest.reload();
  await expect(guest.getByRole('navigation',{name:'주 메뉴'}).getByRole('button',{name:title,exact:true})).toHaveCount(0);
  await page.getByRole('button',{name:'저장 전 미리보기',exact:true}).click();
  await page.getByRole('navigation',{name:'주 메뉴'}).getByRole('button',{name:title,exact:true}).click();
  await expect(page.getByRole('button',{name:'수업 앱 만들기 연수 게시글 보기',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'편집으로 돌아가기',exact:true}).click();await save(page);
  await page.screenshot({path:'../screenshots/boards-manager.png'});
  await guest.reload();const menu=guest.getByRole('navigation',{name:'주 메뉴'});
  await expect(menu.getByRole('button',{name:title,exact:true})).toBeVisible();
  const labels=await menu.getByRole('button').allTextContents();expect(labels.indexOf(title)).toBe(labels.indexOf('앱 모음')+1);
  await menu.getByRole('button',{name:title,exact:true}).click();await expect(guest).toHaveURL(new RegExp('board='+id));
  await guest.getByRole('button',{name:'수업 앱 만들기 연수 게시글 보기',exact:true}).click();
  await expect(guest).toHaveURL(/post=/);const direct=guest.url();
  await expect(guest.getByRole('heading',{name:'수업 앱 만들기 연수',exact:true})).toBeVisible();
  await expect(guest.getByRole('link',{name:'연수 자료 열기',exact:true})).toHaveAttribute('target','_blank');
  expect(await guest.evaluate(()=>typeof (window as any).__boardXSS)).toBe('undefined');
  await guest.screenshot({path:'../screenshots/boards-post-desktop.png'});
  await guest.reload();await expect(guest.getByRole('heading',{name:'수업 앱 만들기 연수',exact:true})).toBeVisible();
  await guest.goBack();await expect(guest.getByRole('heading',{name:title,exact:true})).toBeVisible();
  await guest.goForward();await expect(guest.getByRole('heading',{name:'수업 앱 만들기 연수',exact:true})).toBeVisible();
  const fresh=await browser.newPage();await fresh.goto(direct);await expect(fresh.getByRole('heading',{name:'수업 앱 만들기 연수',exact:true})).toBeVisible();
  await fresh.close();await guest.close();
});

test('hidden post/board isolation, deletion and restoration, link errors preserve input',async({page,browser})=>{
  await login(page);const title='수업 자료실';const id=await create(page,title);
  await page.getByLabel('자료 1 주소',{exact:true}).fill('javascript:alert(1)');
  await page.getByRole('button',{name:'임시 저장',exact:true}).click();await expect(page.getByRole('alert')).toContainText('http/https');
  await expect(page.getByLabel('게시글 제목',{exact:true})).toHaveValue('수업 앱 만들기 연수');
  await page.getByLabel('자료 1 주소',{exact:true}).fill('https://example.com/test-only');
  await page.getByLabel('게시글 본문',{exact:true}).fill('HIDDEN_BOARD_POST_SENTINEL');
  await page.getByLabel('게시글 표시',{exact:true}).uncheck();await save(page);
  const guest=await browser.newPage();let frames='';guest.on('websocket',ws=>ws.on('framereceived',f=>frames+=f.payload.toString()));
  await guest.goto(base+'/?board='+id);await expect(guest.getByText('아직 등록된 글이 없어요.')).toBeVisible();
  expect(frames).not.toContain('HIDDEN_BOARD_POST_SENTINEL');
  await page.getByLabel('게시글 표시',{exact:true}).check();await save(page);await guest.reload();
  await expect(guest.getByRole('button',{name:'수업 앱 만들기 연수 게시글 보기',exact:true})).toBeVisible();
  page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'게시글 삭제',exact:true}).click();await save(page);await guest.reload();
  await expect(guest.getByText('아직 등록된 글이 없어요.')).toBeVisible();
  await page.getByText('이 게시판의 삭제한 글 (1)',{exact:true}).click();
  await page.getByRole('button',{name:'수업 앱 만들기 연수 게시글 복원',exact:true}).click();await save(page);
  await page.getByLabel('게시판 표시',{exact:true}).uncheck();await save(page);await guest.reload();
  await expect(guest.getByRole('heading',{name:'게시판을 찾을 수 없어요.',exact:true})).toBeVisible();
  await expect(guest.getByRole('navigation',{name:'주 메뉴'}).getByRole('button',{name:title,exact:true})).toHaveCount(0);
  await page.getByLabel('게시판 표시',{exact:true}).check();await save(page);
  page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'게시판 삭제',exact:true}).click();await save(page);await guest.reload();
  await expect(guest.getByRole('heading',{name:'게시판을 찾을 수 없어요.',exact:true})).toBeVisible();
  await page.getByText('삭제한 게시판 (1)',{exact:true}).click();
  await page.getByRole('button',{name:title+' 게시판 복원',exact:true}).click();await save(page);await guest.reload();
  await expect(guest.getByRole('heading',{name:title,exact:true})).toBeVisible();
  await guest.close();
});

test('board menu moves, mobile access, search and empty results',async({page,browser})=>{
  await page.setViewportSize({width:390,height:844});await login(page);const title='교사 연구 자료';const id=await create(page,title);
  await page.getByRole('button',{name:title+' 메뉴 아래로',exact:true}).click();
  await page.getByLabel('게시판 레이아웃',{exact:true}).selectOption('grid');await save(page);
  expect(await page.locator('.admin-shell').evaluate(e=>e.scrollWidth>e.clientWidth)).toBe(false);
  await page.screenshot({path:'../screenshots/boards-manager-mobile.png'});
  const guest=await browser.newPage({viewport:{width:390,height:844}});await guest.goto(base);
  await guest.getByRole('navigation',{name:'모바일 메뉴'}).getByRole('button',{name:title,exact:true}).click();
  await expect(guest).toHaveURL(new RegExp('board='+id));
  await guest.getByLabel('게시글 검색',{exact:true}).fill('없는 검색어');await expect(guest.getByText('검색 결과가 없어요.',{exact:true})).toBeVisible();
  await guest.getByRole('button',{name:'게시글 검색 초기화',exact:true}).click();await guest.getByLabel('게시글 검색',{exact:true}).fill('실습');
  await expect(guest.getByRole('button',{name:'수업 앱 만들기 연수 게시글 보기',exact:true})).toBeVisible();
  await guest.screenshot({path:'../screenshots/boards-list-mobile.png'});
  expect(await guest.locator('.workshop').evaluate(e=>e.scrollWidth>window.innerWidth)).toBe(false);
  await guest.goto(base+'/?board=missing-board');await expect(guest.getByRole('heading',{name:'게시판을 찾을 수 없어요.'})).toBeVisible();
  await guest.goto(base+'/?board='+id+'&post=missing-post');await expect(guest.getByRole('heading',{name:'게시글을 찾을 수 없어요.'})).toBeVisible();
  await guest.close();
});
