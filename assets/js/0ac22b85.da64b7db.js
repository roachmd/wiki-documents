"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23916],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=i.createContext({}),p=function(e){var n=i.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(g.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},b=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,g=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,y=m["".concat(g,".").concat(b)]||m[b]||s[b]||r;return t?i.createElement(y,o(o({ref:n},u),{},{components:t})):i.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}b.displayName="MDXCreateElement"},54618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(58168),a=(t(96540),t(15680));const r={description:"Xbox",title:"Xbox",keywords:["Wio_terminal USB_Host"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-USBH-Xbox",last_update:{date:"3/07/2024",author:"jessie"}},o="\u5728Wio Terminal\u4e0a\u4f7f\u7528Xbox ONE\u63a7\u5236\u5668",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/CN-Wio-Terminal-USBH-Xbox",id:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/CN-Wio-Terminal-USBH-Xbox",title:"Xbox",description:"Xbox",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/CN-Wio-Terminal-USBH-Xbox.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host",slug:"/cn/Wio-Terminal-USBH-Xbox",permalink:"/cn/Wio-Terminal-USBH-Xbox",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/CN-Wio-Terminal-USBH-Xbox.md",tags:[],version:"current",lastUpdatedBy:"jessie",lastUpdatedAt:1709769600,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{description:"Xbox",title:"Xbox",keywords:["Wio_terminal USB_Host"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-USBH-Xbox",last_update:{date:"3/07/2024",author:"jessie"}},sidebar:"CNSidebar",previous:{title:"\u9f20\u6807",permalink:"/cn/Wio-Terminal-USBH-Mouse"},next:{title:"\u6982\u8ff0",permalink:"/cn/Wio-Terminal-USBCLIENT-Overview"}},g={},p=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"USB\u4e3b\u673a\u914d\u7f6e",id:"usb\u4e3b\u673a\u914d\u7f6e",level:2},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:2}],u={toc:p},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u5728wio-terminal\u4e0a\u4f7f\u7528xbox-one\u63a7\u5236\u5668"},"\u5728Wio Terminal\u4e0a\u4f7f\u7528Xbox ONE\u63a7\u5236\u5668"),(0,a.yg)("p",null,"\u672c\u6559\u7a0b\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728Wio Terminal\u4e0a\u4f7f\u7528Xbox ONE\u63a7\u5236\u5668\u3002\u4f7f\u7528\u6b64\u793a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528Wio Terminal\u6765\u4f7f\u7528Xbox\u63a7\u5236\u5668\u73a9\u6e38\u620f\uff01"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200109132336.gif"})),(0,a.yg)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.yg)("p",null,"\u8981\u4f7f\u7528\u6b64\u793a\u4f8b\uff0c\u60a8\u9700\u8981\u4e00\u4e2a ",(0,a.yg)("strong",{parentName:"p"},"USB OTG \u9002\u914d\u5668")," \u548c\u4e00\u4e2a ",(0,a.yg)("strong",{parentName:"p"},"USB \u8f6c\u4e32\u53e3\u6a21\u5757"),", \u5176\u4e2d\uff0cOTG\u9002\u914d\u5668\u7528\u4e8e\u8fde\u63a5Xbox\u63a7\u5236\u5668\uff0cUSB\u8f6c\u4e32\u53e3\u6a21\u5757\u7528\u4e8e\u8bfb\u53d6Wio Terminal\u7684\u8f93\u51fa\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6ce8:")," \u6b64\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"XBOXOLD.ino")," \u63a7\u5236\u5668\u3002\u5982\u679c\u4f7f\u7528Xbox 360\u63a7\u5236\u5668\u6216\u514b\u9686\u63a7\u5236\u5668\uff0c\u8bf7\u67e5\u770b\u793a\u4f8b\u4e2d\u7684XBOXOLD.ino\u6587\u4ef6\u3002"),(0,a.yg)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"Arduino IDE"),"\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230Wio Terminal\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c06\u7528\u4e8e\u4e0a\u4f20\u4ee3\u7801\u7684USB Type-C\u7535\u7f06\u4eceWio Terminal\u4e0a\u62d4\u4e0b\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c06\u4f60\u7684 ",(0,a.yg)("strong",{parentName:"p"},"Xbox ONE \u63a7\u5236\u5668")," \u8fde\u63a5\u5230 ",(0,a.yg)("strong",{parentName:"p"},"OTG \u9002\u914d\u5668")," \u7136\u540e\u8fde\u63a5\u5230Wio Terminal\u7684USB-C\u7aef\u53e3\u3002"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"Xbox ONE \u63a7\u5236\u5668"))," -> ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"OTG \u9002\u914d\u5668"))," -> ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"Wio Terminal(Type-C \u7aef\u53e3)"))))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c06 ",(0,a.yg)("strong",{parentName:"p"},"USB \u8f6c\u4e32\u53e3\u6a21\u5757")," \u8fde\u63a5\u5230 Wio Terminal as follow:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"TXD(USB \u8f6c\u4e32\u53e3\u6a21\u5757)"))," -> ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"RXD(Wio Terminal\u7684\u5f15\u811a10)"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"RXD(USB \u8f6c\u4e32\u53e3\u6a21\u5757)"))," -> ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"TXD(Wio Terminal\u7684\u5f15\u811a8)"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"3.3V(USB \u8f6c\u4e32\u53e3\u6a21\u5757)"))," -> ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"3.3V(Wio Terminal\u7684\u5f15\u811a1)"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"GND(USB \u8f6c\u4e32\u53e3\u6a21\u5757)"))," -> ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"GND(Wio Terminal\u7684\u5f15\u811a6)"))))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c06USB\u8f6c\u4e32\u53e3\u6a21\u5757\u8fde\u63a5\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u3002\u6839\u636e\u4f7f\u7528\u7684USB\u8f6c\u4e32\u53e3\u6a21\u5757\u7684\u4e0d\u540c\uff0c ",(0,a.yg)("strong",{parentName:"p"},"\u4e0b\u8f7d\u8be5\u6a21\u5757\u7684USB\u9a71\u52a8\u7a0b\u5e8f")," \uff0c\u4ee5\u4fbf\u60a8\u7684\u8ba1\u7b97\u673a\u53ef\u4ee5\u8bc6\u522b\u5b83\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5bf9\u4e8eWindows\u7528\u6237\uff0c\u60a8\u53ef\u4ee5\u6253\u5f00\u8bbe\u5907\u7ba1\u7406\u5668\u67e5\u770b\u662f\u5426\u88ab\u8bc6\u522b\u3002\u5e94\u8be5\u4f1a\u51fa\u73b0\u4e00\u4e2a\u65b0\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"COM")," \u7aef\u53e3\u3002"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u5bf9\u4e8eMac\u7528\u6237\uff0c\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528\u547d\u4ee4 ",(0,a.yg)("inlineCode",{parentName:"li"},"ls /dev/cu.*")," \u68c0\u67e5\u6a21\u5757\u7684\u53ef\u7528\u6027\u3002"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u4e32\u53e3\u6570\u636e\uff1a"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Windows:")," \u4e0b\u8f7d\u5e76\u5b89\u88c5 ",(0,a.yg)("a",{parentName:"p",href:"https://www.putty.org/"},"PuTTY"),"\u3002\u9009\u62e9 ",(0,a.yg)("inlineCode",{parentName:"p"},"Serial")," \u5e76\u5c06\u4e32\u884c\u884c\u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"COM")," \u66f4\u6539\u4e3a\u5728\u8bbe\u5907\u7ba1\u7406\u5668\u4e2d\u51fa\u73b0\u7684COM\u7aef\u53e3\uff0c\u7136\u540e\u5c06\u901f\u5ea6\u66f4\u6539\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"115200")," \uff0c\u70b9\u51fb\u6253\u5f00\u3002\u4e00\u4e2a\u7ec8\u7aef\u7a97\u53e3\u5e94\u8be5\u4f1a\u51fa\u73b0\u3002\u73b0\u5728\uff0c\u5982\u679c\u60a8\u5f00\u59cb\u6309\u4e0bXbox ONE\u63a7\u5236\u5668\u4e0a\u7684\u6309\u94ae\uff0c\u60a8\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u4e32\u53e3\u8f93\u51fa\uff01")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Mac:")," \u6253\u5f00\u7ec8\u7aef\u5e76\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"brew install screen"),"\u547d\u4ee4\u5b89\u88c5 ",(0,a.yg)("inlineCode",{parentName:"p"},"screen")," \uff0c\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f7f\u7528\u547d\u4ee4",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"screen /dev/cu.usbserial 115200")),"\uff0c\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"/dev/cu.usbserial")," \u5e94\u8be5\u4e0e\u4e0a\u9762\u5339\u914d\u3002\u60a8\u5e94\u8be5\u80fd\u591f\u770b\u5230\u6765\u81eaWio Terminal\u7684\u4e32\u53e3\u8f93\u51fa\uff01"))))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a:")," \u7531\u4e8eWio Terminal\u7684USB\u7aef\u53e3\u6b63\u5728\u7528\u4e8eUSB\u529f\u80fd\uff0c\u6240\u4ee5\u8981\u4e0a\u4f20\u53e6\u4e00\u4e2a\u7a0b\u5e8f\u5230Wio Terminal\uff0c\u9700\u8981\u901a\u8fc7\u6309\u4e24\u6b21\u7535\u6e90\u6309\u94ae\uff08LED\u706f\u4f1a\u53d8\u6697\uff09\u8fdb\u5165\u5f15\u5bfc\u6a21\u5f0f\uff0c\u7136\u540e\u60a8\u5e94\u8be5\u80fd\u591f\u518d\u6b21\u770b\u5230\u7aef\u53e3\u3002"),(0,a.yg)("h2",{id:"usb\u4e3b\u673a\u914d\u7f6e"},"USB\u4e3b\u673a\u914d\u7f6e"),(0,a.yg)("p",null,"\u8981\u5728Wio Terminal\u4e0a\u542f\u7528USB\u4e3b\u673a\u529f\u80fd\uff0c\u60a8\u5fc5\u987b\u914d\u7f6e\u4e24\u4e2a\u5f15\u811a\u3002\u9700\u8981\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"PIN_USB_HOST_ENABLE")," \u8bbe\u7f6e\u4e3a ",(0,a.yg)("strong",{parentName:"p"},"LOW")," \u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"OUTPUT_CTR_5V")," \u8bbe\u7f6e\u4e3a",(0,a.yg)("strong",{parentName:"p"},"HIGH"),"\u3002"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"void setup()")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\u6765\u5b8c\u6210\u8fd9\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"digitalWrite(PIN_USB_HOST_ENABLE, LOW);\ndigitalWrite(OUTPUT_CTR_5V, HIGH);\n")),(0,a.yg)("h2",{id:"\u5b8c\u6574\u4ee3\u7801"},"\u5b8c\u6574\u4ee3\u7801"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <XBOXONE.h>\n#define SerialDebug Serial1\n\nUSBHost UsbH;\nXBOXONE Xbox(&UsbH);\n\nvoid setup() {\n  SerialDebug.begin(115200);\n  if (UsbH.Init()) {\n    SerialDebug.print(F("\\r\\nUSB host did not start"));\n    while (1); //halt\n  }\n  SerialDebug.print(F("\\r\\nXBOX USB Library Started"));\n\n  //Coqnfigure pins to enable USB Host on Wio Terminal\n  digitalWrite(PIN_USB_HOST_ENABLE, LOW);\n  digitalWrite(OUTPUT_CTR_5V, HIGH);\n\n}\nvoid loop() {\n  UsbH.Task();\n  if (Xbox.XboxOneConnected) {\n    if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500 || Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500 || Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500 || Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {\n      if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500) {\n        SerialDebug.print(F("LeftHatX: "));\n        SerialDebug.print(Xbox.getAnalogHat(LeftHatX));\n        SerialDebug.print("\\t");\n      }\n      if (Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500) {\n        SerialDebug.print(F("LeftHatY: "));\n        SerialDebug.print(Xbox.getAnalogHat(LeftHatY));\n        SerialDebug.print("\\t");\n      }\n      if (Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500) {\n        SerialDebug.print(F("RightHatX: "));\n        SerialDebug.print(Xbox.getAnalogHat(RightHatX));\n        SerialDebug.print("\\t");\n      }\n      if (Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {\n        SerialDebug.print(F("RightHatY: "));\n        SerialDebug.print(Xbox.getAnalogHat(RightHatY));\n      }\n      SerialDebug.println();\n    }\n\n    if (Xbox.getButtonPress(L2) > 0 || Xbox.getButtonPress(R2) > 0) {\n      if (Xbox.getButtonPress(L2) > 0) {\n        SerialDebug.print(F("L2: "));\n        SerialDebug.print(Xbox.getButtonPress(L2));\n        SerialDebug.print("\\t");\n      }\n      if (Xbox.getButtonPress(R2) > 0) {\n        SerialDebug.print(F("R2: "));\n        SerialDebug.print(Xbox.getButtonPress(R2));\n        SerialDebug.print("\\t");\n      }\n      SerialDebug.println();\n    }\n\n    // Set rumble effect\n    static uint16_t oldL2Value, oldR2Value;\n    if (Xbox.getButtonPress(L2) != oldL2Value || Xbox.getButtonPress(R2) != oldR2Value) {\n      oldL2Value = Xbox.getButtonPress(L2);\n      oldR2Value = Xbox.getButtonPress(R2);\n      uint8_t leftRumble = map(oldL2Value, 0, 1023, 0, 255); // Map the trigger values into a byte\n      uint8_t rightRumble = map(oldR2Value, 0, 1023, 0, 255);\n      if (leftRumble > 0 || rightRumble > 0)\n        Xbox.setRumbleOn(leftRumble, rightRumble, leftRumble, rightRumble);\n      else\n        Xbox.setRumbleOff();\n    }\n\n    if (Xbox.getButtonClick(UP))\n      SerialDebug.println(F("Up"));\n    if (Xbox.getButtonClick(DOWN))\n      SerialDebug.println(F("Down"));\n    if (Xbox.getButtonClick(LEFT))\n      SerialDebug.println(F("Left"));\n    if (Xbox.getButtonClick(RIGHT))\n      SerialDebug.println(F("Right"));\n\n    if (Xbox.getButtonClick(START))\n      SerialDebug.println(F("Start"));\n    if (Xbox.getButtonClick(BACK))\n      SerialDebug.println(F("Back"));\n    if (Xbox.getButtonClick(XBOX))\n      SerialDebug.println(F("Xbox"));\n    if (Xbox.getButtonClick(SYNC))\n      SerialDebug.println(F("Sync"));\n\n    if (Xbox.getButtonClick(L1))\n      SerialDebug.println(F("L1"));\n    if (Xbox.getButtonClick(R1))\n      SerialDebug.println(F("R1"));\n    if (Xbox.getButtonClick(L2))\n      SerialDebug.println(F("L2"));\n    if (Xbox.getButtonClick(R2))\n      SerialDebug.println(F("R2"));\n    if (Xbox.getButtonClick(L3))\n      SerialDebug.println(F("L3"));\n    if (Xbox.getButtonClick(R3))\n      SerialDebug.println(F("R3"));\n\n\n    if (Xbox.getButtonClick(A))\n      SerialDebug.println(F("A"));\n    if (Xbox.getButtonClick(B))\n      SerialDebug.println(F("B"));\n    if (Xbox.getButtonClick(X))\n      SerialDebug.println(F("X"));\n    if (Xbox.getButtonClick(Y))\n      SerialDebug.println(F("Y"));\n  }\n  delay(1);\n}\n')))}s.isMDXComponent=!0}}]);