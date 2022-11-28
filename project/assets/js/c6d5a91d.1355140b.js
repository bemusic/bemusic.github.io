"use strict";(self.webpackChunkbemuse_docs=self.webpackChunkbemuse_docs||[]).push([[103],{2669:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(8851);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(1465),r=n(6852),i=(n(8851),n(2669)),l=["components"],o={id:"skinning",title:"Skinning"},s=void 0,p={unversionedId:"skinning",id:"skinning",title:"Skinning",description:"To make it easy to adjust the gameplay screen's appearance, the skin",source:"@site/docs/skinning.md",sourceDirName:".",slug:"/skinning",permalink:"/project/docs/skinning",draft:!1,tags:[],version:"current",lastUpdatedBy:"dtinth on MBP M1",lastUpdatedAt:1669662161,formattedLastUpdatedAt:"Nov 28, 2022",frontMatter:{id:"skinning",title:"Skinning"},sidebar:"docs",previous:{title:"The Game Loop",permalink:"/project/docs/game-loop"},next:{title:"Options",permalink:"/project/docs/options"}},c={},m=[{value:"Location",id:"location",level:2},{value:"Skin Development",id:"skin-development",level:2},{value:"Skin Elements",id:"skin-elements",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To make it easy to adjust the gameplay screen's appearance, the ",(0,i.kt)("em",{parentName:"p"},"skin"),"\nis not built into the game's source code."),(0,i.kt)("h2",{id:"location"},"Location"),(0,i.kt)("p",null,"The skin is located at the"),(0,i.kt)("span",{"data-role":"tree"},"public/skins/default")," folder. Inside, you will see several files.",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skin.xml"),(0,i.kt)("br",{parentName:"li"}),"This is the skin file that will be loaded by Bemuse. ",(0,i.kt)("strong",{parentName:"li"},"Do not edit\nthis file,")," since this file has been generated from the skin\ntemplate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skin_template.jade"),(0,i.kt)("br",{parentName:"li"}),"This is the skin template that is used to generate skin.xml. It is\nwritten in ",(0,i.kt)("a",{parentName:"li",href:"http://jade-lang.com/"},"Jade")," language."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skin_data.yml"),(0,i.kt)("br",{parentName:"li"}),"A YAML file describing global variables available to the skin\ntemplate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gulpfile.js"),(0,i.kt)("br",{parentName:"li"}),"A Gulp script to compile the template into skin.xml."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*/*.png"),(0,i.kt)("br",{parentName:"li"}),"Image assets.")),(0,i.kt)("h2",{id:"skin-development"},"Skin Development"),(0,i.kt)("p",null,"Make sure you have already set up the project and started the local\ndevelopment server."),(0,i.kt)("p",null,"Install Gulp globally, so that you can invoke it directly from the\ncommand line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ npm install -g gulp\n")),(0,i.kt)("p",null,"In another terminal window, ",(0,i.kt)("span",{"data-role":"command"},"cd")," to the\nskin's directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ cd public/skins/default\n")),(0,i.kt)("p",null,"Then run Gulp:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ gulp\n")),(0,i.kt)("p",null,"This will compile the skin into skin.xml. If you change\nskin_template.jade or skin_data.yml, the skin is recompiled. Now, you\ncan refresh the browser to see the changes."),(0,i.kt)("h2",{id:"skin-elements"},"Skin Elements"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO"),": generate documentation"))}d.isMDXComponent=!0}}]);