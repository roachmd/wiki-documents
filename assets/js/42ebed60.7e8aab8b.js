"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17485],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var r=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(a),c=i,m=g["".concat(d,".").concat(c)]||g[c]||u[c]||n;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(58168),i=(a(96540),a(15680));const n={description:"Xadow - NFC Tag",title:"Xadow - NFC Tag",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_NFC_tag",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_NFC_tag",id:"Seeed_Elderly/Xadow/Xadow_NFC_tag",title:"Xadow - NFC Tag",description:"Xadow - NFC Tag",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_NFC_tag.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_NFC_tag",permalink:"/Xadow_NFC_tag",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_NFC_tag.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - NFC Tag",title:"Xadow - NFC Tag",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_NFC_tag",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - NFC",permalink:"/Xadow_NFC"},next:{title:"Xadow - NFC v2",permalink:"/Xadow_NFC_v2"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Usage",id:"usage",level:2},{value:"Read/Write by Mobile",id:"readwrite-by-mobile",level:2},{value:"Control LED",id:"control-led",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:s},g="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow%20NFC%20Tag.jpg",alt:null})),(0,i.yg)("p",null,"Xadow - NFC Tag is a highly integrated Near Field Communication Tag module, this module is I2C interface, which base on M24LR64E-R,M24LR64E-R have a 64-bit unique identifier and 64 -Kbit EEPROM.Xadow - NFC Tag attach an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-NFC-Tag-p-1881.html"},(0,i.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("hr",null),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Working Voltage:5V or 3V3"),(0,i.yg)("li",{parentName:"ul"},"Working Current","<","1mA"),(0,i.yg)("li",{parentName:"ul"},"2CM max effective range"),(0,i.yg)("li",{parentName:"ul"},"Serve for contactless communication at 13.56MHz"),(0,i.yg)("li",{parentName:"ul"},"ISO 15693 and ISO 18000-3 mode 1 compatible"),(0,i.yg)("li",{parentName:"ul"},"64-bit unique identifier (UID)"),(0,i.yg)("li",{parentName:"ul"},"Read Block ","&"," Write (32-bit blocks)"),(0,i.yg)("li",{parentName:"ul"},"I2C Interface")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"readwrite-by-mobile"},"Read/Write by Mobile"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk"},"NfcV-reader for Androud")," and install it")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"We can Read/Write it by Mobile"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow-NFC_Tag_photo1.jpg",alt:null})),(0,i.yg)("p",null,"3.Place your phone close to a tag."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_1.png",alt:null})),(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_2.jpg",alt:null}))))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_3.jpg",alt:null})),(0,i.yg)("th",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_4.png",alt:null}))))),(0,i.yg)("h2",{id:"control-led"},"Control LED"),(0,i.yg)("hr",null),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk"},"NfcV-reader for Android")," and install it")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/NFC_Tag_M24LR6E"},"NFC Tag Lib"),"rename it to NFC_Tag_M24LR6E and put it into Arduino's library .")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open Arduino IDE. If Arduino IDE is already opened, restart it.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"In Arduino IDE, click menus: File -",">"," Example -",">"," NFC_Tag_M24LR6E -",">"," ledControl")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Now,you can control LED by you phone."))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'#include "NfcTag.h"\n#include <Wire.h>\n\nNfcTag nfcTag;\nint led = 5;\nbool flag = false;\nbool preFlag = false;\nvoid setup(){\n    Serial.begin(9600);\n    pinMode(led,OUTPUT);\n    nfcTag.init();\n}\n\nvoid loop(){\n    flag = nfcTag.readByte(EEPROM_I2C_LENGTH-1) == 0xff?true:false;\n    if(flag != preFlag){\n        Serial.println("get remote NFC control signal!");\n        if(flag == true){\n            Serial.println("led will light up!");\n            digitalWrite(led,HIGH);\n        }else{\n            Serial.println("led will turn dark!");\n            digitalWrite(led,LOW);\n        }\n        preFlag = flag;\n    }\n    delay(5*1000);\n}\n')),(0,i.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("hr",null),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.pdf"},"Xadow - NFC Tag.PDF"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip"},"Xadow - NFC Tag Eagle"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/M24LR64E-R.pdf"},"M24LR64E-R datasheet.pdf"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk"},"NfcV-reader for Android"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/NFC_Tag_M24LR6E"},"NFC Tag M24LR6E  Lib")))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);