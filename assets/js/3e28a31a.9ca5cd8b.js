"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91391],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var l=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,l,o=function(e,t){if(null==e)return{};var r,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=l.createContext({}),u=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),g=u(r),p=o,y=g["".concat(s,".").concat(p)]||g[p]||h[p]||i;return r?l.createElement(y,n(n({ref:t},d),{},{components:r})):l.createElement(y,n({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[g]="string"==typeof e?e:o,n[1]=a;for(var u=2;u<i;u++)n[u]=r[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,r)}p.displayName="MDXCreateElement"},12567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var l=r(58168),o=(r(96540),r(15680));const i={description:"Brushless_Motor_Shield_TB6605FTG",title:"Brushless Motor Shield TB6605FTG",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Brushless_Motor_Shield_TB6605FTG",last_update:{date:"01/30/2023",author:"Eico"},no_comments:!1},n=void 0,a={unversionedId:"Top_Brand/Arduino/shield/Brushless_Motor_Shield_TB6605FTG",id:"Top_Brand/Arduino/shield/Brushless_Motor_Shield_TB6605FTG",title:"Brushless Motor Shield TB6605FTG",description:"Brushless_Motor_Shield_TB6605FTG",source:"@site/docs/Top_Brand/Arduino/shield/Brushless_Motor_Shield_TB6605FTG.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Brushless_Motor_Shield_TB6605FTG",permalink:"/Brushless_Motor_Shield_TB6605FTG",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Brushless_Motor_Shield_TB6605FTG.md",tags:[],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Brushless_Motor_Shield_TB6605FTG",title:"Brushless Motor Shield TB6605FTG",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Brushless_Motor_Shield_TB6605FTG",last_update:{date:"01/30/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Motor Shield V2.0",permalink:"/Motor_Shield_V2.0"},next:{title:"Music Shield V2.2",permalink:"/Music_Shield_V2.2"}},s={},u=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pinout",id:"pinout",level:3},{value:"Screw terminal definition",id:"screw-terminal-definition",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Materials required",id:"materials-required",level:3},{value:"Hardware connection",id:"hardware-connection",level:3},{value:"Software",id:"software",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},g="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(g,(0,l.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/105030027-preview-wiki.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"The Brushless Motor Shield (TB6605FTG) is a brushless motor driver for Arduino compatible system. It supports 9V ~ 24V DC input and can continuously and continuously output large current to drive the brushless motor. With the onboard potentiometer, you can adjust the motor speed easily. This shield offers a variety of modes to choose from, you can use the four onboard switches to switch functions.  "),(0,o.yg)("p",null,"With the onboard Grove I2C interface, you can work with other grove modules with this shield easily, for instance, you can use a ","[Grove - LCD RGB Backlight]","(Grove - LCD RGB Backlight) to display the Motor speed."),(0,o.yg)("p",null,"We also released the ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html"},"TB6605 BLDC Motor Kit for Arduino"),", which is based on this shield and contains an LCD and a high-quality brushless motor to display the Motor speed."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("a",{href:"https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,o.yg)("h2",{id:"feature"},"Feature"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Wide input voltage range: 9V ~ 24V"),(0,o.yg)("li",{parentName:"ul"},"I2C interface"),(0,o.yg)("li",{parentName:"ul"},"Hardware adjustable speed control(On-board Potentiometer)"),(0,o.yg)("li",{parentName:"ul"},"Multiple modes available: CW/CWW, Brake/Normal, Sine wave/Square wave")),(0,o.yg)("h2",{id:"specification"},"Specification"),(0,o.yg)("table",{align:"center"},(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h3",null,"Parameter")),(0,o.yg)("td",null,(0,o.yg)("h3",null,"Value"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"Supply voltage")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"3.3V / 5V"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"DC Power Input")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"9V ~ 24V"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"Max Output Current")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"0.02A"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"Driving mode")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Sine wave/Square wave"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"Motor Interface")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Screw terminal"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"External Grove Interface")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"I2C"))))),(0,o.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.yg)("h3",{id:"pinout"},"Pinout"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("a",{href:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg"}))),(0,o.yg)("h3",{id:"screw-terminal-definition"},"Screw terminal definition"),(0,o.yg)("table",{align:"center"},(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h3",null,"Brushless Motor Shield")),(0,o.yg)("td",null,(0,o.yg)("h3",null,"Brushless Motor")),(0,o.yg)("td",null,(0,o.yg)("h3",null,"wire color"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"5V")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Logic power supply positive")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Red"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"GND")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Logic power ground")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Black"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"HU+")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Hall sensor Phase U")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Orange"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"HV+")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Hall sensor Phase V")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Dark Green"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"HW+")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Hall sensor Phase W")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Dark Blue"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"U")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Coil Phase U")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Yellow"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"V")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Coil Phase V")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Light Green"))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("h4",null,"W")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Coil Phase W")),(0,o.yg)("td",null,(0,o.yg)("h4",null,"Light Blue"))))),(0,o.yg)("div",{align:"center"},(0,o.yg)("b",null,"Table 1."),(0,o.yg)("i",null,"Wiring Map")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"The wiring color may be different if you are not using the 42BLF01 brushless motor, please connect according to the specific situation")),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("h3",{id:"materials-required"},"Materials required"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html"},"Brushless Motor Shield (TB6605FTG) x1")),(0,o.yg)("li",{parentName:"ul"},"[Grove - LCD RGB Backlight x1]","(Grove - LCD RGB Backlight)"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html"},"Arduino or Seeedunio x1")),(0,o.yg)("li",{parentName:"ul"},"Brushless Motor x1")),(0,o.yg)("p",null,"Or you can just use our ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html"},"TB6605FTG Brushless Motor Kit for Arduino"),", this kit contains Brushless Motor Shield, 42BLF01 brushless motor, and a Grove - LCD RGB Backlight."),(0,o.yg)("h3",{id:"hardware-connection"},"Hardware connection"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 1.")," Connect the Brushless Motor to the Screw terminal of the Brushless Motor Shield, please refer to the ",(0,o.yg)("strong",{parentName:"p"},"Table 1."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Connect the Grove - LCD RGB Backlight to the Grove I2C port on the Brushless Motor Shield.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 3.")," Plug the Brushless Motor Shield into your Arduino or Seeeduino.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 4.")," Power the shield with DC jack and power the Arduino via USB cable."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("a",{href:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png"}))))),(0,o.yg)("h3",{id:"software"},"Software"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 1."),(0,o.yg)("br",{parentName:"p"}),"\n","Download the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/BLDC_Motor_Shield_TB6605"},"BLDC Motor Shield (TB6605) lib")," Library from Github.\nDownload the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip"},"Grove-LCD RGB Backlight Library")," Library from Github.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it via the path: ",(0,o.yg)("strong",{parentName:"p"},"File --\x3e Examples --\x3eBLDC Motor Shield (TB6605)--\x3e TB6605_demo"),"."))),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("a",{href:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg"}))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,o.yg)("admonition",{title:"success",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If everything goes well, you can see the DC motor run and the LCD will show the speed. Now you can rotate the potentiometer to control the speed of the motor.  ")),(0,o.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"[Zip]")," ",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip"},"BLDC Motor Shield (TB6605) Eagle Files"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/42BLF01-Specification.pdf"},"42BLF01 Brushless Motor-Specification")))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);