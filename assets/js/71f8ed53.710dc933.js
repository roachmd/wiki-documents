"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14678],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),u=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),s=r,y=d["".concat(g,".").concat(s)]||d[s]||m[s]||l;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},38203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const l={description:"RFbee V1.1 - Wireless Arduino compatible node",title:"RFbee V1.1 - Wireless Arduino compatible node",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RFbee_V1.1-Wireless_Arduino_compatible_node",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,o={unversionedId:"Seeed_Elderly/Bee/RFbee_V1.1-Wireless_Arduino_compatible_node",id:"Seeed_Elderly/Bee/RFbee_V1.1-Wireless_Arduino_compatible_node",title:"RFbee V1.1 - Wireless Arduino compatible node",description:"RFbee V1.1 - Wireless Arduino compatible node",source:"@site/docs/Seeed_Elderly/Bee/RFbee_V1.1-Wireless_Arduino_compatible_node.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/RFbee_V1.1-Wireless_Arduino_compatible_node",permalink:"/RFbee_V1.1-Wireless_Arduino_compatible_node",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/RFbee_V1.1-Wireless_Arduino_compatible_node.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"RFbee V1.1 - Wireless Arduino compatible node",title:"RFbee V1.1 - Wireless Arduino compatible node",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RFbee_V1.1-Wireless_Arduino_compatible_node",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Mesh Bee",permalink:"/Mesh_Bee"},next:{title:"Zigbee Networking with XBee Series 2 and Seeed Products",permalink:"/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products"}},g={},u=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Electrical Characteristics",id:"electrical-characteristics",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Figure 1: USB using UartSBee (The following picture&#39;s demonstrated with older version UartSBee)",id:"figure-1-usb-using-uartsbee-the-following-pictures-demonstrated-with-older-version-uartsbee",level:4},{value:"Figure 2: Seeduino via XbeeShield (Version 1)",id:"figure-2-seeduino-via-xbeeshield-version-1",level:4},{value:"Any device using a Uart",id:"any-device-using-a-uart",level:4},{value:"Example",id:"example",level:3},{value:"RFBee monitored by RF Explorer",id:"rfbee-monitored-by-rf-explorer",level:4},{value:"Requirements",id:"requirements",level:5},{value:"Set RFBee to work",id:"set-rfbee-to-work",level:5},{value:"Support",id:"support",level:2},{value:"How to update firmware",id:"how-to-update-firmware",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/rfbee1.jpg",alt:null})),(0,r.yg)("p",null,"The RFBee is a RF module providing easy and flexible wireless data transmission between devices. It is based on a AVR ATmega168 working as a fully functional ",(0,r.yg)("strong",{parentName:"p"},"Arduino")," connected via SPI to a TI CC1101 RF transceiver."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/rfbee-v11-wireless-arduino-compatible-node-p-614.html"},(0,r.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,r.yg)("h2",{id:"version-tracker"},"Version Tracker"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Revision"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Release"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"v1.0"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial release"),(0,r.yg)("td",{parentName:"tr",align:null},"Mar 05, 2010")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"v1.1"),(0,r.yg)("td",{parentName:"tr",align:null},"Revised release"),(0,r.yg)("td",{parentName:"tr",align:null},"Aug 27, 2010")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"v1.2"),(0,r.yg)("td",{parentName:"tr",align:null},"Change MCU to ATmega328"),(0,r.yg)("td",{parentName:"tr",align:null},"Oct 10, 2015")))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Range: Indoor/Urban: up to 50m; Outdoor line-of-sight: up to 120m;"),(0,r.yg)("li",{parentName:"ul"},"Receiver Sensitivity: -95dBm"),(0,r.yg)("li",{parentName:"ul"},"RF Data Transmission Rate: 4,800bps; 76,800bps"),(0,r.yg)("li",{parentName:"ul"},"Working Frequency\xa0: 868MHz & 915MHz"),(0,r.yg)("li",{parentName:"ul"},"Communication type: Point to Point, or Point to Multipoint."),(0,r.yg)("li",{parentName:"ul"},"Easy-to-Use Serial Interface and rich extendable ports"),(0,r.yg)("li",{parentName:"ul"},"Easy-to-Use AT Command: Set working mode, Serial Baud Rate, etc."),(0,r.yg)("li",{parentName:"ul"},"Open source Hardware and Firmware"),(0,r.yg)("li",{parentName:"ul"},"Socket compatible with the Xbee, so you can plug it into any Xbee socket as a quick replacement.")),(0,r.yg)("div",{class:"admonition note"},(0,r.yg)("p",{class:"admonition-title"},"Note"),"Only the Rx,Tx, VCC, GND pins are identical to the Xbee. RFbee\u2019s will not communicate with Xbee\u2019s, so RFbee\u2019s need to be used on both ends of the wireless connection."),(0,r.yg)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Powerful RF control"),(0,r.yg)("li",{parentName:"ul"},"Easy to implement of WSN (Wireless Sensor Network)")),(0,r.yg)("h2",{id:"specifications"},"Specifications"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Specification"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Microprocessor"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168(Version < V1.2), ATmega328(Version >= 1.2)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PCB size"),(0,r.yg)("td",{parentName:"tr",align:null},"24.38mmx32.94mmx0.8mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Indicators"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Power supply"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IO counts"),(0,r.yg)("td",{parentName:"tr",align:null},"9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ADC input"),(0,r.yg)("td",{parentName:"tr",align:null},"7(6 multiplexing with IO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Program interface"),(0,r.yg)("td",{parentName:"tr",align:null},"USB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connectivity"),(0,r.yg)("td",{parentName:"tr",align:null},"Socket compatible with XBee")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Communication Protocol"),(0,r.yg)("td",{parentName:"tr",align:null},"Uart(TTL)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating Frequency Band"),(0,r.yg)("td",{parentName:"tr",align:null},"ISM 868MHz & 915MHz")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Outline Dimension"),(0,r.yg)("td",{parentName:"tr",align:null},"24.38mmx32.94mmx15mm")))),(0,r.yg)("h3",{id:"electrical-characteristics"},"Electrical Characteristics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Specification"),(0,r.yg)("th",{parentName:"tr",align:null},"Min"),(0,r.yg)("th",{parentName:"tr",align:null},"Typ"),(0,r.yg)("th",{parentName:"tr",align:null},"Max"),(0,r.yg)("th",{parentName:"tr",align:null},"Unit"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Input voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"3.0"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3"),(0,r.yg)("td",{parentName:"tr",align:null},"3.6"),(0,r.yg)("td",{parentName:"tr",align:null},"VDC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Transmit Current"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"34.5"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"mA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Receive Current"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"18.1"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"mA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Idle Current"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"5.2"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"mA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Power-down Current"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"<0.3"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"mA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,r.yg)("td",{parentName:"tr",align:null},"-50"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"125"),(0,r.yg)("td",{parentName:"tr",align:null},"\xb0C")))),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-pin.jpg",alt:null})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Pin"),(0,r.yg)("th",{parentName:"tr",align:null},"#"),(0,r.yg)("th",{parentName:"tr",align:null},"Pad Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Arduino Pin Number"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3V3"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Supply input"),(0,r.yg)("td",{parentName:"tr",align:null},"VCC, +3.3V"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TX"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"Output"),(0,r.yg)("td",{parentName:"tr",align:null},"Uart Tx port"),(0,r.yg)("td",{parentName:"tr",align:null},"1(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RX"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Input"),(0,r.yg)("td",{parentName:"tr",align:null},"Uart Rx port"),(0,r.yg)("td",{parentName:"tr",align:null},"0(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PD4"),(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PD4"),(0,r.yg)("td",{parentName:"tr",align:null},"4(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\xa0!RESET"),(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"Input"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 Reset port"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PB1"),(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PB1"),(0,r.yg)("td",{parentName:"tr",align:null},"9(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PB0"),(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PB0"),(0,r.yg)("td",{parentName:"tr",align:null},"8(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PD7"),(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PD7"),(0,r.yg)("td",{parentName:"tr",align:null},"7(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\xa0DTR"),(0,r.yg)("td",{parentName:"tr",align:null},"9"),(0,r.yg)("td",{parentName:"tr",align:null},"Input"),(0,r.yg)("td",{parentName:"tr",align:null},"Used for programming the ATmega168"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"10"),(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PC3"),(0,r.yg)("td",{parentName:"tr",align:null},"11"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PC3"),(0,r.yg)("td",{parentName:"tr",align:null},"3(Analog input)/17(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PC2"),(0,r.yg)("td",{parentName:"tr",align:null},"12"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PC2"),(0,r.yg)("td",{parentName:"tr",align:null},"2(Analog input)/16(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PC1"),(0,r.yg)("td",{parentName:"tr",align:null},"13"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PC1"),(0,r.yg)("td",{parentName:"tr",align:null},"1(Analog input)/15(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VREF"),(0,r.yg)("td",{parentName:"tr",align:null},"14"),(0,r.yg)("td",{parentName:"tr",align:null},"Input"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 AREF port"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PC0"),(0,r.yg)("td",{parentName:"tr",align:null},"15"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PC0"),(0,r.yg)("td",{parentName:"tr",align:null},"0(Analog input)/14(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ADC7"),(0,r.yg)("td",{parentName:"tr",align:null},"16"),(0,r.yg)("td",{parentName:"tr",align:null},"Input"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 ADC7"),(0,r.yg)("td",{parentName:"tr",align:null},"7(Analog input)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PD5"),(0,r.yg)("td",{parentName:"tr",align:null},"17"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PD5"),(0,r.yg)("td",{parentName:"tr",align:null},"5(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PD6"),(0,r.yg)("td",{parentName:"tr",align:null},"18"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PD6"),(0,r.yg)("td",{parentName:"tr",align:null},"6(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PC5"),(0,r.yg)("td",{parentName:"tr",align:null},"19"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PC5"),(0,r.yg)("td",{parentName:"tr",align:null},"5(Analog input)/19(DIO)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PC4"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Input/Output"),(0,r.yg)("td",{parentName:"tr",align:null},"ATmega168 PC4"),(0,r.yg)("td",{parentName:"tr",align:null},"4(Analog input)/18(DIO)")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,r.yg)("p",null,"The RFBee can be connected in various ways, e.g.:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"to a PC via USB using a UartSB device."),(0,r.yg)("li",{parentName:"ul"},"to a Seeeduino (or Arduino) via an XbeeShield."),(0,r.yg)("li",{parentName:"ul"},"to any other device having a Uart port.")),(0,r.yg)("div",{class:"admonition note"},(0,r.yg)("p",{class:"admonition-title"},"Note"),"The UartSBee device and the XbeeShield are sold separately."),(0,r.yg)("h4",{id:"figure-1-usb-using-uartsbee-the-following-pictures-demonstrated-with-older-version-uartsbee"},"Figure 1: USB using UartSBee (The following picture's demonstrated with older version UartSBee)"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure1.jpg",alt:null})),(0,r.yg)("h4",{id:"figure-2-seeduino-via-xbeeshield-version-1"},"Figure 2: Seeduino via XbeeShield (Version 1)"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure2.jpg",alt:null})),(0,r.yg)("h4",{id:"any-device-using-a-uart"},"Any device using a Uart"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure3.jpg",alt:null})),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Here is a tutorial on how to use a RFBee transceiver from ",(0,r.yg)("a",{parentName:"p",href:"http://www.SeeedStudio.com"},"www.SeeedStudio.com")," with a RF Explorer Spectrum Analyzer from ",(0,r.yg)("a",{parentName:"p",href:"http://www.rf-explorer.com"},"www.rf-explorer.com"),"."),(0,r.yg)("h4",{id:"rfbee-monitored-by-rf-explorer"},"RFBee monitored by RF Explorer"),(0,r.yg)("p",null,"The RFBee is a nice device which accepts some simple AT ASCII command strings to do some basic configuration. An ideal tool to experiment with digital RF transmission."),(0,r.yg)("p",null,"This example code is in the public domain and available ",(0,r.yg)("a",{parentName:"p",href:"http://micro.arocholl.com/download/RFBeeTutorial/Test_RFBee.pde"},"here")," and tested in Arduino IDE v0022."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam1.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam2.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam3.jpg",alt:null}))))),(0,r.yg)("h5",{id:"requirements"},"Requirements"),(0,r.yg)("p",null,"You may use a Seeeduino Stalker v02b to host the RFBee. Just plug the RFBee into the XBee slot. You also need a way to connect your Stalker to your PC to upload the sketch, I personally used a CP2102 USB bridge, you can use other USB bridges including the UartSBee recommended by Seeed."),(0,r.yg)("p",null,"Alternatively, you can do the same with an Arduino compatible board but will have to connect the RFBee with RX/TX of the CPU using a XBee 2mm connector, which may not be easy to get at your local shop."),(0,r.yg)("p",null,"Finally, you will need two jumper cables to connect Stalker port 2 to GND and port 3 and GND. We will use them as simple switches to configure the RFBee in different ways. Feel free to check the trivial sketch code to better understand how it works, and make your own changes."),(0,r.yg)("p",null,"Some familiarity with RFExplorer and RFBee user manual is required, otherwise some steps may not be obvious to you."),(0,r.yg)("h5",{id:"set-rfbee-to-work"},"Set RFBee to work"),(0,r.yg)("p",null,"After you upload the script in the Stalker, power off the unit completely so both ATMegas (Stalker's and RFBee's) resets at the same time and you start from a clean state."),(0,r.yg)("p",null,"Power the unit back, it will start transmission after Stalker led blinks 6 times."),(0,r.yg)("p",null,"RFExplorer will show received power and frequency. Play with antenna orientation till you get the best power response. In this tutorial we will use RFBee in 915Mhz, but equivalent results will be obtained in the 868Mhz. Take a look in the sketch code and uncomment the couple of lines coded for 868Mhz if your RF Explorer is in that band."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"More details, please visit")," ",(0,r.yg)("a",{parentName:"p",href:"http://micro.arocholl.com/index.php?option=com_content&view=article&id=53:tutorial-how-to-use-rf-explorer-to-monitor-a-rfbee&catid=40:article&Itemid=61"},"micro.arocholl.com"),"."),(0,r.yg)("h2",{id:"support"},"Support"),(0,r.yg)("h3",{id:"how-to-update-firmware"},"How to update firmware"),(0,r.yg)("p",null,"You can update the RFbee firmware using the Arduino IDE using the procedure below. This procedure assumes the use of UartSB as this is the easiest way to connect a RFBee to a PC, see the section on Hardware installation for different ways to connect."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Connect your RFBee to UartSB, move switches to XBee and 3.3v, then connect it to your computer through a USB cable."),(0,r.yg)("li",{parentName:"ol"},"Download the source code of the RFBee firmware into your Arduino sketch folder"),(0,r.yg)("li",{parentName:"ol"},"Open the Arduino IDE and open the RFBee_vx_x project. Then select Tools->Board->Arduino Pro or Pro Mini (3.3v, 8MHz) w/ATmega168 (ATmega328 when version >= V1.2). Choose the correct serial port from the Tools menu. You can now upload your RFBee firmware."),(0,r.yg)("li",{parentName:"ol"},"Reapply the configuration changes in the RFBee if they got lost during the update."),(0,r.yg)("li",{parentName:"ol"},"You could add or modify the firmware upon your demands, as the RFBee is able to work standalone as an Arduino.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"RFBee firmware:")," ",(0,r.yg)("a",{parentName:"p",href:"http://code.google.com/p/rfbee/downloads/list"},"http://code.google.com/p/rfbee/downloads/list")),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/rfbee-manual.pdf"},"RFBee User Manual")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/RFbee_for_arduino1.0.zip"},"RFbee firmware for Arduino 1.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/RFBee"},"RFbee firmware 1.1 (latest)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip"},"Schematic and layout in EAGLE file")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://forum.seeedstudio.com/viewtopic.php?f=10&t=682&sid=7a9b1bed4f9fd10a9b1003ca1e48e756"},"Forum"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);