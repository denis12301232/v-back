import{k as te,n as s,P as D,m as Y,q as b,R as ne,N as K,S as ae,U as re,V as G,W as ue,v as Z,G as le,H as ie,r as I,D as se,Q as V,X as oe,O as ce,E as de,Y as T,Z as fe,$ as ve}from"./index-9a19f992.js";function Me(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function J(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{J(e,a)}):e.add(t)}function ze(e){const t=new Set;return e.forEach(a=>{J(t,a)}),Array.from(t)}function ge(e){return e.appContext.config.globalProperties.$router!==void 0}function Ne(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Ke(e){return e===window?window.innerHeight:e.getBoundingClientRect().height}function me(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function De(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=te(e);if(t)return t.$el||t}function Ie(e,t){if(e==null||e.contains(t)===!0)return!0;for(let a=e.nextElementSibling;a!==null;a=a.nextElementSibling)if(a.contains(t))return!0;return!1}const he={size:{type:[Number,String],default:"1em"},color:String};function be(e){return{cSize:s(()=>e.size in D?`${D[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const ye=Y({name:"QSpinner",props:{...he,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=be(e);return()=>b("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[b("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ke(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function Q(e,t,a,n){a.modifiers.stop===!0&&G(e);const l=a.modifiers.color;let m=a.modifiers.center;m=m===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),L=ue(e),{left:y,top:v,width:$,height:u}=t.getBoundingClientRect(),k=Math.sqrt($*$+u*u),g=k/2,p=`${($-k)/2}px`,i=m?p:`${L.left-y-g}px`,h=`${(u-k)/2}px`,B=m?h:`${L.top-v-g}px`;d.className="q-ripple__inner",me(d,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${i},${B},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${l?" text-"+l:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const P=()=>{f.remove(),clearTimeout(R)};a.abort.push(P);let R=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${p},${h},0) scale3d(1,1,1)`,d.style.opacity=.2,R=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,R=setTimeout(()=>{f.remove(),a.abort.splice(a.abort.indexOf(P),1)},275)},250)},50)}function H(e,{modifiers:t,value:a,arg:n}){const l=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}const pe=ne({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&Q(l,e,n,l.qKeyEvent===!0)},keystart:ke(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&K(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&Q(l,e,n,!0)},300)};H(n,t),e.__qripple=n,ae(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&H(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),re(t,"main"),delete e._qripple)}}),ee={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},qe=Object.keys(ee),xe={align:{type:String,validator:e=>qe.includes(e)}};function $e(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ee[t]}`})}function U(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Se(e,t){for(const a in t){const n=t[a],l=e[a];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((m,f)=>m!==l[f]))return!1}return!0}function X(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Ee(e,t){return Array.isArray(e)===!0?X(e,t):Array.isArray(t)===!0?X(t,e):e===t}function Ce(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Ee(e[a],t[a])===!1)return!1;return!0}const Le={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function we({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=Z(),{props:n,proxy:l,emit:m}=a,f=ge(a),d=s(()=>n.disable!==!0&&n.href!==void 0),L=t===!0?s(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):s(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),y=s(()=>L.value===!0?B(n.to):null),v=s(()=>y.value!==null),$=s(()=>d.value===!0||v.value===!0),u=s(()=>n.type==="a"||$.value===!0?"a":n.tag||e||"div"),k=s(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:y.value.href,target:n.target}:{}),g=s(()=>{if(v.value===!1)return-1;const{matched:o}=y.value,{length:q}=o,S=o[q-1];if(S===void 0)return-1;const C=l.$route.matched;if(C.length===0)return-1;const w=C.findIndex(W.bind(null,S));if(w>-1)return w;const z=U(o[q-2]);return q>1&&U(S)===z&&C[C.length-1].path!==z?C.findIndex(W.bind(null,o[q-2])):w}),p=s(()=>v.value===!0&&g.value!==-1&&Se(l.$route.params,y.value.params)),i=s(()=>p.value===!0&&g.value===l.$route.matched.length-1&&Ce(l.$route.params,y.value.params)),h=s(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function B(o){try{return l.$router.resolve(o)}catch{}return null}function P(o,{returnRouterError:q,to:S=n.to,replace:C=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const w=l.$router[C===!0?"replace":"push"](S);return q===!0?w:w.then(()=>{}).catch(()=>{})}function R(o){if(v.value===!0){const q=S=>P(o,S);m("click",o,q),o.defaultPrevented!==!0&&q()}else m("click",o)}return{hasRouterLink:v,hasHrefLink:d,hasLink:$,linkTag:u,resolvedLink:y,linkIsActive:p,linkIsExactActive:i,linkClass:h,linkAttrs:k,getLink:B,navigateToRouterLink:P,navigateOnClick:R}}const F={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Pe={xs:8,sm:10,md:14,lg:20,xl:24},Re=["button","submit","reset"],Be=/[^\s]\/[^\s]/,Te=["flat","outline","push","unelevated"],Ae=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,_e={...le,...Le,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Te.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...xe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Oe(e){const t=ie(e,Pe),a=$e(e),{hasRouterLink:n,hasLink:l,linkTag:m,linkAttrs:f,navigateOnClick:d}=we({fallbackTag:"button"}),L=s(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(h=>h in F?F[h]+"px":h).join(" "),minWidth:"0",minHeight:"0"}):i}),y=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=s(()=>e.disable!==!0&&e.loading!==!0),$=s(()=>v.value===!0?e.tabindex||0:-1),u=s(()=>Ae(e,"standard")),k=s(()=>{const i={tabindex:$.value};return l.value===!0?Object.assign(i,f.value):Re.includes(e.type)===!0&&(i.type=e.type),m.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Be.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),g=s(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const h=e.round===!0?"round":`rectangle${y.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${h}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=s(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:L,innerClasses:p,attributes:k,hasLink:l,linkTag:m,navigateOnClick:d,isActionable:v}}const{passiveCapture:x}=ve;let A=null,_=null,O=null;const Ve=Y({name:"QBtn",props:{..._e,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=Z(),{classes:l,style:m,innerClasses:f,attributes:d,hasLink:L,linkTag:y,navigateOnClick:v,isActionable:$}=Oe(e),u=I(null),k=I(null);let g=null,p,i=null;const h=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),B=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:L.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=s(()=>({center:e.round})),R=s(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),o=s(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if($.value===!0){const r={onClick:S,onKeydown:C,onMousedown:z};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${c}`]=w}return r}return{onClick:T}}),q=s(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:m.value,...d.value,...o.value}));function S(r){if(u.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&u.value.contains(c)===!1&&c.contains(u.value)===!1){u.value.focus();const N=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",N,x),u.value!==null&&u.value.removeEventListener("blur",N,x)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",N,x),u.value.addEventListener("blur",N,x)}}v(r)}}function C(r){u.value!==null&&(a("keydown",r),K(r,[13,32])===!0&&_!==u.value&&(_!==null&&j(),r.defaultPrevented!==!0&&(u.value.focus(),_=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",E,!0),u.value.addEventListener("blur",E,x)),T(r)))}function w(r){u.value!==null&&(a("touchstart",r),r.defaultPrevented!==!0&&(A!==u.value&&(A!==null&&j(),A=u.value,g=r.target,g.addEventListener("touchcancel",E,x),g.addEventListener("touchend",E,x)),p=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,p=!1},200)))}function z(r){u.value!==null&&(r.qSkipRipple=p===!0,a("mousedown",r),r.defaultPrevented!==!0&&O!==u.value&&(O!==null&&j(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",E,x)))}function E(r){if(u.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===u.value)){if(r!==void 0&&r.type==="keyup"){if(_===u.value&&K(r,[13,32])===!0){const c=new MouseEvent("click",r);c.qKeyEvent=!0,r.defaultPrevented===!0&&fe(c),r.cancelBubble===!0&&G(c),u.value.dispatchEvent(c),T(r),r.qKeyEvent=!0}a("keyup",r)}j()}}function j(r){const c=k.value;r!==!0&&(A===u.value||O===u.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),A===u.value&&(g!==null&&(g.removeEventListener("touchcancel",E,x),g.removeEventListener("touchend",E,x)),A=g=null),O===u.value&&(document.removeEventListener("mouseup",E,x),O=null),_===u.value&&(document.removeEventListener("keyup",E,!0),u.value!==null&&u.value.removeEventListener("blur",E,x),_=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function M(r){T(r),r.qSkipRipple=!0}return se(()=>{j(!0)}),Object.assign(n,{click:S}),()=>{let r=[];e.icon!==void 0&&r.push(b(V,{name:e.icon,left:e.stack===!1&&h.value===!0,role:"img","aria-hidden":"true"})),h.value===!0&&r.push(b("span",{class:"block"},[e.label])),r=oe(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(b(V,{name:e.iconRight,right:e.stack===!1&&h.value===!0,role:"img","aria-hidden":"true"}));const c=[b("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&c.push(b("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[b("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),c.push(b("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},r)),e.loading!==null&&c.push(b(ce,{name:"q-transition--fade"},()=>e.loading===!0?[b("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[b(ye)])]:null)),de(b(y.value,q.value,c),[[pe,B.value,void 0,P.value]])}}});export{Ve as Q,pe as R,ye as a,Ne as b,Ie as c,we as d,De as e,me as f,Me as g,xe as h,$e as i,Te as j,F as k,Ae as l,he as m,be as n,Ke as o,ze as p,Le as u,ge as v};
