"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97687],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>y});var t=n(96540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?t.createElement(y,o(o({ref:r},p),{},{components:n})):t.createElement(y,o({ref:r},p))}));function y(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66730:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=n(58168),i=(n(96540),n(15680));const a={description:"\u6982\u8ff0",title:"\u7ea2\u5916\u53d1\u5c04\u5668\u5165\u95e8\u6307\u5357",keywords:["Wio_terminal Infrared_Emitter"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Infrared-Emitter",last_update:{date:"3/09/2024",author:"\u91d1\u83ca"}},o="\u7ea2\u5916\u53d1\u5c04\u5668\u5165\u95e8\u6307\u5357",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/CN-Wio-Terminal-Infrared-Emitter",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/CN-Wio-Terminal-Infrared-Emitter",title:"\u7ea2\u5916\u53d1\u5c04\u5668\u5165\u95e8\u6307\u5357",description:"\u6982\u8ff0",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/CN-Wio-Terminal-Infrared-Emitter.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter",slug:"/cn/Wio-Terminal-Infrared-Emitter",permalink:"/cn/Wio-Terminal-Infrared-Emitter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/CN-Wio-Terminal-Infrared-Emitter.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709942400,formattedLastUpdatedAt:"Mar 9, 2024",frontMatter:{description:"\u6982\u8ff0",title:"\u7ea2\u5916\u53d1\u5c04\u5668\u5165\u95e8\u6307\u5357",keywords:["Wio_terminal Infrared_Emitter"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Infrared-Emitter",last_update:{date:"3/09/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u5149\u4f20\u611f\u5668\u5165\u95e8\u6307\u5357",permalink:"/cn/Wio-Terminal-Light"},next:{title:"\u9ea6\u514b\u98ce\u5165\u95e8\u6307\u5357",permalink:"/cn/Wio-Terminal-Mic"}},s={},d=[{value:"\u5b89\u88c5  Wio Terminal \u7684\u7ea2\u5916\u5e93",id:"\u5b89\u88c5--wio-terminal-\u7684\u7ea2\u5916\u5e93",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],p={toc:d},m="wrapper";function c(e){let{components:r,...n}=e;return(0,i.yg)(m,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u7ea2\u5916\u53d1\u5c04\u5668\u5165\u95e8\u6307\u5357"},"\u7ea2\u5916\u53d1\u5c04\u5668\u5165\u95e8\u6307\u5357"),(0,i.yg)("p",null,"\u8be5\u5b58\u50a8\u5e93\u6f14\u793a\u4e86\u5982\u4f55\u5c06\u5185\u7f6e\u7684\u7ea2\u5916\u53d1\u5c04\u5668\u4f5c\u4e3a Wio Terminal \u7684\u7ec4\u4ef6\u4f7f\u7528\u3002\u7ea2\u5916\u53d1\u5c04\u5668\u662f\u4e00\u4e2a\u6570\u5b57\u63a5\u53e3\uff0c\u53ef\u4ee5\u7528\u4e8e\u53d1\u9001\u7ea2\u5916\u4fe1\u53f7\uff0c\u5c31\u50cf\u9065\u63a7\u5668\u4e00\u6837\uff01"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif",alt:null})),(0,i.yg)("h2",{id:"\u5b89\u88c5--wio-terminal-\u7684\u7ea2\u5916\u5e93"},"\u5b89\u88c5  Wio Terminal \u7684\u7ea2\u5916\u5e93"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u8bbf\u95ee ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_IR"},"Seeed_Arduino_IR")," \u5b58\u50a8\u5e93\uff0c\u5e76\u5c06\u6574\u4e2a\u5b58\u50a8\u5e93\u4e0b\u8f7d\u5230\u672c\u5730\u9a71\u52a8\u5668\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u73b0\u5728\uff0c\u53ef\u4ee5\u5c06\u7ea2\u5916\u5e93\u5b89\u88c5\u5230 Arduino IDE \u4e2d\u3002\u6253\u5f00 Arduino IDE\uff0c\u70b9\u51fb ",(0,i.yg)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Add .ZIP Library")," ,\u7136\u540e\u9009\u62e9\u521a\u521a\u4e0b\u8f7d\u7684  ",(0,i.yg)("inlineCode",{parentName:"p"},"Seeed_Arduino_IR")," \u6587\u4ef6\u3002"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,i.yg)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.yg)("p",null,"\u5bfc\u822a\u5230 ",(0,i.yg)("strong",{parentName:"p"},"Files")," -> ",(0,i.yg)("strong",{parentName:"p"},"Examples")," -> ",(0,i.yg)("strong",{parentName:"p"},"IRLib2")," -> ",(0,i.yg)("strong",{parentName:"p"},"Send"),"\u3002 \u53d1\u9001\u793a\u4f8b\u5c06\u51fa\u73b0\uff0c\u5e76\u4e14\u5e94\u8be5\u5982\u4e0b\u6240\u793a\u3002\u8981\u6d4b\u8bd5\u6765\u81ea Wio \u7ec8\u7aef\u7684\u7ea2\u5916\u4fe1\u53f7\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Infrared_Receiver/"},"Grove - \u7ea2\u5916\u63a5\u6536\u5668"),"\u3002\u8fd9\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u4fee\u6539\u4e3a\u5c06 Wio \u7ec8\u7aef\u7528\u4f5c\u7535\u89c6\u9065\u63a7\u5668\uff01"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8:")," ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"WIO_IR")),"  \u5df2\u5728\u7ea2\u5916\u53d1\u5c04\u5668\u7684\u5e93\u5934\u6587\u4ef6\u4e2d\u5b9a\u4e49\uff08\u56e0\u6b64\u4e0d\u9700\u8981\u5728 ino \u6587\u4ef6\u4e2d\u5b9a\u4e49\uff09\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'/* send.ino Example sketch for IRLib2\n *  Illustrates how to send a code.\n */\n#include <IRLibSendBase.h>    // First include the send base\n//Now include only the protocols you wish to actually use.\n//The lowest numbered protocol should be first but remainder \n//can be any order.\n#include <IRLib_P01_NEC.h>\n#include <IRLib_P02_Sony.h>\n#include <IRLibCombo.h>     // After all protocols, include this\n// All of the above automatically creates a universal sending\n// class called "IRsend" containing only the protocols you want.\n// Now declare an instance of that sender.\n\nIRsend mySender;\n\nvoid setup() {\n  Serial.begin(9600);\n  delay(2000); while (!Serial); //delay for Leonardo\n  Serial.println(F("Every time you press a key is a serial monitor we will send."));\n}\n\nvoid loop() {\n  if (Serial.read() != -1) {\n  //   send a code every time a character is received from the \n  //   serial port. You could modify this sketch to send when you\n  //   push a button connected to an digital input pin.\n  //   Substitute values and protocols in the following statement\n  //   for device you have available.\n  //  mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits\n    mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f\n    Serial.println(F("Sent signal."));\n  }\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8:"),"  \u7ea2\u5916\u53d1\u5c04\u5668\u4f4d\u4e8e Wio \u7ec8\u7aef\u7684\u80cc\u9762\uff0c\u5728 SD \u5361\u63d2\u69fd\u7684\u5de6\u4fa7\u3002"))}c.isMDXComponent=!0}}]);