"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36614],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=g(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={description:"Grove-LED Button",title:"Grove-LED Button",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-LED_Button",last_update:{date:"2/22/2023",author:"jianjing Huang"}},i=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-LED_Button",id:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-LED_Button",title:"Grove-LED Button",description:"Grove-LED Button",source:"@site/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-LED_Button.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Switch&Button",slug:"/Grove-LED_Button",permalink:"/Grove-LED_Button",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-LED_Button.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{description:"Grove-LED Button",title:"Grove-LED Button",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-LED_Button",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Switch(P)",permalink:"/Grove-Switch-P"},next:{title:"Grove Dual Button",permalink:"/Grove-Dual-Button"}},s={},g=[{value:"Version",id:"version",level:2},{value:"Version",id:"version-1",level:2},{value:"Version",id:"version-2",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Schematic",id:"schematic",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:g},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg",alt:null})),(0,r.yg)("p",null,"The Grove - LED Button is composed of Grove - Yellow Button, Grove - Blue LED Button and Grove - Red LED Button. This button is stable and reliable with a 100 000 times long life.\nWith the build-in LED, you can apply it to many interesting projects, it is really useful to use the LED to show the status of the button. We use a high-quality N-Channel MOSFET to control the LED to ensure the high swithching speed and a low consumption.All in all, you want some relly awesome button? Here you go ..."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Yellow-LED-Button-p-3101.html",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/Y.png",height:"48",width:"300"}))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/B.png",height:"48",width:"300"}))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html",target:"_blank"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/R.png",height:"48",width:"300"}))),(0,r.yg)("h2",{id:"version"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Changes"),(0,r.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove-LED Button"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial"),(0,r.yg)("td",{parentName:"tr",align:null},"Jun 2018")))),(0,r.yg)("h2",{id:"version-1"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Changes"),(0,r.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove-LED Button"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial"),(0,r.yg)("td",{parentName:"tr",align:null},"Jun 2018")))),(0,r.yg)("h2",{id:"version-2"},"Version"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,r.yg)("th",{parentName:"tr",align:null},"Changes"),(0,r.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grove-LED Button"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial"),(0,r.yg)("td",{parentName:"tr",align:null},"Jun 2018")))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Long operating life"),(0,r.yg)("li",{parentName:"ul"},"Easy to use"),(0,r.yg)("li",{parentName:"ul"},"Grove Digital interface")),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Item"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Working voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V/5V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating Life without Load"),(0,r.yg)("td",{parentName:"tr",align:null},"100 000 times")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LED rated current"),(0,r.yg)("td",{parentName:"tr",align:null},"50mA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Press Resistance^1^"),(0,r.yg)("td",{parentName:"tr",align:null},"<100m\u03a9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Release Resistance^2^"),(0,r.yg)("td",{parentName:"tr",align:null},">100M\u03a9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Size"),(0,r.yg)("td",{parentName:"tr",align:null},"L: 40mm W: 20mm H: 13mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Weight"),(0,r.yg)("td",{parentName:"tr",align:null},"4.3g")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Package size"),(0,r.yg)("td",{parentName:"tr",align:null},"L: 140mm W: 90mm H: 10mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Gross Weight"),(0,r.yg)("td",{parentName:"tr",align:null},"11g")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"1,2- If you want to measure the resistance, please take the key cap off the board. Otherwise you will get the value of the equivalent resistance of the board instead of the true resistance of the key cap.")),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("h3",{id:"pin-map"},"Pin Map"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/pin_map.jpg",alt:null})),(0,r.yg)("h3",{id:"schematic"},"Schematic"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/schematic.jpg",alt:null})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"SIG1")," is the the LED control signal, the default value is low, so the N-Channel MOSFET is off , the LED is off too. When SIG1 becomes high, the N-Channel MOSFET trun on, and the LED light on."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"SIG2")," connect to the button pin. With a pull-up resistance, the default value of ",(0,r.yg)("strong",{parentName:"p"},"SIG2")," is high. When you press the button, the voltage is pulled low, the ",(0,r.yg)("strong",{parentName:"p"},"SIG2")," becomes to low."),(0,r.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"In this part, we use the Grove - Red LED Button as an example. The following parts also apply to Yellow and Blue.")),(0,r.yg)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.yg)("h4",{id:"hardware"},"Hardware"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Materials required")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove- Red LED Button"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg",alt:"enter image description here"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{href:"https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html",target:"_blank"},"Get One Now"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1.")," Grove- Red LED Button to port ",(0,r.yg)("strong",{parentName:"p"},"D3")," of Grove-Base Shield.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/red%20LED.jpg",alt:null})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove- Red LED Button"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5V"),(0,r.yg)("td",{parentName:"tr",align:null},"Red")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GND"),(0,r.yg)("td",{parentName:"tr",align:null},"Black")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SIG2"),(0,r.yg)("td",{parentName:"tr",align:null},"White")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SIG1"),(0,r.yg)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.yg)("h4",{id:"software"},"Software"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1.")," Open the Arduino IDE and create a new file, then copy the following code into the new file.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"#include \"Arduino.h\"\n\n//1: toggle mode, 2: follow mode\n#define LED_MODE   1\n\nconst int ledPin = 3;      // the number of the LED pin, D3\nconst int buttonPin = 4;    // the number of the pushbutton pin, D4\nconst boolean breathMode = true;  // if or not the led lights as breath mode when it's on\n\n// Variables will change:\nint ledState = LOW;         // the current state of the output pin\nint ledFadeValue = 0;\nint ledFadeStep = 5;\nint ledFadeInterval = 20;   //milliseconds\nint buttonState;             // the current reading from the input pin\nint lastButtonState = HIGH;   // the previous reading from the input pin\n\nunsigned long lastDebounceTime = 0;  // the last time the output pin was toggled\nunsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers\nunsigned long lastLedFadeTime = 0;\n\nvoid setup() {\n  pinMode(buttonPin, INPUT);\n  pinMode(ledPin, OUTPUT);\n  digitalWrite(ledPin, ledState);\n}\n\nvoid loop() {\n  int reading = digitalRead(buttonPin);\n\n  // If the switch changed, due to noise or pressing:\n  if (reading != lastButtonState) {\n    // reset the debouncing timer\n    lastDebounceTime = millis();\n  }\n\n  if ((millis() - lastDebounceTime) > debounceDelay) {\n    // whatever the reading is at, it's been there for longer\n    // than the debounce delay, so take it as the actual current state:\n\n    // if the button state has changed:\n    if (reading != buttonState) {\n      buttonState = reading;\n\n#if LED_MODE == 1\n      if (buttonState == LOW) {  //button is pressed\n          ledState = !ledState;\n          ledFadeValue = 0;\n          lastLedFadeTime = millis();\n      }\n#else\n      if (buttonState == LOW) {  //button is pressed\n        ledState = HIGH;\n        ledFadeValue = 0;\n        lastLedFadeTime = millis();\n      } else {                   //button is released\n        ledState = LOW;\n      }\n#endif\n    }\n  }\n\n  // set the LED:\n  if (breathMode && ledState != LOW) {\n    if (millis() - lastLedFadeTime > ledFadeInterval) {\n      lastLedFadeTime = millis();\n      analogWrite(ledPin, ledFadeValue);\n      ledFadeValue += ledFadeStep;\n      if (ledFadeValue > 255){\n        ledFadeValue = 255 - ledFadeStep;\n        ledFadeStep = -ledFadeStep;\n      } else if (ledFadeValue < 0) {\n        ledFadeValue = 0;\n        ledFadeStep = -ledFadeStep;\n      }\n    }\n  } else {\n    digitalWrite(ledPin, ledState);\n  }\n\n  lastButtonState = reading;\n}\n\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"In this demo, we choose mode 1 which is the toggle mode, you can change the line 4 ",(0,r.yg)("mark",null,"#define LED_MODE   1")," into ",(0,r.yg)("mark",null,"#define LED_MODE   2")," to use the follow mode.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3.")," Now, try to press you button, you will see the LED light on with a fade on/fade off effect."))),(0,r.yg)("p",null,"It should be like:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/result.gif"})),(0,r.yg)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,r.yg)("h4",{id:"hardware-1"},"Hardware"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,r.yg)("th",{parentName:"tr",align:null},"Grove - Red LED Button"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg",alt:"enter image description here"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html"},"Get ONE Now"))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3"),". Connect the red LED button to D5 port of the Base Hat."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/LED_Hat.jpg",alt:null})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For step 3 you are able to connect the LED button to ",(0,r.yg)("strong",{parentName:"p"},"any GPIO Port")," but make sure you change the command with the corresponding port number.")),(0,r.yg)("h4",{id:"software-1"},"Software"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If you are using ",(0,r.yg)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,r.yg)("strong",{parentName:"p"},"only with Python3"),".")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,r.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sudo pip3 install Seeed-grove.py\ncd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd grove.py/grove\nsudo python3 grove_ryb_led_button.py 5\n\n")),(0,r.yg)("p",null,"Following is the grove_ryb_led_button.py code."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport time\nfrom grove.button import Button\nfrom grove.factory import Factory\n\nclass GroveLedButton(object):\n    def __init__(self, pin):\n        # High = light on\n        self.__led = Factory.getOneLed(\"GPIO-HIGH\", pin)\n        # Low = pressed\n        self.__btn = Factory.getButton(\"GPIO-LOW\", pin + 1)\n        self.__on_event = None\n        self.__btn.on_event(self, GroveLedButton.__handle_event)\n\n    @property\n    def on_event(self):\n        return self.__on_event\n\n    @on_event.setter\n    def on_event(self, callback):\n        if not callable(callback):\n            return\n        self.__on_event = callback\n\n    def __handle_event(self, evt):\n        # print(\"event index:{} event:{} pressed:{}\".format(evt['index'], evt['code'], evt['presesed']))\n        if callable(self.__on_event):\n            self.__on_event(evt['index'], evt['code'], evt['time'])\n            return\n\n        self.__led.brightness = self.__led.MAX_BRIGHT\n        event = evt['code']\n        if event & Button.EV_SINGLE_CLICK:\n            self.__led.light(True)\n            print(\"turn on  LED\")\n        elif event & Button.EV_DOUBLE_CLICK:\n            self.__led.blink()\n            print(\"blink    LED\")\n        elif event & Button.EV_LONG_PRESS:\n            self.__led.light(False)\n            print(\"turn off LED\")\n\n\nGrove = GroveLedButton\n\ndef main():\n    from grove.helper import SlotHelper\n    sh = SlotHelper(SlotHelper.GPIO)\n    pin = sh.argv2pin()\n\n    ledbtn = GroveLedButton(pin)\n\n    # remove ''' pairs below to begin your experiment\n    '''\n    # define a customized event handle your self\n    def cust_on_event(index, event, tm):\n        print(\"event with code {}, time {}\".format(event, tm))\n\n    ledbtn.on_event = cust_on_event\n    '''\n    while True:\n        time.sleep(1)\n\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,r.yg)("admonition",{title:"success",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If everything goes well, you will be able to see the LED turns on if you press it and turns off if you long press it. If you double click the LED button, the LED will blink.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python3 grove_ryb_led_button.py 5\nHat Name = \'Grove Base Hat RPi\'\nturn on  LED\nturn on  LED\nblink    LED\nturn on  LED\nturn off LED\n^CTraceback (most recent call last):\n  File "grove_ryb_led_button.py", line 101, in <module>\n    main()\n  File "grove_ryb_led_button.py", line 97, in main\n    time.sleep(1)\nKeyboardInterrupt\n\n')),(0,r.yg)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Zip]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip"},"Grove-LED Button Eagle file"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("br",null),"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.",(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);