"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45877],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(o,".").concat(s)]||d[s]||y[s]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[d]="string"==typeof e?e:a,l[1]=g;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>g,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={title:"LCD\u5c4f\u5e55\u7684\u57fa\u7840\u77e5\u8bc6",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/cn/Wio-Terminal-LCD-Basic",last_update:{date:"3/10/2024",author:"\u91d1\u83ca"}},l="TFT LCD\u5c4f\u5e55\u7684\u57fa\u7840\u77e5\u8bc6",g={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Basic",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Basic",title:"LCD\u5c4f\u5e55\u7684\u57fa\u7840\u77e5\u8bc6",description:"\u50cf\u7d20\u5750\u6807\u7cfb\u7edf",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Basic.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/cn/Wio-Terminal-LCD-Basic",permalink:"/cn/Wio-Terminal-LCD-Basic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Basic.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1710028800,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{title:"LCD\u5c4f\u5e55\u7684\u57fa\u7840\u77e5\u8bc6",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/cn/Wio-Terminal-LCD-Basic",last_update:{date:"3/10/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u6982\u8ff0",permalink:"/cn/Wio-Terminal-LCD-Overview"},next:{title:"\u7ed8\u56fe\u51fd\u6570",permalink:"/cn/Wio-Terminal-LCD-Graphics"}},o={},p=[{value:"\u50cf\u7d20\u5750\u6807\u7cfb\u7edf",id:"\u50cf\u7d20\u5750\u6807\u7cfb\u7edf",level:2},{value:"8\u4f4d\u548c16\u4f4d\u8272\u5f69\u6a21\u578b",id:"8\u4f4d\u548c16\u4f4d\u8272\u5f69\u6a21\u578b",level:2},{value:"8\u4f4d\u8272\u5f69",id:"8\u4f4d\u8272\u5f69",level:3},{value:"16\u4f4d\u8272\u5f69",id:"16\u4f4d\u8272\u5f69",level:3},{value:"TFT LCD\u5c4f\u5e55\u521d\u59cb\u5316",id:"tft-lcd\u5c4f\u5e55\u521d\u59cb\u5316",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u5173\u95edLCD\u80cc\u5149",id:"\u5173\u95edlcd\u80cc\u5149",level:2},{value:"\u63a7\u5236LCD\u80cc\u5149\u7684\u4eae\u5ea6",id:"\u63a7\u5236lcd\u80cc\u5149\u7684\u4eae\u5ea6",level:2},{value:"\u6280\u672f\u652f\u6301 &amp; \u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba",level:2}],c={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tft-lcd\u5c4f\u5e55\u7684\u57fa\u7840\u77e5\u8bc6"},"TFT LCD\u5c4f\u5e55\u7684\u57fa\u7840\u77e5\u8bc6"),(0,a.yg)("h2",{id:"\u50cf\u7d20\u5750\u6807\u7cfb\u7edf"},"\u50cf\u7d20\u5750\u6807\u7cfb\u7edf"),(0,a.yg)("p",null,"\u6570\u5b57\u4e8c\u7ef4\u56fe\u50cf\u7531\u50cf\u7d20\u7684\u884c\u548c\u5217\u7ec4\u6210\u3002\u901a\u8fc7\u6307\u5b9a\u50cf\u7d20\u6240\u5728\u7684\u5217\u548c\u884c\u6765\u6307\u5b9a\u56fe\u50cf\u4e2d\u7684\u50cf\u7d20\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u50cf\u7d20\u53ef\u4ee5\u901a\u8fc7\u4e00\u5bf9\u6574\u6570\u6765\u6807\u8bc6\uff0c\u5373\u5217\u53f7\u548c\u884c\u53f7\u3002\u4f8b\u5982\uff0c\u5177\u6709\u5750\u6807\uff084,7\uff09\u7684\u50cf\u7d20\u4f4d\u4e8e\u7b2c4\u5217\u548c\u7b2c7\u884c\u3002"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/grids.jpg"})),(0,a.yg)("p",null,"\u6309\u7167\u60ef\u4f8b\uff0c\u5217\u4ece\u5de6\u4e0a\u89d2\u5411\u53f3\u7f16\u53f7\uff0c\u4ece\u96f6\u5f00\u59cb\uff0c\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u4ece\u5176\u4ed6\u89d2\u843d\u5f00\u59cb\uff08\u901a\u8fc7\u8bbe\u7f6e\u65cb\u8f6c\uff09\u3002"),(0,a.yg)("h2",{id:"8\u4f4d\u548c16\u4f4d\u8272\u5f69\u6a21\u578b"},"8\u4f4d\u548c16\u4f4d\u8272\u5f69\u6a21\u578b"),(0,a.yg)("p",null,"\u50cf\u7d20\u4e5f\u4ee5\u989c\u8272\u5f62\u5f0f\u8868\u793a\uff0c\u56e0\u6b64\u6700\u597d\u6db5\u76d6\u4e00\u4e9b\u8272\u5f69\u6a21\u578b\u3002 8\u4f4d\u548c16\u4f4d\u8272\u5f69\u6a21\u578b\u5bf9\u4e8eMCU\u6765\u8bf4\u662f\u5f88\u597d\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u6240\u4ee5\u8fd9\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u8d77\u70b9\u3002 \u8fd9\u4e24\u79cd\u8272\u5f69\u6a21\u578b\u75313\u4e2a\u989c\u8272\u5206\u91cf - ",(0,a.yg)("strong",{parentName:"p"},"\u7ea2, \u7eff, \u548c \u84dd")," \u7ec4\u6210\u3002\u6839\u636e\u8272\u5f69\u6a21\u578b\uff0c\u8fd93\u4e2a\u989c\u8272\u5206\u91cf\u5c06\u5b58\u50a8\u57288\u4f4d\u621616\u4f4d\u53d8\u91cf\u4e2d\u3002"),(0,a.yg)("h3",{id:"8\u4f4d\u8272\u5f69"},"8\u4f4d\u8272\u5f69"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u4f4d"),(0,a.yg)("th",{parentName:"tr",align:"center"},"7"),(0,a.yg)("th",{parentName:"tr",align:"center"},"6"),(0,a.yg)("th",{parentName:"tr",align:"center"},"5"),(0,a.yg)("th",{parentName:"tr",align:"center"},"4"),(0,a.yg)("th",{parentName:"tr",align:"center"},"3"),(0,a.yg)("th",{parentName:"tr",align:"center"},"2"),(0,a.yg)("th",{parentName:"tr",align:"center"},"1"),(0,a.yg)("th",{parentName:"tr",align:"center"},"0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"\u6570\u636e")),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7ea2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7ea2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7ea2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u84dd"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u84dd")))),(0,a.yg)("h3",{id:"16\u4f4d\u8272\u5f69"},"16\u4f4d\u8272\u5f69"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u4f4d"),(0,a.yg)("th",{parentName:"tr",align:"center"},"15"),(0,a.yg)("th",{parentName:"tr",align:"center"},"14"),(0,a.yg)("th",{parentName:"tr",align:"center"},"13"),(0,a.yg)("th",{parentName:"tr",align:"center"},"12"),(0,a.yg)("th",{parentName:"tr",align:"center"},"11"),(0,a.yg)("th",{parentName:"tr",align:"center"},"10"),(0,a.yg)("th",{parentName:"tr",align:"center"},"9"),(0,a.yg)("th",{parentName:"tr",align:"center"},"8"),(0,a.yg)("th",{parentName:"tr",align:"center"},"7"),(0,a.yg)("th",{parentName:"tr",align:"center"},"6"),(0,a.yg)("th",{parentName:"tr",align:"center"},"5"),(0,a.yg)("th",{parentName:"tr",align:"center"},"4"),(0,a.yg)("th",{parentName:"tr",align:"center"},"3"),(0,a.yg)("th",{parentName:"tr",align:"center"},"2"),(0,a.yg)("th",{parentName:"tr",align:"center"},"1"),(0,a.yg)("th",{parentName:"tr",align:"center"},"0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"\u6570\u636e")),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7ea2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7ea2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7ea2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7ea2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7ea2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u7eff"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u84dd"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u84dd"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u84dd"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u84dd"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u84dd")))),(0,a.yg)("p",null,"\u4ee5\u4e0b\u662f\u5728LCD\u5e93\u4e2d\u5305\u542b\u7684\u4e00\u4e9b\u9884\u5b9a\u4e49\u7684\u57fa\u672c\u989c\u8272\uff0816\u4f4d\uff09\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"#define TFT_BLACK       0x0000      /*   0,   0,   0 */\n#define TFT_NAVY        0x000F      /*   0,   0, 128 */\n#define TFT_DARKGREEN   0x03E0      /*   0, 128,   0 */\n#define TFT_DARKCYAN    0x03EF      /*   0, 128, 128 */\n#define TFT_MAROON      0x7800      /* 128,   0,   0 */\n#define TFT_PURPLE      0x780F      /* 128,   0, 128 */\n#define TFT_OLIVE       0x7BE0      /* 128, 128,   0 */\n#define TFT_LIGHTGREY   0xC618      /* 192, 192, 192 */\n#define TFT_DARKGREY    0x7BEF      /* 128, 128, 128 */\n#define TFT_BLUE        0x001F      /*   0,   0, 255 */\n#define TFT_GREEN       0x07E0      /*   0, 255,   0 */\n#define TFT_CYAN        0x07FF      /*   0, 255, 255 */\n#define TFT_RED         0xF800      /* 255,   0,   0 */\n#define TFT_MAGENTA     0xF81F      /* 255,   0, 255 */\n#define TFT_YELLOW      0xFFE0      /* 255, 255,   0 */\n#define TFT_WHITE       0xFFFF      /* 255, 255, 255 */\n#define TFT_ORANGE      0xFDA0      /* 255, 180,   0 */\n#define TFT_GREENYELLOW 0xB7E0      /* 180, 255,   0 */\n")),(0,a.yg)("h2",{id:"tft-lcd\u5c4f\u5e55\u521d\u59cb\u5316"},"TFT LCD\u5c4f\u5e55\u521d\u59cb\u5316"),(0,a.yg)("p",null,"\u8981\u521d\u59cb\u5316Wio\u7ec8\u7aef\u4e0a\u7684TFT LCD\u5c4f\u5e55\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n  ...\n    tft.begin();\n    tft.setRotation(r);\n    digitalWrite(LCD_BACKLIGHT, HIGH); // turn on the backlight\n  ...\n}\n')),(0,a.yg)("p",null,"\u5176\u4e2dr\u662fTFT LCD\u5c4f\u5e55\u7684\u65cb\u8f6c\uff08\u4ece0\u52303\uff09\uff0c\u8868\u793a\u5b83\u5c06\u4ece\u54ea\u4e2a\u89d2\u5f00\u59cb\u3002"),(0,a.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.yg)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u521d\u59cb\u5316Wio\u7ec8\u7aef\u4e0a\u7684TFT LCD\u5c4f\u5e55\uff0c\u5e76\u7528\u7ea2\u8272\u586b\u5145\u5c4f\u5e55\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); // fills entire the screen with colour red\n}\n\nvoid loop() {\n\n}\n')),(0,a.yg)("h2",{id:"\u5173\u95edlcd\u80cc\u5149"},"\u5173\u95edLCD\u80cc\u5149"),(0,a.yg)("p",null,"\u8981\u5173\u95edWio\u7ec8\u7aef\u7684LCD\u80cc\u5149\uff0c\u53ea\u9700\u5b9a\u4e49LCD\u80cc\u5149\u63a7\u5236\u5f15\u811a ",(0,a.yg)("inlineCode",{parentName:"p"},"72Ul")," \u5e76\u5c06\u5176\u62c9 ",(0,a.yg)("inlineCode",{parentName:"p"},"HIGH")," \u4ee5\u6253\u5f00\uff0c\u5c06\u5176\u62c9 ",(0,a.yg)("inlineCode",{parentName:"p"},"LOW")," \u4ee5\u5173\u95ed\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n#define LCD_BACKLIGHT (72Ul) // Control Pin of LCD\n\nvoid setup() {\n  // put your setup code here, to run once:\n  \n    tft.begin();\n    tft.setRotation(3);\n    tft.fillScreen(TFT_RED);\n\n    delay(2000);\n    // Turning off the LCD backlight\n    digitalWrite(LCD_BACKLIGHT, LOW);\n    delay(2000);\n    // Turning on the LCD backlight\n    digitalWrite(LCD_BACKLIGHT, HIGH);\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n\n}\n')),(0,a.yg)("h2",{id:"\u63a7\u5236lcd\u80cc\u5149\u7684\u4eae\u5ea6"},"\u63a7\u5236LCD\u80cc\u5149\u7684\u4eae\u5ea6"),(0,a.yg)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u662f\u7531Kenta IDA\u7f16\u5199\u7684\uff0c\u6240\u6709\u7684\u529f\u52b3\u5f52 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ciniml"},(0,a.yg)("strong",{parentName:"a"},"Kenta IDA"))," \u6240\u6709\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," ",(0,a.yg)("strong",{parentName:"p"},"\u5728\u8fd9\u91cc\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook"},"repo")," \u3002")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"li"},"examples/WioTerminal_BackLight")," \u4f4d\u7f6e\u3002")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," ",(0,a.yg)("strong",{parentName:"p"},"\u4e0a\u4f20\u4ee3\u7801\u3002")),(0,a.yg)("p",null,"\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"lcd_backlight_control.ino")," \u4e0a\u4f20\u5230Wio\u7ec8\u7aef\uff0c\u60a8\u5c06\u770b\u5230LCD\u4e0a\u7684\u4eae\u5ea6\u53d8\u5316\u3002"),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301 & \u4ea7\u54c1\u8ba8\u8bba"),(0,a.yg)("p",null," \u5982\u679c\u60a8\u9047\u5230\u4efb\u4f55\u6280\u672f\u95ee\u9898\uff0c\u8bf7\u5c06\u95ee\u9898\u63d0\u4ea4\u5230\u6211\u4eec\u7684 ",(0,a.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"\u8bba\u575b")," \u3002\n\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5c06\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}y.isMDXComponent=!0}}]);