(this.webpackChunk=this.webpackChunk||[]).push([[271],{22525:(e,t,n)=>{var r={"./bardot.tsx":92357,"./custom-folder.tsx":83905,"./drop-bms.tsx":59550,"./error.tsx":67433,"./font.js":38203,"./online-authentication.tsx":30432,"./options.tsx":83578,"./quickpick.tsx":97418,"./ranking-table.tsx":15281,"./result-lower.ts":76810,"./result.ts":89696,"./skin.js":75462}
function a(e){var t=l(e)
return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id=22525},55920:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>s})
var r=n(74045),a=n.n(r),l=n(12850),o=n.n(l)()(a())
o.push([e.id,".ranking-table-playground .Ranking {\n  background: #ddd;\n  margin: 10px;\n  display: inline-block;\n  width: 512px;\n  height: 256px;\n}","",{version:3,sources:["webpack://./devtools/playgrounds/ranking-table-playground.scss"],names:[],mappings:"AACE;EACE,gBAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,aAAA;AAAJ",sourcesContent:[".ranking-table-playground {\n  .Ranking {\n    background: #ddd;\n    margin: 10px;\n    display: inline-block;\n    width: 512px;\n    height: 256px;\n  }\n}\n"],sourceRoot:""}])
const s=o},7724:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>c})
var r=n(8600),a=n(41899),l=n(18596)
const o=function(e){const t={}
for(const n of e.keys()){t[n.match(/\w[^.]+/)[0]]=e(n)}return t}(n(22525))
class s extends r.Component{static main(){l.J.render(r.createElement(s,null))}render(){const e={color:"#abc"}
return r.createElement("div",null,r.createElement("h1",null,"Bemuse Playground"),r.createElement("p",null,"Please select a playground"),r.createElement("ul",null,Object.keys(o).map(t=>r.createElement("li",{key:t},r.createElement("a",{style:e,href:"?mode=playground&playground="+t},t)))))}}function c(){(o[a.Z.playground]||s).main()}},92357:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>o})
var r=n(34018),a=n(8600),l=n(18596)
function o(){l.J.render(a.createElement(a.Fragment,null,a.createElement(r.q,{fill:"white",fraction:0}),a.createElement(r.q,{fill:"white",fraction:.25}),a.createElement(r.q,{fill:"white",fraction:.5}),a.createElement(r.q,{fill:"white",fraction:.67}),a.createElement(r.q,{fill:"white",fraction:.75}),a.createElement(r.q,{fill:"white",fraction:.8}),a.createElement(r.q,{fill:"white",fraction:1})))}},83905:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>d})
var r=n(8600),a=n(89599),l=n.n(a),o=n(18596),s=n(84826),c=n(64239),i=n(26106)
const u=()=>{const e=(0,c.k$)(),{isLoading:t,error:n,data:a}=(0,s.useQuery)("customFolder",async()=>await(0,c.x9)(e)),[o,u]=r.useState("")
if(t)return r.createElement("div",null,"Loading...")
if(n)return r.createElement("div",null,"An error has occurred: ",`${n}`)
const d=(a&&a.songs||[]).length||0,m=e=>e?{color:"#ff8"}:{}
return r.createElement("div",null,a?r.createElement("div",null,r.createElement("p",null,"✅ A folder has been selected"),r.createElement("hr",null),r.createElement("p",{style:m(0===d)},"Click the Scan button to scan for new songs 👉"," ",r.createElement("button",{onClick:async()=>{try{await(0,c.xm)(e,{log:console.log,setStatus:l().throttle(e=>u(e),100),updateState:e=>{i.E.setQueryData("customFolder",e)}})}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{i.E.invalidateQueries("customFolder")}}},"🕵️ Scan")),r.createElement("p",null,r.createElement("strong",null,"Scan status:"),r.createElement("br",null),r.createElement("textarea",{value:o,readOnly:!0,style:{boxSizing:"border-box",border:"none",width:"100%",background:"#333",color:"#8e8",font:"inherit"},rows:3})),r.createElement("p",null,r.createElement("strong",null,"Number of songs in the database:")," ",d),r.createElement("p",{style:m(d>0)},"Once the songs are in the database, you can"," ",r.createElement("a",{href:".",style:{color:"#abc"}},"play them in Bemuse!")),r.createElement("hr",null),r.createElement("p",null,"Click the Clear button to remove the folder selection 👉"," ",r.createElement("button",{onClick:async()=>{try{await(0,c.hX)(e)}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{i.E.invalidateQueries("customFolder")}}},"❌ Clear"))):r.createElement("div",null,r.createElement("p",null,"No folder selected."),r.createElement("p",{style:m(!0)},"To get started 👉"," ",r.createElement("button",{onClick:async()=>{try{const t=await window.showDirectoryPicker({id:"custom-folder"})
await(0,c.bW)(e,t)}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{i.E.invalidateQueries("customFolder")}}},"Set custom songs folder")),r.createElement("p",null,"The custom songs folder can contain any number of songs, but each song must be in a separate folder.")))}
function d(){o.J.render(r.createElement(s.QueryClientProvider,{client:i.E},r.createElement("div",{style:{margin:"0 auto",maxWidth:"32em",padding:"0 1em"}},r.createElement("h1",null,"Bemuse custom songs folder console"),r.createElement("p",null,"This is a console for testing an upcoming feature: ✨",r.createElement("a",{style:{color:"#abc"},href:"https://github.com/bemusic/bemuse/discussions/696",target:"_blank",rel:"noreferrer"},r.createElement("strong",null,"custom songs folder")),"✨. You can set a folder to scan for custom songs, and it will be available in Bemuse game, no need to drag individual songs anymore! A more polished UI may be added in later, I hope."),r.createElement("p",null,r.createElement("a",{style:{color:"#abc"},href:"https://github.com/bemusic/bemuse/discussions/696",target:"_blank",rel:"noreferrer"},"Check out the announcement post for troubleshooting and known issues.")),r.createElement("hr",null),r.createElement(u,null))))}},59550:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>s})
var r=n(29105),a=n(8600),l=n(18596)
const o=()=>a.createElement("div",null,a.createElement(r.Z,null))
function s(){l.J.render(a.createElement(o,null))}},67433:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>s})
var r=n(4461),a=n(8600),l=n(18596)
const o=()=>a.createElement("div",null,a.createElement(r.Z,{error:new Error("yabai"),preamble:"Test error.",onContinue:()=>{}}))
function s(){l.J.render(a.createElement(o,null))}},38203:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>l})
var r=n(213),a=n(18596)
function l(){const e=r.autoDetectRenderer(640,480),t=new r.Stage(9143941),n=new r.loaders.Loader,l=["/skins/default/Fonts/BemuseDefault-Meticulous.fnt","/skins/default/Fonts/BemuseDefault-Other.fnt"]
for(const e of l)n.add(e,e)
function o(){e.render(t)}n.load(()=>{const e=new r.BitmapText("*1234567890",{font:"BemuseDefault-Meticulous"})
t.addChild(e)
const n=new r.BitmapText("01",{font:"BemuseDefault-Other"})
n.y=100,t.addChild(n),o(),console.log("Ok")}),a.Z.appendChild(e.view),o()}},30432:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>s})
var r=n(58461),a=n(8600),l=n(18596)
const o=()=>a.createElement("div",null,a.createElement(r.Z,null))
function s(){l.J.render(a.createElement(o,null))}},83578:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>i})
var r=n(25920),a=n(69002),l=n(8600),o=n(18596)
const s=()=>{},c=()=>l.createElement(r.Z,{visible:!0,onBackdropClick:s},l.createElement(a.Z,{onClose:s}))
function i(){o.J.render(l.createElement(c,null))}},97418:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>a})
var r=n(98860)
function a(){(async()=>{const e=await(0,r.Fe)(["one","two","three"].map(e=>({label:e})),{title:"test"})
await(0,r.wp)("Result","You selected: "+e.label)})()}},15281:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>k})
var r=n(45227),a=n.n(r),l=n(88397),o=n.n(l),s=n(50872),c=n.n(s),i=n(53974),u=n.n(i),d=n(98192),m=n.n(d),f=n(92789),E=n.n(f),h=n(55920),p={}
p.styleTagTransform=E(),p.setAttributes=u(),p.insert=c().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=m()
a()(h.Z,p)
h.Z&&h.Z.locals&&h.Z.locals
var g=n(69861),b=n(8600),y=n(18596)
const w=[{playerName:"One",score:543210,count:[5,4,3,2,1],total:15,rank:1},{playerName:"Two",score:123456,count:[1,2,3,4,5],total:15,rank:2}],v=()=>b.createElement("div",{className:"ranking-table-playground"},b.createElement(g.Z,{state:{data:w,meta:{scoreboard:{status:"completed",value:null},submission:{status:"completed",value:{playerName:"One",score:543210,count:[5,4,3,2,1],total:15,rank:1}}}}}),b.createElement(g.Z,{state:{data:w,meta:{scoreboard:{status:"completed",value:null},submission:{status:"completed",value:null}}}}),b.createElement(g.Z,{state:{data:null,meta:{scoreboard:{status:"completed",value:null},submission:{status:"unauthenticated"}}}}),b.createElement(g.Z,{state:{data:null,meta:{scoreboard:{status:"loading"},submission:{status:"loading"}}}}),b.createElement(g.Z,{state:{data:null,meta:{scoreboard:{status:"error",error:new Error},submission:{status:"error",error:new Error}}}}))
function k(){y.J.render(b.createElement(v,null))}},76810:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>a})
var r=n(98785)
function a(){(0,r.u)({score:4e5,accuracy:.9,md5:"fb3dab834591381a5b8188bc2dc9c4b7",playMode:"KB"})}},89696:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>a})
var r=n(98785)
function a(){(0,r.u)({score:543210,accuracy:.97,md5:"12345670123456789abcdef89abemuse",playMode:"TS"})}},75462:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{main:()=>E})
var r=n(90279),a=n(71002),l=n.n(a),o=n(35982),s=n.n(o),c=n(41230),i=n(63552),u=n(51746),d=n(45027),m=n(18596),f=n(88339)
async function E(){const e=s().Compiler.compile("\n    #TITLE ทดสอบ Bemuse\n    #ARTIST ฟหกด\n    #00111:01\n    #00112:01\n    #00113:01\n    #00114:01\n    #00115:01\n    #00118:01\n    #00119:01\n    #00116:01\n    #00151:0001010000000000\n    #00152:0001010000000000\n    #00153:0001010000000000\n    #00154:0001010000000000\n    #00155:0001010000000000\n    #00158:0001010000000000\n    #00159:0001010000000000\n    #00156:0001010000000000\n    #00211:010000000000000000010000\n    #00212:000100000000000000010000\n    #00213:010001000000000000010000\n    #00214:010000010000000001000001\n    #00215:010000000100000100000100\n    #00218:010000000010010001000100\n    #00219:010000000001000100000100").chart,t=[(0,f.fromBMSChart)(e)],n=new c.Z(t,{players:[{speed:2}]}),a=await r.load(r.getSkinUrl({displayMode:"touch3d"})),o=new r.Context(a),E=new i.Z({game:n,skin:a,context:o}),h=new d.Z(n),p=new u.Z,g=(new Date).getTime(),b={started:!0,startTime:g,readyFraction:0}
var y
E.start(),E._getData=(y=E._getData,function(){const e=y.apply(E,arguments)
return e.p1_score=((new Date).getTime()-g)%555556,window.LATEST_DATA=e,e})
const w=()=>{const e=((new Date).getTime()-g)/1e3
b.time=e,h.update(e,p,b),E.update(e,h)}
w(),requestAnimationFrame(function e(){w(),requestAnimationFrame(e)}),function(e){const{width:t,height:n}=e
function r(){const r=Math.min(window.innerWidth/t,window.innerHeight/n)
e.style.width=Math.round(t*r)+"px",e.style.height=Math.round(n*r)+"px"}e.style.display="block",e.style.margin="0 auto",m.Z.appendChild(e),r(),l()(window).on("resize",r)}(o.view)}},98785:(e,t,n)=>{"use strict"
n.d(t,{u:()=>c})
var r=n(77343),a=n(4675),l=n(8600),o=n(79470),s=n(3083)
function c(e){const t={result:{1:9999,2:999,3:99,4:9,missed:123,score:e.score,maxCombo:5555,accuracy:e.accuracy,totalCombo:11106,totalNotes:11106,tainted:!1,log:"",grade:"A",deltas:[0,.01,.03,-.03,-.06]},chart:{info:{title:"Test Song",subtitles:["fl*cknother"],artist:"iaht",subartists:["obj.flicknote"],genre:"Frantic Hardcore",level:17},md5:e.md5},playMode:e.playMode,lr2Timegate:[20,40],onExit:()=>alert("Exit!"),onReplay:()=>alert("Replay!")}
new o.i(({children:e})=>l.createElement(l.Fragment,null,e)).display(l.createElement(a.zt,{store:(0,s.Z)()},l.createElement(r.Z,{...t})))}}}])

//# sourceMappingURL=playground-ab12d3e470465178cb2b.js.map