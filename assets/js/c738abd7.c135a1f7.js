"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10462],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),h=a,g=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},60314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(58168),a=(t(96540),t(15680));const o={description:"This article describes how to use the microphone on the XIAO ESP32S3 Sense expansion board.",title:"Microphone Usage for Sense Version",keywords:["Template"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao_esp32s3_sense_mic",last_update:{date:"04/14/2023",author:"Citric"}},r="Usage of Seeed Studio XIAO ESP32S3 microphone",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/XIAO_ESP32S3_Sense_mic",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/XIAO_ESP32S3_Sense_mic",title:"Microphone Usage for Sense Version",description:"This article describes how to use the microphone on the XIAO ESP32S3 Sense expansion board.",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/XIAO_ESP32S3_Sense_mic.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense",slug:"/xiao_esp32s3_sense_mic",permalink:"/xiao_esp32s3_sense_mic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/XIAO_ESP32S3_Sense_mic.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1681430400,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{description:"This article describes how to use the microphone on the XIAO ESP32S3 Sense expansion board.",title:"Microphone Usage for Sense Version",keywords:["Template"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao_esp32s3_sense_mic",last_update:{date:"04/14/2023",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Bluetooth for both versions",permalink:"/xiao_esp32s3_bluetooth"},next:{title:"MicroSD card for Sense Version",permalink:"/xiao_esp32s3_sense_filesystem"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation of expansion boards (for Sense)",id:"installation-of-expansion-boards-for-sense",level:3},{value:"Prepare the microSD card",id:"prepare-the-microsd-card",level:3},{value:"Detection of sound loudness",id:"detection-of-sound-loudness",level:2},{value:"Program annotation",id:"program-annotation",level:3},{value:"Save recorded sound to microSD card",id:"save-recorded-sound-to-microsd-card",level:2},{value:"Program annotation",id:"program-annotation-1",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Why can&#39;t I play the recorded audio files?",id:"why-cant-i-play-the-recorded-audio-files",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"usage-of-seeed-studio-xiao-esp32s3-microphone"},"Usage of Seeed Studio XIAO ESP32S3 microphone"),(0,a.yg)("p",null,"In this tutorial, we will bring you how to use the microphone of XIAO ESP32S3 Sense expansion board. First is the very basic use of the I2S pin, we will get the loudness of the current environment by using I2S and the microphone, and display it in the serial waveform graph. Then we will explain how to record sound and save the recorded sound to the SD card."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Seeed Studio XIAO ESP32S3 Sense")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg",style:{width:250,height:"auto"}})))),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"All contents of this tutorial are applicable to XIAO ESP32S3 Sense only.")),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"Before starting the content of the tutorial, you may need to prepare the following hardware and software in advance."),(0,a.yg)("h3",{id:"installation-of-expansion-boards-for-sense"},"Installation of expansion boards (for Sense)"),(0,a.yg)("p",null,'Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.'),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif",style:{width:500,height:"auto"}})),(0,a.yg)("h3",{id:"prepare-the-microsd-card"},"Prepare the microSD card"),(0,a.yg)("p",null,"You may need a MicroSD card when working on a project where recordings are saved."),(0,a.yg)("p",null,"XIAO ESP32S3 Sense supports microSD cards up to ",(0,a.yg)("strong",{parentName:"p"},"32GB"),", so if you are ready to buy a microSD card for XIAO, please refer to this specification. And format the microSD card to ",(0,a.yg)("strong",{parentName:"p"},"FAT32")," format before using the microSD card."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png",style:{width:250,height:"auto"}})),(0,a.yg)("p",null,"After formatting, you can insert the microSD card into the microSD card slot. Please note the direction of insertion, the side with the gold finger should face inward."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg",style:{width:500,height:"auto"}})),(0,a.yg)("h2",{id:"detection-of-sound-loudness"},"Detection of sound loudness"),(0,a.yg)("p",null,"For the first project case, let's detect the noise in the environment and show the ambient loudness detected by the microphone using the Arduino IDE's serial port waveform graph."),(0,a.yg)("p",null,"The following is the complete sample program."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Check and make sure which version of ",(0,a.yg)("inlineCode",{parentName:"p"},"esp32")," you are using, the following example is for 2.0.x the one below is for 3.0.x and later")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <I2S.h>\n\nvoid setup() {\n  // Open serial communications and wait for port to open:\n  // A baud rate of 115200 is used instead of 9600 for a faster data rate\n  // on non-native USB ports\n  Serial.begin(115200);\n  while (!Serial) {\n    ; // wait for serial port to connect. Needed for native USB port only\n  }\n\n  // start I2S at 16 kHz with 16-bits per sample\n  I2S.setAllPins(-1, 42, 41, -1, -1);\n  if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {\n    Serial.println("Failed to initialize I2S!");\n    while (1); // do nothing\n  }\n}\n\nvoid loop() {\n  // read a sample\n  int sample = I2S.read();\n\n  if (sample && sample != -1 && sample != 1) {\n    Serial.println(sample);\n  }\n}\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The example above is only compatible with 2.0.x of ",(0,a.yg)("inlineCode",{parentName:"p"},"esp32"),", if you are on latest (e.g. 3.0.x) use the one below")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <ESP_I2S.h>\nI2SClass I2S;\n\nvoid setup() {\n  // Open serial communications and wait for port to open:\n  // A baud rate of 115200 is used instead of 9600 for a faster data rate\n  // on non-native USB ports\n  Serial.begin(115200);\n  while (!Serial) {\n    ; // wait for serial port to connect. Needed for native USB port only\n  }\n\n  // setup 42 PDM clock and 41 PDM data pins\n  I2S.setPinsPdmRx(42, 41);\n\n  // start I2S at 16 kHz with 16-bits per sample\n  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {\n    Serial.println("Failed to initialize I2S!");\n    while (1); // do nothing\n  }\n}\n\nvoid loop() {\n  // read a sample\n  int sample = I2S.read();\n\n  if (sample && sample != -1 && sample != 1) {\n    Serial.println(sample);\n  }\n}\n')),(0,a.yg)("p",null,"Upload this program for XIAO ESP32S3 Sense and open ",(0,a.yg)("strong",{parentName:"p"},"Serial Plotter"),", you will see the loudness change curve of the sound."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png",style:{width:600,height:"auto"}})),(0,a.yg)("h3",{id:"program-annotation"},"Program annotation"),(0,a.yg)("p",null,"At the beginning of the program, we need to first import the I2S library in order to use the microphone pins."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"#include <I2S.h>\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"setAllPins()")," function is called on the I2S object to configure the pins used for the I2S interface. The function takes five integer parameters that represent the GPIO pins connected to the I2S interface's bit clock, word select, data input, data output, and channel select lines, respectively."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"I2S.setAllPins(-1, 42, 41, -1, -1);\n")),(0,a.yg)("p",null,"In this specific code, the ",(0,a.yg)("inlineCode",{parentName:"p"},"-1")," values indicate that the corresponding pins are not used, while the ",(0,a.yg)("inlineCode",{parentName:"p"},"42")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"41")," values represent the GPIO pins connected to the word select and data input lines, respectively. The data output and channel select lines are not used in this configuration and are set to ",(0,a.yg)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {\n    Serial.println("Failed to initialize I2S!");\n    while (1); // do nothing\n}\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"begin()")," function is called on the I2S object to initialize the I2S interface with the specified parameters: ",(0,a.yg)("inlineCode",{parentName:"p"},"PDM_MONO_MODE"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"16000")," Hz sample rate, and ",(0,a.yg)("inlineCode",{parentName:"p"},"16-bit")," resolution."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"It should be noted that for the current ESP32-S3 chip, we can only use ",(0,a.yg)("inlineCode",{parentName:"p"},"PDM_MONO_MODE")," and the sampling bit width can only be ",(0,a.yg)("inlineCode",{parentName:"p"},"16bit"),". only the sampling rate can be modified, but after testing, the sampling rate at 16kHz is relatively stable.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"int sample = I2S.read();\n\nif (sample && sample != -1 && sample != 1) {\n    Serial.println(sample);\n}\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"read()")," function is called on the I2S object to read a single audio sample from the I2S interface. The if statement checks the value of the sample variable. If the sample value is not 0, -1, or 1, it is considered a valid audio sample, and the code inside the if block will be executed. In this case, the sample value is printed to the serial console using the ",(0,a.yg)("inlineCode",{parentName:"p"},"Serial.println()")," function."),(0,a.yg)("h2",{id:"save-recorded-sound-to-microsd-card"},"Save recorded sound to microSD card"),(0,a.yg)("p",null,"In this next project, we will guide you how to combine the functions of the microSD card and save the recorded sound to the microSD card. Then for this project, please prepare the microSD card and format it to ",(0,a.yg)("strong",{parentName:"p"},"FAT32")," format in advance."),(0,a.yg)("p",null,"If this is your first time using a microSD card on the XIAO ESP32S3, you can read the ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/#prepare-the-microsd-card"},"file system Wiki")," content to learn about microSD card installation and preparation."),(0,a.yg)("p",null,"The following is the Arduino program for this project."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n * WAV Recorder for Seeed XIAO ESP32S3 Sense \n*/\n\n#include <I2S.h>\n#include "FS.h"\n#include "SD.h"\n#include "SPI.h"\n\n// make changes as needed\n#define RECORD_TIME   20  // seconds, The maximum value is 240\n#define WAV_FILE_NAME "arduino_rec"\n\n// do not change for best\n#define SAMPLE_RATE 16000U\n#define SAMPLE_BITS 16\n#define WAV_HEADER_SIZE 44\n#define VOLUME_GAIN 2\n\nvoid setup() {\n  Serial.begin(115200);\n  while (!Serial) ;\n  I2S.setAllPins(-1, 42, 41, -1, -1);\n  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {\n    Serial.println("Failed to initialize I2S!");\n    while (1) ;\n  }\n  if(!SD.begin(21)){\n    Serial.println("Failed to mount SD Card!");\n    while (1) ;\n  }\n  record_wav();\n}\n\nvoid loop() {\n  delay(1000);\n  Serial.printf(".");\n}\n\nvoid record_wav()\n{\n  uint32_t sample_size = 0;\n  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;\n  uint8_t *rec_buffer = NULL;\n  Serial.printf("Ready to start recording ...\\n");\n\n  File file = SD.open("/"WAV_FILE_NAME".wav", FILE_WRITE);\n  // Write the header to the WAV file\n  uint8_t wav_header[WAV_HEADER_SIZE];\n  generate_wav_header(wav_header, record_size, SAMPLE_RATE);\n  file.write(wav_header, WAV_HEADER_SIZE);\n\n  // PSRAM malloc for recording\n  rec_buffer = (uint8_t *)ps_malloc(record_size);\n  if (rec_buffer == NULL) {\n    Serial.printf("malloc failed!\\n");\n    while(1) ;\n  }\n  Serial.printf("Buffer: %d bytes\\n", ESP.getPsramSize() - ESP.getFreePsram());\n\n  // Start recording\n  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);\n  if (sample_size == 0) {\n    Serial.printf("Record Failed!\\n");\n  } else {\n    Serial.printf("Record %d bytes\\n", sample_size);\n  }\n\n  // Increase volume\n  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {\n    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;\n  }\n\n  // Write data to the WAV file\n  Serial.printf("Writing to the file ...\\n");\n  if (file.write(rec_buffer, record_size) != record_size)\n    Serial.printf("Write file Failed!\\n");\n\n  free(rec_buffer);\n  file.close();\n  Serial.printf("The recording is over.\\n");\n}\n\nvoid generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)\n{\n  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/\n  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;\n  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;\n  const uint8_t set_wav_header[] = {\n    \'R\', \'I\', \'F\', \'F\', // ChunkID\n    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize\n    \'W\', \'A\', \'V\', \'E\', // Format\n    \'f\', \'m\', \'t\', \' \', // Subchunk1ID\n    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)\n    0x01, 0x00, // AudioFormat (1 for PCM)\n    0x01, 0x00, // NumChannels (1 channel)\n    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate\n    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate\n    0x02, 0x00, // BlockAlign\n    0x10, 0x00, // BitsPerSample (16 bits)\n    \'d\', \'a\', \'t\', \'a\', // Subchunk2ID\n    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size\n  };\n  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));\n}\n')),(0,a.yg)("p",null,"To execute this example, we will need to use the PSRAM function of the ESP-32 chip, so please turn it on before uploading."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png",style:{width:700,height:"auto"}})),(0,a.yg)("p",null,"This program is executed only once after the user ",(0,a.yg)("strong",{parentName:"p"},"turns on the serial monitor"),', recording for 20 seconds and saving the recording file to microSD card as "arduino_rec.wav".'),(0,a.yg)("p",null,'When the "." is output every 1 second in the serial monitor, the program execution is finished and you can play the recorded sound file with the help of a card reader.'),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/102.png",style:{width:700,height:"auto"}})),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"To play the recorded audio from XIAO ESP32S3, you may need to use an audio player that supports WAV format.")),(0,a.yg)("h3",{id:"program-annotation-1"},"Program annotation"),(0,a.yg)("p",null,"In this program, we have written two functions for the recording function, one is ",(0,a.yg)("inlineCode",{parentName:"p"},"record_wav()")," and the other is ",(0,a.yg)("inlineCode",{parentName:"p"},"generate_wav_header()"),"."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"record_wav()"),": Recording function. In this function, the program reads audio data from a microphone using the I2S interface, and stores it into an SD card as a WAV audio file."),(0,a.yg)("p",{parentName:"li"},"a. Initialize variables. The program defines a buffer ",(0,a.yg)("inlineCode",{parentName:"p"},"rec_buffer")," for storing the recorded data, and sets the recording time ",(0,a.yg)("inlineCode",{parentName:"p"},"RECORD_TIME"),"."),(0,a.yg)("p",{parentName:"li"},"b. Open the WAV file. The program uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"SD.open()")," function to open a WAV audio file, and defines its filename as ",(0,a.yg)("inlineCode",{parentName:"p"},"WAV_FILE_NAME"),"."),(0,a.yg)("p",{parentName:"li"},"c. Write the WAV file header. The program generates the header information of the WAV audio file using the ",(0,a.yg)("inlineCode",{parentName:"p"},"generate_wav_header()")," function, and writes it into the opened WAV file."),(0,a.yg)("p",{parentName:"li"},"d. Allocate memory and start recording. The program uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"ps_malloc()")," function to allocate a block of memory in the ESP32S3's PSRAM for storing the recorded data, and uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"esp_i2s::i2s_read()")," function to read audio data from the microphone. The read data is stored in the rec_buffer buffer."),(0,a.yg)("p",{parentName:"li"},"e. Increase volume. The program increases the volume of the recorded data using a gain value defined by the ",(0,a.yg)("inlineCode",{parentName:"p"},"VOLUME_GAIN")," constant."),(0,a.yg)("p",{parentName:"li"},"f. Write the recorded data into the WAV file. The program uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"file.write()")," function to write the recorded data into the opened WAV file."),(0,a.yg)("p",{parentName:"li"},"g. Free the buffer memory and close the WAV file. The program uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"free()")," function to free the memory of the ",(0,a.yg)("inlineCode",{parentName:"p"},"rec_buffer")," buffer, and uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"file.close()")," function to close the opened WAV file.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)"),": Function for generating the header information of a WAV file. In this function, the program generates a byte array containing the header information of a WAV file based on the WAV file's specifications."),(0,a.yg)("p",{parentName:"li"},"a. Define the constants for the WAV file header information. The program defines a byte array ",(0,a.yg)("inlineCode",{parentName:"p"},"set_wav_header")," containing the header information of a WAV file, and defines the constants for the WAV file's specifications, including ",(0,a.yg)("inlineCode",{parentName:"p"},"NUM_CHANNELS"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"BITS_PER_SAMPLE"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"WAV_HEADER_SIZE"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"SUB_CHUNK_SIZE"),"."),(0,a.yg)("p",{parentName:"li"},"b. Set the WAV file header information. The program sets the WAV file header information using the constants defined in step a, and calculates the values of some fields based on the WAV file's specifications, including ",(0,a.yg)("inlineCode",{parentName:"p"},"AUDIO_FORMAT"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"BYTE_RATE"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"BLOCK_ALIGN"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"SAMPLES_PER_CHANNEL"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"CHUNK_SIZE"),". The calculated values are stored in the ",(0,a.yg)("inlineCode",{parentName:"p"},"set_wav_header")," byte array."),(0,a.yg)("p",{parentName:"li"},"c. Copy the WAV file header information. The program copies the header information stored in ",(0,a.yg)("inlineCode",{parentName:"p"},"set_wav_header")," to the byte array ",(0,a.yg)("inlineCode",{parentName:"p"},"wav_header"),"."))),(0,a.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.yg)("h3",{id:"why-cant-i-play-the-recorded-audio-files"},"Why can't I play the recorded audio files?"),(0,a.yg)("p",null,"If you encounter a situation where you cannot play, please check the debug information printed by the serial monitor for error messages about reading and writing cards. If there is, please replace the microSD card or check if the card and expansion board connection is loose or unstable. If there is no problem with the card, then the audio file should be sized, if there is a problem with the recording, it may show up as a recorded audio file size of only 0KB."),(0,a.yg)("p",null,"For example, in the figure below, there is a problem with the card reading and writing."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/103.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"If there are no problems with the card and the recording is quite successful. Then you need to check if the software supports audio playback in WAV format. We recommend using special music playing software to play audio, try not to use video player to play. After actual testing, there are many video players (although they support WAV format) that are unable to play it."),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"."),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);