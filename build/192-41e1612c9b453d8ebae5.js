/*! For license information please see 192-41e1612c9b453d8ebae5.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[192],{37925:(r,e,t)=>{"use strict"
t.d(e,{mA:()=>a})
var n=t(8600)
var o=t(68846),i=t(52505),u=t(14842)
function s(r){return"function"==typeof r?r():r}var c=new WeakMap
function f(r,e){if(!c.has(r)){var t={currentValue:e}
t.observable=r.pipe((0,i.d)({refCount:!0,bufferSize:1}),(0,u.b)(function(r){return t.currentValue=r})),t.subscription=t.observable.subscribe(),c.set(r,t)}return c.get(r)}function a(r,e){var t=(0,n.useMemo)(function(){var t=f(r,s(e))
return t.subscription.closed&&(t.subscription=t.observable.subscribe()),[function(){return t.currentValue},function(r){var e=t.observable.subscribe(r)
return function(){e.unsubscribe()}}]},[r]),i=t[0],u=t[1],c=(0,n.useRef)(!1)
return(0,n.useEffect)(function(){var t=f(r,s(e))
return c.current&&(t.subscription.closed&&(t.subscription=t.observable.subscribe()),c.current=!1),function(){c.current=!t.subscription.closed,t.subscription.unsubscribe()}},[r]),(0,o.useSyncExternalStore)(u,i)}},95770:(r,e,t)=>{"use strict"
t.d(e,{x:()=>f})
var n=t(11534),o=t(76158),i=t(89698),u=(0,t(19512).d)(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),s=t(33052),c=t(45109),f=function(r){function e(){var e=r.call(this)||this
return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return(0,n.ZT)(e,r),e.prototype.lift=function(r){var e=new a(this,this)
return e.operator=r,e},e.prototype._throwIfClosed=function(){if(this.closed)throw new u},e.prototype.next=function(r){var e=this;(0,c.x)(function(){var t,o
if(e._throwIfClosed(),!e.isStopped){e.currentObservers||(e.currentObservers=Array.from(e.observers))
try{for(var i=(0,n.XA)(e.currentObservers),u=i.next();!u.done;u=i.next()){u.value.next(r)}}catch(r){t={error:r}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}}})},e.prototype.error=function(r){var e=this;(0,c.x)(function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=r
for(var t=e.observers;t.length;)t.shift().error(r)}})},e.prototype.complete=function(){var r=this;(0,c.x)(function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0
for(var e=r.observers;e.length;)e.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var r
return(null===(r=this.observers)||void 0===r?void 0:r.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(e){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},e.prototype._innerSubscribe=function(r){var e=this,t=this,n=t.hasError,o=t.isStopped,u=t.observers
return n||o?i.Lc:(this.currentObservers=null,u.push(r),new i.w0(function(){e.currentObservers=null,(0,s.P)(u,r)}))},e.prototype._checkFinalizedStatuses=function(r){var e=this,t=e.hasError,n=e.thrownError,o=e.isStopped
t?r.error(n):o&&r.complete()},e.prototype.asObservable=function(){var r=new o.y
return r.source=this,r},e.create=function(r,e){return new a(r,e)},e}(o.y),a=function(r){function e(e,t){var n=r.call(this)||this
return n.destination=e,n.source=t,n}return(0,n.ZT)(e,r),e.prototype.next=function(r){var e,t
null===(t=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===t||t.call(e,r)},e.prototype.error=function(r){var e,t
null===(t=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===t||t.call(e,r)},e.prototype.complete=function(){var r,e
null===(e=null===(r=this.destination)||void 0===r?void 0:r.complete)||void 0===e||e.call(r)},e.prototype._subscribe=function(r){var e,t
return null!==(t=null===(e=this.source)||void 0===e?void 0:e.subscribe(r))&&void 0!==t?t:i.Lc},e}(f)},52505:(r,e,t)=>{"use strict"
t.d(e,{d:()=>l})
var n=t(11534),o=t(95770),i=t(46925),u=function(r){function e(e,t,n){void 0===e&&(e=1/0),void 0===t&&(t=1/0),void 0===n&&(n=i.l)
var o=r.call(this)||this
return o._bufferSize=e,o._windowTime=t,o._timestampProvider=n,o._buffer=[],o._infiniteTimeWindow=!0,o._infiniteTimeWindow=t===1/0,o._bufferSize=Math.max(1,e),o._windowTime=Math.max(1,t),o}return(0,n.ZT)(e,r),e.prototype.next=function(e){var t=this,n=t.isStopped,o=t._buffer,i=t._infiniteTimeWindow,u=t._timestampProvider,s=t._windowTime
n||(o.push(e),!i&&o.push(u.now()+s)),this._trimBuffer(),r.prototype.next.call(this,e)},e.prototype._subscribe=function(r){this._throwIfClosed(),this._trimBuffer()
for(var e=this._innerSubscribe(r),t=this._infiniteTimeWindow,n=this._buffer.slice(),o=0;o<n.length&&!r.closed;o+=t?1:2)r.next(n[o])
return this._checkFinalizedStatuses(r),e},e.prototype._trimBuffer=function(){var r=this,e=r._bufferSize,t=r._timestampProvider,n=r._buffer,o=r._infiniteTimeWindow,i=(o?1:2)*e
if(e<1/0&&i<n.length&&n.splice(0,n.length-i),!o){for(var u=t.now(),s=0,c=1;c<n.length&&n[c]<=u;c+=2)s=c
s&&n.splice(0,s+1)}},e}(o.x),s=t(892),c=t(60472),f=t(60218)
function a(r,e){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o]
if(!0!==e){if(!1!==e){var i=new c.Hp({next:function(){i.unsubscribe(),r()}})
return(0,s.Xf)(e.apply(void 0,(0,n.ev)([],(0,n.CR)(t)))).subscribe(i)}}else r()}function l(r,e,t){var n,i,l,p,v=!1
return r&&"object"==typeof r?(n=r.bufferSize,p=void 0===n?1/0:n,i=r.windowTime,e=void 0===i?1/0:i,v=void 0!==(l=r.refCount)&&l,t=r.scheduler):p=null!=r?r:1/0,function(r){void 0===r&&(r={})
var e=r.connector,t=void 0===e?function(){return new o.x}:e,n=r.resetOnError,i=void 0===n||n,u=r.resetOnComplete,l=void 0===u||u,p=r.resetOnRefCountZero,v=void 0===p||p
return function(r){var e,n,o,u=0,p=!1,b=!1,d=function(){null==n||n.unsubscribe(),n=void 0},h=function(){d(),e=o=void 0,p=b=!1},y=function(){var r=e
h(),null==r||r.unsubscribe()}
return(0,f.e)(function(r,f){u++,b||p||d()
var w=o=null!=o?o:t()
f.add(function(){0!==--u||b||p||(n=a(y,v))}),w.subscribe(f),!e&&u>0&&(e=new c.Hp({next:function(r){return w.next(r)},error:function(r){b=!0,d(),n=a(h,i,r),w.error(r)},complete:function(){p=!0,d(),n=a(h,l),w.complete()}}),(0,s.Xf)(r).subscribe(e))})(r)}}({connector:function(){return new u(p,e,t)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:v})}},46925:(r,e,t)=>{"use strict"
t.d(e,{l:()=>n})
var n={now:function(){return(n.delegate||Date).now()},delegate:void 0}},50159:(r,e,t)=>{"use strict"
var n=t(8600)
var o="function"==typeof Object.is?Object.is:function(r,e){return r===e&&(0!==r||1/r==1/e)||r!=r&&e!=e},i=n.useState,u=n.useEffect,s=n.useLayoutEffect,c=n.useDebugValue
function f(r){var e=r.getSnapshot
r=r.value
try{var t=e()
return!o(r,t)}catch(r){return!0}}var a="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(r,e){return e()}:function(r,e){var t=e(),n=i({inst:{value:t,getSnapshot:e}}),o=n[0].inst,a=n[1]
return s(function(){o.value=t,o.getSnapshot=e,f(o)&&a({inst:o})},[r,t,e]),u(function(){return f(o)&&a({inst:o}),r(function(){f(o)&&a({inst:o})})},[r]),c(t),t}
e.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:a},68846:(r,e,t)=>{"use strict"
r.exports=t(50159)},59998:(r,e)=>{var t
!function(){"use strict"
var n={}.hasOwnProperty
function o(){for(var r="",e=0;e<arguments.length;e++){var t=arguments[e]
t&&(r=u(r,i(t)))}return r}function i(r){if("string"==typeof r||"number"==typeof r)return r
if("object"!=typeof r)return""
if(Array.isArray(r))return o.apply(null,r)
if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString()
var e=""
for(var t in r)n.call(r,t)&&r[t]&&(e=u(e,t))
return e}function u(r,e){return e?r?r+" "+e:r+e:r}r.exports?(o.default=o,r.exports=o):void 0===(t=function(){return o}.apply(e,[]))||(r.exports=t)}()}}])

//# sourceMappingURL=192-41e1612c9b453d8ebae5.js.map