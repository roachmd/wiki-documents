"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26709],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var g=a.createContext({}),p=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,m=d["".concat(g,".").concat(y)]||d[y]||u[y]||l;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},53663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const l={title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3",description:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",slug:"/cn/Grove-I2C_Motor_Driver_V1.3",last_update:{date:"03/20/2024",author:"WuFeifei"}},o=void 0,i={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-I2C_Motor_Driver_V1.3",id:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-I2C_Motor_Driver_V1.3",title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3",description:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-I2C_Motor_Driver_V1.3.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator",slug:"/cn/Grove-I2C_Motor_Driver_V1.3",permalink:"/cn/Grove-I2C_Motor_Driver_V1.3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-I2C_Motor_Driver_V1.3.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1710892800,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3",description:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/",slug:"/cn/Grove-I2C_Motor_Driver_V1.3",last_update:{date:"03/20/2024",author:"WuFeifei"}},sidebar:"CNSidebar",previous:{title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.2",permalink:"/cn/Grove-I2C_Motor_Driver_V1.2"},next:{title:"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\uff08L298P\uff09",permalink:"/cn/Grove-I2C-Motor-Driver-L298P"}},g={},p=[{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:2},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"\u786c\u4ef6\u6982\u8ff0",id:"\u786c\u4ef6\u6982\u8ff0",level:2},{value:"\u5e94\u7528\u601d\u8def",id:"\u5e94\u7528\u601d\u8def",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u73a9\u8f6c Arduino",id:"\u73a9\u8f6c-arduino",level:3},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:4},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:4},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6",level:4},{value:"\u73a9\u8f6c Codecraft",id:"\u73a9\u8f6c-codecraft",level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6-1",level:4},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6-1",level:4},{value:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New.jpg",alt:null})),(0,n.yg)("p",null,"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3\uff08\u6700\u65b0\u7248\u672c\uff09\u53ef\u4ee5\u76f4\u63a5\u63a7\u5236\u6b65\u8fdb\u7535\u673a\u6216\u76f4\u6d41\u7535\u673a\u3002\u5176\u6838\u5fc3\u662f\u4e00\u4e2a\u53cc\u901a\u9053H\u6865\u9a71\u52a8\u82af\u7247\uff08L298N\uff09\uff0c\u6bcf\u4e2a\u901a\u9053\u53ef\u5904\u7406\u9ad8\u8fbe2A\u7684\u7535\u6d41\uff0c\u7531Atmel ATmega8L\u63a7\u5236\uff0c\u8be5\u82af\u7247\u8d1f\u8d23\u4e0eArduino\u7b49\u5e73\u53f0\u8fdb\u884cI2C\u901a\u4fe1\u3002\u4e24\u53f0\u7535\u673a\u53ef\u4ee5\u540c\u65f6\u9a71\u52a8\uff0c\u4e14\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4e0d\u540c\u7684\u901f\u5ea6\u548c\u65b9\u5411\u3002\u5b83\u53ef\u4ee5\u4e3a\u4e24\u53f0\u6709\u5237\u76f4\u6d41\u7535\u673a\u6216\u4e00\u53f0\u56db\u7ebf\u4e24\u76f8\u6b65\u8fdb\u7535\u673a\u4f9b\u7535\u3002\u5b83\u9700\u89816V\u81f315V\u7684\u7535\u6e90\u6765\u4e3a\u7535\u673a\u4f9b\u7535\uff0c\u5e76\u5185\u7f6e\u4e00\u4e2a5V\u7535\u538b\u8c03\u8282\u5668\uff0c\u53ef\u4e3aI2C\u603b\u7ebf\u548cArduino\u4f9b\u7535\uff08\u53ef\u901a\u8fc7\u8df3\u7ebf\u9009\u62e9\uff09\u3002\u6240\u6709\u9a71\u52a8\u7ebf\u8def\u5747\u53d7\u4e8c\u6781\u7ba1\u4fdd\u62a4\uff0c\u53ef\u9632\u6b62\u53cd\u5411\u7535\u52a8\u52bf\u3002"),(0,n.yg)("p",null,"\u4e0e",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.2/"},"Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.2"),"\u76f8\u6bd4\uff0cV1.3\u7248\u672c\u4f7f\u7528\u6237\u80fd\u591f\u66f4\u8f7b\u677e\u5730\u63a7\u5236\u6b65\u8fdb\u7535\u673a\u3002\u60a8\u4e0d\u518d\u9700\u8981\u4e00\u76f4\u63a7\u5236\u6b65\u8fdb\u7535\u673a\uff0c\u53ea\u9700\u5411I2C\u7535\u673a\u9a71\u52a8\u5668V1.3\u53d1\u9001\u4e00\u4e2a\u547d\u4ee4\u6765\u9a71\u52a8\u6b65\u8fdb\u7535\u673a\uff0c\u5b83\u5c31\u4f1a\u6309\u7167\u60a8\u7684\u547d\u4ee4\u6267\u884c\uff0c\u4ece\u800c\u8282\u7701\u4e86Arduino\u7684\u8d44\u6e90\u5e76\u7b80\u5316\u4e86\u60a8\u7684\u4ee3\u7801\u3002"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.yg)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u7248\u672c\u53f7"),(0,n.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.yg)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.0"),(0,n.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u516c\u5f00\u53d1\u884c"),(0,n.yg)("td",{parentName:"tr",align:null},"2012\u5e745\u670817\u65e5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.2"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fee\u6539\u7531\u786c\u4ef6\u8bbe\u7f6e\u7684I2C\u5730\u5740"),(0,n.yg)("td",{parentName:"tr",align:null},"2012\u5e747\u67082\u65e5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.3"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4fee\u6539\u56fa\u4ef6\u4ee5\u652f\u6301\u79bb\u7ebf\u6b65\u8fdb\u7535\u673a\u63a7\u5236"),(0,n.yg)("td",{parentName:"tr",align:null},"2013\u5e742\u670818\u65e5")))),(0,n.yg)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Grove\u517c\u5bb9"),(0,n.yg)("li",{parentName:"ul"},"I2C\u63a5\u53e3"),(0,n.yg)("li",{parentName:"ul"},"\u53ef\u8c03\u8282\u7535\u673a\u901f\u5ea6\u548c\u65cb\u8f6c\u65b9\u5411"),(0,n.yg)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u786c\u4ef6\u66f4\u6539\u4ece\u673a\u5730\u5740")),(0,n.yg)("p",null,":::\u63d0\u793a\n\u66f4\u591a\u5173\u4e8eGrove\u6a21\u5757\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove \u7cfb\u7edf"),"\n:::"),(0,n.yg)("h2",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,n.yg)("table",{border:"1",cellspacing:"0",width:"80%"},(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"},"\u9879\u76ee"),(0,n.yg)("th",{scope:"col"},"\u6700\u5c0f\u503c"),(0,n.yg)("th",{scope:"col"},"\u5178\u578b\u503c"),(0,n.yg)("th",{scope:"col"},"\u6700\u5927\u503c"),(0,n.yg)("th",{scope:"col"},"\u5355\u4f4d")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"\u5de5\u4f5c\u7535\u538b"),(0,n.yg)("td",null,"6"),(0,n.yg)("td",{align:"center"},"-"),(0,n.yg)("td",null,"15"),(0,n.yg)("td",null,"VDC")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"\u6bcf\u901a\u9053\u6700\u5927\u8f93\u51fa\u7535\u6d41"),(0,n.yg)("td",{colspan:"3",align:"center"},"0.5"),(0,n.yg)("td",null,"A")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"\u6700\u5927\u603b\u7535\u6d41"),(0,n.yg)("td",{colspan:"3",align:"center"},"1.0"),(0,n.yg)("td",null,"A")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"I2C\u603b\u7ebf\u8f93\u5165\u8f93\u51fa\u7535\u538b"),(0,n.yg)("td",{colspan:"3",align:"center"},"5"),(0,n.yg)("td",null,"V")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"\u901a\u4fe1\u534f\u8bae"),(0,n.yg)("td",{colspan:"3",align:"center"},"I2C"),(0,n.yg)("td",null,"/"))),(0,n.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u591a\u4e2aI2C\u8bbe\u5907\uff0c\u8bf7\u53c2\u8003",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/"},"\u8f6f\u4ef6I2C"),"\u3002\n:::"),(0,n.yg)("h2",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,n.yg)("p",null,":::\u8b66\u544a\n\u4e0a\u8ff0\u63d0\u5230\u7684\u652f\u6301\u5e73\u53f0\u4ec5\u8868\u660e\u6a21\u5757\u7684\u8f6f\u4ef6\u6216\u7406\u8bba\u517c\u5bb9\u6027\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u9488\u5bf9Arduino\u5e73\u53f0\u63d0\u4f9b\u8f6f\u4ef6\u5e93\u6216\u4ee3\u7801\u793a\u4f8b\u3002\u7531\u4e8e\u65e0\u6cd5\u4e3a\u6240\u6709\u53ef\u80fd\u7684MCU\u5e73\u53f0\u63d0\u4f9b\u8f6f\u4ef6\u5e93/\u793a\u4f8b\u4ee3\u7801\uff0c\u56e0\u6b64\u7528\u6237\u9700\u8981\u81ea\u884c\u7f16\u5199\u8f6f\u4ef6\u5e93\u3002\n:::"),(0,n.yg)("h2",{id:"\u786c\u4ef6\u6982\u8ff0"},"\u786c\u4ef6\u6982\u8ff0"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-1.jpg",alt:null})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"78M05 IC:")," 5V\u7535\u538b\u8c03\u8282\u5668"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"L298 IC:")," \u53cc\u901a\u9053\u5168\u6865\u9a71\u52a8\u5668"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"ATmega8 IC:")," \u63a7\u5236\u7535\u673a\u65cb\u8f6c"),(0,n.yg)("div",{class:"admonition note"},(0,n.yg)("p",{class:"admonition-title"},"\u6ce8\u610f"),"\u87ba\u4e1d\u63a5\u7ebf\u7aef\u5b50\u4e0a\u7684\u8f93\u5165\u7535\u538b\u88ab\u8c03\u8282\u52305V\uff0c\u5e76\u901a\u8fc7\u8df3\u7ebf\uff08J4\uff09\u8fde\u63a5\u5230I2C\u7684+5V\u3002\u5982\u679c\u540c\u65f6\u4f7f\u7528\u87ba\u4e1d\u63a5\u7ebf\u7aef\u5b50\u63d0\u4f9b\u7684\u5916\u90e8\u7535\u6e90\u548cI2C\u5f15\u811a\u63d0\u4f9b\u7684\u7535\u6e90\uff0c\u8bf7\u79fb\u9664\u8df3\u7ebf\u3002\u5982\u679c\u9700\u8981\u4e3aI2C\u603b\u7ebf\u63d0\u4f9b5V\u7535\u6e90\uff0c\u8bf7\u4f7f\u7528\u8df3\u7ebf\u3002"),(0,n.yg)("h2",{id:"\u5e94\u7528\u601d\u8def"},"\u5e94\u7528\u601d\u8def"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u673a\u5668\u4eba"),(0,n.yg)("li",{parentName:"ul"},"\u81ea\u5236\u9065\u63a7\u8f66"),(0,n.yg)("li",{parentName:"ul"},"\u673a\u7bb1\u98ce\u6247"),(0,n.yg)("li",{parentName:"ul"},"\u9ad8\u529f\u7387LED\u7167\u660e")),(0,n.yg)("div",{class:"admonition danger"},(0,n.yg)("p",{class:"admonition-title"},"\u8b66\u544a"),"\u5f53\u5de5\u4f5c\u7535\u6d41\u8d85\u8fc71\u5b89\u57f9\u65f6\uff0c\u7535\u8def\u677f\u4f1a\u975e\u5e38\u70ed\u3002\u8bf7\u52ff\u89e6\u6478\uff01"),(0,n.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,n.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528Arduino\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u5f00\u59cb\u4e4b\u524d\u5148\u67e5\u770b",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino\u5165\u95e8\u6307\u5357"),"\u3002\n:::"),(0,n.yg)("h3",{id:"\u73a9\u8f6c-arduino"},"\u73a9\u8f6c Arduino"),(0,n.yg)("h4",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,n.yg)("p",null,"I2C\u7535\u673a\u9a71\u52a8\u5668\u53ef\u4ee5\u57fa\u4e8eL298\u82af\u7247\u63a7\u5236\u7535\u673a\u3002L298\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u53cc\u7535\u673a\u9a71\u52a8\u5668\uff0c\u5b83\u8fd8\u662f\u4e00\u4e2a\u53ccH\u6865\u3002H\u6865\u57fa\u672c\u4e0a\u662f\u4e00\u79cd\u7279\u5b9a\u7684\u6676\u4f53\u7ba1\u8bbe\u7f6e\uff0c\u5141\u8bb8\u4f60\u5207\u6362\u7535\u6d41\u7684\u65b9\u5411\u3002\u8fde\u63a5\u5230\u7535\u673a\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u8ba9\u5b83\u5411\u4e24\u4e2a\u65b9\u5411\u65cb\u8f6c\uff1b\u800c\u4e14\uff0c\u901a\u8fc7PWM\u8f93\u5165\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528Arduino\u8ba9\u5b83\u4ee5\u4efb\u4f55\u901f\u5ea6\u65cb\u8f6c\u3002\u7531\u4e8eL298\u6709\u4e24\u4e2aH\u6865\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8ba9\u6bcf\u4e2a\u8f6e\u5b50\u4ee5\u4e0d\u540c\u7684\u65b9\u5411\u65cb\u8f6c\u6765\u8ba9\u673a\u5668\u4eba\u8f6c\u5f2f\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u8ba9\u5b83\u524d\u8fdb\u548c\u540e\u9000\u3002"),(0,n.yg)("h4",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u51c6\u5907\u4ee5\u4e0b\u7269\u54c1\uff1a")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.yg)("th",{parentName:"tr",align:null},"\u57fa\u7840\u5e95\u677f"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove - I2C \u7535\u673a\u9a71\u52a8\u5668 V1.3"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New_small.jpg",alt:"enter image description here"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"\u7acb\u5373\u83b7\u5f97")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"\u7acb\u5373\u83b7\u5f97")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html"},"\u7acb\u5373\u83b7\u5f97"))))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u8bbe\u7f6eI2C\u7535\u673a\u9a71\u52a8\u5668\u7684\u5730\u5740")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u901a\u8fc7\u62e8\u7801\u5f00\u5173\u8bbe\u7f6e\u5730\u5740\u662f\u65b0\u7248I2C\u7535\u673a\u9a71\u52a8\u5668\u65b0\u589e\u7684\u529f\u80fd\u3002"))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-9.jpg",alt:null})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u7136\u540e\u5728\u7a0b\u5e8f\u4e2d\u4fdd\u6301\u4e0eI2C\u7535\u673a\u9a71\u52a8\u5668\u4e0a\u8bbe\u7f6e\u7684\u5730\u5740\u76f8\u540c\u3002\u7a0b\u5e8f\u4e2d\u7684\u9ed8\u8ba4\u5730\u5740\u8bbe\u7f6e\u4e3a0x0f\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6b65\u9aa43.")," \u5c06Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3\u8fde\u63a5\u5230Grove-Base Shield\u7684I2C\u7aef\u53e3\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," \u5c06Grove - Base Shield\u63d2\u5165Seeeduino\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 5.")," \u901a\u8fc7USB\u7535\u7f06\u5c06Seeeduino\u8fde\u63a5\u5230\u7535\u8111\u3002")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg",alt:null})),(0,n.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u6211\u4eec\u6ca1\u6709Grove Base Shield\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06Grove - I2C\u7535\u673a\u9a71\u52a8\u5668V1.3\u8fde\u63a5\u5230Seeeduino\uff0c\u5982\u4e0b\u6240\u793a\u3002\n:::"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove - I2C \u7535\u673a\u9a71\u52a8\u5668 V1.3"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"5V"),(0,n.yg)("td",{parentName:"tr",align:null},"\u7ea2\u8272")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"GND"),(0,n.yg)("td",{parentName:"tr",align:null},"\u9ed1\u8272")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SDA"),(0,n.yg)("td",{parentName:"tr",align:null},"\u767d\u8272")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SCL"),(0,n.yg)("td",{parentName:"tr",align:null},"\u9ec4\u8272")))),(0,n.yg)("h4",{id:"\u8f6f\u4ef6"},"\u8f6f\u4ef6"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u4eceGithub\u4e0b\u8f7d",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip"},"Grove_I2C_Motor_Driver_v1_3\u5e93"),"\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u53c2\u8003",(0,n.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"\u5982\u4f55\u5b89\u88c5\u5e93"),"\u4e3aArduino\u5b89\u88c5\u5e93\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," \u5c06\u4ee3\u7801\u590d\u5236\u5230Arduino IDE\u5e76\u4e0a\u4f20\u3002\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801\uff0c\u8bf7\u67e5\u770b",(0,n.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801"),"\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-c"},"// default I2C address is 0x0f\n#define I2C_ADDRESS 0x0f\n\nvoid setup()\n{\n    Motor.begin(I2C_ADDRESS);\n}\n")),(0,n.yg)("div",{class:"admonition note"},(0,n.yg)("p",{class:"admonition-title"},"\u6ce8\u610f"),"\u9996\u5148\u8981\u6ce8\u610f\u7684\u662f\uff0c\u60a8\u9700\u8981\u4e3a\u76f4\u6d41\u7535\u673a\u63d0\u4f9b\u5916\u90e8\u7535\u6e90\u3002Arduino\u4e0a\u76845V\u5f15\u811a\u65e0\u6cd5\u4e3a\u4e24\u4e2a\u7535\u673a\u63d0\u4f9b\u8db3\u591f\u7684\u7535\u529b\uff0c\u5982\u679c\u60a8\u8fd9\u6837\u505a\uff0c\u53ef\u80fd\u4f1a\u635f\u574f\u60a8\u7684Arduino\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u63a7\u5236\u76f4\u6d41\u7535\u673a\u6709\u4e24\u4e2a\u51fd\u6570\uff1a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-c"},"// Set the speed of a motor, speed is equal to duty cycle here\nvoid speed(unsigned char motor_id, int _speed);\n\n// Stop one motor\nvoid stop(unsigned char motor_id);\n\n")),(0,n.yg)("p",null,"\u4f7f\u7528",(0,n.yg)("inlineCode",{parentName:"p"},"speed()"),"\u51fd\u6570\uff0c\u60a8\u53ef\u4ee5\u4ee5\u60a8\u60f3\u8981\u7684\u901f\u5ea6\u9a71\u52a8\u4e00\u4e2a\u7535\u673a\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"motor_id")," \u8868\u793a\u4f7f\u7528\u54ea\u4e2a\u7535\u673a\u3002\u60a8\u53ef\u4ee5\u586b\u5199MOTOR1\u6216MOTOR2\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"_speed")," \u8868\u793a\u60a8\u4e3a\u7535\u673a\u8bbe\u7f6e\u7684\u901f\u5ea6\u3002\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u586b\u5199-100~100\u4e4b\u95f4\u7684\u503c\u3002\u5f53_speed>0\u65f6\uff0c\u76f4\u6d41\u7535\u673a\u987a\u65f6\u9488\u65cb\u8f6c\uff0c\u800c\u5f53_speed<0\u65f6\uff0c\u76f4\u6d41\u7535\u673a\u9006\u65f6\u9488\u65cb\u8f6c\u3002_speed\u7684\u7edd\u5bf9\u503c\u8d8a\u5927\uff0c\u76f4\u6d41\u7535\u673a\u7684\u901f\u5ea6\u5c31\u8d8a\u5feb\u3002"))),(0,n.yg)("p",null,"\u4f7f\u7528",(0,n.yg)("inlineCode",{parentName:"p"},"stop()"),"\u51fd\u6570\uff0c\u60a8\u53ef\u4ee5\u505c\u6b62\u6b63\u5728\u8fd0\u884c\u7684\u76f4\u6d41\u7535\u673a\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"motor_id")," \u8868\u793a\u4f7f\u7528\u54ea\u4e2a\u7535\u673a\u3002\u60a8\u53ef\u4ee5\u586b\u5199MOTOR1\u6216MOTOR2\u3002")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u9a71\u52a8\u6b65\u8fdb\u7535\u673a")),(0,n.yg)("p",null,"\u4ee5",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171"},"24BYJ48\u6b65\u8fdb\u7535\u673a"),"\u4e3a\u4f8b\uff0c\u786c\u4ef6\u5b89\u88c5\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg",alt:null})),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171"},"24BYJ48"),"\u6b65\u8fdb\u7535\u673a\u4e0eI2C\u7535\u673a\u9a71\u52a8\u5668\u7684\u8fde\u63a5\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg",alt:null})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u51fd\u6570\u6765\u9a71\u52a8\u6b65\u8fdb\u7535\u673a\u3002")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-c"},"// Drive a stepper motor\nvoid StepperRun(int _step);\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"_step")," \u8868\u793a\u60a8\u4e3a\u6b65\u8fdb\u7535\u673a\u8bbe\u7f6e\u8981\u8fd0\u884c\u7684\u6b65\u6570\u3002\u60a8\u53ef\u4ee5\u586b\u5199-1024~1024\u4e4b\u95f4\u7684\u503c\u3002\u5f53_step>0\u65f6\uff0c\u6b65\u8fdb\u7535\u673a\u987a\u65f6\u9488\u65cb\u8f6c\uff0c\u800c\u5f53_step<0\u65f6\uff0c\u6b65\u8fdb\u7535\u673a\u9006\u65f6\u9488\u65cb\u8f6c\u3002\u5f53_step\u4e3a512/-512\u65f6\uff0c\u6b65\u8fdb\u7535\u673a\u5c06\u8fd0\u884c\u4e00\u6574\u5708\uff1b\u5982\u679c_step\u4e3a1024/-1024\uff0c\u6b65\u8fdb\u7535\u673a\u5c06\u8fd0\u884c\u4e24\u5708\u3002\u6b65\u8fdb\u7535\u673a\u5728\u5b8c\u6210\u5176\u6b65\u6570\u540e\u4f1a\u81ea\u52a8\u505c\u6b62\u3002")),(0,n.yg)("h3",{id:"\u73a9\u8f6c-codecraft"},"\u73a9\u8f6c Codecraft"),(0,n.yg)("h4",{id:"\u786c\u4ef6-1"},"\u786c\u4ef6"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u4f7f\u7528Grove\u7ebf\u5c06Grove - I2C\u7535\u673a\u9a71\u52a8\u5668\u8fde\u63a5\u5230Seeeduino\u7684I2C\u7aef\u53e3\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fArduino\uff0c\u8bf7\u5229\u7528Base Shield\u3002"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u901a\u8fc7USB\u7ebf\u5c06Seeeduino/Arduino\u8fde\u63a5\u5230\u60a8\u7684\u7535\u8111\u3002"),(0,n.yg)("h4",{id:"\u8f6f\u4ef6-1"},"\u8f6f\u4ef6"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u6253\u5f00",(0,n.yg)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),"\uff0c\u6dfb\u52a0Arduino\u652f\u6301\uff0c\u5e76\u5c06\u4e00\u4e2a\u4e3b\u7a0b\u5e8f\u62d6\u5165\u5de5\u4f5c\u533a\u3002"),(0,n.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528Codecraft\uff0c\u8bf7\u540c\u65f6\u53c2\u8003",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"\u4f7f\u7528Arduino\u7684Codecraft\u6307\u5357"),"\u3002\n:::\n",(0,n.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u6309\u7167\u4e0b\u9762\u7684\u56fe\u7247\u62d6\u52a8\u4ee3\u7801\u5757\uff0c\u6216\u8005\u6253\u5f00\u53ef\u4ee5\u5728\u672c\u9875\u9762\u5e95\u90e8\u4e0b\u8f7d\u7684cdc\u6587\u4ef6\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/cc_I2C_Motor_Driver.png",alt:"cc"})),(0,n.yg)("p",null,"\u5c06\u7a0b\u5e8f\u4e0a\u4f20\u5230\u60a8\u7684Arduino/Seeeduino\u3002"),(0,n.yg)("p",null,":::\u63d0\u793a\n\u5f53\u4ee3\u7801\u4e0a\u4f20\u5b8c\u6210\u540e\uff0c\u60a8\u4f1a\u770b\u5230\u8fde\u63a5\u5230\u7535\u673a\u9a71\u52a8\u5668\u7684\u76f4\u6d41\u7535\u673a\u5f00\u59cb\u5de5\u4f5c\u3002\n:::"),(0,n.yg)("h2",{id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"},"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[Eagle]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip"},"Grove - I2C \u7535\u673a\u9a71\u52a8\u5668 V1.3 \u539f\u7406\u56fe"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b%20PCB.pdf"},"Grove - I2C \u7535\u673a\u9a71\u52a8\u5668 V1.3 PCB \u7684 PDF \u683c\u5f0f"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b.pdf"},"Grove - I2C \u7535\u673a\u9a71\u52a8\u5668 V1.3\u539f\u7406\u56fe\u7684 PDF \u683c\u5f0f"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[\u5e93\u6587\u4ef6]")," ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3"},"Grove - I2C \u7535\u673a\u9a71\u52a8\u5668 V1.3 \u5e93"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[\u56fa\u4ef6]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/On-Chipfirmware_for_Motor_driver.zip"},"I2C \u7535\u673a\u9a71\u52a8\u5668\u7684\u5185\u7f6e\u56fa\u4ef6"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[\u6570\u636e\u624b\u518c]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/L298datasheet.pdf"},"L298 \u6570\u636e\u624b\u518c"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[\u6570\u636e\u624b\u518c]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/ST_78M05DataSheet.pdf"},"78M05 \u6570\u636e\u624b\u518c"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"[Codecraft]")," ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove_I2C_Motor_Driver_CDC_File.zip"},"CDC \u6587\u4ef6")))),(0,n.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,n.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u5404\u79cd\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u80fd\u591f\u62e5\u6709\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u9700\u6c42\u548c\u504f\u597d\u3002"),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);