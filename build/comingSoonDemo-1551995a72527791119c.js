/*! For license information please see comingSoonDemo-1551995a72527791119c.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[51],{45128:function(t){"use strict"
t.exports=function(t,e){if("string"==typeof t)return i(t)
if("number"==typeof t)return s(t,e)
return null},t.exports.format=s,t.exports.parse=i
var e=/\B(?=(\d{3})+(?!\d))/g,n=/(?:\.0*|(\.[^0]+)0+)$/,r={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},o=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i
function s(t,o){if(!Number.isFinite(t))return null
var s=Math.abs(t),i=o&&o.thousandsSeparator||"",a=o&&o.unitSeparator||"",c=o&&void 0!==o.decimalPlaces?o.decimalPlaces:2,u=Boolean(o&&o.fixedDecimals),l=o&&o.unit||""
l&&r[l.toLowerCase()]||(l=s>=r.pb?"PB":s>=r.tb?"TB":s>=r.gb?"GB":s>=r.mb?"MB":s>=r.kb?"KB":"B")
var f=(t/r[l.toLowerCase()]).toFixed(c)
return u||(f=f.replace(n,"$1")),i&&(f=f.split(".").map((function(t,n){return 0===n?t.replace(e,i):t})).join(".")),f+a+l}function i(t){if("number"==typeof t&&!isNaN(t))return t
if("string"!=typeof t)return null
var e,n=o.exec(t),s="b"
return n?(e=parseFloat(n[1]),s=n[4].toLowerCase()):(e=parseInt(t,10),s="b"),isNaN(e)?null:Math.floor(r[s]*e)}},40139:function(t,e,n){"use strict"
var r=n(89206),o=n.n(r),s=n(98791),i=n.n(s)()(o())
i.push([t.id,".jukebox--overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(139, 134, 133, 0.5);\n}\n.jukebox--inner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 2px solid #8b8685;\n  background: #252423;\n  padding: 12px;\n}\n.jukebox--sampler {\n  background: #090807;\n  padding: 9px;\n  border: 1px solid #8b8685;\n  margin-top: 10px;\n  height: 192px;\n  width: 40em;\n  overflow: auto;\n}\n.jukebox--sampler span {\n  font-size: 12px;\n  opacity: 1;\n  transition: 0.5s opacity;\n}\n.jukebox--sampler span.is-off {\n  color: #8b8685;\n  opacity: 0;\n}\n.jukebox h1 {\n  margin: 0 0 20px;\n  font: 30px Helvetica Neue, Helvetica, sans-serif;\n}\n.jukebox p {\n  margin: 10px 0 0;\n}\n.jukebox .jukebox--status {\n  color: #8b8685;\n  font-style: italic;\n  margin-bottom: 20px;\n}\n.jukebox button {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  background: #090807;\n  color: #7f3;\n  cursor: pointer;\n  border: 1px solid #8b8685;\n  padding: 8px;\n  font: bold 15px verdana, sans-serif;\n  margin-top: 18px;\n}","",{version:3,sources:["webpack://./coming-soon/demo/style.scss"],names:[],mappings:"AACE;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,oCAAA;AAAJ;AAGE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;AADJ;AAIE;EACE,mBAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;EACA,cAAA;AAFJ;AAGI;EACE,eAAA;EACA,UAAA;EACA,wBAAA;AADN;AAGI;EACE,cAAA;EACA,UAAA;AADN;AAKE;EACE,gBAAA;EACA,gDAAA;AAHJ;AAME;EACE,gBAAA;AAJJ;AAOE;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;AALJ;AAQE;EACE,cAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;EACA,YAAA;EACA,mCAAA;EACA,gBAAA;AANJ",sourcesContent:[".jukebox {\n  &--overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(#8b8685, 0.5);\n  }\n\n  &--inner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 2px solid #8b8685;\n    background: #252423;\n    padding: 12px;\n  }\n\n  &--sampler {\n    background: #090807;\n    padding: 9px;\n    border: 1px solid #8b8685;\n    margin-top: 10px;\n    height: 192px;\n    width: 40em;\n    overflow: auto;\n    span {\n      font-size: 12px;\n      opacity: 1;\n      transition: 0.5s opacity;\n    }\n    span.is-off {\n      color: #8b8685;\n      opacity: 0;\n    }\n  }\n\n  h1 {\n    margin: 0 0 20px;\n    font: 30px Helvetica Neue, Helvetica, sans-serif;\n  }\n\n  p {\n    margin: 10px 0 0;\n  }\n\n  & &--status {\n    color: #8b8685;\n    font-style: italic;\n    margin-bottom: 20px;\n  }\n\n  button {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    background: #090807;\n    color: #7f3;\n    cursor: pointer;\n    border: 1px solid #8b8685;\n    padding: 8px;\n    font: bold 15px verdana, sans-serif;\n    margin-top: 18px;\n  }\n}\n"],sourceRoot:""}]),e.Z=i},26826:function(t){"use strict"
const e=()=>{const t=new Error("Delay aborted")
return t.name="AbortError",t},n=({clearTimeout:t,setTimeout:n,willResolve:r})=>(o,{value:s,signal:i}={})=>{if(i&&i.aborted)return Promise.reject(e())
let a,c,u
const l=t||clearTimeout,f=()=>{l(a),u(e())},h=new Promise(((t,e)=>{c=()=>{i&&i.removeEventListener("abort",f),r?t(s):e(s)},u=e,a=(n||setTimeout)(c,o)}))
return i&&i.addEventListener("abort",f,{once:!0}),h.clear=()=>{l(a),a=null,c()},h},r=t=>{const e=n({...t,willResolve:!0})
return e.reject=n({...t,willResolve:!1}),e.range=(t,n,r)=>e(((t,e)=>Math.floor(Math.random()*(e-t+1)+t))(t,n),r),e},o=r()
o.createWithTimers=r,t.exports=o,t.exports.default=o},1588:function(t,e,n){"use strict"
n.d(e,{X:function(){return o}})
class r{constructor(t,e,n,r){this._name=t,this._size=e,this._path=n,this._archiveRef=r}get name(){return this._name}get size(){return this._size}extract(){return this._archiveRef.extractSingleFile(this._path)}}class o{static init(t={}){return o._options={workerUrl:"../dist/worker-bundle.js",...t},o._options}static open(t,e=null){e=e||o._options||o.init()&&console.warn("Automatically initializing using options: ",o._options)
return new o(t,e).open()}constructor(t,e){this._worker=new Worker(e.workerUrl),this._worker.addEventListener("message",this._workerMsg.bind(this)),this._callbacks=[],this._content={},this._processed=0,this._file=t}async open(){return await this._postMessage({type:"HELLO"},((t,e,n)=>{"READY"===n.type&&t()})),await this._postMessage({type:"OPEN",file:this._file},((t,e,n)=>{"OPENED"===n.type&&t(this)}))}hasEncryptedData(){return this._postMessage({type:"CHECK_ENCRYPTION"},((t,e,n)=>{"ENCRYPTION_STATUS"===n.type&&t(n.status)}))}usePassword(t){return this._postMessage({type:"SET_PASSPHRASE",passphrase:t},((t,e,n)=>{"PASSPHRASE_STATUS"===n.type&&t(n.status)}))}getFilesObject(){return this._processed>0?Promise.resolve().then((()=>this._content)):this._postMessage({type:"LIST_FILES"},((t,e,n)=>{if("ENTRY"===n.type){const t=n.entry,[e,o]=this._getProp(this._content,t.path)
return"FILE"===t.type&&(e[o]=new r(t.fileName,t.size,t.path,this)),!0}"END"===n.type&&(this._processed=1,t(this._cloneContent(this._content)))}))}getFilesArray(){return this.getFilesObject().then((t=>this._objectToArray(t)))}extractSingleFile(t){return this._postMessage({type:"EXTRACT_SINGLE_FILE",target:t},((t,e,n)=>{if("FILE"===n.type){t(new File([n.entry.fileData],n.entry.fileName,{type:"application/octet-stream"}))}}))}extractFiles(t){return this._processed>1?Promise.resolve().then((()=>this._content)):this._postMessage({type:"EXTRACT_FILES"},((e,n,r)=>{if("ENTRY"===r.type){const[e,n]=this._getProp(this._content,r.entry.path)
return"FILE"===r.entry.type&&(e[n]=new File([r.entry.fileData],r.entry.fileName,{type:"application/octet-stream"}),void 0!==t&&setTimeout(t.bind(null,{file:e[n],path:r.entry.path}))),!0}"END"===r.type&&(this._processed=2,this._worker.terminate(),e(this._cloneContent(this._content)))}))}_cloneContent(t){if(t instanceof File||t instanceof r||null===t)return t
const e={}
for(const n of Object.keys(t))e[n]=this._cloneContent(t[n])
return e}_objectToArray(t,e=""){const n=[]
for(const o of Object.keys(t))t[o]instanceof File||t[o]instanceof r||null===t[o]?n.push({file:t[o]||o,path:e}):n.push(...this._objectToArray(t[o],`${e}${o}/`))
return n}_getProp(t,e){const n=e.split("/")
""===n[n.length-1]&&n.pop()
let r=t,o=null
for(const t of n)r[t]=r[t]||{},o=r,r=r[t]
return[o,n[n.length-1]]}_postMessage(t,e){return this._worker.postMessage(t),new Promise(((t,n)=>{this._callbacks.push(this._msgHandler.bind(this,e,t,n))}))}_msgHandler(t,e,n,r){if("BUSY"===r.type)n("worker is busy")
else{if("ERROR"!==r.type)return t(e,n,r)
n(r.error)}}_workerMsg({data:t}){(0,this._callbacks[this._callbacks.length-1])(t)||this._callbacks.pop()}}},57923:function(t,e,n){n(15866)
t.exports=function(t){var e=""
return e+='<div class="jukebox"><div class="jukebox--overlay"></div><div class="jukebox--inner"><h1>BMS Jukebox</h1><p class="jukebox--status js-log">Waiting for BMS file...</p><p>Google Chrome: Drag a BMS folder into this box.</p><p>Firefox, Safari: Select all files (BMS+sounds) and drag into this box.</p><button class="js-play">Click Here to Play</button><div class="js-sampler jukebox--sampler"></div></div></div>'}},75239:function(t){"use strict"
function e(t,e,n,r){this.resolve=t,this.fn=e,this.self=n||null,this.args=r}t.exports=function(n){var r
function o(t,n){var o=[]
function s(n,s,a){if(t){t--
var c=new r((function(t){t(n.apply(s,a))}))
return c.then(i,i),c}return new r((function(t){o.push(new e(t,n,s,a))}))}function i(){if(t++,o.length){var e=o.shift()
e.resolve(s(e.fn,e.self,e.args))}}if("function"==typeof t&&"number"==typeof n){var a=n
n=t,t=a}return"function"==typeof n?function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e])
return s(n,this,t)}:function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n])
return s(t,this,e)}}if("number"==typeof arguments[0]||"number"==typeof arguments[1]){if("function"!=typeof(r=t.exports.Promise))throw new Error("You must provide a Promise polyfill for this library to work in older environments")
return o(arguments[0],arguments[1])}return r=n,o},"function"==typeof Promise&&(t.exports.Promise=Promise)},41377:function(t,e){"use strict"
e.Z=new AudioContext({latencyHint:"interactive"})},3019:function(t,e,n){"use strict"
n.r(e),n.d(e,{main:function(){return k}})
var r=n(87672),o=n.n(r),s=n(95541),i=n.n(s),a=n(24324),c=n.n(a),u=n(26419),l=n.n(u),f=n(15669),h=n.n(f),p=n(95076),d=n.n(p),A=n(40139),g={}
g.styleTagTransform=d(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h()
o()(A.Z,g),A.Z&&A.Z.locals&&A.Z.locals
var m=n(65220),b=n.n(m),y=n(26594),_=n(37126),w=n(41377),E=n(35982),v=n(57923),x=n.n(v),C=n(795).Buffer
function k(t){b()(t).text("Technical Demo!").on("click",(function e(){return function(){const t=b()(x()()).appendTo("body")
t.find(".js-play").hide(),t.on("dragover",(()=>!1)).on("drop",(e=>{e.preventDefault()
return async function(t,e){const n=new _.ZP(w.Z),r=e.find(".js-log"),o=e.find(".js-play").hide(),s=e.find(".js-sampler")
m("Loading file list")
const i=(await t.fileList).filter((t=>t.match(/\.(?:bms|bme|bml|pms)$/i)))[0]
m("Loading "+i)
const a=await t.file(i),c=await a.read(),u=C.from(new Uint8Array(c)),l=await E.Reader.readAsync(u),f=E.Compiler.compile(l).chart,h=E.Timing.fromBMSChart(f),p=E.Notes.fromBMSChart(f),d=E.SongInfo.fromBMSChart(f)
b()("<pre wrap></pre>").text(JSON.stringify(d,null,2)).appendTo(s),m("Loading samples")
const A=await y(p,f)
function g(){return new Promise((function(t){o.show(),o.on("click",(()=>{t(),o.hide()}))}))}function m(t){r.text(t)}function y(t,e){const r={},o=[]
let s=0
for(const i of t.all()){const t=i.keysound
t in r||(r[t]=null,o.push((async()=>{try{const i=await v(e.headers.get("wav"+t)),a=await n.sample(i)
r[t]=a,m("[loaded "+ ++s+"/"+o.length+" samples]")}catch(e){console.error("Unable to load "+t+": "+e)}})))}return Promise.all(o).then((()=>r))}function v(e){return"string"!=typeof e?Promise.reject(new Error("Empty name")):t.file(e).catch((()=>t.file(e.replace(/\.\w+$/,".ogg")))).catch((()=>t.file(e.replace(/\.\w+$/,".m4a")))).catch((()=>t.file(e.replace(/\.\w+$/,".flac")))).catch((()=>t.file(e.replace(/\.\w+$/,".mp3")))).catch((()=>t.file(e.replace(/\.\w+$/,".wav")))).then((t=>t.read()))}m("Click the button to play!"),await g(),function(){n.unmute()
for(const t of p.all())setTimeout((()=>{const e=A[t.keysound]
if(!e)return void console.log("warn: unknown sample "+t.keysound)
const n=b()("<span></span>").text("["+t.keysound+"] ").appendTo(s),r=e.play()
s[0].scrollTop=s[0].scrollHeight,r.onstop=function(){n.addClass("is-off")}}),1e3*h.beatToSeconds(t.beat))}()}(new y.Z(e.originalEvent),t),!1}))}(),b()(t).off("click",e),b()(t).hide(),!1}))}},36013:function(t,e,n){"use strict"
n.d(e,{E:function(){return o}})
var r=n(72416)
class o{constructor(){this.current=void 0,this.total=void 0,this._observable=new r.Z}report(t,e,n){this.current=t,this.total=e,this.extra=n,this._observable.notify()}watch(t){return t(this),this._observable.watch((()=>t(this)))}get progress(){return this.total&&void 0!==this.current&&null!==this.current?this.current/this.total:null}toString(){return void 0!==this.formatter?this.formatter(this):null!==this.progress?this.current+" / "+this.total:""}}},27815:function(t,e,n){"use strict"
n.d(e,{cY:function(){return c},qw:function(){return i},u_:function(){return a}})
var r=n(45128),o=n.n(r)
const s=t=>e=>null!==e.progress?t(e):"",i=s((t=>o()(t.current)+" / "+o()(t.total))),a=s((t=>(t.current/t.total*100).toFixed(1)+"%")),c=s((t=>t.extra+""))},61950:function(t,e,n){"use strict"
var r=n(36013)
e.Z=r.E},61679:function(t,e,n){"use strict"
n.d(e,{Bd:function(){return o},Lg:function(){return i},UP:function(){return s},_W:function(){return c},ak:function(){return a}})
var r=n(27815)
function o(t,e){if(!e)return()=>{}
let n=0
return e.report(0,t),r=>e.report(++n,t,r)}async function s(t,e){if(!t)return e
const n=await Promise.resolve(e)
return!function(t){return t&&t.byteLength}(n)?t.report(1,1):(t.formatter=r.qw,t.report(n.byteLength,n.byteLength)),n}function i(t,e){let n=0,r=0
return async function(...o){t.report(n,++r)
const s=await e.apply(this,o)
return t.report(++n,r),s}}function a(t,e){return t.watch((()=>e.report(t.current,t.total,t.extra)))}function c(t){const e=[]
let n,r=null
function o(){n&&t.report(n.current,n.total,n.extra),e.length>0&&(!n||n.progress>=1)&&function(t){if(n===t)return
r&&(r(),r=null)
n=t,n&&(r=n.watch(o))}(e.shift())}return{add(t){e.push(t),o()}}}},36491:function(t,e,n){"use strict"
function r(t,e,n){if(e.match(/\.(?:bms|bme|bml|bmson)/i))return void n(e)
const r=(t+e).split("/")
for(let t=0;t<r.length;t++)n(r.slice(t).join("/"))}n.d(e,{N:function(){return r}})},33518:function(t,e,n){"use strict"
n.d(e,{pS:function(){return l},AQ:function(){return h},xH:function(){return p},dG:function(){return d}})
var r=n(61679)
class o{constructor(){this.buffer=[],this.loggingFunction=t=>{this.buffer&&this.buffer.push(t)},this.log=t=>{this.loggingFunction(t)},this.setLoggingFunction=t=>{this.loggingFunction=t,this.buffer&&(this.buffer.forEach((e=>t(e))),this.buffer=null)}}}var s=n(1588),i=n(36491)
s.X.init({workerUrl:"/vendor/libarchive.js-1.3.0/dist/worker-bundle.js"})
var a=n(18649),c=n(61950),u=n(93679)
const l=/\.(?:zip|rar|7z|tar(?:\.(?:gz|bz2))?)/i,f=/https?:\/\/(?:(?:www|dl)\.dropbox\.com|dl\.dropboxusercontent\.com)\/(sh?)\/([^?]*)(.*)?$/
class h{constructor(t){this._logging=new o,this.setLoggingFunction=this._logging.setLoggingFunction,this._files=Promise.resolve(t.getFiles(this._logging.log)).then((t=>async function(t,e){if(1!==t.length)return t
const n=t[0]
if(!n.name.match(l))return t
return e("Archive file detected! Now unarchiving…"),async function(t){const e=[],n=await s.X.open(t),r=await n.extractFiles(),o=(t,n="")=>{for(const r of Object.keys(t))t[r]instanceof File?(0,i.N)(n,r,(n=>{e.push({name:n,file:t[r]})})):t[r]&&"object"==typeof t[r]&&o(t[r],n+r+"/")}
return o(r),e}(n.file)}(t,this._logging.log)))}file(t){return this._files.then((function(e){for(const n of e)if(n.name.toLowerCase()===t.toLowerCase())return new p(n.file)
throw new Error("unable to find "+t)}))}get fileList(){return Promise.resolve(this._files).then((t=>t.map((t=>t.name))))}}class p{constructor(t){this._file=t}read(t){return r.UP(t,(0,a.Z)(this._file).as("arraybuffer"))}resolveUrl(){return Promise.resolve(URL.createObjectURL(this._file))}get name(){return this._file.name}}async function d(t,e){const n=t.replace(/[?#].*/,"").split("/").pop(),r=t.match(f)
r&&(t=`https://dl.dropboxusercontent.com/${r[1]}/${r[2]}`)
const o=new c.Z
let s=0
o.watch((()=>{Date.now()<s+5e3||(e(`Downloading: ${o}`),s=Date.now())}))
return{name:n,file:await(0,u.Z)(t).as("blob",o)}}},26594:function(t,e,n){"use strict"
var r=n(33518),o=n(36491)
class s extends r.AQ{constructor(t){super({getFiles:e=>async function(t,e){const n=[],s=t.dataTransfer
if(!s)throw new Error("Expect event.dataTransfer to be present")
if(s.types.indexOf("text/uri-list")>-1){const t=s.getData("text/uri-list").split(/\r\n|\r|\n/).filter((t=>t&&!t.startsWith("#")))[0]
if(r.pS.test(t&&t.replace(/[?#].*/,"")))return e("Link to archive file detected. Trying to download"),[await(0,r.dG)(t,e)]}else if(s.items)for(const t of Array.from(s.items))await i(t)
else if(s.files)for(const t of Array.from(s.files))l(t)
return n
async function i(t){const e=t.webkitGetAsEntry&&t.webkitGetAsEntry()
if(e)await a(e)
else{const e=t.getAsFile&&t.getAsFile()
e&&l(e)}}function a(t,e=""){return t.isFile?c(t,e):t.isDirectory?u(t,e):void 0}async function c(t,e=""){const n=await new Promise(((e,n)=>{t.file(e,n)}))
return l(n,e),n}async function u(t,e=""){const n=[],r=t.createReader(),o=()=>new Promise(((t,e)=>{r.readEntries(t,e)}))
for(;;){const t=await o()
if(!t||0===t.length)break
n.push(...Array.from(t))}for(const r of n)await a(r,e+t.name+"/")}function l(t,e=""){t&&(0,o.N)(e,t.name,(e=>{n.push({name:e,file:t})}))}}(t,e)})}}e.Z=s},37126:function(t,e,n){"use strict"
n.d(e,{tz:function(){return i},u7:function(){return h}})
var r=n(41377),o=n(18649),s=n(30637)
const i=.001,a=document.createElement("audio")
const c=!a.canPlayType('audio/ogg; codecs="vorbis"')
class u{constructor(t,{volume:e}={}){this._master=t,this._gain=this._master.audioContext.createGain(),null!=e&&(this._gain.gain.value=e),this._gain.connect(this._master.destination)}get destination(){return this._gain}destroy(){this._gain.disconnect(),this._gain=null}}class l{constructor(t,e){this._master=t,this._buffer=e}play(t,e){return new f(this._master,this._buffer,t,e)}destroy(){this._master=null,this._buffer=null}get duration(){return this._buffer.duration}}class f{constructor(t,e,n,r={}){n=n||0,this._master=t
const o=t.audioContext,s=o.createBufferSource()
s.buffer=e,s.onended=()=>this.stop()
const a=o.createGain()
s.connect(a)
const c=r.node||r.group&&r.group.destination||t.destination
a.connect(c),this._source=s,this._gain=this.TEST_node=a
const u=n?Math.max(0,o.currentTime+n):0,l=r.start||0,f=l>0
let h=!1
if(f&&a.gain.setValueAtTime(0,0),void 0!==r.end){const t=Math.max(r.end-l,0)
s.start(u,l,t+i),h=o.currentTime+n+t}else s.start(u,l)
f&&(a.gain.setValueAtTime(0,o.currentTime+n),a.gain.linearRampToValueAtTime(1,o.currentTime+n+i)),!1!==h&&(a.gain.setValueAtTime(1,h),a.gain.linearRampToValueAtTime(0,h+i)),this._master._startPlaying(this)}stop(){this._source&&(this._source.stop(0),this._source.disconnect(),this._gain.disconnect(),this._source=null,this._gain=null,this._master._stoppedPlaying(this),this.onstop&&this.onstop())}bad(){this._source&&(this._source.playbackRate.value=Math.random()<.5?Math.pow(2,1/24):Math.pow(2,-1/24))}destroy(){this.stop()}}function h(t=r.Z){const e=t.createGain(),n=t.createOscillator()
n.frequency.value=440,n.start(t.currentTime+.1),n.stop(t.currentTime+.1),e.connect(t.destination),e.disconnect(),async function(t){return t.resume()}(t).catch((t=>{console.error("[sampling-master] Cannot resume AudioContext",t)}))}e.ZP=class{constructor(t){this._audioContext=t||r.Z,this._samples=[],this._groups=[],this._instances=new Set,this._destination=this._audioContext.destination}unmute(){h(this._audioContext)}get audioContext(){return this._audioContext}get destination(){return this._destination}get currentTime(){return this._audioContext.currentTime}destroy(){if(!this._destroyed){this._destroyed=!0
for(const t of this._samples)t.destroy()
for(const t of this._instances)t.destroy()
this._samples=null,this._instances=null}}decode(t){return this._coerceToArrayBuffer(t).then((t=>this._decodeAudio(t)))}sample(t){return(()=>t.numberOfChannels?Promise.resolve(t):this.decode(t))().then((t=>{if(this._destroyed)throw new Error("SamplingMaster already destroyed!")
const e=new l(this,t)
return this._samples.push(e),e}))}group(t){const e=new u(this,t)
return this._groups.push(e),e}_coerceToArrayBuffer(t){return t instanceof ArrayBuffer?Promise.resolve(t):(0,o.Z)(t).as("arraybuffer")}_decodeAudio(t){return new Promise(((e,n)=>{if(c&&t.byteLength>4){const n=new Uint8Array(t,0,4)
if(79===n[0]&&103===n[1]&&103===n[2]&&83===n[3])return e((0,s.g)(this.audioContext,t))}this.audioContext.decodeAudioData(t,(function(t){e(t)}),(function(t){n(new Error("Unable to decode audio: "+t))}))}))}_startPlaying(t){this._instances.add(t)}_stoppedPlaying(t){this._instances.delete(t)}}},30637:function(t,e,n){"use strict"
n.d(e,{g:function(){return i}})
var r=n(75239)
let o
const s=n.n(r)()(1)
async function i(t,e){const r=await(o||(o=n.e(45).then(n.t.bind(n,9872,17)).then((t=>t.default)).then((t=>(0,eval)(t+"stbvorbis")))),o)
return s((()=>function(t,e,n){return new Promise(((r,o)=>{const s=[]
let i,c=0
t.decode(n,(function(t){if(t.data&&(i=t.sampleRate,s.push(t.data),c+=t.data[0].length),t.error){const e=t.error instanceof Error?t.error:`stbvorbis.js Error: ${t.error}`
o(e)}t.eof&&r(async function(t,e,n,r){if(!n)throw new Error("stbvorbis.js Error: No length")
if(!r)throw new Error("stbvorbis.js Error: No sample rate")
const o=e[0].length,s=t.createBuffer(o,n,r),i=Array(s.numberOfChannels).fill(null).map(((t,e)=>new a(s.getChannelData(e))))
for(const t of e)t.forEach(((t,e)=>{i[e].write(t)}))
return s}(e,s,c,i))}))}))}(r,t,e)))}class a{constructor(t){this.data=t,this.offset=0}write(t){const{offset:e,data:n}=this
for(let r=0;r<t.length;r++)n[r+e]=t[r]
this.offset+=t.length}}},31396:function(t,e,n){"use strict"
e.Z=class{constructor(t){if(this._callbacks={},this._nextId=1,"function"==typeof t)this.add(t)
else if("object"==typeof t&&t&&t.length)for(let e=0;e<t.length;e++)this.add(t[e])}call(...t){const e=this._callbacks
for(const n in e)e[n](...t)}add(t){const e=this._nextId++
return this._callbacks[e]=t,()=>delete this._callbacks[e]}}},93679:function(t,e,n){"use strict"
var r=n(26826),o=n.n(r),s=n(27815)
e.Z=function(t,{getRetryDelay:e=(()=>1e3+4e3*Math.random())}={}){return{async as(n,r){let i=!1
for(let a=1;;a++)try{return await new Promise(((e,o)=>{const a=new XMLHttpRequest
a.open("GET",t,!0),a.responseType=n,a.onload=()=>{200==+a.status?e(a.response):(403!=+a.status&&404!=+a.status||(i=!0),o(new Error(`Unable to download ${t}: HTTP ${a.status}`)))},a.onerror=()=>o(new Error(`Unable to download ${t}`)),r&&(r.formatter=s.qw,a.onprogress=t=>r.report(t.loaded,t.total)),a.send(null)}))}catch(n){if(console.error(`Unable to download ${t} [attempt ${a}]`,n),a>=3||i)throw n
const r=e()
await o()(r)}}}}},72416:function(t,e,n){"use strict"
var r=n(31396)
e.Z=class{constructor(t){this._callbacks=new r.Z,this._value=t}get value(){return this._value}set value(t){this._value=t,this.notify(t)}notify(t){this._callbacks.call(t)}watch(t){return void 0!==this._value&&t(this._value),this._callbacks.add(t)}}},18649:function(t,e,n){"use strict"
e.Z=function(t){return{as(e){return new Promise((function(n,r){const o=new FileReader
switch(o.onload=function(){n(o.result)},o.onerror=function(){r(new Error("Unable to read from Blob"))},e){case"arraybuffer":o.readAsArrayBuffer(t)
break
case"text":o.readAsText(t)}}))}}}}}])

//# sourceMappingURL=comingSoonDemo-1551995a72527791119c.js.map