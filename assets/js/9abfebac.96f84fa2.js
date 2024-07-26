"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21328],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||g[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(58168),o=(r(96540),r(15680));const i={description:"XIAO nRF52840(Sense)-FAQ",title:"What are the considerations when using XIAO nRF52840 (Sense) for battery charging?",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/battery_charging_considerations",last_update:{date:"6/28/2023",author:"cheng.tang"}},a=void 0,s={unversionedId:"FAQ/XIAO/battery_charging_considerations",id:"FAQ/XIAO/battery_charging_considerations",title:"What are the considerations when using XIAO nRF52840 (Sense) for battery charging?",description:"XIAO nRF52840(Sense)-FAQ",source:"@site/docs/FAQ/XIAO/battery_charging_considerations.md",sourceDirName:"FAQ/XIAO",slug:"/battery_charging_considerations",permalink:"/battery_charging_considerations",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/XIAO/battery_charging_considerations.md",tags:[],version:"current",lastUpdatedBy:"cheng.tang",lastUpdatedAt:1687910400,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{description:"XIAO nRF52840(Sense)-FAQ",title:"What are the considerations when using XIAO nRF52840 (Sense) for battery charging?",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/battery_charging_considerations",last_update:{date:"6/28/2023",author:"cheng.tang"}}},c={},u=[],l={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"When P0.14 (D14) turns off the ADC function at a high level of 3.3V, P0.31 will be at the input voltage limit of 3.6V. There is a risk of burning out the P0.31 pin."),(0,o.yg)("p",null,"Currently for this issue, we recommend that users do not turn off the ADC function of P0.14 (D14) or set P0.14 (D14) to high during battery charging."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/14.png",alt:"pir",width:800,height:"auto"})))}g.isMDXComponent=!0}}]);