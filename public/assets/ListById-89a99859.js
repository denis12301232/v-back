import{d as w,aw as S,aB as C,n as L,B as Q,w as x,c as y,b as o,o as r,f as e,k as t,a3 as l,e as d,Q as A,aa as T,a9 as q,g as b,a1 as N,a2 as g,a4 as V,p as $,i as M,_ as E}from"./index-9de4a442.js";import{Q as R}from"./QMarkupTable-d575d6ec.js";import{Q as h}from"./QBtn-c600b51e.js";import{T as U}from"./ToolsLayout-cfc975f8.js";import{F as z}from"./FormAssistance-576398e2.js";import{u as v}from"./use-key-composition-20c01320.js";import{u as D}from"./useBeautifyAssistance-d4d71ecc.js";import{A as B}from"./AssistanceService-0b8049ec.js";import"./QLayout-7e677f3e.js";import"./scroll-481bd017.js";import"./QInput-dc0f1e6f.js";import"./focus-manager-e79c27be.js";import"./format-7389883c.js";import"./QDialog-fb7ab497.js";import"./use-prevent-scroll-9bdff198.js";import"./use-timeout-3c025720.js";import"./use-tick-b7ad69f5.js";import"./QItemLabel-9267f3e9.js";import"./selection-8de44bdc.js";import"./QCheckbox-ade06a0a.js";import"./QChip-f36d90d5.js";import"./rtl-36dd996b.js";import"./QOptionGroup-4ec745ed.js";import"./QForm-6730ad9c.js";import"./ClosePopup-37448b23.js";import"./uid-6a237b22.js";const j=s=>($("data-v-b8bd491a"),s=s(),M(),s),G={class:"container"},H={key:0},J=j(()=>e("h4",{class:"title"},"Заявка",-1)),K={class:"edit"},O=w({__name:"ListById",props:{id:null},setup(s){const u=s,k=S(),c=C(),f=L(()=>!!c.query.edit),{f:F,loading:P,error:W,data:m}=v({fn:()=>B.getFormById(u.id)}),{f:I,loading:_}=v({fn:i=>B.modifyAssistanceForm(i,u.id).then(()=>k.push({query:void 0})),alert:!0,successMsg:"Обновлено"});return Q(F),x(c,()=>{window.scrollTo(0,0)}),(i,n)=>(r(),y(U,{title:"Информация о заявке"},{default:o(()=>[e("div",G,[t(f)?t(m)&&t(f)?(r(),y(z,{key:1,form:t(m),title:"Редактировать заявку",onSubmit:t(I),loading:t(_),reset:!1},{submit:o(({type:a,valid:p})=>[d(h,{type:a,loading:t(_),disable:!p,color:"primary"},{default:o(()=>[b("Изменить")]),_:2},1032,["type","loading","disable"])]),cancel:o(()=>[d(h,{onClick:n[1]||(n[1]=a=>i.$router.push({query:void 0})),color:"primary"},{default:o(()=>[b("Отмена")]),_:1})]),_:1},8,["form","onSubmit","loading"])):N("",!0):(r(),l("div",H,[J,e("div",K,[d(A,{name:"edit",size:"20px",onClick:n[0]||(n[0]=a=>i.$router.push({query:{edit:"true"}}))})]),d(R,null,{default:o(()=>[e("tbody",null,[(r(!0),l(T,null,q(t(m),(a,p)=>(r(),l("tr",null,[e("td",null,g(t(V).assistance[p]),1),e("td",null,g(t(D)(a)),1)]))),256))])]),_:1})]))])]),_:1}))}});const Ft=E(O,[["__scopeId","data-v-b8bd491a"]]);export{Ft as default};