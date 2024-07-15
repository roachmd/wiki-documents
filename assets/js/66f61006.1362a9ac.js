"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57162],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>m});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),g=n,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2322:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=o(58168),n=(o(96540),o(15680));const a={description:"Xadow - Grove Adaptor",title:"Xadow - Grove Adaptor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Grove_Adaptor",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Grove_Adaptor",id:"Seeed_Elderly/Xadow/Xadow_Grove_Adaptor",title:"Xadow - Grove Adaptor",description:"Xadow - Grove Adaptor",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Grove_Adaptor.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Grove_Adaptor",permalink:"/Xadow_Grove_Adaptor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Grove_Adaptor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - Grove Adaptor",title:"Xadow - Grove Adaptor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Grove_Adaptor",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Gesture v1.0",permalink:"/Xadow_Gesture_v1.0"},next:{title:"Xadow - IMU 6DOF",permalink:"/Xadow_IMU_6DOF"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/X_adaptor_01.jpg",alt:null})," "),(0,n.yg)("p",null,"Xadow Grove Adaptor is a device that converts Grove interface to Xadow Interface to compatible with Xadow System. It can achieve this function: analog signal from two analog Grove interface will output by Xadow I2C bus through ADC. The signal from Grove I2C Interface will directly lead to Xadow I2C bus without conversion. The A/D conversion based on ADCC121C021, a 12-bit precision ADC, create high precision."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Adaptor-p-1624.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Work Voltage\uff1a 3.3V")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A/D Resolution\uff1a12 bit")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Sample Rate\uff1a 188.9 ksps")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"I2C  address variable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Dimensions: 25.43mm x 20.35mm"))),(0,n.yg)("h2",{id:"demonstration"},"Demonstration"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Next we will show you how to read the output value of Grove modules by using Xadow Grove Adaptor."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Measure Analog Signal")),(0,n.yg)("p",null,'If measure analog signal Grove module outputs, you need to connect Grove module to analog Grove Interface where they are marked as "A0" and "A1".'),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The Hardware Installation should be:")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor2.jpg",alt:null})),(0,n.yg)("p",null,"Here Grove - Gas sensor outputs analog signal is connected to AO, so the I2C Address applied to the test code is 0x58(default). In other words, the I2C Address should be 0x59 when Grove - Gas Sensor connect to A1 interface."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The test code is:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'<pre>\n#include &lt;Wire.h&gt;\n#include &lt;Streaming.h&gt;\n\n#define ADDR_ADC121             0x58\n\n#define V_REF 3.00\n\n#define REG_ADDR_RESULT         0x00\n#define REG_ADDR_ALERT          0x01\n#define REG_ADDR_CONFIG         0x02\n#define REG_ADDR_LIMITL         0x03\n#define REG_ADDR_LIMITH         0x04\n#define REG_ADDR_HYST           0x05\n#define REG_ADDR_CONVL          0x06\n#define REG_ADDR_CONVH          0x07\n\nunsigned int getData;\nfloat analogVal=0;         // convert\nvoid init_adc()\n{\n    Wire.beginTransmission(ADDR_ADC121);        // transmit to device\n    Wire.write(REG_ADDR_CONFIG);                // Configuration Register\n    Wire.write(0x20);\n    Wire.endTransmission();\n}\n\nvoid read_adc()     //unsigned int *data\n{\n\n    Wire.beginTransmission(ADDR_ADC121);        // transmit to device\n    Wire.write(REG_ADDR_RESULT);                // get result\n    Wire.endTransmission();\n\n    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device\n    delay(1);\n    if(Wire.available()&lt;=2)\n    {\n        getData = (Wire.read()&amp;0x0f)&lt;&lt;8;\n        getData |= Wire.read();\n    }\n    Serial.print("getData:");\n    Serial.println(getData);\n    delay(5);\n    Serial.print("The analog value is:");\n    Serial.print(getData*V_REF*2/4096);\n    Serial.println("V");\n}\nvoid setup()\n{\n    Serial.begin(9600);\n    Wire.begin();\n    init_adc();\n}\n\nvoid loop()\n{\n    read_adc();//adcRead);\n    delay(50);\n}</pre>\n')),(0,n.yg)("p",null,"Upload code to Xadow Main Board, then open the serial monitor to observe output value\uff1a"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Xadow_Grove_Adaptor_Result.png",alt:null})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Measure I2C Signal")),(0,n.yg)("p",null,"You need to connect  Grove module to I2C interface of Xadow Grove Adaptor when communication mode of Grove module is I2C. Now the sever of Xadow Grove Adaptor is delivering signal to Xadow I2C bus without ADC.\nTaking Grove - Digital Light Sensor as example, let's learn its usage."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Hardware Installation\uff1a")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor1.jpg",alt:null})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Download the code\uff1a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'<pre>\n/* Digital Light sensor demo V1.0\n* Connect the sensor to I2C port of Arduino to use.\n*\n* By:https://www.seeedstudio.com\n*/\n#include &lt;Wire.h&gt;\n#include &lt;Digital_Light_TSL2561.h&gt;\nvoid setup()\n{\n  Wire.begin();\n  Serial.begin(9600);\n  TSL2561.init();\n}\n\nvoid loop()\n{\n  unsigned long  Lux;\n  TSL2561.getLux();\n  Serial.print("The Light value is: ");\n  Serial.println(TSL2561.calculateLux(0,0,1));\n  delay(1000);\n  }</pre>\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Open the serial monitor to observe the LUX value. Artificially change the light intensity of surrounding environment, you will see the obvious change of the output value.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Digital_Light_Sensor_Score_Picture.jpg",alt:null})),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip"},"Xadow Grove Adaptor Eagle File"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip"},"A/DC IC ADC121C021 datasheet")))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);