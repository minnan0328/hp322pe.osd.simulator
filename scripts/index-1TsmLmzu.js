const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["scripts/home-X4fZKYw5.js","scripts/vendor-CCjDEcj9.js","css/home.CmR1-mEb.css"])))=>i.map(i=>d[i]);
import{d as _,R as h,o as y,c as g,a as v,b as P,e as b,f as E}from"./vendor-CCjDEcj9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const w=_({__name:"App",setup(s,{expose:o}){o();const r={get RouterView(){return h}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),O=(s,o)=>{const r=s.__vccOpts||s;for(const[a,t]of o)r[a]=t;return r};function L(s,o,r,a,t,e){return y(),g(a.RouterView)}const A=O(w,[["render",L],["__file","/Users/minnanliao/Documents/Min/Min Web Project/hp322pe.osd.simulator/src/App.vue"]]),R="modulepreload",S=function(s){return"/hp322pe.osd.simulator/"+s},p={},$=function(o,r,a){let t=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));t=Promise.all(r.map(i=>{if(i=S(i),i in p)return;p[i]=!0;const u=i.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script",c.crossOrigin=""),c.href=i,n&&c.setAttribute("nonce",n),document.head.appendChild(c),u)return new Promise((f,m)=>{c.addEventListener("load",f),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return t.then(()=>o()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})},x=v({history:P("/hp322pe.osd.simulator/"),routes:[{path:"/",name:"home",component:()=>$(()=>import("./home-X4fZKYw5.js"),__vite__mapDeps([0,1,2]))}]}),l=b(A);l.use(E());l.use(x);l.mount("#app");export{O as _};
