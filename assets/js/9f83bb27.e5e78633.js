"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56492],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>c});var n=i(96540);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=n.createContext({}),a=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):g(g({},t),e)),i},d=function(e){var t=a(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=a(i),y=l,c=u["".concat(o,".").concat(y)]||u[y]||p[y]||s;return i?n.createElement(c,g(g({ref:t},d),{},{components:i})):n.createElement(c,g({ref:t},d))}));function c(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=i.length,g=new Array(s);g[0]=y;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[u]="string"==typeof e?e:l,g[1]=r;for(var a=2;a<s;a++)g[a]=i[a];return n.createElement.apply(null,g)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},60735:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>g,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var n=i(58168),l=(i(96540),i(15680));const s={description:"Speech Recognition based on Edge Impulse",title:"\u57fa\u4e8e Edge Impulse \u7684\u8bed\u97f3\u8bc6\u522b",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-BLE-PDM-EI",last_update:{date:"10/12/2023",author:"\u8d75\u6842\u83b9"}},g="\u57fa\u4e8e Edge Impulse \u7684\u8bed\u97f3\u8bc6\u522b",r={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/CN_XIAO-BLE-PDM-EI",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/CN_XIAO-BLE-PDM-EI",title:"\u57fa\u4e8e Edge Impulse \u7684\u8bed\u97f3\u8bc6\u522b",description:"Speech Recognition based on Edge Impulse",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/CN_XIAO-BLE-PDM-EI.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML",slug:"/cn/XIAO-BLE-PDM-EI",permalink:"/cn/XIAO-BLE-PDM-EI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/CN_XIAO-BLE-PDM-EI.md",tags:[],version:"current",lastUpdatedBy:"\u8d75\u6842\u83b9",lastUpdatedAt:1697068800,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{description:"Speech Recognition based on Edge Impulse",title:"\u57fa\u4e8e Edge Impulse \u7684\u8bed\u97f3\u8bc6\u522b",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-BLE-PDM-EI",last_update:{date:"10/12/2023",author:"\u8d75\u6842\u83b9"}},sidebar:"CNSidebar",previous:{title:"\u57fa\u4e8e Edge Impulse \u7684\u8fd0\u52a8\u8bc6\u522b",permalink:"/cn/XIAOEI"},next:{title:"\u57fa\u4e8e TensorFlow Lite \u7684\u8fd0\u52a8\u8bc6\u522b",permalink:"/cn/XIAO-BLE-Sense-TFLite-Getting-Started"}},o={},a=[{value:"\u9879\u76ee\u524d\u7684\u77e5\u8bc6",id:"\u9879\u76ee\u524d\u7684\u77e5\u8bc6",level:2},{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:3},{value:"\u8fd9\u662fXIAO nRF52840 Sense\u7684\u786c\u4ef6\u5f15\u811a",id:"\u8fd9\u662fxiao-nrf52840-sense\u7684\u786c\u4ef6\u5f15\u811a",level:4},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:2},{value:"Dataset",id:"dataset",level:3},{value:"\u5f00\u59cb",id:"\u5f00\u59cb-1",level:2},{value:"\u6b65\u9aa41 - \u6253\u5f00\u8fb9\u7f18\u8109\u51b2",id:"\u6b65\u9aa41---\u6253\u5f00\u8fb9\u7f18\u8109\u51b2",level:3},{value:"\u6b65\u9aa42 - \u6dfb\u52a0\u6570\u636e",id:"\u6b65\u9aa42---\u6dfb\u52a0\u6570\u636e",level:3},{value:"\u6b65\u9aa43 - \u9009\u62e9\u8bad\u7ec3\u65b9\u6cd5",id:"\u6b65\u9aa43---\u9009\u62e9\u8bad\u7ec3\u65b9\u6cd5",level:3},{value:"\u6b65\u9aa44 - \u751f\u6210\u7279\u5f81",id:"\u6b65\u9aa44---\u751f\u6210\u7279\u5f81",level:3},{value:"\u6b65\u9aa45 - \u5206\u7c7b\u5668",id:"\u6b65\u9aa45---\u5206\u7c7b\u5668",level:3},{value:"\u6b65\u9aa46 - \u90e8\u7f72\u5e76\u83b7\u53d6Arduino\u5e93",id:"\u6b65\u9aa46---\u90e8\u7f72\u5e76\u83b7\u53d6arduino\u5e93",level:3},{value:"\u90e8\u7f72\u9009\u9879",id:"\u90e8\u7f72\u9009\u9879",level:3},{value:"\u6b65\u9aa47 - \u5c06\u5e93\u6dfb\u52a0\u5230Arduino IDE",id:"\u6b65\u9aa47---\u5c06\u5e93\u6dfb\u52a0\u5230arduino-ide",level:3},{value:"\u6b65\u9aa48 - \u8bed\u97f3\u63a7\u5236XIAO nRF52840\u4e0a\u7684RGB\u706f",id:"\u6b65\u9aa48---\u8bed\u97f3\u63a7\u5236xiao-nrf52840\u4e0a\u7684rgb\u706f",level:3},{value:"\u2728 \u9879\u76ee\u8d21\u732e\u8005",id:"-\u9879\u76ee\u8d21\u732e\u8005",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],d={toc:a},u="wrapper";function p(e){let{components:t,...i}=e;return(0,l.yg)(u,(0,n.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u57fa\u4e8e-edge-impulse-\u7684\u8bed\u97f3\u8bc6\u522b"},"\u57fa\u4e8e Edge Impulse \u7684\u8bed\u97f3\u8bc6\u522b"),(0,l.yg)("h2",{id:"\u9879\u76ee\u524d\u7684\u77e5\u8bc6"},"\u9879\u76ee\u524d\u7684\u77e5\u8bc6"),(0,l.yg)("p",null,"XIAO nRF52840\u5e76\u4e0d\u662fEdge Impulse\u5b98\u65b9\u652f\u6301\u7684\uff0c\u5b83\u4e5f\u4e0d\u662f\u7528\u4e8e\u6536\u96c6\u6570\u636e\u7684\u8bbe\u5907\uff0c\u4f46\u6211\u5c06\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u5b83\u6765\u4f7f\u7528\u8bbe\u5907\u9ea6\u514b\u98ce\u8fdb\u884c\u63a8\u65ad\u3002"),(0,l.yg)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,l.yg)("p",null,"\u8981\u5b66\u4e60\u672c\u6559\u7a0b\uff0c\u60a8\u9700\u8981\u4ee5\u4e0b\u786c\u4ef6"),(0,l.yg)("div",{class:"table-center"},(0,l.yg)("table",{align:"center"},(0,l.yg)("tr",null,(0,l.yg)("th",null,"Seeed Studio XIAO nRF52840-Sense")),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg",style:{width:250,height:"auto"}})))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},(0,l.yg)("strong",null,(0,l.yg)("span",null,(0,l.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,l.yg)("h3",{id:"\u786c\u4ef6\u51c6\u5907"},"\u786c\u4ef6\u51c6\u5907"),(0,l.yg)("p",null,"\u6211\u4eec\u4e0d\u9700\u8981\u4efb\u4f55\u786c\u4ef6\u51c6\u5907\u3002XIAO nRF52840 \u5df2\u7ecf\u5177\u5907\u4e86\u6211\u4eec\u8fd9\u4e2a\u9879\u76ee\u6240\u9700\u8981\u7684\u4e00\u5207\u3002\u6211\u4eec\u53ea\u9700\u8981PDM\u9ea6\u514b\u98ce\u3002"),(0,l.yg)("h4",{id:"\u8fd9\u662fxiao-nrf52840-sense\u7684\u786c\u4ef6\u5f15\u811a"},"\u8fd9\u662fXIAO nRF52840 Sense\u7684\u786c\u4ef6\u5f15\u811a"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png",alt:"XIAO nrf82840 hardware",width:600,height:"auto"})),(0,l.yg)("p",{style:{textAlign:"center"}}),(0,l.yg)("h2",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,l.yg)("p",null,"\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u53ea\u9700\u8981\u505a\u4e09\u4ef6\u4e8b:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Google Speech commands dataset(check below)"),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("a",{parentName:"li",href:"https://edgeimpulse.com/"},"Edge Impulse Account")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("a",{parentName:"li",href:"https://www.arduino.cc/"},"Arduino IDE"))),(0,l.yg)("h3",{id:"dataset"},"Dataset"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6211\u5c06\u4f7f\u7528Google Speech commands dataset\u3002\u4e0d\u662f\u6240\u6709\u7684\u6570\u636e\u96c6\uff0c\u53ea\u662f\u5176\u4e2d\u7684\u4e00\u4e9b\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u73b0\u5728\uff0c\u8bf7\u4e0b\u8f7d\u6570\u636e\u96c6\u5e76\u89e3\u538b\u3002\u5b8c\u6574\u7684\u6570\u636e\u96c6\u4e3a2.3GB\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u8fd9\u4e2a ",(0,l.yg)("a",{href:"https://www.tensorflow.org/lite/microcontrollers",target:"_blank"},"Google Speech commands dataset")," \u7531\u8c37\u6b4c\u5728\u5176\u5fae\u63a7\u5236\u5668TensorFlow Lite\u7684\u5fae\u8bed\u97f3\u793a\u4f8b\u4e2d\u4f7f\u7528\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{href:"https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb",target:"_blank"}," \u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u4ee3\u7801\u3002"))),(0,l.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece\u4e0a\u9762\u7684\u7b2c\u4e00\u4e2a\u94fe\u63a5\u4e0b\u8f7d\u6570\u636e\u96c6\uff0c\u5b83\u5c06\u88ab\u63d0\u53d6\u4e3a:"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png",alt:"Dataset extracted",alt:"Speech commands dataset",width:600,height:"auto"})),(0,l.yg)("h2",{id:"\u5f00\u59cb-1"},"\u5f00\u59cb"),(0,l.yg)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u5f00\u59cb\u4f7f\u7528Edge Impulse\u57fa\u4e8e\u6570\u636e\u96c6\u521b\u5efaML\u6a21\u578b\u3002"),(0,l.yg)("h3",{id:"\u6b65\u9aa41---\u6253\u5f00\u8fb9\u7f18\u8109\u51b2"},"\u6b65\u9aa41 - \u6253\u5f00\u8fb9\u7f18\u8109\u51b2"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Edge Impulse\u662f\u4e00\u4e2a\u673a\u5668\u5b66\u4e60(ML)\u5f00\u53d1\u5e73\u53f0\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u521b\u5efa\u548c\u90e8\u7f72\u81ea\u5b9a\u4e49ML\u6a21\u578b\u5230\u8fb9\u7f18\u8bbe\u5907\uff0c\u5982\u5fae\u63a7\u5236\u5668\u548c\u667a\u80fd\u624b\u673a\u3002 "),(0,l.yg)("li",{parentName:"ul"},"\u5b83\u63d0\u4f9b\u4e86\u5404\u79cd\u5de5\u5177\u548c\u8d44\u6e90\u6765\u5e2e\u52a9\u6784\u5efa\u548c\u4f18\u5316\u7279\u5b9a\u4efb\u52a1\u7684ML\u6a21\u578b\uff0c\u5982\u5173\u952e\u5b57\u68c0\u6d4b\u3001\u5f02\u5e38\u68c0\u6d4b\u548c\u5206\u7c7b\u3002 ")),(0,l.yg)("p",null,"\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002\u7ed9\u5b83\u8d77\u4e2a\u540d\u5b57\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png",alt:"Edge Impulse New project",width:600,height:"auto"})),(0,l.yg)("p",null,"After creating a new project, go to the data acquisition page."),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png",alt:"Edge Impulse Data Aquisition",width:"{600}",height:"auto"})),(0,l.yg)("h3",{id:"\u6b65\u9aa42---\u6dfb\u52a0\u6570\u636e"},"\u6b65\u9aa42 - \u6dfb\u52a0\u6570\u636e"),(0,l.yg)("p",null,"\u56e0\u4e3a\u6211\u4eec\u8981\u4f7f\u7528Google Speech commands dataset\uff0c\u6240\u4ee5\u9009\u62e9\u201cAdd existing data\u201d\u3002\n\u63a5\u4e0b\u6765\uff0c\u9009\u62e9\u201c\u4e0a\u4f20\u6570\u636e\u201d"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png",alt:"Edge Impulse upload data",width:600,height:"auto"})),(0,l.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8981\u9009\u62e9\u6570\u636e -\u200a\u8ba9\u6211\u4eec\u4ecespeech\u6570\u636e\u96c6\u4e2d\u9009\u62e9\u4e00\u4e2a\u6587\u4ef6\u5939\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png",alt:"Edge Impulse upload data screen",width:600,height:"auto"})),(0,l.yg)("p",null,"\u6570\u636e\u96c6\u6709\u5f88\u591a\u5355\u8bcd\u53ef\u4ee5\u7528\u6765\u8bad\u7ec3\u3002\u8ba9\u6211\u4eec\u9009\u62e93\u4e2a\u6587\u4ef6\u5939(\u6211\u4eec\u7684\u6807\u7b7e)\u6765\u8bad\u7ec3\u548c\u80cc\u666f\u566a\u58f0\u3002\u6211\u4eec\u5f97\u52304\u4e2a\u6807\u7b7e\u3002\n\u6309\u4e0b\u201c\u6d4f\u89c8\u201d\u6309\u94ae\u3002\n\u7b2c\u4e00\u4e2a\u662f\u201cgo\u201d\u3002\u9009\u62e9\u6587\u4ef6\u5939-\u4f60\u53ef\u4ee5\u770b\u5230\u6240\u6709\u7684\u3002wav\u6587\u4ef6-\u7136\u540e\u6309\u201c\u4e0a\u4f20\u201d\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png",alt:"Files to upload",width:600,height:"auto"})),(0,l.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u4fdd\u7559\u7c7b\u522b\u7684\u9ed8\u8ba4\u9009\u9879\u3002\u7528\u8fb9\u8109\u51b2\u5206\u5272\u6570\u636e\u3002\n\u5bf9\u4e8e\u6807\u7b7e\uff0c\u4f60\u81ea\u5df1\u5199\u6807\u7b7e\u3002\u5b8c\u6210\u6240\u6709\u8fd9\u4e9b\u4e4b\u540e\uff0c\u70b9\u51fb\u201cUpload data\u201d\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png",alt:"Edge Impulse upload data screen",width:600,height:"auto"})),(0,l.yg)("p",null,"\u5728\u53f3\u4fa7\uff0c\u4f60\u5c06\u770b\u5230\u6b63\u5728\u4e0a\u4f20\u7684\u6587\u4ef6\u3002\u8fd9\u53ef\u80fd\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\uff0c\u56e0\u4e3a\u4ed6\u4eec\u5f88\u591a\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png",alt:"Files upload progress",width:600,height:"auto"})),(0,l.yg)("p",null,"\u8fc7\u4e00\u6bb5\u65f6\u95f4\uff0c\u5b83\u5b8c\u6210\u5e76\u663e\u793a\u4e00\u4e2a\u4e0a\u4f20\u6587\u4ef6\u7684\u63d0\u793a\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png",alt:"Files upload resume",width:600,height:"auto"})),(0,l.yg)("p",null,"\u5728\u8fd9\u4e4b\u540e\uff0c\u5c4f\u5e55\u663e\u793a\u5982\u4e0b\u56fe"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,l.yg)("p",null,"\u8981\u4e0a\u4f20\u66f4\u591a\u6570\u636e\uff0c\u8bf7\u6309\u53f3\u8fb9\u6587\u4ef6\u5217\u8868\u4e0a\u65b9\u7684\u5c0f\u4e0a\u4f20\u6309\u94ae\u3002\n\u91cd\u590d3\u6b21- 2\u4e2a\u6807\u7b7e\u548c\u80cc\u666f\u566a\u58f0\u3002\n\u6211\u5c06\u9009\u62e9happy\u3001bird\u548c\u6807\u7b7e\u4e3a\u201cnoise\u201d\u7684\u201cbackground noise\u201d\u6587\u4ef6\u5939\u3002\n\u6700\u540e\uff0c\u8fd9\u5c31\u662f\u6211\u4eec\u6240\u6709\u7684\u6807\u7b7e"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,l.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u521b\u5efa\u7f51\u7edc\u6765\u5b66\u4e60\u6211\u4eec\u7684\u5355\u8bcd\u3002\u5355\u51fb\u201c\u8109\u51b2\u8bbe\u8ba1\u201d\u4ee5\u521b\u5efa\u8109\u51b2"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,l.yg)("h3",{id:"\u6b65\u9aa43---\u9009\u62e9\u8bad\u7ec3\u65b9\u6cd5"},"\u6b65\u9aa43 - \u9009\u62e9\u8bad\u7ec3\u65b9\u6cd5"),(0,l.yg)("p",null,"\u56e0\u4e3a\u6bcf\u4e2a\u526a\u8f91\u662f1s\u548c16Khz\uff0c\u8ba9\u6211\u4eec\u4fdd\u6301\u7a97\u53e3\u5927\u5c0f\u548c\u9891\u7387\u76f8\u540c\u3002\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2aprocessing block\uff08\u5904\u7406\u5757\uff09\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,l.yg)("p",null,"Edge Impulse\u5728\u8fd9\u65b9\u9762\u4e5f\u6709\u5f88\u5927\u5e2e\u52a9\u3002\u70b9\u51fb\u201cAdd a processing block\u201d\uff0c\u9009\u62e9\u97f3\u9891(MFCC)\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,l.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u70b9\u51fb\u201cAdd learning block\u201d\u5e76\u9009\u62e9\u5206\u7c7b\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,l.yg)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u7684\u6700\u540e\u4e00\u5217 - \u8f93\u51fa\u7279\u5f81 - \u67094\u4e2a\u6807\u7b7e(bird, go, happy, noise).\u3002\n\u70b9\u51fb\u201cSave Impulse\u201d\u4fdd\u5b58\u6211\u4eec\u5230\u76ee\u524d\u4e3a\u6b62\u7684\u5de5\u4f5c\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,l.yg)("h3",{id:"\u6b65\u9aa44---\u751f\u6210\u7279\u5f81"},"\u6b65\u9aa44 - \u751f\u6210\u7279\u5f81"),(0,l.yg)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u770bMFCC\u53c2\u6570\u3002\u5982\u679c\u4f60\u613f\u610f\uff0c\u4f60\u53ef\u4ee5\u6539\u53d8\u8fd9\u4e9b\u503c\u3002\n\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u4fdd\u6301\u9ed8\u8ba4\u503c\u3002\u70b9\u51fb\u201c\u4fdd\u5b58\u53c2\u6570\u201d\u3002\n\u4fdd\u5b58\u53c2\u6570\u540e\uff0c\u6211\u4eec\u4f1a\u5f97\u5230\u4e00\u4e2a\u65b0\u7684\u7a97\u53e3\u6765\u201c\u751f\u6210\u7279\u5f81\u201d\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,l.yg)("p",null,"\u70b9\u51fb\u540e\uff0cEdge Impulse\u5c06\u5f00\u59cb\u751f\u6210\u7279\u5f81\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png",alt:"Generate features",width:600,height:"auto"})),(0,l.yg)("p",null,"\u8fc7\u4e86\u4e00\u6bb5\u65f6\u95f4\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u751f\u6210\u7684\u7279\u5f81\uff0c\u5e76\u53ef\u4ee5\u5c06\u5b83\u4eec\u53ef\u89c6\u5316"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png",alt:"Feature explorer",width:600,height:"auto"})),(0,l.yg)("p",null,'\u73b0\u5728\u6211\u4eec\u7528\u9009\u5b9a\u7684\u53c2\u6570\u6765\u8bad\u7ec3\u6211\u4eec\u7684\u7f51\u7edc\u3002\u70b9\u51fb"Classifier"\uff08\u5206\u7c7b\u5668\uff09\u3002'),(0,l.yg)("h3",{id:"\u6b65\u9aa45---\u5206\u7c7b\u5668"},"\u6b65\u9aa45 - \u5206\u7c7b\u5668"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png",alt:"Classifier",width:600,height:"auto"})),(0,l.yg)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u8c03\u6574\u6211\u4eec\u7684\u7f51\u7edc\u8bbe\u7f6e\uff0c\u6bd4\u5982\u8bad\u7ec3\u5468\u671f\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u6570\u636e\u589e\u5f3a\u7b49\u7b49\u3002\nEdge Impulse\u4e3a\u5173\u952e\u8bcd\u8bc6\u522b\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u800c\u6709\u6548\u7684\u795e\u7ecf\u7f51\u7edc\u67b6\u6784\u3002\u8be5\u4f53\u7cfb\u7ed3\u6784\u7531\u4ee5\u4e0b\u5404\u5c42\u7ec4\u6210\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("b",null,"\u8f93\u5165\u5c42\uff1a")," \u8f93\u5165\u5c42\u5c06MFCC\u7279\u5f81\u4f5c\u4e3a\u8f93\u5165\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("b",null,"\u9690\u85cf\u5c42\uff1a")," \u9690\u85cf\u5c42\u5b66\u4e60\u4eceMFCC\u7279\u5f81\u4e2d\u63d0\u53d6\u66f4\u9ad8\u7ea7\u522b\u7684\u7279\u5f81\u3002Edge Impulse\u652f\u6301\u5404\u79cd\u9690\u85cf\u5c42\u7c7b\u578b\uff0c\u5982\u5377\u79ef\u5c42\u548c\u9012\u5f52\u5c42\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("b",null,"\u8f93\u51fa\u5c42\uff1a")," \u8f93\u51fa\u5c42\u9884\u6d4b\u97f3\u9891\u8f93\u5165\u5305\u542b\u5173\u952e\u5b57\u7684\u6982\u7387\u3002")),(0,l.yg)("p",null,'\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u9ed8\u8ba4\u53c2\u6570\uff0c\u4f46\u9ed8\u8ba4\u53c2\u6570\u5c31\u8db3\u591f\u4e86\u3002\u70b9\u51fb"Start Training"\u3002'),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png",alt:"Network architecture",width:600,height:"auto"})),(0,l.yg)("p",null,"\u5f00\u59cb\u8bad\u7ec3\u540e\uff0c\u5728\u5c4f\u5e55\u7684\u53f3\u4fa7\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8bad\u7ec3\u7684\u8fdb\u5ea6\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png",alt:"Training progress",width:600,height:"auto"})),(0,l.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u76ee\u6807\u8bbe\u5907\u66f4\u6539\u4e3anRF52840\u2014\u2014\u5c31\u50cf\u6211\u4eec\u7684XIAO nRF52840\u4e00\u6837\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u770b\u5230\u6027\u80fd\u8ba1\u7b97\u548c\u4f18\u5316\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png",alt:"Target device",width:600,height:"auto"})),(0,l.yg)("p",null,"\u8bad\u7ec3\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5f97\u5230\u6df7\u6dc6\u77e9\u9635\u548c\u6570\u636e\u8d44\u6e90\u7ba1\u7406\u5668"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png",alt:"Confusion Matrix",width:600,height:"auto"})),(0,l.yg)("p",null,"\u73b0\u5728\u7f51\u7edc\u51c6\u5907\u597d\u4e86\uff0c\u8ba9\u6211\u4eec\u5c1d\u8bd5\u4e00\u4e9b\u6837\u672c\u5e76\u8fdb\u884c\u4e00\u4e9b\u5b9e\u65f6\u5206\u7c7b\u3002\n\u5982\u679c\u4f60\u53bb\u73b0\u573a\u5206\u7c7b\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u6837\u672c\u548c\u5206\u7c7b\u7ed3\u679c\u3002\u8fd9\u91cc\uff0c\u4ee5\u9e1f\u4e3a\u4f8b\uff0c\u6211\u4eec\u5728\u7ed3\u679c\u4e2d\u5f97\u5230\u4e86bird\u3002\u592a\u597d\u4e86\u3002\u8fd9\u4e2a\u6a21\u578b\u662f\u6709\u6548\u7684\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png",alt:"Live classification",width:600,height:"auto"})),(0,l.yg)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u8fdb\u884c\u6a21\u578b\u6d4b\u8bd5\u3002\n\u8ba9\u6211\u4eec\u4f7f\u7528\u5206\u5272\u6837\u672c\u6765\u6d4b\u8bd5\u6a21\u578b\u3002\u70b9\u51fb\u201cClassify all\u201d\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png",alt:"Test data",width:600,height:"auto"})),(0,l.yg)("p",null,"\u6211\u4eec\u5f97\u5230\u4e86\u5c06\u8fd190%\u7684\u51c6\u786e\u7387\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png",alt:"Accuracy",width:600,height:"auto"})),(0,l.yg)("h3",{id:"\u6b65\u9aa46---\u90e8\u7f72\u5e76\u83b7\u53d6arduino\u5e93"},"\u6b65\u9aa46 - \u90e8\u7f72\u5e76\u83b7\u53d6Arduino\u5e93"),(0,l.yg)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u8fdb\u5165\u90e8\u7f72\u4ee5\u83b7\u53d6\u5fae\u63a7\u5236\u5668\u7684\u6587\u4ef6\u3002 "),(0,l.yg)("h3",{id:"\u90e8\u7f72\u9009\u9879"},"\u90e8\u7f72\u9009\u9879"),(0,l.yg)("p",null,"\u6211\u4eec\u9009\u62e9Arduino"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png",alt:"Accuracy",width:600,height:"auto"})),(0,l.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u4fdd\u6301\u9009\u62e9\u91cf\u5316(int8)\u5e76\u5355\u51fb\u201c\u6784\u5efa\u201d\u4ee5\u4e0b\u8f7d\u8981\u4e0eArduino IDE\u4e00\u8d77\u4f7f\u7528\u7684\u6587\u4ef6\n\u6211\u4eec\u53ef\u4ee5\u505a\u4e00\u4e9b\u4f18\u5316\u3002\u5982\u679c\u4f60\u610f\u8bc6\u5230\u7cbe\u5ea6\u5f88\u4f4e\uff0c\u8bf7\u5173\u95edEON\u7f16\u8bd1\u5668\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png",alt:"Accuracy",width:600,height:"auto"})),(0,l.yg)("p",null,"\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u6587\u4ef6\u5c06\u81ea\u52a8\u4e0b\u8f7d\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png",alt:"Arduino Files download",width:600,height:"auto"})),(0,l.yg)("h3",{id:"\u6b65\u9aa47---\u5c06\u5e93\u6dfb\u52a0\u5230arduino-ide"},"\u6b65\u9aa47 - \u5c06\u5e93\u6dfb\u52a0\u5230Arduino IDE"),(0,l.yg)("p",null,"\u5728Arduino IDE\u4e2d\uff0c\u8ba9\u6211\u4eec\u6dfb\u52a0\u65b0\u4e0b\u8f7d\u7684\u6587\u4ef6\u3002\n\u5230Sketch >\u5305\u542b\u5e93>\u6dfb\u52a0\u3002zip\u5e93"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png",alt:"Arduino IDE Add library",width:600,height:"auto"})),(0,l.yg)("p",null,"\u9009\u62e9\u4e0b\u8f7d\u7684\u6587\u4ef6\u3002\u8fc7\u4e00\u4f1a\u513f\uff0c\u8f93\u51fa\u7a97\u53e3\u4f1a\u663e\u793a\u4e00\u6761\u6d88\u606f\uff0c\u8bf4\u660e\u5e93\u5df2\u7ecf\u5b89\u88c5\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png",alt:"Library installed",width:600,height:"auto"})),(0,l.yg)("h3",{id:"\u6b65\u9aa48---\u8bed\u97f3\u63a7\u5236xiao-nrf52840\u4e0a\u7684rgb\u706f"},"\u6b65\u9aa48 - \u8bed\u97f3\u63a7\u5236XIAO nRF52840\u4e0a\u7684RGB\u706f"),(0,l.yg)("p",null,"\u8ba9\u6211\u4eec\u6253\u5f00\u4e00\u4e2a\u4f8b\u5b50\n\u53c2\u89c1\u793a\u4f8bExamples> <your_files_names> > nano_ble33_sense > nano_ble33_sense_microphone"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png",alt:"Library installed",width:600,height:"auto"})),(0,l.yg)("p",null,"\u4e3a\u4ec0\u4e48\u662fArduino BLE 33 Sense ?\u4ed6\u4eec\u4f7f\u7528\u76f8\u540c\u7684\u5e93-PDM(\u8109\u51b2\u5bc6\u5ea6\u8c03\u5236)-\u6765\u63a7\u5236\u9ea6\u514b\u98ce\u3002Arduino Nano BLE 33 Sense\u5177\u6709MP34DT05\u548cXIAO nRF52840 Sense\u5177\u6709MSM261D3526H1CPM\u3002\n\u6253\u5f00sketch\uff0c\u8ba9\u6211\u4eec\u7f16\u8bd1\u5b83\uff0c\u770b\u770b\u662f\u5426\u6709\u4efb\u4f55\u9519\u8bef\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png",alt:"Sketch open",width:600,height:"auto"})),(0,l.yg)("p",null,"\u4e00\u6bb5\u65f6\u95f4\u540e\uff0csketch\u88ab\u7f16\u8bd1\uff0c\u6ca1\u6709\u9519\u8bef\u62a5\u544a\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png",alt:"Sketch open",width:600,height:"auto"})),(0,l.yg)("p",null,"\u73b0\u5728\uff0c\u8fde\u63a5XIAO nRF52840 Sense(\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u8fd9\u6837\u505a)\u5e76\u5c06\u4ee3\u7801\u4e0a\u4f20\u3002"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png",alt:"Sketch open",width:600,height:"auto"})),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png",alt:"Compile result",width:600,height:"auto"})),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png",alt:"Upload",width:600,height:"auto"})),(0,l.yg)("p",null,"\u73b0\u5728\uff0c\u6253\u5f00\u4e32\u884c\u7aef\u53e3(Ctrl+Shitf+M)\u5e76\u68c0\u67e5\u63a8\u7406\u7ed3\u679c(\u6b64\u65f6\u5df2\u7ecf\u5f00\u59cb\u8bb0\u5f55\uff0c\u8fdb\u884c\u63a8\u7406\u548c\u9884\u6d4b)"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png",alt:"Serial Monitor",width:600,height:"auto"})),(0,l.yg)("p",null,"\u8bd5\u7740\u8bf4\u51fa\u6240\u9009\u7684\u4e00\u4e2a\u8bcd\u3002\u6211\u8bf4\u8fc7\u4e86"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png",alt:"Serial Monitor",width:600,height:"auto"})),(0,l.yg)("p",null,"\u5982\u679c\u5b83\u6b63\u786e\u5730\u68c0\u6d4b\u5230\u5355\u8bcd\uff0c\u5219\u66f4\u6709\u53ef\u80fd\u5f97\u5230\u6700\u63a5\u8fd11.0\u7684\u7ed3\u679c\uff0c\u800c\u5176\u4ed6\u7684\u503c\u66f4\u63a5\u8fd10.0\n\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u4eab\u53d7\u4e00\u70b9\u4e50\u8da3\u5e76\u7a0d\u5fae\u4fee\u6539\u4e00\u4e0b\u4ee3\u7801\u3002\nXIAO nRF52840 Sense\u5185\u7f6eLED\uff0c\u67093\u79cd\u989c\u8272: "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7ea2\u8272\u6307\u793a\u706f"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif",alt:"Red LED",width:600,height:"auto"}))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7eff\u8272\u6307\u793a\u706f"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif",alt:"Green LED",width:600,height:"auto"}))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u84dd\u8272\u6307\u793a\u706f"),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif",alt:"Blue LED",width:600,height:"auto"})))),(0,l.yg)("p",null,"\u7531\u4e8e\u6211\u4eec\u67093\u4e2a\u5355\u8bcd\uff0c\u8ba9\u6211\u4eec\u4e3a\u6bcf\u4e2a\u5355\u8bcd\u5206\u914d\u4e00\u4e2a\u989c\u8272\u5e76\u70b9\u4eae\u6bcf\u4e2a\u5355\u8bcd\u7684\u989c\u8272\u3002 "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7ea2\u8272\u4ee3\u8868bird"),(0,l.yg)("li",{parentName:"ul"},"\u7eff\u8272\u4ee3\u8868Go"),(0,l.yg)("li",{parentName:"ul"},"\u84dd\u8272\u4ee3\u8868happy")),(0,l.yg)("p",null,"\u56e0\u4e3a\u8fd9\u5c06\u66f4\u5bb9\u6613\uff0c\u6211\u5df2\u7ecf\u68c0\u67e5\u4e86\u677f\u5f15\u811a\u5b9a\u4e49\uff0c\u4ee5\u4e0b\u5f15\u811a\u7b7e\u540d\u4e3aLED\u989c\u8272:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7ea2\u8272\u200a-\u200aPin 11")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u7eff\u8272\u200a-\u200aPin 13")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u84dd\u8272\u200a-\u200aPin 12"),(0,l.yg)("p",{parentName:"li"},"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u9608\u503c\u3002\u6211\u4eec\u77e5\u9053\u9884\u6d4b\u7ed3\u679c\u4ece0.0\u52301.0\u3002\u8d8a\u63a5\u8fd11.0\uff0c\u8fd9\u4e2a\u8bcd\u7684\u5206\u7c7b\u5c31\u8d8a\u786e\u5b9a\u3002\u8fd9\u4e2a\u503c\u7a0d\u540e\u53ef\u4ee5\u8c03\u6574\u3002\u6211\u628a\u5b83\u8bbe\u4e3a0.7\u3002 "))),(0,l.yg)("p",null,"\u5148\u5b9a\u4e49\u4e00\u4e9b\u53d8\u91cf\u3002\u6211\u5728\u5305\u542b\u7684\u5e93\u4e4b\u540e\u5b9a\u4e49\u4e86\u8fd9\u4e9b\u5e93:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-cpp"},"/* threshold for predictions */\nfloat threshold = 0.7;\n\n/** \n  LABELS INDEX:\n  0 - bird\n  1 - go\n  2 - happy\n  3 - noise\n*/\n// LED pin (defines color) to light up\n/**\n PIN 11 - RED\n PIN 12 - BLUE\n PIN 13 - GREEN\n*/\nint LED = 0;\nint oldLED;\n")),(0,l.yg)("i",null,"\u5728 oldLED")," \u5c06\u5b9a\u4e49\u524d\u9762\u7684LED\u4eae\u8d77\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u5728\u6ca1\u6709\u9884\u6d4b\u6216\u9884\u6d4b\u53d1\u751f\u53d8\u5316\u65f6\u5173\u95ed\u5b83\u3002",(0,l.yg)("i",null,"int LED")," \u662f\u6211\u4eec\u5c06\u8981\u6253\u5f00\u7684\u7535\u6d41LED\u3002",(0,l.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5728loop( )\u51fd\u6570\u4e2d\uff0c\u5728for\u5faa\u73af\u6307\u4ee4\u5185\u90e8\uff0c\u6211\u4eec\u5faa\u73af\u4f7f\u7528CLASSIFIER_LABEL_COUNT(\u5927\u7ea6\u5728\u7b2c129\u884c\u5de6\u53f3\u2014\u2014\u4e0a\u9762\u7684\u884c\u5df2\u7ecf\u6709\u4e86):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-cpp"},"for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n")),(0,l.yg)("p",null,"\u6211\u4eec\u4f7f\u7528if\u6307\u4ee4\u6765\u68c0\u67e5\u5206\u7c7b\u503c\u3002\u5982\u679c\u8d85\u8fc7\u4e86\u5b9a\u4e49\u7684\u9608\u503c\uff0c\u6211\u4eec\u4f7f\u7528switch\u6307\u4ee4\u68c0\u67e5\u8bb0\u5f55\u4e86\u54ea\u4e2a\u5355\u8bcd\u3002 "),(0,l.yg)("p",null,"\u5b8c\u6574\u7684for\u5faa\u73af\u52a0\u4e0a\u65b0\u589e\u7684\u4ee3\u7801\u5982\u4e0b\u6240\u793a:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-cpp"},'for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n        //lets light up some LEDS\n\n        if (result.classification[ix].value > threshold) {\n          //now let\'s see what label were in\n          switch (ix) {\n            case 0: LED = 11; break;\n            case 1: LED = 13; break;\n            case 2: LED = 12; break;\n            default: LED = 0;\n          }\n          //in Sense, LOW will light up the LED\n          if (LED != 0) {\n            digitalWrite (oldLED, HIGH); //if we enter a word right next to previous - we turn off the previous LED\n            digitalWrite (LED, LOW);            \n            oldLED = LED;\n          }\n          else //turn off LED\n            digitalWrite (oldLED, HIGH);\n        }\n    }\n')),(0,l.yg)("p",null,"\u66f4\u6539\u540e\uff0c\u53ea\u9700\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u5fae\u63a7\u5236\u5668\uff0c\u5e76\u5c1d\u8bd5\u8bf4\u51fa\u8bad\u7ec3\u7684\u5355\u8bcd\uff0c\u5e76\u770b\u5230LED\u6839\u636e\u5355\u8bcd\u6253\u5f00\u3002 "),(0,l.yg)("p",null,"\u8fd9\u5c31\u662f\u5b83\uff0c\u867d\u7136\u4e0d\u76f4\u63a5\u652f\u6301\uff0c\u4f46\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528XIAO nRF52840\u6765\u8fd0\u884c\u4e00\u4e9b\u4f7f\u7528\u8fb9\u7f18\u8109\u51b2\u7684ML\u6a21\u578b"),(0,l.yg)("h2",{id:"-\u9879\u76ee\u8d21\u732e\u8005"},"\u2728 \u9879\u76ee\u8d21\u732e\u8005"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u8fd9\u4e2a\u9879\u76ee\u7531Seeed\u5de5\u4f5c\u5ba4\u652f\u6301 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"\u9879\u76ee\u8d21\u732e\u8005"),"."),(0,l.yg)("li",{parentName:"ul"},"\u611f\u8c22 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237"},"\u8d75\u6842\u83b9\u7684\u52aa\u529b")," \u4f60\u7684\u5de5\u4f5c\u5c06\u88ab ",(0,l.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"\u5c55\u51fa"),".")),(0,l.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,l.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1!\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u559c\u597d\u548c\u9700\u6c42\u3002"),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);