(()=>{var n,e,t,r={16182:(n,e,t)=>{"use strict"
t.d(e,{Z:()=>u})
var r=t(74045),o=t.n(r),i=t(12850),a=t.n(i),s=t(92059),c=t.n(s),l=new URL(t(87357),t.b),d=a()(o()),A=c()(l)
d.push([n.id,'@charset "UTF-8";\n.Boot {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.Bootのcontent {\n  animation: 0.5s boot--in cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.Bootのdj {\n  width: 64px;\n  height: 64px;\n  background: url('+A+") center no-repeat;\n  background-size: contain;\n  animation: 2s boot--dj--spin linear infinite;\n  margin: 0 auto 0.5em;\n}\n.Bootのtext {\n  text-align: center;\n  font-size: 16px;\n  color: #8b8685;\n  animation: 1s boot--text--pulse linear infinite;\n}\n\n@keyframes boot--dj--spin {\n  from {\n    transform: perspective(480px) rotateY(0deg);\n  }\n  to {\n    transform: perspective(480px) rotateY(-360deg);\n  }\n}\n@keyframes boot--text--pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  0% {\n    opacity: 1;\n  }\n}\n@keyframes boot--in {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}","",{version:3,sources:["webpack://./boot/ui/Boot.scss"],names:[],mappings:"AAAA,gBAAgB;AAEhB;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAF;AACE;EACE,4DAAA;AACJ;AACE;EACE,WAAA;EACA,YAAA;EACA,oEAAA;EACA,wBAAA;EACA,4CAAA;EACA,oBAAA;AACJ;AACE;EACE,kBAAA;EACA,eAAA;EACA,cAAA;EACA,+CAAA;AACJ;;AAGA;EACE;IACE,2CAAA;EAAF;EAEA;IACE,8CAAA;EAAF;AACF;AAGA;EACE;IACE,UAAA;EADF;EAGA;IACE,YAAA;EADF;EAGA;IACE,UAAA;EADF;AACF;AAIA;EACE;IACE,mBAAA;EAFF;EAIA;IACE,mBAAA;EAFF;AACF",sourcesContent:["@import '../../ui/common';\n\n.Boot {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &のcontent {\n    animation: 0.5s boot--in cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  &のdj {\n    width: 64px;\n    height: 64px;\n    background: url(../../ui/images/loading/dj.png) center no-repeat;\n    background-size: contain;\n    animation: 2s boot--dj--spin linear infinite;\n    margin: 0 auto 0.5em;\n  }\n  &のtext {\n    text-align: center;\n    font-size: 16px;\n    color: #8b8685;\n    animation: 1s boot--text--pulse linear infinite;\n  }\n}\n\n@keyframes boot--dj--spin {\n  from {\n    transform: perspective(480px) rotateY(0deg);\n  }\n  to {\n    transform: perspective(480px) rotateY(-360deg);\n  }\n}\n\n@keyframes boot--text--pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  0% {\n    opacity: 1;\n  }\n}\n\n@keyframes boot--in {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n"],sourceRoot:""}])
const u=d},98450:(n,e,t)=>{"use strict"
t.d(e,{Z:()=>s})
var r=t(74045),o=t.n(r),i=t(12850),a=t.n(i)()(o())
a.push([n.id,'@charset "UTF-8";\n.ErrorDialog {\n  background: #533;\n  color: #edd;\n  border: 2px solid #b77;\n  position: fixed;\n  z-index: 99999;\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  max-width: 640px;\n}\n.ErrorDialog h1,\n.ErrorDialog p {\n  margin: 0;\n  font-size: 1em;\n  line-height: 1.3;\n}\n.ErrorDialog h1 {\n  color: #fcc;\n}\n.ErrorDialog pre {\n  margin: 1em 0 0;\n  font-family: Menlo, Consolas, monospace;\n  font-size: 0.8em;\n  line-height: 1.3;\n  opacity: 0.7;\n}\n.ErrorDialogのwhere {\n  font-size: 0.8em;\n  color: #faa;\n}\n.ErrorDialogのclose {\n  position: absolute;\n  top: 1ex;\n  right: 1ex;\n  background: rgb(102.34, 51.17, 51.17);\n  width: 1.3em;\n  height: 1.3em;\n  line-height: 1.3em;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #955;\n}\n.ErrorDialogのclose:hover {\n  background: #844;\n  border-color: #d77;\n}',"",{version:3,sources:["webpack://./boot/ui/ErrorDialog.scss"],names:[],mappings:"AAAA,gBAAgB;AAAhB;EACE,gBAAA;EACA,WAAA;EAEA,sBAAA;EACA,eAAA;EAEA,cAAA;EAEA,SAAA;EACA,UAAA;EACA,aAAA;EACA,gBAAA;AADF;AAGE;;EAEE,SAAA;EACA,cAAA;EACA,gBAAA;AADJ;AAIE;EACE,WAAA;AAFJ;AAKE;EACE,eAAA;EACA,uCAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;AAHJ;AAME;EACE,gBAAA;EACA,WAAA;AAJJ;AAOE;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,qCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,sBAAA;AALJ;AAMI;EACE,gBAAA;EACA,kBAAA;AAJN",sourcesContent:[".ErrorDialog {\n  background: #533;\n  color: #edd;\n\n  border: 2px solid #b77;\n  position: fixed;\n\n  z-index: 99999;\n\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  max-width: 640px;\n\n  h1,\n  p {\n    margin: 0;\n    font-size: 1em;\n    line-height: 1.3;\n  }\n\n  h1 {\n    color: #fcc;\n  }\n\n  pre {\n    margin: 1em 0 0;\n    font-family: Menlo, Consolas, monospace;\n    font-size: 0.8em;\n    line-height: 1.3;\n    opacity: 0.7;\n  }\n\n  &のwhere {\n    font-size: 0.8em;\n    color: #faa;\n  }\n\n  &のclose {\n    position: absolute;\n    top: 1ex;\n    right: 1ex;\n    background: lighten(#633, 0.1);\n    width: 1.3em;\n    height: 1.3em;\n    line-height: 1.3em;\n    text-align: center;\n    cursor: pointer;\n    border: 1px solid #955;\n    &:hover {\n      background: #844;\n      border-color: #d77;\n    }\n  }\n}\n"],sourceRoot:""}])
const s=a},88798:(n,e,t)=>{"use strict"
t.d(e,{Z:()=>s})
var r=t(74045),o=t.n(r),i=t(12850),a=t.n(i)()(o())
a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300italic);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:500,400);"]),a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}])
const s=a},27707:(n,e,t)=>{"use strict"
t.d(e,{Z:()=>s})
var r=t(74045),o=t.n(r),i=t(12850),a=t.n(i)()(o())
a.push([n.id,'@media (min-width: 1279px) and (max-width: 1281px) and (min-height: 719px), (min-height: 719px) and (max-height: 721px) and (min-width: 1279px) {\n  canvas {\n    /* https://code.google.com/p/chromium/issues/detail?id=424025 */\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: pixelated;\n    -ms-interpolation-mode: nearest-neighbor;\n  }\n}\nbody {\n  font-family: "Source Sans Pro", "Segoe UI", "Helvetica Neue", sans-serif;\n}\n\na {\n  color: #039;\n}\n\n@media (max-width: 1154px) {\n  :root {\n    font-size: 15px;\n  }\n}\n@media (min-width: 1154px) {\n  :root {\n    font-size: 1.3vw;\n  }\n}\n:root body {\n  font-size: 1rem;\n}',"",{version:3,sources:["webpack://./ui/global.scss","webpack://./ui/common.scss"],names:[],mappings:"AAEA;EAEE;IACE,+DAAA;IACA,0CAAA;IACA,iCAAA;IACA,+BAAA;IACA,0BAAA;IACA,wCAAA;EAFF;AACF;AAKA;EACE,wECXQ;ADQV;;AAMA;EACE,WCdW;ADWb;;AAOE;EADF;IAEI,eAAA;EAHF;AACF;AAIE;EAJF;IAKI,gBAAA;EADF;AACF;AAEE;EACE,eAAA;AAAJ",sourcesContent:["@import './common.scss';\n\n@media (min-width: 1279px) and (max-width: 1281px) and (min-height: 719px),\n  (min-height: 719px) and (max-height: 721px) and (min-width: 1279px) {\n  canvas {\n    /* https://code.google.com/p/chromium/issues/detail?id=424025 */\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: pixelated;\n    -ms-interpolation-mode: nearest-neighbor;\n  }\n}\n\nbody {\n  font-family: $ui-font;\n}\n\na {\n  color: $link-color;\n}\n\n:root {\n  @media (max-width: 1154px) {\n    font-size: 15px;\n  }\n  @media (min-width: 1154px) {\n    font-size: 1.3vw;\n  }\n  body {\n    font-size: 1rem;\n  }\n}\n","// The common library for user interface.\n// This file must not emit any CSS code! It can only contain variable,\n// mixin, or silent class declarations.\n\n$ui-font: 'Source Sans Pro', 'Segoe UI', 'Helvetica Neue', sans-serif;\n$link-color: #039;\n\n@mixin full-screen {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n@mixin full-screen-fixed {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n@mixin centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@mixin scrolling-y {\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n@mixin scrolling-x {\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n@mixin center-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin scene-background($url) {\n  background: $url center no-repeat;\n  background-size: cover;\n}\n\n@mixin main-bg($url) {\n  @include scene-background($url);\n}\n\n@mixin soft-shadow {\n  box-shadow: 0 0.1vh 3vh rgba(#000, 0.1);\n}\n\n@mixin button {\n  font: inherit;\n  background: #252423 linear-gradient(to bottom, #454443, #151413);\n  border: 1px solid #555453;\n  padding: 0.5ex 1.3ex;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(#000, 0.5);\n  &:hover {\n    border-color: #656463;\n  }\n  &:focus {\n    border-color: #8b8685;\n    outline: 0;\n  }\n  &:active {\n    background: #252423 linear-gradient(to top, #353433, #151413);\n    border-color: #454443;\n  }\n}\n\n@mixin input {\n  font: inherit;\n  background: #252423 linear-gradient(to bottom, #151413, #292827);\n  border: 1px solid #555453;\n  padding: 0.5ex 1.3ex;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(#000, 0.5);\n  &:hover {\n    border-color: #656463;\n  }\n  &:focus {\n    border-color: #8b8685;\n    outline: 0;\n  }\n  &:active {\n    border-color: #454443;\n  }\n  &::selection {\n    background: #8b8685;\n    color: #8e8;\n  }\n}\n\n@mixin input-button-zindex($nominal) {\n  position: relative;\n  z-index: $nominal;\n  &:hover {\n    z-index: 30;\n  }\n  &:focus {\n    z-index: 40;\n  }\n  &:active {\n    z-index: 10;\n  }\n}\n"],sourceRoot:""}])
const s=a},12850:n=>{"use strict"
n.exports=function(n){var e=[]
return e.toString=function(){return this.map(function(e){var t="",r=void 0!==e[5]
return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t}).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]])
var a={}
if(r)for(var s=0;s<this.length;s++){var c=this[s][0]
null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l])
r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},92059:n=>{"use strict"
n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},74045:n=>{"use strict"
n.exports=function(n){var e=n[1],t=n[3]
if(!t)return e
if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */")
return[e].concat([i]).join("\n")}return[e].join("\n")}},9941:(n,e,t)=>{var r=t(64243).Symbol
n.exports=r},10644:n=>{n.exports=function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n)
return o}},18349:(n,e,t)=>{var r=t(9941),o=t(60501),i=t(49683),a=r?r.toStringTag:void 0
n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":a&&a in Object(n)?o(n):i(n)}},75682:n=>{n.exports=function(n){return function(e){return null==n?void 0:n[e]}}},73541:(n,e,t)=>{var r=t(9941),o=t(10644),i=t(91063),a=t(28873),s=r?r.prototype:void 0,c=s?s.toString:void 0
n.exports=function n(e){if("string"==typeof e)return e
if(i(e))return o(e,n)+""
if(a(e))return c?c.call(e):""
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}},14222:(n,e,t)=>{var r=t(75682)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})
n.exports=r},13241:(n,e,t)=>{var r="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g
n.exports=r},60501:(n,e,t)=>{var r=t(9941),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0
n.exports=function(n){var e=i.call(n,s),t=n[s]
try{n[s]=void 0
var r=!0}catch(n){}var o=a.call(n)
return r&&(e?n[s]=t:delete n[s]),o}},49683:n=>{var e=Object.prototype.toString
n.exports=function(n){return e.call(n)}},64243:(n,e,t)=>{var r=t(13241),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")()
n.exports=i},77543:(n,e,t)=>{var r=t(14222),o=t(68889),i=/[&<>"']/g,a=RegExp(i.source)
n.exports=function(n){return(n=o(n))&&a.test(n)?n.replace(i,r):n}},91063:n=>{var e=Array.isArray
n.exports=e},13491:n=>{n.exports=function(n){return null!=n&&"object"==typeof n}},28873:(n,e,t)=>{var r=t(18349),o=t(13491)
n.exports=function(n){return"symbol"==typeof n||o(n)&&"[object Symbol]"==r(n)}},68889:(n,e,t)=>{var r=t(73541)
n.exports=function(n){return null==n?"":r(n)}},45227:n=>{"use strict"
var e=[]
function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r
break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,A="".concat(l," ").concat(d)
i[l]=d+1
var u=t(A),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]}
if(-1!==u)e[u].references++,e[u].updater(f)
else{var p=o(f,r)
r.byIndex=s,e.splice(s,0,{identifier:A,updater:p,references:1})}a.push(A)}return a}function o(n,e){var t=e.domAPI(e)
t.update(n)
return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return
t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{})
return function(n){n=n||[]
for(var a=0;a<i.length;a++){var s=t(i[a])
e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l])
0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},50872:n=>{"use strict"
var e={}
n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n)
if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n)
if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
r.appendChild(t)}},98192:n=>{"use strict"
n.exports=function(n){var e=document.createElement("style")
return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},53974:(n,e,t)=>{"use strict"
n.exports=function(n){var e=t.nc
e&&n.setAttribute("nonce",e)}},88397:n=>{"use strict"
n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}}
var e=n.insertStyleElement(n)
return{update:function(t){!function(n,e,t){var r=""
t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"))
var o=void 0!==t.layer
o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}")
var i=t.sourceMap
i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1
n.parentNode.removeChild(n)}(e)}}}},92789:n=>{"use strict"
n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(n))}}},41899:(n,e,t)=>{"use strict"
t.d(e,{Z:()=>r})
const r=Object.fromEntries(new URLSearchParams(location.search).entries())},66926:(n,e,t)=>{"use strict"
t.d(e,{Z:()=>o})
var r=t(71880)
const o=t.n(r)()},71880:n=>{n.exports="54.1"},87357:(n,e,t)=>{"use strict"
n.exports=t.p+"build/assets/dj-fb89bc0fb54b70cd3f50.png"},42172:(n,e,t)=>{"use strict"
t.r(e),t.d(e,{Workbox:()=>p,WorkboxEvent:()=>l,messageSW:()=>r})
try{self["workbox:window:6.5.4"]&&_()}catch(r){}function r(n,e){return new Promise(function(t){var r=new MessageChannel
r.port1.onmessage=function(n){t(n.data)},n.postMessage(e,[r.port2])})}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e){(null==e||e>n.length)&&(e=n.length)
for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t]
return r}function a(n,e){var t
if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return i(n,e)
var t=Object.prototype.toString.call(n).slice(8,-1)
return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t)
var r=0
return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=n[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.4"]&&_()}catch(r){}var s=function(){var n=this
this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})}
function c(n,e){var t=location.href
return new URL(n,t).href===new URL(e,t).href}var l=function(n,e){this.type=n,Object.assign(this,e)}
function d(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function A(){}var u={type:"SKIP_WAITING"}
function f(n,e){if(!e)return n&&n.then?n.then(A):Promise.resolve()}var p=function(n){var e,t
function i(e,t){var r,o
return void 0===t&&(t={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new s,r.en=new s,r.on=new s,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,e=n.installing
r.tn>0||!c(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,n.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(n){var e=r.fn,t=n.target,o=t.state,i=t===r.vn,a={sw:t,isExternal:i,originalEvent:n}
!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new l(o,a)),"installed"===o?r.wn=self.setTimeout(function(){"installed"===o&&e.waiting===t&&r.dispatchEvent(new l("waiting",a))},200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(t))},r.dn=function(n){var e=r.hn,t=e!==navigator.serviceWorker.controller
r.dispatchEvent(new l("controlling",{isExternal:t,originalEvent:n,sw:e,isUpdate:r.mn})),t||r.on.resolve(e)},r.gn=(o=function(n){var e=n.data,t=n.ports,o=n.source
return d(r.getSW(),function(){r.an.has(o)&&r.dispatchEvent(new l("message",{data:e,originalEvent:n,ports:t,sw:o}))})},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e]
try{return Promise.resolve(o.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=e,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}t=n,(e=i).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t
var a,A,p=i.prototype
return p.register=function(n){var e=(void 0===n?{}:n).immediate,t=void 0!==e&&e
try{var r=this
return function(n,e){var t=n()
return t&&t.then?t.then(e):e()}(function(){if(!t&&"complete"!==document.readyState)return f(new Promise(function(n){return window.addEventListener("load",n)}))},function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),d(r.bn(),function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}))
var e=r.fn.waiting
return e&&c(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then(function(){r.dispatchEvent(new l("waiting",{sw:e,wasWaitingBeforeRegister:!0}))}).then(function(){})),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn})})}catch(n){return Promise.reject(n)}},p.update=function(){try{return this.fn?f(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},p.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},p.messageSW=function(n){try{return d(this.getSW(),function(e){return r(e,n)})}catch(n){return Promise.reject(n)}},p.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,u)},p.pn=function(){var n=navigator.serviceWorker.controller
return n&&c(n.scriptURL,this.sn.toString())?n:void 0},p.bn=function(){try{var n=this
return function(n,e){try{var t=n()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}(function(){return d(navigator.serviceWorker.register(n.sn,n.nn),function(e){return n.un=performance.now(),e})},function(n){throw n})}catch(n){return Promise.reject(n)}},a=i,(A=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&o(a.prototype,A),i}(function(){function n(){this.Pn=new Map}var e=n.prototype
return e.addEventListener=function(n,e){this.Sn(n).add(e)},e.removeEventListener=function(n,e){this.Sn(n).delete(e)},e.dispatchEvent=function(n){n.target=this
for(var e,t=a(this.Sn(n.type));!(e=t()).done;)(0,e.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}())}},o={}
function i(n){var e=o[n]
if(void 0!==e)return e.exports
var t=o[n]={id:n,loaded:!1,exports:{}}
return r[n].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=r,i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n
return i.d(e,{a:e}),e},e=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,i.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t
if("object"==typeof t&&t){if(4&r&&t.__esModule)return t
if(16&r&&"function"==typeof t.then)return t}var o=Object.create(null)
i.r(o)
var a={}
n=n||[null,e({}),e([]),e(e)]
for(var s=2&r&&t;"object"==typeof s&&!~n.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach(n=>a[n]=()=>t[n])
return a.default=()=>t,i.d(o,a),o},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.f={},i.e=n=>Promise.all(Object.keys(i.f).reduce((e,t)=>(i.f[t](n,e),e),[])),i.u=n=>"build/"+({31:"sync",43:"test",45:"stbvorbis",51:"comingSoonDemo",76:"comingSoon",106:"music",143:"app",189:"previewer",236:"gameEngine",271:"playground",625:"environment",757:"game"}[n]||n)+"-"+{2:"f2e395322596383e9c0f",31:"b3c25b587b2cef73ecbb",43:"a8a8bf1bbc7fc972aa00",45:"6519621db8bdb1edb494",51:"102d188968a93e1f8e10",72:"0401bdbfd053587d5b05",76:"e5ca099030f5bd493b11",105:"977f385482b332fcd4ca",106:"3f755264c0994dc1d8c9",114:"2fe4a16e0a88b7fd6998",143:"2fef0f7560b10bb69304",144:"81d7338d17629cf3972f",156:"d5772ecb62deb90a1afe",189:"0c725f312b27bf1453f0",192:"41e1612c9b453d8ebae5",222:"eaa1854ccef2f5a2c91f",236:"1aefa49a62bf1e54b8c7",251:"01dfce2cb9ac4fe8bdc3",271:"ab12d3e470465178cb2b",287:"a163f40e924e8aa9327e",306:"da08351abad7026fc99c",309:"2cb6e2201723ba538ead",340:"4791e3a432724a75b702",395:"58b4621e8ea6b6c1408d",572:"aed965c228db316ea634",602:"11601891db4069653913",625:"d7838c2095fef9a3d9ce",634:"f6da75d70aea7833c688",643:"0af49614ba97008c6180",728:"92971613fcd6bb69dee6",740:"8b7dc6a26cd8dc5c0901",757:"cedcf233b56b0a1d000b",793:"d336919e601df39f8040",821:"7881c9dbadfb312543f0",847:"4d634028de6743784eb5",849:"3dc4f96224589afd563c",895:"6d00f80a5aa506cfec8a",959:"02ef8fcf8a3bcf3fb368",980:"6a1502b86abaa505a03c",982:"0f44b28c2234d99870bb",984:"a5ccce560c1bdbefd80d"}[n]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis
try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t={},i.l=(n,e,r,o)=>{if(t[n])t[n].push(e)
else{var a,s
if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l]
if(d.getAttribute("src")==n){a=d
break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=n),t[n]=[e]
var A=(e,r)=>{a.onerror=a.onload=null,clearTimeout(u)
var o=t[n]
if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(n=>n(r)),e)return e(r)},u=setTimeout(A.bind(null,void 0,{type:"timeout",target:a}),12e4)
a.onerror=A.bind(null,a.onerror),a.onload=A.bind(null,a.onload),s&&document.head.appendChild(a)}},i.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),i.p="/",(()=>{i.b=document.baseURI||self.location.href
var n={117:0}
i.f.j=(e,t)=>{var r=i.o(n,e)?n[e]:void 0
if(0!==r)if(r)t.push(r[2])
else{var o=new Promise((t,o)=>r=n[e]=[t,o])
t.push(r[2]=o)
var a=i.p+i.u(e),s=new Error
i.l(a,t=>{if(i.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src
s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}},"chunk-"+e,e)}}
var e=(e,t)=>{var r,o,a=t[0],s=t[1],c=t[2],l=0
if(a.some(e=>0!==n[e])){for(r in s)i.o(s,r)&&(i.m[r]=s[r])
if(c)c(i)}for(e&&e(t);l<a.length;l++)o=a[l],i.o(n,o)&&n[o]&&n[o][0](),n[o]=0},t=this.webpackChunk=this.webpackChunk||[]
t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),i.nc=void 0,(()=>{"use strict"
const n=i(42172)
if("serviceWorker"in navigator){new n.Workbox("/service-worker.js",{scope:void 0}).register()}})(),(()=>{"use strict"
var n=i(45227),e=i.n(n),t=i(88397),r=i.n(t),o=i(50872),a=i.n(o),s=i(53974),c=i.n(s),l=i(98192),d=i.n(l),A=i(92789),u=i.n(A),f=i(88798),p={}
p.styleTagTransform=u(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=d()
e()(f.Z,p)
f.Z&&f.Z.locals&&f.Z.locals
var m=i(27707),h={}
h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d()
e()(m.Z,h)
m.Z&&m.Z.locals&&m.Z.locals
var g=i(41899),b=i(16182),v={}
v.styleTagTransform=u(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d()
e()(b.Z,v)
b.Z&&b.Z.locals&&b.Z.locals
var E=i(66926)
const y=document.createElement("div")
function x(n){y.querySelector(".js-status").textContent=n}y.id="boot",y.className="Boot",y.innerHTML='<div class="Bootのcontent"><div class="Bootのdj"></div><div class="Bootのtext"><div><strong>Bemuse <span class="js-version"></span></strong></div><div class="js-status">Loading page</div></div></div>',y.querySelector(".js-version").appendChild(document.createTextNode(`v${E.Z}`)),document.body.appendChild(y)
var w=i(98450),C={}
C.styleTagTransform=u(),C.setAttributes=c(),C.insert=a().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=d()
e()(w.Z,C)
w.Z&&w.Z.locals&&w.Z.locals
var k=i(77543),S=i.n(k)
function j(n,e,t,r,o){const i=document.createElement("div")
i.className="ErrorDialog",i.innerHTML=function({message:n,url:e,line:t,col:r,e:o}){return`<h1>An error has occured!</h1><p>${S()(n)}</p>`+(e?`<p class="ErrorDialogのwhere">${S()(e+":"+t+":"+r)}</p>`:"")+`<pre wrap="wrap">${S()(o&&o.stack||"No stack trace available")}</pre><div class="ErrorDialogのclose">&times;</div>`}({message:n,url:t,line:r,col:o,e}),document.body.appendChild(i)
const a=i.querySelector(".ErrorDialogのclose")
a&&a.addEventListener("click",function(){i.parentNode.removeChild(i)},!1)}const P={app:()=>Promise.all([i.e(602),i.e(306),i.e(287),i.e(105),i.e(2),i.e(572),i.e(395),i.e(72),i.e(251),i.e(728),i.e(144),i.e(984),i.e(982),i.e(793),i.e(959),i.e(643),i.e(309),i.e(980),i.e(222),i.e(821),i.e(143)]).then(i.bind(i,3470)),music:()=>Promise.all([i.e(602),i.e(306),i.e(105),i.e(395),i.e(106)]).then(i.bind(i,89897)),test:()=>Promise.all([i.e(602),i.e(306),i.e(287),i.e(105),i.e(2),i.e(572),i.e(395),i.e(72),i.e(849),i.e(251),i.e(634),i.e(982),i.e(793),i.e(236),i.e(309),i.e(980),i.e(43)]).then(i.bind(i,78946)),comingSoon:()=>i.e(76).then(i.bind(i,77217)),sync:()=>Promise.all([i.e(306),i.e(572),i.e(192),i.e(31)]).then(i.bind(i,17486)),game:()=>Promise.all([i.e(602),i.e(306),i.e(287),i.e(105),i.e(2),i.e(572),i.e(395),i.e(72),i.e(728),i.e(982),i.e(793),i.e(959),i.e(643),i.e(980),i.e(821),i.e(757)]).then(i.bind(i,44050)),playground:()=>Promise.all([i.e(602),i.e(306),i.e(287),i.e(105),i.e(2),i.e(572),i.e(395),i.e(72),i.e(849),i.e(251),i.e(728),i.e(144),i.e(847),i.e(982),i.e(793),i.e(643),i.e(236),i.e(309),i.e(222),i.e(895),i.e(271)]).then(i.bind(i,7724)),previewer:()=>Promise.all([i.e(602),i.e(306),i.e(287),i.e(847),i.e(114),i.e(982),i.e(959),i.e(895),i.e(189)]).then(i.bind(i,43385))}
window.onerror=function(n,e,t,r,o){j(n,o,e,t,r)}
const I=g.Z.mode||"app"
Promise.all([i.e(2),i.e(156),i.e(625)]).then(i.bind(i,89769)).then(n=>{P[I]?(x(`Loading ${I} bundle`),P[I]().then(n=>(x("Initializing"),n.main({setStatus:x}))).then(()=>{y.style.display="none"}).catch(n=>{console.error(n),j(`An error occurred while initializing "${I}"`,n)})):j(`Invalid mode: ${I}`)}).catch(n=>{j("Failed to load environment bundle. Please refresh the page to try again. If that does not work, try holding down the Shift key while clicking Refresh. If that still does not work, please report this issue to the developers at https://github.com/bemusic/bemuse/issues",n),console.error("An error occurred while loading the component",n)})})()})()

//# sourceMappingURL=boot.js.map