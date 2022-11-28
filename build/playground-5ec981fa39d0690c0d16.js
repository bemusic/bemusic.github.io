(this.webpackChunk=this.webpackChunk||[]).push([[271],{22525:function(e,t,n){var r={"./bardot.tsx":82556,"./custom-folder.tsx":7595,"./drop-bms.jsx":79431,"./error.jsx":15217,"./font.js":39230,"./online-authentication.jsx":50498,"./options.jsx":44690,"./quickpick.tsx":46812,"./ranking-table.jsx":96496,"./result.js":7956,"./skin.js":40357}
function a(e){var t=o(e)
return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=22525},73675:function(e,t,n){"use strict"
var r=n(95970),a=n.n(r),o=n(50146),l=n.n(o)()(a())
l.push([e.id,".ranking-table-playground .Ranking {\n  background: #ddd;\n  margin: 10px;\n  display: inline-block;\n  width: 512px;\n  height: 256px;\n}","",{version:3,sources:["webpack://./devtools/playgrounds/ranking-table-playground.scss"],names:[],mappings:"AACE;EACE,gBAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,aAAA;AAAJ",sourcesContent:[".ranking-table-playground {\n  .Ranking {\n    background: #ddd;\n    margin: 10px;\n    display: inline-block;\n    width: 512px;\n    height: 256px;\n  }\n}\n"],sourceRoot:""}]),t.Z=l},22578:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return i}})
var r=n(6560),a=n(63929),o=n(95280),l=n(98711)
const s=function(e){const t={}
for(const n of e.keys()){t[n.match(/\w[^.]+/)[0]]=e(n)}return t}(n(22525))
class c extends a.Component{static main(){o.render(a.createElement(c,null),r.Z)}render(){const e={color:"#abc"}
return a.createElement("div",null,a.createElement("h1",null,"Bemuse Playground"),a.createElement("p",null,"Please select a playground"),a.createElement("ul",null,Object.keys(s).map((t=>a.createElement("li",null,a.createElement("a",{style:e,href:"?mode=playground&playground="+t},t))))))}}function i(){(s[l.Z.playground]||c).main()}},82556:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return s}})
var r=n(63929),a=n(6560),o=n(95280),l=n(70415)
function s(){o.render(r.createElement(r.Fragment,null,r.createElement(l.q,{fill:"white",fraction:0}),r.createElement(l.q,{fill:"white",fraction:.25}),r.createElement(l.q,{fill:"white",fraction:.5}),r.createElement(l.q,{fill:"white",fraction:.67}),r.createElement(l.q,{fill:"white",fraction:.75}),r.createElement(l.q,{fill:"white",fraction:.8}),r.createElement(l.q,{fill:"white",fraction:1})),a.Z)}},7595:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return m}})
var r=n(63929),a=n(62270),o=n.n(a),l=n(6560),s=n(95280),c=n(6946),i=n(94533)
const u=new c.QueryClient,d=()=>{const e=(0,i.k$)(),{isLoading:t,error:n,data:a}=(0,c.useQuery)("customFolder",(async()=>await(0,i.x9)(e))),[l,s]=r.useState("")
if(t)return r.createElement("div",null,"Loading...")
if(n)return r.createElement("div",null,"An error has occurred: ",`${n}`)
const d=(a&&a.songs||[]).length||0,m=e=>e?{color:"#ff8"}:{}
return r.createElement("div",null,a?r.createElement("div",null,r.createElement("p",null,"✅ A folder has been selected"),r.createElement("hr",null),r.createElement("p",{style:m(0===d)},"Click the Scan button to scan for new songs 👉"," ",r.createElement("button",{onClick:async()=>{try{await(0,i.xm)(e,{log:console.log,setStatus:o().throttle((e=>s(e)),100),updateState:e=>{u.setQueryData("customFolder",e)}})}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{u.invalidateQueries("customFolder")}}},"🕵️ Scan")),r.createElement("p",null,r.createElement("strong",null,"Scan status:"),r.createElement("br",null),r.createElement("textarea",{value:l,readOnly:!0,style:{boxSizing:"border-box",border:"none",width:"100%",background:"#333",color:"#8e8",font:"inherit"},rows:3})),r.createElement("p",null,r.createElement("strong",null,"Number of songs in the database:")," ",d),r.createElement("p",{style:m(d>0)},"Once the songs are in the database, you can"," ",r.createElement("a",{href:".",style:{color:"#abc"}},"play them in Bemuse!")),r.createElement("hr",null),r.createElement("p",null,"Click the Clear button to remove the folder selection 👉"," ",r.createElement("button",{onClick:async()=>{try{await(0,i.hX)(e)}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{u.invalidateQueries("customFolder")}}},"❌ Clear"))):r.createElement("div",null,r.createElement("p",null,"No folder selected."),r.createElement("p",{style:m(!0)},"To get started 👉"," ",r.createElement("button",{onClick:async()=>{try{const t=await window.showDirectoryPicker({id:"custom-folder"})
await(0,i.bW)(e,t)}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{u.invalidateQueries("customFolder")}}},"Set custom songs folder")),r.createElement("p",null,"The custom songs folder can contain any number of songs, but each song must be in a separate folder.")))}
function m(){s.render(r.createElement(c.QueryClientProvider,{client:u},r.createElement("div",{style:{margin:"0 auto",maxWidth:"32em",padding:"0 1em"}},r.createElement("h1",null,"Bemuse custom songs folder console"),r.createElement("p",null,"This is a console for testing an upcoming feature: ✨",r.createElement("a",{style:{color:"#abc"},href:"https://github.com/bemusic/bemuse/discussions/696",target:"_blank",rel:"noreferrer"},r.createElement("strong",null,"custom songs folder")),"✨. You can set a folder to scan for custom songs, and it will be available in Bemuse game, no need to drag individual songs anymore! A more polished UI may be added in later, I hope."),r.createElement("p",null,r.createElement("a",{style:{color:"#abc"},href:"https://github.com/bemusic/bemuse/discussions/696",target:"_blank",rel:"noreferrer"},"Check out the announcement post for troubleshooting and known issues.")),r.createElement("hr",null),r.createElement(d,null))),l.Z)}},79431:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return c}})
var r=n(63929),a=n(6560),o=n(87908),l=n(95280)
const s=()=>r.createElement("div",null,r.createElement(o.Z,null))
function c(){l.render(r.createElement(s,null),a.Z)}},15217:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return c}})
var r=n(63929),a=n(6560),o=n(86960),l=n(95280)
const s=()=>r.createElement("div",null,r.createElement(o.Z,{error:new Error("yabai"),preamble:"Test error."}))
function c(){l.render(r.createElement(s,null),a.Z)}},39230:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return o}})
var r=n(213),a=n(6560)
function o(){const e=r.autoDetectRenderer(640,480),t=new r.Stage(9143941),n=new r.loaders.Loader,o=["/skins/default/Fonts/BemuseDefault-Meticulous.fnt","/skins/default/Fonts/BemuseDefault-Other.fnt"]
for(const e of o)n.add(e,e)
function l(){e.render(t)}n.load((()=>{const e=new r.BitmapText("*1234567890",{font:"BemuseDefault-Meticulous"})
t.addChild(e)
const n=new r.BitmapText("01",{font:"BemuseDefault-Other"})
n.y=100,t.addChild(n),l(),console.log("Ok")})),a.Z.appendChild(e.view),l()}},50498:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return c}})
var r=n(63929),a=n(95280),o=n(6560),l=n(62594)
const s=()=>r.createElement("div",null,r.createElement(l.Z,null))
function c(){a.render(r.createElement(s,null),o.Z)}},44690:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return u}})
var r=n(63929),a=n(95280),o=n(6560),l=n(3105),s=n(64134)
const c=()=>{},i=()=>r.createElement(l.Z,{visible:!0,onBackdropClick:c},r.createElement(s.Z,{onClose:c}))
function u(){a.render(r.createElement(i,null),o.Z)}},46812:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return a}})
var r=n(59615)
function a(){(async()=>{const e=await(0,r.Fe)(["one","two","three"].map((e=>({label:e}))),{title:"test"})
await(0,r.wp)("Result","You selected: "+e.label)})()}},96496:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return A}})
var r=n(63929),a=n(95280),o=n(6560),l=n(77587),s=n(87672),c=n.n(s),i=n(95541),u=n.n(i),d=n(24324),m=n.n(d),f=n(26419),h=n.n(f),p=n(15669),E=n.n(p),g=n(95076),b=n.n(g),y=n(73675),w={}
w.styleTagTransform=b(),w.setAttributes=h(),w.insert=m().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=E()
c()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals
const k=()=>r.createElement("div",{className:"ranking-table-playground"},r.createElement(l.Z,{state:{data:[{playerName:"One",score:"543210",count:[5,4,3,2,1],total:15,rank:1},{playerName:"Two",score:"123456",count:[1,2,3,4,5],total:15,rank:2}],meta:{scoreboard:{status:"completed"},submission:{status:"completed",record:{playerName:"One",score:"543210",count:[5,4,3,2,1],total:15,rank:1}}}}}),r.createElement(l.Z,{state:{data:[{playerName:"One",score:"543210",count:[5,4,3,2,1],total:15,rank:1},{playerName:"Two",score:"123456",count:[1,2,3,4,5],total:15,rank:2}],meta:{scoreboard:{status:"completed"},submission:{status:"completed",record:null}}}}),r.createElement(l.Z,{state:{data:null,meta:{scoreboard:{status:"completed"},submission:{status:"unauthenticated"}}}}),r.createElement(l.Z,{state:{data:null,meta:{scoreboard:{status:"loading"},submission:{status:"loading"}}}}),r.createElement(l.Z,{state:{data:null,meta:{scoreboard:{status:"error"},submission:{status:"error"}}}}))
function A(){a.render(r.createElement(k,null),o.Z)}},7956:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return c}})
var r=n(19989),a=n(63929),o=n(31551),l=n(20734),s=n(2622)
function c(){const e={result:{1:9999,2:999,3:99,4:9,missed:123,score:543210,maxCombo:5555,accuracy:.97,totalCombo:11106,grade:"A",deltas:[0,.01,.03,-.03,-.06]},chart:{info:{title:"Test Song",subtitles:["fl*cknother"],artist:"iaht",subartists:["obj.flicknote"],genre:"Frantic Hardcore",level:17},md5:"12345670123456789abcdef89abemuse"},lr2Timegate:[20,40],onExit:()=>alert("Exit!"),onReplay:()=>alert("Replay!"),playMode:"BM"}
l.ZP.display(a.createElement(r.zt,{store:(0,s.Z)()},a.createElement(o.Z,{...e})))}},40357:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return h}})
var r=n(8050),a=n(38044),o=n.n(a),l=n(35982),s=n.n(l),c=n(7194),i=n(81368),u=n(88371),d=n(47991),m=n(6560),f=n(88339)
async function h(){const e=s().Compiler.compile("\n    #TITLE ทดสอบ Bemuse\n    #ARTIST ฟหกด\n    #00111:01\n    #00112:01\n    #00113:01\n    #00114:01\n    #00115:01\n    #00118:01\n    #00119:01\n    #00116:01\n    #00151:0001010000000000\n    #00152:0001010000000000\n    #00153:0001010000000000\n    #00154:0001010000000000\n    #00155:0001010000000000\n    #00158:0001010000000000\n    #00159:0001010000000000\n    #00156:0001010000000000\n    #00211:010000000000000000010000\n    #00212:000100000000000000010000\n    #00213:010001000000000000010000\n    #00214:010000010000000001000001\n    #00215:010000000100000100000100\n    #00218:010000000010010001000100\n    #00219:010000000001000100000100").chart,t=[(0,f.fromBMSChart)(e)],n=new c.Z(t,{players:[{speed:2}]}),a=await r.load(r.getSkinUrl({displayMode:"touch3d"})),l=new r.Context(a),h=new i.Z({game:n,skin:a,context:l}),p=new d.Z(n),E=new u.Z,g=(new Date).getTime(),b={started:!0,startTime:g,readyFraction:0}
var y
h.start(),h._getData=(y=h._getData,function(){const e=y.apply(h,arguments)
return e.p1_score=((new Date).getTime()-g)%555556,window.LATEST_DATA=e,e})
const w=()=>{const e=((new Date).getTime()-g)/1e3
b.time=e,p.update(e,E,b),h.update(e,p)}
w(),requestAnimationFrame((function e(){w(),requestAnimationFrame(e)})),function(e){const{width:t,height:n}=e
function r(){const r=Math.min(window.innerWidth/t,window.innerHeight/n)
e.style.width=Math.round(t*r)+"px",e.style.height=Math.round(n*r)+"px"}e.style.display="block",e.style.margin="0 auto",m.Z.appendChild(e),r(),o()(window).on("resize",r)}(l.view)}}}])

//# sourceMappingURL=playground-5ec981fa39d0690c0d16.js.map