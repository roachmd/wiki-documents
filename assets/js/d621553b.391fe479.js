"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64067],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(58168),o=(r(96540),r(15680));const a={description:"This article mainly introduces how to use fuxa for ModbusRTU/TCP communication.",title:"reComputer R1000 with fuxa to use modbus RTU/TCP",keywords:["Edge Controller","reComputer R1000","fuxa","ModbusRTU/TCP"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/reComputer_r1000_fuxa_modbus_rtu_and_tcp",last_update:{date:"06/26/2024",author:"ShuishengPeng"}},i=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa/recomputer_r1000_with_fuxa_use_modbus",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa/recomputer_r1000_with_fuxa_use_modbus",title:"reComputer R1000 with fuxa to use modbus RTU/TCP",description:"This article mainly introduces how to use fuxa for ModbusRTU/TCP communication.",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa/recomputer_r1000_with_fuxa_use_modbus.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa",slug:"/reComputer_r1000_fuxa_modbus_rtu_and_tcp",permalink:"/reComputer_r1000_fuxa_modbus_rtu_and_tcp",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/fuxa/recomputer_r1000_with_fuxa_use_modbus.md",tags:[],version:"current",lastUpdatedBy:"ShuishengPeng",lastUpdatedAt:171936e4,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{description:"This article mainly introduces how to use fuxa for ModbusRTU/TCP communication.",title:"reComputer R1000 with fuxa to use modbus RTU/TCP",keywords:["Edge Controller","reComputer R1000","fuxa","ModbusRTU/TCP"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/reComputer_r1000_fuxa_modbus_rtu_and_tcp",last_update:{date:"06/26/2024",author:"ShuishengPeng"}},sidebar:"ProductSidebar",previous:{title:"reComputer R1000 with Grafana",permalink:"/recomputer_r1000_grafana"},next:{title:"reComputer R1000 with fuxa to use mqtt client",permalink:"/reComputer_r1000_fuxa_mqtt_client"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"ModbusRTU communication steps",id:"modbusrtu-communication-steps",level:2},{value:"ModbusTCP communication steps",id:"modbustcp-communication-steps",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"FUXA is a web-based Process Visualization (SCADA/HMI/Dashboard) software. With FUXA you can create modern process visualizations with individual designs for your machines and real-time data display.It supports Modbus RTU/TCP, Siemens S7 Protocol, OPC-UA, BACnet IP, MQTT, and other protocols. "),(0,o.yg)("p",null,"This article mainly introduces how to use fuxa for ModbusRTU/TCP communication."),(0,o.yg)("h2",{id:"getting-start"},"Getting Start"),(0,o.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,o.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{class:"table-nobg"},(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Using ",(0,o.yg)("a",{parentName:"li",href:"https://modbusmechanic.scifidryer.com/"},"modbusmechanic")," on W10 PC.You can also use other modbus testing tools"),(0,o.yg)("li",{parentName:"ul"},"Using ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/frangoteam/FUXA"},"fuxa")," on reComputer R1000.You can refer to the following steps to install fuxa on reComputer R1000",(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"  ## You need to have installed Node Version 14 || 16 || 18.\n  wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz\n  tar -xf node-v18.20.3-linux-arm64.tar.xz\n  cd node-v18.20.3-linux-arm64\n  sudo cp -R * /usr/local/\n  node -v\n  npm -v\n  ## Next install FUXA from npm\n  sudo npm install -g --unsafe-perm @frangoteam/fuxa\n  sudo fuxa\n"))),(0,o.yg)("li",{parentName:"ul"},"Regarding how to use the modbus function of reComputer R1000, you can refer to this ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/"},"wiki"),".")),(0,o.yg)("h3",{id:"hardware-configuration"},"Hardware Configuration"),(0,o.yg)("p",null,"For ModbustRTU, we used an rs485 to USB module to connect the reComuputer R1000 with the W10 pc."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png",alt:"pir",width:"700",height:"auto"})),(0,o.yg)("p",null,"For ModbusTCP, we use Ethernet cables to connect the W10 PC and reComputer R1000 to a switch to ensure that they are on the same network segment."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png",alt:"pir",width:"500",height:"auto"})),(0,o.yg)("h2",{id:"modbusrtu-communication-steps"},"ModbusRTU communication steps"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),":Open ModbusMechanic on Win10 PC, select the corresponding serial port and baud rate, then click ",(0,o.yg)("inlineCode",{parentName:"p"},"Tools")," in the upper right corner, select ",(0,o.yg)("inlineCode",{parentName:"p"},"Start Slave Simulator"),", then select ",(0,o.yg)("inlineCode",{parentName:"p"},"RTU"),", enter ",(0,o.yg)("inlineCode",{parentName:"p"},"slave ID"),", and then you can set the slave In the data field of the machine, we added three coils and a ",(0,o.yg)("inlineCode",{parentName:"p"},"Holding Register")," for subsequent reading from the Modbus host."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_slva_data.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),":In ",(0,o.yg)("inlineCode",{parentName:"p"},"fuxa"),", click the ",(0,o.yg)("inlineCode",{parentName:"p"},"+")," button in the lower right corner, enter the module name, select ",(0,o.yg)("inlineCode",{parentName:"p"},"modbusRTU")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"Type"),", select ",(0,o.yg)("inlineCode",{parentName:"p"},"SeriaPort")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"Connection options"),", then select the serial port number you need to use and set the corresponding baud rate and other parameters, and finally click ",(0,o.yg)("inlineCode",{parentName:"p"},"OK"),". "),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/first_configure.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),":After that, we enter the ",(0,o.yg)("inlineCode",{parentName:"p"},"Devices settings")," page and click the ",(0,o.yg)("inlineCode",{parentName:"p"},"+")," button in the upper left corner to set the data fields we need to read. We set the corresponding parameters and click ",(0,o.yg)("inlineCode",{parentName:"p"},"OK")," to see that ",(0,o.yg)("inlineCode",{parentName:"p"},"fuxa")," has successfully obtained Modbus slave data."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_master.gif"})),(0,o.yg)("h2",{id:"modbustcp-communication-steps"},"ModbusTCP communication steps"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),":Open ModbusMechanic in Win10 PC, then click ",(0,o.yg)("inlineCode",{parentName:"p"},"Tools")," in the upper right corner, select ",(0,o.yg)("inlineCode",{parentName:"p"},"Start Slave Simulator"),", then select ",(0,o.yg)("inlineCode",{parentName:"p"},"TCP"),", enter ",(0,o.yg)("inlineCode",{parentName:"p"},"slave ID"),", and you can set the data field of the slave. We added two The coil has a ",(0,o.yg)("inlineCode",{parentName:"p"},"holding register")," for subsequent reading from the Modbus host"),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_slava_data.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),":Click the ",(0,o.yg)("inlineCode",{parentName:"p"},"+")," button in the lower right corner of ",(0,o.yg)("inlineCode",{parentName:"p"},"fuxa"),", enter the module name, select ",(0,o.yg)("inlineCode",{parentName:"p"},"modbusTCP")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"Type"),", select ",(0,o.yg)("inlineCode",{parentName:"p"},"TcpPort")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"Connection options"),", select the IP address of the slave machine for ",(0,o.yg)("inlineCode",{parentName:"p"},"Slave IP and port"),", the default port number is 502, then enter ",(0,o.yg)("inlineCode",{parentName:"p"},"Slave ID"),", and finally click ",(0,o.yg)("inlineCode",{parentName:"p"},"OK"),". "),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbustcp_first_configure.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),":After that, we enter the ",(0,o.yg)("inlineCode",{parentName:"p"},"Devices settings")," page and click the ",(0,o.yg)("inlineCode",{parentName:"p"},"+")," button in the upper left corner to set the data fields we need to read. We set the corresponding parameters and click ",(0,o.yg)("inlineCode",{parentName:"p"},"OK")," to see that ",(0,o.yg)("inlineCode",{parentName:"p"},"fuxa")," has successfully obtained Modbus slave data."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif"})),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);