import{j as h}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const g=({label:o,size:x="normal",allCaps:C=!1,color:z="text-secondary",fontColor:v})=>h.jsx("span",{className:`${x} ${z} ${o}`,style:{color:v},children:C?o.toLocaleUpperCase():o});g.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:'"normal"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all text",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Label color",defaultValue:{value:'"text-secondary"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const T={title:"UI/Labels/MyLabel",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic label",size:"normal"}},a={args:{label:"All caps label",size:"normal",allCaps:!0}},r={args:{label:"Secondary label",size:"normal",color:"text-secondary"}},l={args:{label:"Custom color label",size:"normal",fontColor:"#3df001"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Basic label',
    size: 'normal'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All caps label',
    size: 'normal',
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    size: 'normal',
    color: 'text-secondary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,b,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom color label',
    size: 'normal',
    fontColor: '#3df001'
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const q=["Basic","AllCaps","Secondary","CustomColon"];export{a as AllCaps,e as Basic,l as CustomColon,r as Secondary,q as __namedExportsOrder,T as default};
