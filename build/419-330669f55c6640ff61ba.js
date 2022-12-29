"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[419],{3101:function(t,e,n){var o=n(95970),r=n.n(o),i=n(50146),s=n.n(i)()(r())
s.push([t.id,".BenchmarkPanel {\n  background: #449;\n  border: 2px solid #66e;\n  padding: 4px;\n}\n.BenchmarkPanel table {\n  font-size: 10px;\n}","",{version:3,sources:["webpack://./devtools/ui/BenchmarkPanel.scss"],names:[],mappings:"AAEA;EACE,gBAAA;EACA,sBAAA;EACA,YAAA;AADF;AAEE;EACE,eAAA;AAAJ",sourcesContent:["@import '~bemuse/ui/common';\n\n.BenchmarkPanel {\n  background: #449;\n  border: 2px solid #66e;\n  padding: 4px;\n  table {\n    font-size: 10px;\n  }\n}\n"],sourceRoot:""}]),e.Z=s},31647:function(t,e,n){n.r(e),n.d(e,{enableTestMode:function(){return i},getScore:function(){return l},isTestModeEnabled:function(){return a},pauseAt:function(){return u},setGameLifecycleHandler:function(){return s},unpause:function(){return c}})
let o=!1,r={pauseAt(t){throw new Error("Cannot pause: No lifecycle handler registered!")},unpause(){throw new Error("Cannot unpause: No lifecycle handler registered!")},getScore(){throw new Error("Cannot get score: No lifecycle handler registered!")}}
function i(){if(!o){o=!0,console.log("[Bemuse test mode enabled]")
const t=document.createElement("div")
t.setAttribute("style","\n        position: fixed;\n        top: 20px;\n        left: 20px;\n        font: 20px Comic Sans MS, sans-serif;\n        z-index: 99999;\n        background: rgba(0,0,0,0.5);\n        color: #0f0;\n        border: 2px solid #0f0;\n        padding: 4px;\n        pointer-events: none;\n      "),t.innerHTML="\n      <strong>Test mode:</strong>\n      Bemuse is being controlled by automated test software.\n    ",document.body.appendChild(t)}}function s(t){console.log("[Bemuse test mode] A pause handler has been registered."),r=t}function a(){return!!o}function u(t){return r.pauseAt(t)}function c(){return r.unpause()}function l(){return r.getScore()}},92129:function(t,e,n){n.d(e,{Z:function(){return A}})
var o=n(39618),r=n(14865),i=n(63929),s=n(95280),a=n(87672),u=n.n(a),c=n(95541),l=n.n(c),h=n(24324),d=n.n(h),f=n(26419),g=n.n(f),m=n(15669),p=n.n(m),_=n(95076),b=n.n(_),y=n(3101),v={}
v.styleTagTransform=b(),v.setAttributes=g(),v.insert=d().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p()
u()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals
var w=n(87094),S=n.n(w)
class M extends i.Component{constructor(t){super(t),this.renderTable=()=>{const t=this.props.bench.stats
return i.createElement("table",null,i.createElement("tbody",null,Object.keys(t).map((e=>{const n=t[e]
return i.createElement("tr",null,i.createElement("td",null,i.createElement("strong",null,e)),i.createElement("td",{align:"right"},""+n))}))))},this.handleInteraction=t=>{t.preventDefault(),t.stopPropagation(),this.setState({show:!this.state.show})},this.state={show:!1,text:"wow"}}render(){return i.createElement("div",{className:"BenchmarkPanel",onClick:this.handleInteraction,onTouchStart:this.handleInteraction},this.state.show?i.createElement("article",null,i.createElement("b",null,"Benchmark Stats"),i.createElement("br",null),this.renderTable()):"Show Benchmark Stats")}componentDidMount(){setInterval((()=>this.forceUpdate()),1e3)}}function x(){let t=0,e=0,n=0
const r=[]
let i=0,s=0
return{push:function(a){const u=(0,o.Z)()
for(t+=a,e+=1,n=t/e,i+=a,r.push({delta:a,time:u});r[0]&&r[0].time<u-1e3;)i-=r.shift().delta
s=i/r.length},toString(){return j(n)+" / "+j(s)}}}function j(t){return t.toFixed(2)+"ms"}M.propTypes={bench:S().object}
var A=window.BEMUSE_BENCHMARK=(0,r.gy)()?new function(){const t={},e={enabled:!0,stats:t,wrap(e,n){return function(){const r=(0,o.Z)()
try{return n.apply(this,arguments)}finally{const n=(0,o.Z)();(t[e]||(t[e]=new x(e))).push(n-r)}}},benchmark(t,e,n){e[n]=this.wrap(t,e[n])},toString(){const e=[]
return Object.keys(t).forEach((function(n){e.push("- "+n+": "+t[n])})),e.join("\n")}},n=document.createElement("div")
return n.setAttribute("style","position:fixed;top:10px;right:10px;z-index:99999"),document.body.appendChild(n),s.render(i.createElement(M,{bench:e}),n),e}:new function(){return{enabled:!1,wrap:(t,e)=>e}}},14865:function(t,e,n){n.d(e,{T_:function(){return r},Xb:function(){return c},ZB:function(){return s},gy:function(){return i},mq:function(){return u},oh:function(){return a}})
var o=n(98711)
function r(){return"1"===o.Z.BEMUSE_SHOW_OPTIONS}function i(){return"1"===o.Z.BEMUSE_BENCHMARK}function s(){return"1"===o.Z.BEMUSE_NO_FULLSCREEN}function a(){return"1"===o.Z.BEMUSE_SHOW_ABOUT}function u(){return"1"===o.Z.BEMUSE_SHOW_MODE_SELECT}function c(){return"1"===o.Z.BEMUSE_TITLE_DISPLAY}},99963:function(t,e,n){function o(t){return"hope"===t?function(){let t,e,n
return{update(o){const r=o.stats,i=r.numJudgments/r.totalCombo,s=(t,e,n)=>{const o=e+(n-e)*i,s=r.maxPossibleScore
return Math.max(0,(s-t)/(o-t))},a=.5*s(5e5,555555,51e4)
if(t=Math.min(1,a),n=Math.max(0,Math.min(1,a-1)),a>0)e=0
else{const t=s(45e4,5e5,5e5)
e=t}},shouldDisplay(){return t>0||e>0},getPrimary(){return t},getSecondary(){return e},getExtra(){return n}}}():{update(){},shouldDisplay(){return!1},getPrimary(){return 0},getSecondary(){return 0},getExtra(){return 0}}}n.d(e,{s:function(){return o}})},25331:function(t,e,n){var o=n(62270),r=n.n(o)
function i(t,e,n){return 1-(n-t)/(e-t)}function s(t){return t.position}e.Z=class{constructor(t,e){this._notes=r().sortBy(t,s),this._barLines=r()(e).map("position").sortBy().value()}getVisibleNotes(t,e,n){const o=[],r=this._notes
n||(n=0)
for(let s=0;s<r.length;s++){const a=r[s]
if(a.end?!(a.position>e||a.end.position<t-n):!(a.position>e||a.position<t-n)){const n={note:a}
if(a.end){const o=i(t,e,a.position),r=i(t,e,a.end.position)
n.y=Math.min(o,r),n.height=Math.abs(o-r)}else n.y=i(t,e,a.position)
o.push(n)}}return o}getVisibleBarLines(t,e,n){return n||(n=0),this._barLines.filter((o=>t-n<=o&&o<=e)).map((n=>({id:n,y:i(t,e,n)})))}}},63241:function(t,e,n){var o=n(8666),r=n(25331),i=n(76177),s=n(99963)
e.Z=class{constructor(t,e){this._currentSpeed=1,this._player=t,this._noteArea=new r.Z(t.notechart.notes,t.notechart.barLines),this._stateful={},this._defaultData={placement:t.options.placement,scratch:t.options.scratch,key_mode:t.notechart.getKeyMode(t.options.scratch),lane_lift:Math.max(0,-t.options.laneCover),lane_press:Math.max(0,t.options.laneCover)},this._gauge=(0,s.s)(t.options.gauge),this._touch3dMode="touch3d"===e.displayMode}update(t,e,n){const r=this._touch3dMode,s=this._player,a=this._noteArea,u=this._stateful,c=s.notechart.secondsToBeat(e),l=s.notechart.beatToPosition(c),h=s.notechart.spacingAtBeat(c),d=Object.assign({},this._defaultData),f=(t,e)=>(d[t]||(d[t]=[])).push(e),g=this._gauge
this._currentSpeed+=(n.speed-this._currentSpeed)/3
const m=this._currentSpeed*h
d.beat=c,function(){const t=a.getVisibleNotes(l,b(),1)
if(r){const e=(t,e,n,r=1)=>{const i=o.dM(e-.01),s=+n||-1,a=o.kL,u=i.projection*a*(2*(s-.5)/7-1),c=i.projection*r*a*2/7
f(`note3d_${n}`,{key:t,y:i.y,x:u+640,width:c})},r=3/128
for(const o of t){const t=o.note,i=t.column
if(o.height){let n=0
const s=o.y+o.height
for(let a=s-Math.max(0,Math.floor((s-1)/r)*r);a>=0&&a>=o.y;a-=r)e(t.id+"x"+n++,a,i,.8)
e(t.id,o.y+o.height,i)}else"judged"!==n.getNoteStatus(t)&&e(t.id,o.y,i)}}else for(const e of t){const t=e.note,o=t.column
if(e.height){const r=n.getNoteJudgment(t),s=n.getNoteStatus(t)
f(`longnote_${o}`,{key:t.id,y:e.y,height:e.height,active:0!==r&&r!==i.AB,missed:"judged"===s&&r===i.AB})}else"judged"!==n.getNoteStatus(t)&&f(`note_${o}`,{key:t.id,y:e.y})}}(),function(){const t=a.getVisibleBarLines(l,b(),1)
for(const e of t)if(r){const t=o.dM(e.y-.01)
f("barlines3d",{key:e.id,y:t.y,x:t.projection*-o.kL+640,width:t.projection*o.kL*2})}else f("barlines",{key:e.id,y:e.y})}(),function(){const e=n.input
for(const n of s.columns){const o=e.get(n)
d[`${n}_active`]=0!==o.value?1:0,o.changed&&(0!==o.value?u[`${n}_down`]=t:u[`${n}_up`]=t)}}(),function(){const e=n.notifications.judgments,o=e[e.length-1]
if(o){const e=-1===o.judgment?"missed":`${o.judgment}`
u[`judge_${e}`]=t
const n=-1===o.judgment||1===o.judgment?"none":o.delta>0?"late":o.delta<0?"early":"none"
u[`judge_deviation_${n}`]=t,u.combo=o.combo}d.score=n.stats.score}(),function(){g.update(n),g.shouldDisplay()?u.gauge_enter||(u.gauge_enter=t):u.gauge_enter&&(u.gauge_exit||(u.gauge_exit=t))
d.gauge_primary=g.getPrimary(),d.gauge_secondary=g.getSecondary(),d.gauge_extra=g.getExtra()}(),function(){const e=n.notifications.judgments
for(let n=0;n<e.length;n++){const o=e[n];(0,i.H2)(o.judgment)||(u[`${o.column}_explode`]=t)}}(),d.speed=n.speed.toFixed(1)+"x",d.stat_1=_(1),d.stat_2=_(2),d.stat_3=_(3),d.stat_4=_(4),d.stat_missed=_(i.AB),d.stat_acc=(100*(n.stats.currentAccuracy||0)).toFixed(2)+"%"
const p=s.notechart.bpmAtBeat(c)
return d.bpm=p<1?"":Math.round(p)%1e4||"",Object.assign(d,u),d
function _(t){return n.stats.counts&&n.stats.counts[t]}function b(){return l+5/m}}}},8666:function(t,e,n){n.d(e,{dM:function(){return l},kL:function(){return h},mO:function(){return d}})
const o=1024,r=-975,i=1024,s=3.922,a=4.555,u=960,c=60
function l(t){const e=Math.max(0,t-1)
t<0&&(t=0),t>1&&(t=1)
const n=s+(a-s)*t,c=o+Math.cos(n)*i,l=r-Math.sin(n)*i,h=u/(u-c)
return{y:l*h+360+2048*e,projection:h}}const h=c
function d(t,e){let n,o,r=.75,i=1
for(let t=0;t<8;t++)n=(r+i)/2,o=l(n),o.y>e?i=n:r=n
if(n<.8)return null
const s=640+o.projection*-c,a=640+o.projection*c
let u=Math.floor((t-s)/(a-s)*7)
return u>=-1&&u<=7?(u<0&&(u=0),u>6&&(u=6),String(u+1)):null}},88371:function(t,e,n){n.d(e,{Z:function(){return a}})
var o=class{constructor(){this.value=0,this.changed=!1}get justPressed(){return this.changed&&this.value}},r=n(62270),i=n.n(r),s=n(92129)
var a=class{constructor(){this._controls=new Map,this._plugins=[]}update(){const t=new Map
for(const[t,e]of this._controls)e.changed=!1
for(const e of this._plugins)for(const[n,o]of e.get())t.set(n,o)
for(const[e,n]of t){const t=this.get(e)
t.value!==n&&(t.changed=!0,t.value=n)}}destroy(){for(const t of this._plugins)t.destroy()}get(t){return this._controls.has(t)||this._controls.set(t,new o),this._controls.get(t)}use(t){const e={},n="input:"+t.name
this._plugins.push({get:s.Z.wrap(n,(function(){const n=t.get(),o=[]
for(const t of i().union(i().keys(n),i().keys(e))){const r=+e[t]||0,i=+n[t]||0
r!==i&&o.push([t,i]),e[t]=i}return o})),destroy(){return"function"!=typeof t.destroy||t.destroy()}})}}},76177:function(t,e,n){n.d(e,{AB:function(){return a},H2:function(){return S},NX:function(){return y},Pe:function(){return w},Sw:function(){return o},el:function(){return p},jQ:function(){return M},nr:function(){return v},pH:function(){return b}})
var o,r=n(62270),i=n.n(r)
!function(t){t[t.Missed=-1]="Missed",t[t.Unjudged=0]="Unjudged",t[t.Meticulous=1]="Meticulous",t[t.Precise=2]="Precise",t[t.Good=3]="Good",t[t.Offbeat=4]="Offbeat"}(o||(o={}))
const s=o.Unjudged,a=o.Missed,u=[{value:1,timegate:.02,endTimegate:.04},{value:2,timegate:.05,endTimegate:.1},{value:3,timegate:.1,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}],c=[{value:1,timegate:.021,endTimegate:.042},{value:2,timegate:.06,endTimegate:.12},{value:3,timegate:.12,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}],l=[{value:1,timegate:.022,endTimegate:.044},{value:2,timegate:.07,endTimegate:.14},{value:3,timegate:.14,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}],h=[{value:1,timegate:.023,endTimegate:.046},{value:2,timegate:.08,endTimegate:.16},{value:3,timegate:.16,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}],d=[{value:1,timegate:.024,endTimegate:.048},{value:2,timegate:.1,endTimegate:.18},{value:3,timegate:.18,endTimegate:.2},{value:4,timegate:.2,endTimegate:.2}]
class f{constructor(t){this.timegates=t}getTimegates(t,e){return this.timegates}}class g{getTimegates(t,e){return!e||e<100?d:u}}const m=new f(u)
function p(t,{tutorial:e=!1}){const n=t.songInfo,o=n.difficulty>=5
return e?new g:o?m:1===n.level||2===n.level?new f(d):3===n.level?new f(h):4===n.level?new f(l):5===n.level?new f(c):m}function _(t){return function(e,n,o=m){const r=o.getTimegates(e,n),i=Math.abs(e-n)
for(let e=0;e<r.length;e++)if(i<t(r[e]))return r[e].value
return e<n?s:a}}const b=_((t=>t.timegate)),y=_((t=>t.endTimegate))
function v(t,e=m){return i().find(e.getTimegates(null,null),{value:t}).timegate}function w(t){return t>=4}function S(t){return t===a||w(t)}function M(t){return 1===t?100:2===t?80:3===t?50:0}},11598:function(t,e,n){e.Z=class{constructor(t,e,n){this.notechart=t,this.number=e,this.options={autoplayEnabled:!!n.autoplayEnabled,autosound:!!n.autosound,speed:+n.speed,placement:n.placement||"center",scratch:n.scratch||"left",input:n.input,laneCover:+(n.laneCover||0),gauge:n.gauge,tutorial:!!n.tutorial}}get columns(){return this.notechart.columns}}},54140:function(t,e,n){var o,r=n(62270),i=n.n(r),s=n(30182),a=n(76177),u=n(48274),c=n.n(u)
!function(t){t.Active="active",t.Unjudged="unjudged",t.Judged="judged"}(o||(o={}))
e.Z=class{constructor(t){var e
this.player=t,this.notifications={sounds:[],judgments:[]},this.finished=!1,this.tainted=!1,this.input=new Map,this._gameTime=0,this._pinching=null,this._columns=t.columns,this._noteBufferByColumn=i()(t.notechart.notes).sortBy((t=>t.time)).groupBy((t=>t.column)).mapValues((e=this,function(t){let n=0
return{notes:t,get startIndex(){return n},update(){for(;n<t.length&&"judged"===e.getNoteStatus(t[n]);)n+=1}}})).value(),this._noteResult=new Map,this._duration=t.notechart.duration,this._judge=(0,a.el)(t.notechart,{tutorial:t.options.tutorial}),this.stats=new s.Z(t.notechart),this.speed=t.options.speed}update(t,e){this._gameTime=t,this._rawInput=e,this.notifications={sounds:[],judgments:[]},this._updateInputColumnMap(),this._judgeNotes(),this._updateSpeed(),t>this._duration+3&&(this.finished=!0)}getNoteStatus(t){const e=this._noteResult.get(t)
return e?e.status:o.Unjudged}getNoteJudgment(t){const e=this._noteResult.get(t)
return e?e.judgment:a.Sw.Unjudged}getPlayerInput(t){return this._rawInput.get(`p${this.player.number}_${t}`)}_updateInputColumnMap(){this.input=new Map(this._columns.map((t=>[t,this.getPlayerInput(t)])))}_judgeNotes(){for(const t of this._columns){const e=this._noteBufferByColumn[t]
if(e){const n=this.input.get(t)
this._judgeColumn(e,n,t),e.update()}}}_updateSpeed(){this.getPlayerInput("speedup").justPressed&&this._modifySpeed(1),this.getPlayerInput("speeddown").justPressed&&this._modifySpeed(-1)
const t=this.getPlayerInput("pinch").value
if(t&&!this._pinching?this._pinching={start:t,speed:this.speed}:t||(this._pinching=null),t&&this._pinching){const e=this._pinching,n=e.speed*t/e.start
this.speed=Math.max(.2,Math.round(10*n)/10)}}_modifySpeed(t){const e=this._rawInput.get("select").value?.1:this.speed<.5?.3:.5
this.speed+=t*e,this.speed<.2&&(this.speed=.2)}_shouldAutoplay(){return this.player.options.autoplayEnabled||!!window.BEMUSE_AUTOPLAY}_judgeColumn(t,e,n){let o,r
const i=t.notes
let s=!1
for(let n=t.startIndex;n<i.length;n++){const a=i[n]
if(this._shouldJudge(a,e,t)){const t="active"!==this.getNoteStatus(a)
if(o=a,r=this._judgeNote(a),this._shouldAutoplay()&&(s=!0),t)break}}if(e.justPressed||s)if(o&&null!=r)this.notifications.sounds.push({note:o,type:"hit",judgment:r})
else{const t=this._getFreestyleNote(i)
if(t){("3d"!==this.player.options.placement||!this._isSandwiched(n))&&this.notifications.sounds.push({note:t,type:"free"})}}}_getClosestNote(t){return i().minBy(t,(t=>Math.abs(this._gameTime-t.time)))}_getFreestyleNote(t){return i().minBy(t,(t=>Math.abs(this._gameTime-t.time)+(this._gameTime<t.time-1?1e6:0)))}_isSandwiched(t){const e={2:["1","3"],3:["2","4"],4:["3","5"],5:["4","6"],6:["5","7"]}
return!!e[t]&&e[t].every((t=>{const e=this._noteBufferByColumn[t]
return!!e&&e.notes.some((t=>Math.abs(this._gameTime-t.time)<.1))}))}_shouldJudge(t,e,n){const o=this.getNoteStatus(t)
if("unjudged"===o){if(this._shouldAutoplay()&&this._gameTime>=t.time)return this.tainted=!0,!0
const o=(0,a.pH)(this._gameTime,t.time,this._judge),r=o===a.AB
let i=o>0&&e.changed&&e.value
return(0,a.Pe)(o)&&this._getClosestNote(n.notes)!==t&&(i=!1),r||i}if("active"===o){const n=t.end||c()(!1,"note.end must exist")
if(this._shouldAutoplay()&&this._gameTime>=n.time)return this.tainted=!0,!0
const o=(0,a.NX)(this._gameTime,n.time,this._judge)===a.AB,r=e.changed,i="SC"===t.column,s=this._gameTime>=n.time
return o||r||i&&s}return!1}_judgeNote(t){let e=this._gameTime-t.time,n=(0,a.pH)(this._gameTime,t.time,this._judge),r=this._noteResult.get(t)
const i=!r||"unjudged"===r.status,s=r&&"active"===r.status
if(this._shouldAutoplay()&&n>=1&&(n=1),t.end){if(i){const i=n===a.AB?o.Judged:o.Active
n===a.AB&&this._setJudgment(n,e,t.column),r={status:i,judgment:n,delta:e}}else if(s){const i="SC"===t.column
e=this._gameTime-t.end.time,n=(0,a.NX)(this._gameTime,t.end.time,this._judge)||a.AB,i&&e>0&&(n=1),r={status:o.Judged,judgment:n,delta:e}}}else r={status:o.Judged,judgment:n,delta:e}
if(n===a.AB&&this.notifications.sounds.push({note:t,type:"break"}),i&&n!==a.AB&&this.stats.handleDelta(e),!r)throw new Error("Invariant violation: result must not be undefined")
if(!n)throw new Error("Invariant violation: note should be judged by this point")
return this._noteResult.set(t,r),this._setJudgment(n,e,t.column),n}_setJudgment(t,e,n){this.stats.handleJudgment(t)
const o={judgment:t,combo:this.stats.combo,delta:e,column:n}
this.notifications.judgments.push(o)}}},30182:function(t,e,n){var o=n(76177),r=n(62270),i=n.n(r)
const s=t=>Math.floor(5e5*t),a=(t,e)=>Math.floor(55555*t/e)
e.Z=class{constructor(t){this.totalCombo=i()(t.notes).map((e=>t.info(e).combos)).sum(),this.totalNotes=t.notes.length,this.combo=0,this.maxCombo=0,this.rawSumJudgmentWeight=0,this.rawTotalComboScore=this._calculateRawTotalComboScore(this.totalCombo),this._remainingMaxPossibleRawComboScore=this.rawTotalComboScore,this.rawSumComboScore=0,this.counts={[o.AB]:0,1:0,2:0,3:0,4:0},this.numJudgments=0,this.poor=!1,this._log=[],this.deltas=[]}get score(){return this.accuracyScore+this.comboScore}get accuracyScore(){return s(this.accuracy)}get comboScore(){return a(this.rawSumComboScore,this.rawTotalComboScore)}get maxPossibleScore(){return this.maxPossibleAccuracyScore+this.maxPossibleComboScore}get maxPossibleAccuracyScore(){const t=this.totalCombo-this.numJudgments,e=(this.rawSumJudgmentWeight+o.jQ(1)*t)/(o.jQ(1)*this.totalCombo)
return s(e)}get maxPossibleComboScore(){const t=this.rawSumComboScore+this._remainingMaxPossibleRawComboScore
return a(t,this.rawTotalComboScore)}get accuracy(){return this.rawSumJudgmentWeight/(o.jQ(1)*this.totalCombo)}get currentAccuracy(){return this.rawSumJudgmentWeight/(o.jQ(1)*this.numJudgments||1)}get log(){return this._log.map((({character:t,count:e})=>`${e>1?e:""}${t}`)).join("")}handleJudgment(t){if(this.counts[t]+=1,this.numJudgments+=1,o.H2(t)){const t=this.totalCombo-this.numJudgments
this.combo=0,this.poor=!0,this._remainingMaxPossibleRawComboScore=this._calculateRawTotalComboScore(t)}else{this.combo+=1
const t=this._calculateRawComboScore(this.combo)
this.rawSumComboScore+=t,this._remainingMaxPossibleRawComboScore-=t,this.poor=!1}this.rawSumJudgmentWeight+=o.jQ(t),this.combo>this.maxCombo&&(this.maxCombo=this.combo),this._recordLog(t)}handleDelta(t){this.deltas.push(t)}_calculateRawTotalComboScore(t){let e=0
for(let n=1;n<=t;n++)e+=this._calculateRawComboScore(n)
return e}_calculateRawComboScore(t){return 0===t?0:t<23?1:t<51?2:t<92?3:t<161?4:5}_recordLog(t){const e=this._getLogCharacter(t)
e&&(0===this._log.length||this._log[this._log.length-1].character!==e?this._log.push({character:e,count:1}):this._log[this._log.length-1].count+=1)}_getLogCharacter(t){switch(t){case 1:return"A"
case 2:return"B"
case 3:return"C"
case 4:return"D"
case o.AB:return"M"}}}},58028:function(t,e,n){function o(t){return{info:r(t,"info"),warn:r(t,"warn"),error:r(t,"error")}}function r(t,e){return(...o)=>{console.log(`[${(new Date).toJSON()}] [${t}] [${e}] ${n(85331).format(...o)}`)}}n.r(e),n.d(e,{forModule:function(){return o}})},7611:function(t,e,n){n.d(e,{FB:function(){return f},fW:function(){return m},ZP:function(){return p},oY:function(){return b},qf:function(){return g}})
var o=n(17287),r=n.n(o),i=n(62270),s=n.n(i),a=n(38500),u=n.n(a)
function c(t){return u().fromBinder((e=>{for(const n of t.inputs.values())e(new(u().Next)(n))
for(const n of t.outputs.values())e(new(u().Next)(n))
t.onstatechange=t=>{e(new(u().Next)(t.port))}}))}function l(t){return"input"!==t.type?u().never():u().fromEvent(t,"midimessage")}var h=function(){return u().fromPromise(navigator.requestMIDIAccess?navigator.requestMIDIAccess():Promise.reject(new Error("MIDI is not supported"))).flatMap(c).flatMapError((t=>(console.warn("MIDI Error:",t.stack),u().never()))).flatMap(l).doLog("messageforport")}
class d{constructor(){this.stop=1,this.charge=0,this.previous=!1,this.active=!1,this.positive=!1}update(t,e=3){if(!1===this.previous)return this.previous=t,0
if(this.previous!==t){let n=t-this.previous
n>1?n-=2.005:n<-1&&(n+=2.005)
const o=n>0
this.active&&this.positive!==o?(this.positive=o,this.active=!1,this.charge=0):this.active||((0===this.charge||this.stop<=e)&&(this.charge+=Math.ceil(Math.abs(n)/.01)),this.charge>=2&&(this.active=!0,this.positive=o)),this.stop=0,this.previous=t}return this.stop>2*e&&(this.active=!1,this.charge=0,this.stop=0),this.stop+=1,this.active?this.positive?1:-1:0}}class f{constructor(t=window,e={}){const n=(e.getMidi川||h)()
this._window=t,this._exclusive=!!e.exclusive,this._continuousAxis=!!e.continuous,this.setGamepadSensitivity(e.sensitivity||3),this._disposables=[y(t,"keydown",(t=>this._handleKeyDown(t))),y(t,"keyup",(t=>this._handleKeyUp(t))),n.onValue((t=>this._handleMIDIMessage(t)))],this._status={},this._axis={}}_handleKeyDown(t){this._status[`${t.which}`]=!0,this._exclusive&&t.preventDefault()}_handleKeyUp(t){this._status[`${t.which}`]=!1}_handleMIDIMessage(t){if(!t||!t.data)return
const e=t.data,n=`midi.${t.target.id}.${15&t.data[0]}`,o=t=>{this._status[`${n}.note.${e[1]}`]=t}
if(128==(240&e[0]))o(!1)
else if(144==(240&e[0]))e[2]>0?o(!0):o(!1)
else if(176==(240&e[0]))64===e[1]?this._status[`${n}.sustain`]=e[2]>=64:1===e[1]&&(this._status[`${n}.mod`]=e[2]>=16)
else if(224==(240&e[0])){const t=e[1]|e[2]<<7
this._status[`${n}.pitch.up`]=t>=8448,this._status[`${n}.pitch.down`]=t<7936}}_updateGamepads(){const t=this._window.navigator,e=t.getGamepads?t.getGamepads():t.webkitGetGamepads?t.webkitGetGamepads():[]
if(e)for(let t=0;t<e.length;t++){const n=e[t]
n&&this._updateGamepad(n)}}_updateGamepad(t){const e=`gamepad.${t.index}`
for(let n=0;n<t.buttons.length;n++){const o=t.buttons[n]
this._status[`${e}.button.${n}`]=o&&o.value>=.5}for(let n=0;n<t.axes.length;n++){const o=`${e}.axis.${n}`
let r=t.axes[n]
this._continuousAxis&&(null==this._axis[o]&&(this._axis[o]=new d),r=this._axis[o].update(r)),this._status[`${o}.positive`]=r>=this._deadzone,this._status[`${o}.negative`]=r<=-this._deadzone}}update(){return this._updateGamepads(),this._status}setGamepadSensitivity(t){this._sensitivity=t,this._deadzone=.05*(9-this._sensitivity),this._deadzone<.01&&(this._deadzone=.01),this._analogThreshold=18-2*this._sensitivity}setGamepadContinuousAxisEnabled(t){this._continuousAxis=t}dispose(){for(const t of this._disposables)t()}}function g(t=new f,e=window){return m(u().fromBinder((n=>{const o=e.setInterval((()=>{n(new(u().Next)(t.update()))}),16)
return()=>e.clearInterval(o)})))}function m(t){return t.map((t=>Object.keys(t).filter((e=>t[e])))).diff([],((t,e)=>s().difference(e,t))).flatMap((t=>u().fromArray(t)))}var p=f
const _={}
function b(t){if(+t)return s().capitalize(r()(+t))
{const e=t.match(/^gamepad\.(\d+)\.axis\.(\d+)\.(\w+)/)
if(e)return`Joy${e[1]} Axis${e[2]} (${"positive"===e[3]?"+":"-"})`}{const e=t.match(/^gamepad\.(\d+)\.button\.(\d+)/)
if(e)return`Joy${e[1]} Btn${e[2]}`}{const e=t.match(/^midi\.(.+)\.(\d+)\.(.+)$/)
if(e){const t=e[3].split("."),n=e[1],o=`MIDI${_[n]||(_[n]=Object.keys(_).length+1)} Ch${+e[2]+1}`
if("note"===t[0]){const e=+t[1]
return`${o} ${["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][e%12]}${Math.floor(e/12)-1}`}if("pitch"===t[0])return`${o} Pitch${"up"===t[1]?"+":"-"}`
if("sustain"===t[0])return"Sustain"
if("mod"===t[0])return"Mod"}}return`${String(t).replace(/\./g," ")}?`}function y(t,e,n){return t.addEventListener(e,n),function(){t.removeEventListener(e,n)}}},95182:function(t,e,n){n.d(e,{E:function(){return r}})
var o=n(65e3)
class r{constructor(){this.current=void 0,this.total=void 0,this._observable=new o.Z}report(t,e,n){this.current=t,this.total=e,this.extra=n,this._observable.notify()}watch(t){return t(this),this._observable.watch((()=>t(this)))}get progress(){return this.total&&void 0!==this.current&&null!==this.current?this.current/this.total:null}toString(){return void 0!==this.formatter?this.formatter(this):null!==this.progress?this.current+" / "+this.total:""}}},33256:function(t,e,n){n.d(e,{cY:function(){return u},qw:function(){return s},u_:function(){return a}})
var o=n(45128),r=n.n(o)
const i=t=>e=>null!==e.progress?t(e):"",s=i((t=>r()(t.current)+" / "+r()(t.total))),a=i((t=>(t.current/t.total*100).toFixed(1)+"%")),u=i((t=>t.extra+""))},57050:function(t,e,n){var o=n(95182)
e.Z=o.E},26230:function(t,e,n){n.d(e,{Bd:function(){return r},Lg:function(){return s},UP:function(){return i},_W:function(){return u},ak:function(){return a}})
var o=n(33256)
function r(t,e){if(!e)return()=>{}
let n=0
return e.report(0,t),o=>e.report(++n,t,o)}async function i(t,e){if(!t)return e
const n=await Promise.resolve(e)
return!function(t){return t&&t.byteLength}(n)?t.report(1,1):(t.formatter=o.qw,t.report(n.byteLength,n.byteLength)),n}function s(t,e){let n=0,o=0
return async function(...r){t.report(n,++o)
const i=await e.apply(this,r)
return t.report(++n,o),i}}function a(t,e){return t.watch((()=>e.report(t.current,t.total,t.extra)))}function u(t){const e=[]
let n,o=null
function r(){n&&t.report(n.current,n.total,n.extra),e.length>0&&(!n||n.progress>=1)&&function(t){if(n===t)return
o&&(o(),o=null)
n=t,n&&(o=n.watch(r))}(e.shift())}return{add(t){e.push(t),r()}}}},60016:function(t,e,n){function o(t,e,n){if(e.match(/\.(?:bms|bme|bml|bmson)/i))return void n(e)
const o=(t+e).split("/")
for(let t=0;t<o.length;t++)n(o.slice(t).join("/"))}n.d(e,{N:function(){return o}})},66529:function(t,e,n){n.d(e,{pS:function(){return l},AQ:function(){return d},xH:function(){return f},dG:function(){return g}})
var o=n(26230)
class r{constructor(){this.buffer=[],this.loggingFunction=t=>{this.buffer&&this.buffer.push(t)},this.log=t=>{this.loggingFunction(t)},this.setLoggingFunction=t=>{this.loggingFunction=t,this.buffer&&(this.buffer.forEach((e=>t(e))),this.buffer=null)}}}var i=n(1588),s=n(60016)
i.X.init({workerUrl:"/vendor/libarchive.js-1.3.0/dist/worker-bundle.js"})
var a=n(2755),u=n(57050),c=n(37057)
const l=/\.(?:zip|rar|7z|tar(?:\.(?:gz|bz2))?)/i,h=/https?:\/\/(?:(?:www|dl)\.dropbox\.com|dl\.dropboxusercontent\.com)\/(sh?)\/([^?]*)(.*)?$/
class d{constructor(t){this._logging=new r,this.setLoggingFunction=this._logging.setLoggingFunction,this._files=Promise.resolve(t.getFiles(this._logging.log)).then((t=>async function(t,e){if(1!==t.length)return t
const n=t[0]
if(!n.name.match(l))return t
return e("Archive file detected! Now unarchiving…"),async function(t){const e=[],n=await i.X.open(t),o=await n.extractFiles(),r=(t,n="")=>{for(const o of Object.keys(t))t[o]instanceof File?(0,s.N)(n,o,(n=>{e.push({name:n,file:t[o]})})):t[o]&&"object"==typeof t[o]&&r(t[o],n+o+"/")}
return r(o),e}(n.file)}(t,this._logging.log)))}file(t){return this._files.then((function(e){for(const n of e)if(n.name.toLowerCase()===t.toLowerCase())return new f(n.file)
throw new Error("unable to find "+t)}))}get fileList(){return Promise.resolve(this._files).then((t=>t.map((t=>t.name))))}}class f{constructor(t){this._file=t}read(t){return o.UP(t,(0,a.Z)(this._file).as("arraybuffer"))}resolveUrl(){return Promise.resolve(URL.createObjectURL(this._file))}get name(){return this._file.name}}async function g(t,e){const n=t.replace(/[?#].*/,"").split("/").pop(),o=t.match(h)
o&&(t=`https://dl.dropboxusercontent.com/${o[1]}/${o[2]}`)
const r=new u.Z
let i=0
r.watch((()=>{Date.now()<i+5e3||(e(`Downloading: ${r}`),i=Date.now())}))
return{name:n,file:await(0,c.Z)(t).as("blob",r)}}},96011:function(t,e,n){n.d(e,{CA:function(){return s}})
var o=n(37057),r=n(72103)
class i{constructor(t){this.url=t}read(t){return(0,o.Z)(this.url).as("arraybuffer",t)}async resolveUrl(){return Promise.resolve(this.url)}get name(){return(0,r.basename)(this.url)}}class s{constructor(t){this.base=t}async file(t){const e=t.split("/").map((t=>encodeURIComponent(t))).join("/")
return new i(new URL(e,this.base).href)}}e.ZP=i},74278:function(t,e,n){e.Z=class{constructor(t){if(this._callbacks={},this._nextId=1,"function"==typeof t)this.add(t)
else if("object"==typeof t&&t&&t.length)for(let e=0;e<t.length;e++)this.add(t[e])}call(...t){const e=this._callbacks
for(const n in e)e[n](...t)}add(t){const e=this._nextId++
return this._callbacks[e]=t,()=>delete this._callbacks[e]}}},37057:function(t,e,n){var o=n(26826),r=n.n(o),i=n(33256)
e.Z=function(t,{getRetryDelay:e=(()=>1e3+4e3*Math.random())}={}){return{async as(n,o){let s=!1
for(let a=1;;a++)try{return await new Promise(((e,r)=>{const a=new XMLHttpRequest
a.open("GET",t,!0),a.responseType=n,a.onload=()=>{200==+a.status?e(a.response):(403!=+a.status&&404!=+a.status||(s=!0),r(new Error(`Unable to download ${t}: HTTP ${a.status}`)))},a.onerror=()=>r(new Error(`Unable to download ${t}`)),o&&(o.formatter=i.qw,a.onprogress=t=>o.report(t.loaded,t.total)),a.send(null)}))}catch(n){if(console.error(`Unable to download ${t} [attempt ${a}]`,n),a>=3||s)throw n
const o=e()
await r()(o)}}}}},36414:function(t,e,n){e.Z=function(t){const e=Math.floor(t%60)
return Math.floor(t/60)+":"+(e<10?"0":"")+e}},39618:function(t,e,n){var o=n(35741),r=n.n(o)
const i=n(58028).forModule("timesynchro")
let s=0
function a(){return window.performance&&"function"==typeof window.performance.now?window.performance.now():Date.now()}a.synchronize=function(t){function e(t){s=t+Date.now()-a()}r()(t,(function(t,n){t?i.error("Cannot synchronize time: "+t):(e(n),i.info("Synchronized time with global server! Offset = "+s))}),e)},a.synchronized=function(){const t=s
return()=>a()+t},e.Z=a},65e3:function(t,e,n){var o=n(74278)
e.Z=class{constructor(t){this._callbacks=new o.Z,this._value=t}get value(){return this._value}set value(t){this._value=t,this.notify(t)}notify(t){this._callbacks.call(t)}watch(t){return void 0!==this._value&&t(this._value),this._callbacks.add(t)}}},2755:function(t,e,n){e.Z=function(t){return{as(e){return new Promise((function(n,o){const r=new FileReader
switch(r.onload=function(){n(r.result)},r.onerror=function(){o(new Error("Unable to read from Blob"))},e){case"arraybuffer":r.readAsArrayBuffer(t)
break
case"text":r.readAsText(t)}}))}}}},96008:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n)
var r=Object.getOwnPropertyDescriptor(e,n)
r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,r)}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)},i=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],o=0
if(n)return n.call(t)
if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}}
Object.defineProperty(e,"__esModule",{value:!0}),e.Notechart=void 0
var a=s(n(62270)),u=s(n(48274))
r(n(26923),e)
var c=function(){function t(t,e){void 0===e&&(e={})
var n=this,o=t.notes,r=t.timing,i=t.keysounds,s=t.songInfo,a=t.positioning,c=t.spacing,l=t.barLines,h=t.images,d=t.expertJudgmentWindow,f=t.landmineNotes,g=void 0===f?[]:f;(0,u.default)(o,'Expected "data.notes"'),(0,u.default)(r,'Expected "data.timing"'),(0,u.default)(i,'Expected "data.keysounds"'),(0,u.default)(s,'Expected "data.songInfo"'),(0,u.default)(a,'Expected "data.positioning"'),(0,u.default)(c,'Expected "data.spacing"'),(0,u.default)(l,'Expected "data.barLines"'),this.expertJudgmentWindow=d,o=this._preTransform(o,e),this._timing=r,this._positioning=a,this._spacing=c,this._keysounds=i,this._duration=0,this._notes=this._generatePlayableNotesFromBMS(o),this._landmines=this._generatePlayableNotesFromBMS(g),this._autos=this._generateAutoKeysoundEventsFromBMS(o),this._barLines=this._generateBarLineEvents(l),this._samples=this._generateKeysoundFiles(i),this._infos=new Map(this._notes.map((function(t){return[t,n._getNoteInfo(t)]}))),this._songInfo=s,this._images=h}return Object.defineProperty(t.prototype,"notes",{get:function(){return this._notes},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"landmines",{get:function(){return this._landmines},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autos",{get:function(){return this._autos},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"samples",{get:function(){return this._samples},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"keysounds",{get:function(){return this._keysounds.all()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"barLines",{get:function(){return this._barLines},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"columns",{get:function(){return["SC","1","2","3","4","5","6","7"]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"songInfo",{get:function(){return this._songInfo},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"eyecatchImage",{get:function(){return this._images&&this._images.eyecatch||"eyecatch_image.png"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"backgroundImage",{get:function(){return this._images&&this._images.background||"back_image.png"},enumerable:!1,configurable:!0}),t.prototype.info=function(t){return this._infos.get(t)},t.prototype.beatToSeconds=function(t){return this._timing.beatToSeconds(t)},t.prototype.beatToPosition=function(t){return this._positioning.position(t)},t.prototype.measureToBeat=function(t){return(this._barLines[t]||this._barLines[this._barLines.length-1]).beat},t.prototype.secondsToBeat=function(t){return this._timing.secondsToBeat(t)},t.prototype.secondsToPosition=function(t){return this.beatToPosition(this.secondsToBeat(t))},t.prototype.bpmAtBeat=function(t){return this._timing.bpmAtBeat(t)},t.prototype.scrollSpeedAtBeat=function(t){return this._positioning.speed(t)},t.prototype.spacingAtBeat=function(t){return this._spacing.factor(t)},t.prototype.getKeyMode=function(t){var e,n,o={}
try{for(var r=i(this.notes),s=r.next();!s.done;s=r.next()){o[s.value.column]=!0}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return("off"!==t||o[1]||o[7])&&("left"!==t||o[6]||o[7])&&("right"!==t||o[1]||o[2])?"7K":"5K"},t.prototype._preTransform=function(t,e){var n=a.default.chain(t),o=function(t){var e,n
try{for(var o=i(t),r=o.next();!r.done;r=o.next()){var s=r.value
if("6"===s.column||"7"===s.column)return"7K"}}catch(t){e={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return"5K"}(t)
if("off"===e.scratch&&(n=n.map((function(t){return t.column&&"SC"===t.column?Object.assign({},t,{column:null}):t}))),"5K"===o){var r=["1","2","3","4","5","6","7"],s=function(t){return function(e){if(e.column){var n=r.indexOf(e.column)
if(n>-1){var o=n+t;(0,u.default)(o<r.length,"Weird. Columns must not shift beyond available column")
var i=r[o]
return Object.assign({},e,{column:i})}}return e}}
"off"===e.scratch?n=n.map(s(1)):"right"===e.scratch&&(n=n.map(s(2)))}return n.value()},t.prototype._generatePlayableNotesFromBMS=function(t){var e=this,n=1
return t.filter((function(t){return t.column})).map((function(t){var o=e._generateEvent(t.beat)
return o.id=n++,o.column=t.column,o.keysound=t.keysound,o.keysoundStart=t.keysoundStart,o.keysoundEnd=t.keysoundEnd,e._updateDuration(o),void 0!==t.endBeat?(o.end=e._generateEvent(t.endBeat),e._updateDuration(o.end)):o.end=void 0,o}))},t.prototype._generateLandminesFromBMS=function(t){var e=this,n=1
return t.filter((function(t){return t.column})).map((function(t){var o=e._generateEvent(t.beat)
return o.id=n++,o.column=t.column,e._updateDuration(o),o}))},t.prototype._updateDuration=function(t){t.time>this._duration&&(this._duration=t.time)},t.prototype._generateAutoKeysoundEventsFromBMS=function(t){var e=this
return t.filter((function(t){return!t.column})).map((function(t){var n=e._generateEvent(t.beat)
return n.keysound=t.keysound,n.keysoundStart=t.keysoundStart,n.keysoundEnd=t.keysoundEnd,n}))},t.prototype._generateKeysoundFiles=function(t){var e,n,o,r,s=new Set
try{for(var a=i([this.notes,this.autos]),u=a.next();!u.done;u=a.next()){var c=u.value
try{for(var l=(o=void 0,i(c)),h=l.next();!h.done;h=l.next()){var d=h.value,f=t.get(d.keysound)
f&&s.add(f)}}catch(t){o={error:t}}finally{try{h&&!h.done&&(r=l.return)&&r.call(l)}finally{if(o)throw o.error}}}}catch(t){e={error:t}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return Array.from(s)},t.prototype._generateBarLineEvents=function(t){var e=this
return t.map((function(t){return e._generateEvent(t)}))},t.prototype._generateEvent=function(t){return{beat:t,time:this.beatToSeconds(t),position:this.beatToPosition(t)}},t.prototype._getNoteInfo=function(t){return{combos:t.end?2:1}},t}()
e.Notechart=c,e.default=c},88339:function(t,e,n){var o=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n)
var r=Object.getOwnPropertyDescriptor(e,n)
r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,r)}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t
var e={}
if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n)
return r(e,t),e},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}}
Object.defineProperty(e,"__esModule",{value:!0}),e.fromBMSChart=void 0
var a=i(n(35982)),u=s(n(62270)),c=s(n(96008))
function l(t){var e=+t.headers.get("rank")||2
return 0===e?[8,24]:1===e?[15,30]:3===e?[21,60]:[18,40]}function h(t,e){var n=u.default.max(t.map((function(t){return t.endBeat||t.beat})))||0,o=[0],r=0,i=0
do{r+=e.timeSignatures.getBeats(i),i+=1,o.push(r)}while(r<=n)
return o}e.fromBMSChart=function(t,e){var n=a.Notes.fromBMSChart(t,{mapping:e.double?a.Notes.CHANNEL_MAPPING.IIDX_DP:a.Notes.CHANNEL_MAPPING.IIDX_P1}).all(),o={notes:n,landmineNotes:a.Notes.fromBMSChart(t,{mapping:e.double?a.Notes.CHANNEL_MAPPING.IIDX_DP_LANDMINE:a.Notes.CHANNEL_MAPPING.IIDX_P1_LANDMINE}).all(),timing:a.Timing.fromBMSChart(t),keysounds:a.Keysounds.fromBMSChart(t),songInfo:a.SongInfo.fromBMSChart(t),positioning:a.Positioning.fromBMSChart(t),spacing:a.Spacing.fromBMSChart(t),barLines:h(n,t),expertJudgmentWindow:l(t)}
return new c.default(o,e)}},26923:function(t,e){Object.defineProperty(e,"__esModule",{value:!0})}}])

//# sourceMappingURL=419-330669f55c6640ff61ba.js.map