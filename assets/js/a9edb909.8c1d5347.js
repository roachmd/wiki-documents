"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37788],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={description:"Star Wars Theme Player with XIAO ESP32S3",title:"Star Wars Theme Player",keywords:["ESP32S3","XIAO","ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/respeaker_streams_memory",last_update:{date:"7/1/2024",author:"Jessie"}},i=void 0,s={unversionedId:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_streams_memory",id:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_streams_memory",title:"Star Wars Theme Player",description:"Star Wars Theme Player with XIAO ESP32S3",source:"@site/docs/Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_streams_memory.md",sourceDirName:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3",slug:"/respeaker_streams_memory",permalink:"/respeaker_streams_memory",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_streams_memory.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1719792e3,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{description:"Star Wars Theme Player with XIAO ESP32S3",title:"Star Wars Theme Player",keywords:["ESP32S3","XIAO","ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/respeaker_streams_memory",last_update:{date:"7/1/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"CSV Converter",permalink:"/respeaker_streams_print"},next:{title:"MP3 Player",permalink:"/respeaker_player_spiffs"}},l={},p=[{value:"Functionality",id:"functionality",level:3},{value:"Code",id:"code",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Customization",id:"customization",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This project demonstrates how to play the Star Wars theme song using the reSpeaker Lite board. "),(0,a.yg)("h3",{id:"functionality"},"Functionality"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Plays the Star Wars theme song stored in memory"),(0,a.yg)("li",{parentName:"ul"},"Utilizes the I2S interface for audio output"),(0,a.yg)("li",{parentName:"ul"},"Employs the AudioTools framework for audio processing and streaming"),(0,a.yg)("li",{parentName:"ul"},"Easy-to-use AudioLogger for debugging and monitoring")),(0,a.yg)("h3",{id:"code"},"Code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "AudioTools.h"\n#include "StarWars30.h"\n\nAudioInfo info(22050, 1, 16);\nI2SStream i2s;  // Output to I2S\nMemoryStream music(StarWars30_raw, StarWars30_raw_len);\nStreamCopy copier(i2s, music); // copies sound into i2s\n\nvoid setup(){\n    Serial.begin(115200);\n    AudioLogger::instance().begin(Serial, AudioLogger::Info);\n\n    auto config = i2s.defaultConfig(TX_MODE);\n    config.copyFrom(info);\n    i2s.begin(config);\n}\n\nvoid loop(){\n    if (!copier.copy()){\n      i2s.end();\n      stop();\n    }\n}\n')),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"info"),": Defines the audio configuration, including the sample rate (22050 Hz), number of channels (1 for mono), and the number of bits per sample (16 bits)."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"i2s"),": Creates an instance of the I2SStream class to output audio through the I2S interface."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"music"),": Creates a MemoryStream object to store the Star Wars theme song data in memory."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"copier"),": Creates a StreamCopy object to copy the audio data from the memory stream to the I2S stream."),(0,a.yg)("h3",{id:"customization"},"Customization"),(0,a.yg)("p",null,"You can replace the ",(0,a.yg)("inlineCode",{parentName:"p"},"StarWars30_raw")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"StarWars30_raw_len")," variables with your own audio data to play a different song or sound effect."),(0,a.yg)("p",null,"The audio configuration can be modified by adjusting the parameters of the AudioInfo object, such as the sample rate, number of channels, and number of bits per sample."))}c.isMDXComponent=!0}}]);