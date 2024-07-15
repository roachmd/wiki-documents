"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38499],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>v});var o=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=o.createContext({}),l=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||n;return t?o.createElement(v,a(a({ref:r},c),{},{components:t})):o.createElement(v,a({ref:r},c))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,a=new Array(n);a[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<n;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33916:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=t(58168),i=(t(96540),t(15680));const n={title:"Overview",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/Wio-Terminal-IO-Overview",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Overview",s={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Overview",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Overview",title:"Overview",description:"This repo introduce how to use the Grove IOs on the Wio Terminal. This allows you to enjoy the plug and play functionality of the Grove Ecosystem as well as using the 40 pin Raspberry pi compatible GPIO!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Wio-Terminal-IO-Overview",permalink:"/Wio-Terminal-IO-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Overview.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Overview",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/Wio-Terminal-IO-Overview",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"How to use LvGL Graphics Library",permalink:"/Wio-Terminal-LVGL"},next:{title:"Analog",permalink:"/Wio-Terminal-IO-Analog"}},u={},l=[{value:"Hardware Schematics",id:"hardware-schematics",level:2},{value:"Wio Terminal RPI Pinout",id:"wio-terminal-rpi-pinout",level:3},{value:"<em>For more information, please check <code>variant.h</code> for more information</em>",id:"for-more-information-please-check-varianth-for-more-information",level:4},{value:"Wio Terminal Grove Port Pinout",id:"wio-terminal-grove-port-pinout",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,i.yg)(p,(0,o.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"overview"},"Overview"),(0,i.yg)("p",null,"This repo introduce how to use the Grove IOs on the Wio Terminal. This allows you to enjoy the plug and play functionality of the Grove Ecosystem as well as using the 40 pin Raspberry pi compatible GPIO!"),(0,i.yg)("h2",{id:"hardware-schematics"},"Hardware Schematics"),(0,i.yg)("h3",{id:"wio-terminal-rpi-pinout"},"Wio Terminal RPI Pinout"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg"})),(0,i.yg)("p",null,"Wio Terminal has 40 pin GPIO breaking out from the SAMD51, which has the same breakout as the Raspberry Pi!"),(0,i.yg)("p",null,"To use them, simply use the defined pin names as above! Some pins are multifunctional so can be referenced by different ways."),(0,i.yg)("h4",{id:"for-more-information-please-check-varianth-for-more-information"},(0,i.yg)("em",{parentName:"h4"},"For more information, please check ",(0,i.yg)("inlineCode",{parentName:"em"},"variant.h")," for more information")),(0,i.yg)("h3",{id:"wio-terminal-grove-port-pinout"},"Wio Terminal Grove Port Pinout"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg"})),(0,i.yg)("p",null,"As you can see, There are two Grove Ports available on Wio Terminal. One is the default ",(0,i.yg)("strong",{parentName:"p"},"I2C Port")," and other one is ",(0,i.yg)("strong",{parentName:"p"},"configurable Digital/Analog Pin"),", it can also be used for PWM outputs. Both Grove ports can be used as Digital."),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);