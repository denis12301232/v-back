import{Q as k,R as u}from"./QBtn-c600b51e.js";import{Q as D,a as R,b as x,c as B,d as S}from"./QLayout-7e677f3e.js";import{d as $,u as H,r as b,c as r,b as a,a0 as E,k as t,o,e,g as i,a1 as f,E as c,Q as d,a2 as p,a3 as I,a4 as N,f as h,a5 as C,_ as F}from"./index-9de4a442.js";import{Q as _,a as s}from"./selection-8de44bdc.js";import{Q as V}from"./QList-2e435860.js";import{a as L,b as U,c as q,Q as z}from"./QCardSection-80a7d0cd.js";const O=["src"],K={class:"user_name"},P={class:"user_status"},j=$({__name:"HeaderLayout",props:{openFromTg:{type:Boolean,default:!1}},emits:["openLogin"],setup(T,{emit:w}){const l=H(),v=b(!1),g=b(!1);function A(){v.value=!v.value}function y(){g.value=!g.value}return(Q,n)=>(o(),r(D,{class:E(t(l).currentTheme==="dark"?"dark":"light"),view:"hhh lpR fFf"},{default:a(()=>[T.openFromTg?f("",!0):(o(),r(R,{key:0,class:"header",reveal:"",elevated:""},{default:a(()=>[e(B,null,{default:a(()=>[e(k,{dense:"",flat:"",round:"",icon:"menu",onClick:A}),e(x,null,{default:a(()=>[i("Kharkov Volonteer")]),_:1}),e(k,{dense:"",flat:"",round:"",onClick:t(l).setTheme,icon:t(l).currentTheme==="dark"?"light_mode":"dark_mode",style:{"margin-right":"5px"}},null,8,["onClick","icon"]),t(l).isAuth?(o(),r(k,{key:1,dense:"",flat:"",round:"",icon:"account_circle",onClick:y})):(o(),r(k,{key:0,color:"primary",onClick:n[0]||(n[0]=m=>w("openLogin"))},{default:a(()=>[i("Вход ")]),_:1}))]),_:1})]),_:1})),e(L,{modelValue:v.value,"onUpdate:modelValue":n[1]||(n[1]=m=>v.value=m),side:"left",overlay:"",bordered:""},{default:a(()=>[e(V,{class:"list"},{default:a(()=>[c((o(),r(_,{class:"list_item",clickable:"",tag:"a",to:"/","active-class":"active"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(d,{name:"note_add"})]),_:1}),e(s,null,{default:a(()=>[i("Внести данные")]),_:1})]),_:1})),[[u]]),t(l).isAdmin?c((o(),r(_,{key:0,class:"list_item",clickable:"",tag:"a",to:"/list","active-class":"active"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(d,{name:"format_list_numbered"})]),_:1}),e(s,null,{default:a(()=>[i("Полный список")]),_:1})]),_:1})),[[u]]):f("",!0),t(l).isAdmin?c((o(),r(_,{key:1,class:"list_item",clickable:"",tag:"a",to:"/info","active-class":"active"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(d,{name:"question_mark"})]),_:1}),e(s,null,{default:a(()=>[i("Информация по человеку ")]),_:1})]),_:1})),[[u]]):f("",!0),c((o(),r(_,{class:"list_item",clickable:"",tag:"a",to:"/gallery","active-class":"active"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(d,{name:"collections"})]),_:1}),e(s,null,{default:a(()=>[i("Галлерея")]),_:1})]),_:1})),[[u]]),t(l).isAuth?c((o(),r(_,{key:2,class:"list_item",clickable:"",tag:"a",to:"/messanger","active-class":"active"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(d,{name:"chat"})]),_:1}),e(s,null,{default:a(()=>[i("Мессенджер ")]),_:1})]),_:1})),[[u]]):f("",!0)]),_:1})]),_:1},8,["modelValue"]),t(l).isAuth?(o(),r(L,{key:1,modelValue:g.value,"onUpdate:modelValue":n[3]||(n[3]=m=>g.value=m),side:"right",overlay:"",bordered:""},{default:a(()=>[e(z,{class:"user_info",square:"",flat:""},{default:a(()=>[e(U,null,{default:a(()=>[e(q,{size:"45px",color:"secondary"},{default:a(()=>[i(p(t(l).user.avatar?"":t(l).user.name.slice(0,1)),1),t(l).user.avatar?(o(),I("img",{key:0,src:`${t(N).SERVER_URL}/avatars/${t(l).user.avatar}`},null,8,O)):f("",!0)]),_:1}),h("div",K,p(t(l).user.name),1),h("div",P,p(t(l).isAuth?"online":"offline"),1)]),_:1})]),_:1}),e(V,{class:"list"},{default:a(()=>[c((o(),r(_,{class:"list_item",clickable:"",tag:"a",to:"/account","active-class":"active"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(d,{name:"manage_accounts"})]),_:1}),e(s,null,{default:a(()=>[i("Аккаунт")]),_:1})]),_:1})),[[u]]),t(l).isAdmin?c((o(),r(_,{key:0,class:"list_item",clickable:"",tag:"a",to:"/tools","active-class":"active"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(d,{name:"admin_panel_settings"})]),_:1}),e(s,null,{default:a(()=>[i("Настройки")]),_:1})]),_:1})),[[u]]):f("",!0),c((o(),r(_,{class:"list_item",clickable:"",onClick:n[2]||(n[2]=m=>[t(l).logout(),y()]),"active-class":"active"},{default:a(()=>[e(s,{avatar:""},{default:a(()=>[e(d,{name:"logout"})]),_:1}),e(s,null,{default:a(()=>[i("Выйти")]),_:1})]),_:1})),[[u]])]),_:1})]),_:1},8,["modelValue"])):f("",!0),e(S,null,{default:a(()=>[C(Q.$slots,"default",{},void 0,!0),C(Q.$slots,"form",{},void 0,!0)]),_:3})]),_:3},8,["class"]))}});const Z=F(j,[["__scopeId","data-v-008c0b52"]]);export{Z as H};