"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25447],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>h});var i=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(o),g=r,h=c["".concat(d,".").concat(g)]||c[g]||p[g]||a;return o?i.createElement(h,n(n({ref:t},u),{},{components:o})):i.createElement(h,n({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,n=new Array(a);n[0]=g;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,n[1]=s;for(var l=2;l<a;l++)n[l]=o[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,o)}g.displayName="MDXCreateElement"},90303:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=o(58168),r=(o(96540),o(15680));const a={description:"Get Started with Arduino",title:"Get Started with Arduino",keywords:["Arduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Getting_Started_with_Arduino",last_update:{date:"2/14/2023",author:"jianjing Huang"}},n=void 0,s={unversionedId:"Top_Brand/Arduino/Getting_Started_with_Arduino",id:"Top_Brand/Arduino/Getting_Started_with_Arduino",title:"Get Started with Arduino",description:"Get Started with Arduino",source:"@site/docs/Top_Brand/Arduino/Getting_Started_with_Arduino.md",sourceDirName:"Top_Brand/Arduino",slug:"/Getting_Started_with_Arduino",permalink:"/Getting_Started_with_Arduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Getting_Started_with_Arduino.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Get Started with Arduino",title:"Get Started with Arduino",keywords:["Arduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Getting_Started_with_Arduino",last_update:{date:"2/14/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Arduino Introduction",permalink:"/Arduino"},next:{title:"Shield Introduction",permalink:"/Shield"}},d={},l=[{value:"Get Started with Arduino IDE",id:"get-started-with-arduino-ide",level:2},{value:"Arduino IDE Download",id:"arduino-ide-download",level:3},{value:"How to install Arduino Library",id:"how-to-install-arduino-library",level:3},{value:"How to Upload Code",id:"how-to-upload-code",level:3},{value:"Seeeduino Boards",id:"seeeduino-boards",level:2},{value:"How to add Seeed boards to Arduino IDE",id:"how-to-add-seeed-boards-to-arduino-ide",level:3},{value:"How to Install the driver for Seeeduino",id:"how-to-install-the-driver-for-seeeduino",level:3},{value:"More How-to Tutorials",id:"more-how-to-tutorials",level:2},{value:"Basic Tutorials",id:"basic-tutorials",level:3},{value:"Ports Usages:",id:"ports-usages",level:3},{value:"The guide to Different Sensors Selection",id:"the-guide-to-different-sensors-selection",level:3},{value:"The guide to Grove Cables Choose",id:"the-guide-to-grove-cables-choose",level:3},{value:"More Advanced Tutorials",id:"more-advanced-tutorials",level:3},{value:"Arduino Cores",id:"arduino-cores",level:2},{value:"Arduino-supported Boards",id:"arduino-supported-boards",level:3},{value:"More",id:"more",level:4},{value:"Arduino Shield(extension boards)",id:"arduino-shieldextension-boards",level:3},{value:"Kit with Courses",id:"kit-with-courses",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:l},c="wrapper";function p(e){let{components:t,...o}=e;return(0,r.yg)(c,(0,i.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"get-started-with-arduino-ide"},"Get Started with Arduino IDE"),(0,r.yg)("h3",{id:"arduino-ide-download"},(0,r.yg)("a",{parentName:"h3",href:"https://www.arduino.cc/en/software"},"Arduino IDE Download")),(0,r.yg)("p",null,"For every Arduino-supported you might need Arduino IDE to upload the code, for checking whether the board is functioning well and ebabling every application."),(0,r.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"Download Arduino IDE"))))),(0,r.yg)("h3",{id:"how-to-install-arduino-library"},(0,r.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install Arduino Library")),(0,r.yg)("p",null,"We have provided a tutorial about how you install an Arduino library. You should notice that almost all of our library was stored at ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio"},"Github"),". We will provide Arduino libraries when a product need a library, like ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_CAN"},"CAN-BUS Shield V2"),". But for some other simple products, there is no need to write a library such as Grove - Button."),(0,r.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"download_arduino_item",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"How to install Arduino Library"))))),(0,r.yg)("h3",{id:"how-to-upload-code"},(0,r.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to Upload Code")),(0,r.yg)("p",null,"Here we have another tutorial for uploading the code:"),(0,r.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"download_arduino_item",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"How to upload the code"))))),(0,r.yg)("h2",{id:"seeeduino-boards"},"Seeeduino Boards"),(0,r.yg)("h3",{id:"how-to-add-seeed-boards-to-arduino-ide"},(0,r.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},"How to add Seeed boards to Arduino IDE")),(0,r.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"download_arduino_item",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"Add Seeed boards"))))),(0,r.yg)("h3",{id:"how-to-install-the-driver-for-seeeduino"},(0,r.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/Driver_for_Seeeduino"},"How to Install the driver for Seeeduino")),(0,r.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"download_arduino_item",href:"https://wiki.seeedstudio.com/Driver_for_Seeeduino"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"Install Dirver for Seeeduino"))))),(0,r.yg)("h2",{id:"more-how-to-tutorials"},"More How-to Tutorials"),(0,r.yg)("h3",{id:"basic-tutorials"},"Basic Tutorials"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to Install Arduino Library")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_use_and_write_a_library"},"How to Use and Write a Library")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code"},"How to Upload Code")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Use_External_Editor"},"How to Use External Editor")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Guide_to_use_demos_downloaded_from_Seeed-s_Github"},"How to Use Demos Downloaded from Seeed's Github"))),(0,r.yg)("h3",{id:"ports-usages"},"Ports Usages:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Software-Serial"},"How to Use Software Serial")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide"},"How to Use Software I2C")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Software-SPI"},"How to Use Software SPI")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Software-Static-Library"},"How to Use Software Static Library")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Arduino_Common_Error"},"How to Handle Arduino Common Error"))),(0,r.yg)("h3",{id:"the-guide-to-different-sensors-selection"},"The guide to Different Sensors Selection"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How-to-Choose-A-Gas-Sensor"},"How to Choose A Gas Sensor")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/A_Comparison_of_Different_Grove_Temperature_Sensors"},"How to Choose Different Grove Temperature Sensors")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/GPS-Modules-Selection-Guide"},"How to Choose GPS Modules")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_detect_finger_touch"},"How to Choose Finger Touch")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeed_Relay_Page"},"How to Choose Seeed Relay")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Barometer-Selection-Guide"},"How to Choose on Barometer Sensor")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_To_Use_Sketchbook"},"How to Use Sketchbook")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Sketchbook_of_Sidekick_Advanced_Kit"},"How to Use Sketchbook of Sidekick Advanced Kit"))),(0,r.yg)("h3",{id:"the-guide-to-grove-cables-choose"},"The guide to Grove Cables Choose"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_To_Choose_The_Right_Cable"},"How to Choose The Right Cable"))),(0,r.yg)("h3",{id:"more-advanced-tutorials"},"More Advanced Tutorials"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Suli"},"Suli")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Serial"},"How to Use Seeed Arduino Serial")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/I2C_And_I2C_Address_of_Seeed_Product"},"How to Use I2C And I2C Address of Seeed Product")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Firmata"},"How to Use ODYSSEY-X86J4105 with Firmata")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Software-SWD"},"How to Debug Arduino Boards using SWD Interface")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Arduino-AWS-IOT-Bridge"},"How to Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Arduino-DAPLink"},"How to use Arduino Boards as DAPLink Device")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Flashing-Arduino-Bootloader-DAPLink"},"How to Flash Arduino Bootloader Using DAPLink")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Xadow_IO_pin_mapping"},"How to Understand Xadow IO Pin Mapping"))),(0,r.yg)("h2",{id:"arduino-cores"},"Arduino Cores"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Purpose"),": Arduino cores allow the Arduino IDE to communicate with different types of microcontrollers. They adapt standard Arduino commands to the specifics of the underlying hardware."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Examples"),": Different cores exist for microcontrollers like RP2040, ESP32, ESP8266, and more traditional ones like AVR and SAMD. Some cores are maintained by the community, ensuring support and updates for a wide range of devices.")),(0,r.yg)("h3",{id:"arduino-supported-boards"},"Arduino-supported Boards"),(0,r.yg)("div",{class:"all_container"},(0,r.yg)("div",{class:"xiao_topic_page_pic"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/xiao_topicpage/main.png",style:{width:1e3,height:"auto"}})),(0,r.yg)("div",{class:"xiao_topic_page_font1"},(0,r.yg)("font",{size:"2.1"},"Seeed Studio XIAO Series consists of 7 versions to satisfy the diverse needs of makers, product designers, and educators. If you're a maker, you can take advantage of its rich community resources to get inspiration and knowledge for your own projects. The XIAO Series offers educators a comprehensive gettingstarted course and detailed wikis to quickly learn how to use XIAO for their projects. If you're a product designer, XIAO SoM User Manual covers everything from Module Selection to Mass Production. ",(0,r.yg)("br",null)," "))),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/catalogsearch/result/?q=xiao"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Get One Know ")))),(0,r.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/SeeedStudio_XIAO_Series_Introduction/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Know More"))))),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",{class:"all_container"},(0,r.yg)("div",{class:"xiao_topic_page_font1"},(0,r.yg)("font",{size:"2.1"},"The Wio Terminal is a SAMD51-based microcontroller with Wireless Connectivity powered by Realtek RTL8720DN that\u2019s compatible with Arduino and MicroPython. Currently, wireless connectivity is only supported by Arduino. It runs at 120MHz (Boost up to 200MHz), 4MB External Flash and 192KB RAM. It supports both Bluetooth and Wi-Fi providing backbone for IoT projects. ",(0,r.yg)("br",null)," ")),(0,r.yg)("div",{class:"xiao_topic_page_pic"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg",style:{width:1e3,height:"auto"}}))),(0,r.yg)("br",null),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Get One Know ")))),(0,r.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Wio Terminal"))))),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("div",{class:"all_container"},(0,r.yg)("div",{class:"xiao_topic_page_pic"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png",style:{width:1e3,height:"auto"}})),(0,r.yg)("div",{class:"xiao_topic_page_font1"},(0,r.yg)("font",{size:"2.1"},"SenseCAP Indicator is a 4-inch touch screen driven by ESP32 and RP2040 dual-MCU and supports Wi-Fi/BLE/LoRa\xae communication. It is a fully open-source powerful IoT development platform for developers. One-stop ODM Fusion service is also available for customization and quick scale-up. ",(0,r.yg)("br",null)," "))),(0,r.yg)("br",null),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Get One Know ")))),(0,r.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Develop_with_SenseCAP_Indicator/"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcdaSenseCAP Indicator"))))),(0,r.yg)("h4",{id:"more"},"More"),(0,r.yg)("p",null,"More on ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=arduino"},"Seeed Studio Bazaar"),"."),(0,r.yg)("h3",{id:"arduino-shieldextension-boards"},"Arduino Shield(extension boards)"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Base_Shield_V2/"},"Grove Base V2")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/CAN-BUS_Shield_V2.0/"},"CAN-BUS Shield V2.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Relay_Shield_v3/"},"Relay Shield v3")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/W5500_Ethernet_Shield_v1.0/"},"W5500 Ethernet Shield v1.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Small_e-Paper_Shield_V2/"},"Small e-Paper Shield V2")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Spartan-Edge-Accelerator-Board/"},"Spartan Edge Accelerator Board")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Shield_for_Arduino_Nano/"},"Grove Shield for Arduino Nano")),(0,r.yg)("li",{parentName:"ul"},"More on ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shields"},"Seeed Studio Bazaar"),".")),(0,r.yg)("h3",{id:"kit-with-courses"},"Kit with Courses"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/"},"Grove Beginner Kit for Arduino")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible/"},"Rainbow Cube kit- RGB 4X4X4 (Rainbowduino Compatible)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove-Creator-Kit-1/"},"Grove Creator Kit for Arduino"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);