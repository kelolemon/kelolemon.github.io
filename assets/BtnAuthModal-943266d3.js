import{az as s,z as e,y as d,av as n}from"./index-83df2432.js";import{M as m}from"./index-7f063394.js";const c={labelCol:{span:6},wrapperCol:{span:16}},p={required:"${label} is required!"},f=({isModalOpen:t,setIsOpen:r,title:i})=>{const[a]=s.useForm();return e(m,{isModalOpen:t,setIsOpen:async(l,o)=>{if(o=="sure"){const u=await a.validateFields();r(l,u)}else r(l,"")},title:i,children:d(s,{...c,form:a,name:"nest-messages",validateMessages:p,children:[e(s.Item,{name:"title",label:"权限名称",rules:[{required:!0}],children:e(n,{})}),e(s.Item,{name:"key",label:"权限标识",rules:[{required:!0}],children:e(n,{})})]})})};export{f as default};
