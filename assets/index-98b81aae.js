import{r as o,F as O,b as u,ad as w,y as C,z as t,B as m}from"./index-83df2432.js";import{AccountColumns as D,queryAccountConfig as b}from"./data-c1182aad.js";import x from"./AddAccount-899fc966.js";import{F as v}from"./index-2fed85b9.js";import{T as I}from"./index-825b3be3.js";import{P as R}from"./PlusOutlined-ec572272.js";import{D as j}from"./DeleteOutlined-25685737.js";import"./index-ad423986.js";import"./index-ee407347.js";import"./CheckOutlined-1272589c.js";import"./index-7f063394.js";import"./PlusOutlined-7b3dd7ad.js";var d=function(n,s){return o.createElement(O,u(u({},n),{},{ref:s,icon:j}))};d.displayName="DeleteOutlined";const q=o.forwardRef(d);function A(){return w.request({url:"/system/users",method:"post"})}function H(){const[a,n]=o.useState([]),[s,r]=o.useState(!1),f={submit:e=>{console.warn("Received values of form: ",e),c()},formsColumn:b};o.useEffect(()=>{c()},[]);async function c(){r(!0);const e=await A();n(e),r(!1)}const[l,i]=o.useState(!1),p=()=>{i(!l)},g=(e,y)=>{i(e),console.warn("表单内容",y)},[S,h]=o.useState([]);return C("div",{className:"card",children:[t(x,{isModalOpen:l,setIsOpen:g}),t(v,{formConfig:f}),t("p",{className:"mb-[12px]"}),t(I,{columns:D,dataSource:a,loading:s,rowSelection:{selectedRowKeys:S,onChange:e=>{console.warn("selectedRowKeys changed: ",e),h(e)}},headerContent:{content:()=>[t(m,{onClick:p,type:"primary",icon:t(R,{}),children:"新增"},"button2"),t(m,{type:"primary",danger:!0,icon:t(q,{}),children:"批量删除"},"button3")]}})]})}export{H as default};
