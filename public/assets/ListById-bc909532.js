import{d as w,aw as S,aB as C,n as L,a6 as Q,w as x,c as y,b as o,o as a,f as e,k as t,X as l,e as d,Q as A,a4 as T,a3 as V,g as b,V as q,W as g,Y as N,p as $,i as M,_ as E}from"./index-e5e9097c.js";import{Q as R}from"./QMarkupTable-4af7c470.js";import{Q as h}from"./QBtn-68e1acb0.js";import{T as U}from"./ToolsLayout-c3ca4b37.js";import{F as z}from"./FormAssistance-7153ab7b.js";import{u as v}from"./use-key-composition-03035ab4.js";import{u as D}from"./useBeautifyAssistance-d4d71ecc.js";import{A as B}from"./AssistanceService-41b69bbf.js";import"./QLayout-f9a4666d.js";import"./scroll-49674bee.js";import"./QInput-a064f86b.js";import"./focus-manager-e79c27be.js";import"./format-7389883c.js";import"./QDialog-311997ce.js";import"./use-prevent-scroll-86cdee42.js";import"./use-timeout-218cbdd7.js";import"./use-tick-355e26fc.js";import"./QItemLabel-9b5420d3.js";import"./selection-cf2d6bd0.js";import"./QCheckbox-332c8a72.js";import"./QChip-0dfdefb8.js";import"./rtl-36dd996b.js";import"./QOptionGroup-233c078a.js";import"./QForm-13917ae2.js";import"./ClosePopup-60e3f706.js";import"./uid-6a237b22.js";const W=s=>($("data-v-b8bd491a"),s=s(),M(),s),X={class:"container"},Y={key:0},j=W(()=>e("h4",{class:"title"},"Заявка",-1)),G={class:"edit"},H=w({__name:"ListById",props:{id:null},setup(s){const u=s,k=S(),c=C(),f=L(()=>!!c.query.edit),{f:F,loading:J,error:K,data:m}=v({fn:()=>B.getFormById(u.id)}),{f:I,loading:_}=v({fn:i=>B.modifyAssistanceForm(i,u.id).then(()=>k.push({query:void 0})),alert:!0,successMsg:"Обновлено"});return Q(F),x(c,()=>{window.scrollTo(0,0)}),(i,n)=>(a(),y(U,{title:"Информация о заявке"},{default:o(()=>[e("div",X,[t(f)?t(m)&&t(f)?(a(),y(z,{key:1,form:t(m),title:"Редактировать заявку",onSubmit:t(I),loading:t(_),reset:!1},{submit:o(({type:r,valid:p})=>[d(h,{type:r,loading:t(_),disable:!p,color:"primary"},{default:o(()=>[b("Изменить")]),_:2},1032,["type","loading","disable"])]),cancel:o(()=>[d(h,{onClick:n[1]||(n[1]=r=>i.$router.push({query:void 0})),color:"primary"},{default:o(()=>[b("Отмена")]),_:1})]),_:1},8,["form","onSubmit","loading"])):q("",!0):(a(),l("div",Y,[j,e("div",G,[d(A,{name:"edit",size:"20px",onClick:n[0]||(n[0]=r=>i.$router.push({query:{edit:"true"}}))})]),d(R,null,{default:o(()=>[e("tbody",null,[(a(!0),l(T,null,V(t(m),(r,p)=>(a(),l("tr",null,[e("td",null,g(t(N).assistance[p]),1),e("td",null,g(t(D)(r)),1)]))),256))])]),_:1})]))])]),_:1}))}});const Ft=E(H,[["__scopeId","data-v-b8bd491a"]]);export{Ft as default};
