(()=>{var e,t,n={45972:(e,t,n)=>{"use strict"
n(44853)
var r=n(45678),o=n.n(r)
n.g.DEBUG=o()
var a=n(23421),i=n(795).Buffer
function s(e){return e.data=i.from(new Uint8Array(e.data)),e}"undefined"==typeof FileReader&&"undefined"!=typeof FileReaderSync&&(n.g.FileReader=function(){const e=new FileReaderSync
return{readAsText(t,n){try{this.result=e.readAsText(t,n),this.onload()}catch(e){this.onerror(e)}}}}),addEventListener("message",function({data:e}){const t=e.files.map(s)
postMessage({type:"started"}),a.getSongInfo(t,{onProgress:function(e,t,n){postMessage({type:"progress",current:e,total:t,file:n})}}).then(function(e){e.warnings.forEach(function(e){n.g.console&&console.warn&&console.warn(e)}),postMessage({type:"result",song:e})}).catch(function(e){console.error("CAUGHT",e)})})},67185:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getBmsBga=void 0,t.getBmsBga=function(e,t){var n=function(t){return e.headers.get("bmp"+t.value)},r=e.objects.all().filter(function(e){return"04"===e.channel&&(!!(t=n(e))&&/\.(?:mpg|mpeg|avi|wmv|ogv|webm|ogm|mov|mp4|mkv|flv|m4v)$/i.test(t))
var t})
if(0!==r.length){var o=r[0],a=t.timing,i=e.measureToBeat(o.measure,o.fraction),s=a.beatToSeconds(i),u=n(o)
if(u)return{file:u,offset:s}}}},24364:function(e,t,n){"use strict"
var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return o(t,e),t}
Object.defineProperty(t,"__esModule",{value:!0}),t.getBmsonBga=void 0
var i=a(n(64708))
t.getBmsonBga=function(e,t){if(e.bga&&e.bga.bga_events&&e.bga.bga_header&&e.bga.bga_header.length&&1===e.bga.bga_events.length){var n={}
e.bga.bga_header.forEach(function(e){n[e.id]=e.name})
var r=e.bga.bga_events[0],o=n[r.id]
if(o){var a=t.timing,s=i.beatForPulseForBmson(e)
return{file:o,offset:a.beatToSeconds(s(r.y))}}}}},36445:function(e,t,n){"use strict"
var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.getBpmInfo=void 0
var o=r(n(89599))
t.getBpmInfo=function(e,t){for(var n=(0,o.default)(e.all()).map("beat").max()||0,r=(0,o.default)(t.getEventBeats()).concat([0,n]).sortBy().uniq().filter(function(e){return e<=n}).value(),a=[],i=0;i+1<r.length;i++){var s=t.beatToSeconds(r[i+1])-t.beatToSeconds(r[i]),u=t.bpmAtBeat(r[i])
a.push([u,s])}var f=function(e){e=o.default.sortBy(e,0)
var t=o.default.sumBy(e,"1")
return function(n){for(var r=0,o=0;o<e.length;o++)if((r+=e[o][1])/t>=n/100)return e[o][0]
return 0}}(a)
return{init:t.bpmAtBeat(0),min:f(2),median:f(50),max:f(98)}}},52786:function(e,t,n){"use strict"
var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.getDuration=void 0
var o=r(n(89599))
t.getDuration=function(e,t){var n=(0,o.default)(e.all()).map("beat").max()||0
return t.beatToSeconds(n)}},23421:function(e,t,n){"use strict"
var r=n(795).Buffer,o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e},o.apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,s)}u((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a
function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o
switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return i.label++,{value:s[1],done:!1}
case 5:i.label++,r=s[1],s=[0]
continue
case 7:s=i.ops.pop(),i.trys.pop()
continue
default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1]
break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s
break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s)
break}o[2]&&i.ops.pop(),i.trys.pop()
continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t._getSongVideoFromCharts=t.getSongInfo=t.getFileInfo=t.extensions=void 0
var u=s(n(89599)),f=s(n(28954)),c=s(n(48274)),l=s(n(45780)),d=n(35982),g=n(64708),h=n(10959),v=n(72103),p=n(67185),b=n(24364),m=n(36445),y=n(52786),_=n(95353),w=n(8326),B={}
function O(e,t,n){return a(this,void 0,void 0,function(){var r,o,a,s,u,f,l,d
return i(this,function(i){switch(i.label){case 0:return n=n||{},(0,c.default)("string"==typeof t.name,"meta.name must be a string"),r=n.extensions||B,o=r[(0,v.extname)(t.name).toLowerCase()]||r[".bms"],a=t.md5||((g=(0,h.createHash)("md5")).update(e),g.digest("hex")),[4,o(e,t)]
case 1:return s=i.sent(),(0,c.default)(s.info,"basis.info must be a BMS.SongInfo"),(0,c.default)(s.notes,"basis.notes must be a BMS.Notes"),(0,c.default)(s.timing,"basis.timing must be a BMS.Timing"),(0,c.default)("boolean"==typeof s.scratch,"basis.scratch must be a boolean"),(0,c.default)("string"==typeof s.keys,"basis.keys must be a string"),u=s.info,f=s.notes,l=s.timing,d=f.all().filter(M).length,[2,{md5:a,info:u,noteCount:d,bpm:(0,m.getBpmInfo)(f,l),duration:(0,y.getDuration)(f,l),scratch:s.scratch,keys:s.keys,bga:s.bga}]}var g})})}t.extensions=B,B[".bms"]=function(e,t){return a(this,void 0,void 0,function(){var n,r,o,a,s,u
return i(this,function(i){switch(i.label){case 0:return n=d.Reader.getReaderOptionsFromFilename(t.name),[4,d.Reader.readAsync(e,n)]
case 1:return r=i.sent(),o=d.Compiler.compile(r).chart,a=d.SongInfo.fromBMSChart(o),s=d.Notes.fromBMSChart(o),u=d.Timing.fromBMSChart(o),[2,{info:a,notes:s,timing:u,scratch:P(o),keys:(0,_.getKeys)(o),bga:(0,p.getBmsBga)(o,{timing:u})}]}})})},B[".bmson"]=function(e){return a(this,void 0,void 0,function(){var t,n,o,a,s,u,f
return i(this,function(i){return t=r.from(e).toString("utf8"),n=JSON.parse(t),o=(0,g.songInfoForBmson)(n),a=(0,g.musicalScoreForBmson)(n),s=a.notes,u=a.timing,f=(0,b.getBmsonBga)(n,{timing:u}),[2,{info:o,notes:s,timing:u,scratch:(0,g.hasScratch)(n),keys:(0,g.keysForBmson)(n),bga:f}]})})}
var S=O
t.getFileInfo=S
var j=function(e,t){return a(this,void 0,void 0,function(){var r,s,c,d,g,v,p,b,m,y
return i(this,function(_){switch(_.label){case 0:return r=[],s=(t=t||{}).cache||void 0,c=t.extra||{},d=t.onProgress||function(){},g=t.onError||function(e,t){n.g.console&&console.error&&console.error("Error while parsing "+t,e)},v=0,p=t.getFileInfo||O,[4,(0,l.default)(e,function(t){return a(this,void 0,void 0,function(){var n,a,u,f,c,l,b,m
return i(this,function(i){switch(i.label){case 0:n=t.name,a=t.data,(u=(0,h.createHash)("md5")).update(a),f=u.digest("hex"),i.label=1
case 1:return i.trys.push([1,6,7,8]),[4,Promise.resolve(s&&s.get(f))]
case 2:return(c=i.sent())?[2,[o(o({},c),{file:n})]]:[3,3]
case 3:return l={name:n,md5:f},[4,Promise.resolve(p(a,l))]
case 4:return b=i.sent(),s&&s.put(f,b),[2,[o(o({},b),{file:n})]]
case 5:return[3,8]
case 6:return m=i.sent(),g(m,n),r.push("Unable to parse "+n+": "+m),[2,[]]
case 7:return d(v+=1,e.length,n),[7]
case 8:return[2]}})})},{concurrency:2})]
case 1:return b=_.sent(),0===(m=u.default.flatten(b)).length&&r.push("No usable charts found!"),y={title:k(m,u.default.property("info.title")),artist:k(m,u.default.property("info.artist")),genre:k(m,u.default.property("info.genre")),bpm:(w=m,B=u.default.property("bpm.median"),S=(0,u.default)(w).map(B).sortBy().value(),S[Math.floor(S.length/2)])},(0,f.default)(y,x(m)),(0,f.default)(y,c),y.charts=m,y.warnings=r,[2,y]}var w,B,S})})}
function x(e){var t={},n=u.default.find(e,"bga")
return n&&(t.video_file=n.bga.file,t.video_offset=n.bga.offset),t}function M(e){return void 0!==e.column}function P(e){for(var t=e.objects.all(),n=0;n<t.length;n++){var r=+t[n].channel
if(r>=50&&r<=69&&(r-=20),16===r||26===r)return!0}return!1}function k(e,t){var n=e.map(t).reduce(w.lcs,"")
return String(n||t(e[0])).trim()}t.getSongInfo=j,t._getSongVideoFromCharts=x},95353:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getKeys=void 0,t.getKeys=function(e){for(var t=e.objects.all(),n={},r=0;r<t.length;r++){var o=+t[r].channel
o>=50&&o<=69&&(o-=40),o<10||(o>29||(n[o]=(n[o]||0)+1))}var a=Object.keys(n).map(function(e){return+e})
return 0===a.length?"empty":a.some(function(e){return e>=20&&e<=29})?n[18]||n[19]||n[28]||n[29]?"14K":"10K":n[18]||n[19]?"7K":"5K"}},8326:(e,t)=>{"use strict"
function n(e,t,n,r){for(var o=Math.min(e.length-t,n.length-r),a=0;a<o&&e[a+t].toLowerCase()===n[a+r].toLowerCase();a++);return e.substr(t,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.lcp=t.lcs=void 0,t.lcs=function(e,t){for(var r="",o=0;o<e.length;o++)for(var a=0;a<t.length;a++){var i=n(e,o,t,a)
i.length>r.length&&(r=i)}return r},t.lcp=n},99191:()=>{},12057:()=>{},21421:()=>{},10159:()=>{},65933:()=>{},10639:()=>{},63620:()=>{}},r={}
function o(e){var t=r[e]
if(void 0!==t)return t.exports
var a=r[e]={id:e,loaded:!1,exports:{}}
return n[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=n,o.x=()=>{var e=o.O(void 0,[602,287,105,156,520,982,959],()=>o(45972))
return e=o.O(e)},e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0
for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],a=e[c][2]
for(var s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every(e=>o.O[e](n[u]))?n.splice(u--,1):(s=!1,a<i&&(i=a))
if(s){e.splice(c--,1)
var f=r()
void 0!==f&&(t=f)}}return t}a=a||0
for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1]
e[c]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce((t,n)=>(o.f[n](e,t),t),[])),o.u=e=>"build/"+e+"-"+{105:"977f385482b332fcd4ca",156:"d5772ecb62deb90a1afe",287:"a163f40e924e8aa9327e",520:"23709ae9cda0587481f5",602:"11601891db4069653913",959:"02ef8fcf8a3bcf3fb368",982:"0f44b28c2234d99870bb"}[e]+".js",o.g=function(){if("object"==typeof globalThis)return globalThis
try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/",(()=>{var e={340:1}
o.f.i=(t,n)=>{e[t]||importScripts(o.p+o.u(t))}
var t=this.webpackChunk=this.webpackChunk||[],n=t.push.bind(t)
t.push=t=>{var r=t[0],a=t[1],i=t[2]
for(var s in a)o.o(a,s)&&(o.m[s]=a[s])
for(i&&i(o);r.length;)e[r.pop()]=1
n(t)}})(),t=o.x,o.x=()=>Promise.all([602,287,105,156,520,982,959].map(o.e,o)).then(t)
o.x()})()

//# sourceMappingURL=340-4791e3a432724a75b702.js.map