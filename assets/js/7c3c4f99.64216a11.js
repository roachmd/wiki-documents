"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45219],{15680:(e,n,i)=>{i.d(n,{xA:()=>g,yg:()=>u});var a=i(96540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var p=a.createContext({}),m=function(e){var n=a.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},g=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=m(i),y=t,u=d["".concat(p,".").concat(y)]||d[y]||s[y]||r;return i?a.createElement(u,o(o({ref:n},g),{},{components:i})):a.createElement(u,o({ref:n},g))}));function u(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=i.length,o=new Array(r);o[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:t,o[1]=l;for(var m=2;m<r;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}y.displayName="MDXCreateElement"},46405:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=i(58168),t=(i(96540),i(15680));const r={title:"\u56fe\u7247\u52a0\u8f7d",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/",slug:"/cn/Wio-Terminal-LCD-Loading-Image",last_update:{date:"3/10/2024",author:"\u91d1\u83ca"}},o="\u56fe\u7247\u52a0\u8f7d",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Loading-Image",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Loading-Image",title:"\u56fe\u7247\u52a0\u8f7d",description:"\u672c\u4ed3\u5e93\u63cf\u8ff0\u4e86\u5982\u4f55\u4eceSD\u5361\u52a0\u8f7d\u548c\u663e\u793a\u56fe\u7247\u5230Wio Terminal\u7684TFT LCD\u5c4f\u5e55\u4e0a\u3002\u8fd9\u53ef\u4ee5\u975e\u5e38\u6709\u7528\uff0c\u53ef\u4ee5\u5728\u5404\u79cd\u573a\u5408\u4e0b\u4f7f\u7528\uff01",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Loading-Image.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/cn/Wio-Terminal-LCD-Loading-Image",permalink:"/cn/Wio-Terminal-LCD-Loading-Image",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/CN-Wio-Terminal-LCD-Loading-Image.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1710028800,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{title:"\u56fe\u7247\u52a0\u8f7d",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/",slug:"/cn/Wio-Terminal-LCD-Loading-Image",last_update:{date:"3/10/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u6297\u952f\u9f7f\u5b57\u4f53",permalink:"/cn/Wio-Terminal-LCD-Anti-aliased-Fonts"},next:{title:"\u6298\u7ebf\u56fe",permalink:"/cn/Wio-Terminal-LCD-Linecharts"}},p={},m=[{value:"\u5e93\u7684\u5b89\u88c5",id:"\u5e93\u7684\u5b89\u88c5",level:2},{value:"\u5b89\u88c5Wio Terminal\u7684SD\u5361\u5e93",id:"\u5b89\u88c5wio-terminal\u7684sd\u5361\u5e93",level:3},{value:"\u5b89\u88c5Wio Terminal\u7684TFT LCD\u5e93",id:"\u5b89\u88c5wio-terminal\u7684tft-lcd\u5e93",level:3},{value:"\u56fe\u7247\u683c\u5f0f\u914d\u7f6e",id:"\u56fe\u7247\u683c\u5f0f\u914d\u7f6e",level:2},{value:"\u6b65\u9aa4 1: \u51c6\u5907\u56fe\u7247",id:"\u6b65\u9aa4-1-\u51c6\u5907\u56fe\u7247",level:3},{value:"\u6b65\u9aa4 2: \u5c06 <code>24-bit bitmap</code> \u56fe\u7247\u8f6c\u6362\u4e3a\u5fae\u63a7\u5236\u5668\u53ef\u8bfb\u53d6\u7684 <code>8-bit or 16-bit bmp</code>  \u683c\u5f0f\u3002",id:"\u6b65\u9aa4-2-\u5c06-24-bit-bitmap-\u56fe\u7247\u8f6c\u6362\u4e3a\u5fae\u63a7\u5236\u5668\u53ef\u8bfb\u53d6\u7684-8-bit-or-16-bit-bmp--\u683c\u5f0f",level:3},{value:"\u9009\u9879 1: \u4f7f\u7528\u9884\u7f16\u8bd1\u7684Windows\u53ef\u6267\u884c\u6587\u4ef6\uff08\u4ec5\u9002\u7528\u4e8eWindows\uff09\uff1a",id:"\u9009\u9879-1-\u4f7f\u7528\u9884\u7f16\u8bd1\u7684windows\u53ef\u6267\u884c\u6587\u4ef6\u4ec5\u9002\u7528\u4e8ewindows",level:4},{value:"\u9009\u9879 2: \u4f7f\u7528Python\u6e90\u4ee3\u7801\uff08\u8de8\u5e73\u53f0\uff09",id:"\u9009\u9879-2-\u4f7f\u7528python\u6e90\u4ee3\u7801\u8de8\u5e73\u53f0",level:4},{value:"\u6b65\u9aa4 3: \u51c6\u5907\u5c31\u7eea\u7684\u56fe\u7247",id:"\u6b65\u9aa4-3-\u51c6\u5907\u5c31\u7eea\u7684\u56fe\u7247",level:3},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u5b89\u88c5 <code>RawImage.h</code> \u5e93\u3002",id:"\u5b89\u88c5-rawimageh-\u5e93",level:3},{value:"Arduino\u4e2d\u7684\u56fe\u7247\u521d\u59cb\u5316",id:"arduino\u4e2d\u7684\u56fe\u7247\u521d\u59cb\u5316",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"\u6280\u672f\u652f\u6301 &amp; \u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba",level:2}],g={toc:m},d="wrapper";function s(e){let{components:n,...i}=e;return(0,t.yg)(d,(0,a.A)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u56fe\u7247\u52a0\u8f7d"},"\u56fe\u7247\u52a0\u8f7d"),(0,t.yg)("p",null,"\u672c\u4ed3\u5e93\u63cf\u8ff0\u4e86\u5982\u4f55\u4eceSD\u5361\u52a0\u8f7d\u548c\u663e\u793a\u56fe\u7247\u5230Wio Terminal\u7684TFT LCD\u5c4f\u5e55\u4e0a\u3002\u8fd9\u53ef\u4ee5\u975e\u5e38\u6709\u7528\uff0c\u53ef\u4ee5\u5728\u5404\u79cd\u573a\u5408\u4e0b\u4f7f\u7528\uff01"),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg"})),(0,t.yg)("h2",{id:"\u5e93\u7684\u5b89\u88c5"},"\u5e93\u7684\u5b89\u88c5"),(0,t.yg)("h3",{id:"\u5b89\u88c5wio-terminal\u7684sd\u5361\u5e93"},"\u5b89\u88c5Wio Terminal\u7684SD\u5361\u5e93"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8bbf\u95ee ",(0,t.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/"},"File System Overview"))),(0,t.yg)("h3",{id:"\u5b89\u88c5wio-terminal\u7684tft-lcd\u5e93"},"\u5b89\u88c5Wio Terminal\u7684TFT LCD\u5e93"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8bbf\u95ee ",(0,t.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"TFT LCD Overview"))),(0,t.yg)("h2",{id:"\u56fe\u7247\u683c\u5f0f\u914d\u7f6e"},"\u56fe\u7247\u683c\u5f0f\u914d\u7f6e"),(0,t.yg)("h3",{id:"\u6b65\u9aa4-1-\u51c6\u5907\u56fe\u7247"},"\u6b65\u9aa4 1: \u51c6\u5907\u56fe\u7247"),(0,t.yg)("p",null,":::\u6ce8\n\u6211\u4eec\u9700\u8981\u5c06\u56fe\u7247\u683c\u5f0f\u8f6c\u6362\u4e3aWindows\u768424\u4f4dBMP\u683c\u5f0f\uff0c\u5e76\u5c06\u56fe\u7247\u653e\u7f6e\u5728\u6b63\u786e\u7684\u6587\u4ef6\u5939\u4e2d\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"Microsoft paint")," \u8fdb\u884c\u8f6c\u6362\u3002\n:::"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1-1:")," \u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"Microsoft paint")," \u8c03\u6574\u56fe\u7247\u5927\u5c0f\uff0c\u4ee5\u9002\u5e94\u5c4f\u5e55\u663e\u793a\u533a\u57df\u7684\u6700\u5927\u50cf\u7d20\u5c3a\u5bf8\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1-2:")," \u7136\u540e\u70b9\u51fb ",(0,t.yg)("inlineCode",{parentName:"p"},"Save as")," \u9009\u62e9 ",(0,t.yg)("inlineCode",{parentName:"p"},"BMP picture")," \u56fe\u7247\uff0c\u7136\u540e\u4ece\u6587\u4ef6\u7c7b\u578b\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 ",(0,t.yg)("inlineCode",{parentName:"p"},"24-bit bitmap (.bmp)")," \u6587\u4ef6\u683c\u5f0f\u4fdd\u5b58\u56fe\u7247\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1-3:")," \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"bmp")," \u7684\u6587\u4ef6\u5939\uff0c\u5e76\u5c06Windows\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},".bmp")," \u683c\u5f0f\u56fe\u7247\u4fdd\u5b58\u5728\u6b64\u6587\u4ef6\u5939\u4e2d\u3002"))),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png"})),(0,t.yg)("h3",{id:"\u6b65\u9aa4-2-\u5c06-24-bit-bitmap-\u56fe\u7247\u8f6c\u6362\u4e3a\u5fae\u63a7\u5236\u5668\u53ef\u8bfb\u53d6\u7684-8-bit-or-16-bit-bmp--\u683c\u5f0f"},"\u6b65\u9aa4 2: \u5c06 ",(0,t.yg)("inlineCode",{parentName:"h3"},"24-bit bitmap")," \u56fe\u7247\u8f6c\u6362\u4e3a\u5fae\u63a7\u5236\u5668\u53ef\u8bfb\u53d6\u7684 ",(0,t.yg)("inlineCode",{parentName:"h3"},"8-bit or 16-bit bmp"),"  \u683c\u5f0f\u3002"),(0,t.yg)("p",null,":::\u6ce8\n\u4e3a\u4e86\u5728\u5d4c\u5165\u5f0f\u7cfb\u7edf\u4e0a\u663e\u793abmp\u56fe\u50cf\uff0c\u6211\u4eec\u9700\u8981\u53bb\u9664Windows bmp\u683c\u5f0f\u4e2d\u7684\u4e00\u4e9b\u4fe1\u606f\uff08\u5934\u6587\u4ef6\uff09\u3002\u6211\u4eec\u7f16\u5199\u4e86\u4e00\u4e2aPython\u811a\u672c\u6765\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\uff0c\u8bf7\u9009\u62e9\u4ee5\u4e0b\u4e24\u4e2a\u9009\u9879\u4e4b\u4e00\u6765\u8f6c\u6362\u60a8\u7684\u56fe\u7247\u3002\n:::"),(0,t.yg)("h4",{id:"\u9009\u9879-1-\u4f7f\u7528\u9884\u7f16\u8bd1\u7684windows\u53ef\u6267\u884c\u6587\u4ef6\u4ec5\u9002\u7528\u4e8ewindows"},"\u9009\u9879 1: \u4f7f\u7528\u9884\u7f16\u8bd1\u7684Windows\u53ef\u6267\u884c\u6587\u4ef6\uff08\u4ec5\u9002\u7528\u4e8eWindows\uff09\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2-1-1:")," \u6211\u4eec\u4f7f\u7528 ",(0,t.yg)("a",{parentName:"p",href:"https://pyinstaller.org/en/stable/"},"Pyinstaller"),"{target=_blank} \u8f6f\u4ef6\u5305\u51c6\u5907\u4e86\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u60a8\u53ea\u9700\u70b9\u51fb ",(0,t.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe"},"bmp_converter.exe")," \u5373\u53ef\u4e0b\u8f7d\u53ef\u6267\u884c\u6587\u4ef6\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2-1-2:")," \u5c06\u4e0b\u8f7d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"bmp_converter.exe")," \u653e\u7f6e\u5728\u4e0e\u6b65\u9aa4 ",(0,t.yg)("inlineCode",{parentName:"p"},"\u6b65\u9aa4 1-3")," \u4e2d\u521b\u5efa\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"bmp folder")," \u76f8\u540c\u7684\u76ee\u5f55\u4e2d\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2-1-3:")," \u53cc\u51fb\u8fd0\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"bmp_converter.exe"),", \u7136\u540e\u5728\u5f39\u51fa\u7684\u547d\u4ee4\u884c\u7a97\u53e3 ",(0,t.yg)("inlineCode",{parentName:"p"},"terminal"),' \u4e2d\u9009\u62e9\u4e24\u4e2a\u9009\u9879\u4e4b\u4e00: "\u8f93\u5165 ',(0,t.yg)("inlineCode",{parentName:"p"},"1")," \u8fdb\u884c8\u4f4d\u989c\u8272\u8f6c\u6362; \u8f93\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"2"),' \u8fdb\u884c16\u4f4d\u989c\u8272\u8f6c\u6362"\u3002'))),(0,t.yg)("h4",{id:"\u9009\u9879-2-\u4f7f\u7528python\u6e90\u4ee3\u7801\u8de8\u5e73\u53f0"},"\u9009\u9879 2: \u4f7f\u7528Python\u6e90\u4ee3\u7801\uff08\u8de8\u5e73\u53f0\uff09"),(0,t.yg)("p",null,":::\u6ce8\n\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u5e94\u8be5\u5df2\u7ecf\u5b89\u88c5\u4e86Python\n:::"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2-2-1:")," \u4e0b\u8f7dPython\u811a\u672c ",(0,t.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py"},"bmp_converter.py")," \uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5728\u4e0e ",(0,t.yg)("inlineCode",{parentName:"p"},"\u6b65\u9aa4 1-3")," \u4e2d\u521b\u5efa\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"bmp folder")," \u5939\u76f8\u540c\u7684\u76ee\u5f55\u4e2d\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2-2-2:")," \u6253\u5f00 ",(0,t.yg)("inlineCode",{parentName:"p"},"cmd")," \u6216\u8005 ",(0,t.yg)("inlineCode",{parentName:"p"},"terminal")," \u8fd0\u884cPython\u811a\u672c\u3002\u9996\u5148\uff0c\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"cd")," \u547d\u4ee4\u5207\u6362\u5230\u4fdd\u5b58 ",(0,t.yg)("inlineCode",{parentName:"p"},"bmp_converter.py")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"bmp folder"),"\u7684\u76ee\u5f55\uff0c\u7136\u540e\u8fd0\u884cPython\u811a\u672c\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2-2-3:")," Two \u4e24\u4e2a\u9009\u9879: \u8f93\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"1")," \u8fdb\u884c8\u4f4d\u989c\u8272\u8f6c\u6362; \u8f93\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"2")," \u8fdb\u884c16\u4f4d\u989c\u8272\u8f6c\u6362;"))),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif"})),(0,t.yg)("h3",{id:"\u6b65\u9aa4-3-\u51c6\u5907\u5c31\u7eea\u7684\u56fe\u7247"},"\u6b65\u9aa4 3: \u51c6\u5907\u5c31\u7eea\u7684\u56fe\u7247"),(0,t.yg)("p",null,"\u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},".bmp")," \u6587\u4ef6\u5939\u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"rgb332"),"(8-bit) \u6216\u8005 ",(0,t.yg)("inlineCode",{parentName:"p"},"rgb565"),"(16-bit) \u6587\u4ef6\u5939\u4e2d\u627e\u5230\u8f6c\u6362\u540e\u7684.bmp\u56fe\u7247\u3002"),(0,t.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,t.yg)("h3",{id:"\u5b89\u88c5-rawimageh-\u5e93"},"\u5b89\u88c5 ",(0,t.yg)("a",{parentName:"h3",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h"},(0,t.yg)("inlineCode",{parentName:"a"},"RawImage.h"))," \u5e93\u3002"),(0,t.yg)("p",null,"\u8fd9\u4e2a\u5e93\u7528\u4e8e\u66f4\u8f7b\u677e\u5730\u52a0\u8f7d\u548c\u663e\u793a\u56fe\u7247\u3002\u4e0b\u8f7d ",(0,t.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h"},(0,t.yg)("inlineCode",{parentName:"a"},"RawImage.h")),"  \u5e76\u5c06\u8fd9\u4e2a\u5934\u6587\u4ef6\u9644\u52a0\u5230\u60a8\u7684Sketch\u4f4d\u7f6e\u3002"),(0,t.yg)("h3",{id:"arduino\u4e2d\u7684\u56fe\u7247\u521d\u59cb\u5316"},"Arduino\u4e2d\u7684\u56fe\u7247\u521d\u59cb\u5316"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"\u663e\u793a\u56fe\u7247\u5728\u5c4f\u5e55\u4e0a"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Cpp"},'//To draw on 8-bit color image on screen, starting from point (x, y):\ndrawImage<uint8_t>("path to sd card iamge", x, y);\n\n//To draw on 16-bit color image on screen, starting from point  (x, y):\ndrawImage<uint16_t>("path to sd card iamge", x, y);\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"\u521d\u59cb\u5316\u56fe\u50cf\uff08\u5982\u679c\u4f7f\u7528\u4e0a\u8ff0\u7684drawImage\u51fd\u6570\uff0c\u5219\u4e0d\u9700\u8981\uff09"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Cpp"},'//when using 8-bit colour, initialise the image following this:\nRaw8 * img8 = newImage<uint8_t>("path to sd card image");\n\n//when using 16-bit colour, initialise the image following this:\nRaw16 * img16 = newImage<uint16_t>("path to sd card image");\n')),(0,t.yg)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},'\n# include"TFT_eSPI.h"\n# include "Seeed_FS.h" //Including SD card library\n# include"RawImage.h"  //Including image processing library\nTFT_eSPI tft;\n\nvoid setup() {\n    //Initialise SD card\n    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n        while (1);\n    }\n    tft.begin();\n    tft.setRotation(3);\n\n    drawImage<uint8_t>("test.bmp", 0, 0); //Display this 8-bit image in sd card from (0, 0)\n\n}\n\nvoid loop() {\n}\n\n')),(0,t.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u5982\u679c\u51fa\u73b0 ",(0,t.yg)("inlineCode",{parentName:"strong"},"ImportError: No module named PIL"),"  \u9519\u8bef:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5728\u547d\u4ee4\u63d0\u793a\u7b26\u6216\u7ec8\u7aef\u4e2d\u8f93\u5165 ",(0,t.yg)("inlineCode",{parentName:"li"},"pip install pillow")," \u5b89\u88c5Python\u6a21\u5757\u3002")),(0,t.yg)("h2",{id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301 & \u4ea7\u54c1\u8ba8\u8bba"),(0,t.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,t.yg)("div",{class:"button_tech_support_container"},(0,t.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,t.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,t.yg)("div",{class:"button_tech_support_container"},(0,t.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,t.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}s.isMDXComponent=!0}}]);