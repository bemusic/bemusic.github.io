/*! For license information please see 289-f61bc37649b970338534.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[289],{38500:function(t,n,r){var e
t=r.nmd(t),function(){var i=Array.prototype.slice,u={toString:function(){return"Bacon"},version:"0.7.95"},o=(void 0!==r.g&&null!==r.g?r.g:this).Error,s=function(){},c=function(t,n){return t},a=function(t,n){if(!n)throw new o(t)},f=function(t){if((null!=t?t._isObservable:void 0)&&!(null!=t?t._isProperty:void 0))throw new o("Observable is not a Property : "+t)},h=function(t){return a("not a function : "+t,m.isFunction(t))},l=Array.isArray||function(t){return t instanceof Array},p=function(t){return t&&t._isObservable},v=function(t){return a("no arguments supported",0===t.length)},b=function(t){for(var n=arguments.length,r=1;1<n?r<n:r>n;1<n?r++:r--)for(var e in arguments[r])t[e]=arguments[r][e]
return t},d=function(t,n){var r={}.hasOwnProperty,e=function(){}
for(var i in e.prototype=n.prototype,t.prototype=new e,n)r.call(n,i)&&(t[i]=n[i])
return t},y=function(t){return"undefined"!=typeof Symbol&&Symbol[t]?Symbol[t]:"undefined"!=typeof Symbol&&"function"==typeof Symbol.for?Symbol[t]=Symbol.for(t):"@@"+t},m={indexOf:Array.prototype.indexOf?function(t,n){return t.indexOf(n)}:function(t,n){for(var r=0;r<t.length;r++)if(n===t[r])return r
return-1},indexWhere:function(t,n){for(var r=0;r<t.length;r++)if(n(t[r]))return r
return-1},head:function(t){return t[0]},always:function(t){return function(){return t}},negate:function(t){return function(n){return!t(n)}},empty:function(t){return 0===t.length},tail:function(t){return t.slice(1,t.length)},filter:function(t,n){for(var r,e=[],i=0;i<n.length;i++)t(r=n[i])&&e.push(r)
return e},map:function(t,n){return function(){for(var r,e=[],i=0;i<n.length;i++)r=n[i],e.push(t(r))
return e}()},each:function(t,n){for(var r in t){if(Object.prototype.hasOwnProperty.call(t,r))n(r,t[r])}},toArray:function(t){return l(t)?t:[t]},contains:function(t,n){return-1!==m.indexOf(t,n)},id:function(t){return t},last:function(t){return t[t.length-1]},all:function(t){for(var n=arguments.length<=1||void 0===arguments[1]?m.id:arguments[1],r=0;r<t.length;r++)if(!n(t[r]))return!1
return!0},any:function(t){for(var n=arguments.length<=1||void 0===arguments[1]?m.id:arguments[1],r=0;r<t.length;r++)if(n(t[r]))return!0
return!1},without:function(t,n){return m.filter((function(n){return n!==t}),n)},remove:function(t,n){var r=m.indexOf(n,t)
if(r>=0)return n.splice(r,1)},fold:function(t,n,r){for(var e=0;e<t.length;e++)n=r(n,t[e])
return n},flatMap:function(t,n){return m.fold(n,[],(function(n,r){return n.concat(t(r))}))},cached:function(t){var n=N
return function(){return(null!=n?n._isNone:void 0)&&(n=t(),t=void 0),n}},bind:function(t,n){return function(){return t.apply(n,arguments)}},isFunction:function(t){return"function"==typeof t},toString:function(t){var n,r,e={}.hasOwnProperty
try{return g++,null==t?"undefined":m.isFunction(t)?"function":l(t)?g>5?"[..]":"["+m.map(m.toString,t).toString()+"]":null!=(null!=t?t.toString:void 0)&&t.toString!==Object.prototype.toString?t.toString():"object"==typeof t?g>5?"{..}":"{"+function(){var i=[]
for(n in t)e.call(t,n)&&(r=function(){var r
try{return t[n]}catch(r){return r}}(),i.push(m.toString(n)+":"+m.toString(r)))
return i}()+"}":t}finally{g--}}},g=0
u._=m
var w=u.UpdateBarrier=function(){var t,n=[],r={},e=[],i=0,o={}
function s(t){t<=i||(e[t-1]||(e[t-1]=[[],0]),i=t)}var c=function(n,r){if(!t&&!e.length)return r()
s(1)
for(var u=0;u<i-1&&!a(n,e[u][0]);)u++
e[u][0].push([n,r]),t||f()}
function a(t,n){for(var r=0;r<n.length;r++)if(n[r][0].id==t.id)return!0
return!1}function f(){var t=i
if(t)for(;i>=t;){var n=e[i-1]
if(!n)throw new R("Unexpected stack top: "+n)
var r=n[0],u=n[1]
if(!(u<r.length)){n[0]=[],n[1]=0
break}var o=r[u],c=(o[0],o[1])
n[1]++,s(i+1)
var a=!1
try{for(c(),a=!0;i>t&&0==e[i-1][0].length;)i--}finally{a||(e=[],i=0)}}}var h=function(t,e){var i=n[t],u=i.id,o=r[u]
n.splice(t,1),delete r[u],e&&n.length>0&&l(i)
for(var s=0;s<o.length;s++)(0,o[s])()},l=function(t){if(!o[t.id]){for(var e,i=t.internalDeps(),u=0;u<i.length;u++)if(e=i[u],l(e),r[e.id]){var s=m.indexOf(n,e)
h(s,!1)}o[t.id]=!0}}
return{whenDoneWith:function(e,i){if(t){var u=r[e.id]
return null==u?(u=r[e.id]=[i],n.push(e)):u.push(i)}return i()},hasWaiters:function(){return n.length>0},inTransaction:function(r,e,i,u){if(t)return i.apply(e,u)
t=r
try{var s=i.apply(e,u)
!function(){for(;n.length>0;)h(0,!0)
o={}}()}finally{t=void 0,f()}return s},currentEventId:function(){return t?t.id:void 0},wrappedSubscribe:function(t,n){var r=!1,e=!1,i=function(){return e=!0},o=function(){return r=!0,i()}
return i=t.dispatcher.subscribe((function(e){return c(t,(function(){if(!r&&n(e)===u.noMore)return o()}))})),e&&i(),o},afterTransaction:c}}()
function E(t,n){var r=!(arguments.length<=2||void 0===arguments[2])&&arguments[2]
this.obs=t,this.sync=n,this.lazy=r,this.queue=[]}function S(){E.apply(this,arguments)}function D(t){E.call(this,t,!0)}function A(t,n,r){this.context=t,this.method=n,this.args=r}b(E.prototype,{_isSource:!0,subscribe:function(t){return this.obs.dispatcher.subscribe(t)},toString:function(){return this.obs.toString()},markEnded:function(){return this.ended=!0,!0},consume:function(){return this.lazy?{value:m.always(this.queue[0])}:this.queue[0]},push:function(t){return this.queue=[t],[t]},mayHave:function(){return!0},hasAtLeast:function(){return this.queue.length},flatten:!0}),d(S,E),b(S.prototype,{consume:function(){return this.queue.shift()},push:function(t){return this.queue.push(t)},mayHave:function(t){return!this.ended||this.queue.length>=t},hasAtLeast:function(t){return this.queue.length>=t},flatten:!1}),d(D,E),b(D.prototype,{consume:function(){var t=this.queue
return this.queue=[],{value:function(){return t}}},push:function(t){return this.queue.push(t.value())},hasAtLeast:function(){return!0}}),E.isTrigger=function(t){return(null!=t?t._isSource:void 0)?t.sync:null!=t?t._isEventStream:void 0},E.fromObservable=function(t){return(null!=t?t._isSource:void 0)?t:(null!=t?t._isProperty:void 0)?new E(t,!1):new S(t,!0)},b(A.prototype,{_isDesc:!0,deps:function(){return this.cached||(this.cached=k([this.context].concat(this.args))),this.cached},toString:function(){return m.toString(this.context)+"."+m.toString(this.method)+"("+m.map(m.toString,this.args)+")"}})
var O=function(t,n){var r=t||n
if(r&&r._isDesc)return t||n
for(var e=arguments.length,i=Array(e>2?e-2:0),u=2;u<e;u++)i[u-2]=arguments[u]
return new A(t,n,i)},M=function(t,n){return n.desc=t,n},k=function(t){return l(t)?m.flatMap(k,t):p(t)?[t]:(null!=t?t._isSource:void 0)?[t.obs]:[]}
u.Desc=A,u.Desc.empty=new u.Desc("","",[])
var x=function(t){return function(n){for(var r=arguments.length,e=Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i]
if("object"==typeof n&&e.length){var u=n,o=e[0]
n=function(){return u[o].apply(u,arguments)},e=e.slice(1)}return t.apply(void 0,[n].concat(e))}},P=function(t){return t=Array.prototype.slice.call(t),W.apply(void 0,t)},I=function(t,n){return function(){for(var r=arguments.length,e=Array(r),i=0;i<r;i++)e[i]=arguments[i]
return t.apply(void 0,n.concat(e))}},_=function(t,n){var r=t.slice(1).split("."),e=m.map(function(t){return function(n){return function(r){if(null!=r){var e=r[n]
return m.isFunction(e)?e.apply(r,t):e}}}}(n),r)
return function(t){for(var n=0;n<e.length;n++)t=(0,e[n])(t)
return t}},T=function(t){return"string"==typeof t&&t.length>1&&"."===t.charAt(0)},W=x((function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
return m.isFunction(t)?r.length?I(t,r):t:T(t)?_(t,r):m.always(t)})),B=function(t,n){return W.apply(void 0,[t].concat(n))},C=function(t,n,r,e){if(null!=n?n._isProperty:void 0){var i=n.sampledBy(t,(function(t,n){return[t,n]}))
return e.call(i,(function(t){var n=t[0]
t[1]
return n})).map((function(t){t[0]
return t[1]}))}return n=B(n,r),e.call(t,n)},F=function(t){if(m.isFunction(t))return t
if(T(t)){var n=V(t)
return function(t,r){return t[n](r)}}throw new o("not a function or a field key: "+t)},V=function(t){return t.slice(1)}
function H(t){this.value=t}b(H.prototype,{_isSome:!0,getOrElse:function(){return this.value},get:function(){return this.value},filter:function(t){return t(this.value)?new H(this.value):N},map:function(t){return new H(t(this.value))},forEach:function(t){return t(this.value)},isDefined:!0,toArray:function(){return[this.value]},inspect:function(){return"Some("+this.value+")"},toString:function(){return this.inspect()}})
var N={_isNone:!0,getOrElse:function(t){return t},filter:function(){return N},map:function(){return N},forEach:function(){},isDefined:!1,toArray:function(){return[]},inspect:function(){return"None"},toString:function(){return this.inspect()}},L=function(t){return(null!=t?t._isSome:void 0)||(null!=t?t._isNone:void 0)?t:new H(t)}
u.noMore="<no-more>",u.more="<more>"
var q=0
function U(){this.id=++q}function j(t,n){if(!(this instanceof j))return new j(t,n)
U.call(this),!n&&m.isFunction(t)||(null!=t?t._isNext:void 0)?(this.valueF=t,this.valueInternal=void 0):(this.valueF=void 0,this.valueInternal=t)}function z(t,n){if(!(this instanceof z))return new z(t,n)
j.call(this,t,n)}function Q(){if(!(this instanceof Q))return new Q
U.call(this)}function R(t){if(!(this instanceof R))return new R(t)
this.error=t,U.call(this)}U.prototype._isEvent=!0,U.prototype.isEvent=function(){return!0},U.prototype.isEnd=function(){return!1},U.prototype.isInitial=function(){return!1},U.prototype.isNext=function(){return!1},U.prototype.isError=function(){return!1},U.prototype.hasValue=function(){return!1},U.prototype.filter=function(){return!0},U.prototype.inspect=function(){return this.toString()},U.prototype.log=function(){return this.toString()},d(j,U),j.prototype.isNext=function(){return!0},j.prototype.hasValue=function(){return!0},j.prototype.value=function(){var t
return(null!=(t=this.valueF)?t._isNext:void 0)?(this.valueInternal=this.valueF.value(),this.valueF=void 0):this.valueF&&(this.valueInternal=this.valueF(),this.valueF=void 0),this.valueInternal},j.prototype.fmap=function(t){var n,r
return this.valueInternal?(r=this.valueInternal,this.apply((function(){return t(r)}))):(n=this,this.apply((function(){return t(n.value())})))},j.prototype.apply=function(t){return new j(t)},j.prototype.filter=function(t){return t(this.value())},j.prototype.toString=function(){return m.toString(this.value())},j.prototype.log=function(){return this.value()},j.prototype._isNext=!0,d(z,j),z.prototype._isInitial=!0,z.prototype.isInitial=function(){return!0},z.prototype.isNext=function(){return!1},z.prototype.apply=function(t){return new z(t)},z.prototype.toNext=function(){return new j(this)},d(Q,U),Q.prototype.isEnd=function(){return!0},Q.prototype.fmap=function(){return this},Q.prototype.apply=function(){return this},Q.prototype.toString=function(){return"<end>"},d(R,U),R.prototype.isError=function(){return!0},R.prototype.fmap=function(){return this},R.prototype.apply=function(){return this},R.prototype.toString=function(){return"<error> "+m.toString(this.error)},u.Event=U,u.Initial=z,u.Next=j,u.End=Q,u.Error=R
var $=function(t){return new z(t,!0)},Z=function(t){return new j(t,!0)},G=function(){return new Q},K=function(t){return t&&t._isEvent?t:Z(t)},X=0,J=function(){}
function Y(t){this.desc=t,this.id=++X,this.initialDesc=this.desc}function tt(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0]
this.unsubscribe=m.bind(this.unsubscribe,this),this.unsubscribed=!1,this.subscriptions=[],this.starting=[]
for(var n,r=0;r<t.length;r++)n=t[r],this.add(n)}function nt(t,n){this._subscribe=t,this._handleEvent=n,this.subscribe=m.bind(this.subscribe,this),this.handleEvent=m.bind(this.handleEvent,this),this.pushing=!1,this.ended=!1,this.prevError=void 0,this.unsubSrc=void 0,this.subscriptions=[],this.queue=[]}function rt(t,n,r){if(!(this instanceof rt))return new rt(t,n,r)
m.isFunction(t)&&(r=n,n=t,t=A.empty),Y.call(this,t),h(n),this.dispatcher=new nt(n,r),J(this)}b(Y.prototype,{_isObservable:!0,subscribe:function(t){return w.wrappedSubscribe(this,t)},subscribeInternal:function(t){return this.dispatcher.subscribe(t)},onValue:function(){var t=P(arguments)
return this.subscribe((function(n){if(n.hasValue())return t(n.value())}))},onValues:function(t){return this.onValue((function(n){return t.apply(void 0,n)}))},onError:function(){var t=P(arguments)
return this.subscribe((function(n){if(n.isError())return t(n.error)}))},onEnd:function(){var t=P(arguments)
return this.subscribe((function(n){if(n.isEnd())return t()}))},name:function(t){return this._name=t,this},withDescription:function(){return this.desc=O.apply(void 0,arguments),this},toString:function(){return this._name?this._name:this.desc.toString()},deps:function(){return this.desc.deps()},internalDeps:function(){return this.initialDesc.deps()}}),Y.prototype.assign=Y.prototype.onValue,Y.prototype.forEach=Y.prototype.onValue,Y.prototype.inspect=Y.prototype.toString,u.Observable=Y,b(tt.prototype,{add:function(t){var n=this
if(!this.unsubscribed){var r=!1,e=s
this.starting.push(t)
return e=t(this.unsubscribe,(function(){if(!n.unsubscribed)return r=!0,n.remove(e),m.remove(t,n.starting)})),this.unsubscribed||r?e():this.subscriptions.push(e),m.remove(t,this.starting),e}},remove:function(t){if(!this.unsubscribed)return void 0!==m.remove(t,this.subscriptions)?t():void 0},unsubscribe:function(){if(!this.unsubscribed){this.unsubscribed=!0
for(var t=this.subscriptions,n=0;n<t.length;n++)t[n]()
return this.subscriptions=[],this.starting=[],[]}},count:function(){return this.unsubscribed?0:this.subscriptions.length+this.starting.length},empty:function(){return 0===this.count()}}),u.CompositeUnsubscribe=tt,nt.prototype.hasSubscribers=function(){return this.subscriptions.length>0},nt.prototype.removeSub=function(t){return this.subscriptions=m.without(t,this.subscriptions),this.subscriptions},nt.prototype.push=function(t){return t.isEnd()&&(this.ended=!0),w.inTransaction(t,this,this.pushIt,[t])},nt.prototype.pushToSubscriptions=function(t){try{for(var n=this.subscriptions,r=n.length,e=0;e<r;e++){var i=n[e];(i.sink(t)===u.noMore||t.isEnd())&&this.removeSub(i)}return!0}catch(t){throw this.pushing=!1,this.queue=[],t}},nt.prototype.pushIt=function(t){if(this.pushing)return this.queue.push(t),u.more
if(t!==this.prevError){for(t.isError()&&(this.prevError=t),this.pushing=!0,this.pushToSubscriptions(t),this.pushing=!1;this.queue.length;)t=this.queue.shift(),this.push(t)
return this.hasSubscribers()?u.more:(this.unsubscribeFromSource(),u.noMore)}},nt.prototype.handleEvent=function(t){return this._handleEvent?this._handleEvent(t):this.push(t)},nt.prototype.unsubscribeFromSource=function(){this.unsubSrc&&this.unsubSrc(),this.unsubSrc=void 0},nt.prototype.subscribe=function(t){var n,r
return this.ended?(t(G()),s):(h(t),n={sink:t},this.subscriptions.push(n),1===this.subscriptions.length&&(this.unsubSrc=this._subscribe(this.handleEvent),h(this.unsubSrc)),r=this,function(){if(r.removeSub(n),!r.hasSubscribers())return r.unsubscribeFromSource()})},u.Dispatcher=nt,d(rt,Y),b(rt.prototype,{_isEventStream:!0,toProperty:function(t){var n=0===arguments.length?N:L((function(){return t})),r=this.dispatcher,e=new u.Desc(this,"toProperty",[t])
return new ot(e,(function(t){var e=!1,i=!1,o=s,c=u.more,a=function(){if(!e)return n.forEach((function(n){if(e=!0,(c=t(new z(n)))===u.noMore)return o(),o=s,s}))}
return o=r.subscribe((function(r){return r.hasValue()?r.isInitial()&&!i?(n=new H((function(){return r.value()})),u.more):(r.isInitial()||a(),e=!0,n=new H(r),t(r)):(r.isEnd()&&(c=a()),c!==u.noMore?t(r):void 0)})),i=!0,a(),o}))},toEventStream:function(){return this},withHandler:function(t){return new rt(new u.Desc(this,"withHandler",[t]),this.dispatcher.subscribe,t)}}),u.EventStream=rt,u.never=function(){return new rt(O(u,"never"),(function(t){return t(G()),s}))},u.when=function(){if(0===arguments.length)return u.never()
var t=arguments.length,n="when: expecting arguments in the form (Observable+,function)+"
a(n,t%2==0)
for(var r=[],e=[],i=0,o=[];i<t;){o[i]=arguments[i],o[i+1]=arguments[i+1]
for(var s,c=m.toArray(arguments[i]),f=it(arguments[i+1]),h={f:f,ixs:[]},l=!1,p=0;p<c.length;p++){s=c[p]
var v=m.indexOf(r,s)
l||(l=E.isTrigger(s)),v<0&&(r.push(s),v=r.length-1)
for(var b,d=0;d<h.ixs.length;d++)(b=h.ixs[d]).index===v&&b.count++
h.ixs.push({index:v,count:1})}a("At least one EventStream required",l||!c.length),c.length>0&&e.push(h),i+=2}if(!r.length)return u.never()
r=m.map(E.fromObservable,r)
var y=m.any(r,(function(t){return t.flatten}))&&et(m.map((function(t){return t.obs}),r)),g=new u.Desc(u,"when",o),S=new rt(g,(function(t){var n=[],i=!1,o=function(t){for(var n,e=0;e<t.ixs.length;e++)if(n=t.ixs[e],!r[n.index].hasAtLeast(n.count))return!1
return!0},s=function(t){return!t.sync||t.ended},c=function(t){for(var n,e=0;e<t.ixs.length;e++)if(n=t.ixs[e],!r[n.index].mayHave(n.count))return!0},a=function(t){return!t.source.flatten},f=function(f){return function(h){var l=function(){return w.whenDoneWith(S,v)},p=function(){if(!(n.length>0))return u.more
for(var i,s=u.more,c=n.pop(),f=0;f<e.length;f++)if(i=e[f],o(i)){var h=function(){for(var t,n=[],e=0;e<i.ixs.length;e++)t=i.ixs[e],n.push(r[t.index].consume())
return n}()
return s=t(c.e.apply((function(){var t,n=function(){for(var t,n=[],r=0;r<h.length;r++)t=h[r],n.push(t.value())
return n}()
return(t=i).f.apply(t,n)}))),n.length&&(n=m.filter(a,n)),s===u.noMore?s:p()}},v=function(){var n=p()
return i&&(m.all(r,s)||m.all(e,c))&&(n=u.noMore,t(G())),n===u.noMore&&h(),n}
return f.subscribe((function(r){if(r.isEnd())i=!0,f.markEnded(),l()
else if(r.isError())var e=t(r)
else f.push(r),f.sync&&(n.push({source:f,e:r}),y||w.hasWaiters()?l():v())
return e===u.noMore&&h(),e||u.more}))}}
return new u.CompositeUnsubscribe(function(){for(var t,n=[],e=0;e<r.length;e++)t=r[e],n.push(f(t))
return n}()).unsubscribe}))
return S}
var et=function(t){var n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],r=function(t){if(m.contains(n,t))return!0
var e=t.internalDeps()
return e.length?(n.push(t),m.any(e,r)):(n.push(t),!1)}
return m.any(t,r)},it=function(t){return m.isFunction(t)?t:m.always(t)}
function ut(t,n,r){nt.call(this,n,r),this.property=t,this.subscribe=m.bind(this.subscribe,this),this.current=N,this.currentValueRootId=void 0,this.propertyEnded=!1}function ot(t,n,r){Y.call(this,t),h(n),this.dispatcher=new ut(this,n,r),J(this)}u.groupSimultaneous=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
1===n.length&&l(n[0])&&(n=n[0])
var e=function(){for(var t,r=[],e=0;e<n.length;e++)t=n[e],r.push(new D(t))
return r}()
return M(new u.Desc(u,"groupSimultaneous",n),u.when(e,(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
return n})))},d(ut,nt),b(ut.prototype,{push:function(t){return t.isEnd()&&(this.propertyEnded=!0),t.hasValue()&&(this.current=new H(t),this.currentValueRootId=w.currentEventId()),nt.prototype.push.call(this,t)},maybeSubSource:function(t,n){return n===u.noMore?s:this.propertyEnded?(t(G()),s):nt.prototype.subscribe.call(this,t)},subscribe:function(t){var n=this,r=u.more
if(this.current.isDefined&&(this.hasSubscribers()||this.propertyEnded)){var e=w.currentEventId(),i=this.currentValueRootId
return!this.propertyEnded&&i&&e&&e!==i?(w.whenDoneWith(this.property,(function(){if(n.currentValueRootId===i)return t($(n.current.get().value()))})),this.maybeSubSource(t,r)):(w.inTransaction(void 0,this,(function(){return r=t($(this.current.get().value()))}),[]),this.maybeSubSource(t,r))}return this.maybeSubSource(t,r)}}),d(ot,Y),b(ot.prototype,{_isProperty:!0,changes:function(){var t=this
return new rt(new u.Desc(this,"changes",[]),(function(n){return t.dispatcher.subscribe((function(t){if(!t.isInitial())return n(t)}))}))},withHandler:function(t){return new ot(new u.Desc(this,"withHandler",[t]),this.dispatcher.subscribe,t)},toProperty:function(){return v(arguments),this},toEventStream:function(){var t=this
return new rt(new u.Desc(this,"toEventStream",[]),(function(n){return t.dispatcher.subscribe((function(t){return t.isInitial()&&(t=t.toNext()),n(t)}))}))}}),u.Property=ot,u.constant=function(t){return new ot(new u.Desc(u,"constant",[t]),(function(n){return n($(t)),n(G()),s}))},u.fromBinder=function(t){var n=arguments.length<=1||void 0===arguments[1]?m.id:arguments[1],r=new u.Desc(u,"fromBinder",[t,n])
return new rt(r,(function(r){var e=!1,i=!1,o=function(){if(!e)return null!=s?(s(),e=!0):i=!0},s=t((function(){for(var t,e=arguments.length,i=Array(e),s=0;s<e;s++)i[s]=arguments[s]
var c=n.apply(this,i)
l(c)&&(null!=(t=m.last(c))?t._isEvent:void 0)||(c=[c])
for(var a,f=u.more,h=0;h<c.length;h++)if(a=c[h],(f=r(a=K(a)))===u.noMore||a.isEnd())return o(),f
return f}))
return i&&o(),o}))},u.Observable.prototype.map=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
return C(this,t,r,(function(t){return M(new u.Desc(this,"map",[t]),this.withHandler((function(n){return this.push(n.fmap(t))})))}))}
var st=function(t){return l(t[0])?t[0]:Array.prototype.slice.call(t)},ct=function(t){return m.isFunction(t[0])?[st(Array.prototype.slice.call(t,1)),t[0]]:[st(Array.prototype.slice.call(t,0,t.length-1)),m.last(t)]}
u.combineAsArray=function(){var t=st(arguments)
if(t.length){for(var n=[],r=0;r<t.length;r++){var e=p(t[r])?t[r]:u.constant(t[r])
n.push(new E(e,!0))}return M(new u.Desc(u,"combineAsArray",t),u.when(n,(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
return n})).toProperty())}return u.constant([])},u.onValues=function(){return u.combineAsArray(Array.prototype.slice.call(arguments,0,arguments.length-1)).onValues(arguments[arguments.length-1])},u.combineWith=function(){var t=ct(arguments),n=t[0],r=t[1],e=new u.Desc(u,"combineWith",[r].concat(n))
return M(e,u.combineAsArray(n).map((function(t){return r.apply(void 0,t)})))},u.Observable.prototype.combine=function(t,n){var r=F(n),e=new u.Desc(this,"combine",[t,n])
return M(e,u.combineAsArray(this,t).map((function(t){return r(t[0],t[1])})))},u.Observable.prototype.withStateMachine=function(t,n){var r=t,e=new u.Desc(this,"withStateMachine",[t,n])
return M(e,this.withHandler((function(t){var e=n(r,t),i=e[0],o=e[1]
r=i
for(var s,c=u.more,a=0;a<o.length;a++)if(s=o[a],(c=this.push(s))===u.noMore)return c
return c})))}
var at=function(t,n){return t===n},ft=function(t){return null!=t&&t._isNone}
u.Observable.prototype.skipDuplicates=function(){var t=arguments.length<=0||void 0===arguments[0]?at:arguments[0],n=new u.Desc(this,"skipDuplicates",[])
return M(n,this.withStateMachine(N,(function(n,r){return r.hasValue()?r.isInitial()||ft(n)||!t(n.get(),r.value())?[new H(r.value()),[r]]:[n,[]]:[n,[r]]})))},u.Observable.prototype.awaiting=function(t){var n=new u.Desc(this,"awaiting",[t])
return M(n,u.groupSimultaneous(this,t).map((function(t){return 0===t[1].length})).toProperty(!1).skipDuplicates())},u.Observable.prototype.not=function(){return M(new u.Desc(this,"not",[]),this.map((function(t){return!t})))},u.Property.prototype.and=function(t){return M(new u.Desc(this,"and",[t]),this.combine(t,(function(t,n){return t&&n})))},u.Property.prototype.or=function(t){return M(new u.Desc(this,"or",[t]),this.combine(t,(function(t,n){return t||n})))},u.scheduler={setTimeout:function(t,n){return setTimeout(t,n)},setInterval:function(t,n){return setInterval(t,n)},clearInterval:function(t){return clearInterval(t)},clearTimeout:function(t){return clearTimeout(t)},now:function(){return(new Date).getTime()}},u.EventStream.prototype.bufferWithTime=function(t){return M(new u.Desc(this,"bufferWithTime",[t]),this.bufferWithTimeOrCount(t,Number.MAX_VALUE))},u.EventStream.prototype.bufferWithCount=function(t){return M(new u.Desc(this,"bufferWithCount",[t]),this.bufferWithTimeOrCount(void 0,t))},u.EventStream.prototype.bufferWithTimeOrCount=function(t,n){var r=function(r){return r.values.length===n?r.flush():void 0!==t?r.schedule():void 0},e=new u.Desc(this,"bufferWithTimeOrCount",[t,n])
return M(e,this.buffer(t,r,r))},u.EventStream.prototype.buffer=function(t){var n=arguments.length<=1||void 0===arguments[1]?s:arguments[1],r=arguments.length<=2||void 0===arguments[2]?s:arguments[2],e={scheduled:null,end:void 0,values:[],flush:function(){if(this.scheduled&&(u.scheduler.clearTimeout(this.scheduled),this.scheduled=null),this.values.length>0){var t=this.values
this.values=[]
var n=this.push(Z(t))
if(null!=this.end)return this.push(this.end)
if(n!==u.noMore)return r(this)}else if(null!=this.end)return this.push(this.end)},schedule:function(){var n=this
if(!this.scheduled)return this.scheduled=t((function(){return n.flush()}))}},i=u.more
if(!m.isFunction(t)){var o=t
t=function(t){return u.scheduler.setTimeout(t,o)}}return M(new u.Desc(this,"buffer",[]),this.withHandler((function(t){var r=this
return e.push=function(t){return r.push(t)},t.isError()?i=this.push(t):t.isEnd()?(e.end=t,e.scheduled||e.flush()):(e.values.push(t.value()),n(e)),i})))},u.Observable.prototype.filter=function(t){f(t)
for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
return C(this,t,r,(function(t){return M(new u.Desc(this,"filter",[t]),this.withHandler((function(n){return n.filter(t)?this.push(n):u.more})))}))},u.once=function(t){return new rt(new A(u,"once",[t]),(function(n){return n(K(t)),n(G()),s}))},u.EventStream.prototype.concat=function(t){var n=this
return new rt(new u.Desc(n,"concat",[t]),(function(r){var e=s,i=n.dispatcher.subscribe((function(n){return n.isEnd()?e=t.toEventStream().dispatcher.subscribe(r):r(n)}))
return function(){return i(),e()}}))},u.Property.prototype.concat=function(t){return ht(this,this.changes().concat(t))},u.concatAll=function(){var t=st(arguments)
return t.length?M(new u.Desc(u,"concatAll",t),m.fold(m.tail(t),m.head(t).toEventStream(),(function(t,n){return t.concat(n)}))):u.never()}
var ht=function(t,n){var r=new rt(O(t,"justInitValue"),(function(n){var e=void 0,i=t.dispatcher.subscribe((function(t){return t.isEnd()||(e=t),u.noMore}))
return w.whenDoneWith(r,(function(){return null!=e&&n(e),n(G())})),i}))
return r.concat(n).toProperty()}
u.Observable.prototype.flatMap=function(){return vt(this,lt(arguments))},u.Observable.prototype.flatMapFirst=function(){return vt(this,lt(arguments),!0)}
var lt=function(t){return 1===t.length&&p(t[0])?m.always(t[0]):P(t)},pt=function(t){return p(t)?t:u.once(t)},vt=function(t,n,r,e){var i=[t],o=[],s=new rt(new u.Desc(t,"flatMap"+(r?"First":""),[n]),(function(i){var s=new tt,c=[],a=function(t){var r=pt(n(t.value()))
return o.push(r),s.add((function(t,n){return r.dispatcher.subscribe((function(e){if(e.isEnd())return m.remove(r,o),f(),h(n),u.noMore;(null!=e?e._isInitial:void 0)&&(e=e.toNext())
var s=i(e)
return s===u.noMore&&t(),s}))}))},f=function(){var t=c.shift()
if(t)return a(t)},h=function(t){if(t(),s.empty())return i(G())}
return s.add((function(n,o){return t.dispatcher.subscribe((function(t){return t.isEnd()?h(o):t.isError()?i(t):r&&s.count()>1?u.more:s.unsubscribed?u.noMore:e&&s.count()>e?c.push(t):a(t)}))})),s.unsubscribe}))
return s.internalDeps=function(){return o.length?i.concat(o):i},s}
function bt(){if(!(this instanceof bt))return new bt
this.unsubAll=m.bind(this.unsubAll,this),this.subscribeAll=m.bind(this.subscribeAll,this),this.guardedSink=m.bind(this.guardedSink,this),this.sink=void 0,this.subscriptions=[],this.ended=!1,rt.call(this,new u.Desc(u,"Bus",[]),this.subscribeAll)}u.Observable.prototype.flatMapWithConcurrencyLimit=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
var i=new u.Desc(this,"flatMapWithConcurrencyLimit",[t].concat(r))
return M(i,vt(this,lt(r),!1,t))},u.Observable.prototype.flatMapConcat=function(){var t=new u.Desc(this,"flatMapConcat",Array.prototype.slice.call(arguments,0))
return M(t,this.flatMapWithConcurrencyLimit.apply(this,[1].concat(i.call(arguments))))},u.later=function(t,n){return M(new u.Desc(u,"later",[t,n]),u.fromBinder((function(r){var e=u.scheduler.setTimeout((function(){return r([n,G()])}),t)
return function(){return u.scheduler.clearTimeout(e)}})))},u.Observable.prototype.bufferingThrottle=function(t){var n=new u.Desc(this,"bufferingThrottle",[t])
return M(n,this.flatMapConcat((function(n){return u.once(n).concat(u.later(t).filter(!1))})))},u.Property.prototype.bufferingThrottle=function(){return u.Observable.prototype.bufferingThrottle.apply(this,arguments).toProperty()},d(bt,rt),b(bt.prototype,{unsubAll:function(){for(var t,n=this.subscriptions,r=0;r<n.length;r++)"function"==typeof(t=n[r]).unsub&&t.unsub()},subscribeAll:function(t){if(this.ended)t(G())
else{this.sink=t
for(var n,r=this.subscriptions.slice(0),e=0;e<r.length;e++)n=r[e],this.subscribeInput(n)}return this.unsubAll},guardedSink:function(t){var n=this
return function(r){return r.isEnd()?(n.unsubscribeInput(t),u.noMore):n.sink(r)}},subscribeInput:function(t){return t.unsub=t.input.dispatcher.subscribe(this.guardedSink(t.input)),t.unsub},unsubscribeInput:function(t){for(var n,r=this.subscriptions,e=0;e<r.length;e++)if((n=r[e]).input===t)return"function"==typeof n.unsub&&n.unsub(),void this.subscriptions.splice(e,1)},plug:function(t){var n=this
if(function(t){if(!(null!=t?t._isObservable:void 0))throw new o("not an Observable : "+t)}(t),!this.ended){var r={input:t}
return this.subscriptions.push(r),void 0!==this.sink&&this.subscribeInput(r),function(){return n.unsubscribeInput(t)}}},end:function(){if(this.ended=!0,this.unsubAll(),"function"==typeof this.sink)return this.sink(G())},push:function(t){if(!this.ended&&"function"==typeof this.sink){var n=!this.pushing
if(!n)return this.pushQueue||(this.pushQueue=[]),void this.pushQueue.push(t)
this.pushing=!0
try{return this.sink(Z(t))}finally{if(n&&this.pushQueue){for(var r=0;r<this.pushQueue.length;){t=this.pushQueue[r]
this.sink(Z(t)),r++}this.pushQueue=null}this.pushing=!1}}},error:function(t){if("function"==typeof this.sink)return this.sink(new R(t))}}),u.Bus=bt
var dt=function(t,n){return x((function(r){for(var e=I(n,[function(t,n){return r.apply(void 0,t.concat([n]))}]),i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s]
return M(new u.Desc(u,t,[r].concat(o)),u.combineAsArray(o).flatMap(e))}))}
u.fromCallback=dt("fromCallback",(function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
return u.fromBinder((function(n){return B(t,r)(n),s}),(function(t){return[t,G()]}))})),u.fromNodeCallback=dt("fromNodeCallback",(function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
return u.fromBinder((function(n){return B(t,r)(n),s}),(function(t,n){return t?[new R(t),G()]:[n,G()]}))})),u.combineTemplate=function(t){function n(t,n,r){return(function(t){return t[t.length-1]}(t))[n]=r,r}function r(t){return l(t)?[]:{}}function e(t){if(p(t))return!0
if(t&&(t.constructor==Object||t.constructor==Array))for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n))if(e(t[n]))return!0}}function i(t,i){if(p(i))c.push(i),s.push(function(t,r){return function(e,i){n(e,t,i[r])}}(t,c.length-1))
else if(e(i)){s.push(function(t,e){return function(i){var u=r(e)
n(i,t,u),i.push(u)}}(t,i)),o(i),s.push((function(t){t.pop()}))}else s.push(function(t,r){return function(e){n(e,t,r)}}(t,i))}function o(t){m.each(t,i)}var s=[],c=[],a=e(t)?(o(t),u.combineAsArray(c).map((function(n){for(var e=r(t),i=[e],u=0;u<s.length;u++)(0,s[u])(i,n)
return e}))):u.constant(t)
return M(new u.Desc(u,"combineTemplate",[t]),a)},u.Observable.prototype.mapEnd=function(){var t=P(arguments)
return M(new u.Desc(this,"mapEnd",[t]),this.withHandler((function(n){return n.isEnd()?(this.push(Z(t(n))),this.push(G()),u.noMore):this.push(n)})))},u.Observable.prototype.skipErrors=function(){return M(new u.Desc(this,"skipErrors",[]),this.withHandler((function(t){return t.isError()?u.more:this.push(t)})))},u.EventStream.prototype.takeUntil=function(t){var n={}
return M(new u.Desc(this,"takeUntil",[t]),u.groupSimultaneous(this.mapEnd(n),t.skipErrors()).withHandler((function(t){if(t.hasValue()){var r=t.value(),e=r[0]
if(r[1].length)return this.push(G())
for(var i,o=u.more,s=0;s<e.length;s++)o=(i=e[s])===n?this.push(G()):this.push(Z(i))
return o}return this.push(t)})))},u.Property.prototype.takeUntil=function(t){var n=this.changes().takeUntil(t)
return M(new u.Desc(this,"takeUntil",[t]),ht(this,n))},u.Observable.prototype.flatMapLatest=function(){var t=lt(arguments),n=this.toEventStream()
return M(new u.Desc(this,"flatMapLatest",[t]),n.flatMap((function(r){return pt(t(r)).takeUntil(n)})))},u.Property.prototype.delayChanges=function(t,n){return M(t,ht(this,n(this.changes())))},u.EventStream.prototype.delayChanges=function(t,n){return M(t,n(this))},u.Observable.prototype.delay=function(t){return this.delayChanges(new u.Desc(this,"delay",[t]),(function(n){return n.flatMap((function(n){return u.later(t,n)}))}))},u.Observable.prototype.debounce=function(t){return this.delayChanges(new u.Desc(this,"debounce",[t]),(function(n){return n.flatMapLatest((function(n){return u.later(t,n)}))}))},u.Observable.prototype.debounceImmediate=function(t){return this.delayChanges(new u.Desc(this,"debounceImmediate",[t]),(function(n){return n.flatMapFirst((function(n){return u.once(n).concat(u.later(t).filter(!1))}))}))},u.Observable.prototype.decode=function(t){return M(new u.Desc(this,"decode",[t]),this.combine(u.combineTemplate(t),(function(t,n){return n[t]})))},u.Observable.prototype.scan=function(t,n){var r,e=this
n=F(n)
var i=L(t),o=!1
return r=new ot(new u.Desc(this,"scan",[t,n]),(function(t){var c=!1,a=s,f=u.more,h=function(){if(!c)return i.forEach((function(n){if(c=o=!0,(f=t(new z((function(){return n}))))===u.noMore)return a(),a=s}))}
return a=e.dispatcher.subscribe((function(r){if(r.hasValue()){if(o&&r.isInitial())return u.more
r.isInitial()||h(),c=o=!0
var e=i.getOrElse(void 0),s=n(e,r.value())
return i=new H(s),t(r.apply((function(){return s})))}if(r.isEnd()&&(f=h()),f!==u.noMore)return t(r)})),w.whenDoneWith(r,h),a}))},u.Observable.prototype.diff=function(t,n){return n=F(n),M(new u.Desc(this,"diff",[t,n]),this.scan([t],(function(t,r){return[r,n(t[0],r)]})).filter((function(t){return 2===t.length})).map((function(t){return t[1]})))},u.Observable.prototype.doAction=function(){var t=P(arguments)
return M(new u.Desc(this,"doAction",[t]),this.withHandler((function(n){return n.hasValue()&&t(n.value()),this.push(n)})))},u.Observable.prototype.doEnd=function(){var t=P(arguments)
return M(new u.Desc(this,"doEnd",[t]),this.withHandler((function(n){return n.isEnd()&&t(),this.push(n)})))},u.Observable.prototype.doError=function(){var t=P(arguments)
return M(new u.Desc(this,"doError",[t]),this.withHandler((function(n){return n.isError()&&t(n.error),this.push(n)})))},u.Observable.prototype.doLog=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
return M(new u.Desc(this,"doLog",n),this.withHandler((function(t){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log&&console.log.apply(console,n.concat([t.log()])),this.push(t)})))},u.Observable.prototype.endOnError=function(t){null==t&&(t=!0)
for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
return C(this,t,r,(function(t){return M(new u.Desc(this,"endOnError",[]),this.withHandler((function(n){return n.isError()&&t(n.error)?(this.push(n),this.push(G())):this.push(n)})))}))},Y.prototype.errors=function(){return M(new u.Desc(this,"errors",[]),this.filter((function(){return!1})))},u.Observable.prototype.take=function(t){return t<=0?u.never():M(new u.Desc(this,"take",[t]),this.withHandler((function(n){return n.hasValue()?--t>0?this.push(n):(0===t&&this.push(n),this.push(G()),u.noMore):this.push(n)})))},u.Observable.prototype.first=function(){return M(new u.Desc(this,"first",[]),this.take(1))},u.Observable.prototype.mapError=function(){var t=P(arguments)
return M(new u.Desc(this,"mapError",[t]),this.withHandler((function(n){return n.isError()?this.push(Z(t(n.error))):this.push(n)})))},u.Observable.prototype.flatMapError=function(t){var n=new u.Desc(this,"flatMapError",[t])
return M(n,this.mapError((function(t){return new R(t)})).flatMap((function(n){return n instanceof R?t(n.error):u.once(n)})))},u.EventStream.prototype.flatScan=function(t,n){var r=t
return this.flatMapConcat((function(t){return pt(n(r,t)).doAction((function(t){return r=t}))})).toProperty(t)},u.EventStream.prototype.sampledBy=function(t,n){return M(new u.Desc(this,"sampledBy",[t,n]),this.toProperty().sampledBy(t,n))},u.Property.prototype.sampledBy=function(t,n){var r=!1
null!=n?n=F(n):(r=!0,n=function(t){return t.value()})
var e=new E(this,!1,r),i=new E(t,!0,r),o=u.when([e,i],n),s=t._isProperty?o.toProperty():o
return M(new u.Desc(this,"sampledBy",[t,n]),s)},u.Property.prototype.sample=function(t){return M(new u.Desc(this,"sample",[t]),this.sampledBy(u.interval(t,{})))},u.Observable.prototype.map=function(t){if(t&&t._isProperty)return t.sampledBy(this,c)
for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
return C(this,t,r,(function(t){return M(new u.Desc(this,"map",[t]),this.withHandler((function(n){return this.push(n.fmap(t))})))}))},u.Observable.prototype.fold=function(t,n){return M(new u.Desc(this,"fold",[t,n]),this.scan(t,n).sampledBy(this.filter(!1).mapEnd().toProperty()))},Y.prototype.reduce=Y.prototype.fold
var yt=[["addEventListener","removeEventListener"],["addListener","removeListener"],["on","off"],["bind","unbind"]]
function mt(t){return[t,G()]}u.fromEventTarget=function(t,n,r){var e=function(t){for(var n,r=0;r<yt.length;r++){var e=[t[(n=yt[r])[0]],t[n[1]]]
if(e[0]&&e[1])return e}for(var i=0;i<yt.length;i++){var u=t[(n=yt[i])[0]]
if(u)return[u,function(){}]}throw new R("No suitable event methods in "+t)}(t),i=e[0],o=e[1],s=new u.Desc(u,"fromEvent",[t,n])
return M(s,u.fromBinder((function(r){return i.call(t,n,r),function(){return o.call(t,n,r)}}),r))},u.fromEvent=u.fromEventTarget,u.fromPoll=function(t,n){var r=new u.Desc(u,"fromPoll",[t,n])
return M(r,u.fromBinder((function(n){var r=u.scheduler.setInterval(n,t)
return function(){return u.scheduler.clearInterval(r)}}),n))},u.fromPromise=function(t,n){var r=arguments.length<=2||void 0===arguments[2]?mt:arguments[2]
return M(new u.Desc(u,"fromPromise",[t]),u.fromBinder((function(r){var e=t.then(r,(function(t){return r(new R(t))}))
return e&&"function"==typeof e.done&&e.done(),n?function(){if("function"==typeof t.abort)return t.abort()}:function(){}}),r))},u.Observable.prototype.groupBy=function(t){var n=arguments.length<=1||void 0===arguments[1]?u._.id:arguments[1],r={},e=this
return e.filter((function(n){return!r[t(n)]})).map((function(i){var o=t(i),s=e.filter((function(n){return t(n)===o})),c=u.once(i).concat(s),a=n(c,i).withHandler((function(t){if(this.push(t),t.isEnd())return delete r[o]}))
return r[o]=a,a}))},u.fromArray=function(t){if(function(t){if(!l(t))throw new o("not an array : "+t)}(t),t.length){var n=0,r=new rt(new u.Desc(u,"fromArray",[t]),(function(e){var i=!1,o=u.more,s=!1,c=!1
return function a(){if(c=!0,!s){for(s=!0;c;)if(c=!1,o!==u.noMore&&!i){var f=t[n++];(o=e(K(f)))!==u.noMore&&(n===t.length?e(G()):w.afterTransaction(r,a))}return s=!1}}(),function(){return i=!0}}))
return r}return M(new u.Desc(u,"fromArray",t),u.never())},u.EventStream.prototype.holdWhen=function(t){var n=!1,r=[],e=this,i=!1
return new rt(new u.Desc(this,"holdWhen",[t]),(function(u){var o=new tt,s=!1,c=function(t){if("function"==typeof t&&t(),o.empty()&&s)return u(G())}
return o.add((function(e,o){return t.subscribeInternal((function(t){if(!t.hasValue())return t.isEnd()?c(o):u(t)
if(!(n=t.value())){var e=r
return r=[],function(){for(var t,n=[],r=0;r<e.length;r++)t=e[r],n.push(u(Z(t)))
return i&&(n.push(u(G())),o()),n}()}}))})),o.add((function(t,o){return e.subscribeInternal((function(t){return n&&t.hasValue()?r.push(t.value()):t.isEnd()&&r.length?(i=!0,c(o)):u(t)}))})),s=!0,c(),o.unsubscribe}))},u.interval=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]
return M(new u.Desc(u,"interval",[t,n]),u.fromPoll(t,(function(){return Z(n)})))},u.$={},u.$.asEventStream=function(t,n,r){var e=this
return m.isFunction(n)&&(r=n,n=void 0),M(new u.Desc(this.selector||this,"asEventStream",[t]),u.fromBinder((function(r){return e.on(t,n,r),function(){return e.off(t,n,r)}}),r))},"undefined"!=typeof jQuery&&jQuery&&(jQuery.fn.asEventStream=u.$.asEventStream),"undefined"!=typeof Zepto&&Zepto&&(Zepto.fn.asEventStream=u.$.asEventStream),u.Observable.prototype.last=function(){var t
return M(new u.Desc(this,"last",[]),this.withHandler((function(n){if(n.isEnd())return t&&this.push(t),this.push(G()),u.noMore
t=n})))},u.Observable.prototype.log=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
return this.subscribe((function(t){"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,n.concat([t.log()]))})),this},u.EventStream.prototype.merge=function(t){!function(t){if(!(null!=t?t._isEventStream:void 0))throw new o("not an EventStream : "+t)}(t)
return M(new u.Desc(this,"merge",[t]),u.mergeAll(this,t))},u.mergeAll=function(){var t=st(arguments)
return t.length?new rt(new u.Desc(u,"mergeAll",t),(function(n){var r=0,e=m.map((function(e){return function(i){return e.dispatcher.subscribe((function(e){if(e.isEnd())return++r===t.length?n(G()):u.more
var o=n(e)
return o===u.noMore&&i(),o}))}}),t)
return new u.CompositeUnsubscribe(e).unsubscribe})):u.never()},u.repeatedly=function(t,n){var r=0
return M(new u.Desc(u,"repeatedly",[t,n]),u.fromPoll(t,(function(){return n[r++%n.length]})))},u.repeat=function(t){var n=0
return u.fromBinder((function(r){var e=!1,i=u.more,o=function(){}
function s(t){return t.isEnd()?e?c():e=!0:i=r(t)}function c(){var c
for(e=!0;e&&i!==u.noMore;)c=t(n++),e=!1,c?o=c.subscribeInternal(s):r(G())
return e=!0}return c(),function(){return o()}}))},u.retry=function(t){if(!m.isFunction(t.source))throw new o("'source' option has to be a function")
var n=t.source,r=t.retries||0,e=0,i=t.delay||function(){return 0},s=t.isRetryable||function(){return!0},c=!1,a=null
return M(new u.Desc(u,"retry",[t]),u.repeat((function(t){function o(){return n(t).endOnError().withHandler((function(t){return t.isError()?s((a=t).error)&&(0===r||e<r)?void 0:(c=!0,this.push(t)):(t.hasValue()&&(a=null,c=!0),this.push(t))}))}if(c)return null
if(a){var f={error:a.error,retriesDone:e},h=u.later(i(f)).filter(!1)
return e++,h.concat(u.once().flatMap(o))}return o()})))},u.sequentially=function(t,n){var r=0
return M(new u.Desc(u,"sequentially",[t,n]),u.fromPoll(t,(function(){var t=n[r++]
return r<n.length?t:r===n.length?[t,G()]:G()})))},u.Observable.prototype.skip=function(t){return M(new u.Desc(this,"skip",[t]),this.withHandler((function(n){return n.hasValue()&&t>0?(t--,u.more):this.push(n)})))},u.EventStream.prototype.skipUntil=function(t){var n=t.take(1).map(!0).toProperty(!1)
return M(new u.Desc(this,"skipUntil",[t]),this.filter(n))},u.EventStream.prototype.skipWhile=function(t){f(t)
for(var n=!1,r=arguments.length,e=Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i]
return C(this,t,e,(function(t){return M(new u.Desc(this,"skipWhile",[t]),this.withHandler((function(r){return!n&&r.hasValue()&&t(r.value())?u.more:(r.hasValue()&&(n=!0),this.push(r))})))}))},u.Observable.prototype.slidingWindow=function(t){var n=arguments.length<=1||void 0===arguments[1]?0:arguments[1]
return M(new u.Desc(this,"slidingWindow",[t,n]),this.scan([],(function(n,r){return n.concat([r]).slice(-t)})).filter((function(t){return t.length>=n})))}
var gt=[]
J=function(t){if(gt.length&&!J.running)try{J.running=!0,gt.forEach((function(n){n(t)}))}finally{delete J.running}}
function wt(t){this.observable=t}u.spy=function(t){return gt.push(t)},u.Property.prototype.startWith=function(t){return M(new u.Desc(this,"startWith",[t]),this.scan(t,(function(t,n){return n})))},u.EventStream.prototype.startWith=function(t){return M(new u.Desc(this,"startWith",[t]),u.once(t).concat(this))},u.Observable.prototype.takeWhile=function(t){f(t)
for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e]
return C(this,t,r,(function(t){return M(new u.Desc(this,"takeWhile",[t]),this.withHandler((function(n){return n.filter(t)?this.push(n):(this.push(G()),u.noMore)})))}))},u.Observable.prototype.throttle=function(t){return this.delayChanges(new u.Desc(this,"throttle",[t]),(function(n){return n.bufferWithTime(t).map((function(t){return t[t.length-1]}))}))},Y.prototype.firstToPromise=function(t){var n=this
if("function"!=typeof t){if("function"!=typeof Promise)throw new o("There isn't default Promise, use shim or parameter")
t=Promise}return new t((function(t,r){return n.subscribe((function(n){return n.hasValue()&&t(n.value()),n.isError()&&r(n.error),u.noMore}))}))},Y.prototype.toPromise=function(t){return this.last().firstToPromise(t)},u.try=function(t){return function(n){try{return u.once(t(n))}catch(t){return new u.Error(t)}}},u.update=function(t){function n(t){return function(){for(var n=arguments.length,r=Array(n),e=0;e<n;e++)r[e]=arguments[e]
return function(n){return t.apply(void 0,[n].concat(r))}}}for(var r=arguments.length,e=Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i]
for(var o=e.length-1;o>0;)e[o]instanceof Function||(e[o]=m.always(e[o])),e[o]=n(e[o]),o-=2
return M(new u.Desc(u,"update",[t].concat(e)),u.when.apply(u,e).scan(t,(function(t,n){return n(t)})))},u.zipAsArray=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
var e=st(n)
return M(new u.Desc(u,"zipAsArray",e),u.zipWith(e,(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
return n})))},u.zipWith=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
var e=ct(n),i=e[0],o=e[1]
return i=m.map((function(t){return t.toEventStream()}),i),M(new u.Desc(u,"zipWith",[o].concat(i)),u.when(i,o))},u.Observable.prototype.zip=function(t,n){return M(new u.Desc(this,"zip",[t]),u.zipWith([this,t],n||Array))},wt.prototype.subscribe=function(t,n,r){var e="function"==typeof t?{next:t,error:n,complete:r}:t,i={closed:!1,unsubscribe:function(){i.closed=!0,u()}},u=this.observable.subscribe((function(t){t.isError()?(e.error&&e.error(t.error),i.unsubscribe()):t.isEnd()?(i.closed=!0,e.complete&&e.complete()):e.next&&e.next(t.value())}))
return i},wt.prototype[y("observable")]=function(){return this},u.Observable.prototype.toESObservable=function(){return new wt(this)},u.Observable.prototype[y("observable")]=u.Observable.prototype.toESObservable,u.fromESObservable=function(t){var n
n=t[y("observable")]?t[y("observable")]():t
var r=new u.Desc(u,"fromESObservable",[n])
return new u.EventStream(r,(function(t){var r=n.subscribe({error:function(){t(new u.Error),t(new u.End)},next:function(n){t(new u.Next(n,!0))},complete:function(){t(new u.End)}})
return r.unsubscribe?function(){r.unsubscribe()}:r}))},null!==r.amdD&&null!=r.amdO?(void 0===(e=function(){return u}.apply(n,[]))||(t.exports=e),null!=this&&(this.Bacon=u)):null!==t&&null!=t.exports?(t.exports=u,u.Bacon=u):this.Bacon=u}.call(this)},45128:function(t){"use strict"
t.exports=function(t,n){if("string"==typeof t)return o(t)
if("number"==typeof t)return u(t,n)
return null},t.exports.format=u,t.exports.parse=o
var n=/\B(?=(\d{3})+(?!\d))/g,r=/(?:\.0*|(\.[^0]+)0+)$/,e={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},i=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i
function u(t,i){if(!Number.isFinite(t))return null
var u=Math.abs(t),o=i&&i.thousandsSeparator||"",s=i&&i.unitSeparator||"",c=i&&void 0!==i.decimalPlaces?i.decimalPlaces:2,a=Boolean(i&&i.fixedDecimals),f=i&&i.unit||""
f&&e[f.toLowerCase()]||(f=u>=e.pb?"PB":u>=e.tb?"TB":u>=e.gb?"GB":u>=e.mb?"MB":u>=e.kb?"KB":"B")
var h=(t/e[f.toLowerCase()]).toFixed(c)
return a||(h=h.replace(r,"$1")),o&&(h=h.split(".").map((function(t,r){return 0===r?t.replace(n,o):t})).join(".")),h+s+f}function o(t){if("number"==typeof t&&!isNaN(t))return t
if("string"!=typeof t)return null
var n,r=i.exec(t),u="b"
return r?(n=parseFloat(r[1]),u=r[4].toLowerCase()):(n=parseInt(t,10),u="b"),isNaN(n)?null:Math.floor(e[u]*n)}},26826:function(t){"use strict"
const n=()=>{const t=new Error("Delay aborted")
return t.name="AbortError",t},r=({clearTimeout:t,setTimeout:r,willResolve:e})=>(i,{value:u,signal:o}={})=>{if(o&&o.aborted)return Promise.reject(n())
let s,c,a
const f=t||clearTimeout,h=()=>{f(s),a(n())},l=new Promise(((t,n)=>{c=()=>{o&&o.removeEventListener("abort",h),e?t(u):n(u)},a=n,s=(r||setTimeout)(c,i)}))
return o&&o.addEventListener("abort",h,{once:!0}),l.clear=()=>{f(s),s=null,c()},l},e=t=>{const n=r({...t,willResolve:!0})
return n.reject=r({...t,willResolve:!1}),n.range=(t,r,e)=>n(((t,n)=>Math.floor(Math.random()*(n-t+1)+t))(t,r),e),n},i=e()
i.createWithTimers=e,t.exports=i,t.exports.default=i}}])

//# sourceMappingURL=289-f61bc37649b970338534.js.map