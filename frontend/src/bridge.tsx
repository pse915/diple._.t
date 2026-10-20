import React,{createContext,useContext,useEffect,useRef,useState} from 'react';
import type {Payload} from './types';
type Emit=(name:string,value:unknown)=>void;
type Bridge={request:(action:string,fields?:Record<string,unknown>)=>Promise<Record<string,any>>;busy:boolean;authenticated:boolean;configured:boolean;privateConfigured:boolean;expiresAt:number};
const Context=createContext<Bridge>(null!);
export const useBridge=()=>useContext(Context);
export function BridgeProvider({payload,emit,children}:{payload:Payload;emit:Emit;children:React.ReactNode}){
  const pending=useRef<{id:string;resolve:(v:Record<string,any>)=>void;reject:(e:Error)=>void;timer:number}|null>(null);
  const [busy,setBusy]=useState(false);const [clock,setClock]=useState(Date.now());
  const access=payload.access;
  const authenticated=!!access?.authenticated&&clock<access.expiresAt;
  const request=(action:string,fields:Record<string,unknown>={})=>new Promise<Record<string,any>>((resolve,reject)=>{
    if(pending.current){reject(new Error('이전 요청을 처리하고 있습니다.'));return;}
    const id=typeof fields.requestId==='string'?fields.requestId:crypto.randomUUID();
    const timer=window.setTimeout(()=>{pending.current=null;setBusy(false);reject(new Error('응답이 지연됩니다. 입력은 유지됩니다. 저장 여부를 확인한 뒤 다시 시도하세요.'));},45000);
    pending.current={id,resolve,reject,timer};setBusy(true);
    emit('event',{...fields,id,action});
  });
  useEffect(()=>{const response=payload.response,p=pending.current;if(!response||!p||response.id!==p.id)return;clearTimeout(p.timer);pending.current=null;setBusy(false);if(response.ok)p.resolve(response.result||{});else p.reject(new Error(response.error||'처리하지 못했습니다.'));},[payload.response]);
  useEffect(()=>()=>{if(pending.current){clearTimeout(pending.current.timer);pending.current.reject(new Error('화면 연결이 종료되었습니다.'));pending.current=null;}},[]);
  useEffect(()=>{const t=setInterval(()=>setClock(Date.now()),1000);return()=>clearInterval(t);},[]);
  const requestRef=useRef(request);requestRef.current=request;
  useEffect(()=>{const t=setInterval(()=>{if(!pending.current)void requestRef.current('heartbeat').catch(()=>{});},15000);return()=>clearInterval(t);},[]);
  useEffect(()=>{if(access?.authenticated&&!authenticated&&!pending.current)void requestRef.current('heartbeat').catch(()=>{});},[authenticated,access]);
  useEffect(()=>{const t=setInterval(()=>{if(!pending.current)void requestRef.current('refresh').catch(()=>{});},60000);return()=>clearInterval(t);},[]);
  return <Context.Provider value={{request,busy,authenticated,configured:!!access?.adminConfigured,privateConfigured:!!access?.privateConfigured,expiresAt:access?.expiresAt||0}}>{children}</Context.Provider>;
}
