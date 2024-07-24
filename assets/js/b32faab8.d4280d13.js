"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58470],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>m});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||y[d]||n;return r?a.createElement(m,l(l({ref:t},g),{},{components:r})):a.createElement(m,l({ref:t},g))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(58168),o=(r(96540),r(15680));const n={description:"Grove Starter Kit for IoT based on Raspberry Pi",title:"Grove Starter Kit for IoT based on Raspberry Pi",keywords:["Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",last_update:{date:"2/15/2023",author:"jianjing Huang"}},l=void 0,i={unversionedId:"Top_Brand/Raspberry_Pi/Kit/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",id:"Top_Brand/Raspberry_Pi/Kit/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",title:"Grove Starter Kit for IoT based on Raspberry Pi",description:"Grove Starter Kit for IoT based on Raspberry Pi",source:"@site/docs/Top_Brand/Raspberry_Pi/Kit/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi.md",sourceDirName:"Top_Brand/Raspberry_Pi/Kit",slug:"/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",permalink:"/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Kit/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Grove Starter Kit for IoT based on Raspberry Pi",title:"Grove Starter Kit for IoT based on Raspberry Pi",keywords:["Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"LoRa/LoRaWAN Gateway Kit",permalink:"/LoRa_LoRaWan_Gateway_Kit"},next:{title:"microbit wiki page",permalink:"/microbit_wiki_page"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Part List",id:"part-list",level:2},{value:"Hardware connection for GrovePi+",id:"hardware-connection-for-grovepi",level:2},{value:"Install GrovePi C# library for Raspberry Pi",id:"install-grovepi-c-library-for-raspberry-pi",level:2},{value:"Running Win10 IoT Examples on Rpi3",id:"running-win10-iot-examples-on-rpi3",level:2},{value:"See Also",id:"see-also",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:s},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg",alt:"enter image description here"})),(0,o.yg)("p",null,"Building an IoT project on your Raspberry Pi has never been an easy task for many developers. This is due to the messy hardware connections involved, and complicated software programming. Seeed and Microsoft have worked together to alleviate some of these challenges by introducing the Microsoft IoT Grove Kit."),(0,o.yg)("p",null,"The GrovePi+ cape included in the kit is fully compatible with your Raspberry Pi 3 and Raspberry Pi 2 that both run Windows 10 IoT Core. With the easy-to-use Grove system, you are now able to connect up to 15 Grove modules to your Raspberry Pi simply through the Grove interfaces on the GrovePi+."),(0,o.yg)("p",null,"In addition to the high performance sensors and actuators, the kit contains a 5 inch HDMI Display and a RGB LCD with a backlight. The Microsoft IoT Grove Kit is a powerful platform on which to begin your exploration on the Internet of Things."),(0,o.yg)("p",null,"Please note this kit DOES NOT include the Raspberry Pi board. Please visit ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Boards-for-Raspberry-pi-c-25.html"},"here")," to purchase separately."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"GrovePi+ and some of the code was designed by ",(0,o.yg)("a",{parentName:"p",href:"http://www.dexterindustries.com/"},"Dexter Industry"),".  Click to get more information about Dexter.")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html"},(0,o.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:"enter image description here"}))),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Easy-to-use GrovePi+ that is compatible with Raspberry Pi B/B+/A+/2/3"),(0,o.yg)("li",{parentName:"ul"},"Plug-n-play Grove Modules for rapid prototyping")),(0,o.yg)("h2",{id:"part-list"},"Part List"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"SKU"),(0,o.yg)("th",{parentName:"tr",align:null},"Part Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Qty"),(0,o.yg)("th",{parentName:"tr",align:null},"Link"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"103010002"),(0,o.yg)("td",{parentName:"tr",align:null},"GrovePi+"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"104990243"),(0,o.yg)("td",{parentName:"tr",align:null},"5 Inch HDMI Display with USB TouchScreen"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/5-Inch-HDMI-Display-with-USB-TouchScreen-p-2638.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"103020005"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - Relay"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Relay-p-769.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"101020011"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - Temp&Humi Sensor"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"101020010"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - Ultrasonic Ranger"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"104020006"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove LED Bar v2.0"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"101020048"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - Rotary Angle Sensor(P)"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor%28P%29-p-1242.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"107020000"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - Buzzer"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Buzzer-p-768.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"101020023"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - Sound Sensor"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"101020014"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - Light Sensor v1.2"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-%E2%80%93-Light-Sensor-%28P%29-v1.1-p-2693.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"101020003"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - Button"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Button-p-766.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"104030001"),(0,o.yg)("td",{parentName:"tr",align:null},"Grove - LCD RGB Backlight"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"109990056"),(0,o.yg)("td",{parentName:"tr",align:null},"HDMI Cable"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Flat-HDMI-Male-to-Male-Cable-1M,Support-3D-For-HDTV-computer-&-tablets-cable-p-2142.html"},"Get One Now"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"321010007"),(0,o.yg)("td",{parentName:"tr",align:null},"Micro USB Cable - 48cm"),(0,o.yg)("td",{parentName:"tr",align:null},"1"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Micro-USB-Cable-1200px-p-1475.html"},"Get One Now"))))),(0,o.yg)("h2",{id:"hardware-connection-for-grovepi"},"Hardware connection for GrovePi+"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1.1 Connecting the GrovePi+ to the Raspberry Pi")),(0,o.yg)("p",null,"First, mount your GrovePi+ on the Raspberry Pi. The GrovePi+ slides over top of the\nRaspberry Pi as shown in the picture below."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_1_1.png",alt:"enter image description here"})),(0,o.yg)("p",null,"Ensure that the pins are properly aligned when stacking the GrovePi+."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Powering up the Raspberry Pi")),(0,o.yg)("p",null,"To power the GrovePi+ and the Raspberry Pi, you can use the micro USB power port on the Raspberry Pi.\nRemember to use a good power adapter capable of supplying 2A at 5V. If you want to run the GrovePi+ in a standalone configuration, then you might find a USB power bank."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/1_2_1.png",alt:"enter image description here"})),(0,o.yg)("h2",{id:"install-grovepi-c-library-for-raspberry-pi"},"Install GrovePi C# library for Raspberry Pi"),(0,o.yg)("p",null,"The GrovePi can be programed in C#, but first you should install the Windows 10 IoT C# driver library for GrovePi, There\u2019re two ways to do this: install the NuGet package and use the GrovePi C# library code powered by Dexter ."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Install the NuGet package")),(0,o.yg)("p",null,"The GrovePi NuGet package for the current release is available.\nTo install GrovePi for Windows IoT follow the following steps."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"STEP1.")),(0,o.yg)("p",null,"From the Tools menu, select Library Package Manager and then click Package Manager Console."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_1.png",alt:"enter image description here"})),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"Package Manager Console window")," is displayed."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_1_2.png",alt:"enter image description here"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"STEP2.")),(0,o.yg)("p",null,"Run the following command in the Package Manager Console."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"PM> Install-Package GrovePi\n")),(0,o.yg)("p",null,"More details at ",(0,o.yg)("a",{parentName:"p",href:"https://www.nuget.org/packages/GrovePi/"},"https://www.nuget.org/packages/GrovePi/"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Use the GrovePi C# library code")),(0,o.yg)("p",null,"If you\u2019re a senior programmer or you can\u2019t install the GrovePi NuGet package successfully, you can download the library code by click this ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp"},"https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"STEP1.")),(0,o.yg)("p",null,"Move the two C# library projects \u201cGrovePi\u201d and \u201cDriver\u201d to the folder where your project resides. And add them to your project in Solution Explorer.\nFor example, right click the Solution \u201cGrovePiExamples \u201d, Add | Existing Project, as below shows."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_1.png",alt:"enter image description here"})),(0,o.yg)("p",null,"Then add \u201cGrovePi\u201d and \u201cDriver\u201d to the Solution Explorer."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_2.png",alt:"enter image description here"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"STEP2.")),(0,o.yg)("p",null,"Set the C# library as the reference projects. Right click References and click Add References"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_3.png",alt:"enter image description here"})),(0,o.yg)("p",null,"Click Projects | Solution, and check box as shown in the red box below. Then click OK."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/2_2_4.png",alt:"enter image description here"})),(0,o.yg)("p",null,"Now, you have already install the GrovePi C# library successfully."),(0,o.yg)("p",null,"All supported sensors are available through the DeviceFactory class."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Examples")),(0,o.yg)("p",null,"Below are some simple examples of how to use the library."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Measure Distance"))),(0,o.yg)("p",null,"Ultrasonic sensor plugged into digital pin 2 (D2)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"var distance = DeviceFactory.Build.UltraSonicSensor(Pin.DigitalPin2).MeasureInCentimeters();\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Display Hello World")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},' DeviceFactory.Build.RgbLcdDisplay().SetText("Hello World").SetBacklightRgb(0, 255, 255);\n'))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Sound the buzzer")))),(0,o.yg)("p",null,"Sound the buzzer plugged into digital pin 2 (D2)."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"DeviceFactory.Build.Buzzer(Pin.DigitalPin2).ChangeState(SensorStatus.On);\n")),(0,o.yg)("h2",{id:"running-win10-iot-examples-on-rpi3"},"Running Win10 IoT Examples on Rpi3"),(0,o.yg)("p",null,"Here we have a list of example projects that show just how easy it is to start a project with the Raspberry Pi. These Raspberry Pi projects combine easy-to-use Grove sensors with the powerful Raspberry Pi.\nYou can click ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/GrovePiExamples_win10"},"here")," to download the GrovePi Example code for win10. You will need to press the green button \u201cClone or download\u201d on the right and choose \u201cDownload ZIP\u201d. Then you need to extract the ZIP in a location of your choice.\nOpen the GrovePiExamples(win10).sln with your Visual Studio 2015, you can see there\u2019re 12 projects in the Solution Explorer as the picture below shows."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_0_1.png",alt:"enter image description here"})),(0,o.yg)("p",null,"Before you get started, please build ",(0,o.yg)("strong",{parentName:"p"},"GrovePi")," project first. This is because the other projects depend on it."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Hello World from RGB LCD")),(0,o.yg)("p",null,"This example is meant to be your first project with the GrovePi+. All the parts used in this project are available in the GrovePi+ Starter Kit. Once mastered, you can move on to more complicated projects like connecting a display or other sensors to the Raspberry Pi."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1:")," Set the HelloWorld(LCD) project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2:")," Hardware connection.")),(0,o.yg)("p",null,"Connect the RGB LCD to Port I2C-1 and power on the Raspberry Pi using the Grove wire connector."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_1.png",alt:"enter image description here"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3:"),"  Deploy your app.")),(0,o.yg)("p",null,"1) With the application open in Visual Studio, set the architecture in the toolbar dropdown. Select ARM."),(0,o.yg)("p",null,"2) Next, in the Visual Studio toolbar, click on the Local Machine dropdown and select Remote Machine."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_2.png",alt:"enter image description here"})),(0,o.yg)("p",null,"3) At this point, Visual Studio will present the Remote Connections dialog. If you previously used ",(0,o.yg)("a",{parentName:"p",href:"http://ms-iot.github.io/content/en-US/win10/samples/PowerShell.htm"},"PowerShell")," ","to set a unique name for your device, you can enter it here (in this example, we\u2019re using my-device). Otherwise, use the IP address of your Windows IoT Core device. After entering the device name/IP select None for Windows Authentication, then click Select."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/3_1_3.png",alt:"enter image description here"})),(0,o.yg)("p",null,"4) You can verify or modify these values by navigating to the project properties (select Properties in the Solution Explorer) and choosing the Debug tab on the left."),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe HelloWorld app will deploy and start on the Windows IoT device, and you will see the HelloWorld form the Grove RGB LCD."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Grove Rotary Angle Sensor")),(0,o.yg)("p",null,"This example can be set up the same way as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1:")," Set the GroveAngleSensor project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2:")," Hardware connection.\nConnect the Grove Angle Sensor to Port A0 and connect Raspberry Pi to LCD screen by HDMI cable."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3:")," Deploy your app. Refer to the HelloWorld(LCD) example of Step3.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe GroveAngleSensor app will deploy and start on the Windows IoT device. You can see the Grove Angle Sensor value on the LCD Screen."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Grove LED Bar")),(0,o.yg)("p",null,"This example can be set up the same way as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1:")," Set the GroveLedBar project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2:")," Hardware connection.\nConnect the Grove Led Bar to Port D5."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3:")," Deploy your app. Refer to the HelloWorld(LCD) example of Step3.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe GroveLedBar app will deploy and start on the Windows IoT device. You can see the Grove Led Bar will be lighted up in cycle."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Grove - Light Sensor")),(0,o.yg)("p",null,"This example is the same use as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1"),": Set the GroveLightSensor project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2"),": Hardware connection.\nConnect the Grove Light Sensor to Port A2 and connect Raspberry Pi to LCD screen by HDMI cable."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3"),": Deploy your app. Refer to the HelloWorld(LCD) example of Step3.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe GroveLightSensor app will deploy and start on the Windows IoT device. You can see the Grove Light Sensor value on the LCD Screen."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Grove - Relay")),(0,o.yg)("p",null,"This example is the same use as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1"),": Set the GroveRelay project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2"),": Hardware connection.\nConnect the Grove Relay to Port D2."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3"),": Deploy your app. Refer to the HelloWorld(LCD) example of Step3.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe GroveRelay app will deploy and start on the Windows IoT device. You can see the Grove Relay will open and close every 1 second."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Grove - Sound Sensor")),(0,o.yg)("p",null,"This example is the same use as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1"),": Set the GroveSoundSensor project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2"),": Hardware connection.\nConnect the Grove Sound Sensor to Port A1 and connect Raspberry Pi to LCD screen by HDMI cable."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3"),": Deploy your app. Refer to the HelloWorld(LCD) example of Step3.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe GroveSoundSensor app will deploy and start on the Windows IoT device. You can see the Grove Sound Sensor value on the LCD Screen."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Grove - Temperature and Humidity Sensor")),(0,o.yg)("p",null,"This example is the same use as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1"),": Set the GroveTempAndHumi project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2"),": Hardware connection.\nConnect the Grove Temp & Humi Sensor to Port D3 and connect Raspberry Pi to LCD screen by HDMI cable."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3"),": Deploy your app. Refer to the HelloWorld(LCD) example of Step3.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe GroveTempAndHumi app will deploy and start on the Windows IoT device. You can see the Temperature and Humidity value on the LCD Screen."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Grove - Ultrasonic Ranger")),(0,o.yg)("p",null,"This example is the same use as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1"),": Set the GroveUltrasonicSensor project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2"),": Hardware connection.\nConnect the Grove Ultrasonic Ranger to Port D4 and connect Raspberry Pi to LCD screen by HDMI cable."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3"),": Deploy your app. Refer to the HelloWorld(LCD) example of Step3.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe GroveUltrasonicSensor app will deploy and start on the Windows IoT device. You can see the Distance value on the LCD Screen."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Home Weather Display")),(0,o.yg)("p",null,"This example is the same use as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1"),": Set the HomeWeatherDisplay project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2"),": Hardware connection.\nConnect the Grove Temp and Humi Sensor to Port D3, RGB LCD to Port I2C using the Grove wire connector."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3"),": Deploy your app. Refer to the Blink example of Step5.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe Home Weather Display app will deploy and start on the Windows IoT device, and you can see the temperature on the RGB LCD."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"All Modules in One Project")),(0,o.yg)("p",null,"This example is the same use as HelloWorld(LCD)."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step1"),": Set the All_in_One project as StartUp Project."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step2"),": Hardware connection.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Grove - Relay > D2"),(0,o.yg)("li",{parentName:"ul"},"Grove - Temp&Humi Sensor > D3"),(0,o.yg)("li",{parentName:"ul"},"Grove - Ultrasonic Ranger > D4"),(0,o.yg)("li",{parentName:"ul"},"Grove - LED Bar V2.0 > D5"),(0,o.yg)("li",{parentName:"ul"},"Grove - Buzer > D6"),(0,o.yg)("li",{parentName:"ul"},"Grove - Button > D7"),(0,o.yg)("li",{parentName:"ul"},"Grove - Rotary Angle Sensor > A0"),(0,o.yg)("li",{parentName:"ul"},"Grove - Sound Sensor > A1"),(0,o.yg)("li",{parentName:"ul"},"Grove - Light Sensor > A2")))),(0,o.yg)("p",null,"Connect the Grove Modules to GrovePi+ as the table shows. And connect Raspberry Pi to LCD screen by HDMI cable."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step3"),": Deploy your app. Refer to the HelloWorld(LCD) example of Step3.")),(0,o.yg)("p",null,"When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.\nThe All_in_One app will deploy and start on the Windows IoT device.\nYou can see the Distance Sound Light value and relay state on the LCD Screen. The angle sensor will be shown as the chart on the screen. The Led Bar indicates the value of angle sensor. Press the Button and hold it, the Grove Relay will open."),(0,o.yg)("h2",{id:"see-also"},"See Also"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://dev.windows.com/en-us/iot"},"Windows Dev Center")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp"},"GrovePi C# Library Code")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/GrovePiExamples_win10"},"Example Code"))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}y.isMDXComponent=!0}}]);