"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78684],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(r),h=a,m=g["".concat(s,".").concat(h)]||g[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},43166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={description:"MT3620 Ethernet Shield v1.0",title:"MT3620 Ethernet Shield v1.0",keywords:["Azure_Sphere_MT3620_Development_Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/MT3620_Ethernet_Shield_v1.0",last_update:{date:"1/13/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Azure Sphere MT3620/MT3620_Ethernet_Shield_v1.0",id:"Sensor/Azure Sphere MT3620/MT3620_Ethernet_Shield_v1.0",title:"MT3620 Ethernet Shield v1.0",description:"MT3620 Ethernet Shield v1.0",source:"@site/docs/Sensor/Azure Sphere MT3620/MT3620_Ethernet_Shield_v1.0.md",sourceDirName:"Sensor/Azure Sphere MT3620",slug:"/MT3620_Ethernet_Shield_v1.0",permalink:"/MT3620_Ethernet_Shield_v1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Azure Sphere MT3620/MT3620_Ethernet_Shield_v1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"MT3620 Ethernet Shield v1.0",title:"MT3620 Ethernet Shield v1.0",keywords:["Azure_Sphere_MT3620_Development_Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/MT3620_Ethernet_Shield_v1.0",last_update:{date:"1/13/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove Starter Kit for Azure Sphere MT3620 Development Kit",permalink:"/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit"},next:{title:"MT3620 Mini Dev Board",permalink:"/MT3620_Mini_Dev_Board"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},g="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/product_picture.png",alt:"enter image description here"})),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html"},"Azure Sphere MT3620 Development kit")," comes with four 2.54mm headers for hardware resources extension from MT3620. MT3620 Ethernet Shield is an add-on breakout board designed for MT3620 development kit. The Azure Sphere ethernet shield enables support for private LAN connection only. Please see ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure-sphere/network/connect-private-network"},"here")," for more details."),(0,a.yg)("p",null,"Microsoft Azure Sphere is a solution for creating highly-secured, connected, MCU-powered devices. Azure Sphere brings together the best of Microsoft\u2019s expertise in cloud, software and silicon\u2014resulting in a unique approach to security that starts in the silicon and extends to the cloud. Together, Azure Sphere certified MCUs, the Azure Sphere OS, and the Azure Sphere Security Service provide you with the confidence and the power to reimagine your business and create the future."),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("a",{href:"https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html",target:"_blank"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,a.yg)("admonition",{title:"warning",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"External Wi-Fi is required for internet access and Azure Sphere services. Azure Sphere does not support routing or bridging between the private LAN and Wi-Fi interface.")),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Processor: Microchip, ENC28J60"),(0,a.yg)("li",{parentName:"ul"},"IEEE 802.3TM Compatible Ethernet Controller"),(0,a.yg)("li",{parentName:"ul"},"Fully Compatible with 10/100/1000Base-T Networks"),(0,a.yg)("li",{parentName:"ul"},"Integrated MAC and 10Base-T PHY"),(0,a.yg)("li",{parentName:"ul"},"Supports One 10Base-T Port with Automatic Polarity Detection and Correction"),(0,a.yg)("li",{parentName:"ul"},"Supports Full and Half-Duplex modes"),(0,a.yg)("li",{parentName:"ul"},"SPI Interface with Clock Speeds up to 20 MHz"),(0,a.yg)("li",{parentName:"ul"},"Operating Temperature(\u2103): 0 ~ +70\u2103")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If you need it work under -40 ~ +85\u2103, please contact ",(0,a.yg)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")," for customization.")),(0,a.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/hardware_overview.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2460")," J1"),": RJ45 interface, It is connected to ENC28J60.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J1.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2461")," LED1"),": 3.3V Power Red LED, when you power the board, the led will be turned on.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/led.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2462")," U1"),": ENC28J60, Stand-Alone Ethernet Controller with SPI Interface, which converts SPI to Ethernet interface.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/U1.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2463")," H4"),": Azure Sphere(MT3620 Development Board) , Extention Header , H4")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H4.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2464")," H3"),": Azure Sphere(MT3620 Development Board) , Extention Header , H3")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H3.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2465")," H2"),": Azure Sphere(MT3620 Development Board) , Extention Header , H2")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H2.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2466")," H1"),": Azure Sphere(MT3620 Development Board) , Extention Header , H1")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H1.png",alt:null})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2467")," J2"),": UART3 Pin Header, It is connected to MT3620 GPIO66~GPIO69.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J2.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Pin Out")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The H1/H2/H3/H4 are the same as Azure Sphere board pin out.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Dimensions")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing1.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing2.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing3.png",alt:null})),(0,a.yg)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Home/Building/Facilities"),(0,a.yg)("li",{parentName:"ul"},"Automation"),(0,a.yg)("li",{parentName:"ul"},"Security"),(0,a.yg)("li",{parentName:"ul"},"Equipment Management"),(0,a.yg)("li",{parentName:"ul"},"Utilities"),(0,a.yg)("li",{parentName:"ul"},"Public Safety")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"To understand how Azure Sphere works in a real-world setting, consider ",(0,a.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere"},"Contoso, Ltds cenario"),".")),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Install Azure Sphere")),(0,a.yg)("p",null,"If you have an Azure Sphere development kit that has not yet been used, complete ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure-sphere/install/overview"},"these steps")," first to get up and running."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"MT3620 Ethernet Shield Library")),(0,a.yg)("p",null,"This sample C application demonstrates how you can ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/azure-sphere/network/connect-private-network"},"connect an Azure Sphere device to a private Ethernet network"),". ","It configures the Azure Sphere device to run a DHCP server and an SNTP server, and it also implements a basic TCP server. The steps below show how to verify this functionality by connecting your computer to this private network."),(0,a.yg)("p",null,"The DHCP and SNTP servers are managed by the Azure Sphere OS, according to the configuration provided by the application. These servers will start only after the application requests they do so, but they will continue to run even if the application stops."),(0,a.yg)("p",null,"The TCP server runs in the application process itself and will stop when the application stops. Note that this sample TCP server implementation is basic, for illustration only, and it does not authenticate or encrypt connections: you should replace it with your own production logic."),(0,a.yg)("p",null,"The sample uses the following Azure Sphere libraries and includes ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/azure-sphere/app-development/use-beta"},"beta APIs"),"."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Library"),(0,a.yg)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"log"),(0,a.yg)("td",{parentName:"tr",align:null},"Displays messages in the Visual Studio Device Output window during debugging")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"networking"),(0,a.yg)("td",{parentName:"tr",align:null},"Gets and sets network interface configuration")))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Current the MT3620 Ethernet Shield does not support the internet connection due to Microsoft software is not ready. It supports connect to PC only.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Hardware Connection")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"MT3620 development kits"),(0,a.yg)("th",{parentName:"tr",align:null},"MT3620 Ethernet Shield"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg",alt:"enter image description here"})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/ethernet_s.png",alt:"enter image description here"}))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html"},"Get One Now")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html"},"Get One Now"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Step 1. Connect MT3620 Ethernet Shield to Azure Sphere MT3620 Development board."),(0,a.yg)("li",{parentName:"ul"},"Step 2. Plug the USB cable to Azure Sphere MT3620 Development board and PC."),(0,a.yg)("li",{parentName:"ul"},"Step 3. Connect the network cable between MT3620 Ethernet board and PC.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/stack_with_azuresphere.png",alt:null})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"To build and run the sample")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Set up your Azure Sphere device and development environment as described in the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/azure-sphere/install/install"},"Azure Sphere documentation"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Even if you've performed this set up previously, ensure you have Azure Sphere SDK version 19.02 or above. In an Azure Sphere Developer Command Prompt, run ",(0,a.yg)("strong",{parentName:"p"},"azsphere show-version")," to check. Download and install the ",(0,a.yg)("a",{parentName:"p",href:"https://aka.ms/AzureSphereSDKDownload"},"latest SDK")," as needed.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Connect your Azure Sphere device to your PC by USB.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Enable ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/azure-sphere/quickstarts/qs-blink-application#prepare-your-device-for-development-and-debugging"},"application development"),", ","if you have not already done so:"),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("inlineCode",{parentName:"p"},"azsphere device prep-debug"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Package and deploy the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/azure-sphere/network/connect-private-network"},"board configuration image")," for the Microchip ENC286J60 Ethernet chip:"),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("inlineCode",{parentName:"p"},"azsphere image package-board-config --preset lan-enc28j60-isu0-int5 --output enc28j60-isu0-int5.imagepackage")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("inlineCode",{parentName:"p"},"azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Azure/azure-sphere-samples"},"Azure Sphere samples")," repo and find the PrivateEthernet sample.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"In Visual Studio, open PrivateEthernet.sln and press F5 to compile and build the solution and load it onto the device for debugging.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Leave the app running while you perform the following steps."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Troubleshooting")),(0,a.yg)("p",null,"If you see numerous errors in the Visual Studio Error List relating to missing headers and undefined identifiers, or if when building the app, you see the following error in the Visual Studio Build Output:"),(0,a.yg)("p",null,"   ",(0,a.yg)("inlineCode",{parentName:"p"},'error MSB6004: The specified task executable location "C:\\Program Files (x86)\\Microsoft Azure Sphere SDK\\\\SysRoot\\tools\\gcc\\arm-poky-linux-musleabi-gcc.exe" is invalid.')),(0,a.yg)("p",null,"Then it is likely you have an older version of the Azure Sphere SDK installed; ensure you have version 19.02 or newer."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Configure the Ethernet connection on your computer")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Open Settings and then click ",(0,a.yg)("strong",{parentName:"li"},"Network and Internet")," > ",(0,a.yg)("strong",{parentName:"li"},"Change adapter options"),".\u202f "),(0,a.yg)("li",{parentName:"ul"},"Right-click on your Ethernet adapter and select ",(0,a.yg)("strong",{parentName:"li"},"Properties"),"."),(0,a.yg)("li",{parentName:"ul"},"In the ",(0,a.yg)("strong",{parentName:"li"},"Ethernet Properties")," window, disable all items except for ",(0,a.yg)("strong",{parentName:"li"},"Internet Protocol Version 4 (TCP/IPv4)"),"."),(0,a.yg)("li",{parentName:"ul"},"Select ",(0,a.yg)("strong",{parentName:"li"},"Internet Protocol Version 4 (TCP/IPv4)"),", and then click the ",(0,a.yg)("strong",{parentName:"li"},"Properties")," button to launch the ",(0,a.yg)("strong",{parentName:"li"},"Internet Protocol Version 4 (TCP/IPv4) Properties")," window."),(0,a.yg)("li",{parentName:"ul"},'Check that "Obtain IP address automatically" is selected. (Previous versions of this sample required configuration of a static IP address at this point. That is no longer necessary because the application now provides a DHCP server.)'),(0,a.yg)("li",{parentName:"ul"},"Click ",(0,a.yg)("strong",{parentName:"li"},"OK")," to close the ",(0,a.yg)("strong",{parentName:"li"},"IPv4 properties window"),", then close the ",(0,a.yg)("strong",{parentName:"li"},"Ethernet Properties")," window."),(0,a.yg)("li",{parentName:"ul"},"Attach an Ethernet cable from the ENC286J60-H to the Ethernet connection on your computer.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If your computer is managed by policies that prevent it from being connected to multiple network interfaces at once, you may need to disable other network interfaces while using this sample.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The samples uses the IP address range 192.168.100.xxx. If you have another network adapter using the same range, then you will need to either modify the sample or disable the other network adapter temporarily.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Test the device's DHCP server")),(0,a.yg)("p",null,"Open a command prompt on your computer and type ",(0,a.yg)("strong",{parentName:"p"},"ipconfig"),". You should see that the DHCP server has issued the IP address 192.168.100.11 to your PC for its Ethernet connection:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"Ethernet adapter <name>:\n\n   Connection-specific DNS Suffix  . :\n   Link-local IPv6 Address . . . . . : fe80::8c67:be24:4d9a:d4bb%9\n   IPv4 Address. . . . . . . . . . . : 192.168.100.11\n   Subnet Mask . . . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . . . :\n")),(0,a.yg)("p",null,"You could also find, download and use a DHCP client test tool on your PC to inspect the DHCP server response in more detail - e.g. to look at the NTP server address(es) returned."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Test the device's SNTP server")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Ensure the device is ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/azure-sphere/install/configure-wifi"},"connected to Wi-Fi"),", so it can obtain time from a public NTP server. The device's own SNTP server won't respond until it knows the current time.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Open a command prompt on your computer and type ",(0,a.yg)("strong",{parentName:"p"},"w32tm /stripchart /computer:192.168.100.10 /dataonly /samples:1"),". This invokes the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings"},"Windows Time tool")," to query the device's SNTP server and to display the calculated difference between your computer's time and the device's time:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"Tracking 192.168.100.10 [192.168.100.10:123].\nCollecting 1 samples.\nThe current time is 06/02/2019 14:18:09.\n14:18:09, +00.0349344s\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If the SNTP server isn't running or doesn't respond, then you may see the following output. Check that app is running and that Wi-Fi is configured."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"Tracking 192.168.100.10 [192.168.100.10:123].\nCollecting 1 samples.\nThe current time is 06/02/2019 14:16:50.\n14:16:50, error: 0x800705B4\n")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Test the application's TCP server")),(0,a.yg)("p",null,'Ensure the sample app is still running on your Azure Sphere device. Then, on your computer, use a terminal application to open a raw TCP connection to the Azure Sphere application\'s TCP server at 192.168.100.10 port 11000. You can open this connection with a third-party terminal application such as PuTTY (using a "raw" connection type), or with the built-in Telnet client for Windows.'),(0,a.yg)("p",null,"To use the built-in Telnet client for Windows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Open Control Panel and click ",(0,a.yg)("strong",{parentName:"li"},"Programs and Features")," > ",(0,a.yg)("strong",{parentName:"li"},"Turn Windows features on or off")," to launch the ",(0,a.yg)("strong",{parentName:"li"},"Windows Features")," window."),(0,a.yg)("li",{parentName:"ul"},"Ensure ",(0,a.yg)("strong",{parentName:"li"},"Telnet Client")," is selected and click ",(0,a.yg)("strong",{parentName:"li"},"OK"),"."),(0,a.yg)("li",{parentName:"ul"},"Open a command prompt and type ",(0,a.yg)("strong",{parentName:"li"},"telnet 192.168.100.10 11000"),".")),(0,a.yg)("p",null,"The characters that you type will render in the debug console in Visual Studio\u2013either immediately or when you enter a newline\u2013showing they have been received by the example TCP server on the MT3620.\u202f Furthermore, when you enter a newline, the MT3620 will send a string back to the terminal, which says:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'Received "<last-received-line>"\n')),(0,a.yg)("p",null,'Note that this sample server has a simple 16 character input buffer. If you send more than this, then the Output window in Visual Studio may show: "Input data overflow. Discarding 16 characters."'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Troubleshooting")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'If you run the sample without the ENC28J60 attached (or improperly attached), then the sample app will exit immediately. The debug output will show an error such as "ERROR: Networking_SetStaticIp: 5 (I/O error)" just before it exits. If you subsequently attach or fix the connection to the ENC28J60, then you must also reset the MT3620.'),(0,a.yg)("li",{parentName:"ul"},'If you run the sample without the board configuration being loaded onto the device, then the sample app will exit immediately. The debug output will show an error such as "ERROR: Networking_SetStaticIp: 2 (No such file or directory)" just before it exits.')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Removing the Ethernet board configuration")),(0,a.yg)("p",null,"If you no longer require Ethernet, for example because you wish to use your board for a different project, you must manually remove the Ethernet board configuration image:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Find the installed image with type 'Board config', and note its component ID:"),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("inlineCode",{parentName:"p"},"azsphere device image list-installed"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Delete this image:"),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("inlineCode",{parentName:"p"},"azsphere device sideload delete --componentid <component ID>"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Press the reset button on the MT3620 dev board."))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note:")," This sample uses ISU0 (I2C/SPI/UART port 0) on the MT3620, which is also used by other samples. Other samples can be adapted to use a different ISU port. For now, it\u2019s not possible to adapt this Private Ethernet sample to use another ISU port."),(0,a.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.yg)("h2",{id:"resource"},"Resource"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/MT3620%20Ethernet%20Shield_v1.0_SCH_181220.pdf"},"MT3620 Ethernet Shield v1.0")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Eagle]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip"},"MT3620 Ethernet Shield v1.0")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[Mechanical Drawing]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/103990403%2C%20MT3620%20Ethernet%20Shield%20v1.0.pdf"},"MT3620 Ethernet Shield Mechanical Drawing")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[DataSheet]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/ENC28J60.pdf"},"ENC28J60 Datasheet")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[FAQ Web]")," ",(0,a.yg)("a",{parentName:"li",href:"https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere"},"Azure Sphere Forum")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"[FAQ Web]")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue"},"Azure Sphere Github issues"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);