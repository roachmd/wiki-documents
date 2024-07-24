"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2844],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>m});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(o),h=n,m=u["".concat(s,".").concat(h)]||u[h]||g[h]||a;return o?r.createElement(m,l(l({ref:t},d),{},{components:o})):r.createElement(m,l({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},72203:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(58168),n=(o(96540),o(15680));const a={description:"XIAO-FAQ",title:"What to do when upload fails/the program runs abnormally/the device port is not found?",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/noport_upload_fails",last_update:{date:"6/21/2023",author:"Seraphina"}},l=void 0,i={unversionedId:"FAQ/XIAO/noport_upload_fails",id:"FAQ/XIAO/noport_upload_fails",title:"What to do when upload fails/the program runs abnormally/the device port is not found?",description:"XIAO-FAQ",source:"@site/docs/FAQ/XIAO/noport_upload_fails.md",sourceDirName:"FAQ/XIAO",slug:"/noport_upload_fails",permalink:"/noport_upload_fails",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/XIAO/noport_upload_fails.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1687305600,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{description:"XIAO-FAQ",title:"What to do when upload fails/the program runs abnormally/the device port is not found?",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/noport_upload_fails",last_update:{date:"6/21/2023",author:"Seraphina"}}},s={},p=[{value:"<strong>For XIAO SAMD21</strong>",id:"for-xiao-samd21",level:2},{value:"Reset",id:"reset",level:3},{value:"Enter Bootloader Mode",id:"enter-bootloader-mode",level:3},{value:"<strong>For XIAO RP2040</strong>",id:"for-xiao-rp2040",level:2},{value:"Reset",id:"reset-1",level:3},{value:"Enter Bootloader Mode",id:"enter-bootloader-mode-1",level:3},{value:"<strong>For XIAO nRF52840 (Sense)</strong>",id:"for-xiao-nrf52840-sense",level:2},{value:"Reset",id:"reset-2",level:3},{value:"Enter Bootloader Mode",id:"enter-bootloader-mode-2",level:3},{value:"<strong>For XIAO ESP32C3</strong>",id:"for-xiao-esp32c3",level:2},{value:"Reset",id:"reset-3",level:3},{value:"Enter Bootloader Mode",id:"enter-bootloader-mode-3",level:3},{value:"<strong>For XIAO ESP32S3 (Sense)</strong>",id:"for-xiao-esp32s3-sense",level:2},{value:"Reset",id:"reset-4",level:3},{value:"Enter BootLoader Mode",id:"enter-bootloader-mode-4",level:3}],d={toc:p},u="wrapper";function g(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"There are times when we use the wrong program to make XIAO appear to lose ports or not work properly. The specific performance is:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Connected to computer, but no port number found for XIAO.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The computer is connected and the port number appears, but the upload program fails."))),(0,n.yg)("p",null,"In this Wiki, you can find solutions. Different models of XIAO have different troubleshooting methods, so please choose the corresponding solution for your model."),(0,n.yg)("admonition",{title:"Quick browse",type:"success"},(0,n.yg)("p",{parentName:"admonition"},"Here are the troubleshooting methods for upload failures, abnormal program behavior, or device port not found errors for various types of XIAO. You can quickly index through the link below:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/noport_upload_fails/#for-xiao-samd21"},(0,n.yg)("strong",{parentName:"a"},"XIAO SAMD21"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/noport_upload_fails/#for-xiao-rp2040"},(0,n.yg)("strong",{parentName:"a"},"XIAO RP2040"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/noport_upload_fails/#for-xiao-nrf52840-sense"},(0,n.yg)("strong",{parentName:"a"},"XIAO nRF52840(Sense)"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/noport_upload_fails/#for-xiao-esp32c3"},(0,n.yg)("strong",{parentName:"a"},"XIAO ESP32C3"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/noport_upload_fails/#for-xiao-esp32s3-sense"},(0,n.yg)("strong",{parentName:"a"},"XIAO ESP32S3(Sense)"))))),(0,n.yg)("h2",{id:"for-xiao-samd21"},(0,n.yg)("strong",{parentName:"h2"},"For XIAO SAMD21")),(0,n.yg)("p",null,"Sometimes the Seeed Studio XIAO SAMD21 port may disappear when user programming process fails. we can solve this problem by the following operation:"),(0,n.yg)("h3",{id:"reset"},"Reset"),(0,n.yg)("p",null,"First, you can try to reset XIAO SAMD21. The steps are as follow:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO SAMD21 to your computer."),(0,n.yg)("li",{parentName:"ul"},"Use tweezers or short lines to short the RST pins ",(0,n.yg)("strong",{parentName:"li"},"only once")),(0,n.yg)("li",{parentName:"ul"},"The orange LED lights flicker on and light up.")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"The behavior of the built-in LED is reversed to the one on an Arduino. On the Seeed Studio XIAO SAMD21 , the pin has to be pulled low, whereas on other micro-controllers it has to be pulled high.")),(0,n.yg)("p",null,"If that does not work, please try to enter ",(0,n.yg)("strong",{parentName:"p"},"bootloader mode"),":"),(0,n.yg)("h3",{id:"enter-bootloader-mode"},"Enter Bootloader Mode"),(0,n.yg)("p",null,"When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:  "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO SAMD21 to your computer."),(0,n.yg)("li",{parentName:"ul"},"Use tweezers or short lines to short the RST pins in the diagram ",(0,n.yg)("strong",{parentName:"li"},"twice"),"."),(0,n.yg)("li",{parentName:"ul"},"The orange LED lights flicker on and light up.")),(0,n.yg)("p",null,"At this point, the chip enters Bootloader mode and the burn port appears again. Because the samd21 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",null,"If that also doesn't work, disconnect the board from the PC, and connect the board again."),(0,n.yg)("h2",{id:"for-xiao-rp2040"},(0,n.yg)("strong",{parentName:"h2"},"For XIAO RP2040")),(0,n.yg)("p",null,"Sometimes the Seeed Studio XIAO RP2040 port may disappear when user programming process fails. We can solve this problem by the following operation:"),(0,n.yg)("h3",{id:"reset-1"},"Reset"),(0,n.yg)("p",null,"First, you can try to reset XIAO RP2040. The steps are as follow:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO RP2040 to your computer."),(0,n.yg)("li",{parentName:"ul"},'Press the "R" pins ',(0,n.yg)("strong",{parentName:"li"},"once"),".")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"The behavior of the built-in programmable Single-colour LEDs(two are blue, one is green) are reversed to the one on an Arduino. On the Seeed Studio XIAO RP2040, the pin has to be pulled low to enable.")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",null,"If that does not work, please try to enter ",(0,n.yg)("strong",{parentName:"p"},"bootloader mode"),":"),(0,n.yg)("h3",{id:"enter-bootloader-mode-1"},"Enter Bootloader Mode"),(0,n.yg)("p",null,"When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:  "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Long press the "B" button.'),(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO PR2040 to your computer."),(0,n.yg)("li",{parentName:"ul"},"The computer will appear a disk driver.")),(0,n.yg)("p",null,"At this point, the chip enters Bootloader mode and the burn port appears again. Because the RP2040 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps."),(0,n.yg)("p",null,"If that also doesn't work, disconnect the board from the PC, and connect the board again."),(0,n.yg)("h2",{id:"for-xiao-nrf52840-sense"},(0,n.yg)("strong",{parentName:"h2"},"For XIAO nRF52840 (Sense)")),(0,n.yg)("p",null,"Sometimes the Seeed Studio XIAO nRF52840 (Sense) port may disappear when user programming process fails. we can solve this problem by the following operation:"),(0,n.yg)("h3",{id:"reset-2"},"Reset"),(0,n.yg)("p",null,"First, you can try to ",(0,n.yg)("strong",{parentName:"p"},"reset")," XIAO nRF52840 (Sense). The steps are as follow:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO nRF52840 (Sense) to your computer."),(0,n.yg)("li",{parentName:"ul"},'Press the "Reset button" ',(0,n.yg)("strong",{parentName:"li"},"once"),".")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/functional2a.jpg",alt:"pir",width:700,height:"auto"})),(0,n.yg)("p",null,"If that does not work, please try to enter ",(0,n.yg)("strong",{parentName:"p"},"bootloader mode"),":"),(0,n.yg)("h3",{id:"enter-bootloader-mode-2"},"Enter Bootloader Mode"),(0,n.yg)("p",null,"When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:  "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO nRF52840 (Sense) to your computer."),(0,n.yg)("li",{parentName:"ul"},'Press the "Reset button" ',(0,n.yg)("strong",{parentName:"li"},"twice"),".")),(0,n.yg)("p",null,"If that also doesn't work, disconnect the board from the PC, and connect the board again."),(0,n.yg)("h2",{id:"for-xiao-esp32c3"},(0,n.yg)("strong",{parentName:"h2"},"For XIAO ESP32C3")),(0,n.yg)("p",null,"Sometimes the Seeed Studio XIAO ESP32C3 port may disappear when user programming process fails. we can solve this problem by the following operation:"),(0,n.yg)("h3",{id:"reset-3"},"Reset"),(0,n.yg)("p",null,"First, you can try to reset XIAO ESP32C3. The steps are as follow:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO ESP32C3 to your computer."),(0,n.yg)("li",{parentName:"ul"},'Press the "RESET BUTTON" ',(0,n.yg)("strong",{parentName:"li"},"once"),".")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png",style:{width:500,height:"auto"}})),(0,n.yg)("p",null,"If that does not work, please try to enter ",(0,n.yg)("strong",{parentName:"p"},"bootloader mode"),":"),(0,n.yg)("h3",{id:"enter-bootloader-mode-3"},"Enter Bootloader Mode"),(0,n.yg)("p",null,"When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:  "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Long press the "BOOT BUTTON".'),(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO ESP32C3 to your computer while holding the ",(0,n.yg)("strong",{parentName:"li"},"BOOT BUTTON"),"."),(0,n.yg)("li",{parentName:"ul"},"Release it to enter ",(0,n.yg)("strong",{parentName:"li"},"bootloader mode"))),(0,n.yg)("h2",{id:"for-xiao-esp32s3-sense"},(0,n.yg)("strong",{parentName:"h2"},"For XIAO ESP32S3 (Sense)")),(0,n.yg)("p",null,"Sometimes the Seeed Studio XIAO ESP32S3(Sense) port may disappear when user programming process fails. we can solve this problem by the following operation:"),(0,n.yg)("h3",{id:"reset-4"},"Reset"),(0,n.yg)("p",null,"First, you can try to reset XIAO ESP32S3. The steps are as follow:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Connect the Seeed Studio XIAO ESP32S3 to your computer."),(0,n.yg)("li",{parentName:"ul"},'Press the "RESET BUTTON" ',(0,n.yg)("strong",{parentName:"li"},"once"),".")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/wysiwyg/esp32s3.png",style:{width:700,height:"auto"}})),(0,n.yg)("p",null,"If that does not work, please try to enter ",(0,n.yg)("strong",{parentName:"p"},"bootloader mode"),":"),(0,n.yg)("h3",{id:"enter-bootloader-mode-4"},"Enter BootLoader Mode"),(0,n.yg)("p",null,"When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1"),". Press and hold the BOOT button on the XIAO ESP32S3 without releasing it.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2"),". Keep the BOOT button pressed and then connect to the computer via the data cable. Release the BOOT button after connecting to the computer."))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"When you press and hold the BOOT key while powering up and then press the Reset key once, you can also enter BootLoader mode.")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3"),". Upload the ",(0,n.yg)("strong",{parentName:"li"},"Blink")," program to check the operation of the XIAO ESP32S3.")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif",style:{width:500,height:"auto"}})))}g.isMDXComponent=!0}}]);