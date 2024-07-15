"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2254],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),g=r,y=u["".concat(s,".").concat(g)]||u[g]||p[g]||o;return t?i.createElement(y,a(a({ref:n},c),{},{components:t})):i.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},22522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(58168),r=(t(96540),t(15680));const o={description:"Develop SenseCAP Indicator both chips with Arduino",title:"Develop both chips with Arduino",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_ESP32_Arduino",last_update:{date:"3/3/2024",author:"DuKaiyin"}},a="\u4f7f\u7528Arduino\u5f00\u53d1SenseCAP Indicator\u7684\u53cc\u82af\u7247",l={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/cn-SenseCAP_Indicator_Arduino",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/cn-SenseCAP_Indicator_Arduino",title:"Develop both chips with Arduino",description:"Develop SenseCAP Indicator both chips with Arduino",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/cn-SenseCAP_Indicator_Arduino.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial",slug:"/cn/SenseCAP_Indicator_ESP32_Arduino",permalink:"/cn/SenseCAP_Indicator_ESP32_Arduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/cn-SenseCAP_Indicator_Arduino.md",tags:[],version:"current",lastUpdatedBy:"DuKaiyin",lastUpdatedAt:1709424e3,formattedLastUpdatedAt:"Mar 3, 2024",frontMatter:{description:"Develop SenseCAP Indicator both chips with Arduino",title:"Develop both chips with Arduino",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_ESP32_Arduino",last_update:{date:"3/3/2024",author:"DuKaiyin"}}},s={},d=[{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:2},{value:"\u786c\u4ef6\u6982\u8ff0\u548c\u5f00\u53d1\u77e5\u8bc6",id:"\u786c\u4ef6\u6982\u8ff0\u548c\u5f00\u53d1\u77e5\u8bc6",level:3},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u4f7f\u7528\u8fde\u63a5\u5230ESP32S3\u82af\u7247\u7684\u5c4f\u5e55\u8fdb\u884c\u5f00\u53d1",id:"\u4f7f\u7528\u8fde\u63a5\u5230esp32s3\u82af\u7247\u7684\u5c4f\u5e55\u8fdb\u884c\u5f00\u53d1",level:3},{value:"\u8bfb\u53d6\u8fde\u63a5\u5230RP2040\u82af\u7247\u7684\u4f20\u611f\u5668",id:"\u8bfb\u53d6\u8fde\u63a5\u5230rp2040\u82af\u7247\u7684\u4f20\u611f\u5668",level:3},{value:"\u5c06\u4e24\u4e2a\u793a\u4f8b\u7ec4\u5408\u5e76\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u4f20\u611f\u5668\u6570\u636e",id:"\u5c06\u4e24\u4e2a\u793a\u4f8b\u7ec4\u5408\u5e76\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u4f20\u611f\u5668\u6570\u636e",level:3},{value:"\u66f4\u591a\u4fe1\u606f",id:"\u66f4\u591a\u4fe1\u606f",level:2},{value:"\u7279\u522b\u611f\u8c22",id:"\u7279\u522b\u611f\u8c22",level:2},{value:"\u2728  \u8d21\u732e\u8005\u9879\u76ee",id:"--\u8d21\u732e\u8005\u9879\u76ee",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u4f7f\u7528arduino\u5f00\u53d1sensecap-indicator\u7684\u53cc\u82af\u7247"},"\u4f7f\u7528Arduino\u5f00\u53d1SenseCAP Indicator\u7684\u53cc\u82af\u7247"),(0,r.yg)("p",null,"SenseCAP Indicator\u662f\u4e00\u6b3e\u7531ESP32\u548cRP2040\u53ccMCU\u63d0\u4f9b\u52a8\u529b\u76844\u82f1\u5bf8\u89e6\u6478\u5c4f\u8bbe\u5907\u3002ESP32\u548cRP2040\u90fd\u662f\u529f\u80fd\u5f3a\u5927\u7684\u5fae\u63a7\u5236\u5668\uff0c\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u529f\u80fd\u548c\u529f\u80fd\u3002"),(0,r.yg)("p",null,"\u672c\u6559\u7a0b\u5c06\u6307\u5bfc\u60a8\u4f7f\u7528Arduino\u6846\u67b6\u7684\u7b80\u5355\u6027\u548c\u7075\u6d3b\u6027\u4e3aSensecap Indicator\u5f00\u53d1\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u9879\u76ee/\u56fa\u4ef6\u3002"),(0,r.yg)("h2",{id:"\u786c\u4ef6\u51c6\u5907"},"\u786c\u4ef6\u51c6\u5907"),(0,r.yg)("p",null,"\u6211\u5728\u8fd9\u91cc\u4f7f\u7528SenseCAP Indicator\u4f5c\u4e3a\u786c\u4ef6\uff0c\u5e76\u4e14\u4e0a\u9762\u6709\u56db\u79cd\u7c7b\u578b\u7684\u4f20\u611f\u5668\uff08CO2\u3001\u6e29\u5ea6\u3001\u6e7f\u5ea6\u3001TVOC\uff09\u3002\u8fd9\u91cc\u7684\u5185\u5bb9\u5e94\u8be5\u5305\u62ec\uff1a"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"SenseCAP Indicator D1S")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png",style:{width:"auto",height:200}})))),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-Indicator-D1S-p-5645.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("h3",{id:"\u786c\u4ef6\u6982\u8ff0\u548c\u5f00\u53d1\u77e5\u8bc6"},"\u786c\u4ef6\u6982\u8ff0\u548c\u5f00\u53d1\u77e5\u8bc6"),(0,r.yg)("p",null,"\u8be5\u6307\u793a\u5668\u91c7\u7528\u4e86\u4e24\u4e2aMCU\u7684\u8bbe\u8ba1\uff0c\u5176\u4e2dRP2040\u548cESP32S3\u540c\u65f6\u5de5\u4f5c\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"})),(0,r.yg)("p",null,"\u6839\u636e\u4e0a\u9762\u7684\u56fe\u8868\uff0c\u6211\u4eec\u77e5\u9053\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6240\u6709\u4f20\u611f\u5668\u90fd\u901a\u8fc7I2C\u534f\u8bae\u8fde\u63a5\u5230RP2040\u5fae\u63a7\u5236\u5668\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6709\u4e00\u4e2a\u4f7f\u7528PCA9535 IC\u7684I2C IO\u6269\u5c55\u6a21\u5757\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5c4f\u5e55\u8fde\u63a5\u5230ESP32S3\u5fae\u63a7\u5236\u5668\uff0c\u4f7f\u75282\u4e2a\u5f15\u811a\uff08CS\uff0cRESET\uff09\u8fde\u63a5\u5230PCA9535 I2C\u6269\u5c55\u5668\u3002"),(0,r.yg)("li",{parentName:"ol"},"RP2040\u901a\u8fc7ESP32S3\u4e0a\u7684UART\u63a5\u53e3\u7684\u5f15\u811a20\u548c\u5f15\u811a19\u8fde\u63a5\u3002")),(0,r.yg)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u5c06Sensecap Indicator\u63d2\u5165\u8ba1\u7b97\u673a\uff0c\u60a8\u5c06\u770b\u52302\u4e2a\u4e32\u53e3\uff0c\u4e00\u4e2a\u7528\u4e8eRP2040\uff0c\u4e00\u4e2a\u7528\u4e8eESP32S3\u3002\u5e26\u6709\u4fe1\u606f\u201c",(0,r.yg)("strong",{parentName:"p"},"USB-SERIAL CH340"),"\u201c \u7684\u4e32\u53e3\u662f\u8fde\u63a5\u5230ESP32S3\u7684\u4e32\u53e3\uff0c\u8fd9\u662f\u672c\u6559\u7a0b\u7684\u5176\u4f59\u90e8\u5206\u5c06\u4f7f\u7528\u7684\u4e32\u53e3\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/1.jpg"})),(0,r.yg)("h2",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,r.yg)("p",null,"\u6211\u4eec\u5728\u8fd9\u91cc\u4f7f\u7528Arduino\u3002"),(0,r.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"Download Arduino IDE"))))),(0,r.yg)("p",null,":::\u6ce8\u610f\n\u5728\u7ee7\u7eed\u6559\u7a0b\u4e4b\u524d\uff0c\u5728Arduino IDE\u4e2d\u9700\u8981\u5b8c\u6210\u4e00\u4e9b\u51c6\u5907\u5de5\u4f5c\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u786e\u4fddESP32\u7684\u677f\u5b9a\u4e49\u5df2\u7ecf\u5b89\u88c5\u5e76\u5904\u4e8e\u6700\u65b0\u7248\u672c\u3002\u5982\u679cArduino IDE\u4e2d\u5c1a\u672a\u5305\u542bESP32\u677f\uff0c\u8bf7\u6309\u7167 ",(0,r.yg)("a",{parentName:"li",href:"https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html"},"\u6b64\u6307\u5357"),"\u8fdb\u884c\u5b89\u88c5 "),(0,r.yg)("li",{parentName:"ol"},"\u9009\u62e9ESP32S3 Dev\u6a21\u5757\u4f5c\u4e3a\u677f\u5b9a\u4e49\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5bf9\u4e8e\u672c\u6559\u7a0b\u7684\u5185\u5bb9\uff0c\u60a8\u9700\u8981\u5728Arduino IDE\u4e2d\u542f\u7528PSRAM\u529f\u80fd\uff0c\u4ee5\u786e\u4fdd\u5c4f\u5e55\u6b63\u5e38\u5de5\u4f5c")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/2.jpg"})),(0,r.yg)("p",null,":::"),(0,r.yg)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u8fd9\u91cc\u8fd8\u63d0\u4f9b\u4e86\u76f8\u5173\u548c\u6240\u9700\u7684\u5e93\uff1a"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Develop with Screen")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Download \u23ec"))))))))),(0,r.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,r.yg)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fde\u63a5\u5230ESP32S3\u82af\u7247\u7684\u5c4f\u5e55\u8fdb\u884c\u5f00\u53d1\uff0c\u5e76\u8bfb\u53d6\u8fde\u63a5\u5230RP2040\u82af\u7247\u7684\u4f20\u611f\u5668\u3002\u6700\u540e\uff0c\u5c06\u5b83\u4eec\u7ec4\u5408\u5728\u4e00\u8d77\u3002"),(0,r.yg)("h3",{id:"\u4f7f\u7528\u8fde\u63a5\u5230esp32s3\u82af\u7247\u7684\u5c4f\u5e55\u8fdb\u884c\u5f00\u53d1"},"\u4f7f\u7528\u8fde\u63a5\u5230ESP32S3\u82af\u7247\u7684\u5c4f\u5e55\u8fdb\u884c\u5f00\u53d1"),(0,r.yg)("p",null,"Sensecap Indicator\u4f7f\u7528ST7701\u6a21\u5757\u4f5c\u4e3a\u5c4f\u5e55\uff0c\u5b83\u4f7f\u7528\u5e76\u884c\u63a5\u53e3\u5e76\u5df2\u8fde\u63a5\u5230ESP32S3 MCU\u4e0a\u7684\u5f15\u811a\u3002"),(0,r.yg)("p",null,"\u4e3a\u4e86\u80fd\u591f\u9a71\u52a8\u5c4f\u5e55\uff0c\u9700\u8981\u4e00\u4e9bArduino\u5e93\u3002\u8fd9\u4e9b\u5e93\u5df2\u5728\u201c\u8f6f\u4ef6\u51c6\u5907\u201d\u4e2d\u63d0\u5230\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4ece ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip"},"\u8fd9\u91cc"),"\u4e0b\u8f7d"),(0,r.yg)("p",null,"\u4e0b\u8f7d\u5e93\u540e\uff0c\u6253\u5f00Arduino\uff0c\u5728\u201c\u6587\u4ef6\u201d\u83dc\u5355\u4e2d\u9009\u62e9\u201c\u7ba1\u7406\u5e93\u201d\uff0c\u7136\u540e\u70b9\u51fb\u201c\u6dfb\u52a0.ZIP\u5e93\u201d\uff0c\u9009\u62e9\u4e0b\u8f7d\u7684ZIP\u6587\u4ef6\u8fdb\u884c\u5b89\u88c5\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"})),(0,r.yg)("p",null,"\u5c06\u4e0b\u8f7d\u7684\u5e93\u6dfb\u52a0\u5230Arduino IDE\u4e2d\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/4.jpg"})),(0,r.yg)("p",null,"\u540c\u65f6\uff0c\u60a8\u8fd8\u9700\u8981\u68c0\u67e5\u76f8\u540c\u7684\u201cSketch\u201d\u83dc\u5355\uff0c\u9009\u62e9\u201c\u7ba1\u7406\u5e93\u201d\uff0c\u7136\u540e\u641c\u7d22\u201cPCA9535\u201d\uff0c\u9009\u62e9\u7531hidea kitai\u5236\u4f5c\u7684\u5e93\u5e76\u5b89\u88c5\u5b83\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"})),(0,r.yg)("p",null,":::\u6ce8\u610f\n\u9700\u8981PCA9535\u5e93\uff0c\u56e0\u4e3aST7701\u7684CS\u5f15\u811a\u8fde\u63a5\u5230PCA9535 i2c\u6269\u5c55\u6a21\u5757\uff0c\u5177\u4f53\u662fi2c\u6a21\u5757\u7684\u5f15\u811a4\u3002\n:::"),(0,r.yg)("p",null,"\u5b89\u88c5\u4e86\u6240\u6709\u5fc5\u8981\u7684\u5e93\u540e\uff0c\u4e0a\u4f20\u4e0b\u9762\u7684\u4ee3\u7801\u4ee5\u6d4b\u8bd5\u5c4f\u5e55\u662f\u5426\u5728Arduino\u73af\u5883\u4e2d\u6b63\u5e38\u5de5\u4f5c\u3002\u60a8\u53ef\u4ee5\u4e0a\u4f20\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino_GFX_Library.h>\n#include <PCA95x5.h>\n#define GFX_BL DF_GFX_BL // default backlight pin, you may replace DF_GFX_BL to actual backlight pin\n\n/* More dev device declaration: https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */\n#if defined(DISPLAY_DEV_KIT)\nArduino_GFX *gfx = create_default_Arduino_GFX();\n#else /* !defined(DISPLAY_DEV_KIT) */\n\n#define GFX_DEV_DEVICE ESP32_S3_RGB\n#define GFX_BL 45\nArduino_DataBus *bus = new Arduino_SWSPI(\n    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,\n    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);\n\n// option 1:\n// Uncomment for 4" rect display\nArduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(\n    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,\n    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,\n    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,\n    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,\n    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,\n    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);\nArduino_RGB_Display *gfx = new Arduino_RGB_Display(\n    480 /* width */, 480 /* height */, rgbpanel, 2 /* rotation */, true /* auto_flush */,\n    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));\n\n#endif /* !defined(DISPLAY_DEV_KIT) */\n/*******************************************************************************\n * End of Arduino_GFX setting\n ******************************************************************************/\n\nvoid setup(void)\n{\n  Serial.begin(115200);\n  // Serial.setDebugOutput(true);\n  // while(!Serial);\n  Serial.println("Arduino_GFX Hello World example");\n\n#ifdef GFX_EXTRA_PRE_INIT\n  GFX_EXTRA_PRE_INIT();\n#endif\n\n  // Init Display\n  if (!gfx->begin())\n  {\n    Serial.println("gfx->begin() failed!");\n  }\n  gfx->fillScreen(BLACK);\n\n#ifdef GFX_BL\n  pinMode(GFX_BL, OUTPUT);\n  digitalWrite(GFX_BL, HIGH);\n#endif\n\n  gfx->setCursor(10, 10);\n  gfx->setTextColor(RED);\n  gfx->println("Sensecap Indicator");\n\n  delay(5000); // 5 seconds\n}\n\nvoid loop()\n{\n  gfx->setCursor(random(gfx->width()), random(gfx->height()));\n  gfx->setTextColor(random(0xffff), random(0xffff));\n  gfx->setTextSize(random(6) /* x scale */, random(6) /* y scale */, random(2) /* pixel_margin */);\n  gfx->println("Sensecap Indicator");\n\n  delay(1000); // 1 second\n}\n')),(0,r.yg)("p",null,"\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u5c4f\u5e55\u4e0a\u5c06\u968f\u673a\u6253\u5370\u201cSensecap Indicator\u201d\u6587\u672c\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"})),(0,r.yg)("h3",{id:"\u8bfb\u53d6\u8fde\u63a5\u5230rp2040\u82af\u7247\u7684\u4f20\u611f\u5668"},"\u8bfb\u53d6\u8fde\u63a5\u5230RP2040\u82af\u7247\u7684\u4f20\u611f\u5668"),(0,r.yg)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u5728\u51c6\u5907\u9636\u6bb5\uff0c\u6240\u6709\u4f20\u611f\u5668\u90fd\u8fde\u63a5\u5230RP2040\u3002\u5047\u8bbe\u60a8\u4ecd\u7136\u5728RP2040\u4e0a\u4f7f\u7528\u9ed8\u8ba4\u56fa\u4ef6\uff0c\u5219\u4f20\u611f\u5668\u6570\u636e\u901a\u8fc7UART\u63a5\u53e3\u53d1\u9001\u5230ESP32S3\u3002"),(0,r.yg)("p",null,"\u4e3a\u4e86\u4f7fESP32S3\u80fd\u591f\u8bfb\u53d6\u6570\u636e\uff0c\u9700\u8981\u5b89\u88c5\u4e00\u4e2a\u540d\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"PacketSerial"),"\u7684\u5e93."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/7.jpg"})),(0,r.yg)("p",null,"\u5b89\u88c5\u5e93\u540e\uff0c\u60a8\u53ef\u4ee5\u4e0a\u4f20\u4ee5\u4e0b\u4ee3\u7801\u4ee5\u5728ESP32S3\u4e0a\u83b7\u53d6\u4f20\u611f\u5668\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'//\n// Copyright (c) 2012 Christopher Baker <https://christopherbaker.net>\n//\n// SPDX-License-Identifier: MIT\n//\n\n\n#include <PacketSerial.h>\n\nPacketSerial myPacketSerial;\n\n#define RXD2 20\n#define TXD2 19\n\n#define PKT_TYPE_SENSOR_SCD41_CO2 0XB2\n#define PKT_TYPE_SENSOR_SHT41_TEMP 0XB3\n#define PKT_TYPE_SENSOR_SHT41_HUMIDITY 0XB4\n#define PKT_TYPE_SENSOR_TVOC_INDEX 0XB5\n#define DEBUG   0\n\nvoid setup()\n{\n  // We begin communication with our PacketSerial object by setting the\n  // communication speed in bits / second (baud).\n  myPacketSerial.begin(115200);\n\n  // If we want to receive packets, we must specify a packet handler function.\n  // The packet handler is a custom function with a signature like the\n  // onPacketReceived function below.\n \n  Serial1.begin(115200, SERIAL_8N1, RXD2, TXD2);\n  myPacketSerial.setStream(&Serial1);\n  myPacketSerial.setPacketHandler(&onPacketReceived);\n}\n\n\nvoid loop()\n{\n  // Do your program-specific loop() work here as usual.\n\n  // The PacketSerial::update() method attempts to read in any incoming serial\n  // data and emits received and decoded packets via the packet handler\n  // function specified by the user in the void setup() function.\n  //\n  // The PacketSerial::update() method should be called once per loop(). Failure\n  // to call the PacketSerial::update() frequently enough may result in buffer\n  // serial overflows.\n  myPacketSerial.update();\n\n  // Check for a receive buffer overflow (optional).\n  if (myPacketSerial.overflow())\n  {\n    // Send an alert via a pin (e.g. make an overflow LED) or return a\n    // user-defined packet to the sender.\n    //\n    // Ultimately you may need to just increase your recieve buffer via the\n    // template parameters (see the README.md).\n  }\n}\n\n\n\nvoid onPacketReceived(const uint8_t *buffer, size_t size) {\n\n  \n  Serial.printf("<--- recv len:%d, data: ", size);\n\n\n  if (size < 1) {\n    return;\n  }\n  //byte serbytes[] = buffer[i];\n  float dataval;\n  switch (buffer[0]) {\n    case PKT_TYPE_SENSOR_SCD41_CO2:\n      {\n        memcpy(&dataval, &buffer[1], sizeof(float));\n        Serial.print("CO2 Level:  ");\n        Serial.println(dataval);\n        break;\n      }\n    default:\n      break;\n  }\n   switch (buffer[0]) {\n    case PKT_TYPE_SENSOR_SHT41_TEMP:\n      {\n        memcpy(&dataval, &buffer[1], sizeof(float));\n        Serial.print("sht temp:  ");\n        Serial.println(dataval, 2);\n        break;\n      }\n    default:\n      break;\n  }\n   switch (buffer[0]) {\n    case PKT_TYPE_SENSOR_SHT41_HUMIDITY:\n      {\n        memcpy(&dataval, &buffer[1], sizeof(float));\n        Serial.print("sht humidity:  ");\n        Serial.println(dataval, 2);\n        break;\n      }\n    default:\n      break;\n  }\n   switch (buffer[0]) {\n    case PKT_TYPE_SENSOR_TVOC_INDEX:\n      {\n        memcpy(&dataval, &buffer[1], sizeof(float));\n        Serial.print("TVOC INDEX:  ");\n        Serial.println(dataval);\n        break;\n      }\n    default:\n      break;\n  }\n}\n')),(0,r.yg)("p",null,"\u70b9\u51fb\u6253\u5f00\u4e32\u53e3\u76d1\u89c6\u5668\uff0c\u5e76\u5c06\u6ce2\u7279\u7387\u8bbe\u7f6e\u4e3a115200\uff0c\u7136\u540e\u60a8\u5c06\u770b\u5230\u6765\u81eaRP2040\u7684\u4f20\u611f\u5668\u6570\u636e\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/8.jpg"})),(0,r.yg)("h3",{id:"\u5c06\u4e24\u4e2a\u793a\u4f8b\u7ec4\u5408\u5e76\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u4f20\u611f\u5668\u6570\u636e"},"\u5c06\u4e24\u4e2a\u793a\u4f8b\u7ec4\u5408\u5e76\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u4f20\u611f\u5668\u6570\u636e"),(0,r.yg)("p",null,"\u5728Arduino IDE\u4e0a\u6253\u5f00\u793a\u4f8b\u83dc\u5355\uff0c\u7136\u540e\u5bfc\u822a\u5230",(0,r.yg)("strong",{parentName:"p"},"GFX library for Arduino")," \u9009\u62e9",(0,r.yg)("strong",{parentName:"p"},"SI_displaysensordata")," \u793a\u4f8b\u5e76\u4e0a\u4f20\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/9.jpg"})),(0,r.yg)("p",null,"\u5982\u679c\u6210\u529f\u4e0a\u4f20\uff0c\u60a8\u5c06\u5728\u5c4f\u5e55\u4e0a\u770b\u5230\u4f20\u611f\u5668\u6570\u636e\u663e\u793a\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/10.jpg"})),(0,r.yg)("p",null,"\u606d\u559c\uff0c\u73b0\u5728\u60a8\u53ef\u4ee5\u4f7f\u7528Arduino IDE\u5f00\u53d1Sensecap Indicator\u4e86\uff01"),(0,r.yg)("h2",{id:"\u66f4\u591a\u4fe1\u606f"},"\u66f4\u591a\u4fe1\u606f"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5f00\u53d1\u4ecd\u5904\u4e8e\u7b2c\u4e00\u9636\u6bb5\uff0c\u672c\u6559\u7a0b\u672a\u914d\u7f6e\u7684\u90e8\u5206\u662f\u89e6\u6478\u5c4f\u90e8\u5206\u3002\u6211\u5df2\u7ecf\u5c1d\u8bd5\u4e86\u4e00\u4e9bFT6336\u6a21\u5757\u7684Arduino\u5e93\uff0c\u4f46\u6ca1\u6709\u6210\u529f\u7684\u7ed3\u679c\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u8fd9\u662f\u56e0\u4e3aFT6366\u6a21\u5757\u7684INT\u5f15\u811a\u548cRESET\u5f15\u811a\u8fde\u63a5\u5230\u4e86PCA9535 I2C\u6269\u5c55\u5668\uff0c\u9700\u8981\u5728\u5e93\u4e2d\u624b\u52a8\u914d\u7f6e\u3002\u6211\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u5c1d\u8bd5\u8fd9\u4e2a\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u987a\u4fbf\u8bf4\u4e00\u4e0b\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u7406\u89e3\u4f7f\u7528Arduino GFX\u5e93\uff0c\u60a8\u53ef\u4ee5\u8bbf\u95ee",(0,r.yg)("a",{parentName:"li",href:"https://github.com/moononournation/Arduino_GFX"},"Arduino_GFX github\u9875\u9762"))),(0,r.yg)("h2",{id:"\u7279\u522b\u611f\u8c22"},"\u7279\u522b\u611f\u8c22"),(0,r.yg)("p",null,"\u611f\u8c22GitHub\u7528\u6237 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/u4mzu4"},"u4mzu4")," \u63d0\u4f9b\u7684\u652f\u6301Sensecap Indicator\u7684SWSPI\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.yg)("h2",{id:"--\u8d21\u732e\u8005\u9879\u76ee"},"\u2728  \u8d21\u732e\u8005\u9879\u76ee"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u672c\u9879\u76ee\u7531Seeed Studio ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"\u652f\u6301."),(0,r.yg)("li",{parentName:"ul"},"\u611f\u8c22 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35925769"},"Hendra")," \u548cu4mzu4\u7684\u52aa\u529b\uff0c\u60a8\u7684\u5de5\u4f5c\u5c06\u88ab\u5c55\u793a")),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4e0e\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u4ea4\u6d41\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u559c\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);