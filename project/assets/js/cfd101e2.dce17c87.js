"use strict";(self.webpackChunkbemuse_docs=self.webpackChunkbemuse_docs||[]).push([[279],{2669:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(8851);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=i(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||p;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(1465),a=n(6852),p=(n(8851),n(2669)),l=["components"],o={id:"bms-support",title:"BMS Support in Bemuse",sidebar_label:"BMS Support"},s=void 0,i={unversionedId:"bms-support",id:"bms-support",title:"BMS Support in Bemuse",description:"Bemuse supports BMS, BME and BML, but some features are not supported.",source:"@site/docs/bms-support.md",sourceDirName:".",slug:"/bms-support",permalink:"/project/docs/bms-support",draft:!1,tags:[],version:"current",lastUpdatedBy:"dtinth on MBP M1",lastUpdatedAt:1669662161,formattedLastUpdatedAt:"Nov 28, 2022",frontMatter:{id:"bms-support",title:"BMS Support in Bemuse",sidebar_label:"BMS Support"},sidebar:"docs",previous:{title:"Legacy Music Server",permalink:"/project/docs/music-server"},next:{title:"BMS Extensions",permalink:"/project/docs/bms-extensions"}},u={},m=[],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Bemuse supports BMS, BME and BML, but some features are not supported.\nThey are noted here."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"BMS")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"BGA is not supported yet."),(0,p.kt)("li",{parentName:"ul"},"Free-zone not supported."),(0,p.kt)("li",{parentName:"ul"},"Invisible objects ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/bemusic/bemuse/issues/186"},"not yet")," supported.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"BML")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Supports ",(0,p.kt)("inlineCode",{parentName:"p"},"#LNTYPE 1")," (RDM; loose BML) and ",(0,p.kt)("inlineCode",{parentName:"p"},"#LNOBJ")," (RDM type 2; strict\nBML)")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Long notes are judged both at the start and at the end (2 judgments\nper long note, similar to O2Jam).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Player must release the button at the end of long notes. Otherwise,\nthe end of long note will be missed."),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Exception:")," Player doesn\u2019t have to stop spinning the turntable\nat the end of SCRATCH notes. If the player keeps spinning, player\nwill get METICULOUS (Perfect) judgment.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"PLAYER")),(0,p.kt)("p",null,"As Bemuse is currently a single-player game, only #PLAYER 1 is\nsupported."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"RANK")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Bemuse does not support #RANK."),(0,p.kt)("li",{parentName:"ul"},"Judgment timegate is described at ",(0,p.kt)("a",{parentName:"li",href:"/project/docs/scoring-and-judgment"},"scoring and judgment")," section."),(0,p.kt)("li",{parentName:"ul"},"Bemuse judge notes per unit time.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"TOTAL")),(0,p.kt)("p",null,"Bemuse does not support #TOTAL."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"DIFFICULTY")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"BMS charts with #DIFFICULTY 1-4 are treated as the same (non-insane)."),(0,p.kt)("li",{parentName:"ul"},"BMS charts with #DIFFICULTY 5 are treated as \u767a\u72c2 BMS (INSANE chart).\nIn music selection screen, it is displayed in different color.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"TITLE and SUBTITLE")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Supports implicit subtitles."),(0,p.kt)("li",{parentName:"ul"},"Supports multiple subtitles.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"ARTIST and SUBARTIST")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Supports multiple subartists.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Landmine")),(0,p.kt)("p",null,"Not supported (in the future, it will display as fake note)."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"WAV")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Supports OGG, M4A, MP3, WAV samples.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Polyphony of #WAV is 1, consistent with major BMS implementations.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"However, it does not apply to sounds played when player hits the\nbutton without note (freestyle sound)."),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"Sound of the nearby note will play with no polyphony limit."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"If player gets OFFBEAT (bad) judgment, the sound will play in wrong\npitch."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"RANDOM")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Only #RANDOM, #IF, #ENDIF in original specification are supported.\nHowever, they can be nested (nesting level can be ended with\n",(0,p.kt)("inlineCode",{parentName:"li"},"#ENDRANDOM"),").")))}d.isMDXComponent=!0}}]);