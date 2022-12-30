/*! For license information please see sync-e918db7f3c533d2f69d0.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[31],{30583:function(n,e){var t
!function(){"use strict"
var r={}.hasOwnProperty
function o(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e]
if(t){var s=typeof t
if("string"===s||"number"===s)n.push(t)
else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t)
a&&n.push(a)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString())
continue}for(var i in t)r.call(t,i)&&t[i]&&n.push(i)}}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(t=function(){return o}.apply(e,[]))||(n.exports=t)}()},63386:function(n,e,t){"use strict"
var r=t(95970),o=t.n(r),s=t(50146),a=t.n(s)()(o())
a.push([n.id,'@charset "UTF-8";\n.ExperimentScene {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n}\n.ExperimentSceneのbutton {\n  font: inherit;\n  background: #252423 linear-gradient(to bottom, #454443, #151413);\n  border: 1px solid #555453;\n  padding: 0.5ex 1.3ex;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n  font-size: 18px;\n}\n.ExperimentSceneのbutton:hover {\n  border-color: #656463;\n}\n.ExperimentSceneのbutton:focus {\n  border-color: #8b8685;\n  outline: 0;\n}\n.ExperimentSceneのbutton:active {\n  background: #252423 linear-gradient(to top, #353433, #151413);\n  border-color: #454443;\n}\n.ExperimentSceneのmessage {\n  text-align: center;\n  font-size: 16px;\n}\n.ExperimentSceneのprogress {\n  width: 100px;\n  margin: 1em auto;\n  border: 1px solid #8b8685;\n  padding: 1px;\n}\n.ExperimentSceneのprogressBar {\n  height: 5px;\n  background: #8b8685;\n  transition: 0.5s transform linear;\n  transform-origin: left;\n}\n.ExperimentScene.is-finished .ExperimentSceneのwrapper {\n  animation: 3.243243243s experiment-scene--auto-synchro linear infinite;\n}\n.ExperimentScene.is-finished .ExperimentSceneのwrapperInner {\n  animation: 3s experiment-scene--spin linear infinite;\n  animation-delay: 13.378378377s;\n}\n\n@keyframes experiment-scene--auto-synchro {\n  0.00% {\n    transform: scale(1);\n  }\n  11.88% {\n    transform: scale(0.95);\n  }\n  13.13% {\n    transform: scale(1.05);\n  }\n  24.38% {\n    transform: scale(0.95);\n  }\n  25.63% {\n    transform: scale(1.05);\n  }\n  36.88% {\n    transform: scale(0.95);\n  }\n  38.13% {\n    transform: scale(1.05);\n  }\n  49.38% {\n    transform: scale(0.95);\n  }\n  50.63% {\n    transform: scale(1.05);\n  }\n  61.88% {\n    transform: scale(0.95);\n  }\n  63.13% {\n    transform: scale(1.05);\n  }\n  74.38% {\n    transform: scale(0.95);\n  }\n  75.63% {\n    transform: scale(1.05);\n  }\n  86.88% {\n    transform: scale(0.95);\n  }\n  88.13% {\n    transform: scale(1.05);\n  }\n  100.00% {\n    transform: scale(1);\n  }\n}\n@keyframes experiment-scene--spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  4% {\n    transform: rotate(1.99deg);\n  }\n  8% {\n    transform: rotate(3.85deg);\n  }\n  12% {\n    transform: rotate(5.48deg);\n  }\n  16% {\n    transform: rotate(6.75deg);\n  }\n  20% {\n    transform: rotate(7.61deg);\n  }\n  24% {\n    transform: rotate(7.98deg);\n  }\n  28% {\n    transform: rotate(7.86deg);\n  }\n  32% {\n    transform: rotate(7.24deg);\n  }\n  36% {\n    transform: rotate(6.16deg);\n  }\n  40% {\n    transform: rotate(4.7deg);\n  }\n  44% {\n    transform: rotate(2.94deg);\n  }\n  48% {\n    transform: rotate(1deg);\n  }\n  52% {\n    transform: rotate(-1deg);\n  }\n  56% {\n    transform: rotate(-2.94deg);\n  }\n  60% {\n    transform: rotate(-4.7deg);\n  }\n  64% {\n    transform: rotate(-6.16deg);\n  }\n  68% {\n    transform: rotate(-7.24deg);\n  }\n  72% {\n    transform: rotate(-7.86deg);\n  }\n  76% {\n    transform: rotate(-7.98deg);\n  }\n  80% {\n    transform: rotate(-7.61deg);\n  }\n  84% {\n    transform: rotate(-6.75deg);\n  }\n  88% {\n    transform: rotate(-5.48deg);\n  }\n  92% {\n    transform: rotate(-3.85deg);\n  }\n  96% {\n    transform: rotate(-1.99deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}',"",{version:3,sources:["webpack://./auto-synchro/ui/ExperimentScene.scss","webpack://./ui/common.scss"],names:[],mappings:"AAAA,gBAAgB;AAEhB;EACE,aAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,mBAAA;EACA,uBAAA;AAAF;AAEE;ECkDA,aAAA;EACA,gEAAA;EACA,yBAAA;EACA,oBAAA;EACA,WAAA;EACA,kBAAA;EACA,wCAAA;EDtDE,eAAA;AAMJ;ACiDE;EACE,qBAAA;AD/CJ;ACiDE;EACE,qBAAA;EACA,UAAA;AD/CJ;ACiDE;EACE,6DAAA;EACA,qBAAA;AD/CJ;AAdE;EACE,kBAAA;EACA,eAAA;AAgBJ;AAbE;EACE,YAAA;EACA,gBAAA;EACA,yBAAA;EACA,YAAA;AAeJ;AAbE;EACE,WAAA;EACA,mBAAA;EACA,iCAAA;EACA,sBAAA;AAeJ;AAZE;EACE,sEAAA;AAcJ;AAZE;EACE,oDAAA;EACA,8BAAA;AAcJ;;AAVA;EAGE;IACE,mBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,sBAAA;EAWF;EATA;IACE,mBAAA;EAWF;AACF;AARA;EACE;IACE,uBAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,yBAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,uBAAA;EAUF;EARA;IACE,wBAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,0BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,2BAAA;EAUF;EARA;IACE,uBAAA;EAUF;AACF",sourcesContent:["@import '~bemuse/ui/common';\n\n.ExperimentScene {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n\n  &のbutton {\n    @include button;\n    font-size: 18px;\n  }\n\n  &のmessage {\n    text-align: center;\n    font-size: 16px;\n  }\n\n  &のprogress {\n    width: 100px;\n    margin: 1em auto;\n    border: 1px solid #8b8685;\n    padding: 1px;\n  }\n  &のprogressBar {\n    height: 5px;\n    background: #8b8685;\n    transition: 0.5s transform linear;\n    transform-origin: left;\n  }\n\n  &.is-finished &のwrapper {\n    animation: 3.243243243s experiment-scene--auto-synchro linear infinite;\n  }\n  &.is-finished &のwrapperInner {\n    animation: 3s experiment-scene--spin linear infinite;\n    animation-delay: 13.378378377s;\n  }\n}\n\n@keyframes experiment-scene--auto-synchro {\n  $small: 0.95;\n  $large: 1.05;\n  0.00% {\n    transform: scale(1);\n  }\n  11.88% {\n    transform: scale($small);\n  }\n  13.13% {\n    transform: scale($large);\n  }\n  24.38% {\n    transform: scale($small);\n  }\n  25.63% {\n    transform: scale($large);\n  }\n  36.88% {\n    transform: scale($small);\n  }\n  38.13% {\n    transform: scale($large);\n  }\n  49.38% {\n    transform: scale($small);\n  }\n  50.63% {\n    transform: scale($large);\n  }\n  61.88% {\n    transform: scale($small);\n  }\n  63.13% {\n    transform: scale($large);\n  }\n  74.38% {\n    transform: scale($small);\n  }\n  75.63% {\n    transform: scale($large);\n  }\n  86.88% {\n    transform: scale($small);\n  }\n  88.13% {\n    transform: scale($large);\n  }\n  100.00% {\n    transform: scale(1);\n  }\n}\n\n@keyframes experiment-scene--spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  4% {\n    transform: rotate(1.99deg);\n  }\n  8% {\n    transform: rotate(3.85deg);\n  }\n  12% {\n    transform: rotate(5.48deg);\n  }\n  16% {\n    transform: rotate(6.75deg);\n  }\n  20% {\n    transform: rotate(7.61deg);\n  }\n  24% {\n    transform: rotate(7.98deg);\n  }\n  28% {\n    transform: rotate(7.86deg);\n  }\n  32% {\n    transform: rotate(7.24deg);\n  }\n  36% {\n    transform: rotate(6.16deg);\n  }\n  40% {\n    transform: rotate(4.7deg);\n  }\n  44% {\n    transform: rotate(2.94deg);\n  }\n  48% {\n    transform: rotate(1deg);\n  }\n  52% {\n    transform: rotate(-1deg);\n  }\n  56% {\n    transform: rotate(-2.94deg);\n  }\n  60% {\n    transform: rotate(-4.7deg);\n  }\n  64% {\n    transform: rotate(-6.16deg);\n  }\n  68% {\n    transform: rotate(-7.24deg);\n  }\n  72% {\n    transform: rotate(-7.86deg);\n  }\n  76% {\n    transform: rotate(-7.98deg);\n  }\n  80% {\n    transform: rotate(-7.61deg);\n  }\n  84% {\n    transform: rotate(-6.75deg);\n  }\n  88% {\n    transform: rotate(-5.48deg);\n  }\n  92% {\n    transform: rotate(-3.85deg);\n  }\n  96% {\n    transform: rotate(-1.99deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n","// The common library for user interface.\n// This file must not emit any CSS code! It can only contain variable,\n// mixin, or silent class declarations.\n\n$ui-font: 'Source Sans Pro', 'Segoe UI', 'Helvetica Neue', sans-serif;\n$link-color: #039;\n\n@mixin full-screen {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n@mixin full-screen-fixed {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n@mixin centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@mixin scrolling-y {\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n@mixin scrolling-x {\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n@mixin center-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin scene-background($url) {\n  background: $url center no-repeat;\n  background-size: cover;\n}\n\n@mixin main-bg {\n  @include scene-background(url(~bemuse/ui/images/bg/a.jpg));\n}\n\n@mixin soft-shadow {\n  box-shadow: 0 0.1vh 3vh rgba(#000, 0.1);\n}\n\n@mixin button {\n  font: inherit;\n  background: #252423 linear-gradient(to bottom, #454443, #151413);\n  border: 1px solid #555453;\n  padding: 0.5ex 1.3ex;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(#000, 0.5);\n  &:hover {\n    border-color: #656463;\n  }\n  &:focus {\n    border-color: #8b8685;\n    outline: 0;\n  }\n  &:active {\n    background: #252423 linear-gradient(to top, #353433, #151413);\n    border-color: #454443;\n  }\n}\n\n@mixin input {\n  font: inherit;\n  background: #252423 linear-gradient(to bottom, #151413, #292827);\n  border: 1px solid #555453;\n  padding: 0.5ex 1.3ex;\n  color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(#000, 0.5);\n  &:hover {\n    border-color: #656463;\n  }\n  &:focus {\n    border-color: #8b8685;\n    outline: 0;\n  }\n  &:active {\n    border-color: #454443;\n  }\n  &::selection {\n    background: #8b8685;\n    color: #8e8;\n  }\n}\n\n@mixin input-button-zindex($nominal) {\n  position: relative;\n  z-index: $nominal;\n  &:hover {\n    z-index: 30;\n  }\n  &:focus {\n    z-index: 40;\n  }\n  &:active {\n    z-index: 10;\n  }\n}\n"],sourceRoot:""}]),e.Z=a},22022:function(n,e){"use strict"
e.Z=new AudioContext({latencyHint:"interactive"})},49868:function(n,e,t){"use strict"
t.r(e),t.d(e,{main:function(){return D}})
var r=t(62270),o=t.n(r),s=t(22022),a=t(37057),i=t(10426)
const A={"bgm.ogg":t(26006),"intro.ogg":t(45276),"kick.ogg":t(29094),"snare.ogg":t(18251)}
async function c(){const n=new i.ZP(s.Z),e=o().fromPairs(await Promise.all(["bgm","intro","kick","snare"].map((e=>(e=>(0,a.Z)(A[`${e}.ogg`]).as("arraybuffer").then((e=>n.sample(e))))(e).then((n=>[e,n]))))))
return function(n,e){return function(t){n.unmute()
const r=148,o=new l(s.Z,-1),a=s.Z.createBiquadFilter()
a.type="lowpass",a.frequency.value=0,a.Q.value=10,a.connect(s.Z.destination)
const i={part2:null},A=function(n,e){let t=-1
return r=>{const o=Math.floor((r+.1)*n/60)
for(;t<o;){t+=1
e(t,60*t/n-r)}}}(r,((n,r)=>{n%8!=7&&e.kick.play(r),null!==i.part2?(n-=i.part2.begin)%128==0&&e.bgm.play(r):(n%32==0&&e.intro.play(r,{node:a}),n%32==31&&!0===i.ok&&(e.snare.play(r),i.part2={begin:n+1},t.a()))}))
return setInterval((()=>A(o.t)),33),{ok(){i.ok=!0},progress(n){a.frequency.value=2e4*n*n*n},getSample(){const n=Math.round(o.t*r/60),e=60*n/r
return[n,o.t-e]}}}}(n,e)}class l{constructor(n,e){this._context=n,this._start=n.currentTime,this._startTime=e}get t(){return this._context.currentTime-this._start+this._startTime}}var u=t(63929),d=t(95280),m=t(87672),f=t.n(m),E=t(95541),p=t.n(E),g=t(24324),h=t.n(g),b=t(26419),x=t.n(b),C=t(15669),y=t.n(C),w=t(95076),v=t.n(w),B=t(63386),_={}
_.styleTagTransform=v(),_.setAttributes=x(),_.insert=h().bind(null,"head"),_.domAPI=p(),_.insertStyleElement=y()
f()(B.Z,_),B.Z&&B.Z.locals&&B.Z.locals
var S=t(30583),T=t.n(S)
var F=n=>u.createElement("div",{className:T()("ExperimentScene",{"is-finished":n.finished})},u.createElement("div",{className:"ExperimentSceneのwrapper"},u.createElement("div",{className:"ExperimentSceneのwrapperInner"},u.createElement(U,{...n,onStart:n.onStart}))))
const I=({onStart:n})=>u.createElement("div",{className:"ExperimentSceneのready"},u.createElement("button",{className:"ExperimentSceneのbutton",onClick:n},"Start Calibration")),k=({text:n})=>u.createElement("div",{className:"ExperimentSceneのmessage"},n),U=({loading:n,started:e,listening:t,onStart:r,finished:o,numSamples:s,latency:a})=>n?null:e?t?u.createElement(R,{finished:o,numSamples:s,latency:a}):u.createElement(k,{text:"Please listen to the beats…"}):u.createElement(I,{onStart:r}),R=({finished:n,numSamples:e,latency:t})=>{var r
const o=`scaleX(${n?1:(r=Math.min(1,e/84),1-Math.pow(1-r,2))})`,s={transform:o,WebkitTransform:o}
return u.createElement("div",{className:"ExperimentSceneのcollection"},u.createElement(k,{text:n?`Your latency is ${t}ms. Please close this window.`:"Please press the space bar when you hear the kick drum."}),u.createElement("div",{className:"ExperimentSceneのprogress"},u.createElement("div",{className:"ExperimentSceneのprogressBar",style:s})))}
var $=t(38044),P=t.n($),M=t(38500),W=t.n(M),Z=t(97236)
function D(n){n.setStatus("Loading song")
const e=new(W().Bus),t=e.scan({loading:!0,started:!1,finished:!1,listening:!1,numSamples:0,latency:0},((n,e)=>o().assign({},n,e))),r=(0,Z.$j)(t)(F),s=u.createElement(r,{onStart:()=>{a(),i({type:"calibration-started"}),addEventListener("beforeunload",(()=>{i({type:"calibration-closed"})}))}})
let a
function i(n){window.opener&&window.opener.postMessage(n,"*")}return d.render(s,P()("<div></div>").appendTo("body")[0]),c().then((n=>{const t=[]
e.push({loading:!1}),a=()=>{e.push({started:!0})
const r=n({a(){const n=Math.max(0,function(n){const e=n.map((n=>n[1]))
e.sort(((n,e)=>n-e))
let t=0,r=0
for(let n=Math.floor(1*e.length/7);n<6*e.length/7;n++)t+=1,r+=e[n]
return Math.round(r/t*1e3)}(t))
e.push({finished:!0,latency:n}),i({latency:n})}}),o=()=>{t.push(r.getSample()),r.progress(Math.min(1,t.length/56)),t.length>=56&&r.ok(),e.push({numSamples:t.length})}
setTimeout((()=>{e.push({listening:!0}),window.addEventListener("keydown",(n=>{32===n.which&&(n.preventDefault(),o())})),window.addEventListener("touchstart",(n=>{1===n.touches.length&&(n.preventDefault(),o())}))}),6675)}}))}},97236:function(n,e,t){"use strict"
t.d(e,{$j:function(){return i}})
var r=t(38500),o=t.n(r),s=t(63929)
function a(n){if(n instanceof o().Property)return n
if(n instanceof o().EventStream)throw new Error("Please convert Bacon.EventStream to Bacon.Property first.")
if(n&&"object"==typeof n)return o().combineTemplate(n)
throw new Error("Expected a Bacon.Property or a template.")}const i=n=>e=>{const t=a(n)
return class extends s.Component{constructor(n){let e
super(n),this.handleValue=n=>{this._mounted&&this.setState({value:n})},this._unsubscribe=t.onValue(this.handleValue)
t.onValue((n=>e=n))(),this.state={value:e}}componentWillUnmount(){this._mounted=!1,this._unsubscribe&&this._unsubscribe()}componentDidMount(){this._mounted=!0}render(){return s.createElement(e,{...this.state.value||{},...this.props})}}}},33256:function(n,e,t){"use strict"
t.d(e,{cY:function(){return A},qw:function(){return a},u_:function(){return i}})
var r=t(45128),o=t.n(r)
const s=n=>e=>null!==e.progress?n(e):"",a=s((n=>o()(n.current)+" / "+o()(n.total))),i=s((n=>(n.current/n.total*100).toFixed(1)+"%")),A=s((n=>n.extra+""))},10426:function(n,e,t){"use strict"
t.d(e,{tz:function(){return a},u7:function(){return d}})
var r=t(22022),o=t(2755),s=t(52973)
const a=.001,i=document.createElement("audio")
const A=!i.canPlayType('audio/ogg; codecs="vorbis"')
class c{constructor(n,{volume:e}={}){this._master=n,this._gain=this._master.audioContext.createGain(),null!=e&&(this._gain.gain.value=e),this._gain.connect(this._master.destination)}get destination(){return this._gain}destroy(){this._gain.disconnect(),this._gain=null}}class l{constructor(n,e){this._master=n,this._buffer=e}play(n,e){return new u(this._master,this._buffer,n,e)}destroy(){this._master=null,this._buffer=null}get duration(){return this._buffer.duration}}class u{constructor(n,e,t,r={}){t=t||0,this._master=n
const o=n.audioContext,s=o.createBufferSource()
s.buffer=e,s.onended=()=>this.stop()
const i=o.createGain()
s.connect(i)
const A=r.node||r.group&&r.group.destination||n.destination
i.connect(A),this._source=s,this._gain=this.TEST_node=i
const c=t?Math.max(0,o.currentTime+t):0,l=r.start||0,u=l>0
let d=!1
if(u&&i.gain.setValueAtTime(0,0),void 0!==r.end){const n=Math.max(r.end-l,0)
s.start(c,l,n+a),d=o.currentTime+t+n}else s.start(c,l)
u&&(i.gain.setValueAtTime(0,o.currentTime+t),i.gain.linearRampToValueAtTime(1,o.currentTime+t+a)),!1!==d&&(i.gain.setValueAtTime(1,d),i.gain.linearRampToValueAtTime(0,d+a)),this._master._startPlaying(this)}stop(){this._source&&(this._source.stop(0),this._source.disconnect(),this._gain.disconnect(),this._source=null,this._gain=null,this._master._stoppedPlaying(this),this.onstop&&this.onstop())}bad(){this._source&&(this._source.playbackRate.value=Math.random()<.5?Math.pow(2,1/24):Math.pow(2,-1/24))}destroy(){this.stop()}}function d(n=r.Z){const e=n.createGain(),t=n.createOscillator()
t.frequency.value=440,t.start(n.currentTime+.1),t.stop(n.currentTime+.1),e.connect(n.destination),e.disconnect(),async function(n){return n.resume()}(n).catch((n=>{console.error("[sampling-master] Cannot resume AudioContext",n)}))}e.ZP=class{constructor(n){this._audioContext=n||r.Z,this._samples=[],this._groups=[],this._instances=new Set,this._destination=this._audioContext.destination}unmute(){d(this._audioContext)}get audioContext(){return this._audioContext}get destination(){return this._destination}get currentTime(){return this._audioContext.currentTime}destroy(){if(!this._destroyed){this._destroyed=!0
for(const n of this._samples)n.destroy()
for(const n of this._instances)n.destroy()
this._samples=null,this._instances=null}}decode(n){return this._coerceToArrayBuffer(n).then((n=>this._decodeAudio(n)))}sample(n){return(()=>n.numberOfChannels?Promise.resolve(n):this.decode(n))().then((n=>{if(this._destroyed)throw new Error("SamplingMaster already destroyed!")
const e=new l(this,n)
return this._samples.push(e),e}))}group(n){const e=new c(this,n)
return this._groups.push(e),e}_coerceToArrayBuffer(n){return n instanceof ArrayBuffer?Promise.resolve(n):(0,o.Z)(n).as("arraybuffer")}_decodeAudio(n){return new Promise(((e,t)=>{if(A&&n.byteLength>4){const t=new Uint8Array(n,0,4)
if(79===t[0]&&103===t[1]&&103===t[2]&&83===t[3])return e((0,s.g)(this.audioContext,n))}this.audioContext.decodeAudioData(n,(function(n){e(n)}),(function(n){t(new Error("Unable to decode audio: "+n))}))}))}_startPlaying(n){this._instances.add(n)}_stoppedPlaying(n){this._instances.delete(n)}}},52973:function(n,e,t){"use strict"
t.d(e,{g:function(){return a}})
var r=t(75239)
let o
const s=t.n(r)()(1)
async function a(n,e){const r=await(o||(o=t.e(45).then(t.t.bind(t,3660,17)).then((n=>n.default)).then((n=>(0,eval)(n+"stbvorbis")))),o)
return s((()=>function(n,e,t){return new Promise(((r,o)=>{const s=[]
let a,A=0
n.decode(t,(function(n){if(n.data&&(a=n.sampleRate,s.push(n.data),A+=n.data[0].length),n.error){const e=n.error instanceof Error?n.error:`stbvorbis.js Error: ${n.error}`
o(e)}n.eof&&r(async function(n,e,t,r){if(!t)throw new Error("stbvorbis.js Error: No length")
if(!r)throw new Error("stbvorbis.js Error: No sample rate")
const o=e[0].length,s=n.createBuffer(o,t,r),a=Array(s.numberOfChannels).fill(null).map(((n,e)=>new i(s.getChannelData(e))))
for(const n of e)n.forEach(((n,e)=>{a[e].write(n)}))
return s}(e,s,A,a))}))}))}(r,n,e)))}class i{constructor(n){this.data=n,this.offset=0}write(n){const{offset:e,data:t}=this
for(let r=0;r<n.length;r++)t[r+e]=n[r]
this.offset+=n.length}}},37057:function(n,e,t){"use strict"
var r=t(26826),o=t.n(r),s=t(33256)
e.Z=function(n,{getRetryDelay:e=(()=>1e3+4e3*Math.random())}={}){return{async as(t,r){let a=!1
for(let i=1;;i++)try{return await new Promise(((e,o)=>{const i=new XMLHttpRequest
i.open("GET",n,!0),i.responseType=t,i.onload=()=>{200==+i.status?e(i.response):(403!=+i.status&&404!=+i.status||(a=!0),o(new Error(`Unable to download ${n}: HTTP ${i.status}`)))},i.onerror=()=>o(new Error(`Unable to download ${n}`)),r&&(r.formatter=s.qw,i.onprogress=n=>r.report(n.loaded,n.total)),i.send(null)}))}catch(t){if(console.error(`Unable to download ${n} [attempt ${i}]`,t),i>=3||a)throw t
const r=e()
await o()(r)}}}}},2755:function(n,e,t){"use strict"
e.Z=function(n){return{as(e){return new Promise((function(t,r){const o=new FileReader
switch(o.onload=function(){t(o.result)},o.onerror=function(){r(new Error("Unable to read from Blob"))},e){case"arraybuffer":o.readAsArrayBuffer(n)
break
case"text":o.readAsText(n)}}))}}}},26006:function(n,e,t){"use strict"
n.exports=t.p+"build/assets/bgm-642fdd0fdc1101d9bdbe.ogg"},45276:function(n,e,t){"use strict"
n.exports=t.p+"build/assets/intro-3491d2d11922b7b8d961.ogg"},29094:function(n,e,t){"use strict"
n.exports=t.p+"build/assets/kick-5630994b871cb6fedd63.ogg"},18251:function(n,e,t){"use strict"
n.exports=t.p+"build/assets/snare-ffe551da746a0486959b.ogg"}}])

//# sourceMappingURL=sync-e918db7f3c533d2f69d0.js.map