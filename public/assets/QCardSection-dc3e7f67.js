import{a as u,b as l}from"./use-key-composition-03035ab4.js";import{m as t,n as o,q as s,t as n,v as i}from"./index-e5e9097c.js";const m=t({name:"QCard",props:{...u,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=i(),d=l(a,e),c=o(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>s(a.tag,{class:c.value},n(r.default))}}),g=t({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:r}){const e=o(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>s(a.tag,{class:e.value},n(r.default))}});export{m as Q,g as a};
