import{r as o,C as $,a5 as F,a6 as Y,b5 as G,B as d,a as y,b6 as H,b7 as J,l as Q,h as U,c as W,b3 as X,x as Z,b8 as ee,K as ne,z as r,y as z}from"./index-83df2432.js";import{T as R}from"./index-ad423986.js";var te=function(n){var i=n.prefixCls,l=n.okButtonProps,c=n.cancelButtonProps,h=n.title,f=n.cancelText,u=n.okText,O=n.okType,v=n.icon,b=n.showCancel,s=b===void 0?!0:b,T=n.close,C=n.onConfirm,p=n.onCancel,_=o.useContext($),P=_.getPrefixCls;return o.createElement(F,{componentName:"Popconfirm",defaultLocale:Y.Popconfirm},function(x){return o.createElement("div",{className:"".concat(i,"-inner-content")},o.createElement("div",{className:"".concat(i,"-message")},v&&o.createElement("span",{className:"".concat(i,"-message-icon")},v),o.createElement("div",{className:"".concat(i,"-message-title")},G(h))),o.createElement("div",{className:"".concat(i,"-buttons")},s&&o.createElement(d,y({onClick:p,size:"small"},c),f??x.cancelText),o.createElement(H,{buttonProps:y(y({size:"small"},J(O)),l),actionFn:C,close:T,prefixCls:P("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},u??x.okText)))})},w=globalThis,ae=globalThis&&globalThis.__rest||function(e,n){var i={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(i[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(e);c<l.length;c++)n.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(e,l[c])&&(i[l[c]]=e[l[c]]);return i},le=o.forwardRef(function(e,n){var i=e.prefixCls,l=e.placement,c=l===void 0?"top":l,h=e.trigger,f=h===void 0?"click":h,u=e.okType,O=u===void 0?"primary":u,v=e.icon,b=v===void 0?o.createElement(ee,null):v,s=e.children,T=e.overlayClassName,C=e.onOpenChange,p=e.onVisibleChange,_=ae(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),P=o.useContext($),x=P.getPrefixCls,S=Q(!1,{value:e.open!==void 0?e.open:e.visible,defaultValue:e.defaultOpen!==void 0?e.defaultOpen:e.defaultVisible}),I=U(S,2),E=I[0],V=I[1],k=function(t,a){V(t,!0),p==null||p(t,a),C==null||C(t,a)},K=function(t){k(!1,t)},j=function(t){var a;return(a=e.onConfirm)===null||a===void 0?void 0:a.call(w,t)},A=function(t){var a;k(!1,t),(a=e.onCancel)===null||a===void 0||a.call(w,t)},D=function(t){t.keyCode===ne.ESC&&E&&k(!1,t)},M=function(t){var a=e.disabled,g=a===void 0?!1:a;g||k(t)},N=x("popover",i),q=x("popconfirm",i),L=W(q,T);return o.createElement(X,y({},_,{trigger:f,prefixCls:N,placement:c,onOpenChange:M,open:E,ref:n,overlayClassName:L,_overlay:o.createElement(te,y({okType:O,icon:b},e,{prefixCls:N,close:K,onConfirm:j,onCancel:A}))}),Z(s,{onKeyDown:function(t){var a,g;o.isValidElement(s)&&((g=s==null?void 0:(a=s.props).onKeyDown)===null||g===void 0||g.call(a,t)),D(t)}}))});const B=le,re=[{label:"用户名",name:"name",components:"Input"},{label:"手机号",name:"phone",components:"Input"},{label:"状态",name:"status",components:"Select",options:[{label:"启用",value:"running"},{label:"停用",value:"stop"}]}],ce=[{title:"用户名称",dataIndex:"name"},{title:"用户账号",dataIndex:"user"},{title:"状态",dataIndex:"status",render:e=>{let n=e=="stop"?"red":"blue";return r(R,{color:n,children:e=="stop"?"停用":"启用"})}},{title:"邮箱",dataIndex:"email"},{title:"创建时间",dataIndex:"time"},{title:"操作",key:"operation",align:"center",width:150,render:()=>r(d,{type:"link",children:"编辑"})}],se=[{label:"消息名称",name:"name",components:"Input"},{label:"发布日期",name:"time",placeholder:["开始日期","结束日期"],components:"RangePicker",labelCol:{span:0,offset:0}},{label:"状态",name:"status",components:"Select",options:[{label:"已读",value:"read"},{label:"未读",value:"unread"}]}],de=[{title:"消息名称",dataIndex:"name"},{title:"消息描述",dataIndex:"desc",width:600,ellipsis:!0},{title:"状态",dataIndex:"status",render:e=>{let n=e=="unread"?"red":"blue";return r(R,{color:n,children:e=="unread"?"未读":"已读"})}},{title:"操作人",dataIndex:"user"},{title:"发布时间",dataIndex:"time"}],ue=e=>[{title:"菜单名称",dataIndex:"meta",render:n=>r("span",{children:(n==null?void 0:n.title)||""})},{title:"图标",dataIndex:"icon",render:n=>r("i",{className:`iconfont ${n} !text-[18px] font-black`})},{title:"路由",dataIndex:"path"},{title:"操作",key:"operation",align:"center",width:150,render:()=>z("div",{children:[r(d,{type:"link",size:"small",onClick:()=>e(!0,"新增菜单"),children:"新增"}),r(d,{type:"link",size:"small",onClick:()=>e(!0,"编辑菜单"),children:"编辑"}),r(B,{placement:"topRight",title:"Are you sure to delete this task?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:r(d,{type:"link",size:"small",danger:!0,children:"删除"})})]})}],me=e=>[{title:"权限名称",dataIndex:"name"},{title:"权限标识",dataIndex:"key"},{title:"操作",key:"operation",align:"center",width:150,render:()=>z("div",{children:[r(d,{type:"link",size:"small",onClick:()=>e(!0,"编辑权限配置"),children:"编辑"}),r(B,{placement:"topRight",title:"Are you sure to delete this task?",onConfirm:()=>{},okText:"Yes",cancelText:"No",children:r(d,{type:"link",size:"small",danger:!0,children:"删除"})})]})}];export{ce as AccountColumns,me as MenuBtnColumns,ue as MenuColumns,de as NotifyColumns,re as queryAccountConfig,se as queryNotifyConfig};
