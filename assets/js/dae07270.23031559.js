"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61831],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||g[h]||o;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const o={description:"5 Minutes to Develop an Industrial LoRaWAN Sensor",title:"5 Minutes to Develop an Industrial LoRaWAN Sensor",keywords:["LoRaWAN","Sensor","SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/develop_an_industrial_lorawan_sensor",last_update:{date:"9/15/2023",author:"Jessie"}},s=void 0,i={unversionedId:"Sensor/SenseCAP/Applications/Develop_an_Industrial_LoRaWAN_Sensor",id:"Sensor/SenseCAP/Applications/Develop_an_Industrial_LoRaWAN_Sensor",title:"5 Minutes to Develop an Industrial LoRaWAN Sensor",description:"5 Minutes to Develop an Industrial LoRaWAN Sensor",source:"@site/docs/Sensor/SenseCAP/Applications/Develop_an_Industrial_LoRaWAN_Sensor.md",sourceDirName:"Sensor/SenseCAP/Applications",slug:"/develop_an_industrial_lorawan_sensor",permalink:"/develop_an_industrial_lorawan_sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/Applications/Develop_an_Industrial_LoRaWAN_Sensor.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1694736e3,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{description:"5 Minutes to Develop an Industrial LoRaWAN Sensor",title:"5 Minutes to Develop an Industrial LoRaWAN Sensor",keywords:["LoRaWAN","Sensor","SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/develop_an_industrial_lorawan_sensor",last_update:{date:"9/15/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Tango with Home Assistant and SenseCAP Sensors",permalink:"/home_assistant_with_sensecap_lorawan_sensors"},next:{title:"Which LoRaWAN Network Should I Select",permalink:"/select_lorawan_network"}},l={},p=[{value:"Preparation",id:"preparation",level:3},{value:"Network Architecture",id:"network-architecture",level:3},{value:"Hook up the Sensor",id:"hook-up-the-sensor",level:3},{value:"Configure the sensor via App",id:"configure-the-sensor-via-app",level:3},{value:"Upload the data to SenseCAP Portal and Mate App",id:"upload-the-data-to-sensecap-portal-and-mate-app",level:3},{value:"Test the sensor in a real environment.",id:"test-the-sensor-in-a-real-environment",level:3},{value:"Resource",id:"resource",level:3}],c={toc:p},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Let's quickly build an industrial-grade LoRaWAN wireless sensor for direct commercial use in 5 minutes."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"When prototyping for a commercial data acquisition project, it takes a lot of time and cost to prototype. For example, we need to make a wireless pH sensor for an agricultural project. We need to 1) Find the development board and sensor probe. 2) Write code. 3) 3D print the shell. 4) Final assembly test. By the time we complete the prototype, it can take days or even weeks."),(0,r.yg)("p",null,"Today, we can use a wireless LoRa collector, set up sensors to connect to an app via Bluetooth and build a product in five minutes, directly into a commercial project."),(0,r.yg)("h3",{id:"preparation"},"Preparation"),(0,r.yg)("p",null,"Prepare data logger, sensor probe, gateway, and tools.\n1) ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"Data logger"),": It is a LoRaWAN converter that converts MODBUS RS485/Analog/GPIO sensors into LoRa-enabled sensors and therefore transfers data through the LoRaWAN protocol."),(0,r.yg)("p",null,"2) Sensor probe: prepare a sensor probe with a cable and output one of the signals of RS485 / 4-20mA /0-10V / pulse/level. The tutorial uses an RS485 ultrasonic sensor for liquid-level measurement."),(0,r.yg)("p",null,"3) Cross screwdriver: Used to assemble the sensor probe."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519859/image_iq7PU8q7nt.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,"4) Gateway: The LoRaWAN sensor transmits data to a LoRaWAN gateway, which then transmits it to the cloud server. If you don't have a gateway, there are two options:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Option 1"),": Sensors work in areas covered by Helium Network(Check on ",(0,r.yg)("a",{parentName:"p",href:"https://explorer.helium.com/"},"Helium Explorer"),"). Wherever the helium network is available, you can use sensors to transfer data without purchasing a gateway.\n",(0,r.yg)("strong",{parentName:"p"},"Option 2"),": Buy a ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html"},"gateway"),".\n5) Download the SenseCAP Mate App for configuration:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519867/image_hQX9CstNtP.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:500,height:"auto"})),(0,r.yg)("p",null,"The preparation is done. Let's get started!"),(0,r.yg)("h3",{id:"network-architecture"},"Network Architecture"),(0,r.yg)("p",null,"Let's start with LoRaWAN network."),(0,r.yg)("p",null,"The data logger converts sensor data into LoRa data and uploads the data to the gateway. The gateway uploads the data to the server."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519879/image_SUwd9Yyglx.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("h3",{id:"hook-up-the-sensor"},"Hook up the Sensor"),(0,r.yg)("p",null,"1) Disassemble the Data Logger."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519881/image_TmNcqHz98z.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,"2) Connect the sensor to the terminal, and power the sensor via a built-in battery."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519884/image_XZETiBWTBz.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("admonition",{title:"Tip",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you are using another protocol, such as 4-20mA, please refer to the pin table:")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519889/image_RHiaxQkid9.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),"3) Assemble the sensor.",(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519904/image_6qTGLlXoOZ.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519908/image_LDPEOEC9ik.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519912/image_jStYF3uKW6.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("h3",{id:"configure-the-sensor-via-app"},"Configure the sensor via App"),(0,r.yg)("p",null,"1) Open and log in to the SenseCAP App."),(0,r.yg)("p",null,'2) Select "S2100 Data Logger" and Click \u201cSetup\u201d on the config page.'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1519915/image_au0YfmfVoo.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),"3) Press the button and hold for 3 seconds, the green LED will flash at 1s frequency. Then click \u201cScan\u201d to start scanning the data logger's Bluetooth.",(0,r.yg)("center",null,(0,r.yg)("iframe",{width:"220",height:"380",src:"https://hackster.imgix.net/uploads/attachments/1520082/video_ZKG2GDw54j.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,r.yg)("p",null,"4) Configure the lorawan and sensor parameters(includes RS485 Modbus-RTU command)."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1520084/image_tAKr7NohSn.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"#########Basic Setting#############\nPlatform: \n    -SenseCAP for helium (use helium network)\n    -SenseCAP for The Things Network (use SenseCAP gateway)\nFrequency Plan: EU868 (Select this based on the frequency or region of the gateway)\nUplink Interval: 5 min\nPacket Policy: 2C+1N (use the default parameter)\n\n#########Sensor Setting#############\nProtocol: RS485 Modbus RTU\nBaud Rate: 9600\nModbus Address: 128 (Sensor's modbus address)\nPower Type: Periodic power (Power the sensor before data collection, and power off the sensor after data collection)\nPower Voltage: 5V\nSensor Warm-up Time: 100ms\nResponse Timeout: 100ms\nStartup Time: 100ms\nMeasurement Number: 2 (distance and temperature)\n\n#########Measurement1#############\nRegister Address: 256 (DEC)\nFunction code: 03\nData Type: Unsigned 16bit integer,0xAB\nPrecision: 0,# (No decimal number)\nFactoryA: 1 (Y=Ax+B, \u201cY\u201d: It is the value of Data Logger will upload.\n\u201cx\u201d: It is the original current value.If only raw values are uploaded, set A=1 and B=0.)\nFactoryB: 0\nWrite Strategy: None\n\n#########Measurement2#############\nRegister Address: 258 (DEC)\nFunction code: 03\nData Type: Unsigned 16bit integer,0xAB\nPrecision: 0,# (No decimal number)\nFactoryA: 0.1 (The final value is divided by 10)\nFactoryB: 0\nWrite Strategy: None\n")),(0,r.yg)("p",null,'5) Click Send and Test the sensor by clicking "Measure"'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1520088/image_iAmOflFRIQ.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,"The distance and temperature of the sensor are obtained successfully!"),(0,r.yg)("h3",{id:"upload-the-data-to-sensecap-portal-and-mate-app"},"Upload the data to SenseCAP Portal and Mate App"),(0,r.yg)("p",null,"Before uploading data, make sure the gateway is working properly or has helium network coverage."),(0,r.yg)("p",null,"1) The App returns to the home page and disconnects the Bluetooth connection. The data logger will try to join the LoRaWAN network."),(0,r.yg)("p",null,"Waiting to join LoRa network: red breathing light flashing\nJoin LoRa network success: green LED flashes fast for 2s"),(0,r.yg)("center",null,(0,r.yg)("iframe",{width:"220",height:"380",src:"https://hackster.imgix.net/uploads/attachments/1520108/video(1)_yWY0orezqU.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,r.yg)("p",null,"2) Binding the data logger via scanning the QR code."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1520115/image_9JdYx3MCrg.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,"3) Check the data on App and Portal (",(0,r.yg)("a",{parentName:"p",href:"https://sensecap.seeed.cc/"},"https://sensecap.seeed.cc/"),")."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1520128/image_K6j6TDHXX4.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("h3",{id:"test-the-sensor-in-a-real-environment"},"Test the sensor in a real environment."),(0,r.yg)("p",null,"Fast application to the outdoor real scene for long-term monitoring."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://hackster.imgix.net/uploads/attachments/1520150/image_MoA2h9E8lq.png?auto=compress%2Cformat&w=740&h=555&fit=max",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,"At present, a LoRaWAN sensor has been developed."),(0,r.yg)("p",null,"Come and try new solutions for your project!"),(0,r.yg)("h3",{id:"resource"},"Resource"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.hackster.io/jenkinlu001/5-minutes-to-develop-an-industrial-lorawan-sensor-6631dc"},"5 Minutes to Develop an Industrial LoRaWAN Sensor")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf"},"SenseCAP S2100 Data Logger User Guide")))}g.isMDXComponent=!0}}]);