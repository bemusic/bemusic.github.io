/*! For license information please see music-3f755264c0994dc1d8c9.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[106],{45128:e=>{"use strict"
e.exports=function(e,t){if("string"==typeof e)return o(e)
if("number"==typeof e)return a(e,t)
return null},e.exports.format=a,e.exports.parse=o
var t=/\B(?=(\d{3})+(?!\d))/g,r=/(?:\.0*|(\.[^0]+)0+)$/,n={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},s=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i
function a(e,s){if(!Number.isFinite(e))return null
var a=Math.abs(e),o=s&&s.thousandsSeparator||"",l=s&&s.unitSeparator||"",i=s&&void 0!==s.decimalPlaces?s.decimalPlaces:2,c=Boolean(s&&s.fixedDecimals),u=s&&s.unit||""
u&&n[u.toLowerCase()]||(u=a>=n.pb?"PB":a>=n.tb?"TB":a>=n.gb?"GB":a>=n.mb?"MB":a>=n.kb?"KB":"B")
var d=(e/n[u.toLowerCase()]).toFixed(i)
return c||(d=d.replace(r,"$1")),o&&(d=d.split(".").map(function(e,r){return 0===r?e.replace(t,o):e}).join(".")),d+l+u}function o(e){if("number"==typeof e&&!isNaN(e))return e
if("string"!=typeof e)return null
var t,r=s.exec(e),a="b"
return r?(t=parseFloat(r[1]),a=r[4].toLowerCase()):(t=parseInt(e,10),a="b"),isNaN(t)?null:Math.floor(n[a]*t)}},26826:e=>{"use strict"
const t=()=>{const e=new Error("Delay aborted")
return e.name="AbortError",e},r=({clearTimeout:e,setTimeout:r,willResolve:n})=>(s,{value:a,signal:o}={})=>{if(o&&o.aborted)return Promise.reject(t())
let l,i,c
const u=e||clearTimeout,d=()=>{u(l),c(t())},f=new Promise((e,t)=>{i=()=>{o&&o.removeEventListener("abort",d),n?e(a):t(a)},c=t,l=(r||setTimeout)(i,s)})
return o&&o.addEventListener("abort",d,{once:!0}),f.clear=()=>{u(l),l=null,i()},f},n=e=>{const t=r({...e,willResolve:!0})
return t.reject=r({...e,willResolve:!1}),t.range=(e,r,n)=>t(((e,t)=>Math.floor(Math.random()*(t-e+1)+e))(e,r),n),t},s=n()
s.createWithTimers=n,e.exports=s,e.exports.default=s},89897:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{main:()=>R})
var n=r(24064),s=r(18596),a=r(8600),o=r(89802),l=r(6204),i=r(89599),c=r.n(i),u=r(85331),d=r(20624),f=r(26755),h=r(89797),m=r(68510),p=r(55122)
const b={ingame:e=>(0,m.Z)((0,p.Z)(e)),added:e=>[{title:"Sorted by added date",songs:c().reverse(c().sortBy(e,g))}]},g=e=>e.added||(e.initial?"0000-00-00":"9999-99-99")
const w=({song:e})=>{const t=function(e){const t=[],r=(e,...r)=>t.push({keys:r,message:e})
e.unreleased&&r("Not released","unreleased"),e.readme||r("No README file found","README.md"),e.replaygain||r("No replay gain","replaygain"),e.artist_url||r("No artist URL","artist_url"),e.added||e.initial||r("No added date","added"),e.song_url||e.youtube_url||e.long_url||r("No song/YouTube/long URL","song_url","long_url","youtube_url"),e.bms_url||e.exclusive||r("No download URL","bms_url"),e.bmssearch_id||e.exclusive||r("No BMS search ID","bmssearch_id"),e.charts.filter(e=>"5K"===e.keys).length||r("No 5-key charts","5key")
for(const t of(0,f.Z)(e.charts))t.info.subtitles.length||r("Missing subtitle","chart_names "+t.file)
return t}(e)
return t.length?a.createElement("div",null,t.map((e,t)=>a.createElement("div",{key:t},e.keys.map(e=>a.createElement("code",{key:e,style:{fontFamily:"Ubuntu Mono",marginRight:"2",padding:3,fontSize:"0.8em",background:"#755"}},e)),e.message))):null},y=({song:e,url:t,setPreviewUrl:r})=>a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("strong",{onClick:()=>{prompt("",`vim '${e.id}/README.md'`)}},a.createElement("code",{style:{fontFamily:"Ubuntu Mono"}},e.id)),a.createElement("br",null),a.createElement("span",{style:{color:"#8b8685"}},e.added)),a.createElement("td",{style:{textAlign:"center",background:"#353433"}},a.createElement("span",{style:{color:"#8b8685"},onClick:async()=>{const n=await(0,h.Z)(e,t)
r(n)}},e.genre),a.createElement("br",null),a.createElement("strong",{onClick:()=>{console.log(e),alert((0,u.inspect)(e))}},e.title),a.createElement("br",null),e.artist),a.createElement("td",null,a.createElement(w,{song:e}))),v=({sort:e,songs:t,url:r,setPreviewUrl:n})=>{const s=b[e](t),o=[]
for(const e of s){o.push(a.createElement("tr",{key:e.title},a.createElement("th",{colSpan:4},e.title)))
for(const t of e.songs)o.push(a.createElement(y,{song:t,url:r,setPreviewUrl:n}))}return a.createElement(a.Fragment,null,o)},E=({previewUrl:e,previewEnabled:t,togglePreview:r})=>{const n=a.createElement("button",{onClick:r},t?"disable":"enable")
return a.createElement("span",null,a.createElement("strong",null,"Music preview:")," ",n,t&&e&&a.createElement(d.Z,{url:e}))},_=({setSort:e})=>{const t=[]
for(const r of Object.keys(b))t.push(a.createElement("button",{key:r,onClick:()=>e(r)},r))
return a.createElement("span",null,a.createElement("strong",null,"Sort by:")," ",t)},k=({data:e,url:t,initialSort:r})=>{const[n,s]=(0,a.useState)(r||Object.keys(b)[0]),[o,l]=(0,a.useState)(!1),[i,c]=(0,a.useState)(null)
return a.createElement("table",{style:{borderSpacing:4}},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{colSpan:4},a.createElement(_,{setSort:s})," · ",a.createElement(E,{previewEnabled:o,previewUrl:i,togglePreview:()=>l(e=>!e)}))),a.createElement("tr",null,a.createElement("th",null,"id"),a.createElement("th",null,"song"),a.createElement("th",null,"warnings"))),a.createElement("tbody",null,a.createElement(v,{sort:n,songs:e.songs,url:t,setPreviewUrl:c})))},Z=({text:e})=>a.createElement("div",{style:{textAlign:"center"}},e),S=({data:e,url:t,initialSort:r})=>{if(!e)return a.createElement(Z,{text:"No data"})
try{return a.createElement(k,{data:e,url:t,initialSort:r})}catch(e){return a.createElement(Z,{text:`Error: ${e}`})}}
var P=r(10625),U=r(41899)
const x=()=>{const[e,t]=(0,a.useState)("Loading"),[r,n]=(0,a.useState)(null),s=U.Z.server||l.p_
return(0,a.useEffect)(()=>{(0,l.zD)(s).then(e=>{t("Load completed"),n(e)},e=>{t("Load error: "+e)})},[]),a.createElement("div",null,a.createElement("header",{style:{textAlign:"center"}},a.createElement("h1",null,"Bemuse collection viewer"),a.createElement("div",null,s,a.createElement("br",null),e)),a.createElement("div",{style:{padding:20}},a.createElement(S,{data:r&&(0,P.Z)(r),url:s,initialSort:U.Z.sort})))}
function R(){n.MA(),(0,o.render)(a.createElement(x,null),s.Z)}},26755:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(89599),s=r.n(n),a=r(93386)
const o=function(e){return s()(e).filter(a.Z).orderBy([e=>e.info.difficulty>=5?1:0,e=>e.keys,e=>e.info.level]).value()}},89797:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>s})
var n=r(66987)
async function s(e,t){if(!e)return null
if(e.tutorial)return null
const{baseResources:r}=(0,n.$)(e,t)
return(await r.file(e.preview_url||"_bemuse_preview.mp3")).resolveUrl()}},66987:(e,t,r)=>{"use strict"
r.d(t,{$:()=>o})
var n=r(8721),s=r(47378),a=r(16128)
function o(e,t){const r=e.resources||new a.CA(new URL(e.path.replace(/\/?$/,"/"),t.replace(/\/?$/,"/")))
return{baseResources:r,assetResources:function(e,t){if(null===t)return e
void 0===t&&(t="assets/metadata.json")
const[r,a]=(0,s.V)(e,t)
return new n.C(r,{metadataFilename:a,fallback:e,fallbackPattern:/\.(?:png|jpg|webm|mp4|m4v)/})}(r,e.bemusepack_url)}}},68510:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>c})
var n=r(89599),s=r.n(n),a=r(10959)
const o=s().once(()=>{const e=new Date(Date.now()+324e5).toISOString().split("T")[0]
return s().memoize(t=>{const r=(0,a.createHash)("md5")
return r.update(t),r.update(e),r.digest("hex")})})
class l{constructor(e,{enabled:t=!0}={}){if(!t)return void(this.ids=new Set)
const r=s().sortBy(e.filter(e=>!e.custom&&!e.tutorial),e=>o()(e.id))
this.ids=new Set(r.slice(0,3).map(e=>e.id))}isSongOfTheDay(e){return this.ids.has(e)}}const i=[{title:"Custom Song",criteria:e=>!!e.custom},{title:"Tutorial",criteria:e=>!!e.tutorial},{title:"Unreleased",criteria:e=>!!e.unreleased},{title:"Recently Added Songs",criteria:e=>!!e.added&&Date.now()-Date.parse(e.added)<5184e6,sort:e=>{var t
return null!==(t=e.added)&&void 0!==t?t:""},reverse:!0},{title:"Random Songs of the Day",criteria:(e,t)=>t.songOfTheDay.isSongOfTheDay(e.id)},{title:"☆",criteria:()=>!0}]
const c=function(e,{songOfTheDayEnabled:t=!1}={}){const r={songOfTheDay:new l(e,{enabled:t})},n=i.map(e=>({input:e,output:{title:e.title,songs:[]}}))
for(const t of e)for(const{input:e,output:s}of n)if(e.criteria(t,r)){s.songs.push(t)
break}for(const{input:e,output:t}of n)e.sort?t.songs=s().orderBy(t.songs,[e.sort],[e.reverse?"desc":"asc"]):e.reverse&&t.songs.reverse()
return s()(n).map("output").filter(e=>e.songs.length>0).value()}},6204:(e,t,r)=>{"use strict"
r.d(t,{d8:()=>a,p_:()=>n,zD:()=>s})
const n="https://music4.bemuse.ninja/server"
async function s(e,{fetch:t=r.g.fetch}={}){const n=a(e),s=await t(n).then(e=>e.json())
if(Array.isArray(s.songs))return s
if(Array.isArray(s.charts)){const e=n.lastIndexOf("/"),t=-1===e?n:n.substring(0,e+1)
return{songs:[{...s,id:"song",path:t}]}}throw new Error(`Invalid server file at ${n}: Does not contain "songs" array.`)}function a(e){return e.endsWith("/bemuse-song.json")?e:e.replace(/\/(?:index\.json)?$/,"")+"/index.json"}},93386:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
const n=function(e){return"7K"===e.keys||"5K"===e.keys}},10625:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>s})
var n=r(8531)
const s=(0,n.ZP)((e,t)=>{t&&(e.songs=t.map(e=>function(e){if(!e.chart_names)return e
return(0,n.ZP)(e,t=>{t.charts&&(t.charts=t.charts.map(t=>{const r=e.chart_names[t.file]
return r?(0,n.ZP)(t,e=>{e.info.subtitles=[...t.info.subtitles,r]}):t}))})}(e)))})},55122:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(89599),s=r.n(n),a=r(93386)
const o=function(e){return s().orderBy(e,[e=>s()(e.charts).filter(a.Z).filter(e=>e.info.difficulty<5).filter(e=>e.info.level>0).map(e=>e.info.level).min(),e=>e.bpm,e=>e.title.toLowerCase()])}},20624:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>a})
var n=r(24064),s=r(8600)
n.MA()
const a=({url:e})=>{const[t,r]=(0,s.useState)(!1)
return(0,s.useEffect)(()=>{const e=({data:e})=>{"calibration-started"===e.type&&r(!0),"calibration-closed"===e.type&&r(!1)}
return addEventListener("message",e),()=>{n.h$(),removeEventListener("message",e)}},[]),(0,s.useEffect)(()=>{t?n.h$():n.wp(),n.RN(e)},[e,t]),null}},24064:(e,t,r)=>{"use strict"
r.d(t,{h$:()=>c,wp:()=>i,go:()=>u,MA:()=>l,RN:()=>d})
const n=r.p+"build/assets/default-0e16b9bd61f8c90968ac.ogg",s=r.p+"build/assets/go-fa33b4ede606d5bb0e7d.ogg"
let a=null
function o(){return a||(a=function(){let e=!1,t=null,r=!1,a=!1
const o={},l=new Audio(n)
l.preload="auto",l.loop=!0,l.oncanplaythrough=()=>{r=!0,u()},l.load()
const i=document.createElement("audio")
i.src=s,i.volume=.5,i.load()
const c=h(l,.5,e=>{0===e&&a&&(a=!1,l.pause())})
function u(){if(!e){a&&(c.fadeTo(0,100),a=!1,l.pause())
for(const e of Object.keys(o)){o[e].destroy()}return}let n=null
for(const e of Object.keys(o)){const r=o[e]
e===t?r.loaded&&(r.play(),n=r):r.stop()}n?c.fadeTo(0,1):(c.fadeTo(.4,.5),r&&!a&&(a=!0,f(l).catch(()=>console.warn("Cannot play background music"))))}function d(e){const t=document.createElement("audio")
t.src=e
let r=!1
const n=h(t,1,r=>{0===r&&(t.pause(),delete o[e],u())}),s={loaded:!1,play(){r||f(t).then(()=>{r=!0}).catch(()=>console.warn("Cannot play",t.src)),n.fadeTo(1,2)},stop(){n.fadeTo(0,4)},destroy(){t.pause(),delete o[e],u()}}
return t.oncanplaythrough=()=>{s.loaded=!0,u()},t.onended=()=>{delete o[e],u()},t.load(),s}return{enable(){e||(e=!0,u())},disable(){e&&(e=!1,u())},go(){e&&(i.currentTime=0,f(i).catch(()=>console.warn("Cannot play go sound.")))},preview(e){t!==e&&(t=e,e&&!o[e]&&(o[e]=d(e)),u())}}}())}function l(){o()}function i(){return o().enable()}function c(){return o().disable()}function u(){return o().go()}function d(e){return o().preview(e)}function f(e){return new Promise(t=>{t(e.play())})}function h(e,t,r){let n,s=0,a=0,o=!1
function l(){return(Date.now()-n)/1e3}function i(){return s>t?Math.min(s,t+l()*a):s<t?Math.max(s,t-l()*a):s}function c(){o=!1
const t=i()
e.volume=t,t===s?r&&r(s):o||(o=!0,requestAnimationFrame(c))}return e.volume=t,{fadeTo(e,r){s===e&&r===a||(t=i(),s=e,a=r,n=Date.now(),c())}}}},14311:(e,t,r)=>{"use strict"
r.d(t,{E:()=>s})
var n=r(26365)
class s{constructor(){this.current=void 0,this.total=void 0,this._observable=new n.Z}report(e,t,r){this.current=e,this.total=t,this.extra=r,this._observable.notify()}watch(e){return e(this),this._observable.watch(()=>e(this))}get progress(){return this.total&&void 0!==this.current&&null!==this.current?this.current/this.total:null}toString(){return void 0!==this.formatter?this.formatter(this):null!==this.progress?this.current+" / "+this.total:""}}},14859:(e,t,r)=>{"use strict"
r.d(t,{cY:()=>i,qw:()=>o,u_:()=>l})
var n=r(45128),s=r.n(n)
const a=e=>t=>null!==t.progress?e(t):"",o=a(e=>s()(e.current)+" / "+s()(e.total)),l=a(e=>(e.current/e.total*100).toFixed(1)+"%"),i=a(e=>e.extra+"")},19484:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
const n=r(14311).E},71615:(e,t,r)=>{"use strict"
r.d(t,{Bd:()=>s,Lg:()=>o,UP:()=>a,_W:()=>i,ak:()=>l})
var n=r(14859)
function s(e,t){if(!t)return()=>{}
let r=0
return t.report(0,e),n=>t.report(++r,e,n)}async function a(e,t){if(!e)return t
const r=await Promise.resolve(t)
return!function(e){return e&&e.byteLength}(r)?e.report(1,1):(e.formatter=n.qw,e.report(r.byteLength,r.byteLength)),r}function o(e,t){let r=0,n=0
return async function(...s){e.report(r,++n)
const a=await t.apply(this,s)
return e.report(++r,n),a}}function l(e,t){return e.watch(()=>t.report(e.current,e.total,e.extra))}function i(e){const t=[]
let r,n=null
function s(){r&&e.report(r.current,r.total,r.extra),t.length>0&&(!r||r.progress>=1)&&function(e){if(r===e)return
n&&(n(),n=null)
r=e,r&&(n=r.watch(s))}(t.shift())}return{add(e){t.push(e),s()}}}},8721:(e,t,r)=>{"use strict"
r.d(t,{C:()=>h})
var n=r(71615),s=r(89599),a=r.n(s),o=r(19484),l=r(24030),i=r(75239),c=r.n(i),u=r(16128)
class d{constructor(e,t,r){this.resources=e,this.ref=t,this.name=r}read(e){return n.UP(e,this.resources.getBlob(this.ref).then(e=>(0,l.Z)(e).as("arraybuffer")))}async resolveUrl(){const e=await this.resources.getBlob(this.ref)
return URL.createObjectURL(e)}}class f{constructor(e,t){this.resources=e,this._basePromise=e.base.file(t.path)}load(){return this._promise||(this._promise=this.resources.loadPayload(this._basePromise))}}const h=class{constructor(e,t={}){this.progress={all:new o.Z,current:new o.Z},this._getMetadata=a().once(async()=>{const e=await this._base.file(this._metadataFilename),t=await e.read(),r=await new Blob([t]).text()
return JSON.parse(r)}),this._getRefs=a().once(async()=>(await this._getMetadata()).refs.map(e=>new f(this,e))),this._getFileMap=a().once(async()=>{const e=await this._getMetadata(),t=new Map
for(const r of e.files)t.set(r.name.toLowerCase(),r)
return t}),"string"==typeof e&&(e=new URL(e,location.href)),e instanceof URL&&(e=new u.CA(e))
const r="string"==typeof t.fallback?new u.CA(new URL(t.fallback,location.href)):t.fallback
this._base=e,this._fallback=r,this._fallbackPattern=t.fallbackPattern,this._metadataFilename=t.metadataFilename||"metadata.json"
const s=n._W(this.progress.current)
this.loadPayload=n.Lg(this.progress.all,c()(2,e=>e.then(e=>e.read((()=>{const e=new o.Z
return s.add(e),e})())).then(e=>new Blob([e])).then(m)))}get base(){return this._base}async file(e){const t=(await this._getFileMap()).get(e.toLowerCase())
if(t)return new d(this,t.ref,t.name)
if(this._fallback&&this._fallbackPattern&&this._fallbackPattern.test(e))return this._fallback.file(e)
throw new Error("Unable to find: "+e)}async getBlob([e,t,r]){const n=(await this._getRefs())[e]
return(await n.load()).slice(t,r)}}
async function m(e){if("BEMUSEPACK"!==await(0,l.Z)(e.slice(0,10)).as("text"))throw new Error("Invalid magic number")
const t=await(0,l.Z)(e.slice(10,14)).as("arraybuffer"),r=new Uint8Array(t),n=r[0]+(r[1]<<8)+(r[2]<<16)+(r[3]<<24)
return e.slice(14+n)}},47378:(e,t,r)=>{"use strict"
r.d(t,{V:()=>s})
var n=r(16128)
function s(e,t){if(t.includes("://"))return[new n.CA(new URL(t)),t.split("/").slice(-1)[0]]
const r=t.split("/")
let s=e
for(;r.length>1;){const e=r.shift()
s=new a(s,e)}return[s,r[0]]}class a{constructor(e,t){this.base=e,this.dirName=t}async file(e){return this.base.file(`${this.dirName}/${e}`)}}},16128:(e,t,r)=>{"use strict"
r.d(t,{CA:()=>o,ZP:()=>l})
var n=r(77010),s=r(72103)
class a{constructor(e){this.url=e}read(e){return(0,n.Z)(this.url).as("arraybuffer",e)}async resolveUrl(){return Promise.resolve(this.url)}get name(){return(0,s.basename)(this.url)}}class o{constructor(e){this.base=e}async file(e){const t=e.split("/").map(e=>encodeURIComponent(e)).join("/")
return new a(new URL(t,this.base).href)}}const l=a},59236:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
const n=class{constructor(e){if(this._callbacks={},this._nextId=1,"function"==typeof e)this.add(e)
else if("object"==typeof e&&e&&e.length)for(let t=0;t<e.length;t++)this.add(e[t])}call(...e){const t=this._callbacks
for(const r in t)t[r](...e)}add(e){const t=this._nextId++
return this._callbacks[t]=e,()=>delete this._callbacks[t]}}},77010:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(26826),s=r.n(n),a=r(14859)
const o=function(e,{getRetryDelay:t=()=>1e3+4e3*Math.random()}={}){return{async as(r,n){let o=!1
for(let r=1;;r++)try{return await l()}catch(n){if(console.error(`Unable to download ${e} [attempt ${r}]`,n),r>=3||o)throw n
const a=t()
await s()(a)}function l(){return new Promise((t,s)=>{const l=new XMLHttpRequest
l.open("GET",e,!0),l.responseType=r,l.onload=()=>{200===+l.status?t(l.response):(403!==+l.status&&404!==+l.status||(o=!0),s(new Error(`Unable to download ${e}: HTTP ${l.status}`)))},l.onerror=()=>s(new Error(`Unable to download ${e}`)),n&&(n.formatter=a.qw,l.onprogress=e=>n.report(e.loaded,e.total)),l.send(null)})}}}}},18596:(e,t,r)=>{"use strict"
r.d(t,{J:()=>a,Z:()=>o})
var n=r(2705)
const s=document.querySelector("#scene-root")
if(!s)throw new Error("The scene root element `#scene-root` not found")
const a=(0,n.s)(s),o=s},26365:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>s})
var n=r(59236)
const s=class{constructor(e){this._callbacks=new n.Z,this._value=e}get value(){return this._value}set value(e){this._value=e,this.notify(e)}notify(e){this._callbacks.call(e)}watch(e){return void 0!==this._value&&e(this._value),this._callbacks.add(e)}}},24030:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
const n=function(e){return{as:t=>new Promise(function(r,n){const s=new FileReader
switch(s.onload=function(){r(s.result)},s.onerror=function(){n(new Error("Unable to read from Blob"))},t){case"arraybuffer":s.readAsArrayBuffer(e)
break
case"text":s.readAsText(e)}})}}},99191:()=>{},12057:()=>{},21421:()=>{},10159:()=>{},65933:()=>{},10639:()=>{},63620:()=>{}}])

//# sourceMappingURL=music-3f755264c0994dc1d8c9.js.map