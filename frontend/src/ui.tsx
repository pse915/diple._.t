import React from 'react';
import type {CatalogApp} from './types';
import {safeUrl} from './logic';
const artFallback='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600"><rect width="960" height="600" fill="#eee9e2"/><rect x="330" y="170" width="300" height="190" rx="24" fill="#d6c5b6"/><path d="m360 320 65-80 55 50 48-65 70 95" fill="none" stroke="#796754" stroke-width="12"/><text x="480" y="420" text-anchor="middle" font-size="28" fill="#65574c" font-family="sans-serif">미리보기 준비 중</text></svg>');
const symbols=['layers','calendar','game','sun','spark'];
export function Icon({name,size=21}:{name:string;size?:number}) {
  const paths:Record<string,React.ReactNode>={
    home:<><path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9M9 21v-7h6v7"/></>,
    grid:<><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
    user:<><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></>,
    chat:<path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0Z"/>,
    arrow:<><path d="M4 12h16m-6-6 6 6-6 6"/></>,
    external:<><path d="M14 3h7v7m0-7L10 14M10 3H4v17h17v-6"/></>,
    search:<><circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/></>,
    sun:<><circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/></>,
    moon:<path d="M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z"/>,
    layers:<><path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/></>,
    calendar:<><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 2v6m10-6v6M3 11h18m-12 4h2m4 0h2m-8 3h2"/></>,
    game:<><path d="M7 7h10c3 0 5 9 4 11-2 3-5-2-6-2H9c-1 0-4 5-6 2C2 16 4 7 7 7Z"/><path d="M8 10v5m-2-2h4m6-1h.1m2 2h.1"/></>,
    spark:<><path d="m12 3 2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z"/></>,
    close:<path d="m6 6 12 12M6 18 18 6"/>,
    share:<><path d="M12 16V3m-5 5 5-5 5 5M4 13v8h16v-8"/></>,
    back:<path d="M20 12H4m6-6-6 6 6 6"/>,
    check:<path d="m5 12 4 4L20 5"/>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[name]||paths.spark}</svg>;
}
export function Preview({src,alt,className=''}:{src:string;alt:string;className?:string}) {
  return <img className={className} src={src||artFallback} alt={alt} loading="lazy" width="960" height="600" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=artFallback;}}/>;
}
export function Link({url,children,primary=false}:{url:string;children:React.ReactNode;primary?:boolean}) {
  return safeUrl(url)?<a className={`btn ${primary?'primary':''}`} href={safeUrl(url)} target="_blank" rel="noopener noreferrer">{children}<Icon name="external" size={16}/></a>:null;
}
export function AppCard({app,onOpen}:{app:CatalogApp;onOpen:(id:string)=>void}) {
  return <article className="app-card">
    <button className="card-preview" onClick={()=>onOpen(app.id)} aria-label={`${app.title} 상세 보기`}><Preview src={app.thumbnail} alt={`${app.title} 미리보기`}/>{app.featured&&<span className="pick-label">EDITOR’S PICK</span>}<span className="preview-arrow"><Icon name="arrow" size={19}/></span></button>
    <div className="card-content"><div className="card-meta"><span>{app.category}</span><span>{app.isExample&&app.showExampleBadge!==false?'예시 콘텐츠':app.status||'소개'}</span></div><h3><button onClick={()=>onOpen(app.id)}>{app.title}</button></h3><p>{app.summary}</p><div className="card-bottom"><span>{app.tags.slice(0,2).map(t=>'#'+t).join(' ')}</span><button className="icon-button" aria-label={`${app.title} 댓글 보기`} onClick={()=>onOpen(app.id)}><Icon name="chat" size={18}/></button></div></div>
  </article>;
}
