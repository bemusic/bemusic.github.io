"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[982],{86439:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BMSChart=void 0
var r=n(69522),i=n(76951),o=n(40780),a=function(){function e(){this.headers=new r.BMSHeaders,this.objects=new i.BMSObjects,this.timeSignatures=new o.TimeSignatures}return Object.defineProperty(e.prototype,"base",{get:function(){return this.headers.base},enumerable:!1,configurable:!0}),e.prototype.measureToBeat=function(e,t){return this.timeSignatures.measureToBeat(e,t)},e}()
t.BMSChart=a},69522:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BMSHeaders=void 0
var r=n(69905),i=function(){function e(){this._base=36,this._data={},this._dataAll={}}return Object.defineProperty(e.prototype,"base",{get:function(){return this._base},enumerable:!1,configurable:!0}),e.prototype.setBase=function(e){this._base=e},e.prototype._normalizeName=function(e){var t=e.match(r.ID_INDEXED_COMMAND)
return t?t[1].toLowerCase()+(0,r.normalizeIdSuffix)(t[2],this._base):e.toLowerCase()},e.prototype.each=function(e){for(var t in this._data)e(t,this._data[t])},e.prototype.get=function(e){return this._data[this._normalizeName(e)]},e.prototype.getAll=function(e){return this._dataAll[this._normalizeName(e)]},e.prototype.set=function(e,t){var n=this._normalizeName(e)
this._data[n]=t,(this._dataAll[n]||(this._dataAll[n]=[])).push(t)},e}()
t.BMSHeaders=i},76951:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BMSObjects=void 0
var n=function(){function e(){this._objects=[]}return e.prototype.add=function(e){if("01"!==e.channel)for(var t=0;t<this._objects.length;t++){var n=this._objects[t]
if(n.channel===e.channel&&n.measure===e.measure&&n.fraction===e.fraction)return void(this._objects[t]=e)}this._objects.push(e)},e.prototype.all=function(){return this._objects.slice()},e.prototype.allSorted=function(){var e=this.all()
return e.sort(function(e,t){return e.measure+e.fraction-(t.measure+t.fraction)}),e},e}()
t.BMSObjects=n},23727:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.compile=void 0
var r=n(51723),i=n(86439),o={bms:{random:/^#RANDOM\s+(\d+)$/i,if:/^#IF\s+(\d+)$/i,endif:/^#ENDIF$/i,timeSignature:/^#(\d\d\d)02:(\S*)$/,channel:/^#(?:EXT\s+#)?(\d\d\d)(\S\S):(\S*)$/,header:/^#(\w+)(?:\s+(\S.*))?$/},dtx:{random:/^#RANDOM\s+(\d+)$/i,if:/^#IF\s+(\d+)$/i,endif:/^#ENDIF$/i,timeSignature:/^#(\d\d\d)02:\s*(\S*)$/,channel:/^#(?:EXT\s+#)?(\d\d\d)(\S\S):\s*(\S*)$/,header:/^#(\w+):(?:\s+(\S.*))?$/}}
t.compile=function(e,t){t=t||{}
var n=new i.BMSChart,a=e.match(/^\s*#BASE\s+(\d+)/im)
a&&n.headers.setBase(+a[1])
var s=t.rng||function(e){return 1+Math.floor(Math.random()*e)},u=t.format&&o[t.format]||o.bms,c=[],h=[!1],l={headerSentences:0,channelSentences:0,controlSentences:0,skippedSentences:0,malformedSentences:0,chart:n,warnings:[]}
return function(e,t){e.split(/\r\n|\r|\n/).map(function(e){return e.trim()}).forEach(function(e,n){t(e,n+1)})}(e,function(e,t){var i=!0
if("#"===e.charAt(0)&&((0,r.match)(e).when(u.random,function(e){l.controlSentences+=1,c.push(s(+e[1]))}).when(u.if,function(e){l.controlSentences+=1,h.push(c[c.length-1]!==+e[1])}).when(u.endif,function(e){l.controlSentences+=1,h.pop()}).else(function(){i=!1}),!i)){var o=h[h.length-1];(0,r.match)(e).when(u.timeSignature,function(e){l.channelSentences+=1,o||n.timeSignatures.set(+e[1],+e[2])}).when(u.channel,function(e){l.channelSentences+=1,o||function(e,t,r,i){var o=Math.floor(r.length/2)
if(0===o)return
for(var a=0;a<o;a++){var s=r.substr(2*a,2),u=a/o
"00"!==s&&n.objects.add({measure:e,fraction:u,value:s,channel:t,lineNumber:i})}}(+e[1],e[2],e[3],t)}).when(u.header,function(e){l.headerSentences+=1,o||n.headers.set(e[1],e[2])}).else(function(){!function(e,t){l.warnings.push({lineNumber:e,message:t})}(t,"Invalid command")})}}),l}},35982:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return i(t,e),t},a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),t.Compiler=t.Reader=void 0
var s=o(n(13699))
t.Reader=s
var u=o(n(23727))
t.Compiler=u,a(n(58713),t),a(n(86439),t),a(n(69522),t),a(n(76951),t),a(n(78001),t),a(n(40780),t),a(n(37954),t),a(n(66589),t),a(n(15237),t),a(n(15991),t),a(n(14193),t),a(n(84763),t)},15991:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Keysounds=void 0
var r=n(91920),i=n(86439),o=n(69905),a=function(){function e(e,t){void 0===t&&(t=36),this._map=e,this._base=t}return e.prototype.get=function(e){return this._map[(0,o.normalizeIdSuffix)(e,this._base)]},e.prototype.files=function(){return(0,r.uniq)((0,r.values)(this._map))},e.prototype.all=function(){return this._map},e.fromBMSChart=function(t){i.BMSChart
var n=t.base,r={}
return t.headers.each(function(e,t){var i=e.match(/^wav(\S\S)$/i)
i&&(r[(0,o.normalizeIdSuffix)(i[1],n)]=t)}),new e(r,n)},e}()
t.Keysounds=a},52091:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IIDX_DP_LANDMINE=t.IIDX_P1_LANDMINE=t.IIDX_DP=t.IIDX_P1=void 0,t.IIDX_P1={11:"1",12:"2",13:"3",14:"4",15:"5",18:"6",19:"7",16:"SC"},t.IIDX_DP={11:"1",12:"2",13:"3",14:"4",15:"5",18:"6",19:"7",16:"SC",21:"8",22:"9",23:"10",24:"11",25:"12",28:"13",29:"14",26:"SC2"},t.IIDX_P1_LANDMINE={D1:"1",D2:"2",D3:"3",D4:"4",D5:"5",D8:"6",D9:"7",D6:"SC"},t.IIDX_DP_LANDMINE={D1:"1",D2:"2",D3:"3",D4:"4",D5:"5",D8:"6",D9:"7",D6:"SC",E1:"8",E2:"9",E3:"10",E4:"11",E5:"12",E8:"13",E9:"14",E6:"SC2"}},37954:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Notes=void 0
var s=n(71201),u=a(n(48274)),c=o(n(52091)),h=n(86439),l=n(69905),f=function(){function e(e){e.forEach(s.Note),this._notes=e}return e.prototype.count=function(){return this._notes.length},e.prototype.all=function(){return this._notes.slice()},e.fromBMSChart=function(t,n){h.BMSChart
var r=(n=n||{}).mapping||e.CHANNEL_MAPPING.IIDX_P1
return new d(t,{mapping:r}).build()},e.CHANNEL_MAPPING=c,e}()
t.Notes=f
var d=function(){function e(e,t){this._chart=e,(0,u.default)(t.mapping,"Expected options.mapping"),(0,u.default)("object"==typeof t.mapping,"options.mapping must be object"),this._mapping=t.mapping,this._notes=[],this._activeLN={},this._lastNote={},this._base=this._chart.base,this._lnObj=(0,l.normalizeIdSuffix)(this._chart.headers.get("lnobj")||"",this._base),this._channelMapping=this._mapping,this._objects=this._chart.objects.allSorted()}return e.prototype.build=function(){var e=this
return this._objects.forEach(function(t){e._handle(t)}),new f(this._notes)},e.prototype._handle=function(e){if("01"===e.channel)this._handleNormalNote(e)
else switch(e.channel.charAt(0).toUpperCase()){case"1":case"2":case"D":case"E":this._handleNormalNote(e)
break
case"5":case"6":this._handleLongNote(e)}},e.prototype._handleNormalNote=function(e){var t=this._normalizeChannel(e.channel),n=this._getBeat(e)
if((0,l.normalizeIdSuffix)(e.value,this._base)===this._lnObj)this._lastNote[t]&&(this._lastNote[t].endBeat=n)
else{var r={beat:n,endBeat:void 0,keysound:(0,l.normalizeIdSuffix)(e.value,this._base),column:this._getColumn(t)}
this._lastNote[t]=r,this._notes.push(r)}},e.prototype._handleLongNote=function(e){var t=this._normalizeChannel(e.channel),n=this._getBeat(e)
if(this._activeLN[t]){var r=this._activeLN[t]
r.endBeat=n,this._notes.push(r),delete this._activeLN[t]}else this._activeLN[t]={beat:n,keysound:(0,l.normalizeIdSuffix)(e.value,this._base),column:this._getColumn(t)}},e.prototype._getBeat=function(e){return this._chart.measureToBeat(e.measure,e.fraction)},e.prototype._getColumn=function(e){return this._channelMapping[e]},e.prototype._normalizeChannel=function(e){return e.replace(/^5/,"1").replace(/^6/,"2")},e}()},71201:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Note=void 0
var i=r(n(8100))
t.Note=(0,i.default)({beat:"number",endBeat:i.default.maybe("number"),column:i.default.maybe("string"),keysound:"string"})},14193:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Positioning=void 0
var r=n(78001),i=n(86439),o=function(){function e(e){this._speedcore=new r.Speedcore(e)}return e.prototype.speed=function(e){return this._speedcore.dx(e)},e.prototype.position=function(e){return this._speedcore.x(e)},e.fromBMSChart=function(t){i.BMSChart
var n=[],r=0
return n.push({t:0,x:r,dx:1,inclusive:!0}),t.objects.allSorted().forEach(function(e){if("SC"===e.channel){var i=t.measureToBeat(e.measure,e.fraction),o=+t.headers.get("scroll"+e.value)
if(isNaN(o))return
var a=n[n.length-1]
r+=(i-a.t)*a.dx,0===i&&1===n.length?n[0].dx=o:n.push({t:i,x:r,dx:o,inclusive:!0})}}),new e(n)},e}()
t.Positioning=o},34362:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getReaderOptionsFromFilename=void 0,t.getReaderOptionsFromFilename=function(e){var t
return e.match(/\.sjis\.\w+$/i)&&(t="Shift-JIS"),e.match(/\.euc_kr\.\w+$/i)&&(t="EUC-KR"),e.match(/\.utf8\.\w+$/i)&&(t="UTF-8"),{forceEncoding:t}}},13699:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getReaderOptionsFromFilename=t.readAsync=t.read=void 0
var r=n(23001)
t.read=function(e){throw new Error("Synchronous read unsupported in browser!")},t.readAsync=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var n=e[0],i=e[1],o=i&&i.forceEncoding||r.detect(n)
return new Promise(function(e,t){var r=new FileReader
r.onload=function(){e(r.result)},r.onerror=function(){t(new Error("cannot read it"))},r.readAsText(new Blob([n]),o)})}
var i=n(34362)
Object.defineProperty(t,"getReaderOptionsFromFilename",{enumerable:!0,get:function(){return i.getReaderOptionsFromFilename}})},58713:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},15237:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SongInfo=void 0
var r=n(51723),i=n(91920),o=n(86439),a=function(){function e(e){this.title="NO TITLE",this.artist="NO ARTIST",this.genre="NO GENRE",this.subtitles=[],this.subartists=[],this.difficulty=0,this.level=0,e&&(0,i.assign)(this,e)}return e.fromBMSChart=function(t){o.BMSChart
var n={},i=t.headers.get("title"),a=t.headers.get("artist"),s=t.headers.get("genre"),u=+t.headers.get("difficulty")||0,c=+t.headers.get("playlevel")||0,h=t.headers.getAll("subtitle"),l=t.headers.getAll("subartist")
if("string"==typeof i&&!h){var f=function(e){i=e[1],h=[e[2]]};(0,r.match)(i).when(/^(.*\S)\s*-(.+?)-$/,f).when(/^(.*\S)\s*～(.+?)～$/,f).when(/^(.*\S)\s*\((.+?)\)$/,f).when(/^(.*\S)\s*\[(.+?)\]$/,f).when(/^(.*\S)\s*<(.+?)>$/,f)}return i&&(n.title=i),a&&(n.artist=a),s&&(n.genre=s),h&&(n.subtitles=h),l&&(n.subartists=l),u&&(n.difficulty=u),c&&(n.level=c),new e(n)},e}()
t.SongInfo=a},84763:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Spacing=void 0
var r=n(78001),i=n(86439),o=function(){function e(e){e.length>0&&(this._speedcore=new r.Speedcore(e))}return e.prototype.factor=function(e){return this._speedcore?this._speedcore.x(e):1},e.fromBMSChart=function(t){i.BMSChart
var n=[]
return t.objects.allSorted().forEach(function(e){if("SP"===e.channel){var r=t.measureToBeat(e.measure,e.fraction),i=+t.headers.get("speed"+e.value)
if(isNaN(i))return
if(n.length>0){var o=n[n.length-1]
o.dx=(i-o.x)/(r-o.t)}n.push({t:r,x:i,dx:0,inclusive:!0})}}),n.length>0&&n.unshift({t:0,x:n[0].x,dx:0,inclusive:!0}),new e(n)},e}()
t.Spacing=o},78001:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Speedcore=void 0
var r=n(22371),i=function(){function e(e){e.forEach(r.Segment),this._segments=e}return e.prototype._reached=function(e,t,n){if(e>=this._segments.length)return!1
var r=this._segments[e],i=t(r)
return r.inclusive?n>=i:n>i},e.prototype._segmentAt=function(e,t){for(var n=0;n<this._segments.length;n++)if(!this._reached(n+1,e,t))return this._segments[n]
throw new Error("Unable to find a segment matching a criteria (this should never happen)!")},e.prototype.segmentAtX=function(e){return this._segmentAt(a,e)},e.prototype.segmentAtT=function(e){return this._segmentAt(o,e)},e.prototype.t=function(e){var t=this.segmentAtX(e)
return t.t+(e-t.x)/(t.dx||1)},e.prototype.x=function(e){var t=this.segmentAtT(e)
return t.x+(e-t.t)*t.dx},e.prototype.dx=function(e){return this.segmentAtT(e).dx},e}()
t.Speedcore=i
var o=function(e){return e.t},a=function(e){return e.x}},22371:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Segment=void 0
var i=r(n(8100))
t.Segment=(0,i.default)({t:"number",x:"number",dx:"number"})},40780:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TimeSignatures=void 0
var n=function(){function e(){this._values={}}return e.prototype.set=function(e,t){this._values[e]=t},e.prototype.get=function(e){return this._values[e]||1},e.prototype.getBeats=function(e){return 4*this.get(e)},e.prototype.measureToBeat=function(e,t){for(var n=0,r=0;r<e;r++)n+=this.getBeats(r)
return n+this.getBeats(e)*t},e}()
t.TimeSignatures=n},66589:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Timing=void 0
var r=n(78001),i=n(91920),o=n(86439),a={bpm:1,stop:2},s=function(){function e(e,t){var n={bpm:e,beat:0,seconds:0},o=[]
o.push({t:0,x:0,dx:n.bpm/60,bpm:n.bpm,inclusive:!0}),(t=t.slice()).sort(function(e,t){return e.beat-t.beat||a[e.type]-a[t.type]}),t.forEach(function(e){var t=e.beat,r=n.seconds+60*(t-n.beat)/n.bpm
switch(e.type){case"bpm":n.bpm=e.bpm,o.push({t:r,x:t,dx:n.bpm/60,bpm:n.bpm,inclusive:!0})
break
case"stop":o.push({t:r,x:t,dx:0,bpm:n.bpm,inclusive:!0}),r+=60*(e.stopBeats||0)/n.bpm,o.push({t:r,x:t,dx:n.bpm/60,bpm:n.bpm,inclusive:!1})
break
default:throw new Error("Unrecognized segment object!")}n.beat=t,n.seconds=r}),this._speedcore=new r.Speedcore(o),this._eventBeats=(0,i.uniq)((0,i.map)(t,function(e){return e.beat}))}return e.prototype.beatToSeconds=function(e){return this._speedcore.t(e)},e.prototype.secondsToBeat=function(e){return this._speedcore.x(e)},e.prototype.bpmAtBeat=function(e){return this._speedcore.segmentAtX(e).bpm},e.prototype.getEventBeats=function(){return this._eventBeats},e.fromBMSChart=function(t){o.BMSChart
var n=[]
return t.objects.all().forEach(function(e){var r,i=t.measureToBeat(e.measure,e.fraction)
if("03"===e.channel)r=parseInt(e.value,16),n.push({type:"bpm",beat:i,bpm:r})
else if("08"===e.channel)r=+t.headers.get("bpm"+e.value),isNaN(r)||n.push({type:"bpm",beat:i,bpm:r})
else if("09"===e.channel){var o=+t.headers.get("stop"+e.value)/48
n.push({type:"stop",beat:i,stopBeats:o})}}),new e(+t.headers.get("bpm")||60,n)},e}()
t.Timing=s},69905:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeIdSuffix=t.ID_INDEXED_COMMAND=void 0,t.ID_INDEXED_COMMAND=/^(wav|bmp|bpm|stop)(\S\S)$/i,t.normalizeIdSuffix=function(e,t){return 62===t?e:e.toLowerCase()}},91920:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.values=t.map=t.uniq=void 0
var i=r(n(80959))
t.uniq=i.default
var o=r(n(50220))
t.map=o.default
var a=r(n(48592))
t.values=a.default
var s=r(n(50487))
t.assign=s.default},51723:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.match=void 0,t.match=function(e){var t=!1
return{when:function(n,r){if(t)return this
var i=e.match(n)
return i&&(t=!0,r(i)),this},else:function(e){if(t)return this
e()}}}}}])

//# sourceMappingURL=982-0f44b28c2234d99870bb.js.map