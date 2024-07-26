"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86095],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>c});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=n,c=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return r?a.createElement(c,i(i({ref:t},d),{},{components:r})):a.createElement(c,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94725:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={description:"Grove - Infrared Temperature Sensor",title:"Grove - Infrared Temperature Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Infrared_Temperature_Sensor",last_update:{date:"1/4/2023",author:"jianjing Huang"}},i=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor",id:"Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor",title:"Grove - Infrared Temperature Sensor",description:"Grove - Infrared Temperature Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temperature",slug:"/Grove-Infrared_Temperature_Sensor",permalink:"/Grove-Infrared_Temperature_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-Infrared_Temperature_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - Infrared Temperature Sensor",title:"Grove - Infrared Temperature Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Infrared_Temperature_Sensor",last_update:{date:"1/4/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Digital Infrared Temperature Sensor",permalink:"/Grove-Digital_Infrared_Temperature_Sensor"},next:{title:"Grove - Infrared Temperature Sensor Array(AMG8833)",permalink:"/Grove-Infrared_Temperature_Sensor_Array-AMG8833"}},l={},p=[{value:"Version",id:"version",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Software",id:"software",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:p},g="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/main.jpg"})),(0,n.yg)("p",null,"The Infrared temperature sensor is a non-contact temperature measure model. It is composed of 116 elements of thermocouple in series on a floating micro-membrane, the black Surface of the sensor is good to absorb the incident thermal infrared radiation, which might trigger a voltage response at output. This sensor outputs an analog voltage (0~1.1V) according to target temperature."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:"210",height:"41",border:"0"}))),(0,n.yg)("h2",{id:"version"},"Version"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Changes"),(0,n.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Grove - Infrared Temperature Sensor v1.0"),(0,n.yg)("td",{parentName:"tr",align:null},"Initial"),(0,n.yg)("td",{parentName:"tr",align:null},"Dec. 11 2015")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Grove - Infrared Temperature Sensor v1.1"),(0,n.yg)("td",{parentName:"tr",align:null},"Optimize the layout"),(0,n.yg)("td",{parentName:"tr",align:null},"Jul. 24 2016")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Grove - Infrared Temperature Sensor v1.2"),(0,n.yg)("td",{parentName:"tr",align:null},"Change the power chip to make the power more stable"),(0,n.yg)("td",{parentName:"tr",align:null},"Feb. 10 2018")))),(0,n.yg)("h2",{id:"specifications"},"Specifications"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Voltage: 3-5V"),(0,n.yg)("li",{parentName:"ul"},"Measuring Current Supply: 160-200 uA"),(0,n.yg)("li",{parentName:"ul"},"Measuring Range: -10~100\xb0C"),(0,n.yg)("li",{parentName:"ul"},"Holding Time: 2S"),(0,n.yg)("li",{parentName:"ul"},"Operating Temperature: -10~80 \xb0C"),(0,n.yg)("li",{parentName:"ul"},"Storage Temperature: -35-80 \xb0C")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.yg)("p",null,"The following sketch demonstrates a simple application of measure the measure the surrounding temperature around the sensor and the temperature of the target which is in front of the sensor. And print the result on the serial monitor."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the following materials:")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove - Infrared Temperature Sensor"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/JUH4jM8D85pxTHah3QXYxhe7.jpg"})))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html"},"Get One Now"))))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Connect Grove - Infrared Temperature Sensor to port ",(0,n.yg)("strong",{parentName:"p"},"A0")," of Grove-Base Shield.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to PC via a USB cable."))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/connect.jpg"})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove - Infrared Temperature Sensor"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"5V"),(0,n.yg)("td",{parentName:"tr",align:null},"Red")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"GND"),(0,n.yg)("td",{parentName:"tr",align:null},"Black")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"A1"),(0,n.yg)("td",{parentName:"tr",align:null},"White")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"A0"),(0,n.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.yg)("h4",{id:"software"},"Software"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip"},"Demo Code"),",then double click it to open the demo.")),(0,n.yg)("p",null,"Before measuring temperature, you need simple setting. Following the instruction below before your test and you will gain a accurately result."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Regulate the sensor voltage")),(0,n.yg)("p",null,"After uploading the demo program, make the sensor in normal environment more than 5 minutes that make the sensor temperature the same as surrounding temperature. Then open the serial monitor to check the voltage which the sensor output. Ideally, when the ambient temperature is equal to the temperature sensor, the infrared sensor (TP-538U) output is 0V.We should regulate the reference voltage which offset at 0.5V by hardware. As shown below, the sensor voltage is 0.014V, we just need to change the offset","_","vol value as0.014 which you obtain from the serial monitor in program."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_code2.jpg"})),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Serialmonitor.jpg"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Regulate the sensor detected distance")),(0,n.yg)("p",null,"According to our experiment, the sensor's nominal measure distance is 9CM, but we can\u2019t ensure all sensor have the same character. So if you want to have accurate result, you need to regulate it with Ice and water mixture to measure the 0\u2103, and use boiled water to regulate the 100\u2103. After that, you can obtain the effective distance of the sensor."),(0,n.yg)("p",null,"The specific method for measuring is fill with ice and water in a dark container which has a flat surface. Waiting for the container drop to 0\u2103, keep the sensor 9CM between object, move the sensor forward or back and check the result, if output is 0\u2103, note down the distance value. The same method to check boiled water. When you gain a pair of value, make a deal with average calculation. You can begin to measure in a rated distance which you just obtained now."),(0,n.yg)("p",null,"Now we can measure the surrounding temperature around the sensor. The sensor is apply in a nominal distance, you can have a try in other distance, but the distance-temperature diagram neither sensor\u2019s manufacturer nor we obtained, you can draw it follow the two instructions above. We reserve variable ",(0,n.yg)("strong",{parentName:"p"},'"temperature_range"')," in demo code. We assume that the target distance is 3 cm, the coefficient which you measured may be 5 more or less. Wish you have a fun try."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_Code_1.jpg"})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"1"),". The demo code does not support Atmega168."),(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"2"),". In order to gain a accurate measured, the distance(D) and target diament(S) rate D:S must less than 0.5.")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Dsdiagram.jpg"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,n.yg)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.yg)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the temperature."))),(0,n.yg)("p",null,"The result should be like:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/result_arduino.png"})),(0,n.yg)("h1",{id:"grove-infrared-temperature-sensor-v10"},"Grove-Infrared Temperature Sensor V1.0"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h1",{id:"grove-infrared-temperature-sensor-v12"},"Grove-Infrared Temperature Sensor V1.2"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip"},"Grove-Infrared Temperature Sensor V1.2 Eagle File")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip"},"Grove-Infrared Temperature Sensor V1.0 Eagle File")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip"},"OTP-538U Datasheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip"},"Demo Code")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_temperature_demo_code_with_serialLCD.zip"},"Infrared Temperature Demo Code with SerialLCD"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,n.yg)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.yg)("p",null,"With the SenseCAP ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.yg)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.yg)("div",{align:"center"},(0,n.yg)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);