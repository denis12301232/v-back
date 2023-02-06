import{Q as w}from"./QInput-a064f86b.js";import{b as C,Q as T,a as m}from"./QTable-9ac0a07c.js";import{Q as U}from"./QOptionGroup-233c078a.js";import{Q as I}from"./QPagination-4d3dbc32.js";import{u as R}from"./use-key-composition-03035ab4.js";import{d as S,r as i,w as L,n as N,X as f,e as t,b as l,k as _,V as B,o as v,g as b,W as g,f as y,p as M,i as j,_ as q}from"./index-e5e9097c.js";import{T as V}from"./ToolsService-a86d990b.js";import"./focus-manager-e79c27be.js";import"./QList-da38b722.js";import"./QMarkupTable-4af7c470.js";import"./QCheckbox-332c8a72.js";import"./QChip-0dfdefb8.js";import"./QBtn-68e1acb0.js";import"./selection-cf2d6bd0.js";import"./QItemLabel-9b5420d3.js";import"./use-prevent-scroll-86cdee42.js";import"./scroll-49674bee.js";import"./QDialog-311997ce.js";import"./use-timeout-218cbdd7.js";import"./use-tick-355e26fc.js";import"./rtl-36dd996b.js";import"./format-7389883c.js";import"./QLinearProgress-3da691dc.js";import"./uid-6a237b22.js";const z=s=>(M("data-v-051dd5bf"),s=s(),j(),s),D={class:"form"},E=z(()=>y("h5",{class:"title"},"Настроить роли пользователей",-1)),F={key:0,class:"row justify-center q-mt-md"},G=S({__name:"ToolsRoles",setup(s){const r=i(""),u=10,n=i(1),d=i(0),p=i([]);L(n,async()=>{const o=await V.getUsers(u,n.value);d.value=Math.ceil(+o.headers["x-total-count"]/u),p.value=o.data},{immediate:!0});const{f:h}=R({fn:V.updateRoles,alert:!0,successMsg:"Обновлено"}),x=N(()=>{var o;return(o=p.value)==null?void 0:o.filter(e=>e.login.toLowerCase().includes(r.value.toLowerCase())||e.name.toLowerCase().includes(r.value.toLowerCase()))}),Q=[{label:"Пользователь",value:"user",disable:!0},{label:"Админ",value:"admin"}],k=[{name:"name",label:"Имя",align:"left",field:"name",sortable:!0,sort:(o,e)=>o.localeCompare(e)},{name:"login",label:"Логин",align:"left",field:"login",sortable:!0,sort:(o,e)=>o.localeCompare(e)},{name:"roles",label:"Роль",align:"center",field:"roles"}];return(o,e)=>(v(),f("div",D,[E,t(w,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),outlined:"",label:"Поиск"},null,8,["modelValue"]),t(C,{class:"table",rows:_(x),columns:k,"binary-state-sort":"",separator:"cell","row-key":"index","hide-pagination":"","no-data-label":"Ничего не найдено"},{body:l(({row:a})=>[t(T,null,{default:l(()=>[t(m,{key:"name"},{default:l(()=>[b(g(a.name),1)]),_:2},1024),t(m,{key:"login"},{default:l(()=>[b(g(a.login),1)]),_:2},1024),t(m,{key:"roles","auto-width":""},{default:l(()=>[y("div",null,[t(U,{modelValue:a.roles,"onUpdate:modelValue":[c=>a.roles=c,c=>_(h)(a._id,a.roles)],type:"checkbox",options:Q},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024)]),_:1},8,["rows"]),d.value>1?(v(),f("div",F,[t(I,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),color:"grey-8",max:d.value,size:"sm"},null,8,["modelValue","max"])])):B("",!0)]))}});const ce=q(G,[["__scopeId","data-v-051dd5bf"]]);export{ce as default};
