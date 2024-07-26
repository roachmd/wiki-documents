"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38046],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const i={description:"\u6982\u8ff0",title:"\u8702\u9e23\u5668\u5165\u95e8\u6307\u5357",keywords:["Wio_terminal Buzzer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Buzzer",last_update:{date:"3/09/2024",author:"\u91d1\u83ca"}},a="\u8702\u9e23\u5668\u5165\u95e8\u6307\u5357",l={unversionedId:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Buzzer/CN-Wio-Terminal-Buzzer",id:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Buzzer/CN-Wio-Terminal-Buzzer",title:"\u8702\u9e23\u5668\u5165\u95e8\u6307\u5357",description:"\u6982\u8ff0",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Buzzer/CN-Wio-Terminal-Buzzer.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Buzzer",slug:"/cn/Wio-Terminal-Buzzer",permalink:"/cn/Wio-Terminal-Buzzer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Hardware_Overview/Buzzer/CN-Wio-Terminal-Buzzer.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709942400,formattedLastUpdatedAt:"Mar 9, 2024",frontMatter:{description:"\u6982\u8ff0",title:"\u8702\u9e23\u5668\u5165\u95e8\u6307\u5357",keywords:["Wio_terminal Buzzer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Buzzer",last_update:{date:"3/09/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u9ea6\u514b\u98ce\u5165\u95e8\u6307\u5357",permalink:"/cn/Wio-Terminal-Mic"},next:{title:"\u5c06Wio Terminal\u8fde\u63a5\u5230Microsoft Azure IoT Central",permalink:"/cn/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central"}},p={},s=[{value:"\u57fa\u7840\u77e5\u8bc6",id:"\u57fa\u7840\u77e5\u8bc6",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u8702\u9e23\u5668\u5165\u95e8\u6307\u5357"},"\u8702\u9e23\u5668\u5165\u95e8\u6307\u5357"),(0,o.yg)("p",null,"\u8702\u9e23\u5668"),(0,o.yg)("h2",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,o.yg)("p",null,"vio terminal\u4e0a\u7684\u5185\u7f6e\u8702\u9e23\u5668\u662f\u4e00\u4e2a\u65e0\u6e90\u8702\u9e23\u5668\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u9700\u8981\u4e00\u4e2a\u4ea4\u6d41\u4fe1\u53f7\uff08PWM\uff09\u6765\u89e6\u53d1\u5e76\u8f93\u51fa\u58f0\u97f3\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u751f\u6210\u8f93\u51fa\uff1a"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u6ce8:")," ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"WIO_BUZZER"))," \u662f\u5185\u7f6e\u8702\u9e23\u5668\u7684\u5f15\u811a\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"    void setup() {\n        pinMode(WIO_BUZZER, OUTPUT);\n    }\n\n    void loop() {\n        analogWrite(WIO_BUZZER, 128);\n        delay(1000);\n        analogWrite(WIO_BUZZER, 0);\n        delay(1000);\n    }\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u6ce8:"),"  \u4e3a\u4e86\u4ea7\u751f\u9ed8\u8ba4\u7684\u8702\u9e23\u5668\u58f0\u97f3\uff0c\u5efa\u8bae\u4f7f\u7528\u8f83\u4f4e\u7684\u7535\u538b\u9a71\u52a8\u8702\u9e23\u5668\u3002"),(0,o.yg)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.yg)("p",null,"\u6b64\u793a\u4f8b\u4f7f\u7528\u8702\u9e23\u5668\u64ad\u653e\u65cb\u5f8b\u3002\u5b83\u5411\u8702\u9e23\u5668\u53d1\u9001\u9002\u5f53\u9891\u7387\u7684\u65b9\u6ce2\uff0c\u4ece\u800c\u4ea7\u751f\u76f8\u5e94\u7684\u97f3\u8c03\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"/* Macro Define */\n#define BUZZER_PIN WIO_BUZZER /* sig pin of the buzzer */\n\nint length = 15;         /* the number of notes */\nchar notes[] = \"ccggaagffeeddc \";\nint beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };\nint tempo = 300;\n\nvoid setup() {\n    //set buzzer pin as output\n    pinMode(BUZZER_PIN, OUTPUT);\n}\n\nvoid loop() {\n    for(int i = 0; i < length; i++) {\n        if(notes[i] == ' ') {\n            delay(beats[i] * tempo);\n        } else {\n            playNote(notes[i], beats[i] * tempo);\n        }\n        delay(tempo / 2);    /* delay between notes */\n    }\n\n}\n\n//Play tone\nvoid playTone(int tone, int duration) {\n    for (long i = 0; i < duration * 1000L; i += tone * 2) {\n        digitalWrite(BUZZER_PIN, HIGH);\n        delayMicroseconds(tone);\n        digitalWrite(BUZZER_PIN, LOW);\n        delayMicroseconds(tone);\n    }\n}\n\nvoid playNote(char note, int duration) {\n    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };\n    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };\n\n    // play the tone corresponding to the note name\n    for (int i = 0; i < 8; i++) {\n        if (names[i] == note) {\n            playTone(tones[i], duration);\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);