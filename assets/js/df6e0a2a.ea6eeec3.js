"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85212],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>u});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),g=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=g(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=g(r),d=t,u=c["".concat(p,".").concat(d)]||c[d]||y[d]||l;return r?a.createElement(u,o(o({ref:n},s),{},{components:r})):a.createElement(u,o({ref:n},s))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:t,o[1]=i;for(var g=2;g<l;g++)o[g]=r[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70505:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=r(58168),t=(r(96540),r(15680));const l={description:"ArduPy LCD",title:"ArduPy LCD",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/ArduPy-LCD",last_update:{date:"11/20/2022",author:"Matthew"}},o="LCD - ArduPy API Reference",i={unversionedId:"Sensor/Wio_Terminal/ArduPy/ArduPy-LCD",id:"Sensor/Wio_Terminal/ArduPy/ArduPy-LCD",title:"ArduPy LCD",description:"ArduPy LCD",source:"@site/docs/Sensor/Wio_Terminal/ArduPy/ArduPy-LCD.md",sourceDirName:"Sensor/Wio_Terminal/ArduPy",slug:"/ArduPy-LCD",permalink:"/ArduPy-LCD",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/ArduPy/ArduPy-LCD.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1668902400,formattedLastUpdatedAt:"Nov 20, 2022",frontMatter:{description:"ArduPy LCD",title:"ArduPy LCD",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/ArduPy-LCD",last_update:{date:"11/20/2022",author:"Matthew"}}},p={},g=[{value:"Constructors",id:"constructors",level:2},{value:"Methods Reference",id:"methods-reference",level:2},{value:"Constants Reference",id:"constants-reference",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Pie Chart",id:"pie-chart",level:3},{value:"Analog Meter",id:"analog-meter",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],s={toc:g},c="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"lcd---ardupy-api-reference"},"LCD - ArduPy API Reference"),(0,t.yg)("p",null,"This is the LCD API reference for ArduPy usage. This is currently only tested with LCD module on Wio Terminal."),(0,t.yg)("p",null,"For more information, please visit ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ArduPy"},(0,t.yg)("strong",{parentName:"a"},"ArduPy")),". To get started with ArduPy, please follow ",(0,t.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-ArduPy/"},"here"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example Usage:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},'from machine import LCD\n\nlcd = LCD()                            # Initialize LCD and turn the backlight\nlcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black\nlcd.setTextSize(2)                     # Setting font size to 2\nlcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green\nlcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)\n')),(0,t.yg)("h2",{id:"constructors"},"Constructors"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"class machine.LCD(self)\n")),(0,t.yg)("p",null,"Construct a new LCD object."),(0,t.yg)("h2",{id:"methods-reference"},"Methods Reference"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.setRotation(r)\n")),(0,t.yg)("p",null,"Sets the Display  to ",(0,t.yg)("inlineCode",{parentName:"p"},"r")," rotation. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.setRotation(1)"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.setTextColor(color)\nLCD.setTextColor(fgcolor, bgcolor)\n")),(0,t.yg)("p",null,"Sets the text font to ",(0,t.yg)("inlineCode",{parentName:"p"},"color")," or setting ",(0,t.yg)("inlineCode",{parentName:"p"},"fgcolor")," to frontend color and ",(0,t.yg)("inlineCode",{parentName:"p"},"bgcolor")," to backend color. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.setTextColor(LCD.color.RED)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawCentreString(string, dX, poY, font)\n")),(0,t.yg)("p",null,"Draws a string from centre at (x, y) with specified font. font is used as a number. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},'LCD.drawCentreString("Hello", 0, 0, 1)')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawString(string, poX, poY, font)\n")),(0,t.yg)("p",null,"Draws a string at (x, y) with specified font. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},'LCD.drawString("Hello", 160, 120, 2)')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawChar(char, poX, poY)\n")),(0,t.yg)("p",null,"Draws a ",(0,t.yg)("inlineCode",{parentName:"p"},"char")," at (x, y), where char is the Ascii number. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawChar(65, 160, 120)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawCircle(x0, y0, r, color)\n")),(0,t.yg)("p",null,"Draws a circle at (x, y) with ",(0,t.yg)("inlineCode",{parentName:"p"},"r")," radius and a specified color. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawCircle(160, 120, 10, LCD.color.GREEN)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawCircleHelper(x0, y0, r, cornername, color)\n")),(0,t.yg)("p",null,"Draws a circle helper at (x0, y0) with ",(0,t.yg)("inlineCode",{parentName:"p"},"r")," radius and a numbered cornername. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawEllipse(x, y, rx, ry, color)\n")),(0,t.yg)("p",null,"Draws a Ellipse at (x, y) with ",(0,t.yg)("inlineCode",{parentName:"p"},"rx")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ry")," radius and ",(0,t.yg)("inlineCode",{parentName:"p"},"color"),". e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawEllipse(160,120,10,5,LCD.color.RED)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawFastHLine(x, y, w, color)\n")),(0,t.yg)("p",null,"Draws a Horizontal Line on screen starting from (x, y) with width ",(0,t.yg)("inlineCode",{parentName:"p"},"w"),". e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawFastHLine(0, 120, 160, LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawFastVLine(x, y, h, color)\n")),(0,t.yg)("p",null,"Draws a vertical Line on screen starting from (x, y) with height ",(0,t.yg)("inlineCode",{parentName:"p"},"h"),". e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawFastVLine(160, 0, 120, LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawFloat(floatNumber, decimal, x, y , font)\n")),(0,t.yg)("p",null,"Draws a float number with decimal places at (x, y). e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawFloat(3.1415, 2, 160, 120, 1)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawLine(x, y, x1, x2, color)\n")),(0,t.yg)("p",null,"Draws a line from (x, y) to (x1, y1) with ",(0,t.yg)("inlineCode",{parentName:"p"},"color"),". e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawLine(0, 0, 320, 240,  LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawNumber(number, x, y, font)\n")),(0,t.yg)("p",null,"Draws an int ",(0,t.yg)("inlineCode",{parentName:"p"},"number")," at (x, y). e.g.",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawNumber(23, 160, 120, 1)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawPixel(x, y, color)\n")),(0,t.yg)("p",null,"Draws a pixel at (x, y). e.g.",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawPixel(160, 120, LCD.color.RED)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawRect(x, y, w, h, color)\n")),(0,t.yg)("p",null,"Draws a rectangle starting at (x, y) with ",(0,t.yg)("inlineCode",{parentName:"p"},"w")," width and ",(0,t.yg)("inlineCode",{parentName:"p"},"h")," height. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawRect(0, 0, 160, 120, LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawRoundRect(x, y, w, h, r, color)\n")),(0,t.yg)("p",null,"Draws a rounded rectangle starting at (x, y) with ",(0,t.yg)("inlineCode",{parentName:"p"},"w")," width and ",(0,t.yg)("inlineCode",{parentName:"p"},"h")," height and ",(0,t.yg)("inlineCode",{parentName:"p"},"r")," corner radius. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.drawTriangle(x0, y0, x1, y1, x2, y2, color)\n")),(0,t.yg)("p",null,"Draws a triangle using (x0, y0), (x1, y1) and (x2, y2). e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.fillCircle(x0, y0, r, color)\n")),(0,t.yg)("p",null,"Fills a circle at (x, y) with ",(0,t.yg)("inlineCode",{parentName:"p"},"r")," radius and a specified color. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.fillCircle(160, 120, 10, LCD.color.GREEN)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.fillCircleHelper(x0, y0, r, cornername, color)\n")),(0,t.yg)("p",null,"Fills a circle helper at (x0, y0) with ",(0,t.yg)("inlineCode",{parentName:"p"},"r")," radius and a numbered cornername. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.fillEllipse(x, y, rx, ry, color)\n")),(0,t.yg)("p",null,"Filss a Ellipse at (x, y) with ",(0,t.yg)("inlineCode",{parentName:"p"},"rx")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ry")," radius and ",(0,t.yg)("inlineCode",{parentName:"p"},"color"),". e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.fillEllipse(160,120,10,5,LCD.color.RED)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.fillRect(x, y, w, h, color)\n")),(0,t.yg)("p",null,"Fills a rectangle starting at (x, y) with ",(0,t.yg)("inlineCode",{parentName:"p"},"w")," width and ",(0,t.yg)("inlineCode",{parentName:"p"},"h")," height. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.fillRect(0, 0, 160, 120, LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.fillRoundRect(x, y, w, h, r, color)\n")),(0,t.yg)("p",null,"Fills a rounded rectangle starting at (x, y) with ",(0,t.yg)("inlineCode",{parentName:"p"},"w")," width and ",(0,t.yg)("inlineCode",{parentName:"p"},"h")," height and ",(0,t.yg)("inlineCode",{parentName:"p"},"r")," corner radius. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.fillRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.fillTriangle(x0, y0, x1, y1, x2, y2, color)\n")),(0,t.yg)("p",null,"Fills a triangle using (x0, y0), (x1, y1) and (x2, y2). e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.fillTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.fillScreen(color)\n")),(0,t.yg)("p",null,"Fills the entire LCD screen with color. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.fillScreen(LCD.color.GREEN)"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.invertDisplay(n)\n")),(0,t.yg)("p",null,"Inverts the display. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.invertDisplay(0)")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.invertDisplay(1)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.setPivot(x, y)\n")),(0,t.yg)("p",null,"Sets the Pivot at (x, y)"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.setTextDatum(datum)\n")),(0,t.yg)("p",null,"Sets the ",(0,t.yg)("inlineCode",{parentName:"p"},"datum")," as the text datum."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.setTextFont(font)\n")),(0,t.yg)("p",null,"Sets the font, where font can be used as color. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.setTextFont(2)"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.setTextSize(size)\n")),(0,t.yg)("p",null,"Sets the size of font. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.setTextSize(5)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.textWidth(string)\n")),(0,t.yg)("p",null,"Returns the length of string. e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},'LCD.textWidth("Hello World")')),(0,t.yg)("h2",{id:"constants-reference"},"Constants Reference"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.color.BLACK # use TAB to check other available colors\n")),(0,t.yg)("p",null,"Defined colors. Also include many different colors, can use ",(0,t.yg)("inlineCode",{parentName:"p"},"dir(LCD.color)")," to check all available colors."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.color565(R, G, B)\n")),(0,t.yg)("p",null,"Converts RGB color model to color code in 16 bit. For example, you can do ",(0,t.yg)("inlineCode",{parentName:"p"},"LCD.fillScreen(LCD.color565(255,0,0))")," to fill the screen to red."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.color16to8()\n")),(0,t.yg)("p",null,"Converts 16 bit color to 8 bit."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.width # Width of LCD, 320\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.height # Height of LCD, 240\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.getCursorX()\n")),(0,t.yg)("p",null,"Returns the x position of the cursor."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.getCursorY()\n")),(0,t.yg)("p",null,"Returns the y position of the cursor."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.getRotation()\n")),(0,t.yg)("p",null,"Returns the current rotation of the LCD displaying."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"LCD.getTextDatum()\n")),(0,t.yg)("p",null,"Returns the Datum of text."),(0,t.yg)("h2",{id:"example-usage"},"Example Usage"),(0,t.yg)("p",null,"Here will show some graphics drawn using the LCD API."),(0,t.yg)("h3",{id:"pie-chart"},"Pie Chart"),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2020/06/Piechart-1-2.gif"})),(0,t.yg)("p",null,"Please find the complete code ",(0,t.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/"},"here"),"."),(0,t.yg)("h3",{id:"analog-meter"},"Analog Meter"),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2020/06/Meter.gif"})),(0,t.yg)("p",null,"Please find the complete code ",(0,t.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/"},"here"),"."),(0,t.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,t.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,t.yg)("div",{class:"button_tech_support_container"},(0,t.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,t.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,t.yg)("div",{class:"button_tech_support_container"},(0,t.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,t.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}y.isMDXComponent=!0}}]);