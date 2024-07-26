"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23470],{15680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>g});var r=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),h=n,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return i?r.createElement(g,a(a({ref:t},c),{},{components:i})):r.createElement(g,a({ref:t},c))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<o;d++)a[d]=i[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},255:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=i(58168),n=(i(96540),i(15680));const o={description:"RS232_Shield",title:"RS232 Shield",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RS232_Shield",last_update:{date:"01/30/2023",author:"Eico"},no_comments:!1},a=void 0,l={unversionedId:"Top_Brand/Arduino/shield/RS232_Shield",id:"Top_Brand/Arduino/shield/RS232_Shield",title:"RS232 Shield",description:"RS232_Shield",source:"@site/docs/Top_Brand/Arduino/shield/RS232_Shield.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/RS232_Shield",permalink:"/RS232_Shield",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/RS232_Shield.md",tags:[],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"RS232_Shield",title:"RS232 Shield",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RS232_Shield",last_update:{date:"01/30/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Protoshield Kit for Arduino",permalink:"/Protoshield_Kit_for_Arduino"},next:{title:"Relay Shield v3",permalink:"/Relay_Shield_v3"}},s={},d=[{value:"Specifications",id:"specifications",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Part",id:"software-part",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,n.yg)(p,(0,r.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_Photo.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",null,"RS232 Shield is a standard communication port for industry equipment.This module is base on MAX232,which is a dual driver/receiver that includes a capacitive voltage generator to supply TIA/EIA-232-F voltage levels from a single 5-V supply. The shield integrates DB9 connectors (female) that provide connection to various devices with RS232 interface. Also the RS232 headers will facilitate your connections and commissioning. It provides the welding areas to make full use of extra space on it, which is highly convenient for prototyping."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("a",{href:"https://www.seeedstudio.com/RS232-Shield-p-1910.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.yg)("h2",{id:"specifications"},"Specifications"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Meets or Exceeds TIA/EIA-232-F and ITU"),(0,n.yg)("li",{parentName:"ul"},"Operates Up To 120 kbit/s"),(0,n.yg)("li",{parentName:"ul"},"Low Supply Current"),(0,n.yg)("li",{parentName:"ul"},"LED Indicator"),(0,n.yg)("li",{parentName:"ul"},"DB9 Connectors(female)"),(0,n.yg)("li",{parentName:"ul"},"Welding Areas")),(0,n.yg)("h2",{id:"interface-function"},"Interface Function"),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Usage")),(0,n.yg)("p",null,"First,we can test it by computer."),(0,n.yg)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Seeeduino v3.0,Mini usb Cable,RS232 Shield,RS232 to USB Cable."),(0,n.yg)("li",{parentName:"ol"},"Make the connections as below. The jumper hats can be used to select the software serial port from the digital pins. You can set them to D7(232","_","TX) and D6(232","_",'RX), and modify the code to "',(0,n.yg)("em",{parentName:"li"},"SoftwareSerial mySerial(7, 6); // 232","_","TX, 232","_","RX"),'"')),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("h3",{id:"software-part"},"Software Part"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"1) Open Arduino IDE, and paste the code below.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'\xa0\n#include <SoftwareSerial.h>\n\xa0\nSoftwareSerial mySerial(7, 6); //232_TX,232_RX\n\xa0\nvoid setup()\n{\n    // Open serial communications and wait for port to open:\n    Serial.begin(9600);\n    while (!Serial) {\n        ; // wait for serial port to connect. Needed for Leonardo only\n    }\n\xa0\n\xa0\n    Serial.println("Goodnight moon!");\n\xa0\n    // set the data rate for the SoftwareSerial port\n    mySerial.begin(9600);\n    mySerial.println("Hello, world?");\n}\n\xa0\nvoid loop() // run over and over\n{\n    if (mySerial.available())\n    Serial.write(mySerial.read());\n    if (Serial.available())\n    mySerial.write(Serial.read());\n}\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"2) Upload the code. Note that you should select the correct board type and COM port."),(0,n.yg)("li",{parentName:"ul"},"3) Open the Serial Monitor.")),(0,n.yg)("p",null,"You can see\xa0:"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("div",null,"## Schematic Online Viewer",(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}})),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip"},"RS232 Shield eagle file")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.pdf"},"RS232","_","Shield","_","v1.0.pdf")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RS232_Shield/res/MAX232D.pdf"},"Datasheet MAX232D.pdf"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);