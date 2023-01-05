"use strict";(self.webpackChunkbemuse_docs=self.webpackChunkbemuse_docs||[]).push([[518],{2669:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(8851);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=t(415),o=t(1947),r=(t(8851),t(2669)),l=["components"],s={id:"music-server",title:"How to Host a Music Server (Legacy Method)",sidebar_label:"Legacy Music Server"},i=void 0,p={unversionedId:"music-server",id:"music-server",title:"How to Host a Music Server (Legacy Method)",description:"A new easier workflow for creating a music server is being developed.",source:"@site/docs/music-server.md",sourceDirName:".",slug:"/music-server",permalink:"/project/docs/music-server",draft:!1,tags:[],version:"current",lastUpdatedBy:"Thai Pangsakulyanont",lastUpdatedAt:1672940337,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{id:"music-server",title:"How to Host a Music Server (Legacy Method)",sidebar_label:"Legacy Music Server"},sidebar:"docs",previous:{title:"Previewer [NEW]",permalink:"/project/docs/previewer"},next:{title:"BMS Support",permalink:"/project/docs/bms-support"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"macOS",id:"macos",level:3},{value:"Prerequisite Check",id:"prerequisite-check",level:4},{value:"Windows",id:"windows",level:3},{value:"Installation",id:"installation",level:4},{value:"Prerequisite Check",id:"prerequisite-check-1",level:4},{value:"Debian Linux (Debian, Ubuntu etc.)",id:"debian-linux-debian-ubuntu-etc",level:3},{value:"Prerequisite Check",id:"prerequisite-check-2",level:4},{value:"A Music Server",id:"a-music-server",level:2},{value:"<code>index.json</code>",id:"indexjson",level:3},{value:"Song directory",id:"song-directory",level:3},{value:"Bemuse assets package",id:"bemuse-assets-package",level:3},{value:"Install Bemuse Tools",id:"install-bemuse-tools",level:2},{value:"Installation Check",id:"installation-check",level:3},{value:"Creating Your Server Folder",id:"creating-your-server-folder",level:2},{value:"Creating Bemuse Packages",id:"creating-bemuse-packages",level:2},{value:"Note",id:"note",level:3},{value:"Creating Index File",id:"creating-index-file",level:2},{value:"Hosting",id:"hosting",level:2},{value:"On a Web Server",id:"on-a-web-server",level:3},{value:"On a Local Machine (Windows, XAMPP)",id:"on-a-local-machine-windows-xampp",level:3},{value:"On a Local Machine (macOS, nginx)",id:"on-a-local-machine-macos-nginx",level:3},{value:"Additional Note.",id:"additional-note",level:5},{value:"Debian Linux using nginx",id:"debian-linux-using-nginx",level:4}],c={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A new easier workflow for creating a music server is being developed.\nPlease check out the ",(0,r.kt)("a",{parentName:"p",href:"song-workshop.html"},"new draft documentation")," for more information.")),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section is under construction.")),(0,r.kt)("p",null,"Bemuse comes with a default music server to help new players get started. This\ndefault music server contains a selection of songs that I think are really nice.\nYou can also run your own music server and play it in Bemuse. This page\ndescribes how you can do it."),(0,r.kt)("p",null,"This guide is valid for Windows or macOS, and assumes some knowledge about using\nthe command line and web hosting."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://brew.sh/"},"Homebrew")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://sox.sourceforge.net/"},"SoX"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"brew install sox --with-libvorbis"))),(0,r.kt)("h4",{id:"prerequisite-check"},"Prerequisite Check"),(0,r.kt)("p",null,"Run these commands inside the Terminal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node.js"),": You should see the version number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ node -v\nv10.11.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SoX"),": You should see the SoX version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ sox --version\nsox:      SoX v14.4.2\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On some devices, the SoX version number may not be displayed.")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://sox.sourceforge.net/"},"SoX"),": Download from\n",(0,r.kt)("a",{parentName:"li",href:"http://sourceforge.net/projects/sox/files/sox/"},"http://sourceforge.net/projects/sox/files/sox/"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For hosting on your local machine"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apachefriends.org"},"xampp"))),(0,r.kt)("h4",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Create a directory to store the program files. For example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Bemuse\\vendor\\bin"),". Extract files into that folder. Your tree should look\nlike this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\n\u2514\u2500\u2500 Bemuse\n    \u2514\u2500\u2500 vendor\n        \u2514\u2500\u2500 bin\n            \u251c\u2500\u2500 libflac-8.dll\n            \u251c\u2500\u2500 libgcc_s_sjlj-1.dll\n            \u251c\u2500\u2500 libgomp-1.dll\n            \u251c\u2500\u2500 libid3tag-0.dll\n            \u251c\u2500\u2500 libogg-0.dll\n            \u251c\u2500\u2500 libpng16-16.dll\n            \u251c\u2500\u2500 libsox-3.dll\n            \u251c\u2500\u2500 libsoxconvolver64.dll\n            \u251c\u2500\u2500 libsoxr64.dll\n            \u251c\u2500\u2500 libssp-0.dll\n            \u251c\u2500\u2500 libvorbis-0.dll\n            \u251c\u2500\u2500 libvorbisenc-2.dll\n            \u251c\u2500\u2500 libvorbisfile-3.dll\n            \u251c\u2500\u2500 libwavpack-1.dll\n            \u251c\u2500\u2500 libwinpthread-1.dll\n            \u251c\u2500\u2500 refalac.exe\n            \u251c\u2500\u2500 sox.exe\n            \u251c\u2500\u2500 wget.exe\n            \u251c\u2500\u2500 wget.ini\n            \u2514\u2500\u2500 zlib1.dll\n")),(0,r.kt)("h4",{id:"prerequisite-check-1"},"Prerequisite Check"),(0,r.kt)("p",null,"Open ",(0,r.kt)("strong",{parentName:"p"},"PowerShell")," (or Command Prompt) and add the PATH variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'PS> $env:Path += ";C:\\Bemuse\\vendor\\bin"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node.js"),": You should see the version number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS> node -v\n# v9.8.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SoX"),": You should see the version number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS> sox --version\n# C:\\Bemuse\\vendor\\bin\\sox.exe:      SoX v14.4.2\n")),(0,r.kt)("h3",{id:"debian-linux-debian-ubuntu-etc"},"Debian Linux (Debian, Ubuntu etc.)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js"),":\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodesource/distributions/blob/master/README.md"},"Here")," is\nthe installation guide from nodejs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://sox.sourceforge.net/"},"SoX"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt install sox"))),(0,r.kt)("p",null,"If you got error when convert sound, install ",(0,r.kt)("inlineCode",{parentName:"p"},"libsox-dev")," package too."),(0,r.kt)("h4",{id:"prerequisite-check-2"},"Prerequisite Check"),(0,r.kt)("p",null,"Run these commands inside the Terminal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node.js"),": You should see the version number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ node -v\nv11.1.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SoX"),": You should see the SoX version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ sox --version\nsox:      SoX v14.4.2\n")),(0,r.kt)("h2",{id:"a-music-server"},"A Music Server"),(0,r.kt)("p",null,"A music server is simply a web server that hosts the files in a specific\nstructure, which allows Bemuse to find the list of songs and the song data. A\nBemuse music server has the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(root of the server)\n\u251c\u2500\u2500 index.cache\n\u251c\u2500\u2500 index.json\n\u2514\u2500\u2500 [song_title]/\n    \u251c\u2500\u2500 bms1.bme\n    \u251c\u2500\u2500 bms2.bml\n    \u2514\u2500\u2500 assets/\n        \u251c\u2500\u2500 metadata.json\n        \u2514\u2500\u2500 (something).bemuse\n")),(0,r.kt)("h3",{id:"indexjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"index.json")),(0,r.kt)("p",null,"This file holds the list of all available songs and charts in this server. It\nalso includes some metadata information."),(0,r.kt)("p",null,"When entering the game, Bemuse will download this file to create the song list\nthat you see in the music selection screen."),(0,r.kt)("h3",{id:"song-directory"},"Song directory"),(0,r.kt)("p",null,"Besides the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.json")," file is a song directory. This directory contains the\nBMS files and the assets folder, a ",(0,r.kt)("strong",{parentName:"p"},"Bemuse assets package"),"."),(0,r.kt)("p",null,"This file is generated using the Bemuse tools, which we will cover in the next\nsection."),(0,r.kt)("h3",{id:"bemuse-assets-package"},"Bemuse assets package"),(0,r.kt)("p",null,"Usually, a BMS package will come with hundreds (or even thousands) of sound\nfiles (the keysounds). It is not suitable for serving over the web. Sometimes,\nthey are ",(0,r.kt)("inlineCode",{parentName:"p"},".wav")," files and usually, they are ",(0,r.kt)("inlineCode",{parentName:"p"},".ogg")," files. Wave files are too\nlarge, and not all browsers can play OGG files."),(0,r.kt)("p",null,"A Bemuse asset package contains the keysounds in OGG format. These sound files\nare grouped together into multiple parts. Each part is approximately 1.4 MB\nlarge."),(0,r.kt)("p",null,"The Bemuse assets package is also generated using the Bemuse tools, which we\nwill cover in the next section."),(0,r.kt)("h2",{id:"install-bemuse-tools"},"Install Bemuse Tools"),(0,r.kt)("p",null,"Bemuse Tools is a command line application to help you generate files for Bemuse\nmusic server. Install it using the ",(0,r.kt)("strong",{parentName:"p"},"npm")," command, which comes with Node.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS> npm install -g bemuse-tools\n")),(0,r.kt)("p",null,"or if you use yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn global add bemuse-tools\n")),(0,r.kt)("h3",{id:"installation-check"},"Installation Check"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS> bemuse-tools\n")),(0,r.kt)("p",null,"It should display the version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"This is bemuse-tools v1.1.0-beta.1\n\n  bemuse-tools: Tools for Bemuse\n\n  index [-r] \u2014 Index BMS files in current directory\n  pack <path> \u2014 Packs sounds and BGAs into assets folder\n  server <path> \u2014 Serves a Bemuse server (no indexing or conversion)\n")),(0,r.kt)("p",null,"If you installed bemuse-tools from yarn and get ",(0,r.kt)("inlineCode",{parentName:"p"},"command not found")," error, you\nhave to export path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ export PATH=~/.yarn/bin:${PATH}\n")),(0,r.kt)("p",null,"and run once again for installation check."),(0,r.kt)("h2",{id:"creating-your-server-folder"},"Creating Your Server Folder"),(0,r.kt)("p",null,"Extract your BMS files into a folder. One song per folder. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\n\u2514\u2500\u2500 Bemuse\n    \u2514\u2500\u2500 myserver\n        \u251c\u2500\u2500 song1\n        \u2502   \u251c\u2500\u2500 song1_N.bms\n        \u2502   \u251c\u2500\u2500 song1_H.bms\n        \u2502   \u251c\u2500\u2500 song1_A.bms\n        \u2502   \u251c\u2500\u2500 bass.wav\n        \u2502   \u2514\u2500\u2500 kick.wav\n        \u2514\u2500\u2500 song2\n            \u251c\u2500\u2500 song2_N.bms\n            \u251c\u2500\u2500 song2_H.bms\n            \u251c\u2500\u2500 song2_A.bms\n            \u251c\u2500\u2500 go.wav\n            \u251c\u2500\u2500 back.wav\n            \u251c\u2500\u2500 to.wav\n            \u251c\u2500\u2500 your.wav\n            \u2514\u2500\u2500 rave.wav\n")),(0,r.kt)("h2",{id:"creating-bemuse-packages"},"Creating Bemuse Packages"),(0,r.kt)("p",null,"Normally, a BMS package comes in ",(0,r.kt)("inlineCode",{parentName:"p"},".rar")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," format. Inside that package,\nthere are few BMS files and hundreds of sound files."),(0,r.kt)("p",null,"It's not practical to extract ",(0,r.kt)("inlineCode",{parentName:"p"},".rar")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," files in the browser. It's also\nnot practical to download hundreds of small files (very slow)."),(0,r.kt)("p",null,"In Bemuse, keysounds are packed into ",(0,r.kt)("inlineCode",{parentName:"p"},".bemuse")," format. They are split into many\nparts. Each part is about 1.4mb."),(0,r.kt)("p",null,"Inside Terminal or Powershell, ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," to the server folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS> cd C:\\Bemuse\\myserver\n")),(0,r.kt)("p",null,"Then invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"bemuse-tools pack")," with the folder you want to pack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS> bemuse-tools pack 'Lapis - SHIKI'\n# -> Loading audios\n# -> Loading movies\n# -> Loading and converting images\n#\n# -> Converting audio to ogg [better audio performance]\n# .....................................................................................................\n# ..................................................\n# -> Writing...\n# Written ogg.1.e0a51d24.bemuse\n# Written ogg.2.d582293b.bemuse\n# Written ogg.3.28d51957.bemuse\n# ...\n# Written metadata.json\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you pack bms files from ",(0,r.kt)("strong",{parentName:"p"},"linux"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-> Converting audio to m4a [for iOS and Safari]")," will get errors because of codec. Converted pack will not play sounds on Apple platform devices.")),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"Now if you look at your song folder, you should see a new folder called\n",(0,r.kt)("strong",{parentName:"p"},"assets"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Lapis - SHIKI\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 bga.1.e0a51d24.bemuse\n\u2502   \u251c\u2500\u2500 bga.2.d582293b.bemuse\n\u2502   \u251c\u2500\u2500 bga.3.28d51957.bemuse\n\u2502   \u2502   ...\n\u2502   \u251c\u2500\u2500 metadata.json\n\u2502   \u251c\u2500\u2500 ogg.1.d9bfef56.bemuse\n\u2502   \u251c\u2500\u2500 ogg.2.2105f7cc.bemuse\n\u2502   \u2514\u2500\u2500 ogg.3.766f65d4.bemuse\n\u2502       ...\n\u251c\u2500\u2500 ba11.ogg\n\u251c\u2500\u2500 ba12.ogg\n\u251c\u2500\u2500 ba13.ogg\n\u2502   ...\n\u251c\u2500\u2500 lapis5key.bms\n\u251c\u2500\u2500 lapis7keya.bme\n\u251c\u2500\u2500 lapis7keyl.bme\n\u2502   ...\n\u251c\u2500\u2500 syn9.ogg\n\u2514\u2500\u2500 synpad.ogg\n")),(0,r.kt)("h2",{id:"creating-index-file"},"Creating Index File"),(0,r.kt)("p",null,"Now, the client needs to know what songs are available in the server. You need\nto create an index file. You can do it by running this command in the server\nfolder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS> bemuse-tools index\n#\n# Absurd Gaff - siromaru       160bpm [schranz] siromaru / BMSSP-Absurd Gaff 3 6 8 10 10 21 [no-meta]\n# ametsuchi - stereoberry      122bpm [discopunk / shoegazer] stereoberry / BMSSP-ametsuchi 1 3 5 5 8 [no-meta]\n# atonement you you - unknown  197bpm [NO GENRE] Unknown Artist / BMSSP-atonement you you 4 6 [no-meta]\n# AVALON - Team.SASAKURATION   200bpm [\u03a9] Team:SASAKURATION-AVALON 0 5 6 10 10 12 12 [no-meta]\n# ...\n")),(0,r.kt)("p",null,"After running, you will see these ",(0,r.kt)("inlineCode",{parentName:"p"},"index.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"index.cache")," appear in your\nfolder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myserver\n\u251c\u2500\u2500 AVALON - Team.SASAKURATION\n\u251c\u2500\u2500 Absurd Gaff - siromaru\n\u251c\u2500\u2500 Declinin' - ____(sta)\n\u251c\u2500\u2500 HE is an Energizer - Mr.ABC\n\u251c\u2500\u2500 I'll_forget_you_you'll_never_forget_me - mommy\n\u251c\u2500\u2500 Lapis - SHIKI\n\u2502   ...\n\u251c\u2500\u2500 index.cache\n\u2514\u2500\u2500 index.json\n")),(0,r.kt)("h2",{id:"hosting"},"Hosting"),(0,r.kt)("h3",{id:"on-a-web-server"},"On a Web Server"),(0,r.kt)("p",null,"Upload ",(0,r.kt)("inlineCode",{parentName:"p"},"index.json"),", all ",(0,r.kt)("inlineCode",{parentName:"p"},"*.bemuse")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*.bms/bme/bml")," files to a web server.\nMake sure the directory layout is the same.\n",(0,r.kt)("a",{parentName:"p",href:"http://enable-cors.org/"},"Enable cross-origin resource sharing")," on your web\nserver to allow Bemuse client to connect."),(0,r.kt)("p",null,"To connect to the music server, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://bemuse.ninja/?server=<your URL>"),"."),(0,r.kt)("p",null,"Example:\n",(0,r.kt)("a",{parentName:"p",href:"http://bemuse.ninja/?server=http://flicknote.bemuse.ninja/bemuse/mumei12"},"http://bemuse.ninja/?server=http://flicknote.bemuse.ninja/bemuse/mumei12")),(0,r.kt)("h3",{id:"on-a-local-machine-windows-xampp"},"On a Local Machine (Windows, XAMPP)"),(0,r.kt)("p",null,"Navigate to your Apache Config folder of XAMPP (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\xampp\\apache\\conf"),") and\nopen ",(0,r.kt)("inlineCode",{parentName:"p"},"httpd.conf")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you create a Backup of the file so that you can restore to the default settings if any issues occur.")),(0,r.kt)("p",null,"Find the variable name ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentRoot")," and edit it's value from\n",(0,r.kt)("inlineCode",{parentName:"p"},'"C:\\xampp\\htdocs"')," to your server folder. (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Bemuse\\myserver"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#\n# DocumentRoot: The directory out of which you will serve your\n# documents. By default, all requests are taken from this directory, but\n# symbolic links and aliases may be used to point to other locations.\n#\nDocumentRoot "C:\\Bemuse\\myserver"\n')),(0,r.kt)("p",null,"Also change the value found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Directory")," tag to the server folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<Directory "C:\\Bemuse\\myserver">\n')),(0,r.kt)("p",null,"Place this line inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Directory")," tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Header set Access-Control-Allow-Origin "*"\n')),(0,r.kt)("p",null,"So it should look like below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'DocumentRoot "C:\\Bemuse\\myserver"\n<Directory "C:\\Bemuse\\myserver">\n    ....\n    Header set Access-Control-Allow-Origin "*"\n</Directory>\n')),(0,r.kt)("p",null,'Once the file is saved, open your XAMPP Control Pannel and run "Apache".'),(0,r.kt)("p",null,"Then connect to the music server with\n(",(0,r.kt)("a",{parentName:"p",href:"http://bemuse.ninja/?server=https://localhost/"},"http://bemuse.ninja/?server=https://localhost/"),")."),(0,r.kt)("h3",{id:"on-a-local-machine-macos-nginx"},"On a Local Machine (macOS, ",(0,r.kt)("a",{parentName:"h3",href:"https://nginx.org/en/"},"nginx"),")"),(0,r.kt)("p",null,"First, open a Terminal and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the folder that contains the Bemuse server\n(there should be an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.json")," file in that folder)."),(0,r.kt)("p",null,"Then, install nginx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install nginx\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Homebrew will install nginx on /usr/local.")),(0,r.kt)("p",null,"Check your current location:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ pwd\n# e.g Output: /Users/cenox/Dev/bemuse-test\n")),(0,r.kt)("p",null,"Note the output location; this will be used when we configure nginx."),(0,r.kt)("p",null,"Next, ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," to nginx folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /usr/local/nginx/etc\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"touch")," command to create a config file to serve the Bemuse server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ touch servers/bemuse\n")),(0,r.kt)("p",null,"Open Bemuse setting file with a text editor. Our example will use ",(0,r.kt)("inlineCode",{parentName:"p"},"nano"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ nano servers/bemuse\n")),(0,r.kt)("p",null,"Insert below text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    location / {\n        add_header 'Access-Control-Allow-Origin' '*';\n        root /Users/cenox/Dev/bemuse-test;\n        #    ^ Replace with the location from previous step\n    }\n}\n")),(0,r.kt)("p",null,"Save the file by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+X"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Y"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,r.kt)("p",null,"Reload nginx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ nginx -s reload\n")),(0,r.kt)("p",null,"Now, the music server will be available at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost."},"http://localhost.")," You can play by\ngoing to ",(0,r.kt)("a",{parentName:"p",href:"http://bemuse.ninja/?server=http://localhost"},"http://bemuse.ninja/?server=http://localhost"),"."),(0,r.kt)("h5",{id:"additional-note"},"Additional Note."),(0,r.kt)("p",null,"When you install nginx in Linux using a package manager, it runs when the OS\nboots up, but macOS isn't. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"brew services")," to register the nginx\nservice and make nginx automatically start when you log in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew services start nginx\n")),(0,r.kt)("h4",{id:"debian-linux-using-nginx"},"Debian Linux using ",(0,r.kt)("a",{parentName:"h4",href:"https://nginx.org/en/"},"nginx")),(0,r.kt)("p",null,"First, open a Terminal and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the folder that contains the Bemuse music\nserver (you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"index.json")," in this folder)."),(0,r.kt)("p",null,"Then, install nginx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install nginx\n")),(0,r.kt)("p",null,"Check your current location:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ pwd\n# e.g Output: /home/cenox/bemuse-test\n")),(0,r.kt)("p",null,"Note the output location. This will be used when we configure nginx."),(0,r.kt)("p",null,"Go to nginx folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /etc/nginx\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"touch")," command to create a config file to serve the Bemuse music server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo touch sites-available/bemuse\n")),(0,r.kt)("p",null,"Open the setting file with your text editor. This example uses ",(0,r.kt)("inlineCode",{parentName:"p"},"nano"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo nano sites-available/bemuse\n")),(0,r.kt)("p",null,"Insert below text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name localhost;\n    location / {\n        add_header 'Access-Control-Allow-Origin' '*';\n        root /home/cenox/bemuse-test; # Write location from pwd command.\n    }\n}\n")),(0,r.kt)("p",null,"Save the file by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+X"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Y"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,r.kt)("p",null,"Then, create a symlink to enable the configured site:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo ln -s /etc/nginx/sites-available/bemuse sites-enabled/bemuse\n")),(0,r.kt)("p",null,"Restart nginx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl restart nginx\n")),(0,r.kt)("p",null,"Now, the music server will be available at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost."},"http://localhost.")," You can play by\ngoing to ",(0,r.kt)("a",{parentName:"p",href:"http://bemuse.ninja/?server=http://localhost"},"http://bemuse.ninja/?server=http://localhost"),"."))}d.isMDXComponent=!0}}]);