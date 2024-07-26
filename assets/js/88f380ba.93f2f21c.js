"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30829],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var i=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=n,y=d["".concat(p,".").concat(g)]||d[g]||m[g]||a;return r?i.createElement(y,o(o({ref:t},u),{},{components:r})):i.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(58168),n=(r(96540),r(15680));const a={description:"Tiny BLE",title:"Tiny BLE",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Tiny_BLE",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Seeed_Elderly/Discrete Product/Tiny_BLE",id:"Seeed_Elderly/Discrete Product/Tiny_BLE",title:"Tiny BLE",description:"Tiny BLE",source:"@site/docs/Seeed_Elderly/Discrete Product/Tiny_BLE.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/Tiny_BLE",permalink:"/Tiny_BLE",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/Tiny_BLE.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Tiny BLE",title:"Tiny BLE",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Tiny_BLE",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"AT Command Tester Application",permalink:"/AT_Command_Tester_Application"},next:{title:"Edison 4WD Auto Robotic Platform 2.0",permalink:"/Edison_4WD_Auto_Robotic_Platform_2.0"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Debug",id:"debug",level:3},{value:"Energy Monitoring",id:"energy-monitoring",level:3},{value:"Update or Restore Firmware",id:"update-or-restore-firmware",level:3},{value:"Over-The-Air",id:"over-the-air",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,i.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Tiny_BLE/img/BLE_Smurfs_Photo.png",alt:null})),(0,n.yg)("p",null,"The Tiny BLE is a Bluetooth Low Energy development board designed with low energy consumption and small size in mind. It's integrated with current measurement feature to provide real time energy consumption data, which is essential for developers to optimize software to design long battery life devices. It supports ARM mbed cloud-based IDE with an handy C/C++ SDK and a large number of open source libraries, which makes prototyping and development extremely easy."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_interface.png",alt:null})),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"th",src:"https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_ble.png",alt:null}))))),(0,n.yg)("p",null,"With its modular design, we can divide it into two parts - CMSIS DAP interface part and BLE part. The CMSIS DAP interface part is like the Swiss army knife. It provides drag-n-drop programming, CMSIS DAP debug, USB virtual serial port, current measurement and battery charging. The BLE part is built on the Nordic nRF51822 with Bluetooth Low Energy 2.4GHz multiprotocol radio and a 32 bit ARM Cortex-M0 core running 16MHz. MPU6050, a 6 DOF with 3D accelerometer and 3D gyroscope, is integrated to provide motion detect feature."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Tiny-BLE-BLE-%2B-6DOF-Mbed-Platform-p-2268.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"nRF51822: ARM Cortex-M0 + 2.4GHz radio (BLE or ANT+)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"MPU-6050:3d accelemeter + 3d gyroscope")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"LPC11U35FHI33:CMSIS DAP")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Current measurement")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"CN3065:battery charge port on USB part")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Power supply:USB/battery(3.5-4.2V)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Output voltage:3.3V")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"4 I/Os, all can be used as analog input, digital input/output, I2C, SPI or UART")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"VCC output control"))),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("hr",null),(0,n.yg)("table",null,(0,n.yg)("tr",null,(0,n.yg)("th",null," Specification"),(0,n.yg)("th",null," Value")),(0,n.yg)("tr",null,(0,n.yg)("td",{width:"200px"}," Microcontroller"),(0,n.yg)("td",{width:"400px"}," nRF51822QFAA; LPC11U35FHI33")),(0,n.yg)("tr",null,(0,n.yg)("td",null," Outline Dimension"),(0,n.yg)("td",null," 43.3mm x 29.0mm x 4.3mm")),(0,n.yg)("tr",null,(0,n.yg)("td",null," Power supply"),(0,n.yg)("td",null," USB/Battery(JST-1.0 Battery Holder)"))),(0,n.yg)("h2",{id:"get-started"},"Get Started"),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Tiny_BLE/img/Get_started_with_mbed.png",alt:null})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE"},"this link")," to ",(0,n.yg)("strong",{parentName:"p"},"login or signup to mbed"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE"},"Import the mbed_blinky program")," and change the code of main.cpp as following.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click the ",(0,n.yg)("strong",{parentName:"p"},"Compile")," icon of the top toolbar to compile the program, then download a compiled hex file.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Drag-n-drop the downloaded hex file into the MBED disk")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"A blue LED will be blinking."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'#include "mbed.h"\n\nDigitalOut red(p22);           // RED LED\nDigitalOut green(p21);         // GREEN LED\nDigitalOut blue(p23);          // BLUE LED\n\nint main()\n{\n    while (true) {\n        blue = !blue;\n        wait(0.1);\n    }\n}\n')),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://developer.mbed.org/teams/Seeed/code/Seeed_Tiny_BLE_Get_Started/"},"Seeed_Tiny_BLE_Get_Started program")," includes detecting motions, button and battery level. It's a good reference to get started."),(0,n.yg)("h3",{id:"debug"},"Debug"),(0,n.yg)("p",null,"To enable SWD debug and get debug message through USB Virtual serial, please install ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mbed.org/handbook/Windows-serial-configuration"},"the driver from mbed"),"."),(0,n.yg)("h3",{id:"energy-monitoring"},"Energy Monitoring"),(0,n.yg)("p",null,"Changing the baud rate of the USB virtual serial port to 4000000+ will trigger current measurement. We designed a tool - Tiny BLE MONITOR for you to get the power consumption information easily."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"http://tangram.qiniudn.com/ble_smurfs_monitor_v0.1.exe"},"Tiny BLE MONITOR for Windows"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Tiny_BLE/tree/master/utils"},"Tiny BLE MONITOR for Linux/Mac OS"),", additional requirement: pyqtgraph"))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_monitor_preview.png",alt:null})),(0,n.yg)("h3",{id:"update-or-restore-firmware"},"Update or Restore Firmware"),(0,n.yg)("p",null,"The latest firmware version for the Arch BLE is v0221 built at Feb 06 2015. To check your firmware version and built date, open the MBED.HTM or DETAILS.TXT of your MBED disk in a text editor."),(0,n.yg)("p",null,"Changelog:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"2015-02-07 fix Mac OS X 10.10 issue")),(0,n.yg)("p",null,"Firmware:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Tiny_BLE/raw/master/seeed_tiny_ble_interface_latest.bin"},"lastest interface firmware v221 2015-02-06"))),(0,n.yg)("h3",{id:"over-the-air"},"Over-The-Air"),(0,n.yg)("p",null,"We customized a DFU bootloader for you to update your application through Over-The-Air (OTA). It is on ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/nrf51_dfu_bootloader"},"github.com/Seeed-Studio/nrf51_dfu_bootloader"),". See also ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates"},"mbed.org FOTA")),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resource"},"Resource"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip"},"Tiny BLE V1.0 eagle file"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0_PDF.pdf"},"Tiny BLE V1.0.pdf"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Tiny_BLE"},"Resources on github"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Tiny_BLE/blob/master/tiny_ble.fzpz"},"frizting part"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"http://developer.mbed.org/teams/Seeed/code/eMPL_MPU6050/"},"MPU6050 library")))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);