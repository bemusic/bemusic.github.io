/*! For license information please see 937-c801af0b0b09a41199ea.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[937],{4749:function(e,t,r){"use strict"
const n=r(44797),o=r(52)
class i extends Error{constructor(e){if(!Array.isArray(e))throw new TypeError("Expected input to be an Array, got "+typeof e)
let t=(e=[...e].map((e=>e instanceof Error?e:null!==e&&"object"==typeof e?Object.assign(new Error(e.message),e):new Error(e)))).map((e=>"string"==typeof e.stack?o(e.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""):String(e))).join("\n")
t="\n"+n(t,4),super(t),this.name="AggregateError",Object.defineProperty(this,"_errors",{value:e})}*[Symbol.iterator](){for(const e of this._errors)yield e}}e.exports=i},30583:function(e,t){var r
!function(){"use strict"
var n={}.hasOwnProperty
function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t]
if(r){var i=typeof r
if("string"===i||"number"===i)e.push(r)
else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r)
s&&e.push(s)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString())
continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},52:function(e,t,r){"use strict"
const n=r(10416),o=/\s+at.*(?:\(|\s)(.*)\)?/,i=/^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,s=void 0===n.homedir?"":n.homedir()
e.exports=(e,t)=>(t=Object.assign({pretty:!1},t),e.replace(/\\/g,"/").split("\n").filter((e=>{const t=e.match(o)
if(null===t||!t[1])return!0
const r=t[1]
return!r.includes(".app/Contents/Resources/electron.asar")&&!r.includes(".app/Contents/Resources/default_app.asar")&&!i.test(r)})).filter((e=>""!==e.trim())).map((e=>t.pretty?e.replace(o,((e,t)=>e.replace(t,t.replace(s,"~")))):e)).join("\n"))},44797:function(e){"use strict"
e.exports=(e,t=1,r)=>{if(r={indent:" ",includeEmptyLines:!1,...r},"string"!=typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``)
if("number"!=typeof t)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``)
if("string"!=typeof r.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``)
if(0===t)return e
const n=r.includeEmptyLines?/^/gm:/^(?!\s*$)/gm
return e.replace(n,r.indent.repeat(t))}},48274:function(e){"use strict"
e.exports=function(e,t,r,n,o,i,s,l){if(!e){var a
if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var c=[r,n,o,i,s,l],u=0;(a=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw a.framesToPop=1,a}}},17287:function(e,t){function r(e){if(e&&"object"==typeof e){var t=e.which||e.keyCode||e.charCode
t&&(e=t)}if("number"==typeof e)return s[e]
var r,i=String(e)
return(r=n[i.toLowerCase()])?r:(r=o[i.toLowerCase()])||(1===i.length?i.charCodeAt(0):void 0)}r.isEventKey=function(e,t){if(e&&"object"==typeof e){var r=e.which||e.keyCode||e.charCode
if(null==r)return!1
if("string"==typeof t){var i
if(i=n[t.toLowerCase()])return i===r
if(i=o[t.toLowerCase()])return i===r}else if("number"==typeof t)return t===r
return!1}}
var n=(t=e.exports=r).code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},o=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91}
for(i=97;i<123;i++)n[String.fromCharCode(i)]=i-32
for(var i=48;i<58;i++)n[i-48]=i
for(i=1;i<13;i++)n["f"+i]=i+111
for(i=0;i<10;i++)n["numpad "+i]=i+96
var s=t.names=t.title={}
for(i in n)s[n[i]]=i
for(var l in o)n[l]=o[l]},1588:function(e,t,r){"use strict"
r.d(t,{X:function(){return o}})
class n{constructor(e,t,r,n){this._name=e,this._size=t,this._path=r,this._archiveRef=n}get name(){return this._name}get size(){return this._size}extract(){return this._archiveRef.extractSingleFile(this._path)}}class o{static init(e={}){return o._options={workerUrl:"../dist/worker-bundle.js",...e},o._options}static open(e,t=null){t=t||o._options||o.init()&&console.warn("Automatically initializing using options: ",o._options)
return new o(e,t).open()}constructor(e,t){this._worker=new Worker(t.workerUrl),this._worker.addEventListener("message",this._workerMsg.bind(this)),this._callbacks=[],this._content={},this._processed=0,this._file=e}async open(){return await this._postMessage({type:"HELLO"},((e,t,r)=>{"READY"===r.type&&e()})),await this._postMessage({type:"OPEN",file:this._file},((e,t,r)=>{"OPENED"===r.type&&e(this)}))}hasEncryptedData(){return this._postMessage({type:"CHECK_ENCRYPTION"},((e,t,r)=>{"ENCRYPTION_STATUS"===r.type&&e(r.status)}))}usePassword(e){return this._postMessage({type:"SET_PASSPHRASE",passphrase:e},((e,t,r)=>{"PASSPHRASE_STATUS"===r.type&&e(r.status)}))}getFilesObject(){return this._processed>0?Promise.resolve().then((()=>this._content)):this._postMessage({type:"LIST_FILES"},((e,t,r)=>{if("ENTRY"===r.type){const e=r.entry,[t,o]=this._getProp(this._content,e.path)
return"FILE"===e.type&&(t[o]=new n(e.fileName,e.size,e.path,this)),!0}"END"===r.type&&(this._processed=1,e(this._cloneContent(this._content)))}))}getFilesArray(){return this.getFilesObject().then((e=>this._objectToArray(e)))}extractSingleFile(e){return this._postMessage({type:"EXTRACT_SINGLE_FILE",target:e},((e,t,r)=>{if("FILE"===r.type){e(new File([r.entry.fileData],r.entry.fileName,{type:"application/octet-stream"}))}}))}extractFiles(e){return this._processed>1?Promise.resolve().then((()=>this._content)):this._postMessage({type:"EXTRACT_FILES"},((t,r,n)=>{if("ENTRY"===n.type){const[t,r]=this._getProp(this._content,n.entry.path)
return"FILE"===n.entry.type&&(t[r]=new File([n.entry.fileData],n.entry.fileName,{type:"application/octet-stream"}),void 0!==e&&setTimeout(e.bind(null,{file:t[r],path:n.entry.path}))),!0}"END"===n.type&&(this._processed=2,this._worker.terminate(),t(this._cloneContent(this._content)))}))}_cloneContent(e){if(e instanceof File||e instanceof n||null===e)return e
const t={}
for(const r of Object.keys(e))t[r]=this._cloneContent(e[r])
return t}_objectToArray(e,t=""){const r=[]
for(const o of Object.keys(e))e[o]instanceof File||e[o]instanceof n||null===e[o]?r.push({file:e[o]||o,path:t}):r.push(...this._objectToArray(e[o],`${t}${o}/`))
return r}_getProp(e,t){const r=t.split("/")
""===r[r.length-1]&&r.pop()
let n=e,o=null
for(const e of r)n[e]=n[e]||{},o=n,n=n[e]
return[o,r[r.length-1]]}_postMessage(e,t){return this._worker.postMessage(e),new Promise(((e,r)=>{this._callbacks.push(this._msgHandler.bind(this,t,e,r))}))}_msgHandler(e,t,r,n){if("BUSY"===n.type)r("worker is busy")
else{if("ERROR"!==n.type)return e(t,r,n)
r(n.error)}}_workerMsg({data:e}){(0,this._callbacks[this._callbacks.length-1])(e)||this._callbacks.pop()}}},45780:function(e,t,r){"use strict"
const n=r(4749)
e.exports=async(e,t,{concurrency:r=1/0,stopOnError:o=!0}={})=>new Promise(((i,s)=>{if("function"!=typeof t)throw new TypeError("Mapper function is required")
if(!Number.isSafeInteger(r)&&r!==1/0||!(r>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${r}\` (${typeof r})`)
const l=[],a=[],c=e[Symbol.iterator]()
let u=!1,f=!1,h=0,p=0
const d=()=>{if(u)return
const e=c.next(),r=p
if(p++,e.done)return f=!0,void(0===h&&(o||0===a.length?i(l):s(new n(a))))
h++,(async()=>{try{const n=await e.value
l[r]=await t(n,r),h--,d()}catch(e){o?(u=!0,s(e)):(a.push(e),h--,d())}})()}
for(let e=0;e<r&&(d(),!f);e++);}))},72103:function(e,t,r){"use strict"
var n=r(11805)
function o(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var r,n="",o=0,i=-1,s=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l)
else{if(47===r)break
r=47}if(47===r){if(i===l-1||1===s);else if(i!==l-1&&2===s){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var a=n.lastIndexOf("/")
if(a!==n.length-1){-1===a?(n="",o=0):o=(n=n.slice(0,a)).length-1-n.lastIndexOf("/"),i=l,s=0
continue}}else if(2===n.length||1===n.length){n="",o=0,i=l,s=0
continue}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),o=l-i-1
i=l,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var s={resolve:function(){for(var e,t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var l
s>=0?l=arguments[s]:(void 0===e&&(e=n.cwd()),l=e),o(l),0!==l.length&&(t=l+"/"+t,r=47===l.charCodeAt(0))}return t=i(t,!r),r?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(o(e),0===e.length)return"."
var t=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1)
return 0!==(e=i(e,!t)).length||t||(e="."),e.length>0&&r&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return o(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return"."
for(var e,t=0;t<arguments.length;++t){var r=arguments[t]
o(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":s.normalize(e)},relative:function(e,t){if(o(e),o(t),e===t)return""
if((e=s.resolve(e))===(t=s.resolve(t)))return""
for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var n=e.length,i=n-r,l=1;l<t.length&&47===t.charCodeAt(l);++l);for(var a=t.length-l,c=i<a?i:a,u=-1,f=0;f<=c;++f){if(f===c){if(a>c){if(47===t.charCodeAt(l+f))return t.slice(l+f+1)
if(0===f)return t.slice(l+f)}else i>c&&(47===e.charCodeAt(r+f)?u=f:0===f&&(u=0))
break}var h=e.charCodeAt(r+f)
if(h!==t.charCodeAt(l+f))break
47===h&&(u=f)}var p=""
for(f=r+u+1;f<=n;++f)f!==n&&47!==e.charCodeAt(f)||(0===p.length?p+="..":p+="/..")
return p.length>0?p+t.slice(l+u):(l+=u,47===t.charCodeAt(l)&&++l,t.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(o(e),0===e.length)return"."
for(var t=e.charCodeAt(0),r=47===t,n=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!i){n=s
break}}else i=!1
return-1===n?r?"/":".":r&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string')
o(e)
var r,n=0,i=-1,s=!0
if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return""
var l=t.length-1,a=-1
for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r)
if(47===c){if(!s){n=r+1
break}}else-1===a&&(s=!1,a=r+1),l>=0&&(c===t.charCodeAt(l)?-1==--l&&(i=r):(l=-1,i=a))}return n===i?i=a:-1===i&&(i=e.length),e.slice(n,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!s){n=r+1
break}}else-1===i&&(s=!1,i=r+1)
return-1===i?"":e.slice(n,i)},extname:function(e){o(e)
for(var t=-1,r=0,n=-1,i=!0,s=0,l=e.length-1;l>=0;--l){var a=e.charCodeAt(l)
if(47!==a)-1===n&&(i=!1,n=l+1),46===a?-1===t?t=l:1!==s&&(s=1):-1!==t&&(s=-1)
else if(!i){r=l+1
break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===r+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e)
return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"")
return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){o(e)
var t={root:"",dir:"",base:"",ext:"",name:""}
if(0===e.length)return t
var r,n=e.charCodeAt(0),i=47===n
i?(t.root="/",r=1):r=0
for(var s=-1,l=0,a=-1,c=!0,u=e.length-1,f=0;u>=r;--u)if(47!==(n=e.charCodeAt(u)))-1===a&&(c=!1,a=u+1),46===n?-1===s?s=u:1!==f&&(f=1):-1!==s&&(f=-1)
else if(!c){l=u+1
break}return-1===s||-1===a||0===f||1===f&&s===a-1&&s===l+1?-1!==a&&(t.base=t.name=0===l&&i?e.slice(1,a):e.slice(l,a)):(0===l&&i?(t.name=e.slice(1,s),t.base=e.slice(1,a)):(t.name=e.slice(l,s),t.base=e.slice(l,a)),t.ext=e.slice(s,a)),l>0?t.dir=e.slice(0,l-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null}
s.posix=s,e.exports=s},62645:function(e){!function(){"use strict"
var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},r=e.exports,n="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,o=function(){for(var e,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,o=r.length,i={};n<o;n++)if((e=r[n])&&e[1]in t){for(n=0;n<e.length;n++)i[r[0][n]]=e[n]
return i}return!1}(),i={change:o.fullscreenchange,error:o.fullscreenerror},s={request:function(e){var r=o.requestFullscreen
e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[r]():e[r](n?Element.ALLOW_KEYBOARD_INPUT:{})},exit:function(){t[o.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,r){var n=i[e]
n&&t.addEventListener(n,r,!1)},off:function(e,r){var n=i[e]
n&&t.removeEventListener(n,r,!1)},raw:o}
o?(Object.defineProperties(s,{isFullscreen:{get:function(){return Boolean(t[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[o.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[o.fullscreenEnabled])}}}),r?e.exports=s:window.screenfull=s):r?e.exports=!1:window.screenfull=!1}()},35741:function(e,t,r){var n=r(44975)
e.exports=function(e,t,r){var o=new WebSocket(e),i=[]
function s(){try{o.send(""+(new Date).getTime())}catch(e){}}o.onmessage=function(e){var t,o,l,a,c
"k"==e.data&&s(),e.data.indexOf(",")>=0&&(t=e.data,o=t.split(","),l=+o[0],a=+o[1],c=(new Date).getTime(),l<=c&&i.push(n.convert([l,a,a,c])),i.length>=8&&r&&r(n.offset(i)),s())},o.onclose=function(){return i.length<1?t(new Error("no offset received")):t(null,n.offset(i))}}},44975:function(e,t){t.convert=function(e){var t=e[0],r=e[1],n=e[2],o=e[3]
return{offset:(r-t+(n-o))/2,delay:o-t-(n-r)}},t.offset=function(e){(e=e.slice()).sort((function(e,t){return e.offset-t.offset})),(e=e.slice(1,e.length-1)).sort((function(e,t){return e.delay-t.delay}))
for(var t=0,r=0,n=Math.ceil(e.length/8),o=0;o<e.length&&(e[o].delay>e[0].delay&&n--,0!==n);o++)t+=e[o].offset,r+=1
return t/r}}}])

//# sourceMappingURL=937-c801af0b0b09a41199ea.js.map