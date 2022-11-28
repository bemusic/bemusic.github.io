(this.webpackChunk=this.webpackChunk||[]).push([[770],{32136:function(e,t,n){"use strict"
n.d(t,{E3:function(){return s},V4:function(){return l},nF:function(){return c},qH:function(){return i},rE:function(){return u}})
var r=n(92634),o=n.n(r),a=n(28010)
const s=o().Map(),i=e=>t=>t.set(e,a.cT()),u=(e,t)=>n=>n.update(e,a.FY(t)),c=(e,t)=>n=>n.update(e,a.nA(t)),l=e=>t=>t.get(e)},28010:function(e,t,n){"use strict"
n.d(t,{FY:function(){return f},PN:function(){return i},S3:function(){return c},VZ:function(){return u},ae:function(){return a},cT:function(){return o},hg:function(){return s},nA:function(){return p},qH:function(){return d},vU:function(){return l}})
var r=n(93460)
const o=()=>({status:"loading"}),a=e=>({status:"completed",value:e}),s=e=>"loading"===e.status,i=e=>"completed"===e.status,u=e=>"error"===e.status,c=e=>e.value,l=e=>u(e)&&e.error,d=e=>o(),f=e=>(0,r.ZP)((t=>{t.status="completed",t.value=e})),p=e=>(0,r.ZP)((t=>{t.status="error",t.error=e}))},18628:function(e,t,n){"use strict"
n.d(t,{E3:function(){return a},Hd:function(){return l},Rq:function(){return c},eE:function(){return u},fn:function(){return s},iJ:function(){return i}})
var r=n(93460)
const o=e=>({staged:e,committed:e}),a=o(""),s=e=>e.committed,i=e=>e.staged,u=e=>(0,r.ZP)((t=>{t.staged=e})),c=e=>({...e,committed:e.staged}),l=e=>()=>o(e)},31606:function(e,t,n){"use strict"
n.d(t,{AC:function(){return c},E3:function(){return s},Eb:function(){return l},Oh:function(){return i},se:function(){return d},v8:function(){return u}})
var r=n(93460),o=n(62270),a=n.n(o)
const s={selectedSongId:null,selectedChartId:null,selectedChartLevel:1},i=e=>t=>{const n=a().find(e,{id:t.selectedSongId})
return n||e[0]},u=e=>t=>{e=e||[]
const n=a().find(e,{file:t.selectedChartId})
return n||a().minBy(e,(e=>Math.abs(d(e)-t.selectedChartLevel)))},c=e=>(0,r.ZP)((t=>{t.selectedSongId=e})),l=(e,t,n)=>(0,r.ZP)((r=>{r.selectedSongId=e,r.selectedChartId=t,r.selectedChartLevel=n}))
function d(e){return e.info.level+(5===e.info.difficulty?1e3:0)}},40297:function(e,t,n){"use strict"
n.r(t),n.d(t,{acknowledge:function(){return Z},audioInputLatency:function(){return L},changeAudioInputLatency:function(){return I},changeKeyMapping:function(){return d},changeLaneCover:function(){return k},changeLeadTime:function(){return y},changePanelPlacement:function(){return v},changePlayMode:function(){return p},changeScratchPosition:function(){return S},changeSensitivity:function(){return x},changeSpeed:function(){return h},getGauge:function(){return F},getKeyMapping:function(){return l},hasAcknowledged:function(){return R},initWithDataFromStorage:function(){return i},initialState:function(){return s},isAutoVelocityEnabled:function(){return C},isBackgroundAnimationsEnabled:function(){return T},isContinuousAxisEnabled:function(){return N},isGaugeEnabled:function(){return U},isPreviewEnabled:function(){return E},keyboardMapping:function(){return A},laneCover:function(){return P},lastSeenVersion:function(){return G},leadTime:function(){return m},nextKeyToEdit:function(){return K},panelPlacement:function(){return b},playMode:function(){return f},scratchPosition:function(){return w},sensitivity:function(){return B},speed:function(){return g},toggleAutoVelocity:function(){return _},toggleBackgroundAnimations:function(){return M},toggleContinuousAxis:function(){return $},toggleGauge:function(){return D},togglePreview:function(){return O},updateLastSeenVersion:function(){return J}})
var r=n(62270),o=n.n(r),a=n(93460)
const s=n(45995).Of,i=e=>({...s,...e}),u=e=>"1"===e,c=e=>u(e)?"0":"1",l=(e,t)=>n=>n["input.P1.keyboard."+e+"."+t],d=(e,t,n)=>(0,a.ZP)((r=>{r["input.P1.keyboard."+e+"."+t]=n})),f=e=>e["player.P1.mode"],p=e=>(0,a.ZP)((t=>{t["player.P1.mode"]=e,t["player.P1.panel"]="3d"===t["player.P1.panel"]&&"KB"!==e?"center":t["player.P1.panel"]})),g=e=>e["player.P1.speed"],h=e=>(0,a.ZP)((t=>{t["player.P1.speed"]=e})),m=e=>{const t=parseInt(e["player.P1.lead-time"],10)
return t?t<138?138:t:1685},y=e=>(0,a.ZP)((t=>{t["player.P1.lead-time"]=e})),w=e=>"KB"===e["player.P1.mode"]?"off":e["player.P1.scratch"],S=e=>"off"===e?p("KB"):o().flow(p("BM"),(0,a.ZP)((t=>{t["player.P1.scratch"]=e}))),b=e=>e["player.P1.panel"],v=e=>(0,a.ZP)((t=>{t["player.P1.panel"]=e,t["player.P1.mode"]="3d"===e&&"KB"!==t["player.P1.mode"]?"KB":t["player.P1.mode"]})),P=e=>Math.min(50,Math.max(-50,Math.round(100*e["player.P1.lane-cover"])))/100||0,k=e=>(0,a.ZP)((t=>{t["player.P1.lane-cover"]=e})),T=e=>u(e["system.bga.enabled"]),M=(0,a.ZP)((e=>{e["system.bga.enabled"]=c(e["system.bga.enabled"])})),C=e=>u(e["player.P1.auto-velocity"]),_=(0,a.ZP)((e=>{e["player.P1.auto-velocity"]=c(e["player.P1.auto-velocity"])})),E=e=>u(e["system.preview.enabled"]),O=(0,a.ZP)((e=>{e["system.preview.enabled"]=c(e["system.preview.enabled"])})),U=e=>"off"!==F(e),F=e=>e["player.P1.gauge"],D=(0,a.ZP)((e=>{e["player.P1.gauge"]="off"===e["player.P1.gauge"]?"hope":"off"})),A=e=>{const t={}
for(const n of["1","2","3","4","5","6","7","SC","SC2"]){const r="input.P1.keyboard."+f(e)+"."+n
t[n]=e[r]||""}return t},R=e=>t=>"1"===t[`system.ack.${e}`],Z=e=>(0,a.ZP)((t=>{t[`system.ack.${e}`]="1"})),L=e=>+e["system.offset.audio-input"],I=e=>(0,a.ZP)((t=>{t["system.offset.audio-input"]=`${e}`})),N=e=>u(e["gamepad.continuous"]),$=(0,a.ZP)((e=>{e["gamepad.continuous"]=c(e["gamepad.continuous"])})),B=e=>e["gamepad.sensitivity"],x=e=>(0,a.ZP)((t=>{t["gamepad.sensitivity"]=e})),G=e=>e["system.last-seen-version"],J=e=>(0,a.ZP)((t=>{t["system.last-seen-version"]=e})),K=(e,t)=>{const n="left"===t?["SC","SC2","1","2","3","4","5","6","7"]:"right"===t?["1","2","3","4","5","6","7","SC","SC2"]:["1","2","3","4","5","6","7"],r=n.indexOf(e)
return r<0?null:n[r+1]||null}},7063:function(e,t,n){"use strict"
t.Z=function(e,[t,n]){let r=0
for(const o of e){const e=1e3*Math.abs(o)
e<t&&(r+=1),e<n&&(r+=1)}return r}},45995:function(e,t,n){"use strict"
n.d(t,{Mj:function(){return c},Of:function(){return a},Ov:function(){return u},U3:function(){return s}})
var r=n(14090)
let o=localStorage
const a={"player.P1.mode":"KB","input.P1.keyboard.BM.SC":"16","input.P1.keyboard.BM.SC2":"65","input.P1.keyboard.BM.1":"90","input.P1.keyboard.BM.2":"83","input.P1.keyboard.BM.3":"88","input.P1.keyboard.BM.4":"68","input.P1.keyboard.BM.5":"67","input.P1.keyboard.BM.6":"70","input.P1.keyboard.BM.7":"86","input.P1.keyboard.KB.1":"83","input.P1.keyboard.KB.2":"68","input.P1.keyboard.KB.3":"70","input.P1.keyboard.KB.4":"32","input.P1.keyboard.KB.5":"74","input.P1.keyboard.KB.6":"75","input.P1.keyboard.KB.7":"76","player.P1.speed":"1.0","player.P1.lane-cover":"0","player.P1.lead-time":"1685","player.P1.auto-velocity":"0","player.P1.scratch":"left","player.P1.panel":"center","player.P1.gauge":"off","gamepad.continuous":"0","gamepad.sensitivity":"4","system.offset.audio-input":"0","system.offset.audio-visual":"0","system.bga.enabled":"1","system.preview.enabled":"1","system.last-seen-version":"0.0.0","system.ack.twitter":"0","system.ack.deltas":"0","system.ack.finishGame":"0","system.ack.replayGame":"0"},s=new r.EventEmitter
function i(e){return o.getItem(e)||a[e]}function u(e){for(const t of Object.keys(e))o.setItem(t,e[t])
s.emit("changed")}function c(){const e={}
for(const t of Object.keys(a))e[t]=i(t)
return e}var l,d
"off"===i("player.P1.scratch")&&(l="player.P1.scratch",d="left",o.setItem(l,d),s.emit("changed"))},37476:function(e,t,n){"use strict"
n.d(t,{ti:function(){return v},tA:function(){return S},Qb:function(){return b},Z2:function(){return k},c1:function(){return P},c4:function(){return E},tk:function(){return C},So:function(){return M},df:function(){return T},UY:function(){return _},HO:function(){return O},eL:function(){return A},Kr:function(){return R},Lm:function(){return F},Ui:function(){return D},OR:function(){return U},I6:function(){return Z},cM:function(){return j},bT:function(){return L},UX:function(){return $},Gr:function(){return J},tY:function(){return N},J3:function(){return Y},wx:function(){return W},Mg:function(){return q},Gl:function(){return x},jS:function(){return G},Qw:function(){return z},eB:function(){return H}})
var r=n(62270),o=n.n(r)
function a(e,t){return String(e.toLowerCase()).indexOf(t.toLowerCase())>=0}var s=function(e,t){return e.filter((e=>function(e,t){return!t||(a(e.title,t)||a(e.artist,t)||a(e.genre,t))}(e,t)))},i=n(21141),u=n(76819),c=n(99909),l=n(6227),d=n(39176),f=n(99113),p=n(32136),g=n(28010),h=n(18628),m=n(31606),y=n(40297),w=function(e,t){return(n=e,r)=>t[r.type]?t[r.type](r)(n):n}
const S="COLLECTION_LOADING_BEGAN",b="COLLECTION_LOADING_ERRORED",v="COLLECTION_LOADED",P="CUSTOM_SONG_LOADED",k="CUSTOM_SONGS_LOADED",T="MUSIC_SEARCH_TEXT_TYPED",M="MUSIC_SEARCH_TEXT_INITIALIZED",C="MUSIC_SEARCH_DEBOUNCED",_="MUSIC_SONG_SELECTED",E="MUSIC_CHART_SELECTED",O="OPTIONS_LOADED_FROM_STORAGE",U="README_LOADING_STARTED",F="README_LOADED",D="README_LOADING_ERRORED",A="RAGEQUITTED",R="RAGEQUIT_DISMISSED",Z=(0,d.UY)({collections:w(p.E3,{[S]:e=>p.qH(e.url),[b]:e=>p.rE(e.url,e.error),[v]:e=>p.rE(e.url,e.data)}),customSongLoadState:w(g.ae(null),{CUSTOM_SONG_LOAD_STARTED:e=>g.qH,[P]:e=>g.FY()}),customSongs:w([],{[P]:e=>t=>[e.song],[k]:e=>t=>e.songs}),currentCollection:w("",{[S]:e=>t=>""===t?e.url:t}),musicSearchText:w(h.E3,{[T]:e=>h.eE(e.text),[C]:e=>h.Rq,[M]:e=>h.Hd(e.text)}),musicSelection:w(m.E3,{[P]:e=>m.AC(e.song.id),[_]:e=>m.AC(e.songId),[E]:e=>m.Eb(e.songId,e.chartId,e.chartLevel)}),options:w(y.initialState,{[O]:e=>t=>y.initWithDataFromStorage(e.options)}),currentSongReadme:w("Omachi kudasai…",{[U]:e=>e=>"Omachi kudasai…",[D]:e=>t=>"Cannot download "+e.url,[F]:e=>t=>e.text}),rageQuit:w(!1,{[A]:e=>e=>!0,[R]:e=>e=>!1})}),L=e=>e.currentCollection,I=(0,f.P1)((e=>e.collections),L,((e,t)=>p.V4(t)(e))),N=e=>g.hg(I(e)),$=e=>g.vU(I(e)),B=(0,f.P1)((e=>g.S3(I(e))),(e=>e&&(0,c.Z)(e))),x=e=>h.iJ(e.musicSearchText),G=e=>h.fn(e.musicSearchText),{selectGroups:J,selectSongs:K}=(()=>{const e=(0,f.P1)(B,(e=>e&&e.songs||[])),t=(0,f.P1)(e,(e=>e.customSongs),((e,t)=>[...t,...e])),n=(0,f.P1)(t,(e=>(0,l.Z)(e))),r=(0,f.P1)(n,G,((e,t)=>s(e,t))),a=(0,f.P1)(B,(e=>e&&e.songOfTheDayEnabled)),i=(0,f.P1)(r,a,((e,t)=>(0,u.Z)(e,{songOfTheDayEnabled:t})))
return{selectGroups:i,selectSongs:(0,f.P1)(i,(e=>o()(e).map("songs").flatten().value()))}})(),{selectSelectedSong:H,selectChartsForSelectedSong:j,selectSelectedChart:z}=(()=>{const e=e=>e.musicSelection,t=(0,f.P1)(e,K,((e,t)=>m.Oh(t)(e))),n=(0,f.P1)(t,(e=>(0,i.Z)(e&&e.charts||[])))
return{selectSelectedSong:t,selectChartsForSelectedSong:n,selectSelectedChart:(0,f.P1)(e,n,((e,t)=>m.v8(t)(e)))}})(),q=e=>e.currentSongReadme,Y=e=>y.playMode(e.options),W=e=>e.rageQuit},94533:function(e,t,n){"use strict"
n.d(t,{P8:function(){return k},bW:function(){return f},hX:function(){return p},k$:function(){return h},x9:function(){return g},xm:function(){return m}})
var r=n(62270),o=n.n(r),a=n(68796),s=n(56073),i=n.n(s),u=n(68562),c=n(66529)
class l{constructor(){this.get=a.U2,this.set=a.t8,this.del=a.IV}}const d="custom-folder-1"
async function f(e,t){await e.set(d,{handle:t})}async function p(e){await e.del(d)}async function g(e){return e.get(d)}const h=o().once((()=>new l))
async function m(e,t){let n=await g(e)
const{log:r,setStatus:o,updateState:a}=t
for(let s=1;;s++){r(`Iteration #${s} start`)
const i=await y(n,t)
if(i||1!==s){if(!i)break
if(i.nextState&&(n=i.nextState,a(n),o(`Saving state (iteration #${s})`),await e.set(d,n)),!i.moreIterationsNeeded)break}else n={...n,chartFilesScanned:!1}}o("Done scanning.")}async function y(e,t){var n,r,o,a
const s=await async function(e,t){const{log:n,setStatus:r}=t
if(!e){const e="No custom folder set."
return n(e),void r(e)}const{handle:o}=e
if(!o){const e="No folder selected."
return n(e),void r(e)}let a=await o.queryPermission({mode:"read"})
"prompt"===a&&(r("Waiting for permission — please grant access to the folder."),a=await o.requestPermission({mode:"read"}))
if("granted"!==a)return n("Unable to read the folder due to lack of permissions."),void r("Unable to read the folder due to lack of permissions.")
return{state:e,handle:o}}(e,t)
if(!s)return
const{state:i,handle:c}=s
return i.chartFilesScanned?(null!==(r=null===(n=null==i?void 0:i.foldersToUpdate)||void 0===n?void 0:n.length)&&void 0!==r?r:0)>0?async function(e,t,n){var r
const{log:o,setStatus:a}=n
if(((null===(r=null==e?void 0:e.foldersToUpdate)||void 0===r?void 0:r.length)||0)>0){const n=[...e.foldersToUpdate],r=n.length,s=[],i=new Set,c=Date.now()+5e3
for(const[l,d]of n.entries()){i.add(JSON.stringify(d.path))
const n=P(d.path),f=r-l
o(`Updating folder “${n}” (${f} remaining)`)
const p=`Folder “${n}” (${f} remaining)`
a(p)
const g=await S(t,d.path,e.chartFiles||[]),{resources:h,...m}=await(0,u.F)(g,{onMessage:e=>{o(e),a(`${p} ${e}`)}})
if(m.charts.length>0&&s.push({path:d.path,song:m}),Date.now()>c)break}const l=new Set(s.map((e=>JSON.stringify(e.path)))),d=[...(e.songs||[]).filter((e=>!l.has(JSON.stringify(e.path)))),...s],f=n.filter((e=>!i.has(JSON.stringify(e.path))))
return{nextState:{...e,foldersToUpdate:f,songs:d},moreIterationsNeeded:!0}}}(i,c,t):(null!==(a=null===(o=null==i?void 0:i.foldersToRemove)||void 0===o?void 0:o.length)&&void 0!==a?a:0)>0?async function(e,t,n){var r,o
const{log:a,setStatus:s}=n
if((null!==(o=null===(r=e.foldersToRemove)||void 0===r?void 0:r.length)&&void 0!==o?o:0)>0){let t=e.songs||[]
const n=[...e.foldersToRemove],r=n.length,o=new Set,i=Date.now()+5e3
for(const[e,u]of n.entries()){o.add(JSON.stringify(u.path))
const n=P(u.path),c=r-e
a(`Removing folder “${n}” (${c} remaining)`)
if(s(`Folder “${n}” (${c} remaining)`),t=t.filter((e=>!e.path.includes(n))),Date.now()>i)break}const u=n.filter((e=>!o.has(JSON.stringify(e.path))))
return{nextState:{...e,foldersToRemove:u,songs:t},moreIterationsNeeded:!0}}}(i,0,t):void 0:async function(e,t,n){const{log:r,setStatus:o}=n,a=new v(e.chartFiles,!0)
await w(t,a,n)
const s=a.getNewChartFiles(),i=a.getFoldersToUpdate(),u=a.getFoldersToRemove(),c="Scanning done. "+[`Charts: ${s.length}`,`Folders: ${a.getFolderCount()}`,`Folders to update: ${i.length}`,`Folders to remove: ${u.length}`].join("; ")
return r(c),o(c),{nextState:{...e,chartFiles:s,chartFilesScanned:!0,foldersToUpdate:i,foldersToRemove:u},moreIterationsNeeded:!0}}(i,c,t)}async function w(e,t,n,r=[]){let o=0
const{log:a,setStatus:s}=n
for await(const[i,u]of e){const e=[...r,i]
try{if("directory"===u.kind)await w(u,t,n,e)
else if(/\.(bms|bme|bml|bmson)$/i.test(i)){const n=u
await t.addPath(e,{getModifiedDate:async()=>(await n.getFile()).lastModified})}}catch(t){a(`Error while processing ${e.join("/")}: ${t}`),console.error(t)}o++
s(`Scanning for chart files. ${o} entries read. Just processed: ${P(e)}`)}}async function S(e,t,n){const r=await b(e,t),o=n.filter((e=>e.path.length===t.length+1&&t.every(((t,n)=>t===e.path[n]))))
return{fileList:Promise.resolve(o.map((e=>e.path[e.path.length-1]))),async file(e){const t=await r.getFileHandle(e),n=await t.getFile()
return new c.xH(n)}}}async function b(e,t){let n=e
for(const e of t)n=await n.getDirectoryHandle(e)
return n}class v{constructor(e=[],t=!1){this.previous=e,this.fast=t,this.foundFolderSet=new Set,this.updatedFolderSet=new Set,this.newChartFiles=[],this.changedPaths=[],this.existingMap=new Map(o().map(this.previous,(e=>[JSON.stringify(e.path),e]))),this.existingFolderSet=new Set(o().map(this.previous,(e=>JSON.stringify(e.path.slice(0,-1)))))}async addPath(e,t){const n=JSON.stringify(e),r=JSON.stringify(e.slice(0,-1)),o=this.existingMap.get(n)
if(this.foundFolderSet.add(r),o)if(this.fast)this.newChartFiles.push(o)
else{const n=await t.getModifiedDate()
n>o.lastModified?(this.changedPaths.push({path:e,lastModified:n}),this.newChartFiles.push({path:e,lastModified:n}),this.updatedFolderSet.add(r)):this.newChartFiles.push(o)}else{const n=await t.getModifiedDate()
this.changedPaths.push({path:e,lastModified:n}),this.newChartFiles.push({path:e,lastModified:n}),this.updatedFolderSet.add(r)}}getNewChartFiles(){return this.newChartFiles}getFoldersToUpdate(){return[...this.updatedFolderSet].map((e=>({path:JSON.parse(e)})))}getFoldersToRemove(){return[...this.existingFolderSet].filter((e=>!this.foundFolderSet.has(e))).map((e=>({path:JSON.parse(e)})))}getFolderCount(){return this.foundFolderSet.size}}function P(e){return e.join("¥")}async function k(e){const t=await g(e)
if(!t||!t.handle)return[]
const n=t.songs||[],r=new T(t.handle),o=[]
for(const[e,t]of n.entries())try{const n=r.getResources(t.path)
o.push({...t.song,resources:n,custom:!0,id:`__custom_${e}`})}catch(e){console.error(e)}return o}class T{constructor(e){this.rootFolderHandle=e,this.getGrant=i()((async()=>{const e=this.rootFolderHandle
let t=await e.queryPermission({mode:"read"})
if("prompt"===t&&(t=await e.requestPermission({mode:"read"})),"granted"!==t)throw new Error("Permission has not been granted")
return t}))}getResources(e){const t=i()((async()=>(await this.getGrant(),b(this.rootFolderHandle,e))))
return{async file(e){const n=await t(),r=await n.getFileHandle(e),o=await r.getFile()
return new c.xH(o)}}}}},68562:function(e,t,n){"use strict"
function r(e,t={}){const r=t.onMessage||(()=>{})
return e.setLoggingFunction&&e.setLoggingFunction(r),e.fileList.then((t=>function(t){if(t.includes("bemuse-song.json"))return async function(){r('"bemuse-song.json" found...')
const t=await e.file("bemuse-song.json"),n=await t.read(),o=await new Blob([n]).text()
return JSON.parse(o)}()
return async function(t){r(t.length+" file(s) found. Reading them...")
const o=await Promise.all(t.map((async t=>{const n=Date.now(),o=await e.file(t),a=await o.read()
return Date.now()-n>1e3&&r("Read: "+t),{name:t,data:a}}))),a=await new Promise(((e,t)=>{const a=new Worker(new URL(n.p+n.u(91),n.b))
a.onmessage=function({data:t}){"result"===t.type?(e(t.song),a.terminate()):"started"===t.type?r("Analyzing BMS files..."):"progress"===t.type&&r("Loaded "+t.file+" ("+t.current+"/"+t.total+").")},a.onerror=function(e){r("Worker error: "+e),console.error("Worker error: "+e),t(e.error)},a.postMessage({files:o})}))
return a.bemusepack_url=null,a}(t.filter((e=>/\.(bms|bme|bml|bmson)$/i.test(e))))}(t))).then((t=>(t.resources=e,t)))}n.d(t,{F:function(){return r}})},21141:function(e,t,n){"use strict"
var r=n(62270),o=n.n(r),a=n(29893)
t.Z=function(e){return o()(e).filter(a.Z).orderBy([e=>e.info.difficulty>=5?1:0,e=>e.keys,e=>e.info.level]).value()}},76819:function(e,t,n){"use strict"
n.d(t,{Z:function(){return c}})
var r=n(62270),o=n.n(r),a=n(43147)
const s=o().once((()=>{const e=new Date(Date.now()+324e5).toISOString().split("T")[0]
return o().memoize((t=>{const n=(0,a.createHash)("md5")
return n.update(t),n.update(e),n.digest("hex")}))}))
class i{constructor(e,{enabled:t=!0}={}){if(!t)return void(this.ids=new Set)
const n=o().sortBy(e.filter((e=>!e.custom&&!e.tutorial)),(e=>s()(e.id)))
this.ids=new Set(n.slice(0,3).map((e=>e.id)))}isSongOfTheDay(e){return this.ids.has(e)}}const u=[{title:"Custom Song",criteria:e=>e.custom},{title:"Tutorial",criteria:e=>e.tutorial},{title:"Unreleased",criteria:e=>e.unreleased},{title:"Recently Added Songs",criteria:e=>e.added&&Date.now()-Date.parse(e.added)<5184e6,sort:e=>e.added,reverse:!0},{title:"Random Songs of the Day",criteria:(e,t)=>t.songOfTheDay.isSongOfTheDay(e.id)},{title:"☆",criteria:()=>!0}]
var c=function(e,{songOfTheDayEnabled:t=!1}={}){const n={songOfTheDay:new i(e,{enabled:t})},r=u.map((e=>({input:e,output:{title:e.title,songs:[]}})))
for(const t of e)for(const{input:e,output:o}of r)if(e.criteria(t,n)){o.songs.push(t)
break}for(const{input:e,output:t}of r)e.sort?t.songs=o().orderBy(t.songs,[e.sort],[e.reverse?"desc":"asc"]):e.reverse&&t.songs.reverse()
return o()(r).map("output").filter((e=>e.songs.length>0)).value()}},29893:function(e,t,n){"use strict"
t.Z=function(e){return"7K"===e.keys||"5K"===e.keys}},99909:function(e,t,n){"use strict"
var r=n(93460)
const o=(0,r.ZP)(((e,t)=>{t&&(e.songs=t.map((e=>function(e){e.chart_names&&(e=(0,r.ZP)(e,(t=>{t.charts&&(t.charts=t.charts.map((t=>{const n=e.chart_names[t.file]
return n?(0,r.ZP)(t,(e=>{e.info={subtitles:e=>[...e,n]}})):t})))})))
return e}(e))))}))
t.Z=o},6227:function(e,t,n){"use strict"
var r=n(62270),o=n.n(r),a=n(29893)
t.Z=function(e){return o().orderBy(e,[e=>o()(e.charts).filter(a.Z).filter((e=>e.info.difficulty<5)).filter((e=>e.info.level>0)).map((e=>e.info.level)).min(),e=>e.bpm,e=>e.title.toLowerCase()])}},24927:function(e,t,n){"use strict"
n.d(t,{A4:function(){return f},U2:function(){return c},Y6:function(){return s},ZH:function(){return p},e$:function(){return l},gz:function(){return d},u4:function(){return u},zN:function(){return i}})
var r=n(92634),o=n(67573)
const a="CLEAR",s=new r.Map
function i(e){return e.scan(s,u)}function u(e=s,t){switch(t.type){case"PUT":{const n=new r.Map(t.data).map(function(e){return(t,n)=>(0,o.LG)(c(e,n),t)}(e))
return e.merge(n)}case a:return s
default:return e}}function c(e,t){return e.get(t,o.lk)}function l(e,t){return e.has(t)}function d(e,t){return f(new r.Map([[e,t]]))}function f(e){return{type:"PUT",data:e}}function p(){return{type:a}}},51953:function(e,t,n){"use strict"
t.Z=function({md5:e,playMode:t}){return`${e}-${t}`}},74179:function(e,t,n){"use strict"
n.d(t,{Z:function(){return g}})
var r=n(24927),o=n(48274),a=n.n(o)
var s=n(67573),i=n(38500),u=n.n(i),c=n(92634),l=n.n(c),d=n(62270),f=n.n(d),p=n(51953)
var g=function(e){const t=new(u().Bus),n=new(u().Bus),o=new(u().Bus),i=t.toProperty(null).map((t=>t||e.getCurrentUser()))
async function c(t){const n=await e.submitScore(t)
return o.push(n),n}function d(t){return e.retrieveScoreboard(t)}const g=n.bufferWithTime(138).scan(new(l().Map),((e,t)=>e.merge(f().zipObject(t.map(p.Z),t)))).map((e=>e.valueSeq())).skipDuplicates(l().is).map((e=>e.toJS())),h=i.flatMapLatest((function(t){const n={}
{const a=u().mergeAll(g.toEventStream().delay(0).flatMap((function(o){const a=o.filter((e=>!n[(0,p.Z)(e)]))
for(const e of a)n[(0,p.Z)(e)]=!0
const i=t&&a.length>0?e.retrieveMultipleRecords(a):Promise.resolve([])
return u().fromPromise(i.then((function(e){const t=f().zipObject(e.map(p.Z),e.map(s.YO)),n=f().zipObject(a.map(p.Z),a.map((()=>(0,s.YO)(null)))),o=f().defaults(t,n)
return r.A4(o)})).catch((function(e){return console.error("Cannot fetch levels:",e),r.A4({})})))})),o.map((e=>r.gz((0,p.Z)(e),(0,s.YO)(e)))))
return r.zN(a)}})).toProperty(r.Y6),m=h.onValue((()=>{}))
function y(e){return u().later(0,e)}return{"user川":i,"records川":h,signUp:async function(n){const r=await e.signUp(n)
return t.push(r),r},logIn:async function(n){const r=await e.logIn(n)
return t.push(r),r},logOut:function(){return e.logOut().then((()=>t.push(null)))},changePassword:function(t){return Promise.resolve(e.changePassword(t))},submitScore:c,scoreboard:d,Ranking:function(t){const n=function({md5:e,playMode:t}){return a()("string"==typeof e,"md5 must be a string"),a()("string"==typeof t,"playMode must be a string"),{md5:e,playMode:t}}(t),r=new(u().Bus),o=new(u().Bus)
{const e=i.map((function(e){return e?t.score?function(e){const n=(0,s.Zb)(y().merge(r).flatMapLatest((()=>(0,s.j_)(c(t))))),o=n.toEventStream().filter((e=>!(0,s.cw)(e)))
return{"self川":n,"scoreboardTrigger川":o.map((()=>({force:!0})))}}():function(e){return{"self川":p(e),"scoreboardTrigger川":y({force:!1})}}(e):function(){return{"self川":u().constant({status:"unauthenticated",error:null,record:null}),"scoreboardTrigger川":u().once({force:!1})}}()})),a=e.flatMapLatest((e=>e.self川)).toProperty(s.lk),g=e.flatMapLatest((e=>e.scoreboardTrigger川)),h=(l=g,(0,s.Zb)(l.merge(o).flatMapLatest((()=>(0,s.j_)(d(n))))))
return{"state川":u().combineTemplate({self:a,scoreboard:h}).map((function(e){return{data:e.scoreboard.value&&e.scoreboard.value.data,meta:{scoreboard:f().omit(e.scoreboard,"value"),submission:e.self}}})),resubmit:()=>r.push(),reloadScoreboard:()=>o.push()}}var l
function p(t){return(0,s.Zb)(y().merge(r).flatMapLatest((()=>(0,s.j_)(e.retrieveRecord(n,t)))))}},seen:function(e){return n.push(e)},dispose:m}}},67573:function(e,t,n){"use strict"
n.d(t,{LG:function(){return c},YO:function(){return i},Zb:function(){return f},cw:function(){return l},j_:function(){return d},lk:function(){return a},lq:function(){return s}})
var r=n(38500),o=n.n(r)
const a={status:"pending",value:null,error:null}
function s(){return{status:"loading",error:null}}function i(e){return{status:"completed",value:e,error:null}}function u(e){return{status:"error",error:e}}function c(e=a,t){return Object.assign({},e,t)}function l(e){return"loading"===e.status||"pending"===e.status}function d(e){return o().fromPromise(function(e){return Promise.resolve(e).then(i,u)}(e)).startWith({status:"loading",error:null})}function f(e){return e.scan(a,c)}},43793:function(e,t,n){"use strict"
n.d(t,{Z:function(){return g}})
var r=n(17409),o=n(48274),a=n.n(o)
function s(e){return t=>{var n
if(r.Z.isAxiosError(t)){const r=null===(n=t.response)||void 0===n?void 0:n.data,o=null==r?void 0:r.message,a=o?`: ${o}`:""
if(r)throw new Error(`${e}: ${t}${a}`)}throw t}}var i=n(31647),u=n(73850),c=n.n(u),l=n(26826),d=n.n(l)
function f(){let e=[]
const t=new Set
function n(e,t,n){const o=r(e,t),a=o.find((e=>e.entry.player.name===n))
if(!a)return null
return{rank:o.filter((e=>e.entry.score>a.entry.score)).length+1,entry:a.entry}}function r(t,n){return e.filter((e=>e.md5===t&&e.playMode===n)).sort(((e,t)=>t.entry.score-e.entry.score))}return{signUp:async e=>{if(await d()(100),t.has(e.username))throw new Error("Username already taken")
return t.add(e.username),{playerToken:"FAKE!"+e.username}},loginByUsernamePassword:async e=>(await d()(100),{playerToken:"FAKE!"+e.username}),changePassword:async e=>({}),renewPlayerToken:async e=>e.playerToken,submitScore:async t=>{await d()(100)
const{username:r}=p(t.playerToken),o=e=>e.md5===t.md5&&e.playMode===t.playMode&&e.entry.player.name===r,a=e.find(o),s=function(e,t,n){const r=((null==e?void 0:e.playCount)||0)+1,o=+t.score
return!e||o>e.score?Object.assign({},e||{},{id:(null==e?void 0:e.id)||c().generate(),score:o,playCount:r,playNumber:r,combo:+t.combo||0,count:[+t.count[0]||0,+t.count[1]||0,+t.count[2]||0,+t.count[3]||0,+t.count[4]||0],total:+t.total||0,recordedAt:(new Date).toJSON(),player:n}):Object.assign({},e,{playCount:r})}(null==a?void 0:a.entry,t.input,{name:r})
return e=e.filter((e=>!o(e))),e.push({md5:t.md5,playMode:t.playMode,entry:s}),{data:{registerScore:{resultingRow:n(t.md5,t.playMode,r)}}}},retrieveRankingEntries:async t=>{await d()(100)
const{username:n}=p(t.playerToken),r=new Set(t.md5s)
return{data:{me:{records:e.filter((e=>r.has(e.md5)&&e.entry.player.name===n))}}}},retrieveRecord:async e=>{await d()(100)
const{username:t}=p(e.playerToken)
return{data:{chart:{level:{myRecord:n(e.md5,e.playMode,t)}}}}},retrieveScoreboard:async e=>(await d()(100),{data:{chart:{level:{leaderboard:r(e.md5,e.playMode).map(((e,t)=>({rank:t+1,entry:e.entry})))}}}})}}function p(e){if(!e.startsWith("FAKE!"))throw new Error("Invalid player token: "+e)
return{username:e.replace(/^FAKE!/,"")}}var g=class{constructor({fake:e=!1,server:t,storagePrefix:n=(e?"fake-scoreboard.auth":"scoreboard.auth"),storage:o=localStorage}){this._isFake=e,this._scoreboardClient=e?f():function({server:e}){const t=r.Z.create({baseURL:e})
async function n(e,n,r){return(await t.get(`/api/scoreboard/${n}/${r}/mine`,{headers:{Authorization:`Bearer ${e}`}}).catch(s("Unable to retrieve personal records"))).data.data}return{async signUp({username:e,password:n,email:r}){return a()("string"==typeof e,"username must be a string"),a()("string"==typeof n,"password must be a string"),a()("string"==typeof r,"email must be a string"),{playerToken:(await t.post("/api/auth/signup",{username:e,password:n,email:r}).catch(s("Unable to sign up"))).data.playerToken}},async loginByUsernamePassword({username:e,password:n}){return a()("string"==typeof e,"username must be a string"),a()("string"==typeof n,"password must be a string"),{playerToken:(await t.post("/api/auth/login",{username:e,password:n}).catch(s("Unable to log in"))).data.playerToken}},async changePassword({email:e}){return await t.post("/api/auth/reset",{email:e}).catch(s("Unable to request password reset")),{}},async submitScore({playerToken:e,md5:r,playMode:o,input:a}){return await t.post(`/api/scoreboard/${r}/${o}/submit`,{scoreData:a},{headers:{Authorization:`Bearer ${e}`}}).catch(s("Unable to submit score")),{data:{registerScore:{resultingRow:await n(e,r,o)}}}},async retrieveScoreboard({md5:e,playMode:n}){return{data:{chart:{level:{leaderboard:(await t.get(`/api/scoreboard/${e}/${n}/leaderboard`).catch(s("Unable to retrieve leaderboard"))).data.data}}}}},async retrieveRecord({playerToken:e,md5:t,playMode:r}){return{data:{chart:{level:{myRecord:await n(e,t,r)}}}}},async retrieveRankingEntries({playerToken:e,md5s:n}){return{data:{me:{records:(await t.post("/api/scoreboard/records",{md5s:n},{headers:{Authorization:`Bearer ${e}`}}).catch(s("Unable to retrieve ranking entries"))).data.data}}}},async renewPlayerToken({playerToken:e}){return(await t.post("/api/auth/renew",{},{headers:{Authorization:`Bearer ${e}`}}).catch(s("Unable to renew token"))).data.playerToken}}}({server:t,log:()=>{}}),this._storage=o,this._storagePrefix=n,this._updateUserFromStorage(),this._renewPlayerToken()}_updateUserFromStorage(){this._currentUser=(e=>{if(!e)return null
try{const t=JSON.parse(e),n=t.playerToken,r=n.startsWith("FAKE!")?Date.now()+6048e5:1e3*JSON.parse(atob(n.split(".")[1])).exp
return Date.now()>r-864e5?(console.warn("Authentication token is about to expire, skipping!"),null):t}catch(e){return null}})(this._storage[`${this._storagePrefix}.id`])}_renewPlayerToken(){const e=this._currentUser&&this._currentUser.playerToken
if(!e)return
const t=this._currentUser.username
return this._scoreboardClient.renewPlayerToken({playerToken:e}).then((e=>{this._storage[`${this._storagePrefix}.id`]&&(this._storage[`${this._storagePrefix}.id`]=JSON.stringify({username:t,playerToken:e}))}))}getCurrentUser(){return this._currentUser&&this._currentUser.playerToken?{username:this._currentUser.username}:null}isLoggedIn(){return!!this._currentUser}signUp({username:e,password:t,email:n}){return this._scoreboardClient.signUp({username:e,password:t,email:n}).then((t=>(this._storage[`${this._storagePrefix}.id`]=JSON.stringify({username:e,playerToken:t.playerToken}),this._updateUserFromStorage(),this.getCurrentUser())))}logIn({username:e,password:t}){return this._scoreboardClient.loginByUsernamePassword({username:e,password:t}).then((t=>(this._storage[`${this._storagePrefix}.id`]=JSON.stringify({username:e,playerToken:t.playerToken}),this._updateUserFromStorage(),this.getCurrentUser())))}changePassword({email:e}){return this._scoreboardClient.changePassword({email:e})}async logOut(){delete this._storage[`${this._storagePrefix}.id`],this._updateUserFromStorage()}async submitScore(e){if((0,i.isTestModeEnabled)()&&!this._isFake)throw new Error("Cannot submit score in test mode")
if(!this._currentUser)throw new Error("Not logged in")
const t=await this._scoreboardClient.submitScore({playerToken:this._currentUser.playerToken,md5:e.md5,playMode:e.playMode,input:{score:e.score,combo:e.combo,count:e.count,total:e.total,log:e.log}})
return{md5:e.md5,playMode:e.playMode,...h(t.data.registerScore.resultingRow)}}async retrieveRecord(e,t){const n=(await this._scoreboardClient.retrieveRecord({playerToken:this._currentUser.playerToken,md5:e.md5,playMode:e.playMode})).data.chart.level.myRecord
return n&&{md5:e.md5,playMode:e.playMode,...h(n)}}async retrieveScoreboard({md5:e,playMode:t}){return{data:(await this._scoreboardClient.retrieveScoreboard({md5:e,playMode:t})).data.chart.level.leaderboard.map(h)}}async retrieveMultipleRecords(e){return(await this._scoreboardClient.retrieveRankingEntries({playerToken:this._currentUser.playerToken,md5s:e.map((e=>e.md5))})).data.me.records.map((e=>({...h(e),md5:e.md5,playMode:e.playMode})))}}
function h(e){return{rank:e.rank,score:e.entry.score,combo:e.entry.combo,count:e.entry.count,total:e.entry.total,playerName:e.entry.player.name,recordedAt:new Date(e.entry.recordedAt),playCount:e.entry.playCount,playNumber:e.entry.playNumber}}},63624:function(){},33724:function(){},21421:function(){},9181:function(){},1499:function(){}}])

//# sourceMappingURL=770-13b0beab0afc7590645b.js.map