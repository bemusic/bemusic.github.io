!function(){var n,t,r,o={85773:function(n,e,t){"use strict"
var r=t(89206),o=t.n(r),i=t(98791),a=t.n(i),s=t(44664),c=t.n(s),u=new URL(t(87357),t.b),l=a()(o()),d=c()(u)
l.push([n.id,'@charset "UTF-8";\n.Boot {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.Bootのcontent {\n  animation: 0.5s boot--in cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.Bootのdj {\n  width: 64px;\n  height: 64px;\n  background: url('+d+") center no-repeat;\n  background-size: contain;\n  animation: 2s boot--dj--spin linear infinite;\n  margin: 0 auto 0.5em;\n}\n.Bootのtext {\n  text-align: center;\n  font-size: 16px;\n  color: #8b8685;\n  animation: 1s boot--text--pulse linear infinite;\n}\n\n@keyframes boot--dj--spin {\n  from {\n    transform: perspective(480px) rotateY(0deg);\n  }\n  to {\n    transform: perspective(480px) rotateY(-360deg);\n  }\n}\n@keyframes boot--text--pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  0% {\n    opacity: 1;\n  }\n}\n@keyframes boot--in {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}","",{version:3,sources:["webpack://./boot/ui/Boot.scss"],names:[],mappings:"AAAA,gBAAgB;AAEhB;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAAF;AACE;EACE,4DAAA;AACJ;AACE;EACE,WAAA;EACA,YAAA;EACA,oEAAA;EACA,wBAAA;EACA,4CAAA;EACA,oBAAA;AACJ;AACE;EACE,kBAAA;EACA,eAAA;EACA,cAAA;EACA,+CAAA;AACJ;;AAGA;EACE;IACE,2CAAA;EAAF;EAEA;IACE,8CAAA;EAAF;AACF;AAGA;EACE;IACE,UAAA;EADF;EAGA;IACE,YAAA;EADF;EAGA;IACE,UAAA;EADF;AACF;AAIA;EACE;IACE,mBAAA;EAFF;EAIA;IACE,mBAAA;EAFF;AACF",sourcesContent:["@import '~bemuse/ui/common';\n\n.Boot {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &のcontent {\n    animation: 0.5s boot--in cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  &のdj {\n    width: 64px;\n    height: 64px;\n    background: url(~bemuse/ui/images/loading/dj.png) center no-repeat;\n    background-size: contain;\n    animation: 2s boot--dj--spin linear infinite;\n    margin: 0 auto 0.5em;\n  }\n  &のtext {\n    text-align: center;\n    font-size: 16px;\n    color: #8b8685;\n    animation: 1s boot--text--pulse linear infinite;\n  }\n}\n\n@keyframes boot--dj--spin {\n  from {\n    transform: perspective(480px) rotateY(0deg);\n  }\n  to {\n    transform: perspective(480px) rotateY(-360deg);\n  }\n}\n\n@keyframes boot--text--pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  0% {\n    opacity: 1;\n  }\n}\n\n@keyframes boot--in {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n"],sourceRoot:""}]),e.Z=l},92862:function(n,e,t){"use strict"
var r=t(89206),o=t.n(r),i=t(98791),a=t.n(i)()(o())
a.push([n.id,'@charset "UTF-8";\n.ErrorDialog {\n  background: #533;\n  color: #edd;\n  border: 2px solid #b77;\n  position: fixed;\n  z-index: 99999;\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  max-width: 640px;\n}\n.ErrorDialog h1,\n.ErrorDialog p {\n  margin: 0;\n  font-size: 1em;\n  line-height: 1.3;\n}\n.ErrorDialog h1 {\n  color: #fcc;\n}\n.ErrorDialog pre {\n  margin: 1em 0 0;\n  font-family: Menlo, Consolas, monospace;\n  font-size: 0.8em;\n  line-height: 1.3;\n  opacity: 0.7;\n}\n.ErrorDialogのwhere {\n  font-size: 0.8em;\n  color: #faa;\n}\n.ErrorDialogのclose {\n  position: absolute;\n  top: 1ex;\n  right: 1ex;\n  background: #663333;\n  width: 1.3em;\n  height: 1.3em;\n  line-height: 1.3em;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #955;\n}\n.ErrorDialogのclose:hover {\n  background: #844;\n  border-color: #d77;\n}',"",{version:3,sources:["webpack://./boot/ui/ErrorDialog.scss"],names:[],mappings:"AAAA,gBAAgB;AAAhB;EACE,gBAAA;EACA,WAAA;EAEA,sBAAA;EACA,eAAA;EAEA,cAAA;EAEA,SAAA;EACA,UAAA;EACA,aAAA;EACA,gBAAA;AADF;AAGE;;EAEE,SAAA;EACA,cAAA;EACA,gBAAA;AADJ;AAIE;EACE,WAAA;AAFJ;AAKE;EACE,eAAA;EACA,uCAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;AAHJ;AAME;EACE,gBAAA;EACA,WAAA;AAJJ;AAOE;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,sBAAA;AALJ;AAMI;EACE,gBAAA;EACA,kBAAA;AAJN",sourcesContent:[".ErrorDialog {\n  background: #533;\n  color: #edd;\n\n  border: 2px solid #b77;\n  position: fixed;\n\n  z-index: 99999;\n\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  max-width: 640px;\n\n  h1,\n  p {\n    margin: 0;\n    font-size: 1em;\n    line-height: 1.3;\n  }\n\n  h1 {\n    color: #fcc;\n  }\n\n  pre {\n    margin: 1em 0 0;\n    font-family: Menlo, Consolas, monospace;\n    font-size: 0.8em;\n    line-height: 1.3;\n    opacity: 0.7;\n  }\n\n  &のwhere {\n    font-size: 0.8em;\n    color: #faa;\n  }\n\n  &のclose {\n    position: absolute;\n    top: 1ex;\n    right: 1ex;\n    background: lighten(#633, 0.1);\n    width: 1.3em;\n    height: 1.3em;\n    line-height: 1.3em;\n    text-align: center;\n    cursor: pointer;\n    border: 1px solid #955;\n    &:hover {\n      background: #844;\n      border-color: #d77;\n    }\n  }\n}\n"],sourceRoot:""}]),e.Z=a},71614:function(n,e,t){"use strict"
var r=t(89206),o=t.n(r),i=t(98791),a=t.n(i)()(o())
a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300italic);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:500,400);"]),a.push([n.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),e.Z=a},51980:function(n,e,t){"use strict"
var r=t(89206),o=t.n(r),i=t(98791),a=t.n(i)()(o())
a.push([n.id,'@media (min-width: 1279px) and (max-width: 1281px) and (min-height: 719px), (min-height: 719px) and (max-height: 721px) and (min-width: 1279px) {\n  canvas {\n    /* https://code.google.com/p/chromium/issues/detail?id=424025 */\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: pixelated;\n    -ms-interpolation-mode: nearest-neighbor;\n  }\n}\nbody {\n  font-family: "Source Sans Pro", "Segoe UI", "Helvetica Neue", sans-serif;\n}\n\na {\n  color: #039;\n}\n\n@media (max-width: 1154px) {\n  :root {\n    font-size: 15px;\n  }\n}\n@media (min-width: 1154px) {\n  :root {\n    font-size: 1.3vw;\n  }\n}\n:root body {\n  font-size: 1rem;\n}',"",{version:3,sources:["webpack://./ui/global.scss","webpack://./ui/common.scss"],names:[],mappings:"AAEA;EAEE;IACE,+DAAA;IACA,0CAAA;IACA,iCAAA;IACA,+BAAA;IACA,0BAAA;IACA,wCAAA;EAFF;AACF;AAKA;EACE,wECXQ;ADQV;;AAMA;EACE,WCdW;ADWb;;AAOE;EADF;IAEI,eAAA;EAHF;AACF;AAIE;EAJF;IAKI,gBAAA;EADF;AACF;AAEE;EACE,eAAA;AAAJ",sourcesContent:["@import './common.scss';\n\n@media (min-width: 1279px) and (max-width: 1281px) and (min-height: 719px),\n  (min-height: 719px) and (max-height: 721px) and (min-width: 1279px) {\n  canvas {\n    /* https://code.google.com/p/chromium/issues/detail?id=424025 */\n    image-rendering: -webkit-optimize-contrast;\n    image-rendering: -moz-crisp-edges;\n    image-rendering: -o-crisp-edges;\n    image-rendering: pixelated;\n    -ms-interpolation-mode: nearest-neighbor;\n  }\n}\n\nbody {\n  font-family: $ui-font;\n}\n\na {\n  color: $link-color;\n}\n\n:root {\n  @media (max-width: 1154px) {\n    font-size: 15px;\n  }\n  @media (min-width: 1154px) {\n    font-size: 1.3vw;\n  }\n  body {\n    font-size: 1rem;\n  }\n}\n","// The common library for user interface.\n// This file must not emit any CSS code! It can only contain variable,\n// mixin, or silent class declarations.\n\n$ui-font: 'Source Sans Pro', 'Segoe UI', 'Helvetica Neue', sans-serif;\n$link-color: #039;\n\n@mixin full-screen {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n@mixin full-screen-fixed {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n@mixin centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@mixin scrolling-y {\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n@mixin scrolling-x {\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n@mixin center-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin scene-background($url) {\n  background: $url center no-repeat;\n  background-size: cover;\n}\n\n@mixin main-bg {\n  @include scene-background(url(~bemuse/ui/images/bg/a.jpg));\n}\n\n@mixin soft-shadow {\n  box-shadow: 0 0.1vh 3vh rgba(#000, 0.1);\n}\n\n@mixin button {\n  font: inherit;\n  background: #252423 linear-gradient(to bottom, #454443, #151413);\n  border: 1px solid #555453;\n  padding: 0.5ex 1.3ex;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(#000, 0.5);\n  &:hover {\n    border-color: #656463;\n  }\n  &:focus {\n    border-color: #8b8685;\n    outline: 0;\n  }\n  &:active {\n    background: #252423 linear-gradient(to top, #353433, #151413);\n    border-color: #454443;\n  }\n}\n\n@mixin input {\n  font: inherit;\n  background: #252423 linear-gradient(to bottom, #151413, #292827);\n  border: 1px solid #555453;\n  padding: 0.5ex 1.3ex;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(#000, 0.5);\n  &:hover {\n    border-color: #656463;\n  }\n  &:focus {\n    border-color: #8b8685;\n    outline: 0;\n  }\n  &:active {\n    border-color: #454443;\n  }\n  &::selection {\n    background: #8b8685;\n    color: #8e8;\n  }\n}\n\n@mixin input-button-zindex($nominal) {\n  position: relative;\n  z-index: $nominal;\n  &:hover {\n    z-index: 30;\n  }\n  &:focus {\n    z-index: 40;\n  }\n  &:active {\n    z-index: 10;\n  }\n}\n"],sourceRoot:""}]),e.Z=a},98791:function(n){"use strict"
n.exports=function(n){var e=[]
return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5]
return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]])
var a={}
if(r)for(var s=0;s<this.length;s++){var c=this[s][0]
null!=c&&(a[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u])
r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},44664:function(n){"use strict"
n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},89206:function(n){"use strict"
n.exports=function(n){var e=n[1],t=n[3]
if(!t)return e
if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */")
return[e].concat([i]).join("\n")}return[e].join("\n")}},2193:function(n,e,t){var r=t(15866)
n.exports=function(n){var e=""
return e=e+'<div class="Bootのcontent"><div class="Bootのdj"></div><div class="Bootのtext"><div><strong>'+r.escape(null=="Bemuse "?"":"Bemuse ")+'<span class="js-version"></span></strong></div><div class="js-status">Loading page</div></div></div>'}},37499:function(n,t,r){var o=r(15866)
n.exports=function(n){var t,r="",i=n||{}
return function(n,e,i,a,s){r=r+"<h1>An error has occured!</h1><p>"+o.escape(null==(t=a)?"":t)+"</p>",s&&(r=r+'<p class="ErrorDialogのwhere">'+o.escape(null==(t=s+":"+i+":"+n)?"":t)+"</p>"),r=r+"<pre wrap>"+o.escape(null==(t=e&&e.stack||"No stack trace available")?"":t)+'</pre><div class="ErrorDialogのclose">&times;</div>'}.call(this,"col"in i?i.col:"undefined"!=typeof col?col:void 0,"e"in i?i.e:"undefined"!=typeof e?e:void 0,"line"in i?i.line:"undefined"!=typeof line?line:void 0,"message"in i?i.message:"undefined"!=typeof message?message:void 0,"url"in i?i.url:"undefined"!=typeof url?url:void 0),r}},15866:function(n,e,t){"use strict"
var r=Object.prototype.hasOwnProperty
function o(n,e){return Array.isArray(n)?function(n,e){for(var t,r="",i="",a=Array.isArray(e),s=0;s<n.length;s++)(t=o(n[s]))&&(a&&e[s]&&(t=c(t)),r=r+i+t,i=" ")
return r}(n,e):n&&"object"==typeof n?function(n){var e="",t=""
for(var o in n)o&&n[o]&&r.call(n,o)&&(e=e+t+o,t=" ")
return e}(n):n||""}function i(n){if(!n)return""
if("object"==typeof n){var e=""
for(var t in n)r.call(n,t)&&(e=e+t+":"+n[t]+";")
return e}return n+""}function a(n,e,t,r){if(!1===e||null==e||!e&&("class"===n||"style"===n))return""
if(!0===e)return" "+(r?n:n+'="'+n+'"')
var o=typeof e
return"object"!==o&&"function"!==o||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),t||-1===e.indexOf('"'))?(t&&(e=c(e))," "+n+'="'+e+'"'):" "+n+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function n(e,t){if(1===arguments.length){for(var r=e[0],o=1;o<e.length;o++)r=n(r,e[o])
return r}for(var a in t)if("class"===a){var s=e[a]||[]
e[a]=(Array.isArray(s)?s:[s]).concat(t[a]||[])}else if("style"===a){s=(s=i(e[a]))&&";"!==s[s.length-1]?s+";":s
var c=i(t[a])
c=c&&";"!==c[c.length-1]?c+";":c,e[a]=s+c}else e[a]=t[a]
return e},e.classes=o,e.style=i,e.attr=a,e.attrs=function(n,e){var t=""
for(var s in n)if(r.call(n,s)){var c=n[s]
if("class"===s){t=a(s,c=o(c),!1,e)+t
continue}"style"===s&&(c=i(c)),t+=a(s,c,!1,e)}return t}
var s=/["&<>]/
function c(n){var e=""+n,t=s.exec(e)
if(!t)return n
var r,o,i,a=""
for(r=t.index,o=0;r<e.length;r++){switch(e.charCodeAt(r)){case 34:i="&quot;"
break
case 38:i="&amp;"
break
case 60:i="&lt;"
break
case 62:i="&gt;"
break
default:continue}o!==r&&(a+=e.substring(o,r)),o=r+1,a+=i}return o!==r?a+e.substring(o,r):a}e.escape=c,e.rethrow=function n(e,r,o,i){if(!(e instanceof Error))throw e
if(!("undefined"==typeof window&&r||i))throw e.message+=" on line "+o,e
try{i=i||t(37887).readFileSync(r,"utf8")}catch(t){n(e,null,o)}var a=3,s=i.split("\n"),c=Math.max(o-a,0),u=Math.min(s.length,o+a)
a=s.slice(c,u).map((function(n,e){var t=e+c+1
return(t==o?"  > ":"    ")+t+"| "+n})).join("\n")
throw e.path=r,e.message=(r||"Pug")+":"+o+"\n"+a+"\n\n"+e.message,e}},87672:function(n){"use strict"
var e=[]
function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r
break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l)
i[u]=l+1
var f=t(d),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]}
if(-1!==f)e[f].references++,e[f].updater(A)
else{var p=o(A,r)
r.byIndex=s,e.splice(s,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e)
t.update(n)
return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return
t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{})
return function(n){n=n||[]
for(var a=0;a<i.length;a++){var s=t(i[a])
e[s].references--}for(var c=r(n,o),u=0;u<i.length;u++){var l=t(i[u])
0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},24324:function(n){"use strict"
var e={}
n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n)
if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n)
if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
r.appendChild(t)}},15669:function(n){"use strict"
n.exports=function(n){var e=document.createElement("style")
return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},26419:function(n,e,t){"use strict"
n.exports=function(n){var e=t.nc
e&&n.setAttribute("nonce",e)}},95541:function(n){"use strict"
n.exports=function(n){var e=n.insertStyleElement(n)
return{update:function(t){!function(n,e,t){var r=""
t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"))
var o=void 0!==t.layer
o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}")
var i=t.sourceMap
i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1
n.parentNode.removeChild(n)}(e)}}}},95076:function(n){"use strict"
n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(n))}}},47258:function(n,e){"use strict"
e.Z=Object.fromEntries(new URLSearchParams(location.search).entries())},19199:function(n,e,t){"use strict"
var r=t(8485),o=t.n(r)
e.Z=o()},8485:function(n){n.exports="54.0.1"},87357:function(n,e,t){"use strict"
n.exports=t.p+"build/assets/dj-fb89bc0fb54b70cd3f50.png"},37887:function(){},99543:function(n,e,t){"use strict"
t.r(e),t.d(e,{Workbox:function(){return p},WorkboxEvent:function(){return u},messageSW:function(){return r}})
try{self["workbox:window:6.5.3"]&&_()}catch(r){}function r(n,e){return new Promise((function(t){var r=new MessageChannel
r.port1.onmessage=function(n){t(n.data)},n.postMessage(e,[r.port2])}))}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e){(null==e||e>n.length)&&(e=n.length)
for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t]
return r}function a(n,e){var t
if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return i(n,e)
var t=Object.prototype.toString.call(n).slice(8,-1)
return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t)
var r=0
return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=n[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.3"]&&_()}catch(r){}var s=function(){var n=this
this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}
function c(n,e){var t=location.href
return new URL(n,t).href===new URL(e,t).href}var u=function(n,e){this.type=n,Object.assign(this,e)}
function l(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function d(){}var f={type:"SKIP_WAITING"}
function A(n,e){if(!e)return n&&n.then?n.then(d):Promise.resolve()}var p=function(n){var e,t
function i(e,t){var r,o
return void 0===t&&(t={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new s,r.en=new s,r.on=new s,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,e=n.installing
r.tn>0||!c(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,n.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(n){var e=r.fn,t=n.target,o=t.state,i=t===r.vn,a={sw:t,isExternal:i,originalEvent:n}
!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new u(o,a)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===t&&r.dispatchEvent(new u("waiting",a))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(t))},r.dn=function(n){var e=r.hn,t=e!==navigator.serviceWorker.controller
r.dispatchEvent(new u("controlling",{isExternal:t,originalEvent:n,sw:e,isUpdate:r.mn})),t||r.on.resolve(e)},r.gn=(o=function(n){var e=n.data,t=n.ports,o=n.source
return l(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new u("message",{data:e,originalEvent:n,ports:t,sw:o}))}))},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e]
try{return Promise.resolve(o.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=e,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}t=n,(e=i).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t
var a,d,p=i.prototype
return p.register=function(n){var e=(void 0===n?{}:n).immediate,t=void 0!==e&&e
try{var r=this
return function(n,e){var t=n()
return t&&t.then?t.then(e):e()}((function(){if(!t&&"complete"!==document.readyState)return A(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),l(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}))
var e=r.fn.waiting
return e&&c(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new u("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},p.update=function(){try{return this.fn?A(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},p.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},p.messageSW=function(n){try{return l(this.getSW(),(function(e){return r(e,n)}))}catch(n){return Promise.reject(n)}},p.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,f)},p.pn=function(){var n=navigator.serviceWorker.controller
return n&&c(n.scriptURL,this.sn.toString())?n:void 0},p.bn=function(){try{var n=this
return function(n,e){try{var t=n()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}((function(){return l(navigator.serviceWorker.register(n.sn,n.nn),(function(e){return n.un=performance.now(),e}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},a=i,(d=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&o(a.prototype,d),i}(function(){function n(){this.Pn=new Map}var e=n.prototype
return e.addEventListener=function(n,e){this.Sn(n).add(e)},e.removeEventListener=function(n,e){this.Sn(n).delete(e)},e.dispatchEvent=function(n){n.target=this
for(var e,t=a(this.Sn(n.type));!(e=t()).done;)(0,e.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}())}},i={}
function a(n){var e=i[n]
if(void 0!==e)return e.exports
var t=i[n]={id:n,loaded:!1,exports:{}}
return o[n].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=o,a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n}
return a.d(e,{a:e}),e},t=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e
if("object"==typeof e&&e){if(4&r&&e.__esModule)return e
if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null)
a.r(o)
var i={}
n=n||[null,t({}),t([]),t(t)]
for(var s=2&r&&e;"object"==typeof s&&!~n.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(n){i[n]=function(){return e[n]}}))
return i.default=function(){return e},a.d(o,i),o},a.d=function(n,e){for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.f={},a.e=function(n){return Promise.all(Object.keys(a.f).reduce((function(e,t){return a.f[t](n,e),e}),[]))},a.u=function(n){return"build/"+({31:"sync",43:"test",45:"stbvorbis",51:"comingSoonDemo",76:"comingSoon",106:"music",143:"app",189:"previewer",236:"gameEngine",271:"playground",625:"environment",757:"game"}[n]||n)+"-"+{31:"b5f6c134d00243352ab0",43:"0f663210e0a0186afd81",45:"42d651a635662a4926d3",51:"1551995a72527791119c",76:"d38f9f54edc582d0c251",84:"f28a4595b9e59ecbcd33",102:"49deb2993153c5a70295",106:"095cdd0200ff780d8be3",143:"3cf0ea6ca43f0cfbf1a4",156:"1037177816817aa6e63c",189:"b28215a5974b012110c7",220:"89f5de2793acaa995887",236:"1be8ac14be1a50b7388a",269:"301969deb71b82508a47",271:"568fdbb59c278559113c",287:"3f6ca28523b62db45864",299:"754577fff0051da2452e",312:"3166792ec0600ac92f30",369:"bc23dc308c5acd36c81f",391:"0b6b7bd8675cb1e256a4",444:"987d2d38d511226786fd",452:"3ea180987eacff97f24e",481:"ed079ce8578cfc8d61d8",485:"c052b5475e4a67e4ea17",503:"1d5a7ccf621c9181b3a0",581:"13dbfd07aa875e0c9e1f",602:"10e114198cdc60215e5b",606:"fb1d25076f564626b6fc",625:"75ee03dd987a9457448d",661:"4409140216606eeec11c",708:"99dadce8b67657ffe758",740:"da3df0c7b09c34d25a5e",757:"9c309e3cd6315f098289",817:"0459ff4d22a61ed12605",832:"15345e2656dd47d7f3b6",848:"07fdd3a03001cd37d0b0",849:"0feff7619a686e1bbbbc",949:"bdee35b7af71dc16977c",959:"de0c91874fbc59fe4e37",982:"2be01ceb04033d0a36f8"}[n]+".js"},a.g=function(){if("object"==typeof globalThis)return globalThis
try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r={},a.l=function(n,e,t,o){if(r[n])r[n].push(e)
else{var i,s
if(void 0!==t)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u]
if(l.getAttribute("src")==n){i=l
break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=n),r[n]=[e]
var d=function(e,t){i.onerror=i.onload=null,clearTimeout(f)
var o=r[n]
if(delete r[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(n){return n(t)})),e)return e(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4)
i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},a.p="/",function(){a.b=document.baseURI||self.location.href
var n={117:0}
a.f.j=function(e,t){var r=a.o(n,e)?n[e]:void 0
if(0!==r)if(r)t.push(r[2])
else{var o=new Promise((function(t,o){r=n[e]=[t,o]}))
t.push(r[2]=o)
var i=a.p+a.u(e),s=new Error
a.l(i,(function(t){if(a.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src
s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}}),"chunk-"+e,e)}}
var e=function(e,t){var r,o,i=t[0],s=t[1],c=t[2],u=0
if(i.some((function(e){return 0!==n[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r])
if(c)c(a)}for(e&&e(t);u<i.length;u++)o=i[u],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0},t=this.webpackChunk=this.webpackChunk||[]
t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}(),a.nc=void 0,function(){"use strict"
const n=a(99543)
if("serviceWorker"in navigator){new n.Workbox("/service-worker.js",{scope:void 0}).register()}}(),function(){"use strict"
var n=a(87672),e=a.n(n),t=a(95541),r=a.n(t),o=a(24324),i=a.n(o),s=a(26419),c=a.n(s),u=a(15669),l=a.n(u),d=a(95076),f=a.n(d),A=a(71614),p={}
p.styleTagTransform=f(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l()
e()(A.Z,p),A.Z&&A.Z.locals&&A.Z.locals
var m=a(51980),h={}
h.styleTagTransform=f(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l()
e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals
var g=a(47258),v=a(85773),b={}
b.styleTagTransform=f(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l()
e()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals
var E=a(2193),y=a.n(E),x=a(19199)
const w=document.createElement("div")
function C(n){w.querySelector(".js-status").textContent=n}w.id="boot",w.className="Boot",w.innerHTML=y()(),w.querySelector(".js-version").appendChild(document.createTextNode(`v${x.Z}`)),document.body.appendChild(w)
var k=a(92862),S={}
S.styleTagTransform=f(),S.setAttributes=c(),S.insert=i().bind(null,"head"),S.domAPI=r(),S.insertStyleElement=l()
e()(k.Z,S),k.Z&&k.Z.locals&&k.Z.locals
var j=a(37499),P=a.n(j)
function I(n,e,t,r,o){const i=document.createElement("div")
i.className="ErrorDialog",i.innerHTML=P()({message:n,url:t,line:r,col:o,e:e}),document.body.appendChild(i)
const a=i.querySelector(".ErrorDialogのclose")
a&&a.addEventListener("click",(function(){i.parentNode.removeChild(i)}),!1)}var B={app:()=>Promise.all([a.e(602),a.e(606),a.e(220),a.e(287),a.e(452),a.e(299),a.e(102),a.e(391),a.e(817),a.e(485),a.e(481),a.e(982),a.e(269),a.e(959),a.e(369),a.e(444),a.e(949),a.e(708),a.e(581),a.e(143)]).then(a.bind(a,1624)),music:()=>Promise.all([a.e(602),a.e(606),a.e(452),a.e(299),a.e(106)]).then(a.bind(a,20485)),test:()=>Promise.all([a.e(602),a.e(606),a.e(220),a.e(287),a.e(452),a.e(299),a.e(102),a.e(849),a.e(391),a.e(312),a.e(982),a.e(269),a.e(236),a.e(444),a.e(949),a.e(43)]).then(a.bind(a,13449)),comingSoon:()=>a.e(76).then(a.bind(a,78322)),sync:()=>Promise.all([a.e(606),a.e(220),a.e(84),a.e(31)]).then(a.bind(a,31055)),game:()=>Promise.all([a.e(602),a.e(606),a.e(220),a.e(287),a.e(452),a.e(299),a.e(102),a.e(817),a.e(982),a.e(269),a.e(959),a.e(369),a.e(949),a.e(581),a.e(757)]).then(a.bind(a,78174)),playground:()=>Promise.all([a.e(602),a.e(606),a.e(220),a.e(287),a.e(452),a.e(299),a.e(102),a.e(849),a.e(391),a.e(817),a.e(485),a.e(848),a.e(982),a.e(269),a.e(369),a.e(236),a.e(444),a.e(708),a.e(503),a.e(271)]).then(a.bind(a,62492)),previewer:()=>Promise.all([a.e(602),a.e(606),a.e(287),a.e(848),a.e(832),a.e(982),a.e(959),a.e(503),a.e(189)]).then(a.bind(a,51820))}
window.onerror=function(n,e,t,r,o){I(n,o,e,t,r)}
const T=g.Z.mode||"app"
Promise.all([a.e(220),a.e(156),a.e(625)]).then(a.bind(a,17665)).then((n=>{B[T]?(C(`Loading ${T} bundle`),B[T]().then((n=>(C("Initializing"),n.main({setStatus:C})))).then((()=>{w.style.display="none"})).catch((n=>{console.error(n),I(`An error occurred while initializing "${T}"`,n)}))):I(`Invalid mode: ${T}`)})).catch((n=>{I("Failed to load environment bundle. Please refresh the page to try again. If that does not work, try holding down the Shift key while clicking Refresh. If that still does not work, please report this issue to the developers at https://github.com/bemusic/bemuse/issues",n),console.error("An error occurred while loading the component",n)}))}()}()

//# sourceMappingURL=boot.js.map