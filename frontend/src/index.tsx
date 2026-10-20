import {Icon,Preview,Link,AppCard} from './ui';
import {Home} from './home';
import {AdminDialog} from './admin';
import {PrivateForm} from './private-form';
import {BridgeProvider,useBridge} from './bridge';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import Giscus from '@giscus/react';
import type { Payload, CatalogApp } from './types';
import { safeUrl, selectApps, readRoute, routeUrl, type Route } from './logic';
const symbols=['layers','calendar','game','sun','spark'];

function Comments({config,term,theme}:{config:Payload['giscus'];term:string;theme:string}) {
  const host=useRef<HTMLDivElement>(null);
  const [status,setStatus]=useState('loading');
  const [direct,setDirect]=useState(config.discussionUrls[term]||'');
  const [retry,setRetry]=useState(0);
  useEffect(()=>{
    setStatus('loading'); setDirect(config.discussionUrls[term]||'');
    if(!config.enabled)return;
    const timer=window.setTimeout(()=>setStatus(s=>s==='loading'?'slow':s),10000);
    const receive=(e:MessageEvent)=>{
      const widget=host.current?.querySelector('giscus-widget');
      const frame=widget?.shadowRoot?.querySelector('iframe');
      if(e.origin!=='https://giscus.app'||!frame||e.source!==frame.contentWindow||!e.data?.giscus)return;
      const data=e.data.giscus;
      if(data.resizeHeight||data.discussion)setStatus('ready');
      if(data.error)setStatus(String(data.error).includes('Discussion not found')?'ready':'error');
      const u=safeUrl(data.discussion?.url||'');
      if(u.startsWith(`https://github.com/${config.repo}/discussions/`))setDirect(u);
    };
    window.addEventListener('message',receive);
    return ()=>{clearTimeout(timer);window.removeEventListener('message',receive);};
  },[term,config, retry]);
  return <section className="comments panel" aria-label="댓글">
    <div className="section-head"><div><span className="eyebrow">LET’S TALK</span><h2>{term==='guestbook'?'공개 질문':'사용해 본 이야기를 들려주세요'}</h2></div><Icon name="chat"/></div>
    <p className="muted">댓글과 반응을 남기려면 GitHub 로그인이 필요합니다.</p>
    {!config.enabled?<div className="comment-placeholder"><Icon name="chat" size={30}/><b>댓글 공간을 준비하고 있어요.</b><p>지금은 앱 소개를 둘러보실 수 있습니다.</p></div>:<>
      <div ref={host} className="giscus-host"><Giscus key={`${term}:${retry}`} id="workshop-comments" repo={config.repo as `${string}/${string}`} repoId={config.repoId} category={config.category} categoryId={config.categoryId} mapping="specific" term={term} strict="1" reactionsEnabled="1" emitMetadata="1" inputPosition="top" theme={theme==='dark'?'dark':'light'} lang="ko" loading="eager"/></div>
      {(status==='slow'||status==='error')&&<div className="comment-error" role="status">댓글을 불러오지 못했거나 연결이 지연되고 있습니다. 앱 소개는 계속 이용하실 수 있습니다. <button onClick={()=>setRetry(n=>n+1)}>다시 시도</button></div>}
    </>}
    {direct&&<Link url={direct}>GitHub에서 댓글 보기</Link>}
  </section>;
}
function Gallery({app}:{app:CatalogApp}) {
  const images=app.screenshots.length?app.screenshots:[app.thumbnail];
  const [index,setIndex]=useState(0);const [open,setOpen]=useState(false);
  const dialog=useRef<HTMLDialogElement>(null);
  useEffect(()=>{if(open&&!dialog.current?.open)dialog.current?.showModal();else if(!open&&dialog.current?.open)dialog.current.close();},[open]);
  return <section className="gallery">
    <button className="gallery-main" onClick={()=>setOpen(true)} aria-label="미리보기 이미지 확대"><Preview src={images[index]} alt={`${app.title} 미리보기 ${index+1}`}/><span>크게 보기 ↗</span></button>
    <div className="gallery-thumbs">{images.map((image,i)=><button key={i} onClick={()=>setIndex(i)} aria-label={`미리보기 ${i+1} 선택`} aria-pressed={index===i}><Preview src={image} alt={`${i+1}번 이미지`}/></button>)}</div>
    <dialog ref={dialog} onClose={()=>setOpen(false)} onClick={e=>{if(e.target===e.currentTarget)setOpen(false);}} aria-label={`${app.title} 확대 미리보기`}>
      <div className="lightbox"><button autoFocus className="icon-button close" aria-label="확대 이미지 닫기" onClick={()=>setOpen(false)}><Icon name="close"/></button><Preview src={images[index]} alt={`${app.title} 확대 미리보기`}/><div className="lightbox-controls"><button className="btn" onClick={()=>setIndex((index+images.length-1)%images.length)}>이전</button><span>{index+1} / {images.length}</span><button className="btn" onClick={()=>setIndex((index+1)%images.length)}>다음</button></div></div>
    </dialog>
  </section>;
}
function Workshop({payload:published}:{payload:Payload}) {
  const api=useBridge();
  const [preview,setPreview]=useState<Payload|null>(null);
  const [adminOpen,setAdminOpen]=useState(false);
  const payload=api.authenticated&&preview?preview:published;
  const {site,apps,giscus}=payload;
  useEffect(()=>{if(!api.authenticated)setPreview(null);},[api.authenticated]);
  const [route,setRoute]=useState<Route>(readRoute);
  const [category,setCategory]=useState('전체');const [query,setQuery]=useState('');const [tag,setTag]=useState('');const [sort,setSort]=useState('featured');
  const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('workshop-theme')==='dark'?'dark':'light';}catch{return 'light';}});
  const [copied,setCopied]=useState('');
  const titleRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{const pop=()=>setRoute(readRoute());window.addEventListener('popstate',pop);return()=>window.removeEventListener('popstate',pop);},[]);
  useEffect(()=>{try{localStorage.setItem('workshop-theme',theme);}catch{}},[theme]);
  useEffect(()=>{const selected=apps.find(a=>a.id===route.app);document.title=`${selected?.title||site.title} · ${site.brand}`;setCopied('');},[route,apps,site]);
  const navigate=(next:Route)=>{history.pushState({},'',routeUrl(next));setRoute(next);titleRef.current?.scrollIntoView({block:'start'});requestAnimationFrame(()=>titleRef.current?.focus({preventScroll:true}));};
  const go=(view:string)=>navigate({view,app:''});const openApp=(id:string)=>navigate({view:'apps',app:id});
  const chooseCategory=(c:string)=>{setCategory(c);setTag('');setQuery('');go('apps');};
  const selected=apps.find(a=>a.id===route.app);
  const filtered=useMemo(()=>selectApps(apps,query,category,tag,sort),[apps,query,category,tag,sort]);
  const tags=[...new Set(apps.flatMap(a=>a.tags))];
  const featured=selectApps(apps,'','전체','','featured').filter(a=>a.featured).slice(0,3);
  const recent=selectApps(apps,'','전체','','recent').slice(0,3);
  const nav=[['home','home','공방 홈'],['apps','grid','앱 모음'],['about','user','제작자 소개'],['guestbook','chat','질문게시판']];
  const active=route.app?'apps':route.view;
  const categoryRow=<div className="category-row" aria-label="카테고리 바로가기">{site.categories.map((c,i)=><button key={c} onClick={()=>chooseCategory(c)}><span className={`category-circle tone-${i}`}><Icon name={symbols[i%5]} size={25}/></span><span>{c}</span></button>)}</div>;
  const cards=(list:CatalogApp[])=>list.length?<div className="app-grid">{list.map(a=><AppCard key={a.id} app={a} onOpen={openApp}/>)}</div>:<div className="empty"><Icon name="search" size={30}/><h3>아직 등록된 앱이 없어요.</h3></div>;
  const copyLink=async()=>{try{await navigator.clipboard.writeText(location.href);setCopied('링크를 복사했습니다.');}catch{setCopied('아래 주소를 복사해 주세요.');}};
  return <div className={`workshop ${theme}`}>
    <a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();titleRef.current?.scrollIntoView({block:'start'});titleRef.current?.focus({preventScroll:true});}}>본문으로 이동</a>
    <aside className="side-rail"><button className="brand" onClick={()=>go('home')}><span className="brand-mark">{site.brandMark||'a'}<span>✳</span></span><span>{site.brand}<small>TEACHER’S WORKSHOP</small></span></button><div className="rail-label">EXPLORE THE ATELIER</div><nav aria-label="주 메뉴">{nav.map(([view,icon,label])=><button key={view} className={active===view?'active':''} aria-current={active===view?'page':undefined} onClick={()=>go(view)}><Icon name={icon}/>{label}{active===view&&<i/>}</button>)}</nav>{site.sidebar?.visible!==false&&<div className="rail-note"><Icon name="spark" size={26}/><b>{site.sidebar?.title}</b><p style={{whiteSpace:'pre-line'}}>{site.sidebar?.body}</p></div>}<div className="rail-profile"><span className="avatar">T</span><div><b>{site.profile.name}</b><small>만드는 사람</small></div><Icon name="check" size={17}/></div></aside>
    <div className="main-canvas"><header className="topbar"><span className="mobile-brand">✳ {site.brand}</span><div className="breadcrumb">THE ATELIER <span>/</span> <b>{nav.find(n=>n[0]===active)?.[2]}</b></div><div className="top-actions"><span className="top-note"><i/>{site.topNote}</span><button className="btn admin-entry" onClick={()=>setAdminOpen(true)}>{api.authenticated?'관리 도구':'관리자 모드'}</button><button className="icon-button" aria-label={theme==='light'?'어두운 테마':'밝은 테마'} onClick={()=>setTheme(t=>t==='light'?'dark':'light')}><Icon name={theme==='light'?'moon':'sun'}/></button></div></header>
      <AdminDialog open={adminOpen} onClose={()=>setAdminOpen(false)} onPreview={setPreview} payload={published}/><main id="main-content" className="content" ref={titleRef} tabIndex={-1}>
      {preview&&api.authenticated&&<div className="preview-banner"><b>관리자 전용 미리보기 · 아직 게시되지 않았습니다.</b><div className="button-row"><button className="btn" onClick={()=>setAdminOpen(true)}>편집으로 돌아가기</button><button className="btn" onClick={()=>setPreview(null)}>미리보기 종료</button></div></div>}{payload.warnings.length>0&&<details className="data-warning"><summary>일부 소개 정보를 표시하지 못했습니다 ({payload.warnings.length})</summary><ul>{payload.warnings.map((w,i)=><li key={i}>{w}</li>)}</ul></details>}
      {route.app&&!selected?<section className="empty"><h1>앱을 찾을 수 없어요.</h1><p>주소가 변경되었거나 소개가 내려갔을 수 있습니다.</p><button className="btn primary" onClick={()=>go('apps')}>앱 모음으로</button></section>:selected?<>
        <button className="back-link" onClick={()=>go('apps')}><Icon name="back" size={17}/> 앱 모음으로</button>
        <div className="detail-heading"><div><span className="eyebrow">{selected.category} / {selected.isExample?'EXAMPLE':'APP STORY'}</span><h1>{selected.title}</h1><p>{selected.summary}</p></div><button className="btn" onClick={copyLink}><Icon name="share" size={17}/> 공유</button></div>
        {copied&&<div className="share-result" role="status">{copied}<input aria-label="공유 주소" value={location.href} readOnly onFocus={e=>e.target.select()}/></div>}
        {selected.isExample&&selected.showExampleBadge!==false&&<div className="example-note">예시 콘텐츠입니다. 미리보기는 소개용 일러스트이며 실제 서비스 화면이 아닙니다. 운영할 앱 정보와 이미지로 교체해 주세요.</div>}
        <div className="detail-layout"><div><Gallery key={selected.id} app={selected}/><section className="panel prose"><span className="eyebrow">ABOUT THIS APP</span><h2>이런 도구를 만들고 싶었어요.</h2><p>{selected.description||'상세 소개를 준비하고 있습니다.'}</p><h3>주요 기능</h3><ul>{selected.features.map(f=><li key={f}>{f}</li>)}</ul><h3>이렇게 활용해 보세요</h3><ul>{selected.useCases.map(f=><li key={f}>{f}</li>)}</ul><h3>사용 방법</h3>{selected.instructions.length?<ol>{selected.instructions.map(f=><li key={f}>{f}</li>)}</ol>:<p>사용 안내를 준비하고 있습니다.</p>}</section></div>
          <aside className="detail-aside panel"><span className="eyebrow">APP INFORMATION</span><h2>앱 한눈에 보기</h2><dl><dt>상태</dt><dd>{selected.isExample?'예시 콘텐츠':selected.status||'안내 준비 중'}</dd><dt>추천 사용자</dt><dd>{selected.targetUsers.join(' · ')||'누구나'}</dd><dt>지원 기기</dt><dd>{selected.supportedDevices.join(' · ')||'안내 준비 중'}</dd><dt>업데이트</dt><dd>{selected.updatedAt||'미입력'}</dd></dl><div className="stack">{safeUrl(selected.appUrl)?<Link url={selected.appUrl} primary>앱 실행하기</Link>:<span className="pending">앱 주소 준비 중</span>}<Link url={selected.githubUrl}>GitHub 소스</Link><Link url={selected.guideUrl}>사용 설명서</Link></div><div className="tags">{selected.tags.map(t=><span key={t}>#{t}</span>)}</div><h3>변경 내역</h3>{selected.changelog.length?<ul>{selected.changelog.map((c,i)=><li key={i}>{c}</li>)}</ul>:<p className="muted">등록된 변경 내역이 없습니다.</p>}</aside></div>
        <Comments key={selected.id} config={giscus} term={`app:${selected.id}`} theme={theme}/><PrivateForm key={'secret:'+selected.id} appId={selected.id}/>
        <section className="section"><div className="section-head"><div><span className="eyebrow">YOU MIGHT ALSO LIKE</span><h2>함께 둘러볼 앱</h2></div></div>{cards(apps.filter(a=>a.id!==selected.id).sort((a,b)=>Number(b.category===selected.category)-Number(a.category===selected.category)||a.sortOrder-b.sortOrder).slice(0,3))}</section>
      </>:route.view==='home'?<>
        <Home site={site} apps={apps} sections={payload.sections||[]} onView={go} onApp={openApp} onCategory={chooseCategory}/>
      </>:route.view==='apps'?<>
        <div className="collection-tools"><button className="btn" onClick={()=>setAdminOpen(true)}>{api.authenticated?'앱 편집·작성':'관리자 모드로 앱 편집'}</button></div><div className="page-heading"><span className="eyebrow">THE APP COLLECTION</span><h1>필요한 순간에,<br/>딱 맞는 도구.</h1><p>수업부터 학교의 일상까지, 하나씩 만들어 가는 앱 모음입니다.</p></div>
        <section className="filters" aria-label="앱 검색과 필터"><div className="filter-top"><label className="search-field"><Icon name="search"/><input aria-label="앱 검색" placeholder="앱 이름, 기능, 태그 검색" value={query} onChange={e=>setQuery(e.target.value)}/></label><label className="sort-field"><span className="sr-only">앱 정렬</span><select aria-label="앱 정렬" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">추천순</option><option value="recent">최근 업데이트순</option><option value="name">이름순</option></select></label></div><div className="filter-chips" aria-label="카테고리 필터">{['전체',...site.categories].map(c=><button key={c} className={category===c?'selected':''} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="filter-bottom"><label>태그 <select aria-label="태그 필터" value={tag} onChange={e=>setTag(e.target.value)}><option value="">전체 태그</option>{tags.map(t=><option key={t}>{t}</option>)}</select></label><button className="text-button" onClick={()=>{setQuery('');setCategory('전체');setTag('');setSort('featured');}}>필터 초기화</button></div></section>
        <p className="result-count" aria-live="polite">총 <b>{filtered.length}</b>개의 앱</p>
        {filtered.length?cards(filtered):<section className="empty"><Icon name="search" size={35}/><h2>검색 결과가 없어요.</h2><p>다른 검색어나 카테고리로 찾아보세요.</p><button className="btn" onClick={()=>{setQuery('');setCategory('전체');setTag('');}}>검색 조건 지우기</button></section>}
      </>:route.view==='about'?<>
        <div className="page-heading"><span className="eyebrow">BEHIND THE TOOLS</span><h1 style={{whiteSpace:'pre-line'}}>{site.profile.heading}</h1></div>{site.profile.visible!==false&&<section className="about-panel panel"><div className="profile-portrait">{site.profile.image?<Preview src={site.profile.image} alt={site.profile.name+' 프로필'}/>:<>T<span>✳</span></>}</div><div><span className="eyebrow">THE MAKER</span><h2>{site.profile.name}</h2><p className="intro">{site.profile.role}</p><p>{site.profile.bio}</p><div className="link-row">{site.profile.links.map(l=><Link key={l.url} url={l.url}>{l.label}</Link>)}</div></div></section>}{site.profile.showPrinciples!==false&&<div className="principles">{site.profile.principles.map((p,i)=><section className="panel" key={p}><span className="eyebrow">0{i+1}</span><h3>{p}</h3><Icon name={symbols[i]} size={32}/></section>)}</div>}{site.profile.showInvite!==false&&<section className="invite"><Icon name="spark" size={30}/><div><h2>{site.profile.inviteTitle}</h2><p>{site.profile.inviteBody}</p></div><button className="btn" onClick={()=>go('guestbook')}>{site.profile.buttonLabel} <Icon name="arrow" size={16}/></button></section>}
      </>:<><div className="page-heading"><span className="eyebrow">NOTES FROM YOU</span><h1>반가워요.<br/>이야기를 남겨주세요.</h1><p>앱 사용 중 궁금한 점이나 개선 아이디어를 남겨주세요.</p></div><Comments config={giscus} term="guestbook" theme={theme}/><PrivateForm/></>}
      {site.footerVisible!==false&&<footer><div><b>✳ {site.brand}</b><p>{site.footer}</p></div><span>{site.title}</span></footer>}
      </main></div>
    <nav className="mobile-nav" aria-label="모바일 메뉴">{nav.map(([view,icon,label])=><button key={view} className={active===view?'active':''} aria-current={active===view?'page':undefined} onClick={()=>go(view)}><Icon name={icon} size={21}/><span>{label}</span></button>)}</nav>
  </div>;
}
class Boundary extends React.Component<{children:React.ReactNode},{failed:boolean}> {
  state={failed:false};static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed?<div style={{padding:40}}><h1>화면을 불러오지 못했습니다.</h1><p>새로고침 후 다시 시도해 주세요.</p><button onClick={()=>location.reload()}>새로고침</button></div>:this.props.children;}
}
const instances=new Map<string,{mount:HTMLDivElement;root:Root;timer:number}>();
// Streamlit components v2 calls this renderer with its documented data/parentElement API.
export default function render({parentElement,data,setTriggerValue,key}:{parentElement:HTMLElement|ShadowRoot;data:Payload;setTriggerValue:(name:string,value:unknown)=>void;key:string}) {
  let record=instances.get(key);
  if(record){clearTimeout(record.timer);if(record.mount.parentNode!==parentElement)parentElement.appendChild(record.mount);}
  else{const mount=document.createElement('div');mount.id='workshop-root';parentElement.appendChild(mount);record={mount,root:createRoot(mount),timer:0};instances.set(key,record);}
  record.root.render(<Boundary><BridgeProvider payload={data} emit={setTriggerValue}><Workshop payload={data}/></BridgeProvider></Boundary>);
  const current=record;
  return ()=>{current.timer=window.setTimeout(()=>{if(!current.mount.isConnected){current.root.unmount();instances.delete(key);}},1000);};
}
