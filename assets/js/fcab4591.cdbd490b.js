"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32744],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),d=n,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const i={description:"Object Tracking with reTerminal and Pi camera with OpenCV",title:"Object Tracking with reTerminal and Pi camera with OpenCV",keywords:["Edge","reTerminal","piCamera","OpenCV","Object Tracking"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_Face-tracking",last_update:{date:"11/7/2023",author:"Kasun Thushara"}},o=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV/reTerminal_DM-tracking",id:"Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV/reTerminal_DM-tracking",title:"Object Tracking with reTerminal and Pi camera with OpenCV",description:"Object Tracking with reTerminal and Pi camera with OpenCV",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV/reTerminal_DM-tracking.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV",slug:"/reTerminal_DM_Face-tracking",permalink:"/reTerminal_DM_Face-tracking",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV/reTerminal_DM-tracking.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1699315200,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{description:"Object Tracking with reTerminal and Pi camera with OpenCV",title:"Object Tracking with reTerminal and Pi camera with OpenCV",keywords:["Edge","reTerminal","piCamera","OpenCV","Object Tracking"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_Face-tracking",last_update:{date:"11/7/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Shape Detection with reTerminal and Pi camera with OpenCV",permalink:"/reTerminal_DM_Shape_detection"},next:{title:"Object Detection with reTerminal and Pi camera",permalink:"/reTerminal_DM_Object_detection"}},s={},c=[{value:"An Introduction",id:"an-introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Tracking vs. Detection",id:"tracking-vs-detection",level:2},{value:"What are the algorithms in Tracking domain?",id:"what-are-the-algorithms-in-tracking-domain",level:2},{value:"Let&#39;s run the code.",id:"lets-run-the-code",level:2},{value:"Tech support",id:"tech-support",level:2}],p={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"an-introduction"},"An Introduction"),(0,n.yg)("p",null,"Object tracking is the process of consistently locating a specific object across consecutive frames in a video. In the realm of single object trackers, the initial frame serves as a reference, with the target object marked by a bounding rectangle. Subsequent frames then employ tracking algorithms to follow and trace the object's movement. Typically, these trackers are utilized alongside object detectors in real-world applications, combining the strengths of both technologies for enhanced accuracy and efficiency."),(0,n.yg)("center",null,(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif"})),(0,n.yg)("h2",{id:"getting-start"},"Getting Start"),(0,n.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,n.yg)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("table",{class:"table-nobg"},(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("th",{class:"table-trnobg"},"reTerminal"),(0,n.yg)("th",{class:"table-trnobg"},"PiCam")),(0,n.yg)("tr",{class:"table-trnobg"}),(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("td",{class:"table-trnobg"},(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png",style:{width:300,height:"auto"}}))),(0,n.yg)("td",{class:"table-trnobg"},(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg",style:{width:300,height:"auto"}})))),(0,n.yg)("tr",{class:"table-trnobg"}),(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("td",{class:"table-trnobg"},(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,n.yg)("td",{class:"table-trnobg"},(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/reTerminal-piCam/"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,n.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,n.yg)("p",null,"We recommend installing the ",(0,n.yg)("strong",{parentName:"p"},"Bullesye")," or ",(0,n.yg)("strong",{parentName:"p"},"Bookworm"),"  version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"},(0,n.yg)("strong",{parentName:"a"},"guide")),". "),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"We highly recommend checking out our previous tutorial on ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal_DM_opencv/"},(0,n.yg)("strong",{parentName:"a"},"Getting started with OpenCV")),", as this tutorial serves as a continuation in our series.")),(0,n.yg)("h2",{id:"tracking-vs-detection"},"Tracking vs. Detection"),(0,n.yg)("p",null,"In prior wikis, we covered ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal_DM_Face_detection/"},(0,n.yg)("strong",{parentName:"a"},"face"))," and ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal_DM_Color_detection/"},(0,n.yg)("strong",{parentName:"a"},"color detection")),", but noticed its intermittent nature. Here's a quick comparison:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Speed Advantage:"),"\nTracking is faster than detection. By leveraging prior frame data, tracking algorithms predict object locations, whereas detection algorithms often start from scratch in each frame."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Handling Failures:"),"\nIf a face detector falters due to occlusion, tracking algorithms excel. They can manage partial obstruction, offering robust performance when detection falls short."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Identity Persistence:"),"\nObject detection provides rectangles of detected objects but lacks identity persistence. Tracking excels in maintaining consistent object identity across frames, crucial for many real-world applications.")),(0,n.yg)("h2",{id:"what-are-the-algorithms-in-tracking-domain"},"What are the algorithms in Tracking domain?"),(0,n.yg)("p",null,"Here are some major object tracking algorithms with their pros and cons "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"BOOSTING")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pros: Simple and real-time. Performs well with consistent motion."),(0,n.yg)("li",{parentName:"ul"},"Cons: Struggles with complex motion patterns and occlusions."),(0,n.yg)("li",{parentName:"ul"},"Speed: Fast."),(0,n.yg)("li",{parentName:"ul"},"Accuracy: Moderate.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"MIL (Multiple Instance Learning)")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pros: Effective in handling occlusions and changes in object appearance."),(0,n.yg)("li",{parentName:"ul"},"Cons: May be sensitive to noise and background clutter."),(0,n.yg)("li",{parentName:"ul"},"Speed: Moderate."),(0,n.yg)("li",{parentName:"ul"},"Accuracy: Good.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"KCF (Kernelized Correlation Filter)")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pros: High-speed performance. Robust against scale variations."),(0,n.yg)("li",{parentName:"ul"},"Cons: Sensitive to out-of-view scenarios."),(0,n.yg)("li",{parentName:"ul"},"Speed: Fast."),(0,n.yg)("li",{parentName:"ul"},"Accuracy: Moderate to High.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"TLD (Tracking, Learning, and Detection)")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pros: Self-updating and capable of re-detecting lost objects."),(0,n.yg)("li",{parentName:"ul"},"Cons: Prone to drift and may have difficulties with fast motion."),(0,n.yg)("li",{parentName:"ul"},"Speed: Moderate."),(0,n.yg)("li",{parentName:"ul"},"Accuracy: Moderate.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"MEDIANFLOW")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pros: Robust in handling abrupt motion changes and occlusions."),(0,n.yg)("li",{parentName:"ul"},"Cons: May struggle with significant object appearance changes."),(0,n.yg)("li",{parentName:"ul"},"Speed: Fast."),(0,n.yg)("li",{parentName:"ul"},"Accuracy: Moderate.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"MOSSE (Minimum Output Sum of Squared Error)")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pros: Extremely fast and suitable for real-time applications."),(0,n.yg)("li",{parentName:"ul"},"Cons: Limited robustness under challenging conditions."),(0,n.yg)("li",{parentName:"ul"},"Speed: Very Fast."),(0,n.yg)("li",{parentName:"ul"},"Accuracy: Moderate.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"CSRT (Channel and Spatial Reliability Tracker)")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pros: High accuracy and robustness against challenging scenarios."),(0,n.yg)("li",{parentName:"ul"},"Cons: Computationally more expensive."),(0,n.yg)("li",{parentName:"ul"},"Speed: Moderate."),(0,n.yg)("li",{parentName:"ul"},"Accuracy: High.")),(0,n.yg)("h2",{id:"lets-run-the-code"},"Let's run the code."),(0,n.yg)("p",null,"Make sure that you are in correct folder. If not "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam\n\n")),(0,n.yg)("p",null,"Then or Even you can use Thonny IDE to run the python script."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"python Tracking.py\n")),(0,n.yg)("p",null,"The Python script above is designed to track faces. The following code snippet handles the scenario where tracking fails, prompting the system to initiate a new detection process and vice versa. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"python DetectandTrack.py\n")),(0,n.yg)("h2",{id:"tech-support"},"Tech support"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);