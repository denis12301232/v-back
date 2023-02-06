import{aF as K,Y as X,n as b,m as A,r as v,w as T,D as O,q as r,E as Y,t as G,ab as J,aa as Z,a6 as ee,aj as te,S as ae,a2 as j,a8 as ie,v as le,d as ne,c as oe,b as M,o as Q,f as p,e as y,W as se,k as re,Q as D,O as ue,X as H,a3 as ce,a4 as de,p as fe,i as ve,_ as ge}from"./index-e5e9097c.js";import{a as me,m as he,n as _e,o as $}from"./QBtn-68e1acb0.js";import{Q as Se}from"./QDialog-311997ce.js";import{d as P,a as R,s as V,b as ye}from"./scroll-49674bee.js";import{C as be}from"./ClosePopup-60e3f706.js";import{T as we}from"./ToolsLayout-c3ca4b37.js";import"./use-prevent-scroll-86cdee42.js";import"./use-timeout-218cbdd7.js";import"./use-tick-355e26fc.js";import"./focus-manager-e79c27be.js";import"./QLayout-f9a4666d.js";class Ce{static getImages(u){return K.get(`${X.API_V1}/images/`,{params:{pageToken:u}})}}const pe={ratio:[String,Number]};function xe(e,u){return b(()=>{const c=Number(e.ratio||(u!==void 0?u.value:void 0));return isNaN(c)!==!0&&c>0?{paddingBottom:`${100/c}%`}:null})}const Ie=16/9,F=A({name:"QImg",props:{...pe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ie},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:u,emit:c}){const i=v(e.initialRatio),s=xe(e,i);let n=null,m=!1;const d=[v(null),v(I())],a=v(0),l=v(!1),S=v(!1),f=b(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),g=b(()=>({width:e.width,height:e.height})),h=b(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),x=b(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));T(()=>w(),z);function w(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function I(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function z(t){n!==null&&(clearTimeout(n),n=null),S.value=!1,t===null?(l.value=!1,d[a.value^1].value=I()):l.value=!0,d[a.value].value=t}function L({target:t}){m!==!0&&(n!==null&&(clearTimeout(n),n=null),i.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,k(t,1))}function k(t,_){m===!0||_===1e3||(t.complete===!0?q(t):n=setTimeout(()=>{n=null,k(t,_+1)},50))}function q(t){m!==!0&&(a.value=a.value^1,d[a.value].value=null,l.value=!1,S.value=!1,c("load",t.currentSrc||t.src))}function B(t){n!==null&&(clearTimeout(n),n=null),l.value=!1,S.value=!0,d[a.value].value=null,d[a.value^1].value=I(),c("error",t)}function E(t){const _=d[t].value,N={key:"img_"+t,class:h.value,style:x.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,..._};return a.value===t?(N.class+=" q-img__image--waiting",Object.assign(N,{onLoad:L,onError:B})):N.class+=" q-img__image--loaded",r("div",{class:"q-img__container absolute-full",key:"img"+t},r("img",N))}function o(){return l.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},G(u[S.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},u.loading!==void 0?u.loading():e.noSpinner===!0?void 0:[r(me,{color:e.spinnerColor,size:e.spinnerSize})])}return z(w()),O(()=>{m=!0,n!==null&&(clearTimeout(n),n=null)}),()=>{const t=[];return s.value!==null&&t.push(r("div",{key:"filler",style:s.value})),S.value!==!0&&(d[0].value!==null&&t.push(E(0)),d[1].value!==null&&t.push(E(1))),t.push(r(Y,{name:"q-transition--fade"},o)),r("div",{class:f.value,style:g.value,role:"img","aria-label":e.alt},t)}}}),ke=[r("circle",{cx:"15",cy:"15",r:"15"},[r("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[r("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),r("circle",{cx:"105",cy:"15",r:"15"},[r("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])],Ne=A({name:"QSpinnerDots",props:he,setup(e){const{cSize:u,classes:c}=_e(e);return()=>r("svg",{class:c.value,fill:"currentColor",width:u.value,height:u.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},ke)}}),{passive:C}=ae,Te=A({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{default:void 0},initialIndex:Number,disable:Boolean,reverse:Boolean},emits:["load"],setup(e,{slots:u,emit:c}){const i=v(!1),s=v(!0),n=v(null),m=v(null);let d=e.initialIndex||0,a,l;const S=b(()=>"q-infinite-scroll__loading"+(i.value===!0?"":" invisible"));function f(){if(e.disable===!0||i.value===!0||s.value===!1)return;const o=P(a),t=R(a),_=$(a);e.reverse===!1?Math.round(t+_+e.offset)>=Math.round(o)&&g():Math.round(t)<=e.offset&&g()}function g(){if(e.disable===!0||i.value===!0||s.value===!1)return;d++,i.value=!0;const o=P(a);c("load",d,t=>{s.value===!0&&(i.value=!1,j(()=>{if(e.reverse===!0){const _=P(a),N=R(a),W=_-o;V(a,N+W)}t===!0?w():n.value&&n.value.closest("body")&&l()}))})}function h(){d=0}function x(){s.value===!1&&(s.value=!0,a.addEventListener("scroll",l,C)),f()}function w(){s.value===!0&&(s.value=!1,i.value=!1,a.removeEventListener("scroll",l,C),l!==void 0&&l.cancel!==void 0&&l.cancel())}function I(){if(a&&s.value===!0&&a.removeEventListener("scroll",l,C),a=ye(n.value,e.scrollTarget),s.value===!0){if(a.addEventListener("scroll",l,C),e.reverse===!0){const o=P(a),t=$(a);V(a,o-t)}f()}}function z(o){d=o}function L(o){o=parseInt(o,10);const t=l;l=o<=0?f:ie(f,isNaN(o)===!0?100:o),a&&s.value===!0&&(t!==void 0&&a.removeEventListener("scroll",t,C),a.addEventListener("scroll",l,C))}function k(o){if(q.value===!0){if(m.value===null){o!==!0&&j(()=>{k(!0)});return}const t=`${i.value===!0?"un":""}pauseAnimations`;Array.from(m.value.getElementsByTagName("svg")).forEach(_=>{_[t]()})}}const q=b(()=>e.disable!==!0&&s.value===!0);T([i,q],()=>{k()}),T(()=>e.disable,o=>{o===!0?w():x()}),T(()=>e.reverse,()=>{i.value===!1&&s.value===!0&&f()}),T(()=>e.scrollTarget,I),T(()=>e.debounce,L);let B=!1;J(()=>{B!==!1&&a&&V(a,B)}),Z(()=>{B=a?R(a):!1}),O(()=>{s.value===!0&&a.removeEventListener("scroll",l,C)}),ee(()=>{L(e.debounce),I(),i.value===!1&&k()});const E=le();return Object.assign(E.proxy,{poll:()=>{l!==void 0&&l()},trigger:g,stop:w,reset:h,resume:x,setIndex:z}),()=>{const o=te(u.default,[]);return q.value===!0&&o[e.reverse===!1?"push":"unshift"](r("div",{ref:m,class:S.value},G(u.loading))),r("div",{class:"q-infinite-scroll",ref:n},o)}}}),U=e=>(fe("data-v-43d0ccc8"),e=e(),ve(),e),qe={class:"container"},Be={class:"modal_content"},ze={class:"total"},Le=U(()=>p("h3",{class:"title"},"Галерея",-1)),Ee={class:"images"},Me=["onClick"],Pe=U(()=>p("div",{class:"image_hover"},null,-1)),Qe={class:"row justify-center q-my-md"},De=ne({__name:"Gallery",setup(e){const u=v(),c=v([]),i=v(0),s=v(!1),n=b(()=>c.value.length);async function m(f,g){const h=await Ce.getImages(u.value);c.value=[...c.value,...h.data.images],u.value=h.data.pageToken,u.value?g():g(!0)}function d(f){i.value=f,s.value=!0}function a(){i.value>0?i.value--:i.value}function l(){i.value<n.value-1?i.value++:i.value}function S(f){f.key==="ArrowLeft"?a():f.key==="ArrowRight"&&l()}return(f,g)=>(Q(),oe(we,{title:"Галерея"},{default:M(()=>[p("div",qe,[y(Se,{class:"modal",modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=h=>s.value=h),maximized:"","no-refocus":"",onKeydown:S},{default:M(()=>[p("div",Be,[p("div",ze,se(i.value+1+"/"+re(n)),1),y(D,{class:"left",name:"chevron_left",size:"45px",color:"white",onClick:a}),y(D,{class:"right",name:"chevron_right",size:"45px",color:"white",onClick:l}),ue(y(D,{class:"close",name:"close",size:"40px",color:"white"},null,512),[[be]]),y(F,{class:"img",src:c.value[i.value].link,"spinner-color":"secondary"},null,8,["src"])])]),_:1},8,["modelValue"]),Le,y(Te,{onLoad:m},{loading:M(()=>[p("div",Qe,[y(Ne,{color:"primary",size:"40px"})])]),default:M(()=>[p("div",Ee,[(Q(!0),H(de,null,ce(c.value,(h,x)=>(Q(),H("div",{class:"image-block",onClick:w=>d(x)},[y(F,{class:"image_item",src:h.link,"spinner-color":"secondary"},null,8,["src"]),Pe],8,Me))),256))])]),_:1})])]),_:1}))}});const Ke=ge(De,[["__scopeId","data-v-43d0ccc8"]]);export{Ke as default};
