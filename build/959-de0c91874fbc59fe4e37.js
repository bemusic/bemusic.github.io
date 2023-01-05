(this.webpackChunk=this.webpackChunk||[]).push([[959],{64708:function(r,e,t){"use strict"
var n=this&&this.__createBinding||(Object.create?function(r,e,t,n){void 0===n&&(n=t)
var o=Object.getOwnPropertyDescriptor(e,t)
o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,o)}:function(r,e,t,n){void 0===n&&(n=t),r[n]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),i=this&&this.__importStar||function(r){if(r&&r.__esModule)return r
var e={}
if(null!=r)for(var t in r)"default"!==t&&Object.prototype.hasOwnProperty.call(r,t)&&n(e,r,t)
return o(e,r),e},a=this&&this.__exportStar||function(r,e){for(var t in r)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||n(e,r,t)},u=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator]
if(!t)return r
var n,o,i=t.call(r),a=[]
try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a},s=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o])
return r.concat(n||Array.prototype.slice.call(e))},l=this&&this.__values||function(r){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&r[e],n=0
if(t)return t.call(r)
if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},c=this&&this.__importDefault||function(r){return r&&r.__esModule?r:{default:r}}
Object.defineProperty(e,"__esModule",{value:!0}),e.keysForBmson=e.hasScratch=e.beatForPulseForBmson=e._slicesForNotesAndTiming=e.musicalScoreForBmson=e.timingInfoForBmson=e.barLinesForBmson=e.songInfoForBmson=void 0
var f=c(t(62270)),y=i(t(35982)),d=i(t(66559)),v=i(t(72061))
function h(r){if(!r.version)return d.timingInfoForBmson(r)
var e=m(r)
return{initialBPM:r.info.init_bpm,actions:s(s([],u((r.bpm_events||[]).map((function(r){var t=r.y,n=r.bpm
return{type:"bpm",beat:e(t),bpm:n}}))),!1),u((r.stop_events||[]).map((function(r){var t=r.y,n=r.duration
return{type:"stop",beat:e(t),stopBeats:e(Math.floor(n))}}))),!1)}}function p(r){return r.version?r.sound_channels:r.soundChannel}a(t(38856),e),e.songInfoForBmson=function(r){var e=r.info,t={}
return e.title&&(t.title=e.title),e.artist&&(t.artist=e.artist),e.genre&&(t.genre=e.genre),e.level&&(t.level=e.level),t.subtitles=function(){if(!r.version)return["Warning: legacy bmson"]
var t=[]
e.chart_name&&"string"==typeof e.chart_name&&t.push(e.chart_name)
e.subtitle&&"string"==typeof e.subtitle&&t.push.apply(t,s([],u(e.subtitle.split("\n")),!1))
return t}(),e.subartists&&(t.subartists=e.subartists),new y.SongInfo(t)},e.barLinesForBmson=function(r){if(!r.version)return d.barLinesForBmson(r)
var e=m(r),t=r.lines
return(0,f.default)(t).map((function(r){var t=r.y
return e(t)})).sortBy().value()},e.timingInfoForBmson=h,e.musicalScoreForBmson=function(r,e){void 0===e&&(e={})
var t=function(r){var e=h(r),t=e.initialBPM,n=e.actions
return new y.Timing(t,n)}(r),n=function(r,e,t){var n,o,i,a,u=1,s=m(r),c=[],y={},d=p(r)
if(d)try{for(var h=l(d),b=h.next();!b.done;b=h.next()){var g=b.value,F=g.name,w=g.notes,B=f.default.sortBy(w,"y"),S=u++,x=f.default.padStart(""+S,4,"0"),O=v.slicesForNotesAndTiming(w,e,{beatForPulse:s})
y[x]=F
try{for(var P=(i=void 0,l(B)),j=P.next();!j.done;j=P.next()){var M=j.value,A=M.x,k=M.y,T=M.l,N={column:_(A,t),beat:s(k),keysound:x,endBeat:void 0}
T>0&&(N.endBeat=s(k+T))
var I=O.get(k)
I&&(Object.assign(N,I),c.push(N))}}catch(r){i={error:r}}finally{try{j&&!j.done&&(a=P.return)&&a.call(P)}finally{if(i)throw i.error}}}}catch(r){n={error:r}}finally{try{b&&!b.done&&(o=h.return)&&o.call(h)}finally{if(n)throw n.error}}return{notes:c,keysounds:y}}(r,t,e),o=n.notes,i=n.keysounds
return{timing:t,notes:new y.Notes(o),keysounds:new y.Keysounds(i)}}
var b=t(66559)
function m(r){if(!r.version)return d.beatForLoc
var e=r.info&&r.info.resolution||240
return function(r){return r/e}}function _(r,e){switch(r){case 1:return"1"
case 2:return"2"
case 3:return"3"
case 4:return"4"
case 5:return"5"
case 6:return"6"
case 7:return"7"
case 8:return"SC"}if(e.double)switch(r){case 9:return"8"
case 10:return"9"
case 11:return"10"
case 12:return"11"
case 13:return"12"
case 14:return"13"
case 15:return"14"
case 16:return"SC2"}}Object.defineProperty(e,"_slicesForNotesAndTiming",{enumerable:!0,get:function(){return b._slicesForNotesAndTiming}}),e.beatForPulseForBmson=m,e.hasScratch=function(r){var e,t,n,o,i=p(r)
if(i)try{for(var a=l(i),u=a.next();!u.done;u=a.next()){var s=u.value.notes
try{for(var c=(n=void 0,l(s)),f=c.next();!f.done;f=c.next()){var y=f.value.x
if(8===y||18===y)return!0}}catch(r){n={error:r}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}}}catch(r){e={error:r}}finally{try{u&&!u.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return!1},e.keysForBmson=function(r){var e,t,n,o,i=p(r),a=!1,u=!1,s=!1
if(i)try{for(var c=l(i),f=c.next();!f.done;f=c.next()){var y=f.value.notes
try{for(var d=(n=void 0,l(y)),v=d.next();!v.done;v=d.next()){var h=v.value.x
a=!0,h>=11&&h<=20&&(u=!0),6!==h&&7!==h&&16!==h&&17!==h||(s=!0)}}catch(r){n={error:r}}finally{try{v&&!v.done&&(o=d.return)&&o.call(d)}finally{if(n)throw n.error}}}}catch(r){e={error:r}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}return a?u?s?"14K":"10K":s?"7K":"5K":"empty"}},66559:function(r,e,t){"use strict"
var n=this&&this.__createBinding||(Object.create?function(r,e,t,n){void 0===n&&(n=t)
var o=Object.getOwnPropertyDescriptor(e,t)
o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,o)}:function(r,e,t,n){void 0===n&&(n=t),r[n]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),i=this&&this.__importStar||function(r){if(r&&r.__esModule)return r
var e={}
if(null!=r)for(var t in r)"default"!==t&&Object.prototype.hasOwnProperty.call(r,t)&&n(e,r,t)
return o(e,r),e},a=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator]
if(!t)return r
var n,o,i=t.call(r),a=[]
try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a},u=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o])
return r.concat(n||Array.prototype.slice.call(e))},s=this&&this.__importDefault||function(r){return r&&r.__esModule?r:{default:r}}
Object.defineProperty(e,"__esModule",{value:!0}),e._slicesForNotesAndTiming=e.beatForLoc=e.timingInfoForBmson=e.barLinesForBmson=void 0
var l=s(t(62270)),c=i(t(72061))
function f(r){return r/240}e.barLinesForBmson=function(r){var e=r.lines
return(0,l.default)(e).map((function(r){return f(r.y)})).sortBy().value()},e.timingInfoForBmson=function(r){return{initialBPM:r.info.initBPM,actions:u(u([],a((r.bpmNotes||[]).map((function(r){var e=r.y,t=r.v
return{type:"bpm",beat:f(e),bpm:t}}))),!1),a((r.stopNotes||[]).map((function(r){var e=r.y,t=r.v
return{type:"stop",beat:f(e),stopBeats:f(Math.floor(t))}}))),!1)}},e.beatForLoc=f,e._slicesForNotesAndTiming=function(r,e){return c.slicesForNotesAndTiming(r,e,{beatForPulse:f})}},38856:function(r,e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})},72061:function(r,e,t){"use strict"
var n=this&&this.__values||function(r){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&r[e],n=0
if(t)return t.call(r)
if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator]
if(!t)return r
var n,o,i=t.call(r),a=[]
try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a},i=this&&this.__spreadArray||function(r,e,t){if(t||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o])
return r.concat(n||Array.prototype.slice.call(e))},a=this&&this.__importDefault||function(r){return r&&r.__esModule?r:{default:r}}
Object.defineProperty(e,"__esModule",{value:!0}),e.slicesForNotesAndTiming=void 0
var u=a(t(62270))
e.slicesForNotesAndTiming=function(r,e,t){var a,s,l,c,f=t.beatForPulse,y=new Set,d=new Set,v=new Set
try{for(var h=n(r),p=h.next();!p.done;p=h.next()){var b=p.value,m=b.x,_=b.y,g=b.c
y.add(_),m&&d.add(_),g||v.add(_)}}catch(r){a={error:r}}finally{try{p&&!p.done&&(s=h.return)&&s.call(h)}finally{if(a)throw a.error}}var F,w,B=new Map,S=null,x=!0
try{for(var O=n(u.default.sortBy(i([],o(y),!1))),P=O.next();!P.done;P=O.next()){_=P.value
var j=e.beatToSeconds(f(_))
if(null===S||v.has(_)?S=0:S+=j-F,x||d.has(_)||v.has(_)){w&&!v.has(_)&&(w.keysoundEnd=S)
var M={keysoundStart:S,keysoundEnd:void 0}
B.set(_,M),w=M}x=d.has(_),F=j}}catch(r){l={error:r}}finally{try{P&&!P.done&&(c=O.return)&&c.call(O)}finally{if(l)throw l.error}}return B}},10416:function(){}}])

//# sourceMappingURL=959-de0c91874fbc59fe4e37.js.map