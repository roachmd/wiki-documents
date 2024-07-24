"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11339],{15680:(e,t,i)=>{i.d(t,{xA:()=>g,yg:()=>y});var r=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(i),d=n,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return i?r.createElement(y,a(a({ref:t},g),{},{components:i})):r.createElement(y,a({ref:t},g))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},76240:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=i(58168),n=(i(96540),i(15680));const o={description:"Learn how to connect your Computer R1000 to AWS IoT Core, a service that securely connects and manages IoT devices, enabling device-to-cloud communication. This guide simplifies IoT integration into the AWS ecosystem, providing a scalable platform for building smart applications.",title:"AWS IoT Core Intergate With reComputer R1000",image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",keywords:["AWS","Getting Start","Cloud"],slug:"/recomputer_r1000_aws",last_update:{date:"7/10/2024",author:"Kasun Thushara"}},a=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/AWS/recomputer_r1000_aws",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/AWS/recomputer_r1000_aws",title:"AWS IoT Core Intergate With reComputer R1000",description:"Learn how to connect your Computer R1000 to AWS IoT Core, a service that securely connects and manages IoT devices, enabling device-to-cloud communication. This guide simplifies IoT integration into the AWS ecosystem, providing a scalable platform for building smart applications.",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/AWS/recomputer_r1000_aws.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/AWS",slug:"/recomputer_r1000_aws",permalink:"/recomputer_r1000_aws",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/AWS/recomputer_r1000_aws.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1720569600,formattedLastUpdatedAt:"Jul 10, 2024",frontMatter:{description:"Learn how to connect your Computer R1000 to AWS IoT Core, a service that securely connects and manages IoT devices, enabling device-to-cloud communication. This guide simplifies IoT integration into the AWS ecosystem, providing a scalable platform for building smart applications.",title:"AWS IoT Core Intergate With reComputer R1000",image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",keywords:["AWS","Getting Start","Cloud"],slug:"/recomputer_r1000_aws",last_update:{date:"7/10/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"reComputer R1000 with balena",permalink:"/reComputer_r1000_balena"},next:{title:"YOLOv8 Object Detection on reComputer R1000 with Hailo-8L",permalink:"/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Create AWS Account",id:"create-aws-account",level:2},{value:"Register the device",id:"register-the-device",level:2},{value:"Prepare reComputer R1000",id:"prepare-recomputer-r1000",level:2},{value:"Run the code",id:"run-the-code",level:2},{value:"Test the Connection",id:"test-the-connection",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,n.yg)(p,(0,r.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"AWS IoT Core is a service that assists in securely connecting and managing Internet of Things (IoT) devices. It enables devices to communicate with each other and with the cloud, facilitating the development of smart and connected applications. AWS IoT Core streamlines the integration of IoT devices into the broader AWS ecosystem, offering a reliable and scalable platform for building IoT solutions. In this guide, we will discuss how to connect our reComputer R1000 to the AWS IoT cloud."),(0,n.yg)("h2",{id:"getting-start"},"Getting Start"),(0,n.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,n.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("table",{class:"table-nobg"},(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,n.yg)("tr",{class:"table-trnobg"}),(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("td",{class:"table-trnobg"},(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,n.yg)("tr",{class:"table-trnobg"}),(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("td",{class:"table-trnobg"},(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,n.yg)("h2",{id:"create-aws-account"},"Create AWS Account"),(0,n.yg)("p",null,"If you don't have an AWS account, you can easily create one. Please follow ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html"},(0,n.yg)("strong",{parentName:"a"},"this link"))," for guidance on how to set up your account."),(0,n.yg)("h2",{id:"register-the-device"},"Register the device"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1"),": Search IoT core and navigate to it.")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/searchbar.PNG",style:{width:800,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2"),": Next in the side bar navigate to ",(0,n.yg)("strong",{parentName:"li"},"Manage")," topic and under ",(0,n.yg)("strong",{parentName:"li"},"All Devices")," go to ",(0,n.yg)("strong",{parentName:"li"},"Things"),".")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"What is a Thing?"),'\nAWS IoT refers to Internet of Things (IoT) devices as "things" on the AWS platform. Each IoT device, such as the reComputer R1000 Device in this context, is represented as a "thing" in AWS. Importantly, once created, the name of a "thing" cannot be changed.')),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingsslidebar.PNG",style:{width:200,height:300}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3"),": Next press on ",(0,n.yg)("strong",{parentName:"li"},"Create things"))),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthings.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4"),": We are going to create for single reComputer R1000 Device. So click ",(0,n.yg)("strong",{parentName:"li"},"Create Single Thing."))),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createsinglething.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 5"),": Give a Thing name.")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingname.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 6"),": Also A thing type for your reference in the future")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"What is a Thing Type?")),(0,n.yg)("p",{parentName:"admonition"},"Thing types enable you to store descriptions and configuration information that are common to all things associated with the same thing type. This simplifies the management of things in the registry. For instance, you can define a 'Factory_HMI' thing type. For this demonstration we used edge_controller as a thing type.")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/thingtype.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createthingtype.PNG",style:{width:400,height:400}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 7")," : Generate Certificates ")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/configurecertificate.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 8"),":  To Attach policies you need to create. click on ",(0,n.yg)("strong",{parentName:"li"},"Create policy"))),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"AWS IoT Core policies are JSON documents following IAM policy conventions. They support named policies, enabling multiple identities to reference the same policy document. Named policies are versioned for easy rollback.\nThese policies provide control over access to the AWS IoT Core data plane, encompassing operations such as connecting to the AWS IoT Core message broker, sending/receiving MQTT messages, and accessing or updating a thing's Device Shadow.")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createpolicy.png",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 9"),":  Give an appropriate name to the policy and set policy effect Policy action and Policy resources as following.")),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The policy includes:"),(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"Effect"),": Specifies whether the action is allowed or denied."),(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"Action"),": Specifies the specific action that the policy permits or denies."),(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"Resource"),": Specifies the resource or resources on which the action is allowed or denied.")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/createapolicy.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 10"),": Attach Policy by policy that you made and press ",(0,n.yg)("strong",{parentName:"li"},"Create thing"))),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/policycreatething.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 11"),":Next you can download certificates and keys. Make sure to download ",(0,n.yg)("strong",{parentName:"li"},"Device certificate, Private and Public keys and Root CA certificate.")," ")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/certicates.PNG",style:{width:600,height:450}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 12")," : Attach to the thing (reComputer R1000)\nFor that go to ",(0,n.yg)("strong",{parentName:"li"},"Security")," >> ",(0,n.yg)("strong",{parentName:"li"},"Certificates"))),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"When you create and enroll a certificate independently from an AWS IoT thing, it lacks policies for AWS IoT operations and isn't associated with any thing object. This explains how to establish these connections for a registered certificate. The certificate authenticates the device with AWS IoT for connection. Linking the certificate to a thing resource creates the relationship between the device (via the certificate) and the thing resource. To grant the device permission for AWS IoT actions, such as connecting and publishing messages, it's essential to attach a suitable policy to the device's certificate.")),(0,n.yg)("p",null,"After selecting the thing that you made from ",(0,n.yg)("strong",{parentName:"p"},"Actions")," drop down menu then press ",(0,n.yg)("strong",{parentName:"p"},"Attach to thing"),"."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy1.png",style:{width:800,height:"auto"}})),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_thing.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 13"),": Attach the policy also. ")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy2.png",style:{width:800,height:"auto"}})),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/attach_policy.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("h2",{id:"prepare-recomputer-r1000"},"Prepare reComputer R1000"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 01"),":Create a Virtual Environmnet. Execute these commands one by one, and you will end up with a virtual environment.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"mkdir AWS_project\ncd AWS_project\npython -m venv --system-site-packages env\nsource env/bin/activate\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 02"),": Install Mqtt library")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},'pip3 install "paho-mqtt<2.0.0"\n')),(0,n.yg)("h2",{id:"run-the-code"},"Run the code"),(0,n.yg)("p",null,"To accomplish this, download our ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWStest.py"},"test Python file"),". Ensure that your device certificates, key files (public and private keys), root access file, and this Python file are in the same folder on your Device. Additionally, you need to modify the connection URL."),(0,n.yg)("p",null,"To do that :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 01"),": Go to Settings"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/settings.PNG",style:{width:200,height:300}}))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 02")," : Then you will find the URL "),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/weburl.PNG",style:{width:600,height:"auto"}}))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 03")," : Replace those file names with yours and run the file"))),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/code.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 04")," : Direct to the folder and Run the file.")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/cmd.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("h2",{id:"test-the-connection"},"Test the Connection"),(0,n.yg)("p",null,"Go to MQTT test Client under the ",(0,n.yg)("strong",{parentName:"p"},"Test")," tab and type the topic name to subscribe. In this case it is device/data."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/mqtttest.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("p",null,"The output is some thing like this. The massage from reComputer-R1000 is pop up in the console."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/seeedop.PNG",style:{width:600,height:"auto"}})),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);