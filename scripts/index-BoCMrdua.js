const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["scripts/home-Df2s97fe.js","scripts/vendor-CCjDEcj9.js","css/home.CZpOgOrP.css"])))=>i.map(i=>d[i]);
import{d as _,R as h,o as y,c as v,a as g,b,e as w,f as P}from"./vendor-CCjDEcj9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const E=_({__name:"App",setup(s,{expose:o}){o();const r={get RouterView(){return h}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),O=(s,o)=>{const r=s.__vccOpts||s;for(const[u,t]of o)r[u]=t;return r};function L(s,o,r,u,t,e){return y(),v(u.RouterView)}const S=O(E,[["render",L],["__file","/Users/minnan/Documents/work/外包專案/web.developers/OSD/hp322pe.osd.simulator/src/App.vue"]]),A="modulepreload",R=function(s){return"/hp322pe.osd.simulator/"+s},p={},$=function(o,r,u){let t=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));t=Promise.all(r.map(c=>{if(c=R(c),c in p)return;p[c]=!0;const a=c.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":A,a||(i.as="script",i.crossOrigin=""),i.href=c,n&&i.setAttribute("nonce",n),document.head.appendChild(i),a)return new Promise((f,m)=>{i.addEventListener("load",f),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}return t.then(()=>o()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})},C=g({history:b("/hp322pe.osd.simulator/"),routes:[{path:"/",name:"home",component:()=>$(()=>import("./home-Df2s97fe.js"),__vite__mapDeps([0,1,2]))}]}),l=w(S);l.use(P());l.use(C);l.mount("#app");export{O as _};
