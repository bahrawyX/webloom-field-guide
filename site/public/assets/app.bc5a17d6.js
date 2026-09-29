(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function fe(){}function fi(s,e){for(const t in e)s[t]=e[t];return s}function kh(s){return s&&typeof s=="object"&&typeof s.then=="function"}function wf(s){return s()}function Ho(){return Object.create(null)}function Jt(s){s.forEach(wf)}function po(s){return typeof s=="function"}function Ge(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let Bs;function wr(s,e){return Bs||(Bs=document.createElement("a")),Bs.href=e,s===Bs.href}function Fh(s){return Object.keys(s).length===0}function mo(s,...e){if(s==null)return fe;const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ct(s,e,t){s.$$.on_destroy.push(mo(e,t))}function xi(s,e,t,n){if(s){const i=Sf(s,e,t,n);return s[0](i)}}function Sf(s,e,t,n){return s[1]&&n?fi(t.ctx.slice(),s[1](n(e))):t.ctx}function yi(s,e,t,n){if(s[2]&&n){const i=s[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|i[o];return r}return e.dirty|i}return e.dirty}function bi(s,e,t,n,i,r){if(i){const a=Sf(e,t,n,r);s.p(a,i)}}function Mi(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function ja(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function Vo(s,e){const t={};e=new Set(e);for(const n in s)!e.has(n)&&n[0]!=="$"&&(t[n]=s[n]);return t}function rt(s){return s==null?"":s}function Dt(s,e,t){return s.set(t),e}function F(s,e){s.appendChild(e)}function Y(s,e,t){s.insertBefore(e,t||null)}function X(s){s.parentNode&&s.parentNode.removeChild(s)}function wt(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function W(s){return document.createElement(s)}function Nh(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function ke(s){return document.createTextNode(s)}function ce(){return ke(" ")}function it(){return ke("")}function Je(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function D(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function Wo(s,e){const t=Object.getOwnPropertyDescriptors(s.__proto__);for(const n in e)e[n]==null?s.removeAttribute(n):n==="style"?s.style.cssText=e[n]:n==="__value"?s.value=s[n]=e[n]:t[n]&&t[n].set?s[n]=e[n]:D(s,n,e[n])}function jo(s){return s===""?null:+s}function Oh(s){return Array.from(s.childNodes)}function lt(s,e){e=""+e,s.wholeText!==e&&(s.data=e)}function Gi(s,e){s.value=e==null?"":e}function vt(s,e,t,n){t===null?s.style.removeProperty(e):s.style.setProperty(e,t,n?"important":"")}function zh(s,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(s,t,n,e),i}class Uh{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=Nh(t.nodeName):this.e=W(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)Y(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(X)}}function $o(s,e){return new s(e)}let Ls;function Dn(s){Ls=s}function Kn(){if(!Ls)throw new Error("Function called outside component initialization");return Ls}function Bh(s){Kn().$$.before_update.push(s)}function wi(s){Kn().$$.on_mount.push(s)}function Gh(s){Kn().$$.after_update.push(s)}function Cr(s){Kn().$$.on_destroy.push(s)}function Tf(){const s=Kn();return(e,t,{cancelable:n=!1}={})=>{const i=s.$$.callbacks[e];if(i){const r=zh(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(s,r)}),!r.defaultPrevented}return!0}}function qo(s,e){return Kn().$$.context.set(s,e),e}function Xi(s){return Kn().$$.context.get(s)}const Ms=[],yt=[],_r=[],Xo=[],Ef=Promise.resolve();let $a=!1;function Af(){$a||($a=!0,Ef.then(go))}function Gs(){return Af(),Ef}function Sr(s){_r.push(s)}const Gr=new Set;let Hs=0;function go(){const s=Ls;do{for(;Hs<Ms.length;){const e=Ms[Hs];Hs++,Dn(e),Hh(e.$$)}for(Dn(null),Ms.length=0,Hs=0;yt.length;)yt.pop()();for(let e=0;e<_r.length;e+=1){const t=_r[e];Gr.has(t)||(Gr.add(t),t())}_r.length=0}while(Ms.length);for(;Xo.length;)Xo.pop()();$a=!1,Gr.clear(),Dn(s)}function Hh(s){if(s.fragment!==null){s.update(),Jt(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(Sr)}}const vr=new Set;let ai;function ze(){ai={r:0,c:[],p:ai}}function Ue(){ai.r||Jt(ai.c),ai=ai.p}function O(s,e){s&&s.i&&(vr.delete(s),s.i(e))}function $(s,e,t,n){if(s&&s.o){if(vr.has(s))return;vr.add(s),ai.c.push(()=>{vr.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}else n&&n()}function Yo(s,e){const t=e.token={};function n(i,r,a,o){if(e.token!==t)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=i&&(e.current=i)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach((f,h)=>{h!==r&&f&&(ze(),$(f,1,1,()=>{e.blocks[h]===f&&(e.blocks[h]=null)}),Ue())}):e.block.d(1),c.c(),O(c,1),c.m(e.mount(),e.anchor),u=!0),e.block=c,e.blocks&&(e.blocks[r]=c),u&&go()}if(kh(s)){const i=Kn();if(s.then(r=>{Dn(i),n(e.then,1,e.value,r),Dn(null)},r=>{if(Dn(i),n(e.catch,2,e.error,r),Dn(null),!e.hasCatch)throw r}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,s),!0;e.resolved=s}}function Vh(s,e,t){const n=e.slice(),{resolved:i}=s;s.current===s.then&&(n[s.value]=i),s.current===s.catch&&(n[s.error]=i),s.block.p(n,t)}const Wh=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Lf(s,e){const t={},n={},i={$$scope:1};let r=s.length;for(;r--;){const a=s[r],o=e[r];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)i[l]||(t[l]=o[l],i[l]=1);s[r]=o}else for(const l in a)i[l]=1}for(const a in n)a in t||(t[a]=void 0);return t}function Ko(s){return typeof s=="object"&&s!==null?s:{}}function Re(s){s&&s.c()}function Le(s,e,t,n){const{fragment:i,after_update:r}=s.$$;i&&i.m(e,t),n||Sr(()=>{const a=s.$$.on_mount.map(wf).filter(po);s.$$.on_destroy?s.$$.on_destroy.push(...a):Jt(a),s.$$.on_mount=[]}),r.forEach(Sr)}function Ce(s,e){const t=s.$$;t.fragment!==null&&(Jt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function jh(s,e){s.$$.dirty[0]===-1&&(Ms.push(s),Af(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function Ve(s,e,t,n,i,r,a,o=[-1]){const l=Ls;Dn(s);const c=s.$$={fragment:null,ctx:[],props:r,update:fe,not_equal:i,bound:Ho(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ho(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(s,e.props||{},(f,h,...m)=>{const g=m.length?m[0]:h;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&jh(s,f)),h}):[],c.update(),u=!0,Jt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Oh(e.target);c.fragment&&c.fragment.l(f),f.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&O(s.$$.fragment),Le(s,e.target,e.anchor,e.customElement),go()}Dn(l)}class We{$destroy(){Ce(this,1),this.$destroy=fe}$on(e,t){if(!po(t))return fe;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Fh(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ei=[];function Cf(s,e){return{subscribe:bn(s,e).subscribe}}function bn(s,e=fe){let t;const n=new Set;function i(o){if(Ge(s,o)&&(s=o,t)){const l=!Ei.length;for(const c of n)c[1](),Ei.push(c,s);if(l){for(let c=0;c<Ei.length;c+=2)Ei[c][0](Ei[c+1]);Ei.length=0}}}function r(o){i(o(s))}function a(o,l=fe){const c=[o,l];return n.add(c),n.size===1&&(t=e(i)||fe),o(s),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:r,subscribe:a}}function $h(s,e,t){const n=!Array.isArray(s),i=n?[s]:s,r=e.length<2;return Cf(t,a=>{let o=!1;const l=[];let c=0,u=fe;const f=()=>{if(c)return;u();const m=e(n?l[0]:l,a);r?a(m):u=po(m)?m:fe},h=i.map((m,g)=>mo(m,p=>{l[g]=p,c&=~(1<<g),o&&f()},()=>{c|=1<<g}));return o=!0,f(),function(){Jt(h),u()}})}const Tr={},Er={};function Hr(s){return{...s.location,state:s.history.state,key:s.history.state&&s.history.state.key||"initial"}}function qh(s,e){const t=[];let n=Hr(s);return{get location(){return n},listen(i){t.push(i);const r=()=>{n=Hr(s),i({location:n,action:"POP"})};return s.addEventListener("popstate",r),()=>{s.removeEventListener("popstate",r);const a=t.indexOf(i);t.splice(a,1)}},navigate(i,{state:r,replace:a=!1}={}){r={...r,key:Date.now()+""};try{a?s.history.replaceState(r,null,i):s.history.pushState(r,null,i)}catch{s.location[a?"replace":"assign"](i)}n=Hr(s),t.forEach(o=>o({location:n,action:"PUSH"}))}}}function Xh(s="/"){let e=0;const t=[{pathname:s,search:""}],n=[];return{get location(){return t[e]},addEventListener(i,r){},removeEventListener(i,r){},history:{get entries(){return t},get index(){return e},get state(){return n[e]},pushState(i,r,a){const[o,l=""]=a.split("?");e++,t.push({pathname:o,search:l}),n.push(i)},replaceState(i,r,a){const[o,l=""]=a.split("?");t[e]={pathname:o,search:l},n[e]=i}}}}const Yh=Boolean(typeof window<"u"&&window.document&&window.document.createElement),qa=qh(Yh?window:Xh()),{navigate:Kh}=qa,Rf=/^:(.+)/,Zo=4,Zh=3,Jh=2,Qh=1,ed=1;function Xa(s,e){return s.substr(0,e.length)===e}function td(s){return s===""}function nd(s){return Rf.test(s)}function Pf(s){return s[0]==="*"}function Cs(s){return s.replace(/(^\/+|\/+$)/g,"").split("/")}function Vr(s){return s.replace(/(^\/+|\/+$)/g,"")}function id(s,e){const t=s.default?0:Cs(s.path).reduce((n,i)=>(n+=Zo,td(i)?n+=ed:nd(i)?n+=Jh:Pf(i)?n-=Zo+Qh:n+=Zh,n),0);return{route:s,score:t,index:e}}function sd(s){return s.map(id).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function Df(s,e){let t,n;const[i]=e.split("?"),r=Cs(i),a=r[0]==="",o=sd(s);for(let l=0,c=o.length;l<c;l++){const u=o[l].route;let f=!1;if(u.default){n={route:u,params:{},uri:e};continue}const h=Cs(u.path),m={},g=Math.max(r.length,h.length);let p=0;for(;p<g;p++){const d=h[p],v=r[p];if(d!==void 0&&Pf(d)){const _=d==="*"?"*":d.slice(1);m[_]=r.slice(p).map(decodeURIComponent).join("/");break}if(v===void 0){f=!0;break}let y=Rf.exec(d);if(y&&!a){const _=decodeURIComponent(v);m[y[1]]=_}else if(d!==v){f=!0;break}}if(!f){t={route:u,params:m,uri:"/"+r.slice(0,p).join("/")};break}}return t||n||null}function rd(s,e){return Df([s],e)}function Wr(s,e){return s+(e?`?${e}`:"")}function ad(s,e){if(Xa(s,"/"))return s;const[t,n]=s.split("?"),[i]=e.split("?"),r=Cs(t),a=Cs(i);if(r[0]==="")return Wr(i,n);if(!Xa(r[0],".")){const c=a.concat(r).join("/");return Wr((i==="/"?"":"/")+c,n)}const o=a.concat(r),l=[];return o.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),Wr("/"+l.join("/"),n)}function Jo(s,e){return`${Vr(e==="/"?s:`${Vr(s)}/${Vr(e)}`)}/`}function od(s){return!s.defaultPrevented&&s.button===0&&!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ld(s){let e;const t=s[9].default,n=xi(t,s,s[8],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&bi(n,t,i,i[8],e?yi(t,i[8],r,null):Mi(i[8]),null)},i(i){e||(O(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function cd(s,e,t){let n,i,r,{$$slots:a={},$$scope:o}=e,{basepath:l="/"}=e,{url:c=null}=e;const u=Xi(Tr),f=Xi(Er),h=bn([]);ct(s,h,x=>t(6,i=x));const m=bn(null);let g=!1;const p=u||bn(c?{pathname:c}:qa.location);ct(s,p,x=>t(5,n=x));const d=f?f.routerBase:bn({path:l,uri:l});ct(s,d,x=>t(7,r=x));const v=$h([d,m],([x,b])=>{if(b===null)return x;const{path:w}=x,{route:E,uri:M}=b;return{path:E.default?w:E.path.replace(/\*.*$/,""),uri:M}});function y(x){const{path:b}=r;let{path:w}=x;if(x._path=w,x.path=Jo(b,w),typeof window>"u"){if(g)return;const E=rd(x,n.pathname);E&&(m.set(E),g=!0)}else h.update(E=>(E.push(x),E))}function _(x){h.update(b=>{const w=b.indexOf(x);return b.splice(w,1),b})}return u||(wi(()=>qa.listen(b=>{p.set(b.location)})),qo(Tr,p)),qo(Er,{activeRoute:m,base:d,routerBase:v,registerRoute:y,unregisterRoute:_}),s.$$set=x=>{"basepath"in x&&t(3,l=x.basepath),"url"in x&&t(4,c=x.url),"$$scope"in x&&t(8,o=x.$$scope)},s.$$.update=()=>{if(s.$$.dirty&128){const{path:x}=r;h.update(b=>(b.forEach(w=>w.path=Jo(x,w._path)),b))}if(s.$$.dirty&96){const x=Df(i,n.pathname);m.set(x)}},[h,p,d,l,c,n,i,r,o,a]}class ud extends We{constructor(e){super(),Ve(this,e,cd,ld,Ge,{basepath:3,url:4})}}const fd=s=>({params:s&4,location:s&16}),Qo=s=>({params:s[2],location:s[4]});function el(s){let e,t,n,i;const r=[dd,hd],a=[];function o(l,c){return l[0]!==null?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=it()},m(l,c){a[e].m(l,c),Y(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(ze(),$(a[u],1,1,()=>{a[u]=null}),Ue(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),O(t,1),t.m(n.parentNode,n))},i(l){i||(O(t),i=!0)},o(l){$(t),i=!1},d(l){a[e].d(l),l&&X(n)}}}function hd(s){let e;const t=s[10].default,n=xi(t,s,s[9],Qo);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&532)&&bi(n,t,i,i[9],e?yi(t,i[9],r,fd):Mi(i[9]),Qo)},i(i){e||(O(n,i),e=!0)},o(i){$(n,i),e=!1},d(i){n&&n.d(i)}}}function dd(s){let e,t,n;const i=[{location:s[4]},s[2],s[3]];var r=s[0];function a(o){let l={};for(let c=0;c<i.length;c+=1)l=fi(l,i[c]);return{props:l}}return r&&(e=$o(r,a())),{c(){e&&Re(e.$$.fragment),t=it()},m(o,l){e&&Le(e,o,l),Y(o,t,l),n=!0},p(o,l){const c=l&28?Lf(i,[l&16&&{location:o[4]},l&4&&Ko(o[2]),l&8&&Ko(o[3])]):{};if(r!==(r=o[0])){if(e){ze();const u=e;$(u.$$.fragment,1,0,()=>{Ce(u,1)}),Ue()}r?(e=$o(r,a()),Re(e.$$.fragment),O(e.$$.fragment,1),Le(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(o){n||(e&&O(e.$$.fragment,o),n=!0)},o(o){e&&$(e.$$.fragment,o),n=!1},d(o){o&&X(t),e&&Ce(e,o)}}}function pd(s){let e,t,n=s[1]!==null&&s[1].route===s[7]&&el(s);return{c(){n&&n.c(),e=it()},m(i,r){n&&n.m(i,r),Y(i,e,r),t=!0},p(i,[r]){i[1]!==null&&i[1].route===i[7]?n?(n.p(i,r),r&2&&O(n,1)):(n=el(i),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(ze(),$(n,1,1,()=>{n=null}),Ue())},i(i){t||(O(n),t=!0)},o(i){$(n),t=!1},d(i){n&&n.d(i),i&&X(e)}}}function md(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e,{path:o=""}=e,{component:l=null}=e;const{registerRoute:c,unregisterRoute:u,activeRoute:f}=Xi(Er);ct(s,f,d=>t(1,n=d));const h=Xi(Tr);ct(s,h,d=>t(4,i=d));const m={path:o,default:o===""};let g={},p={};return c(m),typeof window<"u"&&Cr(()=>{u(m)}),s.$$set=d=>{t(13,e=fi(fi({},e),ja(d))),"path"in d&&t(8,o=d.path),"component"in d&&t(0,l=d.component),"$$scope"in d&&t(9,a=d.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&n&&n.route===m&&t(2,g=n.params);{const{path:d,component:v,...y}=e;t(3,p=y)}},e=ja(e),[l,n,g,p,i,f,h,m,o,a,r]}class us extends We{constructor(e){super(),Ve(this,e,md,pd,Ge,{path:8,component:0})}}function gd(s){let e,t,n,i;const r=s[16].default,a=xi(r,s,s[15],null);let o=[{href:s[0]},{"aria-current":s[2]},s[1],s[6]],l={};for(let c=0;c<o.length;c+=1)l=fi(l,o[c]);return{c(){e=W("a"),a&&a.c(),Wo(e,l)},m(c,u){Y(c,e,u),a&&a.m(e,null),t=!0,n||(i=Je(e,"click",s[5]),n=!0)},p(c,[u]){a&&a.p&&(!t||u&32768)&&bi(a,r,c,c[15],t?yi(r,c[15],u,null):Mi(c[15]),null),Wo(e,l=Lf(o,[(!t||u&1)&&{href:c[0]},(!t||u&4)&&{"aria-current":c[2]},u&2&&c[1],u&64&&c[6]]))},i(c){t||(O(a,c),t=!0)},o(c){$(a,c),t=!1},d(c){c&&X(e),a&&a.d(c),n=!1,i()}}}function _d(s,e,t){let n;const i=["to","replace","state","getProps"];let r=Vo(e,i),a,o,{$$slots:l={},$$scope:c}=e,{to:u="#"}=e,{replace:f=!1}=e,{state:h={}}=e,{getProps:m=()=>({})}=e;const{base:g}=Xi(Er);ct(s,g,w=>t(14,o=w));const p=Xi(Tr);ct(s,p,w=>t(13,a=w));const d=Tf();let v,y,_,x;function b(w){if(d("click",w),od(w)){w.preventDefault();const E=a.pathname===v||f;Kh(v,{state:h,replace:E})}}return s.$$set=w=>{e=fi(fi({},e),ja(w)),t(6,r=Vo(e,i)),"to"in w&&t(7,u=w.to),"replace"in w&&t(8,f=w.replace),"state"in w&&t(9,h=w.state),"getProps"in w&&t(10,m=w.getProps),"$$scope"in w&&t(15,c=w.$$scope)},s.$$.update=()=>{s.$$.dirty&16512&&t(0,v=u==="/"?o.uri:ad(u,o.uri)),s.$$.dirty&8193&&t(11,y=Xa(a.pathname,v)),s.$$.dirty&8193&&t(12,_=v===a.pathname),s.$$.dirty&4096&&t(2,n=_?"page":void 0),s.$$.dirty&15361&&t(1,x=m({location:a,href:v,isPartiallyCurrent:y,isCurrent:_}))},[v,x,n,g,p,b,r,u,f,h,m,y,_,a,o,c,l]}class Ar extends We{constructor(e){super(),Ve(this,e,_d,gd,Ge,{to:7,replace:8,state:9,getProps:10})}}function vd(s){let e,t=s[0].content[0].value+"",n,i;return{c(){e=W("a"),n=ke(t),D(e,"href",i=s[0].data.uri),D(e,"target","_blank"),D(e,"rel","noreferrer"),D(e,"class","svelte-1yggykg")},m(r,a){Y(r,e,a),F(e,n)},p(r,[a]){a&1&&t!==(t=r[0].content[0].value+"")&&lt(n,t),a&1&&i!==(i=r[0].data.uri)&&D(e,"href",i)},i:fe,o:fe,d(r){r&&X(e)}}}function xd(s,e,t){let{item:n}=e;return s.$$set=i=>{"item"in i&&t(0,n=i.item)},[n]}class If extends We{constructor(e){super(),Ve(this,e,xd,vd,Ge,{item:0})}}class yd{constructor(e,t){this.accessToken=e,this.space=t,this.apiUrl="https://cdn.contentful.com/spaces",this.graphqlUrl="https://graphql.contentful.com/content/v1/spaces"}async getEntries(){try{return await(await fetch(`${this.apiUrl}/${this.space}/entries?access_token=${this.accessToken}`)).json()}catch(e){return console.error(e),{}}}async getEntry(e){try{return await(await fetch(`${this.apiUrl}/${this.space}/entries/${e}?access_token=${this.accessToken}`)).json()}catch(t){return console.error(t),{}}}async getAsset(e){try{return await(await fetch(`${this.apiUrl}/${this.space}/assets/${e}?access_token=${this.accessToken}`)).json()}catch{return{}}}async getTitles(){var e=new Headers;e.append("Accept-Encoding","gzip, deflate, br"),e.append("Content-Type","application/json"),e.append("Accept","application/json"),e.append("Connection","keep-alive"),e.append("DNT","1"),e.append("Authorization",`Bearer ${this.accessToken}`);const t=JSON.stringify({query:`query glossaryEntryCollectionQuery {
                glossaryEntryCollection {
                    items {
                        sys {
                            id
                        }      
                        title
                        metadata: contentfulMetadata {
                            tags {
                              id
                              name
                            }
                        }
                    }
                }
            }`});var n={method:"POST",headers:e,body:t,redirect:"follow"};try{return(await(await fetch(`${this.graphqlUrl}/${this.space}/environments/master`,n)).json()).data.glossaryEntryCollection.items.sort((l,c)=>l.title.localeCompare(c.title))}catch(i){return console.log("Error",i),[]}}async search(e){var t={method:"GET",redirect:"follow"};try{return await(await fetch(`${this.apiUrl}/${this.space}/environments/master/entries?access_token=${this.accessToken}&content_type=glossaryEntry&fields.title[match]=${e}`,t)).json()}catch(n){return console.log(n),[]}}}const Ts=bn({}),Hi=bn({}),Vs=bn([]),xr=bn({}),an=bn(""),Rr=Cf(new yd("webloom-local-snapshot-token","webloom-local-space"));function hi(s){return"/glossary#"+encodeURI(s.toLowerCase().replace(/ /g,"-"))}function tl(s){let e;function t(r,a){if(r[2]==="reference")return Md;if(r[2]==="glossaryEntry")return bd}let n=t(s),i=n&&n(s);return{c(){i&&i.c(),e=it()},m(r,a){i&&i.m(r,a),Y(r,e,a)},p(r,a){n===(n=t(r))&&i?i.p(r,a):(i&&i.d(1),i=n&&n(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i&&i.d(r),r&&X(e)}}}function bd(s){let e,t=s[0].content[0].value+"",n,i;return{c(){e=W("a"),n=ke(t),D(e,"href",i=hi(s[1].fields.title)),D(e,"rel","noreferrer")},m(r,a){Y(r,e,a),F(e,n)},p(r,a){a&1&&t!==(t=r[0].content[0].value+"")&&lt(n,t),a&2&&i!==(i=hi(r[1].fields.title))&&D(e,"href",i)},d(r){r&&X(e)}}}function Md(s){let e,t,n,i;function r(c,u){return u&2&&(e=null),e==null&&(e=!!Ya(c[1])),e?Sd:wd}let a=r(s,-1),o=a(s),l=s[3]&&nl(s);return{c(){o.c(),t=ce(),n=W("div"),l&&l.c(),D(n,"class",i=rt(s[3]?"modal":"hidden-modal")+" svelte-16r3hmf")},m(c,u){o.m(c,u),Y(c,t,u),Y(c,n,u),l&&l.m(n,null),s[8](n)},p(c,u){a===(a=r(c,u))&&o?o.p(c,u):(o.d(1),o=a(c),o&&(o.c(),o.m(t.parentNode,t))),c[3]?l?l.p(c,u):(l=nl(c),l.c(),l.m(n,null)):l&&(l.d(1),l=null),u&8&&i!==(i=rt(c[3]?"modal":"hidden-modal")+" svelte-16r3hmf")&&D(n,"class",i)},d(c){o.d(c),c&&X(t),c&&X(n),l&&l.d(),s[8](null)}}}function wd(s){let e,t=s[0].content[0].value+"",n,i,r;return{c(){e=W("span"),n=ke(t),D(e,"class","superscript reference-link"),D(e,"target","_blank")},m(a,o){Y(a,e,o),F(e,n),i||(r=[Je(e,"mouseover",s[5]),Je(e,"mouseleave",s[7])],i=!0)},p(a,o){o&1&&t!==(t=a[0].content[0].value+"")&&lt(n,t)},d(a){a&&X(e),i=!1,Jt(r)}}}function Sd(s){let e,t=s[0].content[0].value+"",n,i,r,a;return{c(){e=W("a"),n=ke(t),D(e,"class","superscript reference-link"),D(e,"rel","noreferrer"),D(e,"href",i=Ya(s[1])),D(e,"target","_blank")},m(o,l){Y(o,e,l),F(e,n),r||(a=[Je(e,"mouseover",s[5]),Je(e,"mouseleave",s[6])],r=!0)},p(o,l){l&1&&t!==(t=o[0].content[0].value+"")&&lt(n,t),l&2&&i!==(i=Ya(o[1]))&&D(e,"href",i)},d(o){o&&X(e),r=!1,Jt(a)}}}function nl(s){let e,t,n=s[1].fields.title+"",i;return{c(){e=W("div"),t=W("span"),i=ke(n),D(t,"class","svelte-16r3hmf"),D(e,"class","modal-content svelte-16r3hmf")},m(r,a){Y(r,e,a),F(e,t),F(t,i)},p(r,a){a&2&&n!==(n=r[1].fields.title+"")&&lt(i,n)},d(r){r&&X(e)}}}function Td(s){let e,t=s[1]&&s[2]&&tl(s);return{c(){t&&t.c(),e=it()},m(n,i){t&&t.m(n,i),Y(n,e,i)},p(n,[i]){n[1]&&n[2]?t?t.p(n,i):(t=tl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:fe,o:fe,d(n){t&&t.d(n),n&&X(e)}}}function Ya(s){const t=s.fields.ref.content[0].content.filter(n=>n.nodeType==="hyperlink")[0];return t?t.data.uri:!1}function Ed(s,e,t){let n,i;ct(s,xr,g=>t(9,n=g)),ct(s,Rr,g=>t(10,i=g));let{item:r}=e,a=null,o=null;wi(async()=>{var p,d;let g=(d=(p=r.data)==null?void 0:p.target)==null?void 0:d.sys.id;if(!g){console.log("No target found for",r);return}if(t(1,a=await i.getEntry(g)),!a){console.log("No entry found for",g);return}if(t(2,o=a.sys.contentType.sys.id),o==="reference"){let v=r.content[0].value;Dt(xr,n[v]=a,n)}}),Cr(()=>{Dt(xr,n={},n)});let l=!1,c;function u(){o==="reference"&&t(3,l=!0)}const f=()=>t(3,l=!1),h=()=>t(3,l=!1);function m(g){yt[g?"unshift":"push"](()=>{c=g,t(4,c)})}return s.$$set=g=>{"item"in g&&t(0,r=g.item)},[r,a,o,l,c,u,f,h,m]}class kf extends We{constructor(e){super(),Ve(this,e,Ed,Td,Ge,{item:0})}}function Ad(s){let e,t=s[0].value+"",n,i;return{c(){e=W("span"),n=ke(t),D(e,"class",i=rt(s[1])+" svelte-2v33s1")},m(r,a){Y(r,e,a),F(e,n)},p(r,[a]){a&1&&t!==(t=r[0].value+"")&&lt(n,t),a&2&&i!==(i=rt(r[1])+" svelte-2v33s1")&&D(e,"class",i)},i:fe,o:fe,d(r){r&&X(e)}}}function Ld(s,e,t){let n,{item:i={}}=e;return s.$$set=r=>{"item"in r&&t(0,i=r.item)},s.$$.update=()=>{s.$$.dirty&1&&t(1,n=i.marks.map(r=>r.type).join(" "))},[i,n]}class Cd extends We{constructor(e){super(),Ve(this,e,Ld,Ad,Ge,{item:0})}}function il(s,e,t){const n=s.slice();return n[1]=e[t],n}function Rd(s){let e,t;return e=new kf({props:{item:s[1]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[1]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Pd(s){let e,t;return e=new If({props:{item:s[1]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[1]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Dd(s){let e,t;return e=new Cd({props:{item:s[1]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[1]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function sl(s){let e,t,n,i;const r=[Dd,Pd,Rd],a=[];function o(l,c){return l[1].nodeType==="text"?0:l[1].nodeType==="hyperlink"?1:l[1].nodeType==="entry-hyperlink"?2:-1}return~(e=o(s))&&(t=a[e]=r[e](s)),{c(){t&&t.c(),n=it()},m(l,c){~e&&a[e].m(l,c),Y(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(t&&(ze(),$(a[u],1,1,()=>{a[u]=null}),Ue()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),O(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(O(t),i=!0)},o(l){$(t),i=!1},d(l){~e&&a[e].d(l),l&&X(n)}}}function Id(s){let e,t,n=s[0].content,i=[];for(let a=0;a<n.length;a+=1)i[a]=sl(il(s,n,a));const r=a=>$(i[a],1,1,()=>{i[a]=null});return{c(){e=W("p");for(let a=0;a<i.length;a+=1)i[a].c();D(e,"class","entry-paragraph svelte-ljdpn3")},m(a,o){Y(a,e,o);for(let l=0;l<i.length;l+=1)i[l].m(e,null);t=!0},p(a,[o]){if(o&1){n=a[0].content;let l;for(l=0;l<n.length;l+=1){const c=il(a,n,l);i[l]?(i[l].p(c,o),O(i[l],1)):(i[l]=sl(c),i[l].c(),O(i[l],1),i[l].m(e,null))}for(ze(),l=n.length;l<i.length;l+=1)r(l);Ue()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)O(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)$(i[o]);t=!1},d(a){a&&X(e),wt(i,a)}}}function kd(s,e,t){let{paragraph:n={}}=e;return s.$$set=i=>{"paragraph"in i&&t(0,n=i.paragraph)},[n]}class _o extends We{constructor(e){super(),Ve(this,e,kd,Id,Ge,{paragraph:0})}}function rl(s,e,t){const n=s.slice();return n[1]=e[t],n}function al(s,e,t){const n=s.slice();return n[4]=e[t],n}function ol(s){let e,t,n=s[1].content,i=[];for(let a=0;a<n.length;a+=1)i[a]=cl(al(s,n,a));const r=a=>$(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=it()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);Y(a,e,o),t=!0},p(a,o){if(o&1){n=a[1].content;let l;for(l=0;l<n.length;l+=1){const c=al(a,n,l);i[l]?(i[l].p(c,o),O(i[l],1)):(i[l]=cl(c),i[l].c(),O(i[l],1),i[l].m(e.parentNode,e))}for(ze(),l=n.length;l<i.length;l+=1)r(l);Ue()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)O(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)$(i[o]);t=!1},d(a){wt(i,a),a&&X(e)}}}function ll(s){let e,t,n,i;return t=new _o({props:{paragraph:s[4]}}),{c(){e=W("li"),Re(t.$$.fragment),n=ce(),D(e,"class","unordered-list svelte-yfof0l")},m(r,a){Y(r,e,a),Le(t,e,null),F(e,n),i=!0},p(r,a){const o={};a&1&&(o.paragraph=r[4]),t.$set(o)},i(r){i||(O(t.$$.fragment,r),i=!0)},o(r){$(t.$$.fragment,r),i=!1},d(r){r&&X(e),Ce(t)}}}function cl(s){let e,t,n=s[4].nodeType==="paragraph"&&ll(s);return{c(){n&&n.c(),e=it()},m(i,r){n&&n.m(i,r),Y(i,e,r),t=!0},p(i,r){i[4].nodeType==="paragraph"?n?(n.p(i,r),r&1&&O(n,1)):(n=ll(i),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(ze(),$(n,1,1,()=>{n=null}),Ue())},i(i){t||(O(n),t=!0)},o(i){$(n),t=!1},d(i){n&&n.d(i),i&&X(e)}}}function ul(s){let e,t,n=s[1].nodeType==="list-item"&&ol(s);return{c(){n&&n.c(),e=it()},m(i,r){n&&n.m(i,r),Y(i,e,r),t=!0},p(i,r){i[1].nodeType==="list-item"?n?(n.p(i,r),r&1&&O(n,1)):(n=ol(i),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(ze(),$(n,1,1,()=>{n=null}),Ue())},i(i){t||(O(n),t=!0)},o(i){$(n),t=!1},d(i){n&&n.d(i),i&&X(e)}}}function Fd(s){let e,t,n=s[0].content,i=[];for(let a=0;a<n.length;a+=1)i[a]=ul(rl(s,n,a));const r=a=>$(i[a],1,1,()=>{i[a]=null});return{c(){e=W("ul");for(let a=0;a<i.length;a+=1)i[a].c();D(e,"class","svelte-yfof0l")},m(a,o){Y(a,e,o);for(let l=0;l<i.length;l+=1)i[l].m(e,null);t=!0},p(a,[o]){if(o&1){n=a[0].content;let l;for(l=0;l<n.length;l+=1){const c=rl(a,n,l);i[l]?(i[l].p(c,o),O(i[l],1)):(i[l]=ul(c),i[l].c(),O(i[l],1),i[l].m(e,null))}for(ze(),l=n.length;l<i.length;l+=1)r(l);Ue()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)O(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)$(i[o]);t=!1},d(a){a&&X(e),wt(i,a)}}}function Nd(s,e,t){let{item:n={}}=e;return s.$$set=i=>{"item"in i&&t(0,n=i.item)},[n]}class Od extends We{constructor(e){super(),Ve(this,e,Nd,Fd,Ge,{item:0})}}function fl(s,e,t){const n=s.slice();return n[1]=e[t],n}function hl(s,e,t){const n=s.slice();return n[4]=e[t],n}function dl(s){let e,t,n=s[1].content,i=[];for(let a=0;a<n.length;a+=1)i[a]=ml(hl(s,n,a));const r=a=>$(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=it()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);Y(a,e,o),t=!0},p(a,o){if(o&1){n=a[1].content;let l;for(l=0;l<n.length;l+=1){const c=hl(a,n,l);i[l]?(i[l].p(c,o),O(i[l],1)):(i[l]=ml(c),i[l].c(),O(i[l],1),i[l].m(e.parentNode,e))}for(ze(),l=n.length;l<i.length;l+=1)r(l);Ue()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)O(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)$(i[o]);t=!1},d(a){wt(i,a),a&&X(e)}}}function pl(s){let e,t,n,i;return t=new _o({props:{paragraph:s[4]}}),{c(){e=W("li"),Re(t.$$.fragment),n=ce(),D(e,"class","ordered-list svelte-1u2se5x")},m(r,a){Y(r,e,a),Le(t,e,null),F(e,n),i=!0},p(r,a){const o={};a&1&&(o.paragraph=r[4]),t.$set(o)},i(r){i||(O(t.$$.fragment,r),i=!0)},o(r){$(t.$$.fragment,r),i=!1},d(r){r&&X(e),Ce(t)}}}function ml(s){let e,t,n=s[4].nodeType==="paragraph"&&pl(s);return{c(){n&&n.c(),e=it()},m(i,r){n&&n.m(i,r),Y(i,e,r),t=!0},p(i,r){i[4].nodeType==="paragraph"?n?(n.p(i,r),r&1&&O(n,1)):(n=pl(i),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(ze(),$(n,1,1,()=>{n=null}),Ue())},i(i){t||(O(n),t=!0)},o(i){$(n),t=!1},d(i){n&&n.d(i),i&&X(e)}}}function gl(s){let e,t,n=s[1].nodeType==="list-item"&&dl(s);return{c(){n&&n.c(),e=it()},m(i,r){n&&n.m(i,r),Y(i,e,r),t=!0},p(i,r){i[1].nodeType==="list-item"?n?(n.p(i,r),r&1&&O(n,1)):(n=dl(i),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(ze(),$(n,1,1,()=>{n=null}),Ue())},i(i){t||(O(n),t=!0)},o(i){$(n),t=!1},d(i){n&&n.d(i),i&&X(e)}}}function zd(s){let e,t,n=s[0].content,i=[];for(let a=0;a<n.length;a+=1)i[a]=gl(fl(s,n,a));const r=a=>$(i[a],1,1,()=>{i[a]=null});return{c(){e=W("ol");for(let a=0;a<i.length;a+=1)i[a].c();D(e,"type","1"),D(e,"class","svelte-1u2se5x")},m(a,o){Y(a,e,o);for(let l=0;l<i.length;l+=1)i[l].m(e,null);t=!0},p(a,[o]){if(o&1){n=a[0].content;let l;for(l=0;l<n.length;l+=1){const c=fl(a,n,l);i[l]?(i[l].p(c,o),O(i[l],1)):(i[l]=gl(c),i[l].c(),O(i[l],1),i[l].m(e,null))}for(ze(),l=n.length;l<i.length;l+=1)r(l);Ue()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)O(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)$(i[o]);t=!1},d(a){a&&X(e),wt(i,a)}}}function Ud(s,e,t){let{item:n={}}=e;return s.$$set=i=>{"item"in i&&t(0,n=i.item)},[n]}class Bd extends We{constructor(e){super(),Ve(this,e,Ud,zd,Ge,{item:0})}}function _l(s){let e,t,n,i;return{c(){e=W("span"),t=ke("("),n=ke(s[1]),i=ke(")"),D(e,"class","count italic")},m(r,a){Y(r,e,a),F(e,t),F(e,n),F(e,i)},p(r,a){a&2&&lt(n,r[1])},d(r){r&&X(e)}}}function Gd(s){let e,t,n,i,r=s[1]&&_l(s);return{c(){e=W("div"),r&&r.c(),t=ce(),n=W("span"),i=ke(s[0]),D(n,"class","subheading-value"),D(e,"class","subheading svelte-5y8qw5")},m(a,o){Y(a,e,o),r&&r.m(e,null),F(e,t),F(e,n),F(n,i)},p(a,[o]){a[1]?r?r.p(a,o):(r=_l(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),o&1&&lt(i,a[0])},i:fe,o:fe,d(a){a&&X(e),r&&r.d()}}}function Hd(s,e,t){let n,{value:i={}}=e,{counts:r={}}=e;return s.$$set=a=>{"value"in a&&t(0,i=a.value),"counts"in a&&t(2,r=a.counts)},s.$$.update=()=>{s.$$.dirty&5&&t(1,n=r[i])},[i,n,r]}class vo extends We{constructor(e){super(),Ve(this,e,Hd,Gd,Ge,{value:0,counts:2})}}function Vd(s){let e,t,n;return{c(){e=W("div"),t=W("span"),n=ke(s[0]),D(e,"class","subsubheading")},m(i,r){Y(i,e,r),F(e,t),F(t,n)},p(i,[r]){r&1&&lt(n,i[0])},i:fe,o:fe,d(i){i&&X(e)}}}function Wd(s,e,t){let{value:n={}}=e;return s.$$set=i=>{"value"in i&&t(0,n=i.value)},[n]}class jd extends We{constructor(e){super(),Ve(this,e,Wd,Vd,Ge,{value:0})}}function $d(s){return{c:fe,m:fe,p:fe,d:fe}}function qd(s){let e,t,n;return{c(){e=W("img"),wr(e.src,t=(s[3].fields.file.url.startsWith("//")?"https:"+s[3].fields.file.url:s[3].fields.file.url))||D(e,"src",t),D(e,"alt",n=s[3].fields.title),D(e,"class","svelte-1vv5jwi")},m(i,r){Y(i,e,r)},p(i,r){r&1&&!wr(e.src,t="https://"+i[3].fields.file.url.slice(2))&&D(e,"src",t),r&1&&n!==(n=i[3].fields.title)&&D(e,"alt",n)},d(i){i&&X(e)}}}function Xd(s){return{c:fe,m:fe,p:fe,d:fe}}function Yd(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:Xd,then:qd,catch:$d,value:3};return Yo(t=s[0],n),{c(){e=it(),n.block.c()},m(i,r){Y(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e},p(i,[r]){s=i,n.ctx=s,r&1&&t!==(t=s[0])&&Yo(t,n)||Vh(n,s,r)},i:fe,o:fe,d(i){i&&X(e),n.block.d(i),n.token=null,n=null}}}function Kd(s,e,t){let n,i;ct(s,Rr,a=>t(2,i=a));let{id:r={}}=e;return s.$$set=a=>{"id"in a&&t(1,r=a.id)},s.$$.update=()=>{s.$$.dirty&6&&t(0,n=i.getAsset(r)),s.$$.dirty&1&&n.then(a=>{console.log(a)})},[n,r,i]}class Zd extends We{constructor(e){super(),Ve(this,e,Kd,Yd,Ge,{id:1})}}function vl(s,e,t){const n=s.slice();return n[0]=e[t],n}function Jd(s){let e,t;return e=new kf({props:{item:s[0]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[0]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Qd(s){let e,t;return e=new If({props:{item:s[0]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[0]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function xl(s){let e,t,n,i;const r=[Qd,Jd],a=[];function o(l,c){return l[0].nodeType==="hyperlink"?0:l[0].nodeType==="entry-hyperlink"?1:-1}return~(e=o(s))&&(t=a[e]=r[e](s)),{c(){t&&t.c(),n=it()},m(l,c){~e&&a[e].m(l,c),Y(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(t&&(ze(),$(a[u],1,1,()=>{a[u]=null}),Ue()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),O(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(O(t),i=!0)},o(l){$(t),i=!1},d(l){~e&&a[e].d(l),l&&X(n)}}}function ep(s){let e,t,n=s[0].content[0].content[0].value+"",i,r,a,o,l=s[0].content[0].content,c=[];for(let f=0;f<l.length;f+=1)c[f]=xl(vl(s,l,f));const u=f=>$(c[f],1,1,()=>{c[f]=null});return{c(){e=W("p"),t=W("span"),i=ke(n),r=ce(),a=W("span");for(let f=0;f<c.length;f+=1)c[f].c();D(e,"class","quote")},m(f,h){Y(f,e,h),F(e,t),F(t,i),F(e,r),F(e,a);for(let m=0;m<c.length;m+=1)c[m].m(a,null);o=!0},p(f,[h]){if((!o||h&1)&&n!==(n=f[0].content[0].content[0].value+"")&&lt(i,n),h&1){l=f[0].content[0].content;let m;for(m=0;m<l.length;m+=1){const g=vl(f,l,m);c[m]?(c[m].p(g,h),O(c[m],1)):(c[m]=xl(g),c[m].c(),O(c[m],1),c[m].m(a,null))}for(ze(),m=l.length;m<c.length;m+=1)u(m);Ue()}},i(f){if(!o){for(let h=0;h<l.length;h+=1)O(c[h]);o=!0}},o(f){c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)$(c[h]);o=!1},d(f){f&&X(e),wt(c,f)}}}function tp(s,e,t){let{item:n={}}=e;return s.$$set=i=>{"item"in i&&t(0,n=i.item)},[n]}class np extends We{constructor(e){super(),Ve(this,e,tp,ep,Ge,{item:0})}}function yl(s,e,t){const n=s.slice();return n[2]=e[t],n}function bl(s){let e,t,n=s[0].content,i=[];for(let a=0;a<n.length;a+=1)i[a]=Ml(yl(s,n,a));const r=a=>$(i[a],1,1,()=>{i[a]=null});return{c(){e=W("div");for(let a=0;a<i.length;a+=1)i[a].c();D(e,"class","entry-content svelte-ntorvb")},m(a,o){Y(a,e,o);for(let l=0;l<i.length;l+=1)i[l].m(e,null);t=!0},p(a,o){if(o&3){n=a[0].content;let l;for(l=0;l<n.length;l+=1){const c=yl(a,n,l);i[l]?(i[l].p(c,o),O(i[l],1)):(i[l]=Ml(c),i[l].c(),O(i[l],1),i[l].m(e,null))}for(ze(),l=n.length;l<i.length;l+=1)r(l);Ue()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)O(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)$(i[o]);t=!1},d(a){a&&X(e),wt(i,a)}}}function ip(s){let e,t;return e=new np({props:{item:s[2]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[2]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function sp(s){let e,t;return e=new jd({props:{value:s[2].content[0].value}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.value=n[2].content[0].value),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function rp(s){let e,t;return e=new vo({props:{value:s[2].content[0].value,counts:s[1]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.value=n[2].content[0].value),i&2&&(r.counts=n[1]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function ap(s){let e,t;return e=new Zd({props:{id:s[2].data.target.sys.id}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.id=n[2].data.target.sys.id),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function op(s){let e,t;return e=new Bd({props:{item:s[2]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[2]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function lp(s){let e,t;return e=new Od({props:{item:s[2]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[2]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function cp(s){let e,t;return e=new _o({props:{paragraph:s[2]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.paragraph=n[2]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Ml(s){let e,t,n,i;const r=[cp,lp,op,ap,rp,sp,ip],a=[];function o(l,c){return l[2].nodeType==="paragraph"?0:l[2].nodeType==="unordered-list"?1:l[2].nodeType==="ordered-list"?2:l[2].nodeType==="embedded-asset-block"?3:l[2].nodeType==="heading-3"?4:l[2].nodeType==="heading-5"?5:l[2].nodeType==="blockquote"?6:-1}return~(e=o(s))&&(t=a[e]=r[e](s)),{c(){t&&t.c(),n=it()},m(l,c){~e&&a[e].m(l,c),Y(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(t&&(ze(),$(a[u],1,1,()=>{a[u]=null}),Ue()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),O(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(O(t),i=!0)},o(l){$(t),i=!1},d(l){~e&&a[e].d(l),l&&X(n)}}}function up(s){let e,t,n=s[0]&&s[0].content&&bl(s);return{c(){n&&n.c(),e=it()},m(i,r){n&&n.m(i,r),Y(i,e,r),t=!0},p(i,[r]){i[0]&&i[0].content?n?(n.p(i,r),r&1&&O(n,1)):(n=bl(i),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(ze(),$(n,1,1,()=>{n=null}),Ue())},i(i){t||(O(n),t=!0)},o(i){$(n),t=!1},d(i){n&&n.d(i),i&&X(e)}}}function fp(s,e,t){let{item:n={}}=e,{counts:i={}}=e;return s.$$set=r=>{"item"in r&&t(0,n=r.item),"counts"in r&&t(1,i=r.counts)},[n,i]}class wl extends We{constructor(e){super(),Ve(this,e,fp,up,Ge,{item:0,counts:1})}}var Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ff={exports:{}};(function(s){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(n){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,a={},o={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function y(_){return _ instanceof l?new l(_.type,y(_.content),_.alias):Array.isArray(_)?_.map(y):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(y){return Object.prototype.toString.call(y).slice(8,-1)},objId:function(y){return y.__id||Object.defineProperty(y,"__id",{value:++r}),y.__id},clone:function y(_,x){x=x||{};var b,w;switch(o.util.type(_)){case"Object":if(w=o.util.objId(_),x[w])return x[w];b={},x[w]=b;for(var E in _)_.hasOwnProperty(E)&&(b[E]=y(_[E],x));return b;case"Array":return w=o.util.objId(_),x[w]?x[w]:(b=[],x[w]=b,_.forEach(function(M,S){b[S]=y(M,x)}),b);default:return _}},getLanguage:function(y){for(;y;){var _=i.exec(y.className);if(_)return _[1].toLowerCase();y=y.parentElement}return"none"},setLanguage:function(y,_){y.className=y.className.replace(RegExp(i,"gi"),""),y.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(b){var y=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(b.stack)||[])[1];if(y){var _=document.getElementsByTagName("script");for(var x in _)if(_[x].src==y)return _[x]}return null}},isActive:function(y,_,x){for(var b="no-"+_;y;){var w=y.classList;if(w.contains(_))return!0;if(w.contains(b))return!1;y=y.parentElement}return!!x}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(y,_){var x=o.util.clone(o.languages[y]);for(var b in _)x[b]=_[b];return x},insertBefore:function(y,_,x,b){b=b||o.languages;var w=b[y],E={};for(var M in w)if(w.hasOwnProperty(M)){if(M==_)for(var S in x)x.hasOwnProperty(S)&&(E[S]=x[S]);x.hasOwnProperty(M)||(E[M]=w[M])}var C=b[y];return b[y]=E,o.languages.DFS(o.languages,function(j,q){q===C&&j!=y&&(this[j]=E)}),E},DFS:function y(_,x,b,w){w=w||{};var E=o.util.objId;for(var M in _)if(_.hasOwnProperty(M)){x.call(_,M,_[M],b||M);var S=_[M],C=o.util.type(S);C==="Object"&&!w[E(S)]?(w[E(S)]=!0,y(S,x,null,w)):C==="Array"&&!w[E(S)]&&(w[E(S)]=!0,y(S,x,M,w))}}},plugins:{},highlightAll:function(y,_){o.highlightAllUnder(document,y,_)},highlightAllUnder:function(y,_,x){var b={callback:x,container:y,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",b),b.elements=Array.prototype.slice.apply(b.container.querySelectorAll(b.selector)),o.hooks.run("before-all-elements-highlight",b);for(var w=0,E;E=b.elements[w++];)o.highlightElement(E,_===!0,b.callback)},highlightElement:function(y,_,x){var b=o.util.getLanguage(y),w=o.languages[b];o.util.setLanguage(y,b);var E=y.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(E,b);var M=y.textContent,S={element:y,language:b,grammar:w,code:M};function C(q){S.highlightedCode=q,o.hooks.run("before-insert",S),S.element.innerHTML=S.highlightedCode,o.hooks.run("after-highlight",S),o.hooks.run("complete",S),x&&x.call(S.element)}if(o.hooks.run("before-sanity-check",S),E=S.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!S.code){o.hooks.run("complete",S),x&&x.call(S.element);return}if(o.hooks.run("before-highlight",S),!S.grammar){C(o.util.encode(S.code));return}if(_&&n.Worker){var j=new Worker(o.filename);j.onmessage=function(q){C(q.data)},j.postMessage(JSON.stringify({language:S.language,code:S.code,immediateClose:!0}))}else C(o.highlight(S.code,S.grammar,S.language))},highlight:function(y,_,x){var b={code:y,grammar:_,language:x};if(o.hooks.run("before-tokenize",b),!b.grammar)throw new Error('The language "'+b.language+'" has no grammar.');return b.tokens=o.tokenize(b.code,b.grammar),o.hooks.run("after-tokenize",b),l.stringify(o.util.encode(b.tokens),b.language)},tokenize:function(y,_){var x=_.rest;if(x){for(var b in x)_[b]=x[b];delete _.rest}var w=new f;return h(w,w.head,y),u(y,w,_,w.head,0),g(w)},hooks:{all:{},add:function(y,_){var x=o.hooks.all;x[y]=x[y]||[],x[y].push(_)},run:function(y,_){var x=o.hooks.all[y];if(!(!x||!x.length))for(var b=0,w;w=x[b++];)w(_)}},Token:l};n.Prism=o;function l(y,_,x,b){this.type=y,this.content=_,this.alias=x,this.length=(b||"").length|0}l.stringify=function y(_,x){if(typeof _=="string")return _;if(Array.isArray(_)){var b="";return _.forEach(function(C){b+=y(C,x)}),b}var w={type:_.type,content:y(_.content,x),tag:"span",classes:["token",_.type],attributes:{},language:x},E=_.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(w.classes,E):w.classes.push(E)),o.hooks.run("wrap",w);var M="";for(var S in w.attributes)M+=" "+S+'="'+(w.attributes[S]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+M+">"+w.content+"</"+w.tag+">"};function c(y,_,x,b){y.lastIndex=_;var w=y.exec(x);if(w&&b&&w[1]){var E=w[1].length;w.index+=E,w[0]=w[0].slice(E)}return w}function u(y,_,x,b,w,E){for(var M in x)if(!(!x.hasOwnProperty(M)||!x[M])){var S=x[M];S=Array.isArray(S)?S:[S];for(var C=0;C<S.length;++C){if(E&&E.cause==M+","+C)return;var j=S[C],q=j.inside,P=!!j.lookbehind,R=!!j.greedy,G=j.alias;if(R&&!j.pattern.global){var Z=j.pattern.toString().match(/[imsuy]*$/)[0];j.pattern=RegExp(j.pattern.source,Z+"g")}for(var K=j.pattern||j,H=b.next,re=w;H!==_.tail&&!(E&&re>=E.reach);re+=H.value.length,H=H.next){var ie=H.value;if(_.length>y.length)return;if(!(ie instanceof l)){var ye=1,U;if(R){if(U=c(K,re,y,P),!U||U.index>=y.length)break;var me=U.index,ae=U.index+U[0].length,le=re;for(le+=H.value.length;me>=le;)H=H.next,le+=H.value.length;if(le-=H.value.length,re=le,H.value instanceof l)continue;for(var z=H;z!==_.tail&&(le<ae||typeof z.value=="string");z=z.next)ye++,le+=z.value.length;ye--,ie=y.slice(re,le),U.index-=re}else if(U=c(K,0,ie,P),!U)continue;var me=U.index,N=U[0],ne=ie.slice(0,me),ue=ie.slice(me+N.length),_e=re+ie.length;E&&_e>E.reach&&(E.reach=_e);var we=H.prev;ne&&(we=h(_,we,ne),re+=ne.length),m(_,we,ye);var Pe=new l(M,q?o.tokenize(N,q):N,G,N);if(H=h(_,we,Pe),ue&&h(_,H,ue),ye>1){var qe={cause:M+","+C,reach:_e};u(y,_,x,H.prev,re,qe),E&&qe.reach>E.reach&&(E.reach=qe.reach)}}}}}}function f(){var y={value:null,prev:null,next:null},_={value:null,prev:y,next:null};y.next=_,this.head=y,this.tail=_,this.length=0}function h(y,_,x){var b=_.next,w={value:x,prev:_,next:b};return _.next=w,b.prev=w,y.length++,w}function m(y,_,x){for(var b=_.next,w=0;w<x&&b!==y.tail;w++)b=b.next;_.next=b,b.prev=_,y.length-=w}function g(y){for(var _=[],x=y.head.next;x!==y.tail;)_.push(x.value),x=x.next;return _}if(!n.document)return n.addEventListener&&(o.disableWorkerMessageHandler||n.addEventListener("message",function(y){var _=JSON.parse(y.data),x=_.language,b=_.code,w=_.immediateClose;n.postMessage(o.highlight(b,o.languages[x],x)),w&&n.close()},!1)),o;var p=o.util.currentScript();p&&(o.filename=p.src,p.hasAttribute("data-manual")&&(o.manual=!0));function d(){o.manual||o.highlightAll()}if(!o.manual){var v=document.readyState;v==="loading"||v==="interactive"&&p&&p.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return o}(e);s.exports&&(s.exports=t),typeof Sl<"u"&&(Sl.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(i,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+r]={pattern:/[\s\S]+/,inside:t.languages[r]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(n,i){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:t.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(n){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var r=n.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",i=function(p,d){return"\u2716 Error "+p+" while fetching file: "+d},r="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",l="loading",c="loaded",u="failed",f="pre[data-src]:not(["+o+'="'+c+'"]):not(['+o+'="'+l+'"])';function h(p,d,v){var y=new XMLHttpRequest;y.open("GET",p,!0),y.onreadystatechange=function(){y.readyState==4&&(y.status<400&&y.responseText?d(y.responseText):y.status>=400?v(i(y.status,y.statusText)):v(r))},y.send(null)}function m(p){var d=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(p||"");if(d){var v=Number(d[1]),y=d[2],_=d[3];return y?_?[v,Number(_)]:[v,void 0]:[v,v]}}t.hooks.add("before-highlightall",function(p){p.selector+=", "+f}),t.hooks.add("before-sanity-check",function(p){var d=p.element;if(d.matches(f)){p.code="",d.setAttribute(o,l);var v=d.appendChild(document.createElement("CODE"));v.textContent=n;var y=d.getAttribute("data-src"),_=p.language;if(_==="none"){var x=(/\.(\w+)$/.exec(y)||[,"none"])[1];_=a[x]||x}t.util.setLanguage(v,_),t.util.setLanguage(d,_);var b=t.plugins.autoloader;b&&b.loadLanguages(_),h(y,function(w){d.setAttribute(o,c);var E=m(d.getAttribute("data-range"));if(E){var M=w.split(/\r\n?|\n/g),S=E[0],C=E[1]==null?M.length:E[1];S<0&&(S+=M.length),S=Math.max(0,Math.min(S-1,M.length)),C<0&&(C+=M.length),C=Math.max(0,Math.min(C,M.length)),w=M.slice(S,C).join(`
`),d.hasAttribute("data-start")||d.setAttribute("data-start",String(S+1))}v.textContent=w,t.highlightElement(v)},function(w){d.setAttribute(o,u),v.textContent=w})}}),t.plugins.fileHighlight={highlight:function(d){for(var v=(d||document).querySelectorAll(f),y=0,_;_=v[y++];)t.highlightElement(_)}};var g=!1;t.fileHighlight=function(){g||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),g=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ff);const Ws=Ff.exports;Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(s,e){var t={};t["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[s]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(s,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+s+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;(function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;function Tl(s){let e,t,n,i=Ws.highlight(s[1],Ws.languages[s[2]],s[2])+"",r,a,o,l;function c(h,m){return h[0]?dp:hp}let u=c(s),f=u(s);return{c(){e=W("div"),t=W("pre"),n=new Uh(!1),r=ke(`
    `),o=ce(),l=W("div"),f.c(),n.a=r,D(t,"class",a=rt(`language-${s[2]} code`)+" svelte-1c1934g"),D(l,"class","copy-container svelte-1c1934g"),D(e,"class","code-block svelte-1c1934g")},m(h,m){Y(h,e,m),F(e,t),n.m(i,t),F(t,r),F(e,o),F(e,l),f.m(l,null)},p(h,m){m&6&&i!==(i=Ws.highlight(h[1],Ws.languages[h[2]],h[2])+"")&&n.p(i),m&4&&a!==(a=rt(`language-${h[2]} code`)+" svelte-1c1934g")&&D(t,"class",a),u===(u=c(h))&&f?f.p(h,m):(f.d(1),f=u(h),f&&(f.c(),f.m(l,null)))},d(h){h&&X(e),f.d()}}}function hp(s){let e,t,n;return{c(){e=W("div"),e.textContent="Copy",D(e,"class","copy")},m(i,r){Y(i,e,r),t||(n=Je(e,"click",s[3]),t=!0)},p:fe,d(i){i&&X(e),t=!1,n()}}}function dp(s){let e;return{c(){e=W("div"),e.textContent="Copied!",D(e,"class","copied")},m(t,n){Y(t,e,n)},p:fe,d(t){t&&X(e)}}}function pp(s){let e,t=s[2]&&s[1]&&Tl(s);return{c(){t&&t.c(),e=it()},m(n,i){t&&t.m(n,i),Y(n,e,i)},p(n,[i]){n[2]&&n[1]?t?t.p(n,i):(t=Tl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:fe,o:fe,d(n){t&&t.d(n),n&&X(e)}}}function mp(s,e,t){let n,i,{item:r={}}=e,a=!1;async function o(){await navigator.clipboard.writeText(i),t(0,a=!0),setTimeout(()=>{t(0,a=!1)},1e3)}return s.$$set=l=>{"item"in l&&t(4,r=l.item)},s.$$.update=()=>{s.$$.dirty&16&&t(2,n=r.value.split(`
`)[0]),s.$$.dirty&16&&t(1,i=r.value.split(`
`).slice(1).join(`
`))},[a,i,n,o,r]}class gp extends We{constructor(e){super(),Ve(this,e,mp,pp,Ge,{item:4})}}function _p(s){let e;return{c(){e=W("div"),e.innerHTML=`<svg class="example_svg_animation" width="100%" height="75px" viewBox="0 0 380 60" preserveAspectRatio="xMinYMin"><path id="rect-large" fill="transparent" d="M14,10h332a4,4 0 0 1 4,4v32a4,4 0 0 1 -4,4h-332a-4,-4 0 0 1 -4,-4v-32a4,-4 0 0 1 4,-4z"></path><path id="rect-small" fill="transparent" d="M25,24h310a1,1 0 0 1 1,1v10a1,1 0 0 1 -1,1h-310a-1,-1 0 0 1 -1,-1v-10a1,-1 0 0 1 1,-1z"></path><text width="100%"><textPath alignment-baseline="top" href="#rect-large"><animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="12s" repeatCount="indefinite"></animate>
                Coding a website doesn&#39;t have to be hard, but can be soft and fun.
            </textPath><textPath alignment-baseline="top" href="#rect-large"><animate attributeName="startOffset" from="-100%" to="0%" begin="0s" dur="12s" repeatCount="indefinite"></animate>
                Coding a website doesn&#39;t have to be hard, but can be soft and fun.
            </textPath></text><text width="100%"><textPath alignment-baseline="top" href="#rect-small"><animate attributeName="startOffset" from="100%" to="0%" begin="0s" dur="10s" repeatCount="indefinite"></animate>
                Coding a website doesn&#39;t have to be hard, but can be soft and fun.
            </textPath><textPath alignment-baseline="top" href="#rect-small"><animate attributeName="startOffset" from="0%" to="-100%" begin="0s" dur="10s" repeatCount="indefinite"></animate>
                Coding a website doesn&#39;t have to be hard, but can be soft and fun.</textPath></text></svg>`},m(t,n){Y(t,e,n)},p:fe,i:fe,o:fe,d(t){t&&X(e)}}}class vp extends We{constructor(e){super(),Ve(this,e,null,_p,Ge,{})}}function xp(s){let e,t,n;return{c(){e=W("button"),e.textContent="font-smoothing : on",D(e,"class","interactive-element")},m(i,r){Y(i,e,r),s[2](e),t||(n=Je(e,"click",s[1]),t=!0)},p:fe,i:fe,o:fe,d(i){i&&X(e),s[2](null),t=!1,n()}}}function yp(s,e,t){let n;function i(){document.body.classList.toggle("font-smoothing"),n.classList.toggle("active"),t(0,n.innerHTML="font-smoothing : off",n),n.classList.contains("active")||t(0,n.innerHTML="font-smoothing : on",n)}function r(a){yt[a?"unshift":"push"](()=>{n=a,t(0,n)})}return[n,i,r]}class bp extends We{constructor(e){super(),Ve(this,e,yp,xp,Ge,{})}}function Mp(s){let e;return{c(){e=W("div"),e.innerHTML=`<div class="default svelte-1fu66pi"><img src="../default.png" alt="default" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">default</p></div> 
    <div class="pointer svelte-1fu66pi"><img src="../cursor_pointer.png" alt="pointer" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">pointer</p></div> 
    <div class="grab svelte-1fu66pi"><img src="../grab.png" alt="grab" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">grab</p></div> 
    <div class="grabbing svelte-1fu66pi"><img src="../grabbing.png" alt="grabbing" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">grabbing</p></div> 
    <div class="alias svelte-1fu66pi"><img src="../alias.png" alt="alias" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">alias</p></div> 
    <div class="copy svelte-1fu66pi"><img src="../copy.png" alt="copy" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">copy</p></div> 
    <div class="cell svelte-1fu66pi"><img src="../cell.png" alt="cell" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">cell</p></div> 
    <div class="crosshair svelte-1fu66pi"><img src="../crosshair.png" alt="crosshair" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">crosshair</p></div> 
    <div class="cursor-text svelte-1fu66pi"><img src="../text.png" alt="text" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">text</p></div> 
    <div class="vertical-text svelte-1fu66pi"><img src="../vertical-text.png" alt="vertical-text" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">vertical-text</p></div> 
    <div class="context-menu svelte-1fu66pi"><img src="../context-menu.png" alt="context-menu" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">context-menu</p></div> 
    <div class="not-allowed svelte-1fu66pi"><img src="../not-allowed.png" alt="not-allowed" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">not-allowed</p></div> 
    <div class="progress svelte-1fu66pi"><img src="../progress.png" alt="progress" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">progress</p></div> 
    <div class="zoom-in svelte-1fu66pi"><img src="../zoom-in.png" alt="zoom-in" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">zoom-in</p></div> 
    <div class="zoom-out svelte-1fu66pi"><img src="../zoom-out.png" alt="zoom-out" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">zoom-out</p></div> 
    <div class="move svelte-1fu66pi"><img src="../move.png" alt="move" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">move</p></div> 
    <div class="e-resize svelte-1fu66pi"><img src="../e-resize.png" alt="e-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">e-resize</p></div> 
    <div class="n-resize svelte-1fu66pi"><img src="../n-resize.png" alt="n-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">n-resize</p></div> 
    <div class="ne-resize svelte-1fu66pi"><img src="../ne-resize.png" alt="ne-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">ne-resize</p></div> 
    <div class="nw-resize svelte-1fu66pi"><img src="../nw-resize.png" alt="nw-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">nw-resize</p></div> 
    <div class="s-resize svelte-1fu66pi"><img src="../s-resize.png" alt="s-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">s-resize</p></div> 
    <div class="se-resize svelte-1fu66pi"><img src="../se-resize.png" alt="se-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">se-resize</p></div> 
    <div class="w-resize svelte-1fu66pi"><img src="../w-resize.png" alt="w-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">w-resize</p></div> 
    <div class="sw-resize svelte-1fu66pi"><img src="../sw-resize.png" alt="sw-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">sw-resize</p></div> 
    <div class="col-resize svelte-1fu66pi"><img src="../col-resize.png" alt="col-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">col-resize</p></div> 
    <div class="row-resize svelte-1fu66pi"><img src="../row-resize.png" alt="row-resize" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">row-resize</p></div> 
    <div class="url svelte-1fu66pi"><img src="../cursor@3x.png" alt="url" class="svelte-1fu66pi"/> 
        <p class="text svelte-1fu66pi">url(&quot;image.png&quot;)</p></div>`,D(e,"class","cursors svelte-1fu66pi")},m(t,n){Y(t,e,n)},p:fe,i:fe,o:fe,d(t){t&&X(e)}}}class wp extends We{constructor(e){super(),Ve(this,e,null,Mp,Ge,{})}}function Sp(s){let e,t,n,i,r,a,o,l,c,u,f,h,m,g,p,d,v,y,_,x;return{c(){e=W("div"),t=W("p"),t.textContent="Variable Font",n=ce(),i=W("div"),r=W("p"),r.textContent="width",a=ce(),o=W("input"),l=ce(),c=W("p"),u=ke(s[1]),f=ce(),h=W("div"),m=W("p"),m.textContent="italic",g=ce(),p=W("input"),d=ce(),v=W("p"),y=ke(s[2]),D(t,"class","font svelte-1a4zsjd"),D(o,"class","width svelte-1a4zsjd"),D(o,"type","range"),D(o,"min","200"),D(o,"max","700"),D(o,"step","1"),D(i,"class","regler svelte-1a4zsjd"),D(p,"class","italic svelte-1a4zsjd"),D(p,"type","range"),D(p,"min","0"),D(p,"max","12"),D(p,"step","1"),D(h,"class","regler svelte-1a4zsjd"),D(e,"class","interactive-font svelte-1a4zsjd")},m(b,w){Y(b,e,w),F(e,t),s[4](t),F(e,n),F(e,i),F(i,r),F(i,a),F(i,o),Gi(o,s[1]),F(i,l),F(i,c),F(c,u),F(e,f),F(e,h),F(h,m),F(h,g),F(h,p),Gi(p,s[2]),F(h,d),F(h,v),F(v,y),_||(x=[Je(o,"change",s[5]),Je(o,"input",s[5]),Je(o,"input",s[3]),Je(p,"change",s[6]),Je(p,"input",s[6]),Je(p,"input",s[3])],_=!0)},p(b,[w]){w&2&&Gi(o,b[1]),w&2&&lt(u,b[1]),w&4&&Gi(p,b[2]),w&4&&lt(y,b[2])},i:fe,o:fe,d(b){b&&X(e),s[4](null),_=!1,Jt(x)}}}function Tp(s,e,t){let n,i="500",r="0";function a(u){t(0,n.style.fontVariationSettings=`"wght" ${i}, "ital" ${r}`,n)}function o(u){yt[u?"unshift":"push"](()=>{n=u,t(0,n)})}function l(){i=jo(this.value),t(1,i)}function c(){r=jo(this.value),t(2,r)}return[n,i,r,a,o,l,c]}class Ep extends We{constructor(e){super(),Ve(this,e,Tp,Sp,Ge,{})}}function Ap(s){let e;return{c(){e=W("div"),e.innerHTML=`<div class="component-box"><div class="link-2 svelte-4nv30f" href="">Link 1</div></div> 
    <div class="component-box"><div class="link-6 svelte-4nv30f" href="">Link 2</div></div> 
    <div class="component-box"><div class="link-7 svelte-4nv30f" href="">Link 3</div></div> 
    <div class="component-box"><div class="link-12 svelte-4nv30f" href="">Link 4</div></div>`,D(e,"class","link-box svelte-4nv30f")},m(t,n){Y(t,e,n)},p:fe,i:fe,o:fe,d(t){t&&X(e)}}}class Lp extends We{constructor(e){super(),Ve(this,e,null,Ap,Ge,{})}}function Cp(s){let e,t,n,i,r,a,o,l,c,u,f,h,m,g,p,d,v,y;return{c(){e=W("div"),t=W("button"),t.textContent="text-align : start",n=ce(),i=W("button"),i.textContent="text-align : end",r=ce(),a=W("button"),a.textContent="text-align : left",o=ce(),l=W("button"),l.textContent="text-align : right",c=ce(),u=W("button"),u.textContent="text-align : center",f=ce(),h=W("button"),h.textContent="text-align : justify",m=ce(),g=W("button"),g.textContent="text-align : match-parent",p=ce(),d=W("p"),d.textContent=`This is an example text, to show the different text-alignment styles.
    Currently there are sever different ways to align your text.`,D(t,"class","interactive-element"),D(i,"class","interactive-element"),D(a,"class","interactive-element"),D(l,"class","interactive-element"),D(u,"class","interactive-element"),D(h,"class","interactive-element"),D(g,"class","interactive-element"),D(e,"class","button-container svelte-bl5mmd"),D(d,"class","example svelte-bl5mmd")},m(_,x){Y(_,e,x),F(e,t),s[15](t),F(e,n),F(e,i),s[16](i),F(e,r),F(e,a),s[17](a),F(e,o),F(e,l),s[18](l),F(e,c),F(e,u),s[19](u),F(e,f),F(e,h),s[20](h),F(e,m),F(e,g),s[21](g),Y(_,p,x),Y(_,d,x),s[22](d),v||(y=[Je(t,"click",s[8]),Je(i,"click",s[9]),Je(a,"click",s[10]),Je(l,"click",s[11]),Je(u,"click",s[12]),Je(h,"click",s[13]),Je(g,"click",s[14])],v=!0)},p:fe,i:fe,o:fe,d(_){_&&X(e),s[15](null),s[16](null),s[17](null),s[18](null),s[19](null),s[20](null),s[21](null),_&&X(p),_&&X(d),s[22](null),v=!1,Jt(y)}}}function Rp(s,e,t){let n,i,r,a,o,l,c,u;function f(){u.classList.toggle("start"),n.classList.toggle("active"),u.classList.remove("end"),u.classList.remove("left"),u.classList.remove("right"),u.classList.remove("center"),u.classList.remove("justify"),u.classList.remove("justify-all"),u.classList.remove("match-parent"),i.classList.remove("active"),r.classList.remove("active"),a.classList.remove("active"),o.classList.remove("active"),l.classList.remove("active"),c.classList.remove("active")}function h(){u.classList.toggle("end"),i.classList.toggle("active"),u.classList.remove("start"),u.classList.remove("left"),u.classList.remove("right"),u.classList.remove("center"),u.classList.remove("justify"),u.classList.remove("justify-all"),u.classList.remove("match-parent"),n.classList.remove("active"),r.classList.remove("active"),a.classList.remove("active"),o.classList.remove("active"),l.classList.remove("active"),c.classList.remove("active")}function m(){u.classList.toggle("left"),r.classList.toggle("active"),u.classList.remove("end"),u.classList.remove("start"),u.classList.remove("right"),u.classList.remove("center"),u.classList.remove("justify"),u.classList.remove("justify-all"),u.classList.remove("match-parent"),i.classList.remove("active"),n.classList.remove("active"),a.classList.remove("active"),o.classList.remove("active"),l.classList.remove("active"),c.classList.remove("active")}function g(){u.classList.toggle("right"),a.classList.toggle("active"),u.classList.remove("end"),u.classList.remove("start"),u.classList.remove("left"),u.classList.remove("center"),u.classList.remove("justify"),u.classList.remove("justify-all"),u.classList.remove("match-parent"),n.classList.remove("active"),i.classList.remove("active"),r.classList.remove("active"),o.classList.remove("active"),l.classList.remove("active"),c.classList.remove("active")}function p(){u.classList.toggle("center"),o.classList.toggle("active"),u.classList.remove("end"),u.classList.remove("start"),u.classList.remove("left"),u.classList.remove("right"),u.classList.remove("justify"),u.classList.remove("justify-all"),u.classList.remove("match-parent"),n.classList.remove("active"),i.classList.remove("active"),r.classList.remove("active"),a.classList.remove("active"),l.classList.remove("active"),c.classList.remove("active")}function d(){u.classList.toggle("justify"),l.classList.toggle("active"),u.classList.remove("end"),u.classList.remove("start"),u.classList.remove("left"),u.classList.remove("right"),u.classList.remove("center"),u.classList.remove("justify-all"),u.classList.remove("match-parent"),n.classList.remove("active"),i.classList.remove("active"),r.classList.remove("active"),a.classList.remove("active"),o.classList.remove("active"),c.classList.remove("active")}function v(){u.classList.toggle("match-parent"),c.classList.toggle("active"),u.classList.remove("end"),u.classList.remove("start"),u.classList.remove("left"),u.classList.remove("right"),u.classList.remove("center"),u.classList.remove("justify"),u.classList.remove("justify-all"),n.classList.remove("active"),i.classList.remove("active"),r.classList.remove("active"),a.classList.remove("active"),o.classList.remove("active"),l.classList.remove("active")}function y(C){yt[C?"unshift":"push"](()=>{n=C,t(0,n)})}function _(C){yt[C?"unshift":"push"](()=>{i=C,t(1,i)})}function x(C){yt[C?"unshift":"push"](()=>{r=C,t(2,r)})}function b(C){yt[C?"unshift":"push"](()=>{a=C,t(3,a)})}function w(C){yt[C?"unshift":"push"](()=>{o=C,t(4,o)})}function E(C){yt[C?"unshift":"push"](()=>{l=C,t(5,l)})}function M(C){yt[C?"unshift":"push"](()=>{c=C,t(6,c)})}function S(C){yt[C?"unshift":"push"](()=>{u=C,t(7,u)})}return[n,i,r,a,o,l,c,u,f,h,m,g,p,d,v,y,_,x,b,w,E,M,S]}class Pp extends We{constructor(e){super(),Ve(this,e,Rp,Cp,Ge,{})}}function Dp(s){let e,t,n,i,r;return{c(){e=W("button"),e.textContent="animated paragraphs: off",t=ce(),n=W("br"),D(e,"class","interactive-element")},m(a,o){Y(a,e,o),s[2](e),Y(a,t,o),Y(a,n,o),i||(r=Je(e,"click",s[1]),i=!0)},p:fe,i:fe,o:fe,d(a){a&&X(e),s[2](null),a&&X(t),a&&X(n),i=!1,r()}}}function Ip(s,e,t){let n;function i(){document.querySelectorAll(".entry-paragraph").forEach((a,o)=>{a.classList.toggle("animated-paragraphs");const l=`${o*500}ms`;a.style.animationDelay=l,a.style.animationIterationCount=100}),n.classList.toggle("active"),t(0,n.innerHTML="animated paragraphs: on",n),n.classList.contains("active")||t(0,n.innerHTML="animated paragraphs: off",n)}function r(a){yt[a?"unshift":"push"](()=>{n=a,t(0,n)})}return[n,i,r]}class kp extends We{constructor(e){super(),Ve(this,e,Ip,Dp,Ge,{})}}function Fp(s){let e,t=s[1].value+"",n;return{c(){e=W("span"),n=ke(t),D(e,"class","ref")},m(i,r){Y(i,e,r),F(e,n)},p(i,r){r&2&&t!==(t=i[1].value+"")&&lt(n,t)},d(i){i&&X(e)}}}function Np(s){let e,t=s[1].content[0].value+"",n,i;return{c(){e=W("a"),n=ke(t),D(e,"class","ref"),D(e,"href",i=s[1].data.uri),D(e,"target","_blank"),D(e,"rel","noopener noreferrer")},m(r,a){Y(r,e,a),F(e,n)},p(r,a){a&2&&t!==(t=r[1].content[0].value+"")&&lt(n,t),a&2&&i!==(i=r[1].data.uri)&&D(e,"href",i)},d(r){r&&X(e)}}}function Op(s){let e,t,n,i,r;function a(c,u){return u&2&&(i=null),i==null&&(i=!!zp(c[1])),i?Np:Fp}let o=a(s,-1),l=o(s);return{c(){e=W("span"),t=ke(s[0]),n=ce(),l.c(),r=it(),D(e,"class","link-key superscript")},m(c,u){Y(c,e,u),F(e,t),Y(c,n,u),l.m(c,u),Y(c,r,u)},p(c,[u]){u&1&&lt(t,c[0]),o===(o=a(c,u))&&l?l.p(c,u):(l.d(1),l=o(c),l&&(l.c(),l.m(r.parentNode,r)))},i:fe,o:fe,d(c){c&&X(e),c&&X(n),l.d(c),c&&X(r)}}}function zp(s){return s&&s.content&&Array.isArray(s.content)}function Up(s,e,t){let{refKey:n}=e,{refVal:i}=e;return s.$$set=r=>{"refKey"in r&&t(0,n=r.refKey),"refVal"in r&&t(1,i=r.refVal)},[n,i]}class Bp extends We{constructor(e){super(),Ve(this,e,Up,Op,Ge,{refKey:0,refVal:1})}}function El(s,e,t){const n=s.slice();return n[5]=e[t],n}function Al(s,e,t){const n=s.slice();return n[8]=e[t][0],n[9]=e[t][1],n}function Ll(s,e,t){const n=s.slice();return n[12]=e[t],n}function Cl(s){let e,t=s[0].metadata.tags,n=[];for(let i=0;i<t.length;i+=1)n[i]=Rl(Ll(s,t,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=it()},m(i,r){for(let a=0;a<n.length;a+=1)n[a].m(i,r);Y(i,e,r)},p(i,r){if(r&1){t=i[0].metadata.tags;let a;for(a=0;a<t.length;a+=1){const o=Ll(i,t,a);n[a]?n[a].p(o,r):(n[a]=Rl(o),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){wt(n,i),i&&X(e)}}}function Rl(s){let e,t,n=s[12].sys.id+"",i,r;return{c(){e=W("span"),t=ke("("),i=ke(n),r=ke(")"),D(e,"class","tag svelte-1ogbki9")},m(a,o){Y(a,e,o),F(e,t),F(e,i),F(e,r)},p(a,o){o&1&&n!==(n=a[12].sys.id+"")&&lt(i,n)},d(a){a&&X(e)}}}function Pl(s){let e,t,n,i;e=new vo({props:{value:"References",counts:s[1]}});let r=jl(s[4]),a=[];for(let l=0;l<r.length;l+=1)a[l]=Dl(Al(s,r,l));const o=l=>$(a[l],1,1,()=>{a[l]=null});return{c(){Re(e.$$.fragment),t=ce();for(let l=0;l<a.length;l+=1)a[l].c();n=it()},m(l,c){Le(e,l,c),Y(l,t,c);for(let u=0;u<a.length;u+=1)a[u].m(l,c);Y(l,n,c),i=!0},p(l,c){const u={};if(c&2&&(u.counts=l[1]),e.$set(u),c&16){r=jl(l[4]);let f;for(f=0;f<r.length;f+=1){const h=Al(l,r,f);a[f]?(a[f].p(h,c),O(a[f],1)):(a[f]=Dl(h),a[f].c(),O(a[f],1),a[f].m(n.parentNode,n))}for(ze(),f=r.length;f<a.length;f+=1)o(f);Ue()}},i(l){if(!i){O(e.$$.fragment,l);for(let c=0;c<r.length;c+=1)O(a[c]);i=!0}},o(l){$(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)$(a[c]);i=!1},d(l){Ce(e,l),l&&X(t),wt(a,l),l&&X(n)}}}function Dl(s){let e,t,n,i;return t=new Bp({props:{refKey:s[8],refVal:Wl(s[9])}}),{c(){e=W("div"),Re(t.$$.fragment),n=ce(),D(e,"class","reference svelte-1ogbki9")},m(r,a){Y(r,e,a),Le(t,e,null),F(e,n),i=!0},p(r,a){const o={};a&16&&(o.refKey=r[8]),a&16&&(o.refVal=Wl(r[9])),t.$set(o)},i(r){i||(O(t.$$.fragment,r),i=!0)},o(r){$(t.$$.fragment,r),i=!1},d(r){r&&X(e),Ce(t)}}}function Il(s){let e,t,n,i,r,a,o,l,c=s[0].fields.specialElement==="SvgAnimation"&&kl(),u=s[0].fields.specialElement==="font-smoothing"&&Fl(),f=s[0].fields.specialElement==="cursor"&&Nl(),h=s[0].fields.specialElement==="variable-font"&&Ol(),m=s[0].fields.specialElement==="underlined-text"&&zl(),g=s[0].fields.specialElement==="text-alignment"&&Ul(),p=s[0].fields.specialElement==="keyframe-animation"&&Bl();return{c(){c&&c.c(),e=ce(),u&&u.c(),t=ce(),f&&f.c(),n=ce(),h&&h.c(),i=ce(),m&&m.c(),r=ce(),g&&g.c(),a=ce(),p&&p.c(),o=it()},m(d,v){c&&c.m(d,v),Y(d,e,v),u&&u.m(d,v),Y(d,t,v),f&&f.m(d,v),Y(d,n,v),h&&h.m(d,v),Y(d,i,v),m&&m.m(d,v),Y(d,r,v),g&&g.m(d,v),Y(d,a,v),p&&p.m(d,v),Y(d,o,v),l=!0},p(d,v){d[0].fields.specialElement==="SvgAnimation"?c?v&1&&O(c,1):(c=kl(),c.c(),O(c,1),c.m(e.parentNode,e)):c&&(ze(),$(c,1,1,()=>{c=null}),Ue()),d[0].fields.specialElement==="font-smoothing"?u?v&1&&O(u,1):(u=Fl(),u.c(),O(u,1),u.m(t.parentNode,t)):u&&(ze(),$(u,1,1,()=>{u=null}),Ue()),d[0].fields.specialElement==="cursor"?f?v&1&&O(f,1):(f=Nl(),f.c(),O(f,1),f.m(n.parentNode,n)):f&&(ze(),$(f,1,1,()=>{f=null}),Ue()),d[0].fields.specialElement==="variable-font"?h?v&1&&O(h,1):(h=Ol(),h.c(),O(h,1),h.m(i.parentNode,i)):h&&(ze(),$(h,1,1,()=>{h=null}),Ue()),d[0].fields.specialElement==="underlined-text"?m?v&1&&O(m,1):(m=zl(),m.c(),O(m,1),m.m(r.parentNode,r)):m&&(ze(),$(m,1,1,()=>{m=null}),Ue()),d[0].fields.specialElement==="text-alignment"?g?v&1&&O(g,1):(g=Ul(),g.c(),O(g,1),g.m(a.parentNode,a)):g&&(ze(),$(g,1,1,()=>{g=null}),Ue()),d[0].fields.specialElement==="keyframe-animation"?p?v&1&&O(p,1):(p=Bl(),p.c(),O(p,1),p.m(o.parentNode,o)):p&&(ze(),$(p,1,1,()=>{p=null}),Ue())},i(d){l||(O(c),O(u),O(f),O(h),O(m),O(g),O(p),l=!0)},o(d){$(c),$(u),$(f),$(h),$(m),$(g),$(p),l=!1},d(d){c&&c.d(d),d&&X(e),u&&u.d(d),d&&X(t),f&&f.d(d),d&&X(n),h&&h.d(d),d&&X(i),m&&m.d(d),d&&X(r),g&&g.d(d),d&&X(a),p&&p.d(d),d&&X(o)}}}function kl(s){let e,t;return e=new vp({}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Fl(s){let e,t;return e=new bp({}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Nl(s){let e,t;return e=new wp({}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Ol(s){let e,t;return e=new Ep({}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function zl(s){let e,t;return e=new Lp({}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Ul(s){let e,t;return e=new Pp({}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Bl(s){let e,t;return e=new kp({}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Gl(s){let e,t,n,i;e=new vo({props:{value:"Implementation",counts:s[1]}});let r=s[0].fields.codeField.content,a=[];for(let l=0;l<r.length;l+=1)a[l]=Vl(El(s,r,l));const o=l=>$(a[l],1,1,()=>{a[l]=null});return{c(){Re(e.$$.fragment),t=ce();for(let l=0;l<a.length;l+=1)a[l].c();n=it()},m(l,c){Le(e,l,c),Y(l,t,c);for(let u=0;u<a.length;u+=1)a[u].m(l,c);Y(l,n,c),i=!0},p(l,c){const u={};if(c&2&&(u.counts=l[1]),e.$set(u),c&1){r=l[0].fields.codeField.content;let f;for(f=0;f<r.length;f+=1){const h=El(l,r,f);a[f]?(a[f].p(h,c),O(a[f],1)):(a[f]=Vl(h),a[f].c(),O(a[f],1),a[f].m(n.parentNode,n))}for(ze(),f=r.length;f<a.length;f+=1)o(f);Ue()}},i(l){if(!i){O(e.$$.fragment,l);for(let c=0;c<r.length;c+=1)O(a[c]);i=!0}},o(l){$(e.$$.fragment,l),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)$(a[c]);i=!1},d(l){Ce(e,l),l&&X(t),wt(a,l),l&&X(n)}}}function Hl(s){let e,t;return e=new gp({props:{item:s[5].content[0]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.item=n[5].content[0]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Vl(s){let e,t,n=s[5].nodeType==="paragraph"&&Hl(s);return{c(){n&&n.c(),e=it()},m(i,r){n&&n.m(i,r),Y(i,e,r),t=!0},p(i,r){i[5].nodeType==="paragraph"?n?(n.p(i,r),r&1&&O(n,1)):(n=Hl(i),n.c(),O(n,1),n.m(e.parentNode,e)):n&&(ze(),$(n,1,1,()=>{n=null}),Ue())},i(i){t||(O(n),t=!0)},o(i){$(n),t=!1},d(i){n&&n.d(i),i&&X(e)}}}function Gp(s){let e,t,n,i=s[0].fields.title+"",r,a,o,l,c,u,f,h,m,g,p=Object.keys(s[4]).length>0,d,v,y,_,x,b,w,E=Ka(s[0]),M,S,C,j,q,P=s[0].metadata&&s[0].metadata.tags&&Cl(s);m=new wl({props:{item:s[3],counts:s[1]}});let R=p&&Pl(s),G=s[0].fields.specialElement&&Il(s),Z=E&&Gl(s);return S=new wl({props:{item:s[2],counts:s[1]}}),{c(){e=W("div"),t=W("div"),n=W("h1"),r=ke(i),a=ce(),o=W("div"),P&&P.c(),l=ce(),c=W("div"),u=W("div"),f=W("div"),h=ce(),Re(m.$$.fragment),g=ce(),R&&R.c(),d=ce(),G&&G.c(),v=ce(),y=W("br"),_=ce(),x=W("div"),b=W("div"),w=ce(),Z&&Z.c(),M=ce(),Re(S.$$.fragment),C=ce(),j=W("br"),D(n,"class","svelte-1ogbki9"),D(o,"class","glossary-tags svelte-1ogbki9"),D(t,"class","headline svelte-1ogbki9"),D(f,"class","top-gradient svelte-1ogbki9"),D(u,"class","entry-content svelte-1ogbki9"),D(b,"class","top-gradient-yellow svelte-1ogbki9"),D(x,"class","entry-content svelte-1ogbki9"),D(c,"class","entry-container svelte-1ogbki9"),D(e,"class","glossary-entry svelte-1ogbki9")},m(K,H){Y(K,e,H),F(e,t),F(t,n),F(n,r),F(t,a),F(t,o),P&&P.m(o,null),F(e,l),F(e,c),F(c,u),F(u,f),F(u,h),Le(m,u,null),F(u,g),R&&R.m(u,null),F(u,d),G&&G.m(u,null),F(u,v),F(u,y),F(c,_),F(c,x),F(x,b),F(x,w),Z&&Z.m(x,null),F(x,M),Le(S,x,null),F(x,C),F(x,j),q=!0},p(K,[H]){(!q||H&1)&&i!==(i=K[0].fields.title+"")&&lt(r,i),K[0].metadata&&K[0].metadata.tags?P?P.p(K,H):(P=Cl(K),P.c(),P.m(o,null)):P&&(P.d(1),P=null);const re={};H&8&&(re.item=K[3]),H&2&&(re.counts=K[1]),m.$set(re),H&16&&(p=Object.keys(K[4]).length>0),p?R?(R.p(K,H),H&16&&O(R,1)):(R=Pl(K),R.c(),O(R,1),R.m(u,d)):R&&(ze(),$(R,1,1,()=>{R=null}),Ue()),K[0].fields.specialElement?G?(G.p(K,H),H&1&&O(G,1)):(G=Il(K),G.c(),O(G,1),G.m(u,v)):G&&(ze(),$(G,1,1,()=>{G=null}),Ue()),H&1&&(E=Ka(K[0])),E?Z?(Z.p(K,H),H&1&&O(Z,1)):(Z=Gl(K),Z.c(),O(Z,1),Z.m(x,M)):Z&&(ze(),$(Z,1,1,()=>{Z=null}),Ue());const ie={};H&4&&(ie.item=K[2]),H&2&&(ie.counts=K[1]),S.$set(ie)},i(K){q||(O(m.$$.fragment,K),O(R),O(G),O(Z),O(S.$$.fragment,K),q=!0)},o(K){$(m.$$.fragment,K),$(R),$(G),$(Z),$(S.$$.fragment,K),q=!1},d(K){K&&X(e),P&&P.d(),Ce(m),R&&R.d(),G&&G.d(),Z&&Z.d(),Ce(S)}}}function Ka(s){return s.fields.codeField&&s.fields.codeField.content.length>=1&&s.fields.codeField.content[0].content[0].value!==""}function Wl(s){return s.fields.ref.content[0].content.filter(e=>e.nodeType==="hyperlink"||e.nodeType==="text"&&e.value!=="")[0]}function jl(s){let e=[];for(const[t,n]of Object.entries(s))e.push([t,n]);return e.sort((t,n)=>t[0]>n[0]?1:n[0]>t[0]?-1:0),e}function Hp(s,e,t){let n,i,r;ct(s,xr,l=>t(4,r=l));let{entry:a}=e,o={};return Bh(()=>{let l=0;function c(u){for(let f of u)if(f.nodeType==="heading-3"){const h=f.content[0].value;t(1,o[h]=l+1,o),l++}}a.fields.textContent&&c(a.fields.textContent.content),Object.keys(r).length>0&&(t(1,o.References=l+1,o),l++),Ka(a)&&(t(1,o.Implementation=l+1,o),l++),a.fields.codeComment&&c(a.fields.codeComment.content)}),s.$$set=l=>{"entry"in l&&t(0,a=l.entry)},s.$$.update=()=>{s.$$.dirty&1&&t(3,n=a.fields.textContent),s.$$.dirty&1&&t(2,i=a.fields.codeComment)},[a,o,i,n,r]}class Vp extends We{constructor(e){super(),Ve(this,e,Hp,Gp,Ge,{entry:0})}}function $l(s,e,t){const n=s.slice();return n[4]=e[t][0],n[5]=e[t][1],n}function ql(s,e,t){const n=s.slice();return n[8]=e[t],n}function Wp(s){let e,t=s[8].title+"",n,i;return{c(){e=W("span"),n=ke(t),i=ce()},m(r,a){Y(r,e,a),F(e,n),Y(r,i,a)},p(r,a){a&4&&t!==(t=r[8].title+"")&&lt(n,t)},d(r){r&&X(e),r&&X(i)}}}function Xl(s){let e,t;return e=new Ar({props:{to:hi(s[8].title),class:Kl(s[8])?"code_entry":"glossary-title",$$slots:{default:[Wp]},$$scope:{ctx:s}}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&4&&(r.to=hi(n[8].title)),i&4&&(r.class=Kl(n[8])?"code_entry":"glossary-title"),i&2052&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Yl(s){let e,t,n,i,r=s[4]+"",a,o,l,c,u,f,h,m,g=s[5],p=[];for(let v=0;v<g.length;v+=1)p[v]=Xl(ql(s,g,v));const d=v=>$(p[v],1,1,()=>{p[v]=null});return{c(){e=W("div"),t=W("h2"),n=W("span"),n.textContent="(",i=ce(),a=ke(r),o=ce(),l=W("span"),l.textContent=")",c=ce(),u=W("div");for(let v=0;v<p.length;v+=1)p[v].c();f=ce(),D(n,"class","serif-bracket svelte-5mptvy"),D(l,"class","serif-bracket svelte-5mptvy"),D(t,"class","glossary-letter svelte-5mptvy"),D(u,"class","glossary-entries svelte-5mptvy"),D(e,"class",h=rt(`glossay-entry-list ${s[1]?"nav-has-entry":"nav-no-entry"}`)+" svelte-5mptvy")},m(v,y){Y(v,e,y),F(e,t),F(t,n),F(t,i),F(t,a),F(t,o),F(t,l),F(e,c),F(e,u);for(let _=0;_<p.length;_+=1)p[_].m(u,null);F(e,f),m=!0},p(v,y){if((!m||y&4)&&r!==(r=v[4]+"")&&lt(a,r),y&4){g=v[5];let _;for(_=0;_<g.length;_+=1){const x=ql(v,g,_);p[_]?(p[_].p(x,y),O(p[_],1)):(p[_]=Xl(x),p[_].c(),O(p[_],1),p[_].m(u,null))}for(ze(),_=g.length;_<p.length;_+=1)d(_);Ue()}(!m||y&2&&h!==(h=rt(`glossay-entry-list ${v[1]?"nav-has-entry":"nav-no-entry"}`)+" svelte-5mptvy"))&&D(e,"class",h)},i(v){if(!m){for(let y=0;y<g.length;y+=1)O(p[y]);m=!0}},o(v){p=p.filter(Boolean);for(let y=0;y<p.length;y+=1)$(p[y]);m=!1},d(v){v&&X(e),wt(p,v)}}}function jp(s){let e,t,n=Object.entries(s[2]),i=[];for(let a=0;a<n.length;a+=1)i[a]=Yl($l(s,n,a));const r=a=>$(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=it()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);Y(a,e,o),t=!0},p(a,[o]){if(o&6){n=Object.entries(a[2]);let l;for(l=0;l<n.length;l+=1){const c=$l(a,n,l);i[l]?(i[l].p(c,o),O(i[l],1)):(i[l]=Yl(c),i[l].c(),O(i[l],1),i[l].m(e.parentNode,e))}for(ze(),l=n.length;l<i.length;l+=1)r(l);Ue()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)O(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)$(i[o]);t=!1},d(a){wt(i,a),a&&X(e)}}}function Kl(s){return s.metadata.tags.filter(e=>e.id==="coding").length>0}function $p(s,e,t){let n,i=fe,r=()=>(i(),i=mo(o,c=>t(3,n=c)),o),a;ct(s,Hi,c=>t(2,a=c)),s.$$.on_destroy.push(()=>i());let{titleItems:o={}}=e;r();let{hasEntry:l}=e;return wi(()=>{Dt(Hi,a=n,a)}),s.$$set=c=>{"titleItems"in c&&r(t(0,o=c.titleItems)),"hasEntry"in c&&t(1,l=c.hasEntry)},[o,l,a]}class qp extends We{constructor(e){super(),Ve(this,e,$p,jp,Ge,{titleItems:0,hasEntry:1})}}function Zl(s,e,t){const n=s.slice();return n[12]=e[t],n}function Jl(s){let e,t,n,i,r,a,o,l,c,u,f,h=s[0],m=[];for(let g=0;g<h.length;g+=1)m[g]=Ql(Zl(s,h,g));return{c(){e=W("div"),t=W("span"),t.textContent="+ Filter",n=ce(),i=W("div"),r=W("div"),a=W("span"),a.textContent=`${Nf}`,l=ce();for(let g=0;g<m.length;g+=1)m[g].c();D(t,"class","filter-text svelte-1b7yzxx"),D(r,"class",o=rt(s[4].length===0&&"active")+" svelte-1b7yzxx"),D(i,"class","entry-tags svelte-1b7yzxx"),D(e,"class",c=rt(`filter-container ${s[3]}`)+" svelte-1b7yzxx")},m(g,p){Y(g,e,p),F(e,t),s[8](t),F(e,n),F(e,i),F(i,r),F(r,a),F(i,l);for(let d=0;d<m.length;d+=1)m[d].m(i,null);s[9](i),u||(f=[Je(t,"click",s[6]),Je(i,"click",s[5])],u=!0)},p(g,p){if(p&16&&o!==(o=rt(g[4].length===0&&"active")+" svelte-1b7yzxx")&&D(r,"class",o),p&17){h=g[0];let d;for(d=0;d<h.length;d+=1){const v=Zl(g,h,d);m[d]?m[d].p(v,p):(m[d]=Ql(v),m[d].c(),m[d].m(i,null))}for(;d<m.length;d+=1)m[d].d(1);m.length=h.length}p&8&&c!==(c=rt(`filter-container ${g[3]}`)+" svelte-1b7yzxx")&&D(e,"class",c)},d(g){g&&X(e),s[8](null),wt(m,g),s[9](null),u=!1,Jt(f)}}}function Ql(s){let e,t,n=s[12].tag+"",i,r,a;return{c(){e=W("div"),t=W("span"),i=ke(n),r=ce(),D(t,"class","tagname"),D(e,"class",a=rt(s[4].includes(s[12].tag)?"active":"")+" svelte-1b7yzxx")},m(o,l){Y(o,e,l),F(e,t),F(t,i),F(e,r)},p(o,l){l&1&&n!==(n=o[12].tag+"")&&lt(i,n),l&17&&a!==(a=rt(o[4].includes(o[12].tag)?"active":"")+" svelte-1b7yzxx")&&D(e,"class",a)},d(o){o&&X(e)}}}function Xp(s){let e,t=s[0].length>0&&Jl(s);return{c(){t&&t.c(),e=it()},m(n,i){t&&t.m(n,i),Y(n,e,i)},p(n,[i]){n[0].length>0?t?t.p(n,i):(t=Jl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:fe,o:fe,d(n){t&&t.d(n),n&&X(e)}}}let Nf="all";function Yp(s,e,t){let n,i,r,a;ct(s,Hi,p=>t(10,i=p)),ct(s,Vs,p=>t(4,r=p)),ct(s,Ts,p=>t(11,a=p));let{tags:o={}}=e,{hasEntry:l}=e;function c(p){p.preventDefault();let d=p.target.innerText.toLowerCase();const v=p.target;if(!v.classList.contains("tagname"))if(v.nodeName==="SPAN")d=v.parentNode.firstChild.innerText.toLowerCase();else if(v.nodeName==="DIV")d=v.firstChild.innerText.toLowerCase();else return;if(d===Nf){Dt(Vs,r=[],r),Dt(Hi,i=a,i);return}if(r.includes(d)?Dt(Vs,r=r.filter(_=>_!==d),r):Dt(Vs,r=[...r,d],r),r.length===0){Dt(Hi,i=a,i);return}let y={};for(const[_,x]of Object.entries(a))y[_]=x.filter(b=>{for(const w of b.metadata.tags)if(r.includes(w.name))return!0;return!1}),y[_].length===0&&delete y[_];Dt(Hi,i=y,i)}let u,f;function h(p){p.preventDefault(),u.classList.toggle("show"),f.classList.toggle("show"),t(2,f.innerHTML="\u2013 Filter",f),u.classList.contains("show")||t(2,f.innerHTML="+ Filter",f)}function m(p){yt[p?"unshift":"push"](()=>{f=p,t(2,f)})}function g(p){yt[p?"unshift":"push"](()=>{u=p,t(1,u)})}return s.$$set=p=>{"tags"in p&&t(0,o=p.tags),"hasEntry"in p&&t(7,l=p.hasEntry)},s.$$.update=()=>{s.$$.dirty&128&&t(3,n=l?"has-entry":"no-entry")},[o,u,f,n,r,c,h,l,m,g]}class Kp extends We{constructor(e){super(),Ve(this,e,Yp,Xp,Ge,{tags:0,hasEntry:7})}}function ec(s,e,t){const n=s.slice();return n[7]=e[t],n}function tc(s,e,t){const n=s.slice();return n[10]=e[t],n}function nc(s){let e,t=s[1],n=[];for(let i=0;i<t.length;i+=1)n[i]=rc(ec(s,t,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=it()},m(i,r){for(let a=0;a<n.length;a+=1)n[a].m(i,r);Y(i,e,r)},p(i,r){if(r&2){t=i[1];let a;for(a=0;a<t.length;a+=1){const o=ec(i,t,a);n[a]?n[a].p(o,r):(n[a]=rc(o),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){wt(n,i),i&&X(e)}}}function ic(s){let e,t=s[7].metadata.tags,n=[];for(let i=0;i<t.length;i+=1)n[i]=sc(tc(s,t,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=it()},m(i,r){for(let a=0;a<n.length;a+=1)n[a].m(i,r);Y(i,e,r)},p(i,r){if(r&2){t=i[7].metadata.tags;let a;for(a=0;a<t.length;a+=1){const o=tc(i,t,a);n[a]?n[a].p(o,r):(n[a]=sc(o),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){wt(n,i),i&&X(e)}}}function sc(s){let e,t,n=s[10].sys.id+"",i,r;return{c(){e=W("span"),t=ke("("),i=ke(n),r=ke(")"),D(e,"class","tag svelte-di5htf")},m(a,o){Y(a,e,o),F(e,t),F(e,i),F(e,r)},p(a,o){o&2&&n!==(n=a[10].sys.id+"")&&lt(i,n)},d(a){a&&X(e)}}}function rc(s){let e,t,n=s[7].fields.title+"",i,r,a,o,l=s[7].metadata&&s[7].metadata.tags&&ic(s);return{c(){e=W("div"),t=W("a"),i=ke(n),a=ce(),l&&l.c(),o=ce(),D(t,"href",r=hi(s[7].fields.title)),D(t,"class","svelte-di5htf"),D(e,"class","result svelte-di5htf")},m(c,u){Y(c,e,u),F(e,t),F(t,i),F(e,a),l&&l.m(e,null),F(e,o)},p(c,u){u&2&&n!==(n=c[7].fields.title+"")&&lt(i,n),u&2&&r!==(r=hi(c[7].fields.title))&&D(t,"href",r),c[7].metadata&&c[7].metadata.tags?l?l.p(c,u):(l=ic(c),l.c(),l.m(e,o)):l&&(l.d(1),l=null)},d(c){c&&X(e),l&&l.d()}}}function Zp(s){let e,t,n,i,r,a,o,l=s[1].length>0&&nc(s);return{c(){e=W("div"),t=W("input"),n=ce(),i=W("div"),l&&l.c(),D(t,"type","text"),D(t,"placeholder","Search"),D(t,"class","svelte-di5htf"),D(i,"class","search-results svelte-di5htf"),D(e,"class",r=rt(`search ${s[2]}`)+" svelte-di5htf")},m(c,u){Y(c,e,u),F(e,t),Gi(t,s[0]),F(e,n),F(e,i),l&&l.m(i,null),a||(o=[Je(t,"input",s[5]),Je(t,"keyup",s[3])],a=!0)},p(c,[u]){u&1&&t.value!==c[0]&&Gi(t,c[0]),c[1].length>0?l?l.p(c,u):(l=nc(c),l.c(),l.m(i,null)):l&&(l.d(1),l=null),u&4&&r!==(r=rt(`search ${c[2]}`)+" svelte-di5htf")&&D(e,"class",r)},i:fe,o:fe,d(c){c&&X(e),l&&l.d(),a=!1,Jt(o)}}}function Jp(s,e,t){let n,i;ct(s,Rr,u=>t(6,i=u));let{hasEntry:r}=e,a="",o=[];async function l(){if(a.length>=2){let u=await i.search(a);t(1,o=u.items),console.log(u)}else t(1,o=[])}function c(){a=this.value,t(0,a)}return s.$$set=u=>{"hasEntry"in u&&t(4,r=u.hasEntry)},s.$$.update=()=>{s.$$.dirty&16&&t(2,n=r?"has-entry":"search")},[a,o,n,l,r,c]}class Qp extends We{constructor(e){super(),Ve(this,e,Jp,Zp,Ge,{hasEntry:4})}}function em(s,e,t){const n=s.slice();return n[5]=e[t],n}function tm(s,e,t){const n=s.slice();return n[5]=e[t],n[7]=t,n}function nm(s){let e,t,n,i=Array(90),r=[];for(let a=0;a<i.length;a+=1)r[a]=sm(em(s,i,a));return{c(){e=W("div");for(let a=0;a<r.length;a+=1)r[a].c();D(e,"class","arrows svelte-xxmj86")},m(a,o){Y(a,e,o);for(let l=0;l<r.length;l+=1)r[l].m(e,null);t||(n=Je(e,"mouseout",s[4]),t=!0)},p:fe,d(a){a&&X(e),wt(r,a),t=!1,n()}}}function im(s){let e,t,n,i=Array(90),r=[];for(let a=0;a<i.length;a+=1)r[a]=rm(tm(s,i,a));return{c(){e=W("div");for(let a=0;a<r.length;a+=1)r[a].c();D(e,"class","numbers svelte-xxmj86")},m(a,o){Y(a,e,o);for(let l=0;l<r.length;l+=1)r[l].m(e,null);t||(n=Je(e,"mouseover",s[3]),t=!0)},p:fe,d(a){a&&X(e),wt(r,a),t=!1,n()}}}function sm(s){let e,t;return{c(){e=ke(`\u2190
                `),t=W("br")},m(n,i){Y(n,e,i),Y(n,t,i)},p:fe,d(n){n&&X(e),n&&X(t)}}}function rm(s){let e=(s[7]+1).toString().padStart(2,"0")+"",t,n,i;return{c(){t=ke(e),n=ce(),i=W("br")},m(r,a){Y(r,t,a),Y(r,n,a),Y(r,i,a)},p:fe,d(r){r&&X(t),r&&X(n),r&&X(i)}}}function am(s){let e,t,n;function i(o,l){return o[0]?im:nm}let r=i(s),a=r(s);return{c(){e=W("div"),a.c(),D(e,"class","line-numbers svelte-xxmj86")},m(o,l){Y(o,e,l),a.m(e,null),t||(n=Je(e,"click",s[1]),t=!0)},p(o,[l]){r===(r=i(o))&&a?a.p(o,l):(a.d(1),a=r(o),a&&(a.c(),a.m(e,null)))},i:fe,o:fe,d(o){o&&X(e),a.d(),t=!1,n()}}}function om(s,e,t){let{removeEntry:n}=e,i=!0;function r(){console.log("click",i),i||n()}const a=()=>t(0,i=!1),o=()=>t(0,i=!0);return s.$$set=l=>{"removeEntry"in l&&t(2,n=l.removeEntry)},[i,r,n,a,o]}class lm extends We{constructor(e){super(),Ve(this,e,om,am,Ge,{removeEntry:2})}}function cm(s){let e;return{c(){e=W("div"),e.innerHTML='<h1 class="svelte-1h3en7p">loading <span id="circle_one" class="dots svelte-1h3en7p">.</span><span id="circle_two" class="dots svelte-1h3en7p">.</span><span id="circle_three" class="dots svelte-1h3en7p">.</span></h1>'},m(t,n){Y(t,e,n)},p:fe,i:fe,o:fe,d(t){t&&X(e)}}}function um(s){let e,t,n,i,r,a,o,l,c,u,f,h,m,g,p,d,v,y,_,x,b;o=new Kp({props:{tags:s[0],hasEntry:s[2]}}),c=new Qp({props:{hasEntry:s[2]}}),d=new qp({props:{titleItems:Ts,hasEntry:s[2]}});let w=s[2]&&ac(s);return{c(){e=W("div"),t=W("div"),n=W("div"),i=ke("\u2190 back"),a=ce(),Re(o.$$.fragment),l=ce(),Re(c.$$.fragment),f=ce(),h=W("div"),m=W("div"),g=ce(),p=W("div"),Re(d.$$.fragment),v=ce(),w&&w.c(),D(n,"class",r=rt(`back ${s[2]?"has-entry":"no-entry"}`)+" svelte-1h3en7p"),D(t,"class","left-nav svelte-1h3en7p"),D(e,"class",u=rt(`navigation-bar ${s[2]?"has-entry":"no-entry"}`)+" svelte-1h3en7p"),D(m,"class","ellipse svelte-1h3en7p"),D(p,"class","entry-list svelte-1h3en7p"),D(h,"class",y=rt(`glossary ${s[2]?"has-entry":"no-entry"}`)+" svelte-1h3en7p")},m(E,M){Y(E,e,M),F(e,t),F(t,n),F(n,i),s[7](n),F(t,a),Le(o,t,null),F(e,l),Le(c,e,null),Y(E,f,M),Y(E,h,M),F(h,m),F(h,g),F(h,p),Le(d,p,null),F(h,v),w&&w.m(h,null),_=!0,x||(b=Je(n,"click",s[5]),x=!0)},p(E,M){(!_||M&4&&r!==(r=rt(`back ${E[2]?"has-entry":"no-entry"}`)+" svelte-1h3en7p"))&&D(n,"class",r);const S={};M&1&&(S.tags=E[0]),M&4&&(S.hasEntry=E[2]),o.$set(S);const C={};M&4&&(C.hasEntry=E[2]),c.$set(C),(!_||M&4&&u!==(u=rt(`navigation-bar ${E[2]?"has-entry":"no-entry"}`)+" svelte-1h3en7p"))&&D(e,"class",u);const j={};M&4&&(j.hasEntry=E[2]),d.$set(j),E[2]?w?(w.p(E,M),M&4&&O(w,1)):(w=ac(E),w.c(),O(w,1),w.m(h,null)):w&&(ze(),$(w,1,1,()=>{w=null}),Ue()),(!_||M&4&&y!==(y=rt(`glossary ${E[2]?"has-entry":"no-entry"}`)+" svelte-1h3en7p"))&&D(h,"class",y)},i(E){_||(O(o.$$.fragment,E),O(c.$$.fragment,E),O(d.$$.fragment,E),O(w),_=!0)},o(E){$(o.$$.fragment,E),$(c.$$.fragment,E),$(d.$$.fragment,E),$(w),_=!1},d(E){E&&X(e),s[7](null),Ce(o),Ce(c),E&&X(f),E&&X(h),Ce(d),w&&w.d(),x=!1,b()}}}function ac(s){let e,t,n,i,r;return t=new lm({props:{removeEntry:s[5]}}),i=new Vp({props:{entry:s[3]}}),{c(){e=W("div"),Re(t.$$.fragment),n=ce(),Re(i.$$.fragment),D(e,"class","open-entry svelte-1h3en7p")},m(a,o){Y(a,e,o),Le(t,e,null),F(e,n),Le(i,e,null),r=!0},p(a,o){const l={};o&8&&(l.entry=a[3]),i.$set(l)},i(a){r||(O(t.$$.fragment,a),O(i.$$.fragment,a),r=!0)},o(a){$(t.$$.fragment,a),$(i.$$.fragment,a),r=!1},d(a){a&&X(e),Ce(t),Ce(i)}}}function fm(s){let e,t,n,i,r;const a=[um,cm],o=[];function l(c,u){return u&16&&(e=null),e==null&&(e=!!(c[4]&&Object.keys(c[4]).length>0)),e?0:1}return t=l(s,-1),n=o[t]=a[t](s),{c(){n.c(),i=it()},m(c,u){o[t].m(c,u),Y(c,i,u),r=!0},p(c,[u]){let f=t;t=l(c,u),t===f?o[t].p(c,u):(ze(),$(o[f],1,1,()=>{o[f]=null}),Ue(),n=o[t],n?n.p(c,u):(n=o[t]=a[t](c),n.c()),O(n,1),n.m(i.parentNode,i))},i(c){r||(O(n),r=!0)},o(c){$(n),r=!1},d(c){o[t].d(c),c&&X(i)}}}function hm(s,e,t){let n,i,r,a,o;ct(s,Ts,p=>t(4,r=p)),ct(s,Rr,p=>t(9,a=p)),ct(s,an,p=>t(10,o=p));let{location:l=""}=e;Dt(an,o=l.pathname,o);let c=l.hash;async function u(){if(c){let d=Object.values(r).flat().find(v=>hi(v.title)==="/glossary"+c);d&&(t(3,n=await a.getEntry(d.sys.id)),t(2,i=n&&Object.keys(n).length>0))}}let f={};wi(async()=>{for(const p of await a.getTitles()){const d=p.title[0].toUpperCase();r[d]?r[d].push(p):Dt(Ts,r[d]=[p],r)}u();for(const p of Object.values(r))for(const d of p)for(const v of d.metadata.tags)f[v.name]?t(0,f[v.name]+=1,f):t(0,f[v.name]=1,f);t(0,f=Object.entries(f).map(([p,d])=>({tag:p,count:d}))),t(0,f=f.sort((p,d)=>p.tag<d.tag?-1:p.tag>d.tag?1:0))}),Gh(async()=>{c!==l.hash&&(c=l.hash,await u())}),Cr(()=>{Dt(Ts,r={},r)});let h;function m(){t(3,n=null),t(2,i=!1)}function g(p){yt[p?"unshift":"push"](()=>{h=p,t(1,h)})}return s.$$set=p=>{"location"in p&&t(6,l=p.location)},t(3,n=null),t(2,i=!1),[f,h,i,n,r,m,l,g]}class dm extends We{constructor(e){super(),Ve(this,e,hm,fm,Ge,{location:6})}}var Of={exports:{}},xo={exports:{}},zf=function(e,t){return function(){for(var i=new Array(arguments.length),r=0;r<i.length;r++)i[r]=arguments[r];return e.apply(t,i)}};/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var pm=function(e){return e!=null&&e.constructor!=null&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)},mm=zf,gm=pm,is=Object.prototype.toString;function Uf(s){return is.call(s)==="[object Array]"}function _m(s){return is.call(s)==="[object ArrayBuffer]"}function vm(s){return typeof FormData<"u"&&s instanceof FormData}function xm(s){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(s):e=s&&s.buffer&&s.buffer instanceof ArrayBuffer,e}function ym(s){return typeof s=="string"}function bm(s){return typeof s=="number"}function Mm(s){return typeof s>"u"}function Bf(s){return s!==null&&typeof s=="object"}function wm(s){return is.call(s)==="[object Date]"}function Sm(s){return is.call(s)==="[object File]"}function Tm(s){return is.call(s)==="[object Blob]"}function Gf(s){return is.call(s)==="[object Function]"}function Em(s){return Bf(s)&&Gf(s.pipe)}function Am(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}function Lm(s){return s.replace(/^\s*/,"").replace(/\s*$/,"")}function Cm(){return typeof navigator<"u"&&navigator.product==="ReactNative"?!1:typeof window<"u"&&typeof document<"u"}function yo(s,e){if(!(s===null||typeof s>"u"))if(typeof s!="object"&&(s=[s]),Uf(s))for(var t=0,n=s.length;t<n;t++)e.call(null,s[t],t,s);else for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.call(null,s[i],i,s)}function Hf(){var s={};function e(i,r){typeof s[r]=="object"&&typeof i=="object"?s[r]=Hf(s[r],i):s[r]=i}for(var t=0,n=arguments.length;t<n;t++)yo(arguments[t],e);return s}function Rm(s,e,t){return yo(e,function(i,r){t&&typeof i=="function"?s[r]=mm(i,t):s[r]=i}),s}var on={isArray:Uf,isArrayBuffer:_m,isBuffer:gm,isFormData:vm,isArrayBufferView:xm,isString:ym,isNumber:bm,isObject:Bf,isUndefined:Mm,isDate:wm,isFile:Sm,isBlob:Tm,isFunction:Gf,isStream:Em,isURLSearchParams:Am,isStandardBrowserEnv:Cm,forEach:yo,merge:Hf,extend:Rm,trim:Lm},Pm=on,Dm=function(e,t){Pm.forEach(e,function(i,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=i,delete e[r])})},jr,oc;function Im(){return oc||(oc=1,jr=function(e,t,n,i,r){return e.config=t,n&&(e.code=n),e.request=i,e.response=r,e}),jr}var $r,lc;function Vf(){if(lc)return $r;lc=1;var s=Im();return $r=function(t,n,i,r,a){var o=new Error(t);return s(o,n,i,r,a)},$r}var qr,cc;function km(){if(cc)return qr;cc=1;var s=Vf();return qr=function(t,n,i){var r=i.config.validateStatus;!i.status||!r||r(i.status)?t(i):n(s("Request failed with status code "+i.status,i.config,null,i.request,i))},qr}var Xr,uc;function Fm(){if(uc)return Xr;uc=1;var s=on;function e(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}return Xr=function(n,i,r){if(!i)return n;var a;if(r)a=r(i);else if(s.isURLSearchParams(i))a=i.toString();else{var o=[];s.forEach(i,function(c,u){c===null||typeof c>"u"||(s.isArray(c)?u=u+"[]":c=[c],s.forEach(c,function(h){s.isDate(h)?h=h.toISOString():s.isObject(h)&&(h=JSON.stringify(h)),o.push(e(u)+"="+e(h))}))}),a=o.join("&")}return a&&(n+=(n.indexOf("?")===-1?"?":"&")+a),n},Xr}var Yr,fc;function Nm(){if(fc)return Yr;fc=1;var s=on,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Yr=function(n){var i={},r,a,o;return n&&s.forEach(n.split(`
`),function(c){if(o=c.indexOf(":"),r=s.trim(c.substr(0,o)).toLowerCase(),a=s.trim(c.substr(o+1)),r){if(i[r]&&e.indexOf(r)>=0)return;r==="set-cookie"?i[r]=(i[r]?i[r]:[]).concat([a]):i[r]=i[r]?i[r]+", "+a:a}}),i},Yr}var Kr,hc;function Om(){if(hc)return Kr;hc=1;var s=on;return Kr=s.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),i;function r(a){var o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){var l=s.isString(o)?r(o):o;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}(),Kr}var Zr,dc;function zm(){if(dc)return Zr;dc=1;var s=on;return Zr=s.isStandardBrowserEnv()?function(){return{write:function(n,i,r,a,o,l){var c=[];c.push(n+"="+encodeURIComponent(i)),s.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),s.isString(a)&&c.push("path="+a),s.isString(o)&&c.push("domain="+o),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Zr}var Jr,pc;function mc(){if(pc)return Jr;pc=1;var s=on,e=km(),t=Fm(),n=Nm(),i=Om(),r=Vf();return Jr=function(o){return new Promise(function(c,u){var f=o.data,h=o.headers;s.isFormData(f)&&delete h["Content-Type"];var m=new XMLHttpRequest;if(o.auth){var g=o.auth.username||"",p=o.auth.password||"";h.Authorization="Basic "+btoa(g+":"+p)}if(m.open(o.method.toUpperCase(),t(o.url,o.params,o.paramsSerializer),!0),m.timeout=o.timeout,m.onreadystatechange=function(){if(!(!m||m.readyState!==4)&&!(m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0))){var _="getAllResponseHeaders"in m?n(m.getAllResponseHeaders()):null,x=!o.responseType||o.responseType==="text"?m.responseText:m.response,b={data:x,status:m.status,statusText:m.statusText,headers:_,config:o,request:m};e(c,u,b),m=null}},m.onerror=function(){u(r("Network Error",o,null,m)),m=null},m.ontimeout=function(){u(r("timeout of "+o.timeout+"ms exceeded",o,"ECONNABORTED",m)),m=null},s.isStandardBrowserEnv()){var d=zm(),v=(o.withCredentials||i(o.url))&&o.xsrfCookieName?d.read(o.xsrfCookieName):void 0;v&&(h[o.xsrfHeaderName]=v)}if("setRequestHeader"in m&&s.forEach(h,function(_,x){typeof f>"u"&&x.toLowerCase()==="content-type"?delete h[x]:m.setRequestHeader(x,_)}),o.withCredentials&&(m.withCredentials=!0),o.responseType)try{m.responseType=o.responseType}catch(y){if(o.responseType!=="json")throw y}typeof o.onDownloadProgress=="function"&&m.addEventListener("progress",o.onDownloadProgress),typeof o.onUploadProgress=="function"&&m.upload&&m.upload.addEventListener("progress",o.onUploadProgress),o.cancelToken&&o.cancelToken.promise.then(function(_){!m||(m.abort(),u(_),m=null)}),f===void 0&&(f=null),m.send(f)})},Jr}var jt=on,Um=Dm,Bm={"Content-Type":"application/x-www-form-urlencoded"};function gc(s,e){!jt.isUndefined(s)&&jt.isUndefined(s["Content-Type"])&&(s["Content-Type"]=e)}function Gm(){var s;return(typeof XMLHttpRequest<"u"||typeof process<"u")&&(s=mc()),s}var Pr={adapter:Gm(),transformRequest:[function(e,t){return Um(t,"Content-Type"),jt.isFormData(e)||jt.isArrayBuffer(e)||jt.isBuffer(e)||jt.isStream(e)||jt.isFile(e)||jt.isBlob(e)?e:jt.isArrayBufferView(e)?e.buffer:jt.isURLSearchParams(e)?(gc(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):jt.isObject(e)?(gc(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if(typeof e=="string")try{e=JSON.parse(e)}catch{}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};Pr.headers={common:{Accept:"application/json, text/plain, */*"}};jt.forEach(["delete","get","head"],function(e){Pr.headers[e]={}});jt.forEach(["post","put","patch"],function(e){Pr.headers[e]=jt.merge(Bm)});var bo=Pr,Hm=on;function Dr(){this.handlers=[]}Dr.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1};Dr.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Dr.prototype.forEach=function(e){Hm.forEach(this.handlers,function(n){n!==null&&e(n)})};var Vm=Dr,Wm=on,jm=function(e,t,n){return Wm.forEach(n,function(r){e=r(e,t)}),e},Qr,_c;function Wf(){return _c||(_c=1,Qr=function(e){return!!(e&&e.__CANCEL__)}),Qr}var $m=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},qm=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},vc=on,ea=jm,Xm=Wf(),Ym=bo,Km=$m,Zm=qm;function ta(s){s.cancelToken&&s.cancelToken.throwIfRequested()}var Jm=function(e){ta(e),e.baseURL&&!Km(e.url)&&(e.url=Zm(e.baseURL,e.url)),e.headers=e.headers||{},e.data=ea(e.data,e.headers,e.transformRequest),e.headers=vc.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),vc.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var t=e.adapter||Ym.adapter;return t(e).then(function(i){return ta(e),i.data=ea(i.data,i.headers,e.transformResponse),i},function(i){return Xm(i)||(ta(e),i&&i.response&&(i.response.data=ea(i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},Qm=bo,Yi=on,xc=Vm,eg=Jm;function Ir(s){this.defaults=s,this.interceptors={request:new xc,response:new xc}}Ir.prototype.request=function(e){typeof e=="string"&&(e=Yi.merge({url:arguments[0]},arguments[1])),e=Yi.merge(Qm,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[eg,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(r){t.unshift(r.fulfilled,r.rejected)}),this.interceptors.response.forEach(function(r){t.push(r.fulfilled,r.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n};Yi.forEach(["delete","get","head","options"],function(e){Ir.prototype[e]=function(t,n){return this.request(Yi.merge(n||{},{method:e,url:t}))}});Yi.forEach(["post","put","patch"],function(e){Ir.prototype[e]=function(t,n,i){return this.request(Yi.merge(i||{},{method:e,url:t,data:n}))}});var tg=Ir,na,yc;function jf(){if(yc)return na;yc=1;function s(e){this.message=e}return s.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},s.prototype.__CANCEL__=!0,na=s,na}var ia,bc;function ng(){if(bc)return ia;bc=1;var s=jf();function e(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(a){n=a});var i=this;t(function(a){i.reason||(i.reason=new s(a),n(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var n,i=new e(function(a){n=a});return{token:i,cancel:n}},ia=e,ia}var sa,Mc;function ig(){return Mc||(Mc=1,sa=function(e){return function(n){return e.apply(null,n)}}),sa}var Za=on,sg=zf,yr=tg,$f=bo;function qf(s){var e=new yr(s),t=sg(yr.prototype.request,e);return Za.extend(t,yr.prototype,e),Za.extend(t,e),t}var zn=qf($f);zn.Axios=yr;zn.create=function(e){return qf(Za.merge($f,e))};zn.Cancel=jf();zn.CancelToken=ng();zn.isCancel=Wf();zn.all=function(e){return Promise.all(e)};zn.spread=ig();xo.exports=zn;xo.exports.default=zn;(function(s){s.exports=xo.exports})(Of);const rg=Of.exports,Wt=s=>e=>{let t=e[s];return delete e[s],Object.defineProperty(t,"attrs",{value:e}),t},wc=s=>typeof s[0]=="object"||typeof s[0]=="array"?s[0]:s;class ag{constructor(e){e=e||{};let t={"Content-Type":"application/json"};e.accessToken&&(t.Authorization=`Bearer ${e.accessToken}`),e.authToken&&(t["X-AUTH-TOKEN"]=`${e.authToken}`),this.axios=rg.create({baseURL:e.baseURL||"https://api.are.na/v2/",headers:t}),this.requestHandler=e.requestHandler||((n,i,r)=>n==="get"?this.axios.request({method:n,url:i,params:r}).then(({data:a})=>a):this.axios.request({method:n,url:i,data:r}).then(({data:a})=>a))}_req(e,t,...n){return this.requestHandler(e.toLowerCase(),t,Object.assign({},...n))}group(e){return e=e||"",{get:t=>this._req("GET","groups/"+e,t),channels:t=>this._req("GET","groups/"+e+"/channels",t).then(Wt("channels"))}}channel(e,t){return e=e||"",{get:n=>this._req("GET","channels/"+e,t,n),thumb:n=>this._req("GET","channels/"+e+"/thumb",t,n),connections:n=>this._req("GET","channels/"+e+"/connections",t,n).then(Wt("channels")),channels:n=>this._req("GET","channels/"+e+"/channels",t,n).then(Wt("channels")),contents:n=>this._req("GET","channels/"+e+"/contents",t,n).then(Wt("contents")),collaborators:n=>this._req("GET","channels/"+e+"/collaborators",t,n).then(Wt("users")),create:(n,i)=>this._req("POST","channels",{title:e||n,status:e?n:i}),delete:n=>this._req("DELETE","channels/"+(e||n)),update:n=>this._req("PUT","channels/"+e,n),addCollaborators:(...n)=>this._req("POST","channels/"+e+"/collaborators",{"ids[]":wc(n)}).then(Wt("users")),deleteCollaborators:(...n)=>this._req("DELETE","channels/"+e+"/collaborators",{"ids[]":wc(n)}).then(Wt("users")),createBlock:n=>(n.content.match(/^https?:\/\//)&&(n.source=n.content),this._req("POST","channels/"+e+"/blocks",n)),deleteBlock:n=>this._req("DELETE","channels/"+e+"/blocks/"+n)}}block(e,t){return{get:n=>this._req("GET","blocks/"+e,t,n),channels:n=>this._req("GET","blocks/"+e+"/channels",t,n).then(Wt("channels")),create:(n,i)=>this.channel(n).createBlock(i),update:n=>this._req("PUT","blocks/"+e,t,n)}}user(e,t){return{get:n=>this._req("GET","users/"+e,t,n),channels:n=>this._req("GET","users/"+e+"/channels",t,n).then(Wt("channels")),following:n=>this._req("GET","users/"+e+"/following",t,n).then(Wt("following")),followers:n=>this._req("GET","users/"+e+"/followers",t,n).then(Wt("users"))}}search(e,t){return{all:n=>this._req("GET","search",{q:e},t,n),users:n=>this._req("GET","search/users",{q:e},t,n).then(Wt("users")),channels:n=>this._req("GET","search/channels",{q:e},t,n).then(Wt("channels")),blocks:n=>this._req("GET","search/blocks",{q:e},t,n).then(Wt("blocks"))}}}var og=ag;function lg(s){let e;return{c(){e=W("i"),D(e,"class","loading-default svelte-10h86fq")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function cg(s){let e;return{c(){e=W("span"),e.innerHTML=`<span class="wave-item svelte-10h86fq"></span> 
		<span class="wave-item svelte-10h86fq"></span> 
		<span class="wave-item svelte-10h86fq"></span> 
		<span class="wave-item svelte-10h86fq"></span> 
		<span class="wave-item svelte-10h86fq"></span>`,D(e,"class","loading-wave-dots svelte-10h86fq")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function ug(s){let e;return{c(){e=W("i"),D(e,"class","loading-spiral svelte-10h86fq")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function fg(s){let e;return{c(){e=W("span"),e.innerHTML=`<span class="circle-item svelte-10h86fq"></span> 
		<span class="circle-item svelte-10h86fq"></span> 
		<span class="circle-item svelte-10h86fq"></span> 
		<span class="circle-item svelte-10h86fq"></span> 
		<span class="circle-item svelte-10h86fq"></span> 
		<span class="circle-item svelte-10h86fq"></span> 
		<span class="circle-item svelte-10h86fq"></span> 
		<span class="circle-item svelte-10h86fq"></span>`,D(e,"class","loading-circles svelte-10h86fq")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function hg(s){let e;return{c(){e=W("span"),e.innerHTML=`<span class="bubble-item svelte-10h86fq"></span> 
		<span class="bubble-item svelte-10h86fq"></span> 
		<span class="bubble-item svelte-10h86fq"></span> 
		<span class="bubble-item svelte-10h86fq"></span> 
		<span class="bubble-item svelte-10h86fq"></span> 
		<span class="bubble-item svelte-10h86fq"></span> 
		<span class="bubble-item svelte-10h86fq"></span> 
		<span class="bubble-item svelte-10h86fq"></span>`,D(e,"class","loading-bubbles svelte-10h86fq")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function dg(s){let e;function t(r,a){return r[0]==="bubbles"?hg:r[0]==="circles"?fg:r[0]==="spiral"?ug:r[0]==="wavedots"?cg:lg}let n=t(s),i=n(s);return{c(){i.c(),e=it()},m(r,a){i.m(r,a),Y(r,e,a)},p(r,[a]){n!==(n=t(r))&&(i.d(1),i=n(r),i&&(i.c(),i.m(e.parentNode,e)))},i:fe,o:fe,d(r){i.d(r),r&&X(e)}}}function pg(s,e,t){let{spinner:n=""}=e;return s.$$set=i=>{"spinner"in i&&t(0,n=i.spinner)},[n]}class mg extends We{constructor(e){super(),Ve(this,e,pg,dg,Ge,{spinner:0})}}const gg=s=>({}),Sc=s=>({attemptLoad:s[7]}),_g=s=>({}),Tc=s=>({}),vg=s=>({}),Ec=s=>({}),xg=s=>({isFirstLoad:s&2}),Ac=s=>({isFirstLoad:s[1]});function Lc(s){let e,t;const n=s[15].spinner,i=xi(n,s,s[14],Ac),r=i||yg(s);return{c(){e=W("div"),r&&r.c(),D(e,"class","infinite-status-prompt")},m(a,o){Y(a,e,o),r&&r.m(e,null),t=!0},p(a,o){i?i.p&&(!t||o&16386)&&bi(i,n,a,a[14],t?yi(n,a[14],o,xg):Mi(a[14]),Ac):r&&r.p&&(!t||o&1)&&r.p(a,t?o:-1)},i(a){t||(O(r,a),t=!0)},o(a){$(r,a),t=!1},d(a){a&&X(e),r&&r.d(a)}}}function yg(s){let e,t;return e=new mg({props:{spinner:s[0]}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.spinner=n[0]),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function Cc(s){let e,t;const n=s[15].noResults,i=xi(n,s,s[14],Ec),r=i||bg();return{c(){e=W("div"),r&&r.c(),D(e,"class","infinite-status-prompt")},m(a,o){Y(a,e,o),r&&r.m(e,null),t=!0},p(a,o){i&&i.p&&(!t||o&16384)&&bi(i,n,a,a[14],t?yi(n,a[14],o,vg):Mi(a[14]),Ec)},i(a){t||(O(r,a),t=!0)},o(a){$(r,a),t=!1},d(a){a&&X(e),r&&r.d(a)}}}function bg(s){let e;return{c(){e=ke("No results :(")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function Rc(s){let e,t;const n=s[15].noMore,i=xi(n,s,s[14],Tc),r=i||Mg();return{c(){e=W("div"),r&&r.c(),D(e,"class","infinite-status-prompt")},m(a,o){Y(a,e,o),r&&r.m(e,null),t=!0},p(a,o){i&&i.p&&(!t||o&16384)&&bi(i,n,a,a[14],t?yi(n,a[14],o,_g):Mi(a[14]),Tc)},i(a){t||(O(r,a),t=!0)},o(a){$(r,a),t=!1},d(a){a&&X(e),r&&r.d(a)}}}function Mg(s){let e;return{c(){e=ke("No more data :)")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function Pc(s){let e,t;const n=s[15].error,i=xi(n,s,s[14],Sc),r=i||wg(s);return{c(){e=W("div"),r&&r.c(),D(e,"class","infinite-status-prompt")},m(a,o){Y(a,e,o),r&&r.m(e,null),t=!0},p(a,o){i&&i.p&&(!t||o&16384)&&bi(i,n,a,a[14],t?yi(n,a[14],o,gg):Mi(a[14]),Sc)},i(a){t||(O(r,a),t=!0)},o(a){$(r,a),t=!1},d(a){a&&X(e),r&&r.d(a)}}}function wg(s){let e,t,n,i,r,a;return{c(){e=ke(`Oops, something went wrong :(
				`),t=W("br"),n=ce(),i=W("button"),i.textContent="Retry",D(i,"class","btn-try-infinite svelte-o3w4bf")},m(o,l){Y(o,e,l),Y(o,t,l),Y(o,n,l),Y(o,i,l),r||(a=Je(i,"click",s[7]),r=!0)},p:fe,d(o){o&&X(e),o&&X(t),o&&X(n),o&&X(i),r=!1,a()}}}function Sg(s){let e,t,n,i,r,a=s[6]&&Lc(s),o=s[4]&&Cc(s),l=s[3]&&Rc(s),c=s[5]&&Pc(s);return{c(){e=W("div"),a&&a.c(),t=ce(),o&&o.c(),n=ce(),l&&l.c(),i=ce(),c&&c.c(),D(e,"class","infinite-loading-container svelte-o3w4bf")},m(u,f){Y(u,e,f),a&&a.m(e,null),F(e,t),o&&o.m(e,null),F(e,n),l&&l.m(e,null),F(e,i),c&&c.m(e,null),s[16](e),r=!0},p(u,[f]){u[6]?a?(a.p(u,f),f&64&&O(a,1)):(a=Lc(u),a.c(),O(a,1),a.m(e,t)):a&&(ze(),$(a,1,1,()=>{a=null}),Ue()),u[4]?o?(o.p(u,f),f&16&&O(o,1)):(o=Cc(u),o.c(),O(o,1),o.m(e,n)):o&&(ze(),$(o,1,1,()=>{o=null}),Ue()),u[3]?l?(l.p(u,f),f&8&&O(l,1)):(l=Rc(u),l.c(),O(l,1),l.m(e,i)):l&&(ze(),$(l,1,1,()=>{l=null}),Ue()),u[5]?c?(c.p(u,f),f&32&&O(c,1)):(c=Pc(u),c.c(),O(c,1),c.m(e,null)):c&&(ze(),$(c,1,1,()=>{c=null}),Ue())},i(u){r||(O(a),O(o),O(l),O(c),r=!0)},o(u){$(a),$(o),$(l),$(c),r=!1},d(u){u&&X(e),a&&a.d(),o&&o.d(),l&&l.d(),c&&c.d(),s[16](null)}}}const Tg=50,Eg=1e3,Xf=10,Ag=[`executed the callback function more than ${Xf} times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper rather than automatic searching, you can do this:`,"<!-- add a special attribute for the real scroll wrapper (can also be data-infinite-wrapper) -->","<div infinite-wrapper>","  ...","  <!-- set forceUseInfiniteWrapper -->","  <InfiniteLoading forceUseInfiniteWrapper>","</div>","or",'<div class="infinite-wrapper">',"  ...","  <!-- set forceUseInfiniteWrapper as css selector of the real scroll wrapper -->",'  <InfiniteLoading forceUseInfiniteWrapper=".infinite-wrapper" />',"</div>"].join(`
`),js=(()=>{let s=!1;try{const e=Object.defineProperty({},"passive",{get(){return s={passive:!0},!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch{}return s})(),$s={timers:[],caches:[],throttle(s){this.caches.indexOf(s)===-1&&(this.caches.push(s),this.timers.push(setTimeout(()=>{s(),this.caches.splice(this.caches.indexOf(s),1),this.timers.shift()},Tg)))},reset(){this.timers.forEach(s=>{clearTimeout(s)}),this.timers.length=0,this.caches=[]}},Dc={isChecked:!1,timer:null,times:0,track(){this.times+=1,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.isChecked=!0},Eg),this.times>Xf&&(console.error(Ag),this.isChecked=!0)}},qs={key:"_infiniteScrollHeight",getScrollElement(s){return s===window?document.documentElement:s},save(s){const e=this.getScrollElement(s);e[this.key]=e.scrollHeight},restore(s){const e=this.getScrollElement(s);typeof e[this.key]=="number"&&(e.scrollTop=e.scrollHeight-e[this.key]+e.scrollTop),this.remove(e)},remove(s){s[this.key]!==void 0&&delete s[this.key]}};function Ic(s){return s&&s.offsetWidth+s.offsetHeight>0}function Lg(s,e,t){let n,i,r,a,{$$slots:o={},$$scope:l}=e;const c=Tf(),u={READY:0,LOADING:1,COMPLETE:2,ERROR:3};let{distance:f=100}=e,{spinner:h="default"}=e,{direction:m="bottom"}=e,{forceUseInfiniteWrapper:g=!1}=e,{identifier:p=+new Date}=e,d=!0,v=u.READY,y=!1,_,x;const b={loaded:async()=>{t(1,d=!1),m==="top"&&(await Gs(),qs.restore(x)),v===u.LOADING&&(await Gs(),await E(!0))},complete:async()=>{t(12,v=u.COMPLETE),await Gs(),x.removeEventListener("scroll",w,js)},reset:async()=>{t(12,v=u.READY),t(1,d=!0),qs.remove(x),x.addEventListener("scroll",w,js),setTimeout(()=>{$s.reset(),w()},1)},error:()=>{t(12,v=u.ERROR),$s.reset()}};function w(P){v===u.READY&&(P&&P.constructor===Event&&Ic(_)?$s.throttle(E):E())}async function E(P){v!==u.COMPLETE&&Ic(_)&&M()<=f?(t(12,v=u.LOADING),m==="top"&&(await Gs(),qs.save(x)),c("infinite",b),P&&!g&&!Dc.isChecked&&Dc.track()):v===u.LOADING&&t(12,v=u.READY)}function M(){let P;if(m==="top")P=typeof x.scrollTop=="number"?x.scrollTop:x.pageYOffset;else{const R=_.getBoundingClientRect().top,G=x===window?window.innerHeight:x.getBoundingClientRect().bottom;P=R-G}return P}function S(P=_){let R;return typeof g=="string"&&(R=document.querySelector(g)),R||(P.tagName==="BODY"?R=window:(!g&&["scroll","auto"].indexOf(getComputedStyle(P).overflowY)>-1||P.hasAttribute("infinite-wrapper")||P.hasAttribute("data-infinite-wrapper"))&&(R=P)),R||S(P.parentNode)}function C(){y&&(x=S())}function j(){y&&b.reset()}wi(async()=>{t(13,y=!0),setTimeout(()=>{w(),x.addEventListener("scroll",w,js)},1)}),Cr(()=>{y&&v!==u.COMPLETE&&($s.reset(),qs.remove(x),x.removeEventListener("scroll",w,js))});function q(P){yt[P?"unshift":"push"](()=>{_=P,t(2,_)})}return s.$$set=P=>{"distance"in P&&t(8,f=P.distance),"spinner"in P&&t(0,h=P.spinner),"direction"in P&&t(9,m=P.direction),"forceUseInfiniteWrapper"in P&&t(10,g=P.forceUseInfiniteWrapper),"identifier"in P&&t(11,p=P.identifier),"$$scope"in P&&t(14,l=P.$$scope)},s.$$.update=()=>{s.$$.dirty&4096&&t(6,n=v===u.LOADING),s.$$.dirty&4096&&t(5,i=v===u.ERROR),s.$$.dirty&4098&&t(4,r=v===u.COMPLETE&&d),s.$$.dirty&4098&&t(3,a=v===u.COMPLETE&&!d),s.$$.dirty&9216&&C(),s.$$.dirty&10240&&j()},[h,d,_,a,r,i,n,E,f,m,g,p,v,y,l,o,q]}class Cg extends We{constructor(e){super(),Ve(this,e,Lg,Sg,Ge,{distance:8,spinner:0,direction:9,forceUseInfiniteWrapper:10,identifier:11})}}function kc(s,e,t){const n=s.slice();return n[6]=e[t],n}function Fc(s){let e,t,n,i,r=s[6].position+"",a,o,l,c,u=s[6].source.title+"",f,h,m,g,p,d,v,y,_,x,b=s[6].source.url+"",w,E,M,S;return{c(){e=W("div"),t=W("div"),n=W("span"),i=ke("("),a=ke(r),o=ke(")"),l=ce(),c=W("a"),f=ke(u),m=ce(),g=W("a"),p=W("img"),y=ce(),_=W("div"),x=W("a"),w=ke(b),M=ce(),S=W("span"),S.textContent="\u2197",D(n,"class","serif svelte-87yzwv"),D(c,"href",h=s[6].source.url),D(c,"target","_blank"),D(c,"rel","noreferrer"),D(c,"class","right_align svelte-87yzwv"),D(t,"class","meta-info svelte-87yzwv"),wr(p.src,d=s[6].image.display.url)||D(p,"src",d),D(p,"class","svelte-87yzwv"),D(g,"href",v=s[6].source.url),D(g,"target","_blank"),D(g,"rel","noreferrer"),D(g,"class","svelte-87yzwv"),D(x,"href",E=s[6].source.url),D(x,"target","_blank"),D(x,"rel","noreferrer"),D(x,"class","svelte-87yzwv"),D(_,"class","meta-info svelte-87yzwv"),D(e,"class","block svelte-87yzwv")},m(C,j){Y(C,e,j),F(e,t),F(t,n),F(n,i),F(n,a),F(n,o),F(t,l),F(t,c),F(c,f),F(e,m),F(e,g),F(g,p),F(e,y),F(e,_),F(_,x),F(x,w),F(_,M),F(_,S)},p(C,j){j&1&&r!==(r=C[6].position+"")&&lt(a,r),j&1&&u!==(u=C[6].source.title+"")&&lt(f,u),j&1&&h!==(h=C[6].source.url)&&D(c,"href",h),j&1&&!wr(p.src,d=C[6].image.display.url)&&D(p,"src",d),j&1&&v!==(v=C[6].source.url)&&D(g,"href",v),j&1&&b!==(b=C[6].source.url+"")&&lt(w,b),j&1&&E!==(E=C[6].source.url)&&D(x,"href",E)},d(C){C&&X(e)}}}function Rg(s){let e,t,n,i,r,a,o,l=s[0],c=[];for(let u=0;u<l.length;u+=1)c[u]=Fc(kc(s,l,u));return a=new Cg({}),a.$on("infinite",s[1]),{c(){e=W("div"),t=W("div");for(let u=0;u<c.length;u+=1)c[u].c();n=ce(),i=W("div"),i.innerHTML=`<div class="meta-info svelte-87yzwv"><span class="serif svelte-87yzwv">(new)</span> 

                <a href="https://www.are.na/channels/2063847" target="_blank" rel="noreferrer" class="right_align svelte-87yzwv">Are.na</a></div> 
            <a href="https://www.are.na/channels/2063847" target="_blank" rel="noreferrer" class="svelte-87yzwv"><div class="arena-info svelte-87yzwv">Wanna <span class="serif svelte-87yzwv">(add)</span> something to this collection?</div></a> 

            <div class="meta-info svelte-87yzwv"><a href="https://www.are.na/channels/2063847" target="_blank" rel="noreferrer" class="svelte-87yzwv">Add something</a> 
                <span>\u2197</span></div>`,r=ce(),Re(a.$$.fragment),D(i,"class","block svelte-87yzwv"),D(t,"class","block-container svelte-87yzwv"),D(e,"class","content svelte-87yzwv")},m(u,f){Y(u,e,f),F(e,t);for(let h=0;h<c.length;h+=1)c[h].m(t,null);F(t,n),F(t,i),F(t,r),Le(a,t,null),o=!0},p(u,[f]){if(f&1){l=u[0];let h;for(h=0;h<l.length;h+=1){const m=kc(u,l,h);c[h]?c[h].p(m,f):(c[h]=Fc(m),c[h].c(),c[h].m(t,n))}for(;h<c.length;h+=1)c[h].d(1);c.length=l.length}},i(u){o||(O(a.$$.fragment,u),o=!0)},o(u){$(a.$$.fragment,u),o=!1},d(u){u&&X(e),wt(c,u),Ce(a)}}}const ra=15;function Pg(s,e,t){let n;ct(s,an,c=>t(4,n=c));const i=new og;let r=[],a=1;wi(async()=>{try{const c=await i.channel("webloom-inspiration").thumb();a=Math.ceil(c.length/ra),t(0,r=await i.channel("webloom-inspiration").contents({page:a,per:ra})),r.reverse()}catch(c){console.log(c)}});async function o({detail:{loaded:c,complete:u}}){try{a-=1;const h=(await i.channel("webloom-inspiration").contents({page:a,per:ra})).reverse();t(0,r=[...r,...h])}catch(f){console.log(f)}console.log(a),a===1?u():c()}let{location:l}=e;return Dt(an,n=l.pathname,n),s.$$set=c=>{"location"in c&&t(2,l=c.location)},[r,o,l]}class Dg extends We{constructor(e){super(),Ve(this,e,Pg,Rg,Ge,{location:2})}}function Ig(s){let e;return{c(){e=W("div"),e.innerHTML=`<div class="text svelte-1j3pa1p"><div class="headline svelte-1j3pa1p"><div>let&#39;s <span class="serif svelte-1j3pa1p">weave</span> the web.</div> 
            <div class="contact svelte-1j3pa1p"><div class="superscript svelte-1j3pa1p"><span class="svelte-1j3pa1p">Have a useful reference?</span> 
                    <span class="svelte-1j3pa1p">Found a loose thread?</span> 
                    <span class="svelte-1j3pa1p">Contact details will be added before launch.</span></div> 
                <a href="/imprint" class="svelte-1j3pa1p"><span class="svelte-1j3pa1p">view preview status</span></a></div></div> 
        <div class="description svelte-1j3pa1p"><span class="serif svelte-1j3pa1p">Webloom</span> is an independent educational concept for designers
            learning to work with the web as an authored material. It gathers
            vocabulary, practical examples, and attributed references into a
            field guide that can be explored in any order.</div> 
        <div class="description svelte-1j3pa1p">The project treats structure, style, and interaction as connected
            threads. HTML frames the content, CSS establishes rhythm and texture,
            and JavaScript introduces behavior. The goal is not to hide the
            technical material, but to make it readable enough to shape with care.</div> 
        <div class="description svelte-1j3pa1p">This preview preserves the original publication&#39;s route structure,
            educational depth, and clearly attributed external references while
            testing a new identity and editorial point of view. The rotating
            book makes the field guide tangible: something to handle, revisit,
            and continue weaving.</div></div> 
    <div class="container svelte-1j3pa1p"><div class="boockup svelte-1j3pa1p"><div class="book-container svelte-1j3pa1p"><div class="book-front svelte-1j3pa1p"></div> 
                <div class="book-side-left svelte-1j3pa1p"></div> 
                <div class="book-side-right svelte-1j3pa1p"></div> 
                <div class="book-top svelte-1j3pa1p"></div> 
                <div class="book-bottom svelte-1j3pa1p"></div> 
                <div class="book-back svelte-1j3pa1p"></div></div></div> 
        <a href="http://boockup.marco.land" target="_blank" rel="noreferrer"><div id="credit" class="svelte-1j3pa1p">Created with Boockup</div></a></div>`,D(e,"class","content svelte-1j3pa1p")},m(t,n){Y(t,e,n)},p:fe,i:fe,o:fe,d(t){t&&X(e)}}}function kg(s,e,t){let n;ct(s,an,r=>t(1,n=r));let{location:i}=e;return Dt(an,n=i.pathname,n),s.$$set=r=>{"location"in r&&t(0,i=r.location)},[i]}class Fg extends We{constructor(e){super(),Ve(this,e,kg,Ig,Ge,{location:0})}}function Ng(s){let e;return{c(){e=W("div"),e.innerHTML=`<span class="big svelte-r4zdmx">Webloom is an independent educational concept preview exploring web craft for designers.</span> 
    <br/>
    Publication status: preview build
    <br/>
    Verified legal owner, postal address, public contact address, and production domain are not yet published.
    <br/> 
    <br/> 
    <span class="serif svelte-r4zdmx">Provenance</span> 
    <br/> 
    This identity study is adapted from a frozen offline replica of an educational web-design publication. Full source-project and collection attribution is preserved in /CREDITS.txt. This credit records provenance and does not imply affiliation, endorsement, or transfer of ownership.
    <br/> 
    <br/> 
    <span class="big svelte-r4zdmx">External references</span>
    The Inspiration collection links to independently operated websites. Screenshots remain paired with their original destinations so the references are not misrepresented. Each external operator is responsible for its own content and policies.
    <br/> 
    <br/> 
    <span class="big svelte-r4zdmx">Privacy</span>
    This preview has no account system, form submission, advertising, or analytics code. Hosting providers and linked third-party sites may process technical request data under their own policies.
    <br/> 
    <br/> 
    <span class="big svelte-r4zdmx">Before production launch</span>
    A verified legal notice, rights review, contact channel, privacy disclosure, and production URL must replace this preview notice before the project is treated as a finished public publication.`,D(e,"class","container svelte-r4zdmx")},m(t,n){Y(t,e,n)},p:fe,i:fe,o:fe,d(t){t&&X(e)}}}function Og(s,e,t){let n;ct(s,an,r=>t(1,n=r));let{location:i}=e;return Dt(an,n=i.pathname,n),s.$$set=r=>{"location"in r&&t(0,i=r.location)},[i]}class zg extends We{constructor(e){super(),Ve(this,e,Og,Ng,Ge,{location:0})}}function Ug(s){let e;return{c(){e=ke("Info")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function Bg(s){let e;return{c(){e=ke("Imprint")},m(t,n){Y(t,e,n)},d(t){t&&X(e)}}}function Gg(s){let e,t,n,i,r;return t=new Ar({props:{to:"/info",class:"nav-link",$$slots:{default:[Ug]},$$scope:{ctx:s}}}),i=new Ar({props:{to:"/imprint",class:"nav-link",$$slots:{default:[Bg]},$$scope:{ctx:s}}}),{c(){e=W("div"),Re(t.$$.fragment),n=ce(),Re(i.$$.fragment),D(e,"class","nav svelte-1k0z19u")},m(a,o){Y(a,e,o),Le(t,e,null),F(e,n),Le(i,e,null),r=!0},p(a,[o]){const l={};o&1&&(l.$$scope={dirty:o,ctx:a}),t.$set(l);const c={};o&1&&(c.$$scope={dirty:o,ctx:a}),i.$set(c)},i(a){r||(O(t.$$.fragment,a),O(i.$$.fragment,a),r=!0)},o(a){$(t.$$.fragment,a),$(i.$$.fragment,a),r=!1},d(a){a&&X(e),Ce(t),Ce(i)}}}class Hg extends We{constructor(e){super(),Ve(this,e,null,Gg,Ge,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="150",aa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vg=0,Nc=1,Wg=2,Yf=1,jg=2,ws=3,On=0,Zt=1,In=2,Yn=0,Wi=1,Oc=2,zc=3,Uc=4,$g=5,Bi=100,qg=101,Xg=102,Bc=103,Gc=104,Yg=200,Kg=201,Zg=202,Jg=203,Kf=204,Zf=205,Qg=206,e_=207,t_=208,n_=209,i_=210,s_=0,r_=1,a_=2,Ja=3,o_=4,l_=5,c_=6,u_=7,wo=0,f_=1,h_=2,Fn=0,d_=1,p_=2,m_=3,g_=4,__=5,Jf=300,Ki=301,Zi=302,Qa=303,eo=304,kr=306,Ji=1e3,nn=1001,Lr=1002,Lt=1003,to=1004,br=1005,$t=1006,Qf=1007,di=1008,pi=1009,v_=1010,x_=1011,eh=1012,y_=1013,oi=1014,qn=1015,Rs=1016,b_=1017,M_=1018,ji=1020,w_=1021,sn=1023,S_=1024,T_=1025,ui=1026,Qi=1027,E_=1028,A_=1029,L_=1030,C_=1031,R_=1033,oa=33776,la=33777,ca=33778,ua=33779,Hc=35840,Vc=35841,Wc=35842,jc=35843,P_=36196,$c=37492,qc=37496,Xc=37808,Yc=37809,Kc=37810,Zc=37811,Jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,au=37820,ou=37821,fa=36492,D_=36283,lu=36284,cu=36285,uu=36286,Ps=2300,es=2301,ha=2302,fu=2400,hu=2401,du=2402,I_=2500,k_=0,th=1,no=2,mi=3e3,tt=3001,F_=3200,N_=3201,So=0,O_=1,xn="srgb",Ds="srgb-linear",nh="display-p3",da=7680,z_=519,io=35044,pu="300 es",so=1035;class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const Es=Math.PI/180,Is=180/Math.PI;function dn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function To(s,e){return(s%e+e)%e}function U_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function B_(s,e,t){return s!==e?(t-s)/(e-s):0}function As(s,e,t){return(1-t)*s+t*e}function G_(s,e,t,n){return As(s,e,1-Math.exp(-t*n))}function H_(s,e=1){return e-Math.abs(To(s,e*2)-e)}function V_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function W_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function j_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $_(s,e){return s+Math.random()*(e-s)}function q_(s){return s*(.5-Math.random())}function X_(s){s!==void 0&&(mu=s);let e=mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(s){return s*Es}function K_(s){return s*Is}function ro(s){return(s&s-1)===0&&s!==0}function ih(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function sh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Z_(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*f,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*f,o*c);break;case"ZXZ":s.set(l*f,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const J_={DEG2RAD:Es,RAD2DEG:Is,generateUUID:dn,clamp:Ut,euclideanModulo:To,mapLinear:U_,inverseLerp:B_,lerp:As,damp:G_,pingpong:H_,smoothstep:V_,smootherstep:W_,randInt:j_,randFloat:$_,randFloatSpread:q_,seededRandom:X_,degToRad:Y_,radToDeg:K_,isPowerOfTwo:ro,ceilPowerOfTwo:ih,floorPowerOfTwo:sh,setQuaternionFromProperEuler:Z_,normalize:st,denormalize:kn};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],p=i[0],d=i[3],v=i[6],y=i[1],_=i[4],x=i[7],b=i[2],w=i[5],E=i[8];return r[0]=a*p+o*y+l*b,r[3]=a*d+o*_+l*w,r[6]=a*v+o*x+l*E,r[1]=c*p+u*y+f*b,r[4]=c*d+u*_+f*w,r[7]=c*v+u*x+f*E,r[2]=h*p+m*y+g*b,r[5]=h*d+m*_+g*w,r[8]=h*v+m*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,m=c*r-a*l,g=t*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Gt;function rh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[a+0],m=r[a+1],g=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-o;const v=l*h+c*m+u*g+f*p,y=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const b=Math.sqrt(_),w=Math.atan2(b,v*y);d=Math.sin(d*w)/b,o=Math.sin(o*w)/b}const x=o*y;if(l=l*d+h*x,c=c*d+m*x,u=u*d+g*x,f=f*d+p*x,d===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-o*m,e[t+2]=c*g+u*m+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,f=l*i+r*n-a*t,h=-r*t-a*n-o*i;return this.x=c*l+h*-r+u*-o-f*-a,this.y=u*l+h*-a+f*-r-c*-o,this.z=f*l+h*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new k,gu=new Un;function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Q_=new Gt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ev=new Gt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Xn=new k;function tv(s){return s.convertSRGBToLinear(),Xn.set(s.r,s.g,s.b).applyMatrix3(ev),s.setRGB(Xn.x,Xn.y,Xn.z)}function nv(s){return Xn.set(s.r,s.g,s.b).applyMatrix3(Q_),s.setRGB(Xn.x,Xn.y,Xn.z).convertLinearToSRGB()}const iv={[Ds]:s=>s,[xn]:s=>s.convertSRGBToLinear(),[nh]:tv},sv={[Ds]:s=>s,[xn]:s=>s.convertLinearToSRGB(),[nh]:nv},Nt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Ds},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=iv[e],i=sv[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Ai;class ah{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=ks("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class oh{constructor(e=null){this.isSource=!0,this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_a(i[a].image)):r.push(_a(i[a]))}else r=_a(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ah.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rv=0;class Ct extends Si{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=nn,i=nn,r=$t,a=di,o=sn,l=pi,c=Ct.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=dn(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Jf;Ct.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(m+1)/2,b=(v+1)/2,w=(u+h)/4,E=(f+p)/4,M=(g+d)/4;return _>x&&_>b?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=E/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=M/r),this.set(n,i,r,t),this}let y=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(f-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends Si{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$t,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lh extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class av extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)ei.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ei)}else n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox),va.applyMatrix4(e.matrixWorld),this.union(va);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Xs.subVectors(this.max,fs),Li.subVectors(e.a,fs),Ci.subVectors(e.b,fs),Ri.subVectors(e.c,fs),Bn.subVectors(Ci,Li),Gn.subVectors(Ri,Ci),ti.subVectors(Li,Ri);let t=[0,-Bn.z,Bn.y,0,-Gn.z,Gn.y,0,-ti.z,ti.y,Bn.z,0,-Bn.x,Gn.z,0,-Gn.x,ti.z,0,-ti.x,-Bn.y,Bn.x,0,-Gn.y,Gn.x,0,-ti.y,ti.x,0];return!xa(t,Li,Ci,Ri,Xs)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Li,Ci,Ri,Xs))?!1:(Ys.crossVectors(Bn,Gn),t=[Ys.x,Ys.y,Ys.z],xa(t,Li,Ci,Ri,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new k,new k,new k,new k,new k,new k,new k,new k],ei=new k,va=new ss,Li=new k,Ci=new k,Ri=new k,Bn=new k,Gn=new k,ti=new k,fs=new k,Xs=new k,Ys=new k,ni=new k;function xa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ni.fromArray(s,r);const o=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ov=new ss,hs=new k,ya=new k;class rs{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ov.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(ya)),this.expandByPoint(hs.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new k,ba=new k,Ks=new k,Hn=new k,Ma=new k,Zs=new k,wa=new k;class Eo{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ba.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(ba);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ks),o=Hn.dot(this.direction),l=-Hn.dot(Ks),c=Hn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ba).addScaledVector(Ks,h),m}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,r){Ma.subVectors(t,e),Zs.subVectors(n,e),wa.crossVectors(Ma,Zs);let a=this.direction.dot(wa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const l=o*this.direction.dot(Zs.crossVectors(Hn,Zs));if(l<0)return null;const c=o*this.direction.dot(Ma.cross(Hn));if(c<0||l+c>a)return null;const u=-o*Hn.dot(wa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,u,f,h,m,g,p,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=m,v[7]=g,v[11]=p,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lv,e,cv)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Vn.crossVectors(n,Yt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Vn.crossVectors(n,Yt)),Vn.normalize(),Js.crossVectors(Yt,Vn),i[0]=Vn.x,i[4]=Js.x,i[8]=Yt.x,i[1]=Vn.y,i[5]=Js.y,i[9]=Yt.y,i[2]=Vn.z,i[6]=Js.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],p=n[6],d=n[10],v=n[14],y=n[3],_=n[7],x=n[11],b=n[15],w=i[0],E=i[4],M=i[8],S=i[12],C=i[1],j=i[5],q=i[9],P=i[13],R=i[2],G=i[6],Z=i[10],K=i[14],H=i[3],re=i[7],ie=i[11],ye=i[15];return r[0]=a*w+o*C+l*R+c*H,r[4]=a*E+o*j+l*G+c*re,r[8]=a*M+o*q+l*Z+c*ie,r[12]=a*S+o*P+l*K+c*ye,r[1]=u*w+f*C+h*R+m*H,r[5]=u*E+f*j+h*G+m*re,r[9]=u*M+f*q+h*Z+m*ie,r[13]=u*S+f*P+h*K+m*ye,r[2]=g*w+p*C+d*R+v*H,r[6]=g*E+p*j+d*G+v*re,r[10]=g*M+p*q+d*Z+v*ie,r[14]=g*S+p*P+d*K+v*ye,r[3]=y*w+_*C+x*R+b*H,r[7]=y*E+_*j+x*G+b*re,r[11]=y*M+_*q+x*Z+b*ie,r[15]=y*S+_*P+x*K+b*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],v=e[15];return g*(+r*l*f-i*c*f-r*o*h+n*c*h+i*o*m-n*l*m)+p*(+t*l*m-t*c*h+r*a*h-i*a*m+i*c*u-r*l*u)+d*(+t*c*f-t*o*m-r*a*f+n*a*m+r*o*u-n*c*u)+v*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],v=e[15],y=f*d*c-p*h*c+p*l*m-o*d*m-f*l*v+o*h*v,_=g*h*c-u*d*c-g*l*m+a*d*m+u*l*v-a*h*v,x=u*p*c-g*f*c+g*o*m-a*p*m-u*o*v+a*f*v,b=g*f*l-u*p*l-g*o*h+a*p*h+u*o*d-a*f*d,w=t*y+n*_+i*x+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(p*h*r-f*d*r-p*i*m+n*d*m+f*i*v-n*h*v)*E,e[2]=(o*d*r-p*l*r+p*i*c-n*d*c-o*i*v+n*l*v)*E,e[3]=(f*l*r-o*h*r-f*i*c+n*h*c+o*i*m-n*l*m)*E,e[4]=_*E,e[5]=(u*d*r-g*h*r+g*i*m-t*d*m-u*i*v+t*h*v)*E,e[6]=(g*l*r-a*d*r-g*i*c+t*d*c+a*i*v-t*l*v)*E,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*m+t*l*m)*E,e[8]=x*E,e[9]=(g*f*r-u*p*r-g*n*m+t*p*m+u*n*v-t*f*v)*E,e[10]=(a*p*r-g*o*r+g*n*c-t*p*c-a*n*v+t*o*v)*E,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*m-t*o*m)*E,e[12]=b*E,e[13]=(u*p*i-g*f*i+g*n*h-t*p*h-u*n*d+t*f*d)*E,e[14]=(g*o*i-a*p*i-g*n*l+t*p*l+a*n*d-t*o*d)*E,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,m=r*u,g=r*f,p=a*u,d=a*f,v=o*f,y=l*c,_=l*u,x=l*f,b=n.x,w=n.y,E=n.z;return i[0]=(1-(p+v))*b,i[1]=(m+x)*b,i[2]=(g-_)*b,i[3]=0,i[4]=(m-x)*w,i[5]=(1-(h+v))*w,i[6]=(d+y)*w,i[7]=0,i[8]=(g+_)*E,i[9]=(d-y)*E,i[10]=(1-(h+p))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),o=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const c=1/r,u=1/a,f=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),f=(t+e)*l,h=(n+i)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new k,un=new $e,lv=new k(0,0,0),cv=new k(1,1,1),Vn=new k,Js=new k,Yt=new k,_u=new $e,vu=new Un;class Fr{constructor(e=0,t=0,n=0,i=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uv=0;const xu=new k,Di=new Un,An=new $e,Qs=new k,ds=new k,fv=new k,hv=new Un,yu=new k(1,0,0),bu=new k(0,1,0),Mu=new k(0,0,1),dv={type:"added"},wu={type:"removed"};class ht extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new k,t=new Fr,n=new Un,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Gt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return xu.copy(e).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ds,Qs,this.up):An.lookAt(Qs,ds,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(An),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(wu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new k(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new k,Ln=new k,Sa=new k,Cn=new k,Ii=new k,ki=new k,Su=new k,Ta=new k,Ea=new k,Aa=new k;class Pn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fn.subVectors(i,t),Ln.subVectors(n,t),Sa.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Ln),l=fn.dot(Sa),c=Ln.dot(Ln),u=Ln.dot(Sa),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Cn),l.set(0,0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Ln.subVectors(e,t),fn.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),fn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Pn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ii.subVectors(i,n),ki.subVectors(r,n),Ta.subVectors(e,n);const l=Ii.dot(Ta),c=ki.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Ea.subVectors(e,i);const u=Ii.dot(Ea),f=ki.dot(Ea);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ii,a);Aa.subVectors(e,r);const m=Ii.dot(Aa),g=ki.dot(Aa);if(g>=0&&m<=g)return t.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ki,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Su.subVectors(r,i),o=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(Su,o);const v=1/(d+p+h);return a=p*v,o=h*v,t.copy(n).addScaledVector(Ii,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pv=0;class pn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Wi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Kf,this.blendDst=Zf,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},er={h:0,s:0,l:0};function La(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nt.workingColorSpace){if(e=To(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=La(a,r,e+1/3),this.g=La(a,r,e),this.b=La(a,r,e-1/3)}return Nt.toWorkingColorSpace(this,i),this}setStyle(e,t=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Nt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Nt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Nt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Nt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Nt.fromWorkingColorSpace(Pt.copy(this),e),Ut(Pt.r*255,0,255)<<16^Ut(Pt.g*255,0,255)<<8^Ut(Pt.b*255,0,255)<<0}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,r=Pt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=xn){Nt.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(er);const n=As(hn.h,er.h,t),i=As(hn.s,er.s,t),r=As(hn.l,er.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Oe;Oe.NAMES=uh;class li extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new k,tr=new Ne;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=io,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fh extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hh extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nn extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mv=0;const en=new $e,Ca=new ht,Fi=new k,Kt=new ss,ps=new ss,At=new k;class Mn extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rh(e)?hh:fh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Kt.min,ps.min),Kt.expandByPoint(At),At.addVectors(Kt.max,ps.max),Kt.expandByPoint(At)):(Kt.expandByPoint(ps.min),Kt.expandByPoint(ps.max))}Kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),At.add(Fi)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<o;C++)c[C]=new k,u[C]=new k;const f=new k,h=new k,m=new k,g=new Ne,p=new Ne,d=new Ne,v=new k,y=new k;function _(C,j,q){f.fromArray(i,C*3),h.fromArray(i,j*3),m.fromArray(i,q*3),g.fromArray(a,C*2),p.fromArray(a,j*2),d.fromArray(a,q*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const P=1/(p.x*d.y-d.x*p.y);!isFinite(P)||(v.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(P),y.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(P),c[C].add(v),c[j].add(v),c[q].add(v),u[C].add(y),u[j].add(y),u[q].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let C=0,j=x.length;C<j;++C){const q=x[C],P=q.start,R=q.count;for(let G=P,Z=P+R;G<Z;G+=3)_(n[G+0],n[G+1],n[G+2])}const b=new k,w=new k,E=new k,M=new k;function S(C){E.fromArray(r,C*3),M.copy(E);const j=c[C];b.copy(j),b.sub(E.multiplyScalar(E.dot(j))).normalize(),w.crossVectors(M,j);const P=w.dot(u[C])<0?-1:1;l[C*4]=b.x,l[C*4+1]=b.y,l[C*4+2]=b.z,l[C*4+3]=P}for(let C=0,j=x.length;C<j;++C){const q=x[C],P=q.start,R=q.count;for(let G=P,Z=P+R;G<Z;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let v=0;v<u;v++)h[g++]=c[m++]}return new Ht(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new $e,vn=new Eo,nr=new rs,Eu=new k,ms=new k,gs=new k,_s=new k,Ra=new k,ir=new k,sr=new Ne,rr=new Ne,ar=new Ne,Pa=new k,or=new k;class rn extends ht{constructor(e=new Mn,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Ra.fromBufferAttribute(f,e),a?ir.addScaledVector(Ra,u):ir.addScaledVector(Ra.sub(t),u))}t.add(ir)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),vn.copy(e.ray).recast(e.near),nr.containsPoint(vn.origin)===!1&&(vn.intersectSphere(nr,Eu)===null||vn.origin.distanceToSquared(Eu)>(e.far-e.near)**2))||(Tu.copy(r).invert(),vn.copy(e.ray).applyMatrix4(Tu),n.boundingBox!==null&&vn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=i[p.materialIndex],v=Math.max(p.start,h.start),y=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let _=v,x=y;_<x;_+=3){const b=o.getX(_),w=o.getX(_+1),E=o.getX(_+2);a=lr(this,d,e,vn,c,u,b,w,E),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=m,d=g;p<d;p+=3){const v=o.getX(p),y=o.getX(p+1),_=o.getX(p+2);a=lr(this,i,e,vn,c,u,v,y,_),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=i[p.materialIndex],v=Math.max(p.start,h.start),y=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let _=v,x=y;_<x;_+=3){const b=_,w=_+1,E=_+2;a=lr(this,d,e,vn,c,u,b,w,E),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=m,d=g;p<d;p+=3){const v=p,y=p+1,_=p+2;a=lr(this,i,e,vn,c,u,v,y,_),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function gv(s,e,t,n,i,r,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===On,o),l===null)return null;or.copy(o),or.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(or);return c<t.near||c>t.far?null:{distance:c,point:or.clone(),object:s}}function lr(s,e,t,n,i,r,a,o,l){s.getVertexPosition(a,ms),s.getVertexPosition(o,gs),s.getVertexPosition(l,_s);const c=gv(s,e,t,n,ms,gs,_s,Pa);if(c){i&&(sr.fromBufferAttribute(i,a),rr.fromBufferAttribute(i,o),ar.fromBufferAttribute(i,l),c.uv=Pn.getUV(Pa,ms,gs,_s,sr,rr,ar,new Ne)),r&&(sr.fromBufferAttribute(r,a),rr.fromBufferAttribute(r,o),ar.fromBufferAttribute(r,l),c.uv2=Pn.getUV(Pa,ms,gs,_s,sr,rr,ar,new Ne));const u={a,b:o,c:l,normal:new k,materialIndex:0};Pn.getNormal(ms,gs,_s,u.normal),c.face=u}return c}class Os extends Mn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(f,2));function g(p,d,v,y,_,x,b,w,E,M,S){const C=x/E,j=b/M,q=x/2,P=b/2,R=w/2,G=E+1,Z=M+1;let K=0,H=0;const re=new k;for(let ie=0;ie<Z;ie++){const ye=ie*j-P;for(let U=0;U<G;U++){const ae=U*C-q;re[p]=ae*y,re[d]=ye*_,re[v]=R,c.push(re.x,re.y,re.z),re[p]=0,re[d]=0,re[v]=w>0?1:-1,u.push(re.x,re.y,re.z),f.push(U/E),f.push(1-ie/M),K+=1}}for(let ie=0;ie<M;ie++)for(let ye=0;ye<E;ye++){const U=h+ye+G*ie,ae=h+ye+G*(ie+1),le=h+(ye+1)+G*(ie+1),z=h+(ye+1)+G*ie;l.push(U,ae,z),l.push(ae,le,z),H+=6}o.addGroup(m,H,S),m+=H,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=ts(s[t]);for(const i in n)e[i]=n[i]}return e}function _v(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dh(s){return s.getRenderTarget()===null&&s.outputEncoding===tt?xn:Ds}const vv={clone:ts,merge:zt};var xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ph extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends ph{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Oi=1;class bv extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Bt(Ni,Oi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Bt(Ni,Oi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Bt(Ni,Oi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Bt(Ni,Oi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Bt(Ni,Oi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Bt(Ni,Oi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Fn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class mh extends Ct{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mv extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Os(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Yn});r.uniforms.tEquirect.value=t;const a=new rn(i,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=$t),new bv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Da=new k,wv=new k,Sv=new Gt;class ii{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Da.subVectors(n,t).cross(wv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sv.getNormalMatrix(e),i=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new rs,cr=new k;class Ao{constructor(e=new ii,t=new ii,n=new ii,i=new ii,r=new ii,a=new ii){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],p=n[11],d=n[12],v=n[13],y=n[14],_=n[15];return t[0].setComponents(o-i,f-l,p-h,_-d).normalize(),t[1].setComponents(o+i,f+l,p+h,_+d).normalize(),t[2].setComponents(o+r,f+c,p+m,_+v).normalize(),t[3].setComponents(o-r,f-c,p-m,_-v).normalize(),t[4].setComponents(o-a,f-u,p-g,_-y).normalize(),t[5].setComponents(o+a,f+u,p+g,_+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(cr.x=i.normal.x>0?e.max.x:e.min.x,cr.y=i.normal.y>0?e.max.y:e.min.y,cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Tv(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,m=u.updateRange;s.bindBuffer(f,c),m.count===-1?s.bufferSubData(f,0,h):(t?s.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):s.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Lo extends Mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,m=[],g=[],p=[],d=[];for(let v=0;v<u;v++){const y=v*h-a;for(let _=0;_<c;_++){const x=_*f-r;g.push(x,-y,0),p.push(0,0,1),d.push(_/o),d.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<o;y++){const _=y+c*v,x=y+c*(v+1),b=y+1+c*(v+1),w=y+1+c*v;m.push(_,x,w),m.push(x,b,w)}this.setIndex(m),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(p,3)),this.setAttribute("uv",new Nn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dv="vec3 transformed = vec3( position );",Iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Fv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,b0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,M0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,T0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,O0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,B0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_x=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Mx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$x=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ey=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ny=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:Ev,alphamap_pars_fragment:Av,alphatest_fragment:Lv,alphatest_pars_fragment:Cv,aomap_fragment:Rv,aomap_pars_fragment:Pv,begin_vertex:Dv,beginnormal_vertex:Iv,bsdfs:kv,iridescence_fragment:Fv,bumpmap_pars_fragment:Nv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Uv,clipping_planes_vertex:Bv,color_fragment:Gv,color_pars_fragment:Hv,color_pars_vertex:Vv,color_vertex:Wv,common:jv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:qv,displacementmap_pars_vertex:Xv,displacementmap_vertex:Yv,emissivemap_fragment:Kv,emissivemap_pars_fragment:Zv,encodings_fragment:Jv,encodings_pars_fragment:Qv,envmap_fragment:e0,envmap_common_pars_fragment:t0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:m0,envmap_vertex:s0,fog_vertex:r0,fog_pars_vertex:a0,fog_fragment:o0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_fragment:u0,lightmap_pars_fragment:f0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:_0,lights_phong_fragment:v0,lights_phong_pars_fragment:x0,lights_physical_fragment:y0,lights_physical_pars_fragment:b0,lights_fragment_begin:M0,lights_fragment_maps:w0,lights_fragment_end:S0,logdepthbuf_fragment:T0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:L0,map_fragment:C0,map_pars_fragment:R0,map_particle_fragment:P0,map_particle_pars_fragment:D0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:k0,morphcolor_vertex:F0,morphnormal_vertex:N0,morphtarget_pars_vertex:O0,morphtarget_vertex:z0,normal_fragment_begin:U0,normal_fragment_maps:B0,normal_pars_fragment:G0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:X0,output_fragment:Y0,packing:K0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:Q0,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:sx,shadowmap_vertex:rx,shadowmask_pars_fragment:ax,skinbase_vertex:ox,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:fx,specularmap_pars_fragment:hx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:xx,uv2_pars_fragment:yx,uv2_pars_vertex:bx,uv2_vertex:Mx,worldpos_vertex:wx,background_vert:Sx,background_frag:Tx,backgroundCube_vert:Ex,backgroundCube_frag:Ax,cube_vert:Lx,cube_frag:Cx,depth_vert:Rx,depth_frag:Px,distanceRGBA_vert:Dx,distanceRGBA_frag:Ix,equirect_vert:kx,equirect_frag:Fx,linedashed_vert:Nx,linedashed_frag:Ox,meshbasic_vert:zx,meshbasic_frag:Ux,meshlambert_vert:Bx,meshlambert_frag:Gx,meshmatcap_vert:Hx,meshmatcap_frag:Vx,meshnormal_vert:Wx,meshnormal_frag:jx,meshphong_vert:$x,meshphong_frag:qx,meshphysical_vert:Xx,meshphysical_frag:Yx,meshtoon_vert:Kx,meshtoon_frag:Zx,points_vert:Jx,points_frag:Qx,shadow_vert:ey,shadow_frag:ty,sprite_vert:ny,sprite_frag:iy},pe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gt},uv2Transform:{value:new Gt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gt}}},yn={basic:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:zt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:zt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:zt([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:zt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:zt([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:zt([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:zt([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:zt([pe.lights,pe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};yn.physical={uniforms:zt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ur={r:0,b:0,g:0};function sy(s,e,t,n,i,r,a){const o=new Oe(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function g(d,v){let y=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const x=s.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(_=null),_===null?p(o,l):_&&_.isColor&&(p(_,1),y=!0),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===kr)?(u===void 0&&(u=new rn(new Os(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ts(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==tt,(f!==_||h!==_.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,m=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new rn(new Lo(2,2),new _i({name:"BackgroundMaterial",uniforms:ts(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,m=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,v){d.getRGB(ur,dh(s)),n.buffers.color.setClear(ur.r,ur.g,ur.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(d,v=1){o.set(d),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:g}}function ry(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=d(null);let c=l,u=!1;function f(R,G,Z,K,H){let re=!1;if(a){const ie=p(K,Z,G);c!==ie&&(c=ie,m(c.object)),re=v(R,K,Z,H),re&&y(R,K,Z,H)}else{const ie=G.wireframe===!0;(c.geometry!==K.id||c.program!==Z.id||c.wireframe!==ie)&&(c.geometry=K.id,c.program=Z.id,c.wireframe=ie,re=!0)}H!==null&&t.update(H,34963),(re||u)&&(u=!1,M(R,G,Z,K),H!==null&&s.bindBuffer(34963,t.get(H).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,G,Z){const K=Z.wireframe===!0;let H=o[R.id];H===void 0&&(H={},o[R.id]=H);let re=H[G.id];re===void 0&&(re={},H[G.id]=re);let ie=re[K];return ie===void 0&&(ie=d(h()),re[K]=ie),ie}function d(R){const G=[],Z=[],K=[];for(let H=0;H<i;H++)G[H]=0,Z[H]=0,K[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:K,object:R,attributes:{},index:null}}function v(R,G,Z,K){const H=c.attributes,re=G.attributes;let ie=0;const ye=Z.getAttributes();for(const U in ye)if(ye[U].location>=0){const le=H[U];let z=re[U];if(z===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),le===void 0||le.attribute!==z||z&&le.data!==z.data)return!0;ie++}return c.attributesNum!==ie||c.index!==K}function y(R,G,Z,K){const H={},re=G.attributes;let ie=0;const ye=Z.getAttributes();for(const U in ye)if(ye[U].location>=0){let le=re[U];le===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const z={};z.attribute=le,le&&le.data&&(z.data=le.data),H[U]=z,ie++}c.attributes=H,c.attributesNum=ie,c.index=K}function _(){const R=c.newAttributes;for(let G=0,Z=R.length;G<Z;G++)R[G]=0}function x(R){b(R,0)}function b(R,G){const Z=c.newAttributes,K=c.enabledAttributes,H=c.attributeDivisors;Z[R]=1,K[R]===0&&(s.enableVertexAttribArray(R),K[R]=1),H[R]!==G&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,G),H[R]=G)}function w(){const R=c.newAttributes,G=c.enabledAttributes;for(let Z=0,K=G.length;Z<K;Z++)G[Z]!==R[Z]&&(s.disableVertexAttribArray(Z),G[Z]=0)}function E(R,G,Z,K,H,re){n.isWebGL2===!0&&(Z===5124||Z===5125)?s.vertexAttribIPointer(R,G,Z,H,re):s.vertexAttribPointer(R,G,Z,K,H,re)}function M(R,G,Z,K){if(n.isWebGL2===!1&&(R.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const H=K.attributes,re=Z.getAttributes(),ie=G.defaultAttributeValues;for(const ye in re){const U=re[ye];if(U.location>=0){let ae=H[ye];if(ae===void 0&&(ye==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ye==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const le=ae.normalized,z=ae.itemSize,me=t.get(ae);if(me===void 0)continue;const N=me.buffer,ne=me.type,ue=me.bytesPerElement;if(ae.isInterleavedBufferAttribute){const _e=ae.data,we=_e.stride,Pe=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let qe=0;qe<U.locationSize;qe++)b(U.location+qe,_e.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let qe=0;qe<U.locationSize;qe++)x(U.location+qe);s.bindBuffer(34962,N);for(let qe=0;qe<U.locationSize;qe++)E(U.location+qe,z/U.locationSize,ne,le,we*ue,(Pe+z/U.locationSize*qe)*ue)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<U.locationSize;_e++)b(U.location+_e,ae.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<U.locationSize;_e++)x(U.location+_e);s.bindBuffer(34962,N);for(let _e=0;_e<U.locationSize;_e++)E(U.location+_e,z/U.locationSize,ne,le,z*ue,z/U.locationSize*_e*ue)}}else if(ie!==void 0){const le=ie[ye];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(U.location,le);break;case 3:s.vertexAttrib3fv(U.location,le);break;case 4:s.vertexAttrib4fv(U.location,le);break;default:s.vertexAttrib1fv(U.location,le)}}}}w()}function S(){q();for(const R in o){const G=o[R];for(const Z in G){const K=G[Z];for(const H in K)g(K[H].object),delete K[H];delete G[Z]}delete o[R]}}function C(R){if(o[R.id]===void 0)return;const G=o[R.id];for(const Z in G){const K=G[Z];for(const H in K)g(K[H].object),delete K[H];delete G[Z]}delete o[R.id]}function j(R){for(const G in o){const Z=o[G];if(Z[R.id]===void 0)continue;const K=Z[R.id];for(const H in K)g(K[H].object),delete K[H];delete Z[R.id]}}function q(){P(),u=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:j,initAttributes:_,enableAttribute:x,disableUnusedAttributes:w}}function ay(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,m;if(i)h=s,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function oy(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),v=s.getParameter(36348),y=s.getParameter(36349),_=h>0,x=a||e.has("OES_texture_float"),b=_&&x,w=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:w}}function ly(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ii,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,v=s.get(f);if(!i||g===null||g.length===0||r&&!d)r?u(null):c();else{const y=r?0:n,_=y*4;let x=v.clippingState||null;l.value=x,x=u(g,h,_,m);for(let b=0;b!==_;++b)x[b]=t[b];v.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const v=m+p*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<v)&&(d=new Float32Array(v));for(let _=0,x=m;_!==p;++_,x+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(d,x),d[x+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function cy(s){let e=new WeakMap;function t(a,o){return o===Qa?a.mapping=Ki:o===eo&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Qa||o===eo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Mv(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Co extends ph{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,Au=[.125,.215,.35,.446,.526,.582],ri=20,Ia=new Co,Lu=new Oe;let ka=null;const si=(1+Math.sqrt(5))/2,Ui=1/si,Cu=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,si,Ui),new k(0,si,-Ui),new k(Ui,0,si),new k(-Ui,0,si),new k(si,Ui,0),new k(-si,Ui,0)];class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ka=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka),e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Rs,format:sn,encoding:mi,depthBuffer:!1},i=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(r)),this._blurMaterial=fy(r,e,t)}return i}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,i){const o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Lu),u.toneMapping=Fn,u.autoClear=!1;const m=new li({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new rn(new Os,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Lu),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):y===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const _=this._cubeSize;fr(i,y*_,v>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ki||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new rn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Cu[(i-1)%Cu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new rn(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ri-1),p=r/g,d=isFinite(r)?1+Math.floor(u*p):ri;d>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ri}`);const v=[];let y=0;for(let E=0;E<ri;++E){const M=E/p,S=Math.exp(-M*M/2);v.push(S),E===0?y+=S:E<d&&(y+=2*S)}for(let E=0;E<v.length;E++)v[E]=v[E]/y;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const x=this._sizeLods[i],b=3*x*(i>_-Vi?i-_+Vi:0),w=4*(this._cubeSize-x);fr(t,b,w,3*x,2*x),l.setRenderTarget(t),l.render(f,Ia)}}function uy(s){const e=[],t=[],n=[];let i=s;const r=s-Vi+1+Au.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Vi?l=Au[a-s+Vi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,v=1,y=new Float32Array(p*g*m),_=new Float32Array(d*g*m),x=new Float32Array(v*g*m);for(let w=0;w<m;w++){const E=w%3*2/3-1,M=w>2?0:-1,S=[E,M,0,E+2/3,M,0,E+2/3,M+1,0,E,M,0,E+2/3,M+1,0,E,M+1,0];y.set(S,p*g*w),_.set(h,d*g*w);const C=[w,w,w,w,w,w];x.set(C,v*g*w)}const b=new Mn;b.setAttribute("position",new Ht(y,p)),b.setAttribute("uv",new Ht(_,d)),b.setAttribute("faceIndex",new Ht(x,v)),e.push(b),i>Vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(s,e,t){const n=new gi(s,e,t);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function fy(s,e,t){const n=new Float32Array(ri),i=new k(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Du(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Iu(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hy(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qa||l===eo,u=l===Ki||l===Zi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ru(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Ru(s));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function py(s,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,v=p.length;d<v;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let _=0,x=y.length;_<x;_+=3){const b=y[_+0],w=y[_+1],E=y[_+2];h.push(b,w,w,E,E,b)}}else{const y=g.array;p=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const b=_+0,w=_+1,E=_+2;h.push(b,w,w,E,E,b)}}const d=new(rh(h)?hh:fh)(h,1);d.version=p;const v=r.get(f);v&&e.remove(v),r.set(f,d)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function my(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){s.drawElements(r,m,o,h*l),t.update(m,r,1)}function f(h,m,g){if(g===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,o,h*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function gy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _y(s,e){return s[0]-e[0]}function vy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function xy(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new at,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let d=r.get(u);if(d===void 0||d.count!==p){let G=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",G)};var m=G;d!==void 0&&d.texture.dispose();const _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let C=u.attributes.position.count*S,j=1;C>e.maxTextureSize&&(j=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const q=new Float32Array(C*j*4*p),P=new lh(q,C,j,p);P.type=qn,P.needsUpdate=!0;const R=S*4;for(let Z=0;Z<p;Z++){const K=w[Z],H=E[Z],re=M[Z],ie=C*j*4*Z;for(let ye=0;ye<K.count;ye++){const U=ye*R;_===!0&&(a.fromBufferAttribute(K,ye),q[ie+U+0]=a.x,q[ie+U+1]=a.y,q[ie+U+2]=a.z,q[ie+U+3]=0),x===!0&&(a.fromBufferAttribute(H,ye),q[ie+U+4]=a.x,q[ie+U+5]=a.y,q[ie+U+6]=a.z,q[ie+U+7]=0),b===!0&&(a.fromBufferAttribute(re,ye),q[ie+U+8]=a.x,q[ie+U+9]=a.y,q[ie+U+10]=a.z,q[ie+U+11]=re.itemSize===4?a.w:1)}}d={count:p,texture:P,size:new Ne(C,j)},r.set(u,d),u.addEventListener("dispose",G)}let v=0;for(let _=0;_<h.length;_++)v+=h[_];const y=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",h),f.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const g=h===void 0?0:h.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let x=0;x<g;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<g;x++){const b=p[x];b[0]=x,b[1]=h[x]}p.sort(vy);for(let x=0;x<8;x++)x<g&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(_y);const d=u.morphAttributes.position,v=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const b=o[x],w=b[0],E=b[1];w!==Number.MAX_SAFE_INTEGER&&E?(d&&u.getAttribute("morphTarget"+x)!==d[w]&&u.setAttribute("morphTarget"+x,d[w]),v&&u.getAttribute("morphNormal"+x)!==v[w]&&u.setAttribute("morphNormal"+x,v[w]),i[x]=E,y+=E):(d&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),v&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const _=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function yy(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const _h=new Ct,vh=new lh,xh=new av,yh=new mh,ku=[],Fu=[],Nu=new Float32Array(16),Ou=new Float32Array(9),zu=new Float32Array(4);function as(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ku[i];if(r===void 0&&(r=new Float32Array(i),ku[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Nr(s,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function by(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function My(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),Mt(t,e)}}function wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),Mt(t,e)}}function Sy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),Mt(t,e)}}function Ty(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;zu.set(n),s.uniformMatrix2fv(this.addr,!1,zu),Mt(t,n)}}function Ey(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Ou.set(n),s.uniformMatrix3fv(this.addr,!1,Ou),Mt(t,n)}}function Ay(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Nu.set(n),s.uniformMatrix4fv(this.addr,!1,Nu),Mt(t,n)}}function Ly(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),Mt(t,e)}}function Ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),Mt(t,e)}}function Py(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),Mt(t,e)}}function Dy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Iy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),Mt(t,e)}}function ky(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),Mt(t,e)}}function Fy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),Mt(t,e)}}function Ny(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||_h,i)}function Oy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xh,i)}function zy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yh,i)}function Uy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vh,i)}function By(s){switch(s){case 5126:return by;case 35664:return My;case 35665:return wy;case 35666:return Sy;case 35674:return Ty;case 35675:return Ey;case 35676:return Ay;case 5124:case 35670:return Ly;case 35667:case 35671:return Cy;case 35668:case 35672:return Ry;case 35669:case 35673:return Py;case 5125:return Dy;case 36294:return Iy;case 36295:return ky;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Uy}}function Gy(s,e){s.uniform1fv(this.addr,e)}function Hy(s,e){const t=as(e,this.size,2);s.uniform2fv(this.addr,t)}function Vy(s,e){const t=as(e,this.size,3);s.uniform3fv(this.addr,t)}function Wy(s,e){const t=as(e,this.size,4);s.uniform4fv(this.addr,t)}function jy(s,e){const t=as(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $y(s,e){const t=as(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qy(s,e){const t=as(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xy(s,e){s.uniform1iv(this.addr,e)}function Yy(s,e){s.uniform2iv(this.addr,e)}function Ky(s,e){s.uniform3iv(this.addr,e)}function Zy(s,e){s.uniform4iv(this.addr,e)}function Jy(s,e){s.uniform1uiv(this.addr,e)}function Qy(s,e){s.uniform2uiv(this.addr,e)}function eb(s,e){s.uniform3uiv(this.addr,e)}function tb(s,e){s.uniform4uiv(this.addr,e)}function nb(s,e,t){const n=this.cache,i=e.length,r=Nr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||_h,r[a])}function ib(s,e,t){const n=this.cache,i=e.length,r=Nr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xh,r[a])}function sb(s,e,t){const n=this.cache,i=e.length,r=Nr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||yh,r[a])}function rb(s,e,t){const n=this.cache,i=e.length,r=Nr(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vh,r[a])}function ab(s){switch(s){case 5126:return Gy;case 35664:return Hy;case 35665:return Vy;case 35666:return Wy;case 35674:return jy;case 35675:return $y;case 35676:return qy;case 5124:case 35670:return Xy;case 35667:case 35671:return Yy;case 35668:case 35672:return Ky;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return Qy;case 36295:return eb;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}class ob{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=By(t.type)}}class lb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ab(t.type)}}class cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function Uu(s,e){s.seq.push(e),s.map[e.id]=e}function ub(s,e,t){const n=s.name,i=n.length;for(Fa.lastIndex=0;;){const r=Fa.exec(n),a=Fa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Uu(t,c===void 0?new ob(o,s,e):new lb(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new cb(o),Uu(t,f)),t=f}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ub(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Bu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let fb=0;function hb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function db(s){switch(s){case mi:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Gu(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+hb(s.getShaderSource(e),a)}else return i}function pb(s,e){const t=db(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mb(s,e){let t;switch(e){case d_:t="Linear";break;case p_:t="Reinhard";break;case m_:t="OptimizedCineon";break;case g_:t="ACESFilmic";break;case __:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gb(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function _b(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vb(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ss(s){return s!==""}function Hu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(s){return s.replace(xb,yb)}function yb(s,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ao(t)}const bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(s){return s.replace(bb,Mb)}function Mb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ju(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ws&&(e="SHADOWMAP_TYPE_VSM"),e}function Sb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ki:case Zi:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function Eb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case f_:e="ENVMAP_BLENDING_MIX";break;case h_:e="ENVMAP_BLENDING_ADD";break}return e}function Ab(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lb(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=wb(t),c=Sb(t),u=Tb(t),f=Eb(t),h=Ab(t),m=t.isWebGL2?"":gb(t),g=_b(r),p=i.createProgram();let d,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Ss).join(`
`),d.length>0&&(d+=`
`),v=[m,g].filter(Ss).join(`
`),v.length>0&&(v+=`
`)):(d=[ju(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),v=[m,ju(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Fn?mb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,pb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=ao(a),a=Hu(a,t),a=Vu(a,t),o=ao(o),o=Hu(o,t),o=Vu(o,t),a=Wu(a),o=Wu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=y+d+a,x=y+v+o,b=Bu(i,35633,_),w=Bu(i,35632,x);if(i.attachShader(p,b),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(p).trim(),C=i.getShaderInfoLog(b).trim(),j=i.getShaderInfoLog(w).trim();let q=!0,P=!0;if(i.getProgramParameter(p,35714)===!1){q=!1;const R=Gu(i,b,"vertex"),G=Gu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+R+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(C===""||j==="")&&(P=!1);P&&(this.diagnostics={runnable:q,programLog:S,vertexShader:{log:C,prefix:d},fragmentShader:{log:j,prefix:v}})}i.deleteShader(b),i.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new Mr(i,p)),E};let M;return this.getAttributes=function(){return M===void 0&&(M=vb(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=fb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=w,this}let Cb=0;class Rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pb(e),t.set(e,n)),n}}class Pb{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}}function Db(s,e,t,n,i,r,a){const o=new ch,l=new Rb,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,S,C,j,q){const P=j.fog,R=q.geometry,G=M.isMeshStandardMaterial?j.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),K=!!Z&&Z.mapping===kr?Z.image.height:null,H=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const re=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ie=re!==void 0?re.length:0;let ye=0;R.morphAttributes.position!==void 0&&(ye=1),R.morphAttributes.normal!==void 0&&(ye=2),R.morphAttributes.color!==void 0&&(ye=3);let U,ae,le,z;if(H){const we=yn[H];U=we.vertexShader,ae=we.fragmentShader}else U=M.vertexShader,ae=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),z=l.getFragmentShaderID(M);const me=s.getRenderTarget(),N=M.alphaTest>0,ne=M.clearcoat>0,ue=M.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:M.type,vertexShader:U,fragmentShader:ae,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:me===null?s.outputEncoding:me.isXRRenderTarget===!0?me.texture.encoding:mi,map:!!M.map,matcap:!!M.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:K,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===O_,tangentSpaceNormalMap:M.normalMapType===So,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===tt,clearcoat:ne,clearcoatMap:ne&&!!M.clearcoatMap,clearcoatRoughnessMap:ne&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ne&&!!M.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!M.iridescenceMap,iridescenceThicknessMap:ue&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Wi,alphaMap:!!M.alphaMap,alphaTest:N,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!R.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:Fn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===In,flipSided:M.side===Zt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(v(S,M),y(S,M),S.push(s.outputEncoding)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputEncoding),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.combine),M.push(S.vertexUvs),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),M.push(o.mask)}function _(M){const S=g[M.type];let C;if(S){const j=yn[S];C=vv.clone(j.uniforms)}else C=M.uniforms;return C}function x(M,S){let C;for(let j=0,q=c.length;j<q;j++){const P=c[j];if(P.cacheKey===S){C=P,++C.usedTimes;break}}return C===void 0&&(C=new Lb(s,S,M,r),c.push(C)),C}function b(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:x,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:E}}function Ib(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function kb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $u(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,m,g,p,d){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},s[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=p,v.group=d),e++,v}function o(f,h,m,g,p,d){const v=a(f,h,m,g,p,d);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function l(f,h,m,g,p,d){const v=a(f,h,m,g,p,d);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||kb),n.length>1&&n.sort(h||$u),i.length>1&&i.sort(h||$u)}function u(){for(let f=e,h=s.length;f<h;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Fb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new qu,s.set(n,[a])):i>=r.length?(a=new qu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Nb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Oe};break;case"SpotLight":t={position:new k,direction:new k,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function Ob(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zb=0;function Ub(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bb(s,e){const t=new Nb,n=Ob(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,a=new $e,o=new $e;function l(u,f){let h=0,m=0,g=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let p=0,d=0,v=0,y=0,_=0,x=0,b=0,w=0,E=0,M=0;u.sort(Ub);const S=f===!0?Math.PI:1;for(let j=0,q=u.length;j<q;j++){const P=u[j],R=P.color,G=P.intensity,Z=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=R.r*G*S,m+=R.g*G*S,g+=R.b*G*S;else if(P.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],G);else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const re=P.shadow,ie=n.get(P);ie.shadowBias=re.bias,ie.shadowNormalBias=re.normalBias,ie.shadowRadius=re.radius,ie.shadowMapSize=re.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=P.shadow.matrix,x++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(R).multiplyScalar(G*S),H.distance=Z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[v]=H;const re=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,re.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[v]=re.matrix,P.castShadow){const ie=n.get(P);ie.shadowBias=re.bias,ie.shadowNormalBias=re.normalBias,ie.shadowRadius=re.radius,ie.shadowMapSize=re.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=K,w++}v++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(R).multiplyScalar(G),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=H,y++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*S),H.distance=P.distance,H.decay=P.decay,P.castShadow){const re=P.shadow,ie=n.get(P);ie.shadowBias=re.bias,ie.shadowNormalBias=re.normalBias,ie.shadowRadius=re.radius,ie.shadowMapSize=re.mapSize,ie.shadowCameraNear=re.camera.near,ie.shadowCameraFar=re.camera.far,i.pointShadow[d]=ie,i.pointShadowMap[d]=K,i.pointShadowMatrix[d]=P.shadow.matrix,b++}i.point[d]=H,d++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(G*S),H.groundColor.copy(P.groundColor).multiplyScalar(G*S),i.hemi[_]=H,_++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const C=i.hash;(C.directionalLength!==p||C.pointLength!==d||C.spotLength!==v||C.rectAreaLength!==y||C.hemiLength!==_||C.numDirectionalShadows!==x||C.numPointShadows!==b||C.numSpotShadows!==w||C.numSpotMaps!==E)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=y,i.point.length=d,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+E-M,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=M,C.directionalLength=p,C.pointLength=d,C.spotLength=v,C.rectAreaLength=y,C.hemiLength=_,C.numDirectionalShadows=x,C.numPointShadows=b,C.numSpotShadows=w,C.numSpotMaps=E,i.version=zb++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const v=f.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){const x=u[y];if(x.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),h++}else if(x.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),g++}else if(x.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),o.identity(),a.copy(x.matrixWorld),a.premultiply(v),o.extractRotation(a),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),m++}else if(x.isHemisphereLight){const b=i.hemi[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(v),d++}}}return{setup:l,setupView:c,state:i}}function Xu(s,e){const t=new Bb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Gb(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Xu(s,e),t.set(r,[l])):a>=o.length?(l=new Xu(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Hb extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=F_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vb extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $b(s,e,t){let n=new Ao;const i=new Ne,r=new Ne,a=new at,o=new Hb({depthPacking:N_}),l=new Vb,c={},u=t.maxTextureSize,f={[On]:Zt,[Zt]:On,[In]:In},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Wb,fragmentShader:jb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new rn(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf,this.render=function(x,b,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Yn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let j=0,q=x.length;j<q;j++){const P=x[j],R=P.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const G=R.getFrameExtents();if(i.multiply(G),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/G.x),i.x=r.x*G.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/G.y),i.y=r.y*G.y,R.mapSize.y=r.y)),R.map===null){const K=this.type!==ws?{minFilter:Lt,magFilter:Lt}:{};R.map=new gi(i.x,i.y,K),R.map.texture.name=P.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const Z=R.getViewportCount();for(let K=0;K<Z;K++){const H=R.getViewport(K);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),C.viewport(a),R.updateMatrices(P,K),n=R.getFrustum(),_(b,w,R.camera,P,this.type)}R.isPointLightShadow!==!0&&this.type===ws&&v(R,w),R.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(E,M,S)};function v(x,b){const w=e.update(p);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new gi(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(b,null,w,h,p,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(b,null,w,m,p,null)}function y(x,b,w,E,M,S){let C=null;const j=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(j!==void 0)C=j;else if(C=w.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const q=C.uuid,P=b.uuid;let R=c[q];R===void 0&&(R={},c[q]=R);let G=R[P];G===void 0&&(G=C.clone(),R[P]=G),C=G}return C.visible=b.visible,C.wireframe=b.wireframe,S===ws?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:f[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(w.matrixWorld),C.nearDistance=E,C.farDistance=M),C}function _(x,b,w,E,M){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===ws)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const j=e.update(x),q=x.material;if(Array.isArray(q)){const P=j.groups;for(let R=0,G=P.length;R<G;R++){const Z=P[R],K=q[Z.materialIndex];if(K&&K.visible){const H=y(x,K,E,w.near,w.far,M);s.renderBufferDirect(w,null,j,H,x,Z)}}}else if(q.visible){const P=y(x,q,E,w.near,w.far,M);s.renderBufferDirect(w,null,j,P,x,null)}}const C=x.children;for(let j=0,q=C.length;j<q;j++)_(C[j],b,w,E,M)}}function qb(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const Q=new at;let oe=null;const ve=new at(0,0,0,0);return{setMask:function(be){oe!==be&&!I&&(s.colorMask(be,be,be,be),oe=be)},setLocked:function(be){I=be},setClear:function(be,ot,Tt,kt,gn){gn===!0&&(be*=kt,ot*=kt,Tt*=kt),Q.set(be,ot,Tt,kt),ve.equals(Q)===!1&&(s.clearColor(be,ot,Tt,kt),ve.copy(Q))},reset:function(){I=!1,oe=null,ve.set(-1,0,0,0)}}}function r(){let I=!1,Q=null,oe=null,ve=null;return{setTest:function(be){be?N(2929):ne(2929)},setMask:function(be){Q!==be&&!I&&(s.depthMask(be),Q=be)},setFunc:function(be){if(oe!==be){switch(be){case s_:s.depthFunc(512);break;case r_:s.depthFunc(519);break;case a_:s.depthFunc(513);break;case Ja:s.depthFunc(515);break;case o_:s.depthFunc(514);break;case l_:s.depthFunc(518);break;case c_:s.depthFunc(516);break;case u_:s.depthFunc(517);break;default:s.depthFunc(515)}oe=be}},setLocked:function(be){I=be},setClear:function(be){ve!==be&&(s.clearDepth(be),ve=be)},reset:function(){I=!1,Q=null,oe=null,ve=null}}}function a(){let I=!1,Q=null,oe=null,ve=null,be=null,ot=null,Tt=null,kt=null,gn=null;return{setTest:function(pt){I||(pt?N(2960):ne(2960))},setMask:function(pt){Q!==pt&&!I&&(s.stencilMask(pt),Q=pt)},setFunc:function(pt,Qt,_n){(oe!==pt||ve!==Qt||be!==_n)&&(s.stencilFunc(pt,Qt,_n),oe=pt,ve=Qt,be=_n)},setOp:function(pt,Qt,_n){(ot!==pt||Tt!==Qt||kt!==_n)&&(s.stencilOp(pt,Qt,_n),ot=pt,Tt=Qt,kt=_n)},setLocked:function(pt){I=pt},setClear:function(pt){gn!==pt&&(s.clearStencil(pt),gn=pt)},reset:function(){I=!1,Q=null,oe=null,ve=null,be=null,ot=null,Tt=null,kt=null,gn=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,v=!1,y=null,_=null,x=null,b=null,w=null,E=null,M=null,S=!1,C=null,j=null,q=null,P=null,R=null;const G=s.getParameter(35661);let Z=!1,K=0;const H=s.getParameter(7938);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=K>=2);let re=null,ie={};const ye=s.getParameter(3088),U=s.getParameter(2978),ae=new at().fromArray(ye),le=new at().fromArray(U);function z(I,Q,oe){const ve=new Uint8Array(4),be=s.createTexture();s.bindTexture(I,be),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let ot=0;ot<oe;ot++)s.texImage2D(Q+ot,0,6408,1,1,0,6408,5121,ve);return be}const me={};me[3553]=z(3553,3553,1),me[34067]=z(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(2929),l.setFunc(Ja),Vt(!1),It(Nc),N(2884),mt(Yn);function N(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function ne(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function ue(I,Q){return m[I]!==Q?(s.bindFramebuffer(I,Q),m[I]=Q,n&&(I===36009&&(m[36160]=Q),I===36160&&(m[36009]=Q)),!0):!1}function _e(I,Q){let oe=p,ve=!1;if(I)if(oe=g.get(Q),oe===void 0&&(oe=[],g.set(Q,oe)),I.isWebGLMultipleRenderTargets){const be=I.texture;if(oe.length!==be.length||oe[0]!==36064){for(let ot=0,Tt=be.length;ot<Tt;ot++)oe[ot]=36064+ot;oe.length=be.length,ve=!0}}else oe[0]!==36064&&(oe[0]=36064,ve=!0);else oe[0]!==1029&&(oe[0]=1029,ve=!0);ve&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function we(I){return d!==I?(s.useProgram(I),d=I,!0):!1}const Pe={[Bi]:32774,[qg]:32778,[Xg]:32779};if(n)Pe[Bc]=32775,Pe[Gc]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Pe[Bc]=I.MIN_EXT,Pe[Gc]=I.MAX_EXT)}const qe={[Yg]:0,[Kg]:1,[Zg]:768,[Kf]:770,[i_]:776,[t_]:774,[Qg]:772,[Jg]:769,[Zf]:771,[n_]:775,[e_]:773};function mt(I,Q,oe,ve,be,ot,Tt,kt){if(I===Yn){v===!0&&(ne(3042),v=!1);return}if(v===!1&&(N(3042),v=!0),I!==$g){if(I!==y||kt!==S){if((_!==Bi||w!==Bi)&&(s.blendEquation(32774),_=Bi,w=Bi),kt)switch(I){case Wi:s.blendFuncSeparate(1,771,1,771);break;case Oc:s.blendFunc(1,1);break;case zc:s.blendFuncSeparate(0,769,0,1);break;case Uc:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:s.blendFuncSeparate(770,771,1,771);break;case Oc:s.blendFunc(770,1);break;case zc:s.blendFuncSeparate(0,769,0,1);break;case Uc:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,b=null,E=null,M=null,y=I,S=kt}return}be=be||Q,ot=ot||oe,Tt=Tt||ve,(Q!==_||be!==w)&&(s.blendEquationSeparate(Pe[Q],Pe[be]),_=Q,w=be),(oe!==x||ve!==b||ot!==E||Tt!==M)&&(s.blendFuncSeparate(qe[oe],qe[ve],qe[ot],qe[Tt]),x=oe,b=ve,E=ot,M=Tt),y=I,S=!1}function ln(I,Q){I.side===In?ne(2884):N(2884);let oe=I.side===Zt;Q&&(oe=!oe),Vt(oe),I.blending===Wi&&I.transparent===!1?mt(Yn):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const ve=I.stencilWrite;c.setTest(ve),ve&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?N(32926):ne(32926)}function Vt(I){C!==I&&(I?s.frontFace(2304):s.frontFace(2305),C=I)}function It(I){I!==Vg?(N(2884),I!==j&&(I===Nc?s.cullFace(1029):I===Wg?s.cullFace(1028):s.cullFace(1032))):ne(2884),j=I}function dt(I){I!==q&&(Z&&s.lineWidth(I),q=I)}function ut(I,Q,oe){I?(N(32823),(P!==Q||R!==oe)&&(s.polygonOffset(Q,oe),P=Q,R=oe)):ne(32823)}function mn(I){I?N(3089):ne(3089)}function cn(I){I===void 0&&(I=33984+G-1),re!==I&&(s.activeTexture(I),re=I)}function L(I,Q,oe){oe===void 0&&(re===null?oe=33984+G-1:oe=re);let ve=ie[oe];ve===void 0&&(ve={type:void 0,texture:void 0},ie[oe]=ve),(ve.type!==I||ve.texture!==Q)&&(re!==oe&&(s.activeTexture(oe),re=oe),s.bindTexture(I,Q||me[I]),ve.type=I,ve.texture=Q)}function T(){const I=ie[re];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){ae.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function Se(I){le.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),le.copy(I))}function Qe(I,Q){let oe=f.get(Q);oe===void 0&&(oe=new WeakMap,f.set(Q,oe));let ve=oe.get(I);ve===void 0&&(ve=s.getUniformBlockIndex(Q,I.name),oe.set(I,ve))}function ft(I,Q){const ve=f.get(Q).get(I);u.get(Q)!==ve&&(s.uniformBlockBinding(Q,ve,I.__bindingPointIndex),u.set(Q,ve))}function St(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,ie={},m={},g=new WeakMap,p=[],d=null,v=!1,y=null,_=null,x=null,b=null,w=null,E=null,M=null,S=!1,C=null,j=null,q=null,P=null,R=null,ae.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:N,disable:ne,bindFramebuffer:ue,drawBuffers:_e,useProgram:we,setBlending:mt,setMaterial:ln,setFlipSided:Vt,setCullFace:It,setLineWidth:dt,setPolygonOffset:ut,setScissorTest:mn,activeTexture:cn,bindTexture:L,unbindTexture:T,compressedTexImage2D:ee,compressedTexImage3D:he,texImage2D:Me,texImage3D:Ie,updateUBOMapping:Qe,uniformBlockBinding:ft,texStorage2D:se,texStorage3D:De,texSubImage2D:de,texSubImage3D:ge,compressedTexSubImage2D:Te,compressedTexSubImage3D:xe,scissor:Ae,viewport:Se,reset:St}}function Xb(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,T){return v?new OffscreenCanvas(L,T):ks("canvas")}function _(L,T,ee,he){let de=1;if((L.width>he||L.height>he)&&(de=he/Math.max(L.width,L.height)),de<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ge=T?sh:Math.floor,Te=ge(de*L.width),xe=ge(de*L.height);p===void 0&&(p=y(Te,xe));const se=ee?y(Te,xe):p;return se.width=Te,se.height=xe,se.getContext("2d").drawImage(L,0,0,Te,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Te+"x"+xe+")."),se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return ro(L.width)&&ro(L.height)}function b(L){return o?!1:L.wrapS!==nn||L.wrapT!==nn||L.minFilter!==Lt&&L.minFilter!==$t}function w(L,T){return L.generateMipmaps&&T&&L.minFilter!==Lt&&L.minFilter!==$t}function E(L){s.generateMipmap(L)}function M(L,T,ee,he,de=!1){if(o===!1)return T;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ge=T;return T===6403&&(ee===5126&&(ge=33326),ee===5131&&(ge=33325),ee===5121&&(ge=33321)),T===33319&&(ee===5126&&(ge=33328),ee===5131&&(ge=33327),ee===5121&&(ge=33323)),T===6408&&(ee===5126&&(ge=34836),ee===5131&&(ge=34842),ee===5121&&(ge=he===tt&&de===!1?35907:32856),ee===32819&&(ge=32854),ee===32820&&(ge=32855)),(ge===33325||ge===33326||ge===33327||ge===33328||ge===34842||ge===34836)&&e.get("EXT_color_buffer_float"),ge}function S(L,T,ee){return w(L,ee)===!0||L.isFramebufferTexture&&L.minFilter!==Lt&&L.minFilter!==$t?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function C(L){return L===Lt||L===to||L===br?9728:9729}function j(L){const T=L.target;T.removeEventListener("dispose",j),P(T),T.isVideoTexture&&g.delete(T)}function q(L){const T=L.target;T.removeEventListener("dispose",q),G(T)}function P(L){const T=n.get(L);if(T.__webglInit===void 0)return;const ee=L.source,he=d.get(ee);if(he){const de=he[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&R(L),Object.keys(he).length===0&&d.delete(ee)}n.remove(L)}function R(L){const T=n.get(L);s.deleteTexture(T.__webglTexture);const ee=L.source,he=d.get(ee);delete he[T.__cacheKey],a.memory.textures--}function G(L){const T=L.texture,ee=n.get(L),he=n.get(T);if(he.__webglTexture!==void 0&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++)s.deleteFramebuffer(ee.__webglFramebuffer[de]),ee.__webglDepthbuffer&&s.deleteRenderbuffer(ee.__webglDepthbuffer[de]);else{if(s.deleteFramebuffer(ee.__webglFramebuffer),ee.__webglDepthbuffer&&s.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let de=0;de<ee.__webglColorRenderbuffer.length;de++)ee.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(ee.__webglColorRenderbuffer[de]);ee.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let de=0,ge=T.length;de<ge;de++){const Te=n.get(T[de]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(T[de])}n.remove(T),n.remove(L)}let Z=0;function K(){Z=0}function H(){const L=Z;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Z+=1,L}function re(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.encoding),T.join()}function ie(L,T){const ee=n.get(L);if(L.isVideoTexture&&mn(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ee,L,T);return}}t.bindTexture(3553,ee.__webglTexture,33984+T)}function ye(L,T){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){ne(ee,L,T);return}t.bindTexture(35866,ee.__webglTexture,33984+T)}function U(L,T){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){ne(ee,L,T);return}t.bindTexture(32879,ee.__webglTexture,33984+T)}function ae(L,T){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){ue(ee,L,T);return}t.bindTexture(34067,ee.__webglTexture,33984+T)}const le={[Ji]:10497,[nn]:33071,[Lr]:33648},z={[Lt]:9728,[to]:9984,[br]:9986,[$t]:9729,[Qf]:9985,[di]:9987};function me(L,T,ee){if(ee?(s.texParameteri(L,10242,le[T.wrapS]),s.texParameteri(L,10243,le[T.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,le[T.wrapR]),s.texParameteri(L,10240,z[T.magFilter]),s.texParameteri(L,10241,z[T.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(T.wrapS!==nn||T.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,C(T.magFilter)),s.texParameteri(L,10241,C(T.minFilter)),T.minFilter!==Lt&&T.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Lt||T.minFilter!==br&&T.minFilter!==di||T.type===qn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Rs&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(L,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function N(L,T){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",j));const he=T.source;let de=d.get(he);de===void 0&&(de={},d.set(he,de));const ge=re(T);if(ge!==L.__cacheKey){de[ge]===void 0&&(de[ge]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),de[ge].usedTimes++;const Te=de[L.__cacheKey];Te!==void 0&&(de[L.__cacheKey].usedTimes--,Te.usedTimes===0&&R(T)),L.__cacheKey=ge,L.__webglTexture=de[ge].texture}return ee}function ne(L,T,ee){let he=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=35866),T.isData3DTexture&&(he=32879);const de=N(L,T),ge=T.source;t.bindTexture(he,L.__webglTexture,33984+ee);const Te=n.get(ge);if(ge.version!==Te.__version||de===!0){t.activeTexture(33984+ee),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const xe=b(T)&&x(T.image)===!1;let se=_(T.image,xe,!1,u);se=cn(T,se);const De=x(se)||o,Me=r.convert(T.format,T.encoding);let Ie=r.convert(T.type),Ae=M(T.internalFormat,Me,Ie,T.encoding,T.isVideoTexture);me(he,T,De);let Se;const Qe=T.mipmaps,ft=o&&T.isVideoTexture!==!0,St=Te.__version===void 0||de===!0,I=S(T,se,De);if(T.isDepthTexture)Ae=6402,o?T.type===qn?Ae=36012:T.type===oi?Ae=33190:T.type===ji?Ae=35056:Ae=33189:T.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ui&&Ae===6402&&T.type!==eh&&T.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=oi,Ie=r.convert(T.type)),T.format===Qi&&Ae===6402&&(Ae=34041,T.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ji,Ie=r.convert(T.type))),St&&(ft?t.texStorage2D(3553,1,Ae,se.width,se.height):t.texImage2D(3553,0,Ae,se.width,se.height,0,Me,Ie,null));else if(T.isDataTexture)if(Qe.length>0&&De){ft&&St&&t.texStorage2D(3553,I,Ae,Qe[0].width,Qe[0].height);for(let Q=0,oe=Qe.length;Q<oe;Q++)Se=Qe[Q],ft?t.texSubImage2D(3553,Q,0,0,Se.width,Se.height,Me,Ie,Se.data):t.texImage2D(3553,Q,Ae,Se.width,Se.height,0,Me,Ie,Se.data);T.generateMipmaps=!1}else ft?(St&&t.texStorage2D(3553,I,Ae,se.width,se.height),t.texSubImage2D(3553,0,0,0,se.width,se.height,Me,Ie,se.data)):t.texImage2D(3553,0,Ae,se.width,se.height,0,Me,Ie,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ft&&St&&t.texStorage3D(35866,I,Ae,Qe[0].width,Qe[0].height,se.depth);for(let Q=0,oe=Qe.length;Q<oe;Q++)Se=Qe[Q],T.format!==sn?Me!==null?ft?t.compressedTexSubImage3D(35866,Q,0,0,0,Se.width,Se.height,se.depth,Me,Se.data,0,0):t.compressedTexImage3D(35866,Q,Ae,Se.width,Se.height,se.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage3D(35866,Q,0,0,0,Se.width,Se.height,se.depth,Me,Ie,Se.data):t.texImage3D(35866,Q,Ae,Se.width,Se.height,se.depth,0,Me,Ie,Se.data)}else{ft&&St&&t.texStorage2D(3553,I,Ae,Qe[0].width,Qe[0].height);for(let Q=0,oe=Qe.length;Q<oe;Q++)Se=Qe[Q],T.format!==sn?Me!==null?ft?t.compressedTexSubImage2D(3553,Q,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(3553,Q,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(3553,Q,0,0,Se.width,Se.height,Me,Ie,Se.data):t.texImage2D(3553,Q,Ae,Se.width,Se.height,0,Me,Ie,Se.data)}else if(T.isDataArrayTexture)ft?(St&&t.texStorage3D(35866,I,Ae,se.width,se.height,se.depth),t.texSubImage3D(35866,0,0,0,0,se.width,se.height,se.depth,Me,Ie,se.data)):t.texImage3D(35866,0,Ae,se.width,se.height,se.depth,0,Me,Ie,se.data);else if(T.isData3DTexture)ft?(St&&t.texStorage3D(32879,I,Ae,se.width,se.height,se.depth),t.texSubImage3D(32879,0,0,0,0,se.width,se.height,se.depth,Me,Ie,se.data)):t.texImage3D(32879,0,Ae,se.width,se.height,se.depth,0,Me,Ie,se.data);else if(T.isFramebufferTexture){if(St)if(ft)t.texStorage2D(3553,I,Ae,se.width,se.height);else{let Q=se.width,oe=se.height;for(let ve=0;ve<I;ve++)t.texImage2D(3553,ve,Ae,Q,oe,0,Me,Ie,null),Q>>=1,oe>>=1}}else if(Qe.length>0&&De){ft&&St&&t.texStorage2D(3553,I,Ae,Qe[0].width,Qe[0].height);for(let Q=0,oe=Qe.length;Q<oe;Q++)Se=Qe[Q],ft?t.texSubImage2D(3553,Q,0,0,Me,Ie,Se):t.texImage2D(3553,Q,Ae,Me,Ie,Se);T.generateMipmaps=!1}else ft?(St&&t.texStorage2D(3553,I,Ae,se.width,se.height),t.texSubImage2D(3553,0,0,0,Me,Ie,se)):t.texImage2D(3553,0,Ae,Me,Ie,se);w(T,De)&&E(he),Te.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ue(L,T,ee){if(T.image.length!==6)return;const he=N(L,T),de=T.source;t.bindTexture(34067,L.__webglTexture,33984+ee);const ge=n.get(de);if(de.version!==ge.__version||he===!0){t.activeTexture(33984+ee),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const Te=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,se=[];for(let Q=0;Q<6;Q++)!Te&&!xe?se[Q]=_(T.image[Q],!1,!0,c):se[Q]=xe?T.image[Q].image:T.image[Q],se[Q]=cn(T,se[Q]);const De=se[0],Me=x(De)||o,Ie=r.convert(T.format,T.encoding),Ae=r.convert(T.type),Se=M(T.internalFormat,Ie,Ae,T.encoding),Qe=o&&T.isVideoTexture!==!0,ft=ge.__version===void 0||he===!0;let St=S(T,De,Me);me(34067,T,Me);let I;if(Te){Qe&&ft&&t.texStorage2D(34067,St,Se,De.width,De.height);for(let Q=0;Q<6;Q++){I=se[Q].mipmaps;for(let oe=0;oe<I.length;oe++){const ve=I[oe];T.format!==sn?Ie!==null?Qe?t.compressedTexSubImage2D(34069+Q,oe,0,0,ve.width,ve.height,Ie,ve.data):t.compressedTexImage2D(34069+Q,oe,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(34069+Q,oe,0,0,ve.width,ve.height,Ie,Ae,ve.data):t.texImage2D(34069+Q,oe,Se,ve.width,ve.height,0,Ie,Ae,ve.data)}}}else{I=T.mipmaps,Qe&&ft&&(I.length>0&&St++,t.texStorage2D(34067,St,Se,se[0].width,se[0].height));for(let Q=0;Q<6;Q++)if(xe){Qe?t.texSubImage2D(34069+Q,0,0,0,se[Q].width,se[Q].height,Ie,Ae,se[Q].data):t.texImage2D(34069+Q,0,Se,se[Q].width,se[Q].height,0,Ie,Ae,se[Q].data);for(let oe=0;oe<I.length;oe++){const be=I[oe].image[Q].image;Qe?t.texSubImage2D(34069+Q,oe+1,0,0,be.width,be.height,Ie,Ae,be.data):t.texImage2D(34069+Q,oe+1,Se,be.width,be.height,0,Ie,Ae,be.data)}}else{Qe?t.texSubImage2D(34069+Q,0,0,0,Ie,Ae,se[Q]):t.texImage2D(34069+Q,0,Se,Ie,Ae,se[Q]);for(let oe=0;oe<I.length;oe++){const ve=I[oe];Qe?t.texSubImage2D(34069+Q,oe+1,0,0,Ie,Ae,ve.image[Q]):t.texImage2D(34069+Q,oe+1,Se,Ie,Ae,ve.image[Q])}}}w(T,Me)&&E(34067),ge.__version=de.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function _e(L,T,ee,he,de){const ge=r.convert(ee.format,ee.encoding),Te=r.convert(ee.type),xe=M(ee.internalFormat,ge,Te,ee.encoding);n.get(T).__hasExternalTextures||(de===32879||de===35866?t.texImage3D(de,0,xe,T.width,T.height,T.depth,0,ge,Te,null):t.texImage2D(de,0,xe,T.width,T.height,0,ge,Te,null)),t.bindFramebuffer(36160,L),ut(T)?h.framebufferTexture2DMultisampleEXT(36160,he,de,n.get(ee).__webglTexture,0,dt(T)):(de===3553||de>=34069&&de<=34074)&&s.framebufferTexture2D(36160,he,de,n.get(ee).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(L,T,ee){if(s.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let he=33189;if(ee||ut(T)){const de=T.depthTexture;de&&de.isDepthTexture&&(de.type===qn?he=36012:de.type===oi&&(he=33190));const ge=dt(T);ut(T)?h.renderbufferStorageMultisampleEXT(36161,ge,he,T.width,T.height):s.renderbufferStorageMultisample(36161,ge,he,T.width,T.height)}else s.renderbufferStorage(36161,he,T.width,T.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const he=dt(T);ee&&ut(T)===!1?s.renderbufferStorageMultisample(36161,he,35056,T.width,T.height):ut(T)?h.renderbufferStorageMultisampleEXT(36161,he,35056,T.width,T.height):s.renderbufferStorage(36161,34041,T.width,T.height),s.framebufferRenderbuffer(36160,33306,36161,L)}else{const he=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let de=0;de<he.length;de++){const ge=he[de],Te=r.convert(ge.format,ge.encoding),xe=r.convert(ge.type),se=M(ge.internalFormat,Te,xe,ge.encoding),De=dt(T);ee&&ut(T)===!1?s.renderbufferStorageMultisample(36161,De,se,T.width,T.height):ut(T)?h.renderbufferStorageMultisampleEXT(36161,De,se,T.width,T.height):s.renderbufferStorage(36161,se,T.width,T.height)}}s.bindRenderbuffer(36161,null)}function Pe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ie(T.depthTexture,0);const he=n.get(T.depthTexture).__webglTexture,de=dt(T);if(T.depthTexture.format===ui)ut(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,he,0,de):s.framebufferTexture2D(36160,36096,3553,he,0);else if(T.depthTexture.format===Qi)ut(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,he,0,de):s.framebufferTexture2D(36160,33306,3553,he,0);else throw new Error("Unknown depthTexture format")}function qe(L){const T=n.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Pe(T.__webglFramebuffer,L)}else if(ee){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(36160,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]=s.createRenderbuffer(),we(T.__webglDepthbuffer[he],L,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),we(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function mt(L,T,ee){const he=n.get(L);T!==void 0&&_e(he.__webglFramebuffer,L,L.texture,36064,3553),ee!==void 0&&qe(L)}function ln(L){const T=L.texture,ee=n.get(L),he=n.get(T);L.addEventListener("dispose",q),L.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,a.memory.textures++);const de=L.isWebGLCubeRenderTarget===!0,ge=L.isWebGLMultipleRenderTargets===!0,Te=x(L)||o;if(de){ee.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)ee.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(ee.__webglFramebuffer=s.createFramebuffer(),ge)if(i.drawBuffers){const xe=L.texture;for(let se=0,De=xe.length;se<De;se++){const Me=n.get(xe[se]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&ut(L)===!1){const xe=ge?T:[T];ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ee.__webglMultisampledFramebuffer);for(let se=0;se<xe.length;se++){const De=xe[se];ee.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(36161,ee.__webglColorRenderbuffer[se]);const Me=r.convert(De.format,De.encoding),Ie=r.convert(De.type),Ae=M(De.internalFormat,Me,Ie,De.encoding,L.isXRRenderTarget===!0),Se=dt(L);s.renderbufferStorageMultisample(36161,Se,Ae,L.width,L.height),s.framebufferRenderbuffer(36160,36064+se,36161,ee.__webglColorRenderbuffer[se])}s.bindRenderbuffer(36161,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),we(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(de){t.bindTexture(34067,he.__webglTexture),me(34067,T,Te);for(let xe=0;xe<6;xe++)_e(ee.__webglFramebuffer[xe],L,T,36064,34069+xe);w(T,Te)&&E(34067),t.unbindTexture()}else if(ge){const xe=L.texture;for(let se=0,De=xe.length;se<De;se++){const Me=xe[se],Ie=n.get(Me);t.bindTexture(3553,Ie.__webglTexture),me(3553,Me,Te),_e(ee.__webglFramebuffer,L,Me,36064+se,3553),w(Me,Te)&&E(3553)}t.unbindTexture()}else{let xe=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?xe=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,he.__webglTexture),me(xe,T,Te),_e(ee.__webglFramebuffer,L,T,36064,xe),w(T,Te)&&E(xe),t.unbindTexture()}L.depthBuffer&&qe(L)}function Vt(L){const T=x(L)||o,ee=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let he=0,de=ee.length;he<de;he++){const ge=ee[he];if(w(ge,T)){const Te=L.isWebGLCubeRenderTarget?34067:3553,xe=n.get(ge).__webglTexture;t.bindTexture(Te,xe),E(Te),t.unbindTexture()}}}function It(L){if(o&&L.samples>0&&ut(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],ee=L.width,he=L.height;let de=16384;const ge=[],Te=L.stencilBuffer?33306:36096,xe=n.get(L),se=L.isWebGLMultipleRenderTargets===!0;if(se)for(let De=0;De<T.length;De++)t.bindFramebuffer(36160,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+De,36161,null),t.bindFramebuffer(36160,xe.__webglFramebuffer),s.framebufferTexture2D(36009,36064+De,3553,null,0);t.bindFramebuffer(36008,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,xe.__webglFramebuffer);for(let De=0;De<T.length;De++){ge.push(36064+De),L.depthBuffer&&ge.push(Te);const Me=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Me===!1&&(L.depthBuffer&&(de|=256),L.stencilBuffer&&(de|=1024)),se&&s.framebufferRenderbuffer(36008,36064,36161,xe.__webglColorRenderbuffer[De]),Me===!0&&(s.invalidateFramebuffer(36008,[Te]),s.invalidateFramebuffer(36009,[Te])),se){const Ie=n.get(T[De]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Ie,0)}s.blitFramebuffer(0,0,ee,he,0,0,ee,he,de,9728),m&&s.invalidateFramebuffer(36008,ge)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),se)for(let De=0;De<T.length;De++){t.bindFramebuffer(36160,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+De,36161,xe.__webglColorRenderbuffer[De]);const Me=n.get(T[De]).__webglTexture;t.bindFramebuffer(36160,xe.__webglFramebuffer),s.framebufferTexture2D(36009,36064+De,3553,Me,0)}t.bindFramebuffer(36009,xe.__webglMultisampledFramebuffer)}}function dt(L){return Math.min(f,L.samples)}function ut(L){const T=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function mn(L){const T=a.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function cn(L,T){const ee=L.encoding,he=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===so||ee!==mi&&(ee===tt?o===!1?e.has("EXT_sRGB")===!0&&he===sn?(L.format=so,L.minFilter=$t,L.generateMipmaps=!1):T=ah.sRGBToLinear(T):(he!==sn||de!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ee)),T}this.allocateTextureUnit=H,this.resetTextureUnits=K,this.setTexture2D=ie,this.setTexture2DArray=ye,this.setTexture3D=U,this.setTextureCube=ae,this.rebindTextures=mt,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ut}function Yb(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===pi)return 5121;if(r===b_)return 32819;if(r===M_)return 32820;if(r===v_)return 5120;if(r===x_)return 5122;if(r===eh)return 5123;if(r===y_)return 5124;if(r===oi)return 5125;if(r===qn)return 5126;if(r===Rs)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===w_)return 6406;if(r===sn)return 6408;if(r===S_)return 6409;if(r===T_)return 6410;if(r===ui)return 6402;if(r===Qi)return 34041;if(r===so)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===E_)return 6403;if(r===A_)return 36244;if(r===L_)return 33319;if(r===C_)return 33320;if(r===R_)return 36249;if(r===oa||r===la||r===ca||r===ua)if(a===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===oa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===oa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===la)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ca)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ua)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hc||r===Vc||r===Wc||r===jc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Hc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===P_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$c||r===qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===$c)return a===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===qc)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xc||r===Yc||r===Kc||r===Zc||r===Jc||r===Qc||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===au||r===ou)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xc)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yc)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kc)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zc)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jc)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qc)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===eu)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tu)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nu)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===iu)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===su)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ru)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===au)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ou)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===fa)return a===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===D_||r===lu||r===cu||r===uu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===fa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ji?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Kb extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ci extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zb={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),v=this._getHandJoint(c,p);d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zb)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jb extends Ct{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:ui,u!==ui&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=oi),n===void 0&&u===Qi&&(n=ji),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1}}class Qb extends Si{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const p=t.getContextAttributes();let d=null,v=null;const y=[],_=[],x=new Set,b=new Map,w=new Bt;w.layers.enable(1),w.viewport=new at;const E=new Bt;E.layers.enable(2),E.viewport=new at;const M=[w,E],S=new Kb;S.layers.enable(1),S.layers.enable(2);let C=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let ae=y[U];return ae===void 0&&(ae=new Na,y[U]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(U){let ae=y[U];return ae===void 0&&(ae=new Na,y[U]=ae),ae.getGripSpace()},this.getHand=function(U){let ae=y[U];return ae===void 0&&(ae=new Na,y[U]=ae),ae.getHandSpace()};function q(U){const ae=_.indexOf(U.inputSource);if(ae===-1)return;const le=y[ae];le!==void 0&&le.dispatchEvent({type:U.type,data:U.inputSource})}function P(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",R);for(let U=0;U<y.length;U++){const ae=_[U];ae!==null&&(_[U]=null,y[U].disconnect(ae))}C=null,j=null,e.setRenderTarget(d),m=null,h=null,f=null,i=null,v=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",P),i.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:m}),v=new gi(m.framebufferWidth,m.framebufferHeight,{format:sn,type:pi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ae=null,le=null,z=null;p.depth&&(z=p.stencil?35056:33190,ae=p.stencil?Qi:ui,le=p.stencil?ji:oi);const me={colorFormat:32856,depthFormat:z,scaleFactor:r};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(me),i.updateRenderState({layers:[h]}),v=new gi(h.textureWidth,h.textureHeight,{format:sn,type:pi,depthTexture:new Jb(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const N=e.properties.get(v);N.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(U){for(let ae=0;ae<U.removed.length;ae++){const le=U.removed[ae],z=_.indexOf(le);z>=0&&(_[z]=null,y[z].disconnect(le))}for(let ae=0;ae<U.added.length;ae++){const le=U.added[ae];let z=_.indexOf(le);if(z===-1){for(let N=0;N<y.length;N++)if(N>=_.length){_.push(le),z=N;break}else if(_[N]===null){_[N]=le,z=N;break}if(z===-1)break}const me=y[z];me&&me.connect(le)}}const G=new k,Z=new k;function K(U,ae,le){G.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const z=G.distanceTo(Z),me=ae.projectionMatrix.elements,N=le.projectionMatrix.elements,ne=me[14]/(me[10]-1),ue=me[14]/(me[10]+1),_e=(me[9]+1)/me[5],we=(me[9]-1)/me[5],Pe=(me[8]-1)/me[0],qe=(N[8]+1)/N[0],mt=ne*Pe,ln=ne*qe,Vt=z/(-Pe+qe),It=Vt*-Pe;ae.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(It),U.translateZ(Vt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const dt=ne+Vt,ut=ue+Vt,mn=mt-It,cn=ln+(z-It),L=_e*ue/ut*dt,T=we*ue/ut*dt;U.projectionMatrix.makePerspective(mn,cn,L,T,dt,ut)}function H(U,ae){ae===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(ae.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;S.near=E.near=w.near=U.near,S.far=E.far=w.far=U.far,(C!==S.near||j!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,j=S.far);const ae=U.parent,le=S.cameras;H(S,ae);for(let me=0;me<le.length;me++)H(le[me],ae);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),U.matrix.copy(S.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const z=U.children;for(let me=0,N=z.length;me<N;me++)z[me].updateMatrixWorld(!0);le.length===2?K(S,w,E):S.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.getPlanes=function(){return x};let re=null;function ie(U,ae){if(u=ae.getViewerPose(c||a),g=ae,u!==null){const le=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let z=!1;le.length!==S.cameras.length&&(S.cameras.length=0,z=!0);for(let me=0;me<le.length;me++){const N=le[me];let ne=null;if(m!==null)ne=m.getViewport(N);else{const _e=f.getViewSubImage(h,N);ne=_e.viewport,me===0&&(e.setRenderTargetTextures(v,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(v))}let ue=M[me];ue===void 0&&(ue=new Bt,ue.layers.enable(me),ue.viewport=new at,M[me]=ue),ue.matrix.fromArray(N.transform.matrix),ue.projectionMatrix.fromArray(N.projectionMatrix),ue.viewport.set(ne.x,ne.y,ne.width,ne.height),me===0&&S.matrix.copy(ue.matrix),z===!0&&S.cameras.push(ue)}}for(let le=0;le<y.length;le++){const z=_[le],me=y[le];z!==null&&me!==void 0&&me.update(z,ae,c||a)}if(re&&re(U,ae),ae.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ae.detectedPlanes});let le=null;for(const z of x)ae.detectedPlanes.has(z)||(le===null&&(le=[]),le.push(z));if(le!==null)for(const z of le)x.delete(z),b.delete(z),n.dispatchEvent({type:"planeremoved",data:z});for(const z of ae.detectedPlanes)if(!x.has(z))x.add(z),b.set(z,ae.lastChangedTime),n.dispatchEvent({type:"planeadded",data:z});else{const me=b.get(z);z.lastChangedTime>me&&(b.set(z,z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:z}))}}g=null}const ye=new gh;ye.setAnimationLoop(ie),this.setAnimationLoop=function(U){re=U},this.dispose=function(){}}}function e1(s,e){function t(p,d){d.color.getRGB(p.fogColor.value,dh(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,v,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),c(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,_)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),g(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,v,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Zt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Zt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=s.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,v,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=y*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Zt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function t1(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(g(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",d));const b=_.program;n.updateUBOMapping(y,b);const w=e.render.frame;r[y.id]!==w&&(h(y),r[y.id]=w)}function u(y){const _=f();y.__bindingPointIndex=_;const x=s.createBuffer(),b=y.__size,w=y.usage;return s.bindBuffer(35345,x),s.bufferData(35345,b,w),s.bindBuffer(35345,null),s.bindBufferBase(35345,_,x),x}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const _=i[y.id],x=y.uniforms,b=y.__cache;s.bindBuffer(35345,_);for(let w=0,E=x.length;w<E;w++){const M=x[w];if(m(M,w,b)===!0){const S=M.__offset,C=Array.isArray(M.value)?M.value:[M.value];let j=0;for(let q=0;q<C.length;q++){const P=C[q],R=p(P);typeof P=="number"?(M.__data[0]=P,s.bufferSubData(35345,S+j,M.__data)):P.isMatrix3?(M.__data[0]=P.elements[0],M.__data[1]=P.elements[1],M.__data[2]=P.elements[2],M.__data[3]=P.elements[0],M.__data[4]=P.elements[3],M.__data[5]=P.elements[4],M.__data[6]=P.elements[5],M.__data[7]=P.elements[0],M.__data[8]=P.elements[6],M.__data[9]=P.elements[7],M.__data[10]=P.elements[8],M.__data[11]=P.elements[0]):(P.toArray(M.__data,j),j+=R.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,S,M.__data)}}s.bindBuffer(35345,null)}function m(y,_,x){const b=y.value;if(x[_]===void 0){if(typeof b=="number")x[_]=b;else{const w=Array.isArray(b)?b:[b],E=[];for(let M=0;M<w.length;M++)E.push(w[M].clone());x[_]=E}return!0}else if(typeof b=="number"){if(x[_]!==b)return x[_]=b,!0}else{const w=Array.isArray(x[_])?x[_]:[x[_]],E=Array.isArray(b)?b:[b];for(let M=0;M<w.length;M++){const S=w[M];if(S.equals(E[M])===!1)return S.copy(E[M]),!0}}return!1}function g(y){const _=y.uniforms;let x=0;const b=16;let w=0;for(let E=0,M=_.length;E<M;E++){const S=_[E],C={boundary:0,storage:0},j=Array.isArray(S.value)?S.value:[S.value];for(let q=0,P=j.length;q<P;q++){const R=j[q],G=p(R);C.boundary+=G.boundary,C.storage+=G.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,E>0){w=x%b;const q=b-w;w!==0&&q-C.boundary<0&&(x+=b-w,S.__offset=x)}x+=C.storage}return w=x%b,w>0&&(x+=b-w),y.__size=x,y.__cache={},this}function p(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function d(y){const _=y.target;_.removeEventListener("dispose",d);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function v(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:v}}function n1(){const s=ks("canvas");return s.style.display="block",s}function Po(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:n1(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mi,this.useLegacyLights=!0,this.toneMapping=Fn,this.toneMappingExposure=1;const p=this;let d=!1,v=0,y=0,_=null,x=-1,b=null;const w=new at,E=new at;let M=null,S=e.width,C=e.height,j=1,q=null,P=null;const R=new at(0,0,S,C),G=new at(0,0,S,C);let Z=!1;const K=new Ao;let H=!1,re=!1,ie=null;const ye=new $e,U=new k,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return _===null?j:1}let z=t;function me(A,V){for(let J=0;J<A.length;J++){const B=A[J],te=e.getContext(B,V);if(te!==null)return te}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mo}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Se,!1),z===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),z=me(V,A),z===null)throw me(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let N,ne,ue,_e,we,Pe,qe,mt,ln,Vt,It,dt,ut,mn,cn,L,T,ee,he,de,ge,Te,xe,se;function De(){N=new dy(z),ne=new oy(z,N,s),N.init(ne),Te=new Yb(z,N,ne),ue=new qb(z,N,ne),_e=new gy,we=new Ib,Pe=new Xb(z,N,ue,we,ne,Te,_e),qe=new cy(p),mt=new hy(p),ln=new Tv(z,ne),xe=new ry(z,N,ln,ne),Vt=new py(z,ln,_e,xe),It=new yy(z,Vt,ln,_e),he=new xy(z,ne,Pe),L=new ly(we),dt=new Db(p,qe,mt,N,ne,xe,L),ut=new e1(p,we),mn=new Fb,cn=new Gb(N,ne),ee=new sy(p,qe,mt,ue,It,u,a),T=new $b(p,It,ne),se=new t1(z,_e,ne,ue),de=new ay(z,N,_e,ne),ge=new my(z,N,_e,ne),_e.programs=dt.programs,p.capabilities=ne,p.extensions=N,p.properties=we,p.renderLists=mn,p.shadowMap=T,p.state=ue,p.info=_e}De();const Me=new Qb(p,z);this.xr=Me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=N.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=N.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(S,C,!1))},this.getSize=function(A){return A.set(S,C)},this.setSize=function(A,V,J=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=A,C=V,e.width=Math.floor(A*j),e.height=Math.floor(V*j),J===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(S*j,C*j).floor()},this.setDrawingBufferSize=function(A,V,J){S=A,C=V,j=J,e.width=Math.floor(A*J),e.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,V,J,B){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,V,J,B),ue.viewport(w.copy(R).multiplyScalar(j).floor())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,V,J,B){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,V,J,B),ue.scissor(E.copy(G).multiplyScalar(j).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){ue.setScissorTest(Z=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){P=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,V=!0,J=!0){let B=0;A&&(B|=16384),V&&(B|=256),J&&(B|=1024),z.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),mn.dispose(),cn.dispose(),we.dispose(),qe.dispose(),mt.dispose(),It.dispose(),xe.dispose(),se.dispose(),dt.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",oe),Me.removeEventListener("sessionend",ve),ie&&(ie.dispose(),ie=null),be.stop()};function Ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const A=_e.autoReset,V=T.enabled,J=T.autoUpdate,B=T.needsUpdate,te=T.type;De(),_e.autoReset=A,T.enabled=V,T.autoUpdate=J,T.needsUpdate=B,T.type=te}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){const V=A.target;V.removeEventListener("dispose",Qe),ft(V)}function ft(A){St(A),we.remove(A)}function St(A){const V=we.get(A).programs;V!==void 0&&(V.forEach(function(J){dt.releaseProgram(J)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,B,te,Ee){V===null&&(V=ae);const Fe=te.isMesh&&te.matrixWorld.determinant()<0,He=Rh(A,V,J,B,te);ue.setMaterial(B,Fe);let je=J.index,et=1;B.wireframe===!0&&(je=Vt.getWireframeAttribute(J),et=2);const Xe=J.drawRange,Ye=J.attributes.position;let gt=Xe.start*et,qt=(Xe.start+Xe.count)*et;Ee!==null&&(gt=Math.max(gt,Ee.start*et),qt=Math.min(qt,(Ee.start+Ee.count)*et)),je!==null?(gt=Math.max(gt,0),qt=Math.min(qt,je.count)):Ye!=null&&(gt=Math.max(gt,0),qt=Math.min(qt,Ye.count));const Sn=qt-gt;if(Sn<0||Sn===1/0)return;xe.setup(te,B,He,J,je);let Zn,_t=de;if(je!==null&&(Zn=ln.get(je),_t=ge,_t.setIndex(Zn)),te.isMesh)B.wireframe===!0?(ue.setLineWidth(B.wireframeLinewidth*le()),_t.setMode(1)):_t.setMode(4);else if(te.isLine){let Ke=B.linewidth;Ke===void 0&&(Ke=1),ue.setLineWidth(Ke*le()),te.isLineSegments?_t.setMode(1):te.isLineLoop?_t.setMode(2):_t.setMode(3)}else te.isPoints?_t.setMode(0):te.isSprite&&_t.setMode(4);if(te.isInstancedMesh)_t.renderInstances(gt,Sn,te.count);else if(J.isInstancedBufferGeometry){const Ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Or=Math.min(J.instanceCount,Ke);_t.renderInstances(gt,Sn,Or)}else _t.render(gt,Sn)},this.compile=function(A,V){function J(B,te,Ee){B.transparent===!0&&B.side===In&&B.forceSinglePass===!1?(B.side=Zt,B.needsUpdate=!0,Qt(B,te,Ee),B.side=On,B.needsUpdate=!0,Qt(B,te,Ee),B.side=In):Qt(B,te,Ee)}h=cn.get(A),h.init(),g.push(h),A.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(p.useLegacyLights),A.traverse(function(B){const te=B.material;if(te)if(Array.isArray(te))for(let Ee=0;Ee<te.length;Ee++){const Fe=te[Ee];J(Fe,A,B)}else J(te,A,B)}),g.pop(),h=null};let I=null;function Q(A){I&&I(A)}function oe(){be.stop()}function ve(){be.start()}const be=new gh;be.setAnimationLoop(Q),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(A){I=A,Me.setAnimationLoop(A),A===null?be.stop():be.start()},Me.addEventListener("sessionstart",oe),Me.addEventListener("sessionend",ve),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,V,_),h=cn.get(A,g.length),h.init(),g.push(h),ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(ye),re=this.localClippingEnabled,H=L.init(this.clippingPlanes,re),f=mn.get(A,m.length),f.init(),m.push(f),ot(A,V,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(q,P),H===!0&&L.beginShadows();const J=h.state.shadowsArray;if(T.render(J,A,V),H===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,A),h.setupLights(p.useLegacyLights),V.isArrayCamera){const B=V.cameras;for(let te=0,Ee=B.length;te<Ee;te++){const Fe=B[te];Tt(f,A,Fe,Fe.viewport)}}else Tt(f,A,V);_!==null&&(Pe.updateMultisampleRenderTarget(_),Pe.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(p,A,V),xe.resetDefaultState(),x=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ot(A,V,J,B){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){B&&U.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const Fe=It.update(A),He=A.material;He.visible&&f.push(A,Fe,He,J,U.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==_e.render.frame&&(A.skeleton.update(),A.skeleton.frame=_e.render.frame),!A.frustumCulled||K.intersectsObject(A))){B&&U.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const Fe=It.update(A),He=A.material;if(Array.isArray(He)){const je=Fe.groups;for(let et=0,Xe=je.length;et<Xe;et++){const Ye=je[et],gt=He[Ye.materialIndex];gt&&gt.visible&&f.push(A,Fe,gt,J,U.z,Ye)}}else He.visible&&f.push(A,Fe,He,J,U.z,null)}}const Ee=A.children;for(let Fe=0,He=Ee.length;Fe<He;Fe++)ot(Ee[Fe],V,J,B)}function Tt(A,V,J,B){const te=A.opaque,Ee=A.transmissive,Fe=A.transparent;h.setupLightsView(J),H===!0&&L.setGlobalState(p.clippingPlanes,J),Ee.length>0&&kt(te,V,J),B&&ue.viewport(w.copy(B)),te.length>0&&gn(te,V,J),Ee.length>0&&gn(Ee,V,J),Fe.length>0&&gn(Fe,V,J),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function kt(A,V,J){const B=ne.isWebGL2;ie===null&&(ie=new gi(1024,1024,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?Rs:pi,minFilter:di,samples:B&&r===!0?4:0}));const te=p.getRenderTarget();p.setRenderTarget(ie),p.clear();const Ee=p.toneMapping;p.toneMapping=Fn,gn(A,V,J),p.toneMapping=Ee,Pe.updateMultisampleRenderTarget(ie),Pe.updateRenderTargetMipmap(ie),p.setRenderTarget(te)}function gn(A,V,J){const B=V.isScene===!0?V.overrideMaterial:null;for(let te=0,Ee=A.length;te<Ee;te++){const Fe=A[te],He=Fe.object,je=Fe.geometry,et=B===null?Fe.material:B,Xe=Fe.group;He.layers.test(J.layers)&&pt(He,V,J,je,et,Xe)}}function pt(A,V,J,B,te,Ee){A.onBeforeRender(p,V,J,B,te,Ee),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(p,V,J,B,A,Ee),te.transparent===!0&&te.side===In&&te.forceSinglePass===!1?(te.side=Zt,te.needsUpdate=!0,p.renderBufferDirect(J,V,B,te,A,Ee),te.side=On,te.needsUpdate=!0,p.renderBufferDirect(J,V,B,te,A,Ee),te.side=In):p.renderBufferDirect(J,V,B,te,A,Ee),A.onAfterRender(p,V,J,B,te,Ee)}function Qt(A,V,J){V.isScene!==!0&&(V=ae);const B=we.get(A),te=h.state.lights,Ee=h.state.shadowsArray,Fe=te.state.version,He=dt.getParameters(A,te.state,Ee,V,J),je=dt.getProgramCacheKey(He);let et=B.programs;B.environment=A.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(A.isMeshStandardMaterial?mt:qe).get(A.envMap||B.environment),et===void 0&&(A.addEventListener("dispose",Qe),et=new Map,B.programs=et);let Xe=et.get(je);if(Xe!==void 0){if(B.currentProgram===Xe&&B.lightsStateVersion===Fe)return _n(A,He),Xe}else He.uniforms=dt.getUniforms(A),A.onBuild(J,He,p),A.onBeforeCompile(He,p),Xe=dt.acquireProgram(He,je),et.set(je,Xe),B.uniforms=He.uniforms;const Ye=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=L.uniform),_n(A,He),B.needsLights=Dh(A),B.lightsStateVersion=Fe,B.needsLights&&(Ye.ambientLightColor.value=te.state.ambient,Ye.lightProbe.value=te.state.probe,Ye.directionalLights.value=te.state.directional,Ye.directionalLightShadows.value=te.state.directionalShadow,Ye.spotLights.value=te.state.spot,Ye.spotLightShadows.value=te.state.spotShadow,Ye.rectAreaLights.value=te.state.rectArea,Ye.ltc_1.value=te.state.rectAreaLTC1,Ye.ltc_2.value=te.state.rectAreaLTC2,Ye.pointLights.value=te.state.point,Ye.pointLightShadows.value=te.state.pointShadow,Ye.hemisphereLights.value=te.state.hemi,Ye.directionalShadowMap.value=te.state.directionalShadowMap,Ye.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ye.spotShadowMap.value=te.state.spotShadowMap,Ye.spotLightMatrix.value=te.state.spotLightMatrix,Ye.spotLightMap.value=te.state.spotLightMap,Ye.pointShadowMap.value=te.state.pointShadowMap,Ye.pointShadowMatrix.value=te.state.pointShadowMatrix);const gt=Xe.getUniforms(),qt=Mr.seqWithValue(gt.seq,Ye);return B.currentProgram=Xe,B.uniformsList=qt,Xe}function _n(A,V){const J=we.get(A);J.outputEncoding=V.outputEncoding,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Rh(A,V,J,B,te){V.isScene!==!0&&(V=ae),Pe.resetTextureUnits();const Ee=V.fog,Fe=B.isMeshStandardMaterial?V.environment:null,He=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:mi,je=(B.isMeshStandardMaterial?mt:qe).get(B.envMap||Fe),et=B.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!B.normalMap&&!!J.attributes.tangent,Ye=!!J.morphAttributes.position,gt=!!J.morphAttributes.normal,qt=!!J.morphAttributes.color,Sn=B.toneMapped?p.toneMapping:Fn,Zn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=Zn!==void 0?Zn.length:0,Ke=we.get(B),Or=h.state.lights;if(H===!0&&(re===!0||A!==b)){const Xt=A===b&&B.id===x;L.setState(B,A,Xt)}let Et=!1;B.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Or.state.version||Ke.outputEncoding!==He||te.isInstancedMesh&&Ke.instancing===!1||!te.isInstancedMesh&&Ke.instancing===!0||te.isSkinnedMesh&&Ke.skinning===!1||!te.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==je||B.fog===!0&&Ke.fog!==Ee||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==L.numPlanes||Ke.numIntersection!==L.numIntersection)||Ke.vertexAlphas!==et||Ke.vertexTangents!==Xe||Ke.morphTargets!==Ye||Ke.morphNormals!==gt||Ke.morphColors!==qt||Ke.toneMapping!==Sn||ne.isWebGL2===!0&&Ke.morphTargetsCount!==_t)&&(Et=!0):(Et=!0,Ke.__version=B.version);let Jn=Ke.currentProgram;Et===!0&&(Jn=Qt(B,V,te));let Bo=!1,cs=!1,zr=!1;const Ft=Jn.getUniforms(),Qn=Ke.uniforms;if(ue.useProgram(Jn.program)&&(Bo=!0,cs=!0,zr=!0),B.id!==x&&(x=B.id,cs=!0),Bo||b!==A){if(Ft.setValue(z,"projectionMatrix",A.projectionMatrix),ne.logarithmicDepthBuffer&&Ft.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,cs=!0,zr=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Xt=Ft.map.cameraPosition;Xt!==void 0&&Xt.setValue(z,U.setFromMatrixPosition(A.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ft.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||te.isSkinnedMesh)&&Ft.setValue(z,"viewMatrix",A.matrixWorldInverse)}if(te.isSkinnedMesh){Ft.setOptional(z,te,"bindMatrix"),Ft.setOptional(z,te,"bindMatrixInverse");const Xt=te.skeleton;Xt&&(ne.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ft.setValue(z,"boneTexture",Xt.boneTexture,Pe),Ft.setValue(z,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ur=J.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0&&ne.isWebGL2===!0)&&he.update(te,J,Jn),(cs||Ke.receiveShadow!==te.receiveShadow)&&(Ke.receiveShadow=te.receiveShadow,Ft.setValue(z,"receiveShadow",te.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Qn.envMap.value=je,Qn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),cs&&(Ft.setValue(z,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&Ph(Qn,zr),Ee&&B.fog===!0&&ut.refreshFogUniforms(Qn,Ee),ut.refreshMaterialUniforms(Qn,B,j,C,ie),Mr.upload(z,Ke.uniformsList,Qn,Pe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mr.upload(z,Ke.uniformsList,Qn,Pe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ft.setValue(z,"center",te.center),Ft.setValue(z,"modelViewMatrix",te.modelViewMatrix),Ft.setValue(z,"normalMatrix",te.normalMatrix),Ft.setValue(z,"modelMatrix",te.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Xt=B.uniformsGroups;for(let Br=0,Ih=Xt.length;Br<Ih;Br++)if(ne.isWebGL2){const Go=Xt[Br];se.update(Go,Jn),se.bind(Go,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function Ph(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Dh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,V,J){we.get(A.texture).__webglTexture=V,we.get(A.depthTexture).__webglTexture=J;const B=we.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=J===void 0,B.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const J=we.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){_=A,v=V,y=J;let B=!0,te=null,Ee=!1,Fe=!1;if(A){const je=we.get(A);je.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),B=!1):je.__webglFramebuffer===void 0?Pe.setupRenderTarget(A):je.__hasExternalTextures&&Pe.rebindTextures(A,we.get(A.texture).__webglTexture,we.get(A.depthTexture).__webglTexture);const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Fe=!0);const Xe=we.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(te=Xe[V],Ee=!0):ne.isWebGL2&&A.samples>0&&Pe.useMultisampledRTT(A)===!1?te=we.get(A).__webglMultisampledFramebuffer:te=Xe,w.copy(A.viewport),E.copy(A.scissor),M=A.scissorTest}else w.copy(R).multiplyScalar(j).floor(),E.copy(G).multiplyScalar(j).floor(),M=Z;if(ue.bindFramebuffer(36160,te)&&ne.drawBuffers&&B&&ue.drawBuffers(A,te),ue.viewport(w),ue.scissor(E),ue.setScissorTest(M),Ee){const je=we.get(A.texture);z.framebufferTexture2D(36160,36064,34069+V,je.__webglTexture,J)}else if(Fe){const je=we.get(A.texture),et=V||0;z.framebufferTextureLayer(36160,36064,je.__webglTexture,J||0,et)}x=-1},this.readRenderTargetPixels=function(A,V,J,B,te,Ee,Fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){ue.bindFramebuffer(36160,He);try{const je=A.texture,et=je.format,Xe=je.type;if(et!==sn&&Te.convert(et)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Xe===Rs&&(N.has("EXT_color_buffer_half_float")||ne.isWebGL2&&N.has("EXT_color_buffer_float"));if(Xe!==pi&&Te.convert(Xe)!==z.getParameter(35738)&&!(Xe===qn&&(ne.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-B&&J>=0&&J<=A.height-te&&z.readPixels(V,J,B,te,Te.convert(et),Te.convert(Xe),Ee)}finally{const je=_!==null?we.get(_).__webglFramebuffer:null;ue.bindFramebuffer(36160,je)}}},this.copyFramebufferToTexture=function(A,V,J=0){const B=Math.pow(2,-J),te=Math.floor(V.image.width*B),Ee=Math.floor(V.image.height*B);Pe.setTexture2D(V,0),z.copyTexSubImage2D(3553,J,0,0,A.x,A.y,te,Ee),ue.unbindTexture()},this.copyTextureToTexture=function(A,V,J,B=0){const te=V.image.width,Ee=V.image.height,Fe=Te.convert(J.format),He=Te.convert(J.type);Pe.setTexture2D(J,0),z.pixelStorei(37440,J.flipY),z.pixelStorei(37441,J.premultiplyAlpha),z.pixelStorei(3317,J.unpackAlignment),V.isDataTexture?z.texSubImage2D(3553,B,A.x,A.y,te,Ee,Fe,He,V.image.data):V.isCompressedTexture?z.compressedTexSubImage2D(3553,B,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Fe,V.mipmaps[0].data):z.texSubImage2D(3553,B,A.x,A.y,Fe,He,V.image),B===0&&J.generateMipmaps&&z.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(A,V,J,B,te=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=A.max.x-A.min.x+1,Fe=A.max.y-A.min.y+1,He=A.max.z-A.min.z+1,je=Te.convert(B.format),et=Te.convert(B.type);let Xe;if(B.isData3DTexture)Pe.setTexture3D(B,0),Xe=32879;else if(B.isDataArrayTexture)Pe.setTexture2DArray(B,0),Xe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,B.flipY),z.pixelStorei(37441,B.premultiplyAlpha),z.pixelStorei(3317,B.unpackAlignment);const Ye=z.getParameter(3314),gt=z.getParameter(32878),qt=z.getParameter(3316),Sn=z.getParameter(3315),Zn=z.getParameter(32877),_t=J.isCompressedTexture?J.mipmaps[0]:J.image;z.pixelStorei(3314,_t.width),z.pixelStorei(32878,_t.height),z.pixelStorei(3316,A.min.x),z.pixelStorei(3315,A.min.y),z.pixelStorei(32877,A.min.z),J.isDataTexture||J.isData3DTexture?z.texSubImage3D(Xe,te,V.x,V.y,V.z,Ee,Fe,He,je,et,_t.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Xe,te,V.x,V.y,V.z,Ee,Fe,He,je,_t.data)):z.texSubImage3D(Xe,te,V.x,V.y,V.z,Ee,Fe,He,je,et,_t),z.pixelStorei(3314,Ye),z.pixelStorei(32878,gt),z.pixelStorei(3316,qt),z.pixelStorei(3315,Sn),z.pixelStorei(32877,Zn),te===0&&B.generateMipmaps&&z.generateMipmap(Xe),ue.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Pe.setTextureCube(A,0):A.isData3DTexture?Pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Pe.setTexture2DArray(A,0):Pe.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){v=0,y=0,_=null,ue.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Po.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(s){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!s}}});class i1 extends Po{}i1.prototype.isWebGL1Renderer=!0;class s1 extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class r1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=io,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new k;class Do{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Do(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yu=new k,Ku=new at,Zu=new at,a1=new k,Ju=new $e;class o1 extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new $e,this.bindMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Ku.fromBufferAttribute(i.attributes.skinIndex,e),Zu.fromBufferAttribute(i.attributes.skinWeight,e),Yu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Zu.getComponent(r);if(a!==0){const o=Ku.getComponent(r);Ju.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(a1.copy(Yu).applyMatrix4(Ju),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bh extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class l1 extends Ct{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Lt,u=Lt,f,h){super(null,a,o,l,c,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=new $e,c1=new $e;class Io{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:c1;Qu.multiplyMatrices(o,t[r]),Qu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Io(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ih(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new l1(t,e,e,sn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new bh),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ef extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tf=new $e,nf=new $e,hr=[],u1=new $e,vs=new rn;class f1 extends rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ef(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,u1)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,tf),nf.multiplyMatrices(n,tf),vs.matrixWorld=nf,vs.raycast(e,hr);for(let a=0,o=hr.length;a<o;a++){const l=hr[a];l.instanceId=r,l.object=this,t.push(l)}hr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ef(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Mh extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sf=new k,rf=new k,af=new $e,Oa=new Eo,dr=new rs;class ko extends ht{constructor(e=new Mn,t=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)sf.fromBufferAttribute(t,i-1),rf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sf.distanceTo(rf);e.setAttribute("lineDistance",new Nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,e.ray.intersectsSphere(dr)===!1)return;af.copy(i).invert(),Oa.copy(e.ray).applyMatrix4(af);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,f=new k,h=new k,m=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const v=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=v,x=y-1;_<x;_+=m){const b=g.getX(_),w=g.getX(_+1);if(c.fromBufferAttribute(d,b),u.fromBufferAttribute(d,w),Oa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),y=Math.min(d.count,a.start+a.count);for(let _=v,x=y-1;_<x;_+=m){if(c.fromBufferAttribute(d,_),u.fromBufferAttribute(d,_+1),Oa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const of=new k,lf=new k;class h1 extends ko{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)of.fromBufferAttribute(t,i),lf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+of.distanceTo(lf);e.setAttribute("lineDistance",new Nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d1 extends ko{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wh extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cf=new $e,oo=new Eo,pr=new rs,mr=new k;class p1 extends ht{constructor(e=new Mn,t=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=r,e.ray.intersectsSphere(pr)===!1)return;cf.copy(i).invert(),oo.copy(e.ray).applyMatrix4(cf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=h,p=m;g<p;g++){const d=c.getX(g);mr.fromBufferAttribute(f,d),uf(mr,d,l,i,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=h,p=m;g<p;g++)mr.fromBufferAttribute(f,g),uf(mr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uf(s,e,t,n,i,r,a){const o=oo.distanceSqToPoint(s);if(o<t){const l=new k;oo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Fo extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Fo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class m1 extends pn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Wn(s,e,t){return Sh(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function gr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sh(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function g1(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ff(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Th(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class zs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _1 extends zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hu:r=e,o=2*t-n;break;case du:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hu:a=e,l=2*n-t;break;case du:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,d=p*g,v=-h*d+2*h*p-h*g,y=(1+h)*d+(-1.5-2*h)*p+(-.5+h)*g+1,_=(-1-m)*d+(1.5+m)*p+.5*g,x=m*d-m*p;for(let b=0;b!==o;++b)r[b]=v*a[u+b]+y*a[c+b]+_*a[l+b]+x*a[f+b];return r}}class v1 extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}}class x1 extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new x1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new v1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Wn(n,r,a),this.values=Wn(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Sh(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Wn(this.times),t=Wn(this.values),n=this.getValueSize(),i=this.getInterpolation()===ha,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,h=f-n,m=f+n;for(let g=0;g!==n;++g){const p=t[f+g];if(p!==t[h+g]||p!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let m=0;m!==n;++m)t[h+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Wn(e,0,a),this.values=Wn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Wn(this.times,0),t=Wn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=es;class os extends wn{}os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ps;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class Eh extends wn{}Eh.prototype.ValueTypeName="color";class Fs extends wn{}Fs.prototype.ValueTypeName="number";class y1 extends zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}}class vi extends wn{InterpolantFactoryMethodLinear(e){return new y1(this.times,this.values,this.getValueSize(),e)}}vi.prototype.ValueTypeName="quaternion";vi.prototype.DefaultInterpolation=es;vi.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends wn{}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ps;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends wn{}Ns.prototype.ValueTypeName="vector";class b1{constructor(e,t=-1,n,i=I_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(w1(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=g1(l);l=ff(l,1,u),c=ff(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Fs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,m,g,p){if(m.length!==0){const d=[],v=[];Th(m,d,v,g),d.length!==0&&p.push(new f(h,d,v))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const m={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let p=0;p<h[g].morphTargets.length;p++)m[h[g].morphTargets[p]]=-1;for(const p in m){const d=[],v=[];for(let y=0;y!==h[g].morphTargets.length;++y){const _=h[g];d.push(_.time),v.push(_.morphTarget===p?1:0)}i.push(new Fs(".morphTargetInfluence["+p+"]",d,v))}l=m.length*a}else{const m=".bones["+t[f].name+"]";n(Ns,m+".position",h,"pos",i),n(vi,m+".quaternion",h,"rot",i),n(Ns,m+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function M1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return Eh;case"quaternion":return vi;case"bool":case"boolean":return os;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function w1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=M1(s.type);if(s.times===void 0){const t=[],n=[];Th(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ns={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class S1{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const T1=new S1;class Us{constructor(e){this.manager=e!==void 0?e:T1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Rn={};class E1 extends Error{constructor(e,t){super(e),this.response=t}}class Ah extends Us{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ns.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:i});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(v){y();function y(){f.read().then(({done:_,value:x})=>{if(_)v.close();else{p+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let w=0,E=u.length;w<E;w++){const M=u[w];M.onProgress&&M.onProgress(b)}v.enqueue(x),y()}})}}});return new Response(d)}else throw new E1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ns.add(e,c);const u=Rn[e];delete Rn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class A1 extends Us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ns.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ks("img");function l(){u(),ns.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class L1 extends Us{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,a=new A1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class No extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const za=new $e,hf=new k,df=new k;class Oo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(hf),df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(df),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class C1 extends Oo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class R1 extends No{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new C1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pf=new $e,xs=new k,Ua=new k;class P1 extends Oo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(xs),Ua.copy(n.position),Ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ua),n.updateMatrixWorld(),i.makeTranslation(-xs.x,-xs.y,-xs.z),pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}}class lo extends No{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new P1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class D1 extends Oo{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class I1 extends No{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new D1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class co{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class k1 extends Us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ns.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ns.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const zo="\\[\\]\\.:\\/",F1=new RegExp("["+zo+"]","g"),Uo="[^"+zo+"]",N1="[^"+zo.replace("\\.","")+"]",O1=/((?:WC+[\/:])*)/.source.replace("WC",Uo),z1=/(WCOD+)?/.source.replace("WCOD",N1),U1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uo),B1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uo),G1=new RegExp("^"+O1+z1+U1+B1+"$"),H1=["material","materials","bones","map"];class V1{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(F1,"")}static parseTrackName(e){const t=G1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);H1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=V1;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);class W1{constructor(e,t=" .:-=+*#%@",n={}){const i=n.resolution||.15,r=n.scale||1,a=n.color||!1,o=n.alpha||!1,l=n.block||!1,c=n.invert||!1,u=n.strResolution||"low";let f,h;const m=document.createElement("div");m.style.cursor="default";const g=document.createElement("table");m.appendChild(g);let p,d,v;this.setSize=function(R,G){f=R,h=G,e.setSize(R,G),y()},this.render=function(R,G){e.render(R,G),P(g)},this.domElement=m;function y(){p=Math.floor(f*i),d=Math.floor(h*i),E.width=p,E.height=d,v=e.domElement,v.style.backgroundColor&&(g.rows[0].cells[0].style.backgroundColor=v.style.backgroundColor,g.rows[0].cells[0].style.color=v.style.color),g.cellSpacing=0,g.cellPadding=0;const R=g.style;R.whiteSpace="pre",R.margin="0px",R.padding="0px",R.letterSpacing=q+"px",R.fontFamily=b,R.fontSize=C+"px",R.lineHeight=j+"px",R.textAlign="left",R.textDecoration="none"}const _=" .,:;i1tfLCG08@".split(""),x=" CGO08@".split(""),b="courier new, monospace",w=e.domElement,E=document.createElement("canvas");if(!E.getContext)return;const M=E.getContext("2d");if(!M.getImageData)return;let S=a?x:_;t&&(S=t);const C=2/i*r,j=2/i*r;let q=0;if(u=="low")switch(r){case 1:q=-1;break;case 2:case 3:q=-2.1;break;case 4:q=-3.1;break;case 5:q=-4.15;break}if(u=="medium")switch(r){case 1:q=0;break;case 2:q=-1;break;case 3:q=-1.04;break;case 4:case 5:q=-2.1;break}if(u=="high")switch(r){case 1:case 2:q=0;break;case 3:case 4:case 5:q=-1;break}function P(R){M.clearRect(0,0,p,d),M.drawImage(w,0,0,p,d);const G=M.getImageData(0,0,p,d).data;let Z="";for(let K=0;K<d;K+=2){for(let H=0;H<p;H++){const re=(K*p+H)*4,ie=G[re],ye=G[re+1],U=G[re+2],ae=G[re+3];let le,z;z=(.3*ie+.59*ye+.11*U)/255,ae==0&&(z=1),le=Math.floor((1-z)*(S.length-1)),c&&(le=S.length-le-1);let me=S[le];(me===void 0||me==" ")&&(me="&nbsp;"),a?Z+="<span style='color:rgb("+ie+","+ye+","+U+");"+(l?"background-color:rgb("+ie+","+ye+","+U+");":"")+(o?"opacity:"+ae/255+";":"")+"'>"+me+"</span>":Z+=me}Z+="<br/>"}R.innerHTML=`<tr><td style="display:block;width:${f}px;height:${h}px;overflow:hidden">${Z}</td></tr>`}}}const Ba={type:"change"},Ga={type:"start"},Ha={type:"end"};class j1 extends Si{constructor(e,t){super();const n=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:aa.ROTATE,MIDDLE:aa.DOLLY,RIGHT:aa.PAN},this.target=new k;const r=1e-6,a=new k;let o=1,l=i.NONE,c=i.NONE,u=0,f=0,h=0;const m=new k,g=new Ne,p=new Ne,d=new k,v=new Ne,y=new Ne,_=new Ne,x=new Ne,b=[],w={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const N=n.domElement.getBoundingClientRect(),ne=n.domElement.ownerDocument.documentElement;n.screen.left=N.left+window.pageXOffset-ne.clientLeft,n.screen.top=N.top+window.pageYOffset-ne.clientTop,n.screen.width=N.width,n.screen.height=N.height};const E=function(){const N=new Ne;return function(ue,_e){return N.set((ue-n.screen.left)/n.screen.width,(_e-n.screen.top)/n.screen.height),N}}(),M=function(){const N=new Ne;return function(ue,_e){return N.set((ue-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-_e))/n.screen.width),N}}();this.rotateCamera=function(){const N=new k,ne=new Un,ue=new k,_e=new k,we=new k,Pe=new k;return function(){Pe.set(p.x-g.x,p.y-g.y,0);let mt=Pe.length();mt?(m.copy(n.object.position).sub(n.target),ue.copy(m).normalize(),_e.copy(n.object.up).normalize(),we.crossVectors(_e,ue).normalize(),_e.setLength(p.y-g.y),we.setLength(p.x-g.x),Pe.copy(_e.add(we)),N.crossVectors(Pe,m).normalize(),mt*=n.rotateSpeed,ne.setFromAxisAngle(N,mt),m.applyQuaternion(ne),n.object.up.applyQuaternion(ne),d.copy(N),h=mt):!n.staticMoving&&h&&(h*=Math.sqrt(1-n.dynamicDampingFactor),m.copy(n.object.position).sub(n.target),ne.setFromAxisAngle(d,h),m.applyQuaternion(ne),n.object.up.applyQuaternion(ne)),g.copy(p)}}(),this.zoomCamera=function(){let N;l===i.TOUCH_ZOOM_PAN?(N=u/f,u=f,n.object.isPerspectiveCamera?m.multiplyScalar(N):n.object.isOrthographicCamera?(n.object.zoom/=N,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(N=1+(y.y-v.y)*n.zoomSpeed,N!==1&&N>0&&(n.object.isPerspectiveCamera?m.multiplyScalar(N):n.object.isOrthographicCamera?(n.object.zoom/=N,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?v.copy(y):v.y+=(y.y-v.y)*this.dynamicDampingFactor)},this.panCamera=function(){const N=new Ne,ne=new k,ue=new k;return function(){if(N.copy(x).sub(_),N.lengthSq()){if(n.object.isOrthographicCamera){const we=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Pe=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;N.x*=we,N.y*=Pe}N.multiplyScalar(m.length()*n.panSpeed),ue.copy(m).cross(n.object.up).setLength(N.x),ue.add(ne.copy(n.object.up).setLength(N.y)),n.object.position.add(ue),n.target.add(ue),n.staticMoving?_.copy(x):_.add(N.subVectors(x,_).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(m.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,m.setLength(n.maxDistance)),v.copy(y)),m.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,m.setLength(n.minDistance)),v.copy(y)))},this.update=function(){m.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,m),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),a.distanceToSquared(n.object.position)>r&&(n.dispatchEvent(Ba),a.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(a.distanceToSquared(n.object.position)>r||o!==n.object.zoom)&&(n.dispatchEvent(Ba),a.copy(n.object.position),o=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=i.NONE,c=i.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),m.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(Ba),a.copy(n.object.position),o=n.object.zoom};function S(N){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",j)),ae(N),N.pointerType==="touch"?re(N):G(N))}function C(N){n.enabled!==!1&&(N.pointerType==="touch"?ie(N):Z(N))}function j(N){n.enabled!==!1&&(N.pointerType==="touch"?ye(N):K(),le(N),b.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",j)))}function q(N){le(N)}function P(N){n.enabled!==!1&&(window.removeEventListener("keydown",P),c===i.NONE&&(N.code===n.keys[i.ROTATE]&&!n.noRotate?c=i.ROTATE:N.code===n.keys[i.ZOOM]&&!n.noZoom?c=i.ZOOM:N.code===n.keys[i.PAN]&&!n.noPan&&(c=i.PAN)))}function R(){n.enabled!==!1&&(c=i.NONE,window.addEventListener("keydown",P))}function G(N){if(l===i.NONE)switch(N.button){case n.mouseButtons.LEFT:l=i.ROTATE;break;case n.mouseButtons.MIDDLE:l=i.ZOOM;break;case n.mouseButtons.RIGHT:l=i.PAN;break}const ne=c!==i.NONE?c:l;ne===i.ROTATE&&!n.noRotate?(p.copy(M(N.pageX,N.pageY)),g.copy(p)):ne===i.ZOOM&&!n.noZoom?(v.copy(E(N.pageX,N.pageY)),y.copy(v)):ne===i.PAN&&!n.noPan&&(_.copy(E(N.pageX,N.pageY)),x.copy(_)),n.dispatchEvent(Ga)}function Z(N){const ne=c!==i.NONE?c:l;ne===i.ROTATE&&!n.noRotate?(g.copy(p),p.copy(M(N.pageX,N.pageY))):ne===i.ZOOM&&!n.noZoom?y.copy(E(N.pageX,N.pageY)):ne===i.PAN&&!n.noPan&&x.copy(E(N.pageX,N.pageY))}function K(){l=i.NONE,n.dispatchEvent(Ha)}function H(N){if(n.enabled!==!1&&n.noZoom!==!0){switch(N.preventDefault(),N.deltaMode){case 2:v.y-=N.deltaY*.025;break;case 1:v.y-=N.deltaY*.01;break;default:v.y-=N.deltaY*25e-5;break}n.dispatchEvent(Ga),n.dispatchEvent(Ha)}}function re(N){switch(z(N),b.length){case 1:l=i.TOUCH_ROTATE,p.copy(M(b[0].pageX,b[0].pageY)),g.copy(p);break;default:l=i.TOUCH_ZOOM_PAN;const ne=b[0].pageX-b[1].pageX,ue=b[0].pageY-b[1].pageY;f=u=Math.sqrt(ne*ne+ue*ue);const _e=(b[0].pageX+b[1].pageX)/2,we=(b[0].pageY+b[1].pageY)/2;_.copy(E(_e,we)),x.copy(_);break}n.dispatchEvent(Ga)}function ie(N){switch(z(N),b.length){case 1:g.copy(p),p.copy(M(N.pageX,N.pageY));break;default:const ne=me(N),ue=N.pageX-ne.x,_e=N.pageY-ne.y;f=Math.sqrt(ue*ue+_e*_e);const we=(N.pageX+ne.x)/2,Pe=(N.pageY+ne.y)/2;x.copy(E(we,Pe));break}}function ye(N){switch(b.length){case 0:l=i.NONE;break;case 1:l=i.TOUCH_ROTATE,p.copy(M(N.pageX,N.pageY)),g.copy(p);break;case 2:l=i.TOUCH_ZOOM_PAN;for(let ne=0;ne<b.length;ne++)if(b[ne].pointerId!==N.pointerId){const ue=w[b[ne].pointerId];p.copy(M(ue.x,ue.y)),g.copy(p);break}break}n.dispatchEvent(Ha)}function U(N){n.enabled!==!1&&N.preventDefault()}function ae(N){b.push(N)}function le(N){delete w[N.pointerId];for(let ne=0;ne<b.length;ne++)if(b[ne].pointerId==N.pointerId){b.splice(ne,1);return}}function z(N){let ne=w[N.pointerId];ne===void 0&&(ne=new Ne,w[N.pointerId]=ne),ne.set(N.pageX,N.pageY)}function me(N){const ne=N.pointerId===b[0].pointerId?b[1]:b[0];return w[ne.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",H),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",j),window.removeEventListener("keydown",P),window.removeEventListener("keyup",R)},this.domElement.addEventListener("contextmenu",U),this.domElement.addEventListener("pointerdown",S),this.domElement.addEventListener("pointercancel",q),this.domElement.addEventListener("wheel",H,{passive:!1}),window.addEventListener("keydown",P),window.addEventListener("keyup",R),this.handleResize(),this.update()}}function mf(s,e){if(e===k_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===no||e===th){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===no)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class $1 extends Us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Z1(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new lM(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=co.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ah(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lh){try{a[Ze.KHR_BINARY_GLTF]=new cM(e)}catch(f){i&&i(f);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new MM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case Ze.KHR_MATERIALS_UNLIT:a[f]=new Y1;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[f]=new uM(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[f]=new fM;break;case Ze.KHR_MESH_QUANTIZATION:a[f]=new hM;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function q1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X1{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new I1(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lo(u),c.distance=f;break;case"spot":c=new R1(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,$n(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Y1{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(i)}}class K1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Z1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(o,o)}return Promise.all(r)}}class J1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Q1{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class tM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(o[0],o[1],o[2]),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class iM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Oe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,tt)),Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class rM{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aM{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oM{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(m),u,f,h,i.mode,i.filter),m})})}else return null}}class lM{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,m=[];for(const g of f){const p=new $e,d=new k,v=new Un,y=new k(1,1,1),_=new f1(g.geometry,g.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&d.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,p.compose(d,v,y));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),m.push(_)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const Lh="glTF",ys=12,gf={JSON:1313821514,BIN:5130562};class cM{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ys,r=new DataView(e,ys);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===gf.JSON){const c=new Uint8Array(e,ys+a,o);this.content=n.decode(c)}else if(l===gf.BIN){const c=ys+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=uo[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=uo[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],m=qi[h.componentType];c[f]=m.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f){i.decodeDracoFile(u,function(h){for(const m in h.attributes){const g=h.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}f(h)},o,c)})})}}class fM{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hM{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Ch extends zs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,f=(n-t)/u,h=f*f,m=h*f,g=e*c,p=g-c,d=-2*m+3*h,v=m-h,y=1-d,_=v-h+f;for(let x=0;x!==o;x++){const b=a[p+x+o],w=a[p+x+l]*u,E=a[g+x+o],M=a[g+x]*u;r[x]=y*b+_*w+d*E+v*M}return r}}const dM=new Un;class pM extends Ch{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return dM.fromArray(r).normalize().toArray(r),r}}const tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_f={9728:Lt,9729:$t,9984:to,9985:Qf,9986:br,9987:di},vf={33071:nn,33648:Lr,10497:Ji},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mM={CUBICSPLINE:void 0,LINEAR:es,STEP:Ps},Wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Fo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),s.DefaultMaterial}function bs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $n(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _M(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function vM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xM(s){const e=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+xf(e.attributes):t=s.indices+":"+xf(s.attributes)+":"+s.mode,t}function xf(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function fo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const bM=new $e;class MM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new L1(this.options.manager):this.textureLoader=new k1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ah(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};bs(r,o,i),$n(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(co.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Va[i.type],o=qi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ht(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Va[i.type],c=qi[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,d;if(m&&m!==f){const v=Math.floor(h/m),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let _=t.cache.get(y);_||(p=new c(o,v*m,i.count*m/u),_=new r1(p,m/u),t.cache.add(y,_)),d=new Do(_,l,h%m/u,g)}else o===null?p=new c(i.count*l):p=new c(o,h,i.count*l),d=new Ht(p,l,g);if(i.sparse!==void 0){const v=Va.SCALAR,y=qi[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new y(a[1],_,i.sparse.count*v),w=new c(a[2],x,i.sparse.count*l);o!==null&&(d=new Ht(d.array.slice(),d.itemSize,d.normalized));for(let E=0,M=b.length;E<M;E++){const S=b[E];if(d.setX(S,w[E*l]),l>=2&&d.setY(S,w[E*l+1]),l>=3&&d.setZ(S,w[E*l+2]),l>=4&&d.setW(S,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"";const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=_f[h.magFilter]||$t,u.minFilter=_f[h.minFilter]||di,u.wrapS=vf[h.wrapS]||Ji,u.wrapT=vf[h.wrapT]||Ji,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,m){let g=h;t.isImageBitmapLoader===!0&&(g=function(p){const d=new Ct(p);d.needsUpdate=!0,h(d)}),t.load(co.resolveURL(f,r.path),g,void 0,m)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),f.userData.mimeType=a.mimeType||yM(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new wh,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Mh,pn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Fo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const f=i[Ze.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,tt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=In);const u=r.alphaMode||Wa.OPAQUE;if(u===Wa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Wa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==li&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}return r.occlusionTexture!==void 0&&a!==li&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==li&&(o.emissive=new Oe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==li&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,tt)),Promise.all(c).then(function(){const f=new a(o);return r.name&&(f.name=r.name),$n(f,r),t.associations.set(f,{materials:e}),r.extensions&&bs(i,f,r),f})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return yf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=xM(c),f=i[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=yf(new Mn,c,t),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?gM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let m=0,g=u.length;m<g;m++){const p=u[m],d=a[m];let v;const y=c[m];if(d.mode===tn.TRIANGLES||d.mode===tn.TRIANGLE_STRIP||d.mode===tn.TRIANGLE_FAN||d.mode===void 0)v=r.isSkinnedMesh===!0?new o1(p,y):new rn(p,y),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),d.mode===tn.TRIANGLE_STRIP?v.geometry=mf(v.geometry,th):d.mode===tn.TRIANGLE_FAN&&(v.geometry=mf(v.geometry,no));else if(d.mode===tn.LINES)v=new h1(p,y);else if(d.mode===tn.LINE_STRIP)v=new ko(p,y);else if(d.mode===tn.LINE_LOOP)v=new d1(p,y);else if(d.mode===tn.POINTS)v=new p1(p,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(v.geometry.morphAttributes).length>0&&vM(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),$n(v,r),d.extensions&&bs(i,v,d),t.assignFinalMaterial(v),f.push(v)}for(let m=0,g=f.length;m<g;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return f[0];const h=new ci;t.associations.set(h,{meshes:e});for(let m=0,g=f.length;m<g;m++)h.add(f[m]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(J_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Co(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$n(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f){o.push(f);const h=new $e;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Io(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],a=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],m=f.target,g=m.node,p=n.parameters!==void 0?n.parameters[h.input]:h.input,d=n.parameters!==void 0?n.parameters[h.output]:h.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",d)),o.push(h),l.push(m)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],m=c[3],g=c[4],p=[];for(let v=0,y=u.length;v<y;v++){const _=u[v],x=f[v],b=h[v],w=m[v],E=g[v];if(_===void 0)continue;_.updateMatrix();let M;switch(jn[E.path]){case jn.weights:M=Fs;break;case jn.rotation:M=vi;break;case jn.position:case jn.scale:default:M=Ns;break}const S=_.name?_.name:_.uuid,C=w.interpolation!==void 0?mM[w.interpolation]:es,j=[];jn[E.path]===jn.weights?_.traverse(function(P){P.morphTargetInfluences&&j.push(P.name?P.name:P.uuid)}):j.push(S);let q=b.array;if(b.normalized){const P=fo(q.constructor),R=new Float32Array(q.length);for(let G=0,Z=q.length;G<Z;G++)R[G]=q[G]*P;q=R}for(let P=0,R=j.length;P<R;P++){const G=new M(j[P]+"."+jn[E.path],x.array,q,C);w.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(K){const H=this instanceof vi?pM:Ch;return new H(this.times,this.values,this.getValueSize()/3,K)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(G)}}const d=n.name?n.name:"animation_"+e;return new b1(d,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(m){!m.isSkinnedMesh||m.bind(h,bM)});for(let m=0,g=f.length;m<g;m++)u.add(f[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new bh:c.length>1?u=new ci:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=a),$n(u,r),r.extensions&&bs(n,u,r),r.matrix!==void 0){const f=new $e;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ci;n.name&&(r.name=i.createUniqueName(n.name)),$n(r,n),n.extensions&&bs(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,m]of i.associations)(h instanceof pn||h instanceof Ct)&&f.set(h,m);return u.traverse(h=>{const m=i.associations.get(h);m!=null&&f.set(h,m)}),f};return i.associations=c(r),r})}}function wM(s,e,t){const n=e.attributes,i=new ss;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const u=fo(qi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],m=h.min,g=h.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),h.normalized){const p=fo(qi[h.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new rs;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function yf(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=uo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return $n(s,e),wM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_M(s,e.targets,t):s})}const{window:ho}=Wh;function SM(s){let e=!1,t=()=>{e=!1},n,i,r,a,o,l,c,u,f,h,m,g,p,d,v,y,_,x,b;return Sr(s[5]),{c(){i=W("div"),r=W("div"),r.innerHTML='welcome to <span class="serif svelte-1bk6dkh">Webloom</span>, a field guide to web craft',a=ce(),o=W("div"),o.innerHTML='<span class="inbox-text svelte-1bk6dkh">\u2196 drag me</span>',l=ce(),c=W("div"),c.textContent="(concept)",u=ce(),f=W("div"),f.textContent="(html)",h=ce(),m=W("div"),m.textContent="(tools)",g=ce(),p=W("div"),p.textContent="(typography)",d=ce(),v=W("div"),v.textContent="(interaction)",y=ce(),_=W("div"),_.innerHTML=`<div class="manifest svelte-1bk6dkh"><span>Designers already understand rhythm, hierarchy, type, and space.
                The browser adds behavior: elements respond, rearrange, and change
                over time. Ready-made templates and <a href="glossary#no-code-editor" class="svelte-1bk6dkh">no-code editors</a> can be useful,
                but they can also hide the structure that makes a website feel
                authored. Working directly with HTML, CSS, and JavaScript keeps
                those decisions visible. Code becomes another design material:
                a way to set the frame, pull a thread through it, and tune the
                tension between content, form, and interaction.</span></div> 
        <div class="manifest svelte-1bk6dkh"><span><span class="serif svelte-1bk6dkh">Webloom</span> connects the basics of web programming with the
                concepts, tools, and visual references that shape the medium.
                Each glossary entry is a thread rather than an isolated term:
                typography touches accessibility, layout touches interaction,
                and a technical choice changes the reading experience. Follow
                those connections, inspect how other sites are made, and use
                the browser as an open publishing space for work that could only
                exist on the web.</span></div> 

        <div><h4 class="svelte-1bk6dkh">New to the material?<br/>
                Here are five ways to start
                <span class="serif svelte-1bk6dkh">weaving</span> the web:</h4> 
            <div></div></div> 
        <div class="start-carousel svelte-1bk6dkh"><div class="carousel-element svelte-1bk6dkh"><span class="carousel-text serif svelte-1bk6dkh">(step 1)</span> 
                <img src="../rocket.svg" alt="A cobalt thread entering a browser frame" class="svelte-1bk6dkh"/> 
                <span class="carousel-text svelte-1bk6dkh">Choose a <a href="/glossary#code-editor">code editor</a>,
                    such as Visual Studio Code</span></div> 

            <div class="carousel-element svelte-1bk6dkh"><span class="carousel-text serif svelte-1bk6dkh">(step 2)</span> 
                <img src="../raedchen.svg" alt="Interlaced HTML and CSS strands" class="svelte-1bk6dkh"/> 
                <span class="carousel-text svelte-1bk6dkh">Learn how <a href="/glossary#html">HTML</a> gives content structure
                    and <a href="/glossary#css">CSS</a> gives it form</span></div> 

            <div class="carousel-element svelte-1bk6dkh"><span class="carousel-text serif svelte-1bk6dkh">(step 3)</span> 
                <img src="../eyes.svg" alt="An inspection lens following a web thread" class="svelte-1bk6dkh"/> 
                <span class="carousel-text svelte-1bk6dkh">Inspect how other websites are made with the <a href="/glossary#developer-tools">developer tools</a></span></div> 

            <div class="carousel-element svelte-1bk6dkh"><span class="carousel-text serif svelte-1bk6dkh">(step 4)</span> 
                <img src="../folder.svg" alt="A woven page taking shape inside a browser" class="svelte-1bk6dkh"/> 
                <span class="carousel-text svelte-1bk6dkh">Weave a small page. Use the <a href="/glossary">glossary</a> whenever you need a thread</span></div> 
            <div class="carousel-element svelte-1bk6dkh"><span class="carousel-text serif svelte-1bk6dkh">(step 5)</span> 
                <img src="../fire.svg" alt="A spark joining an open pattern grid" class="svelte-1bk6dkh"/> 
                <span class="carousel-text svelte-1bk6dkh">Need a pattern to begin with? Browse the <a href="/inspiration">inspiration</a> field</span></div></div>`,D(r,"class","headline svelte-1bk6dkh"),D(o,"class","logo-anim-container svelte-1bk6dkh"),D(c,"class","floating-text serif svelte-1bk6dkh"),vt(c,"transform",`translate3d(0, ${s[1]*-.6}px, 0)`),vt(c,"margin-left","2vw"),vt(c,"margin-top","30vh"),D(f,"class","floating-text serif svelte-1bk6dkh"),vt(f,"transform",`translate3d(0, ${s[1]*-.1}px, 0)`),vt(f,"left","20vw"),vt(f,"margin-top","70vh"),D(m,"class","floating-text serif svelte-1bk6dkh"),vt(m,"transform",`translate3d(0, ${s[1]*-.2}px, 0)`),vt(m,"right","8vw"),vt(m,"margin-top","110vh"),D(p,"class","floating-text serif svelte-1bk6dkh"),vt(p,"transform",`translate3d(0, ${s[1]*-.5}px, 0)`),vt(p,"left","20vw"),vt(p,"margin-top","190vh"),D(v,"class","floating-text serif svelte-1bk6dkh"),vt(v,"transform",`translate3d(0, ${s[1]*-.3}px, 0)`),vt(v,"right","20vw"),vt(v,"margin-top","180vh"),D(_,"class","text svelte-1bk6dkh"),D(i,"class","content svelte-1bk6dkh")},m(w,E){Y(w,i,E),F(i,r),F(i,a),F(i,o),s[6](o),F(i,l),F(i,c),F(i,u),F(i,f),F(i,h),F(i,m),F(i,g),F(i,p),F(i,d),F(i,v),F(i,y),F(i,_),x||(b=[Je(ho,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(t,100),s[5]()}),Je(o,"mousedown",s[2]),Je(o,"mouseup",s[3])],x=!0)},p(w,[E]){E&2&&!e&&(e=!0,clearTimeout(n),scrollTo(ho.pageXOffset,w[1]),n=setTimeout(t,100)),E&2&&vt(c,"transform",`translate3d(0, ${w[1]*-.6}px, 0)`),E&2&&vt(f,"transform",`translate3d(0, ${w[1]*-.1}px, 0)`),E&2&&vt(m,"transform",`translate3d(0, ${w[1]*-.2}px, 0)`),E&2&&vt(p,"transform",`translate3d(0, ${w[1]*-.5}px, 0)`),E&2&&vt(v,"transform",`translate3d(0, ${w[1]*-.3}px, 0)`)},i:fe,o:fe,d(w){w&&X(i),s[6](null),x=!1,Jt(b)}}}function TM(s,e,t){let n;ct(s,an,g=>t(9,n=g));let{location:i}=e;Dt(an,n=i.pathname,n);let r,a,o,l,c;wi(()=>{let[g,p]=[a.offsetWidth,a.offsetHeight];const d=new s1,v=new Bt(18,g/p,.1,1e3),y=new Po({canvas:r});y.setSize(g,p);const _=new lo(16777215);_.position.set(500,500,500),d.add(_);const x=new lo(16777215,.25);x.position.set(-500,-500,-500),d.add(x),new $1().setPath("/").load("donutkugel.gltf",function(S){S.scene.traverse(C=>{C.material=new m1({color:16777215})}),S.scene.name="donut",d.add(S.scene)}),l=new W1(y," .:-+so*/[ft%@#",{invert:!0}),l.setSize(g,p),l.domElement.style.color="black",l.domElement.style.backgroundColor="#f4f0e6",l.domElement.style.cursor="grab",l.domElement.style.fontFamily="Favorit Mono Variable",document.querySelector(".logo-anim-container").appendChild(l.domElement),o=new j1(v,l.domElement),window.addEventListener("resize",E);function E(){[g,p]=[a.offsetWidth,a.offsetHeight],v.aspect=g/p,v.updateProjectionMatrix(),y.setSize(g,p),l.setSize(g,p)}o.noZoom=!0,v.position.z=5;function M(){requestAnimationFrame(M);const S=d.getObjectByName("donut");S&&(S.rotation.y+=.005),o.update(),l.render(d,v)}M()});function u(){l.domElement.style.cursor="grabbing"}function f(){l.domElement.style.cursor="grab"}function h(){t(1,c=ho.pageYOffset)}function m(g){yt[g?"unshift":"push"](()=>{a=g,t(0,a)})}return s.$$set=g=>{"location"in g&&t(4,i=g.location)},[a,c,u,f,i,h,m]}class EM extends We{constructor(e){super(),Ve(this,e,TM,SM,Ge,{location:4})}}function bf(s,e,t){const n=s.slice();return n[4]=e[t],n[6]=t,n}function AM(s){let e,t=s[4].name+"",n;return{c(){e=W("span"),e.textContent="webloom",n=ke(t),D(e,"class","serif svelte-1h7amt")},m(i,r){Y(i,e,r),Y(i,n,r)},p:fe,d(i){i&&X(e),i&&X(n)}}}function Mf(s){let e,t,n,i,r,a,o,l;return n=new Ar({props:{to:s[4].path,class:"register-link",$$slots:{default:[AM]},$$scope:{ctx:s}}}),{c(){e=W("div"),t=W("div"),Re(n.$$.fragment),i=ce(),r=W("div"),a=ce(),D(t,"class",rt(`link-box link-box-${s[6]} `)+" svelte-1h7amt"),D(r,"class","card svelte-1h7amt"),D(e,"class",o=rt(`register-card register-card-${s[6]} ${s[4].path===s[1]&&"active"}`)+" svelte-1h7amt")},m(c,u){Y(c,e,u),F(e,t),Le(n,t,null),F(e,i),F(e,r),F(e,a),l=!0},p(c,u){const f={};u&128&&(f.$$scope={dirty:u,ctx:c}),n.$set(f),(!l||u&2&&o!==(o=rt(`register-card register-card-${c[6]} ${c[4].path===c[1]&&"active"}`)+" svelte-1h7amt"))&&D(e,"class",o)},i(c){l||(O(n.$$.fragment,c),l=!0)},o(c){$(n.$$.fragment,c),l=!1},d(c){c&&X(e),Ce(n)}}}function LM(s){let e,t,n,i=s[2],r=[];for(let o=0;o<i.length;o+=1)r[o]=Mf(bf(s,i,o));const a=o=>$(r[o],1,1,()=>{r[o]=null});return{c(){e=W("div");for(let o=0;o<r.length;o+=1)r[o].c();D(e,"class",t=rt("register "+s[0])+" svelte-1h7amt")},m(o,l){Y(o,e,l);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,[l]){if(l&6){i=o[2];let c;for(c=0;c<i.length;c+=1){const u=bf(o,i,c);r[c]?(r[c].p(u,l),O(r[c],1)):(r[c]=Mf(u),r[c].c(),O(r[c],1),r[c].m(e,null))}for(ze(),c=i.length;c<r.length;c+=1)a(c);Ue()}(!n||l&1&&t!==(t=rt("register "+o[0])+" svelte-1h7amt"))&&D(e,"class",t)},i(o){if(!n){for(let l=0;l<i.length;l+=1)O(r[l]);n=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)$(r[l]);n=!1},d(o){o&&X(e),wt(r,o)}}}function CM(s,e,t){let n;ct(s,an,o=>t(1,n=o));const i=[{name:"Space",path:"/"},{name:"Glossary",path:"/glossary"},{name:"Inspiration",path:"/inspiration"}];let r="down",a=window.location.pathname;return an.subscribe(o=>{o==="/info"||o==="/imprint"?t(0,r="down"):a==="/info"&&o!=="/info"||a==="/imprint"&&o!=="/imptint"?t(0,r="up"):t(0,r=""),a=o}),[r,n,i]}class RM extends We{constructor(e){super(),Ve(this,e,CM,LM,Ge,{})}}function PM(s){let e,t,n,i,r,a,o,l,c,u,f,h,m,g,p;return e=new Hg({}),n=new RM({}),a=new us({props:{path:"/inspiration",component:Dg}}),l=new us({props:{path:"/glossary",component:dm}}),u=new us({props:{path:"/info",component:Fg}}),h=new us({props:{path:"/imprint",component:zg}}),g=new us({props:{path:"/",component:EM}}),{c(){Re(e.$$.fragment),t=ce(),Re(n.$$.fragment),i=ce(),r=W("div"),Re(a.$$.fragment),o=ce(),Re(l.$$.fragment),c=ce(),Re(u.$$.fragment),f=ce(),Re(h.$$.fragment),m=ce(),Re(g.$$.fragment),D(r,"class","content")},m(d,v){Le(e,d,v),Y(d,t,v),Le(n,d,v),Y(d,i,v),Y(d,r,v),Le(a,r,null),F(r,o),Le(l,r,null),F(r,c),Le(u,r,null),F(r,f),Le(h,r,null),F(r,m),Le(g,r,null),p=!0},p:fe,i(d){p||(O(e.$$.fragment,d),O(n.$$.fragment,d),O(a.$$.fragment,d),O(l.$$.fragment,d),O(u.$$.fragment,d),O(h.$$.fragment,d),O(g.$$.fragment,d),p=!0)},o(d){$(e.$$.fragment,d),$(n.$$.fragment,d),$(a.$$.fragment,d),$(l.$$.fragment,d),$(u.$$.fragment,d),$(h.$$.fragment,d),$(g.$$.fragment,d),p=!1},d(d){Ce(e,d),d&&X(t),Ce(n,d),d&&X(i),d&&X(r),Ce(a),Ce(l),Ce(u),Ce(h),Ce(g)}}}function DM(s){let e,t;return e=new ud({props:{url:s[0],$$slots:{default:[PM]},$$scope:{ctx:s}}}),{c(){Re(e.$$.fragment)},m(n,i){Le(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.url=n[0]),i&2&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){Ce(e,n)}}}function IM(s,e,t){let{url:n=""}=e;return s.$$set=i=>{"url"in i&&t(0,n=i.url)},[n]}class kM extends We{constructor(e){super(),Ve(this,e,IM,DM,Ge,{url:0})}}new kM({target:document.getElementById("app")});
