import{d as A,aB as E,r as a,n as U,w as h,c,b as o,A as x,o as p,f,k as s,h as Q,e as t,Q as R,g as I,a2 as D,p as $,i as j,_ as G}from"./index-9a19f992.js";import{Q as F}from"./QInput-984ad8f6.js";import{Q as B}from"./QBtn-0ee999ef.js";import{Q as M,V as m}from"./QForm-2bcde2ad.js";import{T as H}from"./ToolsLayout-1f5d9798.js";import{u as P}from"./use-key-composition-8f576511.js";import"./focus-manager-e79c27be.js";import"./QLayout-5cd944ea.js";import"./scroll-14701fa6.js";import"./uid-6a237b22.js";const J=l=>($("data-v-4b20ddfc"),l=l(),j(),l),K={class:"container"},O=J(()=>f("h5",{class:"title text-primary"},"Адрес электронной почты",-1)),W={class:"message"},X=A({__name:"Restore",setup(l){const q=E(),i=a(""),v=a(null),_=a(!1),n=a(""),d=a(!1),y=a(!1),b=a(null),g=U(()=>q.query.link),{f:C,loading:w,success:L,error:S}=P({fn:()=>x.sendMail(i.value),successMsg:"На указаный адрес отправлено письмо",errorMsg:"Письмо не отправлено"}),{f:N,loading:V,error:k}=P({fn:()=>{var e;return x.restorePassword(n.value,((e=g.value)==null?void 0:e.toString())||"")}}),T=[e=>m.required(e)||"Заполните поле",e=>m.isEmail(e)||"Введите корректный е-мэйл"],z=[e=>m.required(e)||"Заполните поле",e=>m.lengthInterval(6,20)(e)||"Пароль должен содержать от 6 до 20 символов"];return h(i,async()=>{var e;_.value=await((e=v.value)==null?void 0:e.validate())&&!w.value||!1}),h(n,async()=>{var e;y.value=await((e=b.value)==null?void 0:e.validate())&&!V.value||!1}),(e,r)=>(p(),c(H,{title:"Восстановление пароля"},{default:o(()=>[f("div",K,[O,s(g)?(p(),c(M,{key:1,class:"form",ref_key:"passwordForm",ref:b,onSubmit:Q(s(N),["prevent"])},{default:o(()=>[t(F,{modelValue:n.value,"onUpdate:modelValue":r[2]||(r[2]=u=>n.value=u),outlined:"",label:"Новый пароль",rules:z,error:!!s(k),"error-message":s(k),"lazy-rules":"",type:d.value?"text":"password"},{append:o(()=>[t(R,{name:d.value?"visibility":"visibility_off",onClick:r[1]||(r[1]=u=>d.value=!d.value)},null,8,["name"])]),_:1},8,["modelValue","error","error-message","type"]),t(B,{class:"button",type:"submit",color:"primary",loading:s(V),disable:!y.value},{default:o(()=>[I("Изменить")]),_:1},8,["loading","disable"])]),_:1},8,["onSubmit"])):(p(),c(M,{key:0,class:"form",ref_key:"emailForm",ref:v,onSubmit:Q(s(C),["prevent"])},{default:o(()=>[t(F,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=u=>i.value=u),outlined:"",label:"Адрес электронной почты",rules:T,"lazy-rules":"",error:!!s(S),"error-message":s(S)},{append:o(()=>[t(R,{name:"email"})]),_:1},8,["modelValue","error","error-message"]),t(B,{class:"button",color:"primary",type:"submit",loading:s(w),disable:!_.value},{default:o(()=>[I("Восстановить")]),_:1},8,["loading","disable"]),f("div",W,D(s(L)),1)]),_:1},8,["onSubmit"]))])]),_:1}))}});const ne=G(X,[["__scopeId","data-v-4b20ddfc"]]);export{ne as default};
