"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88059],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>S});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,S=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return t?i.createElement(S,a(a({ref:n},u),{},{components:t})):i.createElement(S,a({ref:n},u))}));function S(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1542:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(58168),r=(t(96540),t(15680));const o={description:"\u5728Seeed Studio XIAO SAMD21\u4e0a\u7684TinyML",title:"\u4f7f\u7528 XIAO SAMD21 \u5b66\u4e60\u5d4c\u5165\u5f0f\u673a\u5668\u5b66\u4e60",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Seeeduino-XIAO-TinyML",last_update:{date:"10/29/2023",author:"\u91d1 \u83ca"}},a=void 0,l={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Embedded ML/CN_Seeeduino-XIAO-TinyML",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Embedded ML/CN_Seeeduino-XIAO-TinyML",title:"\u4f7f\u7528 XIAO SAMD21 \u5b66\u4e60\u5d4c\u5165\u5f0f\u673a\u5668\u5b66\u4e60",description:"\u5728Seeed Studio XIAO SAMD21\u4e0a\u7684TinyML",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Embedded ML/CN_Seeeduino-XIAO-TinyML.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Embedded ML",slug:"/cn/Seeeduino-XIAO-TinyML",permalink:"/cn/Seeeduino-XIAO-TinyML",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Embedded ML/CN_Seeeduino-XIAO-TinyML.md",tags:[],version:"current",lastUpdatedBy:"\u91d1 \u83ca",lastUpdatedAt:1698537600,formattedLastUpdatedAt:"Oct 29, 2023",frontMatter:{description:"\u5728Seeed Studio XIAO SAMD21\u4e0a\u7684TinyML",title:"\u4f7f\u7528 XIAO SAMD21 \u5b66\u4e60\u5d4c\u5165\u5f0f\u673a\u5668\u5b66\u4e60",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Seeeduino-XIAO-TinyML",last_update:{date:"10/29/2023",author:"\u91d1 \u83ca"}},sidebar:"CNSidebar",previous:{title:"MicroPython",permalink:"/cn/XIAO-SAMD21-MicroPython"},next:{title:"\u4f7f\u7528 XIAO SAMD21 \u5b66\u4e60SPI \u901a\u8baf",permalink:"/cn/XIAO-SPI-Communication-Interface"}},d={},s=[{value:"\u6570\u636e\u91c7\u96c6\u548c\u6a21\u578b\u8bad\u7ec3",id:"\u6570\u636e\u91c7\u96c6\u548c\u6a21\u578b\u8bad\u7ec3",level:2},{value:"\u6a21\u578b\u90e8\u7f72",id:"\u6a21\u578b\u90e8\u7f72",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:s},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg"})),(0,r.yg)("p",null,"\u7531\u4e8e\u6a21\u578b\u4f18\u5316\u7684\u6700\u65b0\u6539\u8fdb\u548c\u4e13\u95e8\u7528\u4e8e\u5728\u5fae\u63a7\u5236\u5668\u4e0a\u8fd0\u884c\u673a\u5668\u5b66\u4e60\u6a21\u578b\u63a8\u65ad\u7684\u6846\u67b6\u7684\u51fa\u73b0\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u4e3a\u8fd9\u4e9b\u5fae\u5c0f\u8bbe\u5907\u8d4b\u4e88\u66f4\u591a\u667a\u80fd\u3002\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5728\u5fae\u63a7\u5236\u5668\u4e0a\u90e8\u7f72\u795e\u7ecf\u7f51\u7edc\uff0c\u7528\u4e8e\u97f3\u9891\u573a\u666f\u8bc6\u522b\uff08\u4f8b\u5982\u8c61\u7684\u6d3b\u52a8\u6216\u73bb\u7483\u7834\u788e\u58f0\uff09\uff0c\u70ed\u8bcd\u68c0\u6d4b\uff08\u7528\u4e8e\u6fc0\u6d3b\u8bbe\u5907\u7684\u7279\u5b9a\u77ed\u8bed\uff09\u751a\u81f3\u7b80\u5355\u7684\u56fe\u50cf\u8bc6\u522b\u4efb\u52a1\u3002\u5d4c\u5165\u5f0f\u5fae\u63a7\u5236\u5668\u8bbe\u5907\u53ef\u4ee5\u7528\u4e8e\u8d4b\u4e88\u65e7\u4f20\u611f\u5668\u65b0\u7684\u751f\u547d\u548c\u610f\u4e49\uff0c\u4f8b\u5982\u4f7f\u7528\u5b89\u88c5\u5728\u673a\u68b0\u88c5\u7f6e\u4e0a\u7684\u52a0\u901f\u5ea6\u8ba1\u8fdb\u884c\u5f02\u5e38\u68c0\u6d4b\u548c\u9884\u6d4b\u6027\u7ef4\u62a4\uff0c\u6216\u8005\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u79cd\u7c7b\u7684\u9152\u7c7b\uff0c\u5982 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/"},"\u6b64\u6f14\u793a"),"\u4e2d\u6240\u793a! "),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"TinyML\u7684\u53ef\u80fd\u6027\u786e\u5b9e\u662f\u5de8\u5927\u7684\u3002")),(0,r.yg)("p",null,"\u6211\u4eec\u5df2\u7ecf\u9488\u5bf9\u53e6\u4e00\u6b3eSeeed Studio\u4ea7\u54c1Wio Terminal\u5236\u4f5c\u4e86 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML/"},"\u4e00\u6574\u4e2a\u7cfb\u5217\u5173\u4e8e\u90e8\u7f72\u5fae\u578b\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u89c6\u9891")," , \u4f46\u662f\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u8fdb\u4e00\u6b65\u7f29\u5c0f\u89c4\u6a21\uff0c\u5c06\u7c7b\u4f3c\u7684\u6a21\u578b\u90e8\u7f72\u5230ARM Cortex M0+\u548c\u5c0f\u578b\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21")," \u5f00\u53d1\u677f\u4e0a\u3002\u8be5\u5f00\u53d1\u677f\u975e\u5e38\u5c0f\u5de7\uff0820\xd717.5mm\uff09\uff0c\u4ec5\u6d88\u80171.33mAh\u7684\u7535\u91cf\uff08\u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u5728150mAh\u7684\u7535\u6c60\u4e0a\u5de5\u4f5c\u7ea6112\u5c0f\u65f6\uff0c\u5982\u679c\u5904\u4e8e\u6df1\u5ea6\u4f11\u7720\u72b6\u6001\uff0c\u4f7f\u7528\u65f6\u95f4\u4f1a\u66f4\u957f\uff09\uff0c\u800c\u4e14\u4ef7\u683c\u4ec5\u4e3a4.3\u7f8e\u5143\u3002"),(0,r.yg)("p",null,"\u8be5\u9879\u76ee\u6db5\u76d6\u4e86\u5c06\u6a21\u578b\u8bad\u7ec3\u548c\u90e8\u7f72\u5230Seeed Studio XIAO SAMD21\u548cSeeed Studio XIAO RP2040\u5f00\u53d1\u677f\u7684\u5185\u5bb9\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\u76f8\u5e94\u7684\u89c6\u9891\uff01"),(0,r.yg)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/04_7U8MzVKg",frameBorder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.yg)("h2",{id:"\u6570\u636e\u91c7\u96c6\u548c\u6a21\u578b\u8bad\u7ec3"},"\u6570\u636e\u91c7\u96c6\u548c\u6a21\u578b\u8bad\u7ec3"),(0,r.yg)("p",null,"\u8f6f\u4ef6\u5de5\u7a0b\u5e08\u82b1\u8d39\u5927\u91cf\u65f6\u95f4\u5750\u5728\u53d1\u5149\u7684\u5c4f\u5e55\u524d\u3002\u800c\u5230\u4e86\u4e00\u5929\u665a\u4e9b\u65f6\u5019\uff0c\u4fdd\u6301\u6b63\u786e\u7684\u59ff\u52bf\u53d8\u5f97\u56f0\u96be\u3002\u5982\u679c\u6709\u4e00\u79cd\u8bbe\u5907\u53ef\u4ee5\u5b66\u4e60\u60a8\u7279\u5b9a\u7684\u8eab\u4f53\u59ff\u52bf\uff0c\u4ee5\u8bc6\u522b\u6b63\u786e\u548c\u9519\u8bef\u7684\u59ff\u52bf\uff0c\u5e76\u5728\u60a8\u8fc7\u4e8e\u9a7c\u80cc\u6216\u8fdb\u5165\u201cPython\u59ff\u52bf\u201d\u65f6\u53d1\u51fa\u8b66\u544a\uff0c\u90a3\u8be5\u591a\u597d\u554a...\u7b49\u4e00\u4e0b\uff0c\u8fd9\u662f\u6709\u53ef\u80fd\u7684\uff01"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png"})),(0,r.yg)("p",null,"\u7528\u4e8e\u63d0\u4f9b\u673a\u5668\u5b66\u4e60\u6a21\u578b\u6240\u9700\u6570\u636e\u7684\u6700\u4f73\u4f20\u611f\u5668\u663e\u7136\u662f\u52a0\u901f\u5ea6\u8ba1\u3002\u539f\u59cb\u7684Seeed Studio XIAO SAMD21\u548cSeeed Studio XIAO RP2040\u975e\u5e38\u5c0f\u5de7\uff0c\u6ca1\u6709\u914d\u5907\u52a0\u901f\u5ea6\u8ba1\u4f20\u611f\u5668\uff0c\u800c\u8f83\u65b0\u7684Seeed Studio XIAO nRF52840 Sense\u5219\u5177\u5907\u5185\u7f6e\u7684\u52a0\u901f\u5ea6\u8ba1\u3002 "),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u539f\u59cb\u7684Seeed Studio XIAO SAMD21\u548cSeeed Studio XIAO RP2040\uff0c\u60a8\u53ef\u4ee5\u5c06 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/"},"Grove LIS3DH\u52a0\u901f\u5ea6\u8ba1\u6a21\u5757")," \u8fde\u63a5\u5230 ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Seeed Studio XIAO\u6269\u5c55\u677f")," \u4e0a\uff0c\u5f00\u59cb\u6536\u96c6\u6570\u636e\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u59ff\u52bf\uff0c\u6536\u96c63\u4e2a\u6570\u636e\u6837\u672c\uff0c\u6bcf\u4e2a\u6837\u672c\u6301\u7eed60\u79d2\uff0c\u5c06\u8bbe\u5907\u56fa\u5b9a\u5728\u60a8\u7684\u80cc\u90e8\u7684T\u6064\u4e0a\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png"})),(0,r.yg)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u6837\u672c\uff0c\u8bf7\u4fdd\u6301\u76f8\u540c\u7684\u59ff\u52bf\uff0c\u4f46\u5305\u62ec\u4e00\u4e9b\u624b\u81c2\u3001\u5934\u90e8\u548c\u8eaf\u5e72\u7684\u8fd0\u52a8\uff0c\u4ee5\u6a21\u62df\u6b63\u5e38\u6d3b\u52a8\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png"})),(0,r.yg)("p",null,"\u9009\u62e95\u79d2\u7684\u65f6\u95f4\u7a97\u53e3\uff0c\u7a97\u53e3\u79fb\u52a8\u95f4\u9694\u4e3a1\u79d2\uff0c\u5e76\u4f7f\u7528Flatten\u5904\u7406\u5757\uff0c\u56e0\u4e3a\u6211\u4eec\u5904\u7406\u7684\u662f\u975e\u5e38\u7f13\u6162\u7684\u6570\u636e\u3002\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u5168\u8fde\u63a5\u7f51\u7edc\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u51c6\u786e\u6027\u3002\u5728\u6587\u7ae0\u5e95\u90e8\u7684\u53c2\u8003\u90e8\u5206\uff0c\u60a8\u53ef\u4ee5\u627e\u5230\u6307\u5411Edge Impulse\u9879\u76ee\u516c\u5171\u7248\u672c\u7684\u94fe\u63a5\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png"})),(0,r.yg)("p",null,"\u901a\u8fc7\u6536\u96c6\u66f4\u591a\u6570\u636e\u5e76\u786e\u4fdd\u53ef\u4ee5\u8bc6\u522b\u6b63\u786e\u548c\u9519\u8bef\u7684\u59ff\u52bf\uff0c\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u6539\u8fdb\uff0c\u5305\u62ec\u5728\u8863\u7269\u4e0a\u8c03\u6574\u8bbe\u5907\u4f4d\u7f6e\u4ee5\u5f15\u5165\u4e00\u4e9b\u53d8\u5316\u3002\u7531\u4e8e\u8be5\u8bbe\u5907\u88ab\u8bbe\u8ba1\u4e3a\u4e2a\u4eba\u4f7f\u7528\u8bbe\u5907\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u9002\u5e94\u4e0d\u540c\u4eba\u7684\u59ff\u52bf\uff0c\u5e76\u4e14\u53ef\u4ee5\u8f7b\u677e\u91cd\u65b0\u8fdb\u884c\u8bad\u7ec3\u3002\u60a8\u53ef\u4ee5\u5728\u5b9e\u65f6\u5206\u7c7b\u9009\u9879\u5361\u4e2d\u68c0\u67e5\u8bad\u7ec3\u540e\u5b83\u5bf9\u60a8\u7684\u59ff\u52bf\u7684\u68c0\u6d4b\u6548\u679c\u3002"),(0,r.yg)("h2",{id:"\u6a21\u578b\u90e8\u7f72"},"\u6a21\u578b\u90e8\u7f72"),(0,r.yg)("p",null,"\u5728\u60a8\u5bf9\u51c6\u786e\u6027\u611f\u5230\u6ee1\u610f\u540e\uff0c\u5c06\u751f\u6210\u7684\u6a21\u578b\u4e0b\u8f7d\u4e3aArduino\u5e93\uff0c\u5e76\u5c06\u5176\u590d\u5236\u5230Arduino sketches/libraries\u6587\u4ef6\u5939\u4e2d\u3002\u60a8\u53ef\u4ee5\u5728\u6587\u7ae0\u5e95\u90e8\u7684\u53c2\u8003\u90e8\u5206\u627e\u5230\u793a\u4f8b\u4ee3\u7801\u3002\u793a\u4f8b\u4ee3\u7801\u6536\u96c65\u79d2\u7684\u6837\u672c\uff0c\u6267\u884c\u63a8\u65ad\uff0c\u5e76\u5728\u68c0\u6d4b\u5230\u4e0d\u6b63\u786e\u7684\u59ff\u52bf\u65f6\u6253\u5f00\u8702\u9e23\u5668\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'void loop()\n{\n\n    ei_printf("Sampling...\\n");\n\n    // Allocate a buffer here for the values we\'ll read from the IMU\n    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };\n\n    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {\n        // Determine the next tick (and then sleep later)\n        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);\n\n        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);\n        buffer[ix + 0] *= CONVERT_G_TO_MS2;\n        buffer[ix + 1] *= CONVERT_G_TO_MS2;\n        buffer[ix + 2] *= CONVERT_G_TO_MS2;\n\n        delayMicroseconds(next_tick - micros());\n    }\n\n    // Turn the raw buffer in a signal which we can the classify\n    signal_t signal;\n    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);\n    if (err != 0) {\n        ei_printf("Failed to create signal from buffer (%d)\\n", err);\n        return;\n    }\n\n    // Run the classifier\n    ei_impulse_result_t result = { 0 };\n\n    err = run_classifier(&signal, &result, debug_nn);\n    if (err != EI_IMPULSE_OK) {\n        ei_printf("ERR: Failed to run classifier (%d)\\n", err);\n        return;\n    }\n\n    // print the predictions\n    ei_printf("Predictions ");\n    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",\n        result.timing.dsp, result.timing.classification, result.timing.anomaly);\n    ei_printf(": \\n");\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n#endif\n    \n  if (result.classification[1].value > ALARM_THRESHOLD || result.classification[2].value > ALARM_THRESHOLD)\n  {     \n  tone(BUZZER_PIN, 523, 250);\n  delay(250);\n  noTone(BUZZER_PIN);\n  delay(250);  \n  tone(BUZZER_PIN, 523, 250);\n  delay(250);  \n  noTone(BUZZER_PIN);    \n  }\n\n}\n')),(0,r.yg)("p",null,"\u7531\u4e8e\u6570\u636e\u53d8\u5316\u76f8\u5bf9\u8f83\u6162\u4e14\u4e0d\u9700\u8981\u5feb\u901f\u54cd\u5e94\u65f6\u95f4\uff0c\u6b63\u5e38\u7684\u987a\u5e8f\u63a8\u65ad\u6d41\u6c34\u7ebf\u975e\u5e38\u9002\u5408\u8fd9\u4e2a\u5e94\u7528\u3002"),(0,r.yg)("p",null,"\u66f4\u8fdb\u4e00\u6b65\u7684\u662f\u4f7f\u7528\u6700\u65b0\u7684Seeed Studio XIAO nRF52840\uff0c\u5e76\u5c06\u8bbe\u5907\u8fde\u63a5\u5230\u7528\u6237\u7684\u667a\u80fd\u624b\u673a\u4e0a\uff0c\u8fd9\u5c06\u5141\u8bb8\u66f4\u597d\u7684\u8b66\u62a5\u3001\u7edf\u8ba1\u7b49\u529f\u80fd\u3002"),(0,r.yg)("p",null,"\u795d\u60a8\u6109\u5feb\u7684\u8c03\u8bd5\u8fc7\u7a0b\uff0c\u5e76\u8bb0\u4f4f\u4fdd\u6301\u826f\u597d\u7684\u59ff\u52bf\uff01"),(0,r.yg)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/20025/latest"},"Edge Impulse\u516c\u5171\u9879\u76ee"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection"},"\u9879\u76ee\u7684Github")))))}p.isMDXComponent=!0}}]);