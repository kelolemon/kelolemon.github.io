import{r as n,y as l,z as e,B as r}from"./index-83df2432.js";import{M as d}from"./index-7f063394.js";function m(){const[s,o]=n.useState(!1);return l("div",{className:"card",children:[e(r,{onClick:()=>{o(!s)},type:"primary",children:"自定义弹窗"}),e(d,{isModalOpen:s,setIsOpen:(t,a)=>{o(t),console.warn(`点击了${a}按钮`)},title:"自定义弹窗",children:"弹窗内容"})]})}export{m as default};
