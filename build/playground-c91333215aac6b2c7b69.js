(this.webpackChunk=this.webpackChunk||[]).push([[271],{22525:function(e,t,n){var r={"./bardot.tsx":43902,"./custom-folder.tsx":63526,"./drop-bms.tsx":91624,"./error.tsx":77814,"./font.js":53588,"./online-authentication.tsx":5535,"./options.tsx":55343,"./quickpick.tsx":14723,"./ranking-table.tsx":17147,"./result.js":32550,"./skin.js":54828}
function a(e){var t=o(e)
return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=22525},70091:function(e,t,n){"use strict"
var r=n(89206),a=n.n(r),o=n(98791),l=n.n(o)()(a())
l.push([e.id,".ranking-table-playground .Ranking {\n  background: #ddd;\n  margin: 10px;\n  display: inline-block;\n  width: 512px;\n  height: 256px;\n}","",{version:3,sources:["webpack://./devtools/playgrounds/ranking-table-playground.scss"],names:[],mappings:"AACE;EACE,gBAAA;EACA,YAAA;EACA,qBAAA;EACA,YAAA;EACA,aAAA;AAAJ",sourcesContent:[".ranking-table-playground {\n  .Ranking {\n    background: #ddd;\n    margin: 10px;\n    display: inline-block;\n    width: 512px;\n    height: 256px;\n  }\n}\n"],sourceRoot:""}]),t.Z=l},62492:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return c}})
var r=n(93981),a=n(47258),o=n(10488)
const l=function(e){const t={}
for(const n of e.keys()){t[n.match(/\w[^.]+/)[0]]=e(n)}return t}(n(22525))
class s extends r.Component{static main(){o.J.render(r.createElement(s,null))}render(){const e={color:"#abc"}
return r.createElement("div",null,r.createElement("h1",null,"Bemuse Playground"),r.createElement("p",null,"Please select a playground"),r.createElement("ul",null,Object.keys(l).map((t=>r.createElement("li",{key:t},r.createElement("a",{style:e,href:"?mode=playground&playground="+t},t))))))}}function c(){(l[a.Z.playground]||s).main()}},43902:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return l}})
var r=n(97311),a=n(93981),o=n(10488)
function l(){o.J.render(a.createElement(a.Fragment,null,a.createElement(r.q,{fill:"white",fraction:0}),a.createElement(r.q,{fill:"white",fraction:.25}),a.createElement(r.q,{fill:"white",fraction:.5}),a.createElement(r.q,{fill:"white",fraction:.67}),a.createElement(r.q,{fill:"white",fraction:.75}),a.createElement(r.q,{fill:"white",fraction:.8}),a.createElement(r.q,{fill:"white",fraction:1})))}},63526:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return d}})
var r=n(93981),a=n(62270),o=n.n(a),l=n(10488),s=n(54893),c=n(8641)
const i=new s.QueryClient,u=()=>{const e=(0,c.k$)(),{isLoading:t,error:n,data:a}=(0,s.useQuery)("customFolder",(async()=>await(0,c.x9)(e))),[l,u]=r.useState("")
if(t)return r.createElement("div",null,"Loading...")
if(n)return r.createElement("div",null,"An error has occurred: ",`${n}`)
const d=(a&&a.songs||[]).length||0,m=e=>e?{color:"#ff8"}:{}
return r.createElement("div",null,a?r.createElement("div",null,r.createElement("p",null,"✅ A folder has been selected"),r.createElement("hr",null),r.createElement("p",{style:m(0===d)},"Click the Scan button to scan for new songs 👉"," ",r.createElement("button",{onClick:async()=>{try{await(0,c.xm)(e,{log:console.log,setStatus:o().throttle((e=>u(e)),100),updateState:e=>{i.setQueryData("customFolder",e)}})}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{i.invalidateQueries("customFolder")}}},"🕵️ Scan")),r.createElement("p",null,r.createElement("strong",null,"Scan status:"),r.createElement("br",null),r.createElement("textarea",{value:l,readOnly:!0,style:{boxSizing:"border-box",border:"none",width:"100%",background:"#333",color:"#8e8",font:"inherit"},rows:3})),r.createElement("p",null,r.createElement("strong",null,"Number of songs in the database:")," ",d),r.createElement("p",{style:m(d>0)},"Once the songs are in the database, you can"," ",r.createElement("a",{href:".",style:{color:"#abc"}},"play them in Bemuse!")),r.createElement("hr",null),r.createElement("p",null,"Click the Clear button to remove the folder selection 👉"," ",r.createElement("button",{onClick:async()=>{try{await(0,c.hX)(e)}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{i.invalidateQueries("customFolder")}}},"❌ Clear"))):r.createElement("div",null,r.createElement("p",null,"No folder selected."),r.createElement("p",{style:m(!0)},"To get started 👉"," ",r.createElement("button",{onClick:async()=>{try{const t=await window.showDirectoryPicker({id:"custom-folder"})
await(0,c.bW)(e,t)}catch(e){console.error(e),alert(`An error has occurred: ${e}`)}finally{i.invalidateQueries("customFolder")}}},"Set custom songs folder")),r.createElement("p",null,"The custom songs folder can contain any number of songs, but each song must be in a separate folder.")))}
function d(){l.J.render(r.createElement(s.QueryClientProvider,{client:i},r.createElement("div",{style:{margin:"0 auto",maxWidth:"32em",padding:"0 1em"}},r.createElement("h1",null,"Bemuse custom songs folder console"),r.createElement("p",null,"This is a console for testing an upcoming feature: ✨",r.createElement("a",{style:{color:"#abc"},href:"https://github.com/bemusic/bemuse/discussions/696",target:"_blank",rel:"noreferrer"},r.createElement("strong",null,"custom songs folder")),"✨. You can set a folder to scan for custom songs, and it will be available in Bemuse game, no need to drag individual songs anymore! A more polished UI may be added in later, I hope."),r.createElement("p",null,r.createElement("a",{style:{color:"#abc"},href:"https://github.com/bemusic/bemuse/discussions/696",target:"_blank",rel:"noreferrer"},"Check out the announcement post for troubleshooting and known issues.")),r.createElement("hr",null),r.createElement(u,null))))}},91624:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return s}})
var r=n(21946),a=n(93981),o=n(10488)
const l=()=>a.createElement("div",null,a.createElement(r.Z,null))
function s(){o.J.render(a.createElement(l,null))}},77814:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return s}})
var r=n(7984),a=n(93981),o=n(10488)
const l=()=>a.createElement("div",null,a.createElement(r.Z,{error:new Error("yabai"),preamble:"Test error.",onContinue:()=>{}}))
function s(){o.J.render(a.createElement(l,null))}},53588:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return o}})
var r=n(213),a=n(10488)
function o(){const e=r.autoDetectRenderer(640,480),t=new r.Stage(9143941),n=new r.loaders.Loader,o=["/skins/default/Fonts/BemuseDefault-Meticulous.fnt","/skins/default/Fonts/BemuseDefault-Other.fnt"]
for(const e of o)n.add(e,e)
function l(){e.render(t)}n.load((()=>{const e=new r.BitmapText("*1234567890",{font:"BemuseDefault-Meticulous"})
t.addChild(e)
const n=new r.BitmapText("01",{font:"BemuseDefault-Other"})
n.y=100,t.addChild(n),l(),console.log("Ok")})),a.Z.appendChild(e.view),l()}},5535:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return s}})
var r=n(3573),a=n(93981),o=n(10488)
const l=()=>a.createElement("div",null,a.createElement(r.Z,null))
function s(){o.J.render(a.createElement(l,null))}},55343:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return i}})
var r=n(56536),a=n(49252),o=n(93981),l=n(10488)
const s=()=>{},c=()=>o.createElement(r.Z,{visible:!0,onBackdropClick:s},o.createElement(a.Z,{onClose:s}))
function i(){l.J.render(o.createElement(c,null))}},14723:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return a}})
var r=n(50403)
function a(){(async()=>{const e=await(0,r.Fe)(["one","two","three"].map((e=>({label:e}))),{title:"test"})
await(0,r.wp)("Result","You selected: "+e.label)})()}},17147:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return v}})
var r=n(87672),a=n.n(r),o=n(95541),l=n.n(o),s=n(24324),c=n.n(s),i=n(26419),u=n.n(i),d=n(15669),m=n.n(d),f=n(95076),h=n.n(f),p=n(70091),E={}
E.styleTagTransform=h(),E.setAttributes=u(),E.insert=c().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=m()
a()(p.Z,E),p.Z&&p.Z.locals&&p.Z.locals
var g=n(81411),b=n(93981),y=n(10488)
const w=[{playerName:"One",score:543210,count:[5,4,3,2,1],total:15,rank:1},{playerName:"Two",score:123456,count:[1,2,3,4,5],total:15,rank:2}],k=()=>b.createElement("div",{className:"ranking-table-playground"},b.createElement(g.Z,{state:{data:w,meta:{scoreboard:{status:"completed",value:null},submission:{status:"completed",value:{playerName:"One",score:543210,count:[5,4,3,2,1],total:15,rank:1}}}}}),b.createElement(g.Z,{state:{data:w,meta:{scoreboard:{status:"completed",value:null},submission:{status:"completed",value:null}}}}),b.createElement(g.Z,{state:{data:null,meta:{scoreboard:{status:"completed",value:null},submission:{status:"unauthenticated"}}}}),b.createElement(g.Z,{state:{data:null,meta:{scoreboard:{status:"loading"},submission:{status:"loading"}}}}),b.createElement(g.Z,{state:{data:null,meta:{scoreboard:{status:"error",error:new Error},submission:{status:"error",error:new Error}}}}))
function v(){y.J.render(b.createElement(k,null))}},32550:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return i}})
var r=n(55246),a=n(93981),o=n(66166),l=n(96038),s=n(73596)
const c=new l.i(a.Fragment)
function i(){const e={result:{1:9999,2:999,3:99,4:9,missed:123,score:543210,maxCombo:5555,accuracy:.97,totalCombo:11106,grade:"A",deltas:[0,.01,.03,-.03,-.06]},chart:{info:{title:"Test Song",subtitles:["fl*cknother"],artist:"iaht",subartists:["obj.flicknote"],genre:"Frantic Hardcore",level:17},md5:"12345670123456789abcdef89abemuse"},lr2Timegate:[20,40],onExit:()=>alert("Exit!"),onReplay:()=>alert("Replay!"),playMode:"BM"}
c.display(a.createElement(r.zt,{store:(0,s.Z)()},a.createElement(o.Z,{...e})))}},54828:function(e,t,n){"use strict"
n.r(t),n.d(t,{main:function(){return h}})
var r=n(89503),a=n(65220),o=n.n(a),l=n(35982),s=n.n(l),c=n(68950),i=n(60761),u=n(1419),d=n(57318),m=n(10488),f=n(88339)
async function h(){const e=s().Compiler.compile("\n    #TITLE ทดสอบ Bemuse\n    #ARTIST ฟหกด\n    #00111:01\n    #00112:01\n    #00113:01\n    #00114:01\n    #00115:01\n    #00118:01\n    #00119:01\n    #00116:01\n    #00151:0001010000000000\n    #00152:0001010000000000\n    #00153:0001010000000000\n    #00154:0001010000000000\n    #00155:0001010000000000\n    #00158:0001010000000000\n    #00159:0001010000000000\n    #00156:0001010000000000\n    #00211:010000000000000000010000\n    #00212:000100000000000000010000\n    #00213:010001000000000000010000\n    #00214:010000010000000001000001\n    #00215:010000000100000100000100\n    #00218:010000000010010001000100\n    #00219:010000000001000100000100").chart,t=[(0,f.fromBMSChart)(e)],n=new c.Z(t,{players:[{speed:2}]}),a=await r.load(r.getSkinUrl({displayMode:"touch3d"})),l=new r.Context(a),h=new i.Z({game:n,skin:a,context:l}),p=new d.Z(n),E=new u.Z,g=(new Date).getTime(),b={started:!0,startTime:g,readyFraction:0}
var y
h.start(),h._getData=(y=h._getData,function(){const e=y.apply(h,arguments)
return e.p1_score=((new Date).getTime()-g)%555556,window.LATEST_DATA=e,e})
const w=()=>{const e=((new Date).getTime()-g)/1e3
b.time=e,p.update(e,E,b),h.update(e,p)}
w(),requestAnimationFrame((function e(){w(),requestAnimationFrame(e)})),function(e){const{width:t,height:n}=e
function r(){const r=Math.min(window.innerWidth/t,window.innerHeight/n)
e.style.width=Math.round(t*r)+"px",e.style.height=Math.round(n*r)+"px"}e.style.display="block",e.style.margin="0 auto",m.Z.appendChild(e),r(),o()(window).on("resize",r)}(l.view)}}}])

//# sourceMappingURL=playground-c91333215aac6b2c7b69.js.map