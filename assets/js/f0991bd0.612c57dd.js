"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45106],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var i=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,h=c["".concat(s,".").concat(d)]||c[d]||g[d]||a;return t?i.createElement(h,r(r({ref:n},p),{},{components:t})):i.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(58168),o=(t(96540),t(15680));const a={title:"2.8inch TFT Touch Shield V1.0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/2.8inch-TFT_Touch_Shield_V1.0/",slug:"/2.8inch-TFT_Touch_Shield_V1.0",last_update:{date:"02/03/2022",author:"gunengyu"}},r=void 0,l={unversionedId:"Sensor/Beyond_Grove/Accessories/Input_Output/2.8inch-TFT_Touch_Shield_V1.0",id:"Sensor/Beyond_Grove/Accessories/Input_Output/2.8inch-TFT_Touch_Shield_V1.0",title:"2.8inch TFT Touch Shield V1.0",description:'2.8" TFT Touch Shield is an Arduino / Arduino Mega compatible multicolored TFT display with a 4-wire resistive touch screen. It includes an Arduino shield compatible footprint for attachment. The TFT driver is based on professional Driver IC and with 8 bit data and 4 bit control interface.',source:"@site/docs/Sensor/Beyond_Grove/Accessories/Input_Output/2.8inch-TFT_Touch_Shield_V1.0.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Input_Output",slug:"/2.8inch-TFT_Touch_Shield_V1.0",permalink:"/2.8inch-TFT_Touch_Shield_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Input_Output/2.8inch-TFT_Touch_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"2.8inch TFT Touch Shield V1.0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/2.8inch-TFT_Touch_Shield_V1.0/",slug:"/2.8inch-TFT_Touch_Shield_V1.0",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Scream out loud - 110dBA fixed tone Siren",permalink:"/Scream_out_loud-110dBA_fixed_tone_Siren"},next:{title:"USB To Uart 3V3",permalink:"/USB_To_Uart_3V3"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Pins usage on Arduino",id:"pins-usage-on-arduino",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"TFT Programming",id:"tft-programming",level:3},{value:"General Functions",id:"general-functions",level:3},{value:"Lines",id:"lines",level:3},{value:"Rectangle",id:"rectangle",level:3},{value:"Circle",id:"circle",level:3},{value:"Text",id:"text",level:3},{value:"TouchScreen Programming",id:"touchscreen-programming",level:3},{value:"How to calibrate the touch screen\xa0?",id:"how-to-calibrate-the-touch-screen",level:4},{value:"Touch Screen Demo Sketch",id:"touch-screen-demo-sketch",level:4},{value:"Demo Code shown",id:"demo-code-shown",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},c="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,'2.8" TFT Touch Shield is an Arduino / Arduino Mega compatible multicolored TFT display with a 4-wire resistive touch screen. It includes an Arduino shield compatible footprint for attachment. The TFT driver is based on professional Driver IC and with 8 bit data and 4 bit control interface.'),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/Tft.jpg",alt:null})),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Arduino/Seeeduino, Arduino Mega, and Seeeduino Mega compatible")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"2.8\u201d Size QVGA Display")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Resistive Touch Screen"))),(0,o.yg)("h2",{id:"specification"},"Specification"),(0,o.yg)("table",{cellspacing:"0",width:"80%"},(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"col"}," Item"),(0,o.yg)("th",{scope:"col"}," Min"),(0,o.yg)("th",{scope:"col"}," Typical"),(0,o.yg)("th",{scope:"col"}," Max"),(0,o.yg)("th",{scope:"col"}," Unit")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Voltage"),(0,o.yg)("td",null,"4.5"),(0,o.yg)("td",null,"5"),(0,o.yg)("td",null,"5.5"),(0,o.yg)("td",null,"VDC")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Current"),(0,o.yg)("td",null,"/"),(0,o.yg)("td",null,"/"),(0,o.yg)("td",null,"250"),(0,o.yg)("td",null,"mA")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," LCD Panel Size"),(0,o.yg)("td",{colspan:"3"}," 2.8"),(0,o.yg)("td",null,"inch")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," View angle"),(0,o.yg)("td",{colspan:"3"}," 60~120"),(0,o.yg)("td",null,"Deg")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Resolution"),(0,o.yg)("td",{colspan:"3"}," 320x240"),(0,o.yg)("td",null,"/")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," LCD color"),(0,o.yg)("td",{colspan:"3"}," 65k"),(0,o.yg)("td",null,"/")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Backlight Type"),(0,o.yg)("td",{colspan:"3"}," LED"),(0,o.yg)("td",null,"/")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," LCD driver IC"),(0,o.yg)("td",{colspan:"3"}," ST7781R"),(0,o.yg)("td",null,"/")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Interface Type"),(0,o.yg)("td",{colspan:"3"}," 10\xb12"),(0,o.yg)("td",null,"g")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Interface Type"),(0,o.yg)("td",{colspan:"3"}," Parallel port ( 8bit Data + 4bit Control )"),(0,o.yg)("td",null,"/")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Touch Screen"),(0,o.yg)("td",{colspan:"3"}," 4-Wire resistive touch screen"),(0,o.yg)("td",null,"/")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Active area"),(0,o.yg)("td",{colspan:"3"}," 43.2*57.3"),(0,o.yg)("td",null,"mm")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," ESD contact discharge"),(0,o.yg)("td",{colspan:"3"}," \xb14"),(0,o.yg)("td",null,"KV")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," ESD air discharge"),(0,o.yg)("td",{colspan:"3"}," \xb18"),(0,o.yg)("td",null,"KV")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Dimension"),(0,o.yg)("td",{colspan:"3"}," 72.5x54.7x18"),(0,o.yg)("td",null,"mm")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Weight"),(0,o.yg)("td",{colspan:"3"}," 24\xb12"),(0,o.yg)("td",null,"g"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Cautions")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Do not subject the module to mechanical shock or impact by dropping it.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Do not apply excessive force to the display surface or the adjoining areas since this may cause the color tone to vary."))),(0,o.yg)("h2",{id:"pins-usage-on-arduino"},"Pins usage on Arduino"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg",alt:null}),"\n",(0,o.yg)("strong",{parentName:"p"},"D0")," - Unused."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D1")," - Unused."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D2")," - LCD data bit 8."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D3")," - LCD data bit 9."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D4")," - LCD data bit 10."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D5")," - LCD data bit 11."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D6")," - LCD data bit 12."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D7")," - LCD data bit 13."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D8")," - LCD data bit 14."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D9")," - LCD data bit 15."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D10")," - LCD CS pin, active low."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D11")," - LCD RS pin."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D12")," - LCD WR pin."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D13")," - LCD RD pin."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D14(A0)")," - Touch Screen Y-."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D15(A1)")," - Touch Screen X-."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D16(A2)")," - Touch Screen Y+."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D17(A3)")," - Touch Screen X+."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D18(A4)")," - Unused."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"D19(A5)")," - Unused."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Insert the TFT Touch Shield to Seeeduino as shown below.")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg",alt:null})),(0,o.yg)("h3",{id:"tft-programming"},"TFT Programming"),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"TFT")," library provides the following Application Programming Interfaces(",(0,o.yg)("strong",{parentName:"p"},"API"),"). The library makes use of direct access to PORT registers instead of Arduino APIs. This is to increase the speed of communication between MCU and TFT. At present, the library supports Arduino, Arduino Mega (1280 or 2560) and Seeeduino ADK Main Board compatible boards. In Mega the 8bit data port of TFT is distributed to different pins belonging to different ports. This decreases the speed of graphics drawing when compared to Arduino. The choice of port pins are purely based on Arduino / Mega port pin arrangement."),(0,o.yg)("h3",{id:"general-functions"},"General Functions"),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"paintScreenBlack(void)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The TFT RAM can only be initialized in display-off mode, so this function only for clearing screen\xa0with black colour.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"setXY(unsigned int poX, unsigned int poY)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Sets the cursor position to (poX,poY). This function is internally used by other graphics APIs.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"setPixel(unsigned int poX, unsigned int poY,unsigned int color)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Sets the (poX,poY) pixel to color color. This function is internally used by other graphics APIs.")),(0,o.yg)("h3",{id:"lines"},"Lines"),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1,unsigned int color)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a line from pixel (x0,y0) to pixel (x1,y1) with color color.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a Horizontal Line of length length with color color starting from pixel (poX,poY).")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"drawHorizontalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a Vertical Line of length length with color color starting from pixel (poX,poY).")),(0,o.yg)("h3",{id:"rectangle"},"Rectangle"),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width,unsigned int color)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a rectangle starting from (poX,poY) of length length, width width and color ",(0,o.yg)("strong",{parentName:"li"},"color"),".")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a filled rectangle starting from pixel (poX,poY) of length length, width width and color ",(0,o.yg)("strong",{parentName:"li"},"color"),".")),(0,o.yg)("h3",{id:"circle"},"Circle"),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"drawCircle(int poX, int poY, int r,unsigned int color)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a circle at (poX,poY) of radius ",(0,o.yg)("strong",{parentName:"li"},"radius")," and color ",(0,o.yg)("strong",{parentName:"li"},"color"),".")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"fillCircle(int poX, int poY, int r,unsigned int color")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a filled circle at (poX,poY) of radius ",(0,o.yg)("strong",{parentName:"li"},"radius")," and color ",(0,o.yg)("strong",{parentName:"li"},"color"),".")),(0,o.yg)("h3",{id:"text"},"Text"),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"drawChar(unsigned char ascii,unsigned int poX, unsigned int poY,unsigned int size, unsigned int fgcolor)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a character starting from (poX,poY) using inbuilt font of size ",(0,o.yg)("strong",{parentName:"li"},"size")," and with color fgcolor. This function is used by drawString() function.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"drawString(char *string,unsigned int poX, unsigned int poY,unsigned int size,unsigned int fgcolor)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Draws a string of text starting from (poX,poY) using inbuilt font of size ",(0,o.yg)("strong",{parentName:"li"},"size")," and with color fgcolor.")),(0,o.yg)("h3",{id:"touchscreen-programming"},"TouchScreen Programming"),(0,o.yg)("hr",null),(0,o.yg)("p",null,"TFT Touch Shield uses the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/adafruit/Touch-Screen-Library"},"Adafruit Touch Screen Library"),". To understand the principle behind resistive touch screen refer ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/2.8inch-TFT_Touch_Shield_V1.0/"},"External Links"),". In short, a 4-wire resistive touch screen provides two voltage divider each for X and Y axis. By applying proper voltages for each axis and scanning the ADC values the position of the touch can be detected. These values are always prone to noise. Hence a digital filter is used."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"To use the TouchScreen Library first create a TouchScreen object by")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);")),(0,o.yg)("p",null,"Where XP, YP, XM and YM are ADC port pins connected to XPlus, YPlus, XMinus and YMinus pins of Touch Screen. 300 is the resistance across X plates."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Read the Raw ADC value using")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Point p = ts.getPoint();")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The Raw ADC value has to be converted to Pixel Co-ordinates. This is done with map function. This mapping changes for v0.9 and v1.0. The demo applications already takes care of this mapping.")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);\np.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The following sketch demonstrates use of TouchScreen Library. This can also be used to calibrate the touch screen co-ordinates.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Compile and upload the sketch.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Open serial port monitor and touch the points displayed on the screen.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"See if the displayed X and Y values are correct. If not, we have to re-calibrate the touch screen coordinates."))),(0,o.yg)("h4",{id:"how-to-calibrate-the-touch-screen"},"How to calibrate the touch screen\xa0?"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The parameters ",(0,o.yg)("inlineCode",{parentName:"p"},"TS_MINX, TS_MAXX, TS_MINY and TS_MAXY ")," actually decides the extreme ends of the touch screen and actually forms the calibration parameters.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The values assigned to these variables are measured ADC values (i.e Raw X, Raw Y) when we touch the extreme diagonal ends of touch screen.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Touch points (0,0) and (239,319) and note down Raw X and Raw Y values. For better accuracy, try out many times and find the right value.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"TS_MINX corresponds to ADC value when X = 0\xa0;")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"TS_MINY corresponds to ADC value when Y = 0\xa0;")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"TS_MAXX corresponds to ADC value when X = 240 -1 i.e 239\xa0;")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"TS_MAXY corresponds to ADC value when Y = 320 -1 i.e 319\xa0;")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Change these parameters in the sketch, recompile and upload to Arduino.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Repeat the above steps if you still do not get accurate values."))),(0,o.yg)("h4",{id:"touch-screen-demo-sketch"},"Touch Screen Demo Sketch"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'// Paint application - Demonstate both TFT and Touch Screen\n//  This library is free software; you can redistribute it and/or\n//  modify it under the terms of the GNU Lesser General Public\n//  License as published by the Free Software Foundation; either\n//  version 2.1 of the License, or (at your option) any later version.\n//\n//  This library is distributed in the hope that it will be useful,\n//  but WITHOUT ANY WARRANTY; without even the implied warranty of\n//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n//  Lesser General Public License for more details.\n//\n//  You should have received a copy of the GNU Lesser General Public\n//  License along with this library; if not, write to the Free Software\n//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA\n#include <stdint.h>\n#include <TouchScreen.h>\n#include <TFT.h>\n\n#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega\n#define YP A2   // must be an analog pin, use "An" notation!\n#define XM A1   // must be an analog pin, use "An" notation!\n#define YM 54   // can be a digital pin, this is A0\n#define XP 57   // can be a digital pin, this is A3\n\n#elif defined(__AVR_ATmega32U4__) // leonardo\n#define YP A2   // must be an analog pin, use "An" notation!\n#define XM A1   // must be an analog pin, use "An" notation!\n#define YM 18   // can be a digital pin, this is A0\n#define XP 21   // can be a digital pin, this is A3\n\n#else //168, 328, something else\n#define YP A2   // must be an analog pin, use "An" notation!\n#define XM A1   // must be an analog pin, use "An" notation!\n#define YM 14   // can be a digital pin, this is A0\n#define XP 17   // can be a digital pin, this is A3\n\n#endif\n\n//Measured ADC values for (0,0) and (210-1,320-1)\n//TS_MINX corresponds to ADC value when X = 0\n//TS_MINY corresponds to ADC value when Y = 0\n//TS_MAXX corresponds to ADC value when X = 240 -1\n//TS_MAXY corresponds to ADC value when Y = 320 -1\n\n#define TS_MINX 140\n#define TS_MAXX 900\n#define TS_MINY 120\n#define TS_MAXY 940\n\nint color = WHITE;  //Paint brush color\n\n// For better pressure precision, we need to know the resistance\n// between X+ and X- Use any multimeter to read it\n// The 2.8" TFT Touch shield has 300 ohms across the X plate\n\nTouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); //init TouchScreen port pins\n\nvoid setup()\n{\n\n    Tft.init();  //init TFT library\n    pinMode(0,OUTPUT);\n    //Draw the pallet\n    Tft.fillRectangle(0,0,30,10,BLACK);\n    Tft.fillRectangle(30,0,30,10,RED);\n    Tft.fillRectangle(60,0,30,10,GREEN);\n    Tft.fillRectangle(90,0,30,10,BLUE);\n    Tft.fillRectangle(120,0,30,10,CYAN);\n    Tft.fillRectangle(150,0,30,10,YELLOW);\n    Tft.fillRectangle(180,0,30,10,WHITE);\n    Tft.fillRectangle(210,0,30,10,GRAY1);\n\n}\n\nvoid loop()\n{\n\n    // a point object holds x y and z coordinates.\n    Point p = ts.getPoint();\n\n    //map the ADC value read to into pixel co-ordinates\n\n    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);\n    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);\n\n    // we have some minimum pressure we consider \'valid\'\n    // pressure of 0 means no pressing!\n\n    if (p.z > ts.pressureThreshhold) {\n\n\n        // Detect  paint brush color change\n        if(p.y < 15)\n        {\n            if(p.x >= 0 && p.x < 30)\n            {\n                color = BLACK;\n            }\n            if(p.x >= 30 && p.x < 60)\n            {\n                color = RED;\n                digitalWrite(0,HIGH);\n            }\n            if(p.x >= 60 && p.x < 90)\n            {\n                color = GREEN;\n            }\n            if(p.x >= 90 && p.x < 110)\n            {\n                color = BLUE;\n                digitalWrite(0,LOW);\n            }\n            if(p.x >= 120 && p.x < 150)\n            {\n                color = CYAN;\n            }\n            if(p.x >= 150 && p.x < 180)\n            {\n                color = YELLOW;\n            }\n            if(p.x >= 180 && p.x < 210)\n            {\n                color = WHITE;\n            }\n            if(p.x >= 210 && p.x < 240)\n            {\n                color = GRAY1;\n            }\n        }\n        else\n        {\n            Tft.fillCircle(p.x,p.y,2,color);\n        }\n    }\n}\n')),(0,o.yg)("h3",{id:"demo-code-shown"},"Demo Code shown"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Insert the TFT Touch Shield to Seeeduino as shown below.")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/DemoShow.JPG",alt:null}),"\nTFT Touch Shield connected to Seeeduino"),(0,o.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[Libraries]"),(0,o.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/TFT_Touch_Shield_V1"},"TFT Touch Shield libraries")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[Eagle]"),(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip"},"TFT Touch Shield v1.0 Schematic and Layout")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[PDF]"),(0,o.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20PCB.pdf"},"TFT Touch PCB")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[PDF]"),(0,o.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20Sch.pdf"},"TFT Touch SCH")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[Version]"),(0,o.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/Schematic_for_Radio_Shack_.zip"},"Radio Shack\xa0version of TFT Touch Shield in Eagle Files")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[Datasheet]")," ",(0,o.yg)("a",{parentName:"li",href:"http://garden.seeedstudio.com/images/4/4e/ST7781R_datasheet.pdf"},"ST7781R"),"\xa0,\xa0",(0,o.yg)("a",{parentName:"li",href:"http://garden.seeedstudio.com/images/7/75/FGD280E3715V1_8bit.pdf"},"FGD280E3715V1_8bit")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[App Notes]"),(0,o.yg)("a",{parentName:"li",href:"http://www.adafruit.com/datasheets/AVR341.pdf"},"ATMEL - App Notes on Four and five-wire Touch Screen")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[Touch Screen]"),(0,o.yg)("a",{parentName:"li",href:"http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf"},"TI - Using Resistive Touch Screen")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"[SD Card]"),(0,o.yg)("a",{parentName:"li",href:"https://github.com/adafruit/SD"},"https://github.com/adafruit/SD"))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),".\nThank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);