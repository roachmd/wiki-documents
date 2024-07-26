"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41570],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(c,".").concat(d)]||u[d]||g[d]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(58168),i=(n(96540),n(15680));const a={description:"Web Bluetooth APIs",title:"Web Bluetooth APIs",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Web-Bluetooth",last_update:{date:"3/08/2024",author:"\u91d1\u83ca"}},l="\u5728Wio Terminal\u4e0a\u4f7f\u7528Web Bluetooth API",o={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-Wio-Terminal-Web-Bluetooth",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-Wio-Terminal-Web-Bluetooth",title:"Web Bluetooth APIs",description:"Web Bluetooth APIs",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-Wio-Terminal-Web-Bluetooth.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth",slug:"/cn/Wio-Terminal-Web-Bluetooth",permalink:"/cn/Wio-Terminal-Web-Bluetooth",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-Wio-Terminal-Web-Bluetooth.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709856e3,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{description:"Web Bluetooth APIs",title:"Web Bluetooth APIs",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Web-Bluetooth",last_update:{date:"3/08/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4ecb\u7ecd",permalink:"/cn/Wio-terminal-BLE-introduction"},next:{title:"\u84dd\u7259iBeacon",permalink:"/cn/BLE-ibeacon-using-Wio-terminal"}},c={},s=[{value:"\u4ec0\u4e48\u662fWeb Bluetooth API",id:"\u4ec0\u4e48\u662fweb-bluetooth-api",level:2},{value:"Web Bluetooth\u7b80\u5355\u793a\u4f8b",id:"web-bluetooth\u7b80\u5355\u793a\u4f8b",level:2},{value:"Arduino\u8bbe\u7f6e",id:"arduino\u8bbe\u7f6e",level:3},{value:"Web Bluetooth API HTML \u7f51\u7ad9",id:"web-bluetooth-api-html-\u7f51\u7ad9",level:3},{value:"\u4f7f\u7528Web Bluetooth APIs\u5728\u7f51\u7ad9\u4e0a\u53ef\u89c6\u5316\u52a0\u901f\u5ea6\u8ba1\u6570\u636e",id:"\u4f7f\u7528web-bluetooth-apis\u5728\u7f51\u7ad9\u4e0a\u53ef\u89c6\u5316\u52a0\u901f\u5ea6\u8ba1\u6570\u636e",level:2},{value:"Arduino \u8bbe\u7f6e",id:"arduino-\u8bbe\u7f6e",level:3},{value:"Web Bluetooth API HTML \u7f51\u7ad9",id:"web-bluetooth-api-html-\u7f51\u7ad9-1",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2},{value:"\u6280\u672f\u652f\u6301 &amp; \u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u5728wio-terminal\u4e0a\u4f7f\u7528web-bluetooth-api"},"\u5728Wio Terminal\u4e0a\u4f7f\u7528Web Bluetooth API"),(0,i.yg)("p",null,"\u8fd9\u662f\u4e0e ",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API"},(0,i.yg)("strong",{parentName:"a"},"Web Bluetooth APIs"))," \u4e00\u8d77\u4f7f\u7528Wio Terminal\u7684\u84dd\u7259\u529f\u80fd\u7684wiki\u3002Web Bluetooth API\u63d0\u4f9b\u4e86\u5728Web\u6d4f\u89c8\u5668\u4e0a\u4e0e\u84dd\u7259\u8bbe\u5907\u8fdb\u884c\u4ea4\u4e92\u7684\u80fd\u529b\u3002"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/exmaple.gif"})),(0,i.yg)("h2",{id:"\u4ec0\u4e48\u662fweb-bluetooth-api"},"\u4ec0\u4e48\u662fWeb Bluetooth API"),(0,i.yg)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u4e0e\u84dd\u7259\u8bbe\u5907\u7684\u4ea4\u4e92\u80fd\u529b\u4ec5\u9650\u4e8e\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u3002 ",(0,i.yg)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web"},(0,i.yg)("strong",{parentName:"a"},"Web Bluetooth API"))," \u7684\u76ee\u6807\u662f\u6539\u53d8\u8fd9\u4e00\u70b9\uff0c\u5e76\u5c06\u5176\u5e26\u5230Web\u6d4f\u89c8\u5668\u4e2d\u3002\u9664\u4e86 ",(0,i.yg)("a",{parentName:"p",href:"https://google.github.io/physical-web/"},"Physical Web")," \u7b49\u5de5\u4f5c\uff0c\u4eba\u4eec\u53ef\u4ee5\u76f4\u63a5\u4eceWeb\u4e0a\u4e0e\u8bbe\u5907\u8fdb\u884c\u4ea4\u4e92\u3002\u89c2\u770b",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yILD_ZdXJW4"},"\u6b64\u901a\u8fc7Web\u5e94\u7528\u7a0b\u5e8f\u63a7\u5236\u7684\u65e0\u4eba\u673a")," \u89c6\u9891\uff0c\u4ee5\u4e86\u89e3\u5176\u5de5\u4f5c\u539f\u7406\u3002 "),(0,i.yg)("h2",{id:"web-bluetooth\u7b80\u5355\u793a\u4f8b"},"Web Bluetooth\u7b80\u5355\u793a\u4f8b"),(0,i.yg)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u8bbe\u7f6eWio Terminal\u5e76\u4f7f\u7528\u7b80\u5355\u7684HTML\u7f51\u7ad9\u4e0eWio Terminal\u7684\u84dd\u7259\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,i.yg)("div",{align:"center"},(0,i.yg)("video",{width:"{560}",height:315,controls:!0},(0,i.yg)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/simple.mp4",type:"video/mp4"}))),(0,i.yg)("h3",{id:"arduino\u8bbe\u7f6e"},"Arduino\u8bbe\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u8bf7\u6309\u7167 ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/"},(0,i.yg)("strong",{parentName:"a"},"Wio Terminal \u84dd\u7259\u6982\u8ff0"))," \u4e2d\u7684\u8bf4\u660e\uff0c\u5728\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u524d\uff0c\u5c06\u84dd\u7259\u56fa\u4ef6\u70e7\u5f55\u5230Wio Terminal\u5e76\u4e0b\u8f7d\u76f8\u5173\u5e93\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u590d\u5236\u4ee5\u4e0b\u4ee3\u7801\u5e76\u4e0a\u4f20\u5230Wio Terminal\uff1a"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcBLEDevice.h>\n#include <BLEServer.h>\n#include <BLE2902.h>\n\nbool _BLEClientConnected = false;\nuint8_t level = 10;\n\n#define BatteryService BLEUUID((uint16_t)0x180F) \nBLECharacteristic BatteryLevelCharacteristic(BLEUUID((uint16_t)0x2A19), BLECharacteristic::PROPERTY_READ  | BLECharacteristic::PROPERTY_WRITE  | BLECharacteristic::PROPERTY_NOTIFY);\n\nclass MyServerCallbacks : public BLEServerCallbacks {\n    void onConnect(BLEServer* pServer) {\n      _BLEClientConnected = true;\n    };\n\n    void onDisconnect(BLEServer* pServer) {\n      _BLEClientConnected = false;\n    }\n};\n\n/* ###############################################################  CALL back to receive data from Phone */\n#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"\n\nclass MyCallbacks: public BLECharacteristicCallbacks {\n\n    void onWrite(BLECharacteristic *pCharacteristic) {\n      std::string rxValue = pCharacteristic->getValue();\n      Serial.println(rxValue[0]);\n \n      if (rxValue.length() > 0) {\n        Serial.println("*********");\n        Serial.print("Received Value: ");\n \n        for (int i = 0; i < rxValue.length(); i++) {\n          Serial.print(rxValue[i]);\n        }\n        Serial.println();\n        Serial.println("*********");\n      }\n \n    }\n};\n\n/* ############################################################### */\nvoid initBLE() {\n  BLEDevice::init("BLE Battery");\n  // Create the BLE Server\n  BLEServer *pServer = BLEDevice::createServer();\n  pServer->setCallbacks(new MyServerCallbacks());\n\n  // Create the BLE Service\n  BLEService *pBattery = pServer->createService(BatteryService);\n\n  pBattery->addCharacteristic(&BatteryLevelCharacteristic);\n  BatteryLevelCharacteristic.addDescriptor(new BLE2902());\n\n\n  /* ###############################################################  define callback */\n  BLECharacteristic *pWriteCharacteristic = pBattery->createCharacteristic(\n                                         CHARACTERISTIC_UUID_RX,\n                                         BLECharacteristic::PROPERTY_WRITE\n                                       );\n  pWriteCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);\n \n  pWriteCharacteristic->setCallbacks(new MyCallbacks());\n  /* ############################################################### */\n  \n  pServer->getAdvertising()->addServiceUUID(BatteryService);\n\n  pBattery->start();\n  // Start advertising\n  pServer->getAdvertising()->start();\n}\n\nvoid setup() {\n  Serial.begin(115200);\n//   while(!Serial);\n  Serial.println("--- Wio Terminal BLE Battery Level Indicator ---");\n  initBLE();\n}\n  \nvoid loop() {\n\n  BatteryLevelCharacteristic.setValue(&level, 1);\n  BatteryLevelCharacteristic.notify();\n  delay(3000);\n\n  level++;\n  Serial.print("Battery Level: ");\n  Serial.println(int(level));\n\n  if (int(level)==100)\n    level=0;\n}\n')),(0,i.yg)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u5c06Wio Terminal\u914d\u7f6e\u4e3a\u5177\u6709\u84dd\u7259\u53ef\u53d1\u73b0\u540d\u79f0 ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"BLE Battery"))," \u5e76\u4f5c\u4e3a\u84dd\u7259\u670d\u52a1\u5668\u5efa\u7acb\u4e86\u4e00\u4e2a\u7535\u6c60BLE\u670d\u52a1\u3002\u8fd9\u5f88\u91cd\u8981\uff0c\u5e76\u4e14\u9700\u8981\u4e0e\u540e\u9762\u7684Web Bluetooth API HTML\u7f51\u7ad9\u5339\u914d\u3002"),(0,i.yg)("h3",{id:"web-bluetooth-api-html-\u7f51\u7ad9"},"Web Bluetooth API HTML \u7f51\u7ad9"),(0,i.yg)("p",null,"\u73b0\u5728Wio Terminal\u5df2\u7ecf\u8bbe\u7f6e\u597d\u4e86\uff0c\u6211\u4eec\u9700\u8981\u7f16\u5199\u4e00\u4e2a\u5e26\u6709Web Bluetooth API\u7684HTML\u7f51\u7ad9\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u8fdb\u884c\u4ea4\u4e92\u3002\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u4ece\u6b64\u5904\u4e0b\u8f7d ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ansonhe97/WioTerminal-WebBluetooth/blob/main/webbluetooth.html"},(0,i.yg)("strong",{parentName:"a"},(0,i.yg)("inlineCode",{parentName:"strong"},"webbluetooth.html")))," \u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,i.yg)("strong",{parentName:"p"},"\u6700\u65b0\u7248\u7684Google Chrome\u6216Microsoft Edge"),"\uff08\u652f\u6301Web Bluetooth API\uff09\u4e0b\u8f7d ",(0,i.yg)("inlineCode",{parentName:"p"},"webbluetooth.html")," \u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5728\u7f51\u7ad9\u4e0a",(0,i.yg)("strong",{parentName:"p"},"\u53f3\u51fb")," \u5355\u952e\u9009\u62e9 ",(0,i.yg)("strong",{parentName:"p"},"Inspect")," \uff08\u5bf9\u4e8emacOS\u662fCMD+OPT+I\uff0c\u5bf9\u4e8eWindows\u662fCtrl+Shift+I\uff09\uff0c\u9009\u62e9 ",(0,i.yg)("strong",{parentName:"p"},"Control Console"),":"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/1.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u7f51\u7ad9\u4e0a\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"li"},"Connect with BLE device")," \u6309\u94ae\u3002\u60a8\u5e94\u8be5\u770b\u5230BLE Battery\uff08Wio Terminal\uff09\u51fa\u73b0\u5728\u8fde\u63a5\u7a97\u53e3\u4e2d\u3002\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"li"},"Connect"),"\u3002")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u6ce8: Web Bluetooth API\u5b9e\u9645\u4e0a\u4f1a\u53d1\u73b0\u9644\u8fd1\u7684\u6240\u6709BLE\u8bbe\u5907\uff0c\u4f46\u8fd9\u91cc\u4f7f\u7528\u8fc7\u6ee4\u5668\u4ec5\u9650\u4e8e\u540d\u4e3aBLE Battery\u7684BLE\u8bbe\u5907\u3002")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/2.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u7f51\u7ad9\u4e0a\u70b9\u51fb ",(0,i.yg)("strong",{parentName:"li"},"Start")," \u6309\u94ae\uff0c\u5b83\u5c06\u5f00\u59cb\u63a5\u6536\u4eceWio Terminal\u4f20\u8f93\u7684\u7535\u6c60\u4fe1\u606f\uff01")),(0,i.yg)("p",null,"Web Bluetooth API\u7f51\u7ad9\u63a7\u5236\u53f0\uff1a"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/3.png"})),(0,i.yg)("p",null,"Arduino \u4e32\u884c\u76d1\u89c6\u5668\u63a7\u5236\u53f0\uff1a"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/4.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u73b0\u5728Wio Terminal\u901a\u8fc7Web Bluetooth APIs\u4e0e\u7f51\u7ad9\u8fdb\u884c\u4ea4\u4e92\uff01\u8fd9\u4f7f\u5f97BLE\u529f\u80fd\u66f4\u52a0\u6709\u8da3\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7Web\u6d4f\u89c8\u5668\u4f20\u8f93\u4fe1\u606f\uff01")),(0,i.yg)("h2",{id:"\u4f7f\u7528web-bluetooth-apis\u5728\u7f51\u7ad9\u4e0a\u53ef\u89c6\u5316\u52a0\u901f\u5ea6\u8ba1\u6570\u636e"},"\u4f7f\u7528Web Bluetooth APIs\u5728\u7f51\u7ad9\u4e0a\u53ef\u89c6\u5316\u52a0\u901f\u5ea6\u8ba1\u6570\u636e"),(0,i.yg)("p",null,"\u4ee5\u4e0b\u662f\u5728\u7f51\u7ad9\u4e0a\u4f7f\u7528Web Bluetooth API\u7684\u4e00\u4e2a\u5f88\u597d\u7684\u793a\u4f8b\u3002\u8fd9\u4e2a\u793a\u4f8b\u7f51\u7ad9\u4f7f\u7528Web Bluetooth\u8fde\u63a5Wio Terminal\u5e76\u53ef\u89c6\u5316\u677f\u8f7d\u52a0\u901f\u5ea6\u8ba1\u6570\u636e\u3002"),(0,i.yg)("div",{align:"center"},(0,i.yg)("video",{width:560,height:315,controls:!0},(0,i.yg)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/example.mp4",type:"video/mp4"}))),(0,i.yg)("h3",{id:"arduino-\u8bbe\u7f6e"},"Arduino \u8bbe\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5728\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u6309\u7167 ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/"},(0,i.yg)("strong",{parentName:"a"},"Wio Terminal\u7684\u52a0\u901f\u5ea6\u8ba1\u6982\u8ff0"))," \u8fdb\u884c\u4e86\u64cd\u4f5c\u3002")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_WebBluetooth/WioTerminal_WebBluetooth.ino"},(0,i.yg)("inlineCode",{parentName:"a"},"WebBluetooth-Accelerator.ino"))," \u793a\u4f8b")," \u6216\u5728Arduino IDE\u4e2d\u590d\u5236\u4ee5\u4e0b\u4ee3\u7801\u3002"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcBLEDevice.h>\n#include <BLEServer.h>\n#include <LIS3DHTR.h>\n\n#define accelerometerService "19b10000-e8f2-537e-4f6c-d104768a1214"\n#define firstCharacteristic  "19b10010-e8f2-537e-4f6c-d104768a1214"\n#define DESCRIPTOR_UUID      "19b10010"\n\nLIS3DHTR<TwoWire> lis;\n\nbool deviceConnected = false;\nbool oldDeviceConnected = false;\n\nBLEServer *pServer = NULL;\nBLECharacteristic * pCharacteristic;\n\nclass MyServerCallbacks: public BLEServerCallbacks {\n    void onConnect(BLEServer* pServer) {\n      Serial.println("MyServerCallbacks onConnect ");\n      deviceConnected = true;\n    };\n\n    void onDisconnect(BLEServer* pServer) {\n      deviceConnected = false;\n    }\n};\n\nclass MyCallbacks: public BLECharacteristicCallbacks {\n    void onWrite(BLECharacteristic *pCharacteristic) {\n      std::string rxValue = pCharacteristic->getValue();\n\n      if (rxValue.length() > 0) {\n        Serial.println("*********");\n        Serial.print("Received Value: ");\n        for (int i = 0; i < rxValue.length(); i++)\n          Serial.print(rxValue[i]);\n\n        Serial.println();\n        Serial.println("*********");\n      }\n    }\n};\n\nvoid setup() {\n  Serial.begin(115200);\n//  while(!Serial){};\n  \n  lis.begin(Wire1);\n  if (!lis) {\n    Serial.println("Accelerater Error!");\n    while(1);\n  }\n  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n  Serial.println("Accelerater Initialised!");\n  \n  Serial.println("Starting BLE work!");\n\n  BLEDevice::init("Accelerometer");\n  pServer = BLEDevice::createServer();\n  pServer->setCallbacks(new MyServerCallbacks());\n  \n  BLEService *pService = pServer->createService(accelerometerService);\n  pCharacteristic = pService->createCharacteristic(\n                                         firstCharacteristic,\n                                         BLECharacteristic::PROPERTY_READ |\n                                         BLECharacteristic::PROPERTY_WRITE\n                                       );\n  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);\n  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(\n                                         DESCRIPTOR_UUID,\n                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,\n                                         GATT_PERM_READ | GATT_PERM_WRITE,\n                                         2\n                                         );\n  pCharacteristic->setCallbacks(new MyCallbacks());\n  pService->start();\n\n  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n  pAdvertising->addServiceUUID(accelerometerService);\n  pAdvertising->setScanResponse(true);\n  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue\n  pAdvertising->setMinPreferred(0x12);\n  BLEDevice::startAdvertising();\n  Serial.println("Characteristic defined! Now you can read it in your phone!");\n}\n\nvoid loop() { \n  if (deviceConnected) {\n    updateAcceleration();\n  }\n      // disconnecting\n    if (!deviceConnected && oldDeviceConnected) {\n        delay(500); // give the bluetooth stack the chance to get things ready\n        pServer->startAdvertising(); // restart advertising\n        Serial.println("start advertising");\n        oldDeviceConnected = deviceConnected;\n    }\n    // connecting\n    if (deviceConnected && !oldDeviceConnected) {\n    // do stuff here on connecting\n        oldDeviceConnected = deviceConnected;\n    }\n}\n\nvoid updateAcceleration() {\n  float x_values, y_values, z_values;\n  x_values = lis.getAccelerationX();\n  y_values = lis.getAccelerationY();\n  z_values = lis.getAccelerationZ();\n\n  String accelerometerData = String(x_values)+"|"+String(y_values)+"|"+String(z_values);\n  Serial.println(accelerometerData);\n  pCharacteristic->setValue(accelerometerData.c_str());\n  pCharacteristic->notify();\n  delay(20);\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5c06\u793a\u4f8b\u4e0a\u4f20\u5230Wio Terminal\u3002")),(0,i.yg)("h3",{id:"web-bluetooth-api-html-\u7f51\u7ad9-1"},"Web Bluetooth API HTML \u7f51\u7ad9"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"https://seeed-studio.github.io/Seeed_Arduino_Sketchbook/"},"\u9002\u7528\u4e8eWio Terminal\u7684Web Bluetooth \u52a0\u901f\u5ea6\u8ba1\u7ed8\u56fe\u5668 "))," \u7f51\u7ad9\u3002")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u9605\u8bfb ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/web-bluetooth/docs/index.html"},(0,i.yg)("strong",{parentName:"a"},"HTML \u6e90\u4ee3\u7801"))," \u4ee5\u83b7\u5f97\u66f4\u591a\u53c2\u8003\u8d44\u6599\u3002")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u8fde\u63a5\u540d\u4e3a ",(0,i.yg)("inlineCode",{parentName:"li"},"Accelerator")," (Wio Terminal)\u7684\u8bbe\u5907\uff0c\u60a8\u5e94\u8be5\u53ef\u4ee5\u5728\u7f51\u7ad9\u4e0a\u770b\u5230\u52a0\u901f\u5ea6\u8ba1\u6570\u636e\uff01")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/web-acc.gif"})),(0,i.yg)("p",null,"\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u4e0eWio Terminal\u8fdb\u884cWeb Bluetooth\u4ea4\u4e92\u7684\u7f51\u7ad9\uff01"),(0,i.yg)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API"},(0,i.yg)("strong",{parentName:"a"},"Web Bluetooth APIs Specs"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://googlechrome.github.io/samples/web-bluetooth/index.html"},(0,i.yg)("strong",{parentName:"a"},"Web Bluetooth APIs \u793a\u4f8b"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://crbug.com/?q=component:Blink%3EBluetooth"},(0,i.yg)("strong",{parentName:"a"},"Implementation Bugs"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://webbluetoothcg.github.io/web-bluetooth"},(0,i.yg)("strong",{parentName:"a"},"Web Bluetooth Spec")))),(0,i.yg)("h2",{id:"\u6280\u672f\u652f\u6301--\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301 & \u4ea7\u54c1\u8ba8\u8bba"),(0,i.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);