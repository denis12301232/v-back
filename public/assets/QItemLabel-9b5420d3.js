import{r as w,C as ye,R as I,a2 as pe,H as Q,w as y,a6 as we,D as B,v as Z,I as Te,S as M,B as Ce,m as ee,n as g,K as ke,q as P,t as te,E as Ee,P as Se}from"./index-e5e9097c.js";import{c as qe}from"./selection-cf2d6bd0.js";import{u as He,a as Me,b as Pe}from"./use-prevent-scroll-86cdee42.js";import{a as We,b as Be}from"./use-key-composition-03035ab4.js";import{p as j,u as Le,a as Oe,b as Ae,d as ze,r as Fe,e as N,f as Re,h as $e}from"./QDialog-311997ce.js";import{u as _e}from"./use-tick-355e26fc.js";import{u as De}from"./use-timeout-218cbdd7.js";import{c as Ke,b as Ie}from"./scroll-49674bee.js";import{c as Qe}from"./QBtn-68e1acb0.js";import{b as je}from"./focus-manager-e79c27be.js";const Ne={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ve({showing:e,avoidEmit:n,configureAnchorEl:i}){const{props:t,proxy:o,emit:c}=Z(),l=w(null);let d=null;function f(a){return l.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};i===void 0&&(Object.assign(r,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ye(a,13)===!0&&r.toggle(a)},contextClick(a){o.hide(a),I(a),pe(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:I,mobileTouch(a){if(r.mobileCleanup(a),f(a)!==!0)return;o.hide(a),l.value.classList.add("non-selectable");const h=a.target;Q(r,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){l.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&a!==void 0&&qe()}}),i=function(a=t.contextMenu){if(t.noParentEvent===!0||l.value===null)return;let h;a===!0?o.$q.platform.is.mobile===!0?h=[[l.value,"touchstart","mobileTouch","passive"]]:h=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:h=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],Q(r,"anchor",h)});function s(){Te(r,"anchor")}function m(a){for(l.value=a;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;i()}function v(){if(t.target===!1||t.target===""||o.$el.parentNode===null)l.value=null;else if(t.target===!0)m(o.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(l.value=a.$el||a,i()):(l.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return y(()=>t.contextMenu,a=>{l.value!==null&&(s(),i(a))}),y(()=>t.target,()=>{l.value!==null&&s(),v()}),y(()=>t.noParentEvent,a=>{l.value!==null&&(a===!0?s():i())}),we(()=>{v(),n!==!0&&t.modelValue===!0&&l.value===null&&c("update:modelValue",!1)}),B(()=>{d!==null&&clearTimeout(d),s()}),{anchorEl:l,canShow:f,anchorEvents:r}}function Xe(e,n){const i=w(null);let t;function o(d,f){const r=`${f!==void 0?"add":"remove"}EventListener`,s=f!==void 0?f:t;d!==window&&d[r]("scroll",s,M.passive),window[r]("scroll",s,M.passive),t=f}function c(){i.value!==null&&(o(i.value),i.value=null)}const l=y(()=>e.noParentEvent,()=>{i.value!==null&&(c(),n())});return B(l),{localScrollTarget:i,unconfigureScrollTarget:c,changeScrollEvent:o}}const{notPassiveCapture:T}=M,x=[];function C(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let i=j.length-1;for(;i>=0;){const t=j[i].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;i--}for(let t=x.length-1;t>=0;t--){const o=x[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(n)===!1)&&(n===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(n)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Ye(e){x.push(e),x.length===1&&(document.addEventListener("mousedown",C,T),document.addEventListener("touchstart",C,T))}function V(e){const n=x.findIndex(i=>i===e);n>-1&&(x.splice(n,1),x.length===0&&(document.removeEventListener("mousedown",C,T),document.removeEventListener("touchstart",C,T)))}let X,Y;function U(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ue(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const W={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{W[`${e}#ltr`]=e,W[`${e}#rtl`]=e});function G(e,n){const i=e.split(" ");return{vertical:i[0],horizontal:W[`${i[1]}#${n===!0?"rtl":"ltr"}`]}}function Ge(e,n){let{top:i,left:t,right:o,bottom:c,width:l,height:d}=e.getBoundingClientRect();return n!==void 0&&(i-=n[1],t-=n[0],c+=n[1],o+=n[0],l+=n[0],d+=n[1]),{top:i,bottom:c,height:d,left:t,right:o,width:l,middle:t+(o-t)/2,center:i+(c-i)/2}}function Je(e,n,i){let{top:t,left:o}=e.getBoundingClientRect();return t+=n.top,o+=n.left,i!==void 0&&(t+=i[1],o+=i[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function Ze(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function J(e,n,i){return{top:e[i.anchorOrigin.vertical]-n[i.selfOrigin.vertical],left:e[i.anchorOrigin.horizontal]-n[i.selfOrigin.horizontal]}}function et(e){if(Ce.is.ios===!0&&window.visualViewport!==void 0){const d=document.body.style,{offsetLeft:f,offsetTop:r}=window.visualViewport;f!==X&&(d.setProperty("--q-pe-left",f+"px"),X=f),r!==Y&&(d.setProperty("--q-pe-top",r+"px"),Y=r)}const{scrollLeft:n,scrollTop:i}=e.el,t=e.absoluteOffset===void 0?Ge(e.anchorEl,e.cover===!0?[0,0]:e.offset):Je(e.anchorEl,e.absoluteOffset,e.offset);let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=t.width+"px",e.cover===!0&&(o.minHeight=t.height+"px")),Object.assign(e.el.style,o);const c=Ze(e.el);let l=J(t,c,e);if(e.absoluteOffset===void 0||e.offset===void 0)H(l,t,c,e.anchorOrigin,e.selfOrigin);else{const{top:d,left:f}=l;H(l,t,c,e.anchorOrigin,e.selfOrigin);let r=!1;if(l.top!==d){r=!0;const s=2*e.offset[1];t.center=t.top-=s,t.bottom-=s+2}if(l.left!==f){r=!0;const s=2*e.offset[0];t.middle=t.left-=s,t.right-=s+2}r===!0&&(l=J(t,c,e),H(l,t,c,e.anchorOrigin,e.selfOrigin))}o={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(o.maxHeight=l.maxHeight+"px",t.height>l.maxHeight&&(o.minHeight=o.maxHeight)),l.maxWidth!==void 0&&(o.maxWidth=l.maxWidth+"px",t.width>l.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==i&&(e.el.scrollTop=i),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function H(e,n,i,t,o){const c=i.bottom,l=i.right,d=Ke(),f=window.innerHeight-d,r=document.body.clientWidth;if(e.top<0||e.top+c>f)if(o.vertical==="center")e.top=n[t.vertical]>f/2?Math.max(0,f-c):0,e.maxHeight=Math.min(c,f);else if(n[t.vertical]>f/2){const s=Math.min(f,t.vertical==="center"?n.center:t.vertical===o.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,s),e.top=Math.max(0,s-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===o.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,f-e.top);if(e.left<0||e.left+l>r)if(e.maxWidth=Math.min(l,r),o.horizontal==="middle")e.left=n[t.horizontal]>r/2?Math.max(0,r-l):0;else if(n[t.horizontal]>r/2){const s=Math.min(r,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.right:n.left);e.maxWidth=Math.min(l,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.left:n.right),e.maxWidth=Math.min(l,r-e.left)}const dt=ee({name:"QMenu",inheritAttrs:!1,props:{...Ne,...He,...We,...Le,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:U},self:{type:String,validator:U},offset:{type:Array,validator:Ue},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Me,"click","escapeKey"],setup(e,{slots:n,emit:i,attrs:t}){let o=null,c,l,d;const f=Z(),{proxy:r}=f,{$q:s}=r,m=w(null),v=w(!1),a=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=Be(e,s),{registerTick:ne,removeTick:oe}=_e(),{registerTimeout:L}=De(),{transitionProps:le,transitionStyle:ie}=Oe(e),{localScrollTarget:O,changeScrollEvent:ae,unconfigureScrollTarget:ue}=Xe(e,D),{anchorEl:b,canShow:re}=Ve({showing:v}),{hide:A}=Pe({showing:v,canShow:re,handleShow:he,handleHide:me,hideOnRouteChange:a,processOnMount:!0}),{showPortal:z,hidePortal:F,renderPortal:se}=Ae(f,m,ge,"menu"),k={anchorEl:b,innerRef:m,onClickOutside(u){if(e.persistent!==!0&&v.value===!0)return A(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Se(u),!0}},R=g(()=>G(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),ce=g(()=>e.cover===!0?R.value:G(e.self||"top start",s.lang.rtl)),de=g(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),fe=g(()=>e.autoClose===!0?{onClick:ve}:{}),$=g(()=>v.value===!0&&e.persistent!==!0);y($,u=>{u===!0?(Re(S),Ye(k)):(N(S),V(k))});function E(){je(()=>{let u=m.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function he(u){if(o=e.noRefocus===!1?document.activeElement:null,ze(K),z(),D(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const q=ke(u);if(q.left!==void 0){const{top:xe,left:be}=b.value.getBoundingClientRect();c={left:q.left-be,top:q.top-xe}}}l===void 0&&(l=y(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,p)),e.noFocus!==!0&&document.activeElement.blur(),ne(()=>{p(),e.noFocus!==!0&&E()}),L(()=>{s.platform.is.ios===!0&&(d=e.autoClose,m.value.click()),p(),z(!0),i("show",u)},e.transitionDuration)}function me(u){oe(),F(),_(!0),o!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),L(()=>{F(!0),i("hide",u)},e.transitionDuration)}function _(u){c=void 0,l!==void 0&&(l(),l=void 0),(u===!0||v.value===!0)&&(Fe(K),ue(),V(k),N(S)),u!==!0&&(o=null)}function D(){(b.value!==null||e.scrollTarget!==void 0)&&(O.value=Ie(b.value,e.scrollTarget),ae(O.value,p))}function ve(u){d!==!0?($e(r,u),i("click",u)):d=!1}function K(u){$.value===!0&&e.noFocus!==!0&&Qe(m.value,u.target)!==!0&&E()}function S(u){i("escapeKey"),A(u)}function p(){const u=m.value;u===null||b.value===null||et({el:u,offset:e.offset,anchorEl:b.value,anchorOrigin:R.value,selfOrigin:ce.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ge(){return P(Ee,le.value,()=>v.value===!0?P("div",{role:"menu",...t,ref:m,tabindex:-1,class:["q-menu q-position-engine scroll"+de.value,t.class],style:[t.style,ie.value],...fe.value},te(n.default)):null)}return B(_),Object.assign(r,{focus:E,updatePosition:p}),se}}),ft=ee({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const i=g(()=>parseInt(e.lines,10)),t=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),o=g(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>P("div",{style:o.value,class:t.value},te(n.default))}});export{dt as Q,Ve as a,ft as b,Ne as u};
