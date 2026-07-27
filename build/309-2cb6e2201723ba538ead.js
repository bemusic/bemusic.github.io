(this.webpackChunk=this.webpackChunk||[]).push([[309],{65144:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
const n=function(e,[t,r]){let n=0
for(const s of e){const e=1e3*Math.abs(s)
e<t&&(n+=1),e<r&&(n+=1)}return n}},64239:(e,t,r)=>{"use strict"
r.d(t,{P8:()=>F,bW:()=>h,hX:()=>p,k$:()=>m,x9:()=>g,xm:()=>y})
var n=r(89599),s=r.n(n),a=r(5106),o=r(56073),i=r.n(o),d=r(13604),c=r(19294)
class l{constructor(){this.get=a.U2,this.set=a.t8,this.del=a.IV}}const u="custom-folder-1"
async function h(e,t){await e.set(u,{handle:t})}async function p(e){await e.del(u)}async function g(e){return e.get(u)}const m=s().once(()=>new l)
async function y(e,t){let r=await g(e)
const{log:n,setStatus:s,updateState:a}=t
for(let o=1;;o++){n(`Iteration #${o} start`)
const i=await f(r,t)
if(i||1!==o){if(!i)break
if(i.nextState&&(r=i.nextState,a(r),s(`Saving state (iteration #${o})`),await e.set(u,r)),!i.moreIterationsNeeded)break}else r={...r,chartFilesScanned:!1}}s("Done scanning.")}async function f(e,t){var r,n,s,a
const o=await async function(e,t){const{log:r,setStatus:n}=t
if(!e){const e="No custom folder set."
return r(e),void n(e)}const{handle:s}=e
if(!s){const e="No folder selected."
return r(e),void n(e)}let a=await s.queryPermission({mode:"read"})
"prompt"===a&&(n("Waiting for permission — please grant access to the folder."),a=await s.requestPermission({mode:"read"}))
if("granted"!==a)return r("Unable to read the folder due to lack of permissions."),void n("Unable to read the folder due to lack of permissions.")
return{state:e,handle:s}}(e,t)
if(!o)return
const{state:i,handle:c}=o
return i.chartFilesScanned?(null!==(n=null===(r=null==i?void 0:i.foldersToUpdate)||void 0===r?void 0:r.length)&&void 0!==n?n:0)>0?async function(e,t,r){var n
const{log:s,setStatus:a}=r
if(((null===(n=null==e?void 0:e.foldersToUpdate)||void 0===n?void 0:n.length)||0)>0){const r=[...e.foldersToUpdate],n=r.length,o=[],i=new Set,c=Date.now()+5e3
for(const[l,u]of r.entries()){i.add(JSON.stringify(u.path))
const r=k(u.path),h=n-l
s(`Updating folder “${r}” (${h} remaining)`)
const p=`Folder “${r}” (${h} remaining)`
a(p)
const g=await b(t,u.path,e.chartFiles||[]),{resources:m,...y}=await(0,d.F)(g,{onMessage:e=>{s(e),a(`${p} ${e}`)}})
if(y.charts.length>0&&o.push({path:u.path,song:y}),Date.now()>c)break}const l=new Set(o.map(e=>JSON.stringify(e.path))),u=[...(e.songs||[]).filter(e=>!l.has(JSON.stringify(e.path))),...o],h=r.filter(e=>!i.has(JSON.stringify(e.path)))
return{nextState:{...e,foldersToUpdate:h,songs:u},moreIterationsNeeded:!0}}}(i,c,t):(null!==(a=null===(s=null==i?void 0:i.foldersToRemove)||void 0===s?void 0:s.length)&&void 0!==a?a:0)>0?async function(e,t,r){var n,s
const{log:a,setStatus:o}=r
if((null!==(s=null===(n=e.foldersToRemove)||void 0===n?void 0:n.length)&&void 0!==s?s:0)>0){let t=e.songs||[]
const r=[...e.foldersToRemove],n=r.length,s=new Set,i=Date.now()+5e3
for(const[e,d]of r.entries()){s.add(JSON.stringify(d.path))
const r=k(d.path),c=n-e
a(`Removing folder “${r}” (${c} remaining)`)
if(o(`Folder “${r}” (${c} remaining)`),t=t.filter(e=>!e.path.includes(r)),Date.now()>i)break}const d=r.filter(e=>!s.has(JSON.stringify(e.path)))
return{nextState:{...e,foldersToRemove:d,songs:t},moreIterationsNeeded:!0}}}(i,0,t):void 0:async function(e,t,r){const{log:n,setStatus:s}=r,a=new S(e.chartFiles,!0)
await w(t,a,r)
const o=a.getNewChartFiles(),i=a.getFoldersToUpdate(),d=a.getFoldersToRemove(),c="Scanning done. "+[`Charts: ${o.length}`,`Folders: ${a.getFolderCount()}`,`Folders to update: ${i.length}`,`Folders to remove: ${d.length}`].join("; ")
return n(c),s(c),{nextState:{...e,chartFiles:o,chartFilesScanned:!0,foldersToUpdate:i,foldersToRemove:d},moreIterationsNeeded:!0}}(i,c,t)}async function w(e,t,r,n=[]){let s=0
const{log:a,setStatus:o}=r
for await(const[i,d]of e){const e=[...n,i]
try{if("directory"===d.kind)await w(d,t,r,e)
else if(/\.(bms|bme|bml|bmson)$/i.test(i)){const r=d
await t.addPath(e,{getModifiedDate:async()=>(await r.getFile()).lastModified})}}catch(t){a(`Error while processing ${e.join("/")}: ${t}`),console.error(t)}s++
o(`Scanning for chart files. ${s} entries read. Just processed: ${k(e)}`)}}async function b(e,t,r){const n=await v(e,t),s=r.filter(e=>e.path.length===t.length+1&&t.every((t,r)=>t===e.path[r]))
return{fileList:Promise.resolve(s.map(e=>e.path[e.path.length-1])),async file(e){const t=await n.getFileHandle(e),r=await t.getFile()
return new c.xH(r)}}}async function v(e,t){let r=e
for(const e of t)r=await r.getDirectoryHandle(e)
return r}class S{constructor(e=[],t=!1){this.previous=e,this.fast=t,this.foundFolderSet=new Set,this.updatedFolderSet=new Set,this.newChartFiles=[],this.changedPaths=[],this.existingMap=new Map(s().map(this.previous,e=>[JSON.stringify(e.path),e])),this.existingFolderSet=new Set(s().map(this.previous,e=>JSON.stringify(e.path.slice(0,-1))))}async addPath(e,t){const r=JSON.stringify(e),n=JSON.stringify(e.slice(0,-1)),s=this.existingMap.get(r)
if(this.foundFolderSet.add(n),s)if(this.fast)this.newChartFiles.push(s)
else{const r=await t.getModifiedDate()
r>s.lastModified?(this.changedPaths.push({path:e,lastModified:r}),this.newChartFiles.push({path:e,lastModified:r}),this.updatedFolderSet.add(n)):this.newChartFiles.push(s)}else{const r=await t.getModifiedDate()
this.changedPaths.push({path:e,lastModified:r}),this.newChartFiles.push({path:e,lastModified:r}),this.updatedFolderSet.add(n)}}getNewChartFiles(){return this.newChartFiles}getFoldersToUpdate(){return[...this.updatedFolderSet].map(e=>({path:JSON.parse(e)}))}getFoldersToRemove(){return[...this.existingFolderSet].filter(e=>!this.foundFolderSet.has(e)).map(e=>({path:JSON.parse(e)}))}getFolderCount(){return this.foundFolderSet.size}}function k(e){return e.join("¥")}async function F(e){const t=await g(e)
if(!t||!t.handle)return[]
const r=t.songs||[],n=new U(t.handle),s=[]
for(const[e,t]of r.entries())try{const r=n.getResources(t.path)
s.push({...t.song,resources:r,custom:!0,id:`__custom_${e}`})}catch(e){console.error(e)}return s}class U{constructor(e){this.rootFolderHandle=e,this.getGrant=i()(async()=>{const e=this.rootFolderHandle
let t=await e.queryPermission({mode:"read"})
if("prompt"===t&&(t=await e.requestPermission({mode:"read"})),"granted"!==t)throw new Error("Permission has not been granted")
return t})}getResources(e){const t=i()(async()=>(await this.getGrant(),v(this.rootFolderHandle,e)))
return{async file(e){const r=await t(),n=await r.getFileHandle(e),s=await n.getFile()
return new c.xH(s)}}}}},13604:(e,t,r)=>{"use strict"
function n(e,t={}){const n=t.onMessage||(()=>{})
return e.setLoggingFunction&&e.setLoggingFunction(n),e.fileList.then(t=>function(t){if(t.includes("bemuse-song.json"))return async function(){n('"bemuse-song.json" found...')
const t=await e.file("bemuse-song.json"),r=await t.read(),s=await new Blob([r]).text()
return JSON.parse(s)}()
return async function(t){n(t.length+" file(s) found. Reading them...")
const s=await Promise.all(t.map(async t=>{const r=Date.now(),s=await e.file(t),a=await s.read()
return Date.now()-r>1e3&&n("Read: "+t),{name:t,data:a}})),a=await new Promise((e,t)=>{const a=new Worker(new URL(r.p+r.u(340),r.b))
a.onmessage=function({data:t}){"result"===t.type?(e(t.song),a.terminate()):"started"===t.type?n("Analyzing BMS files..."):"progress"===t.type&&n("Loaded "+t.file+" ("+t.current+"/"+t.total+").")},a.onerror=function(e){n("Worker error: "+e),console.error("Worker error: "+e),t(e.error)},a.postMessage({files:s})})
return a.bemusepack_url=null,a}(t.filter(e=>/\.(bms|bme|bml|bmson)$/i.test(e)))}(t)).then(t=>(t.resources=e,t))}r.d(t,{F:()=>n})},86716:(e,t,r)=>{"use strict"
r.d(t,{A4:()=>i,E3:()=>u,U2:()=>g,ZH:()=>d,e$:()=>m,gz:()=>o,u4:()=>p,zN:()=>h})
var n=r(48514),s=r(23903),a=r(24521)
function o(e,t){return i({[e]:t})}function i(e){return{type:c,data:e}}function d(){return{type:l}}const c="PUT",l="CLEAR",u=()=>a.ZP.Map()
function h(e){return e.pipe((0,s.R)(p,u()))}function p(e=u(),t){switch(t.type){case c:{const r=a.ZP.Map(t.data)
return e.merge(r)}case l:return u()
default:return e}}function g(e,t){return e.get(t,n.lk)}function m(e,t){return e.has(t)}},31522:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>x})
var n=r(86716),s=r(48514),a=r(24521),o=r(95770),i=r(46637),d=r(52505),c=r(99273),l=r(38530),u=r(5929),h=r(61201),p=r(6493),g=r(72453),m=r(73747),y=r(19663),f=r(83167),w=r(23903),b=r(5999),v=r(24244)
const S=["KB","BM"]
var k=r(48274),F=r.n(k)
function U({md5:e,playMode:t}){var r
return F()("string"==typeof e,"md5 must be a string"),F()("string"==typeof t,"playMode must be a string"),F()((r=t,S.includes(r)),"playMode must be a MappingMode"),{md5:e,playMode:t}}class M{constructor(e,t){this.onFetch=e,this.getMd5=t,this.pending=null}load(e){if(!this.pending){const e=new Set
this.pending={set:e,promise:new Promise(t=>{setTimeout(()=>{this.pending=null
const r=Array.from(e)
t(this.onFetch(r).then(e=>{const t=new Map
for(const r of e){const e=this.getMd5(r),n=t.get(e)||[]
n.push(r),t.set(e,n)}return t}))},138)})}}return this.pending.set.add(e),this.pending.promise.then(t=>t.get(e)||[])}}var T=r(89599),_=r.n(T)
const R=function({md5:e,playMode:t}){return`${e}-${t}`}
var P=r(26106),$=r(40347)
const x=class{constructor(e){this.service=e,this.user口=new o.x,this.seen口=new o.x,this.submitted口=new o.x,this.user川=this.user口.pipe((0,i.O)(null)).pipe((0,d.d)(1)).pipe((0,c.U)(e=>e||this.service.getCurrentUser())),this.batchedRecordFetcher=new M(e=>this.service.retrieveMultipleRecords(e.map(e=>({md5:e}))),e=>e.md5),this.allSeen川=this.allSeen川ForJustSeen川(this.seen口),this.fetchRecords=async(e,t,r)=>{const a=e.filter(e=>!r.has(R(e)))
for(const e of a)r.add(R(e))
const o=t&&a.length>0?await this.service.retrieveMultipleRecords(a):[]
try{const e=_().zipObject(o.map(R),o.map(s.d8)),t=_().zipObject(a.map(R),a.map(()=>(0,s.d8)(null))),r=_().defaults(e,t)
return(0,n.A4)(r)}catch(e){return console.error("Cannot fetch levels:",e),(0,n.A4)({})}},this.records川ForUser=e=>{const t=new Set,r=(0,l.T)(this.allSeen川.pipe((0,u.b)(r=>(0,h.D)(this.fetchRecords(r,e,t)))),this.submitted口.pipe((0,c.U)(e=>(0,n.gz)(R(e),(0,s.d8)(e)))))
return(0,n.zN)(r)},this.records川=this.user川.pipe((0,p.w)(this.records川ForUser)).pipe((0,i.O)((0,n.E3)())).pipe((0,d.d)(1)),this.conformState=({self:e,scoreboard:t})=>{var r,n
return{data:"completed"===t.status&&null!==(n=null===(r=t.value)||void 0===r?void 0:r.data)&&void 0!==n?n:null,meta:{scoreboard:_().omit(t,"value"),submission:{...e}}}},this.self川ForUser=(e,t)=>this.user川.pipe((0,p.w)(r=>r?(e=>!!e.score)(t)?this.submissionModel(e,t):this.viewRecordModel(e,t):this.unauthenticatedRankingModel())).pipe((0,i.O)(s.lk)).pipe((0,d.d)(1)),this.unauthenticatedRankingModel=()=>(0,g.of)({status:"unauthenticated",error:null,record:null}),this.submissionModel=(e,t)=>(0,l.T)(this.asap川([[]]),e).pipe((0,p.w)(()=>(0,s.JX)(this.submitScore(t)))),this.viewRecordModel=(e,t)=>(0,l.T)(this.asap川([[]]),e).pipe((0,p.w)(()=>(0,s.JX)(this.service.retrieveRecord(t)))),this.getScoreboardState川=(e,t)=>(0,l.T)(this.asap川([[]]),e).pipe((0,p.w)(()=>(0,s.JX)(this.scoreboard(t)))),this.asap川=e=>(0,m.x)(e,y.E)}getCurrentUser(){return this.service.getCurrentUser()}async signUp(e){const t=await this.service.signUp(e)
return this.user口.next(t),P.E.invalidateQueries({queryKey:$.FT}),t}async logIn(e){const t=await this.service.logIn(e)
return this.user口.next(t),P.E.invalidateQueries({queryKey:$.FT}),t}getPersonalRecordsByMd5(e){return this.service.getCurrentUser()?this.batchedRecordFetcher.load(e):[]}changePassword(e){return Promise.resolve(this.service.changePassword(e))}async logOut(){await this.service.logOut(),this.user口.next(null),P.E.invalidateQueries({queryKey:$.FT})}async submitScore(e){if(!this.service.getCurrentUser())throw new Error("Unauthenticated.")
const t=await this.service.submitScore(e)
return this.submitted口.next(t),t}scoreboard(e){return this.service.retrieveScoreboard(e)}retrievePersonalRankingEntry(e){return this.service.getCurrentUser()?this.service.retrieveRecord(e):null}allSeen川ForJustSeen川(e){return e.pipe((0,f.e)(138)).pipe((0,w.R)((e,t)=>e.merge(a.ZP.Map(_().zipObject(t.map(R),t))),a.ZP.Map())).pipe((0,c.U)(e=>e.valueSeq())).pipe((0,b.x)(a.ZP.is)).pipe((0,c.U)(e=>e.toArray()))}dispose(){}Ranking(e){const t=U(e),r=new o.x,n=new o.x,s=this.self川ForUser(r,e),a=s.pipe((0,p.w)(()=>this.getScoreboardState川(n,t))).pipe((0,d.d)(1))
return{state川:(0,v.a)({self:s,scoreboard:a}).pipe((0,c.U)(this.conformState)),resubmit:()=>r.next(),reloadScoreboard:()=>n.next()}}seen(e){return this.seen口.next(e)}}},48514:(e,t,r)=>{"use strict"
r.d(t,{JX:()=>l,V_:()=>o,cw:()=>c,d8:()=>i,lk:()=>a,vU:()=>d})
var n=r(61201),s=r(46637)
const a={status:"pending"}
function o(){return{status:"loading"}}function i(e){return{status:"completed",value:e}}function d(e){return{status:"error",error:e}}function c(e){return"loading"===e.status||"pending"===e.status}function l(e){return(0,n.D)(function(e){return Promise.resolve(e).then(i,d)}(e)).pipe((0,s.O)({status:"loading"}))}},40347:(e,t,r)=>{"use strict"
r.d(t,{FT:()=>n,IF:()=>o,Om:()=>a,sv:()=>s,zW:()=>i})
const n=["online"],s=["online","currentUser"],a=e=>["online","personalRecord",e],o=(e,t)=>["online","leaderboard",e,t],i=(e,t)=>["online","personalRankingEntry",e,t]},99416:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>g})
var n=r(73850),s=r.n(n),a=r(26826),o=r.n(a)
function i(){let e=[],t=1
const r=(r,n)=>{const s={addEntry:(a,o,i)=>(e.push({md5:r,playMode:n,entry:{id:"preexisting"+t++,score:o,total:i.reduce((e,t)=>e+t,0),combo:1,count:i,playNumber:1,playCount:1,recordedAt:"2022-12-31T23:59:59.999Z",player:{name:a}}}),s)}
return s}
r("12345670123456789abcdef89abemuse","TS").addEntry("tester",111111,[0,0,0,1,0]).addEntry("rival",222222,[0,0,0,1,0]).addEntry("unbeatable",555554,[1,0,0,0,0]),r("fb3dab834591381a5b8188bc2dc9c4b7","KB").addEntry("tester",543210,[9,1,0,0,0]).addEntry("tester2",123456,[0,1,5,9,0])
const n=new Set(["taken"])
function a(e,t,r){const n=i(e,t),s=n.find(e=>e.entry.player.name===r)
if(!s)return null
return{rank:n.filter(e=>e.entry.score>s.entry.score).length+1,entry:s.entry}}function i(t,r){return e.filter(e=>e.md5===t&&e.playMode===r).sort((e,t)=>t.entry.score-e.entry.score)}return{signUp:async e=>{if(await o()(100),n.has(e.username))throw new Error("Username already taken")
return n.add(e.username),{playerToken:"FAKE!"+e.username}},loginByUsernamePassword:async e=>(await o()(100),{playerToken:"FAKE!"+e.username}),changePassword:async e=>({}),renewPlayerToken:async e=>e.playerToken,submitScore:async t=>{await o()(100)
const{username:r}=d(t.playerToken),n=e=>e.md5===t.md5&&e.playMode===t.playMode&&e.entry.player.name===r,i=e.find(n),c=function(e,t,r){const n=((null==e?void 0:e.playCount)||0)+1,a=+t.score
return!e||a>e.score?Object.assign({},e||{},{id:(null==e?void 0:e.id)||s().generate(),score:a,playCount:n,playNumber:n,combo:+t.combo||0,count:[+t.count[0]||0,+t.count[1]||0,+t.count[2]||0,+t.count[3]||0,+t.count[4]||0],total:+t.total||0,recordedAt:(new Date).toJSON(),player:r}):Object.assign({},e,{playCount:n})}(null==i?void 0:i.entry,t.input,{name:r})
return e=e.filter(e=>!n(e)),e.push({md5:t.md5,playMode:t.playMode,entry:c}),{data:{registerScore:{resultingRow:a(t.md5,t.playMode,r)}}}},retrieveRankingEntries:async t=>{if(!t.md5s.every(e=>"string"==typeof e))throw console.error("Invalid md5s...",t.md5s),new Error("Invalid md5s (this is a programmer error)")
await o()(100)
const{username:r}=d(t.playerToken),n=new Set(t.md5s)
return{data:{me:{records:e.filter(e=>n.has(e.md5)&&e.entry.player.name===r)}}}},retrieveRecord:async e=>{await o()(100)
const{username:t}=d(e.playerToken)
return{data:{chart:{level:{myRecord:a(e.md5,e.playMode,t)}}}}},retrieveScoreboard:async e=>(await o()(100),{data:{chart:{level:{leaderboard:i(e.md5,e.playMode).map((e,t)=>({rank:t+1,entry:e.entry}))}}}})}}function d(e){if(!e.startsWith("FAKE!"))throw new Error("Invalid player token: "+e)
return{username:e.replace(/^FAKE!/,"")}}var c=r(65294),l=r(48274),u=r.n(l)
function h(e){return t=>{var r
if(c.Z.isAxiosError(t)){const n=null===(r=t.response)||void 0===r?void 0:r.data,s=null==n?void 0:n.message
if(n)throw new Error(`${e}: ${t}${s?`: ${s}`:""}`)}throw t}}var p=r(10220)
const g=class{constructor({fake:e=!1,server:t,storagePrefix:r=(e?"fake-scoreboard.auth":"scoreboard.auth"),storage:n=localStorage}){this._isFake=e,this._scoreboardClient=e||!t?i():function({server:e}){const t=c.Z.create({baseURL:e})
async function r(e,r,n){return(await t.get(`/api/scoreboard/${r}/${n}/mine`,{headers:{Authorization:`Bearer ${e}`}}).catch(h("Unable to retrieve personal records"))).data.data}return{signUp:async({username:e,password:r,email:n})=>(u()("string"==typeof e,"username must be a string"),u()("string"==typeof r,"password must be a string"),u()("string"==typeof n,"email must be a string"),{playerToken:(await t.post("/api/auth/signup",{username:e,password:r,email:n}).catch(h("Unable to sign up"))).data.playerToken}),loginByUsernamePassword:async({username:e,password:r})=>(u()("string"==typeof e,"username must be a string"),u()("string"==typeof r,"password must be a string"),{playerToken:(await t.post("/api/auth/login",{username:e,password:r}).catch(h("Unable to log in"))).data.playerToken}),changePassword:async({email:e})=>(await t.post("/api/auth/reset",{email:e}).catch(h("Unable to request password reset")),{}),submitScore:async({playerToken:e,md5:n,playMode:s,input:a})=>(await t.post(`/api/scoreboard/${n}/${s}/submit`,{scoreData:a},{headers:{Authorization:`Bearer ${e}`}}).catch(h("Unable to submit score")),{data:{registerScore:{resultingRow:await r(e,n,s)}}}),retrieveScoreboard:async({md5:e,playMode:r})=>({data:{chart:{level:{leaderboard:(await t.get(`/api/scoreboard/${e}/${r}/leaderboard`).catch(h("Unable to retrieve leaderboard"))).data.data}}}}),retrieveRecord:async({playerToken:e,md5:t,playMode:n})=>({data:{chart:{level:{myRecord:await r(e,t,n)}}}}),retrieveRankingEntries:async({playerToken:e,md5s:r})=>({data:{me:{records:(await t.post("/api/scoreboard/records",{md5s:r},{headers:{Authorization:`Bearer ${e}`}}).catch(h("Unable to retrieve ranking entries"))).data.data}}}),renewPlayerToken:async({playerToken:e})=>(await t.post("/api/auth/renew",{},{headers:{Authorization:`Bearer ${e}`}}).catch(h("Unable to renew token"))).data.playerToken}}({server:t,log:()=>{}}),this._storage=n,this._storagePrefix=r,this._updateUserFromStorage(),this._renewPlayerToken()}_updateUserFromStorage(){this._currentUser=(e=>{if(!e)return null
try{const t=JSON.parse(e),r=t.playerToken,n=r.startsWith("FAKE!")?Date.now()+6048e5:1e3*JSON.parse(atob(r.split(".")[1])).exp
return Date.now()>n-864e5?(console.warn("Authentication token is about to expire, skipping!"),null):t}catch(e){return null}})(this._storage.getItem(`${this._storagePrefix}.id`))}_renewPlayerToken(){if(!this._currentUser)return
const{playerToken:e,username:t}=this._currentUser
return this._scoreboardClient.renewPlayerToken({playerToken:e}).then(e=>{this._storage.getItem(`${this._storagePrefix}.id`)&&this._storage.setItem(`${this._storagePrefix}.id`,JSON.stringify({username:t,playerToken:e}))})}getCurrentUser(){return this._currentUser&&this._currentUser.playerToken?{username:this._currentUser.username}:null}isLoggedIn(){return!!this._currentUser}signUp({username:e,password:t,email:r}){return this._scoreboardClient.signUp({username:e,password:t,email:r}).then(t=>(this._storage.setItem(`${this._storagePrefix}.id`,JSON.stringify({username:e,playerToken:t.playerToken})),this._updateUserFromStorage(),this.getCurrentUser()))}logIn({username:e,password:t}){return this._scoreboardClient.loginByUsernamePassword({username:e,password:t}).then(t=>(this._storage.setItem(`${this._storagePrefix}.id`,JSON.stringify({username:e,playerToken:t.playerToken})),this._updateUserFromStorage(),this.getCurrentUser()))}changePassword({email:e}){return this._scoreboardClient.changePassword({email:e})}async logOut(){this._storage.removeItem(`${this._storagePrefix}.id`),this._updateUserFromStorage()}async submitScore(e){if((0,p.isTestModeEnabled)()&&!this._isFake)throw new Error("Cannot submit score in test mode")
if(!this._currentUser)throw new Error("Not logged in")
const t=await this._scoreboardClient.submitScore({playerToken:this._currentUser.playerToken,md5:e.md5,playMode:e.playMode,input:{score:e.score,combo:e.combo,count:e.count,total:e.total,log:e.log}})
return{md5:e.md5,playMode:e.playMode,...m(t.data.registerScore.resultingRow)}}async retrieveRecord(e){if(!this._currentUser)throw new Error("Not logged in")
const t=(await this._scoreboardClient.retrieveRecord({playerToken:this._currentUser.playerToken,md5:e.md5,playMode:e.playMode})).data.chart.level.myRecord
return t&&{md5:e.md5,playMode:e.playMode,...m(t)}}async retrieveScoreboard({md5:e,playMode:t}){return{data:(await this._scoreboardClient.retrieveScoreboard({md5:e,playMode:t})).data.chart.level.leaderboard.map(m)}}async retrieveMultipleRecords(e){if(!this._currentUser)throw new Error("Not logged in")
return(await this._scoreboardClient.retrieveRankingEntries({playerToken:this._currentUser.playerToken,md5s:e.map(e=>e.md5)})).data.me.records.map(e=>({...m(e),md5:e.md5,playMode:e.playMode}))}}
function m(e){return{rank:e.rank,score:e.entry.score,combo:e.entry.combo,count:e.entry.count,total:e.entry.total,playerName:e.entry.player.name,recordedAt:new Date(e.entry.recordedAt),playCount:e.entry.playCount,playNumber:e.entry.playNumber}}},55855:()=>{}}])

//# sourceMappingURL=309-2cb6e2201723ba538ead.js.map