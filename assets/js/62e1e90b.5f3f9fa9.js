"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38685],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var o=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=o.createContext({}),p=function(e){var r=o.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),u=t,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(y,l(l({ref:r},c),{},{components:n})):o.createElement(y,l({ref:r},c))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[d]="string"==typeof e?e:t,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72831:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(58168),t=(n(96540),n(15680));const i={description:"TensorFlow Lite Micro\u5165\u95e8\u6307\u5357",title:"TensorFlow Lite Micro\u5165\u95e8\u6307\u5357",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-TFLM-1",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},l="Wio Terminal TensorFlow Lite Micro\u5165\u95e8\u6307\u5357",a={unversionedId:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/CN-Wio-Terminal-TinyML-TFLM-1",id:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/CN-Wio-Terminal-TinyML-TFLM-1",title:"TensorFlow Lite Micro\u5165\u95e8\u6307\u5357",description:"TensorFlow Lite Micro\u5165\u95e8\u6307\u5357",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/CN-Wio-Terminal-TinyML-TFLM-1.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite",slug:"/cn/Wio-Terminal-TinyML-TFLM-1",permalink:"/cn/Wio-Terminal-TinyML-TFLM-1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/CN-Wio-Terminal-TinyML-TFLM-1.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709683200,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{description:"TensorFlow Lite Micro\u5165\u95e8\u6307\u5357",title:"TensorFlow Lite Micro\u5165\u95e8\u6307\u5357",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-TFLM-1",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",permalink:"/cn/Wio-Terminal-TinyML-EI-6"},next:{title:"BME280\u667a\u80fd\u6c14\u8c61\u7ad9",permalink:"/cn/Wio-Terminal-TinyML-TFLM-2"}},s={},p=[{value:"\u5b89\u88c5Arduino TensorFlow Lite\u5e93",id:"\u5b89\u88c5arduino-tensorflow-lite\u5e93",level:2},{value:"\u8fd0\u884cArduino TensorFlow Lite Hello World\u793a\u4f8b",id:"\u8fd0\u884carduino-tensorflow-lite-hello-world\u793a\u4f8b",level:2}],c={toc:p},d="wrapper";function m(e){let{components:r,...n}=e;return(0,t.yg)(d,(0,o.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"wio-terminal-tensorflow-lite-micro\u5165\u95e8\u6307\u5357"},"Wio Terminal TensorFlow Lite Micro\u5165\u95e8\u6307\u5357"),(0,t.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06\u5b98\u65b9\u7684 ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/hello_world"},"Arduino Tensorflow Lite \u5e93")," \u5b89\u88c5\u5230\u60a8\u7684 Wio Terminal \uff0c\u4f7f\u60a8\u80fd\u591f\u4f7f\u7528 Wio Terminal \u6d4b\u8bd5\u4e00\u4e9b\u673a\u5668\u5b66\u4e60\u6a21\u578b\u3002"),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg"})),(0,t.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee ",(0,t.yg)("a",{parentName:"p",href:"https://www.tensorflow.org/lite/microcontrollers"},"TensorFlow Lite For Microcontrollers"),"."),(0,t.yg)("p",null,"\u786e\u4fdd\u4f7f\u75281.8.2\u7248\u672c\u7684Seeed SAMD\u677f\u5b9a\u4e49\uff0c\u8bf7\u53c2\u9605\u5728Wio\u7ec8\u7aef\u4e0a\u5f00\u59cb\u4f7f\u7528\u4e2d\u68c0\u67e5\u548c\u66f4\u65b0\u677f\u5b9a\u4e49\u7684\u65b9\u6cd5\u3002"),(0,t.yg)("h2",{id:"\u5b89\u88c5arduino-tensorflow-lite\u5e93"},"\u5b89\u88c5Arduino TensorFlow Lite\u5e93"),(0,t.yg)("p",null,"\u76ee\u524d\uff082021\u5e7410\u6708\uff09\u53ef\u4ee5\u4eceArduino IDE\u5e93\u7ba1\u7406\u5668\u4e0b\u8f7d\u7684Tensorflow Lite\u5e93\u7684\u7248\u672c\u5df2\u7ecf\u8fc7\u65f6\u3002\u56e0\u6b64\uff0c\u9700\u8981\u4f7f\u7528\u6765\u81ea\u5b98\u65b9Tensorflow Lite for Microcontrollers\u5b58\u50a8\u5e93\u7684\u5f00\u53d1\u7248\u672c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"git clone https://github.com/tensorflow/tflite-micro-arduino-examples Arduino_TensorFlowLite\n")),(0,t.yg)("p",null,"\u5c06\u5b98\u65b9 ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/tensorflow/tflite-micro-arduino-examples"},"TensorFlow Lite Micro Library for Arduino \u5b58\u50a8\u5e93"),"\u4e2d\u7684\u5f00\u53d1\u7248\u672c\u590d\u5236\u5230Arduino\u7684sketches/libraries\u6587\u4ef6\u5939\u4e2d\u3002\u60a8\u53ef\u4ee5\u5728\u5b58\u50a8\u5e93\u4e2d\u627e\u5230\u6709\u5173\u5b89\u88c5\u6700\u65b0\u5f00\u53d1\u7248\u672c\u5e93\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,t.yg)("p",null,"\u4e2d\u7684\u5f00\u53d1\u7248\u672c\u590d\u5236\u5230Arduino\u7684sketches/libraries\u6587\u4ef6\u5939\u4e2d\u3002\u60a8\u53ef\u4ee5\u5728\u5b58\u50a8\u5e93\u4e2d\u627e\u5230\u6709\u5173\u5b89\u88c5\u6700\u65b0\u5f00\u53d1\u7248\u672c\u5e93\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,t.yg)("h2",{id:"\u8fd0\u884carduino-tensorflow-lite-hello-world\u793a\u4f8b"},"\u8fd0\u884cArduino TensorFlow Lite Hello World\u793a\u4f8b"),(0,t.yg)("p",null,"\u8be5\u793a\u4f8b\u65e8\u5728\u6f14\u793a\u5982\u4f55\u5728\u5fae\u63a7\u5236\u5668\u4e0a\u4f7f\u7528TensorFlow Lite\u7684\u57fa\u672c\u77e5\u8bc6\u3002\u5b83\u5305\u62ec\u4e86\u8bad\u7ec3\u6a21\u578b\u3001\u5c06\u5176\u8f6c\u6362\u4e3aTensorFlow Lite\u53ef\u7528\u683c\u5f0f\u4ee5\u53ca\u5728\u5fae\u63a7\u5236\u5668\u4e0a\u8fd0\u884c\u63a8\u7406\u7684\u5b8c\u6574\u7aef\u5230\u7aef\u5de5\u4f5c\u6d41\u7a0b\u3002"),(0,t.yg)("p",null,"\u8be5\u793a\u4f8b\u56f4\u7ed5\u4e00\u4e2a\u8bad\u7ec3\u7528\u4e8e\u590d\u5236\u6b63\u5f26\u51fd\u6570\u7684\u6a21\u578b\u6784\u5efa\u3002\u5b83\u5305\u542b\u4e86\u51e0\u4e2a\u5e73\u53f0\u7684\u5b9e\u73b0\u3002\u5728\u6bcf\u79cd\u60c5\u51b5\u4e0b\uff0c\u6a21\u578b\u88ab\u7528\u4e8e\u751f\u6210\u4e00\u7cfb\u5217\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u7528\u4e8e\u95ea\u70c1LED\u6216\u63a7\u5236\u52a8\u753b\u3002"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u8f6c\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"Files")," -> ",(0,t.yg)("inlineCode",{parentName:"p"},"Examples")," -> ",(0,t.yg)("inlineCode",{parentName:"p"},"Arduino_TensorFlowLite")," -> ",(0,t.yg)("inlineCode",{parentName:"p"},"hello_world")," \u3002\u793a\u4f8b\u4ee3\u7801\u5c06\u663e\u793a\u51fa\u6765\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5982\u679c\u73b0\u5728\u7f16\u8bd1\uff0c\u4f1a\u51fa\u73b0\u4e00\u4e2a ",(0,t.yg)("strong",{parentName:"p"},"compile error")," \uff0c\u56e0\u4e3a\u677f\u5b9a\u4e49\u4e2d\u5b9a\u4e49\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"min"),"\u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"max")," \u51fd\u6570\u4e5f\u5728Arduino TensorFlow\u5e93\u4e2d\u5b9a\u4e49\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728\u5305\u542b\u5e93\u4e4b\u524d\uff0c\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"#undef max")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"#undef min")," \u5c06\u5176\u53d6\u6d88\u5b9a\u4e49\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"#undef max\n#undef min\n#include <TensorFlowLite.h>\n")),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221173149.jpg"})),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u73b0\u5728\uff0c\u70b9\u51fb ",(0,t.yg)("strong",{parentName:"p"},"Upload")," \u5c06\u60a8\u7684\u7b2c\u4e00\u4e2aTensorFlow Lite\u793a\u4f8b\u4e0a\u4f20\u5230Wio\u7ec8\u7aef\uff01")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6253\u5f00\u4e32\u884c\u7ed8\u56fe\u4eea\uff08Serial Plotter\uff09\uff0c\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u4e00\u4e2a\u6b63\u5f26\u6ce2\u5f62\u3002\u6b64\u5916\uff0c\u68c0\u67e5\u80cc\u9762\u7684\u5185\u7f6eLED\uff0c\u5b83\u5e94\u8be5\u6839\u636e\u60a8\u521a\u521a\u4eceTensorFlow Lite\u751f\u6210\u7684\u6b63\u5f26\u6ce2\u5f62\u7684\u53d8\u5316\u800c\u6e10\u53d8\u3002"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u6ce8:")," \u5982\u679c\u60a8\u60f3\u5728\u4e32\u884c\u7ed8\u56fe\u4eea\u4e0a\u770b\u5230\u5b8c\u6574\u7684\u6b63\u5f26\u6ce2\uff08\u5373LED\u95ea\u70c1\u66f4\u5feb\uff09\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb\u9876\u90e8\u7684 ",(0,t.yg)("strong",{parentName:"p"},"arduino_constants.cpp")," \u6587\u4ef6\uff0c\u5e76\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"kInferencesPerCycle")," \u66f4\u6539\u4e3a100\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"const int kInferencesPerCycle = 100;\n")))}m.isMDXComponent=!0}}]);