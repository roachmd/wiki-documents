"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94458],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,m=g["".concat(d,".").concat(u)]||g[u]||p[u]||a;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(58168),r=(n(96540),n(15680));const a={description:"Get Started with SenseCAP Indicator Native Firmware",title:"Native Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_Native_Firmware",sidebar_position:1,last_update:{date:"3/3/2024",author:"DuKaiyin"}},o="**Native Firmware**",s={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide/cn-Native_Firmware",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide/cn-Native_Firmware",title:"Native Firmware",description:"Get Started with SenseCAP Indicator Native Firmware",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide/cn-Native_Firmware.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide",slug:"/cn/SenseCAP_Indicator_Native_Firmware",permalink:"/cn/SenseCAP_Indicator_Native_Firmware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Setup_Guide/cn-Native_Firmware.md",tags:[],version:"current",lastUpdatedBy:"DuKaiyin",lastUpdatedAt:1709424e3,formattedLastUpdatedAt:"Mar 3, 2024",sidebarPosition:1,frontMatter:{description:"Get Started with SenseCAP Indicator Native Firmware",title:"Native Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_Native_Firmware",sidebar_position:1,last_update:{date:"3/3/2024",author:"DuKaiyin"}}},d={},c=[{value:"<strong>Wi-Fi \u8bbe\u7f6e</strong>",id:"wi-fi-\u8bbe\u7f6e",level:2},{value:"<strong>\u663e\u793a\u8bbe\u7f6e</strong>",id:"\u663e\u793a\u8bbe\u7f6e",level:2},{value:"<strong>\u65e5\u671f\u548c\u65f6\u95f4\u8bbe\u7f6e</strong>",id:"\u65e5\u671f\u548c\u65f6\u95f4\u8bbe\u7f6e",level:2},{value:"<strong>\u4f20\u611f\u5668\u6570\u636e</strong>",id:"\u4f20\u611f\u5668\u6570\u636e",level:2}],l={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,i.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"native-firmware"},(0,r.yg)("strong",{parentName:"h1"},"Native Firmware")),(0,r.yg)("p",null,"SenseCAP Indicator D1S\u548cD1Pro\u7248\u672c\u5185\u7f6etVOC\u548cCO2\u4f20\u611f\u5668\uff0c\u4ee5\u53ca\u5916\u90e8\u7684Grove TH\u4f20\u611f\u5668\u7528\u4e8e\u51c6\u786e\u7684\u6570\u636e\u8bfb\u53d6\u3002SenseCAP\u672c\u673a\u56fa\u4ef6\u63d0\u4f9b\u4e86\u7a7a\u6c14\u8d28\u91cf\u68c0\u6d4b\u5668\u754c\u9762\uff0c\u663e\u793a\u4f20\u611f\u5668\u6570\u636e\u3002\u5bf9\u4e8e\u4e0d\u5305\u542b\u4f20\u611f\u5668\u7684D1\u548cD1L\u7248\u672c\uff0c\u6570\u636e\u9875\u9762\u5c06\u663e\u793aN/A\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"})),(0,r.yg)("p",null,"\u5728\u8bbe\u7f6e\u9875\u9762\u914d\u7f6e SenseCAP Indicator \u7684\u7b80\u5355\u6b65\u9aa4"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"})),(0,r.yg)("h2",{id:"wi-fi-\u8bbe\u7f6e"},(0,r.yg)("strong",{parentName:"h2"},"Wi-Fi \u8bbe\u7f6e")),(0,r.yg)("p",null,"\u9009\u62e9Wi-Fi\u540d\u79f0\uff0c\u8f93\u5165\u5bc6\u7801\u5e76\u8fde\u63a5\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"})),(0,r.yg)("p",null,"\u4e00\u65e6\u770b\u5230\u7eff\u8272\u7684Wi-Fi\u56fe\u6807\uff0c\u60a8\u5c31\u8bbe\u7f6e\u597d\u4e86\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"})),(0,r.yg)("h2",{id:"\u663e\u793a\u8bbe\u7f6e"},(0,r.yg)("strong",{parentName:"h2"},"\u663e\u793a\u8bbe\u7f6e")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u4eae\u5ea6"),": \u8c03\u6574\u5c4f\u5e55\u4eae\u5ea6\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u7761\u7720\u6a21\u5f0f"),": \u6839\u636e\u60a8\u8bbe\u7f6e\u7684\u95f4\u9694\u5173\u95ed\u5c4f\u5e55\u3002\u5728\u7761\u7720\u6a21\u5f0f\u4e0b\uff0c\u5c4f\u5e55\u5173\u95ed\uff0c\u4e0d\u663e\u793a\u4efb\u4f55\u5185\u5bb9\u3002")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"})),(0,r.yg)("h2",{id:"\u65e5\u671f\u548c\u65f6\u95f4\u8bbe\u7f6e"},(0,r.yg)("strong",{parentName:"h2"},"\u65e5\u671f\u548c\u65f6\u95f4\u8bbe\u7f6e")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u65f6\u95f4\u683c\u5f0f:")," \u60a8\u53ef\u4ee5\u8bbe\u7f6e\u4e3a24\u5c0f\u65f6\u5236\u621612\u5c0f\u65f6\u5236"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u65f6\u95f4\u81ea\u52a8\u66f4\u65b0/\u65f6\u533a\u81ea\u52a8\u66f4\u65b0"),": \u5f53\u8bbe\u5907\u8fde\u63a5\u5230WiFi\u65f6\uff0c\u5b83\u5c06\u81ea\u52a8\u83b7\u53d6\u76f8\u5e94\u7684\u65f6\u533a\u548c\u65e5\u671f\u3002",(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"})))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u624b\u52a8\u8bbe\u7f6e"),": \u5982\u679c\u901a\u8fc7\u65f6\u533a\u83b7\u53d6\u7684\u65f6\u95f4\u65e0\u6cd5\u81ea\u52a8\u8bc6\u522b\u590f\u4ee4\u65f6\uff0c\u6216\u8005\u8bbe\u5907\u79bb\u7ebf\uff0c\u5219\u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\u65f6\u533a\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"})),(0,r.yg)("h2",{id:"\u4f20\u611f\u5668\u6570\u636e"},(0,r.yg)("strong",{parentName:"h2"},"\u4f20\u611f\u5668\u6570\u636e")),(0,r.yg)("p",null,"\u6211\u4eec\u63d0\u4f9b\u56db\u4e2a\u4e0d\u540c\u7248\u672c\uff1aD1\u3001D1S\u3001D1L\u548cD1Pro\u3002\u6bcf\u4e2a\u7248\u672c\u90fd\u8bbe\u8ba1\u7528\u4e8e\u6ee1\u8db3\u4e0d\u540c\u7684\u5e94\u7528\u9700\u6c42\uff0c\u800c\u65e0\u9700\u652f\u4ed8\u4e0d\u5fc5\u8981\u7684\u786c\u4ef6\u6210\u672c\u3002\u4ee5\u4e0b\u662f\u5404\u7248\u672c\u4e4b\u95f4\u7684\u533a\u522b\uff1a"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"})),(0,r.yg)("p",null,"\u8be5\u8bbe\u5907\u7684\u56fa\u4ef6\u6709\u4e24\u4e2a\u9875\u9762\uff0c\u5206\u522b\u663e\u793atVOC\u3001CO2\u3001\u6e29\u5ea6\u548c\u6e7f\u5ea6\u7684\u6570\u636e\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"mdxAdmonitionTitle"},"\u6ce8\u610f:")),(0,r.yg)("p",{parentName:"admonition"},"\u6240\u6709\u7248\u672c\u7684SenseCAP Indicator\u7684\u672c\u673a\u56fa\u4ef6UI\u4fdd\u6301\u4e00\u81f4\u3002\u5bf9\u4e8e\u6ca1\u6709\u5d4c\u5165\u4f20\u611f\u5668\u7684D1\u548cD1L\u7248\u672c\uff0c\u4f20\u611f\u5668\u6570\u636e\u5c06\u663e\u793a\u4e3a'N/A'\u3002\u60a8\u53ef\u4ee5\u8fde\u63a5\u5176\u4ed6Grove\u4f20\u611f\u5668\u5e76\u521b\u5efa\u81ea\u5df1\u5b9a\u5236\u7684UI\u3002")),(0,r.yg)("p",null,"\u70b9\u51fb\u6307\u5b9a\u7684\u4f20\u611f\u5668\u8fdb\u5165\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u663e\u793a\u8fc7\u53bb24\u5c0f\u65f6\u6216\u4e00\u5468\u7684\u6570\u503c\u3002\u6570\u636e\u5c06\u5728\u4e00\u5468\u5185\u4fdd\u7559\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"})),(0,r.yg)("p",null,":::\n\u63d0\u793a \u5bfb\u627eChatGPT x DALL\xb7E\uff1f\n\u524d\u5f80",(0,r.yg)("a",{parentName:"p",href:"/SenseCAP_Indicator_OpenAI_X_Overview"},"SenseCAP Indicator X OpenAI"),"\n:::"))}p.isMDXComponent=!0}}]);