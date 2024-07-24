"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55526],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(r),y=a,m=g["".concat(l,".").concat(y)]||g[y]||c[y]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={description:"SenseCAP S2107",title:"SenseCAP S2107",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_S2107",last_update:{date:"9/25/2023",author:"KeweiLee"}},i=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_S2107",id:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_S2107",title:"SenseCAP S2107",description:"SenseCAP S2107",source:"@site/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_S2107.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series",slug:"/SenseCAP_S2107",permalink:"/SenseCAP_S2107",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_S2107.md",tags:[],version:"current",lastUpdatedBy:"KeweiLee",lastUpdatedAt:16956e5,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{description:"SenseCAP S2107",title:"SenseCAP S2107",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_S2107",last_update:{date:"9/25/2023",author:"KeweiLee"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP LoRaWAN S210X Series Sensor Introduction",permalink:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_LoRaWAN_S210X_Series_Sensor"},next:{title:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",permalink:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central"}},l={},p=[{value:"Hardware preparation",id:"hardware-preparation",level:2},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Decoder Code",id:"decoder-code",level:2},{value:"Data Parsing Example",id:"data-parsing-example",level:2}],d={toc:p},g="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg"})),(0,a.yg)("h1",{id:"product-description"},"Product Description"),(0,a.yg)("p",null,"SenseCAP LoRaWAN\xae S2107 temperature Sensor measures temperature at the range of -50\xb0C~300\xb0C. A highly accurate temperature sensor PT1000 that can support temperature detection in wide temperature ranges and industrial scenarios.\nPt1000 sensors (1000 ohm temperature sensors) are the most common type of platinum resistance thermometer. The S2107 supports a three-wire circuit for PT1000 sensors and allows for the connection of up to three sensors simultaneously.\nDirect contact temperature is an important indicator in many scenarios, especially in liquid detection, food monitoring, storage cold chain, industrial boilers, aquaculture solutions. The S2107 is specifically optimized for OTA with built-in Bluetooth, which enables quick setup and update. Benefiting from LoRa and IP66 design, this sensor features stability and reliability and can cover a long transmission range while keeping lower power consumption. Unlike wireline devices, it is battery-powered, reducing the workload and complexity of the deployment, and can be disassembled and installed in a few minutes."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html"},(0,a.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.yg)("h1",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Compatible with Worldwide LoRaWAN\xae Networks: Compatible with different types of LoRaWAN\xae gateways to enable fast connection with LoRaWAN\xae networks (support the universal frequency plan from 863MHz ~928MHz)."),(0,a.yg)("li",{parentName:"ul"},"Long Range & Battery powered: Ultra-wide-transmission range of 2km in urban scenes and 10km in line of sight scenes. Powered by easily replaceable standard Li-SOCl2 battery (type: ER34615) with Max.10 years of battery life."),(0,a.yg)("li",{parentName:"ul"},"Designed to Use in Harsh Environments: -40\u2103 ~ 85\u2103 operating temperature and IP66-rated enclosure, suitable for outdoor use, high UV exposure, heavy rain, dusty conditions, etc."),(0,a.yg)("li",{parentName:"ul"},"Simple Configuration and Calibration: SenseCAP provides a no-code experience that enables users to finish configuration and calibration through SenseCAP Mate APP."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Local storage\uff1aWhen LoRaWAN network is disconnected, the device can locally store up to 2000 uplinking records"),".")),(0,a.yg)("h1",{id:"applications"},"Applications"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Liquid detection"),(0,a.yg)("li",{parentName:"ul"},"Food monitoring"),(0,a.yg)("li",{parentName:"ul"},"Storage cold chain"),(0,a.yg)("li",{parentName:"ul"},"Aquaculture solutions")),(0,a.yg)("h1",{id:"specifications"},"Specifications"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"th"},"Temperature")),(0,a.yg)("th",{parentName:"tr",align:"left"}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Range"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("p",null,"-50 to 300 \u2103 "),(0,a.yg)("p",null,"(Other range customization contact sales)"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Accuracy"),(0,a.yg)("td",{parentName:"tr",align:"left"},"\xb10.5\u2103")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Resolution"),(0,a.yg)("td",{parentName:"tr",align:"left"},"0",".","1\u2103")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"General Parameters")),(0,a.yg)("td",{parentName:"tr",align:"left"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Product Model"),(0,a.yg)("td",{parentName:"tr",align:"left"},"S2107")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Microcontroller"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Wio-E5")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Support Protocol"),(0,a.yg)("td",{parentName:"tr",align:"left"},"LoRaWAN v1.0.3 Class A")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Built-in Bluetooth"),(0,a.yg)("td",{parentName:"tr",align:"left"},"App Tool to change parameters")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"LoRaWAN Channel Plan"),(0,a.yg)("td",{parentName:"tr",align:"left"},"IN865/EU868/US915/AU915/ AS923/KR920/RU864 ","*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Max Transmitted Power"),(0,a.yg)("td",{parentName:"tr",align:"left"},"19dBm")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Sensitivity"),(0,a.yg)("td",{parentName:"tr",align:"left"},"-136dBm@SF12 BW=125KHz")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Communication  Distance"),(0,a.yg)("td",{parentName:"tr",align:"left"},"2 to 10 km (depending on gateway  antenna and environments")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"IP Rating"),(0,a.yg)("td",{parentName:"tr",align:"left"},"IP66")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Operating Temperature"),(0,a.yg)("td",{parentName:"tr",align:"left"},"-40 to +85 \xb0C (LoRa DTU);-50 to 200\u2103(Cable); -50 to 300\u2103 (Probe)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Operating Humidity"),(0,a.yg)("td",{parentName:"tr",align:"left"},"0 to 100 %RH (non-condensing)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Device Weight"),(0,a.yg)("td",{parentName:"tr",align:"left"},"360g")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Cable Length"),(0,a.yg)("td",{parentName:"tr",align:"left"},"3 meters")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Certi\ufb01cation"),(0,a.yg)("td",{parentName:"tr",align:"left"},"CE / FCC / RoHS / TELEC")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"Battery (Contained in equipment)")),(0,a.yg)("td",{parentName:"tr",align:"left"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Battery Life"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Up to 10 years","*","*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Battery Capacity"),(0,a.yg)("td",{parentName:"tr",align:"left"},"19Ah (non-rechargeable)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Battery Type"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Standard D-size SOCl2 Battery")))),(0,a.yg)("h1",{id:"how-to-add-3-pt1000-sensors-to-s2107"},"How to add 3 PT1000 sensors to S2107"),(0,a.yg)("h2",{id:"hardware-preparation"},"Hardware preparation"),(0,a.yg)("p",null,"Wire 3 PT1000 sensors as shown in the diagram"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg"})),(0,a.yg)("h2",{id:"software-preparation"},"Software Preparation"),(0,a.yg)("p",null,"Use SenseCAP Mate App to configure the PT1000 sensors."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png"})),(0,a.yg)("h1",{id:"payload-decoder"},"Payload Decoder"),(0,a.yg)("h2",{id:"decoder-code"},"Decoder Code"),(0,a.yg)("p",null,"Please direct you to SenseCAP ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X"},"S210X Decoder")),(0,a.yg)("h2",{id:"data-parsing-example"},"Data Parsing Example"),(0,a.yg)("p",null,"Temperature Sensor measurement packet:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png"})),(0,a.yg)("p",null,"Packets sent when recovering from offline:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png"})),(0,a.yg)("p",null,"Battery Information for S2107:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png"})),(0,a.yg)("h1",{id:"sensecap-tech-support"},"SenseCAP Tech Support"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,a.yg)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);