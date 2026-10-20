import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
import path from 'node:path';
import {selectApps,safeUrl} from '../src/logic';
import type {CatalogApp} from '../src/types';

test('sorting and link protocol checks',()=>{
  const apps=JSON.parse(readFileSync(path.resolve('../data/apps.json'),'utf-8')) as CatalogApp[];
  expect(selectApps(apps,'시간표','전체','','featured').map(a=>a.id)).toEqual(['school-timetable']);
  expect(selectApps(apps,'','교무 업무','업무 효율','name').map(a=>a.title)).toEqual(['기술실 도구함','우리 학교 시간표']);
  const unequal=[{...apps[0],updatedAt:'2026-01-01'}, {...apps[1],updatedAt:'2026-10-20'}];
  expect(selectApps(unequal,'','전체','','recent')[0].id).toBe(apps[1].id);
  expect(safeUrl('javascript:alert(1)')).toBe('');
  expect(safeUrl('https://user:pass@example.com')).toBe('');
  expect(safeUrl('https://example.com')).toBe('https://example.com/');
});
test.beforeEach(async({page})=>{await page.goto('/');await expect(page.getByRole('heading',{name:'작은 아이디어, 쓸모 있는 변화.'})).toBeVisible();});

test('homepage, category shortcut and actual images',async({page})=>{
  await page.keyboard.press('Tab');
  await page.getByRole('link',{name:'본문으로 이동',exact:true}).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.content')).toBeFocused();
  await expect(page.locator('.app-card')).toHaveCount(3);
  await expect(page.locator('.recent-list>button')).toHaveCount(3);
  const images=await page.locator('.app-card img').evaluateAll(imgs=>imgs.every(i=>(i as HTMLImageElement).complete&&(i as HTMLImageElement).naturalWidth>0));
  expect(images).toBe(true);
  await page.getByRole('button',{name:'교육용 게임',exact:true}).click();
  await expect(page.locator('.app-card')).toHaveCount(1);
  await expect(page.locator('.app-card h3')).toHaveText('미래 다이어리');
});

test('search, category, tag, empty state and reset',async({page})=>{
  await page.getByRole('button',{name:'앱 둘러보기',exact:true}).click();
  await expect(page.locator('.app-card')).toHaveCount(6);
  await page.getByRole('textbox',{name:'앱 검색'}).fill('시간표');
  await expect(page.locator('.app-card')).toHaveCount(1);
  await page.getByRole('textbox',{name:'앱 검색'}).fill('존재하지않는검색어');
  await expect(page.getByRole('heading',{name:'검색 결과가 없어요.'})).toBeVisible();
  await page.getByRole('button',{name:'필터 초기화',exact:true}).click();
  await page.getByRole('button',{name:'교무 업무',exact:true}).click();
  await page.getByRole('combobox',{name:'태그 필터'}).selectOption('기자재');
  await expect(page.locator('.app-card')).toHaveCount(1);
  await page.getByRole('combobox',{name:'앱 정렬'}).selectOption('name');
  await expect(page.locator('.app-card h3')).toHaveText('기술실 도구함');
});

test('detail URL, reload, browser back/forward and unknown ID',async({page})=>{
  await page.getByRole('button',{name:'수업 기록 노트 상세 보기',exact:true}).click();
  await expect(page).toHaveURL(/app=classroom-notebook/);
  await page.reload();await expect(page.getByRole('heading',{name:'수업 기록 노트',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'앱 모음으로',exact:true}).click();
  await expect(page).toHaveURL(/view=apps/);
  await page.goBack();await expect(page.getByRole('heading',{name:'수업 기록 노트',exact:true})).toBeVisible();
  await page.goForward();await expect(page.locator('.app-card')).toHaveCount(6);
  await page.goto('/?app=unknown-id');await expect(page.getByRole('heading',{name:'앱을 찾을 수 없어요.'})).toBeVisible();
});

test('gallery closes by button, Escape and backdrop; focus returns',async({page})=>{
  await page.getByRole('button',{name:'수업 기록 노트 상세 보기',exact:true}).click();
  await page.getByRole('button',{name:'미리보기 2 선택',exact:true}).click();
  const opener=page.getByRole('button',{name:'미리보기 이미지 확대',exact:true});
  await opener.click();await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button',{name:'다음',exact:true}).click();await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();await expect(opener).toBeFocused();
  await opener.click();await page.getByRole('button',{name:'확대 이미지 닫기',exact:true}).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await opener.click();await page.mouse.click(2,2);await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page.getByRole('heading',{name:'수업 기록 노트',exact:true})).toBeVisible();
});

test('theme persists, missing URLs hidden, profile and guestbook',async({page})=>{
  await page.getByRole('button',{name:'어두운 테마',exact:true}).click();await expect(page.locator('.workshop')).toHaveClass(/dark/);
  await page.reload();await expect(page.locator('.workshop')).toHaveClass(/dark/);
  await page.getByRole('button',{name:'제작자 소개',exact:true}).click();
  await expect(page.getByRole('heading',{name:'기술교사',exact:true})).toBeVisible();
  await page.getByRole('button',{name:'질문 남기기',exact:true}).click();
  await expect(page.getByRole('heading',{name:'공개 질문'})).toBeVisible();
  await expect(page.getByText('댓글 공간을 준비하고 있어요.')).toBeVisible();
  await page.goto('/?app=school-timetable');await expect(page.getByText('앱 주소 준비 중')).toBeVisible();
  await expect(page.getByRole('link',{name:/앱 실행하기/})).toHaveCount(0);
});

test('repeated transitions have no duplicate widgets or browser errors',async({page})=>{
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  for(let i=0;i<5;i++){
    await page.getByRole('button',{name:'앱 모음',exact:true}).click();
    await page.getByRole('button',{name:'수업 기록 노트 상세 보기',exact:true}).click();
    await page.getByRole('button',{name:'질문게시판',exact:true}).click();
  }
  await expect(page.locator('.comments')).toHaveCount(1);
  await expect(page.locator('giscus-widget')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('mobile and tablet layouts have correct columns and no horizontal overflow',async({page})=>{
  await page.getByRole('button',{name:'앱 둘러보기',exact:true}).click();
  for(const [width,cols] of [[390,1],[768,2],[1440,3],[1800,4]]){
    await page.setViewportSize({width,height:1000});
    const grid=await page.locator('.app-grid').evaluate(el=>getComputedStyle(el).gridTemplateColumns.split(' ').length);
    expect(grid).toBe(cols);
    const overflow=await page.locator('.workshop').evaluate(el=>el.scrollWidth>window.innerWidth);
    expect(overflow).toBe(false);
  }
});

test('broken image falls back without breaking navigation',async({page})=>{
  await page.locator('.app-card img').first().evaluate(el=>(el as HTMLImageElement).src='/missing-preview.png');
  await expect.poll(()=>page.locator('.app-card img').first().getAttribute('src')).toContain('data:image/svg+xml,');
  await page.getByRole('button',{name:'수업 기록 노트 상세 보기',exact:true}).click();
  await expect(page.getByRole('heading',{name:'수업 기록 노트',exact:true})).toBeVisible();
});

test('screenshots of desktop, detail, mobile and tablet',async({page})=>{
  await page.screenshot({path:'../screenshots/01-home-desktop.png'});
  await page.getByRole('button',{name:'미래 다이어리 상세 보기',exact:true}).click();
  await page.screenshot({path:'../screenshots/02-detail-desktop.png'});
  await page.setViewportSize({width:390,height:844});await page.goto('/');
  await expect(page.getByRole('heading',{name:'작은 아이디어, 쓸모 있는 변화.'})).toBeVisible();
  await page.screenshot({path:'../screenshots/03-home-mobile.png'});
  await page.getByRole('navigation',{name:'모바일 메뉴'}).getByRole('button',{name:'앱 모음'}).click();
  await page.screenshot({path:'../screenshots/04-apps-mobile.png'});
  await page.setViewportSize({width:768,height:1024});
  await page.screenshot({path:'../screenshots/05-apps-tablet.png'});
});

test('configured giscus separates app terms and guestbook (mock widget)',async({page})=>{
  await page.route('https://giscus.app/**',route=>route.fulfill({contentType:'text/html',body:`<html><body>Mock discussion widget<script>setTimeout(()=>parent.postMessage({giscus:{resizeHeight:130,discussion:{url:'https://github.com/test-owner/test-comments/discussions/7'}}},'*'),100)</script></body></html>`}));
  await page.goto('http://127.0.0.1:8832/?app=classroom-notebook');
  await expect(page.locator('giscus-widget')).toHaveCount(1);
  let frame=page.locator('giscus-widget iframe');
  await expect(frame).toHaveAttribute('src',/term=app%3Aclassroom-notebook/);
  await expect(frame).toHaveAttribute('src',/strict=1/);
  await expect(page.getByRole('link',{name:'GitHub에서 댓글 보기'})).toHaveAttribute('href','https://github.com/test-owner/test-comments/discussions/7');
  await expect(page.getByRole('link',{name:'앱 실행하기'})).toHaveAttribute('target','_blank');
  await expect(page.getByRole('link',{name:'사용 설명서'})).toHaveCount(0);
  for(let i=0;i<3;i++){
    await page.getByRole('button',{name:'앱 모음',exact:true}).click();
    await page.getByRole('button',{name:'우리 학교 시간표 상세 보기',exact:true}).click();
    await expect(page.locator('giscus-widget iframe')).toHaveAttribute('src',/term=app%3Aschool-timetable/);
    await page.getByRole('button',{name:'질문게시판',exact:true}).click();
    await expect(page.locator('giscus-widget iframe')).toHaveAttribute('src',/term=guestbook/);
  }
  await expect(page.locator('giscus-widget')).toHaveCount(1);
  await expect(page.locator('giscus-widget iframe')).toHaveCount(1);
});

test('giscus unavailable: timeout and retry leave navigation working',async({page})=>{
  await page.route('https://giscus.app/**',route=>route.abort());
  await page.goto('http://127.0.0.1:8832/?app=classroom-notebook');
  await expect(page.getByRole('status')).toContainText('댓글을 불러오지 못했거나',{timeout:15000});
  await page.getByRole('button',{name:'다시 시도',exact:true}).click();
  await expect(page.locator('giscus-widget')).toHaveCount(1);
  await page.getByRole('button',{name:'앱 모음으로',exact:true}).click();
  await expect(page.locator('.app-card')).toHaveCount(6);
});
