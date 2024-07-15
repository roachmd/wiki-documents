"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91315],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var o=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=u(r),p=i,y=g["".concat(l,".").concat(p)]||g[p]||d[p]||n;return r?o.createElement(y,s(s({ref:t},c),{},{components:r})):o.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[g]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<n;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},14093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var o=r(58168),i=(r(96540),r(15680));const n={description:"reRouter Guide",title:"reRouter Guide",keywords:["reRouter"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reRouter_Intro",last_update:{date:"10/16/2023",author:"Kasun Thushara"}},s=void 0,a={unversionedId:"Network/RaspberryPi_Devices/reRouter/reRouter_Intro",id:"Network/RaspberryPi_Devices/reRouter/reRouter_Intro",title:"reRouter Guide",description:"reRouter Guide",source:"@site/docs/Network/RaspberryPi_Devices/reRouter/reRouter_Intro.md",sourceDirName:"Network/RaspberryPi_Devices/reRouter",slug:"/reRouter_Intro",permalink:"/reRouter_Intro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/RaspberryPi_Devices/reRouter/reRouter_Intro.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1697414400,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{description:"reRouter Guide",title:"reRouter Guide",keywords:["reRouter"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reRouter_Intro",last_update:{date:"10/16/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"LoRaWAN Using Wio-E5 on PlatformIO",permalink:"/platformio_wio_e5"},next:{title:"reRouter Introduction",permalink:"/Raspberry-OpenWrt-Getting-Started"}},l={},u=[{value:"Getting Started with reRouter",id:"getting-started-with-rerouter",level:2},{value:"Application",id:"application",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:u},g="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,o.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png",style:{width:500,height:"auto"}})),(0,i.yg)("p",null,"This Mini Router is equipped with dual Gigabit Ethernet ports and dual USB 3.0 ports, making it suitable for soft router applications, while keeping the hardware to a minimum. We have pre-installed a Raspberry Pi Compute Module 4 with 4GB RAM and 32GB eMMC to enable fast boot-up times and a smooth overall experience."),(0,i.yg)("h2",{id:"getting-started-with-rerouter"},"Getting Started with reRouter"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{class:"table-nobg"},(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("th",{class:"table-trnobg"},"Getting Started with OpenWrt on Your Router"),(0,i.yg)("th",{class:"table-trnobg"},"reRouter carrier board - Hardware Overview")),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mini_router.png",style:{width:300,height:"auto"}}))),(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{sawakentyle:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/thumb.png",style:{width:300,height:"auto"}})))),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.yg)("font",{size:"2"},"In this wiki, explore OpenWrt\u2014an open-source Linux OS for routers and embedded devices. It offers enhanced features, performance, and security, with a customizable filesystem and package management. Accessing the router presents a beautiful, interactive dashboard. ")),(0,i.yg)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.yg)("font",{size:"2"},"In this wiki, explore the hardware overview of a small-scale router\u2014the Dual Gigabit Carrier Board powered by Raspberry Pi Compute Module 4. With Dual Gigabit Ethernet ports, USB 3.0 ports, and various I/O peripherals, it's ideal for soft router applications while maintaining a compact form factor. Suitable for HTPC makers, Linux developers, and Raspberry Pi users. "))),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Raspberry-OpenWrt-Getting-Started/"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,i.yg)("h2",{id:"application"},"Application"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{class:"table-nobg"},(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("th",{class:"table-trnobg"},"Getting Started with OpenWRT"),(0,i.yg)("th",{class:"table-trnobg"},"Plex Media Server"),(0,i.yg)("th",{class:"table-trnobg"},"Mender Usage")),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png",style:{width:300,height:"auto"}}))),(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg",style:{width:300,height:"auto"}}))),(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{sawakentyle:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/mender.png",style:{width:300,height:"auto"}})))),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.yg)("font",{size:"2"},"In this wiki, we provide an in-depth view of OpenWrt, discussing its features in the GUI. Explore how to use OpenWrt as a soft router and a WiFi access point.")),(0,i.yg)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.yg)("font",{size:"2"},"This guide explains setting up Plex Media Server as a Docker container on Seeed OpenWrt firmware. With Plex, you can stream your local media files globally. OpenWrt can run on the ODYSSEY \u2013 X86 Board or the Dual Gigabit Ethernet Carrier Board for Raspberry Pi Compute Module 4. ")),(0,i.yg)("td",{class:"table-trnobg",style:{textAlign:"justify"}},(0,i.yg)("font",{size:"2"},"In this wiki, set up the Mender Client on a Dual Gigabit Ethernet Carrier Board for Raspberry Pi Compute Module 4 and receive OTA updates from a Hosted or Self-Hosted Mender Server. "))),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/OpenWrt-Getting-Started/"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/OpenWrt-Plex-Media-Server-on-Docker/"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Mender-Client-dual-GbE-CM4/"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,i.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"We have a task list for updating this page, which is categorized under our ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"contributor project"),", as we are dedicated to enhancing the user experience and providing better support through the development of our wiki platform."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962991"},"Your contribution to this page")," is essential to us! We really value your input and would greatly appreciate your assistance in generating ideas.")),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);