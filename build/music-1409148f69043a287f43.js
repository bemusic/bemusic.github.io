/*! For license information please see music-1409148f69043a287f43.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[106],{45128:function(e){"use strict"
e.exports=function(e,t){if("string"==typeof e)return o(e)
if("number"==typeof e)return a(e,t)
return null},e.exports.format=a,e.exports.parse=o
var t=/\B(?=(\d{3})+(?!\d))/g,n=/(?:\.0*|(\.[^0]+)0+)$/,r={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},s=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i
function a(e,s){if(!Number.isFinite(e))return null
var a=Math.abs(e),o=s&&s.thousandsSeparator||"",i=s&&s.unitSeparator||"",l=s&&void 0!==s.decimalPlaces?s.decimalPlaces:2,c=Boolean(s&&s.fixedDecimals),u=s&&s.unit||""
u&&r[u.toLowerCase()]||(u=a>=r.pb?"PB":a>=r.tb?"TB":a>=r.gb?"GB":a>=r.mb?"MB":a>=r.kb?"KB":"B")
var d=(e/r[u.toLowerCase()]).toFixed(l)
return c||(d=d.replace(n,"$1")),o&&(d=d.split(".").map((function(e,n){return 0===n?e.replace(t,o):e})).join(".")),d+i+u}function o(e){if("number"==typeof e&&!isNaN(e))return e
if("string"!=typeof e)return null
var t,n=s.exec(e),a="b"
return n?(t=parseFloat(n[1]),a=n[4].toLowerCase()):(t=parseInt(e,10),a="b"),isNaN(t)?null:Math.floor(r[a]*t)}},26826:function(e){"use strict"
const t=()=>{const e=new Error("Delay aborted")
return e.name="AbortError",e},n=({clearTimeout:e,setTimeout:n,willResolve:r})=>(s,{value:a,signal:o}={})=>{if(o&&o.aborted)return Promise.reject(t())
let i,l,c
const u=e||clearTimeout,d=()=>{u(i),c(t())},f=new Promise(((e,t)=>{l=()=>{o&&o.removeEventListener("abort",d),r?e(a):t(a)},c=t,i=(n||setTimeout)(l,s)}))
return o&&o.addEventListener("abort",d,{once:!0}),f.clear=()=>{u(i),i=null,l()},f},r=e=>{const t=n({...e,willResolve:!0})
return t.reject=n({...e,willResolve:!1}),t.range=(e,n,r)=>t(((e,t)=>Math.floor(Math.random()*(t-e+1)+e))(e,n),r),t},s=r()
s.createWithTimers=r,e.exports=s,e.exports.default=s},7527:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return R}})
var r=n(95612),s=n(6560),a=n(63929),o=n(95280),i=n(99909),l=n(98711),c=n(21081),u=n(62270),d=n.n(u),f=n(72610),h=n(87094),p=n.n(h),m=n(21141),b=n(76819),g=n(6227),w=n(16562)
const y={ingame:e=>(0,b.Z)((0,g.Z)(e)),added:e=>[{title:"Sorted by added date",songs:d().reverse(d().sortBy(e,v))}]},v=e=>e.added||(e.initial?"0000-00-00":"9999-99-99")
function E(e){const t=function(e){const t=[],n=(e,...n)=>t.push({keys:n,message:e})
e.unreleased&&n("Not released","unreleased"),e.readme||n("No README file found","README.md"),e.replaygain||n("No replay gain","replaygain"),e.artist_url||n("No artist URL","artist_url"),e.added||e.initial||n("No added date","added"),e.song_url||e.youtube_url||e.long_url||n("No song/YouTube/long URL","song_url","long_url","youtube_url"),e.bms_url||e.exclusive||n("No download URL","bms_url"),e.bmssearch_id||e.exclusive||n("No BMS search ID","bmssearch_id"),e.charts.filter((e=>"5K"===e.keys)).length||n("No 5-key charts","5key")
for(const t of(0,m.Z)(e.charts))t.info.subtitles.length||n("Missing subtitle","chart_names "+t.file)
return t}(e)
return t.length?a.createElement("div",null,t.map(((e,t)=>a.createElement("div",{key:t},e.keys.map((e=>a.createElement("code",{key:e,style:{fontFamily:"Ubuntu Mono",marginRight:"2",padding:3,fontSize:"0.8em",background:"#755"}},e))),e.message)))):null}class _ extends a.Component{constructor(e){super(e),this.state={sort:this.props.initialSort||Object.keys(y)[0],previewUrl:null,previewEnabled:!1}}renderTable(){return a.createElement("table",{style:{borderSpacing:4}},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{colSpan:4},this.renderSorter()," · ",this.renderPreview())),a.createElement("tr",null,a.createElement("th",null,"id"),a.createElement("th",null,"song"),a.createElement("th",null,"warnings"))),a.createElement("tbody",null,this.renderRows()))}renderSorter(){const e=[]
for(const t of Object.keys(y))e.push(a.createElement("button",{key:t,onClick:()=>{this.setState({sort:t})}},t))
return a.createElement("span",null,a.createElement("strong",null,"Sort by:")," ",e)}renderPreview(){const e=a.createElement("button",{onClick:()=>{this.setState((e=>({previewEnabled:!e.previewEnabled})))}},this.state.previewEnabled?"disable":"enable")
return a.createElement("span",null,a.createElement("strong",null,"Music preview:")," ",e,this.state.previewEnabled&&a.createElement(f.Z,{url:this.state.previewUrl}))}renderRows(){const e=y[this.state.sort](this.props.data.songs),t=[]
for(const r of e){t.push(a.createElement("tr",{key:r.title},a.createElement("th",{colSpan:4},r.title)))
for(const e of r.songs)t.push(a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("strong",{onClick:()=>{prompt("",`vim '${e.id}/README.md'`)}},a.createElement("code",{style:{fontFamily:"Ubuntu Mono"}},e.id)),a.createElement("br",null),a.createElement("span",{style:{color:"#8b8685"}},e.added)),a.createElement("td",{style:{textAlign:"center",background:"#353433"}},a.createElement("span",{style:{color:"#8b8685"},onClick:async()=>{const t=await(0,w.Z)(e,this.props.url)
this.setState({previewUrl:t})}},e.genre),a.createElement("br",null),a.createElement("strong",{onClick:()=>{console.log(e),alert(n(85331).inspect(e))}},e.title),a.createElement("br",null),e.artist),a.createElement("td",null,E(e))))}return t}renderMessage(e){return a.createElement("div",{style:{textAlign:"center"}},e)}render(){if(!this.props.data)return this.renderMessage("No data")
try{return this.renderTable()}catch(e){return this.renderMessage(`Error: ${e}`)}}}_.propTypes={data:p().object,url:p().string,initialSort:p().string}
var k=_
class M extends a.Component{constructor(e){super(e),this.state={url:l.Z.server||c.p_,status:"Loading"}}componentDidMount(){(0,c.zD)(this.state.url).then((e=>{this.setState({status:"Load completed",data:e})})).catch((e=>{this.setState({status:"Load error: "+e})}))}render(){return a.createElement("div",null,a.createElement("header",{style:{textAlign:"center"}},a.createElement("h1",null,"Bemuse collection viewer"),a.createElement("div",null,this.state.url,a.createElement("br",null),this.state.status)),a.createElement("div",{style:{padding:20}},a.createElement(k,{data:this.state.data&&(0,i.Z)(this.state.data),url:this.state.url,initialSort:l.Z.sort})))}}var Z=M
function R(){r.MA(),(0,o.render)(a.createElement(Z,null),s.Z)}},21141:function(e,t,n){"use strict"
var r=n(62270),s=n.n(r),a=n(29893)
t.Z=function(e){return s()(e).filter(a.Z).orderBy([e=>e.info.difficulty>=5?1:0,e=>e.keys,e=>e.info.level]).value()}},16562:function(e,t,n){"use strict"
n.d(t,{Z:function(){return s}})
var r=n(40978)
async function s(e,t){if(!e)return null
if(e.tutorial)return null
const{baseResources:n}=(0,r.$)(e,t)
return(await n.file(e.preview_url||"_bemuse_preview.mp3")).resolveUrl()}},40978:function(e,t,n){"use strict"
n.d(t,{$:function(){return o}})
var r=n(80513),s=n(68930),a=n(96011)
function o(e,t){const n=e.resources||new a.CA(new URL(e.path.replace(/\/?$/,"/"),t.replace(/\/?$/,"/")))
return{baseResources:n,assetResources:function(e,t){if(null===t)return e
void 0===t&&(t="assets/metadata.json")
const[n,a]=(0,s.V)(e,t)
return new r.C(n,{metadataFilename:a,fallback:e,fallbackPattern:/\.(?:png|jpg|webm|mp4|m4v)/})}(n,e.bemusepack_url)}}},76819:function(e,t,n){"use strict"
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
return s()(r).map("output").filter((e=>e.songs.length>0)).value()}},21081:function(e,t,n){"use strict"
n.d(t,{d8:function(){return a},p_:function(){return r},zD:function(){return s}})
const r="https://music4.bemuse.ninja/server"
async function s(e,{fetch:t=n.g.fetch}={}){const r=a(e),s=await t(r).then((e=>e.json()))
if(Array.isArray(s.songs))return s
if(Array.isArray(s.charts)){const e=r.replace(/[^/]*$/,"")
return{songs:[{...s,id:"song",path:e}]}}throw new Error(`Invalid server file at ${r}: Does not contain "songs" array.`)}function a(e){return e.endsWith("/bemuse-song.json")?e:e.replace(/\/(?:index\.json)?$/,"")+"/index.json"}},29893:function(e,t,n){"use strict"
t.Z=function(e){return"7K"===e.keys||"5K"===e.keys}},99909:function(e,t,n){"use strict"
var r=n(93460)
const s=(0,r.ZP)(((e,t)=>{t&&(e.songs=t.map((e=>function(e){e.chart_names&&(e=(0,r.ZP)(e,(t=>{t.charts&&(t.charts=t.charts.map((t=>{const n=e.chart_names[t.file]
return n?(0,r.ZP)(t,(e=>{e.info={subtitles:e=>[...e,n]}})):t})))})))
return e}(e))))}))
t.Z=s},6227:function(e,t,n){"use strict"
var r=n(62270),s=n.n(r),a=n(29893)
t.Z=function(e){return s().orderBy(e,[e=>s()(e.charts).filter(a.Z).filter((e=>e.info.difficulty<5)).filter((e=>e.info.level>0)).map((e=>e.info.level)).min(),e=>e.bpm,e=>e.title.toLowerCase()])}},72610:function(e,t,n){"use strict"
n.d(t,{Z:function(){return i}})
var r=n(63929),s=n(87094),a=n.n(s),o=n(95612)
o.MA()
class i extends r.Component{componentDidMount(){o.wp(),o.RN(this.props.url),addEventListener("message",this.handleMessage)}componentWillUnmount(){o.h$(),removeEventListener("message",this.handleMessage)}componentWillReceiveProps(e){o.RN(e.url)}render(){return null}handleMessage({data:e}){"calibration-started"===e.type?o.h$():"calibration-closed"===e.type&&o.wp()}}i.propTypes={url:a().string}},95612:function(e,t,n){"use strict"
n.d(t,{MA:function(){return a},RN:function(){return c},go:function(){return l},h$:function(){return i},wp:function(){return o}})
let r=null
function s(){return r||(r=function(){let e=!1,t=null,r=!1,s=!1
const a={},o=new Audio(n(17429))
o.preload="auto",o.loop=!0,o.oncanplaythrough=()=>{r=!0,c()},o.load()
const i=document.createElement("audio")
i.src=n(14381),i.volume=.5,i.load()
const l=d(o,.5,(e=>{0===e&&s&&(s=!1,o.pause())}))
function c(){if(!e){s&&(l.fadeTo(0,100),s=!1,o.pause())
for(const e of Object.keys(a)){a[e].destroy()}return}let n=null
for(const e of Object.keys(a)){const r=a[e]
e===t?r.loaded&&(r.play(),n=r):r.stop()}n?l.fadeTo(0,1):(l.fadeTo(.4,.5),r&&!s&&(s=!0,u(o).catch((()=>console.warn("Cannot play background music")))))}function f(e){const t=document.createElement("audio")
t.src=e
let n=!1
const r=d(t,1,(n=>{0===n&&(t.pause(),delete a[e],c())})),s={loaded:!1,play(){n||u(t).then((()=>{n=!0})).catch((()=>console.warn("Cannot play",t.src))),r.fadeTo(1,2)},stop(){r.fadeTo(0,4)},destroy(){t.pause(),delete a[e],c()}}
return t.oncanplaythrough=()=>{s.loaded=!0,c()},t.onended=()=>{delete a[e],c()},t.load(),s}return{enable(){e||(e=!0,c())},disable(){e&&(e=!1,c())},go(){e&&(i.currentTime=0,u(i).catch((()=>console.warn("Cannot play go sound."))))},preview(e){t!==e&&(t=e,e&&!a[e]&&(a[e]=f(e)),c())}}}())}function a(){s()}function o(){return s().enable()}function i(){return s().disable()}function l(){return s().go()}function c(e){return s().preview(e)}function u(e){return new Promise((t=>{t(e.play())}))}function d(e,t,n){let r,s=0,a=0,o=!1
function i(){return(Date.now()-r)/1e3}function l(){return s>t?Math.min(s,t+i()*a):s<t?Math.max(s,t-i()*a):s}function c(){o=!1
const t=l()
e.volume=t,t===s?n&&n(s):o||(o=!0,requestAnimationFrame(c))}return e.volume=t,{fadeTo(e,n){s===e&&n===a||(t=l(),s=e,a=n,r=Date.now(),c())}}}},95182:function(e,t,n){"use strict"
n.d(t,{E:function(){return s}})
var r=n(65e3)
class s{constructor(){this.current=void 0,this.total=void 0,this._observable=new r.Z}report(e,t,n){this.current=e,this.total=t,this.extra=n,this._observable.notify()}watch(e){return e(this),this._observable.watch((()=>e(this)))}get progress(){return this.total&&void 0!==this.current&&null!==this.current?this.current/this.total:null}toString(){return void 0!==this.formatter?this.formatter(this):null!==this.progress?this.current+" / "+this.total:""}}},33256:function(e,t,n){"use strict"
n.d(t,{cY:function(){return l},qw:function(){return o},u_:function(){return i}})
var r=n(45128),s=n.n(r)
const a=e=>t=>null!==t.progress?e(t):"",o=a((e=>s()(e.current)+" / "+s()(e.total))),i=a((e=>(e.current/e.total*100).toFixed(1)+"%")),l=a((e=>e.extra+""))},57050:function(e,t,n){"use strict"
var r=n(95182)
t.Z=r.E},26230:function(e,t,n){"use strict"
n.d(t,{Bd:function(){return s},Lg:function(){return o},UP:function(){return a},_W:function(){return l},ak:function(){return i}})
var r=n(33256)
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
n=e,n&&(r=n.watch(s))}(t.shift())}return{add(e){t.push(e),s()}}}},80513:function(e,t,n){"use strict"
var r=n(57050),s=n(26230),a=n(2755),o=n(62270),i=n.n(o),l=n(75239),c=n.n(l),u=n(96011)
class d{constructor(e,t,n){this.resources=e,this.ref=t,this.name=n}read(e){return s.UP(e,this.resources.getBlob(this.ref).then((e=>(0,a.Z)(e).as("arraybuffer"))))}async resolveUrl(){const e=await this.resources.getBlob(this.ref)
return URL.createObjectURL(e)}}class f{constructor(e,t){this.resources=e,this._basePromise=e.base.file(t.path)}load(){return this._promise||(this._promise=this.resources.loadPayload(this._basePromise))}}async function h(e){if("BEMUSEPACK"!==await(0,a.Z)(e.slice(0,10)).as("text"))throw new Error("Invalid magic number")
const t=await(0,a.Z)(e.slice(10,14)).as("arraybuffer"),n=new Uint8Array(t),r=n[0]+(n[1]<<8)+(n[2]<<16)+(n[3]<<24)
return e.slice(14+r)}t.C=class{constructor(e,t={}){this.progress={all:new r.Z,current:new r.Z},this._getMetadata=i().once((async()=>{const e=await this._base.file(this._metadataFilename),t=await e.read(),n=await new Blob([t]).text()
return JSON.parse(n)})),this._getRefs=i().once((async()=>(await this._getMetadata()).refs.map((e=>new f(this,e))))),this._getFileMap=i().once((async()=>{const e=await this._getMetadata(),t=new Map
for(const n of e.files)t.set(n.name.toLowerCase(),n)
return t})),"string"==typeof e&&(e=new u.CA(new URL(e,location.href)))
const n="string"==typeof t.fallback?new u.CA(new URL(t.fallback,location.href)):t.fallback
this._base=e,this._fallback=n,this._fallbackPattern=t.fallbackPattern,this._metadataFilename=t.metadataFilename||"metadata.json"
const a=s._W(this.progress.current)
this.loadPayload=s.Lg(this.progress.all,c()(2,(e=>e.then((e=>e.read((()=>{const e=new r.Z
return a.add(e),e})()))).then((e=>new Blob([e]))).then(h))))}get base(){return this._base}async file(e){const t=(await this._getFileMap()).get(e.toLowerCase())
if(t)return new d(this,t.ref,t.name)
if(this._fallback&&this._fallbackPattern&&this._fallbackPattern.test(e))return this._fallback.file(e)
throw new Error("Unable to find: "+e)}async getBlob([e,t,n]){const r=(await this._getRefs())[e]
return(await r.load()).slice(t,n)}}},68930:function(e,t,n){"use strict"
n.d(t,{V:function(){return s}})
var r=n(96011)
function s(e,t){if(t.includes("://"))return[new r.CA(new URL(t)),t.split("/").slice(-1)[0]]
const n=t.split("/")
let s=e
for(;n.length>1;){const e=n.shift()
s=new a(s,e)}return[s,n[0]]}class a{constructor(e,t){this.base=e,this.dirName=t}async file(e){return this.base.file(`${this.dirName}/${e}`)}}},96011:function(e,t,n){"use strict"
n.d(t,{CA:function(){return o}})
var r=n(37057),s=n(72103)
class a{constructor(e){this.url=e}read(e){return(0,r.Z)(this.url).as("arraybuffer",e)}async resolveUrl(){return Promise.resolve(this.url)}get name(){return(0,s.basename)(this.url)}}class o{constructor(e){this.base=e}async file(e){const t=e.split("/").map((e=>encodeURIComponent(e))).join("/")
return new a(new URL(t,this.base).href)}}t.ZP=a},74278:function(e,t,n){"use strict"
t.Z=class{constructor(e){if(this._callbacks={},this._nextId=1,"function"==typeof e)this.add(e)
else if("object"==typeof e&&e&&e.length)for(let t=0;t<e.length;t++)this.add(e[t])}call(...e){const t=this._callbacks
for(const n in t)t[n](...e)}add(e){const t=this._nextId++
return this._callbacks[t]=e,()=>delete this._callbacks[t]}}},37057:function(e,t,n){"use strict"
var r=n(26826),s=n.n(r),a=n(33256)
t.Z=function(e,{getRetryDelay:t=(()=>1e3+4e3*Math.random())}={}){return{async as(n,r){let o=!1
for(let i=1;;i++)try{return await new Promise(((t,s)=>{const i=new XMLHttpRequest
i.open("GET",e,!0),i.responseType=n,i.onload=()=>{200==+i.status?t(i.response):(403!=+i.status&&404!=+i.status||(o=!0),s(new Error(`Unable to download ${e}: HTTP ${i.status}`)))},i.onerror=()=>s(new Error(`Unable to download ${e}`)),r&&(r.formatter=a.qw,i.onprogress=e=>r.report(e.loaded,e.total)),i.send(null)}))}catch(n){if(console.error(`Unable to download ${e} [attempt ${i}]`,n),i>=3||o)throw n
const r=t()
await s()(r)}}}}},6560:function(e,t){"use strict"
t.Z=document.querySelector("#scene-root")},65e3:function(e,t,n){"use strict"
var r=n(74278)
t.Z=class{constructor(e){this._callbacks=new r.Z,this._value=e}get value(){return this._value}set value(e){this._value=e,this.notify(e)}notify(e){this._callbacks.call(e)}watch(e){return void 0!==this._value&&e(this._value),this._callbacks.add(e)}}},2755:function(e,t,n){"use strict"
t.Z=function(e){return{as(t){return new Promise((function(n,r){const s=new FileReader
switch(s.onload=function(){n(s.result)},s.onerror=function(){r(new Error("Unable to read from Blob"))},t){case"arraybuffer":s.readAsArrayBuffer(e)
break
case"text":s.readAsText(e)}}))}}}},17429:function(e,t,n){"use strict"
e.exports=n.p+"build/assets/default-0e16b9bd61f8c90968ac.ogg"},14381:function(e,t,n){"use strict"
e.exports=n.p+"build/assets/go-fa33b4ede606d5bb0e7d.ogg"},63624:function(){},33724:function(){},21421:function(){},9181:function(){},1499:function(){}}])

//# sourceMappingURL=music-1409148f69043a287f43.js.map