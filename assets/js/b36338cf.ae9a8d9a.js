"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40705],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>v});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(v,a(a({ref:n},c),{},{components:t})):r.createElement(v,a({ref:n},c))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const i={description:"Grove IIC",title:"Grove IIC",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_RP2040_Grove_IIC",last_update:{date:"3/4/2024",author:"DuKaiyin"}},a="**\u6982\u89c8**",s={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/cn-Grove_IIC",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/cn-Grove_IIC",title:"Grove IIC",description:"Grove IIC",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/cn-Grove_IIC.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove",slug:"/cn/SenseCAP_Indicator_RP2040_Grove_IIC",permalink:"/cn/SenseCAP_Indicator_RP2040_Grove_IIC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/cn-Grove_IIC.md",tags:[],version:"current",lastUpdatedBy:"DuKaiyin",lastUpdatedAt:1709510400,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{description:"Grove IIC",title:"Grove IIC",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_RP2040_Grove_IIC",last_update:{date:"3/4/2024",author:"DuKaiyin"}}},l={},p=[{value:"<strong>\u5b9e\u4f8b\u4ee3\u7801</strong>:",id:"\u5b9e\u4f8b\u4ee3\u7801",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u6982\u89c8"},(0,o.yg)("strong",{parentName:"h1"},"\u6982\u89c8")),(0,o.yg)("p",null,"\u611f\u77e5\u6307\u793a\u5668SenseCAP\u914d\u5907\u4e86\u4e24\u4e2aGrove\u63a5\u53e3\uff0c\u7528\u4e8e\u8fde\u63a5Grove\u6a21\u5757\uff0c\u4e00\u4e2a\u662f\u9ed8\u8ba4\u7684I2C\u7aef\u53e3\uff0c\u53e6\u4e00\u4e2a\u662f\u53ef\u914d\u7f6e\u7684\u6570\u5b57/\u6a21\u62df\u5f15\u811a\uff0c\u4e5f\u53ef\u7528\u4e8ePWM\u8f93\u51fa\u3002\u4e24\u4e2aGrove\u7aef\u53e3\u90fd\u53ef\u4ee5\u7528\u4f5c\u6570\u5b57\u7aef\u53e3\uff0c\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u66f4\u591a\u53ef\u80fd\u6027\u3002"),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"})),(0,o.yg)("p",null,"\u8fd9\u4e2a\u5b58\u50a8\u5e93\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728SenseCAP\u6307\u793a\u5668\u4e0a\u4f7f\u7528Grove IOs\u3002\u8fd9\u4f7f\u60a8\u65e2\u53ef\u4ee5\u4eab\u53d7",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/category/Grove-c-1003.html"},"Grove \u751f\u6001\u7cfb\u7edf")," \u7684\u5373\u63d2\u5373\u7528\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528RP2040\u517c\u5bb9\u7684GPIO\uff01"),(0,o.yg)("h1",{id:"groveiic"},(0,o.yg)("strong",{parentName:"h1"},"Grove(IIC)")),(0,o.yg)("p",null,"\u4e3a\u4e86\u6269\u5c55\u66f4\u591a\u7684\u5e94\u7528\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528IIC\u63a5\u53e3\u8fde\u63a5\u66f4\u591a\u7684\u4f20\u611f\u5668\u3002\n\u4e0e\u5185\u7f6e\u4f20\u611f\u5668\u4e0d\u540c\uff0c\u60a8\u53ea\u9700\u5b9a\u4e49SCL\u548cSDA\u5f15\u811a\u7684\u8fde\u63a5\u3002"),(0,o.yg)("h2",{id:"\u5b9e\u4f8b\u4ee3\u7801"},(0,o.yg)("strong",{parentName:"h2"},"\u5b9e\u4f8b\u4ee3\u7801"),":"),(0,o.yg)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u4ee3\u7801\u4ecb\u7ecd\u4e86\u5982\u4f55\u8fde\u63a5 ",(0,o.yg)("a",{parentName:"p",href:"/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor"},"Grove TH \u4f20\u611f\u5668"),":"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/"},"AHT20 \u6e29\u6e7f\u5ea6\u4f20\u611f\u5668\u5e93")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <Wire.h>\n#include "AHT20.h"\n\nAHT20 AHT;\n\nvoid sensor_aht_init(void) {\n  AHT.begin();\n}\n\nvoid sensor_aht_get(void) {\n  float humi, temp;\n  int ret = AHT.getSensor(&humi, &temp);\n  if (ret)  // GET DATA OK\n  {\n    Serial.print("humidity: ");\n    Serial.print(humi * 100);\n    Serial.print("  temerature: ");\n    Serial.println(temp);\n  } else  // GET DATA FAIL\n  {\n    Serial.println("GET DATA FROM AHT20 FAIL");\n  }\n}\n\nvoid setup() {\n  Serial.begin(115200);\n\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n\n  sensor_aht_init();\n}\n\nvoid loop() {\n  sensor_aht_get();\n  delay(5000);\n}\n')))}d.isMDXComponent=!0}}]);