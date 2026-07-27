(this.webpackChunk=this.webpackChunk||[]).push([[793],{16126:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>a})
var o=n(74045),s=n.n(o),r=n(12850),i=n.n(r)()(s())
i.push([t.id,".BenchmarkPanel {\n  background: #449;\n  border: 2px solid #66e;\n  padding: 4px;\n}\n.BenchmarkPanel table {\n  font-size: 10px;\n}","",{version:3,sources:["webpack://./devtools/ui/BenchmarkPanel.scss"],names:[],mappings:"AAEA;EACE,gBAAA;EACA,sBAAA;EACA,YAAA;AADF;AAEE;EACE,eAAA;AAAJ",sourcesContent:["@import '../../ui/common';\n\n.BenchmarkPanel {\n  background: #449;\n  border: 2px solid #66e;\n  padding: 4px;\n  table {\n    font-size: 10px;\n  }\n}\n"],sourceRoot:""}])
const a=i},63808:(t,e,n)=>{"use strict"
n.d(e,{E3:()=>r,V4:()=>c,nF:()=>u,qH:()=>i,rE:()=>a})
var o=n(86774),s=n(8531);(0,s.MD)()
const r=new Map,i=t=>(0,s.ZP)(e=>e.set(t,(0,o.cT)())),a=(t,e)=>(0,s.ZP)(n=>n.set(t,(0,o.FY)(e)())),u=(t,e)=>(0,s.ZP)(n=>n.set(t,(0,o.nA)(e)())),c=t=>e=>e.get(t)},86774:(t,e,n)=>{"use strict"
n.d(e,{FY:()=>d,PN:()=>i,S3:()=>u,VZ:()=>a,ae:()=>s,cT:()=>o,hg:()=>r,nA:()=>h,qH:()=>l,vU:()=>c})
const o=()=>({status:"loading"}),s=t=>({status:"completed",value:t}),r=t=>"loading"===t.status,i=t=>"completed"===t.status,a=t=>"error"===t.status,u=t=>i(t)&&t.value,c=t=>a(t)&&t.error,l=()=>()=>o(),d=t=>()=>({status:"completed",value:t}),h=t=>()=>({status:"error",error:t})},84678:(t,e,n)=>{"use strict"
n.d(e,{E3:()=>i,Hd:()=>d,Mg:()=>h,Rq:()=>l,eE:()=>c,fn:()=>a,iJ:()=>u})
var o=n(23672),s=n(8531)
const r=t=>({staged:t,committed:t}),i=r(""),a=t=>t.committed,u=t=>t.staged,c=t=>(0,s.ZP)(e=>{e.staged=t}),l=t=>({...t,committed:t.staged}),d=t=>()=>r(t),h=(0,o.oM)({name:"musicSearchText",initialState:i,reducers:{MUSIC_SEARCH_TEXT_TYPED:(t,{payload:{text:e}})=>c(e)(t),MUSIC_SEARCH_DEBOUNCED:t=>l(t),MUSIC_SEARCH_TEXT_INITIALIZED:(t,{payload:{text:e}})=>d(e)()}})},47542:(t,e,n)=>{"use strict"
n.d(e,{AC:()=>l,E3:()=>a,Eb:()=>d,Im:()=>p,Oh:()=>u,se:()=>h,v8:()=>c})
var o=n(23672),s=n(8531),r=n(89599),i=n.n(r)
const a={selectedSongId:null,selectedChartId:null,selectedChartLevel:1},u=t=>e=>{const n=i().find(t,t=>t.id===e.selectedSongId)
return n||t[0]},c=(t=[])=>e=>{const n=i().find(t,{file:e.selectedChartId})
return n||i().minBy(t,t=>Math.abs(h(t)-e.selectedChartLevel))},l=t=>(0,s.ZP)(e=>{e.selectedSongId=t}),d=(t,e,n)=>(0,s.ZP)(o=>{o.selectedSongId=t,o.selectedChartId=e,o.selectedChartLevel=n})
function h(t){return t.info.level+(5===t.info.difficulty?1e3:0)}const p=(0,o.oM)({name:"musicSelection",initialState:a,reducers:{CUSTOM_SONG_LOADED:(t,{payload:{song:e}})=>l(e.id)(t),MUSIC_SONG_SELECTED:(t,{payload:{songId:e}})=>l(e)(t),MUSIC_CHART_SELECTED:(t,{payload:{songId:e,chartId:n,chartLevel:o}})=>d(e,n,o)(t)}})},75470:(t,e,n)=>{"use strict"
n.r(e),n.d(e,{SCRATCH_POSITION:()=>p,audioInputLatency:()=>P,getGauge:()=>E,getKeyMapping:()=>u,hasAcknowledged:()=>A,initWithDataFromStorage:()=>r,initialState:()=>s,isAutoVelocityEnabled:()=>b,isBackgroundAnimationsEnabled:()=>_,isContinuousAxisEnabled:()=>C,isGaugeEnabled:()=>S,isPreviewEnabled:()=>v,isScratchPosition:()=>g,keyboardMapping:()=>w,laneCover:()=>y,lastSeenVersion:()=>T,leadTime:()=>h,nextKeyToEdit:()=>O,optionsSlice:()=>I,panelPlacement:()=>m,playMode:()=>c,scratchPosition:()=>f,sensitivity:()=>M,speed:()=>d})
var o=n(23672)
const s={"player.P1.mode":"KB","input.P1.keyboard.BM.SC":"16","input.P1.keyboard.BM.SC2":"65","input.P1.keyboard.BM.1":"90","input.P1.keyboard.BM.2":"83","input.P1.keyboard.BM.3":"88","input.P1.keyboard.BM.4":"68","input.P1.keyboard.BM.5":"67","input.P1.keyboard.BM.6":"70","input.P1.keyboard.BM.7":"86","input.P1.keyboard.KB.1":"83","input.P1.keyboard.KB.2":"68","input.P1.keyboard.KB.3":"70","input.P1.keyboard.KB.4":"32","input.P1.keyboard.KB.5":"74","input.P1.keyboard.KB.6":"75","input.P1.keyboard.KB.7":"76","player.P1.speed":"1.0","player.P1.lane-cover":"0","player.P1.lead-time":"1685","player.P1.auto-velocity":"0","player.P1.scratch":"left","player.P1.panel":"center","player.P1.gauge":"off","gamepad.continuous":"0","gamepad.sensitivity":"4","system.offset.audio-input":"0","system.offset.audio-visual":"0","system.bga.enabled":"1","system.preview.enabled":"1","system.last-seen-version":"0.0.0","system.ack.twitter":"0","system.ack.deltas":"0","system.ack.finishGame":"0","system.ack.replayGame":"0"},r=t=>("off"===t["player.P1.scratch"]&&(t["player.P1.scratch"]="left"),{...s,...t}),i=t=>"1"===t,a=t=>i(t)?"0":"1",u=(t,e)=>n=>n["input.P1.keyboard."+t+"."+e],c=t=>t["player.P1.mode"],l=(t,e)=>{t["player.P1.mode"]=e,t["player.P1.panel"]="3d"===t["player.P1.panel"]&&"KB"!==e?"center":t["player.P1.panel"]},d=t=>t["player.P1.speed"],h=t=>{const e=parseInt(t["player.P1.lead-time"],10)
return e?e<138?138:e:1685},p=["off","left","right"],g=t=>p.includes(t),f=t=>"KB"===t["player.P1.mode"]?"off":t["player.P1.scratch"],m=t=>t["player.P1.panel"],y=t=>Math.min(50,Math.max(-50,Math.round(100*+t["player.P1.lane-cover"])))/100||0,_=t=>i(t["system.bga.enabled"]),b=t=>i(t["player.P1.auto-velocity"]),v=t=>i(t["system.preview.enabled"]),S=t=>"off"!==E(t),E=t=>t["player.P1.gauge"],w=t=>{const e={}
for(const n of["1","2","3","4","5","6","7","SC","SC2"]){const o="input.P1.keyboard."+c(t)+"."+n
e[n]=t[o]||""}return e},A=t=>e=>"1"===e[`system.ack.${t}`],P=t=>+t["system.offset.audio-input"],C=t=>i(t["gamepad.continuous"]),M=t=>parseInt(t["gamepad.sensitivity"],10),T=t=>t["system.last-seen-version"],O=(t,e)=>{const n="left"===e?["SC","SC2","1","2","3","4","5","6","7"]:"right"===e?["1","2","3","4","5","6","7","SC","SC2"]:["1","2","3","4","5","6","7"],o=n.indexOf(t)
return o<0?null:n[o+1]||null},I=(0,o.oM)({name:"options",initialState:s,reducers:{LOAD_FROM_STORAGE:()=>{},LOADED_FROM_STORAGE:(t,{payload:{options:e}})=>r(e),INIT_WITH_DATA_FROM_STORAGE:(t,{payload:{options:e}})=>({...s,...e}),CHANGE_KEY_MAPPING:(t,{payload:{mode:e,key:n,keyCode:o}})=>{t["input.P1.keyboard."+e+"."+n]=o},CHANGE_PLAY_MODE:(t,{payload:{mode:e}})=>{l(t,e)},CHANGE_SPEED:(t,{payload:{speed:e}})=>{t["player.P1.speed"]=e},CHANGE_LEAD_TIME:(t,{payload:{leadTime:e}})=>{t["player.P1.lead-time"]=e.toString()},CHANGE_SCRATCH_POSITION:(t,{payload:{position:e}})=>{"off"!==e?(l(t,"BM"),t["player.P1.scratch"]=e):l(t,"KB")},CHANGE_PANEL_PLACEMENT:(t,{payload:{placement:e}})=>{t["player.P1.panel"]=e,t["player.P1.mode"]="3d"===e&&"KB"!==t["player.P1.mode"]?"KB":t["player.P1.mode"]},CHANGE_LANE_COVER:(t,{payload:{laneCover:e}})=>{t["player.P1.lane-cover"]=`${e}`},TOGGLE_BACKGROUND_ANIMATIONS:t=>{t["system.bga.enabled"]=a(t["system.bga.enabled"])},TOGGLE_AUTO_VELOCITY:t=>{t["player.P1.auto-velocity"]=a(t["player.P1.auto-velocity"])},TOGGLE_PREVIEW:t=>{t["system.preview.enabled"]=a(t["system.preview.enabled"])},TOGGLE_GAUGE:t=>{t["player.P1.gauge"]="off"===t["player.P1.gauge"]?"hope":"off"},ACKNOWLEDGE:(t,{payload:{featureKey:e}})=>{t[`system.ack.${e}`]="1"},CHANGE_AUDIO_INPUT_LATENCY:(t,{payload:{latency:e}})=>{t["system.offset.audio-input"]=`${e}`},TOGGLE_CONTINUOUS_AXIS:t=>{t["gamepad.continuous"]=a(t["gamepad.continuous"])},CHANGE_SENSITIVITY:(t,{payload:{sensitivity:e}})=>{t["gamepad.sensitivity"]=e.toString()},UPDATE_LAST_SEEN_VERSION:(t,{payload:{newVersion:e}})=>{t["system.last-seen-version"]=e}}})},1307:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>o})
const o=function({songs:t,title:e,getTitle:n}){return t.find(t=>{return o=n(t),s=e,o.toLowerCase().trim()===s.toLowerCase().trim()
var o,s})}},6373:(t,e,n)=>{"use strict"
n.d(e,{Dd:()=>s,NZ:()=>r,fe:()=>i,jr:()=>a,nV:()=>u})
var o=n(41899)
function s(){return o.Z.BEMUSE_MUSIC_SERVER||o.Z.server}function r(){return+o.Z.volume||1}function i(){return o.Z.archive}function a(){return o.Z.grep}function u(){return o.Z.song}},31383:(t,e,n)=>{"use strict"
n.d(e,{Iw:()=>b,YA:()=>E,Lg:()=>w,Qe:()=>S,gF:()=>A,I6:()=>P,cM:()=>j,bT:()=>C,UX:()=>O,Gr:()=>D,tY:()=>T,xy:()=>G,J3:()=>R,wx:()=>Z,Gl:()=>x,jS:()=>B,Qw:()=>k,eB:()=>L})
var o=n(63808),s=n(86774),r=n(84678),i=n(47542),a=n(75470),u=n(23672),c=n(89599),l=n.n(c),d=n(5444),h=n(8531)
function p(t,e){return String(t.toLowerCase()).indexOf(e.toLowerCase())>=0}const g=function(t,e){return t.filter(t=>function(t,e){return!e||(p(t.title,e)||p(t.artist,e)||p(t.genre,e))}(t,e))}
var f=n(26755),m=n(68510),y=n(10625),_=n(55122);(0,h.MD)()
const b=(0,u.oM)({name:"collections",initialState:new Map,reducers:{COLLECTION_LOADING_BEGAN:(t,{payload:{url:e}})=>{t.set(e,s.cT())},COLLECTION_LOADING_ERRORED:(t,{payload:{url:e,error:n}})=>{t.set(e,s.nA(n)())},COLLECTION_LOADED:(t,{payload:{url:e,data:n}})=>{t.set(e,s.FY(n)())}}}),v=(0,u.oM)({name:"customSongLoadState",initialState:s.ae(void 0),reducers:{CUSTOM_SONG_LOAD_STARTED:()=>s.qH()(),CUSTOM_SONG_LOADED:()=>s.FY(void 0)()}}),S=(0,u.oM)({name:"customSongs",initialState:[],reducers:{CUSTOM_SONG_LOADED:(t,{payload:{song:e}})=>[e],CUSTOM_SONGS_LOADED:(t,{payload:{songs:e}})=>e}}),E=(0,u.oM)({name:"currentCollection",initialState:"",reducers:{COLLECTION_LOADING_BEGAN:(t,{payload:{url:e}})=>""===t?e:t}}),w=(0,u.oM)({name:"currentSongReadme",initialState:"Omachi kudasai…",reducers:{README_LOADING_STARTED:()=>"Omachi kudasai…",README_LOADING_ERRORED:(t,{payload:{url:e}})=>"Cannot download "+e,README_LOADED:(t,{payload:{text:e}})=>e}}),A=(0,u.oM)({name:"rageQuit",initialState:!1,reducers:{RAGEQUITTED:()=>!0,RAGEQUIT_DISMISSED:()=>!1}}),P={collections:b.reducer,customSongLoadState:v.reducer,customSongs:S.reducer,currentCollection:E.reducer,musicSearchText:r.Mg.reducer,musicSelection:i.Im.reducer,options:a.optionsSlice.reducer,currentSongReadme:w.reducer,rageQuit:A.reducer},C=t=>t.currentCollection,M=(0,d.P1)(t=>t.collections,C,(t,e)=>{const n=o.V4(e)(t)
if(!n)throw new Error(`${e} is selected but not started to load yet`)
return n}),T=t=>s.hg(M(t)),O=t=>s.vU(M(t)),I=(0,d.P1)(t=>s.S3(M(t)),t=>t&&(0,y.Z)(t)),x=t=>r.iJ(t.musicSearchText),B=t=>r.fn(t.musicSearchText),{selectGroups:D,selectSongs:N}=(()=>{const t=(0,d.P1)(I,t=>t&&t.songs||[]),e=(0,d.P1)(t,t=>t.customSongs,(t,e)=>[...e,...t]),n=(0,d.P1)(e,t=>(0,_.Z)(t)),o=(0,d.P1)(n,B,(t,e)=>g(t,e)),s=(0,d.P1)(I,t=>t&&t.songOfTheDayEnabled),r=(0,d.P1)(o,s,(t,e)=>(0,m.Z)(t,{songOfTheDayEnabled:e}))
return{selectGroups:r,selectSongs:(0,d.P1)(r,t=>l()(t).map("songs").flatten().value())}})(),{selectSelectedSong:L,selectChartsForSelectedSong:j,selectSelectedChart:k}=(()=>{const t=t=>t.musicSelection,e=(0,d.P1)(t,N,(t,e)=>i.Oh(e)(t)),n=(0,d.P1)(e,t=>(0,f.Z)(t&&t.charts||[]))
return{selectSelectedSong:e,selectChartsForSelectedSong:n,selectSelectedChart:(0,d.P1)(t,n,(t,e)=>i.v8(e)(t))}})(),G=t=>t.options,R=t=>a.playMode(t.options),Z=t=>t.rageQuit},3083:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>p})
var o=n(31383),s=n(6204)
const r=({dispatch:t})=>e=>n=>{if(n.type===o.Iw.actions.COLLECTION_LOADING_BEGAN.type){const{url:e}=n.payload
t(o.YA.actions.COLLECTION_LOADING_BEGAN({url:e})),(0,s.zD)(e).then(n=>t(o.Iw.actions.COLLECTION_LOADED({url:e,data:n})),n=>()=>t(o.Iw.actions.COLLECTION_LOADING_ERRORED({url:e,error:n})))}return e(n)}
var i=n(1307),a=n(6373),u=n(47542)
const c=({dispatch:t})=>e=>n=>{if(n.type!==o.Iw.actions.COLLECTION_LOADED.type)return e(n)
const s=e(n),r=(0,a.nV)()
if(r){const e=(0,i.Z)({songs:n.data.songs,getTitle:t=>t.title,title:r})
e&&t(u.Im.actions.MUSIC_SONG_SELECTED({songId:e.id}))}return s}
var l=n(23672),d=n(75470)
const h=(t=localStorage)=>({dispatch:e,getState:n})=>o=>s=>{var r
if(s.type===d.optionsSlice.actions.LOAD_FROM_STORAGE.type){const n={}
for(const e of Object.keys(d.initialState))n[e]=null!==(r=t.getItem(e))&&void 0!==r?r:d.initialState[e]
e(d.optionsSlice.actions.LOADED_FROM_STORAGE({options:n}))}if(o(s),s.type.startsWith("options/")){const{options:e}=n()
for(const n of Object.keys(e))t.setItem(n,e[n])}}
function p(){const t=[h(),r,c,()=>window.devToolsExtension?window.devToolsExtension():t=>t]
return(0,l.xC)({reducer:o.I6,middleware:t})}},10220:(t,e,n)=>{"use strict"
n.r(e),n.d(e,{enableTestMode:()=>r,getScore:()=>l,isTestModeEnabled:()=>a,pauseAt:()=>u,setGameLifecycleHandler:()=>i,unpause:()=>c})
let o=!1,s={pauseAt(t){throw new Error("Cannot pause: No lifecycle handler registered!")},unpause(){throw new Error("Cannot unpause: No lifecycle handler registered!")},getScore(){throw new Error("Cannot get score: No lifecycle handler registered!")}}
function r(){if(!o){o=!0,console.log("[Bemuse test mode enabled]")
const t=document.createElement("div")
t.setAttribute("style","\n        position: fixed;\n        top: 20px;\n        left: 20px;\n        font: 20px Comic Sans MS, sans-serif;\n        z-index: 99999;\n        background: rgba(0,0,0,0.5);\n        color: #0f0;\n        border: 2px solid #0f0;\n        padding: 4px;\n        pointer-events: none;\n      "),t.innerHTML="\n      <strong>Test mode:</strong>\n      Bemuse is being controlled by automated test software.\n    ",document.body.appendChild(t)}}function i(t){console.log("[Bemuse test mode] A pause handler has been registered."),s=t}function a(){return!!o}function u(t){return s.pauseAt(t)}function c(){return s.unpause()}function l(){return s.getScore()}},90810:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>P})
var o=n(68536),s=n(40453),r=n(8600),i=n(2705),a=n(45227),u=n.n(a),c=n(88397),l=n.n(c),d=n(50872),h=n.n(d),p=n(53974),g=n.n(p),f=n(98192),m=n.n(f),y=n(92789),_=n.n(y),b=n(16126),v={}
v.styleTagTransform=_(),v.setAttributes=g(),v.insert=h().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=m()
u()(b.Z,v)
b.Z&&b.Z.locals&&b.Z.locals
const S=({stats:t})=>r.createElement("table",null,r.createElement("tbody",null,Object.keys(t).map(e=>{const n=t[e]
return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("strong",null,e)),r.createElement("td",{align:"right"},""+n))}))),E=({bench:t})=>{const[e,n]=(0,r.useState)(!1),[,o]=(0,r.useState)(!1);(0,r.useEffect)(()=>{const t=setInterval(()=>o(t=>!t),1e3)
return()=>{clearInterval(t)}},[])
const s=t=>{t.preventDefault(),t.stopPropagation(),n(t=>!t)}
return r.createElement("div",{className:"BenchmarkPanel",onClick:s,onTouchStart:s},e?r.createElement("article",null,r.createElement("b",null,"Benchmark Stats"),r.createElement("br",null),r.createElement(S,{stats:t.stats})):"Show Benchmark Stats")}
function w(){let t=0,e=0,n=0
const s=[]
let r=0,i=0
return{push:function(a){const u=(0,o.ZP)()
for(t+=a,e+=1,n=t/e,r+=a,s.push({delta:a,time:u});s[0]&&s[0].time<u-1e3;)r-=s.shift().delta
i=r/s.length},toString:()=>A(n)+" / "+A(i)}}function A(t){return t.toFixed(2)+"ms"}const P=window.BEMUSE_BENCHMARK=(0,s.gy)()?new function(){const t={},e={enabled:!0,stats:t,wrap:(e,n)=>function(){const s=(0,o.ZP)()
try{return n.apply(this,arguments)}finally{const n=(0,o.ZP)();(t[e]||(t[e]=new w(e))).push(n-s)}},benchmark(t,e,n){e[n]=this.wrap(t,e[n])},toString(){const e=[]
return Object.keys(t).forEach(function(n){e.push("- "+n+": "+t[n])}),e.join("\n")}},n=document.createElement("div")
return n.setAttribute("style","position:fixed;top:10px;right:10px;z-index:99999"),document.body.appendChild(n),(0,i.s)(n).render(r.createElement(E,{bench:e})),e}:new function(){return{enabled:!1,wrap:(t,e)=>e}}},40453:(t,e,n)=>{"use strict"
n.d(e,{T_:()=>s,Xb:()=>c,ZB:()=>i,gy:()=>r,mq:()=>u,oh:()=>a})
var o=n(41899)
function s(){return"1"===o.Z.BEMUSE_SHOW_OPTIONS}function r(){return"1"===o.Z.BEMUSE_BENCHMARK}function i(){return"1"===o.Z.BEMUSE_NO_FULLSCREEN}function a(){return"1"===o.Z.BEMUSE_SHOW_ABOUT}function u(){return"1"===o.Z.BEMUSE_SHOW_MODE_SELECT}function c(){return"1"===o.Z.BEMUSE_TITLE_DISPLAY}},90453:(t,e,n)=>{"use strict"
function o(t){return"hope"===t?function(){let t,e,n
return{update(o){const s=o.stats,r=s.numJudgments/s.totalCombo,i=(t,e,n)=>{const o=e+(n-e)*r,i=s.maxPossibleScore
return Math.max(0,(i-t)/(o-t))},a=.5*i(5e5,555555,51e4)
if(t=Math.min(1,a),n=Math.max(0,Math.min(1,a-1)),a>0)e=0
else{const t=i(45e4,5e5,5e5)
e=t}},shouldDisplay:()=>t>0||e>0,getPrimary:()=>t,getSecondary:()=>e,getExtra:()=>n}}():{update(){},shouldDisplay:()=>!1,getPrimary:()=>0,getSecondary:()=>0,getExtra:()=>0}}n.d(e,{s:()=>o})},72921:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>r})
var o=n(89599),s=n.n(o)
const r=class{constructor(t,e){this._notes=s().sortBy(t,a),this._barLines=s()(e).map("position").sortBy().value()}getVisibleNotes(t,e,n){const o=[],s=this._notes
n||(n=0)
for(let r=0;r<s.length;r++){const a=s[r]
if(a.end?!(a.position>e||a.end.position<t-n):!(a.position>e||a.position<t-n)){const n={note:a}
if(a.end){const o=i(t,e,a.position),s=i(t,e,a.end.position)
n.y=Math.min(o,s),n.height=Math.abs(o-s)}else n.y=i(t,e,a.position)
o.push(n)}}return o}getVisibleBarLines(t,e,n){return n||(n=0),this._barLines.filter(o=>t-n<=o&&o<=e).map(n=>({id:n,y:i(t,e,n)}))}}
function i(t,e,n){return 1-(n-t)/(e-t)}function a(t){return t.position}},99499:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>a})
var o=n(43896),s=n(72921),r=n(94425),i=n(90453)
const a=class{constructor(t,e){this._currentSpeed=1,this._player=t,this._noteArea=new s.Z(t.notechart.notes,t.notechart.barLines),this._stateful={},this._defaultData={placement:t.options.placement,scratch:t.options.scratch,key_mode:t.notechart.getKeyMode(t.options.scratch),lane_lift:Math.max(0,-t.options.laneCover),lane_press:Math.max(0,t.options.laneCover)},this._gauge=(0,i.s)(t.options.gauge),this._touch3dMode="touch3d"===e.displayMode}update(t,e,n){const s=this._touch3dMode,i=this._player,a=this._noteArea,u=this._stateful,c=i.notechart.secondsToBeat(e),l=i.notechart.beatToPosition(c),d=i.notechart.spacingAtBeat(c),h=Object.assign({},this._defaultData),p=(t,e)=>(h[t]||(h[t]=[])).push(e),g=this._gauge
this._currentSpeed+=(n.speed-this._currentSpeed)/3
const f=this._currentSpeed*d
h.beat=c,function(){const t=a.getVisibleNotes(l,_(),1)
if(s){const e=(t,e,n,s=1)=>{const r=o.dM(e-.01),i=+n||-1,a=o.kL,u=r.projection*a*(2*(i-.5)/7-1),c=r.projection*s*a*2/7
p(`note3d_${n}`,{key:t,y:r.y,x:u+640,width:c})},s=3/128
for(const o of t){const t=o.note,r=t.column
if(o.height){let n=0
const i=o.y+o.height
for(let a=i-Math.max(0,Math.floor((i-1)/s)*s);a>=0&&a>=o.y;a-=s)e(t.id+"x"+n++,a,r,.8)
e(t.id,o.y+o.height,r)}else"judged"!==n.getNoteStatus(t)&&e(t.id,o.y,r)}}else for(const e of t){const t=e.note,o=t.column
if(e.height){const s=n.getNoteJudgment(t),i=n.getNoteStatus(t)
p(`longnote_${o}`,{key:t.id,y:e.y,height:e.height,active:0!==s&&s!==r.AB,missed:"judged"===i&&s===r.AB})}else"judged"!==n.getNoteStatus(t)&&p(`note_${o}`,{key:t.id,y:e.y})}}(),function(){const t=a.getVisibleBarLines(l,_(),1)
for(const e of t)if(s){const t=o.dM(e.y-.01)
p("barlines3d",{key:e.id,y:t.y,x:t.projection*-o.kL+640,width:t.projection*o.kL*2})}else p("barlines",{key:e.id,y:e.y})}(),function(){const e=n.input
for(const n of i.columns){const o=e.get(n)
h[`${n}_active`]=0!==o.value?1:0,o.changed&&(0!==o.value?u[`${n}_down`]=t:u[`${n}_up`]=t)}}(),function(){const e=n.notifications.judgments,o=e[e.length-1]
if(o){const e=-1===o.judgment?"missed":`${o.judgment}`
u[`judge_${e}`]=t
const n=-1===o.judgment||1===o.judgment?"none":o.delta>0?"late":o.delta<0?"early":"none"
u[`judge_deviation_${n}`]=t,u.combo=o.combo}h.score=n.stats.score}(),function(){g.update(n),g.shouldDisplay()?u.gauge_enter||(u.gauge_enter=t):u.gauge_enter&&(u.gauge_exit||(u.gauge_exit=t))
h.gauge_primary=g.getPrimary(),h.gauge_secondary=g.getSecondary(),h.gauge_extra=g.getExtra()}(),function(){const e=n.notifications.judgments
for(let n=0;n<e.length;n++){const o=e[n];(0,r.H2)(o.judgment)||(u[`${o.column}_explode`]=t)}}(),h.speed=n.speed.toFixed(1)+"x",h.stat_1=y(1),h.stat_2=y(2),h.stat_3=y(3),h.stat_4=y(4),h.stat_missed=y(r.AB),h.stat_acc=(100*(n.stats.currentAccuracy||0)).toFixed(2)+"%"
const m=i.notechart.bpmAtBeat(c)
return h.bpm=m<1?"":Math.round(m)%1e4||"",Object.assign(h,u),h
function y(t){return n.stats.counts&&n.stats.counts[t]}function _(){return l+5/f}}}},43896:(t,e,n)=>{"use strict"
n.d(e,{dM:()=>s,kL:()=>r,mO:()=>i})
const o={cx:1024,cy:-975,r:1024,t0:3.922,t1:4.555,p:960,w:60}
function s(t){const e=Math.max(0,t-1)
t<0&&(t=0),t>1&&(t=1)
const n=o.t0+(o.t1-o.t0)*t,s=o.cx+Math.cos(n)*o.r,r=o.cy-Math.sin(n)*o.r,i=o.p/(o.p-s)
return{y:r*i+360+2048*e,projection:i}}const r=o.w
function i(t,e){let n,r,i=.75,a=1
for(let t=0;t<8;t++)n=(i+a)/2,r=s(n),r.y>e?a=n:i=n
if(n<.8)return null
const u=640+r.projection*-o.w,c=640+r.projection*o.w
let l=Math.floor((t-u)/(c-u)*7)
return l>=-1&&l<=7?(l<0&&(l=0),l>6&&(l=6),String(l+1)):null}},51746:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>a})
const o=class{constructor(){this.value=0,this.changed=!1}get justPressed(){return this.changed&&this.value}}
var s=n(89599),r=n.n(s),i=n(90810)
const a=class{constructor(){this._controls=new Map,this._plugins=[]}update(){const t=new Map
for(const[t,e]of this._controls)e.changed=!1
for(const e of this._plugins)for(const[n,o]of e.get())t.set(n,o)
for(const[e,n]of t){const t=this.get(e)
t.value!==n&&(t.changed=!0,t.value=n)}}destroy(){for(const t of this._plugins)t.destroy()}get(t){return this._controls.has(t)||this._controls.set(t,new o),this._controls.get(t)}use(t){const e={},n="input:"+t.name
this._plugins.push({get:i.Z.wrap(n,function(){const n=t.get(),o=[]
for(const t of r().union(r().keys(n),r().keys(e))){const s=+e[t]||0,r=+n[t]||0
s!==r&&o.push([t,r]),e[t]=r}return o}),destroy:()=>"function"!=typeof t.destroy||t.destroy()})}}},94425:(t,e,n)=>{"use strict"
n.d(e,{AB:()=>a,H2:()=>E,NX:()=>b,Pe:()=>S,Sw:()=>o,el:()=>m,jQ:()=>w,nr:()=>v,pH:()=>_})
var o,s=n(89599),r=n.n(s)
!function(t){t[t.Missed=-1]="Missed",t[t.Unjudged=0]="Unjudged",t[t.Meticulous=1]="Meticulous",t[t.Precise=2]="Precise",t[t.Good=3]="Good",t[t.Offbeat=4]="Offbeat"}(o||(o={}))
const i=o.Unjudged,a=o.Missed,u=[{value:1,timegate:.02,endTimegate:.04},{value:2,timegate:.05,endTimegate:.1},{value:3,timegate:.1,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}],c=[{value:1,timegate:.021,endTimegate:.042},{value:2,timegate:.06,endTimegate:.12},{value:3,timegate:.12,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}],l=[{value:1,timegate:.022,endTimegate:.044},{value:2,timegate:.07,endTimegate:.14},{value:3,timegate:.14,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}],d=[{value:1,timegate:.023,endTimegate:.046},{value:2,timegate:.08,endTimegate:.16},{value:3,timegate:.16,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}],h=[{value:1,timegate:.024,endTimegate:.048},{value:2,timegate:.1,endTimegate:.18},{value:3,timegate:.18,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}]
class p{constructor(t){this.timegates=t}getTimegates(t,e){return this.timegates}}class g{getTimegates(t,e){return!e||e<100?h:u}}const f=new p(u)
function m(t,{tutorial:e=!1}){const n=t.songInfo,o=n.difficulty>=5
return e?new g:o?f:1===n.level||2===n.level?new p(h):3===n.level?new p(d):4===n.level?new p(l):5===n.level?new p(c):f}function y(t){return function(e,n,o=f){const s=o.getTimegates(e,n),r=Math.abs(e-n)
for(let e=0;e<s.length;e++)if(r<t(s[e]))return s[e].value
return e<n?i:a}}const _=y(t=>t.timegate),b=y(t=>t.endTimegate)
function v(t,e=f){return r().find(e.getTimegates(null,null),{value:t}).timegate}function S(t){return t>=4}function E(t){return t===a||S(t)}function w(t){return 1===t?100:2===t?80:3===t?50:0}},46572:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>o})
const o=class{constructor(t,e,n){this.notechart=t,this.number=e,this.options={autoplayEnabled:!!n.autoplayEnabled,autosound:!!n.autosound,speed:+n.speed,placement:n.placement||"center",scratch:n.scratch||"left",input:n.input,laneCover:+(n.laneCover||0),gauge:n.gauge||"off",tutorial:!!n.tutorial}}get columns(){return this.notechart.columns}}},93572:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>l})
var o,s=n(89599),r=n.n(s),i=n(24559),a=n(94425),u=n(48274),c=n.n(u)
!function(t){t.Active="active",t.Unjudged="unjudged",t.Judged="judged"}(o||(o={}))
const l=class{constructor(t){var e
this.player=t,this.notifications={sounds:[],judgments:[]},this.finished=!1,this.tainted=!1,this.input=new Map,this._gameTime=0,this._pinching=null,this._columns=t.columns,this._noteBufferByColumn=r()(t.notechart.notes).sortBy(t=>t.time).groupBy(t=>t.column).mapValues((e=this,function(t){let n=0
return{notes:t,get startIndex(){return n},update(){for(;n<t.length&&"judged"===e.getNoteStatus(t[n]);)n+=1}}})).value(),this._noteResult=new Map,this._duration=t.notechart.duration,this._judge=(0,a.el)(t.notechart,{tutorial:t.options.tutorial}),this.stats=new i.Z(t.notechart),this.speed=t.options.speed}update(t,e){this._gameTime=t,this._rawInput=e,this.notifications={sounds:[],judgments:[]},this._updateInputColumnMap(),this._judgeNotes(),this._updateSpeed(),t>this._duration+3&&(this.finished=!0)}getNoteStatus(t){const e=this._noteResult.get(t)
return e?e.status:o.Unjudged}getNoteJudgment(t){const e=this._noteResult.get(t)
return e?e.judgment:a.Sw.Unjudged}getPlayerInput(t){return this._rawInput.get(`p${this.player.number}_${t}`)}_updateInputColumnMap(){this.input=new Map(this._columns.map(t=>[t,this.getPlayerInput(t)]))}_judgeNotes(){for(const t of this._columns){const e=this._noteBufferByColumn[t]
if(e){const n=this.input.get(t)
this._judgeColumn(e,n,t),e.update()}}}_updateSpeed(){this.getPlayerInput("speedup").justPressed&&this._modifySpeed(1),this.getPlayerInput("speeddown").justPressed&&this._modifySpeed(-1)
const t=this.getPlayerInput("pinch").value
if(t&&!this._pinching?this._pinching={start:t,speed:this.speed}:t||(this._pinching=null),t&&this._pinching){const e=this._pinching,n=e.speed*t/e.start
this.speed=Math.max(.2,Math.round(10*n)/10)}}_modifySpeed(t){const e=this._rawInput.get("select").value?.1:this.speed<.5?.3:.5
this.speed+=t*e,this.speed<.2&&(this.speed=.2)}_shouldAutoplay(){return this.player.options.autoplayEnabled||!!window.BEMUSE_AUTOPLAY}_judgeColumn(t,e,n){let o,s
const r=t.notes
let i=!1
for(let n=t.startIndex;n<r.length;n++){const a=r[n]
if(this._shouldJudge(a,e,t)){const t="active"!==this.getNoteStatus(a)
if(o=a,s=this._judgeNote(a),this._shouldAutoplay()&&(i=!0),t)break}}if(e.justPressed||i)if(o&&null!=s)this.notifications.sounds.push({note:o,type:"hit",judgment:s})
else{const t=this._getFreestyleNote(r)
if(t){("3d"!==this.player.options.placement||!this._isSandwiched(n))&&this.notifications.sounds.push({note:t,type:"free"})}}}_getClosestNote(t){return r().minBy(t,t=>Math.abs(this._gameTime-t.time))}_getFreestyleNote(t){return r().minBy(t,t=>Math.abs(this._gameTime-t.time)+(this._gameTime<t.time-1?1e6:0))}_isSandwiched(t){const e={2:["1","3"],3:["2","4"],4:["3","5"],5:["4","6"],6:["5","7"]}
return!!e[t]&&e[t].every(t=>{const e=this._noteBufferByColumn[t]
return!!e&&e.notes.some(t=>Math.abs(this._gameTime-t.time)<.1)})}_shouldJudge(t,e,n){const o=this.getNoteStatus(t)
if("unjudged"===o){if(this._shouldAutoplay()&&this._gameTime>=t.time)return this.tainted=!0,!0
const o=(0,a.pH)(this._gameTime,t.time,this._judge),s=o===a.AB
let r=o>0&&e.changed&&e.value
return(0,a.Pe)(o)&&this._getClosestNote(n.notes)!==t&&(r=!1),s||r}if("active"===o){const n=t.end||c()(!1,"note.end must exist")
if(this._shouldAutoplay()&&this._gameTime>=n.time)return this.tainted=!0,!0
const o=(0,a.NX)(this._gameTime,n.time,this._judge)===a.AB,s=e.changed,r="SC"===t.column,i=this._gameTime>=n.time
return o||s||r&&i}return!1}_judgeNote(t){let e=this._gameTime-t.time,n=(0,a.pH)(this._gameTime,t.time,this._judge),s=this._noteResult.get(t)
const r=!s||"unjudged"===s.status,i=s&&"active"===s.status
if(this._shouldAutoplay()&&n>=1&&(n=1),t.end){if(r){const r=n===a.AB?o.Judged:o.Active
n===a.AB&&this._setJudgment(n,e,t.column),s={status:r,judgment:n,delta:e}}else if(i){const r="SC"===t.column
e=this._gameTime-t.end.time,n=(0,a.NX)(this._gameTime,t.end.time,this._judge)||a.AB,r&&e>0&&(n=1),s={status:o.Judged,judgment:n,delta:e}}}else s={status:o.Judged,judgment:n,delta:e}
if(n===a.AB&&this.notifications.sounds.push({note:t,type:"break"}),r&&n!==a.AB&&this.stats.handleDelta(e),!s)throw new Error("Invariant violation: result must not be undefined")
if(!n)throw new Error("Invariant violation: note should be judged by this point")
return this._noteResult.set(t,s),this._setJudgment(n,e,t.column),n}_setJudgment(t,e,n){this.stats.handleJudgment(t)
const o={judgment:t,combo:this.stats.combo,delta:e,column:n}
this.notifications.judgments.push(o)}}},24559:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>u})
var o=n(94425),s=n(89599),r=n.n(s)
const i=t=>Math.floor(5e5*t),a=(t,e)=>Math.floor(55555*t/e)
const u=class{constructor(t){this.totalCombo=r()(t.notes).map(e=>t.info(e).combos).sum(),this.totalNotes=t.notes.length,this.combo=0,this.maxCombo=0,this.rawSumJudgmentWeight=0,this.rawTotalComboScore=this._calculateRawTotalComboScore(this.totalCombo),this._remainingMaxPossibleRawComboScore=this.rawTotalComboScore,this.rawSumComboScore=0,this.counts={[o.AB]:0,1:0,2:0,3:0,4:0},this.numJudgments=0,this.poor=!1,this._log=[],this.deltas=[]}get score(){return this.accuracyScore+this.comboScore}get accuracyScore(){return i(this.accuracy)}get comboScore(){return a(this.rawSumComboScore,this.rawTotalComboScore)}get maxPossibleScore(){return this.maxPossibleAccuracyScore+this.maxPossibleComboScore}get maxPossibleAccuracyScore(){const t=this.totalCombo-this.numJudgments,e=(this.rawSumJudgmentWeight+o.jQ(1)*t)/(o.jQ(1)*this.totalCombo)
return i(e)}get maxPossibleComboScore(){const t=this.rawSumComboScore+this._remainingMaxPossibleRawComboScore
return a(t,this.rawTotalComboScore)}get accuracy(){return this.rawSumJudgmentWeight/(o.jQ(1)*this.totalCombo)}get currentAccuracy(){return this.rawSumJudgmentWeight/(o.jQ(1)*this.numJudgments||1)}get log(){return this._log.map(({character:t,count:e})=>`${e>1?e:""}${t}`).join("")}handleJudgment(t){if(this.counts[t]+=1,this.numJudgments+=1,o.H2(t)){const t=this.totalCombo-this.numJudgments
this.combo=0,this.poor=!0,this._remainingMaxPossibleRawComboScore=this._calculateRawTotalComboScore(t)}else{this.combo+=1
const t=this._calculateRawComboScore(this.combo)
this.rawSumComboScore+=t,this._remainingMaxPossibleRawComboScore-=t,this.poor=!1}this.rawSumJudgmentWeight+=o.jQ(t),this.combo>this.maxCombo&&(this.maxCombo=this.combo),this._recordLog(t)}handleDelta(t){this.deltas.push(t)}_calculateRawTotalComboScore(t){let e=0
for(let n=1;n<=t;n++)e+=this._calculateRawComboScore(n)
return e}_calculateRawComboScore(t){return 0===t?0:t<23?1:t<51?2:t<92?3:t<161?4:5}_recordLog(t){const e=this._getLogCharacter(t)
e&&(0===this._log.length||this._log[this._log.length-1].character!==e?this._log.push({character:e,count:1}):this._log[this._log.length-1].count+=1)}_getLogCharacter(t){switch(t){case 1:return"A"
case 2:return"B"
case 3:return"C"
case 4:return"D"
case o.AB:return"M"}}}},10757:(t,e,n)=>{"use strict"
n.d(e,{u:()=>s})
var o=n(85331)
function s(t){return{info:r(t,"info"),warn:r(t,"warn"),error:r(t,"error")}}function r(t,e){return(...n)=>{console.log(`[${(new Date).toJSON()}] [${t}] [${e}] ${(0,o.format)(...n)}`)}}},26755:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>i})
var o=n(89599),s=n.n(o),r=n(93386)
const i=function(t){return s()(t).filter(r.Z).orderBy([t=>t.info.difficulty>=5?1:0,t=>t.keys,t=>t.info.level]).value()}},68510:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>c})
var o=n(89599),s=n.n(o),r=n(10959)
const i=s().once(()=>{const t=new Date(Date.now()+324e5).toISOString().split("T")[0]
return s().memoize(e=>{const n=(0,r.createHash)("md5")
return n.update(e),n.update(t),n.digest("hex")})})
class a{constructor(t,{enabled:e=!0}={}){if(!e)return void(this.ids=new Set)
const n=s().sortBy(t.filter(t=>!t.custom&&!t.tutorial),t=>i()(t.id))
this.ids=new Set(n.slice(0,3).map(t=>t.id))}isSongOfTheDay(t){return this.ids.has(t)}}const u=[{title:"Custom Song",criteria:t=>!!t.custom},{title:"Tutorial",criteria:t=>!!t.tutorial},{title:"Unreleased",criteria:t=>!!t.unreleased},{title:"Recently Added Songs",criteria:t=>!!t.added&&Date.now()-Date.parse(t.added)<5184e6,sort:t=>{var e
return null!==(e=t.added)&&void 0!==e?e:""},reverse:!0},{title:"Random Songs of the Day",criteria:(t,e)=>e.songOfTheDay.isSongOfTheDay(t.id)},{title:"☆",criteria:()=>!0}]
const c=function(t,{songOfTheDayEnabled:e=!1}={}){const n={songOfTheDay:new a(t,{enabled:e})},o=u.map(t=>({input:t,output:{title:t.title,songs:[]}}))
for(const e of t)for(const{input:t,output:s}of o)if(t.criteria(e,n)){s.songs.push(e)
break}for(const{input:t,output:e}of o)t.sort?e.songs=s().orderBy(e.songs,[t.sort],[t.reverse?"desc":"asc"]):t.reverse&&e.songs.reverse()
return s()(o).map("output").filter(t=>t.songs.length>0).value()}},6204:(t,e,n)=>{"use strict"
n.d(e,{d8:()=>r,p_:()=>o,zD:()=>s})
const o="https://music4.bemuse.ninja/server"
async function s(t,{fetch:e=n.g.fetch}={}){const o=r(t),s=await e(o).then(t=>t.json())
if(Array.isArray(s.songs))return s
if(Array.isArray(s.charts)){const t=o.lastIndexOf("/"),e=-1===t?o:o.substring(0,t+1)
return{songs:[{...s,id:"song",path:e}]}}throw new Error(`Invalid server file at ${o}: Does not contain "songs" array.`)}function r(t){return t.endsWith("/bemuse-song.json")?t:t.replace(/\/(?:index\.json)?$/,"")+"/index.json"}},93386:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>o})
const o=function(t){return"7K"===t.keys||"5K"===t.keys}},10625:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>s})
var o=n(8531)
const s=(0,o.ZP)((t,e)=>{e&&(t.songs=e.map(t=>function(t){if(!t.chart_names)return t
return(0,o.ZP)(t,e=>{e.charts&&(e.charts=e.charts.map(e=>{const n=t.chart_names[e.file]
return n?(0,o.ZP)(e,t=>{t.info.subtitles=[...e.info.subtitles,n]}):e}))})}(t)))})},55122:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>i})
var o=n(89599),s=n.n(o),r=n(93386)
const i=function(t){return s().orderBy(t,[t=>s()(t.charts).filter(r.Z).filter(t=>t.info.difficulty<5).filter(t=>t.info.level>0).map(t=>t.info.level).min(),t=>t.bpm,t=>t.title.toLowerCase()])}},73178:(t,e,n)=>{"use strict"
n.d(e,{FB:()=>E,fW:()=>A,ZP:()=>P,oY:()=>M,qf:()=>w})
var o=n(24199),s=n(76158),r=n(46016),i=n(72453),a=n(99273),u=n(37665),c=n(5929)
class l{constructor(){this.stop=1,this.charge=0,this.previous=!1,this.active=!1,this.positive=!1}update(t,e=3){if(!1===this.previous)return this.previous=t,0
if(this.previous!==t){let n=t-this.previous
n>1?n-=2.005:n<-1&&(n+=2.005)
const o=n>0
this.active&&this.positive!==o?(this.positive=o,this.active=!1,this.charge=0):this.active||((0===this.charge||this.stop<=e)&&(this.charge+=Math.ceil(Math.abs(n)/.01)),this.charge>=2&&(this.active=!0,this.positive=o)),this.stop=0,this.previous=t}return this.stop>2*e&&(this.active=!1,this.charge=0,this.stop=0),this.stop+=1,this.active?this.positive?1:-1:0}}var d=n(89599),h=n.n(d),p=n(61201),g=n(75127),f=n(72745),m=n(14842)
function y(t){return new s.y(e=>{for(const n of t.inputs.values())e.next(n)
for(const n of t.outputs.values())e.next(n)
t.onstatechange=t=>{e.next(t.port)}})}function _(t){return"input"!==t.type?f.E:(0,o.R)(t,"midimessage")}const b=function(){return(0,p.D)(navigator.requestMIDIAccess?navigator.requestMIDIAccess():Promise.reject(new Error("MIDI is not supported"))).pipe((0,c.b)(y)).pipe((0,g.K)(t=>(console.warn("MIDI Error:",t.stack),f.E))).pipe((0,c.b)(_)).pipe((0,m.b)(t=>console.log("messageforport",t)))}
var v=n(17287),S=n.n(v)
class E{constructor(t=window,e={}){var n
this.win=t,this.sensitivity=0,this.analogThreshold=0,this.deadzone=0,this.status={},this.axis={},this.handleKeyDown=t=>{this.status[`${t.which}`]=!0,this.exclusive&&t.preventDefault()},this.handleKeyUp=t=>{this.status[`${t.which}`]=!1},this.handleMIDIMessage=t=>{var e
if(!t||!t.data)return
const n=t.data,o=`midi.${null===(e=t.target)||void 0===e?void 0:e.id}.${15&t.data[0]}`,s=t=>{this.status[`${o}.note.${n[1]}`]=t}
if(128==(240&n[0]))s(!1)
else if(144==(240&n[0]))n[2]>0?s(!0):s(!1)
else if(176==(240&n[0]))64===n[1]?this.status[`${o}.sustain`]=n[2]>=64:1===n[1]&&(this.status[`${o}.mod`]=n[2]>=16)
else if(224==(240&n[0])){const t=n[1]|n[2]<<7
this.status[`${o}.pitch.up`]=t>=8448,this.status[`${o}.pitch.down`]=t<7936}}
const s=(e.getMidi川||b)()
this.exclusive=!!e.exclusive,this.continuousAxis=!!e.continuous,this.setGamepadSensitivity(null!==(n=e.sensitivity)&&void 0!==n?n:3),this.subscriptions=[(0,o.R)(t,"keydown").subscribe(this.handleKeyDown),(0,o.R)(t,"keyup").subscribe(this.handleKeyUp),s.subscribe(this.handleMIDIMessage)]}updateGamepads(){const t=this.win.navigator,e=this.fetchGamepads(t)
if(e)for(const t of e)t&&this.updateGamepad(t)}fetchGamepads(t){return t.getGamepads?t.getGamepads():t.webkitGetGamepads?t.webkitGetGamepads():[]}updateGamepad(t){const e=`gamepad.${t.index}`
for(let n=0;n<t.buttons.length;n++){const o=t.buttons[n]
this.status[`${e}.button.${n}`]=o&&o.value>=.5}for(let n=0;n<t.axes.length;n++){const o=`${e}.axis.${n}`
let s=t.axes[n]
this.continuousAxis&&(null==this.axis[o]&&(this.axis[o]=new l),s=this.axis[o].update(s)),this.status[`${o}.positive`]=s>=this.deadzone,this.status[`${o}.negative`]=s<=-this.deadzone}}update(){return this.updateGamepads(),this.status}setGamepadSensitivity(t){this.sensitivity=t,this.deadzone=.05*(9-this.sensitivity),this.deadzone<.01&&(this.deadzone=.01),this.analogThreshold=18-2*this.sensitivity}setGamepadContinuousAxisEnabled(t){this.continuousAxis=t}dispose(){for(const t of this.subscriptions)t.unsubscribe()}}function w(t=new E,e=window){return A(new s.y(n=>{const o=e.setInterval(()=>{n.next(t.update())},16)
return()=>e.clearInterval(o)}))}function A(t){return(0,r.z)((0,i.of)([]),t.pipe((0,a.U)(t=>Object.keys(t).filter(e=>t[e])))).pipe((0,u.G)()).pipe((0,a.U)(([t,e])=>h().difference(e,t))).pipe((0,c.b)(t=>(0,i.of)(...t)))}const P=E,C=new Map
function M(t){if(+t)return h().capitalize(S()(+t))
{const e=t.match(/^gamepad\.(\d+)\.axis\.(\d+)\.(\w+)/)
if(e)return`Joy${e[1]} Axis${e[2]} (${"positive"===e[3]?"+":"-"})`}{const e=t.match(/^gamepad\.(\d+)\.button\.(\d+)/)
if(e)return`Joy${e[1]} Btn${e[2]}`}{const e=t.match(/^midi\.(.+)\.(\d+)\.(.+)$/)
if(e){const t=e[3].split("."),n=e[1]
C.has(n)||C.set(n,C.size+1)
const o=`MIDI${C.get(n)} Ch${+e[2]+1}`
if("note"===t[0]){const e=+t[1]
return`${o} ${["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][e%12]}${Math.floor(e/12)-1}`}if("pitch"===t[0])return`${o} Pitch${"up"===t[1]?"+":"-"}`
if("sustain"===t[0])return"Sustain"
if("mod"===t[0])return"Mod"}}return`${String(t).replace(/\./g," ")}?`}},14311:(t,e,n)=>{"use strict"
n.d(e,{E:()=>s})
var o=n(26365)
class s{constructor(){this.current=void 0,this.total=void 0,this._observable=new o.Z}report(t,e,n){this.current=t,this.total=e,this.extra=n,this._observable.notify()}watch(t){return t(this),this._observable.watch(()=>t(this))}get progress(){return this.total&&void 0!==this.current&&null!==this.current?this.current/this.total:null}toString(){return void 0!==this.formatter?this.formatter(this):null!==this.progress?this.current+" / "+this.total:""}}},14859:(t,e,n)=>{"use strict"
n.d(e,{cY:()=>u,qw:()=>i,u_:()=>a})
var o=n(45128),s=n.n(o)
const r=t=>e=>null!==e.progress?t(e):"",i=r(t=>s()(t.current)+" / "+s()(t.total)),a=r(t=>(t.current/t.total*100).toFixed(1)+"%"),u=r(t=>t.extra+"")},19484:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>o})
const o=n(14311).E},71615:(t,e,n)=>{"use strict"
n.d(e,{Bd:()=>s,Lg:()=>i,UP:()=>r,_W:()=>u,ak:()=>a})
var o=n(14859)
function s(t,e){if(!e)return()=>{}
let n=0
return e.report(0,t),o=>e.report(++n,t,o)}async function r(t,e){if(!t)return e
const n=await Promise.resolve(e)
return!function(t){return t&&t.byteLength}(n)?t.report(1,1):(t.formatter=o.qw,t.report(n.byteLength,n.byteLength)),n}function i(t,e){let n=0,o=0
return async function(...s){t.report(n,++o)
const r=await e.apply(this,s)
return t.report(++n,o),r}}function a(t,e){return t.watch(()=>e.report(t.current,t.total,t.extra))}function u(t){const e=[]
let n,o=null
function s(){n&&t.report(n.current,n.total,n.extra),e.length>0&&(!n||n.progress>=1)&&function(t){if(n===t)return
o&&(o(),o=null)
n=t,n&&(o=n.watch(s))}(e.shift())}return{add(t){e.push(t),s()}}}},26106:(t,e,n)=>{"use strict"
n.d(e,{E:()=>o})
const o=new(n(84826).QueryClient)},62580:(t,e,n)=>{"use strict"
function o(t,e,n){if(e.match(/\.(?:bms|bme|bml|bmson)/i))return void n(e)
const o=(t+e).split("/")
for(let t=0;t<o.length;t++)n(o.slice(t).join("/"))}n.d(e,{N:()=>o})},19294:(t,e,n)=>{"use strict"
n.d(e,{pS:()=>l,AQ:()=>h,xH:()=>p,dG:()=>g})
var o=n(71615)
class s{constructor(){this.buffer=[],this.loggingFunction=t=>{this.buffer&&this.buffer.push(t)},this.log=t=>{this.loggingFunction(t)},this.setLoggingFunction=t=>{this.loggingFunction=t,this.buffer&&(this.buffer.forEach(e=>t(e)),this.buffer=null)}}}var r=n(1588),i=n(62580)
r.X.init({workerUrl:"/vendor/libarchive.js-1.3.0/dist/worker-bundle.js"})
var a=n(24030),u=n(19484),c=n(77010)
const l=/\.(?:zip|rar|7z|tar(?:\.(?:gz|bz2))?)/i,d=/https?:\/\/(?:(?:www|dl)\.dropbox\.com|dl\.dropboxusercontent\.com)\/(sh?)\/([^?]*)(.*)?$/
class h{constructor(t){this._logging=new s,this.setLoggingFunction=this._logging.setLoggingFunction,this._files=Promise.resolve(t.getFiles(this._logging.log)).then(t=>async function(t,e){if(1!==t.length)return t
const n=t[0]
if(!n.name.match(l))return t
return e("Archive file detected! Now unarchiving…"),async function(t){const e=[],n=await r.X.open(t),o=await n.extractFiles(),s=(t,n="")=>{for(const o of Object.keys(t))t[o]instanceof File?(0,i.N)(n,o,n=>{e.push({name:n,file:t[o]})}):t[o]&&"object"==typeof t[o]&&s(t[o],n+o+"/")}
return s(o),e}(n.file)}(t,this._logging.log))}file(t){return this._files.then(function(e){for(const n of e)if(n.name.toLowerCase()===t.toLowerCase())return new p(n.file)
throw new Error("unable to find "+t)})}get fileList(){return Promise.resolve(this._files).then(t=>t.map(t=>t.name))}}class p{constructor(t){this._file=t}read(t){return o.UP(t,(0,a.Z)(this._file).as("arraybuffer"))}resolveUrl(){return Promise.resolve(URL.createObjectURL(this._file))}get name(){return this._file.name}}async function g(t,e){const n=t.replace(/[?#].*/,"").split("/").pop(),o=t.match(d)
o&&(t=`https://dl.dropboxusercontent.com/${o[1]}/${o[2]}`)
const s=new u.Z
let r=0
s.watch(()=>{Date.now()<r+5e3||(e(`Downloading: ${s}`),r=Date.now())})
return{name:n,file:await(0,c.Z)(t).as("blob",s)}}},16128:(t,e,n)=>{"use strict"
n.d(e,{CA:()=>i,ZP:()=>a})
var o=n(77010),s=n(72103)
class r{constructor(t){this.url=t}read(t){return(0,o.Z)(this.url).as("arraybuffer",t)}async resolveUrl(){return Promise.resolve(this.url)}get name(){return(0,s.basename)(this.url)}}class i{constructor(t){this.base=t}async file(t){const e=t.split("/").map(t=>encodeURIComponent(t)).join("/")
return new r(new URL(e,this.base).href)}}const a=r},59236:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>o})
const o=class{constructor(t){if(this._callbacks={},this._nextId=1,"function"==typeof t)this.add(t)
else if("object"==typeof t&&t&&t.length)for(let e=0;e<t.length;e++)this.add(t[e])}call(...t){const e=this._callbacks
for(const n in e)e[n](...t)}add(t){const e=this._nextId++
return this._callbacks[e]=t,()=>delete this._callbacks[e]}}},77010:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>i})
var o=n(26826),s=n.n(o),r=n(14859)
const i=function(t,{getRetryDelay:e=()=>1e3+4e3*Math.random()}={}){return{async as(n,o){let i=!1
for(let n=1;;n++)try{return await a()}catch(o){if(console.error(`Unable to download ${t} [attempt ${n}]`,o),n>=3||i)throw o
const r=e()
await s()(r)}function a(){return new Promise((e,s)=>{const a=new XMLHttpRequest
a.open("GET",t,!0),a.responseType=n,a.onload=()=>{200===+a.status?e(a.response):(403!==+a.status&&404!==+a.status||(i=!0),s(new Error(`Unable to download ${t}: HTTP ${a.status}`)))},a.onerror=()=>s(new Error(`Unable to download ${t}`)),o&&(o.formatter=r.qw,a.onprogress=t=>o.report(t.loaded,t.total)),a.send(null)})}}}}},82775:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>o})
const o=function(t){const e=Math.floor(t%60)
return Math.floor(t/60)+":"+(e<10?"0":"")+e}},68536:(t,e,n)=>{"use strict"
n.d(e,{SC:()=>a,ZP:()=>c})
const o=n(10757).u("timesynchro"),s="https://cloudflare.com/cdn-cgi/trace"
let r=0
function i(){return window.performance&&"function"==typeof window.performance.now?window.performance.now():Date.now()}function a(t){const e=t.trim(),n=e.match(/(?:^|\n)ts=([\d.]+)/)
return n?Math.round(1e3*parseFloat(n[1])):/^\d+$/.test(e)?Number(e):null}function u(t){if("undefined"!=typeof AbortSignal&&"timeout"in AbortSignal)return AbortSignal.timeout(t)}i.synchronize=function(){(async function(){const t=[]
for(let e=0;e<8;e++)try{const e=Date.now(),n=await fetch(s,{cache:"no-store",signal:u(5e3)}),o=Date.now(),r=a(await n.text())
null!=r&&t.push(r-(e+o)/2)}catch{}if(!t.length)throw new Error("no offset received")
return function(t){const e=[...t].sort((t,e)=>t-e),n=Math.floor(e.length/2)
return e.length%2==0?(e[n-1]+e[n])/2:e[n]}(t)})().then(t=>{r=t+Date.now()-i(),o.info(`Synchronized time with ${s}! Offset = ${r}`)},t=>{o.error("Cannot synchronize time: "+t)})},i.synchronized=function(){const t=r
return()=>i()+t}
const c=i},26365:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>s})
var o=n(59236)
const s=class{constructor(t){this._callbacks=new o.Z,this._value=t}get value(){return this._value}set value(t){this._value=t,this.notify(t)}notify(t){this._callbacks.call(t)}watch(t){return void 0!==this._value&&t(this._value),this._callbacks.add(t)}}},24030:(t,e,n)=>{"use strict"
n.d(e,{Z:()=>o})
const o=function(t){return{as:e=>new Promise(function(n,o){const s=new FileReader
switch(s.onload=function(){n(s.result)},s.onerror=function(){o(new Error("Unable to read from Blob"))},e){case"arraybuffer":s.readAsArrayBuffer(t)
break
case"text":s.readAsText(t)}})}}},96008:function(t,e,n){"use strict"
var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n)
var s=Object.getOwnPropertyDescriptor(e,n)
s&&!("get"in s?!e.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,s)}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),s=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)},r=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],o=0
if(n)return n.call(t)
if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}}
Object.defineProperty(e,"__esModule",{value:!0}),e.Notechart=void 0
var a=i(n(89599)),u=i(n(48274))
s(n(26923),e)
var c=function(){function t(t,e){void 0===e&&(e={})
var n=this,o=t.notes,s=t.timing,r=t.keysounds,i=t.songInfo,a=t.positioning,c=t.spacing,l=t.barLines,d=t.images,h=t.expertJudgmentWindow,p=t.landmineNotes,g=void 0===p?[]:p;(0,u.default)(o,'Expected "data.notes"'),(0,u.default)(s,'Expected "data.timing"'),(0,u.default)(r,'Expected "data.keysounds"'),(0,u.default)(i,'Expected "data.songInfo"'),(0,u.default)(a,'Expected "data.positioning"'),(0,u.default)(c,'Expected "data.spacing"'),(0,u.default)(l,'Expected "data.barLines"'),this.expertJudgmentWindow=h,o=this._preTransform(o,e),this._timing=s,this._positioning=a,this._spacing=c,this._keysounds=r,this._duration=0,this._notes=this._generatePlayableNotesFromBMS(o),this._landmines=this._generatePlayableNotesFromBMS(g),this._autos=this._generateAutoKeysoundEventsFromBMS(o),this._barLines=this._generateBarLineEvents(l),this._samples=this._generateKeysoundFiles(r),this._infos=new Map(this._notes.map(function(t){return[t,n._getNoteInfo(t)]})),this._songInfo=i,this._images=d}return Object.defineProperty(t.prototype,"notes",{get:function(){return this._notes},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"landmines",{get:function(){return this._landmines},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autos",{get:function(){return this._autos},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"samples",{get:function(){return this._samples},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keysounds",{get:function(){return this._keysounds.all()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"barLines",{get:function(){return this._barLines},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"columns",{get:function(){return["SC","1","2","3","4","5","6","7"]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"songInfo",{get:function(){return this._songInfo},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"eyecatchImage",{get:function(){return this._images&&this._images.eyecatch||"eyecatch_image.png"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"backgroundImage",{get:function(){return this._images&&this._images.background||"back_image.png"},enumerable:!1,configurable:!0}),t.prototype.info=function(t){return this._infos.get(t)},t.prototype.beatToSeconds=function(t){return this._timing.beatToSeconds(t)},t.prototype.beatToPosition=function(t){return this._positioning.position(t)},t.prototype.measureToBeat=function(t){return(this._barLines[t]||this._barLines[this._barLines.length-1]).beat},t.prototype.secondsToBeat=function(t){return this._timing.secondsToBeat(t)},t.prototype.secondsToPosition=function(t){return this.beatToPosition(this.secondsToBeat(t))},t.prototype.bpmAtBeat=function(t){return this._timing.bpmAtBeat(t)},t.prototype.scrollSpeedAtBeat=function(t){return this._positioning.speed(t)},t.prototype.spacingAtBeat=function(t){return this._spacing.factor(t)},t.prototype.getKeyMode=function(t){var e,n,o={}
try{for(var s=r(this.notes),i=s.next();!i.done;i=s.next()){o[i.value.column]=!0}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return("off"!==t||o[1]||o[7])&&("left"!==t||o[6]||o[7])&&("right"!==t||o[1]||o[2])?"7K":"5K"},t.prototype._preTransform=function(t,e){var n=a.default.chain(t),o=function(t){var e,n
try{for(var o=r(t),s=o.next();!s.done;s=o.next()){var i=s.value
if("6"===i.column||"7"===i.column)return"7K"}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return"5K"}(t)
if("off"===e.scratch&&(n=n.map(function(t){return t.column&&"SC"===t.column?Object.assign({},t,{column:null}):t})),"5K"===o){var s=["1","2","3","4","5","6","7"],i=function(t){return function(e){if(e.column){var n=s.indexOf(e.column)
if(n>-1){var o=n+t;(0,u.default)(o<s.length,"Weird. Columns must not shift beyond available column")
var r=s[o]
return Object.assign({},e,{column:r})}}return e}}
"off"===e.scratch?n=n.map(i(1)):"right"===e.scratch&&(n=n.map(i(2)))}return n.value()},t.prototype._generatePlayableNotesFromBMS=function(t){var e=this,n=1
return t.filter(function(t){return t.column}).map(function(t){var o=e._generateEvent(t.beat)
return o.id=n++,o.column=t.column,o.keysound=t.keysound,o.keysoundStart=t.keysoundStart,o.keysoundEnd=t.keysoundEnd,e._updateDuration(o),void 0!==t.endBeat?(o.end=e._generateEvent(t.endBeat),e._updateDuration(o.end)):o.end=void 0,o})},t.prototype._generateLandminesFromBMS=function(t){var e=this,n=1
return t.filter(function(t){return t.column}).map(function(t){var o=e._generateEvent(t.beat)
return o.id=n++,o.column=t.column,e._updateDuration(o),o})},t.prototype._updateDuration=function(t){t.time>this._duration&&(this._duration=t.time)},t.prototype._generateAutoKeysoundEventsFromBMS=function(t){var e=this
return t.filter(function(t){return!t.column}).map(function(t){var n=e._generateEvent(t.beat)
return n.keysound=t.keysound,n.keysoundStart=t.keysoundStart,n.keysoundEnd=t.keysoundEnd,n})},t.prototype._generateKeysoundFiles=function(t){var e,n,o,s,i=new Set
try{for(var a=r([this.notes,this.autos]),u=a.next();!u.done;u=a.next()){var c=u.value
try{for(var l=(o=void 0,r(c)),d=l.next();!d.done;d=l.next()){var h=d.value,p=t.get(h.keysound)
p&&i.add(p)}}catch(t){o={error:t}}finally{try{d&&!d.done&&(s=l.return)&&s.call(l)}finally{if(o)throw o.error}}}}catch(t){e={error:t}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return Array.from(i)},t.prototype._generateBarLineEvents=function(t){var e=this
return t.map(function(t){return e._generateEvent(t)})},t.prototype._generateEvent=function(t){return{beat:t,time:this.beatToSeconds(t),position:this.beatToPosition(t)}},t.prototype._getNoteInfo=function(t){return{combos:t.end?2:1}},t}()
e.Notechart=c,e.default=c},88339:function(t,e,n){"use strict"
var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n)
var s=Object.getOwnPropertyDescriptor(e,n)
s&&!("get"in s?!e.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,s)}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n)
return s(e,t),e},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}}
Object.defineProperty(e,"__esModule",{value:!0}),e.fromBMSChart=void 0
var a=r(n(35982)),u=i(n(89599)),c=i(n(96008))
function l(t){var e=+t.headers.get("rank")||2
return 0===e?[8,24]:1===e?[15,30]:3===e?[21,60]:[18,40]}function d(t,e){var n=u.default.max(t.map(function(t){return t.endBeat||t.beat}))||0,o=[0],s=0,r=0
do{s+=e.timeSignatures.getBeats(r),r+=1,o.push(s)}while(s<=n)
return o}e.fromBMSChart=function(t,e){var n=a.Notes.fromBMSChart(t,{mapping:e.double?a.Notes.CHANNEL_MAPPING.IIDX_DP:a.Notes.CHANNEL_MAPPING.IIDX_P1}).all(),o={notes:n,landmineNotes:a.Notes.fromBMSChart(t,{mapping:e.double?a.Notes.CHANNEL_MAPPING.IIDX_DP_LANDMINE:a.Notes.CHANNEL_MAPPING.IIDX_P1_LANDMINE}).all(),timing:a.Timing.fromBMSChart(t),keysounds:a.Keysounds.fromBMSChart(t),songInfo:a.SongInfo.fromBMSChart(t),positioning:a.Positioning.fromBMSChart(t),spacing:a.Spacing.fromBMSChart(t),barLines:d(n,t),expertJudgmentWindow:l(t)}
return new c.default(o,e)}},26923:(t,e)=>{"use strict"
Object.defineProperty(e,"__esModule",{value:!0})},99191:()=>{},12057:()=>{},21421:()=>{},10159:()=>{},65933:()=>{},10639:()=>{},63620:()=>{}}])

//# sourceMappingURL=793-d336919e601df39f8040.js.map