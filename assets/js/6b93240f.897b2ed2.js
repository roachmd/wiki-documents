"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31563],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,u=d["".concat(l,".").concat(m)]||d[m]||g[m]||r;return t?i.createElement(u,o(o({ref:n},p),{},{components:t})):i.createElement(u,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(58168),a=(t(96540),t(15680));const r={description:"\u84dd\u7259iBeacon",title:"\u84dd\u7259iBeacon",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/BLE-ibeacon-using-Wio-terminal",last_update:{date:"3/08/2024",author:"\u91d1\u83ca"}},o=void 0,s={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-BLE-ibeacon-using-Wio-terminal",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-BLE-ibeacon-using-Wio-terminal",title:"\u84dd\u7259iBeacon",description:"\u84dd\u7259iBeacon",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-BLE-ibeacon-using-Wio-terminal.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth",slug:"/cn/BLE-ibeacon-using-Wio-terminal",permalink:"/cn/BLE-ibeacon-using-Wio-terminal",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/CN-BLE-ibeacon-using-Wio-terminal.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709856e3,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{description:"\u84dd\u7259iBeacon",title:"\u84dd\u7259iBeacon",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/BLE-ibeacon-using-Wio-terminal",last_update:{date:"3/08/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"Web Bluetooth APIs",permalink:"/cn/Wio-Terminal-Web-Bluetooth"},next:{title:"RTC\u6982\u8ff0",permalink:"/cn/Wio-Terminal-RTC"}},l={},c=[{value:"\u57fa\u4e8e BLE ibeacon \u7684 Wio terminal",id:"\u57fa\u4e8e-ble-ibeacon-\u7684-wio-terminal",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u9700\u786c\u4ef6",id:"\u6240\u9700\u786c\u4ef6",level:2},{value:"\u6240\u9700\u8f6f\u4ef6",id:"\u6240\u9700\u8f6f\u4ef6",level:2},{value:"\u64cd\u4f5c\u6307\u5357",id:"\u64cd\u4f5c\u6307\u5357",level:2},{value:"<strong>Wio terminal iBeacon\u6d4b\u8bd5</strong>",id:"wio-terminal-ibeacon\u6d4b\u8bd5",level:3},{value:"<strong>the nRF connect APP</strong>",id:"the-nrf-connect-app",level:3},{value:"iBeacon\u7b80\u5355\u5c55\u793a",id:"ibeacon\u7b80\u5355\u5c55\u793a",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}],p={toc:c},d="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u57fa\u4e8e-ble-ibeacon-\u7684-wio-terminal"},"\u57fa\u4e8e BLE ibeacon \u7684 Wio terminal"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"})),(0,a.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"Wio terminal \u662f\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u7269\u8054\u7f51\u8bbe\u5907\uff0c\u5185\u7f6e\u652f\u6301\u7ecf\u5178\u84dd\u7259\u548c\u4f4e\u529f\u8017\u84dd\u7259\uff08BLE\uff09\uff0c\u7ecf\u5178\u84dd\u7259\u7528\u4e8e\u84dd\u7259\u97f3\u9891\u6a21\u5757\u3001\u6587\u4ef6\u6216\u5927\u578b\u4ee3\u7801\u6d41\u6570\u636e\u4f20\u8f93\uff0c\u4f4e\u529f\u8017\u84dd\u7259\u7528\u4e8e\u4f18\u5316\u7535\u6c60\u7684\u5e94\u7528\uff0c\u5982\u84dd\u7259\u4fe1\u6807\u3001\u5065\u8eab\u624b\u73af\u3001\u8fd1\u8ddd\u79bb\u5e7f\u544a\u7b49\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u7528\u6237\u9700\u6c42\u8fde\u63a5\u5230\u4e00\u4e9b\u7279\u5b9a\u7684\u529f\u80fd\u6a21\u5757\uff0c\u7136\u540e\u5c06\u5176\u4f5c\u4e3a\u4fe1\u6807\u5728\u7279\u5b9a\u573a\u5408\u4f7f\u7528\u3002"),(0,a.yg)("p",null,"\u5728\u4e4b\u524d\u7684 Wio terminal \u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5ba2\u6237\u7aef\u6a21\u5f0f\u548c\u670d\u52a1\u5668\u6a21\u5f0f\u5728 Wio terminal \u4e0a\u7684\u4f7f\u7528\uff0c\u5982\u679c\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u53c2\u9605 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},(0,a.yg)("strong",{parentName:"a"},"Wio terminal \u5165\u95e8\u6307\u5357")),"."),(0,a.yg)("h2",{id:"\u6240\u9700\u786c\u4ef6"},"\u6240\u9700\u786c\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.yg)("strong",{parentName:"a"},"Wio terminal")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Type-C \u6570\u636e\u7ebf"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Wio terminal \u7535\u6c60\u5e95\u5ea7")))),(0,a.yg)("h2",{id:"\u6240\u9700\u8f6f\u4ef6"},"\u6240\u9700\u8f6f\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5728\u7535\u8111\u4e0a\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/main/software"},(0,a.yg)("strong",{parentName:"a"},"Arduino IDE"))," \u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5728\u667a\u80fd\u624b\u673a\u4e0a\u4e0b\u8f7d\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US"},(0,a.yg)("strong",{parentName:"a"},"nRF Connect APP"))," \u3002"))),(0,a.yg)("p",null,":::\u6ce8\n\u5982\u679c\u60a8\u4e0d\u719f\u6089\u5982\u4f55\u4f7f\u7528nRF Connect APP\uff0c\u8bf7\u67e5\u770b\u6b64 ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-terminal-BLE-introduction/#nrf-connect-app-usage"},(0,a.yg)("strong",{parentName:"a"},"\u6559\u7a0b")),".\n:::"),(0,a.yg)("h2",{id:"\u64cd\u4f5c\u6307\u5357"},"\u64cd\u4f5c\u6307\u5357"),(0,a.yg)("h3",{id:"wio-terminal-ibeacon\u6d4b\u8bd5"},(0,a.yg)("strong",{parentName:"h3"},"Wio terminal iBeacon\u6d4b\u8bd5")),(0,a.yg)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\uff0c\u7528\u4e8e\u626b\u63cf Wio terminal \u7684iBeacon\u8bbe\u5907\u5e76\u663e\u793a\u4fe1\u606f\uff0c\u786e\u4fdd Wio terminal iBeacon\u8bbe\u5907\u53ef\u4ee5\u88ab\u68c0\u6d4b\u5230\uff0c\u60a8\u5c06\u770b\u5230iBeacon\u7684\u7279\u5b9a\u56fe\u6807\u3002"),(0,a.yg)("h3",{id:"the-nrf-connect-app"},(0,a.yg)("strong",{parentName:"h3"},"the nRF connect APP")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d ",(0,a.yg)("strong",{parentName:"li"},"nRF Connect APP")," \u7136\u540e\u6253\u5f00\u8be5\u5e94\u7528\uff0c\u5728\u53f3\u4e0a\u65b9\u627e\u5230 ",(0,a.yg)("strong",{parentName:"li"},"SCAN")," \u9009\u9879\uff0c\u60a8\u5c06\u5728\u5217\u8868\u4e2d\u770b\u5230 Wio terminal \u7684iBeacon\u8bbe\u5907\uff0c\u5176\u4e2d\u5305\u62ecMAC\u5730\u5740\u3001RSSI(dBm)\u548c\u8fde\u63a5\u5ef6\u8fdf\u65f6\u95f4\u3002")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"})),(0,a.yg)("p",null,":::\u6ce8\n\u5728\u6b64\u6d4b\u8bd5\u4e2d\uff0c\u8bbe\u5907\u6ca1\u6709\u547d\u540d\uff0c\u6240\u4ee5\u663e\u793a\u4e3aN/A\u3002\n:::"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u4ee3\u7801")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-CPP"},'\n#include "sys/time.h"\n#include "rpcBLEDevice.h"\n#include "BLEBeacon.h"\n\nBLEAdvertising *pAdvertising;\n//struct timeval now;\n\n#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 \n\nvoid setBeacon() {\n\n  BLEBeacon oBeacon = BLEBeacon();\n  oBeacon.setManufacturerId(0x4C00); // fake Apple 0x004C LSB (ENDIAN_CHANGE_U16!)\n  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));\n  oBeacon.setMajor(0x007B);\n  oBeacon.setMinor(0x01C8);\n  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();\n  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();\n  \n  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04\n  \n  std::string strServiceData = "";\n  \n  strServiceData += (char)26;     // Len\n  strServiceData += (char)0xFF;   // Type\n  strServiceData += oBeacon.getData(); \n  oAdvertisementData.addData(strServiceData);\n  \n  pAdvertising->setAdvertisementData(oAdvertisementData);\n  pAdvertising->setScanResponseData(oScanResponseData);\n  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_NONCONN_IND);\n\n}\n\nvoid setup() {\n\n    \n  Serial.begin(115200);\n  while(!Serial){};\n  \n  // Create the BLE Device\n  BLEDevice::init("");\n\n  // Create the BLE Server\n  // BLEServer *pServer = BLEDevice::createServer(); // <-- no longer required to instantiate BLEServer, less flash and ram usage\n\n  pAdvertising = BLEDevice::getAdvertising();\n  \n  setBeacon();\n   // Start advertising\n  pAdvertising->start();\n  Serial.println("Advertizing started...");\n  delay(100);\n  Serial.printf("in deep sleep\\n");\n}\n\nvoid loop() {\n delay(1000);\n}\n')),(0,a.yg)("h3",{id:"ibeacon\u7b80\u5355\u5c55\u793a"},"iBeacon\u7b80\u5355\u5c55\u793a"),(0,a.yg)("p",null,"\u8fd9\u4e2a\u6f14\u793a\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u7279\u5b9a\u573a\u5408\u4f7f\u7528 Wio terminal \uff0c\u4f8b\u5982\uff0c Wio terminal \u7684iBeacon\u53ef\u4ee5\u5e7f\u64ad\u7f51\u5173\u4fe1\u606f\uff0c\u5f15\u5bfc\u4eba\u4eec\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6709\u95e8-1\u3001\u95e8-2\u7b49\uff0c\u95e8-1\u5185\u6709\u4ea7\u54c1A\u548c\u8bf4\u660e\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u6bcf\u4e2a\u95e8\u4e0a\u5b89\u88c5 Wio terminal \u6765\u5e7f\u64ad\u4fe1\u606f\uff0c\u5e76\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u4ecb\u7ecd\u4fe1\u606f\u3002"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"})),(0,a.yg)("p",null,'\u6253\u5f00nRF Connect APP\uff0c\u6211\u4eec\u5c06\u5728\u5217\u8868\u4e2d\u770b\u5230"Wio"\u7684iBeacon\u8bbe\u5907\uff0c\u7136\u540e\u70b9\u51fb\u8bbe\u5907\uff0c\u5c06\u663e\u793a\u8bbe\u5907\u7684UUID\u3001RSSI\u548c\u5236\u9020\u5546\u6570\u636e\u3002'),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"})),(0,a.yg)("p",null,"\u70b9\u51fb\u5236\u9020\u5546\u6570\u636e\uff0c\u5c06\u663e\u793a3\u4e2a\u9009\u9879\uff0c\u5206\u522b\u662f\u5236\u9020\u5546\u6570\u636e\uff08\u84dd\u7259\u6838\u5fc34.1\uff09\u3001\u5236\u9020\u5546\u6570\u636e\u548c\u6587\u672c\uff08UTF-8\uff09\u3002\u7136\u540e\u70b9\u51fb\u6587\u672c\uff08UTF-8\uff09\uff0c\u5236\u9020\u5546\u6570\u636e\u5c06\u8f6c\u6362\u4e3a\u666e\u901a\u6570\u636e\u3002"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"})),(0,a.yg)("p",null,"\u6587\u672c\uff08UTF-8\uff09\u663e\u793a\u7f51\u5173\u4fe1\u606f\uff0c\u95e8-1\u4e2d\u6709A\uff0c\u95e8-2\u4e2d\u6709B\uff0c\u56e0\u6b64\u4eba\u4eec\u4f1a\u77e5\u9053A\u548cB\u5728\u54ea\u91cc\u3002  "),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"})),(0,a.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u4eba\u4eec\u8fdb\u5165\u95e8\u540e\uff0c\u4ed6\u4eec\u5c06\u770b\u5230\u5173\u4e8eA\u6216B\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u4f8b\u5982\u5386\u53f2\u6216\u5176\u4ed6\u6587\u672c\u4ecb\u7ecd\uff0c\u8fd9\u53d6\u51b3\u4e8e\u4f7f\u7528\u573a\u5408\u3002"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"})),(0,a.yg)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-CPP"},'#include "sys/time.h"\n#include "BLEDevice.h"\n#include "BLEBeacon.h"\n\n#include <TFT_eSPI.h> // Hardware-specific library\n#include <SPI.h>\nTFT_eSPI tft = TFT_eSPI();       // Invoke custom library\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite\nLIS3DHTR<TwoWire> lis;\nBLEAdvertising *pAdvertising;\n\n#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 128-Bit \n#define SERVICE_UUID           0x1801\n#define SERVICE_UUID1          0x1802\n#define SERVICE_UUID2          0x1803\n\nvoid setBeacon() {\n  BLEBeacon oBeacon = BLEBeacon();\n  oBeacon.setManufacturerId(0x4C00); // fake Apple 0x004C LSB (ENDIAN_CHANGE_U16!)\n  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));\n  oBeacon.setMajor(0x007B);\n  oBeacon.setMinor(0x01C8);\n  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();\n  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();\n\n  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04\n  std::string strServiceData = "";\n  strServiceData += (char)26;     // Len\n  strServiceData += (char)0xFF;   // Type\n  strServiceData += oBeacon.getData();\n  oAdvertisementData.addData(strServiceData);\n\n  union cracked_float_t {\n    float f;\n    uint32_t l;\n    word w[sizeof(float) / sizeof(word)];\n    byte b[sizeof(float)];\n  };\n\n  oScanResponseData.setName("wio");\n\n  oScanResponseData.setManufacturerData("oxA-door-1");   // Ibeacon information(MAX:31 byte) \n  oScanResponseData.setManufacturerData("oxB-door-2");\n \n  pAdvertising->setAdvertisementData(oAdvertisementData);\n  pAdvertising->setScanResponseData(oScanResponseData);\n  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_SCAN_IND);\n\n\n  spr.fillSprite(TFT_BLACK);\n  spr.createSprite(240, 160);\n  spr.fillSprite(TFT_BLACK);\n  spr.setTextColor(TFT_WHITE, TFT_BLACK);\n  spr.setFreeFont(&FreeSansBoldOblique12pt7b);\n\n  spr.drawString("what is A", 20 , 10);                // product introduction\n  spr.drawString("The A history: .....", 20 , 35);      \n\n  spr.drawString("what is B", 20 , 110);\n  spr.drawString("The B history: .....", 20 , 135);\n\n\n  spr.pushSprite(0, 0);\n}\n\n  void setup() {\n\n    tft.begin();\n    tft.init();\n    tft.setRotation(3);\n    tft.fillScreen(TFT_BLACK);\n    Serial.begin(115200);\n\n    // Create the BLE Device\n    BLEDevice::init("");\n    lis.begin(Wire1);\n    if (!lis) {\n      Serial.println("ERROR");\n      while (1);\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n\n\n    pAdvertising = BLEDevice::getAdvertising();\n\n\n\n    Serial.println("Advertizing started...");\n    delay(100);\n  }\n\n  void loop() {\n    setBeacon();\n    // Start advertising\n    pAdvertising->start();\n    delay(5000);\n    pAdvertising->stop();\n    delay(1000);\n  }\n')))}g.isMDXComponent=!0}}]);