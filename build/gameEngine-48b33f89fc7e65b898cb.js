"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[236],{36259:function(t){function e(t,n,r,i){this.message=t,this.expected=n,this.found=r,this.location=i,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}!function(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}(e,Error),e.buildMessage=function(t,e){var n={literal:function(t){return'"'+i(t.text)+'"'},class:function(t){var e,n=""
for(e=0;e<t.parts.length;e++)n+=t.parts[e]instanceof Array?s(t.parts[e][0])+"-"+s(t.parts[e][1]):s(t.parts[e])
return"["+(t.inverted?"^":"")+n+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}}
function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function i(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+r(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+r(t)}))}function s(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+r(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+r(t)}))}return"Expected "+function(t){var e,r,i,s=new Array(t.length)
for(e=0;e<t.length;e++)s[e]=(i=t[e],n[i.type](i))
if(s.sort(),s.length>0){for(e=1,r=1;e<s.length;e++)s[e-1]!==s[e]&&(s[r]=s[e],r++)
s.length=r}switch(s.length){case 1:return s[0]
case 2:return s[0]+" or "+s[1]
default:return s.slice(0,-1).join(", ")+", or "+s[s.length-1]}}(t)+" but "+function(t){return t?'"'+i(t)+'"':"end of input"}(e)+" found."},t.exports={SyntaxError:e,parse:function(t,n){n=void 0!==n?n:{}
var r,i={},s={expr:Q},a=Q,o="||",c=z("||",!1),h=function(t,e){return function(t,e){return t+e.map(st).join("")}(t,e)},l="&&",u=z("&&",!1),f="+",d=z("+",!1),p="-",_=z("-",!1),g=z("*",!1),m=z("/",!1),w=z("%",!1),v=z("(",!1),x=z(")",!1),y=z("!",!1),b=Y("number"),A=/^[eE]/,E=X(["e","E"],!1,!1),C=/^[0-9]/,k=X([["0","9"]],!1,!1),D=z(".",!1),j=z("0",!1),M=/^[1-9]/,L=X([["1","9"]],!1,!1),O=/^[a-zA-Z]/,S=X([["a","z"],["A","Z"]],!1,!1),T=/^[a-zA-Z0-9_]/,P=X([["a","z"],["A","Z"],["0","9"],"_"],!1,!1),R=Y("whitespace"),N=/^[ \t\n\r]/,B=X([" ","\t","\n","\r"],!1,!1),I=0,Z=0,F=[{line:1,column:1}],U=0,K=[],W=0
if("startRule"in n){if(!(n.startRule in s))throw new Error("Can't start parsing from rule \""+n.startRule+'".')
a=s[n.startRule]}function q(){return t.substring(Z,I)}function z(t,e){return{type:"literal",text:t,ignoreCase:e}}function X(t,e,n){return{type:"class",parts:t,inverted:e,ignoreCase:n}}function Y(t){return{type:"other",description:t}}function $(e){var n,r=F[e]
if(r)return r
for(n=e-1;!F[n];)n--
for(r={line:(r=F[n]).line,column:r.column};n<e;)10===t.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++
return F[e]=r,r}function G(t,e){var n=$(t),r=$(e)
return{start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:r.line,column:r.column}}}function H(t){I<U||(I>U&&(U=I,K=[]),K.push(t))}function J(t,n,r){return new e(e.buildMessage(t,n),t,n,r)}function Q(){return V()}function V(){var e,n,r,s,a,l,u,f
if(e=I,(n=tt())!==i){for(r=[],s=I,(a=it())!==i?(t.substr(I,2)===o?(l=o,I+=2):(l=i,0===W&&H(c)),l!==i&&(u=it())!==i&&(f=tt())!==i?s=a=[a,l,u,f]:(I=s,s=i)):(I=s,s=i);s!==i;)r.push(s),s=I,(a=it())!==i?(t.substr(I,2)===o?(l=o,I+=2):(l=i,0===W&&H(c)),l!==i&&(u=it())!==i&&(f=tt())!==i?s=a=[a,l,u,f]:(I=s,s=i)):(I=s,s=i)
r!==i?(Z=e,e=n=h(n,r)):(I=e,e=i)}else I=e,e=i
return e}function tt(){var e,n,r,s,a,o,c,f
if(e=I,(n=et())!==i){for(r=[],s=I,(a=it())!==i?(t.substr(I,2)===l?(o=l,I+=2):(o=i,0===W&&H(u)),o!==i&&(c=it())!==i&&(f=et())!==i?s=a=[a,o,c,f]:(I=s,s=i)):(I=s,s=i);s!==i;)r.push(s),s=I,(a=it())!==i?(t.substr(I,2)===l?(o=l,I+=2):(o=i,0===W&&H(u)),o!==i&&(c=it())!==i&&(f=et())!==i?s=a=[a,o,c,f]:(I=s,s=i)):(I=s,s=i)
r!==i?(Z=e,e=n=h(n,r)):(I=e,e=i)}else I=e,e=i
return e}function et(){var e,n,r,s,a,o,c,l
if(e=I,(n=nt())!==i){for(r=[],s=I,(a=it())!==i?(43===t.charCodeAt(I)?(o="+",I++):(o=i,0===W&&H(d)),o===i&&(45===t.charCodeAt(I)?(o=p,I++):(o=i,0===W&&H(_))),o!==i&&(c=it())!==i&&(l=nt())!==i?s=a=[a,o,c,l]:(I=s,s=i)):(I=s,s=i);s!==i;)r.push(s),s=I,(a=it())!==i?(43===t.charCodeAt(I)?(o="+",I++):(o=i,0===W&&H(d)),o===i&&(45===t.charCodeAt(I)?(o=p,I++):(o=i,0===W&&H(_))),o!==i&&(c=it())!==i&&(l=nt())!==i?s=a=[a,o,c,l]:(I=s,s=i)):(I=s,s=i)
r!==i?(Z=e,e=n=h(n,r)):(I=e,e=i)}else I=e,e=i
return e}function nt(){var e,n,r,s,a,o,c,l
if(e=I,(n=rt())!==i){for(r=[],s=I,(a=it())!==i?(42===t.charCodeAt(I)?(o="*",I++):(o=i,0===W&&H(g)),o===i&&(47===t.charCodeAt(I)?(o="/",I++):(o=i,0===W&&H(m)),o===i&&(37===t.charCodeAt(I)?(o="%",I++):(o=i,0===W&&H(w)))),o!==i&&(c=it())!==i&&(l=rt())!==i?s=a=[a,o,c,l]:(I=s,s=i)):(I=s,s=i);s!==i;)r.push(s),s=I,(a=it())!==i?(42===t.charCodeAt(I)?(o="*",I++):(o=i,0===W&&H(g)),o===i&&(47===t.charCodeAt(I)?(o="/",I++):(o=i,0===W&&H(m)),o===i&&(37===t.charCodeAt(I)?(o="%",I++):(o=i,0===W&&H(w)))),o!==i&&(c=it())!==i&&(l=rt())!==i?s=a=[a,o,c,l]:(I=s,s=i)):(I=s,s=i)
r!==i?(Z=e,e=n=h(n,r)):(I=e,e=i)}else I=e,e=i
return e}function rt(){var e,n,r,s,a
return e=I,40===t.charCodeAt(I)?(n="(",I++):(n=i,0===W&&H(v)),n!==i&&(r=it())!==i&&(s=V())!==i&&it()!==i?(41===t.charCodeAt(I)?(a=")",I++):(a=i,0===W&&H(x)),a!==i?(Z=e,e=n="("+s+")"):(I=e,e=i)):(I=e,e=i),e===i&&(e=I,33===t.charCodeAt(I)?(n="!",I++):(n=i,0===W&&H(y)),n!==i&&(r=rt())!==i?(Z=e,e=n="!"+r):(I=e,e=i),e===i&&(e=function(){var e,n,r,s,a
W++,e=I,45===t.charCodeAt(I)?(n=p,I++):(n=i,0===W&&H(_))
n===i&&(n=null)
n!==i?(r=function(){var e,n,r,s
48===t.charCodeAt(I)?(e="0",I++):(e=i,0===W&&H(j))
if(e===i)if(e=I,M.test(t.charAt(I))?(n=t.charAt(I),I++):(n=i,0===W&&H(L)),n!==i){for(r=[],C.test(t.charAt(I))?(s=t.charAt(I),I++):(s=i,0===W&&H(k));s!==i;)r.push(s),C.test(t.charAt(I))?(s=t.charAt(I),I++):(s=i,0===W&&H(k))
r!==i?e=n=[n,r]:(I=e,e=i)}else I=e,e=i
return e}(),r!==i?(s=function(){var e,n,r,s
e=I,46===t.charCodeAt(I)?(n=".",I++):(n=i,0===W&&H(D))
if(n!==i){if(r=[],C.test(t.charAt(I))?(s=t.charAt(I),I++):(s=i,0===W&&H(k)),s!==i)for(;s!==i;)r.push(s),C.test(t.charAt(I))?(s=t.charAt(I),I++):(s=i,0===W&&H(k))
else r=i
r!==i?e=n=[n,r]:(I=e,e=i)}else I=e,e=i
return e}(),s===i&&(s=null),s!==i?(a=function(){var e,n,r,s,a
e=I,A.test(t.charAt(I))?(n=t.charAt(I),I++):(n=i,0===W&&H(E))
if(n!==i)if(45===t.charCodeAt(I)?(r=p,I++):(r=i,0===W&&H(_)),r===i&&(43===t.charCodeAt(I)?(r=f,I++):(r=i,0===W&&H(d))),r===i&&(r=null),r!==i){if(s=[],C.test(t.charAt(I))?(a=t.charAt(I),I++):(a=i,0===W&&H(k)),a!==i)for(;a!==i;)s.push(a),C.test(t.charAt(I))?(a=t.charAt(I),I++):(a=i,0===W&&H(k))
else s=i
s!==i?e=n=[n,r,s]:(I=e,e=i)}else I=e,e=i
else I=e,e=i
return e}(),a===i&&(a=null),a!==i?(Z=e,e=n=q()):(I=e,e=i)):(I=e,e=i)):(I=e,e=i)):(I=e,e=i)
W--,e===i&&(n=i,0===W&&H(b))
return e}(),e===i&&(e=function(){var e,n,r,s
e=I,n=[],O.test(t.charAt(I))?(r=t.charAt(I),I++):(r=i,0===W&&H(S))
if(r!==i)for(;r!==i;)n.push(r),O.test(t.charAt(I))?(r=t.charAt(I),I++):(r=i,0===W&&H(S))
else n=i
if(n!==i){for(r=[],T.test(t.charAt(I))?(s=t.charAt(I),I++):(s=i,0===W&&H(P));s!==i;)r.push(s),T.test(t.charAt(I))?(s=t.charAt(I),I++):(s=i,0===W&&H(P))
r!==i?(Z=e,e=n="get("+JSON.stringify(q())+")"):(I=e,e=i)}else I=e,e=i
return e}()))),e}function it(){var e,n
for(W++,e=[],N.test(t.charAt(I))?(n=t.charAt(I),I++):(n=i,0===W&&H(B));n!==i;)e.push(n),N.test(t.charAt(I))?(n=t.charAt(I),I++):(n=i,0===W&&H(B))
return W--,e===i&&(n=i,0===W&&H(R)),e}function st(t){return" "+t[1]+" "+t[3]}if((r=a())!==i&&I===t.length)return r
throw r!==i&&I<t.length&&H({type:"end"}),J(K,U<t.length?t.charAt(U):null,U<t.length?G(U,U+1):G(U,U))}}},33155:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var debug__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45678),debug__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__),_parser_pegjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36259),_parser_pegjs__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_parser_pegjs__WEBPACK_IMPORTED_MODULE_1__)
const log=debug__WEBPACK_IMPORTED_MODULE_0___default()("scintillator:expression")
function createFunction(code){const fn=eval("(function(get) { return "+code+" })")
return fn.displayName="("+code+")",fn.constant=!!/^[-0-9.]+$/.test(code),fn}function Expression(t){log("parsing %s",t)
const e=_parser_pegjs__WEBPACK_IMPORTED_MODULE_1___default().parse(t)
log("parsed %s => %s",t,e)
const n=createFunction(e)
let r
return r=n.constant?n:function(t){return n((function(e){return t[e]}))},r.constant=n.constant,r}__webpack_exports__.Z=Expression},8050:function(t,e,n){n.r(e),n.d(e,{Context:function(){return s},getSkinUrl:function(){return N},load:function(){return R}})
var r=n(213)
function i(t,e){return r.utils.canUseNewCanvasBlendModes=()=>!0,new r.CanvasRenderer(t,e,{transparent:!0})}class s{constructor(t,{touchEventTarget:e}={}){this.refs={},this._skin=t,this._touchEventTarget=e,this._instance=t.instantiate(this),this._renderer=i(t.width,t.height),this.stage=this._instance.object,this.view=this._renderer.view,this.skinData=t.data,this._setupInteractivity()}render(t){this._instance.push(t),this._renderer.render(this.stage)}destroy(){this._instance.destroy(),this._instance=null,this._teardownInteractivity()}get input(){return this._input.get()}ref(t,e){(this.refs[t]||(this.refs[t]=new Set)).add(e)}unref(t,e){const n=this.refs[t]
n&&n.delete(e)}_setupInteractivity(){let t=null,e=[]
const n=e=>{t=e},r=e=>{t=t&&e},i=()=>{t=null},s=t=>{e=[].slice.call(t.touches)},a=this._touchEventTarget||this.view,o=this._skin.width,c=this._skin.height
function h(t,e,n){return{x:(e.clientX-n.left)/n.width*o,y:(e.clientY-n.top)/n.height*c,id:t}}a.addEventListener("mousedown",n,!1),a.addEventListener("mousemove",r,!1),a.addEventListener("mouseup",i,!1),a.addEventListener("touchstart",s,!1),a.addEventListener("touchmove",s,!1),a.addEventListener("touchend",s,!1),this._teardownInteractivity=()=>{a.removeEventListener("mousedown",n,!1),a.removeEventListener("mousemove",r,!1),a.removeEventListener("mouseup",i,!1),a.removeEventListener("touchstart",s,!1),a.removeEventListener("touchmove",s,!1),a.removeEventListener("touchend",s,!1)},this._input={get:()=>{const n=[],r=this.view.getBoundingClientRect()
t&&n.push(h("mouse",t,r))
for(let t=0;t<e.length;t++){const i=e[t]
n.push(h("touch"+i.identifier,i,r))}return n}}}}var a=n(38044),o=n.n(a),c=n(45678),h=n.n(c),l=n(33256)
var u=class{static compile(t,e){let n=new this
return n.compile(t,e),n}},f=n(74278)
var d=class{constructor(t){if(this._context=t.context,this._object=t.object,this._children=t.children,this._bindings=[],this._concerns=[],this.onData=new f.Z(t.onData),this.onDestroy=new f.Z(t.onDestroy),t.bindings)for(let e of t.bindings)this.bind(...e)
if(t.concerns)for(let e of t.concerns)this._concerns.push(e.instantiate(this._context,this))
if(t.children)for(let e of t.children)this._concerns.push(e.instantiate(this._context,this._object))
t.onCreate&&new f.Z(t.onCreate).call(),t.parent&&this.attachTo(t.parent)}bind(...t){let e=function(t){let e
return function(n){e!==n&&(e=n,t(n))}}(t.pop())
1===t.length&&t[0].constant?e(t[0]()):this._bindings.push((n=>{for(var r=0;r<t.length;r++)n=t[r](n)
e(n)}))}attachTo(t){this._parent=t,this._parent.addChild(this._object)}detach(){this._parent&&(this._parent.removeChild(this._object),this._parent=null)}push(t){var e
for(e=0;e<this._bindings.length;e++)this._bindings[e](t)
for(e=0;e<this._concerns.length;e++)this._concerns[e].push(t)
this.onData.call(t)}destroy(){this.detach()
for(var t=0;t<this._concerns.length;t++)this._concerns[t].destroy()
this.onDestroy.call(),this._concerns=null,this._bindings=null,this._parent=null,this._object=null}get object(){return this._object}get parent(){return this._parent}},p=n(33155),_=n(34277)
const g=[{name:"x",default:"0",apply:(t,e)=>t.x=e},{name:"y",default:"0",apply:(t,e)=>t.y=e},{name:"scale-x",default:"1",apply:(t,e)=>t.scale.x=e},{name:"scale-y",default:"1",apply:(t,e)=>t.scale.y=e},{name:"alpha",default:"1",apply:(t,e)=>t.alpha=e},{name:"width",apply:(t,e)=>t.width=e},{name:"height",apply:(t,e)=>t.height=e},{name:"visible",apply:(t,e)=>t.visible=e}]
var m=class extends u{compile(t,e){this._animation=_.ZP.compile(t,e),this._bindings=[]
for(const t of g){const n=e.attr(t.name)||t.default
if(!n)continue
const r=new p.Z(n),i=this._animation.prop(t.name,r)
this._bindings.push({getter:i,apply:t.apply})}this.blendMode=function(t){if("normal"===t)return r.BLEND_MODES.NORMAL
if("screen"===t)return r.BLEND_MODES.SCREEN
throw new Error("Invalid blend mode: "+t)}(e.attr("blend")||"normal"),this.ref=e.attr("ref")||null}instantiate(t,e){const n=e.object,r=[]
let i=null
n.blendMode=this.blendMode
for(let t=0;t<this._bindings.length;t++){const e=this._bindings[t]
r.push([e.getter,e.apply.bind(null,n)])}return this.ref&&(t.ref(this.ref,n),i=()=>t.unref(this.ref,n)),new d({bindings:r,onDestroy:i})}}
function w(t){let e=t.match(/^(\d+)x(\d+)\+(\d+)\+(\d+)$/)
return e?new r.Rectangle(+e[3],+e[4],+e[1],+e[2]):null}class v{constructor(t){this._frame=t}instantiate(t,e){const n=new r.Graphics
return n.beginFill(),n.drawShape(this._frame),n.endFill(),e.object.mask=n,new d({context:t,object:n,parent:e.object})}}var x=class extends u{compile(t,e){this.children=t.compileChildren(e),this.display=m.compile(t,e)
const n=w(e.attr("mask")||"")
n&&(this.mask=new v(n))}instantiate(t,e){const n=new r.Container,i=[this.display]
return this.mask&&i.push(this.mask),new d({context:t,object:n,parent:e,concerns:i,children:this.children})}}
var y=class extends u{compile(t,e){const n=t.compileChildren(e)
if(1!==n.length)throw new Error("Expected exactly 1 children, "+n.length+" found")
this.child=n[0],this.key=new p.Z(e.attr("key")),this.value=String(e.attr("value"))}instantiate(t,e){const n=new r.Container,i=this.key,s=this.value,a=this.child
let o=null
return new d({context:t,parent:e,object:n,onData:e=>{String(i(e))===s?(null===o&&(o=a.instantiate(t,n)),o.push(e)):null!==o&&(o.destroy(),o=null)}})}}
function b(t,e,n){return{instantiate(r,i){const s=new Map,a=[]
return function(){let t
for(let s=0;s<n;s++)t=e.instantiate(r,i.object),t.detach(),a.push(t)}(),new d({context:r,onData:e=>{!function(t){const e=new Set(s.keys())
let n,r,i
t||(t=[])
for(let a=0;a<t.length;a++)r=t[a],n=r.key,s.has(n)?i=s.get(n):(i=o(),s.set(n,i)),i.push(r),e.delete(n)
for(n of e)i=s.get(n),i.detach(),s.delete(n),a.push(i)}(t(e))}})
function o(){let t=a.pop()
return t?t.attachTo(i.object):t=e.instantiate(r,i.object),t}}}}var A=class extends u{compile(t,e){if(this.children=t.compileChildren(e),1!==this.children.length)throw new Error("Expected exactly 1 children, "+this.children.length+" given")
this.pool=+e.attr("pool")||1,this.key=new p.Z(e.attr("key"))}instantiate(t,e){const n=new r.particles.ParticleContainer(void 0,{position:!0,alpha:!0}),i=new b(this.key,this.children[0],this.pool)
return new d({context:t,parent:e,object:n,concerns:[i]})}}
var E=class extends u{compile(t,e){this.children=t.compileChildren(e),this.width=+e.attr("width"),this.height=+e.attr("height"),this.data=e.data()}instantiate(t){const e=new r.Stage(591879)
return new d({context:t,object:e,children:this.children})}}
var C=class extends u{compile(t,e){this.url=t.resources.get(e.attr("image")),this.display=m.compile(t,e),this.frame=w(e.attr("frame")||""),this.anchorX=+e.attr("anchor-x")||0,this.anchorY=+e.attr("anchor-y")||0}instantiate(t,e){const n=new r.Sprite(this.getTexture())
return n.anchor.x=this.anchorX,n.anchor.y=this.anchorY,new d({context:t,object:n,parent:e,concerns:[this.display]})}getTexture(){if(this._texture)return this._texture
const t=r.SCALE_MODES.NEAREST,e=r.BaseTexture.fromImage(this.url,void 0,t),n=new r.Texture(e,this.frame)
return this._texture=n,n}}
var k=class extends u{compile(t,e){this.font=e.attr("font"),this.text=e.attr("text"),this.data=new p.Z(e.attr("data")||"0"),this.display=m.compile(t,e),this.ttf=!e.attr("font-src"),this.fill=e.attr("fill"),this.align="left"===e.attr("align")?0:"right"===e.attr("align")?1:.5}instantiate(t,e){let n
n=this.ttf?new r.Text(this.text,{font:this.font,fill:this.fill}):new r.extras.BitmapText(this.text,{font:this.font})
const i=new r.Container
return i.addChild(n),new d({context:t,parent:e,object:i,concerns:[this.display],bindings:[[this.data,t=>{n.text=this.text.replace("%s",t),n.updateText(),n.x=n.width*-this.align}]]})}}
const D=h()("scintillator:compiler"),j={skin:E,sprite:C,group:x,object:A,text:k,if:y}
class M{constructor(t){Object.assign(this,t),this._defs=new Map}compile(t){const e=t[0].nodeName
D("compiling",t[0])
const n=M.getNodeClass(e)
if(!n)throw new Error("Invalid node name: "+e)
return n.compile(this,t)}compileChildren(t){const e=[]
for(const n of Array.from(t.children())){const t=n.nodeName
if("defs"===t)this.compileDefs(o()(n))
else if("use"===t)e.push(this.getDef(n.getAttribute("def")))
else{M.getNodeClass(t)&&e.push(this.compile(o()(n)))}}return e}compileDefs(t){for(const e of Array.from(t.children())){const t=e.getAttribute("id")
if(!t)throw new Error("A def should have an id: "+e.nodeName)
this._defs.set(t,this.compile(o()(e)))}}getDef(t){const e=this._defs.get(t)
if(!e)throw new Error("Cannot find def: "+t)
return e}static getNodeClass(t){return j[t]}}var L=M,O=n(62270),S=n.n(O)
var T=class{constructor(){this._map={}}add(t,e){this._map[t]=e}get(t){if(!(t in this._map))throw new Error("Not registered: "+t)
return this._map[t]}get urls(){return S().values(this._map)}}
const P=h()("scintillator:loader")
async function R(t,e){P("load XML from %s",t)
const n=await(i=t,fetch(i).then((t=>t.text())).then((t=>o()((new DOMParser).parseFromString(t,"text/xml").documentElement))))
var i
const s=new T,a=new Set
for(const t of Array.from(n.find("[image]")))a.add(o()(t).attr("image"))
for(const t of Array.from(n.find("[font-src]")))a.add(o()(t).attr("font-src"))
const c=new URL(t,"file://")
for(const t of a){const e=new URL(t,c)
if("file:"===e.protocol){const{pathname:n,search:r,hash:i}=e
s.add(t,n+r+i)}else s.add(t,e.toString())}return await function(t,e){return P("loading resources"),new Promise((function(n){if(0===t.urls.length)return n()
const i=new r.loaders.Loader
for(const e of t.urls)i.add(e,e)
i.once("complete",(function(){P("resources finished loading"),n()})),e&&(e.formatter=l.u_,i.once("complete",(function(){e.report(100,100)})),i.on("progress",(function(){e.report(i.progress,100)}))),i.load()}))}(s,e),P("compiling"),new L({resources:s}).compile(n)}function N({displayMode:t}={}){return"touch3d"===t?"/skins/default/skin_touch3d.xml":window.innerWidth<window.innerHeight?"/skins/default/skin_touch.xml":"/skins/default/skin_screen.xml"}},34277:function(t,e,n){n.d(e,{fw:function(){return l},pg:function(){return f},u8:function(){return u}})
var r=n(62270),i=n.n(r),s=n(38044),a=n.n(s),o=n(23838),c=n.n(o)
const h=t=>Object.assign({},t,{data:c()(t.data)})
class l{constructor(t,e){this._timeKey=e||"t",this._properties=i()(t).map((t=>i().map(t.data,"name"))).flatten().thru((t=>new Set(t))).value(),this._animations=i().map(t,h),this._events=i().uniq(i().map(t,"on"))}prop(t,e){return this._properties.has(t)?n=>{const r=this._getAnimation(n)
return r.hasOwnProperty(t)?r[t]:e(n)}:e}_getAnimation(t){const e=i()(this._events).filter((e=>""===e||e in t)).maxBy((e=>t[e]||0)),n=t[this._timeKey]-(t[e]||0),r=this._animations.filter((t=>t.on===e)).map((t=>t.data.values(n)))
return Object.assign({},...r)}static compile(t,e){const n=Array.from(e.children("animation")),r=i().map(n,(t=>u(a()(t)))),s=e.attr("t")||"t"
return new l(r,s)}}function u(t){const e=i().map(Array.from(t.children("keyframe")),f),n={}
for(const t of e){const e=+t.t,r=t.ease||"linear"
if(isNaN(e))throw new Error('Expected keyframe to have "t" attribute')
for(const i in t){if("t"===i||"ease"===i)continue
const s=+t[i];(n[i]||(n[i]={name:i,keyframes:[]})).keyframes.push({time:e,value:s,ease:r})}}return{on:t.attr("on")||"",data:i().values(n)}}function f(t){return i()(t.attributes).map((t=>[t.name.toLowerCase(),t.value])).fromPairs().value()}e.ZP=l}}])

//# sourceMappingURL=gameEngine-48b33f89fc7e65b898cb.js.map