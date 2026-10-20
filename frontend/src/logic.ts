import type { CatalogApp } from './types';
export function safeUrl(value:string):string {
  if (!value || /[\s\x00-\x1f]/.test(value)) return '';
  try { const u=new URL(value); return ['https:','http:'].includes(u.protocol) && !u.username && !u.password ? u.href : ''; } catch { return ''; }
}
export function selectApps(apps:CatalogApp[], query:string, category:string, tag:string, sort:string) {
  const q=query.trim().toLocaleLowerCase();
  return apps.filter(a=>(category==='전체'||a.category===category) && (!tag||a.tags.includes(tag)) && (!q||[a.title,a.summary,a.description,...a.tags].join(' ').toLocaleLowerCase().includes(q)))
    .sort((a,b)=> sort==='name' ? a.title.localeCompare(b.title,'ko') : sort==='recent' ? b.updatedAt.localeCompare(a.updatedAt)||a.sortOrder-b.sortOrder : Number(b.featured)-Number(a.featured)||a.sortOrder-b.sortOrder||a.title.localeCompare(b.title,'ko'));
}
export type Route={view:string; app:string};
export function readRoute():Route {
  const p=new URLSearchParams(location.search);
  return {app:p.get('app')||'',view:['home','apps','about','guestbook'].includes(p.get('view')||'')?p.get('view')!:'home'};
}
export function routeUrl(route:Route) {
  const url=new URL(location.href); url.searchParams.delete('app'); url.searchParams.delete('view');
  if(route.app) url.searchParams.set('app',route.app);
  else if(route.view!=='home') url.searchParams.set('view',route.view);
  url.hash=''; return url;
}
