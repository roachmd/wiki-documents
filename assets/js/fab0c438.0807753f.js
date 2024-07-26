"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60674],{15680:(e,i,t)=>{t.d(i,{xA:()=>p,yg:()=>g});var n=t(96540);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function a(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},p=function(e){var i=d(e.components);return n.createElement(s.Provider,{value:i},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},h=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(t),h=r,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return t?n.createElement(g,l(l({ref:i},p),{},{components:t})):n.createElement(g,l({ref:i},p))}));function g(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=h;var a={};for(var s in i)hasOwnProperty.call(i,s)&&(a[s]=i[s]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},33313:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(58168),r=(t(96540),t(15680));const o={description:"Wifi Shield V1.0",title:"Wifi Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wifi_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},l=void 0,a={unversionedId:"Top_Brand/Arduino/shield/Wifi_Shield_V1.0",id:"Top_Brand/Arduino/shield/Wifi_Shield_V1.0",title:"Wifi Shield V1.0",description:"Wifi Shield V1.0",source:"@site/docs/Top_Brand/Arduino/shield/Wifi_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Wifi_Shield_V1.0",permalink:"/Wifi_Shield_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Wifi_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Wifi Shield V1.0",title:"Wifi Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wifi_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"WIFI Shield",permalink:"/Wifi_Shield"},next:{title:"Wifi Shield V1.1",permalink:"/Wifi_Shield_V1.1"}},s={},d=[{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Programming",id:"software-programming",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:i,...t}=e;return(0,r.yg)(u,(0,n.A)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield.jpg",alt:null})),(0,r.yg)("p",null,"This Wifi Shield utilizes a RN171 wifi module to provide your Arduino/Seeeduino with serial Ethernet's function. It only takes two pins to hook your device up to 802.11b/g wireless networks with this shield. It features an independent antenna which can cover a wider range and transmit stronger signals. With supports for common TCP, UDP and FTP communication protocols, this Wifi Shield can meet needs of most wireless network projects, like smart home networks, robot controls or personal weather stations,etc. We prepared an easy and convenient command set for this shield so that you can use neat and concise code to run the function."),(0,r.yg)("h1",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Arduino, Seeeduino, Arduino Mega and Seeeduino Mega compatible")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Host Data Rate up to 1 Mbps for UART, 2 Mbps over SPI slave")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"UART serial port of RN171 on the Shield can be connected to Arduino by jumpers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"SPI pin of RN171 is just breakout")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"With two Grove connectors, making it easy to connect I2C and digital IO Grove modules to Arduino")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Secure WiFi authentication WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Built-in networking applications: DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP"))),(0,r.yg)("h1",{id:"specifications"},"Specifications"),(0,r.yg)("table",{cellspacing:"0",width:"80%"},(0,r.yg)("tr",null,(0,r.yg)("th",{scope:"col"}," Item"),(0,r.yg)("th",{scope:"col"}," Min"),(0,r.yg)("th",{scope:"col"}," Typical"),(0,r.yg)("th",{scope:"col"}," Max"),(0,r.yg)("th",{scope:"col"}," Unit")),(0,r.yg)("tr",null,(0,r.yg)("th",{scope:"row"}," Voltage"),(0,r.yg)("td",null," 3.3"),(0,r.yg)("td",null," 5"),(0,r.yg)("td",null," 5.5"),(0,r.yg)("td",null," VDC")),(0,r.yg)("tr",null,(0,r.yg)("th",{scope:"row"}," Current"),(0,r.yg)("td",null," 25"),(0,r.yg)("td",null," 60"),(0,r.yg)("td",null," 400"),(0,r.yg)("td",null," mA")),(0,r.yg)("tr",null,(0,r.yg)("th",{scope:"row"}," Transmit power"),(0,r.yg)("td",{colspan:"3"}," 0-10"),(0,r.yg)("td",null," dBm")),(0,r.yg)("tr",null,(0,r.yg)("th",{scope:"row"}," Frequency"),(0,r.yg)("td",{colspan:"3"}," 2402~2480"),(0,r.yg)("td",null," MHz")),(0,r.yg)("tr",null,(0,r.yg)("th",{scope:"row"},(0,r.yg)("p",null,"Network rate",(0,r.yg)("br",null))),(0,r.yg)("td",{colspan:"4"}," 1-11 Mbps for 802.11b/6-54Mbps for 802.11g")),(0,r.yg)("tr",null,(0,r.yg)("th",{scope:"row"}," Dimension"),(0,r.yg)("td",{colspan:"3"}," \xa060x56x19"),(0,r.yg)("td",null," mm")),(0,r.yg)("tr",null,(0,r.yg)("th",{scope:"row"}," Net Weight"),(0,r.yg)("td",{colspan:"3"}," \xa020\xb12"),(0,r.yg)("td",null," g"))),(0,r.yg)("h1",{id:"interface-function"},"Interface Function"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield009.jpg",alt:null})),(0,r.yg)("h1",{id:"usage"},"Usage"),(0,r.yg)("p",null,"The example we provided here is to show you how to connect this Wifi Shield to the Ethernet and get data exchanging between the shield and a virtual server started."),(0,r.yg)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,r.yg)("p",null,"The package you receive should contain these parts: a Wifi Shield, an antenna and an antenna connector."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield001.jpg",alt:null})),(0,r.yg)("p",null,"Assemble these parts together like the picture below."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield002.jpg",alt:null})),(0,r.yg)("p",null,"Mount the shield onto your Arduino/Seeeduino"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield003.jpg",alt:null})),(0,r.yg)("p",null,"Ok, time to write some code."),(0,r.yg)("h3",{id:"software-programming"},"Software Programming"),(0,r.yg)("p",null,"First you have to make sure that Arduino1.0 has already been installed on your computer."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Tb2.jpg",alt:null}),"\nDownload the wifishield library here ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/WiFi_Shield"},"Wifi Shield Library")," and unzip it into the libraries file of Arduino via this path:\xa0..\\arduino-1.0\\libraries\nOpen a new sketch in Arduino-1.0, then copy the following code to your sketch."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "Wifly.h"\n#include <SoftwareSerial.h>\nWiflyClass Wifly(2,3);\nvoid setup()\n{\n Serial.begin(9600);//use the hardware serial to communicate with the PC\n Wifly.init();//Initialize the wifishield\n Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router\n Wifly.join("SSID");\n Wifly.checkAssociated();\n while(!Wifly.connect("192.168.1.164","90"));//connect the remote service\n Wifly.writeToSocket("Connected!");\n}\nvoid loop()\n{\n if(Wifly.canReadFromSocket())\n {\n   Serial.print(Wifly.readFromSocket());\n }\n if(Serial.available())\n {\n   Wifly.print((char)Serial.read());\n }\n}\n\n')),(0,r.yg)("p",null,"You need to do some modifications on this sketch according to your specific configuration."),(0,r.yg)("p",null,"1.Select Pin to connect the Serial Port of WIFI Module"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-txt"},"WiflyClass Wifly(2,3);\n\n")),(0,r.yg)("p",null,"The parameters 2 and 3 here represent RX and TX respectively for the software serial port. Based on this, pins of D2 and D3 should be shorted as the picture below. You can change the pin number as you like, just make sure corresponding changes on the shorted pins."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield004.jpg",alt:null})),(0,r.yg)("p",null,"2.Fill in wireless network information"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router\nWifly.join("SSID");\n')),(0,r.yg)("p",null,"Fill the name of your target network into SSID and password into PASSWORD. For example, if you like to join the China-NET and its password is 12345678, then this line of code should be changed into:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'Wifly.setConfig("China-NET","12345678");//here to set the ssid and password of the Router\nWifly.join("China-NET");\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")),(0,r.yg)("p",null,"1.Router Security type just support WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)"),(0,r.yg)("p",null,"2.Router must to connect Internet"),(0,r.yg)("p",null,"3.Fill in the information of the remote server"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'while(!Wifly.connect("192.168.1.164","90"));//connect the remote service\n')),(0,r.yg)("p",null,'In the upper line, "192.168.1.164" is the remote IP address of the virtual server, and "90" is the port information.'),(0,r.yg)("p",null,"We provide a TCP Client software \xa0",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/YFTCPServer.zip"},"YFTCPServer.zip")," and serial port software ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Sscom32E.zip"},"SCCOM")," for testing purpose."),(0,r.yg)("p",null,"Open the TCP Client software you will see:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield005.jpg",alt:null})),(0,r.yg)("p",null,"Change your lines according to the information you get from this software."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'while(!Wifly.connect("192.168.1.164","90"));//connect the remote service\n')),(0,r.yg)("p",null,"Upload the sketch."),(0,r.yg)("p",null,'Now run the TCP Client software first, then the serial port software, click the "OpenCom" button, wait until a message "<--Connected!" is printed on the screen of the virtual software.'),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield006.jpg",alt:null})),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield007.jpg",alt:null})),(0,r.yg)("p",null,"Now you can communicate with the Wifi Shield via this serial port software."),(0,r.yg)("p",null,"For more detailed information about RN171, you can download the datasheet here ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf"},"RN171 Datasheet")),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h1",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Eagle]"),(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip"},"Wifi Shield Eagle File")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]"),(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0.pdf"},"wifi Shield V1.0 PCB")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]"),(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0%20SCH.pdf"},"wifi Shield V1.0 SCH")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Datasheet]"),(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf"},"RN171 Datasheet")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Library]"),(0,r.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/WiFi_Shield"},"Wifi Shield Library"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);