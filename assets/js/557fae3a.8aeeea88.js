"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66364],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96540),o=r(20053);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,i),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(58168),o=r(96540),a=r(20053),i=r(23104),l=r(56347),s=r(57485),c=r(31682),u=r(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function d(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,c]=m({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,u.Dv)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),y=(()=>{const e=s??p;return h({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var y=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==l&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},i,{className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function _(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return o.createElement("div",{className:(0,a.A)("tabs-container",b.tabList)},o.createElement(f,(0,n.A)({},e,t)),o.createElement(_,(0,n.A)({},e,t)))}function v(e){const t=(0,y.A)();return o.createElement(w,(0,n.A)({key:String(t)},e))}},33276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(58168),o=(r(96540),r(15680)),a=r(11470),i=r(19365);const l={description:"This wiki demonstrates yolov8s pose estimation and object detection benchmark on Raspberry Pi5 and Raspberry Pi Compute Module 4.",title:"Benchmark on RPi5 and CM4 running yolov8s with rpi ai kit",keywords:["Edge","reComputer r1000","Object detecton"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit",last_update:{date:"07/17/2024",author:"Jiahao"},no_comments:!1},s="Benchmark on RPi5 and CM4 running yolov8s with rpi ai kit",c={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Computer-Vision/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Computer-Vision/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit",title:"Benchmark on RPi5 and CM4 running yolov8s with rpi ai kit",description:"This wiki demonstrates yolov8s pose estimation and object detection benchmark on Raspberry Pi5 and Raspberry Pi Compute Module 4.",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Computer-Vision/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Computer-Vision",slug:"/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit",permalink:"/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Computer-Vision/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit.md",tags:[],version:"current",lastUpdatedBy:"Jiahao",lastUpdatedAt:1721174400,formattedLastUpdatedAt:"Jul 17, 2024",frontMatter:{description:"This wiki demonstrates yolov8s pose estimation and object detection benchmark on Raspberry Pi5 and Raspberry Pi Compute Module 4.",title:"Benchmark on RPi5 and CM4 running yolov8s with rpi ai kit",keywords:["Edge","reComputer r1000","Object detecton"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit",last_update:{date:"07/17/2024",author:"Jiahao"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"YOLOv8 Pose estimation on reComputer R1000 with Hailo-8L",permalink:"/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l"},next:{title:"Install M.2 Coral to Raspberry Pi 5",permalink:"/install_m2_coral_to_rpi5"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prepare Hardware",id:"prepare-hardware",level:2},{value:"For CM4",id:"for-cm4",level:3},{value:"For Raspberry Pi 5",id:"for-raspberry-pi-5",level:3},{value:"Run this project",id:"run-this-project",level:2},{value:"Install AI kit on RPi5",id:"install-ai-kit-on-rpi5",level:3},{value:"Install Hailo Software &amp; Verify Installation",id:"install-hailo-software--verify-installation",level:3},{value:"update the system:",id:"update-the-system",level:4},{value:"Set pcie to gen2/gen3(gen3 is faster than gen2):",id:"set-pcie-to-gen2gen3gen3-is-faster-than-gen2",level:4},{value:"Install hailo-all and reboot:",id:"install-hailo-all-and-reboot",level:4},{value:"Check Software and Hardware:",id:"check-software-and-hardware",level:4},{value:"Run Project",id:"run-project",level:3},{value:"Install Project",id:"install-project",level:4},{value:"Run the project",id:"run-the-project",level:4},{value:"Result",id:"result",level:4},{value:"Install Project",id:"install-project-1",level:4},{value:"Run the project",id:"run-the-project-1",level:4},{value:"Result",id:"result-1",level:4},{value:"Result",id:"result-2",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(h,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"benchmark-on-rpi5-and-cm4-running-yolov8s-with-rpi-ai-kit"},"Benchmark on RPi5 and CM4 running yolov8s with rpi ai kit"),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/ultralytics/ultralytics"},"YOLOv8")," (You Only Look Once version 8) is the popular most YOLO series of real-time pose estimation and object de tection models. It builds upon the strengths of its predecessors by introducing several advancements in speed, accuracy, and flexibility. The ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html"},"Raspberry-pi-AI-kit")," is used to accelerate inference speed, featuring a 13 tera-operations per second (TOPS) neural network inference accelerator built around the Hailo-8L chip."),(0,o.yg)("p",null,"This wiki showcases benchmarking of YOLOv8s for pose estimation and object detection on Raspberry Pi 5 and Raspberry Pi Compute Module 4. All tests utilize the same model (YOLOv8s), quantized to int8, with an input size of 640x640 resolution, batch size set to 1, and input from the same video at 240 FPS."),(0,o.yg)("h2",{id:"prepare-hardware"},"Prepare Hardware"),(0,o.yg)("h3",{id:"for-cm4"},"For CM4"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"reComputer r1000"),(0,o.yg)("th",null,"Raspberry Pi AI Kit")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg",style:{width:600,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg",style:{width:600,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h3",{id:"for-raspberry-pi-5"},"For Raspberry Pi 5"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Raspberry Pi5 8GB"),(0,o.yg)("th",null,"Raspberry Pi AI Kit")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg",style:{width:600,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg",style:{width:600,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h2",{id:"run-this-project"},"Run this project"),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"Method 1",label:"CM4 Benchmark",mdxType:"TabItem"},(0,o.yg)("p",null,"For object detection please refer to the following wiki:\n",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/"},"yolov8_object_detection_on_recomputer_r1000_with_hailo_8l")),(0,o.yg)("p",null,"For pose estimation Please refer to the following wiki:\n",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/"},"yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l"))),(0,o.yg)(i.A,{value:"Method 2",label:"Pi5 Benchmark",mdxType:"TabItem"},(0,o.yg)("h3",{id:"install-ai-kit-on-rpi5"},"Install AI kit on RPi5"),(0,o.yg)("p",null,"Please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/accessories/ai-kit.html"},"this")),(0,o.yg)("h3",{id:"install-hailo-software--verify-installation"},"Install Hailo Software & Verify Installation"),(0,o.yg)("h4",{id:"update-the-system"},"update the system:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"sudo apt update\nsudo apt full-upgrade\n")),(0,o.yg)("h4",{id:"set-pcie-to-gen2gen3gen3-is-faster-than-gen2"},"Set pcie to gen2/gen3(gen3 is faster than gen2):"),(0,o.yg)("p",null,"Add following text to ",(0,o.yg)("inlineCode",{parentName:"p"},"/boot/firmware/config.txt")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"#Enable the PCIe external connector\n\ndtparam=pciex1\n\n#Force Gen 3.0 speeds\n\ndtparam=pciex1_gen=3\n\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"If you want to use gen2,please comment dtparam=pciex1_gen=3")),(0,o.yg)("h4",{id:"install-hailo-all-and-reboot"},"Install hailo-all and reboot:"),(0,o.yg)("p",null,"Open terminal on the Raspberry Pi5, and input command as follows to install Hailo software."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"sudo apt install hailo-all\nsudo reboot\n")),(0,o.yg)("h4",{id:"check-software-and-hardware"},"Check Software and Hardware:"),(0,o.yg)("p",null,"Open terminal on the Raspberry Pi5, and input command as follows to check if hailo-all have been installed."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"hailortcli fw-control identify\n")),(0,o.yg)("p",null,"The right result show as bellow:"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png",alt:"pir",width:1e3,height:"auto"})),(0,o.yg)("p",null,"Open terminal on the Raspberry Pi5, and input command as follows to check if hailo-8L have been connected."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"lspci | grep Hailo\n")),(0,o.yg)("p",null,"The right result show as bellow:"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png",alt:"pir",width:1e3,height:"auto"})),(0,o.yg)("p",null,"Open terminal on the reCompuer R1000, and input command as follows to run YOLOv8."),(0,o.yg)("h3",{id:"run-project"},"Run Project"),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"Method 1",label:"Run pose estimation",mdxType:"TabItem"},(0,o.yg)("h4",{id:"install-project"},"Install Project"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git\ncd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L\n")),(0,o.yg)("h4",{id:"run-the-project"},"Run the project"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"# run pose estimation with AI kit\n\nbash run.sh pose-estimation-hailo\n\n# run pose estimation without AI kit\n\nbash run.sh pose-estimation\n")),(0,o.yg)("h4",{id:"result"},"Result"),(0,o.yg)("iframe",{width:"800",height:"400",src:"https://www.youtube.com/embed/Mo7AL7AjxwA",title:"Raspberry Pi AI: YOLOv8 Pose Estimation - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})),(0,o.yg)(i.A,{value:"Method 2",label:"Run object detection",mdxType:"TabItem"},(0,o.yg)("h4",{id:"install-project-1"},"Install Project"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git\ncd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L\n")),(0,o.yg)("h4",{id:"run-the-project-1"},"Run the project"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"# run object detection with AI kit\n\nbash run.sh object-detection-hailo\n\n# run object detection without AI kit\n\nbash run.sh object-detection\n")),(0,o.yg)("h4",{id:"result-1"},"Result"),(0,o.yg)("iframe",{width:"800",height:"400",src:"https://www.youtube.com/embed/olaSVKmt9YI",title:"Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}))))),(0,o.yg)("h2",{id:"result-2"},"Result"),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"Method 1",label:"Object Detection Benchmark",mdxType:"TabItem"},(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png",alt:"pir",width:1e3,height:"auto"}))),(0,o.yg)(i.A,{value:"Method 2",label:"Pose Estimation Benchmark",mdxType:"TabItem"},(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pose-estimation-benchmark.png",alt:"pir",width:1e3,height:"auto"})))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);