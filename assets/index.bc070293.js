const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}};V();const w={};let W=G;const S={},x=1,A=2,v={owned:null,cleanups:null,context:null,owner:null};var u=null;let N=null,p=null,m=null,r=null,h=null,B=0;function _(e,t){const n=p,i=u,s=e.length===0?v:{owned:null,cleanups:null,context:null,owner:t||i};u=s,p=null;try{return O(()=>e(()=>P(s)),!0)}finally{p=n,u=i}}function E(e,t,n){const i=J(e,t,!1,x);q(i)}function $(e){if(m)return e();let t;const n=m=[];try{t=e()}finally{m=null}return O(()=>{for(let i=0;i<n.length;i+=1){const s=n[i];if(s.pending!==S){const l=s.pending;s.pending=S,R(s,l)}}},!1),t}function M(e){let t,n=p;return p=null,t=e(),p=n,t}function R(e,t,n){if(m)return e.pending===S&&m.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&O(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s];i&&N.disposed.has(l),(i&&!l.tState||!i&&!l.state)&&(l.pure?r.push(l):h.push(l),l.observers&&H(l)),i||(l.state=x)}if(r.length>1e6)throw r=[],new Error},!1),t}function q(e){if(!e.fn)return;P(e);const t=u,n=p,i=B;p=u=e,j(e,e.value,i),p=n,u=t}function j(e,t,n){let i;try{i=e.fn(t)}catch(s){K(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?R(e,i):e.value=i,e.updatedAt=n)}function J(e,t,n,i=x,s){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return u===null||u!==v&&(u.owned?u.owned.push(l):u.owned=[l]),l}function F(e){const t=N;if(e.state===0||t)return;if(e.state===A||t)return T(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===x||t)q(e);else if(e.state===A||t){const s=r;r=null,T(e,n[0]),r=s}}function O(e,t){if(r)return e();let n=!1;t||(r=[]),h?n=!0:h=[],B++;try{const i=e();return X(n),i}catch(i){K(i)}finally{r=null,n||(h=null)}}function X(e){r&&(G(r),r=null),!e&&(h.length?$(()=>{W(h),h=null}):h=null)}function G(e){for(let t=0;t<e.length;t++)F(e[t])}function T(e,t){const n=N;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===x||n?s!==t&&F(s):(s.state===A||n)&&T(s,t))}}function H(e){const t=N;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=A,i.pure?r.push(i):h.push(i),i.observers&&H(i))}}function P(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const l=s.pop(),o=n.observerSlots.pop();i<s.length&&(l.sourceSlots[o]=i,s[i]=l,n.observerSlots[i]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)P(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function K(e){throw e}function Y(e,t){return M(()=>e(t||{}))}function Z(e,t,n){let i=n.length,s=t.length,l=i,o=0,f=0,a=t[s-1].nextSibling,d=null;for(;o<s||f<l;){if(t[o]===n[f]){o++,f++;continue}for(;t[s-1]===n[l-1];)s--,l--;if(s===o){const c=l<i?f?n[f-1].nextSibling:n[l-f]:a;for(;f<l;)e.insertBefore(n[f++],c)}else if(l===f)for(;o<s;)(!d||!d.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[f]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[f++],t[o++].nextSibling),e.insertBefore(n[--l],c),t[s]=n[l]}else{if(!d){d=new Map;let g=f;for(;g<l;)d.set(n[g],g++)}const c=d.get(t[o]);if(c!=null)if(f<c&&c<l){let g=o,b=1,I;for(;++g<s&&g<l&&!((I=d.get(t[g]))==null||I!==c+b);)b++;if(b>c-f){const Q=t[o];for(;f<c;)e.insertBefore(n[f++],Q)}else e.replaceChild(n[f++],t[o++])}else o++;else t[o++].remove()}}}function z(e,t,n){let i;return _(s=>{i=s,t===document?e():ee(t,e(),t.firstChild?null:void 0,n)}),()=>{i(),t.textContent=""}}function k(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function ee(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return C(e,t,i,n);E(s=>C(e,t(),s,n),i)}function C(e,t,n,i,s){for(w.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(w.context)return n;if(l==="number"&&(t=t.toString()),o){let f=n[0];f&&f.nodeType===3?f.data=t:f=document.createTextNode(t),n=y(e,n,i,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(w.context)return n;n=y(e,n,i)}else{if(l==="function")return E(()=>{let f=t();for(;typeof f=="function";)f=f();n=C(e,f,n,i)}),()=>n;if(Array.isArray(t)){const f=[];if(L(f,t,s))return E(()=>n=C(e,f,n,i,!0)),()=>n;if(w.context){for(let a=0;a<f.length;a++)if(f[a].parentNode)return n=f}if(f.length===0){if(n=y(e,n,i),o)return n}else Array.isArray(n)?n.length===0?U(e,f,i):Z(e,n,f):(n&&y(e),U(e,f));n=f}else if(t instanceof Node){if(w.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=y(e,n,i,t);y(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function L(e,t,n){let i=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],f;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=L(e,o)||i;else if((f=typeof o)=="string")e.push(document.createTextNode(o));else if(f==="function")if(n){for(;typeof o=="function";)o=o();i=L(e,Array.isArray(o)?o:[o])||i}else e.push(o),i=!0;else e.push(document.createTextNode(o.toString()))}return i}function U(e,t,n){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function y(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const f=t[o];if(s!==f){const a=f.parentNode===e;!l&&!o?a?e.replaceChild(s,f):e.insertBefore(s,n):a&&f.remove()}else l=!0}}else e.insertBefore(s,n);return[s]}const te=k("<div>Todo App</div>"),ne=()=>te.cloneNode(!0);const D=document.getElementById("root");D!=null&&z(()=>Y(ne,{}),D);