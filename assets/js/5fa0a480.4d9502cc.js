"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98530],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>y});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83118:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(58168),i=(t(96540),t(15680));const a={title:"\u6982\u8ff0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/",slug:"/cn/Wio-Terminal-LCD-Overview",last_update:{date:"3/10/2024",author:"\u91d1\u83ca"}},o="\u6982\u8ff0",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Overview",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Overview",title:"\u6982\u8ff0",description:"\u8be5\u5b58\u50a8\u5e93\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728Wio Terminal\u4e0a\u5b89\u88c5TFT LCD\u5e93\u3002\u5b83\u4ee5\u6700\u5c0f\u7684\u5de5\u4f5c\u91cf\u4e3aWio Terminal\u63d0\u4f9b\u57fa\u672c\u7684\u56fe\u5f62\u529f\u80fd\uff01",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Overview.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/cn/Wio-Terminal-LCD-Overview",permalink:"/cn/Wio-Terminal-LCD-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Overview.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1710028800,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{title:"\u6982\u8ff0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/",slug:"/cn/Wio-Terminal-LCD-Overview",last_update:{date:"3/10/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"Wio Terminal \u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/cn/wio_terminal_faq"},next:{title:"LCD\u5c4f\u5e55\u7684\u57fa\u7840\u77e5\u8bc6",permalink:"/cn/Wio-Terminal-LCD-Basic"}},s={},p=[{value:"TFT LCD\u5e93\u7684\u9ed8\u8ba4\u5b89\u88c5",id:"tft-lcd\u5e93\u7684\u9ed8\u8ba4\u5b89\u88c5",level:2},{value:"\u5355\u72ec\u5b89\u88c5TFT LCD\u5e93",id:"\u5355\u72ec\u5b89\u88c5tft-lcd\u5e93",level:2},{value:"\u5b89\u88c5Adafruit Zero DMA\u5e93",id:"\u5b89\u88c5adafruit-zero-dma\u5e93",level:3},{value:"\u6280\u672f\u652f\u6301 &amp; \u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba",level:2}],d={toc:p},c="wrapper";function u(e){let{components:r,...t}=e;return(0,i.yg)(c,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.yg)("p",null,"\u8be5\u5b58\u50a8\u5e93\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728Wio Terminal\u4e0a\u5b89\u88c5TFT LCD\u5e93\u3002\u5b83\u4ee5\u6700\u5c0f\u7684\u5de5\u4f5c\u91cf\u4e3aWio Terminal\u63d0\u4f9b\u57fa\u672c\u7684\u56fe\u5f62\u529f\u80fd\uff01"),(0,i.yg)("h2",{id:"tft-lcd\u5e93\u7684\u9ed8\u8ba4\u5b89\u88c5"},"TFT LCD\u5e93\u7684\u9ed8\u8ba4\u5b89\u88c5"),(0,i.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTFT LCD\u5e93 ",(0,i.yg)("strong",{parentName:"p"},"\u5df2\u5305\u542b\u5728Wio Terminal\u677f\u5e93\u4e2d")," \u3002\u56e0\u6b64\uff0c\u4e0d\u9700\u8981\u518d\u6b21\u4e0b\u8f7dTFT LCD\u5e93\u3002\u6309\u7167\u4e0b\u9762\u7684\u6559\u7a0b\u5f00\u59cb\u4f7f\u7528\u663e\u793a\u5668\u5427\uff01"),(0,i.yg)("h2",{id:"\u5355\u72ec\u5b89\u88c5tft-lcd\u5e93"},"\u5355\u72ec\u5b89\u88c5TFT LCD\u5e93"),(0,i.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u5355\u72ec\u5b89\u88c5TFT LCD\u5e93\uff0c\u6216\u8005\u53ea\u66f4\u65b0TFT LCD\u5e93\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u8bbf\u95ee ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LCD"},"Seeed_Arduino_LCD")," \u5b58\u50a8\u5e93\uff0c\u5e76\u5c06\u6574\u4e2a\u5b58\u50a8\u5e93\u4e0b\u8f7d\u5230\u672c\u5730\u9a71\u52a8\u5668\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u73b0\u5728\uff0c\u53ef\u4ee5\u5c06TFT LCD\u5e93\u5b89\u88c5\u5230Arduino IDE\u4e2d\u3002\u6253\u5f00Arduino IDE\uff0c\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", \u7136\u540e\u9009\u62e9\u521a\u521a\u4e0b\u8f7d\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD")," \u6587\u4ef6\u3002"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,i.yg)("h3",{id:"\u5b89\u88c5adafruit-zero-dma\u5e93"},"\u5b89\u88c5Adafruit Zero DMA\u5e93"),(0,i.yg)("p",null,"TFT LCD\u5e93\u7684\u67d0\u4e9b\u529f\u80fd\u9700\u8981\u6b64\u5e93\u3002"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5bfc\u822a\u5230 ",(0,i.yg)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Manager Library"),", \u5c06\u51fa\u73b0\u4e00\u4e2a\u5e93\u7ba1\u7406\u5668\u7a97\u53e3\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u641c\u7d22 ",(0,i.yg)("strong",{parentName:"p"},"Adafruit Zero DMA")," \u5e76\u70b9\u51fb\u5b89\u88c5\u3002"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_09-19-28.jpg"})),(0,i.yg)("h2",{id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301 & \u4ea7\u54c1\u8ba8\u8bba"),(0,i.yg)("p",null," \u5982\u679c\u60a8\u9047\u5230\u4efb\u4f55\u6280\u672f\u95ee\u9898\uff0c\u8bf7\u5c06\u95ee\u9898\u63d0\u4ea4\u5230\u6211\u4eec\u7684 ",(0,i.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"\u8bba\u575b")," \u3002\n\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);