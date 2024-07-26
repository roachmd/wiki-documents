"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13693],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const i={description:"XIAO-ESP32S3-FAQ",title:"Why does my XIAO have the problem of not being flush at the rounded corners",slug:"/not_being_flush",last_update:{date:"6/30/2023",author:"cheng.tang"}},a=void 0,l={unversionedId:"FAQ/XIAO/not_being_flush",id:"FAQ/XIAO/not_being_flush",title:"Why does my XIAO have the problem of not being flush at the rounded corners",description:"XIAO-ESP32S3-FAQ",source:"@site/docs/FAQ/XIAO/not_being_flush.md",sourceDirName:"FAQ/XIAO",slug:"/not_being_flush",permalink:"/not_being_flush",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/XIAO/not_being_flush.md",tags:[],version:"current",lastUpdatedBy:"cheng.tang",lastUpdatedAt:1688083200,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{description:"XIAO-ESP32S3-FAQ",title:"Why does my XIAO have the problem of not being flush at the rounded corners",slug:"/not_being_flush",last_update:{date:"6/30/2023",author:"cheng.tang"}}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png",style:{width:500,height:"auto"}})),(0,o.yg)("p",null,"First of all, it should be noted that this is not a quality issue and will not affect the normal function of XIAO."),(0,o.yg)("p",null,"XIAO ESP32S3 is the most complex one in all XIAO because of its high integration, and the PCB needs to be put together in factory production. Due to the high level of integration, the splicing board connection can only be placed at the four rounded corners, which will lead to the problem of uneven rounded corners on the picture. We will try to improve the process to ensure that this problem will be solved in the subsequent production."))}d.isMDXComponent=!0}}]);