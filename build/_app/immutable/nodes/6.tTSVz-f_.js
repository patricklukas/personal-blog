const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/first-post.BvZ_5mqa.js","../chunks/disclose-version.gWCgNflt.js","../chunks/runtime.CHbzHt_K.js","../chunks/legacy.DZqyThBX.js"])))=>i.map(i=>d[i]);
import{_ as b,a as y,s as h}from"../chunks/preload-helper.vQGinmIm.js";import{a as p,t as f}from"../chunks/disclose-version.gWCgNflt.js";import"../chunks/legacy.DZqyThBX.js";import{x as w,G as P,B as x,$ as k,D as c,C as d,F as u}from"../chunks/runtime.CHbzHt_K.js";import{i as C,a as D}from"../chunks/lifecycle.nChBGCAD.js";import{p as E}from"../chunks/props.CFBt0vhp.js";import{a as M}from"../chunks/index.Bs6vu8vx.js";const O=(a,t,o)=>{const e=a[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})},$=async({params:a})=>{try{const t=await O(Object.assign({"../first-post.md":()=>b(()=>import("../chunks/first-post.BvZ_5mqa.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)}),`../${a.slug}.md`,2);console.log("Imported Post:",t);const{title:o,date:e}=t.metadata,r=t.default;if(!o||!e)throw new Error(`Metadata is missing or malformed in markdown file: ${a.slug}.md`);return{Content:r,meta:{title:o,date:e}}}catch(t){throw console.error(t),t}},F=Object.freeze(Object.defineProperty({__proto__:null,load:$},Symbol.toStringTag,{value:"Module"}));var j=f('<meta property="og:title">'),I=f('<article class="flow"><h1></h1> <small> </small> <!></article>');function G(a,t){w(t,!1);let o=E(t,"data",8);const{Content:e,meta:{title:r,date:s}}=o();C();var n=I();y(g=>{var m=j();k.title=`Pat's Page - ${r??""}`,D(m,"content",r),p(g,m)});var l=c(n);l.textContent=r;var i=d(l,2),_=c(i,!0);P(()=>h(_,M(s))),u(i);var v=d(i,2);e(v,{}),u(n),p(a,n),x()}export{G as component,F as universal};
