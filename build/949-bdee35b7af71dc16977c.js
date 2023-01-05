"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[949],{41377:function(t,e){e.Z=new AudioContext({latencyHint:"interactive"})},12823:function(t,e,s){var n=s(62270),o=s.n(n),r=s(62158),a=s(89409)
function i(t){t=o().sortBy(t,"time")
let e=0
return{next(s){const n=[]
for(;e<t.length&&s>=t[e].time;e++)n.push(t[e])
return n}}}e.Z=class{constructor({player:t,samples:e,master:s,waveFactory:n,volume:o}){const a=t.notechart
this._waveFactory=n||new r.Z(s,e,a.keysounds,{volume:o}),this._autos=i(a.autos),this._notes=i(a.notes),this._played=new Map,this._autosound=!!t.options.autosound}update(t,e){this._playAutokeysounds(t),this._playAutosounds(t,e),this._handleSoundNotifications(e&&e.notifications.sounds||[])}_playAutokeysounds(t){for(const e of this._autos.next(t+1/30))this._waveFactory.playAuto(e,e.time-t)}_playAutosounds(t,e){const s=this._notes.next(t+1/30),n=e&&e.stats.poor
if(this._autosound&&!n)for(const e of s)this._hitNote(e,e.time-t)}_handleSoundNotifications(t){for(const e of t){const{type:t,note:s}=e
"hit"===t?this._hitNote(s,0,e.judgment):"break"===t?this._breakNote(s):"free"===t&&this._waveFactory.playFree(s,0)}}_hitNote(t,e,s){let n=this._played.get(t)
n||(n=this._waveFactory.playNote(t,e),this._played.set(t,n)),n&&(0,a.Pe)(s)&&n.bad()}_breakNote(t){const e=this._played.get(t)
e&&e.stop()}}},62158:function(t,e,s){e.Z=class{constructor(t,e,s,{volume:n}={}){this._master=t,this._samples=e,this._map=s,this._exclusiveInstances=new Map,this._group=this._master.group({volume:n})}playAuto(t,e,s){return this._play({note:t,delay:e,exclusive:!0,slice:s})}playNote(t,e,s){return this._play({note:t,delay:e,exclusive:!0,slice:s})}playFree(t,e,s){return this._play({note:t,delay:0,exclusive:!1,slice:s})}_play({note:t,delay:e,exclusive:s}){const n=t.keysound
s&&this._stopOldExclusiveSound(n,e)
const o=this._map[n.toLowerCase()]
if(!o)return null
const r=this._samples[o]
if(!r)return null
const a=r.play(e,{start:t.keysoundStart,end:t.keysoundEnd,group:this._group})
return s&&this._exclusiveInstances.set(n,a),a}_stopOldExclusiveSound(t,e){const s=this._exclusiveInstances.get(t)
s&&(setTimeout((()=>s.stop()),1e3*e),this._exclusiveInstances.delete(t))}}},8275:function(t,e,s){var n=s(62),o=s(39879)
const r=["p1_1","p1_2","p1_3","p1_4","p1_5","p1_6","p1_7","start"]
function a(){const t=[]
return window.BEMUSE_TOUCH_STATS.push(t),{record(e){for(const{x:s,y:n}of e)t.push({x:Math.round(s),y:Math.round(n)})},done(){t.length&&(localStorage._stats_touch=JSON.stringify(window.BEMUSE_TOUCH_STATS))}}}window.BEMUSE_TOUCH_STATS=[],e.Z=function(t){let e=null,s=null
const i=o.Z.wrap("input:touch:I",(function(){return t.input})),c=o.Z.wrap("input:touch:SC",(function(n){const o=t.refs.p1_SC
if(!o)return 0
s=null
for(const t of n){for(const e of o)if(_(e.getBounds(),32).contains(t.x,t.y)){s=t.y
break}if(null!==s)break}if(null===s)return e=null,0
null===e&&(e=s)
s>e+24?e=s-24:s<e-24&&(e=s+24)
return s>e+4?-1:s<e-4?1:0})),u=o.Z.wrap("input:touch:B",(function(e,s){const n=t.refs[s]
if(n)for(const t of n){const s=_(t.getBounds())
for(const t of e)if(s.contains(t.x,t.y))return 1}return 0})),l=o.Z.wrap("input:touch:P",(function(t){let e=null,s=null
for(const n of t)if(n.y<f)if(null===e)e=n.y
else{if(null!==s)return 0
s=n.y}return null!==e&&null!==s?Math.abs(e-s):0})),h=new a,d="touch3d"===t.skinData.displayMode,f=d?n.dM(.8).y:550
return{name:"TouchPlugin",get(){const t=i(),e={}
o.Z.enabled&&(o.Z.stats["input:touch:n"]=""+t.length),h.record(t),e.p1_SC=c(t)
for(const s of r)e[s]=u(t,s)
if(d)for(const s of t){const t=n.mO(s.x,s.y)
t&&(e["p1_"+t]=1)}return e.p1_pinch=l(t),e},destroy(){h.done()}}
function _(t,e=4){const s=t.clone()
return s.x-=e,s.y-=e,s.width+=2*e,s.height+=2*e,s}}},79412:function(t,e,s){var n=s(61679),o=s(62270),r=s.n(o),a=s(82520),i=s(45780),c=s.n(i),u=s(27815)
e.Z=class{constructor(t,e,{keysoundCache:s=a.Z}={}){this._assets=t,this._master=e,this._keysoundCache=s}loadFiles(t,e,s){const o=n.Bd(t.length,e),a=n.Bd(t.length,s)
return s&&(s.formatter=u.cY),c()(t,(t=>new Promise((e=>{requestAnimationFrame((()=>{e(this._loadSample(t,o,a))}))}))),{concurrency:64}).then((t=>r()(t).filter().fromPairs().value()))}async _loadSample(t,e,s){const n=(async()=>{if(this._keysoundCache.isCached(t)){const n=await this._keysoundCache.get(t)
return e(t),s(t),n}const n=await this._getFile(t),o=await n.read()
e(t)
const r=await this._decode(o)
return this._keysoundCache.cache(t,r),s(t),r})()
try{const e=await n,s=await this._master.sample(e)
return[t,s]}catch(e){return console.error("Unable to load keysound: "+t,e),null}}_decode(t){return this._master.decode(t)}_getFile(t){return t=t.replace(/\\/g,"/"),this._assets.file(t.replace(/\.\w+$/,".ogg")).catch((()=>this._assets.file(t.replace(/\.\w+$/,".m4a")))).catch((()=>this._assets.file(t.replace(/\.\w+$/,".flac")))).catch((()=>this._assets.file(t.replace(/\.\w+$/,".mp3")))).catch((()=>this._assets.file(t)))}}},72439:function(t,e,s){var n=s(48274),o=s.n(n)
e.Z=function(){const t=new Map
let e
return{receiveSongId(s){e!==s&&(e=s,t.clear())},isEmpty(){return 0===t.size},isCached(e){return t.has(e)},cache(s,n){o()(e,"Expected current song to be set."),t.set(s,n)},get(e){return t.get(e)}}}},82520:function(t,e,s){var n=s(72439)
e.Z=(0,n.Z)()},25848:function(t,e,s){var n=s(61950),o=s(61679),r=s(18649),a=s(62270),i=s.n(a),c=s(75239),u=s.n(c),l=s(80425)
class h{constructor(t,e,s){this.resources=t,this.ref=e,this.name=s}read(t){return o.UP(t,this.resources.getBlob(this.ref).then((t=>(0,r.Z)(t).as("arraybuffer"))))}async resolveUrl(){const t=await this.resources.getBlob(this.ref)
return URL.createObjectURL(t)}}class d{constructor(t,e){this.resources=t,this._basePromise=t.base.file(e.path)}load(){return this._promise||(this._promise=this.resources.loadPayload(this._basePromise))}}async function f(t){if("BEMUSEPACK"!==await(0,r.Z)(t.slice(0,10)).as("text"))throw new Error("Invalid magic number")
const e=await(0,r.Z)(t.slice(10,14)).as("arraybuffer"),s=new Uint8Array(e),n=s[0]+(s[1]<<8)+(s[2]<<16)+(s[3]<<24)
return t.slice(14+n)}e.C=class{constructor(t,e={}){this.progress={all:new n.Z,current:new n.Z},this._getMetadata=i().once((async()=>{const t=await this._base.file(this._metadataFilename),e=await t.read(),s=await new Blob([e]).text()
return JSON.parse(s)})),this._getRefs=i().once((async()=>(await this._getMetadata()).refs.map((t=>new d(this,t))))),this._getFileMap=i().once((async()=>{const t=await this._getMetadata(),e=new Map
for(const s of t.files)e.set(s.name.toLowerCase(),s)
return e})),"string"==typeof t&&(t=new l.CA(new URL(t,location.href)))
const s="string"==typeof e.fallback?new l.CA(new URL(e.fallback,location.href)):e.fallback
this._base=t,this._fallback=s,this._fallbackPattern=e.fallbackPattern,this._metadataFilename=e.metadataFilename||"metadata.json"
const r=o._W(this.progress.current)
this.loadPayload=o.Lg(this.progress.all,u()(2,(t=>t.then((t=>t.read((()=>{const t=new n.Z
return r.add(t),t})()))).then((t=>new Blob([t]))).then(f))))}get base(){return this._base}async file(t){const e=(await this._getFileMap()).get(t.toLowerCase())
if(e)return new h(this,e.ref,e.name)
if(this._fallback&&this._fallbackPattern&&this._fallbackPattern.test(t))return this._fallback.file(t)
throw new Error("Unable to find: "+t)}async getBlob([t,e,s]){const n=(await this._getRefs())[t]
return(await n.load()).slice(e,s)}}},37126:function(t,e,s){s.d(e,{tz:function(){return a},u7:function(){return d}})
var n=s(41377),o=s(18649),r=s(30637)
const a=.001,i=document.createElement("audio")
const c=!i.canPlayType('audio/ogg; codecs="vorbis"')
class u{constructor(t,{volume:e}={}){this._master=t,this._gain=this._master.audioContext.createGain(),null!=e&&(this._gain.gain.value=e),this._gain.connect(this._master.destination)}get destination(){return this._gain}destroy(){this._gain.disconnect(),this._gain=null}}class l{constructor(t,e){this._master=t,this._buffer=e}play(t,e){return new h(this._master,this._buffer,t,e)}destroy(){this._master=null,this._buffer=null}get duration(){return this._buffer.duration}}class h{constructor(t,e,s,n={}){s=s||0,this._master=t
const o=t.audioContext,r=o.createBufferSource()
r.buffer=e,r.onended=()=>this.stop()
const i=o.createGain()
r.connect(i)
const c=n.node||n.group&&n.group.destination||t.destination
i.connect(c),this._source=r,this._gain=this.TEST_node=i
const u=s?Math.max(0,o.currentTime+s):0,l=n.start||0,h=l>0
let d=!1
if(h&&i.gain.setValueAtTime(0,0),void 0!==n.end){const t=Math.max(n.end-l,0)
r.start(u,l,t+a),d=o.currentTime+s+t}else r.start(u,l)
h&&(i.gain.setValueAtTime(0,o.currentTime+s),i.gain.linearRampToValueAtTime(1,o.currentTime+s+a)),!1!==d&&(i.gain.setValueAtTime(1,d),i.gain.linearRampToValueAtTime(0,d+a)),this._master._startPlaying(this)}stop(){this._source&&(this._source.stop(0),this._source.disconnect(),this._gain.disconnect(),this._source=null,this._gain=null,this._master._stoppedPlaying(this),this.onstop&&this.onstop())}bad(){this._source&&(this._source.playbackRate.value=Math.random()<.5?Math.pow(2,1/24):Math.pow(2,-1/24))}destroy(){this.stop()}}function d(t=n.Z){const e=t.createGain(),s=t.createOscillator()
s.frequency.value=440,s.start(t.currentTime+.1),s.stop(t.currentTime+.1),e.connect(t.destination),e.disconnect(),async function(t){return t.resume()}(t).catch((t=>{console.error("[sampling-master] Cannot resume AudioContext",t)}))}e.ZP=class{constructor(t){this._audioContext=t||n.Z,this._samples=[],this._groups=[],this._instances=new Set,this._destination=this._audioContext.destination}unmute(){d(this._audioContext)}get audioContext(){return this._audioContext}get destination(){return this._destination}get currentTime(){return this._audioContext.currentTime}destroy(){if(!this._destroyed){this._destroyed=!0
for(const t of this._samples)t.destroy()
for(const t of this._instances)t.destroy()
this._samples=null,this._instances=null}}decode(t){return this._coerceToArrayBuffer(t).then((t=>this._decodeAudio(t)))}sample(t){return(()=>t.numberOfChannels?Promise.resolve(t):this.decode(t))().then((t=>{if(this._destroyed)throw new Error("SamplingMaster already destroyed!")
const e=new l(this,t)
return this._samples.push(e),e}))}group(t){const e=new u(this,t)
return this._groups.push(e),e}_coerceToArrayBuffer(t){return t instanceof ArrayBuffer?Promise.resolve(t):(0,o.Z)(t).as("arraybuffer")}_decodeAudio(t){return new Promise(((e,s)=>{if(c&&t.byteLength>4){const s=new Uint8Array(t,0,4)
if(79===s[0]&&103===s[1]&&103===s[2]&&83===s[3])return e((0,r.g)(this.audioContext,t))}this.audioContext.decodeAudioData(t,(function(t){e(t)}),(function(t){s(new Error("Unable to decode audio: "+t))}))}))}_startPlaying(t){this._instances.add(t)}_stoppedPlaying(t){this._instances.delete(t)}}},30637:function(t,e,s){s.d(e,{g:function(){return a}})
var n=s(75239)
let o
const r=s.n(n)()(1)
async function a(t,e){const n=await(o||(o=s.e(45).then(s.t.bind(s,9872,17)).then((t=>t.default)).then((t=>(0,eval)(t+"stbvorbis")))),o)
return r((()=>function(t,e,s){return new Promise(((n,o)=>{const r=[]
let a,c=0
t.decode(s,(function(t){if(t.data&&(a=t.sampleRate,r.push(t.data),c+=t.data[0].length),t.error){const e=t.error instanceof Error?t.error:`stbvorbis.js Error: ${t.error}`
o(e)}t.eof&&n(async function(t,e,s,n){if(!s)throw new Error("stbvorbis.js Error: No length")
if(!n)throw new Error("stbvorbis.js Error: No sample rate")
const o=e[0].length,r=t.createBuffer(o,s,n),a=Array(r.numberOfChannels).fill(null).map(((t,e)=>new i(r.getChannelData(e))))
for(const t of e)t.forEach(((t,e)=>{a[e].write(t)}))
return r}(e,r,c,a))}))}))}(n,t,e)))}class i{constructor(t){this.data=t,this.offset=0}write(t){const{offset:e,data:s}=this
for(let n=0;n<t.length;n++)s[n+e]=t[n]
this.offset+=t.length}}}}])

//# sourceMappingURL=949-bdee35b7af71dc16977c.js.map