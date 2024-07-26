"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63600],{15680:(e,n,i)=>{i.d(n,{xA:()=>c,yg:()=>g});var t=i(96540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(i),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return i?t.createElement(g,a(a({ref:n},c),{},{components:i})):t.createElement(g,a({ref:n},c))}));function g(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=i[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},76940:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=i(58168),r=(i(96540),i(15680));const l={description:"\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",title:"\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-EI-6",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},a="Wio Terminal Edge Impulse \u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",o={unversionedId:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-6",id:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-6",title:"\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",description:"\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-6.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/cn/Wio-Terminal-TinyML-EI-6",permalink:"/cn/Wio-Terminal-TinyML-EI-6",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-6.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709683200,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{description:"\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",title:"\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-EI-6",last_update:{date:"3/06/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u8bc6\u522b\u996e\u6599",permalink:"/cn/Wio-Terminal-TinyML-EI-5"},next:{title:"TensorFlow Lite Micro\u5165\u95e8\u6307\u5357",permalink:"/cn/Wio-Terminal-TinyML-TFLM-1"}},s={},u=[{value:"\u5f02\u5e38\u68c0\u6d4b\u548c\u9884\u6d4b\u6027\u7ef4\u62a4\u7b80\u4ecb",id:"\u5f02\u5e38\u68c0\u6d4b\u548c\u9884\u6d4b\u6027\u7ef4\u62a4\u7b80\u4ecb",level:2},{value:"\u6536\u96c6\u6570\u636e\u548c\u8bad\u7ec3\u6a21\u578b",id:"\u6536\u96c6\u6570\u636e\u548c\u8bad\u7ec3\u6a21\u578b",level:2},{value:"\u90e8\u7f72\u548c\u6d4b\u8bd5",id:"\u90e8\u7f72\u548c\u6d4b\u8bd5",level:2},{value:"\u5229\u7528\u65b0\u53d1\u5e03\u7684Blynk\u7269\u8054\u7f51\u5e73\u53f0",id:"\u5229\u7528\u65b0\u53d1\u5e03\u7684blynk\u7269\u8054\u7f51\u5e73\u53f0",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],c={toc:u},d="wrapper";function p(e){let{components:n,...i}=e;return(0,r.yg)(d,(0,t.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"wio-terminal-edge-impulse-\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b"},"Wio Terminal Edge Impulse \u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"})),(0,r.yg)("p",null,"\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Wio Terminal\u5185\u7f6e\u7684\u52a0\u901f\u5ea6\u8ba1\u6570\u636e\uff0c\u5728\u8bbe\u5907\u4e0a\u6267\u884c\u5f02\u5e38\u68c0\u6d4b\uff0c\u7136\u540e\u5c06\u6570\u636e\u53d1\u9001\u5230Blynk Edgent Cloud\u3002"),(0,r.yg)("p",null,"\u5f02\u5e38\u3002\u6216\u8005\u66f4\u5177\u4f53\u5730\u8bf4\uff0c\u7528\u4e8e\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u5f02\u5e38\u68c0\u6d4b\u3002\u6211\u4eec\u5c06\u4f7f\u7528Wio Terminal\u5185\u7f6e\u7684\u52a0\u901f\u5ea6\u8ba1\u6570\u636e\uff0c\u5728\u8bbe\u5907\u4e0a\u6267\u884c\u795e\u7ecf\u7f51\u7edc\u6a21\u578b\u63a8\u65ad\u548c\u5f02\u5e38\u68c0\u6d4b\uff0c\u7136\u540e\u5c06\u6570\u636e\u53d1\u9001\u5230\u5168\u9762\u652f\u6301Wio Terminal\u7684\u65b0\u7248Blynk IoT\u5e73\u53f0\uff0c\u8be5\u5e73\u53f0\u5177\u6709\u4e30\u5bcc\u7684\u65b0\u529f\u80fd\u3002"),(0,r.yg)("p",null,"\u5b8c\u6574\u7684\u6559\u7a0b\u548c\u89c6\u9891\u6f14\u793a\uff0c\u8bf7\u67e5\u770b\u9644\u5e26\u7684\u89c6\u9891\uff1a"),(0,r.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gXs-h3eeT1U",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.yg)("p",null,"\u90a3\u662f WHAT, \u73b0\u5728\u662f HOW \u90e8\u5206\uff0c\u8ba9\u6211\u4eec\u4ece\u4e00\u4e2a\u53ef\u80fd\u66f4\u4e3a\u719f\u6089\u7684\u4f8b\u5b50\u5f00\u59cb\u3002"),(0,r.yg)("h2",{id:"\u5f02\u5e38\u68c0\u6d4b\u548c\u9884\u6d4b\u6027\u7ef4\u62a4\u7b80\u4ecb"},"\u5f02\u5e38\u68c0\u6d4b\u548c\u9884\u6d4b\u6027\u7ef4\u62a4\u7b80\u4ecb"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u8bad\u7ec3\u4e00\u4e2a\u7b80\u5355\u7684\u56fe\u50cf\u8bc6\u522b\u6a21\u578b\u6765\u8bc6\u522b5\u4e2a\u4e0d\u540c\u7c7b\u522b\u7684\u52a8\u7269\uff08\u8001\u864e\u3001\u5927\u8c61\u3001\u718a\u3001\u86c7\u548c\u957f\u9888\u9e7f\uff09\uff0c\u7136\u540e\u7ed9\u5b83\u4e00\u5f20\u4eba\u7684\u7167\u7247\uff0c\u5b83\u5c06\u5c3d\u529b\u8fdb\u884c\u9884\u6d4b\uff0c\u5e76\u53ef\u80fd\u8bf4\u8fd9\u662f\u4e00\u5934\u5927\u8c61\u3002\u8fd9\u65f6\u666e\u901a\u4eba\u4f1a\u7b11\uff0c\u56e0\u4e3a\u4ed6\u4eec\u5bf9\u8fd9\u4e2a\u7279\u5b9a\u6a21\u578b\u548c\u8ba1\u7b97\u673a\u89c6\u89c9\u7684\u5185\u90e8\u5de5\u4f5c\u5e76\u4e0d\u4e86\u89e3\u592a\u591a\u3002"),(0,r.yg)("p",null,"\u5f53\u7136\uff0c\u6a21\u578b\u6ca1\u6709\u505a\u9519\u4efb\u4f55\u4e8b\u60c5-\u5b83\u5904\u7406\u4e86\u56fe\u7247\uff0c\u8ba1\u7b97\u4e86\u5b58\u5728\u7684\u7279\u5f81\uff0c\u7136\u540e\u6839\u636e\u8fd9\u4e9b\u7279\u5f81\u8f93\u51fa\u4e86\u5206\u7c7b\u7ed3\u679c\u3002\u5c3d\u7ba1\u5982\u6b64\uff0c\u5982\u679c\u6211\u4eec\u5c06\u7c7b\u522b\u7684\u7279\u5f81\u7ed8\u5236\u5e76\u8fdb\u884c\u805a\u7c7b\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u4eba\u7684\u56fe\u50cf\u7279\u5f81\u8fdc\u79bb\u4efb\u4f55\u7c7b\u522b\u7684\u805a\u7c7b\uff0c\u56e0\u6b64\u8868\u793a\u4e3a\u201c\u5f02\u5e38\u503c\u201d\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/knowing_all_about_outliers_in_machine_learning_sample_points_in_green_are_near_to_each_other.png"})),(0,r.yg)("p",null,"\u5f53\u7136\uff0c\u8fd9\u53ef\u80fd\u53ea\u662f\u52a8\u7269\u4e2d\u7684\u4e00\u5f20\u975e\u5e38\u5947\u602a\u7684\u56fe\u50cf\uff0c\u4f46\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u66f4\u6709\u53ef\u80fd\u662f\u4e00\u4e2a\u6a21\u578b\u6ca1\u6709\u88ab\u8bad\u7ec3\u8bc6\u522b\u7684\u7269\u4f53\u3002"),(0,r.yg)("p",null,"\u5bf9\u4e8e\u8ba1\u7b97\u673a\u89c6\u89c9\u548c\u8bed\u97f3\u8bc6\u522b\u4efb\u52a1\uff0c\u6211\u4eec\u7ecf\u5e38\u6709\u4e00\u4e2a\u201c\u80cc\u666f\u201d\u7c7b\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5b83\u57fa\u672c\u4e0a\u4ee3\u8868\u7740\u4e0d\u662f\u6211\u4eec\u611f\u5174\u8da3\u7684\u7c7b\u522b\u7684\u4efb\u4f55\u4e1c\u897f\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u786e\u5b9e\u5e0c\u671b\u6211\u4eec\u7684\u6a21\u578b\u80fd\u591f\u5c06\u6240\u6709\u6570\u636e\u89e3\u91ca\u4e3a\u201c\u6b63\u5e38\u201d\u548c\u201c\u5f02\u5e38\u201d\u3002\u8fd9\u91cc\u7684\u201c\u5f02\u5e38\u201d\u5177\u4f53\u7279\u5f81\u5e76\u4e0d\u91cd\u8981-\u5b83\u4eec\u53ef\u4ee5\u622a\u7136\u4e0d\u540c\uff0c\u91cd\u8981\u7684\u662f\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u201c\u5f02\u5e38\u201d\u7c7b\u522b\uff0c\u9700\u8981\u91c7\u53d6\u4e00\u4e9b\u63aa\u65bd\u3002\u6211\u521a\u624d\u63cf\u8ff0\u7684\u5c31\u662f\u4f7f\u7528\u673a\u5668\u5b66\u4e60\u8fdb\u884c\u9884\u6d4b\u6027\u7ef4\u62a4\u7684\u524d\u63d0\u3002\u6211\u4eec\u901a\u8fc7\u4f20\u611f\u5668\u76d1\u6d4b\u8bbe\u5907\u7684\u72b6\u6001\uff0c\u65e0\u8bba\u662f\u7a7a\u8c03\u3001\u6c34\u6cf5\u8fd8\u662f\u5176\u4ed6\u673a\u68b0\u8bbe\u5907\uff0c\u5e76\u6839\u636e\u5df2\u77e5\u201c\u6b63\u5e38\u201d\u8fd0\u884c\u7684\u7279\u5f81\uff0c\u8bd5\u56fe\u5728\u4e8b\u60c5\u53d8\u5f97\u4e25\u91cd\u4e4b\u524d\uff0c\u68c0\u6d4b\u5230\u4e00\u4e9b\u5fae\u5999\u7684\u95ee\u9898"),(0,r.yg)("h2",{id:"\u6536\u96c6\u6570\u636e\u548c\u8bad\u7ec3\u6a21\u578b"},"\u6536\u96c6\u6570\u636e\u548c\u8bad\u7ec3\u6a21\u578b"),(0,r.yg)("p",null,"\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u5728\u6211\u4eec\u529e\u516c\u5ba4\u5916\u9762\u7684\u5ead\u9662\u91cc\u5b89\u88c5\u4e86Wio Terminal\uff0c\u5e76\u5c06\u5176\u5b89\u88c5\u5728\u4e00\u4e2a\u6c34\u6cf5\u4e0a\uff0c\u6c34\u6cf5\u65c1\u8fb9\u6709\u4e00\u4e9b\u690d\u7269\u548c\u9c7c\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_04_2007-1536x864.png"})),(0,r.yg)("p",null,"\u7136\u540e\uff0c\u6211\u6536\u96c6\u4e86\u4e24\u4e2a\u7c7b\u522b\u7684\u6837\u672c-\u7a7a\u95f2\u548c\u6b63\u5e38\u8fd0\u884c\uff0c\u5e76\u6839\u636e\u5149\u8c31\u7279\u5f81\u5904\u7406\u6a21\u5757\u7684\u8f93\u51fa\u8bad\u7ec3\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u578b\u6765\u8bc6\u522b\u8fd9\u4e24\u4e2a\u7c7b\u522b\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-1.png"})),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-2.png"})),(0,r.yg)("p",null,"\u5173\u4e8e\u5904\u7406\u548c\u5b66\u4e60\u6a21\u5757\u7684\u786e\u5207\u53c2\u6570\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u6211\u5206\u4eab\u7684\u9879\u76ee\u7684\u516c\u5171\u7248\u672c\u3002\u6211\u505a\u51fa\u7684\u552f\u4e00\u91cd\u5927\u8c03\u6574\u662f\u5c06\u6ee4\u6ce2\u5668\u4ece\u4f4e\u9891\u8c03\u6574\u4e3a\u9ad8\u9891\uff0c\u8fd9\u4f7f\u5f97\u4e0d\u540c\u7c7b\u522b\u7684\u7279\u5f81\u66f4\u52a0\u7a81\u51fa\u3002\u5f53\u7136\uff0c\u533a\u5206\u7a7a\u95f2\u548c\u6b63\u5e38\u6cf5\u64cd\u4f5c\u663e\u7136\u975e\u5e38\u5bb9\u6613\u3002\u66f4\u5177\u6311\u6218\u6027\u7684\u4efb\u52a1\u662f\u6545\u969c\u68c0\u6d4b\u3002\u4e3a\u4e86\u6a21\u62df\u6545\u969c\uff0c\u6211\u4f1a\u5c06\u6c34\u6cf5\u4ece\u6c34\u7bb1\u4e2d\u53d6\u51fa-\u8fd9\u57fa\u672c\u4e0a\u5bfc\u81f4\u58f0\u97f3\u548c\u632f\u52a8\u6c34\u5e73\u964d\u4f4e\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"})),(0,r.yg)("p",null,"\u89c2\u5bdf\u6545\u969c\u6837\u672c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728accX RMS\u3001accY RMS\u548caccZ RMS\u8f74\u4e0a\u7684\u7279\u5f81\u63a2\u7d22\u5668\u4e2d\u770b\u5230\u5b83\u4ecb\u4e8e\u7a7a\u95f2\u548c\u6b63\u5e38\u64cd\u4f5c\u6837\u672c\u4e4b\u95f4\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-3-1536x906.png"})),(0,r.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u8fd9\u4e00\u70b9\uff0c\u8bad\u7ec3\u4e00\u4e2a\u65b0\u7684\uff08\u7b2c\u4e8c\u4e2a\uff09\u7f51\u7edc\uff0c\u56f4\u7ed5\u6211\u4eec\u4ee5\u524d\u89c1\u8fc7\u7684\u6570\u636e\u521b\u5efa\u805a\u7c7b\uff0c\u5e76\u5c06\u4f20\u5165\u7684\u6570\u636e\u4e0e\u8fd9\u4e9b\u805a\u7c7b\u8fdb\u884c\u6bd4\u8f83\u3002\u5982\u679c\u4e0e\u805a\u7c7b\u7684\u8ddd\u79bb\u8fc7\u5927\uff0c\u5219\u5c06\u6837\u672c\u6807\u8bb0\u4e3a\u5f02\u5e38\u3002"),(0,r.yg)("p",null,"\u7ecf\u8fc7\u53cd\u590d\u5c1d\u8bd5\uff0c\u6211\u53d1\u73b0\u975e\u5e38\u4f4e\u7684\u805a\u7c7b\u6570\u548c\u8ddd\u79bb\u9608\u503c\u4e3a0.5\u5bf9\u4e8e\u5f02\u5e38\u68c0\u6d4b\u6548\u679c\u6700\u597d\uff0c\u4f46\u8fd9\u975e\u5e38\u4f9d\u8d56\u4e8e\u60a8\u7684\u6570\u636e\uff0c\u5e76\u4e14\u5177\u6709\u5f88\u5f3a\u7684\u6848\u4f8b\u7279\u5b9a\u6027\u3002\u589e\u52a0\u51c6\u786e\u6027\u7684\u4e00\u4ef6\u4e8b\u662f\u7528\u80f6\u6c34\u7262\u56fa\u5730\u56fa\u5b9aWio Terminal\u5728\u6c34\u6cf5\u4e0a-\u5bf9\u4e8e\u5b9e\u9645\u8bbe\u5907\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u87ba\u4e1d\u3002\u5728\u7262\u56fa\u56fa\u5b9a\u4e4b\u524d\uff0cWio Terminal\u4f1a\u968f\u673a\u6643\u52a8\uff0c\u8fd9\u4f1a\u7ed9\u6b63\u5e38\u64cd\u4f5c\u6837\u672c\u5f15\u5165\u592a\u591a\u566a\u97f3\u3002"),(0,r.yg)("h2",{id:"\u90e8\u7f72\u548c\u6d4b\u8bd5"},"\u90e8\u7f72\u548c\u6d4b\u8bd5"),(0,r.yg)("p",null,"\u5728\u8bad\u7ec3\u548c\u4f7f\u7528\u5b9e\u65f6\u5206\u7c7b\u6a21\u5f0f\u6d4b\u8bd5\u6a21\u578b\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5c06\u5176\u90e8\u7f72\u56de\u8bbe\u5907\u4e86\u3002\u6211\u4eec\u7f16\u8bd1\u5e76\u4e0b\u8f7dArduino\u5e93\uff0c\u5c06\u5176\u63d0\u53d6\u5230Arduino\u5e93\u6587\u4ef6\u5939\u4e2d\uff0c\u7136\u540e\u4fee\u6539nano33_ble_sense_accelerometer\u793a\u4f8b\u4ee5\u9002\u5e94Wio Terminal\u4e0a\u7684\u52a0\u901f\u5ea6\u8ba1\u3002\u4e3a\u4e86\u8fdb\u884c\u7b80\u5355\u7684\u6d4b\u8bd5\uff0c\u6211\u4eec\u4f7f\u7528LCD\u5c4f\u5e55\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u5f02\u5e38\uff0c\u5c4f\u5e55\u4f1a\u4eae\u8d77\u7ea2\u8272\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#define ANOMALY_THRESHOLD 0.5\n\n/* Includes ---------------------------------------------------------------- */\n#include <wio_anomaly_detection_inference.h>\n#include"LIS3DHTR.h"\n#include"TFT_eSPI.h"\n\nTFT_eSPI tft;\nLIS3DHTR<TwoWire> lis;\n\n/* Constant defines -------------------------------------------------------- */\n#define CONVERT_G_TO_MS2    9.80665f\n\n/* Private variables ------------------------------------------------------- */\nstatic bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal\n\n/**\n* @brief      Arduino setup function\n*/\nvoid setup()\n{\n    // put your setup code here, to run once:\n    Serial.begin(115200);\n    //while (!Serial) {delay(10);}\n    \n    Serial.println("Edge Impulse Inferencing Demo");\n    \n    tft.begin();\n    tft.setRotation(3);\n    \n    lis.begin(Wire1);\n \n    if (!lis.available()) {\n    Serial.println("Failed to initialize IMU!");\n    while (1);\n    }\n    else {\n        ei_printf("IMU initialized\\r\\n");\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz \n    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g\n   \n\n    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {\n        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\\n");\n        return;\n    }\n}\n\n/**\n* @brief      Printf function uses vsnprintf and output using Arduino Serial\n*\n* @param[in]  format     Variable argument list\n*/\nvoid ei_printf(const char *format, ...) {\n   static char print_buf[1024] = { 0 };\n\n   va_list args;\n   va_start(args, format);\n   int r = vsnprintf(print_buf, sizeof(print_buf), format, args);\n   va_end(args);\n\n   if (r > 0) {\n       Serial.write(print_buf);\n   }\n}\n\n/**\n* @brief      Get data and run inferencing\n*\n* @param[in]  debug  Get debug info if true\n*/\nvoid loop()\n{\n\n    ei_printf("Sampling...\\n");\n\n    // Allocate a buffer here for the values we\'ll read from the IMU\n    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };\n\n    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {\n        // Determine the next tick (and then sleep later)\n        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);\n\n        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);\n        buffer[ix + 0] *= CONVERT_G_TO_MS2;\n        buffer[ix + 1] *= CONVERT_G_TO_MS2;\n        buffer[ix + 2] *= CONVERT_G_TO_MS2;\n\n        delayMicroseconds(next_tick - micros());\n    }\n\n    // Turn the raw buffer in a signal which we can the classify\n    signal_t signal;\n    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);\n    if (err != 0) {\n        ei_printf("Failed to create signal from buffer (%d)\\n", err);\n        return;\n    }\n\n    // Run the classifier\n    ei_impulse_result_t result = { 0 };\n\n    err = run_classifier(&signal, &result, debug_nn);\n    if (err != EI_IMPULSE_OK) {\n        ei_printf("ERR: Failed to run classifier (%d)\\n", err);\n        return;\n    }\n\n    // print the predictions\n    ei_printf("Predictions ");\n    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",\n        result.timing.dsp, result.timing.classification, result.timing.anomaly);\n    ei_printf(": \\n");\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n\n  if (result.anomaly > ANOMALY_THRESHOLD)\n  {       \n    tft.fillScreen(TFT_RED);\n    tft.setFreeFont(&FreeSansBoldOblique12pt7b);\n    tft.drawString("Anomaly detected", 20, 80);\n    delay(1000);\n    tft.fillScreen(TFT_WHITE);\n  }\n    \n#endif\n}\n\n#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER\n#error "Invalid model for current sensor"\n#endif\n')),(0,r.yg)("p",null,"\u5f53\u7136\uff0c\u5bf9\u4e8e\u771f\u6b63\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u79cd\u901a\u77e5\u65b9\u5f0f\u53ef\u80fd\u4e0d\u592a\u9002\u7528\uff0c\u56e0\u4e3a\u6ca1\u6709\u4eba\u53ef\u4ee5\u4e0d\u65ad\u76d1\u89c6\u5b83\u3002"),(0,r.yg)("h2",{id:"\u5229\u7528\u65b0\u53d1\u5e03\u7684blynk\u7269\u8054\u7f51\u5e73\u53f0"},"\u5229\u7528\u65b0\u53d1\u5e03\u7684Blynk\u7269\u8054\u7f51\u5e73\u53f0"),(0,r.yg)("p",null,"\u4e3a\u4e86\u4f7f\u8fd9\u4e2a\u6f14\u793a\u6709\u7528\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Blynk IoT\u5e73\u53f0\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/b641e2030c1c47fbc7161c98a7e5d998.jpg"})),(0,r.yg)("p",null,"Blynk IoT\u5e73\u53f0\u5305\u62ecWeb\u4eea\u8868\u677f\u7528\u4e8e\u76d1\u63a7\u8bbe\u5907\u3001\u7ba1\u7406\u8bbf\u95ee\u6570\u636e\u7684\u4eba\u5458\u3001Wi-Fi\u7ba1\u7406\u5668\u7528\u4e8e\u7b80\u5316\u8bbe\u7f6e\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u65b0\u7684\u8bbe\u5907\u6a21\u578b\u521b\u5efa\u65b9\u6cd5\u7b49\u529f\u80fd\u3002"),(0,r.yg)("p",null,"\u8bbf\u95ee blynk.cloud\uff0c\u6ce8\u518c\u4e00\u4e2a\u5e10\u6237\u6216\u521b\u5efa\u4e00\u4e2a\u65b0\u5e10\u6237\u3002\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6a21\u677f-\u6a21\u677f\u662f\u8bbe\u5907\u7684\u6570\u5b57\u6a21\u578b\uff0c\u53ef\u4ee5\u88ab\u5177\u6709\u7c7b\u4f3c\u529f\u80fd\u7684\u591a\u4e2a\u8bbe\u5907\u7ee7\u627f\u3002\u6a21\u677f\u7684\u4f18\u52bf\u5728\u4e8e\uff0c\u65e0\u8bba\u8bbe\u5907\u89c4\u6a21\u5982\u4f55\uff0c\u90fd\u53ef\u4ee5\u7acb\u5373\u66f4\u65b0\u8bbe\u5907\u6570\u636e\u6a21\u578b\u3002"),(0,r.yg)("p",null,"\u9009\u62e9Arduino Uno\u4f5c\u4e3a\u786c\u4ef6\uff0c\u5e76\u9009\u62e9Wi-Fi\u4f5c\u4e3a\u8fde\u63a5\u7c7b\u578b\u3002\u7136\u540e\u6309\u7167\u4ee5\u4e0b\u622a\u56fe\u4e2d\u7684\u65b9\u5f0f\u586b\u5145 Datastream \u548c Dashboard \u9009\u9879\u5361\uff0c\u5e76\u4fdd\u5b58\u66f4\u6539\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-4-1536x551.png"})),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-5.png"})),(0,r.yg)("p",null,"\u5728\u8fd9\u4e2a\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u4e0d\u4f7f\u7528 Metadata \u6216 Events \u9009\u9879\u5361\u3002\u8bbe\u5907\u6a21\u677f\u7684\u4e3b\u8981\u7ec4\u6210\u90e8\u5206\u7684\u4e3b\u8981\u76ee\u7684\u662f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Metadata \u2013 \u5173\u4e8e\u8bbe\u5907\u7684\u5176\u4ed6\u6570\u636e\uff0c\u53ef\u4ee5\u8fdb\u884c\u914d\u7f6e\u3002"),(0,r.yg)("li",{parentName:"ul"},"Datastreams \u2013 \u7528\u4e8e\u5b9a\u4e49\u4ece\u8bbe\u5907\u6d41\u5165\u548c\u6d41\u51fa\u7684\u6570\u636e\u7684\u5b9e\u4f53\u3002\u603b\u4f53\u800c\u8a00\uff0c\u5b83\u4e0e\u865a\u62df\u5f15\u811a\u975e\u5e38\u76f8\u4f3c\uff08\u4e5f\u53ef\u4ee5\u4f7f\u7528\u865a\u62df\u5f15\u811a\uff09\u3002"),(0,r.yg)("li",{parentName:"ul"},"Events \u2013 \u91cd\u8981\u8b66\u62a5\u548c\u901a\u77e5\u7684\u5217\u8868\u3002"),(0,r.yg)("li",{parentName:"ul"},"Web Dashboard \u2013 Web\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4e00\u7ec4\u5c0f\u90e8\u4ef6"),(0,r.yg)("li",{parentName:"ul"},"Mobile Dashboard \u2013 \u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4e00\u7ec4\u5c0f\u90e8\u4ef6")),(0,r.yg)("p",null,"\u5728 My Devices \u9009\u9879\u5361\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u8bbe\u5907-\u9009\u62e9\u60a8\u521b\u5efa\u7684\u6a21\u677f\uff0c\u5e76\u7ed9\u5b83\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u79f0\u3002"),(0,r.yg)("p",null,"\u73b0\u5728\uff0cWeb\u754c\u9762\u5df2\u51c6\u5907\u597d\u63a5\u6536\u6765\u81ea\u8bbe\u5907\u7684\u6570\u636e\u3002\u4ece Seeed Wio Terminal \u793a\u4f8b\u4ee3\u7801\u5e93\u4e0b\u8f7d\u793a\u4f8b\u4ee3\u7801-\u9664\u4e86\u4e3b\u8981\u7684\u4ee3\u7801\u6587\u4ef6\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u4e86\u5e2e\u52a9\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542bWi-Fi\u7ba1\u7406\u5668\u4ee3\u7801\u3002\u5728\u4e3b\u8981\u7684\u4ee3\u7801\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u5c06\u7528\u4e8e\u6d4b\u8bd5LCD\u5c4f\u5e55\u7684\u6570\u636e\u6536\u96c6/\u6570\u636e\u5904\u7406/\u63a8\u65ad\u4ee3\u7801\u79fb\u52a8\u5230\u4e86 run_inference() \u51fd\u6570\u4e2d\u3002\u5177\u6709\u6700\u9ad8\u7f6e\u4fe1\u5ea6\u7684\u7c7b\u522b\u7684\u7c7bID\uff08\u5982\u679c\u7f6e\u4fe1\u5ea6\u9ad8\u4e8e\u8bbe\u5b9a\u7684\u9608\u503c\uff09\u4fdd\u5b58\u5728 best_result \u5168\u5c40\u53d8\u91cf\u4e2d\uff0c\u5e76\u4e0e\u5149\u7ebf\u548c\u58f0\u97f3\u4f20\u611f\u5668\u7684\u6570\u636e\u4e00\u8d77\u5b9a\u671f\u53d1\u9001\u5230Blynk\u670d\u52a1\u5668\u3002\u8bb0\u5f97\u5c06 BLYNK_TEMPLATE_ID \u548c BLYNK_DEVICE_NAME \u66f4\u6539\u4e3a\u8bbe\u5907\u6a21\u677f\u4e2d\u7684ID\u548c\u540d\u79f0\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-6.png"})),(0,r.yg)("p",null,"\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230Wio Terminal\u540e\uff0c\u5b83\u5c06\u521b\u5efa\u4e00\u4e2a\u70ed\u70b9\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u624b\u673a\u8fde\u63a5\u5230\u8be5\u70ed\u70b9\u3002\u8fde\u63a5\u540e\uff0c\u60a8\u5c06\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u4e00\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\u9875\u9762\uff0c\u5728\u8be5\u9875\u9762\u4e2d\uff0c\u60a8\u9700\u8981\u8f93\u5165\u60a8\u7684Wi-Fi\u51ed\u636e\u3001API\u4ee4\u724c\uff08\u53ef\u4ee5\u5728 My Devices \u9009\u9879\u5361\u4e2d\u70b9\u51fb Device \uff0c\u7136\u540e\u8f6c\u5230  Device Info \u4e2d\u627e\u5230\uff09\u7136\u540e\u70b9\u51fb Connect \u3002\u7136\u540e\uff0cWio Terminal\u5c06\u8fde\u63a5\u5230Wi-Fi\u7f51\u7edc\u548cBlynk\u4e91\u670d\u52a1\u5668\uff0c\u5e76\u5f00\u59cb\u53d1\u9001\u6570\u636e\u3002\u60a8\u53ef\u4ee5\u5728 My Devices \u9009\u9879\u5361\u4e2d\u70b9\u51fb Device \uff0c\u67e5\u770b\u6f02\u4eae\u7684\u56fe\u8868\u548c\u72b6\u6001\u6d88\u606f\u3002\u60a8\u53ef\u4ee5\u5728\u89c6\u9891\u7684\u6700\u540e\u770b\u5230\u6d4b\u8bd5\u7ed3\u679c\u3002"),(0,r.yg)("p",null,"\u663e\u7136\uff0c\u76f8\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u5e94\u7528\u4e8e\u68c0\u6d4b\u5176\u4ed6\u673a\u5668\u64cd\u4f5c\u7684\u5f02\u5e38\u60c5\u51b5-\u6211\u4eec\u53ef\u4ee5\u51e0\u4e4e\u5bf9\u6240\u6709\u5177\u6709\u8fd0\u52a8\u90e8\u4ef6\u7684\u8bbe\u5907\u4f7f\u7528\u52a0\u901f\u5ea6\u8ba1\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u90e8\u4ef6\u4f1a\u4ea7\u751f\u6211\u4eec\u53ef\u4ee5\u6d4b\u91cf\u7684\u632f\u52a8\u3002\u5982\u679c\u8bbe\u5907\u53d1\u51fa\u53ef\u542c\u5230\u7684\u58f0\u97f3\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u9ea6\u514b\u98ce\u3002\u4f7f\u7528\u591a\u4e2a\u4f20\u611f\u5668\u7684\u7ec4\u5408\u53ef\u80fd\u6548\u679c\u66f4\u597d\u3002\u8fd8\u6709\u5176\u4ed6\u54ea\u4e9b\u5e94\u7528\u4e2d\u53ef\u4ee5\u4f7f\u7528\u9884\u6d4b\u6027\u7ef4\u62a4\uff1f\u5728\u8bc4\u8bba\u4e2d\u5206\u4eab\u60a8\u7684\u60f3\u6cd5\uff01\u5e0c\u671b\u8fd9\u7bc7\u6587\u7ae0\u548c\u89c6\u9891\u5bf9\u60a8\u6709\u7528\uff01"),(0,r.yg)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/31205/latest"},"Edge Impulse \u516c\u5171\u9879\u76ee"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_5_Anomaly_Detection"},"Project Github")))))}p.isMDXComponent=!0}}]);