"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[236],{7553:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})
var debug__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45678),debug__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__),_parser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(39061),_parser__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_parser__WEBPACK_IMPORTED_MODULE_1__)
const log=debug__WEBPACK_IMPORTED_MODULE_0___default()("scintillator:expression")
function createFunction(code){const fn=eval("(function(get) { return "+code+" })")
return fn.displayName="("+code+")",fn.constant=!!/^[-0-9.]+$/.test(code),fn}function Expression(t){log("parsing %s",t)
const e=_parser__WEBPACK_IMPORTED_MODULE_1___default().parse(t)
log("parsed %s => %s",t,e)
const n=createFunction(e)
let r
return r=n.constant?n:function(t){return n(function(e){return t[e]})},r.constant=n.constant,r}const __WEBPACK_DEFAULT_EXPORT__=Expression},39061:t=>{function e(t,n,r,i){this.message=t,this.expected=n,this.found=r,this.location=i,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}!function(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}(e,Error),e.buildMessage=function(t,e){var n={literal:function(t){return'"'+i(t.text)+'"'},class:function(t){var e,n=""
for(e=0;e<t.parts.length;e++)n+=t.parts[e]instanceof Array?s(t.parts[e][0])+"-"+s(t.parts[e][1]):s(t.parts[e])
return"["+(t.inverted?"^":"")+n+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}}
function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function i(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+r(t)})}function s(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return"\\x"+r(t)})}function o(t){return n[t.type](t)}return"Expected "+function(t){var e,n,r=new Array(t.length)
for(e=0;e<t.length;e++)r[e]=o(t[e])
if(r.sort(),r.length>0){for(e=1,n=1;e<r.length;e++)r[e-1]!==r[e]&&(r[n]=r[e],n++)
r.length=n}switch(r.length){case 1:return r[0]
case 2:return r[0]+" or "+r[1]
default:return r.slice(0,-1).join(", ")+", or "+r[r.length-1]}}(t)+" but "+function(t){return t?'"'+i(t)+'"':"end of input"}(e)+" found."},t.exports={SyntaxError:e,parse:function(t,n){n=void 0!==n?n:{}
var r,i={},s={expr:lt},o=lt,a="||",c=rt("||",!1),h=function(t,e){return function(t,e){return t+e.map(gt).join("")}(t,e)},l="&&",u=rt("&&",!1),d="+",f=rt("+",!1),p="-",_=rt("-",!1),m="*",g=rt("*",!1),w="/",v=rt("/",!1),x="%",A=rt("%",!1),b="(",y=rt("(",!1),E=")",C=rt(")",!1),k=function(t){return"("+t+")"},D="!",L=rt("!",!1),M=function(t){return"!"+t},j=st("number"),O=function(){return nt()},T=/^[eE]/,P=it(["e","E"],!1,!1),S=/^[0-9]/,R=it([["0","9"]],!1,!1),B=".",N=rt(".",!1),F="0",I=rt("0",!1),U=/^[1-9]/,Z=it([["1","9"]],!1,!1),K=/^[a-zA-Z]/,W=it([["a","z"],["A","Z"]],!1,!1),q=/^[a-zA-Z0-9_]/,X=it([["a","z"],["A","Z"],["0","9"],"_"],!1,!1),z=function(){return"get("+JSON.stringify(nt())+")"},Y=st("whitespace"),$=/^[ \t\n\r]/,G=it([" ","\t","\n","\r"],!1,!1),H=0,J=0,Q=[{line:1,column:1}],V=0,tt=[],et=0
if("startRule"in n){if(!(n.startRule in s))throw new Error("Can't start parsing from rule \""+n.startRule+'".')
o=s[n.startRule]}function nt(){return t.substring(J,H)}function rt(t,e){return{type:"literal",text:t,ignoreCase:e}}function it(t,e,n){return{type:"class",parts:t,inverted:e,ignoreCase:n}}function st(t){return{type:"other",description:t}}function ot(e){var n,r=Q[e]
if(r)return r
for(n=e-1;!Q[n];)n--
for(r={line:(r=Q[n]).line,column:r.column};n<e;)10===t.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++
return Q[e]=r,r}function at(t,e){var n=ot(t),r=ot(e)
return{start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:r.line,column:r.column}}}function ct(t){H<V||(H>V&&(V=H,tt=[]),tt.push(t))}function ht(t,n,r){return new e(e.buildMessage(t,n),t,n,r)}function lt(){return ut()}function ut(){var e,n,r,s,o,l,u,d
if(e=H,(n=dt())!==i){for(r=[],s=H,(o=mt())!==i?(t.substr(H,2)===a?(l=a,H+=2):(l=i,0===et&&ct(c)),l!==i&&(u=mt())!==i&&(d=dt())!==i?s=o=[o,l,u,d]:(H=s,s=i)):(H=s,s=i);s!==i;)r.push(s),s=H,(o=mt())!==i?(t.substr(H,2)===a?(l=a,H+=2):(l=i,0===et&&ct(c)),l!==i&&(u=mt())!==i&&(d=dt())!==i?s=o=[o,l,u,d]:(H=s,s=i)):(H=s,s=i)
r!==i?(J=e,e=n=h(n,r)):(H=e,e=i)}else H=e,e=i
return e}function dt(){var e,n,r,s,o,a,c,d
if(e=H,(n=ft())!==i){for(r=[],s=H,(o=mt())!==i?(t.substr(H,2)===l?(a=l,H+=2):(a=i,0===et&&ct(u)),a!==i&&(c=mt())!==i&&(d=ft())!==i?s=o=[o,a,c,d]:(H=s,s=i)):(H=s,s=i);s!==i;)r.push(s),s=H,(o=mt())!==i?(t.substr(H,2)===l?(a=l,H+=2):(a=i,0===et&&ct(u)),a!==i&&(c=mt())!==i&&(d=ft())!==i?s=o=[o,a,c,d]:(H=s,s=i)):(H=s,s=i)
r!==i?(J=e,e=n=h(n,r)):(H=e,e=i)}else H=e,e=i
return e}function ft(){var e,n,r,s,o,a,c,l
if(e=H,(n=pt())!==i){for(r=[],s=H,(o=mt())!==i?(43===t.charCodeAt(H)?(a=d,H++):(a=i,0===et&&ct(f)),a===i&&(45===t.charCodeAt(H)?(a=p,H++):(a=i,0===et&&ct(_))),a!==i&&(c=mt())!==i&&(l=pt())!==i?s=o=[o,a,c,l]:(H=s,s=i)):(H=s,s=i);s!==i;)r.push(s),s=H,(o=mt())!==i?(43===t.charCodeAt(H)?(a=d,H++):(a=i,0===et&&ct(f)),a===i&&(45===t.charCodeAt(H)?(a=p,H++):(a=i,0===et&&ct(_))),a!==i&&(c=mt())!==i&&(l=pt())!==i?s=o=[o,a,c,l]:(H=s,s=i)):(H=s,s=i)
r!==i?(J=e,e=n=h(n,r)):(H=e,e=i)}else H=e,e=i
return e}function pt(){var e,n,r,s,o,a,c,l
if(e=H,(n=_t())!==i){for(r=[],s=H,(o=mt())!==i?(42===t.charCodeAt(H)?(a=m,H++):(a=i,0===et&&ct(g)),a===i&&(47===t.charCodeAt(H)?(a=w,H++):(a=i,0===et&&ct(v)),a===i&&(37===t.charCodeAt(H)?(a=x,H++):(a=i,0===et&&ct(A)))),a!==i&&(c=mt())!==i&&(l=_t())!==i?s=o=[o,a,c,l]:(H=s,s=i)):(H=s,s=i);s!==i;)r.push(s),s=H,(o=mt())!==i?(42===t.charCodeAt(H)?(a=m,H++):(a=i,0===et&&ct(g)),a===i&&(47===t.charCodeAt(H)?(a=w,H++):(a=i,0===et&&ct(v)),a===i&&(37===t.charCodeAt(H)?(a=x,H++):(a=i,0===et&&ct(A)))),a!==i&&(c=mt())!==i&&(l=_t())!==i?s=o=[o,a,c,l]:(H=s,s=i)):(H=s,s=i)
r!==i?(J=e,e=n=h(n,r)):(H=e,e=i)}else H=e,e=i
return e}function _t(){var e,n,r,s,o
return e=H,40===t.charCodeAt(H)?(n=b,H++):(n=i,0===et&&ct(y)),n!==i&&(r=mt())!==i&&(s=ut())!==i&&mt()!==i?(41===t.charCodeAt(H)?(o=E,H++):(o=i,0===et&&ct(C)),o!==i?(J=e,e=n=k(s)):(H=e,e=i)):(H=e,e=i),e===i&&(e=H,33===t.charCodeAt(H)?(n=D,H++):(n=i,0===et&&ct(L)),n!==i&&(r=_t())!==i?(J=e,e=n=M(r)):(H=e,e=i),e===i&&(e=function(){var e,n,r,s,o
et++,e=H,45===t.charCodeAt(H)?(n=p,H++):(n=i,0===et&&ct(_))
n===i&&(n=null)
n!==i?(r=function(){var e,n,r,s
48===t.charCodeAt(H)?(e=F,H++):(e=i,0===et&&ct(I))
if(e===i)if(e=H,U.test(t.charAt(H))?(n=t.charAt(H),H++):(n=i,0===et&&ct(Z)),n!==i){for(r=[],S.test(t.charAt(H))?(s=t.charAt(H),H++):(s=i,0===et&&ct(R));s!==i;)r.push(s),S.test(t.charAt(H))?(s=t.charAt(H),H++):(s=i,0===et&&ct(R))
r!==i?e=n=[n,r]:(H=e,e=i)}else H=e,e=i
return e}(),r!==i?(s=function(){var e,n,r,s
e=H,46===t.charCodeAt(H)?(n=B,H++):(n=i,0===et&&ct(N))
if(n!==i){if(r=[],S.test(t.charAt(H))?(s=t.charAt(H),H++):(s=i,0===et&&ct(R)),s!==i)for(;s!==i;)r.push(s),S.test(t.charAt(H))?(s=t.charAt(H),H++):(s=i,0===et&&ct(R))
else r=i
r!==i?e=n=[n,r]:(H=e,e=i)}else H=e,e=i
return e}(),s===i&&(s=null),s!==i?(o=function(){var e,n,r,s,o
e=H,T.test(t.charAt(H))?(n=t.charAt(H),H++):(n=i,0===et&&ct(P))
if(n!==i)if(45===t.charCodeAt(H)?(r=p,H++):(r=i,0===et&&ct(_)),r===i&&(43===t.charCodeAt(H)?(r=d,H++):(r=i,0===et&&ct(f))),r===i&&(r=null),r!==i){if(s=[],S.test(t.charAt(H))?(o=t.charAt(H),H++):(o=i,0===et&&ct(R)),o!==i)for(;o!==i;)s.push(o),S.test(t.charAt(H))?(o=t.charAt(H),H++):(o=i,0===et&&ct(R))
else s=i
s!==i?e=n=[n,r,s]:(H=e,e=i)}else H=e,e=i
else H=e,e=i
return e}(),o===i&&(o=null),o!==i?(J=e,e=n=O()):(H=e,e=i)):(H=e,e=i)):(H=e,e=i)):(H=e,e=i)
et--,e===i&&(n=i,0===et&&ct(j))
return e}(),e===i&&(e=function(){var e,n,r,s
e=H,n=[],K.test(t.charAt(H))?(r=t.charAt(H),H++):(r=i,0===et&&ct(W))
if(r!==i)for(;r!==i;)n.push(r),K.test(t.charAt(H))?(r=t.charAt(H),H++):(r=i,0===et&&ct(W))
else n=i
if(n!==i){for(r=[],q.test(t.charAt(H))?(s=t.charAt(H),H++):(s=i,0===et&&ct(X));s!==i;)r.push(s),q.test(t.charAt(H))?(s=t.charAt(H),H++):(s=i,0===et&&ct(X))
r!==i?(J=e,e=n=z()):(H=e,e=i)}else H=e,e=i
return e}()))),e}function mt(){var e,n
for(et++,e=[],$.test(t.charAt(H))?(n=t.charAt(H),H++):(n=i,0===et&&ct(G));n!==i;)e.push(n),$.test(t.charAt(H))?(n=t.charAt(H),H++):(n=i,0===et&&ct(G))
return et--,e===i&&(n=i,0===et&&ct(Y)),e}function gt(t){return" "+t[1]+" "+t[3]}if((r=o())!==i&&H===t.length)return r
throw r!==i&&H<t.length&&ct({type:"end"}),ht(tt,V<t.length?t.charAt(V):null,V<t.length?at(V,V+1):at(V,V))}}},90279:(t,e,n)=>{n.r(e),n.d(e,{Context:()=>s,getSkinUrl:()=>B,load:()=>R})
var r=n(213)
function i(t,e){return r.utils.canUseNewCanvasBlendModes=()=>!0,new r.CanvasRenderer(t,e,{transparent:!0})}class s{constructor(t,{touchEventTarget:e}={}){this.refs={},this._skin=t,this._touchEventTarget=e,this._instance=t.instantiate(this),this._renderer=i(t.width,t.height),this.stage=this._instance.object,this.view=this._renderer.view,this.skinData=t.data,this._setupInteractivity()}render(t){this._instance.push(t),this._renderer.render(this.stage)}destroy(){this._instance.destroy(),this._instance=null,this._teardownInteractivity()}get input(){return this._input.get()}ref(t,e){(this.refs[t]||(this.refs[t]=new Set)).add(e)}unref(t,e){const n=this.refs[t]
n&&n.delete(e)}_setupInteractivity(){let t=null,e=[]
const n=e=>{t=e},r=e=>{t=t&&e},i=()=>{t=null},s=t=>{e=[].slice.call(t.touches)},o=this._touchEventTarget||this.view,a=this._skin.width,c=this._skin.height
function h(t,e,n){return{x:(e.clientX-n.left)/n.width*a,y:(e.clientY-n.top)/n.height*c,id:t}}o.addEventListener("mousedown",n,!1),o.addEventListener("mousemove",r,!1),o.addEventListener("mouseup",i,!1),o.addEventListener("touchstart",s,!1),o.addEventListener("touchmove",s,!1),o.addEventListener("touchend",s,!1),this._teardownInteractivity=()=>{o.removeEventListener("mousedown",n,!1),o.removeEventListener("mousemove",r,!1),o.removeEventListener("mouseup",i,!1),o.removeEventListener("touchstart",s,!1),o.removeEventListener("touchmove",s,!1),o.removeEventListener("touchend",s,!1)},this._input={get:()=>{const n=[],r=this.view.getBoundingClientRect()
t&&n.push(h("mouse",t,r))
for(let t=0;t<e.length;t++){const i=e[t]
n.push(h("touch"+i.identifier,i,r))}return n}}}}var o=n(71002),a=n.n(o),c=n(45678),h=n.n(c),l=n(14859)
const u=class{static compile(t,e){let n=new this
return n.compile(t,e),n}}
var d=n(59236)
const f=class{constructor(t){if(this._context=t.context,this._object=t.object,this._children=t.children,this._bindings=[],this._concerns=[],this.onData=new d.Z(t.onData),this.onDestroy=new d.Z(t.onDestroy),t.bindings)for(let e of t.bindings)this.bind(...e)
if(t.concerns)for(let e of t.concerns)this._concerns.push(e.instantiate(this._context,this))
if(t.children)for(let e of t.children)this._concerns.push(e.instantiate(this._context,this._object))
t.onCreate&&new d.Z(t.onCreate).call(),t.parent&&this.attachTo(t.parent)}bind(...t){let e=function(t){let e
return function(n){e!==n&&(e=n,t(n))}}(t.pop())
1===t.length&&t[0].constant?e(t[0]()):this._bindings.push(n=>{for(var r=0;r<t.length;r++)n=t[r](n)
e(n)})}attachTo(t){this._parent=t,this._parent.addChild(this._object)}detach(){this._parent&&(this._parent.removeChild(this._object),this._parent=null)}push(t){var e
for(e=0;e<this._bindings.length;e++)this._bindings[e](t)
for(e=0;e<this._concerns.length;e++)this._concerns[e].push(t)
this.onData.call(t)}destroy(){this.detach()
for(var t=0;t<this._concerns.length;t++)this._concerns[t].destroy()
this.onDestroy.call(),this._concerns=null,this._bindings=null,this._parent=null,this._object=null}get object(){return this._object}get parent(){return this._parent}}
var p=n(7553),_=n(3109)
const m=[{name:"x",default:"0",apply:(t,e)=>t.x=e},{name:"y",default:"0",apply:(t,e)=>t.y=e},{name:"scale-x",default:"1",apply:(t,e)=>t.scale.x=e},{name:"scale-y",default:"1",apply:(t,e)=>t.scale.y=e},{name:"alpha",default:"1",apply:(t,e)=>t.alpha=e},{name:"width",apply:(t,e)=>t.width=e},{name:"height",apply:(t,e)=>t.height=e},{name:"visible",apply:(t,e)=>t.visible=e}]
const g=class extends u{compile(t,e){this._animation=_.ZP.compile(t,e),this._bindings=[]
for(const t of m){const n=e.attr(t.name)||t.default
if(!n)continue
const r=new p.Z(n),i=this._animation.prop(t.name,r)
this._bindings.push({getter:i,apply:t.apply})}this.blendMode=function(t){if("normal"===t)return r.BLEND_MODES.NORMAL
if("screen"===t)return r.BLEND_MODES.SCREEN
throw new Error("Invalid blend mode: "+t)}(e.attr("blend")||"normal"),this.ref=e.attr("ref")||null}instantiate(t,e){const n=e.object,r=[]
let i=null
n.blendMode=this.blendMode
for(let t=0;t<this._bindings.length;t++){const e=this._bindings[t]
r.push([e.getter,e.apply.bind(null,n)])}return this.ref&&(t.ref(this.ref,n),i=()=>t.unref(this.ref,n)),new f({bindings:r,onDestroy:i})}}
function w(t){let e=t.match(/^(\d+)x(\d+)\+(\d+)\+(\d+)$/)
return e?new r.Rectangle(+e[3],+e[4],+e[1],+e[2]):null}class v{constructor(t){this._frame=t}instantiate(t,e){const n=new r.Graphics
return n.beginFill(),n.drawShape(this._frame),n.endFill(),e.object.mask=n,new f({context:t,object:n,parent:e.object})}}const x=class extends u{compile(t,e){this.children=t.compileChildren(e),this.display=g.compile(t,e)
const n=w(e.attr("mask")||"")
n&&(this.mask=new v(n))}instantiate(t,e){const n=new r.Container,i=[this.display]
return this.mask&&i.push(this.mask),new f({context:t,object:n,parent:e,concerns:i,children:this.children})}}
const A=class extends u{compile(t,e){const n=t.compileChildren(e)
if(1!==n.length)throw new Error("Expected exactly 1 children, "+n.length+" found")
this.child=n[0],this.key=new p.Z(e.attr("key")),this.value=String(e.attr("value"))}instantiate(t,e){const n=new r.Container,i=this.key,s=this.value,o=this.child
let a=null
return new f({context:t,parent:e,object:n,onData:e=>{String(i(e))===s?(null===a&&(a=o.instantiate(t,n)),a.push(e)):null!==a&&(a.destroy(),a=null)}})}}
function b(t,e,n){return{instantiate(r,i){const s=new Map,o=[]
return function(){let t
for(let s=0;s<n;s++)t=e.instantiate(r,i.object),t.detach(),o.push(t)}(),new f({context:r,onData:e=>{!function(t){const e=new Set(s.keys())
let n,r,i
t||(t=[])
for(let o=0;o<t.length;o++)r=t[o],n=r.key,s.has(n)?i=s.get(n):(i=a(),s.set(n,i)),i.push(r),e.delete(n)
for(n of e)i=s.get(n),i.detach(),s.delete(n),o.push(i)}(t(e))}})
function a(){let t=o.pop()
return t?t.attachTo(i.object):t=e.instantiate(r,i.object),t}}}}const y=class extends u{compile(t,e){if(this.children=t.compileChildren(e),1!==this.children.length)throw new Error("Expected exactly 1 children, "+this.children.length+" given")
this.pool=+e.attr("pool")||1,this.key=new p.Z(e.attr("key"))}instantiate(t,e){const n=new r.particles.ParticleContainer(void 0,{position:!0,alpha:!0}),i=new b(this.key,this.children[0],this.pool)
return new f({context:t,parent:e,object:n,concerns:[i]})}}
const E=class extends u{compile(t,e){this.children=t.compileChildren(e),this.width=+e.attr("width"),this.height=+e.attr("height"),this.data=e.data()}instantiate(t){const e=new r.Stage(591879)
return new f({context:t,object:e,children:this.children})}}
const C=class extends u{compile(t,e){this.url=t.resources.get(e.attr("image")),this.display=g.compile(t,e),this.frame=w(e.attr("frame")||""),this.anchorX=+e.attr("anchor-x")||0,this.anchorY=+e.attr("anchor-y")||0}instantiate(t,e){const n=new r.Sprite(this.getTexture())
return n.anchor.x=this.anchorX,n.anchor.y=this.anchorY,new f({context:t,object:n,parent:e,concerns:[this.display]})}getTexture(){if(this._texture)return this._texture
const t=r.SCALE_MODES.NEAREST,e=r.BaseTexture.fromImage(this.url,void 0,t),n=new r.Texture(e,this.frame)
return this._texture=n,n}}
const k=class extends u{compile(t,e){this.font=e.attr("font"),this.text=e.attr("text"),this.data=new p.Z(e.attr("data")||"0"),this.display=g.compile(t,e),this.ttf=!e.attr("font-src"),this.fill=e.attr("fill"),this.align="left"===e.attr("align")?0:"right"===e.attr("align")?1:.5}instantiate(t,e){let n
n=this.ttf?new r.Text(this.text,{font:this.font,fill:this.fill}):new r.extras.BitmapText(this.text,{font:this.font})
const i=new r.Container
return i.addChild(n),new f({context:t,parent:e,object:i,concerns:[this.display],bindings:[[this.data,t=>{n.text=this.text.replace("%s",t),n.updateText(),n.x=n.width*-this.align}]]})}},D=h()("scintillator:compiler"),L={skin:E,sprite:C,group:x,object:y,text:k,if:A}
class M{constructor(t){Object.assign(this,t),this._defs=new Map}compile(t){const e=t[0].nodeName
D("compiling",t[0])
const n=M.getNodeClass(e)
if(!n)throw new Error("Invalid node name: "+e)
return n.compile(this,t)}compileChildren(t){const e=[]
for(const n of Array.from(t.children())){const t=n.nodeName
if("defs"===t)this.compileDefs(a()(n))
else if("use"===t)e.push(this.getDef(n.getAttribute("def")))
else{M.getNodeClass(t)&&e.push(this.compile(a()(n)))}}return e}compileDefs(t){for(const e of Array.from(t.children())){const t=e.getAttribute("id")
if(!t)throw new Error("A def should have an id: "+e.nodeName)
this._defs.set(t,this.compile(a()(e)))}}getDef(t){const e=this._defs.get(t)
if(!e)throw new Error("Cannot find def: "+t)
return e}static getNodeClass(t){return L[t]}}const j=M
var O=n(89599),T=n.n(O)
const P=class{constructor(){this._map={}}add(t,e){this._map[t]=e}get(t){if(!(t in this._map))throw new Error("Not registered: "+t)
return this._map[t]}get urls(){return T().values(this._map)}},S=h()("scintillator:loader")
async function R(t,e){S("load XML from %s",t)
const n=await(i=t,fetch(i).then(t=>t.text()).then(t=>a()((new DOMParser).parseFromString(t,"text/xml").documentElement)))
var i
const s=new P,o=new Set
for(const t of Array.from(n.find("[image]")))o.add(a()(t).attr("image"))
for(const t of Array.from(n.find("[font-src]")))o.add(a()(t).attr("font-src"))
const c=new URL(t,"file://")
for(const t of o){const e=new URL(t,c)
if("file:"===e.protocol){const{pathname:n,search:r,hash:i}=e
s.add(t,n+r+i)}else s.add(t,e.toString())}return await function(t,e){return S("loading resources"),new Promise(function(n){if(0===t.urls.length)return n()
const i=new r.loaders.Loader
for(const e of t.urls)i.add(e,e)
i.once("complete",function(){S("resources finished loading"),n()}),e&&(e.formatter=l.u_,i.once("complete",function(){e.report(100,100)}),i.on("progress",function(){e.report(i.progress,100)})),i.load()})}(s,e),S("compiling"),new j({resources:s}).compile(n)}function B({displayMode:t}={}){return"touch3d"===t?"/skins/default/skin_touch3d.xml":window.innerWidth<window.innerHeight?"/skins/default/skin_touch.xml":"/skins/default/skin_screen.xml"}},3109:(t,e,n)=>{n.d(e,{ZP:()=>p,fw:()=>l,pg:()=>f,u8:()=>u})
var r=n(89599),i=n.n(r),s=n(71002),o=n.n(s),a=n(23838),c=n.n(a)
const h=t=>Object.assign({},t,{data:c()(t.data)})
class l{constructor(t,e){this._timeKey=e||"t",this._properties=i()(t).map(t=>i().map(t.data,"name")).flatten().thru(t=>new Set(t)).value(),this._animations=i().map(t,h),this._events=i().uniq(i().map(t,"on"))}prop(t,e){return this._properties.has(t)?n=>{const r=this._getAnimation(n)
return Object.hasOwn(r,t)?r[t]:e(n)}:e}_getAnimation(t){const e=i()(this._events).filter(e=>""===e||e in t).maxBy(e=>t[e]||0),n=t[this._timeKey]-(t[e]||0),r=this._animations.filter(t=>t.on===e).map(t=>t.data.values(n))
return Object.assign({},...r)}static compile(t,e){const n=Array.from(e.children("animation")),r=i().map(n,t=>u(o()(t))),s=e.attr("t")||"t"
return new l(r,s)}}function u(t){const e=i().map(Array.from(t.children("keyframe")),f),n={}
for(const t of e){const e=+t.t,r=t.ease||"linear"
if(isNaN(e))throw new Error('Expected keyframe to have "t" attribute')
for(const i in t){if("t"===i||"ease"===i)continue
const s=+t[i];(n[i]||(n[i]=d(i))).keyframes.push({time:e,value:s,ease:r})}}return{on:t.attr("on")||"",data:i().values(n)}}function d(t){return{name:t,keyframes:[]}}function f(t){return i()(t.attributes).map(t=>[t.name.toLowerCase(),t.value]).fromPairs().value()}const p=l}}])

//# sourceMappingURL=gameEngine-1aefa49a62bf1e54b8c7.js.map