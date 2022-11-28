"use strict";(self.webpackChunkbemuse_docs=self.webpackChunkbemuse_docs||[]).push([[927],{2669:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(8851);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(1465),o=n(6852),i=(n(8851),n(2669)),l=["components"],a={id:"architecture",title:"Project Architecture",sidebar_label:"Architecture"},s=void 0,c={unversionedId:"architecture",id:"architecture",title:"Project Architecture",description:"This section describes the architecture of the project.",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/project/docs/architecture",draft:!1,tags:[],version:"current",lastUpdatedBy:"dtinth on MBP M1",lastUpdatedAt:1669662161,formattedLastUpdatedAt:"Nov 28, 2022",frontMatter:{id:"architecture",title:"Project Architecture",sidebar_label:"Architecture"},sidebar:"docs",previous:{title:"Developer Guide",permalink:"/project/docs/developer-guide"},next:{title:"The Game Loop",permalink:"/project/docs/game-loop"}},u={},d=[{value:"Structure",id:"structure",level:2},{value:"Important Modules",id:"important-modules",level:2},{value:"Packages",id:"packages",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the architecture of the project."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"The Bemuse project is a ",(0,i.kt)("strong",{parentName:"p"},"monorepo"),". This means every package that shapes the project lives inside the same repository, which allows for easier development process."),(0,i.kt)("dl",null,(0,i.kt)("dt",null,"bin"),(0,i.kt)("dd",null,"Useful scripts for routine work. Examples include setting up Git commit hooks and releasing a new version."),(0,i.kt)("dt",null,"config"),(0,i.kt)("dd",null,"Configuration code for webpack and other things."),(0,i.kt)("dt",null,"docs"),(0,i.kt)("dd",null,"This documentation."),(0,i.kt)("dt",null,"packages"),(0,i.kt)("dd",null,"Contains projects closely-related to the core Bemuse project. These are published into separate npm packages."),(0,i.kt)("dt",null,"public"),(0,i.kt)("dd",null,"Files that will be deployed verbatim to the server, ",(0,i.kt)("strong",null,"except for"),(0,i.kt)("code",null,"index.html"),", where the boot script will be inlined. These include skin files."),(0,i.kt)("dt",null,"src"),(0,i.kt)("dd",null,"Contains the production code. Code is split into ",(0,i.kt)("em",null,"modules")," for different parts of the application."),(0,i.kt)("dt",null,"tasks"),(0,i.kt)("dd",null,"Gulp tasks to run test server, build, test the application."),(0,i.kt)("dt",null,"website"),(0,i.kt)("dd",null,"The code that powers this documentation. We use ",(0,i.kt)("a",{href:"https://docusaurus.io/"},"Docusaurus")," to build our documentation as a static website.")),(0,i.kt)("h2",{id:"important-modules"},"Important Modules"),(0,i.kt)("p",null,"These modules live in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory. There may be an arbitrary\nnumber of modules. Therefore, this section only lists the significant\nmodules."),(0,i.kt)("dl",null,(0,i.kt)("dt",null,"boot"),(0,i.kt)("dd",null,(0,i.kt)("p",null,"This module is the entry point to Bemuse. It reads the ",(0,i.kt)("code",null,"?mode="),"parameter and determines the name of the main module to load. It then displays a loading indicator and loads the main module asynchronously. After the main module is downloaded, finally, it is executed. Main modules include ",(0,i.kt)("code",null,"app"),", the game, and ",(0,i.kt)("code",null,"test"),", the unit tests. Upon building, the boot script will be inlined into",(0,i.kt)("code",null,"index.html"),"."),(0,i.kt)("p",null,"**Rationale:** No one likes blank white page. We want the user to see the application starting up as soon as possible, even though it is simply a loading indicator. To make this _blazingly fast_, we keep the compiled size of the `boot` very small, and inline that compiled code directly into the HTML file. So, no round-trip HTML requests\\! If they can load the HTML, they _will_ see the loading bar.")),(0,i.kt)("dt",null,"app"),(0,i.kt)("dd",null,"This is the main module of the game's application flow. Executing this module will present the game's main menu."),(0,i.kt)("dt",null,"test"),(0,i.kt)("dd",null,"This is the main module for unit tests. Executing this module will setup the environment for testing, load the unit tests in `spec` directory, and then execute them. After the test is run, the results and coverage data (if available) will be sent back to the server for further processing."),(0,i.kt)("dt",null,"game"),(0,i.kt)("dd",null,"This module contains the actual game part. For example, the logic for judging notes, calculating score, and rendering the scene.")),(0,i.kt)("h2",{id:"packages"},"Packages"),(0,i.kt)("p",null,"We also maintain other closely-related packages. These used to live in their own repository, but we've merged them into the main Bemuse repo for easier development."),(0,i.kt)("dl",null,(0,i.kt)("dt",null,(0,i.kt)("a",{href:"https://github.com/bemusic/bemuse/tree/master/packages/bms"},"bms-js")),(0,i.kt)("dd",null,"This package is a BMS parser written in JavaScript."),(0,i.kt)("dt",null,(0,i.kt)("a",{href:"https://github.com/bemusic/bemuse/tree/master/packages/bmson"},"bmson")),(0,i.kt)("dd",null,"This package contains various functions useful for working with bmson files."),(0,i.kt)("dt",null,(0,i.kt)("a",{href:"https://github.com/bemusic/bemuse/tree/master/packages/bemuse-tools"},"bemuse-tools")),(0,i.kt)("dd",null,"This package contains the command-line tools to convert a BMS package into a Bemuse package. Traditional BMS packages are optimized for offline playing. They are distributed as a large ",(0,i.kt)("code",null,".zip")," file with ",(0,i.kt)("code",null,".wav"),", ",(0,i.kt)("code",null,".mpg"),", and ",(0,i.kt)("code",null,".bms")," files.")))}h.isMDXComponent=!0}}]);