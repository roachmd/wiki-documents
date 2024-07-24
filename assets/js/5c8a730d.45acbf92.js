"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6836],{15680:(e,t,o)=>{o.d(t,{xA:()=>g,yg:()=>h});var n=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},g=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),p=d(o),u=i,h=p["".concat(l,".").concat(u)]||p[u]||c[u]||s;return o?n.createElement(h,r(r({ref:t},g),{},{components:o})):n.createElement(h,r({ref:t},g))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,r=new Array(s);r[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,r[1]=a;for(var d=2;d<s;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},60275:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=o(58168),i=(o(96540),o(15680));const s={description:"This project combines the XIAO ESP32S3 and Grove Vision AI V2 to create a compact person detection device. The V2 module, equipped with a person detection model, identifies human presence and sends the results to the ESP32S3. The microcontroller then processes the information and forwards the detection alerts to a designated Telegram account, providing real-time notifications whenever a person is detected in the monitored area.",title:"Deploy Grove Vision AI V2 To Notifies You Via Telegram",image:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/headimage2.png",slug:"/grove_vision_ai_v2_telegram",last_update:{date:"05/27/2024",author:"Allen"}},r=void 0,a={unversionedId:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove_vision_ai_v2_telegram",id:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove_vision_ai_v2_telegram",title:"Deploy Grove Vision AI V2 To Notifies You Via Telegram",description:"This project combines the XIAO ESP32S3 and Grove Vision AI V2 to create a compact person detection device. The V2 module, equipped with a person detection model, identifies human presence and sends the results to the ESP32S3. The microcontroller then processes the information and forwards the detection alerts to a designated Telegram account, providing real-time notifications whenever a person is detected in the monitored area.",source:"@site/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove_vision_ai_v2_telegram.md",sourceDirName:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application",slug:"/grove_vision_ai_v2_telegram",permalink:"/grove_vision_ai_v2_telegram",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove_vision_ai_v2_telegram.md",tags:[],version:"current",lastUpdatedBy:"Allen",lastUpdatedAt:1716768e3,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{description:"This project combines the XIAO ESP32S3 and Grove Vision AI V2 to create a compact person detection device. The V2 module, equipped with a person detection model, identifies human presence and sends the results to the ESP32S3. The microcontroller then processes the information and forwards the detection alerts to a designated Telegram account, providing real-time notifications whenever a person is detected in the monitored area.",title:"Deploy Grove Vision AI V2 To Notifies You Via Telegram",image:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/headimage2.png",slug:"/grove_vision_ai_v2_telegram",last_update:{date:"05/27/2024",author:"Allen"}},sidebar:"ProductSidebar",previous:{title:"Building a crowd density based on Grove Vision AI V2 and Home Assistant",permalink:"/vision_ai_v2_crowd_heat_map"},next:{title:"Grove Smart IR Gesture Sensor (PAJ7660)",permalink:"/grove_gesture_paj7660"}},l={},d=[{value:"Material Required",id:"material-required",level:2},{value:"Part 1. Telegram API",id:"part-1-telegram-api",level:2},{value:"Step 1. Use BotFather create a new bot",id:"step-1-use-botfather-create-a-new-bot",level:3},{value:"Step 2. Get your Token And ChatId",id:"step-2-get-your-token-and-chatid",level:3},{value:"Part 2. People Detection Model",id:"part-2-people-detection-model",level:2},{value:"Step 3. Choose model",id:"step-3-choose-model",level:4},{value:"Step 4. Connect the module and upload a suitable model",id:"step-4-connect-the-module-and-upload-a-suitable-model",level:3},{value:"Step 5. Observations",id:"step-5-observations",level:3},{value:"Part 3. Send Notification to Telegram",id:"part-3-send-notification-to-telegram",level:2},{value:"Step 6. Installation",id:"step-6-installation",level:3},{value:"Step 7. Coding",id:"step-7-coding",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:d},p="wrapper";function c(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,n.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("iframe",{width:"400",height:"700",src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/xiao_telegram.mp4",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),(0,i.yg)("p",null,"This project combines the XIAO ESP32S3 and Grove Vision AI V2 to create a compact person detection device. The V2 module, equipped with a person detection model, identifies human presence and sends the results to the ESP32S3. The microcontroller then processes the information and forwards the detection alerts to a designated Telegram account, providing real-time notifications whenever a person is detected in the monitored area."),(0,i.yg)("h2",{id:"material-required"},"Material Required"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{align:"center"},(0,i.yg)("tr",null,(0,i.yg)("th",null,"XIAO ESP32S3"),(0,i.yg)("th",null,"Grove Vision AI V2 Kit")),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg",style:{width:250,height:"auto"}}))),(0,i.yg)("td",null,(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg",style:{width:250,height:"auto"}})))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,i.yg)("td",null,(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.yg)("h2",{id:"part-1-telegram-api"},"Part 1. Telegram API"),(0,i.yg)("p",null,"If we want to send something to Telegram, we need to get Telegram's ",(0,i.yg)("strong",{parentName:"p"},"Token")," and ",(0,i.yg)("strong",{parentName:"p"},"ChatId")," to access Telegram's API. So let's get them in the following steps."),(0,i.yg)("h3",{id:"step-1-use-botfather-create-a-new-bot"},"Step 1. Use BotFather create a new bot"),(0,i.yg)("p",null,"Open your Telegram and get into BotFather page, send ",(0,i.yg)("strong",{parentName:"p"},"/start")," and BotFather will give you some feedback."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/2.png",style:{width:500,height:"auto"}})),(0,i.yg)("p",null,"Click the ",(0,i.yg)("strong",{parentName:"p"},"/newbot")," link. BotFather will create a new bot for you and you should give your bot a name according the rule."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/3.png",style:{width:500,height:"auto"}})),(0,i.yg)("h3",{id:"step-2-get-your-token-and-chatid"},"Step 2. Get your Token And ChatId"),(0,i.yg)("p",null,"According to previous step, BotFather will give you some feedback when you created your bot. You will find ",(0,i.yg)("strong",{parentName:"p"},"Token")," in the feedback and the format would be like: ",(0,i.yg)("strong",{parentName:"p"},"123456789:AoUJnnpoFlkkdfJbCXlo..."),". And then use your Token to access this link to get your ",(0,i.yg)("strong",{parentName:"p"},"ChatId"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"#access this link using your Token\nhttps://api.telegram.org/bot{Token}/getUpdates\n\n#example\nhttps://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates\n")),(0,i.yg)("p",null,"You will find your ",(0,i.yg)("strong",{parentName:"p"},"ChatId")," following the image below. The ChatId would be like: ",(0,i.yg)("strong",{parentName:"p"},"12234556"),". ",(0,i.yg)("strong",{parentName:"p"},"Save your Token and ChatId"),", we will use them later."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"If you see nothing in this page, please send something to your bot and refresh this page again.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/1.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h2",{id:"part-2-people-detection-model"},"Part 2. People Detection Model"),(0,i.yg)("h4",{id:"step-3-choose-model"},"Step 3. Choose model"),(0,i.yg)("p",null,"First, we need to open the main SenseCraft AI Model Assistant page."),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://sensecraft.seeed.cc/ai/#/home"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"},"Go to SenseCraft AI"))))),(0,i.yg)("br",null),(0,i.yg)("p",null,"Choose the model you want to deploy and click into it."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/4.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"You can see the description of this model here and if it suit to you, click the ",(0,i.yg)("strong",{parentName:"p"},"Deploy Model")," button at the right side."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/5.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h3",{id:"step-4-connect-the-module-and-upload-a-suitable-model"},"Step 4. Connect the module and upload a suitable model"),(0,i.yg)("p",null,"Please use a Type-C type cable to connect Grove Vision AI V2 to your computer and then click ",(0,i.yg)("strong",{parentName:"p"},"Connect")," button."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png",style:{width:600,height:"auto"}})),(0,i.yg)("p",null,"Click ",(0,i.yg)("strong",{parentName:"p"},"Confirm")," button. In the upper left corner of the this page, you can select ",(0,i.yg)("strong",{parentName:"p"},"USB Single Serial"),". Then click the ",(0,i.yg)("strong",{parentName:"p"},"Connect")," button."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png",style:{width:600,height:"auto"}})),(0,i.yg)("p",null,"Please remain on this page for 1-2 minutes until the model is successfully uploaded. Kindly note that switching to another page tab during this process may result in an unsuccessful upload (our team is actively working on resolving this issue, and it will be fixed soon)."),(0,i.yg)("h3",{id:"step-5-observations"},"Step 5. Observations"),(0,i.yg)("p",null,"Once the model is uploaded successfully, you will be able to see the live feed from the Grove Vision AI V2 camera in the Preview on the left."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/6.png",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"Congratulations! So far so good, next we are going to write some code to send something to Telegram via XIAO ESP32 series."),(0,i.yg)("h2",{id:"part-3-send-notification-to-telegram"},"Part 3. Send Notification to Telegram"),(0,i.yg)("h3",{id:"step-6-installation"},"Step 6. Installation"),(0,i.yg)("p",null,"First, connect XIAO ESP32S3 to Grove Vision AI V2 via pin, and then connect antenna to XIAO ESP32S3. Finally, connect the XIAO ESP32S3 to your computer via Type-C cable."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/8.png",style:{width:500,height:"auto"}})),(0,i.yg)("h3",{id:"step-7-coding"},"Step 7. Coding"),(0,i.yg)("p",null,"First we need to download ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA"},"SSCMA Library")," in this page."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/10.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"And then we need to add this zip package to Arduino IDE."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/11.png",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"Now, create a new sketch in Arduino IDE and past the following code to the sketch and upload."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Please change to your 2.4G Wi-Fi ",(0,i.yg)("strong",{parentName:"p"},"ssid"),", ",(0,i.yg)("strong",{parentName:"p"},"password")," and your Telegram ",(0,i.yg)("strong",{parentName:"p"},"Token"),", ",(0,i.yg)("strong",{parentName:"p"},"ChatId")," saved before.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <WiFi.h>\n#include <HTTPClient.h>\n#include <ArduinoJson.h>\n#include <Seeed_Arduino_SSCMA.h>\n\n//change to your ssid and password\nconst char* ssid = "xxx";\nconst char* password = "xxx";\n\n//change to your token and chatid\nconst String botToken = "xxx";\nconst String chatId = "xxx";\n\nSSCMA AI;\n\nvoid setup()\n{\n    AI.begin();\n    Serial.begin(9600);\n    WiFi.begin(ssid, password); \n    while (WiFi.status() != WL_CONNECTED) {\n      delay(1000);\n      Serial.println("Connecting to WiFi...");\n    }\n}\n\nvoid loop()\n{\n    if (!AI.invoke()){\n      for (int i = 0; i < AI.boxes().size(); i++){\n          //Get the model inference\n          if(AI.boxes()[i].score>70){\n            Serial.println("People detected");\n            //Call the function to send the monitering result to Telegram\n            if(WiFi.status() == WL_CONNECTED) {\n              sendMessage("People Detected");\n              delay(1000);\n            }\n          }\n      }\n    }\n}\n\n//The function that access Telegram and send some message\nvoid sendMessage(String text) {\n  String url = "https://api.telegram.org/bot" + botToken + "/sendMessage";\n  String payload = "{\\"chat_id\\":\\"" + chatId + "\\",\\"text\\":\\"" + text + "\\"}";\n  \n  HTTPClient http;\n  http.begin(url);\n  http.addHeader("Content-Type", "application/json");\n  \n  int statusCode = http.POST(payload);\n  if (statusCode == 200) {\n    Serial.println("Message sent successfully!");\n  } else {\n    Serial.println("Failed to send message.");\n  }\n  http.end();\n}\n')),(0,i.yg)("p",null,"After uploading code, open serial monitor and use Grove Vision AI V2 to detect people. You will see the following results when Vision AI V2 has detected people."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/7.png",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"Now, open your bot chatting page in Telegram and you will see some messages sent from XIAO ESP32S3. Also you can use power bank to supply eletricity like the vedio."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/9.png",style:{width:500,height:"auto"}})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}c.isMDXComponent=!0}}]);