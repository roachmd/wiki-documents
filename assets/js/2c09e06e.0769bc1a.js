"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42951],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),f=o,y=c["".concat(d,".").concat(f)]||c[f]||l[f]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},60809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={description:"Recording and playback",title:"Recording and playback",keywords:["ESP32S3","XIAO","ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/respeaker_record_and_play",last_update:{date:"7/1/2024",author:"Jessie"}},i=void 0,s={unversionedId:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_record_and_play",id:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_record_and_play",title:"Recording and playback",description:"Recording and playback",source:"@site/docs/Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_record_and_play.md",sourceDirName:"Sensor/ReSpeaker_Lite/XIAO_ESP32_S3",slug:"/respeaker_record_and_play",permalink:"/respeaker_record_and_play",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/ReSpeaker_Lite/XIAO_ESP32_S3/respeaker_record_and_play.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1719792e3,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{description:"Recording and playback",title:"Recording and playback",keywords:["ESP32S3","XIAO","ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/respeaker_record_and_play",last_update:{date:"7/1/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"I2S Test",permalink:"/respeaker_i2s_test"},next:{title:"Sine Wave Generator with ReSpeaker Lite",permalink:"/respeaker_streams_generator"}},d={},p=[{value:"Functionality",id:"functionality",level:3},{value:"Code",id:"code",level:3},{value:"Customization",id:"customization",level:3}],u={toc:p},c="wrapper";function l(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"functionality"},"Functionality"),(0,o.yg)("p",null,"This project demonstrates a basic loopback mechanism using the I2S interface, to test the reading and writing functions of I2S audio data. By switching I2S mode, the audio data is read from the microphone and then written to the speaker."),(0,o.yg)("h3",{id:"code"},"Code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'\n#include "AudioTools.h"\n\nAudioInfo info(16000, 2, 32);\n// SineWaveGenerator<int16_t> sineWave(32000);                // subclass of SoundGenerator with max amplitude of 32000\n// GeneratedSoundStream<int16_t> sound(sineWave);             // Stream generated from sine wave\nI2SStream out; \nI2SConfig config;\n// StreamCopy copier(out, sound);                             // copies sound into i2s\n\nuint8_t buffer[128000];\nsize_t bytes_read = 0;\nsize_t bytes_write = 0;\n\n// Arduino Setup\nvoid setup(void) {  \n  // Open Serial \n  Serial.begin(115200);\n  while(!Serial);\n  AudioLogger::instance().begin(Serial, AudioLogger::Info);\n\n  // start I2S\n  Serial.println("starting I2S...");\n  config = out.defaultConfig(TX_MODE);\n  config.copyFrom(info); \n  // Custom I2S output pins\n  config.pin_bck = 8;\n  config.pin_ws = 7;\n  config.pin_data = 43;\n  config.pin_data_rx = 44;\n  config.is_master = false;\n  out.begin(config);\n\n  // Setup sine wave\n  // sineWave.begin(info, N_B4);\n  Serial.println("started...");\n}\n\n// Arduino loop - copy sound to out \nvoid loop() {\n  // copier.copy();\n  out.end();\n  config.rx_tx_mode = RX_MODE;\n  out.begin(config);\n  bytes_read = out.readBytes(buffer, 128000);\n  out.end();\n  config.rx_tx_mode = TX_MODE;\n  out.begin(config);\n  bytes_write= out.write(buffer, 128000);\n}\n')),(0,o.yg)("h3",{id:"customization"},"Customization"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Modifying the Read and Write Duration")),(0,o.yg)("p",null,"You can control the duration of audio read and write operations by adjusting the size of the buffer and the number of bytes in out.readBytes and out.write. "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example"),": 0.5 seconds of audio:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"uint8_t buffer[64000];\nbytes_read = out.readBytes(buffer, 64000);\nbytes_write = out.write(buffer, 64000);\n")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Make sure you have enough dynamic memory to accommodate the buffer, especially when reading longer durations of audio data. If your ESP32-S3 device has insufficient memory, you may need to optimize memory usage or consider alternative solutions.")))}l.isMDXComponent=!0}}]);