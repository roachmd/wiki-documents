"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55901],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>m});var t=n(96540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||y[c]||a;return n?t.createElement(m,o(o({ref:r},p),{},{components:n})):t.createElement(m,o({ref:r},p))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48661:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=n(58168),i=(n(96540),n(15680));const a={description:"Keyboard",title:"Keyboard",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Keyboard",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Using Wio Terminal as a Keyboard",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Keyboard",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Keyboard",title:"Keyboard",description:"Keyboard",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Keyboard.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-USBCLIENT-Keyboard",permalink:"/Wio-Terminal-USBCLIENT-Keyboard",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Keyboard.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Keyboard",title:"Keyboard",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Keyboard",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/Wio-Terminal-USBCLIENT-Overview"},next:{title:"Mouse",permalink:"/Wio-Terminal-USBCLIENT-Mouse"}},s={},d=[{value:"Installing Libraries",id:"installing-libraries",level:2},{value:"Complete Code",id:"complete-code",level:2}],p={toc:d},u="wrapper";function y(e){let{components:r,...n}=e;return(0,i.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"using-wio-terminal-as-a-keyboard"},"Using Wio Terminal as a Keyboard"),(0,i.yg)("p",null,"This wiki introduces how to use the Wio Terminal as a simple keyboard. It has assigned the 3 keys ",(0,i.yg)("inlineCode",{parentName:"p"},"s"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"e"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"d")," to the 3 buttons on the Wio Terminal. This can be easily implemented into your design for more challenging tasks."),(0,i.yg)("h2",{id:"installing-libraries"},"Installing Libraries"),(0,i.yg)("p",null,"This example also requires an additional Arduino keyboard library:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Visit the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/arduino-libraries/Keyboard"},"Arduino Keyboard Library")," repository and download the entire repo to your local drive.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.yg)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,i.yg)("inlineCode",{parentName:"p"},"Keyboard-master")," file that you have just downloaded."))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,i.yg)("h2",{id:"complete-code"},"Complete Code"),(0,i.yg)("p",null,"For more functionality, please refer the official ",(0,i.yg)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/usb/keyboard/"},"keyboard functions")," from Arduino."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"#include \"Keyboard.h\" //keyboard library \n\nvoid setup() { \n  //set button pins as inputs\n  pinMode(WIO_KEY_A, INPUT);\n  pinMode(WIO_KEY_B, INPUT);\n  pinMode(WIO_KEY_C, INPUT);\n  \n  Keyboard.begin(); //start keyboard communication\n}\n\nvoid loop() {  \n  if (digitalRead(WIO_KEY_A) == LOW) { //detect button press\n    Keyboard.write('s'); //single key is pressed (character) \n  }\n  if (digitalRead(WIO_KEY_B) == LOW) {   \n    Keyboard.write('e'); \n  }  \n  if (digitalRead(WIO_KEY_C) == LOW) {        \n    Keyboard.write('d');  \n  } \n  \n  delay(200); //delay between keypresses\n  \n}\n")))}y.isMDXComponent=!0}}]);