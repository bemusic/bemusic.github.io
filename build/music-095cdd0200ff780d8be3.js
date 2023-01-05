(this.webpackChunk=this.webpackChunk||[]).push([[106],{20485:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return R}})
var r=n(71064),s=n(10488),a=n(93981),o=n(72997),i=n(94828),l=n(62270),c=n.n(l),u=n(85789),f=n(4588),d=n(5933),h=n(96795),m=n(7194)
const p={ingame:e=>(0,h.Z)((0,m.Z)(e)),added:e=>[{title:"Sorted by added date",songs:c().reverse(c().sortBy(e,g))}]},g=e=>e.added||(e.initial?"0000-00-00":"9999-99-99")
const b=({song:e})=>{const t=function(e){const t=[],n=(e,...n)=>t.push({keys:n,message:e})
e.unreleased&&n("Not released","unreleased"),e.readme||n("No README file found","README.md"),e.replaygain||n("No replay gain","replaygain"),e.artist_url||n("No artist URL","artist_url"),e.added||e.initial||n("No added date","added"),e.song_url||e.youtube_url||e.long_url||n("No song/YouTube/long URL","song_url","long_url","youtube_url"),e.bms_url||e.exclusive||n("No download URL","bms_url"),e.bmssearch_id||e.exclusive||n("No BMS search ID","bmssearch_id"),e.charts.filter((e=>"5K"===e.keys)).length||n("No 5-key charts","5key")
for(const t of(0,f.Z)(e.charts))t.info.subtitles.length||n("Missing subtitle","chart_names "+t.file)
return t}(e)
return t.length?a.createElement("div",null,t.map(((e,t)=>a.createElement("div",{key:t},e.keys.map((e=>a.createElement("code",{key:e,style:{fontFamily:"Ubuntu Mono",marginRight:"2",padding:3,fontSize:"0.8em",background:"#755"}},e))),e.message)))):null},w=({song:e,url:t,setPreviewUrl:r})=>a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("strong",{onClick:()=>{prompt("",`vim '${e.id}/README.md'`)}},a.createElement("code",{style:{fontFamily:"Ubuntu Mono"}},e.id)),a.createElement("br",null),a.createElement("span",{style:{color:"#8b8685"}},e.added)),a.createElement("td",{style:{textAlign:"center",background:"#353433"}},a.createElement("span",{style:{color:"#8b8685"},onClick:async()=>{const n=await(0,d.Z)(e,t)
r(n)}},e.genre),a.createElement("br",null),a.createElement("strong",{onClick:()=>{console.log(e),alert(n(85331).inspect(e))}},e.title),a.createElement("br",null),e.artist),a.createElement("td",null,a.createElement(b,{song:e}))),y=({sort:e,songs:t,url:n,setPreviewUrl:r})=>{const s=p[e](t),o=[]
for(const e of s){o.push(a.createElement("tr",{key:e.title},a.createElement("th",{colSpan:4},e.title)))
for(const t of e.songs)o.push(a.createElement(w,{song:t,url:n,setPreviewUrl:r}))}return a.createElement(a.Fragment,null,o)},v=({previewUrl:e,previewEnabled:t,togglePreview:n})=>{const r=a.createElement("button",{onClick:n},t?"disable":"enable")
return a.createElement("span",null,a.createElement("strong",null,"Music preview:")," ",r,t&&e&&a.createElement(u.Z,{url:e}))},E=({setSort:e})=>{const t=[]
for(const n of Object.keys(p))t.push(a.createElement("button",{key:n,onClick:()=>e(n)},n))
return a.createElement("span",null,a.createElement("strong",null,"Sort by:")," ",t)},_=({data:e,url:t,initialSort:n})=>{const[r,s]=(0,a.useState)(n||Object.keys(p)[0]),[o,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)(null)
return a.createElement("table",{style:{borderSpacing:4}},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{colSpan:4},a.createElement(E,{setSort:s})," · ",a.createElement(v,{previewEnabled:o,previewUrl:l,togglePreview:()=>i((e=>!e))}))),a.createElement("tr",null,a.createElement("th",null,"id"),a.createElement("th",null,"song"),a.createElement("th",null,"warnings"))),a.createElement("tbody",null,a.createElement(y,{sort:r,songs:e.songs,url:t,setPreviewUrl:c})))},k=({text:e})=>a.createElement("div",{style:{textAlign:"center"}},e)
var Z=({data:e,url:t,initialSort:n})=>{if(!e)return a.createElement(k,{text:"No data"})
try{return a.createElement(_,{data:e,url:t,initialSort:n})}catch(e){return a.createElement(k,{text:`Error: ${e}`})}},U=n(64204),S=n(47258)
var P=()=>{const[e,t]=(0,a.useState)("Loading"),[n,r]=(0,a.useState)(null),s=S.Z.server||i.p_
return(0,a.useEffect)((()=>{(0,i.zD)(s).then((e=>{t("Load completed"),r(e)}),(e=>{t("Load error: "+e)}))}),[]),a.createElement("div",null,a.createElement("header",{style:{textAlign:"center"}},a.createElement("h1",null,"Bemuse collection viewer"),a.createElement("div",null,s,a.createElement("br",null),e)),a.createElement("div",{style:{padding:20}},a.createElement(Z,{data:n&&(0,U.Z)(n),url:s,initialSort:S.Z.sort})))}
function R(){r.MA(),(0,o.render)(a.createElement(P,null),s.Z)}},4588:function(e,t,n){"use strict"
var r=n(62270),s=n.n(r),a=n(31973)
t.Z=function(e){return s()(e).filter(a.Z).orderBy([e=>e.info.difficulty>=5?1:0,e=>e.keys,e=>e.info.level]).value()}},5933:function(e,t,n){"use strict"
n.d(t,{Z:function(){return s}})
var r=n(77542)
async function s(e,t){if(!e)return null
if(e.tutorial)return null
const{baseResources:n}=(0,r.$)(e,t)
return(await n.file(e.preview_url||"_bemuse_preview.mp3")).resolveUrl()}},77542:function(e,t,n){"use strict"
n.d(t,{$:function(){return o}})
var r=n(25848),s=n(20041),a=n(80425)
function o(e,t){const n=e.resources||new a.CA(new URL(e.path.replace(/\/?$/,"/"),t.replace(/\/?$/,"/")))
return{baseResources:n,assetResources:function(e,t){if(null===t)return e
void 0===t&&(t="assets/metadata.json")
const[n,a]=(0,s.V)(e,t)
return new r.C(n,{metadataFilename:a,fallback:e,fallbackPattern:/\.(?:png|jpg|webm|mp4|m4v)/})}(n,e.bemusepack_url)}}},96795:function(e,t,n){"use strict"
n.d(t,{Z:function(){return c}})
var r=n(62270),s=n.n(r),a=n(43147)
const o=s().once((()=>{const e=new Date(Date.now()+324e5).toISOString().split("T")[0]
return s().memoize((t=>{const n=(0,a.createHash)("md5")
return n.update(t),n.update(e),n.digest("hex")}))}))
class i{constructor(e,{enabled:t=!0}={}){if(!t)return void(this.ids=new Set)
const n=s().sortBy(e.filter((e=>!e.custom&&!e.tutorial)),(e=>o()(e.id)))
this.ids=new Set(n.slice(0,3).map((e=>e.id)))}isSongOfTheDay(e){return this.ids.has(e)}}const l=[{title:"Custom Song",criteria:e=>e.custom},{title:"Tutorial",criteria:e=>e.tutorial},{title:"Unreleased",criteria:e=>e.unreleased},{title:"Recently Added Songs",criteria:e=>e.added&&Date.now()-Date.parse(e.added)<5184e6,sort:e=>e.added,reverse:!0},{title:"Random Songs of the Day",criteria:(e,t)=>t.songOfTheDay.isSongOfTheDay(e.id)},{title:"☆",criteria:()=>!0}]
var c=function(e,{songOfTheDayEnabled:t=!1}={}){const n={songOfTheDay:new i(e,{enabled:t})},r=l.map((e=>({input:e,output:{title:e.title,songs:[]}})))
for(const t of e)for(const{input:e,output:s}of r)if(e.criteria(t,n)){s.songs.push(t)
break}for(const{input:e,output:t}of r)e.sort?t.songs=s().orderBy(t.songs,[e.sort],[e.reverse?"desc":"asc"]):e.reverse&&t.songs.reverse()
return s()(r).map("output").filter((e=>e.songs.length>0)).value()}},94828:function(e,t,n){"use strict"
n.d(t,{d8:function(){return a},p_:function(){return r},zD:function(){return s}})
const r="https://music4.bemuse.ninja/server"
async function s(e,{fetch:t=n.g.fetch}={}){const r=a(e),s=await t(r).then((e=>e.json()))
if(Array.isArray(s.songs))return s
if(Array.isArray(s.charts)){const e=r.replace(/[^/]*$/,"")
return{songs:[{...s,id:"song",path:e}]}}throw new Error(`Invalid server file at ${r}: Does not contain "songs" array.`)}function a(e){return e.endsWith("/bemuse-song.json")?e:e.replace(/\/(?:index\.json)?$/,"")+"/index.json"}},31973:function(e,t,n){"use strict"
t.Z=function(e){return"7K"===e.keys||"5K"===e.keys}},64204:function(e,t,n){"use strict"
var r=n(4213)
const s=(0,r.ZP)(((e,t)=>{t&&(e.songs=t.map((e=>function(e){e.chart_names&&(e=(0,r.ZP)(e,(t=>{t.charts&&(t.charts=t.charts.map((t=>{const n=e.chart_names[t.file]
return n?(0,r.ZP)(t,(e=>{e.info={subtitles:e=>[...e,n]}})):t})))})))
return e}(e))))}))
t.Z=s},7194:function(e,t,n){"use strict"
var r=n(62270),s=n.n(r),a=n(31973)
t.Z=function(e){return s().orderBy(e,[e=>s()(e.charts).filter(a.Z).filter((e=>e.info.difficulty<5)).filter((e=>e.info.level>0)).map((e=>e.info.level)).min(),e=>e.bpm,e=>e.title.toLowerCase()])}},85789:function(e,t,n){"use strict"
var r=n(93981),s=n(71064)
s.MA()
t.Z=({url:e})=>((0,r.useEffect)((()=>{const e=({data:e})=>{"calibration-started"===e.type?s.h$():"calibration-closed"===e.type&&s.wp()}
return addEventListener("message",e),()=>{s.h$(),removeEventListener("message",e)}}),[]),(0,r.useEffect)((()=>{s.wp(),s.RN(e)})),null)},71064:function(e,t,n){"use strict"
n.d(t,{MA:function(){return a},RN:function(){return c},go:function(){return l},h$:function(){return i},wp:function(){return o}})
let r=null
function s(){return r||(r=function(){let e=!1,t=null,r=!1,s=!1
const a={},o=new Audio(n(17429))
o.preload="auto",o.loop=!0,o.oncanplaythrough=()=>{r=!0,c()},o.load()
const i=document.createElement("audio")
i.src=n(14381),i.volume=.5,i.load()
const l=f(o,.5,(e=>{0===e&&s&&(s=!1,o.pause())}))
function c(){if(!e){s&&(l.fadeTo(0,100),s=!1,o.pause())
for(const e of Object.keys(a)){a[e].destroy()}return}let n=null
for(const e of Object.keys(a)){const r=a[e]
e===t?r.loaded&&(r.play(),n=r):r.stop()}n?l.fadeTo(0,1):(l.fadeTo(.4,.5),r&&!s&&(s=!0,u(o).catch((()=>console.warn("Cannot play background music")))))}function d(e){const t=document.createElement("audio")
t.src=e
let n=!1
const r=f(t,1,(n=>{0===n&&(t.pause(),delete a[e],c())})),s={loaded:!1,play(){n||u(t).then((()=>{n=!0})).catch((()=>console.warn("Cannot play",t.src))),r.fadeTo(1,2)},stop(){r.fadeTo(0,4)},destroy(){t.pause(),delete a[e],c()}}
return t.oncanplaythrough=()=>{s.loaded=!0,c()},t.onended=()=>{delete a[e],c()},t.load(),s}return{enable(){e||(e=!0,c())},disable(){e&&(e=!1,c())},go(){e&&(i.currentTime=0,u(i).catch((()=>console.warn("Cannot play go sound."))))},preview(e){t!==e&&(t=e,e&&!a[e]&&(a[e]=d(e)),c())}}}())}function a(){s()}function o(){return s().enable()}function i(){return s().disable()}function l(){return s().go()}function c(e){return s().preview(e)}function u(e){return new Promise((t=>{t(e.play())}))}function f(e,t,n){let r,s=0,a=0,o=!1
function i(){return(Date.now()-r)/1e3}function l(){return s>t?Math.min(s,t+i()*a):s<t?Math.max(s,t-i()*a):s}function c(){o=!1
const t=l()
e.volume=t,t===s?n&&n(s):o||(o=!0,requestAnimationFrame(c))}return e.volume=t,{fadeTo(e,n){s===e&&n===a||(t=l(),s=e,a=n,r=Date.now(),c())}}}},36013:function(e,t,n){"use strict"
n.d(t,{E:function(){return s}})
var r=n(72416)
class s{constructor(){this.current=void 0,this.total=void 0,this._observable=new r.Z}report(e,t,n){this.current=e,this.total=t,this.extra=n,this._observable.notify()}watch(e){return e(this),this._observable.watch((()=>e(this)))}get progress(){return this.total&&void 0!==this.current&&null!==this.current?this.current/this.total:null}toString(){return void 0!==this.formatter?this.formatter(this):null!==this.progress?this.current+" / "+this.total:""}}},27815:function(e,t,n){"use strict"
n.d(t,{cY:function(){return l},qw:function(){return o},u_:function(){return i}})
var r=n(45128),s=n.n(r)
const a=e=>t=>null!==t.progress?e(t):"",o=a((e=>s()(e.current)+" / "+s()(e.total))),i=a((e=>(e.current/e.total*100).toFixed(1)+"%")),l=a((e=>e.extra+""))},61950:function(e,t,n){"use strict"
var r=n(36013)
t.Z=r.E},61679:function(e,t,n){"use strict"
n.d(t,{Bd:function(){return s},Lg:function(){return o},UP:function(){return a},_W:function(){return l},ak:function(){return i}})
var r=n(27815)
function s(e,t){if(!t)return()=>{}
let n=0
return t.report(0,e),r=>t.report(++n,e,r)}async function a(e,t){if(!e)return t
const n=await Promise.resolve(t)
return!function(e){return e&&e.byteLength}(n)?e.report(1,1):(e.formatter=r.qw,e.report(n.byteLength,n.byteLength)),n}function o(e,t){let n=0,r=0
return async function(...s){e.report(n,++r)
const a=await t.apply(this,s)
return e.report(++n,r),a}}function i(e,t){return e.watch((()=>t.report(e.current,e.total,e.extra)))}function l(e){const t=[]
let n,r=null
function s(){n&&e.report(n.current,n.total,n.extra),t.length>0&&(!n||n.progress>=1)&&function(e){if(n===e)return
r&&(r(),r=null)
n=e,n&&(r=n.watch(s))}(t.shift())}return{add(e){t.push(e),s()}}}},25848:function(e,t,n){"use strict"
var r=n(61950),s=n(61679),a=n(18649),o=n(62270),i=n.n(o),l=n(75239),c=n.n(l),u=n(80425)
class f{constructor(e,t,n){this.resources=e,this.ref=t,this.name=n}read(e){return s.UP(e,this.resources.getBlob(this.ref).then((e=>(0,a.Z)(e).as("arraybuffer"))))}async resolveUrl(){const e=await this.resources.getBlob(this.ref)
return URL.createObjectURL(e)}}class d{constructor(e,t){this.resources=e,this._basePromise=e.base.file(t.path)}load(){return this._promise||(this._promise=this.resources.loadPayload(this._basePromise))}}async function h(e){if("BEMUSEPACK"!==await(0,a.Z)(e.slice(0,10)).as("text"))throw new Error("Invalid magic number")
const t=await(0,a.Z)(e.slice(10,14)).as("arraybuffer"),n=new Uint8Array(t),r=n[0]+(n[1]<<8)+(n[2]<<16)+(n[3]<<24)
return e.slice(14+r)}t.C=class{constructor(e,t={}){this.progress={all:new r.Z,current:new r.Z},this._getMetadata=i().once((async()=>{const e=await this._base.file(this._metadataFilename),t=await e.read(),n=await new Blob([t]).text()
return JSON.parse(n)})),this._getRefs=i().once((async()=>(await this._getMetadata()).refs.map((e=>new d(this,e))))),this._getFileMap=i().once((async()=>{const e=await this._getMetadata(),t=new Map
for(const n of e.files)t.set(n.name.toLowerCase(),n)
return t})),"string"==typeof e&&(e=new u.CA(new URL(e,location.href)))
const n="string"==typeof t.fallback?new u.CA(new URL(t.fallback,location.href)):t.fallback
this._base=e,this._fallback=n,this._fallbackPattern=t.fallbackPattern,this._metadataFilename=t.metadataFilename||"metadata.json"
const a=s._W(this.progress.current)
this.loadPayload=s.Lg(this.progress.all,c()(2,(e=>e.then((e=>e.read((()=>{const e=new r.Z
return a.add(e),e})()))).then((e=>new Blob([e]))).then(h))))}get base(){return this._base}async file(e){const t=(await this._getFileMap()).get(e.toLowerCase())
if(t)return new f(this,t.ref,t.name)
if(this._fallback&&this._fallbackPattern&&this._fallbackPattern.test(e))return this._fallback.file(e)
throw new Error("Unable to find: "+e)}async getBlob([e,t,n]){const r=(await this._getRefs())[e]
return(await r.load()).slice(t,n)}}},20041:function(e,t,n){"use strict"
n.d(t,{V:function(){return s}})
var r=n(80425)
function s(e,t){if(t.includes("://"))return[new r.CA(new URL(t)),t.split("/").slice(-1)[0]]
const n=t.split("/")
let s=e
for(;n.length>1;){const e=n.shift()
s=new a(s,e)}return[s,n[0]]}class a{constructor(e,t){this.base=e,this.dirName=t}async file(e){return this.base.file(`${this.dirName}/${e}`)}}},80425:function(e,t,n){"use strict"
n.d(t,{CA:function(){return o}})
var r=n(93679),s=n(72103)
class a{constructor(e){this.url=e}read(e){return(0,r.Z)(this.url).as("arraybuffer",e)}async resolveUrl(){return Promise.resolve(this.url)}get name(){return(0,s.basename)(this.url)}}class o{constructor(e){this.base=e}async file(e){const t=e.split("/").map((e=>encodeURIComponent(e))).join("/")
return new a(new URL(t,this.base).href)}}t.ZP=a},31396:function(e,t,n){"use strict"
t.Z=class{constructor(e){if(this._callbacks={},this._nextId=1,"function"==typeof e)this.add(e)
else if("object"==typeof e&&e&&e.length)for(let t=0;t<e.length;t++)this.add(e[t])}call(...e){const t=this._callbacks
for(const n in t)t[n](...e)}add(e){const t=this._nextId++
return this._callbacks[t]=e,()=>delete this._callbacks[t]}}},93679:function(e,t,n){"use strict"
var r=n(26826),s=n.n(r),a=n(27815)
t.Z=function(e,{getRetryDelay:t=(()=>1e3+4e3*Math.random())}={}){return{async as(n,r){let o=!1
for(let i=1;;i++)try{return await new Promise(((t,s)=>{const i=new XMLHttpRequest
i.open("GET",e,!0),i.responseType=n,i.onload=()=>{200==+i.status?t(i.response):(403!=+i.status&&404!=+i.status||(o=!0),s(new Error(`Unable to download ${e}: HTTP ${i.status}`)))},i.onerror=()=>s(new Error(`Unable to download ${e}`)),r&&(r.formatter=a.qw,i.onprogress=e=>r.report(e.loaded,e.total)),i.send(null)}))}catch(n){if(console.error(`Unable to download ${e} [attempt ${i}]`,n),i>=3||o)throw n
const r=t()
await s()(r)}}}}},10488:function(e,t,n){"use strict"
n.d(t,{J:function(){return a}})
var r=n(21112)
const s=document.querySelector("#scene-root")
if(!s)throw new Error("The scene root element `#scene-root` not found")
const a=(0,r.s)(s)
t.Z=s},72416:function(e,t,n){"use strict"
var r=n(31396)
t.Z=class{constructor(e){this._callbacks=new r.Z,this._value=e}get value(){return this._value}set value(e){this._value=e,this.notify(e)}notify(e){this._callbacks.call(e)}watch(e){return void 0!==this._value&&e(this._value),this._callbacks.add(e)}}},18649:function(e,t,n){"use strict"
t.Z=function(e){return{as(t){return new Promise((function(n,r){const s=new FileReader
switch(s.onload=function(){n(s.result)},s.onerror=function(){r(new Error("Unable to read from Blob"))},t){case"arraybuffer":s.readAsArrayBuffer(e)
break
case"text":s.readAsText(e)}}))}}}},17429:function(e,t,n){"use strict"
e.exports=n.p+"build/assets/default-0e16b9bd61f8c90968ac.ogg"},14381:function(e,t,n){"use strict"
e.exports=n.p+"build/assets/go-fa33b4ede606d5bb0e7d.ogg"},63624:function(){},33724:function(){},21421:function(){},9181:function(){},1499:function(){}}])

//# sourceMappingURL=music-095cdd0200ff780d8be3.js.map