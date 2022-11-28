"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[189],{30067:function(e,t,n){var r=n(95970),o=n.n(r),i=n(50146),a=n.n(i)()(o())
a.push([e.id,'@charset "UTF-8";\n.BemusePreviewer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 18px;\n}\n.BemusePreviewerのheader {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 50px;\n  left: 0;\n  background-color: #e34e7a;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 0 1em;\n}\n.BemusePreviewerのheader > h1 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: normal;\n}\n.BemusePreviewerのheader > h1 strong {\n  font-weight: 600;\n}\n.BemusePreviewerのheader > h1 a {\n  color: inherit;\n  text-decoration: none;\n}\n.BemusePreviewerのmain {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: flex-start;\n}\n.BemusePreviewerのloading {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5333333333);\n  color: #fff;\n  text-align: left;\n  padding: 2em;\n}',"",{version:3,sources:["webpack://./previewer/BemusePreviewer.scss"],names:[],mappings:"AAAA,gBAAgB;AAEhB;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,eAAA;AAAF;AAEE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,YAAA;EACA,OAAA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;AAAJ;AAGE;EACE,SAAA;EACA,eAAA;EACA,mBAAA;AADJ;AAIE;EACE,gBAAA;AAFJ;AAKE;EACE,cAAA;EACA,qBAAA;AAHJ;AAME;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,aAAA;EACA,uBAAA;AAJJ;AAOE;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,uCAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;AALJ",sourcesContent:["@import '~bemuse/ui/common';\n\n.BemusePreviewer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 18px;\n\n  &のheader {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 50px;\n    left: 0;\n    background-color: #e34e7a;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    padding: 0 1em;\n  }\n\n  &のheader > h1 {\n    margin: 0;\n    font-size: 20px;\n    font-weight: normal;\n  }\n\n  &のheader > h1 strong {\n    font-weight: 600;\n  }\n\n  &のheader > h1 a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  &のmain {\n    position: absolute;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  &のloading {\n    position: absolute;\n    top: 50px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: #0008;\n    color: #fff;\n    text-align: left;\n    padding: 2em;\n  }\n}\n"],sourceRoot:""}]),t.Z=a},24928:function(e,t,n){var r=n(95970),o=n.n(r),i=n(50146),a=n.n(i)()(o())
a.push([e.id,'@charset "UTF-8";\n.PreviewInfo {\n  padding: 1em;\n}\n.PreviewInfo > h2 {\n  margin: 0 0 0em;\n}\n.PreviewInfoのkeyHints {\n  color: #8b8685;\n  font-size: 12px;\n  line-height: 2;\n}\n.PreviewInfoのkeyHints > kbd {\n  font-family: inherit;\n  padding: 0.1em 0.2em;\n  background: #222;\n  border: 1px solid #333;\n  border-radius: 4px;\n  box-shadow: 0 3px 0 #333;\n  display: inline-block;\n  line-height: 1;\n}\n.PreviewInfo td {\n  text-align: right;\n  font-family: Menlo, Consolas, monospace;\n}\n.PreviewInfo th {\n  text-align: left;\n}',"",{version:3,sources:["webpack://./previewer/PreviewInfo.scss"],names:[],mappings:"AAAA,gBAAgB;AAAhB;EACE,YAAA;AAEF;AADE;EACE,eAAA;AAGJ;AAAE;EACE,cAAA;EACA,eAAA;EACA,cAAA;AAEJ;AACE;EACE,oBAAA;EACA,oBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,wBAAA;EACA,qBAAA;EACA,cAAA;AACJ;AAEE;EACE,iBAAA;EACA,uCAAA;AAAJ;AAGE;EACE,gBAAA;AADJ",sourcesContent:[".PreviewInfo {\n  padding: 1em;\n  & > h2 {\n    margin: 0 0 0em;\n  }\n\n  &のkeyHints {\n    color: #8b8685;\n    font-size: 12px;\n    line-height: 2;\n  }\n\n  &のkeyHints > kbd {\n    font-family: inherit;\n    padding: 0.1em 0.2em;\n    background: #222;\n    border: 1px solid #333;\n    border-radius: 4px;\n    box-shadow: 0 3px 0 #333;\n    display: inline-block;\n    line-height: 1;\n  }\n\n  & td {\n    text-align: right;\n    font-family: Menlo, Consolas, monospace;\n  }\n\n  & th {\n    text-align: left;\n  }\n}\n"],sourceRoot:""}]),t.Z=a},51346:function(e,t,n){var r=n(95970),o=n.n(r),i=n(50146),a=n.n(i)()(o())
a.push([e.id,'@charset "UTF-8";\n.Panel {\n  border: 1px solid #151413;\n  border-radius: 4px 4px 0 0;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);\n  background: #353433;\n}\n.Panelのtitle {\n  background: #252423 linear-gradient(to bottom, #353433 0%, #252423 50%, #151413 50%, #252423 100%);\n  border-bottom: 0;\n  text-align: center;\n  color: #8b8685;\n  padding: 0.5ex 1em;\n}\n.Panelのtitle > h2 {\n  margin: 0;\n  font: inherit;\n}',"",{version:3,sources:["webpack://./ui/Panel.scss"],names:[],mappings:"AAAA,gBAAgB;AAEhB;EACE,yBAAA;EACA,0BAAA;EACA,yCAAA;EACA,mBAAA;AAAF;AAEE;EACE,kGAAA;EAQA,gBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;AAPJ;AAUE;EACE,SAAA;EACA,aAAA;AARJ",sourcesContent:["@import '~bemuse/ui/common';\n\n.Panel {\n  border: 1px solid #151413;\n  border-radius: 4px 4px 0 0;\n  box-shadow: 0 2px 20px rgba(black, 0.3);\n  background: #353433;\n\n  &のtitle {\n    background: #252423\n      linear-gradient(\n        to bottom,\n        #353433 0%,\n        #252423 50%,\n        #151413 50%,\n        #252423 100%\n      );\n    border-bottom: 0;\n    text-align: center;\n    color: #8b8685;\n    padding: 0.5ex 1em;\n  }\n\n  &のtitle > h2 {\n    margin: 0;\n    font: inherit;\n  }\n}\n"],sourceRoot:""}]),t.Z=a},22022:function(e,t){t.Z=new AudioContext({latencyHint:"interactive"})},96187:function(e,t,n){n.r(t),n.d(t,{main:function(){return re}})
var r=n(63929),o=n(6560),i=n(95280),a=n(87672),s=n.n(a),u=n(95541),c=n.n(u),l=n(24324),d=n.n(l),m=n(26419),h=n.n(m),f=n(15669),p=n.n(f),A=n(95076),g=n.n(A),b=n(30067),y={}
y.styleTagTransform=g(),y.setAttributes=h(),y.insert=d().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p()
s()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals
var _=n(62270),v=n.n(_)
const w={x:0,width:61},E={x:62,width:34,highlight:!0},B={x:97,width:26},S={x:159,width:26}
class C{constructor(e){let t=0
const n=(e,n)=>{const r=t
return t+=e+1,{x:r,width:e,column:n}},r=(e,t)=>({...n(e.width,t),sprite:e})
this.columns=e.split(" ").map((e=>"-"===e?n(72,null):e.endsWith("s")?r(w,e.slice(0,-1)):e.endsWith("b")?r(B,e.slice(0,-1)):e.endsWith("g")?r(S,e.slice(0,-1)):r(E,e))),this.totalWidth=t,this.columnMapping=v().fromPairs(this.columns.filter((e=>null!=e.column)).map((e=>[e.column,e])))}}const P=e=>{const t="SCs 1 2b 3 4g 5 6b 7 - 8 9b 10 11g 12 13b 14 SC2s",n=x("/skins/default/Note/DX/Note.png"),o=x("/skins/default/Note/DX/Landmine.png"),i=r.useRef(null),a=(0,r.useMemo)((()=>new C(t)),[t]),s=a.totalWidth+1,u=468,c=(0,r.useMemo)((()=>e.notechartPreview.getViewport(e.previewState.currentTime,e.previewState.hiSpeed)),[e.notechartPreview,e.previewState.currentTime,e.previewState.hiSpeed]),l=e.notechartPreview.getMaxCombo(),d=(0,r.useMemo)((()=>e.notechartPreview.getComboInfo(e.previewState.currentTime)),[e.notechartPreview,e.previewState.currentTime])
return(0,r.useEffect)((()=>{var t,r
const m=null===(t=i.current)||void 0===t?void 0:t.getContext("2d")
if(m){m.fillStyle="#000",m.fillRect(0,0,s,u)
for(const e of a.columns)m.fillStyle="#555",m.fillRect(e.x,0,1,u),(null===(r=e.sprite)||void 0===r?void 0:r.highlight)&&(m.fillStyle="#111",m.fillRect(e.x+1,0,e.width,u))
m.fillStyle="#555",m.fillRect(a.totalWidth,0,1,u),m.textAlign="center",m.font="bold 18px sans-serif"
for(const e of c.visibleBarLines){const t=Math.round(u-e.y*u)
m.fillRect(0,t-1,a.totalWidth,1),m.fillText("#"+e.measureNumber,a.totalWidth/2,t-4)}if(n&&o)for(const e of c.visibleNotes){const t=a.columnMapping[e.gameEvent.column]
if(null==t?void 0:t.sprite){const r=Math.round(u-e.y*u)
if(e.long){const o=Math.round(u-e.long.endY*u),i=e.long.active?100:0
m.drawImage(n,t.sprite.x,104+i,t.width,8,t.x+1,r-8,t.width,8),m.drawImage(n,t.sprite.x,12+i,t.width,8,t.x+1,o-12,t.width,8)
const a=r-o-4
a>0&&m.drawImage(n,t.sprite.x,22+i,t.width,64,t.x+1,o-4,t.width,a)}else{const i="landmine"===e.type?o:n
m.drawImage(i,t.sprite.x,0,t.width,12,t.x+1,r-12,t.width,12)}}}if(d){const t=e.previewState.currentTime-d.comboTime,n=Math.max(0,1-t)
n>0&&(m.fillStyle="rgba(255, 255, 255, "+n+")",m.font="bold 36px sans-serif",m.textAlign="center",m.fillText(`${d.comboCount} / ${l}`,a.totalWidth/2,404-n**8*8))}}}),[s,u,a,c,n,l,d,e.previewState.currentTime]),r.createElement("canvas",{ref:i,width:s,height:u,style:{imageRendering:"pixelated"}})}
function x(e){const[t,n]=r.useState(null)
return(0,r.useEffect)((()=>{const t=new Image
return t.src=e,t.onload=()=>n(t),()=>{t.onload=null}}),[e]),t}var T=n(24928),M={}
M.styleTagTransform=g(),M.setAttributes=h(),M.insert=d().bind(null,"head"),M.domAPI=c(),M.insertStyleElement=p()
s()(T.Z,M),T.Z&&T.Z.locals&&T.Z.locals
var k=n(70415)
const N=e=>{const t=e.notechartPreview,n=(0,r.useMemo)((()=>e.notechartPreview.getMeasureInfo(e.previewState.currentTime)),[e.notechartPreview,e.previewState.currentTime]),o=(0,r.useMemo)((()=>e.notechartPreview.getCurrentBpm(e.previewState.currentTime)),[e.notechartPreview,e.previewState.currentTime]),i=(0,r.useMemo)((()=>e.notechartPreview.getCurrentScroll(e.previewState.currentTime)),[e.notechartPreview,e.previewState.currentTime]),a=(0,r.useMemo)((()=>e.notechartPreview.getCurrentSpeed(e.previewState.currentTime)),[e.notechartPreview,e.previewState.currentTime]),s=e.previewState.hiSpeed,u=e=>e.toFixed(2),c=e=>`${~~(e/60)}:${(~~e%60).toString().padStart(2,"0")}`,l=(0,r.useMemo)((()=>r.createElement("p",{className:"PreviewInfoのkeyHints"},r.createElement("kbd",null,"Space")," Play/Pause",r.createElement("br",null),r.createElement("kbd",null,"Up/Down/Left/Right/,/.")," Seek",r.createElement("br",null),r.createElement("kbd",null,"G")," Go To Measure",r.createElement("br",null),r.createElement("kbd",null,"1/2")," Hi-Speed",r.createElement("br",null),r.createElement("kbd",null,"R")," Reload Chart")),[])
return r.createElement("div",{className:"PreviewInfo"},r.createElement("h2",null,t.name),r.createElement("p",null,t.description),r.createElement("table",null,r.createElement("col",{width:80}),r.createElement("col",{width:120}),r.createElement("col",{width:80}),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",{scope:"row"},"Time"),r.createElement("td",{colSpan:2},c(e.previewState.currentTime)," /"," ",c(e.notechartPreview.duration))),r.createElement("tr",null,r.createElement("th",{scope:"row"},"Measure"),r.createElement("td",{colSpan:2},r.createElement(O,{measureInfo:n})," #",n.measureNumber)),r.createElement("tr",null,r.createElement("th",{scope:"row"},"#BPM"),r.createElement("td",null),r.createElement("td",null,u(o))),r.createElement("tr",null,r.createElement("th",{scope:"row"},"#SCROLL"),r.createElement("td",null,u(i),"x →"),r.createElement("td",null,u(o*i))),r.createElement("tr",null,r.createElement("th",{scope:"row"},"#SPEED"),r.createElement("td",null,u(a),"x →"),r.createElement("td",null,u(o*i*a))),r.createElement("tr",null,r.createElement("th",{scope:"row"},"HI-SPEED"),r.createElement("td",null,u(s),"x →"),r.createElement("td",null,u(o*i*a*s))))),l)},O=e=>{const{measureInfo:t}=e
if(!t.measureEndBeat)return null
const n=t.measureEndBeat-t.measureStartBeat
if(!n)return null
let o=n,i=1
for(;o>=8;)i*=2,o/=2
for(;o<=2;)i/=2,o*=2
const a=[]
let s=Math.ceil((t.currentBeat-t.measureStartBeat)/i)
for(;o>0;)a.push(r.createElement(k.q,{key:a.length,fraction:o>1?1:o,fill:s>0?"#e34e7a":"#333"})),o--,s--
return r.createElement(r.Fragment,null,a)}
var j=n(59615)
const I=e=>((0,r.useEffect)((()=>{const t=e=>{e.preventDefault()},n=async t=>{t.preventDefault()
const n=t.dataTransfer.items
if(1!==n.length)return void alert("Please drop only one folder.")
const r=n[0]
if("file"!==r.kind)return void alert("Please drop only a folder here.")
if(!("getAsFileSystemHandle"in r))return void alert("Unsupported browser (sorry).")
const o=await r.getAsFileSystemHandle()
if(!o||"directory"!==o.kind)return void alert("Please drop folder, not a file here.")
const i=o
await i.requestPermission({mode:"read"})
const a=[]
for await(const[e]of i.entries())/\.(bms|bme|bml|bmson)$/i.test(e)&&a.push({filename:e,label:e})
if(0===a.length)return void alert("No BMS/bmson files found in folder.")
const s=await(0,j.Fe)(a,{title:"Select a chart file"})
e.onDrop(i,s.filename)}
return window.addEventListener("dragover",t),window.addEventListener("drop",n),()=>{window.removeEventListener("dragover",t),window.removeEventListener("drop",n)}}),[e.onDrop]),null)
var L=n(41559),D=n.n(L),F=n(73850),R=n.n(F),Z=n(45780),G=n.n(Z),J=n(10426),U=n(68796)
function $(){return{duration:.99,name:"No BMS/bmson loaded",description:"Drop a folder with BMS/bmson files into this window to preview it."+("bemuse.ninja"!==location.hostname?" [NOTE: Do not bookmark this URL because it is a preview and this URL will stop working in the future.]":""),getViewport:()=>({visibleBarLines:[],visibleNotes:[]}),getMeasureInfo:()=>({currentBeat:0,measureNumber:0,measureStartBeat:0}),getCurrentBpm:()=>0,getCurrentScroll:()=>0,getCurrentSpeed:()=>0,play:e=>(setTimeout((()=>{e.onFinish()})),{stop:()=>{}}),measureToSeconds:()=>0,getMeasureJumpTarget:()=>0,getComboInfo:()=>null,getMaxCombo:()=>0}}class H{constructor(e,t,n,r,o){this._notechart=e,this._filename=t,this._samplingMaster=n,this._soundGroup=r,this._samples=o,this._sortedGameNotes=v().sortBy(this._notechart.notes,(e=>e.position)),this._sortedGameLandmines=v().sortBy(this._notechart.landmines,(e=>e.position)),this._sortedSoundEvents=v().sortBy([...this._notechart.notes,...this._notechart.autos],(e=>e.time)),this._comboPreviewer=new K(this._notechart.notes)}get duration(){return this._notechart.duration}get name(){return this._filename}get description(){return this._notechart.songInfo.title}getViewport(e,t){const n=this._secondsToBeat(e),r=this._notechart.beatToPosition(n),o=4/this._notechart.spacingAtBeat(n)/t,i=[],a=t=>t.end?!(e>t.end.time)&&(!(t.position>r+1.5*o)&&!(t.end.position<r-.5*o)):!(e>t.time)&&(!(t.position>r+1.5*o)&&!(t.position<r-.5*o))
for(const t of this._sortedGameNotes){if(!a(t))continue
const n={gameEvent:t,y:(t.position-r)/o,type:"note"}
if(t.end){const i=(t.end.position-r)/o,a=e>=t.time&&e<t.end.time
n.long={endY:i,active:a}}i.push(n)}for(const e of this._sortedGameLandmines){if(!a(e))continue
const t={gameEvent:e,y:(e.position-r)/o,type:"landmine"}
i.push(t)}const s=[]
for(const[e,t]of this._notechart.barLines.entries()){if(t.position>r+1.5*o)continue
if(t.position<r-.5*o)continue
const n=t.position-r
s.push({y:n/o,measureNumber:e})}return{visibleNotes:i,visibleBarLines:s}}getMeasureInfo(e){var t
const n=this._secondsToBeat(e)
let r=0,o=0
for(const[e,t]of this._notechart.barLines.entries()){if(n<t.beat)break
r=e,o=t.beat}return{currentBeat:n,measureNumber:r,measureStartBeat:o,measureEndBeat:null===(t=this._notechart.barLines[r+1])||void 0===t?void 0:t.beat}}getCurrentBpm(e){return this._notechart.bpmAtBeat(this._secondsToBeat(e))}getCurrentScroll(e){return this._notechart.scrollSpeedAtBeat(this._secondsToBeat(e))}getCurrentSpeed(e){return this._notechart.spacingAtBeat(this._secondsToBeat(e))}measureToSeconds(e){const t=this._notechart.measureToBeat(e)
return this._notechart.beatToSeconds(t)}getMeasureJumpTarget(e,t){const n=this._secondsToBeat(e),r=v().minBy(this._notechart.barLines,(e=>Math.abs(e.beat-n)))
if(!r)return e
const o=this._notechart.barLines.indexOf(r),i=this._notechart.barLines[o+t]
return i?i.time:e}getComboInfo(e){return this._comboPreviewer.getComboInfo(e)}getMaxCombo(){return this._comboPreviewer.getMaxCombo()}_secondsToBeat(e){return this._secondsToBeatCache&&this._secondsToBeatCache.seconds===e||(this._secondsToBeatCache={seconds:e,beat:this._notechart.secondsToBeat(e)}),this._secondsToBeatCache.beat}play(e){this._samplingMaster.unmute(),console.log(this._sortedSoundEvents),console.log(this._notechart.keysounds)
const t=new W(this._samplingMaster,this._soundGroup,this._sortedSoundEvents,this._notechart.keysounds,this._samples,e)
return t.play(),t}}class W{constructor(e,t,n,r,o,i){this._samplingMaster=e,this._soundGroup=t,this._sortedSoundEvents=n,this._keysounds=r,this._delegate=i,this._cursor=0,this._sampleMap=new Map,this._startAudioTime=0,this._startSongTime=0,this._stopped=!1,this._playingSamples=new Map
for(const{filename:e,sample:t}of o)t&&this._sampleMap.set(e,t)}play(){this._startAudioTime=this._samplingMaster.currentTime,this._startSongTime=this._delegate.startTime
const e=()=>{this._stopped||(this._advance(),requestAnimationFrame(e))}
requestAnimationFrame(e)}_advance(){const e=this._samplingMaster.currentTime-this._startAudioTime+this._startSongTime
for(;this._cursor<this._sortedSoundEvents.length;this._cursor++){const t=this._sortedSoundEvents[this._cursor]
if(t.time>e+.1)break
if(t.keysoundStart)continue
const n=t.keysound,r=this._keysounds[n.toLowerCase()]
if(!r)continue
const o=this._sampleMap.get(r)
if(!o)continue
let i=0,a=0
if(t.time>e?i=t.time-e:t.time<e&&(a=e-t.time),a>=o.duration)continue
this._choke(n,i)
const s=o.play(i,{start:a,group:this._soundGroup})
this._playingSamples.set(n,s)}this._delegate.onTimeUpdate(e)}_choke(e,t){const n=this._playingSamples.get(e)
n&&setTimeout((()=>{n.stop()}),1e3*t)}stop(){this._stopped=!0
for(const e of this._playingSamples.values())e.destroy()
this._playingSamples.clear()}}class K{constructor(e){this._events=v().sortBy(v().flatMap(e,(e=>e.end?[e.time,e.end.time]:[e.time])),v().identity)}getComboInfo(e){const t=v().sortedLastIndex(this._events,e)
if(0===t)return null
return{comboCount:t,comboTime:this._events[t-1]}}getMaxCombo(){return this._events.length}}const q="previewer-fs-handle",V=v().once((()=>{const e=new J.ZP,t=Math.pow(10,-.41),n=e.group({volume:t})
return{samplingMaster:e,group:n}})),z=new Map
let X=""
async function Q(e){const t=e.log||(e=>console.log(`[PreviewLoader] ${e}`))
t("Loading directory handle from IndexedDB")
const n=await(0,U.U2)(q),r=n.directory,o=n.handleId
t("Obtaining permission to read directory"),await async function(e){let t=await e.queryPermission({mode:"read"})
try{"prompt"===t&&(t=await e.requestPermission({mode:"read"}))}catch(n){await(0,j.wp)("File system access required","Please allow access to the filesystem."),t=await e.requestPermission({mode:"read"})}if("granted"!==t)throw new Error("Permission denied.")}(r),t("Scanning charts")
const i=[]
for await(const[e,t]of r)"file"===t.kind&&/\.(bms|bme|bml|bmson)$/i.test(e)&&i.push({name:e,handle:t})
console.log(r)
const a=i.find((e=>e.name===n.chartFilename))||i[0]
if(!a)throw new Error("No chart found.")
t("Loading chart "+a.name)
const s=new(D()),u=await(await a.handle.getFile()).arrayBuffer(),c=await s.load(u,{name:a.name},{scratch:"left",double:!0})
t("Loading samples")
const{samplingMaster:l,group:d}=V()
let m=0
X!==o&&(z.clear(),X=o)
const h=await G()(c.samples,(async e=>{if(z.has(e)){const t=z.get(e)||null
return{filename:e,sample:t}}const n=async e=>{const t=await r.getFileHandle(e)
return(await t.getFile()).arrayBuffer()}
try{const r=await n(e.replace(/\.\w+$/,".ogg")).catch((()=>n(e))),o=await l.sample(r),i=`${++m}/${c.samples.length}`
return t(`Loaded ${e} [${i}]: ${o.duration}s`),z.set(e,o),{filename:e,sample:o}}catch(n){return console.error(n),t(`Failed to load ${e}: ${n}`),{filename:e,sample:null}}}),{concurrency:64})
console.log(h),t("Loading preview")
const f=function(e,t,n,r,o){return new H(e,t,n,r,o)}(c,a.name,l,d,h)
return console.log(f),f}function Y(e,t){let n=e
return t.loaded&&(n={...e,playing:!1}),t.speedUp&&(n={...e,hiSpeed:+Math.min(e.hiSpeed+.25,99).toFixed(2)}),t.speedDown&&(n={...e,hiSpeed:+Math.max(e.hiSpeed-.25,.25).toFixed(2)}),t.play&&(n={...e,playing:!0}),t.pause&&(n={...e,playing:!1}),t.playPause&&(n={...e,playing:!e.playing}),t.playFinish&&(n={...e,playing:!1}),t.home&&(n={...e,playing:!1,currentTime:0}),t.updateTime&&(n={...e,currentTime:t.updateTime.time}),t.jumpToTime&&(n={...e,currentTime:t.jumpToTime.time,playing:!1}),t.jumpByMeasure&&(n={...e,currentTime:t.jumpByMeasure.preview.getMeasureJumpTarget(e.currentTime,t.jumpByMeasure.direction),playing:!1}),t.jumpBySeconds&&(n={...e,currentTime:Math.max(0,e.currentTime+t.jumpBySeconds.direction),playing:!1}),n}let ee=null
const te=e=>{const t=function(e){const t=(0,r.useRef)(e)
return(0,r.useEffect)((()=>{t.current=e}),[e]),(0,r.useCallback)((()=>t.current),[])}(e.notechartPreview)
return(0,r.useEffect)((()=>{const n=n=>{if(!(0,j.T)()){if(console.log(n.key),"2"===n.key&&(e.dispatch({speedUp:!0}),n.preventDefault()),"1"===n.key&&(e.dispatch({speedDown:!0}),n.preventDefault())," "===n.key&&(e.dispatch({playPause:!0}),n.preventDefault()),"Home"===n.key&&(e.dispatch({home:!0}),n.preventDefault()),"g"===n.key){e.dispatch({pause:!0})
const r=+(prompt("Measure number",ee?`${ee}`:"")||"")
isNaN(r)||(ee=r,e.dispatch({jumpToTime:{time:t().measureToSeconds(r)}})),n.preventDefault()}"r"!==n.key||n.ctrlKey||n.metaKey||(e.onReload(),n.preventDefault()),"ArrowDown"===n.key&&(e.dispatch({jumpByMeasure:{direction:-1,preview:t()}}),n.preventDefault()),"ArrowUp"===n.key&&(e.dispatch({jumpByMeasure:{direction:1,preview:t()}}),n.preventDefault()),"ArrowLeft"===n.key&&(e.dispatch({jumpBySeconds:{direction:-5}}),n.preventDefault()),"ArrowRight"===n.key&&(e.dispatch({jumpBySeconds:{direction:5}}),n.preventDefault()),","===n.key&&(e.dispatch({jumpBySeconds:{direction:-.1}}),n.preventDefault()),"."===n.key&&(e.dispatch({jumpBySeconds:{direction:.1}}),n.preventDefault())}}
return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[e.dispatch]),null},ne=()=>{const e=(0,r.useRef)(null),[t,n]=(0,r.useReducer)(Y,{currentTime:0,hiSpeed:1,playing:!1}),[o,i]=(0,r.useState)($),[a,s]=(0,r.useState)(null),u=()=>{s("Loading...")
const t=v().throttle(s,100)
Q({log:e=>{t((t=>null!=t?e:t))}}).then((t=>{i(t),n({loaded:!0}),e.current&&e.current.focus()})).catch((e=>{console.error(e),(0,j.wp)("Error loading preview",String(e))})).finally((()=>t(null)))}
!function(e,t,n){const o=(0,r.useRef)(null);(0,r.useEffect)((()=>{e.playing&&null===o.current?o.current=n.play({startTime:e.currentTime,onFinish:()=>{t({playFinish:!0})},onTimeUpdate:e=>{t({updateTime:{time:e}})}}):e.playing||null===o.current||(o.current.stop(),o.current=null)}),[e])}(t,n,o),(0,r.useEffect)((()=>{(async()=>{const e=await async function(){const e=await(0,U.U2)(q),t=null==e?void 0:e.chartFilename
return t?{chartFilename:t}:null}()
if(e){const t=[{label:`Load ${e.chartFilename}`,action:()=>{u()}},{label:"Do not load",action:()=>{}}];(await(0,j.Fe)(t,{title:"Load a recent song?"})).action()}})()}),[])
return r.createElement("div",{className:"BemusePreviewer",tabIndex:0,ref:e},r.createElement("div",{className:"BemusePreviewerのheader"},r.createElement("h1",null,r.createElement("a",{href:"https://bemuse.ninja/project/docs/previewer.html",target:"_blank",rel:"noreferrer"},r.createElement("strong",null,"Bemuse"),"’s BMS/bmson previewer"))),r.createElement("div",{className:"BemusePreviewerのmain"},r.createElement(P,{notechartPreview:o,previewState:t}),r.createElement(N,{notechartPreview:o,previewState:t}),r.createElement(I,{onDrop:async(e,t)=>{await async function(e,t){await(0,U.t8)(q,{directory:e,chartFilename:t,handleId:R().generate()})}(e,t),u()}}),r.createElement(te,{notechartPreview:o,dispatch:n,onReload:()=>{u()}})),null!=a?r.createElement("div",{className:"BemusePreviewerのloading"},a):null)}
function re(){i.render(r.createElement(ne,null),o.Z)}},10426:function(e,t,n){n.d(t,{tz:function(){return a},u7:function(){return m}})
var r=n(22022),o=n(2755),i=n(52973)
const a=.001,s=document.createElement("audio")
const u=!s.canPlayType('audio/ogg; codecs="vorbis"')
class c{constructor(e,{volume:t}={}){this._master=e,this._gain=this._master.audioContext.createGain(),null!=t&&(this._gain.gain.value=t),this._gain.connect(this._master.destination)}get destination(){return this._gain}destroy(){this._gain.disconnect(),this._gain=null}}class l{constructor(e,t){this._master=e,this._buffer=t}play(e,t){return new d(this._master,this._buffer,e,t)}destroy(){this._master=null,this._buffer=null}get duration(){return this._buffer.duration}}class d{constructor(e,t,n,r={}){n=n||0,this._master=e
const o=e.audioContext,i=o.createBufferSource()
i.buffer=t,i.onended=()=>this.stop()
const s=o.createGain()
i.connect(s)
const u=r.node||r.group&&r.group.destination||e.destination
s.connect(u),this._source=i,this._gain=this.TEST_node=s
const c=n?Math.max(0,o.currentTime+n):0,l=r.start||0,d=l>0
let m=!1
if(d&&s.gain.setValueAtTime(0,0),void 0!==r.end){const e=Math.max(r.end-l,0)
i.start(c,l,e+a),m=o.currentTime+n+e}else i.start(c,l)
d&&(s.gain.setValueAtTime(0,o.currentTime+n),s.gain.linearRampToValueAtTime(1,o.currentTime+n+a)),!1!==m&&(s.gain.setValueAtTime(1,m),s.gain.linearRampToValueAtTime(0,m+a)),this._master._startPlaying(this)}stop(){this._source&&(this._source.stop(0),this._source.disconnect(),this._gain.disconnect(),this._source=null,this._gain=null,this._master._stoppedPlaying(this),this.onstop&&this.onstop())}bad(){this._source&&(this._source.playbackRate.value=Math.random()<.5?Math.pow(2,1/24):Math.pow(2,-1/24))}destroy(){this.stop()}}function m(e=r.Z){const t=e.createGain(),n=e.createOscillator()
n.frequency.value=440,n.start(e.currentTime+.1),n.stop(e.currentTime+.1),t.connect(e.destination),t.disconnect(),async function(e){return e.resume()}(e).catch((e=>{console.error("[sampling-master] Cannot resume AudioContext",e)}))}t.ZP=class{constructor(e){this._audioContext=e||r.Z,this._samples=[],this._groups=[],this._instances=new Set,this._destination=this._audioContext.destination}unmute(){m(this._audioContext)}get audioContext(){return this._audioContext}get destination(){return this._destination}get currentTime(){return this._audioContext.currentTime}destroy(){if(!this._destroyed){this._destroyed=!0
for(const e of this._samples)e.destroy()
for(const e of this._instances)e.destroy()
this._samples=null,this._instances=null}}decode(e){return this._coerceToArrayBuffer(e).then((e=>this._decodeAudio(e)))}sample(e){return(()=>e.numberOfChannels?Promise.resolve(e):this.decode(e))().then((e=>{if(this._destroyed)throw new Error("SamplingMaster already destroyed!")
const t=new l(this,e)
return this._samples.push(t),t}))}group(e){const t=new c(this,e)
return this._groups.push(t),t}_coerceToArrayBuffer(e){return e instanceof ArrayBuffer?Promise.resolve(e):(0,o.Z)(e).as("arraybuffer")}_decodeAudio(e){return new Promise(((t,n)=>{if(u&&e.byteLength>4){const n=new Uint8Array(e,0,4)
if(79===n[0]&&103===n[1]&&103===n[2]&&83===n[3])return t((0,i.g)(this.audioContext,e))}this.audioContext.decodeAudioData(e,(function(e){t(e)}),(function(e){n(new Error("Unable to decode audio: "+e))}))}))}_startPlaying(e){this._instances.add(e)}_stoppedPlaying(e){this._instances.delete(e)}}},52973:function(e,t,n){n.d(t,{g:function(){return a}})
var r=n(75239)
let o
const i=n.n(r)()(1)
async function a(e,t){const r=await(o||(o=n.e(45).then(n.t.bind(n,3660,17)).then((e=>e.default)).then((e=>(0,eval)(e+"stbvorbis")))),o)
return i((()=>function(e,t,n){return new Promise(((r,o)=>{const i=[]
let a,u=0
e.decode(n,(function(e){if(e.data&&(a=e.sampleRate,i.push(e.data),u+=e.data[0].length),e.error){const t=e.error instanceof Error?e.error:`stbvorbis.js Error: ${e.error}`
o(t)}e.eof&&r(async function(e,t,n,r){if(!n)throw new Error("stbvorbis.js Error: No length")
if(!r)throw new Error("stbvorbis.js Error: No sample rate")
const o=t[0].length,i=e.createBuffer(o,n,r),a=Array(i.numberOfChannels).fill(null).map(((e,t)=>new s(i.getChannelData(t))))
for(const e of t)e.forEach(((e,t)=>{a[t].write(e)}))
return i}(t,i,u,a))}))}))}(r,e,t)))}class s{constructor(e){this.data=e,this.offset=0}write(e){const{offset:t,data:n}=this
for(let r=0;r<e.length;r++)n[r+t]=e[r]
this.offset+=e.length}}},24185:function(e,t,n){n.d(t,{Z:function(){return w}})
var r=n(87672),o=n.n(r),i=n(95541),a=n.n(i),s=n(24324),u=n.n(s),c=n(26419),l=n.n(c),d=n(15669),m=n.n(d),h=n(95076),f=n.n(h),p=n(51346),A={}
A.styleTagTransform=f(),A.setAttributes=l(),A.insert=u().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=m()
o()(p.Z,A),p.Z&&p.Z.locals&&p.Z.locals
var g=n(63929),b=n(87094),y=n.n(b),_=n(30583),v=n.n(_)
class w extends g.Component{render(){return g.createElement("div",{className:v()("Panel",this.props.className)},g.createElement("div",{className:"Panelのtitle"},this.props.title),g.createElement("div",{className:"Panelのcontent"},this.props.children))}}w.propTypes={className:y().string,title:y().string,children:y().node}},6560:function(e,t){t.Z=document.querySelector("#scene-root")},2755:function(e,t,n){t.Z=function(e){return{as(t){return new Promise((function(n,r){const o=new FileReader
switch(o.onload=function(){n(o.result)},o.onerror=function(){r(new Error("Unable to read from Blob"))},t){case"arraybuffer":o.readAsArrayBuffer(e)
break
case"text":o.readAsText(e)}}))}}}},87205:function(e,t){t.Z=document.querySelector("#warp-root")},96008:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},i=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Notechart=void 0
var s=a(n(62270)),u=a(n(48274))
o(n(26923),t)
var c=function(){function e(e,t){void 0===t&&(t={})
var n=this,r=e.notes,o=e.timing,i=e.keysounds,a=e.songInfo,s=e.positioning,c=e.spacing,l=e.barLines,d=e.images,m=e.expertJudgmentWindow,h=e.landmineNotes,f=void 0===h?[]:h;(0,u.default)(r,'Expected "data.notes"'),(0,u.default)(o,'Expected "data.timing"'),(0,u.default)(i,'Expected "data.keysounds"'),(0,u.default)(a,'Expected "data.songInfo"'),(0,u.default)(s,'Expected "data.positioning"'),(0,u.default)(c,'Expected "data.spacing"'),(0,u.default)(l,'Expected "data.barLines"'),this.expertJudgmentWindow=m,r=this._preTransform(r,t),this._timing=o,this._positioning=s,this._spacing=c,this._keysounds=i,this._duration=0,this._notes=this._generatePlayableNotesFromBMS(r),this._landmines=this._generatePlayableNotesFromBMS(f),this._autos=this._generateAutoKeysoundEventsFromBMS(r),this._barLines=this._generateBarLineEvents(l),this._samples=this._generateKeysoundFiles(i),this._infos=new Map(this._notes.map((function(e){return[e,n._getNoteInfo(e)]}))),this._songInfo=a,this._images=d}return Object.defineProperty(e.prototype,"notes",{get:function(){return this._notes},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"landmines",{get:function(){return this._landmines},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autos",{get:function(){return this._autos},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"samples",{get:function(){return this._samples},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"keysounds",{get:function(){return this._keysounds.all()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"barLines",{get:function(){return this._barLines},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"columns",{get:function(){return["SC","1","2","3","4","5","6","7"]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._duration},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"songInfo",{get:function(){return this._songInfo},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eyecatchImage",{get:function(){return this._images&&this._images.eyecatch||"eyecatch_image.png"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundImage",{get:function(){return this._images&&this._images.background||"back_image.png"},enumerable:!1,configurable:!0}),e.prototype.info=function(e){return this._infos.get(e)},e.prototype.beatToSeconds=function(e){return this._timing.beatToSeconds(e)},e.prototype.beatToPosition=function(e){return this._positioning.position(e)},e.prototype.measureToBeat=function(e){return(this._barLines[e]||this._barLines[this._barLines.length-1]).beat},e.prototype.secondsToBeat=function(e){return this._timing.secondsToBeat(e)},e.prototype.secondsToPosition=function(e){return this.beatToPosition(this.secondsToBeat(e))},e.prototype.bpmAtBeat=function(e){return this._timing.bpmAtBeat(e)},e.prototype.scrollSpeedAtBeat=function(e){return this._positioning.speed(e)},e.prototype.spacingAtBeat=function(e){return this._spacing.factor(e)},e.prototype.getKeyMode=function(e){var t,n,r={}
try{for(var o=i(this.notes),a=o.next();!a.done;a=o.next()){r[a.value.column]=!0}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return("off"!==e||r[1]||r[7])&&("left"!==e||r[6]||r[7])&&("right"!==e||r[1]||r[2])?"7K":"5K"},e.prototype._preTransform=function(e,t){var n=s.default.chain(e),r=function(e){var t,n
try{for(var r=i(e),o=r.next();!o.done;o=r.next()){var a=o.value
if("6"===a.column||"7"===a.column)return"7K"}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return"5K"}(e)
if("off"===t.scratch&&(n=n.map((function(e){return e.column&&"SC"===e.column?Object.assign({},e,{column:null}):e}))),"5K"===r){var o=["1","2","3","4","5","6","7"],a=function(e){return function(t){if(t.column){var n=o.indexOf(t.column)
if(n>-1){var r=n+e;(0,u.default)(r<o.length,"Weird. Columns must not shift beyond available column")
var i=o[r]
return Object.assign({},t,{column:i})}}return t}}
"off"===t.scratch?n=n.map(a(1)):"right"===t.scratch&&(n=n.map(a(2)))}return n.value()},e.prototype._generatePlayableNotesFromBMS=function(e){var t=this,n=1
return e.filter((function(e){return e.column})).map((function(e){var r=t._generateEvent(e.beat)
return r.id=n++,r.column=e.column,r.keysound=e.keysound,r.keysoundStart=e.keysoundStart,r.keysoundEnd=e.keysoundEnd,t._updateDuration(r),void 0!==e.endBeat?(r.end=t._generateEvent(e.endBeat),t._updateDuration(r.end)):r.end=void 0,r}))},e.prototype._generateLandminesFromBMS=function(e){var t=this,n=1
return e.filter((function(e){return e.column})).map((function(e){var r=t._generateEvent(e.beat)
return r.id=n++,r.column=e.column,t._updateDuration(r),r}))},e.prototype._updateDuration=function(e){e.time>this._duration&&(this._duration=e.time)},e.prototype._generateAutoKeysoundEventsFromBMS=function(e){var t=this
return e.filter((function(e){return!e.column})).map((function(e){var n=t._generateEvent(e.beat)
return n.keysound=e.keysound,n.keysoundStart=e.keysoundStart,n.keysoundEnd=e.keysoundEnd,n}))},e.prototype._generateKeysoundFiles=function(e){var t,n,r,o,a=new Set
try{for(var s=i([this.notes,this.autos]),u=s.next();!u.done;u=s.next()){var c=u.value
try{for(var l=(r=void 0,i(c)),d=l.next();!d.done;d=l.next()){var m=d.value,h=e.get(m.keysound)
h&&a.add(h)}}catch(e){r={error:e}}finally{try{d&&!d.done&&(o=l.return)&&o.call(l)}finally{if(r)throw r.error}}}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return Array.from(a)},e.prototype._generateBarLineEvents=function(e){var t=this
return e.map((function(e){return t._generateEvent(e)}))},e.prototype._generateEvent=function(e){return{beat:e,time:this.beatToSeconds(e),position:this.beatToPosition(e)}},e.prototype._getNoteInfo=function(e){return{combos:e.end?2:1}},e}()
t.Notechart=c,t.default=c},88339:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.fromBMSChart=void 0
var s=i(n(35982)),u=a(n(62270)),c=a(n(96008))
function l(e){var t=+e.headers.get("rank")||2
return 0===t?[8,24]:1===t?[15,30]:3===t?[21,60]:[18,40]}function d(e,t){var n=u.default.max(e.map((function(e){return e.endBeat||e.beat})))||0,r=[0],o=0,i=0
do{o+=t.timeSignatures.getBeats(i),i+=1,r.push(o)}while(o<=n)
return r}t.fromBMSChart=function(e,t){var n=s.Notes.fromBMSChart(e,{mapping:t.double?s.Notes.CHANNEL_MAPPING.IIDX_DP:s.Notes.CHANNEL_MAPPING.IIDX_P1}).all(),r={notes:n,landmineNotes:s.Notes.fromBMSChart(e,{mapping:t.double?s.Notes.CHANNEL_MAPPING.IIDX_DP_LANDMINE:s.Notes.CHANNEL_MAPPING.IIDX_P1_LANDMINE}).all(),timing:s.Timing.fromBMSChart(e),keysounds:s.Keysounds.fromBMSChart(e),songInfo:s.SongInfo.fromBMSChart(e),positioning:s.Positioning.fromBMSChart(e),spacing:s.Spacing.fromBMSChart(e),barLines:d(n,e),expertJudgmentWindow:l(e)}
return new c.default(r,t)}},87293:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.load=void 0
var s=i(n(64708)),u=i(n(35982)),c=a(n(96008))
function l(e){var t=(e.info&&e.info.judge_rank&&+e.info.judge_rank||100)/100
return[18*t,40*t]}t.load=function(e,t){var n=JSON.parse(e),r=s.songInfoForBmson(n),o=s.musicalScoreForBmson(n,{double:t.double}),i=s.barLinesForBmson(n),a={notes:o.notes.all(),timing:o.timing,keysounds:o.keysounds,songInfo:r,positioning:new u.Positioning([{t:0,x:0,dx:1,inclusive:!0}]),spacing:new u.Spacing([]),barLines:i,images:{eyecatch:n.info.eyecatch_image,background:n.info.back_image},expertJudgmentWindow:l(n)}
return new c.default(a,t)}},41559:function(e,t,n){var r=n(795).Buffer,o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n)
return i(t,e),t},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i
function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o
switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return a.label++,{value:s[1],done:!1}
case 5:a.label++,r=s[1],s=[0]
continue
case 7:s=a.ops.pop(),a.trys.pop()
continue
default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1]
break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s
break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s)
break}o[2]&&a.ops.pop(),a.trys.pop()
continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}
Object.defineProperty(t,"__esModule",{value:!0}),t.NotechartLoader=void 0
var c=a(n(35982)),l=a(n(88339)),d=a(n(87293)),m=function(e){return r.isBuffer(e)?e:r.from(new Uint8Array(e))},h=function(){function e(){}return e.prototype.load=function(e,t,n){return t.name.match(/\.bmson$/i)?this.loadBmson(e,t,n):this.loadBMS(e,t,n)},e.prototype.loadBMS=function(e,t,n){return s(this,void 0,void 0,(function(){var r,o,i,a,s
return u(this,(function(u){switch(u.label){case 0:return r=m(e),o=c.Reader.getReaderOptionsFromFilename(t.name),[4,c.Reader.readAsync(r,o)]
case 1:return i=u.sent(),a=c.Compiler.compile(i),s=a.chart,[2,l.fromBMSChart(s,n)]}}))}))},e.prototype.loadBmson=function(e,t,n){return s(this,void 0,void 0,(function(){var t,r
return u(this,(function(o){return t=m(e),r=t.toString("utf-8"),[2,d.load(r,n)]}))}))},e}()
t.NotechartLoader=h,t.default=h},26923:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}])

//# sourceMappingURL=previewer-15242bfba2353ed81c99.js.map