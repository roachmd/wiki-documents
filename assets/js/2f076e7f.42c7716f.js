"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67404],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(g,a(a({ref:n},c),{},{components:r})):t.createElement(g,a({ref:n},c))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3081:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=r(58168),i=(r(96540),r(15680));const o={description:"CO2 Sensor Built-in",title:"CO2 Sensor Built-in",keywords:["SenseCAP Indicator RP2040 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_RP2040_CO2",last_update:{date:"3/4/2024",author:"DuKaiyin"}},a="**CO2 \u4f20\u611f\u5668\uff08\u5185\u7f6e\uff09**",s={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-CO2_Sensor_Built-in",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-CO2_Sensor_Built-in",title:"CO2 Sensor Built-in",description:"CO2 Sensor Built-in",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-CO2_Sensor_Built-in.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040",slug:"/cn/SenseCAP_Indicator_RP2040_CO2",permalink:"/cn/SenseCAP_Indicator_RP2040_CO2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-CO2_Sensor_Built-in.md",tags:[],version:"current",lastUpdatedBy:"DuKaiyin",lastUpdatedAt:1709510400,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{description:"CO2 Sensor Built-in",title:"CO2 Sensor Built-in",keywords:["SenseCAP Indicator RP2040 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_RP2040_CO2",last_update:{date:"3/4/2024",author:"DuKaiyin"}}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"co2-\u4f20\u611f\u5668\u5185\u7f6e"},(0,i.yg)("strong",{parentName:"h1"},"CO2 \u4f20\u611f\u5668\uff08\u5185\u7f6e\uff09")),(0,i.yg)("p",null,"SenseCAP Indicator\uff08D1S/D1Pro\u7248\u672c\uff09\u914d\u6709\u5185\u7f6e\u7684SCD41\u4f20\u611f\u5668\uff0c\u53ef\u4ee5\u68c0\u6d4b\u8303\u56f4\u4e3a0-40000ppm\u7684CO2\u503c\u3002\nCO2\u542b\u91cf\u662f\u8bc4\u4f30\u7a7a\u6c14\u8d28\u91cf\u5e76\u786e\u4fdd\u5bf9\u6240\u6709\u547c\u5438\u8005\u90fd\u662f\u5b89\u5168\u548c\u5065\u5eb7\u7684\u91cd\u8981\u6807\u51c6\u3002"),(0,i.yg)("p",null,"\u7a7a\u6c14\u4e2d\u7684CO2\u6c34\u5e73\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6b63\u5e38\u5ba4\u5916\u6c34\u5e73\uff1a350 - 450 ppm"),(0,i.yg)("li",{parentName:"ul"},"\u53ef\u63a5\u53d7\u6c34\u5e73\uff1a< 600 ppm"),(0,i.yg)("li",{parentName:"ul"},"\u5bf9\u95f7\u70ed\u548c\u5f02\u5473\u7684\u62b1\u6028\uff1a600 - 1000 ppm"),(0,i.yg)("li",{parentName:"ul"},"ASHRAE\u548cOSHA\u6807\u51c6\uff1a1000 ppm"),(0,i.yg)("li",{parentName:"ul"},"\u4e00\u822c\u660f\u660f\u6b32\u7761\uff1a1000 - 2500 ppm"),(0,i.yg)("li",{parentName:"ul"},"\u53ef\u9884\u671f\u4e0d\u826f\u5065\u5eb7\u5f71\u54cd\uff1a2500 - 5000 ppm")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),":"),(0,i.yg)("p",null,"\u6b64\u793a\u4f8b\u901a\u8fc7IIC\u63a5\u53e3\u8bfb\u53d6\u5185\u7f6eSCD41 Co2\u4f20\u611f\u5668\u7684\u503c\uff0c\u5e76\u5c06\u5176\u6253\u5370\u5230\u4e32\u884c\u76d1\u89c6\u5668\u3002"),(0,i.yg)("p",null,"\u57fa\u4e8e\u4ee5\u4e0b\u5e93\uff1a"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-core/"},"Sensirion Arduino Core \u5e93"),"\u4e0e\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-scd4x"},"SCD41 CO2 sensor \u5e93")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u5728\u4f7f\u7528\u5185\u7f6e\u4f20\u611f\u5668\u65f6\uff0c\u5fc5\u987b\u542f\u7528\u4f20\u611f\u5668\u7535\u6e90"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <Wire.h>\n#include <SPI.h>\n#include <SD.h>\n#include <SensirionI2CScd4x.h>\n\n\nSensirionI2CScd4x scd4x;\nString SDDataString = "";\n\n//The built-in sensor needs to be powered on\nvoid sensor_power_on(void) {\n  pinMode(18, OUTPUT);\n  digitalWrite(18, HIGH);\n}\n\nvoid sensor_scd4x_init(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  scd4x.begin(Wire);\n\n  // stop potentially previously started measurement\n  error = scd4x.stopPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n\n  // Start Measurement\n  error = scd4x.startPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute startPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n}\n\nvoid sensor_scd4x_get(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  Serial.print("sensor scd4x: ");\n  // Read Measurement\n  uint16_t co2;\n  float temperature;\n  float humidity;\n  error = scd4x.readMeasurement(co2, temperature, humidity);\n  if (error) {\n    Serial.print("Error trying to execute readMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else if (co2 == 0) {\n    Serial.println("Invalid sample detected, skipping.");\n  } else {\n    Serial.print("Co2:");\n    Serial.print(co2);\n    Serial.print("\\t");\n    Serial.print("Temperature:");\n    Serial.print(temperature);\n    Serial.print("\\t");\n    Serial.print("Humidity:");\n    Serial.println(humidity);\n  }\n}\n\nint cnt = 0;\nvoid setup() {\n  Serial.begin(115200);\n\n  sensor_power_on();\n\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n\n  sensor_scd4x_init();\n}\n\nvoid loop() {\n  delay(5000);\n  sensor_scd4x_get();\n}\n\n\n')),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/scd4xsensor.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u6b64\u5185\u7f6eSCD41\u4f20\u611f\u5668\u4e2d\u7684\u6e29\u5ea6\u548c\u6e7f\u5ea6\u5e76\u4e0d\u80fd\u5b8c\u5168\u4ee3\u8868\u7a7a\u6c14\u7684\u6e29\u5ea6\u548c\u6e7f\u5ea6\u3002"),(0,i.yg)("p",null," ",(0,i.yg)("strong",{parentName:"p"},"\u6280\u672f\u652f\u6301")),(0,i.yg)("p",null,"   \u522b\u62c5\u5fc3\uff0c\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86\u652f\u6301\uff01\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684",(0,i.yg)("a",{parentName:"p",href:"https://discord.com/invite/QqMgVwHT3X"},"Seeed\u5b98\u65b9Discord\u9891\u9053"),"\u63d0\u51fa\u60a8\u7684\u95ee\u9898\uff01"),(0,i.yg)("p",null,"\u5982\u679c\u60a8\u6709\u5927\u91cf\u8ba2\u5355\u6216\u5b9a\u5236\u9700\u6c42\uff0c\u8bf7\u8054\u7cfb ",(0,i.yg)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}d.isMDXComponent=!0}}]);