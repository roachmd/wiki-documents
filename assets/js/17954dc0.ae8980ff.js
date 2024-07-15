"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85388],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(n),y=r,u=g["".concat(l,".").concat(y)]||g[y]||c[y]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},91526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={description:"H28K Boot Tutorial",title:"Install Operating System",keywords:["Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/H28K-install-system",last_update:{date:"11/24/2023",author:"Parker"}},i=void 0,s={unversionedId:"Network/RK_Devices/H28K/H28K-install-system",id:"Network/RK_Devices/H28K/H28K-install-system",title:"Install Operating System",description:"H28K Boot Tutorial",source:"@site/docs/Network/RK_Devices/H28K/H28K-install-system.md",sourceDirName:"Network/RK_Devices/H28K",slug:"/H28K-install-system",permalink:"/H28K-install-system",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/RK_Devices/H28K/H28K-install-system.md",tags:[],version:"current",lastUpdatedBy:"Parker",lastUpdatedAt:1700784e3,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{description:"H28K Boot Tutorial",title:"Install Operating System",keywords:["Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/H28K-install-system",last_update:{date:"11/24/2023",author:"Parker"}},sidebar:"ProductSidebar",previous:{title:"H28K Introduction",permalink:"/H28K_Datasheet"},next:{title:"The Things Indoor Gateway",permalink:"/The-Things-Indoor-Gateway"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Select the system you need for H28K",id:"select-the-system-you-need-for-h28k",level:2},{value:"Notes &amp; Instructions",id:"notes--instructions",level:3},{value:'<span id="jump1">Flash QWRT to the TF card</span>',id:"flash-qwrt-to-the-tf-card",level:3},{value:"Preparation",id:"preparation",level:4},{value:"Procedure",id:"procedure",level:4},{value:'<span id="jump2">Flash QWRT to eMMC</span>',id:"flash-qwrt-to-emmc",level:3},{value:"Preparation",id:"preparation-1",level:4},{value:"Procedure",id:"procedure-1",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/H28K/Overview.jpg"})),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/LinkStar-H28K-0208-p-5848.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"The LinkStar-H28K has two Gigabit network ports that use PCIE/RGMII gigabit technology and a Quad-core chip.  It has LPDDR4X 4GB memory and 8GB eMMC storage that can be expanded up to 512 GB with a TF card. It also has a 5V-12V Type-C connection for PD (Power Delivery) capability.  In this wiki we will show you how to install operating system with TF card or eMMC."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/H28K/30.png"})),(0,r.yg)("h2",{id:"select-the-system-you-need-for-h28k"},"Select the system you need for H28K"),(0,r.yg)("p",null,"The H28K supports Qwrt operating system. In this section, we will bring you the installation method for Qwrt system."),(0,r.yg)("h3",{id:"notes--instructions"},"Notes & Instructions"),(0,r.yg)("p",null,"H28K has two types of storage, one is TF card storage and the other is eMMC storage. Both memories are available for flash memory systems."),(0,r.yg)("p",null,"In this chapter, we can use the TF card with a card reader to flash the system to the TF card. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#jump1"},"Flash QWRT to the TF card"))),(0,r.yg)("p",null,"We can also flash the system to the eMMC that comes with the H28K. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#jump2"},"Flash QWRT to eMMC"))),(0,r.yg)("p",null,"When a TF card is inserted in the H28K, the system in the TF card is the one that boots up when the system is turned on, as the ",(0,r.yg)("strong",{parentName:"p"},"TF has priority to boot"),"."),(0,r.yg)("h3",{id:"flash-qwrt-to-the-tf-card"},(0,r.yg)("span",{id:"jump1"},"Flash QWRT to the TF card")),(0,r.yg)("h4",{id:"preparation"},"Preparation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Windows/MacOS PC"),(0,r.yg)("li",{parentName:"ul"},"USB - C data cable"),(0,r.yg)("li",{parentName:"ul"},"A TF card"),(0,r.yg)("li",{parentName:"ul"},"A card reader"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.balena.io/etcher/"},"balenaEtcher")," \u2014\u2014 Please download and install balenaEtcher, we will use this software to flash the system to a TF card."),(0,r.yg)("li",{parentName:"ul"},"QWRT package")),(0,r.yg)("p",null,"Please prepare the equipment required above, firmware update packages can be downloaded by clicking the download button below."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Download"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"balenaEtcher"),(0,r.yg)("td",{parentName:"tr",align:null},"ISO Burner Tool"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"QWRT R24.01.23"),(0,r.yg)("td",{parentName:"tr",align:null},"Based on OpenWRT"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip"},"Download"))))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"When using a TF card with H28K, it is important to note that it may be incompatible with some ",(0,r.yg)("strong",{parentName:"p"},"high-speed cards"),". If you are using a high speed card, you may experience data loading errors, boot-up errors or malfunctions during power-up and loading of the system due to the speed of the card."),(0,r.yg)("p",{parentName:"admonition"},"The advantage of using a TF card is that different networks can be configured with different TF cards. It is also possible to have multiple systems - different systems can be used by replacing different TF cards.")),(0,r.yg)("h4",{id:"procedure"},"Procedure"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Connect the TF to the PC"),(0,r.yg)("p",null,"Please put the TF into your prepared card reader and connect it to your PC."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Flash the system onto a TF card"),(0,r.yg)("p",null,"Open the balenaEtcher which has been installed in advance."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/H28K/18.png"})),(0,r.yg)("p",null,"Select the QWRT firmware you downloaded, it should end in ",(0,r.yg)("strong",{parentName:"p"},".img"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/H28K/19.png"})),(0,r.yg)("p",null,"Select the drive you want to flash the system to."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/H28K/20.png"})),(0,r.yg)("br",null),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/H28K/21.png"})),(0,r.yg)("p",null,"Click the ",(0,r.yg)("strong",{parentName:"p"},"Flash")," button and the software will flash the system into your TF."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/H28K/22.png"})),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Some computers may prompt whether the USB device is not recognised after flashing the system and whether to format it, please ",(0,r.yg)("strong",{parentName:"p"},"do not")," reformat the card or the system inside will be erased.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Boot QWRT from the TF card"),(0,r.yg)("p",null,"Remove the TF card from the card reader and insert it into the TF card slot of the H28K."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/H28K/23.png"})),(0,r.yg)("p",null,"Then power up the H28K, you can choose to power it via ",(0,r.yg)("strong",{parentName:"p"},"USB-C-5V"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/H28K/24.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 4.")," Manage the QWRT backend"),(0,r.yg)("p",null,"Use a network cable to connect to the ETH0 network port of the H28K. Then enter the address: ",(0,r.yg)("inlineCode",{parentName:"p"},"192.168.1.1")," into your browser to access the admin backend."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"ETH0 is the LAN port and the ETH1 port is WAN ports. If you want to manage H28K's QWRT via a network cable, then connect the network cable to ETH0.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/H28K/15.png"})),(0,r.yg)("p",null,"The initial account and password for the system are as follows."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"account: root\npassword: password\n")),(0,r.yg)("p",null,"Congratulations, you have now successfully installed QWRT via TF card."),(0,r.yg)("h3",{id:"flash-qwrt-to-emmc"},(0,r.yg)("span",{id:"jump2"},"Flash QWRT to eMMC")),(0,r.yg)("h4",{id:"preparation-1"},"Preparation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Windows PC"),(0,r.yg)("li",{parentName:"ul"},"USB - C data cable"),(0,r.yg)("li",{parentName:"ul"},"QWRT package ")),(0,r.yg)("p",null,"Please prepare the equipment required above, firmware update packages can be downloaded by clicking the download button below."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Download"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"QWRT R24.01.23"),(0,r.yg)("td",{parentName:"tr",align:null},"Based on OpenWRT"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Flash to eMMC tool & driver"),(0,r.yg)("td",{parentName:"tr",align:null},"V5.12"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip"},"Download"))))),(0,r.yg)("h4",{id:"procedure-1"},"Procedure"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Install the driver"),(0,r.yg)("p",null,"Go to the ",(0,r.yg)("strong",{parentName:"p"},"DriverAssitant_v5.12")," folder and double click to open the ",(0,r.yg)("strong",{parentName:"p"},"DriverInstall.exe")," file to install the driver."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/2.png"})),(0,r.yg)("p",null,'In the driver installation software that launches, click on "\u9a71\u52a8\u5b89\u88c5" (Driver Installation).'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/3.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Put the device into Maskrom mode"),(0,r.yg)("p",null,"Go to the ",(0,r.yg)("strong",{parentName:"p"},"RKDevTool_Release_v2.84")," folder and double click to open the ",(0,r.yg)("strong",{parentName:"p"},"RKDevTool.exe")," file."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/4.png"})),(0,r.yg)("p",null,"Press the ",(0,r.yg)("strong",{parentName:"p"},"Update keyhole")," button\uff08Red box number one\uff09 continuously with the card pick-up pin and do not release it."),(0,r.yg)("p",null,"Then keep your hands on the H28K and connect it (Red box number two) to your computer using a USB-C type cable. Afterwards you can release the ",(0,r.yg)("strong",{parentName:"p"},"Update keyhole")," button."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/H28K/5.png"})),(0,r.yg)("p",null,'At this point watch the software and it will show "Found One MASKROM Device".'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/6.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Erase firmware"),(0,r.yg)("p",null,'Click on "Upgrade Firmware", then click on "Firmware" and select the ',(0,r.yg)("strong",{parentName:"p"},"rk3528_spl_loader_v1.05.104.bin")," file in the file directory."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/7.png"})),(0,r.yg)("br",null),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/8.png"})),(0,r.yg)("p",null,'After importing the file, click on "EraseFlash".'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/9.png"})),(0,r.yg)("p",null,'Wait for the operation to complete and click "\u786e\u5b9a" (OK).'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/10.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 4.")," Flash QWRT"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"if you follow along the steps from above your H28K should be still in MASKROOM Mode, if not please repeat and follow along the steps from ",(0,r.yg)("strong",{parentName:"p"},"Step 2")," again.")),(0,r.yg)("p",null,'Click on "Download Image" in the top left corner of the software, then select the ',(0,r.yg)("strong",{parentName:"p"},"rk3528_spl_loader_v1.05.104.bin")," file for the first ",(0,r.yg)("strong",{parentName:"p"},"Boot")," option line."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/11.png"})),(0,r.yg)("p",null,"Then in the second line of ",(0,r.yg)("strong",{parentName:"p"},"system")," options, select the system image for QWRT. It should be a file ending in ",(0,r.yg)("strong",{parentName:"p"},".img"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/12.png"})),(0,r.yg)("p",null,'Then click on the "Run" button below.'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/13.png"})),(0,r.yg)("p",null,'Wait for the "Download image OK" prompt, then the system has been successfully installed into H28K\'s eMMC.'),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/14.png"})),(0,r.yg)("p",null,"Once the system flash is complete, the H28K should automatically reboot and once rebooted it will enter the QWRT system."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 5.")," Manage the QWRT backend"),(0,r.yg)("p",null,"Use a network cable to connect to the ETH0 network port of the H28K. Then enter the address: ",(0,r.yg)("inlineCode",{parentName:"p"},"192.168.1.1")," into your browser to access the admin backend."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"ETH1 is the WAN port and the ETH0 is the LAN port. If you want to manage H28K's QWRT via a network cable, then connect the network cable to a LAN port.")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/15.png"})),(0,r.yg)("p",null,"The initial account and password for the system are as follows."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"account: root\npassword: password\n")),(0,r.yg)("p",null,"Congratulations, you have now successfully installed QqWRT into eMMC."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/H28K/30.png"})),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("p",null,"H28K is open source hardware.Download links to relevant materials."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Download"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"QWRT R24.01.23"),(0,r.yg)("td",{parentName:"tr",align:null},"Based on OpenWRT"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Flash to eMMC tool & driver"),(0,r.yg)("td",{parentName:"tr",align:null},"V5.12"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"balenaEtcher"),(0,r.yg)("td",{parentName:"tr",align:null},"ISO Burner Tool"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"H28K-SCH"),(0,r.yg)("td",{parentName:"tr",align:null},"H28K schemetics"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/H28K/Open_source/H28K-SCH.zip"},"Download"))))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);