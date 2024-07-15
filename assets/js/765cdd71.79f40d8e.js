"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63008],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>y});var r=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,y=d["".concat(l,".").concat(m)]||d[m]||g[m]||t;return a?r.createElement(y,o(o({ref:n},u),{},{components:a})):r.createElement(y,o({ref:n},u))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,o=new Array(t);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<t;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59752:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var r=a(58168),i=(a(96540),a(15680));const t={description:"Build a HMI Display for Raspberry Pi using Wio Terminal",title:"Build a HMI Display for Raspberry Pi",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-HMI",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Build a HMI Display for Raspberry Pi using Wio Terminal",s={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-HMI",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-HMI",title:"Build a HMI Display for Raspberry Pi",description:"Build a HMI Display for Raspberry Pi using Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-HMI.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-HMI",permalink:"/Wio-Terminal-HMI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-HMI.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Build a HMI Display for Raspberry Pi using Wio Terminal",title:"Build a HMI Display for Raspberry Pi",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-HMI",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Build a IR Thermal Imaging Camera using Wio Terminal",permalink:"/Wio-Terminal-Thermal-Camera"},next:{title:"How to measure noise levels with Wio Terminal",permalink:"/Wio-Terminal-Sound-Meter"}},l={},p=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Wio Terminal Firmware",id:"wio-terminal-firmware",level:2},{value:"<code>uf2</code> Method",id:"uf2-method",level:3},{value:"Host Device Firmware",id:"host-device-firmware",level:2},{value:"Raspberry Pi",id:"raspberry-pi",level:3},{value:"Jetson Nano, Beaglebone and Odyssey X86",id:"jetson-nano-beaglebone-and-odyssey-x86",level:3},{value:"Screen Display Configurations",id:"screen-display-configurations",level:2},{value:"Screen set-up 1",id:"screen-set-up-1",level:3},{value:"Screen set-up 2",id:"screen-set-up-2",level:3},{value:"Screen set-up 3",id:"screen-set-up-3",level:3},{value:"Screen set-up 4",id:"screen-set-up-4",level:3},{value:"PtQtGraph Example",id:"ptqtgraph-example",level:2},{value:"Usermod SDK",id:"usermod-sdk",level:2},{value:"Further Development",id:"further-development",level:2},{value:"Resource",id:"resource",level:2},{value:"FAQ",id:"faq",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},d="wrapper";function g(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,r.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"build-a-hmi-display-for-raspberry-pi-using-wio-terminal"},"Build a HMI Display for Raspberry Pi using Wio Terminal"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif"})),(0,i.yg)("p",null,"In this wiki, we will introduce how to use ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,i.yg)("strong",{parentName:"a"},"Wio Terminal"))," as a ",(0,i.yg)("strong",{parentName:"p"},"HMI (Human Machine Interface) USB display")," for ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html"},(0,i.yg)("strong",{parentName:"a"},"Raspberry Pi")),", ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html"},(0,i.yg)("strong",{parentName:"a"},"Nvidia Jetson Nano")),", ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/beaglebone-c-954.html"},(0,i.yg)("strong",{parentName:"a"},"BeagleBone"))," and even ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html"},(0,i.yg)("strong",{parentName:"a"},"Odyssey X86J4105")),"! This turns Wio Terminal into a HMI USB display which makes it much more powerful and can be used in more industrial scenarios!"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"})),(0,i.yg)("p",null,"It can support ",(0,i.yg)("strong",{parentName:"p"},"multiple Wio Terminals connected onto the host device"),". By theory, you can connect as many as you want as long as you have enough USB ports! On Raspberry Pi, it can support up to 4 Wio Terminals (RPI has 4 USB ports) connected to it acting as HMI displays in ",(0,i.yg)("strong",{parentName:"p"},"Extend mode")," as well as ",(0,i.yg)("strong",{parentName:"p"},"Mirror Mode"),", check the followings for more info!"),(0,i.yg)("h2",{id:"hardware-required"},"Hardware Required"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,i.yg)("strong",{parentName:"a"},"Wio Terminal")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html"},(0,i.yg)("strong",{parentName:"a"},"Raspberry Pi"))," / ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html"},(0,i.yg)("strong",{parentName:"a"},"Nvidia Jetson Nano"))," / ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/beaglebone-c-954.html"},(0,i.yg)("strong",{parentName:"a"},"BeagleBone"))," / ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html"},(0,i.yg)("strong",{parentName:"a"},"Odyssey X86J4105"))))),(0,i.yg)("h2",{id:"wio-terminal-firmware"},"Wio Terminal Firmware"),(0,i.yg)("p",null,"First, you will need to upload an Arduino program to your Wio Terminal via your PC."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Download the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP"},(0,i.yg)("strong",{parentName:"a"},"Seeed_Arduino_USBDISP"))," library here.")),(0,i.yg)("p",null,"There are two ",(0,i.yg)("strong",{parentName:"p"},"examples"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"NullFunctional")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"USBDisplayAndMouseControl"),":"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"If you want ",(0,i.yg)("strong",{parentName:"li"},"higher screen refresh rate on Wio Terminal"),", upload ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"NullFunctional"))," to Wio Terminal."),(0,i.yg)("li",{parentName:"ol"},"If you want ",(0,i.yg)("strong",{parentName:"li"},"Wio Terminal to also act as a USB Mouse"),", upload ",(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"USBDisplayAndMouseControl"))," to Wio Terminal.")),(0,i.yg)("h3",{id:"uf2-method"},(0,i.yg)("inlineCode",{parentName:"h3"},"uf2")," Method"),(0,i.yg)("p",null,"For convenience, we also provide ",(0,i.yg)("inlineCode",{parentName:"p"},"uf2")," methods of uploading Wio Terminal's firmware. Simply download the ",(0,i.yg)("inlineCode",{parentName:"p"},"uf2")," files from below."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Download the ",(0,i.yg)("a",{parentName:"p",href:"http://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/NullFunctional.uf2"},"NullFunctional")," ",(0,i.yg)("inlineCode",{parentName:"p"},"uf2")," files.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Download the ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/USBDisplayAndMouseControl.uf2"},"USBDisplayAndMouseControl")," ",(0,i.yg)("inlineCode",{parentName:"p"},"uf2")," files."))),(0,i.yg)("p",null,"Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,i.yg)("p",null,"An external drive named ",(0,i.yg)("inlineCode",{parentName:"p"},"Arduino")," should appear in your PC. Drag the the downloaded uf2 files to the ",(0,i.yg)("inlineCode",{parentName:"p"},"Arduino")," drive."),(0,i.yg)("h2",{id:"host-device-firmware"},"Host Device Firmware"),(0,i.yg)("p",null,"Now let's set up the display driver on the host device and this can be Raspberry Pi, Jetson Nano or even Odyssey X86J4105:"),(0,i.yg)("h3",{id:"raspberry-pi"},"Raspberry Pi"),(0,i.yg)("p",null,"For Raspberry Pi, you first need to download package information from all configured sources:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Install the necessary packages such as ",(0,i.yg)("strong",{parentName:"li"},"kernel headers, kernels, build-essential, dkms")," by running the following command in terminal:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install raspberrypi-kernel-headers raspberrypi-kernel build-essential dkms\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Reboot the Raspberry Pi:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Download the display driver on Raspberry Pi:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/Seeed-Studio/seeed-linux-usbdisp\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Make and build the driver:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/linux-driver\nmake & sudo make install\nsudo reboot\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Move the ",(0,i.yg)("strong",{parentName:"li"},"config files to the systems location"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/\n")),(0,i.yg)("p",null,"!!!Note\nThere are different screen configurations that you can choose from, the default is one Wio Terminal as one screen."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Restart the service:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo service lightdm restart\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Run the following command in terminal for display configuration:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo raspi-config\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Once the Raspberry Pi Software Configuration Tool opens, navigate to the following location:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"Display Options > Resolution\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Select a different resolution except "default"')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"Ex: DMT Mode 82 1920x1080 60Hz 16:9  \n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Turn off the Raspberry Pi:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo poweroff\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Connect the Wio Terminal to Raspberry Pi's USB port")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Turn on the Raspberry Pi"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-new.png"})),(0,i.yg)("p",null,"Now you should see you Wio Terminal display the Raspberry Pi's desktop! If you loaded with the ",(0,i.yg)("inlineCode",{parentName:"p"},"USBDisplayAndMouseControl")," firmware in Wio Terminal, you can even use the buttons and 5-way switches to control the mouse of Raspberry Pi!"),(0,i.yg)("p",null,"!!!Note\nThis version of the USB display driver do not support hot swapping."),(0,i.yg)("h3",{id:"jetson-nano-beaglebone-and-odyssey-x86"},"Jetson Nano, Beaglebone and Odyssey X86"),(0,i.yg)("p",null,"For Nvidia Jetson Nano and Odyssey X86J4105 (Ubuntu), install the ",(0,i.yg)("strong",{parentName:"p"},"linux driver")," as followed, run the following in the terminal:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," For Odyssey X86J4105, we have only tested for ubuntu and debian OS. Other Linux OS may not work."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt install --reinstall linux-headers-$(uname -r)\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Download the display driver:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/Seeed-Studio/seeed-linux-usbdisp\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Make and build the driver:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/linux-driver\nmake & sudo make install\nsudo reboot\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Move the ",(0,i.yg)("strong",{parentName:"li"},"config files to the systems location"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Restart the service:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo service lightdm restart\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Connect Wio Terminal to device's USB port!")),(0,i.yg)("h2",{id:"screen-display-configurations"},"Screen Display Configurations"),(0,i.yg)("p",null,"As mentioned, you can have ",(0,i.yg)("strong",{parentName:"p"},"multiple")," Wio Terminals connected to a Raspberry Pi and therefore you can arrange the screen set-up (locations of screen) by editing the ",(0,i.yg)("inlineCode",{parentName:"p"},"10-disp.conf")," file. We have provided 3 other screen expansion set-up as followed."),(0,i.yg)("h3",{id:"screen-set-up-1"},"Screen set-up 1"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-1-removebg.png"})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"# Four-screen expansion\n# pattern: 1  2  \n#        : 3  4\n")),(0,i.yg)("p",null,"This is the ",(0,i.yg)("inlineCode",{parentName:"p"},"10-disp-1.conf")," under ",(0,i.yg)("inlineCode",{parentName:"p"},"seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/"),", simply copy this file to ",(0,i.yg)("inlineCode",{parentName:"p"},"/usr/share/X11/xorg.conf.d/")," and name it ",(0,i.yg)("inlineCode",{parentName:"p"},"10-disp.conf"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp-1.conf /usr/share/X11/xorg.conf.d/10-disp.conf\n")),(0,i.yg)("h3",{id:"screen-set-up-2"},"Screen set-up 2"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-2-removebg.png"})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"# Four-screen expansion\n# pattern: 1\n#        : 2  3  4\n")),(0,i.yg)("p",null,"This is the ",(0,i.yg)("inlineCode",{parentName:"p"},"10-disp-2.conf")," under ",(0,i.yg)("inlineCode",{parentName:"p"},"seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/"),"."),(0,i.yg)("h3",{id:"screen-set-up-3"},"Screen set-up 3"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-3-removebg.png"})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"# Four-screen expansion\n# pattern: 1  2  3  4\n")),(0,i.yg)("p",null,"This is the ",(0,i.yg)("inlineCode",{parentName:"p"},"10-disp-3.conf")," under ",(0,i.yg)("inlineCode",{parentName:"p"},"seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/"),"."),(0,i.yg)("h3",{id:"screen-set-up-4"},"Screen set-up 4"),(0,i.yg)("p",null,"Mirror Mode:"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-4.png"})),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},"# Four-screen clone display\n")),(0,i.yg)("p",null,"This is the ",(0,i.yg)("inlineCode",{parentName:"p"},"10-disp-4.conf")," under ",(0,i.yg)("inlineCode",{parentName:"p"},"seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/"),"."),(0,i.yg)("h2",{id:"ptqtgraph-example"},"PtQtGraph Example"),(0,i.yg)("p",null,"For more, you can use the ",(0,i.yg)("a",{parentName:"p",href:"http://www.pyqtgraph.org/"},(0,i.yg)("strong",{parentName:"a"},"PyQtGraph"))," graph to simply draw you GUI with Wio Terminal with ease!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Let's install dependencies for PyQtGraph first:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y\nsudo pip3 install pyqtgraph\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Export macros for the screen:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb1\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," Where ",(0,i.yg)("inlineCode",{parentName:"p"},"fb1")," is the first screen, ",(0,i.yg)("inlineCode",{parentName:"p"},"fb2")," is second, ",(0,i.yg)("inlineCode",{parentName:"p"},"fb3")," ",(0,i.yg)("inlineCode",{parentName:"p"},"fb3")," and so on. You may use ",(0,i.yg)("inlineCode",{parentName:"p"},"echo $QT_QPA_PLATFORM")," to check the macros."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Copy the following PyQtGraph example python files and name it ",(0,i.yg)("inlineCode",{parentName:"li"},"test.py"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},'# -*- coding: utf-8 -*-\n"""\nDemonstrates common image analysis tools.\nMany of the features demonstrated here are already provided by the ImageView\nwidget, but here we present a lower-level approach that provides finer control\nover the user interface.\n"""\nimport pyqtgraph as pg\nfrom pyqtgraph.Qt import QtCore, QtGui\nimport numpy as np\n\n\n# Interpret image data as row-major instead of col-major\npg.setConfigOptions(imageAxisOrder=\'row-major\')\n\npg.mkQApp()\nwin = pg.GraphicsLayoutWidget()\nwin.setWindowTitle(\'pyqtgraph example: Image Analysis\')\n\n# A plot area (ViewBox + axes) for displaying the image\np1 = win.addPlot(title="")\n\n# Item for displaying image data\nimg = pg.ImageItem()\np1.addItem(img)\n\n# Custom ROI for selecting an image region\nroi = pg.ROI([-8, 14], [6, 5])\nroi.addScaleHandle([0.5, 1], [0.5, 0.5])\nroi.addScaleHandle([0, 0.5], [0.5, 0.5])\np1.addItem(roi)\nroi.setZValue(10)  # make sure ROI is drawn above image\n\n# Isocurve drawing\niso = pg.IsocurveItem(level=0.8, pen=\'g\')\niso.setParentItem(img)\niso.setZValue(5)\n\n# Contrast/color control\nhist = pg.HistogramLUTItem()\nhist.setImageItem(img)\nwin.addItem(hist)\n\n# Draggable line for setting isocurve level\nisoLine = pg.InfiniteLine(angle=0, movable=True, pen=\'g\')\nhist.vb.addItem(isoLine)\nhist.vb.setMouseEnabled(y=False) # makes user interaction a little easier\nisoLine.setValue(0.8)\nisoLine.setZValue(1000) # bring iso line above contrast controls\n\n# Another plot area for displaying ROI data\nwin.nextRow()\np2 = win.addPlot(colspan=2)\np2.setMaximumHeight(250)\nwin.resize(800, 800)\nwin.show()\n\n\n# Generate image data\ndata = np.random.normal(size=(200, 100))\ndata[20:80, 20:80] += 2.\ndata = pg.gaussianFilter(data, (3, 3))\ndata += np.random.normal(size=(200, 100)) * 0.1\nimg.setImage(data)\nhist.setLevels(data.min(), data.max())\n\n# build isocurves from smoothed data\niso.setData(pg.gaussianFilter(data, (2, 2)))\n\n# set position and scale of image\nimg.scale(0.2, 0.2)\nimg.translate(-50, 0)\n\n# zoom to fit imageo\np1.autoRange()  \n\n\n# Callbacks for handling user interaction\ndef updatePlot():\n    global img, roi, data, p2\n    selected = roi.getArrayRegion(data, img)\n    p2.plot(selected.mean(axis=0), clear=True)\n\nroi.sigRegionChanged.connect(updatePlot)\nupdatePlot()\n\ndef updateIsocurve():\n    global isoLine, iso\n    iso.setLevel(isoLine.value())\n\nisoLine.sigDragged.connect(updateIsocurve)\n\ndef imageHoverEvent(event):\n    """Show the position, pixel, and value under the mouse cursor.\n    """\n    if event.isExit():\n        p1.setTitle("")\n        return\n    pos = event.pos()\n    i, j = pos.y(), pos.x()\n    i = int(np.clip(i, 0, data.shape[0] - 1))\n    j = int(np.clip(j, 0, data.shape[1] - 1))\n    val = data[i, j]\n    ppos = img.mapToParent(pos)\n    x, y = ppos.x(), ppos.y()\n    p1.setTitle("pos: (%0.1f, %0.1f)  pixel: (%d, %d)  value: %g" % (x, y, i, j, val))\n\n# Monkey-patch the image to use our custom hover function. \n# This is generally discouraged (you should subclass ImageItem instead),\n# but it works for a very simple use like this. \nimg.hoverEvent = imageHoverEvent\n\n\n## Start Qt event loop unless running in interactive mode or using pyside.\nif __name__ == \'__main__\':\n    import sys\n    if (sys.flags.interactive != 1) or not hasattr(QtCore, \'PYQT_VERSION\'):\n        QtGui.QApplication.instance().exec_()\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Run the example:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"python3 test.py\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You may experienced that Mouse is crashing with PyQtGraph's script, you can simply disable raspberry pi's desktop using ",(0,i.yg)("inlineCode",{parentName:"li"},"sudo raspi-config")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Boot options")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Desktop/CLI")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Console Autologin"),".")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/raspi.png"})),(0,i.yg)("p",null,"Now when you run the PyQtGraph script, it work just fine!"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"})),(0,i.yg)("p",null,"You may run different PyQtGraph scripts on different screens as followed:"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/4qt.jpg"})),(0,i.yg)("h2",{id:"usermod-sdk"},"Usermod SDK"),(0,i.yg)("p",null,"This USB display driver also works on your PC. Please check ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Wio-Terminal-HMI-Usermode-SDK/"},"this wiki"))," for more information."),(0,i.yg)("h2",{id:"further-development"},"Further Development"),(0,i.yg)("p",null,"Need a bigger screen? Need a higher resolution? Higher refresh rate? Please contact ",(0,i.yg)("a",{parentName:"p",href:"mailto:produce@seeed.cc"},"produce@seeed.cc")," for more information."),(0,i.yg)("h2",{id:"resource"},"Resource"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://pyqtgraph.readthedocs.io/en/latest/"},"PyQtGraph official documents")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.x.org/releases/current/doc/man/man5/xorg.conf.5.xhtml"},"Screen xorg.conf configuration document"))),(0,i.yg)("h2",{id:"faq"},"FAQ"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Q.")," When I connect the Wio Terminal to the Raspberry Pi and turn on the Raspberry Pi, the Wio Terminal LCD is completely white."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"A.")," While the Wio Terminal is still connected to the Raspberry Pi, navigate to: ",(0,i.yg)("inlineCode",{parentName:"p"},"seeed-linux-usbdisp/drivers/linux-driver")," and run the command: ",(0,i.yg)("inlineCode",{parentName:"p"},"make & sudo make install"),". After that run: ",(0,i.yg)("inlineCode",{parentName:"p"},"sudo reboot")),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);