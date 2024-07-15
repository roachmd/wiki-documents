"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89685],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=g(a),c=r,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||i;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var g=2;g<i;g++)s[g]=a[g];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},95392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const i={description:"Frigate intergrating with reTerminal DM",title:"Frigate intergrating with reTerminal DM",keywords:["reTerminal Dm","Getting started","Frigate","Home assistant"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reterminal-DM-Frigate",last_update:{date:"8/25/2023",author:"Kasun Thushara"}},s=void 0,o={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Home-Assistant/reterminal-DM-Frigate",id:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Home-Assistant/reterminal-DM-Frigate",title:"Frigate intergrating with reTerminal DM",description:"Frigate intergrating with reTerminal DM",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/Home-Assistant/reterminal-DM-Frigate.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal-DM/Home-Assistant",slug:"/reterminal-DM-Frigate",permalink:"/reterminal-DM-Frigate",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/Home-Assistant/reterminal-DM-Frigate.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1692921600,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{description:"Frigate intergrating with reTerminal DM",title:"Frigate intergrating with reTerminal DM",keywords:["reTerminal Dm","Getting started","Frigate","Home assistant"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reterminal-DM-Frigate",last_update:{date:"8/25/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM Hardware Guide",permalink:"/reterminal-dm-hardware-guide"},next:{title:"Train your own data set with Yolov5 and Deploy on reTerminal DM",permalink:"/reTerminal-DM-Yolo5"}},l={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Frigate",id:"frigate",level:3},{value:"Home assistant",id:"home-assistant",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Software preparation",id:"software-preparation",level:3},{value:"Install Home Assistant Supervised OS to Raspberry pi.",id:"install-home-assistant-supervised-os-to-raspberry-pi",level:2},{value:"Step 1: Enhance Your System",id:"step-1-enhance-your-system",level:3},{value:"Step 2: Integrate Docker",id:"step-2-integrate-docker",level:3},{value:"Step 3: Addressing CGroup Version",id:"step-3-addressing-cgroup-version",level:3},{value:"Step 4: Install OS-Agent (ver. 1.3)",id:"step-4-install-os-agent-ver-13",level:3},{value:"Step 5: Acquire Home Assistant Supervised",id:"step-5-acquire-home-assistant-supervised",level:3},{value:"Step 6: Home Assistant Supervised Installation",id:"step-6-home-assistant-supervised-installation",level:3},{value:"Step 7: Address Installation Errors",id:"step-7-address-installation-errors",level:3},{value:"Step 8: Finalize Installation and Wi-Fi Setup",id:"step-8-finalize-installation-and-wi-fi-setup",level:3},{value:"Install MQTT Broker",id:"install-mqtt-broker",level:2},{value:"Install Frigate (Full Access)",id:"install-frigate-full-access",level:2},{value:"Step 1: Clone Repository",id:"step-1-clone-repository",level:3},{value:"Step 2: Install the Full Access Frigate NVR Addon.",id:"step-2-install-the-full-access-frigate-nvr-addon",level:3},{value:"Step 3: Create frigate.yml",id:"step-3-create-frigateyml",level:3},{value:"Step 4: Start frigate",id:"step-4-start-frigate",level:3},{value:"Step 5: Check the Stream",id:"step-5-check-the-stream",level:3},{value:"Step 6: Enable object detection",id:"step-6-enable-object-detection",level:3},{value:"Resources",id:"resources",level:2}],u={toc:g},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"In the current era of seamless integration of smart technology into our daily lives, the demand for intelligent and secure home automation is stronger than ever. Imagine a scenario where your home not only meets your needs but also promptly detects and alerts you about suspicious activities in your backyard. This is where the combination of advanced hardware and open-source software takes center stage. In this article, we'll explore the synergy between Seeed Studio reTerminalDM, Home Assistant OS, and the Frigate add-on with Coral AI USB TPU. This trio offers a unique opportunity for a centralized, privacy-conscious, and AI-driven home automation setup that enhances your lifestyle while ensuring safety. Join us to delve into the advantages and limitless potential of this fusion at the forefront of modern smart living."),(0,r.yg)("h3",{id:"frigate"},"Frigate"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png",alt:"pir",width:"200",height:"auto"})),(0,r.yg)("p",null,"Frigate emerges as a remarkable open-source Network Video Recorder (NVR) tailored for real-time AI-driven object detection. The distinctive feature of Frigate lies in its localized processing, ensuring that all computations take place on your personal hardware. This approach guarantees the utmost privacy, as your camera feeds never traverse outside the boundaries of your home. With Frigate, you gain a powerful tool that empowers you to enhance security and monitoring through advanced object recognition technology while maintaining complete control over your data."),(0,r.yg)("h3",{id:"home-assistant"},"Home assistant"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png",alt:"pir",width:"200",height:"auto"})),(0,r.yg)("p",null,"Home Assistant OS is an operating system designed specifically for running Home Assistant, an open-source home automation platform. Home Assistant allows you to control and automate various smart devices and services in your home.\nHome Assistant OS provides a streamlined and optimized environment for running Home Assistant. It comes pre-installed with the necessary components to set up and manage your smart home devices, integrate with different protocols and platforms, and create automation routines."),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here. And also you need IP cameras which support for this project. You can view those supported cameras from Frigate ",(0,r.yg)("a",{parentName:"p",href:"https://docs.frigate.video/frigate/hardware"},"official site"),"."),(0,r.yg)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"reTerminal DM"),(0,r.yg)("th",null,"Coral USB Accelerator")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminal-dm.png",style:{width:250,height:"auto"}}))),(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/coral.png",style:{width:250,height:"auto"}})))),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Considering the power requirements of the USB Coral accelerator, we strongly recommend investing in a high-quality USB-powered hub. This hub will provide sufficient power to accommodate the needs of the Coral accelerator, ensuring stable and optimal performance.")),(0,r.yg)("h3",{id:"software-preparation"},"Software preparation"),(0,r.yg)("p",null,"We recommend installing the latest version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reterminal-dm-flash-OS/"},"guide"),"."),(0,r.yg)("h2",{id:"install-home-assistant-supervised-os-to-raspberry-pi"},"Install Home Assistant Supervised OS to Raspberry pi."),(0,r.yg)("p",null,"Installing Home Assistant Supervised on your Raspberry Pi CM4 based reTerminal DM is a comprehensive process that amalgamates several critical steps to ensure a successful setup. "),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"In some steps, if you are connected through Wi-Fi, you may lose connection. It is recommended to use a LAN connection instead.")),(0,r.yg)("h3",{id:"step-1-enhance-your-system"},"Step 1: Enhance Your System"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Commence by executing a system update log by using the following command:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Following this, proceed to install the following dependencies:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install \\\napparmor \\\njq \\\nwget \\\ncurl \\\nudisks2 \\\nlibglib2.0-bin \\\nnetwork-manager \\\ndbus \\\nsystemd-journal-remote -y\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Fix broken installations"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt --fix-broken install\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Restart reTerminal"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,r.yg)("h3",{id:"step-2-integrate-docker"},"Step 2: Integrate Docker"),(0,r.yg)("p",null,"Installing Docker is pivotal. It's vital to avoid installing Portainer, as it might negatively impact the overall installation process. Execute the following commands:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Add Docker user to the system"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo usermod -aG docker pi\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Check whether Docker is working properly"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"docker --version\n")),(0,r.yg)("h3",{id:"step-3-addressing-cgroup-version"},"Step 3: Addressing CGroup Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Home Assistant Supervisor's compatibility hinges on a specific Docker CGroup v1. To ensure this compatibility, the following changes need to be made:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/default/grub\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Add this line and save it."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"systemd.unified_cgroup_hierarchy=false\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Open this file"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo nano /boot/cmdline.txt\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Add this line end of the phrase and save it."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"\nsystemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor\n")),(0,r.yg)("h3",{id:"step-4-install-os-agent-ver-13"},"Step 4: Install OS-Agent (ver. 1.3)"),(0,r.yg)("p",null,"Download the suitable OS-Agent based on your CPU architecture, and then proceed to install it: ",(0,r.yg)("strong",{parentName:"p"},"For Raspberry pi 64 bit OS is linux aarch64"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Install Home Asssitant OS Agent"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Ensure the installation was successful by running"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"gdbus introspect --system --dest io.hass.os --object-path /io/hass/os\n")),(0,r.yg)("h3",{id:"step-5-acquire-home-assistant-supervised"},"Step 5: Acquire Home Assistant Supervised"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Download the latest Home Assistant Supervised package:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb\n")),(0,r.yg)("h3",{id:"step-6-home-assistant-supervised-installation"},"Step 6: Home Assistant Supervised Installation"),(0,r.yg)("p",null,"Important: This step necessitates a LAN connection, as Wi-Fi might be disrupted during the process:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i homeassistant-supervised.deb\n")),(0,r.yg)("h3",{id:"step-7-address-installation-errors"},"Step 7: Address Installation Errors"),(0,r.yg)("p",null,"In case of installation errors, rectify them by running:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt --fix-broken install\n")),(0,r.yg)("p",null,"Upon successful correction, a blue screen will appear, allowing you to select  ",(0,r.yg)("strong",{parentName:"p"},"Raspberry Pi4 64")," model."),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png"})),(0,r.yg)("h3",{id:"step-8-finalize-installation-and-wi-fi-setup"},"Step 8: Finalize Installation and Wi-Fi Setup"),(0,r.yg)("p",null,"Allow a few minutes for Home Assistant to become accessible at http://","[your_raspberry_IP]",":8123. "),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you encounter Wi-Fi connectivity issues after rebooting, follow these steps")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"To enable 'dhcpcd', execute the following command:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable dhcpcd\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Disable the networking service with the command:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl disable networking\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Reboot the Raspberry Pi to apply the changes:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},'To resolve the "Network Manager issues,"(find in settings) you can rectify the situation by initiating and subsequently enabling the Network Manager. Utilize the following command to accomplish this:')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable NetworkManager\n")),(0,r.yg)("h2",{id:"install-mqtt-broker"},"Install MQTT Broker"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Navigate to Settings > Add-on  > Click on MQTT Broker."),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Press install and after the installation enable start on the boot "),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Navigate to Settings > Devices and Services  > Configure MQTT Broker."))),(0,r.yg)("h2",{id:"install-frigate-full-access"},"Install Frigate (Full Access)"),(0,r.yg)("h3",{id:"step-1-clone-repository"},"Step 1: Clone Repository"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Navigate to Settings > Add-on  > Add on Store > Menu > repositories"),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add the repository URL: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/blakeblackshear/frigate-hass-addons"},"https://github.com/blakeblackshear/frigate-hass-addons"),". Then you can see the Frigate add on in the Add on Store. "))),(0,r.yg)("h3",{id:"step-2-install-the-full-access-frigate-nvr-addon"},"Step 2: Install the Full Access Frigate NVR Addon."),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG"})),(0,r.yg)("h3",{id:"step-3-create-frigateyml"},"Step 3: Create frigate.yml"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'To proceed with this step, you\'ll require a file editor. Access the "Browse File System" option located in the upper left corner of the file editor.')),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a new file named frigate.yml ")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Next, you can utilize the following code snippet to assess whether you can successfully retrieve RTSP video feeds from your IP cameras. Copy the provided code and paste it into your ",(0,r.yg)("inlineCode",{parentName:"li"},"frigate.yml")," file. It is strongly advised to adhere to the guidelines provided on the ",(0,r.yg)("a",{parentName:"li",href:"https://docs.frigate.video/guides/getting_started"},"Frigate official site")," for comprehensive instructions. Remember to replace the placeholders with your specific camera name, resolution, and camera stream IP. This customization will ensure accurate integration with your camera setup.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"mqtt:\n  enabled: False\n  \n\ncameras:\n  RPIcam: # <------ Name the camera\n    ffmpeg:\n      inputs:\n        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection\n          roles:\n            - detect\n    detect:\n      enabled: False # <---- disable detection until you have a working camera feed\n      width: 1280 # <---- update for your camera's resolution\n      height: 720 # <---- update for your camera's resolution\n      fps: 5\n")),(0,r.yg)("h3",{id:"step-4-start-frigate"},"Step 4: Start frigate"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Before initiating Frigate, ensure that the protection mode is disabled. ")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Once you initiate Frigate, it's important to monitor the log closely for any potential issues that may arise. If no issues have arisen, proceed to click on the Frigate icon located in the sidebar. This action will grant you access to Frigate's interface and functionalities.")),(0,r.yg)("h3",{id:"step-5-check-the-stream"},"Step 5: Check the Stream"),(0,r.yg)("p",null,"If all the stuff work correctly you will get the stream. "),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png"})),(0,r.yg)("h3",{id:"step-6-enable-object-detection"},"Step 6: Enable object detection"),(0,r.yg)("p",null,"To achieve this, the Coral USB Accelerator Edge TPU is essential. While you can directly plug it into a USB port, there might be instances where it doesn't function as expected due to its higher power requirements. Therefore, we highly recommend utilizing a reliable USB-powered hub. This will ensure stable power delivery and optimal performance for the Coral USB Accelerator, enhancing its compatibility and effectiveness."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Change frigate.yml file with below source code")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"mqtt:\n  enabled: False\n  \ndetectors: # <---- add detectors\n  coral:\n    type: edgetpu\n    device: usb\n\ncameras:\n  RPIcam: # <------ Name the camera\n    ffmpeg:\n      input_args: preset-rtsp-udp\n      inputs:\n        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection\n          roles:\n            - detect\n    detect:\n      enabled: True # <---- disable detection until you have a working camera feed\n      width: 1280 # <---- update for your camera's resolution\n      height: 720 # <---- update for your camera's resolution\n      fps: 5\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Restart the Frigate addon . Then click on Frigate icon on the side bar. Next click on the stream and you will be have full view of the stream. By default you can detect person and you can draw a bounding box.")),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg"})),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg"})),(0,r.yg)("p",null,"And here is the demo "),(0,r.yg)("center",null,(0,r.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif"})),(0,r.yg)("p",null,"You can detect many different objects and send notifation to your mobile phone also.For that you need to change the frigate.yml . So we highly reccomend you to go for quick look at following guides. "),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,r.yg)("a",{parentName:"p",href:"https://docs.frigate.video/"},"Frigate Offficial Documentation"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,r.yg)("a",{parentName:"p",href:"https://community.home-assistant.io/"},"Home assistant Forum")))),(0,r.yg)("h1",{id:"tech-support"},"Tech support"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);