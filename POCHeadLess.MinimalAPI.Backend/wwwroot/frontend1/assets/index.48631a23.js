(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function g(){}function L(e){return e()}function A(){return Object.create(null)}function _(e){e.forEach(L)}function B(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function T(e,t,r){e.insertBefore(t,r||null)}function C(e){e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function q(){return S(" ")}function F(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function K(e){return Array.from(e.childNodes)}function z(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let k;function d(e){k=e}const a=[],N=[],p=[],j=[],D=Promise.resolve();let b=!1;function G(){b||(b=!0,D.then(P))}function x(e){p.push(e)}const $=new Set;let m=0;function P(){const e=k;do{for(;m<a.length;){const t=a[m];m++,d(t),H(t.$$)}for(d(null),a.length=0,m=0;N.length;)N.pop()();for(let t=0;t<p.length;t+=1){const r=p[t];$.has(r)||($.add(r),r())}p.length=0}while(a.length);for(;j.length;)j.pop()();b=!1,$.clear(),d(e)}function H(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const J=new Set;function Q(e,t){e&&e.i&&(J.delete(e),e.i(t))}function R(e,t,r,c){const{fragment:n,on_mount:o,on_destroy:s,after_update:u}=e.$$;n&&n.m(t,r),c||x(()=>{const f=o.map(L).filter(B);s?s.push(...f):_(f),e.$$.on_mount=[]}),u.forEach(x)}function U(e,t){const r=e.$$;r.fragment!==null&&(_(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function V(e,t){e.$$.dirty[0]===-1&&(a.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,r,c,n,o,s,u=[-1]){const f=k;d(e);const i=e.$$={fragment:null,ctx:null,props:o,update:g,not_equal:n,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:A(),dirty:u,skip_bound:!1,root:t.target||f.$$.root};s&&s(i.root);let w=!1;if(i.ctx=r?r(e,t.props||{},(l,v,...E)=>{const O=E.length?E[0]:v;return i.ctx&&n(i.ctx[l],i.ctx[l]=O)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](O),w&&V(e,l)),v}):[],i.update(),w=!0,_(i.before_update),i.fragment=c?c(i.ctx):!1,t.target){if(t.hydrate){const l=K(t.target);i.fragment&&i.fragment.l(l),l.forEach(C)}else i.fragment&&i.fragment.c();t.intro&&Q(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),P()}d(f)}class X{$destroy(){U(this,1),this.$destroy=g}$on(t,r){const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(r),()=>{const n=c.indexOf(r);n!==-1&&c.splice(n,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(e){let t,r,c,n,o;return{c(){t=y("main"),r=y("h1"),r.textContent="Options",c=q(),n=y("div"),o=S(e[0]),F(n,"class","card")},m(s,u){T(s,t,u),h(t,r),h(t,c),h(t,n),h(n,o)},p(s,[u]){u&1&&z(o,s[0])},i:g,o:g,d(s){s&&C(t)}}}function Z(e,t,r){let c="";return fetch("https://localhost:7294/example").then(n=>n.json()).then(n=>{console.log(n),r(0,c=n.message)}),[c]}class ee extends X{constructor(t){super(),W(this,t,Z,Y,I,{})}}new ee({target:document.getElementById("app")});
