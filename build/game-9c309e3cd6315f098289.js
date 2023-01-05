"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[757],{4749:function(e,n,t){const r=t(44797),a=t(52)
class o extends Error{constructor(e){if(!Array.isArray(e))throw new TypeError("Expected input to be an Array, got "+typeof e)
let n=(e=[...e].map((e=>e instanceof Error?e:null!==e&&"object"==typeof e?Object.assign(new Error(e.message),e):new Error(e)))).map((e=>"string"==typeof e.stack?a(e.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""):String(e))).join("\n")
n="\n"+r(n,4),super(n),this.name="AggregateError",Object.defineProperty(this,"_errors",{value:e})}*[Symbol.iterator](){for(const e of this._errors)yield e}}e.exports=o},52:function(e,n,t){const r=t(10416),a=/\s+at.*(?:\(|\s)(.*)\)?/,o=/^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,l=void 0===r.homedir?"":r.homedir()
e.exports=(e,n)=>(n=Object.assign({pretty:!1},n),e.replace(/\\/g,"/").split("\n").filter((e=>{const n=e.match(a)
if(null===n||!n[1])return!0
const t=n[1]
return!t.includes(".app/Contents/Resources/electron.asar")&&!t.includes(".app/Contents/Resources/default_app.asar")&&!o.test(t)})).filter((e=>""!==e.trim())).map((e=>n.pretty?e.replace(a,((e,n)=>e.replace(n,n.replace(l,"~")))):e)).join("\n"))},67004:function(e,n,t){var r=t(89206),a=t.n(r),o=t(98791),l=t.n(o)()(a())
l.push([e.id,".GameShellScene {\n  margin: 20px auto;\n  background: #353433;\n  border: 1px solid #555453;\n  padding: 15px;\n  max-width: 720px;\n}\n.GameShellScene .drop-zone {\n  border: 2px dashed #555453;\n  padding: 5px;\n}\n.GameShellScene .drop-zone a.is-active {\n  font-weight: bold;\n}\n.GameShellScene .drop-zone-hint {\n  padding: 10px;\n  text-align: center;\n  color: #8b8685;\n}\n.GameShellScene form > div {\n  margin-bottom: 1em;\n}\n.GameShellScene form > div.text .label {\n  display: block;\n  color: #8b8685;\n  font-weight: bold;\n  font-size: 0.8em;\n  margin: 0;\n  margin-bottom: 0.5ex;\n}\n.GameShellScene form > div.text input {\n  font: inherit;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px inset #555453;\n  background: #252423;\n  color: #bfb;\n}\n.GameShellScene form > div.text input:disabled {\n  opacity: 0.2;\n}\n.GameShellScene form > div.checkbox input {\n  margin-right: 1ex;\n}\n.GameShellScene form > div.radio > h3 {\n  display: block;\n  color: #8b8685;\n  font-weight: bold;\n  font-size: 0.8em;\n  margin: 0;\n  margin-bottom: 0.5ex;\n}\n.GameShellScene form > div.radio > label {\n  display: block;\n}\n.GameShellScene form > div.radio input {\n  margin-right: 1ex;\n}\n.GameShellScene button {\n  background: #8b8685;\n  border: 1px outset #aba6a5;\n  font: inherit;\n  font-size: 1.5em;\n  color: #e9e8e7;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n}\n.GameShellScene a {\n  color: #fed;\n}","",{version:3,sources:["webpack://./game/ui/GameShellScene.scss"],names:[],mappings:"AAAA;EACE,iBAAA;EACA,mBAAA;EACA,yBAAA;EACA,aAAA;EACA,gBAAA;AACF;AAAE;EACE,0BAAA;EACA,YAAA;AAEJ;AADI;EACE,iBAAA;AAGN;AAAE;EACE,aAAA;EACA,kBAAA;EACA,cAAA;AAEJ;AAQE;EACE,kBAAA;AANJ;AAQM;EAVF,cAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,SAAA;EACA,oBAAA;AAKJ;AAGM;EACE,aAAA;EACA,cAAA;EACA,WAAA;EACA,sBAAA;EACA,yBAAA;EACA,mBAAA;EACA,WAAA;AADR;AAGM;EACE,YAAA;AADR;AAKM;EACE,iBAAA;AAHR;AAOM;EAhCF,cAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,SAAA;EACA,oBAAA;AA4BJ;AAEM;EACE,cAAA;AAAR;AAEM;EACE,iBAAA;AAAR;AAIE;EACE,mBAAA;EACA,0BAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;EACA,cAAA;EACA,WAAA;EACA,sBAAA;AAFJ;AAIE;EACE,WAAA;AAFJ",sourcesContent:[".GameShellScene {\n  margin: 20px auto;\n  background: #353433;\n  border: 1px solid #555453;\n  padding: 15px;\n  max-width: 720px;\n  .drop-zone {\n    border: 2px dashed #555453;\n    padding: 5px;\n    a.is-active {\n      font-weight: bold;\n    }\n  }\n  .drop-zone-hint {\n    padding: 10px;\n    text-align: center;\n    color: #8b8685;\n  }\n  @mixin option-label {\n    display: block;\n    color: #8b8685;\n    font-weight: bold;\n    font-size: 0.8em;\n    margin: 0;\n    margin-bottom: 0.5ex;\n  }\n  form > div {\n    margin-bottom: 1em;\n    &.text {\n      .label {\n        @include option-label;\n      }\n      input {\n        font: inherit;\n        display: block;\n        width: 100%;\n        box-sizing: border-box;\n        border: 1px inset #555453;\n        background: #252423;\n        color: #bfb;\n      }\n      input:disabled {\n        opacity: 0.2;\n      }\n    }\n    &.checkbox {\n      input {\n        margin-right: 1ex;\n      }\n    }\n    &.radio {\n      > h3 {\n        @include option-label;\n      }\n      > label {\n        display: block;\n      }\n      input {\n        margin-right: 1ex;\n      }\n    }\n  }\n  button {\n    background: #8b8685;\n    border: 1px outset #aba6a5;\n    font: inherit;\n    font-size: 1.5em;\n    color: #e9e8e7;\n    display: block;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  a {\n    color: #fed;\n  }\n}\n"],sourceRoot:""}]),n.Z=l},44797:function(e){e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!=typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``)
if("number"!=typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``)
if("string"!=typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``)
if(0===n)return e
const r=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm
return e.replace(r,t.indent.repeat(n))}},45780:function(e,n,t){const r=t(4749)
e.exports=async(e,n,{concurrency:t=1/0,stopOnError:a=!0}={})=>new Promise(((o,l)=>{if("function"!=typeof n)throw new TypeError("Mapper function is required")
if(!Number.isSafeInteger(t)&&t!==1/0||!(t>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${t}\` (${typeof t})`)
const i=[],A=[],s=e[Symbol.iterator]()
let c=!1,p=!1,d=0,m=0
const u=()=>{if(c)return
const e=s.next(),t=m
if(m++,e.done)return p=!0,void(0===d&&(a||0===A.length?o(i):l(new r(A))))
d++,(async()=>{try{const r=await e.value
i[t]=await n(r,t),d--,u()}catch(e){a?(c=!0,l(e)):(A.push(e),d--,u())}})()}
for(let e=0;e<t&&(u(),!p);e++);}))},78174:function(e,n,t){t.r(n),t.d(n,{main:function(){return M}})
var r=t(54871),a=t(96038),o=t(25848),l=t(94118),i=t(87672),A=t.n(i),s=t(95541),c=t.n(s),p=t(24324),d=t.n(p),m=t(26419),u=t.n(m),E=t(15669),b=t.n(E),g=t(95076),f=t.n(g),h=t(67004),y={}
y.styleTagTransform=f(),y.setAttributes=u(),y.insert=d().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=b()
A()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals
var x=t(93981),C=t(26594),w=t(30583),S=t.n(w)
const v=({files:e,selectedResource:n,onSelect:t,onDrop:r})=>{const a=e=>()=>{t(e.resource)}
return x.createElement("div",{className:"drop-zone"},e.length?x.createElement("ul",null,e.map((e=>x.createElement("li",{key:e.name},x.createElement("a",{onClick:a(e),className:S()({"is-active":e.resource===n})},e.name)))),n?x.createElement("li",null,x.createElement("a",{onClick:()=>{t(null)}},"Clear")):null):x.createElement("div",{className:"drop-zone-hint",onDrop:r},"Drop BMS folder here",x.createElement("br",null),"(only works on Google Chrome)"))}
var k=({options:e,play:n})=>{const[t,r]=(0,x.useState)(e),[a,o]=(0,x.useState)([]),[,l]=(0,x.useState)(!1),i=()=>l((e=>!e)),A=e=>n=>{e(t,n.target.value),i()},s=async e=>{e.preventDefault()
const n=e.nativeEvent,t=new C.Z(n)
try{const e=(await t.fileList).filter((e=>/\.(bms|bme|bml)$/i.test(e))),n=await Promise.all(e.map((async e=>({name:e,resource:await t.file(e)}))))
o(n),r((e=>({...e,resources:t})))}catch(e){throw e instanceof MediaError?new Error("File Error code "+e.code):e}}
return x.createElement("div",{className:"GameShellScene",onDragOver:e=>{e.preventDefault()},onDrop:s},x.createElement("h1",null,"Bemuse Game Shell"),x.createElement("p",null,"This tool is intended for developers testing the game."),x.createElement("form",{onSubmit:e=>{e.preventDefault(),n(t)}},x.createElement("div",{className:"text"},x.createElement("label",null,x.createElement("span",{className:"label"},"BMS URL:"),x.createElement("input",{type:"text",disabled:!!t.resource,onChange:A(((e,n)=>e.url=n)),value:t.url}))),x.createElement("div",{className:"text"},x.createElement("label",null,x.createElement("span",{className:"label"},"-or- Drop BMS folder here"),x.createElement(v,{files:a,selectedResource:t.resource,onSelect:e=>{r((n=>({...n,resource:e}))),i()},onDrop:s}))),x.createElement("div",{className:"text"},x.createElement("label",null,x.createElement("span",{className:"label"},"Audio-Input Latency"),x.createElement("input",{type:"text",onChange:A(((e,n)=>e.game.audioInputLatency=parseInt(n,10))),value:t.game.audioInputLatency}))),x.createElement("div",{className:"text"},x.createElement("label",null,x.createElement("span",{className:"label"},"HI-SPEED:"),x.createElement("input",{type:"text",onChange:A(((e,n)=>e.players[0].speed=parseInt(n,10))),value:t.players[0].speed}))),x.createElement("div",{className:"radio"},x.createElement("h3",null,"Placement"),["left","center","right"].map((e=>x.createElement("label",{key:e},x.createElement("input",{type:"radio",value:e,onChange:A(((n,t)=>n.players[0].placement=e)),checked:t.players[0].placement===e}),x.createElement("span",{className:"label"},e))))),x.createElement("button",{type:"submit"},"Play")))},B=t(2057),G=t(55246),z=t(80425),N=t(41377),Z=t(73596),D=t(47258),I=t(37126)
const L=new a.i((({children:e})=>x.createElement(a.V.Provider,{value:L},x.createElement(G.zt,{store:(0,Z.Z)()},e))))
async function M(){window.addEventListener("touchstart",(function e(){(0,I.u7)(N.Z),window.removeEventListener("touchstart",e)}))
const e=await async function(){const e=(D.Z.keyboard||"").split(",").map((e=>+e))
let n={url:D.Z.bms||"/music/[snack]dddd/dddd_sph.bme",game:{audioInputLatency:+D.Z.latency||0},players:[{speed:+D.Z.speed||3,autoplay:!!D.Z.autoplay,placement:"center",scratch:D.Z.scratch||"left",input:{keyboard:{1:e[0]||83,2:e[1]||68,3:e[2]||70,4:e[3]||32,5:e[4]||74,6:e[5]||75,7:e[6]||76,SC:e[7]||65,SC2:e[8]||16}}}]}
n=await function(e){return new Promise((function(n){const t=x.createElement(k,{options:e,play:function(e){n(e)}})
L.display(t)}))}(n)
const t=n.url,r=new URL("assets/",t)
return{bms:n.resource||new z.ZP(t),assets:n.resources||new o.C(r),metadata:{title:"Loading",subtitles:[],artist:"",genre:"",subartists:[]},options:Object.assign({},n.game,{players:n.players})}}(),{tasks:n,promise:t}=r.load(e)
await L.display(x.createElement(B.Z,{tasks:n,song:e.metadata}))
const a=await t
await L.display(new l.Z(a.display)),a.start()}}}])

//# sourceMappingURL=game-9c309e3cd6315f098289.js.map