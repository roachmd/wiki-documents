"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13873],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,y=c["".concat(i,".").concat(g)]||c[g]||d[g]||r;return n?o.createElement(y,l(l({ref:t},u),{},{components:n})):o.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(58168),a=(n(96540),n(15680));const r={description:"SenseCAP M2 Data Only Quick Start",title:"SenseCAP M2 Data Only Quick Start",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},l="SenseCAP M2 Data Only Quick Start",s={unversionedId:"Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start",id:"Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start",title:"SenseCAP M2 Data Only Quick Start",description:"SenseCAP M2 Data Only Quick Start",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway",slug:"/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"SenseCAP M2 Data Only Quick Start",title:"SenseCAP M2 Data Only Quick Start",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP M2 Data Only Overview",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Overview"},next:{title:"SenseCAP M2 Data Only Local Console",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console"}},i={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sensecap-m2-data-only-quick-start"},"SenseCAP M2 Data Only Quick Start"),(0,a.yg)("p",null,"Below you will find the required steps to easily set up your hotspot in a few minutes!"),(0,a.yg)("h1",{id:"video-instruction"},(0,a.yg)("strong",{parentName:"h1"},"Video Instruction")),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"step-1-install-helium-and-sensecap-app-and-create-accounts"},(0,a.yg)("strong",{parentName:"h1"},"Step 1: Install Helium and SenseCAP App and Create Accounts")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Install Helium Hotspot and SenseCAP MX Hotspot App"),(0,a.yg)("li",{parentName:"ul"},"Search and download \u201cHelium Hotspot\u201d and \u201cSenseCAP MX Hotspot\u201d from the Apple Store or Google Play and install these two Apps on your phone.")),(0,a.yg)("p",null,"\u201c",(0,a.yg)("strong",{parentName:"p"},"Helium Hotspot"),"\u201d App is the official Helium App and is necessary for Helium wallet authentication. You could use it to register and manage Helium wallet and make Hotspot and HNT transactions."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/helium-app-logos-1.webp",alt:"Helium Hotspot App"})),(0,a.yg)("p",null,"\u201c",(0,a.yg)("strong",{parentName:"p"},"SenseCAP MX Hotspot"),"\u201d App is the official SenseCAP hotspot App developed by SenseCAP MX Team. You could use it to register and manage your SenseCAP hotspot."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/SenseCAP-Hotspot-App.png",alt:"SenseCAP Hotspot App"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Create a Helium Wallet in Helium App")),(0,a.yg)("p",null,"When generating a new Helium wallet, you will be shown a 12 words password. Please do markdown or back up the 12 words password in order and keep it in a safe place since the 12 words password can NEVER be recovered if it has been lost."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Create an Account in SenseCAP MX Hotspot App")),(0,a.yg)("p",null,"Link the Helium Wallet to your SenseCAP Account, and you will be ready to add the new hotspot."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/deeplink-1.png",alt:"Deeplink Helium Wallet App"})),(0,a.yg)("h1",{id:"how-to-download-helium-app-and-create-a-wallet"},(0,a.yg)("strong",{parentName:"h1"},"How to Download Helium App and Create a Wallet")),(0,a.yg)("h1",{id:"how-to-download-sensecap-and-create-account"},(0,a.yg)("strong",{parentName:"h1"},"How to Download SenseCAP and Create Account")),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"step-2-set-up-sensecap-m2-and-connect-to-the-internet"},(0,a.yg)("strong",{parentName:"h1"},"Step 2: Set Up SenseCAP M2 and Connect to the Internet")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Set Up SenseCAP M2")),(0,a.yg)("p",null,"Connect the antenna, power adaptor and ethernet cable (not necessary) to the hotspot and power it up."),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"power LED will")," show in ",(0,a.yg)("strong",{parentName:"p"},"red"),", and in about 15s (if you use PoE to power, this waiting time will be a little longer), the indicator on the top will flash ",(0,a.yg)("strong",{parentName:"p"},"green"),", indicating that the hotspot is booting."),(0,a.yg)("p",null,"After booting in about 1 min, the indicator will show solid ",(0,a.yg)("strong",{parentName:"p"},"green")," if the hotspot has been connected to the internet via an ethernet cable; or show solid ",(0,a.yg)("strong",{parentName:"p"},"blue")," when waiting for further Wi-Fi configuration."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png",alt:"SenseCAP M2 Quick Start"})),(0,a.yg)("h1",{id:"firmware-update"},(0,a.yg)("strong",{parentName:"h1"},"Firmware Update")),(0,a.yg)("p",null,"During the first boot, it is suggested to connect to the hotspot to the internet via the ethernet cable and wait about 30 minutes to finish the firmware update before you take further steps. (You could also do this step after the hotspot is connected to the Wi-Fi network)."),(0,a.yg)("p",null,"The firmware update is automatic and will take 10-30 minutes. The indicator will change from flashing ",(0,a.yg)("strong",{parentName:"p"},"orange")," to solid ",(0,a.yg)("strong",{parentName:"p"},"green")," during the update process one or two times. The hotspot will restart after the firmware update is completed, and the indicator will keep solid ",(0,a.yg)("strong",{parentName:"p"},"green.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NOTE"),": To process further steps before the hotspot has been updated to the latest firmware will result in an unexpected error and could not process on, please be patient with the update process and do not power off or disconnect the internet."),(0,a.yg)("h1",{id:"poe-connection"},(0,a.yg)("strong",{parentName:"h1"},"PoE Connection")),(0,a.yg)("p",null,"SenseCAP M2 supports PoE (Power on Ethernet) and is compatible with IEEE 802.3 af standard. You will need to have an extra PoE switch that provides 40V-57V DC power as a PSE (Power Sourcing Equipment) if your modem/router does not support PoE."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png",alt:"SenseCAP M2 POE Connection Setup"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Connect the Hotspot via Bluetooth in SenseCAP Hotspot App")),(0,a.yg)("p",null,"Press the button for 5s until the blue indicator flashes slowly to enter configuration mode and follow the instruction in App to connect the hotspot."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-setup-app-scaled.jpg",alt:"SenseCAP M2 Setup - App"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NOTE"),': Please choose " ',(0,a.yg)("strong",{parentName:"p"},"SenseCAP M2 (Data-Only)"),'" for SenseCAP M2 Data Only Hotspot. If you have more than one hotspot around, you could identify the hotspot with the 6-figure MAC address under the hotspot name.'),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Set up the Wi-Fi Connection")),(0,a.yg)("p",null,"Click \u201cScan Networks\u201d, select the Wi-Fi, and enter the password; or click \u201cUse Ethernet Instead\u201d if you already use an ethernet cable."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi.png",alt:"SenseCAP M2 Wifi Setup"})),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"step-3-helium-hotspot-onboarding-and-assert-location"},(0,a.yg)("strong",{parentName:"h1"},"Step 3: Helium Hotspot Onboarding and Assert Location")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add the Hotspot to the Helium Network")),(0,a.yg)("p",null,"Please follow the App instructions to add the hotspot to Helium Network."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NOTE"),": Please note that the onboarding and location assertion fees are NOT included in the product. You will need 1,000,000 Helium Data Credits ($10) for the onboarding fee and 500,000 Helium Data Credits ($5) for the location asserting fee in your wallet.\nYou will need to swap Helium HNT for Credits within the Helium Wallet to obtain the Data Credits and these will be deducted automatically onboard. Please make sure you have enough Helium Data Credit in the Wallet before you proceed with the onboarding process."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Assert Hotspot Location")),(0,a.yg)("p",null,"Please follow the App instructions, choose the actual placement location on the map, and assert the location."),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"your-sensecap-m2-is-ready-to-go-welcome-to-the-peoples-network"},(0,a.yg)("strong",{parentName:"h1"},"Your SenseCAP M2 is ready to go! Welcome To The People's Network!")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp",alt:"Longfi"})))}d.isMDXComponent=!0}}]);