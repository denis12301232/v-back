import{m as T,n as d,q as v,t as k,r as z,ag as j,B as R,D as P,ak as K,C as W,v as C,$ as B,x as U,y as $,z as _,w as S,al as X,am as A,an as G,a as Q,K as J,X as Y}from"./index-9a19f992.js";import{b as Z,a as ee,g as te,c as E}from"./scroll-14701fa6.js";const re=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:h}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>v("div",{class:n.value},k(h.default))}}),se=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:h}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:n.value,role:"toolbar"},k(h.default))}});function ne(){const e=z(!j.value);return e.value===!1&&R(()=>{e.value=!0}),e}const I=typeof ResizeObserver<"u",D=I===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},F=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:h}){let n=null,t,i={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:l}=t;(r!==i.width||l!==i.height)&&(i={width:r,height:l},h("resize",i))}}const{proxy:g}=C();if(I===!0){let r;const l=m=>{t=g.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):m!==!0&&W(()=>{l(!0)})};return R(()=>{l()}),P(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),K}else{let m=function(){n!==null&&(clearTimeout(n),n=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",s,B.passive),l=void 0)},b=function(){m(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",s,B.passive),u())};const r=ne();let l;return R(()=>{W(()=>{t=g.$el,t&&b()})}),P(m),g.trigger=s,()=>{if(r.value===!0)return v("object",{style:D.style,tabindex:-1,type:"text/html",data:D.url,"aria-hidden":"true",onLoad:b})}}}}),ue=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:h,emit:n}){const{proxy:{$q:t}}=C(),i=U(_,$);if(i===$)return console.error("QHeader needs to be child of QLayout"),$;const s=z(parseInt(e.heightHint,10)),u=z(!0),g=d(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||t.platform.is.ios&&i.isContainer.value===!0),r=d(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?s.value:0;const o=s.value-i.scroll.value.position;return o>0?o:0}),l=d(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),m=d(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),b=d(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=d(()=>{const o=i.rows.value.top,y={};return o[0]==="l"&&i.left.space===!0&&(y[t.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),o[2]==="r"&&i.right.space===!0&&(y[t.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),y});function c(o,y){i.update("header",o,y)}function p(o,y){o.value!==y&&(o.value=y)}function H({height:o}){p(s,o),c("size",o)}function O(o){m.value===!0&&p(u,!0),n("focusin",o)}S(()=>e.modelValue,o=>{c("space",o),p(u,!0),i.animate()}),S(r,o=>{c("offset",o)}),S(()=>e.reveal,o=>{o===!1&&p(u,e.modelValue)}),S(u,o=>{i.animate(),n("reveal",o)}),S(i.scroll,o=>{e.reveal===!0&&p(u,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const q={};return i.instances.header=q,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",r.value),P(()=>{i.instances.header===q&&(i.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const o=X(h.default,[]);return e.elevated===!0&&o.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(v(F,{debounce:0,onResize:H})),v("header",{class:b.value,style:w.value,onFocusin:O},o)}}}),ce=T({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:n}}=C(),t=U(_,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;A(G,!0);const i=d(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>v("div",{class:"q-page-container",style:i.value},k(h.default))}}),{passive:M}=B,oe=["both","horizontal","vertical"],ie=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>oe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:h}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,s;S(()=>e.scrollTarget,()=>{r(),g()});function u(){t!==null&&t();const b=Math.max(0,ee(i)),w=te(i),c={top:b-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const p=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:b,left:w},n.directionChanged=n.direction!==p,n.delta=c,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),h("scroll",{...n})}function g(){i=Z(s,e.scrollTarget),i.addEventListener("scroll",l,M),l(!0)}function r(){i!==void 0&&(i.removeEventListener("scroll",l,M),i=void 0)}function l(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[w,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(w),t=null}}}const{proxy:m}=C();return S(()=>m.$q.lang.rtl,u),R(()=>{s=m.$el.parentNode,g()}),P(()=>{t!==null&&t(),r()}),Object.assign(m,{trigger:l,getPosition:()=>n}),K}}),de=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:n}){const{proxy:{$q:t}}=C(),i=z(null),s=z(t.screen.height),u=z(e.container===!0?0:t.screen.width),g=z({position:0,direction:"down",inflectionPoint:0}),r=z(0),l=z(j.value===!0?0:E()),m=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=d(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),c=d(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function p(a){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};g.value=f,e.onScroll!==void 0&&n("scroll",f)}}function H(a){const{height:f,width:x}=a;let L=!1;s.value!==f&&(L=!0,s.value=f,e.onScrollHeight!==void 0&&n("scrollHeight",f),q()),u.value!==x&&(L=!0,u.value=x),L===!0&&e.onResize!==void 0&&n("resize",a)}function O({height:a}){r.value!==a&&(r.value=a,q())}function q(){if(e.container===!0){const a=s.value>r.value?E():0;l.value!==a&&(l.value=a)}}let o=null;const y={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:i,height:s,containerHeight:r,scrollbarWidth:l,totalWidth:d(()=>u.value+l.value),rows:d(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:g,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,f,x){y[a][f]=x}};if(A(_,y),E()>0){let x=function(){a=null,f.classList.remove("hide-scrollbar")},L=function(){if(a===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(x,300)},V=function(N){a!==null&&N==="remove"&&(clearTimeout(a),x()),window[`${N}EventListener`]("resize",L)},a=null;const f=document.body;S(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),J(()=>{V("remove")})}return()=>{const a=Y(h.default,[v(ie,{onScroll:p}),v(F,{onResize:H})]),f=v("div",{class:m.value,style:b.value,ref:e.container===!0?void 0:i,tabindex:-1},a);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:i},[v(F,{onResize:O}),v("div",{class:"absolute-full",style:w.value},[v("div",{class:"scroll",style:c.value},[f])])]):f}}});export{de as Q,ue as a,re as b,se as c,ce as d,F as e,ie as f};
