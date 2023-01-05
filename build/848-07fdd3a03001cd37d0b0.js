/*! For license information please see 848-07fdd3a03001cd37d0b0.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[848],{79487:function(e,t,n){"use strict"
n.d(t,{aU:function(){return gt},VY:function(){return pt},dk:function(){return ht},aV:function(){return ft},fC:function(){return dt},Dx:function(){return mt}})
var r=n(93981),o=n.t(r,2)
function i(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function u(...e){return r.useCallback(i(...e),e)}var a=n(85442)
const c=r.forwardRef(((e,t)=>{const{children:n,...o}=e
return r.Children.toArray(n).some(d)?r.createElement(r.Fragment,null,r.Children.map(n,(e=>d(e)?r.createElement(l,(0,a.Z)({},o,{ref:t}),e.props.children):e))):r.createElement(l,(0,a.Z)({},o,{ref:t}),n)}))
c.displayName="Slot"
const l=r.forwardRef(((e,t)=>{const{children:n,...o}=e
return r.isValidElement(n)?r.cloneElement(n,{...f(o,n.props),ref:i(t,n.ref)}):r.Children.count(n)>1?r.Children.only(null):null}))
l.displayName="SlotClone"
const s=({children:e})=>r.createElement(r.Fragment,null,e)
function d(e){return r.isValidElement(e)&&e.type===s}function f(e,t){const n={...t}
for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?n[r]=(...e)=>{null==i||i(...e),null==o||o(...e)}:"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function p(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}var g=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},m=new WeakMap,h=new WeakMap,v={},y=0,b=function(e){return e&&(e.host||b(e.parentNode))},w=function(e,t,n,r){var o=function(e,t){return t.map((function(t){if(e.contains(t))return t
var n=b(t)
return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)})).filter((function(e){return Boolean(e)}))}(t,Array.isArray(e)?e:[e])
v[n]||(v[n]=new WeakMap)
var i=v[n],u=[],a=new Set,c=new Set(o),l=function(e){e&&!a.has(e)&&(a.add(e),l(e.parentNode))}
o.forEach(l)
var s=function(e){e&&!c.has(e)&&Array.prototype.forEach.call(e.children,(function(e){if(a.has(e))s(e)
else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(m.get(e)||0)+1,l=(i.get(e)||0)+1
m.set(e,c),i.set(e,l),u.push(e),1===c&&o&&h.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}}))}
return s(t),a.clear(),y++,function(){u.forEach((function(e){var t=m.get(e)-1,o=i.get(e)-1
m.set(e,t),i.set(e,o),t||(h.has(e)||e.removeAttribute(r),h.delete(e)),o||e.removeAttribute(n)})),--y||(m=new WeakMap,m=new WeakMap,h=new WeakMap,v={})}},I=function(e,t,n){void 0===n&&(n="data-aria-hidden")
var r=Array.from(Array.isArray(e)?e:[e]),o=t||g(e)
return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),w(r,o,n,"aria-hidden")):function(){return null}},E=n(51721),x="right-scroll-bar-position",C="width-before-scroll-bar"
function k(e,t){return n=t||null,o=function(t){return e.forEach((function(e){return function(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}(e,t)}))},(i=(0,r.useState)((function(){return{value:n,callback:o,facade:{get current(){return i.value},set current(e){var t=i.value
t!==e&&(i.value=e,i.callback(e,t))}}}}))[0]).callback=o,i.facade
var n,o,i}function O(e){return e}function T(e,t){void 0===t&&(t=O)
var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.")
return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r)
return n.push(o),function(){n=n.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n
n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0
var t=[]
if(n.length){var o=n
n=[],o.forEach(e),t=n}var i=function(){var n=t
t=[],n.forEach(e)},u=function(){return Promise.resolve().then(i)}
u(),n={push:function(e){t.push(e),u()},filter:function(e){return t=t.filter(e),n}}}}
return o}var D=function(e){void 0===e&&(e={})
var t=T(null)
return t.options=(0,E.pi)({async:!0,ssr:!1},e),t}(),S=function(){},R=r.forwardRef((function(e,t){var n=r.useRef(null),o=r.useState({onScrollCapture:S,onWheelCapture:S,onTouchMoveCapture:S}),i=o[0],u=o[1],a=e.forwardProps,c=e.children,l=e.className,s=e.removeScrollBar,d=e.enabled,f=e.shards,p=e.sideCar,g=e.noIsolation,m=e.inert,h=e.allowPinchZoom,v=e.as,y=void 0===v?"div":v,b=(0,E._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),w=p,I=k([n,t]),x=(0,E.pi)((0,E.pi)({},b),i)
return r.createElement(r.Fragment,null,d&&r.createElement(w,{sideCar:D,removeScrollBar:s,shards:f,noIsolation:g,inert:m,setCallbacks:u,allowPinchZoom:!!h,lockRef:n}),a?r.cloneElement(r.Children.only(c),(0,E.pi)((0,E.pi)({},x),{ref:I})):r.createElement(y,(0,E.pi)({},x,{className:l,ref:I}),c))}))
R.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},R.classNames={fullWidth:C,zeroRight:x}
var M,N=function(e){var t=e.sideCar,n=(0,E._T)(e,["sideCar"])
if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car")
var o=t.read()
if(!o)throw new Error("Sidecar medium not found")
return r.createElement(o,(0,E.pi)({},n))}
N.isSideCarExport=!0
function A(){if(!document)return null
var e=document.createElement("style")
e.type="text/css"
var t=M||n.nc
return t&&e.setAttribute("nonce",t),e}var L=function(){var e=0,t=null
return{add:function(n){var r,o
0==e&&(t=A())&&(o=n,(r=t).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(t)),e++},remove:function(){!--e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},P=function(){var e,t=(e=L(),function(t,n){r.useEffect((function(){return e.add(t),function(){e.remove()}}),[t&&n])})
return function(e){var n=e.styles,r=e.dynamic
return t(n,r),null}},_={left:0,top:0,right:0,gap:0},F=function(e){return parseInt(e||"",10)||0},B=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return _
var t=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"]
return[F(n),F(r),F(o)]}(e),n=document.documentElement.clientWidth,r=window.innerWidth
return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},V=P(),W=function(e,t,n,r){var o=e.left,i=e.top,u=e.right,a=e.gap
return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(a,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(x," {\n    right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(C," {\n    margin-right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(x," .").concat(x," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(C," .").concat(C," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(a,"px;\n  }\n")},Z=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,i=void 0===o?"margin":o,u=r.useMemo((function(){return B(i)}),[i])
return r.createElement(V,{styles:W(u,!t,i,n?"":"!important")})},K=!1
if("undefined"!=typeof window)try{var $=Object.defineProperty({},"passive",{get:function(){return K=!0,!0}})
window.addEventListener("test",$,$),window.removeEventListener("test",$,$)}catch(e){K=!1}var H=!!K&&{passive:!1},j=function(e,t){var n=window.getComputedStyle(e)
return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&!function(e){return"TEXTAREA"===e.tagName}(e)&&"visible"===n[t])},U=function(e,t){var n=t
do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),Y(e,n)){var r=X(e,n)
if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body)
return!1},Y=function(e,t){return"v"===e?function(e){return j(e,"overflowY")}(t):function(e){return j(e,"overflowX")}(t)},X=function(e,t){return"v"===e?[(n=t).scrollTop,n.scrollHeight,n.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(t)
var n},z=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},q=function(e){return[e.deltaX,e.deltaY]},G=function(e){return e&&"current"in e?e.current:e},J=function(e){return"\n  .block-interactivity-".concat(e," {pointer-events: none;}\n  .allow-interactivity-").concat(e," {pointer-events: all;}\n")},Q=0,ee=[]
var te,ne=(te=function(e){var t=r.useRef([]),n=r.useRef([0,0]),o=r.useRef(),i=r.useState(Q++)[0],u=r.useState((function(){return P()}))[0],a=r.useRef(e)
r.useEffect((function(){a.current=e}),[e]),r.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i))
var t=(0,E.ev)([e.lockRef.current],(e.shards||[]).map(G),!0).filter(Boolean)
return t.forEach((function(e){return e.classList.add("allow-interactivity-".concat(i))})),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach((function(e){return e.classList.remove("allow-interactivity-".concat(i))}))}}}),[e.inert,e.lockRef.current,e.shards])
var c=r.useCallback((function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom
var r,i=z(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-i[0],l="deltaY"in e?e.deltaY:u[1]-i[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v"
if("touches"in e&&"h"===d&&"range"===s.type)return!1
var f=U(d,s)
if(!f)return!0
if(f?r=d:(r="v"===d?"h":"v",f=U(d,s)),!f)return!1
if(!o.current&&"changedTouches"in e&&(c||l)&&(o.current=r),!r)return!0
var p=o.current||r
return function(e,t,n,r,o){var i=function(e,t){return"h"===e&&"rtl"===t?-1:1}(e,window.getComputedStyle(t).direction),u=i*r,a=n.target,c=t.contains(a),l=!1,s=u>0,d=0,f=0
do{var p=X(e,a),g=p[0],m=p[1]-p[2]-i*g;(g||m)&&Y(e,a)&&(d+=m,f+=g),a=a.parentNode}while(!c&&a!==document.body||c&&(t.contains(a)||t===a))
return(s&&(o&&0===d||!o&&u>d)||!s&&(o&&0===f||!o&&-u>f))&&(l=!0),l}(p,t,e,"h"===p?c:l,!0)}),[]),l=r.useCallback((function(e){var n=e
if(ee.length&&ee[ee.length-1]===u){var r="deltaY"in n?q(n):z(n),o=t.current.filter((function(e){return e.name===n.type&&e.target===n.target&&function(e,t){return e[0]===t[0]&&e[1]===t[1]}(e.delta,r)}))[0]
if(o&&o.should)n.cancelable&&n.preventDefault()
else if(!o){var i=(a.current.shards||[]).map(G).filter(Boolean).filter((function(e){return e.contains(n.target)}));(i.length>0?c(n,i[0]):!a.current.noIsolation)&&n.cancelable&&n.preventDefault()}}}),[]),s=r.useCallback((function(e,n,r,o){var i={name:e,delta:n,target:r,should:o}
t.current.push(i),setTimeout((function(){t.current=t.current.filter((function(e){return e!==i}))}),1)}),[]),d=r.useCallback((function(e){n.current=z(e),o.current=void 0}),[]),f=r.useCallback((function(t){s(t.type,q(t),t.target,c(t,e.lockRef.current))}),[]),p=r.useCallback((function(t){s(t.type,z(t),t.target,c(t,e.lockRef.current))}),[])
r.useEffect((function(){return ee.push(u),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,H),document.addEventListener("touchmove",l,H),document.addEventListener("touchstart",d,H),function(){ee=ee.filter((function(e){return e!==u})),document.removeEventListener("wheel",l,H),document.removeEventListener("touchmove",l,H),document.removeEventListener("touchstart",d,H)}}),[])
var g=e.removeScrollBar,m=e.inert
return r.createElement(r.Fragment,null,m?r.createElement(u,{styles:J(i)}):null,g?r.createElement(Z,{gapMode:"margin"}):null)},D.useMedium(te),N),re=r.forwardRef((function(e,t){return r.createElement(R,(0,E.pi)({},e,{ref:t,sideCar:ne}))}))
re.classNames=R.classNames
var oe=re
let ie=0
function ue(){r.useEffect((()=>{var e,t
const n=document.querySelectorAll("[data-radix-focus-guard]")
return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:ae()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:ae()),ie++,()=>{1===ie&&document.querySelectorAll("[data-radix-focus-guard]").forEach((e=>e.remove())),ie--}}),[])}function ae(){const e=document.createElement("span")
return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const ce=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>({...e,[t]:r.forwardRef(((e,n)=>{const{asChild:o,...i}=e,u=o?c:t
return r.useEffect((()=>{window[Symbol.for("radix-ui")]=!0}),[]),r.createElement(u,(0,a.Z)({},i,{ref:n}))}))})),{}),le=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{},se=e=>{const{present:t,children:n}=e,o=function(e){const[t,n]=r.useState(),o=r.useRef({}),i=r.useRef(e),u=r.useRef("none"),a=e?"mounted":"unmounted",[c,l]=function(e,t){return r.useReducer(((e,n)=>{const r=t[e][n]
return null!=r?r:e}),e)}(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}})
return r.useEffect((()=>{const e=de(o.current)
u.current="mounted"===c?e:"none"}),[c]),le((()=>{const t=o.current,n=i.current
if(n!==e){const r=u.current,o=de(t)
if(e)l("MOUNT")
else if("none"===o||"none"===(null==t?void 0:t.display))l("UNMOUNT")
else{l(n&&r!==o?"ANIMATION_OUT":"UNMOUNT")}i.current=e}}),[e,l]),le((()=>{if(t){const e=e=>{const n=de(o.current).includes(e.animationName)
e.target===t&&n&&l("ANIMATION_END")},n=e=>{e.target===t&&(u.current=de(o.current))}
return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}l("ANIMATION_END")}),[t,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:r.useCallback((e=>{e&&(o.current=getComputedStyle(e)),n(e)}),[])}}(t),i="function"==typeof n?n({present:o.isPresent}):r.Children.only(n),a=u(o.ref,i.ref)
return"function"==typeof n||o.isPresent?r.cloneElement(i,{ref:a}):null}
function de(e){return(null==e?void 0:e.animationName)||"none"}function fe(e){const t=r.useRef(e)
return r.useEffect((()=>{t.current=e})),r.useMemo((()=>(...e)=>{var n
return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}se.displayName="Presence"
const pe={bubbles:!1,cancelable:!0},ge=r.forwardRef(((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:i,onUnmountAutoFocus:c,...l}=e,[s,d]=r.useState(null),f=fe(i),p=fe(c),g=r.useRef(null),m=u(t,(e=>d(e))),h=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current
r.useEffect((()=>{if(o){function e(e){if(h.paused||!s)return
const t=e.target
s.contains(t)?g.current=t:ye(g.current,{select:!0})}function t(e){!h.paused&&s&&(s.contains(e.relatedTarget)||ye(g.current,{select:!0}))}return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}}),[o,s,h.paused]),r.useEffect((()=>{if(s){be.add(h)
const e=document.activeElement
if(!s.contains(e)){const t=new Event("focusScope.autoFocusOnMount",pe)
s.addEventListener("focusScope.autoFocusOnMount",f),s.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){const n=document.activeElement
for(const r of e)if(ye(r,{select:t}),document.activeElement!==n)return}(me(s).filter((e=>"A"!==e.tagName)),{select:!0}),document.activeElement===e&&ye(s))}return()=>{s.removeEventListener("focusScope.autoFocusOnMount",f),setTimeout((()=>{const t=new Event("focusScope.autoFocusOnUnmount",pe)
s.addEventListener("focusScope.autoFocusOnUnmount",p),s.dispatchEvent(t),t.defaultPrevented||ye(null!=e?e:document.body,{select:!0}),s.removeEventListener("focusScope.autoFocusOnUnmount",p),be.remove(h)}),0)}}}),[s,f,p,h])
const v=r.useCallback((e=>{if(!n&&!o)return
if(h.paused)return
const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement
if(t&&r){const t=e.currentTarget,[o,i]=function(e){const t=me(e)
return[he(t,e),he(t.reverse(),e)]}(t)
o&&i?e.shiftKey||r!==i?e.shiftKey&&r===o&&(e.preventDefault(),n&&ye(i,{select:!0})):(e.preventDefault(),n&&ye(o,{select:!0})):r===t&&e.preventDefault()}}),[n,o,h.paused])
return r.createElement(ce.div,(0,a.Z)({tabIndex:-1},l,{ref:m,onKeyDown:v}))}))
function me(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type
return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}})
for(;n.nextNode();)t.push(n.currentNode)
return t}function he(e,t){for(const n of e)if(!ve(n,{upTo:t}))return n}function ve(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0
for(;e;){if(void 0!==t&&e===t)return!1
if("none"===getComputedStyle(e).display)return!0
e=e.parentElement}return!1}function ye(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement
e.focus({preventScroll:!0}),e!==n&&function(e){return e instanceof HTMLInputElement&&"select"in e}(e)&&t&&e.select()}}const be=function(){let e=[]
return{add(t){const n=e[0]
t!==n&&(null==n||n.pause()),e=we(e,t),e.unshift(t)},remove(t){var n
e=we(e,t),null===(n=e[0])||void 0===n||n.resume()}}}()
function we(e,t){const n=[...e],r=n.indexOf(t)
return-1!==r&&n.splice(r,1),n}let Ie,Ee=0
const xe=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ce=r.forwardRef(((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:c,onInteractOutside:l,onDismiss:s,...d}=e,f=r.useContext(xe),[g,m]=r.useState(null),[,h]=r.useState({}),v=u(t,(e=>m(e))),y=Array.from(f.layers),[b]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),w=y.indexOf(b),I=g?y.indexOf(g):-1,E=f.layersWithOutsidePointerEventsDisabled.size>0,x=I>=w,C=function(e){const t=fe((e=>{const t=e.target,n=[...f.branches].some((e=>e.contains(t)))
x&&!n&&(null==i||i(e),null==l||l(e),e.defaultPrevented||null==s||s())})),n=r.useRef(!1)
return r.useEffect((()=>{const e=e=>{e.target&&!n.current&&Oe("dismissableLayer.pointerDownOutside",t,{originalEvent:e}),n.current=!1},r=window.setTimeout((()=>{document.addEventListener("pointerdown",e)}),0)
return()=>{window.clearTimeout(r),document.removeEventListener("pointerdown",e)}}),[t]),{onPointerDownCapture:()=>n.current=!0}}(),k=function(e){const t=fe((e=>{const t=e.target;[...f.branches].some((e=>e.contains(t)))||(null==c||c(e),null==l||l(e),e.defaultPrevented||null==s||s())})),n=r.useRef(!1)
return r.useEffect((()=>{const e=e=>{e.target&&!n.current&&Oe("dismissableLayer.focusOutside",t,{originalEvent:e})}
return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)}),[t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}()
return function(e){const t=fe(e)
r.useEffect((()=>{const e=e=>{"Escape"===e.key&&t(e)}
return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[t])}((e=>{I===f.layers.size-1&&(null==o||o(e),e.defaultPrevented||null==s||s())})),function({disabled:e}){const t=r.useRef(!1)
le((()=>{if(e){function n(){Ee--,0===Ee&&(document.body.style.pointerEvents=Ie)}function r(e){t.current="mouse"!==e.pointerType}return 0===Ee&&(Ie=document.body.style.pointerEvents),document.body.style.pointerEvents="none",Ee++,document.addEventListener("pointerup",r),()=>{t.current?document.addEventListener("click",n,{once:!0}):n(),document.removeEventListener("pointerup",r)}}}),[e])}({disabled:n}),r.useEffect((()=>{g&&(n&&f.layersWithOutsidePointerEventsDisabled.add(g),f.layers.add(g),ke())}),[g,n,f]),r.useEffect((()=>()=>{g&&(f.layers.delete(g),f.layersWithOutsidePointerEventsDisabled.delete(g),ke())}),[g,f]),r.useEffect((()=>{const e=()=>h({})
return document.addEventListener("dismissableLayer.update",e),()=>document.removeEventListener("dismissableLayer.update",e)}),[]),r.createElement(ce.div,(0,a.Z)({},d,{ref:v,style:{pointerEvents:E?x?"auto":"none":void 0,...e.style},onFocusCapture:p(e.onFocusCapture,k.onFocusCapture),onBlurCapture:p(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:p(e.onPointerDownCapture,C.onPointerDownCapture)}))}))
function ke(){const e=new Event("dismissableLayer.update")
document.dispatchEvent(e)}function Oe(e,t,n){const r=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n})
return t&&r.addEventListener(e,t,{once:!0}),!r.dispatchEvent(o)}const Te=o["useId".toString()]||(()=>{})
let De=0
function Se(e){const[t,n]=r.useState(Te())
return le((()=>{e||n((e=>null!=e?e:String(De++)))}),[e]),e||(t?`radix-${t}`:"")}function Re(e,t=[]){let n=[]
const o=()=>{const t=n.map((e=>r.createContext(e)))
return function(n){const o=(null==n?void 0:n[e])||t
return r.useMemo((()=>({[`__scope${e}`]:{...n,[e]:o}})),[n,o])}}
return o.scopeName=e,[function(t,o){const i=r.createContext(o),u=n.length
function a(t){const{scope:n,children:o,...a}=t,c=(null==n?void 0:n[e][u])||i,l=r.useMemo((()=>a),Object.values(a))
return r.createElement(c.Provider,{value:l},o)}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){const c=(null==a?void 0:a[e][u])||i,l=r.useContext(c)
if(l)return l
if(void 0!==o)return o
throw new Error(`\`${n}\` must be used within \`${t}\``)}]},Me(o,...t)]}function Me(...e){const t=e[0]
if(1===e.length)return t
const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})))
return function(e){const o=n.reduce(((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]})),{})
return r.useMemo((()=>({[`__scope${t.scopeName}`]:o})),[o])}}
return n.scopeName=t.scopeName,n}const[Ne,Ae]=Re("Dialog"),[Le,Pe]=Ne("Dialog"),_e=r.forwardRef(((e,t)=>{const{forceMount:n,...o}=e,i=Pe("DialogOverlay",e.__scopeDialog)
return i.modal?r.createElement(se,{present:n||i.open},r.createElement(Fe,(0,a.Z)({},o,{ref:t}))):null})),Fe=r.forwardRef(((e,t)=>{const{__scopeDialog:n,...o}=e,i=Pe("DialogOverlay",n)
return r.createElement(oe,{as:c,allowPinchZoom:i.allowPinchZoom,shards:[i.contentRef]},r.createElement(ce.div,(0,a.Z)({"data-state":je(i.open)},o,{ref:t,style:{pointerEvents:"auto",...o.style}})))})),Be=r.forwardRef(((e,t)=>{const{forceMount:n,...o}=e,i=Pe("DialogContent",e.__scopeDialog)
return r.createElement(se,{present:n||i.open},i.modal?r.createElement(Ve,(0,a.Z)({},o,{ref:t})):r.createElement(We,(0,a.Z)({},o,{ref:t})))})),Ve=r.forwardRef(((e,t)=>{const n=Pe("DialogContent",e.__scopeDialog),o=r.useRef(null),i=u(t,n.contentRef,o)
return r.useEffect((()=>{const e=o.current
if(e)return I(e)}),[]),r.createElement(Ze,(0,a.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,(e=>{var t
e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()})),onPointerDownOutside:p(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()})),onFocusOutside:p(e.onFocusOutside,(e=>e.preventDefault()))}))})),We=r.forwardRef(((e,t)=>{const n=Pe("DialogContent",e.__scopeDialog),o=r.useRef(!1)
return r.createElement(Ze,(0,a.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i
null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1},onInteractOutside:t=>{var r,i
null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0)
const u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault()}}))})),Ze=r.forwardRef(((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:c,...l}=e,s=Pe("DialogContent",n),d=u(t,r.useRef(null))
return ue(),r.createElement(r.Fragment,null,r.createElement(ge,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:c},r.createElement(Ce,(0,a.Z)({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":je(s.open)},l,{ref:d,onDismiss:()=>s.onOpenChange(!1)}))),!1)})),Ke=r.forwardRef(((e,t)=>{const{__scopeDialog:n,...o}=e,i=Pe("DialogTitle",n)
return r.createElement(ce.h2,(0,a.Z)({id:i.titleId},o,{ref:t}))})),$e=r.forwardRef(((e,t)=>{const{__scopeDialog:n,...o}=e,i=Pe("DialogDescription",n)
return r.createElement(ce.p,(0,a.Z)({id:i.descriptionId},o,{ref:t}))})),He=r.forwardRef(((e,t)=>{const{__scopeDialog:n,...o}=e,i=Pe("DialogClose",n)
return r.createElement(ce.button,(0,a.Z)({type:"button"},o,{ref:t,onClick:p(e.onClick,(()=>i.onOpenChange(!1)))}))}))
function je(e){return e?"open":"closed"}const[Ue,Ye]=function(e,t){const n=r.createContext(t)
function o(e){const{children:t,...o}=e,i=r.useMemo((()=>o),Object.values(o))
return r.createElement(n.Provider,{value:i},t)}return o.displayName=e+"Provider",[o,function(o){const i=r.useContext(n)
if(i)return i
if(void 0!==t)return t
throw new Error(`\`${o}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:"DialogContent",titleName:"DialogTitle",docsSlug:"dialog"}),Xe=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:i,onOpenChange:u,modal:a=!0,allowPinchZoom:c}=e,l=r.useRef(null),s=r.useRef(null),[d=!1,f]=function({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[o,i]=function({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,i=r.useRef(o),u=fe(t)
return r.useEffect((()=>{i.current!==o&&(u(o),i.current=o)}),[o,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:o,c=fe(n)
return[a,r.useCallback((t=>{if(u){const n="function"==typeof t?t(e):t
n!==e&&c(n)}else i(t)}),[u,e,i,c])]}({prop:o,defaultProp:i,onChange:u})
return r.createElement(Le,{scope:t,triggerRef:l,contentRef:s,contentId:Se(),titleId:Se(),descriptionId:Se(),open:d,onOpenChange:f,onOpenToggle:r.useCallback((()=>f((e=>!e))),[f]),modal:a,allowPinchZoom:c},n)},ze=_e,qe=Be,Ge=Ke,Je=$e,Qe=He,[et,tt]=Re("AlertDialog",[Ae]),nt=Ae(),rt=r.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...o}=e,i=nt(n)
return r.createElement(ze,(0,a.Z)({},i,o,{ref:t}))})),[ot,it]=et("AlertDialogContent"),ut=r.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,children:o,...i}=e,c=nt(n),l=u(t,r.useRef(null)),d=r.useRef(null)
return r.createElement(Ue,{contentName:"AlertDialogContent",titleName:at,docsSlug:"alert-dialog"},r.createElement(ot,{scope:n,cancelRef:d},r.createElement(qe,(0,a.Z)({role:"alertdialog"},c,i,{ref:l,onOpenAutoFocus:p(i.onOpenAutoFocus,(e=>{var t
e.preventDefault(),null===(t=d.current)||void 0===t||t.focus({preventScroll:!0})})),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),r.createElement(s,null,o),!1)))})),at="AlertDialogTitle",ct=r.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...o}=e,i=nt(n)
return r.createElement(Ge,(0,a.Z)({},i,o,{ref:t}))})),lt=r.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...o}=e,i=nt(n)
return r.createElement(Je,(0,a.Z)({},i,o,{ref:t}))})),st=r.forwardRef(((e,t)=>{const{__scopeAlertDialog:n,...o}=e,i=nt(n)
return r.createElement(Qe,(0,a.Z)({},i,o,{ref:t}))})),dt=e=>{const{__scopeAlertDialog:t,...n}=e,o=nt(t)
return r.createElement(Xe,(0,a.Z)({},o,n,{modal:!0}))},ft=rt,pt=ut,gt=st,mt=ct,ht=lt},26689:function(e,t,n){"use strict"
n.d(t,{Kb:function(){return Q}})
var r=n(87094),o=n.n(r),i=n(93981)
n(56576)
function u(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function a(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function c(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null)
return a(n.overflowY,t)||a(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null
try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e)
return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function l(e,t,n,r,o,i,u,a){return i<e&&u>t||i>e&&u<t?0:i<=e&&a<=n||u>=t&&a>=n?i-e-r:u>t&&a<n||i<e&&a>n?u-t+o:0}var s=n(51721)
let d=0
function f(){}function p(e,t){if(!e)return
const n=function(e,t){var n=window,r=t.scrollMode,o=t.block,i=t.inline,a=t.boundary,s=t.skipOverflowHiddenElements,d="function"==typeof a?a:function(e){return e!==a}
if(!u(e))throw new TypeError("Invalid target")
for(var f,p,g=document.scrollingElement||document.documentElement,m=[],h=e;u(h)&&d(h);){if((h=null==(p=(f=h).parentElement)?f.getRootNode().host||null:p)===g){m.push(h)
break}null!=h&&h===document.body&&c(h)&&!c(document.documentElement)||null!=h&&c(h,s)&&m.push(h)}for(var v=n.visualViewport?n.visualViewport.width:innerWidth,y=n.visualViewport?n.visualViewport.height:innerHeight,b=window.scrollX||pageXOffset,w=window.scrollY||pageYOffset,I=e.getBoundingClientRect(),E=I.height,x=I.width,C=I.top,k=I.right,O=I.bottom,T=I.left,D="start"===o||"nearest"===o?C:"end"===o?O:C+E/2,S="center"===i?T+x/2:"end"===i?k:T,R=[],M=0;M<m.length;M++){var N=m[M],A=N.getBoundingClientRect(),L=A.height,P=A.width,_=A.top,F=A.right,B=A.bottom,V=A.left
if("if-needed"===r&&C>=0&&T>=0&&O<=y&&k<=v&&C>=_&&O<=B&&T>=V&&k<=F)return R
var W=getComputedStyle(N),Z=parseInt(W.borderLeftWidth,10),K=parseInt(W.borderTopWidth,10),$=parseInt(W.borderRightWidth,10),H=parseInt(W.borderBottomWidth,10),j=0,U=0,Y="offsetWidth"in N?N.offsetWidth-N.clientWidth-Z-$:0,X="offsetHeight"in N?N.offsetHeight-N.clientHeight-K-H:0,z="offsetWidth"in N?0===N.offsetWidth?0:P/N.offsetWidth:0,q="offsetHeight"in N?0===N.offsetHeight?0:L/N.offsetHeight:0
if(g===N)j="start"===o?D:"end"===o?D-y:"nearest"===o?l(w,w+y,y,K,H,w+D,w+D+E,E):D-y/2,U="start"===i?S:"center"===i?S-v/2:"end"===i?S-v:l(b,b+v,v,Z,$,b+S,b+S+x,x),j=Math.max(0,j+w),U=Math.max(0,U+b)
else{j="start"===o?D-_-K:"end"===o?D-B+H+X:"nearest"===o?l(_,B,L,K,H+X,D,D+E,E):D-(_+L/2)+X/2,U="start"===i?S-V-Z:"center"===i?S-(V+P/2)+Y/2:"end"===i?S-F+$+Y:l(V,F,P,Z,$+Y,S,S+x,x)
var G=N.scrollLeft,J=N.scrollTop
D+=J-(j=Math.max(0,Math.min(J+j/q,N.scrollHeight-L/q+X))),S+=G-(U=Math.max(0,Math.min(G+U/z,N.scrollWidth-P/z+Y)))}R.push({el:N,top:j,left:U})}return R}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"})
n.forEach((e=>{let{el:t,top:n,left:r}=e
t.scrollTop=n,t.scrollLeft=r}))}function g(e,t,n){return e===t||t instanceof n.Node&&e.contains&&e.contains(t)}function m(e,t){let n
function r(){n&&clearTimeout(n)}function o(){for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u]
r(),n=setTimeout((()=>{n=null,e(...i)}),t)}return o.cancel=r,o}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o]
return t.some((t=>(t&&t(e,...r),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault)))}}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return e=>{t.forEach((t=>{"function"==typeof t?t(e):t&&(t.current=e)}))}}function y(){return String(d++)}function b(e){let{isOpen:t,resultCount:n,previousResultCount:r}=e
return t?n?n!==r?`${n} result${1===n?" is":"s are"} available, use up and down arrow keys to navigate. Press Enter key to select.`:"":"No results are available.":""}function w(e,t){return Object.keys(e).reduce(((n,r)=>(n[r]=I(t,r)?t[r]:e[r],n)),{})}function I(e,t){return void 0!==e[t]}function E(e){const{key:t,keyCode:n}=e
return n>=37&&n<=40&&0!==t.indexOf("Arrow")?`Arrow${t}`:t}function x(e,t,n,r,o){if(void 0===o&&(o=!0),0===n)return-1
const i=n-1;("number"!=typeof t||t<0||t>=n)&&(t=e>0?-1:i+1)
let u=t+e
u<0?u=o?i:0:u>i&&(u=o?0:i)
const a=C(e,u,n,r,o)
return-1===a?t>=n?-1:t:a}function C(e,t,n,r,o){const i=r(t)
if(!i||!i.hasAttribute("disabled"))return t
if(e>0){for(let e=t+1;e<n;e++)if(!r(e).hasAttribute("disabled"))return e}else for(let e=t-1;e>=0;e--)if(!r(e).hasAttribute("disabled"))return e
return o?e>0?C(1,0,n,r,!1):C(-1,n-1,n,r,!1):-1}function k(e,t,n,r){return void 0===r&&(r=!0),t.some((t=>t&&(g(t,e,n)||r&&g(t,n.document.activeElement,n))))}const O=m((e=>{D(e).textContent=""}),500)
function T(e,t){const n=D(t)
e&&(n.textContent=e,O(t))}function D(e){void 0===e&&(e=document)
let t=e.getElementById("a11y-status-message")
return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}const S={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""}
function R(e,t,n){const{props:r,type:o}=e,i={}
Object.keys(t).forEach((r=>{!function(e,t,n,r){const{props:o,type:i}=t,u=`on${P(e)}Change`
o[u]&&void 0!==r[e]&&r[e]!==n[e]&&o[u]({type:i,...r})}(r,e,t,n),n[r]!==t[r]&&(i[r]=n[r])})),r.onStateChange&&Object.keys(i).length&&r.onStateChange({type:o,...i})}const M=m(((e,t)=>{T(e(),t)}),200),N="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect
function A(e){let{id:t=`downshift-${y()}`,labelId:n,menuId:r,getItemId:o,toggleButtonId:u,inputId:a}=e
return(0,i.useRef)({labelId:n||`${t}-label`,menuId:r||`${t}-menu`,getItemId:o||(e=>`${t}-item-${e}`),toggleButtonId:u||`${t}-toggle-button`,inputId:a||`${t}-input`}).current}function L(e,t,n){return void 0!==e?e:0===n.length?-1:n.indexOf(t)}function P(e){return`${e.slice(0,1).toUpperCase()}${e.slice(1)}`}function _(e){const t=(0,i.useRef)(e)
return t.current=e,t}function F(e,t,n){const r=(0,i.useRef)(),o=(0,i.useRef)(),u=(0,i.useCallback)(((t,n)=>{o.current=n,t=w(t,n.props)
const r=e(t,n)
return n.props.stateReducer(t,{...n,changes:r})}),[e]),[a,c]=(0,i.useReducer)(u,t),l=_(n),s=(0,i.useCallback)((e=>c({props:l.current,...e})),[l]),d=o.current
return(0,i.useEffect)((()=>{d&&r.current&&r.current!==a&&R(d,w(r.current,d.props),a),r.current=a}),[a,n,d]),[a,s]}const B={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){const{selectedItem:t,itemToString:n}=e
return t?`${n(t)} has been selected.`:""},scrollIntoView:p,circularNavigation:!1,environment:"undefined"==typeof window?{}:window}
function V(e,t,n){void 0===n&&(n=S)
const r=e[`default${P(t)}`]
return void 0!==r?r:n[t]}function W(e,t,n){void 0===n&&(n=S)
const r=e[t]
if(void 0!==r)return r
const o=e[`initial${P(t)}`]
return void 0!==o?o:V(e,t,n)}function Z(e){const t=W(e,"selectedItem"),n=W(e,"isOpen"),r=W(e,"highlightedIndex"),o=W(e,"inputValue")
return{highlightedIndex:r<0&&t&&n?e.items.indexOf(t):r,isOpen:n,selectedItem:t,inputValue:o}}function K(e,t,n,r){const{items:o,initialHighlightedIndex:i,defaultHighlightedIndex:u}=e,{selectedItem:a,highlightedIndex:c}=t
return 0===o.length?-1:void 0!==i&&c===i?i:void 0!==u?u:a?0===n?o.indexOf(a):x(n,o.indexOf(a),o.length,r,!1):0===n?-1:n<0?o.length-1:0}function $(e,t,n,r){const o=(0,i.useRef)({isMouseDown:!1,isTouchMove:!1})
return(0,i.useEffect)((()=>{const i=()=>{o.current.isMouseDown=!0},u=i=>{o.current.isMouseDown=!1,e&&!k(i.target,t.map((e=>e.current)),n)&&r()},a=()=>{o.current.isTouchMove=!1},c=()=>{o.current.isTouchMove=!0},l=i=>{!e||o.current.isTouchMove||k(i.target,t.map((e=>e.current)),n,!1)||r()}
return n.addEventListener("mousedown",i),n.addEventListener("mouseup",u),n.addEventListener("touchstart",a),n.addEventListener("touchmove",c),n.addEventListener("touchend",l),function(){n.removeEventListener("mousedown",i),n.removeEventListener("mouseup",u),n.removeEventListener("touchstart",a),n.removeEventListener("touchmove",c),n.removeEventListener("touchend",l)}}),[e,n]),o}let H=()=>f
function j(e,t,n){let{isInitialMount:r,highlightedIndex:o,items:u,environment:a,...c}=n;(0,i.useEffect)((()=>{r||M((()=>e({highlightedIndex:o,highlightedItem:u[o],resultCount:u.length,...c})),a.document)}),t)}function U(e){let{highlightedIndex:t,isOpen:n,itemRefs:r,getItemNodeFromIndex:o,menuElement:u,scrollIntoView:a}=e
const c=(0,i.useRef)(!0)
return N((()=>{t<0||!n||!Object.keys(r.current).length||(!1===c.current?c.current=!0:a(o(t),u))}),[t]),c}let Y=f
function X(e,t,n){const{type:r,props:o}=t
let i
switch(r){case n.ItemMouseMove:i={highlightedIndex:t.disabled?-1:t.index}
break
case n.MenuMouseLeave:i={highlightedIndex:-1}
break
case n.ToggleButtonClick:case n.FunctionToggleMenu:i={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:K(o,e,0)}
break
case n.FunctionOpenMenu:i={isOpen:!0,highlightedIndex:K(o,e,0)}
break
case n.FunctionCloseMenu:i={isOpen:!1}
break
case n.FunctionSetHighlightedIndex:i={highlightedIndex:t.highlightedIndex}
break
case n.FunctionSetInputValue:i={inputValue:t.inputValue}
break
case n.FunctionReset:i={highlightedIndex:V(o,"highlightedIndex"),isOpen:V(o,"isOpen"),selectedItem:V(o,"selectedItem"),inputValue:V(o,"inputValue")}
break
default:throw new Error("Reducer called without proper action type.")}return{...e,...i}}o().array.isRequired,o().func,o().func,o().func,o().bool,o().number,o().number,o().number,o().bool,o().bool,o().bool,o().any,o().any,o().any,o().string,o().string,o().string,o().func,o().string,o().func,o().func,o().func,o().func,o().func,o().shape({addEventListener:o().func,removeEventListener:o().func,document:o().shape({getElementById:o().func,activeElement:o().any,body:o().any})});(0,s.pi)((0,s.pi)({},B),{getA11yStatusMessage:function(e){var t=e.isOpen,n=e.resultCount,r=e.previousResultCount
return t?n?n!==r?"".concat(n," result").concat(1===n?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}})
var z=Object.freeze({__proto__:null,InputKeyDownArrowDown:0,InputKeyDownArrowUp:1,InputKeyDownEscape:2,InputKeyDownHome:3,InputKeyDownEnd:4,InputKeyDownEnter:5,InputChange:6,InputBlur:7,MenuMouseLeave:8,ItemMouseMove:9,ItemClick:10,ToggleButtonClick:11,FunctionToggleMenu:12,FunctionOpenMenu:13,FunctionCloseMenu:14,FunctionSetHighlightedIndex:15,FunctionSelectItem:16,FunctionSetInputValue:17,FunctionReset:18,ControlledPropUpdatedSelectedItem:19})
o().array.isRequired,o().func,o().func,o().func,o().bool,o().number,o().number,o().number,o().bool,o().bool,o().bool,o().any,o().any,o().any,o().string,o().string,o().string,o().string,o().string,o().string,o().func,o().string,o().string,o().func,o().func,o().func,o().func,o().func,o().func,o().shape({addEventListener:o().func,removeEventListener:o().func,document:o().shape({getElementById:o().func,activeElement:o().any,body:o().any})})
let q=f
const G={...B,getA11yStatusMessage:b,circularNavigation:!0}
function J(e,t){const{type:n,props:r,shiftKey:o}=t
let i
switch(n){case 10:i={isOpen:V(r,"isOpen"),highlightedIndex:V(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])}
break
case 0:i=e.isOpen?{highlightedIndex:x(o?5:1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:{highlightedIndex:K(r,e,1,t.getItemNodeFromIndex),isOpen:r.items.length>=0}
break
case 1:i=e.isOpen?{highlightedIndex:x(o?-5:-1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:{highlightedIndex:K(r,e,-1,t.getItemNodeFromIndex),isOpen:r.items.length>=0}
break
case 5:i={...e.isOpen&&e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex],isOpen:V(r,"isOpen"),highlightedIndex:V(r,"highlightedIndex"),inputValue:r.itemToString(r.items[e.highlightedIndex])}}
break
case 2:i={isOpen:!1,highlightedIndex:-1,...!e.isOpen&&{selectedItem:null,inputValue:""}}
break
case 3:i={highlightedIndex:C(1,0,r.items.length,t.getItemNodeFromIndex,!1)}
break
case 4:i={highlightedIndex:C(-1,r.items.length-1,r.items.length,t.getItemNodeFromIndex,!1)}
break
case 7:i={isOpen:!1,highlightedIndex:-1,...e.highlightedIndex>=0&&t.selectItem&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])}}
break
case 6:i={isOpen:!0,highlightedIndex:V(r,"highlightedIndex"),inputValue:t.inputValue}
break
case 16:i={selectedItem:t.selectedItem,inputValue:r.itemToString(t.selectedItem)}
break
case 19:i={inputValue:t.inputValue}
break
default:return X(e,t,z)}return{...e,...i}}function Q(e){void 0===e&&(e={}),q(e,Q)
const t={...G,...e},{initialIsOpen:n,defaultIsOpen:r,items:o,scrollIntoView:u,environment:a,getA11yStatusMessage:c,getA11ySelectionMessage:l,itemToString:s}=t,d=function(e){const t=Z(e),{selectedItem:n}=t
let{inputValue:r}=t
return""===r&&n&&void 0===e.defaultInputValue&&void 0===e.initialInputValue&&void 0===e.inputValue&&(r=e.itemToString(n)),{...t,inputValue:r}}(t),[f,p]=function(e,t,n){const r=(0,i.useRef)(),[o,u]=F(e,t,n)
return(0,i.useEffect)((()=>{I(n,"selectedItem")&&(r.current!==n.selectedItem&&u({type:19,inputValue:n.itemToString(n.selectedItem)}),r.current=o.selectedItem===r.current?n.selectedItem:o.selectedItem)})),[w(o,n),u]}(J,d,t),{isOpen:g,highlightedIndex:m,selectedItem:y,inputValue:b}=f,x=(0,i.useRef)(null),C=(0,i.useRef)({}),k=(0,i.useRef)(null),O=(0,i.useRef)(null),T=(0,i.useRef)(null),D=(0,i.useRef)(!0),S=A(t),R=(0,i.useRef)(),M=_({state:f,props:t}),N=(0,i.useCallback)((e=>C.current[S.getItemId(e)]),[S])
j(c,[g,m,b,o],{isInitialMount:D.current,previousResultCount:R.current,items:o,environment:a,itemToString:s,...f}),j(l,[y],{isInitialMount:D.current,previousResultCount:R.current,items:o,environment:a,itemToString:s,...f})
const P=U({menuElement:x.current,highlightedIndex:m,isOpen:g,itemRefs:C,scrollIntoView:u,getItemNodeFromIndex:N})
Y({isInitialMount:D.current,props:t,state:f}),(0,i.useEffect)((()=>{(n||r||g)&&k.current&&k.current.focus()}),[]),(0,i.useEffect)((()=>{D.current||(R.current=o.length)}))
const B=$(g,[T,x,O],a,(()=>{p({type:7,selectItem:!1})})),V=H();(0,i.useEffect)((()=>{D.current=!1}),[]),(0,i.useEffect)((()=>{g||(C.current={})}),[g])
const W=(0,i.useMemo)((()=>({ArrowDown(e){e.preventDefault(),p({type:0,shiftKey:e.shiftKey,getItemNodeFromIndex:N})},ArrowUp(e){e.preventDefault(),p({type:1,shiftKey:e.shiftKey,getItemNodeFromIndex:N})},Home(e){M.current.state.isOpen&&(e.preventDefault(),p({type:3,getItemNodeFromIndex:N}))},End(e){M.current.state.isOpen&&(e.preventDefault(),p({type:4,getItemNodeFromIndex:N}))},Escape(e){const t=M.current.state;(t.isOpen||t.inputValue||t.selectedItem||t.highlightedIndex>-1)&&(e.preventDefault(),p({type:2}))},Enter(e){const t=M.current.state
!t.isOpen||t.highlightedIndex<0||229===e.which||(e.preventDefault(),p({type:5,getItemNodeFromIndex:N}))}})),[p,M,N]),K=(0,i.useCallback)((e=>({id:S.labelId,htmlFor:S.inputId,...e})),[S]),X=(0,i.useCallback)((function(e,t){let{onMouseLeave:n,refKey:r="ref",ref:o,...i}=void 0===e?{}:e,{suppressRefError:u=!1}=void 0===t?{}:t
return V("getMenuProps",u,r,x),{[r]:v(o,(e=>{x.current=e})),id:S.menuId,role:"listbox","aria-labelledby":S.labelId,onMouseLeave:h(n,(()=>{p({type:8})})),...i}}),[p,V,S]),z=(0,i.useCallback)((function(e){let{item:t,index:n,refKey:r="ref",ref:o,onMouseMove:i,onMouseDown:u,onClick:a,onPress:c,disabled:l,...s}=void 0===e?{}:e
const{props:d,state:f}=M.current,g=L(n,t,d.items)
if(g<0)throw new Error("Pass either item or item index in getItemProps!")
const m=a
return{[r]:v(o,(e=>{e&&(C.current[S.getItemId(g)]=e)})),disabled:l,role:"option","aria-selected":`${g===f.highlightedIndex}`,id:S.getItemId(g),...!l&&{onClick:h(m,(()=>{p({type:10,index:n})}))},onMouseMove:h(i,(()=>{n!==f.highlightedIndex&&(P.current=!1,p({type:9,index:n,disabled:l}))})),onMouseDown:h(u,(e=>e.preventDefault())),...s}}),[p,M,P,S]),ee=(0,i.useCallback)((function(e){let{onClick:t,onPress:n,refKey:r="ref",ref:o,...i}=void 0===e?{}:e
return{[r]:v(o,(e=>{O.current=e})),id:S.toggleButtonId,tabIndex:-1,...!i.disabled&&{onClick:h(t,(()=>{p({type:11}),!M.current.state.isOpen&&k.current&&k.current.focus()}))},...i}}),[p,M,S]),te=(0,i.useCallback)((function(e,t){let{onKeyDown:n,onChange:r,onInput:o,onBlur:i,onChangeText:u,refKey:a="ref",ref:c,...l}=void 0===e?{}:e,{suppressRefError:s=!1}=void 0===t?{}:t
V("getInputProps",s,a,k)
const d=M.current.state,f=e=>{const t=E(e)
t&&W[t]&&W[t](e)},g=e=>{p({type:6,inputValue:e.target.value})},m=()=>{d.isOpen&&!B.current.isMouseDown&&p({type:7,selectItem:!0})}
let y={}
return l.disabled||(y={onChange:h(r,o,g),onKeyDown:h(n,f),onBlur:h(i,m)}),{[a]:v(c,(e=>{k.current=e})),id:S.inputId,"aria-autocomplete":"list","aria-controls":S.menuId,...d.isOpen&&d.highlightedIndex>-1&&{"aria-activedescendant":S.getItemId(d.highlightedIndex)},"aria-labelledby":S.labelId,autoComplete:"off",value:d.inputValue,...y,...l}}),[p,W,M,B,V,S]),ne=(0,i.useCallback)((function(e,t){let{refKey:n="ref",ref:r,...o}=void 0===e?{}:e,{suppressRefError:i=!1}=void 0===t?{}:t
return V("getComboboxProps",i,n,T),{[n]:v(r,(e=>{T.current=e})),role:"combobox","aria-haspopup":"listbox","aria-owns":S.menuId,"aria-expanded":M.current.state.isOpen,...o}}),[M,V,S]),re=(0,i.useCallback)((()=>{p({type:12})}),[p]),oe=(0,i.useCallback)((()=>{p({type:14})}),[p]),ie=(0,i.useCallback)((()=>{p({type:13})}),[p]),ue=(0,i.useCallback)((e=>{p({type:15,highlightedIndex:e})}),[p]),ae=(0,i.useCallback)((e=>{p({type:16,selectedItem:e})}),[p])
return{getItemProps:z,getLabelProps:K,getMenuProps:X,getInputProps:te,getComboboxProps:ne,getToggleButtonProps:ee,toggleMenu:re,openMenu:ie,closeMenu:oe,setHighlightedIndex:ue,setInputValue:(0,i.useCallback)((e=>{p({type:17,inputValue:e})}),[p]),selectItem:ae,reset:(0,i.useCallback)((()=>{p({type:18})}),[p]),highlightedIndex:m,isOpen:g,selectedItem:y,inputValue:b}}Q.stateChangeTypes=z
o().array,o().array,o().array,o().func,o().func,o().func,o().number,o().number,o().number,o().func,o().func,o().string,o().string,o().shape({addEventListener:o().func,removeEventListener:o().func,document:o().shape({getElementById:o().func,activeElement:o().any,body:o().any})})},61490:function(e,t){var n,r,o
r=[],void 0===(o="function"==typeof(n=function(){function e(p){var g={single:function(e,t,n){return e?(s(e)||(e=g.getPreparedSearch(e)),t?(s(t)||(t=g.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!p||void 0===p.allowTypo||p.allowTypo)?g.algorithm:g.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if(!e)return o
var r=(e=g.prepareSearch(e))[0],i=n&&n.threshold||p&&p.threshold||-9007199254740991,u=n&&n.limit||p&&p.limit||9007199254740991,a=(n&&void 0!==n.allowTypo?n.allowTypo:!p||void 0===p.allowTypo||p.allowTypo)?g.algorithm:g.algorithmNoTypo,d=0,m=0,h=t.length
if(n&&n.keys)for(var v=n.scoreFn||c,y=n.keys,b=y.length,w=h-1;w>=0;--w){for(var I=t[w],E=new Array(b),x=b-1;x>=0;--x)(O=l(I,k=y[x]))?(s(O)||(O=g.getPrepared(O)),E[x]=a(e,O,r)):E[x]=null
E.obj=I
var C=v(E)
null!==C&&(C<i||(E.score=C,d<u?(f.add(E),++d):(++m,C>f.peek().score&&f.replaceTop(E))))}else if(n&&n.key){var k=n.key
for(w=h-1;w>=0;--w)(O=l(I=t[w],k))&&(s(O)||(O=g.getPrepared(O)),null!==(T=a(e,O,r))&&(T.score<i||(T={target:T.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:T.score,indexes:T.indexes,obj:I},d<u?(f.add(T),++d):(++m,T.score>f.peek().score&&f.replaceTop(T)))))}else for(w=h-1;w>=0;--w){var O,T;(O=t[w])&&(s(O)||(O=g.getPrepared(O)),null!==(T=a(e,O,r))&&(T.score<i||(d<u?(f.add(T),++d):(++m,T.score>f.peek().score&&f.replaceTop(T)))))}if(0===d)return o
var D=new Array(d)
for(w=d-1;w>=0;--w)D[w]=f.poll()
return D.total=d+m,D},goAsync:function(e,n,r){var i=!1,u=new Promise((function(u,a){if(!e)return u(o)
var f=(e=g.prepareSearch(e))[0],m=d(),h=n.length-1,v=r&&r.threshold||p&&p.threshold||-9007199254740991,y=r&&r.limit||p&&p.limit||9007199254740991,b=(r&&void 0!==r.allowTypo?r.allowTypo:!p||void 0===p.allowTypo||p.allowTypo)?g.algorithm:g.algorithmNoTypo,w=0,I=0
function E(){if(i)return a("canceled")
var d=Date.now()
if(r&&r.keys)for(var p=r.scoreFn||c,x=r.keys,C=x.length;h>=0;--h){for(var k=n[h],O=new Array(C),T=C-1;T>=0;--T)(R=l(k,S=x[T]))?(s(R)||(R=g.getPrepared(R)),O[T]=b(e,R,f)):O[T]=null
O.obj=k
var D=p(O)
if(null!==D&&!(D<v)&&(O.score=D,w<y?(m.add(O),++w):(++I,D>m.peek().score&&m.replaceTop(O)),h%1e3==0&&Date.now()-d>=10))return void(t?setImmediate(E):setTimeout(E))}else if(r&&r.key){for(var S=r.key;h>=0;--h)if((R=l(k=n[h],S))&&(s(R)||(R=g.getPrepared(R)),null!==(M=b(e,R,f))&&!(M.score<v)&&(M={target:M.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:M.score,indexes:M.indexes,obj:k},w<y?(m.add(M),++w):(++I,M.score>m.peek().score&&m.replaceTop(M)),h%1e3==0&&Date.now()-d>=10)))return void(t?setImmediate(E):setTimeout(E))}else for(;h>=0;--h){var R,M
if((R=n[h])&&(s(R)||(R=g.getPrepared(R)),null!==(M=b(e,R,f))&&!(M.score<v)&&(w<y?(m.add(M),++w):(++I,M.score>m.peek().score&&m.replaceTop(M)),h%1e3==0&&Date.now()-d>=10)))return void(t?setImmediate(E):setTimeout(E))}if(0===w)return u(o)
for(var N=new Array(w),A=w-1;A>=0;--A)N[A]=m.poll()
N.total=w+I,u(N)}t?setImmediate(E):E()}))
return u.cancel=function(){i=!0},u},highlight:function(e,t,n){if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",o=0,i=!1,u=e.target,a=u.length,c=e.indexes,l=0;l<a;++l){var s=u[l]
if(c[o]===l){if(i||(i=!0,r+=t),++o===c.length){r+=s+n+u.substr(l+1)
break}}else i&&(i=!1,r+=n)
r+=s}return r},prepare:function(e){if(e)return{target:e,_targetLowerCodes:g.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:g.prepareLowerCodes(e),_nextBeginningIndexes:g.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return g.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return g.prepare(e)
var t=n.get(e)
return void 0!==t||(t=g.prepare(e),n.set(e,t)),t},getPreparedSearch:function(e){if(e.length>999)return g.prepareSearch(e)
var t=r.get(e)
return void 0!==t||(t=g.prepareSearch(e),r.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,a=r.length,c=0,l=0,s=0,d=0;;){if(n===r[l]){if(i[d++]=l,++c===o)break
n=e[0===s?c:s===c?c+1:s===c-1?c-1:c]}if(++l>=a)for(;;){if(c<=1)return null
if(0===s){if(n===e[--c])continue
s=c}else{if(1===s)return null
if((n=e[1+(c=--s)])===e[c])continue}l=i[(d=c)-1]+1
break}}c=0
var f=0,p=!1,m=0,h=t._nextBeginningIndexes
null===h&&(h=t._nextBeginningIndexes=g.prepareNextBeginningIndexes(t.target))
var v=l=0===i[0]?0:h[i[0]-1]
if(l!==a)for(;;)if(l>=a){if(c<=0){if(++f>o-2)break
if(e[f]===e[f+1])continue
l=v
continue}--c,l=h[u[--m]]}else if(e[0===f?c:f===c?c+1:f===c-1?c-1:c]===r[l]){if(u[m++]=l,++c===o){p=!0
break}++l}else l=h[l]
if(p)var y=u,b=m
else y=i,b=d
for(var w=0,I=-1,E=0;E<o;++E)I!==(l=y[E])-1&&(w-=l),I=l
for(p?0!==f&&(w+=-20):(w*=1e3,0!==s&&(w+=-20)),w-=a-o,t.score=w,t.indexes=new Array(b),E=b-1;E>=0;--E)t.indexes[E]=y[E]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,a=r.length,c=0,l=0,s=0;;){if(n===r[l]){if(i[s++]=l,++c===o)break
n=e[c]}if(++l>=a)return null}c=0
var d=!1,f=0,p=t._nextBeginningIndexes
if(null===p&&(p=t._nextBeginningIndexes=g.prepareNextBeginningIndexes(t.target)),(l=0===i[0]?0:p[i[0]-1])!==a)for(;;)if(l>=a){if(c<=0)break;--c,l=p[u[--f]]}else if(e[c]===r[l]){if(u[f++]=l,++c===o){d=!0
break}++l}else l=p[l]
if(d)var m=u,h=f
else m=i,h=s
for(var v=0,y=-1,b=0;b<o;++b)y!==(l=m[b])-1&&(v-=l),y=l
for(d||(v*=1e3),v-=a-o,t.score=v,t.indexes=new Array(h),b=h-1;b>=0;--b)t.indexes[b]=m[b]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),o=0;o<t;++o)n[o]=r.charCodeAt(o)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,o=!1,i=!1,u=0;u<t;++u){var a=e.charCodeAt(u),c=a>=65&&a<=90,l=c||a>=97&&a<=122||a>=48&&a<=57,s=c&&!o||!i||!l
o=c,i=l,s&&(n[r++]=u)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=g.prepareBeginningIndexes(e),r=[],o=n[0],i=0,u=0;u<t;++u)o>u?r[u]=o:(o=n[++i],r[u]=void 0===o?t:o)
return r},cleanup:a,new:e}
return g}var t="undefined"==typeof window,n=new Map,r=new Map,o=[]
o.total=0
var i=[],u=[]
function a(){n.clear(),r.clear(),i=[],u=[]}function c(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var o=r.score
o>t&&(t=o)}}return-9007199254740991===t?null:t}function l(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var o=r.length,i=-1;e&&++i<o;)e=e[r[i]]
return e}function s(e){return"object"==typeof e}var d=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],o=1;o<t;){var i=o+1
n=o,i<t&&e[i].score<e[o].score&&(n=i),e[n-1>>1]=e[n],o=1+(n<<1)}for(var u=n-1>>1;n>0&&r.score<e[u].score;u=(n=u)-1>>1)e[n]=e[u]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var o=r-1>>1;r>0&&n.score<e[o].score;o=(r=o)-1>>1)e[r]=e[o]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},f=d()
return e()})?n.apply(t,r):n)||(e.exports=o)},94597:function(e,t){"use strict"
var n=60103,r=60106,o=60107,i=60108,u=60114,a=60109,c=60110,l=60112,s=60113,d=60120,f=60115,p=60116,g=60121,m=60122,h=60117,v=60129,y=60131
if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for
n=b("react.element"),r=b("react.portal"),o=b("react.fragment"),i=b("react.strict_mode"),u=b("react.profiler"),a=b("react.provider"),c=b("react.context"),l=b("react.forward_ref"),s=b("react.suspense"),d=b("react.suspense_list"),f=b("react.memo"),p=b("react.lazy"),g=b("react.block"),m=b("react.server.block"),h=b("react.fundamental"),v=b("react.debug_trace_mode"),y=b("react.legacy_hidden")}function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof
switch(t){case n:switch(e=e.type){case o:case u:case i:case s:case d:return e
default:switch(e=e&&e.$$typeof){case c:case l:case p:case f:case a:return e
default:return t}}case r:return t}}}},56576:function(e,t,n){"use strict"
n(94597)}}])

//# sourceMappingURL=848-07fdd3a03001cd37d0b0.js.map