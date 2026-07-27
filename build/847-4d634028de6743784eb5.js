/*! For license information please see 847-4d634028de6743784eb5.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[847],{50974:(e,t,n)=>{"use strict"
n.d(t,{aU:()=>wt,VY:()=>bt,dk:()=>It,aV:()=>yt,fC:()=>vt,Dx:()=>Et})
var r=n(8600),o=n.t(r,2)
function i(...e){return t=>e.forEach(e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t))}function u(...e){return r.useCallback(i(...e),e)}var a=n(13376)
const c=r.forwardRef((e,t)=>{const{children:n,...o}=e
return r.Children.toArray(n).some(d)?r.createElement(r.Fragment,null,r.Children.map(n,e=>d(e)?r.createElement(l,(0,a.Z)({},o,{ref:t}),e.props.children):e)):r.createElement(l,(0,a.Z)({},o,{ref:t}),n)})
c.displayName="Slot"
const l=r.forwardRef((e,t)=>{const{children:n,...o}=e
return r.isValidElement(n)?r.cloneElement(n,{...f(o,n.props),ref:i(t,n.ref)}):r.Children.count(n)>1?r.Children.only(null):null})
l.displayName="SlotClone"
const s=({children:e})=>r.createElement(r.Fragment,null,e)
function d(e){return r.isValidElement(e)&&e.type===s}function f(e,t){const n={...t}
for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?n[r]=(...e)=>{null==i||i(...e),null==o||o(...e)}:"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function p(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}var g=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},h=new WeakMap,m=new WeakMap,v={},y=0,b=function(e){return e&&(e.host||b(e.parentNode))},w=function(e,t,n,r){var o=function(e,t){return t.map(function(t){if(e.contains(t))return t
var n=b(t)
return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(e){return Boolean(e)})}(t,Array.isArray(e)?e:[e])
v[n]||(v[n]=new WeakMap)
var i=v[n],u=[],a=new Set,c=new Set(o),l=function(e){e&&!a.has(e)&&(a.add(e),l(e.parentNode))}
o.forEach(l)
var s=function(e){e&&!c.has(e)&&Array.prototype.forEach.call(e.children,function(e){if(a.has(e))s(e)
else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,c=(h.get(e)||0)+1,l=(i.get(e)||0)+1
h.set(e,c),i.set(e,l),u.push(e),1===c&&o&&m.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})}
return s(t),a.clear(),y++,function(){u.forEach(function(e){var t=h.get(e)-1,o=i.get(e)-1
h.set(e,t),i.set(e,o),t||(m.has(e)||e.removeAttribute(r),m.delete(e)),o||e.removeAttribute(n)}),--y||(h=new WeakMap,h=new WeakMap,m=new WeakMap,v={})}},E=function(e,t,n){void 0===n&&(n="data-aria-hidden")
var r=Array.from(Array.isArray(e)?e:[e]),o=t||g(e)
return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),w(r,o,n,"aria-hidden")):function(){return null}},I=n(11534),x="right-scroll-bar-position",C="width-before-scroll-bar"
function k(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var O="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,T=new WeakMap
function D(e,t){var n,o,i,u=(n=t||null,o=function(t){return e.forEach(function(e){return k(e,t)})},(i=(0,r.useState)(function(){return{value:n,callback:o,facade:{get current(){return i.value},set current(e){var t=i.value
t!==e&&(i.value=e,i.callback(e,t))}}}})[0]).callback=o,i.facade)
return O(function(){var t=T.get(u)
if(t){var n=new Set(t),r=new Set(e),o=u.current
n.forEach(function(e){r.has(e)||k(e,null)}),r.forEach(function(e){n.has(e)||k(e,o)})}T.set(u,e)},[e]),u}function M(e){return e}function R(e,t){void 0===t&&(t=M)
var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.")
return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r)
return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n
n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0
var t=[]
if(n.length){var o=n
n=[],o.forEach(e),t=n}var i=function(){var n=t
t=[],n.forEach(e)},u=function(){return Promise.resolve().then(i)}
u(),n={push:function(e){t.push(e),u()},filter:function(e){return t=t.filter(e),n}}}}
return o}var S=function(e){void 0===e&&(e={})
var t=R(null)
return t.options=(0,I.pi)({async:!0,ssr:!1},e),t}(),N=function(){},A=r.forwardRef(function(e,t){var n=r.useRef(null),o=r.useState({onScrollCapture:N,onWheelCapture:N,onTouchMoveCapture:N}),i=o[0],u=o[1],a=e.forwardProps,c=e.children,l=e.className,s=e.removeScrollBar,d=e.enabled,f=e.shards,p=e.sideCar,g=e.noRelative,h=e.noIsolation,m=e.inert,v=e.allowPinchZoom,y=e.as,b=void 0===y?"div":y,w=e.gapMode,E=(0,I._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=p,C=D([n,t]),k=(0,I.pi)((0,I.pi)({},E),i)
return r.createElement(r.Fragment,null,d&&r.createElement(x,{sideCar:S,removeScrollBar:s,shards:f,noRelative:g,noIsolation:h,inert:m,setCallbacks:u,allowPinchZoom:!!v,lockRef:n,gapMode:w}),a?r.cloneElement(r.Children.only(c),(0,I.pi)((0,I.pi)({},k),{ref:C})):r.createElement(b,(0,I.pi)({},k,{className:l,ref:C}),c))})
A.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},A.classNames={fullWidth:C,zeroRight:x}
var L,P=function(e){var t=e.sideCar,n=(0,I._T)(e,["sideCar"])
if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car")
var o=t.read()
if(!o)throw new Error("Sidecar medium not found")
return r.createElement(o,(0,I.pi)({},n))}
P.isSideCarExport=!0
function _(){if(!document)return null
var e=document.createElement("style")
e.type="text/css"
var t=L||n.nc
return t&&e.setAttribute("nonce",t),e}var F=function(){var e=0,t=null
return{add:function(n){var r,o
0==e&&(t=_())&&(o=n,(r=t).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(t)),e++},remove:function(){! --e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},B=function(){var e,t=(e=F(),function(t,n){r.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])})
return function(e){var n=e.styles,r=e.dynamic
return t(n,r),null}},V={left:0,top:0,right:0,gap:0},W=function(e){return parseInt(e||"",10)||0},K=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return V
var t=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"]
return[W(n),W(r),W(o)]}(e),n=document.documentElement.clientWidth,r=window.innerWidth
return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Z=B(),$="data-scroll-locked",H=function(e,t,n,r){var o=e.left,i=e.top,u=e.right,a=e.gap
return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(a,"px ").concat(r,";\n  }\n  body[").concat($,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(x," {\n    right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(C," {\n    margin-right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(x," .").concat(x," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(C," .").concat(C," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat($,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(a,"px;\n  }\n")},U=function(){var e=parseInt(document.body.getAttribute($)||"0",10)
return isFinite(e)?e:0},j=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,i=void 0===o?"margin":o
r.useEffect(function(){return document.body.setAttribute($,(U()+1).toString()),function(){var e=U()-1
e<=0?document.body.removeAttribute($):document.body.setAttribute($,e.toString())}},[])
var u=r.useMemo(function(){return K(i)},[i])
return r.createElement(Z,{styles:H(u,!t,i,n?"":"!important")})},Y=!1
if("undefined"!=typeof window)try{var X=Object.defineProperty({},"passive",{get:function(){return Y=!0,!0}})
window.addEventListener("test",X,X),window.removeEventListener("test",X,X)}catch(e){Y=!1}var z=!!Y&&{passive:!1},q=function(e,t){if(!(e instanceof Element))return!1
var n=window.getComputedStyle(e)
return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&!function(e){return"TEXTAREA"===e.tagName}(e)&&"visible"===n[t])},G=function(e,t){var n=t.ownerDocument,r=t
do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),J(e,r)){var o=Q(e,r)
if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body)
return!1},J=function(e,t){return"v"===e?function(e){return q(e,"overflowY")}(t):function(e){return q(e,"overflowX")}(t)},Q=function(e,t){return"v"===e?[(n=t).scrollTop,n.scrollHeight,n.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(t)
var n},ee=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},te=function(e){return[e.deltaX,e.deltaY]},ne=function(e){return e&&"current"in e?e.current:e},re=function(e){return"\n  .block-interactivity-".concat(e," {pointer-events: none;}\n  .allow-interactivity-").concat(e," {pointer-events: all;}\n")},oe=0,ie=[]
function ue(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode
return t}const ae=(ce=function(e){var t=r.useRef([]),n=r.useRef([0,0]),o=r.useRef(),i=r.useState(oe++)[0],u=r.useState(B)[0],a=r.useRef(e)
r.useEffect(function(){a.current=e},[e]),r.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i))
var t=(0,I.ev)([e.lockRef.current],(e.shards||[]).map(ne),!0).filter(Boolean)
return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards])
var c=r.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!a.current.allowPinchZoom
var r,i=ee(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-i[0],l="deltaY"in e?e.deltaY:u[1]-i[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v"
if("touches"in e&&"h"===d&&"range"===s.type)return!1
var f=window.getSelection(),p=f&&f.anchorNode
if(p&&(p===s||p.contains(s)))return!1
var g=G(d,s)
if(!g)return!0
if(g?r=d:(r="v"===d?"h":"v",g=G(d,s)),!g)return!1
if(!o.current&&"changedTouches"in e&&(c||l)&&(o.current=r),!r)return!0
var h=o.current||r
return function(e,t,n,r,o){var i=function(e,t){return"h"===e&&"rtl"===t?-1:1}(e,window.getComputedStyle(t).direction),u=i*r,a=n.target,c=t.contains(a),l=!1,s=u>0,d=0,f=0
do{if(!a)break
var p=Q(e,a),g=p[0],h=p[1]-p[2]-i*g;(g||h)&&J(e,a)&&(d+=h,f+=g)
var m=a.parentNode
a=m&&m.nodeType===Node.DOCUMENT_FRAGMENT_NODE?m.host:m}while(!c&&a!==document.body||c&&(t.contains(a)||t===a))
return(s&&(o&&Math.abs(d)<1||!o&&u>d)||!s&&(o&&Math.abs(f)<1||!o&&-u>f))&&(l=!0),l}(h,t,e,"h"===h?c:l,!0)},[]),l=r.useCallback(function(e){var n=e
if(ie.length&&ie[ie.length-1]===u){var r="deltaY"in n?te(n):ee(n),o=t.current.filter(function(e){return e.name===n.type&&(e.target===n.target||n.target===e.shadowParent)&&function(e,t){return e[0]===t[0]&&e[1]===t[1]}(e.delta,r)})[0]
if(o&&o.should)n.cancelable&&n.preventDefault()
else if(!o){var i=(a.current.shards||[]).map(ne).filter(Boolean).filter(function(e){return e.contains(n.target)});(i.length>0?c(n,i[0]):!a.current.noIsolation)&&n.cancelable&&n.preventDefault()}}},[]),s=r.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:ue(r)}
t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),d=r.useCallback(function(e){n.current=ee(e),o.current=void 0},[]),f=r.useCallback(function(t){s(t.type,te(t),t.target,c(t,e.lockRef.current))},[]),p=r.useCallback(function(t){s(t.type,ee(t),t.target,c(t,e.lockRef.current))},[])
r.useEffect(function(){return ie.push(u),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,z),document.addEventListener("touchmove",l,z),document.addEventListener("touchstart",d,z),function(){ie=ie.filter(function(e){return e!==u}),document.removeEventListener("wheel",l,z),document.removeEventListener("touchmove",l,z),document.removeEventListener("touchstart",d,z)}},[])
var g=e.removeScrollBar,h=e.inert
return r.createElement(r.Fragment,null,h?r.createElement(u,{styles:re(i)}):null,g?r.createElement(j,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},S.useMedium(ce),P)
var ce,le=r.forwardRef(function(e,t){return r.createElement(A,(0,I.pi)({},e,{ref:t,sideCar:ae}))})
le.classNames=A.classNames
const se=le
let de=0
function fe(){r.useEffect(()=>{var e,t
const n=document.querySelectorAll("[data-radix-focus-guard]")
return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:pe()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:pe()),de++,()=>{1===de&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),de--}},[])}function pe(){const e=document.createElement("span")
return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const ge=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>({...e,[t]:r.forwardRef((e,n)=>{const{asChild:o,...i}=e,u=o?c:t
return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(u,(0,a.Z)({},i,{ref:n}))})}),{}),he=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{},me=e=>{const{present:t,children:n}=e,o=function(e){const[t,n]=r.useState(),o=r.useRef({}),i=r.useRef(e),u=r.useRef("none"),a=e?"mounted":"unmounted",[c,l]=function(e,t){return r.useReducer((e,n)=>{const r=t[e][n]
return null!=r?r:e},e)}(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}})
return r.useEffect(()=>{const e=ve(o.current)
u.current="mounted"===c?e:"none"},[c]),he(()=>{const t=o.current,n=i.current
if(n!==e){const r=u.current,o=ve(t)
if(e)l("MOUNT")
else if("none"===o||"none"===(null==t?void 0:t.display))l("UNMOUNT")
else{l(n&&r!==o?"ANIMATION_OUT":"UNMOUNT")}i.current=e}},[e,l]),he(()=>{if(t){const e=e=>{const n=ve(o.current).includes(e.animationName)
e.target===t&&n&&l("ANIMATION_END")},n=e=>{e.target===t&&(u.current=ve(o.current))}
return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:r.useCallback(e=>{e&&(o.current=getComputedStyle(e)),n(e)},[])}}(t),i="function"==typeof n?n({present:o.isPresent}):r.Children.only(n),a=u(o.ref,i.ref)
return"function"==typeof n||o.isPresent?r.cloneElement(i,{ref:a}):null}
function ve(e){return(null==e?void 0:e.animationName)||"none"}function ye(e){const t=r.useRef(e)
return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>{var n
return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}me.displayName="Presence"
const be={bubbles:!1,cancelable:!0},we=r.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:i,onUnmountAutoFocus:c,...l}=e,[s,d]=r.useState(null),f=ye(i),p=ye(c),g=r.useRef(null),h=u(t,e=>d(e)),m=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current
r.useEffect(()=>{if(o){function e(e){if(m.paused||!s)return
const t=e.target
s.contains(t)?g.current=t:Ce(g.current,{select:!0})}function t(e){!m.paused&&s&&(s.contains(e.relatedTarget)||Ce(g.current,{select:!0}))}return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}},[o,s,m.paused]),r.useEffect(()=>{if(s){ke.add(m)
const e=document.activeElement
if(!s.contains(e)){const t=new Event("focusScope.autoFocusOnMount",be)
s.addEventListener("focusScope.autoFocusOnMount",f),s.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){const n=document.activeElement
for(const r of e)if(Ce(r,{select:t}),document.activeElement!==n)return}(Ee(s).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&Ce(s))}return()=>{s.removeEventListener("focusScope.autoFocusOnMount",f),setTimeout(()=>{const t=new Event("focusScope.autoFocusOnUnmount",be)
s.addEventListener("focusScope.autoFocusOnUnmount",p),s.dispatchEvent(t),t.defaultPrevented||Ce(null!=e?e:document.body,{select:!0}),s.removeEventListener("focusScope.autoFocusOnUnmount",p),ke.remove(m)},0)}}},[s,f,p,m])
const v=r.useCallback(e=>{if(!n&&!o)return
if(m.paused)return
const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement
if(t&&r){const t=e.currentTarget,[o,i]=function(e){const t=Ee(e)
return[Ie(t,e),Ie(t.reverse(),e)]}(t)
o&&i?e.shiftKey||r!==i?e.shiftKey&&r===o&&(e.preventDefault(),n&&Ce(i,{select:!0})):(e.preventDefault(),n&&Ce(o,{select:!0})):r===t&&e.preventDefault()}},[n,o,m.paused])
return r.createElement(ge.div,(0,a.Z)({tabIndex:-1},l,{ref:h,onKeyDown:v}))})
function Ee(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type
return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}})
for(;n.nextNode();)t.push(n.currentNode)
return t}function Ie(e,t){for(const n of e)if(!xe(n,{upTo:t}))return n}function xe(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0
for(;e;){if(void 0!==t&&e===t)return!1
if("none"===getComputedStyle(e).display)return!0
e=e.parentElement}return!1}function Ce(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement
e.focus({preventScroll:!0}),e!==n&&function(e){return e instanceof HTMLInputElement&&"select"in e}(e)&&t&&e.select()}}const ke=function(){let e=[]
return{add(t){const n=e[0]
t!==n&&(null==n||n.pause()),e=Oe(e,t),e.unshift(t)},remove(t){var n
e=Oe(e,t),null===(n=e[0])||void 0===n||n.resume()}}}()
function Oe(e,t){const n=[...e],r=n.indexOf(t)
return-1!==r&&n.splice(r,1),n}let Te,De=0
const Me=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Re=r.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:c,onInteractOutside:l,onDismiss:s,...d}=e,f=r.useContext(Me),[g,h]=r.useState(null),[,m]=r.useState({}),v=u(t,e=>h(e)),y=Array.from(f.layers),[b]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),w=y.indexOf(b),E=g?y.indexOf(g):-1,I=f.layersWithOutsidePointerEventsDisabled.size>0,x=E>=w,C=function(){const e=ye(e=>{const t=e.target,n=[...f.branches].some(e=>e.contains(t))
x&&!n&&(null==i||i(e),null==l||l(e),e.defaultPrevented||null==s||s())}),t=r.useRef(!1)
return r.useEffect(()=>{const n=n=>{n.target&&!t.current&&Ne("dismissableLayer.pointerDownOutside",e,{originalEvent:n}),t.current=!1},r=window.setTimeout(()=>{document.addEventListener("pointerdown",n)},0)
return()=>{window.clearTimeout(r),document.removeEventListener("pointerdown",n)}},[e]),{onPointerDownCapture:()=>t.current=!0}}(),k=function(){const e=ye(e=>{const t=e.target;[...f.branches].some(e=>e.contains(t))||(null==c||c(e),null==l||l(e),e.defaultPrevented||null==s||s())}),t=r.useRef(!1)
return r.useEffect(()=>{const n=n=>{n.target&&!t.current&&Ne("dismissableLayer.focusOutside",e,{originalEvent:n})}
return document.addEventListener("focusin",n),()=>document.removeEventListener("focusin",n)},[e]),{onFocusCapture:()=>t.current=!0,onBlurCapture:()=>t.current=!1}}()
return function(e){const t=ye(e)
r.useEffect(()=>{const e=e=>{"Escape"===e.key&&t(e)}
return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t])}(e=>{E===f.layers.size-1&&(null==o||o(e),e.defaultPrevented||null==s||s())}),function({disabled:e}){const t=r.useRef(!1)
he(()=>{if(e){function n(){De--,0===De&&(document.body.style.pointerEvents=Te)}function r(e){t.current="mouse"!==e.pointerType}return 0===De&&(Te=document.body.style.pointerEvents),document.body.style.pointerEvents="none",De++,document.addEventListener("pointerup",r),()=>{t.current?document.addEventListener("click",n,{once:!0}):n(),document.removeEventListener("pointerup",r)}}},[e])}({disabled:n}),r.useEffect(()=>{g&&(n&&f.layersWithOutsidePointerEventsDisabled.add(g),f.layers.add(g),Se())},[g,n,f]),r.useEffect(()=>()=>{g&&(f.layers.delete(g),f.layersWithOutsidePointerEventsDisabled.delete(g),Se())},[g,f]),r.useEffect(()=>{const e=()=>m({})
return document.addEventListener("dismissableLayer.update",e),()=>document.removeEventListener("dismissableLayer.update",e)},[]),r.createElement(ge.div,(0,a.Z)({},d,{ref:v,style:{pointerEvents:I?x?"auto":"none":void 0,...e.style},onFocusCapture:p(e.onFocusCapture,k.onFocusCapture),onBlurCapture:p(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:p(e.onPointerDownCapture,C.onPointerDownCapture)}))})
function Se(){const e=new Event("dismissableLayer.update")
document.dispatchEvent(e)}function Ne(e,t,n){const r=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n})
return t&&r.addEventListener(e,t,{once:!0}),!r.dispatchEvent(o)}const Ae=o["useId".toString()]||(()=>{})
let Le=0
function Pe(e){const[t,n]=r.useState(Ae())
return he(()=>{e||n(e=>null!=e?e:String(Le++))},[e]),e||(t?`radix-${t}`:"")}function _e(e,t=[]){let n=[]
const o=()=>{const t=n.map(e=>r.createContext(e))
return function(n){const o=(null==n?void 0:n[e])||t
return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}}
return o.scopeName=e,[function(t,o){const i=r.createContext(o),u=n.length
function a(t){const{scope:n,children:o,...a}=t,c=(null==n?void 0:n[e][u])||i,l=r.useMemo(()=>a,Object.values(a))
return r.createElement(c.Provider,{value:l},o)}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){const c=(null==a?void 0:a[e][u])||i,l=r.useContext(c)
if(l)return l
if(void 0!==o)return o
throw new Error(`\`${n}\` must be used within \`${t}\``)}]},Fe(o,...t)]}function Fe(...e){const t=e[0]
if(1===e.length)return t
const n=()=>{const n=e.map(e=>({useScope:e(),scopeName:e.scopeName}))
return function(e){const o=n.reduce((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]}),{})
return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}}
return n.scopeName=t.scopeName,n}const[Be,Ve]=_e("Dialog"),[We,Ke]=Be("Dialog"),Ze=r.forwardRef((e,t)=>{const{forceMount:n,...o}=e,i=Ke("DialogOverlay",e.__scopeDialog)
return i.modal?r.createElement(me,{present:n||i.open},r.createElement($e,(0,a.Z)({},o,{ref:t}))):null}),$e=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,i=Ke("DialogOverlay",n)
return r.createElement(se,{as:c,allowPinchZoom:i.allowPinchZoom,shards:[i.contentRef]},r.createElement(ge.div,(0,a.Z)({"data-state":Ge(i.open)},o,{ref:t,style:{pointerEvents:"auto",...o.style}})))}),He=r.forwardRef((e,t)=>{const{forceMount:n,...o}=e,i=Ke("DialogContent",e.__scopeDialog)
return r.createElement(me,{present:n||i.open},i.modal?r.createElement(Ue,(0,a.Z)({},o,{ref:t})):r.createElement(je,(0,a.Z)({},o,{ref:t})))}),Ue=r.forwardRef((e,t)=>{const n=Ke("DialogContent",e.__scopeDialog),o=r.useRef(null),i=u(t,n.contentRef,o)
return r.useEffect(()=>{const e=o.current
if(e)return E(e)},[]),r.createElement(Ye,(0,a.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,e=>{var t
e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:p(e.onFocusOutside,e=>e.preventDefault())}))}),je=r.forwardRef((e,t)=>{const n=Ke("DialogContent",e.__scopeDialog),o=r.useRef(!1)
return r.createElement(Ye,(0,a.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i
null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1},onInteractOutside:t=>{var r,i
null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0)
const u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault()}}))}),Ye=r.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:c,...l}=e,s=Ke("DialogContent",n),d=u(t,r.useRef(null))
return fe(),r.createElement(r.Fragment,null,r.createElement(we,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:c},r.createElement(Re,(0,a.Z)({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":Ge(s.open)},l,{ref:d,onDismiss:()=>s.onOpenChange(!1)}))),!1)}),Xe=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,i=Ke("DialogTitle",n)
return r.createElement(ge.h2,(0,a.Z)({id:i.titleId},o,{ref:t}))}),ze=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,i=Ke("DialogDescription",n)
return r.createElement(ge.p,(0,a.Z)({id:i.descriptionId},o,{ref:t}))}),qe=r.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,i=Ke("DialogClose",n)
return r.createElement(ge.button,(0,a.Z)({type:"button"},o,{ref:t,onClick:p(e.onClick,()=>i.onOpenChange(!1))}))})
function Ge(e){return e?"open":"closed"}const[Je,Qe]=function(e,t){const n=r.createContext(t)
function o(e){const{children:t,...o}=e,i=r.useMemo(()=>o,Object.values(o))
return r.createElement(n.Provider,{value:i},t)}return o.displayName=e+"Provider",[o,function(o){const i=r.useContext(n)
if(i)return i
if(void 0!==t)return t
throw new Error(`\`${o}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:"DialogContent",titleName:"DialogTitle",docsSlug:"dialog"}),et=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:i,onOpenChange:u,modal:a=!0,allowPinchZoom:c}=e,l=r.useRef(null),s=r.useRef(null),[d=!1,f]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,i]=function({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,i=r.useRef(o),u=ye(t)
return r.useEffect(()=>{i.current!==o&&(u(o),i.current=o)},[o,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:o,c=ye(n)
return[a,r.useCallback(t=>{if(u){const n="function"==typeof t?t(e):t
n!==e&&c(n)}else i(t)},[u,e,i,c])]}({prop:o,defaultProp:i,onChange:u})
return r.createElement(We,{scope:t,triggerRef:l,contentRef:s,contentId:Pe(),titleId:Pe(),descriptionId:Pe(),open:d,onOpenChange:f,onOpenToggle:r.useCallback(()=>f(e=>!e),[f]),modal:a,allowPinchZoom:c},n)},tt=Ze,nt=He,rt=Xe,ot=ze,it=qe,[ut,at]=_e("AlertDialog",[Ve]),ct=Ve(),lt=r.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,i=ct(n)
return r.createElement(tt,(0,a.Z)({},i,o,{ref:t}))}),[st,dt]=ut("AlertDialogContent"),ft=r.forwardRef((e,t)=>{const{__scopeAlertDialog:n,children:o,...i}=e,c=ct(n),l=u(t,r.useRef(null)),d=r.useRef(null)
return r.createElement(Je,{contentName:"AlertDialogContent",titleName:pt,docsSlug:"alert-dialog"},r.createElement(st,{scope:n,cancelRef:d},r.createElement(nt,(0,a.Z)({role:"alertdialog"},c,i,{ref:l,onOpenAutoFocus:p(i.onOpenAutoFocus,e=>{var t
e.preventDefault(),null===(t=d.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),r.createElement(s,null,o),!1)))}),pt="AlertDialogTitle",gt=r.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,i=ct(n)
return r.createElement(rt,(0,a.Z)({},i,o,{ref:t}))}),ht=r.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,i=ct(n)
return r.createElement(ot,(0,a.Z)({},i,o,{ref:t}))}),mt=r.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...o}=e,i=ct(n)
return r.createElement(it,(0,a.Z)({},i,o,{ref:t}))}),vt=e=>{const{__scopeAlertDialog:t,...n}=e,o=ct(t)
return r.createElement(et,(0,a.Z)({},o,n,{modal:!0}))},yt=lt,bt=ft,wt=mt,Et=gt,It=ht},10761:(e,t,n)=>{"use strict"
n.d(t,{Kb:()=>be})
var r=n(87094),o=n.n(r),i=n(8600)
n(56576)
function u(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function a(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function c(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null)
return a(n.overflowY,t)||a(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null
try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e)
return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function l(e,t,n,r,o,i,u,a){return i<e&&u>t||i>e&&u<t?0:i<=e&&a<=n||u>=t&&a>=n?i-e-r:u>t&&a<n||i<e&&a>n?u-t+o:0}var s=n(11534)
let d=0
function f(){}function p(e,t){if(!e)return
const n=function(e,t){var n=window,r=t.scrollMode,o=t.block,i=t.inline,a=t.boundary,s=t.skipOverflowHiddenElements,d="function"==typeof a?a:function(e){return e!==a}
if(!u(e))throw new TypeError("Invalid target")
for(var f,p,g=document.scrollingElement||document.documentElement,h=[],m=e;u(m)&&d(m);){if((m=null==(p=(f=m).parentElement)?f.getRootNode().host||null:p)===g){h.push(m)
break}null!=m&&m===document.body&&c(m)&&!c(document.documentElement)||null!=m&&c(m,s)&&h.push(m)}for(var v=n.visualViewport?n.visualViewport.width:innerWidth,y=n.visualViewport?n.visualViewport.height:innerHeight,b=window.scrollX||pageXOffset,w=window.scrollY||pageYOffset,E=e.getBoundingClientRect(),I=E.height,x=E.width,C=E.top,k=E.right,O=E.bottom,T=E.left,D="start"===o||"nearest"===o?C:"end"===o?O:C+I/2,M="center"===i?T+x/2:"end"===i?k:T,R=[],S=0;S<h.length;S++){var N=h[S],A=N.getBoundingClientRect(),L=A.height,P=A.width,_=A.top,F=A.right,B=A.bottom,V=A.left
if("if-needed"===r&&C>=0&&T>=0&&O<=y&&k<=v&&C>=_&&O<=B&&T>=V&&k<=F)return R
var W=getComputedStyle(N),K=parseInt(W.borderLeftWidth,10),Z=parseInt(W.borderTopWidth,10),$=parseInt(W.borderRightWidth,10),H=parseInt(W.borderBottomWidth,10),U=0,j=0,Y="offsetWidth"in N?N.offsetWidth-N.clientWidth-K-$:0,X="offsetHeight"in N?N.offsetHeight-N.clientHeight-Z-H:0,z="offsetWidth"in N?0===N.offsetWidth?0:P/N.offsetWidth:0,q="offsetHeight"in N?0===N.offsetHeight?0:L/N.offsetHeight:0
if(g===N)U="start"===o?D:"end"===o?D-y:"nearest"===o?l(w,w+y,y,Z,H,w+D,w+D+I,I):D-y/2,j="start"===i?M:"center"===i?M-v/2:"end"===i?M-v:l(b,b+v,v,K,$,b+M,b+M+x,x),U=Math.max(0,U+w),j=Math.max(0,j+b)
else{U="start"===o?D-_-Z:"end"===o?D-B+H+X:"nearest"===o?l(_,B,L,Z,H+X,D,D+I,I):D-(_+L/2)+X/2,j="start"===i?M-V-K:"center"===i?M-(V+P/2)+Y/2:"end"===i?M-F+$+Y:l(V,F,P,K,$+Y,M,M+x,x)
var G=N.scrollLeft,J=N.scrollTop
D+=J-(U=Math.max(0,Math.min(J+U/q,N.scrollHeight-L/q+X))),M+=G-(j=Math.max(0,Math.min(G+j/z,N.scrollWidth-P/z+Y)))}R.push({el:N,top:U,left:j})}return R}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"})
n.forEach(e=>{let{el:t,top:n,left:r}=e
t.scrollTop=n,t.scrollLeft=r})}function g(e,t,n){return e===t||t instanceof n.Node&&e.contains&&e.contains(t)}function h(e,t){let n
function r(){n&&clearTimeout(n)}function o(){for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u]
r(),n=setTimeout(()=>{n=null,e(...i)},t)}return o.cancel=r,o}function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o]
return t.some(t=>(t&&t(e,...r),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault))}}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return e=>{t.forEach(t=>{"function"==typeof t?t(e):t&&(t.current=e)})}}function y(){return String(d++)}function b(e){let{isOpen:t,resultCount:n,previousResultCount:r}=e
return t?n?n!==r?`${n} result${1===n?" is":"s are"} available, use up and down arrow keys to navigate. Press Enter key to select.`:"":"No results are available.":""}function w(e,t){return Object.keys(e).reduce((n,r)=>(n[r]=E(t,r)?t[r]:e[r],n),{})}function E(e,t){return void 0!==e[t]}function I(e){const{key:t,keyCode:n}=e
return n>=37&&n<=40&&0!==t.indexOf("Arrow")?`Arrow${t}`:t}function x(e,t,n,r,o){if(void 0===o&&(o=!0),0===n)return-1
const i=n-1;("number"!=typeof t||t<0||t>=n)&&(t=e>0?-1:i+1)
let u=t+e
u<0?u=o?i:0:u>i&&(u=o?0:i)
const a=C(e,u,n,r,o)
return-1===a?t>=n?-1:t:a}function C(e,t,n,r,o){const i=r(t)
if(!i||!i.hasAttribute("disabled"))return t
if(e>0){for(let e=t+1;e<n;e++)if(!r(e).hasAttribute("disabled"))return e}else for(let e=t-1;e>=0;e--)if(!r(e).hasAttribute("disabled"))return e
return o?e>0?C(1,0,n,r,!1):C(-1,n-1,n,r,!1):-1}function k(e,t,n,r){return void 0===r&&(r=!0),t.some(t=>t&&(g(t,e,n)||r&&g(t,n.document.activeElement,n)))}const O=h(e=>{D(e).textContent=""},500)
function T(e,t){const n=D(t)
e&&(n.textContent=e,O(t))}function D(e){void 0===e&&(e=document)
let t=e.getElementById("a11y-status-message")
return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}const M={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""}
function R(e,t,n){const{props:r,type:o}=e,i={}
Object.keys(t).forEach(r=>{!function(e,t,n,r){const{props:o,type:i}=t,u=`on${P(e)}Change`
o[u]&&void 0!==r[e]&&r[e]!==n[e]&&o[u]({type:i,...r})}(r,e,t,n),n[r]!==t[r]&&(i[r]=n[r])}),r.onStateChange&&Object.keys(i).length&&r.onStateChange({type:o,...i})}const S=h((e,t)=>{T(e(),t)},200),N="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect
function A(e){let{id:t=`downshift-${y()}`,labelId:n,menuId:r,getItemId:o,toggleButtonId:u,inputId:a}=e
return(0,i.useRef)({labelId:n||`${t}-label`,menuId:r||`${t}-menu`,getItemId:o||(e=>`${t}-item-${e}`),toggleButtonId:u||`${t}-toggle-button`,inputId:a||`${t}-input`}).current}function L(e,t,n){return void 0!==e?e:0===n.length?-1:n.indexOf(t)}function P(e){return`${e.slice(0,1).toUpperCase()}${e.slice(1)}`}function _(e){const t=(0,i.useRef)(e)
return t.current=e,t}function F(e,t,n){const r=(0,i.useRef)(),o=(0,i.useRef)(),u=(0,i.useCallback)((t,n)=>{o.current=n,t=w(t,n.props)
const r=e(t,n)
return n.props.stateReducer(t,{...n,changes:r})},[e]),[a,c]=(0,i.useReducer)(u,t),l=_(n),s=(0,i.useCallback)(e=>c({props:l.current,...e}),[l]),d=o.current
return(0,i.useEffect)(()=>{d&&r.current&&r.current!==a&&R(d,w(r.current,d.props),a),r.current=a},[a,n,d]),[a,s]}const B={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){const{selectedItem:t,itemToString:n}=e
return t?`${n(t)} has been selected.`:""},scrollIntoView:p,circularNavigation:!1,environment:"undefined"==typeof window?{}:window}
function V(e,t,n){void 0===n&&(n=M)
const r=e[`default${P(t)}`]
return void 0!==r?r:n[t]}function W(e,t,n){void 0===n&&(n=M)
const r=e[t]
if(void 0!==r)return r
const o=e[`initial${P(t)}`]
return void 0!==o?o:V(e,t,n)}function K(e){const t=W(e,"selectedItem"),n=W(e,"isOpen"),r=W(e,"highlightedIndex"),o=W(e,"inputValue")
return{highlightedIndex:r<0&&t&&n?e.items.indexOf(t):r,isOpen:n,selectedItem:t,inputValue:o}}function Z(e,t,n,r){const{items:o,initialHighlightedIndex:i,defaultHighlightedIndex:u}=e,{selectedItem:a,highlightedIndex:c}=t
return 0===o.length?-1:void 0!==i&&c===i?i:void 0!==u?u:a?0===n?o.indexOf(a):x(n,o.indexOf(a),o.length,r,!1):0===n?-1:n<0?o.length-1:0}function $(e,t,n,r){const o=(0,i.useRef)({isMouseDown:!1,isTouchMove:!1})
return(0,i.useEffect)(()=>{const i=()=>{o.current.isMouseDown=!0},u=i=>{o.current.isMouseDown=!1,e&&!k(i.target,t.map(e=>e.current),n)&&r()},a=()=>{o.current.isTouchMove=!1},c=()=>{o.current.isTouchMove=!0},l=i=>{!e||o.current.isTouchMove||k(i.target,t.map(e=>e.current),n,!1)||r()}
return n.addEventListener("mousedown",i),n.addEventListener("mouseup",u),n.addEventListener("touchstart",a),n.addEventListener("touchmove",c),n.addEventListener("touchend",l),function(){n.removeEventListener("mousedown",i),n.removeEventListener("mouseup",u),n.removeEventListener("touchstart",a),n.removeEventListener("touchmove",c),n.removeEventListener("touchend",l)}},[e,n]),o}let H=()=>f
function U(e,t,n){let{isInitialMount:r,highlightedIndex:o,items:u,environment:a,...c}=n;(0,i.useEffect)(()=>{r||S(()=>e({highlightedIndex:o,highlightedItem:u[o],resultCount:u.length,...c}),a.document)},t)}function j(e){let{highlightedIndex:t,isOpen:n,itemRefs:r,getItemNodeFromIndex:o,menuElement:u,scrollIntoView:a}=e
const c=(0,i.useRef)(!0)
return N(()=>{t<0||!n||!Object.keys(r.current).length||(!1===c.current?c.current=!0:a(o(t),u))},[t]),c}let Y=f
function X(e,t,n){const{type:r,props:o}=t
let i
switch(r){case n.ItemMouseMove:i={highlightedIndex:t.disabled?-1:t.index}
break
case n.MenuMouseLeave:i={highlightedIndex:-1}
break
case n.ToggleButtonClick:case n.FunctionToggleMenu:i={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:Z(o,e,0)}
break
case n.FunctionOpenMenu:i={isOpen:!0,highlightedIndex:Z(o,e,0)}
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
const z=0,q=1,G=2,J=3,Q=4,ee=5,te=6,ne=7,re=8,oe=9,ie=10,ue=11,ae=12,ce=13,le=14,se=15,de=16,fe=17,pe=18,ge=19
var he=Object.freeze({__proto__:null,InputKeyDownArrowDown:z,InputKeyDownArrowUp:q,InputKeyDownEscape:G,InputKeyDownHome:J,InputKeyDownEnd:Q,InputKeyDownEnter:ee,InputChange:te,InputBlur:ne,MenuMouseLeave:re,ItemMouseMove:oe,ItemClick:ie,ToggleButtonClick:ue,FunctionToggleMenu:ae,FunctionOpenMenu:ce,FunctionCloseMenu:le,FunctionSetHighlightedIndex:se,FunctionSelectItem:de,FunctionSetInputValue:fe,FunctionReset:pe,ControlledPropUpdatedSelectedItem:ge})
o().array.isRequired,o().func,o().func,o().func,o().bool,o().number,o().number,o().number,o().bool,o().bool,o().bool,o().any,o().any,o().any,o().string,o().string,o().string,o().string,o().string,o().string,o().func,o().string,o().string,o().func,o().func,o().func,o().func,o().func,o().func,o().shape({addEventListener:o().func,removeEventListener:o().func,document:o().shape({getElementById:o().func,activeElement:o().any,body:o().any})})
let me=f
const ve={...B,getA11yStatusMessage:b,circularNavigation:!0}
function ye(e,t){const{type:n,props:r,shiftKey:o}=t
let i
switch(n){case ie:i={isOpen:V(r,"isOpen"),highlightedIndex:V(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])}
break
case z:i=e.isOpen?{highlightedIndex:x(o?5:1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:{highlightedIndex:Z(r,e,1,t.getItemNodeFromIndex),isOpen:r.items.length>=0}
break
case q:i=e.isOpen?{highlightedIndex:x(o?-5:-1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:{highlightedIndex:Z(r,e,-1,t.getItemNodeFromIndex),isOpen:r.items.length>=0}
break
case ee:i={...e.isOpen&&e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex],isOpen:V(r,"isOpen"),highlightedIndex:V(r,"highlightedIndex"),inputValue:r.itemToString(r.items[e.highlightedIndex])}}
break
case G:i={isOpen:!1,highlightedIndex:-1,...!e.isOpen&&{selectedItem:null,inputValue:""}}
break
case J:i={highlightedIndex:C(1,0,r.items.length,t.getItemNodeFromIndex,!1)}
break
case Q:i={highlightedIndex:C(-1,r.items.length-1,r.items.length,t.getItemNodeFromIndex,!1)}
break
case ne:i={isOpen:!1,highlightedIndex:-1,...e.highlightedIndex>=0&&t.selectItem&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])}}
break
case te:i={isOpen:!0,highlightedIndex:V(r,"highlightedIndex"),inputValue:t.inputValue}
break
case de:i={selectedItem:t.selectedItem,inputValue:r.itemToString(t.selectedItem)}
break
case ge:i={inputValue:t.inputValue}
break
default:return X(e,t,he)}return{...e,...i}}function be(e){void 0===e&&(e={}),me(e,be)
const t={...ve,...e},{initialIsOpen:n,defaultIsOpen:r,items:o,scrollIntoView:u,environment:a,getA11yStatusMessage:c,getA11ySelectionMessage:l,itemToString:s}=t,d=function(e){const t=K(e),{selectedItem:n}=t
let{inputValue:r}=t
return""===r&&n&&void 0===e.defaultInputValue&&void 0===e.initialInputValue&&void 0===e.inputValue&&(r=e.itemToString(n)),{...t,inputValue:r}}(t),[f,p]=function(e,t,n){const r=(0,i.useRef)(),[o,u]=F(e,t,n)
return(0,i.useEffect)(()=>{E(n,"selectedItem")&&(r.current!==n.selectedItem&&u({type:ge,inputValue:n.itemToString(n.selectedItem)}),r.current=o.selectedItem===r.current?n.selectedItem:o.selectedItem)}),[w(o,n),u]}(ye,d,t),{isOpen:g,highlightedIndex:h,selectedItem:y,inputValue:b}=f,x=(0,i.useRef)(null),C=(0,i.useRef)({}),k=(0,i.useRef)(null),O=(0,i.useRef)(null),T=(0,i.useRef)(null),D=(0,i.useRef)(!0),M=A(t),R=(0,i.useRef)(),S=_({state:f,props:t}),N=(0,i.useCallback)(e=>C.current[M.getItemId(e)],[M])
U(c,[g,h,b,o],{isInitialMount:D.current,previousResultCount:R.current,items:o,environment:a,itemToString:s,...f}),U(l,[y],{isInitialMount:D.current,previousResultCount:R.current,items:o,environment:a,itemToString:s,...f})
const P=j({menuElement:x.current,highlightedIndex:h,isOpen:g,itemRefs:C,scrollIntoView:u,getItemNodeFromIndex:N})
Y({isInitialMount:D.current,props:t,state:f}),(0,i.useEffect)(()=>{(n||r||g)&&k.current&&k.current.focus()},[]),(0,i.useEffect)(()=>{D.current||(R.current=o.length)})
const B=$(g,[T,x,O],a,()=>{p({type:ne,selectItem:!1})}),V=H("getInputProps","getComboboxProps","getMenuProps");(0,i.useEffect)(()=>{D.current=!1},[]),(0,i.useEffect)(()=>{g||(C.current={})},[g])
const W=(0,i.useMemo)(()=>({ArrowDown(e){e.preventDefault(),p({type:z,shiftKey:e.shiftKey,getItemNodeFromIndex:N})},ArrowUp(e){e.preventDefault(),p({type:q,shiftKey:e.shiftKey,getItemNodeFromIndex:N})},Home(e){S.current.state.isOpen&&(e.preventDefault(),p({type:J,getItemNodeFromIndex:N}))},End(e){S.current.state.isOpen&&(e.preventDefault(),p({type:Q,getItemNodeFromIndex:N}))},Escape(e){const t=S.current.state;(t.isOpen||t.inputValue||t.selectedItem||t.highlightedIndex>-1)&&(e.preventDefault(),p({type:G}))},Enter(e){const t=S.current.state
!t.isOpen||t.highlightedIndex<0||229===e.which||(e.preventDefault(),p({type:ee,getItemNodeFromIndex:N}))}}),[p,S,N]),Z=(0,i.useCallback)(e=>({id:M.labelId,htmlFor:M.inputId,...e}),[M]),X=(0,i.useCallback)(function(e,t){let{onMouseLeave:n,refKey:r="ref",ref:o,...i}=void 0===e?{}:e,{suppressRefError:u=!1}=void 0===t?{}:t
return V("getMenuProps",u,r,x),{[r]:v(o,e=>{x.current=e}),id:M.menuId,role:"listbox","aria-labelledby":M.labelId,onMouseLeave:m(n,()=>{p({type:re})}),...i}},[p,V,M]),he=(0,i.useCallback)(function(e){let{item:t,index:n,refKey:r="ref",ref:o,onMouseMove:i,onMouseDown:u,onClick:a,onPress:c,disabled:l,...s}=void 0===e?{}:e
const{props:d,state:f}=S.current,g=L(n,t,d.items)
if(g<0)throw new Error("Pass either item or item index in getItemProps!")
const h="onClick",y=a
return{[r]:v(o,e=>{e&&(C.current[M.getItemId(g)]=e)}),disabled:l,role:"option","aria-selected":`${g===f.highlightedIndex}`,id:M.getItemId(g),...!l&&{[h]:m(y,()=>{p({type:ie,index:n})})},onMouseMove:m(i,()=>{n!==f.highlightedIndex&&(P.current=!1,p({type:oe,index:n,disabled:l}))}),onMouseDown:m(u,e=>e.preventDefault()),...s}},[p,S,P,M]),we=(0,i.useCallback)(function(e){let{onClick:t,onPress:n,refKey:r="ref",ref:o,...i}=void 0===e?{}:e
return{[r]:v(o,e=>{O.current=e}),id:M.toggleButtonId,tabIndex:-1,...!i.disabled&&{onClick:m(t,()=>{p({type:ue}),!S.current.state.isOpen&&k.current&&k.current.focus()})},...i}},[p,S,M]),Ee=(0,i.useCallback)(function(e,t){let{onKeyDown:n,onChange:r,onInput:o,onBlur:i,onChangeText:u,refKey:a="ref",ref:c,...l}=void 0===e?{}:e,{suppressRefError:s=!1}=void 0===t?{}:t
V("getInputProps",s,a,k)
const d=S.current.state,f=e=>{const t=I(e)
t&&W[t]&&W[t](e)},g=e=>{p({type:te,inputValue:e.target.value})},h=()=>{d.isOpen&&!B.current.isMouseDown&&p({type:ne,selectItem:!0})},y="onChange"
let b={}
return l.disabled||(b={[y]:m(r,o,g),onKeyDown:m(n,f),onBlur:m(i,h)}),{[a]:v(c,e=>{k.current=e}),id:M.inputId,"aria-autocomplete":"list","aria-controls":M.menuId,...d.isOpen&&d.highlightedIndex>-1&&{"aria-activedescendant":M.getItemId(d.highlightedIndex)},"aria-labelledby":M.labelId,autoComplete:"off",value:d.inputValue,...b,...l}},[p,W,S,B,V,M]),Ie=(0,i.useCallback)(function(e,t){let{refKey:n="ref",ref:r,...o}=void 0===e?{}:e,{suppressRefError:i=!1}=void 0===t?{}:t
return V("getComboboxProps",i,n,T),{[n]:v(r,e=>{T.current=e}),role:"combobox","aria-haspopup":"listbox","aria-owns":M.menuId,"aria-expanded":S.current.state.isOpen,...o}},[S,V,M]),xe=(0,i.useCallback)(()=>{p({type:ae})},[p]),Ce=(0,i.useCallback)(()=>{p({type:le})},[p]),ke=(0,i.useCallback)(()=>{p({type:ce})},[p]),Oe=(0,i.useCallback)(e=>{p({type:se,highlightedIndex:e})},[p]),Te=(0,i.useCallback)(e=>{p({type:de,selectedItem:e})},[p])
return{getItemProps:he,getLabelProps:Z,getMenuProps:X,getInputProps:Ee,getComboboxProps:Ie,getToggleButtonProps:we,toggleMenu:xe,openMenu:ke,closeMenu:Ce,setHighlightedIndex:Oe,setInputValue:(0,i.useCallback)(e=>{p({type:fe,inputValue:e})},[p]),selectItem:Te,reset:(0,i.useCallback)(()=>{p({type:pe})},[p]),highlightedIndex:h,isOpen:g,selectedItem:y,inputValue:b}}be.stateChangeTypes=he
o().array,o().array,o().array,o().func,o().func,o().func,o().number,o().number,o().number,o().func,o().func,o().string,o().string,o().shape({addEventListener:o().func,removeEventListener:o().func,document:o().shape({getElementById:o().func,activeElement:o().any,body:o().any})})},61490:function(e,t){var n,r,o
r=[],void 0===(o="function"==typeof(n=function(){function e(p){var g={single:function(e,t,n){return e?(s(e)||(e=g.getPreparedSearch(e)),t?(s(t)||(t=g.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!p||void 0===p.allowTypo||p.allowTypo)?g.algorithm:g.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if(!e)return o
var r=(e=g.prepareSearch(e))[0],i=n&&n.threshold||p&&p.threshold||-9007199254740991,u=n&&n.limit||p&&p.limit||9007199254740991,a=(n&&void 0!==n.allowTypo?n.allowTypo:!p||void 0===p.allowTypo||p.allowTypo)?g.algorithm:g.algorithmNoTypo,d=0,h=0,m=t.length
if(n&&n.keys)for(var v=n.scoreFn||c,y=n.keys,b=y.length,w=m-1;w>=0;--w){for(var E=t[w],I=new Array(b),x=b-1;x>=0;--x)(O=l(E,k=y[x]))?(s(O)||(O=g.getPrepared(O)),I[x]=a(e,O,r)):I[x]=null
I.obj=E
var C=v(I)
null!==C&&(C<i||(I.score=C,d<u?(f.add(I),++d):(++h,C>f.peek().score&&f.replaceTop(I))))}else if(n&&n.key){var k=n.key
for(w=m-1;w>=0;--w)(O=l(E=t[w],k))&&(s(O)||(O=g.getPrepared(O)),null!==(T=a(e,O,r))&&(T.score<i||(T={target:T.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:T.score,indexes:T.indexes,obj:E},d<u?(f.add(T),++d):(++h,T.score>f.peek().score&&f.replaceTop(T)))))}else for(w=m-1;w>=0;--w){var O,T;(O=t[w])&&(s(O)||(O=g.getPrepared(O)),null!==(T=a(e,O,r))&&(T.score<i||(d<u?(f.add(T),++d):(++h,T.score>f.peek().score&&f.replaceTop(T)))))}if(0===d)return o
var D=new Array(d)
for(w=d-1;w>=0;--w)D[w]=f.poll()
return D.total=d+h,D},goAsync:function(e,n,r){var i=!1,u=new Promise(function(u,a){if(!e)return u(o)
var f=(e=g.prepareSearch(e))[0],h=d(),m=n.length-1,v=r&&r.threshold||p&&p.threshold||-9007199254740991,y=r&&r.limit||p&&p.limit||9007199254740991,b=(r&&void 0!==r.allowTypo?r.allowTypo:!p||void 0===p.allowTypo||p.allowTypo)?g.algorithm:g.algorithmNoTypo,w=0,E=0
function I(){if(i)return a("canceled")
var d=Date.now()
if(r&&r.keys)for(var p=r.scoreFn||c,x=r.keys,C=x.length;m>=0;--m){for(var k=n[m],O=new Array(C),T=C-1;T>=0;--T)(R=l(k,M=x[T]))?(s(R)||(R=g.getPrepared(R)),O[T]=b(e,R,f)):O[T]=null
O.obj=k
var D=p(O)
if(null!==D&&!(D<v)&&(O.score=D,w<y?(h.add(O),++w):(++E,D>h.peek().score&&h.replaceTop(O)),m%1e3==0&&Date.now()-d>=10))return void(t?setImmediate(I):setTimeout(I))}else if(r&&r.key){for(var M=r.key;m>=0;--m)if((R=l(k=n[m],M))&&(s(R)||(R=g.getPrepared(R)),null!==(S=b(e,R,f))&&!(S.score<v)&&(S={target:S.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:S.score,indexes:S.indexes,obj:k},w<y?(h.add(S),++w):(++E,S.score>h.peek().score&&h.replaceTop(S)),m%1e3==0&&Date.now()-d>=10)))return void(t?setImmediate(I):setTimeout(I))}else for(;m>=0;--m){var R,S
if((R=n[m])&&(s(R)||(R=g.getPrepared(R)),null!==(S=b(e,R,f))&&!(S.score<v)&&(w<y?(h.add(S),++w):(++E,S.score>h.peek().score&&h.replaceTop(S)),m%1e3==0&&Date.now()-d>=10)))return void(t?setImmediate(I):setTimeout(I))}if(0===w)return u(o)
for(var N=new Array(w),A=w-1;A>=0;--A)N[A]=h.poll()
N.total=w+E,u(N)}t?setImmediate(I):I()})
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
var f=0,p=!1,h=0,m=t._nextBeginningIndexes
null===m&&(m=t._nextBeginningIndexes=g.prepareNextBeginningIndexes(t.target))
var v=l=0===i[0]?0:m[i[0]-1]
if(l!==a)for(;;)if(l>=a){if(c<=0){if(++f>o-2)break
if(e[f]===e[f+1])continue
l=v
continue}--c,l=m[u[--h]]}else if(e[0===f?c:f===c?c+1:f===c-1?c-1:c]===r[l]){if(u[h++]=l,++c===o){p=!0
break}++l}else l=m[l]
if(p)var y=u,b=h
else y=i,b=d
for(var w=0,E=-1,I=0;I<o;++I)E!==(l=y[I])-1&&(w-=l),E=l
for(p?0!==f&&(w+=-20):(w*=1e3,0!==s&&(w+=-20)),w-=a-o,t.score=w,t.indexes=new Array(b),I=b-1;I>=0;--I)t.indexes[I]=y[I]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,a=r.length,c=0,l=0,s=0;;){if(n===r[l]){if(i[s++]=l,++c===o)break
n=e[c]}if(++l>=a)return null}c=0
var d=!1,f=0,p=t._nextBeginningIndexes
if(null===p&&(p=t._nextBeginningIndexes=g.prepareNextBeginningIndexes(t.target)),(l=0===i[0]?0:p[i[0]-1])!==a)for(;;)if(l>=a){if(c<=0)break;--c,l=p[u[--f]]}else if(e[c]===r[l]){if(u[f++]=l,++c===o){d=!0
break}++l}else l=p[l]
if(d)var h=u,m=f
else h=i,m=s
for(var v=0,y=-1,b=0;b<o;++b)y!==(l=h[b])-1&&(v-=l),y=l
for(d||(v*=1e3),v-=a-o,t.score=v,t.indexes=new Array(m),b=m-1;b>=0;--b)t.indexes[b]=h[b]
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
return e()})?n.apply(t,r):n)||(e.exports=o)},94597:(e,t)=>{"use strict"
var n=60103,r=60106,o=60107,i=60108,u=60114,a=60109,c=60110,l=60112,s=60113,d=60120,f=60115,p=60116,g=60121,h=60122,m=60117,v=60129,y=60131
if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for
n=b("react.element"),r=b("react.portal"),o=b("react.fragment"),i=b("react.strict_mode"),u=b("react.profiler"),a=b("react.provider"),c=b("react.context"),l=b("react.forward_ref"),s=b("react.suspense"),d=b("react.suspense_list"),f=b("react.memo"),p=b("react.lazy"),g=b("react.block"),h=b("react.server.block"),m=b("react.fundamental"),v=b("react.debug_trace_mode"),y=b("react.legacy_hidden")}function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof
switch(t){case n:switch(e=e.type){case o:case u:case i:case s:case d:return e
default:switch(e=e&&e.$$typeof){case c:case l:case p:case f:case a:return e
default:return t}}case r:return t}}}},56576:(e,t,n)=>{"use strict"
n(94597)}}])

//# sourceMappingURL=847-4d634028de6743784eb5.js.map