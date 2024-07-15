"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47096],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(r),m=i,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(58168),i=(r(96540),r(15680));const o={description:"Learn how to integrate the N3uron application on the reComputer R1000 with edge computing capabilities and interact with AWS IoT Core. In this tutorial, we will cover the steps to subscribe to outcome data efficiently.",title:"reComputer R1000 Connect AWS IoT Core with N3uron",keywords:["reComputer-R1000","Getting started","IIoT","Industrial","N3uron","AWS"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/recomputer_r1000_n3uron_aws",last_update:{date:"7/11/2024",author:"Kasun Thushara"}},a=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron/recomputer_r1000_n3uron_aws",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron/recomputer_r1000_n3uron_aws",title:"reComputer R1000 Connect AWS IoT Core with N3uron",description:"Learn how to integrate the N3uron application on the reComputer R1000 with edge computing capabilities and interact with AWS IoT Core. In this tutorial, we will cover the steps to subscribe to outcome data efficiently.",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron/recomputer_r1000_n3uron_aws.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron",slug:"/recomputer_r1000_n3uron_aws",permalink:"/recomputer_r1000_n3uron_aws",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron/recomputer_r1000_n3uron_aws.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1720656e3,formattedLastUpdatedAt:"Jul 11, 2024",frontMatter:{description:"Learn how to integrate the N3uron application on the reComputer R1000 with edge computing capabilities and interact with AWS IoT Core. In this tutorial, we will cover the steps to subscribe to outcome data efficiently.",title:"reComputer R1000 Connect AWS IoT Core with N3uron",keywords:["reComputer-R1000","Getting started","IIoT","Industrial","N3uron","AWS"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/recomputer_r1000_n3uron_aws",last_update:{date:"7/11/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"reComputer R1000 with N3uron",permalink:"/recomputer_r1000_n3uron"},next:{title:"Connect N3uron with BACnet on reComputer R1000",permalink:"/recomputer_r1000_n3uron_bacnet"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Configure N3uron IIoT Platform",id:"configure-n3uron-iiot-platform",level:2},{value:"Configure N3uron\u2019s MQTT Module within the WebUI\u2019s Explorer Panel",id:"configure-n3urons-mqtt-module-within-the-webuis-explorer-panel",level:2},{value:"Subscribe to a Topic Using N3uron\u2019s MQTT Module",id:"subscribe-to-a-topic-using-n3urons-mqtt-module",level:2},{value:"Create a Tag",id:"create-a-tag",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},g="wrapper";function c(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"We have outlined the process of transmitting data from your ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/recomputer_r1000_aws/"},"reComputer-R1000 device with AWS IoT Core using the MQTT protocol"),". This tutorial will seamlessly integrate with the aforementioned process. In this tutorial, we will delve into the intricacies of interfacing between the N3uron Edge IIoT platform and AWS IoT Core."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("h3",{id:"hardware"},"Hardware"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{class:"table-nobg"},(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.yg)("h3",{id:"software"},"Software"),(0,i.yg)("p",null,"We highly recommend studying the ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/recomputer_r1000_n3uron/"},"Getting Started with N3uron")," guide. It provides essential insights into navigating the N3uron web interface, understanding concepts such as the Web UI and Web Vision module, grasping the concept of tags, and creating basic dashboards. If you haven't explored these fundamentals yet, it's advisable to do so before proceeding further. You can access the guide through the provided link."),(0,i.yg)("p",null,"If you haven't explored our guide on integrating ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/recomputer_r1000_aws/"},"AWS IoT Core with reComputer-R1000"),", we recommend doing so as well. This comprehensive guide covers everything from the basics to the advanced steps of publishing a value to IoT Core. ",(0,i.yg)("strong",{parentName:"p"},"As it complements the current tutorial, it's beneficial to familiarize yourself with this content too"),"."),(0,i.yg)("h2",{id:"configure-n3uron-iiot-platform"},"Configure N3uron IIoT Platform"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Create a Module Instance Within N3uron\u2019s WebUI Interface")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: In the ",(0,i.yg)("strong",{parentName:"li"},"Navigation")," panel, select ",(0,i.yg)("strong",{parentName:"li"},"Config"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 02: In the ",(0,i.yg)("strong",{parentName:"li"},"Explorer")," panel, select ",(0,i.yg)("strong",{parentName:"li"},"Modules"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 03: Click on the ",(0,i.yg)("strong",{parentName:"li"},"Model")," menu and select ",(0,i.yg)("strong",{parentName:"li"},"New Module"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/createmodel.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 04: The instance can be given any name but for the example we will use ",(0,i.yg)("strong",{parentName:"li"},"MQTT"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 05: Set the ",(0,i.yg)("strong",{parentName:"li"},"Module Type")," property to ",(0,i.yg)("strong",{parentName:"li"},"MqttClient"),". Leave the rest of the properties as their default values and click ",(0,i.yg)("strong",{parentName:"li"},"Save"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selectmodeltype.PNG"})),(0,i.yg)("h2",{id:"configure-n3urons-mqtt-module-within-the-webuis-explorer-panel"},"Configure N3uron\u2019s MQTT Module within the WebUI\u2019s Explorer Panel"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: In the ",(0,i.yg)("strong",{parentName:"li"},"Explorer")," panel, select the ",(0,i.yg)("strong",{parentName:"li"},"MQTT")," instance you have just created."),(0,i.yg)("li",{parentName:"ul"},"Step 02: Click on the Model menu button and select ",(0,i.yg)("strong",{parentName:"li"},"New Connection"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 03: Give the New connection a name. In this example, it has been named ",(0,i.yg)("strong",{parentName:"li"},"AWS"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconnection.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 04: Configure the connection properties:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"A: Select ",(0,i.yg)("strong",{parentName:"li"},"Amazon Web Services")," from the ",(0,i.yg)("strong",{parentName:"li"},"Destination Broker")," drop down menu. ",(0,i.yg)("strong",{parentName:"li"},"Authentication mode")," will be ",(0,i.yg)("strong",{parentName:"li"},"Certificate"),". Also ",(0,i.yg)("strong",{parentName:"li"},"Client Id")," is ",(0,i.yg)("strong",{parentName:"li"},"N3uron")," in this example."),(0,i.yg)("li",{parentName:"ul"},"B: Load the ",(0,i.yg)("strong",{parentName:"li"},"Certificate, Private key and CA certificate")," you downloaded and saved when you created the Thing in the AWS IoT Console."),(0,i.yg)("li",{parentName:"ul"},"C: In the AWS IoT console, in the left-hand menu, go to ",(0,i.yg)("strong",{parentName:"li"},"Settings")," and copy your ",(0,i.yg)("strong",{parentName:"li"},"Device Data Endpoint"),". Go back to N3uron and paste it in the ",(0,i.yg)("strong",{parentName:"li"},"Broker URL")," field."),(0,i.yg)("li",{parentName:"ul"},"D: Leave the rest of the properties as their default values and click on ",(0,i.yg)("strong",{parentName:"li"},"Save"),".")))),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWSconfig.PNG"})),(0,i.yg)("h2",{id:"subscribe-to-a-topic-using-n3urons-mqtt-module"},"Subscribe to a Topic Using N3uron\u2019s MQTT Module"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: In the ",(0,i.yg)("strong",{parentName:"li"},"Model")," panel, right-click on the ",(0,i.yg)("strong",{parentName:"li"},"AWS")," Connection, select ",(0,i.yg)("strong",{parentName:"li"},"New Subscriber"),", and give it a name. In this example, we will simply use ",(0,i.yg)("strong",{parentName:"li"},"Subscriber"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newsubscriber.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 02: Click on it and add a name in the Topic field. In this example, we have used device/data.(In our AWS tutorial , we have published data under this topic.)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 03: Set the following properties using the values shown below, leaving the rest of them as their default values:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Qos"),": Qos 0."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Encoding"),": UTF8"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Compression"),": None"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Serialization"),": JSON"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Data parser/Type"),": MqttClient JSON")))),(0,i.yg)("p",null,"And Save it."),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/Subscriberconfig.PNG"})),(0,i.yg)("h2",{id:"create-a-tag"},"Create a Tag"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: Within the ",(0,i.yg)("strong",{parentName:"li"},"Explorer panel"),", select ",(0,i.yg)("strong",{parentName:"li"},"Tags"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 02: In the Model menu, right-click on the folder icon, select ",(0,i.yg)("strong",{parentName:"li"},"New Tag"),", and give it a name. In this example, we will use ",(0,i.yg)("strong",{parentName:"li"},"Subscribed_value"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/newtag.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 03: In the Configuration panel, set the following properties using the values shown below, leaving the rest of them as their default values:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Type"),": Number."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Source/Enabled"),": Yes"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Module Type"),": MqttClient"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Module name"),": MQTT"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Config/Subscriber"),": AWS/Subscriber"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 04: Click on ",(0,i.yg)("strong",{parentName:"p"},"Save"),"."))),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagconfig.PNG"})),(0,i.yg)("p",null,"After you run the python script which we provide on AWS IoT and reComputer-R1000 and AWS IoT.\nGo back to the N3uron WebUI interface and in the left-hand panel, select ",(0,i.yg)("strong",{parentName:"p"},"Data/Real Time"),". You should now see the ",(0,i.yg)("strong",{parentName:"p"},"Subscribed_Value")," tag you created before with a value."),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/realtimedata.PNG"})),(0,i.yg)("h2",{id:"visualization"},"Visualization"),(0,i.yg)("p",null,"If you have create a webvision module you can start this steps. "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: Navigate to ",(0,i.yg)("strong",{parentName:"li"},"WebVision")," in the ",(0,i.yg)("strong",{parentName:"li"},"Config")," section and click on ",(0,i.yg)("strong",{parentName:"li"},"Open Designer"),". Log in using your Administrator credentials.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/wenvision.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 02: In the Templates section, create a new Container named as you wish. Then, designate this container as the startup. This will set this as our initial WebVision screen. It will appear with an asterisk symbol (*) beside it.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/webvison.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 03: Change the background color of the  container.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/colorchabge.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 04: Inside the Main container, navigate to ",(0,i.yg)("strong",{parentName:"li"},"Components")," and add a new component. For this example, select the ",(0,i.yg)("strong",{parentName:"li"},"Label")," component.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/addnewcomp.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 05: You can modify the properties of the label for a better appearance.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/changeproperties.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 06: Within the ",(0,i.yg)("strong",{parentName:"li"},"Label component"),", select the tag that will provide the values displayed on the Label component.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/selecttag.PNG"})),(0,i.yg)("center",null,(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/taglist.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 07: Select tag Property ")),(0,i.yg)("center",null,(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/tagproperty.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 08: Next, navigate to WebVision in the Config section and click on Open UI. Log in using your Administrator credentials."),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png"})),(0,i.yg)("p",{parentName:"li"},"Subsequently, you will witness the ultimate result, which involves updating the label values in accordance with the data subscribed from the cloud."))),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/output.PNG"})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);