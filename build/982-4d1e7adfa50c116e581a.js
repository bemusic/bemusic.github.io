"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[982],{86439:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.BMSChart=void 0
var r=n(69522),o=n(76951),i=n(40780),a=function(){function e(){this.headers=new r.BMSHeaders,this.objects=new o.BMSObjects,this.timeSignatures=new i.TimeSignatures}return e.prototype.measureToBeat=function(e,t){return this.timeSignatures.measureToBeat(e,t)},e}()
t.BMSChart=a},69522:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BMSHeaders=void 0
var n=function(){function e(){this._data={},this._dataAll={}}return e.prototype.each=function(e){for(var t in this._data)e(t,this._data[t])},e.prototype.get=function(e){return this._data[e.toLowerCase()]},e.prototype.getAll=function(e){return this._dataAll[e.toLowerCase()]},e.prototype.set=function(e,t){var n=e.toLowerCase()
this._data[n]=t,(this._dataAll[n]||(this._dataAll[n]=[])).push(t)},e}()
t.BMSHeaders=n},76951:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BMSObjects=void 0
var n=function(){function e(){this._objects=[]}return e.prototype.add=function(e){if("01"!==e.channel)for(var t=0;t<this._objects.length;t++){var n=this._objects[t]
if(n.channel===e.channel&&n.measure===e.measure&&n.fraction===e.fraction)return void(this._objects[t]=e)}this._objects.push(e)},e.prototype.all=function(){return this._objects.slice()},e.prototype.allSorted=function(){var e=this.all()
return e.sort((function(e,t){return e.measure+e.fraction-(t.measure+t.fraction)})),e},e}()
t.BMSObjects=n},23727:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.compile=void 0
var r=n(51723),o=n(86439),i={bms:{random:/^#RANDOM\s+(\d+)$/i,if:/^#IF\s+(\d+)$/i,endif:/^#ENDIF$/i,timeSignature:/^#(\d\d\d)02:(\S*)$/,channel:/^#(?:EXT\s+#)?(\d\d\d)(\S\S):(\S*)$/,header:/^#(\w+)(?:\s+(\S.*))?$/},dtx:{random:/^#RANDOM\s+(\d+)$/i,if:/^#IF\s+(\d+)$/i,endif:/^#ENDIF$/i,timeSignature:/^#(\d\d\d)02:\s*(\S*)$/,channel:/^#(?:EXT\s+#)?(\d\d\d)(\S\S):\s*(\S*)$/,header:/^#(\w+):(?:\s+(\S.*))?$/}}
t.compile=function(e,t){t=t||{}
var n=new o.BMSChart,a=t.rng||function(e){return 1+Math.floor(Math.random()*e)},s=t.format&&i[t.format]||i.bms,u=[],c=[!1],h={headerSentences:0,channelSentences:0,controlSentences:0,skippedSentences:0,malformedSentences:0,chart:n,warnings:[]}
return function(e,t){e.split(/\r\n|\r|\n/).map((function(e){return e.trim()})).forEach((function(e,n){t(e,n+1)}))}(e,(function(e,t){var o=!0
if("#"===e.charAt(0)&&((0,r.match)(e).when(s.random,(function(e){h.controlSentences+=1,u.push(a(+e[1]))})).when(s.if,(function(e){h.controlSentences+=1,c.push(u[u.length-1]!==+e[1])})).when(s.endif,(function(e){h.controlSentences+=1,c.pop()})).else((function(){o=!1})),!o)){var i=c[c.length-1];(0,r.match)(e).when(s.timeSignature,(function(e){h.channelSentences+=1,i||n.timeSignatures.set(+e[1],+e[2])})).when(s.channel,(function(e){h.channelSentences+=1,i||function(e,t,r,o){var i=Math.floor(r.length/2)
if(0===i)return
for(var a=0;a<i;a++){var s=r.substr(2*a,2),u=a/i
"00"!==s&&n.objects.add({measure:e,fraction:u,value:s,channel:t,lineNumber:o})}}(+e[1],e[2],e[3],t)})).when(s.header,(function(e){h.headerSentences+=1,i||n.headers.set(e[1],e[2])})).else((function(){!function(e,t){h.warnings.push({lineNumber:e,message:t})}(t,"Invalid command")}))}})),h}},35982:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return o(t,e),t},a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),t.Compiler=t.Reader=void 0
var s=i(n(13699))
t.Reader=s
var u=i(n(23727))
t.Compiler=u,a(n(58713),t),a(n(86439),t),a(n(69522),t),a(n(76951),t),a(n(78001),t),a(n(40780),t),a(n(37954),t),a(n(66589),t),a(n(15237),t),a(n(15991),t),a(n(14193),t),a(n(84763),t)},15991:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Keysounds=void 0
var r=n(91920),o=n(86439),i=function(){function e(e){this._map=e}return e.prototype.get=function(e){return this._map[e.toLowerCase()]},e.prototype.files=function(){return(0,r.uniq)((0,r.values)(this._map))},e.prototype.all=function(){return this._map},e.fromBMSChart=function(t){o.BMSChart
var n={}
return t.headers.each((function(e,t){var r=e.match(/^wav(\S\S)$/i)
r&&(n[r[1].toLowerCase()]=t)})),new e(n)},e}()
t.Keysounds=i},52091:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.IIDX_DP_LANDMINE=t.IIDX_P1_LANDMINE=t.IIDX_DP=t.IIDX_P1=void 0,t.IIDX_P1={11:"1",12:"2",13:"3",14:"4",15:"5",18:"6",19:"7",16:"SC"},t.IIDX_DP={11:"1",12:"2",13:"3",14:"4",15:"5",18:"6",19:"7",16:"SC",21:"8",22:"9",23:"10",24:"11",25:"12",28:"13",29:"14",26:"SC2"},t.IIDX_P1_LANDMINE={D1:"1",D2:"2",D3:"3",D4:"4",D5:"5",D8:"6",D9:"7",D6:"SC"},t.IIDX_DP_LANDMINE={D1:"1",D2:"2",D3:"3",D4:"4",D5:"5",D8:"6",D9:"7",D6:"SC",E1:"8",E2:"9",E3:"10",E4:"11",E5:"12",E8:"13",E9:"14",E6:"SC2"}},37954:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var o=Object.getOwnPropertyDescriptor(t,n)
o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Notes=void 0
var s=n(71201),u=a(n(48274)),c=i(n(52091)),h=n(86439),f=function(){function e(e){e.forEach(s.Note),this._notes=e}return e.prototype.count=function(){return this._notes.length},e.prototype.all=function(){return this._notes.slice()},e.fromBMSChart=function(t,n){h.BMSChart
var r=(n=n||{}).mapping||e.CHANNEL_MAPPING.IIDX_P1
return new l(t,{mapping:r}).build()},e.CHANNEL_MAPPING=c,e}()
t.Notes=f
var l=function(){function e(e,t){this._chart=e,(0,u.default)(t.mapping,"Expected options.mapping"),(0,u.default)("object"==typeof t.mapping,"options.mapping must be object"),this._mapping=t.mapping,this._notes=[],this._activeLN={},this._lastNote={},this._lnObj=(this._chart.headers.get("lnobj")||"").toLowerCase(),this._channelMapping=this._mapping,this._objects=this._chart.objects.allSorted()}return e.prototype.build=function(){var e=this
return this._objects.forEach((function(t){e._handle(t)})),new f(this._notes)},e.prototype._handle=function(e){if("01"===e.channel)this._handleNormalNote(e)
else switch(e.channel.charAt(0).toUpperCase()){case"1":case"2":case"D":case"E":this._handleNormalNote(e)
break
case"5":case"6":this._handleLongNote(e)}},e.prototype._handleNormalNote=function(e){var t=this._normalizeChannel(e.channel),n=this._getBeat(e)
if(e.value.toLowerCase()===this._lnObj)this._lastNote[t]&&(this._lastNote[t].endBeat=n)
else{var r={beat:n,endBeat:void 0,keysound:e.value,column:this._getColumn(t)}
this._lastNote[t]=r,this._notes.push(r)}},e.prototype._handleLongNote=function(e){var t=this._normalizeChannel(e.channel),n=this._getBeat(e)
if(this._activeLN[t]){var r=this._activeLN[t]
r.endBeat=n,this._notes.push(r),delete this._activeLN[t]}else this._activeLN[t]={beat:n,keysound:e.value,column:this._getColumn(t)}},e.prototype._getBeat=function(e){return this._chart.measureToBeat(e.measure,e.fraction)},e.prototype._getColumn=function(e){return this._channelMapping[e]},e.prototype._normalizeChannel=function(e){return e.replace(/^5/,"1").replace(/^6/,"2")},e}()},71201:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Note=void 0
var o=r(n(8100))
t.Note=(0,o.default)({beat:"number",endBeat:o.default.maybe("number"),column:o.default.maybe("string"),keysound:"string"})},14193:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Positioning=void 0
var r=n(78001),o=n(86439),i=function(){function e(e){this._speedcore=new r.Speedcore(e)}return e.prototype.speed=function(e){return this._speedcore.dx(e)},e.prototype.position=function(e){return this._speedcore.x(e)},e.fromBMSChart=function(t){o.BMSChart
var n=[],r=0
return n.push({t:0,x:r,dx:1,inclusive:!0}),t.objects.allSorted().forEach((function(e){if("SC"===e.channel){var o=t.measureToBeat(e.measure,e.fraction),i=+t.headers.get("scroll"+e.value)
if(isNaN(i))return
var a=n[n.length-1]
r+=(o-a.t)*a.dx,0===o&&1===n.length?n[0].dx=i:n.push({t:o,x:r,dx:i,inclusive:!0})}})),new e(n)},e}()
t.Positioning=i},34362:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getReaderOptionsFromFilename=void 0,t.getReaderOptionsFromFilename=function(e){var t
return e.match(/\.sjis\.\w+$/i)&&(t="Shift-JIS"),e.match(/\.euc_kr\.\w+$/i)&&(t="EUC-KR"),e.match(/\.utf8\.\w+$/i)&&(t="UTF-8"),{forceEncoding:t}}},13699:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getReaderOptionsFromFilename=t.readAsync=t.read=void 0
var r=n(23001)
t.read=function(e){throw new Error("Synchronous read unsupported in browser!")},t.readAsync=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var n=e[0],o=e[1],i=o&&o.forceEncoding||r.detect(n)
return new Promise((function(e,t){var r=new FileReader
r.onload=function(){e(r.result)},r.onerror=function(){t(new Error("cannot read it"))},r.readAsText(new Blob([n]),i)}))}
var o=n(34362)
Object.defineProperty(t,"getReaderOptionsFromFilename",{enumerable:!0,get:function(){return o.getReaderOptionsFromFilename}})},58713:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},15237:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.SongInfo=void 0
var r=n(51723),o=n(91920),i=n(86439),a=function(){function e(e){this.title="NO TITLE",this.artist="NO ARTIST",this.genre="NO GENRE",this.subtitles=[],this.subartists=[],this.difficulty=0,this.level=0,e&&(0,o.assign)(this,e)}return e.fromBMSChart=function(t){i.BMSChart
var n={},o=t.headers.get("title"),a=t.headers.get("artist"),s=t.headers.get("genre"),u=+t.headers.get("difficulty")||0,c=+t.headers.get("playlevel")||0,h=t.headers.getAll("subtitle"),f=t.headers.getAll("subartist")
if("string"==typeof o&&!h){var l=function(e){o=e[1],h=[e[2]]};(0,r.match)(o).when(/^(.*\S)\s*-(.+?)-$/,l).when(/^(.*\S)\s*～(.+?)～$/,l).when(/^(.*\S)\s*\((.+?)\)$/,l).when(/^(.*\S)\s*\[(.+?)\]$/,l).when(/^(.*\S)\s*<(.+?)>$/,l)}return o&&(n.title=o),a&&(n.artist=a),s&&(n.genre=s),h&&(n.subtitles=h),f&&(n.subartists=f),u&&(n.difficulty=u),c&&(n.level=c),new e(n)},e}()
t.SongInfo=a},84763:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Spacing=void 0
var r=n(78001),o=n(86439),i=function(){function e(e){e.length>0&&(this._speedcore=new r.Speedcore(e))}return e.prototype.factor=function(e){return this._speedcore?this._speedcore.x(e):1},e.fromBMSChart=function(t){o.BMSChart
var n=[]
return t.objects.allSorted().forEach((function(e){if("SP"===e.channel){var r=t.measureToBeat(e.measure,e.fraction),o=+t.headers.get("speed"+e.value)
if(isNaN(o))return
if(n.length>0){var i=n[n.length-1]
i.dx=(o-i.x)/(r-i.t)}n.push({t:r,x:o,dx:0,inclusive:!0})}})),n.length>0&&n.unshift({t:0,x:n[0].x,dx:0,inclusive:!0}),new e(n)},e}()
t.Spacing=i},78001:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Speedcore=void 0
var r=n(22371),o=function(){function e(e){e.forEach(r.Segment),this._segments=e}return e.prototype._reached=function(e,t,n){if(e>=this._segments.length)return!1
var r=this._segments[e],o=t(r)
return r.inclusive?n>=o:n>o},e.prototype._segmentAt=function(e,t){for(var n=0;n<this._segments.length;n++)if(!this._reached(n+1,e,t))return this._segments[n]
throw new Error("Unable to find a segment matching a criteria (this should never happen)!")},e.prototype.segmentAtX=function(e){return this._segmentAt(a,e)},e.prototype.segmentAtT=function(e){return this._segmentAt(i,e)},e.prototype.t=function(e){var t=this.segmentAtX(e)
return t.t+(e-t.x)/(t.dx||1)},e.prototype.x=function(e){var t=this.segmentAtT(e)
return t.x+(e-t.t)*t.dx},e.prototype.dx=function(e){return this.segmentAtT(e).dx},e}()
t.Speedcore=o
var i=function(e){return e.t},a=function(e){return e.x}},22371:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Segment=void 0
var o=r(n(8100))
t.Segment=(0,o.default)({t:"number",x:"number",dx:"number"})},40780:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.TimeSignatures=void 0
var n=function(){function e(){this._values={}}return e.prototype.set=function(e,t){this._values[e]=t},e.prototype.get=function(e){return this._values[e]||1},e.prototype.getBeats=function(e){return 4*this.get(e)},e.prototype.measureToBeat=function(e,t){for(var n=0,r=0;r<e;r++)n+=this.getBeats(r)
return n+this.getBeats(e)*t},e}()
t.TimeSignatures=n},66589:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Timing=void 0
var r=n(78001),o=n(91920),i=n(86439),a={bpm:1,stop:2},s=function(){function e(e,t){var n={bpm:e,beat:0,seconds:0},i=[]
i.push({t:0,x:0,dx:n.bpm/60,bpm:n.bpm,inclusive:!0}),(t=t.slice()).sort((function(e,t){return e.beat-t.beat||a[e.type]-a[t.type]})),t.forEach((function(e){var t=e.beat,r=n.seconds+60*(t-n.beat)/n.bpm
switch(e.type){case"bpm":n.bpm=e.bpm,i.push({t:r,x:t,dx:n.bpm/60,bpm:n.bpm,inclusive:!0})
break
case"stop":i.push({t:r,x:t,dx:0,bpm:n.bpm,inclusive:!0}),r+=60*(e.stopBeats||0)/n.bpm,i.push({t:r,x:t,dx:n.bpm/60,bpm:n.bpm,inclusive:!1})
break
default:throw new Error("Unrecognized segment object!")}n.beat=t,n.seconds=r})),this._speedcore=new r.Speedcore(i),this._eventBeats=(0,o.uniq)((0,o.map)(t,(function(e){return e.beat})))}return e.prototype.beatToSeconds=function(e){return this._speedcore.t(e)},e.prototype.secondsToBeat=function(e){return this._speedcore.x(e)},e.prototype.bpmAtBeat=function(e){return this._speedcore.segmentAtX(e).bpm},e.prototype.getEventBeats=function(){return this._eventBeats},e.fromBMSChart=function(t){i.BMSChart
var n=[]
return t.objects.all().forEach((function(e){var r,o=t.measureToBeat(e.measure,e.fraction)
if("03"===e.channel)r=parseInt(e.value,16),n.push({type:"bpm",beat:o,bpm:r})
else if("08"===e.channel)r=+t.headers.get("bpm"+e.value),isNaN(r)||n.push({type:"bpm",beat:o,bpm:r})
else if("09"===e.channel){var i=+t.headers.get("stop"+e.value)/48
n.push({type:"stop",beat:o,stopBeats:i})}})),new e(+t.headers.get("bpm")||60,n)},e}()
t.Timing=s},91920:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.assign=t.values=t.map=t.uniq=void 0
var o=r(n(80959))
t.uniq=o.default
var i=r(n(50220))
t.map=i.default
var a=r(n(48592))
t.values=a.default
var s=r(n(50487))
t.assign=s.default},51723:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.match=void 0,t.match=function(e){var t=!1
return{when:function(n,r){if(t)return this
var o=e.match(n)
return o&&(t=!0,r(o)),this},else:function(e){if(t)return this
e()}}}}}])

//# sourceMappingURL=982-4d1e7adfa50c116e581a.js.map