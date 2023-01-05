/*! For license information please see 602-10e114198cdc60215e5b.js.LICENSE.txt */
(this.webpackChunk=this.webpackChunk||[]).push([[602],{92279:function(t,e){"use strict"
e.byteLength=function(t){var e=a(t),r=e[0],n=e[1]
return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=a(t),f=i[0],u=i[1],c=new o(function(t,e,r){return 3*(e+r)/4-r}(0,f,u)),s=0,p=u>0?f-4:f
for(r=0;r<p;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],c[s++]=e>>16&255,c[s++]=e>>8&255,c[s++]=255&e
2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,c[s++]=255&e)
1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,c[s++]=e>>8&255,c[s++]=255&e)
return c},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],f=16383,u=0,a=n-o;u<a;u+=f)i.push(c(t,u,u+f>a?a:u+f))
1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="))
return i.join("")}
for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,u=i.length;f<u;++f)r[f]=i[f],n[i.charCodeAt(f)]=f
function a(t){var e=t.length
if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var r=t.indexOf("=")
return-1===r&&(r=e),[r,r===e?0:4-r%4]}function c(t,e,n){for(var o,i,f=[],u=e;u<n;u+=3)o=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i])
return f.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},795:function(t,e,r){"use strict"
const n=r(92279),o=r(8897),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null
e.Buffer=a,e.SlowBuffer=function(t){+t!=t&&(t=0)
return a.alloc(+t)},e.INSPECT_MAX_BYTES=50
const f=2147483647
function u(t){if(t>f)throw new RangeError('The value "'+t+'" is invalid for option "size"')
const e=new Uint8Array(t)
return Object.setPrototypeOf(e,a.prototype),e}function a(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number')
return p(t)}return c(t,e,r)}function c(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8")
if(!a.isEncoding(e))throw new TypeError("Unknown encoding: "+e)
const r=0|g(t,e)
let n=u(r)
const o=n.write(t,e)
o!==r&&(n=n.slice(0,o))
return n}(t,e)
if(ArrayBuffer.isView(t))return function(t){if(q(t,Uint8Array)){const e=new Uint8Array(t)
return l(e.buffer,e.byteOffset,e.byteLength)}return y(t)}(t)
if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)
if(q(t,ArrayBuffer)||t&&q(t.buffer,ArrayBuffer))return l(t,e,r)
if("undefined"!=typeof SharedArrayBuffer&&(q(t,SharedArrayBuffer)||t&&q(t.buffer,SharedArrayBuffer)))return l(t,e,r)
if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number')
const n=t.valueOf&&t.valueOf()
if(null!=n&&n!==t)return a.from(n,e,r)
const o=function(t){if(a.isBuffer(t)){const e=0|h(t.length),r=u(e)
return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||Z(t.length)?u(0):y(t)
if("Buffer"===t.type&&Array.isArray(t.data))return y(t.data)}(t)
if(o)return o
if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return a.from(t[Symbol.toPrimitive]("string"),e,r)
throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number')
if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return s(t),u(t<0?0:0|h(t))}function y(t){const e=t.length<0?0:0|h(t.length),r=u(e)
for(let n=0;n<e;n+=1)r[n]=255&t[n]
return r}function l(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds')
if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds')
let n
return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,a.prototype),n}function h(t){if(t>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes")
return 0|t}function g(t,e){if(a.isBuffer(t))return t.length
if(ArrayBuffer.isView(t)||q(t,ArrayBuffer))return t.byteLength
if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t)
const r=t.length,n=arguments.length>2&&!0===arguments[2]
if(!n&&0===r)return 0
let o=!1
for(;;)switch(e){case"ascii":case"latin1":case"binary":return r
case"utf8":case"utf-8":return J(t).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r
case"hex":return r>>>1
case"base64":return H(t).length
default:if(o)return n?-1:J(t).length
e=(""+e).toLowerCase(),o=!0}}function d(t,e,r){let n=!1
if((void 0===e||e<0)&&(e=0),e>this.length)return""
if((void 0===r||r>this.length)&&(r=this.length),r<=0)return""
if((r>>>=0)<=(e>>>=0))return""
for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,r)
case"utf8":case"utf-8":return I(this,e,r)
case"ascii":return U(this,e,r)
case"latin1":case"binary":return P(this,e,r)
case"base64":return O(this,e,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,e,r)
default:if(n)throw new TypeError("Unknown encoding: "+t)
t=(t+"").toLowerCase(),n=!0}}function b(t,e,r){const n=t[e]
t[e]=t[r],t[r]=n}function w(t,e,r,n,o){if(0===t.length)return-1
if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Z(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1
r=t.length-1}else if(r<0){if(!o)return-1
r=0}if("string"==typeof e&&(e=a.from(e,n)),a.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,o)
if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,o)
throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,o){let i,f=1,u=t.length,a=e.length
if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1
f=2,u/=2,a/=2,r/=2}function c(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(o){let n=-1
for(i=r;i<u;i++)if(c(t,i)===c(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===a)return n*f}else-1!==n&&(i-=i-n),n=-1}else for(r+a>u&&(r=u-a),i=r;i>=0;i--){let r=!0
for(let n=0;n<a;n++)if(c(t,i+n)!==c(e,n)){r=!1
break}if(r)return i}return-1}function A(t,e,r,n){r=Number(r)||0
const o=t.length-r
n?(n=Number(n))>o&&(n=o):n=o
const i=e.length
let f
for(n>i/2&&(n=i/2),f=0;f<n;++f){const n=parseInt(e.substr(2*f,2),16)
if(Z(n))return f
t[r+f]=n}return f}function v(t,e,r,n){return Y(J(e,t.length-r),t,r,n)}function E(t,e,r,n){return Y(function(t){const e=[]
for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r))
return e}(e),t,r,n)}function S(t,e,r,n){return Y(H(e),t,r,n)}function B(t,e,r,n){return Y(function(t,e){let r,n,o
const i=[]
for(let f=0;f<t.length&&!((e-=2)<0);++f)r=t.charCodeAt(f),n=r>>8,o=r%256,i.push(o),i.push(n)
return i}(e,t.length-r),t,r,n)}function O(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function I(t,e,r){r=Math.min(t.length,r)
const n=[]
let o=e
for(;o<r;){const e=t[o]
let i=null,f=e>239?4:e>223?3:e>191?2:1
if(o+f<=r){let r,n,u,a
switch(f){case 1:e<128&&(i=e)
break
case 2:r=t[o+1],128==(192&r)&&(a=(31&e)<<6|63&r,a>127&&(i=a))
break
case 3:r=t[o+1],n=t[o+2],128==(192&r)&&128==(192&n)&&(a=(15&e)<<12|(63&r)<<6|63&n,a>2047&&(a<55296||a>57343)&&(i=a))
break
case 4:r=t[o+1],n=t[o+2],u=t[o+3],128==(192&r)&&128==(192&n)&&128==(192&u)&&(a=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&u,a>65535&&a<1114112&&(i=a))}}null===i?(i=65533,f=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=f}return function(t){const e=t.length
if(e<=j)return String.fromCharCode.apply(String,t)
let r="",n=0
for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=j))
return r}(n)}e.kMaxLength=f,a.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}}
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(t,e,r){return c(t,e,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(t,e,r){return function(t,e,r){return s(t),t<=0?u(t):void 0!==e?"string"==typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}(t,e,r)},a.allocUnsafe=function(t){return p(t)},a.allocUnsafeSlow=function(t){return p(t)},a.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==a.prototype},a.compare=function(t,e){if(q(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),q(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(t)||!a.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array')
if(t===e)return 0
let r=t.length,n=e.length
for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o]
break}return r<n?-1:n<r?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},a.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===t.length)return a.alloc(0)
let r
if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length
const n=a.allocUnsafe(e)
let o=0
for(r=0;r<t.length;++r){let e=t[r]
if(q(e,Uint8Array))o+e.length>n.length?(a.isBuffer(e)||(e=a.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o)
else{if(!a.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers')
e.copy(n,o)}o+=e.length}return n},a.byteLength=g,a.prototype._isBuffer=!0,a.prototype.swap16=function(){const t=this.length
if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(let e=0;e<t;e+=2)b(this,e,e+1)
return this},a.prototype.swap32=function(){const t=this.length
if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(let e=0;e<t;e+=4)b(this,e,e+3),b(this,e+1,e+2)
return this},a.prototype.swap64=function(){const t=this.length
if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(let e=0;e<t;e+=8)b(this,e,e+7),b(this,e+1,e+6),b(this,e+2,e+5),b(this,e+3,e+4)
return this},a.prototype.toString=function(){const t=this.length
return 0===t?"":0===arguments.length?I(this,0,t):d.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){let t=""
const r=e.INSPECT_MAX_BYTES
return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(t,e,r,n,o){if(q(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t)
if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index")
if(n>=o&&e>=r)return 0
if(n>=o)return-1
if(e>=r)return 1
if(this===t)return 0
let i=(o>>>=0)-(n>>>=0),f=(r>>>=0)-(e>>>=0)
const u=Math.min(i,f),c=this.slice(n,o),s=t.slice(e,r)
for(let t=0;t<u;++t)if(c[t]!==s[t]){i=c[t],f=s[t]
break}return i<f?-1:f<i?1:0},a.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},a.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},a.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0
else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0
else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-e
if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds")
n||(n="utf8")
let i=!1
for(;;)switch(n){case"hex":return A(this,t,e,r)
case"utf8":case"utf-8":return v(this,t,e,r)
case"ascii":case"latin1":case"binary":return E(this,t,e,r)
case"base64":return S(this,t,e,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,e,r)
default:if(i)throw new TypeError("Unknown encoding: "+n)
n=(""+n).toLowerCase(),i=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
const j=4096
function U(t,e,r){let n=""
r=Math.min(t.length,r)
for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o])
return n}function P(t,e,r){let n=""
r=Math.min(t.length,r)
for(let o=e;o<r;++o)n+=String.fromCharCode(t[o])
return n}function T(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n)
let o=""
for(let n=e;n<r;++n)o+=X[t[n]]
return o}function R(t,e,r){const n=t.slice(e,r)
let o=""
for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1])
return o}function x(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint")
if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function F(t,e,r,n,o,i){if(!a.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance')
if(e>o||e<i)throw new RangeError('"value" argument is out of bounds')
if(r+n>t.length)throw new RangeError("Index out of range")}function k(t,e,r,n,o){z(e,n,o,t,r,7)
let i=Number(e&BigInt(4294967295))
t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i
let f=Number(e>>BigInt(32)&BigInt(4294967295))
return t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,r}function M(t,e,r,n,o){z(e,n,o,t,r,7)
let i=Number(e&BigInt(4294967295))
t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i
let f=Number(e>>BigInt(32)&BigInt(4294967295))
return t[r+3]=f,f>>=8,t[r+2]=f,f>>=8,t[r+1]=f,f>>=8,t[r]=f,r+8}function _(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range")
if(r<0)throw new RangeError("Index out of range")}function N(t,e,r,n,i){return e=+e,r>>>=0,i||_(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function L(t,e,r,n,i){return e=+e,r>>>=0,i||_(t,0,r,8),o.write(t,e,r,n,52,8),r+8}a.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t)
const n=this.subarray(t,e)
return Object.setPrototypeOf(n,a.prototype),n},a.prototype.readUintLE=a.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length)
let n=this[t],o=1,i=0
for(;++i<e&&(o*=256);)n+=this[t+i]*o
return n},a.prototype.readUintBE=a.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length)
let n=this[t+--e],o=1
for(;e>0&&(o*=256);)n+=this[t+--e]*o
return n},a.prototype.readUint8=a.prototype.readUInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),this[t]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readBigUInt64LE=K((function(t){G(t>>>=0,"offset")
const e=this[t],r=this[t+7]
void 0!==e&&void 0!==r||W(t,this.length-8)
const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+r*2**24
return BigInt(n)+(BigInt(o)<<BigInt(32))})),a.prototype.readBigUInt64BE=K((function(t){G(t>>>=0,"offset")
const e=this[t],r=this[t+7]
void 0!==e&&void 0!==r||W(t,this.length-8)
const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+r
return(BigInt(n)<<BigInt(32))+BigInt(o)})),a.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length)
let n=this[t],o=1,i=0
for(;++i<e&&(o*=256);)n+=this[t+i]*o
return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},a.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length)
let n=e,o=1,i=this[t+--n]
for(;n>0&&(o*=256);)i+=this[t+--n]*o
return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},a.prototype.readInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},a.prototype.readInt16LE=function(t,e){t>>>=0,e||x(t,2,this.length)
const r=this[t]|this[t+1]<<8
return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(t,e){t>>>=0,e||x(t,2,this.length)
const r=this[t+1]|this[t]<<8
return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readBigInt64LE=K((function(t){G(t>>>=0,"offset")
const e=this[t],r=this[t+7]
void 0!==e&&void 0!==r||W(t,this.length-8)
const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24)
return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),a.prototype.readBigInt64BE=K((function(t){G(t>>>=0,"offset")
const e=this[t],r=this[t+7]
void 0!==e&&void 0!==r||W(t,this.length-8)
const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t]
return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),a.prototype.readFloatLE=function(t,e){return t>>>=0,e||x(t,4,this.length),o.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return t>>>=0,e||x(t,4,this.length),o.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return t>>>=0,e||x(t,8,this.length),o.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return t>>>=0,e||x(t,8,this.length),o.read(this,t,!1,52,8)},a.prototype.writeUintLE=a.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){F(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=1,i=0
for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255
return e+r},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){F(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=r-1,i=1
for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255
return e+r},a.prototype.writeUint8=a.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,1,255,0),this[e]=255&t,e+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeBigUInt64LE=K((function(t,e=0){return k(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeBigUInt64BE=K((function(t,e=0){return M(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),a.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1)
F(this,t,e,r,n-1,-n)}let o=0,i=1,f=0
for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===f&&0!==this[e+o-1]&&(f=1),this[e+o]=(t/i>>0)-f&255
return e+r},a.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1)
F(this,t,e,r,n-1,-n)}let o=r-1,i=1,f=0
for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===f&&0!==this[e+o+1]&&(f=1),this[e+o]=(t/i>>0)-f&255
return e+r},a.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},a.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},a.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||F(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeBigInt64LE=K((function(t,e=0){return k(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeBigInt64BE=K((function(t,e=0){return M(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),a.prototype.writeFloatLE=function(t,e,r){return N(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return N(this,t,e,!1,r)},a.prototype.writeDoubleLE=function(t,e,r){return L(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return L(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,n){if(!a.isBuffer(t))throw new TypeError("argument should be a Buffer")
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0
if(0===t.length||0===this.length)return 0
if(e<0)throw new RangeError("targetStart out of bounds")
if(r<0||r>=this.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("sourceEnd out of bounds")
n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r)
const o=n-r
return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},a.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string")
if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n)
if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t))
if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index")
if(r<=e)return this
let o
if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t
else{const i=a.isBuffer(t)?t:a.from(t,n),f=i.length
if(0===f)throw new TypeError('The value "'+t+'" is invalid for argument "value"')
for(o=0;o<r-e;++o)this[o+e]=i[o%f]}return this}
const C={}
function D(t,e,r){C[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function $(t){let e="",r=t.length
const n="-"===t[0]?1:0
for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`
return`${t.slice(0,r)}${e}`}function z(t,e,r,n,o,i){if(t>r||t<e){const n="bigint"==typeof e?"n":""
let o
throw o=i>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new C.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,r){G(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||W(e,t.length-(r+1))}(n,o,i)}function G(t,e){if("number"!=typeof t)throw new C.ERR_INVALID_ARG_TYPE(e,"number",t)}function W(t,e,r){if(Math.floor(t)!==t)throw G(t,r),new C.ERR_OUT_OF_RANGE(r||"offset","an integer",t)
if(e<0)throw new C.ERR_BUFFER_OUT_OF_BOUNDS
throw new C.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r
return Number.isInteger(r)&&Math.abs(r)>2**32?o=$(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=$(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n}),RangeError)
const V=/[^+/0-9A-Za-z-_]/g
function J(t,e){let r
e=e||1/0
const n=t.length
let o=null
const i=[]
for(let f=0;f<n;++f){if(r=t.charCodeAt(f),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189)
continue}if(f+1===n){(e-=3)>-1&&i.push(239,191,189)
continue}o=r
continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r
continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189)
if(o=null,r<128){if((e-=1)<0)break
i.push(r)}else if(r<2048){if((e-=2)<0)break
i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break
i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point")
if((e-=4)<0)break
i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function H(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(V,"")).length<2)return""
for(;t.length%4!=0;)t+="="
return t}(t))}function Y(t,e,r,n){let o
for(o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o]
return o}function q(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Z(t){return t!=t}const X=function(){const t="0123456789abcdef",e=new Array(256)
for(let r=0;r<16;++r){const n=16*r
for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}()
function K(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},54703:function(t,e,r){"use strict"
var n=r(24387),o=r(13349),i=o(n("String.prototype.indexOf"))
t.exports=function(t,e){var r=n(t,!!e)
return"function"==typeof r&&i(t,".prototype.")>-1?o(r):r}},13349:function(t,e,r){"use strict"
var n=r(70606),o=r(24387),i=o("%Function.prototype.apply%"),f=o("%Function.prototype.call%"),u=o("%Reflect.apply%",!0)||n.call(f,i),a=o("%Object.getOwnPropertyDescriptor%",!0),c=o("%Object.defineProperty%",!0),s=o("%Math.max%")
if(c)try{c({},"a",{value:1})}catch(t){c=null}t.exports=function(t){var e=u(n,f,arguments)
if(a&&c){var r=a(e,"length")
r.configurable&&c(e,"length",{value:1+s(0,t.length-(arguments.length-1))})}return e}
var p=function(){return u(n,i,arguments)}
c?c(t.exports,"apply",{value:p}):t.exports.apply=p},82730:function(t,e,r){"use strict"
var n=r(23213),o=Object.prototype.toString,i=Object.prototype.hasOwnProperty,f=function(t,e,r){for(var n=0,o=t.length;n<o;n++)i.call(t,n)&&(null==r?e(t[n],n,t):e.call(r,t[n],n,t))},u=function(t,e,r){for(var n=0,o=t.length;n<o;n++)null==r?e(t.charAt(n),n,t):e.call(r,t.charAt(n),n,t)},a=function(t,e,r){for(var n in t)i.call(t,n)&&(null==r?e(t[n],n,t):e.call(r,t[n],n,t))}
t.exports=function(t,e,r){if(!n(e))throw new TypeError("iterator must be a function")
var i
arguments.length>=3&&(i=r),"[object Array]"===o.call(t)?f(t,e,i):"string"==typeof t?u(t,e,i):a(t,e,i)}},55892:function(t){"use strict"
var e="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,n=Object.prototype.toString,o="[object Function]"
t.exports=function(t){var i=this
if("function"!=typeof i||n.call(i)!==o)throw new TypeError(e+i)
for(var f,u=r.call(arguments,1),a=function(){if(this instanceof f){var e=i.apply(this,u.concat(r.call(arguments)))
return Object(e)===e?e:this}return i.apply(t,u.concat(r.call(arguments)))},c=Math.max(0,i.length-u.length),s=[],p=0;p<c;p++)s.push("$"+p)
if(f=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(a),i.prototype){var y=function(){}
y.prototype=i.prototype,f.prototype=new y,y.prototype=null}return f}},70606:function(t,e,r){"use strict"
var n=r(55892)
t.exports=Function.prototype.bind||n},24387:function(t,e,r){"use strict"
var n,o=SyntaxError,i=Function,f=TypeError,u=function(t){try{return i('"use strict"; return ('+t+").constructor;")()}catch(t){}},a=Object.getOwnPropertyDescriptor
if(a)try{a({},"")}catch(t){a=null}var c=function(){throw new f},s=a?function(){try{return c}catch(t){try{return a(arguments,"callee").get}catch(t){return c}}}():c,p=r(24202)(),y=Object.getPrototypeOf||function(t){return t.__proto__},l={},h="undefined"==typeof Uint8Array?n:y(Uint8Array),g={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":p?y([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":l,"%AsyncGenerator%":l,"%AsyncGeneratorFunction%":l,"%AsyncIteratorPrototype%":l,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":l,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":p?y(y([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&p?y((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&p?y((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":p?y(""[Symbol.iterator]()):n,"%Symbol%":p?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":s,"%TypedArray%":h,"%TypeError%":f,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet},d=function t(e){var r
if("%AsyncFunction%"===e)r=u("async function () {}")
else if("%GeneratorFunction%"===e)r=u("function* () {}")
else if("%AsyncGeneratorFunction%"===e)r=u("async function* () {}")
else if("%AsyncGenerator%"===e){var n=t("%AsyncGeneratorFunction%")
n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===e){var o=t("%AsyncGenerator%")
o&&(r=y(o.prototype))}return g[e]=r,r},b={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},w=r(70606),m=r(36168),A=w.call(Function.call,Array.prototype.concat),v=w.call(Function.apply,Array.prototype.splice),E=w.call(Function.call,String.prototype.replace),S=w.call(Function.call,String.prototype.slice),B=w.call(Function.call,RegExp.prototype.exec),O=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,I=/\\(\\)?/g,j=function(t){var e=S(t,0,1),r=S(t,-1)
if("%"===e&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`")
if("%"===r&&"%"!==e)throw new o("invalid intrinsic syntax, expected opening `%`")
var n=[]
return E(t,O,(function(t,e,r,o){n[n.length]=r?E(o,I,"$1"):e||t})),n},U=function(t,e){var r,n=t
if(m(b,n)&&(n="%"+(r=b[n])[0]+"%"),m(g,n)){var i=g[n]
if(i===l&&(i=d(n)),void 0===i&&!e)throw new f("intrinsic "+t+" exists, but is not available. Please file an issue!")
return{alias:r,name:n,value:i}}throw new o("intrinsic "+t+" does not exist!")}
t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new f("intrinsic name must be a non-empty string")
if(arguments.length>1&&"boolean"!=typeof e)throw new f('"allowMissing" argument must be a boolean')
if(null===B(/^%?[^%]*%?$/,t))throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name")
var r=j(t),n=r.length>0?r[0]:"",i=U("%"+n+"%",e),u=i.name,c=i.value,s=!1,p=i.alias
p&&(n=p[0],v(r,A([0,1],p)))
for(var y=1,l=!0;y<r.length;y+=1){var h=r[y],d=S(h,0,1),b=S(h,-1)
if(('"'===d||"'"===d||"`"===d||'"'===b||"'"===b||"`"===b)&&d!==b)throw new o("property names with quotes must have matching quotes")
if("constructor"!==h&&l||(s=!0),m(g,u="%"+(n+="."+h)+"%"))c=g[u]
else if(null!=c){if(!(h in c)){if(!e)throw new f("base intrinsic for "+t+" exists, but the property is not available.")
return}if(a&&y+1>=r.length){var w=a(c,h)
c=(l=!!w)&&"get"in w&&!("originalValue"in w.get)?w.get:c[h]}else l=m(c,h),c=c[h]
l&&!s&&(g[u]=c)}}return c}},69869:function(t,e,r){"use strict"
var n=r(24387)("%Object.getOwnPropertyDescriptor%",!0)
if(n)try{n([],"length")}catch(t){n=null}t.exports=n},24202:function(t,e,r){"use strict"
var n="undefined"!=typeof Symbol&&Symbol,o=r(39262)
t.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}},39262:function(t){"use strict"
t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1
if("symbol"==typeof Symbol.iterator)return!0
var t={},e=Symbol("test"),r=Object(e)
if("string"==typeof e)return!1
if("[object Symbol]"!==Object.prototype.toString.call(e))return!1
if("[object Symbol]"!==Object.prototype.toString.call(r))return!1
for(e in t[e]=42,t)return!1
if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1
if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1
var n=Object.getOwnPropertySymbols(t)
if(1!==n.length||n[0]!==e)return!1
if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1
if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(t,e)
if(42!==o.value||!0!==o.enumerable)return!1}return!0}},95739:function(t,e,r){"use strict"
var n=r(39262)
t.exports=function(){return n()&&!!Symbol.toStringTag}},36168:function(t,e,r){"use strict"
var n=r(70606)
t.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},8897:function(t,e){e.read=function(t,e,r,n,o){var i,f,u=8*o-n-1,a=(1<<u)-1,c=a>>1,s=-7,p=r?o-1:0,y=r?-1:1,l=t[e+p]
for(p+=y,i=l&(1<<-s)-1,l>>=-s,s+=u;s>0;i=256*i+t[e+p],p+=y,s-=8);for(f=i&(1<<-s)-1,i>>=-s,s+=n;s>0;f=256*f+t[e+p],p+=y,s-=8);if(0===i)i=1-c
else{if(i===a)return f?NaN:1/0*(l?-1:1)
f+=Math.pow(2,n),i-=c}return(l?-1:1)*f*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var f,u,a,c=8*i-o-1,s=(1<<c)-1,p=s>>1,y=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:i-1,h=n?1:-1,g=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,f=s):(f=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-f))<1&&(f--,a*=2),(e+=f+p>=1?y/a:y*Math.pow(2,1-p))*a>=2&&(f++,a/=2),f+p>=s?(u=0,f=s):f+p>=1?(u=(e*a-1)*Math.pow(2,o),f+=p):(u=e*Math.pow(2,p-1)*Math.pow(2,o),f=0));o>=8;t[r+l]=255&u,l+=h,u/=256,o-=8);for(f=f<<o|u,c+=o;c>0;t[r+l]=255&f,l+=h,f/=256,c-=8);t[r+l-h]|=128*g}},82592:function(t){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e
var r=function(){}
r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},85107:function(t,e,r){"use strict"
var n=r(95739)(),o=r(54703)("Object.prototype.toString"),i=function(t){return!(n&&t&&"object"==typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===o(t)},f=function(t){return!!i(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==o(t)&&"[object Function]"===o(t.callee)},u=function(){return i(arguments)}()
i.isLegacyArguments=f,t.exports=u?i:f},23213:function(t){"use strict"
var e,r,n=Function.prototype.toString,o="object"==typeof Reflect&&null!==Reflect&&Reflect.apply
if("function"==typeof o&&"function"==typeof Object.defineProperty)try{e=Object.defineProperty({},"length",{get:function(){throw r}}),r={},o((function(){throw 42}),null,e)}catch(t){t!==r&&(o=null)}else o=null
var i=/^\s*class\b/,f=function(t){try{var e=n.call(t)
return i.test(e)}catch(t){return!1}},u=function(t){try{return!f(t)&&(n.call(t),!0)}catch(t){return!1}},a=Object.prototype.toString,c="function"==typeof Symbol&&!!Symbol.toStringTag,s=!(0 in[,]),p=function(){return!1}
if("object"==typeof document){var y=document.all
a.call(y)===a.call(document.all)&&(p=function(t){if((s||!t)&&(void 0===t||"object"==typeof t))try{var e=a.call(t)
return("[object HTMLAllCollection]"===e||"[object HTML document.all class]"===e||"[object HTMLCollection]"===e||"[object Object]"===e)&&null==t("")}catch(t){}return!1})}t.exports=o?function(t){if(p(t))return!0
if(!t)return!1
if("function"!=typeof t&&"object"!=typeof t)return!1
try{o(t,null,e)}catch(t){if(t!==r)return!1}return!f(t)&&u(t)}:function(t){if(p(t))return!0
if(!t)return!1
if("function"!=typeof t&&"object"!=typeof t)return!1
if(c)return u(t)
if(f(t))return!1
var e=a.call(t)
return!("[object Function]"!==e&&"[object GeneratorFunction]"!==e&&!/^\[object HTML/.test(e))&&u(t)}},38110:function(t,e,r){"use strict"
var n,o=Object.prototype.toString,i=Function.prototype.toString,f=/^\s*(?:function)?\*/,u=r(95739)(),a=Object.getPrototypeOf
t.exports=function(t){if("function"!=typeof t)return!1
if(f.test(i.call(t)))return!0
if(!u)return"[object GeneratorFunction]"===o.call(t)
if(!a)return!1
if(void 0===n){var e=function(){if(!u)return!1
try{return Function("return function*() {}")()}catch(t){}}()
n=!!e&&a(e)}return a(t)===n}},47493:function(t,e,r){"use strict"
var n=r(82730),o=r(20935),i=r(54703),f=i("Object.prototype.toString"),u=r(95739)(),a=r(69869),c="undefined"==typeof globalThis?r.g:globalThis,s=o(),p=i("Array.prototype.indexOf",!0)||function(t,e){for(var r=0;r<t.length;r+=1)if(t[r]===e)return r
return-1},y=i("String.prototype.slice"),l={},h=Object.getPrototypeOf
u&&a&&h&&n(s,(function(t){var e=new c[t]
if(Symbol.toStringTag in e){var r=h(e),n=a(r,Symbol.toStringTag)
if(!n){var o=h(r)
n=a(o,Symbol.toStringTag)}l[t]=n.get}}))
t.exports=function(t){if(!t||"object"!=typeof t)return!1
if(!u||!(Symbol.toStringTag in t)){var e=y(f(t),8,-1)
return p(s,e)>-1}return!!a&&function(t){var e=!1
return n(l,(function(r,n){if(!e)try{e=r.call(t)===n}catch(t){}})),e}(t)}},11805:function(t){var e,r,n=t.exports={}
function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function f(t){if(e===setTimeout)return setTimeout(t,0)
if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0)
try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}()
var u,a=[],c=!1,s=-1
function p(){c&&u&&(c=!1,u.length?a=u.concat(a):s=-1,a.length&&y())}function y(){if(!c){var t=f(p)
c=!0
for(var e=a.length;e;){for(u=a,a=[];++s<e;)u&&u[s].run()
s=-1,e=a.length}u=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t)
if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t)
try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function l(t,e){this.fun=t,this.array=e}function h(){}n.nextTick=function(t){var e=new Array(arguments.length-1)
if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r]
a.push(new l(t,e)),1!==a.length||c||f(y)},l.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},99992:function(t){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},83950:function(t,e,r){"use strict"
var n=r(85107),o=r(38110),i=r(32202),f=r(47493)
function u(t){return t.call.bind(t)}var a="undefined"!=typeof BigInt,c="undefined"!=typeof Symbol,s=u(Object.prototype.toString),p=u(Number.prototype.valueOf),y=u(String.prototype.valueOf),l=u(Boolean.prototype.valueOf)
if(a)var h=u(BigInt.prototype.valueOf)
if(c)var g=u(Symbol.prototype.valueOf)
function d(t,e){if("object"!=typeof t)return!1
try{return e(t),!0}catch(t){return!1}}function b(t){return"[object Map]"===s(t)}function w(t){return"[object Set]"===s(t)}function m(t){return"[object WeakMap]"===s(t)}function A(t){return"[object WeakSet]"===s(t)}function v(t){return"[object ArrayBuffer]"===s(t)}function E(t){return"undefined"!=typeof ArrayBuffer&&(v.working?v(t):t instanceof ArrayBuffer)}function S(t){return"[object DataView]"===s(t)}function B(t){return"undefined"!=typeof DataView&&(S.working?S(t):t instanceof DataView)}e.isArgumentsObject=n,e.isGeneratorFunction=o,e.isTypedArray=f,e.isPromise=function(t){return"undefined"!=typeof Promise&&t instanceof Promise||null!==t&&"object"==typeof t&&"function"==typeof t.then&&"function"==typeof t.catch},e.isArrayBufferView=function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):f(t)||B(t)},e.isUint8Array=function(t){return"Uint8Array"===i(t)},e.isUint8ClampedArray=function(t){return"Uint8ClampedArray"===i(t)},e.isUint16Array=function(t){return"Uint16Array"===i(t)},e.isUint32Array=function(t){return"Uint32Array"===i(t)},e.isInt8Array=function(t){return"Int8Array"===i(t)},e.isInt16Array=function(t){return"Int16Array"===i(t)},e.isInt32Array=function(t){return"Int32Array"===i(t)},e.isFloat32Array=function(t){return"Float32Array"===i(t)},e.isFloat64Array=function(t){return"Float64Array"===i(t)},e.isBigInt64Array=function(t){return"BigInt64Array"===i(t)},e.isBigUint64Array=function(t){return"BigUint64Array"===i(t)},b.working="undefined"!=typeof Map&&b(new Map),e.isMap=function(t){return"undefined"!=typeof Map&&(b.working?b(t):t instanceof Map)},w.working="undefined"!=typeof Set&&w(new Set),e.isSet=function(t){return"undefined"!=typeof Set&&(w.working?w(t):t instanceof Set)},m.working="undefined"!=typeof WeakMap&&m(new WeakMap),e.isWeakMap=function(t){return"undefined"!=typeof WeakMap&&(m.working?m(t):t instanceof WeakMap)},A.working="undefined"!=typeof WeakSet&&A(new WeakSet),e.isWeakSet=function(t){return A(t)},v.working="undefined"!=typeof ArrayBuffer&&v(new ArrayBuffer),e.isArrayBuffer=E,S.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&S(new DataView(new ArrayBuffer(1),0,1)),e.isDataView=B
var O="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0
function I(t){return"[object SharedArrayBuffer]"===s(t)}function j(t){return void 0!==O&&(void 0===I.working&&(I.working=I(new O)),I.working?I(t):t instanceof O)}function U(t){return d(t,p)}function P(t){return d(t,y)}function T(t){return d(t,l)}function R(t){return a&&d(t,h)}function x(t){return c&&d(t,g)}e.isSharedArrayBuffer=j,e.isAsyncFunction=function(t){return"[object AsyncFunction]"===s(t)},e.isMapIterator=function(t){return"[object Map Iterator]"===s(t)},e.isSetIterator=function(t){return"[object Set Iterator]"===s(t)},e.isGeneratorObject=function(t){return"[object Generator]"===s(t)},e.isWebAssemblyCompiledModule=function(t){return"[object WebAssembly.Module]"===s(t)},e.isNumberObject=U,e.isStringObject=P,e.isBooleanObject=T,e.isBigIntObject=R,e.isSymbolObject=x,e.isBoxedPrimitive=function(t){return U(t)||P(t)||T(t)||R(t)||x(t)},e.isAnyArrayBuffer=function(t){return"undefined"!=typeof Uint8Array&&(E(t)||j(t))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(t){Object.defineProperty(e,t,{enumerable:!1,value:function(){throw new Error(t+" is not supported in userland")}})}))},85331:function(t,e,r){var n=r(11805),o=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n])
return r},i=/%[sdj%]/g
e.format=function(t){if(!m(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(c(arguments[r]))
return e.join(" ")}r=1
for(var n=arguments,o=n.length,f=String(t).replace(i,(function(t){if("%%"===t)return"%"
if(r>=o)return t
switch(t){case"%s":return String(n[r++])
case"%d":return Number(n[r++])
case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}})),u=n[r];r<o;u=n[++r])b(u)||!E(u)?f+=" "+u:f+=" "+c(u)
return f},e.deprecate=function(t,r){if(void 0!==n&&!0===n.noDeprecation)return t
if(void 0===n)return function(){return e.deprecate(t,r).apply(this,arguments)}
var o=!1
return function(){if(!o){if(n.throwDeprecation)throw new Error(r)
n.traceDeprecation?console.trace(r):console.error(r),o=!0}return t.apply(this,arguments)}}
var f={},u=/^$/
if(n.env.NODE_DEBUG){var a=n.env.NODE_DEBUG
a=a.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),u=new RegExp("^"+a+"$","i")}function c(t,r){var n={seen:[],stylize:p}
return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),d(r)?n.showHidden=r:r&&e._extend(n,r),A(n.showHidden)&&(n.showHidden=!1),A(n.depth)&&(n.depth=2),A(n.colors)&&(n.colors=!1),A(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=s),y(n,t,n.depth)}function s(t,e){var r=c.styles[e]
return r?"["+c.colors[r][0]+"m"+t+"["+c.colors[r][1]+"m":t}function p(t,e){return t}function y(t,r,n){if(t.customInspect&&r&&O(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,t)
return m(o)||(o=y(t,o,n)),o}var i=function(t,e){if(A(e))return t.stylize("undefined","undefined")
if(m(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return t.stylize(r,"string")}if(w(e))return t.stylize(""+e,"number")
if(d(e))return t.stylize(""+e,"boolean")
if(b(e))return t.stylize("null","null")}(t,r)
if(i)return i
var f=Object.keys(r),u=function(t){var e={}
return t.forEach((function(t,r){e[t]=!0})),e}(f)
if(t.showHidden&&(f=Object.getOwnPropertyNames(r)),B(r)&&(f.indexOf("message")>=0||f.indexOf("description")>=0))return l(r)
if(0===f.length){if(O(r)){var a=r.name?": "+r.name:""
return t.stylize("[Function"+a+"]","special")}if(v(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp")
if(S(r))return t.stylize(Date.prototype.toString.call(r),"date")
if(B(r))return l(r)}var c,s="",p=!1,E=["{","}"];(g(r)&&(p=!0,E=["[","]"]),O(r))&&(s=" [Function"+(r.name?": "+r.name:"")+"]")
return v(r)&&(s=" "+RegExp.prototype.toString.call(r)),S(r)&&(s=" "+Date.prototype.toUTCString.call(r)),B(r)&&(s=" "+l(r)),0!==f.length||p&&0!=r.length?n<0?v(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),c=p?function(t,e,r,n,o){for(var i=[],f=0,u=e.length;f<u;++f)T(e,String(f))?i.push(h(t,e,r,n,String(f),!0)):i.push("")
return o.forEach((function(o){o.match(/^\d+$/)||i.push(h(t,e,r,n,o,!0))})),i}(t,r,n,u,f):f.map((function(e){return h(t,r,n,u,e,p)})),t.seen.pop(),function(t,e,r){var n=t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)
if(n>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]
return r[0]+e+" "+t.join(", ")+" "+r[1]}(c,s,E)):E[0]+s+E[1]}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,r,n,o,i){var f,u,a
if((a=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?u=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(u=t.stylize("[Setter]","special")),T(n,o)||(f="["+o+"]"),u||(t.seen.indexOf(a.value)<0?(u=b(r)?y(t,a.value,null):y(t,a.value,r-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map((function(t){return"  "+t})).join("\n").slice(2):"\n"+u.split("\n").map((function(t){return"   "+t})).join("\n")):u=t.stylize("[Circular]","special")),A(f)){if(i&&o.match(/^\d+$/))return u;(f=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(f=f.slice(1,-1),f=t.stylize(f,"name")):(f=f.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),f=t.stylize(f,"string"))}return f+": "+u}function g(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function b(t){return null===t}function w(t){return"number"==typeof t}function m(t){return"string"==typeof t}function A(t){return void 0===t}function v(t){return E(t)&&"[object RegExp]"===I(t)}function E(t){return"object"==typeof t&&null!==t}function S(t){return E(t)&&"[object Date]"===I(t)}function B(t){return E(t)&&("[object Error]"===I(t)||t instanceof Error)}function O(t){return"function"==typeof t}function I(t){return Object.prototype.toString.call(t)}function j(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(t=t.toUpperCase(),!f[t])if(u.test(t)){var r=n.pid
f[t]=function(){var n=e.format.apply(e,arguments)
console.error("%s %d: %s",t,r,n)}}else f[t]=function(){}
return f[t]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.types=r(83950),e.isArray=g,e.isBoolean=d,e.isNull=b,e.isNullOrUndefined=function(t){return null==t},e.isNumber=w,e.isString=m,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=A,e.isRegExp=v,e.types.isRegExp=v,e.isObject=E,e.isDate=S,e.types.isDate=S,e.isError=B,e.types.isNativeError=B,e.isFunction=O,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(99992)
var U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function P(){var t=new Date,e=[j(t.getHours()),j(t.getMinutes()),j(t.getSeconds())].join(":")
return[t.getDate(),U[t.getMonth()],e].join(" ")}function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",P(),e.format.apply(e,arguments))},e.inherits=r(82592),e._extend=function(t,e){if(!e||!E(e))return t
for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]]
return t}
var R="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0
function x(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value")
r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function')
if(R&&t[R]){var e
if("function"!=typeof(e=t[R]))throw new TypeError('The "util.promisify.custom" argument must be of type Function')
return Object.defineProperty(e,R,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise((function(t,n){e=t,r=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i])
o.push((function(t,n){t?r(t):e(n)}))
try{t.apply(this,o)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),R&&Object.defineProperty(e,R,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,o(t))},e.promisify.custom=R,e.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function')
function e(){for(var e=[],r=0;r<arguments.length;r++)e.push(arguments[r])
var o=e.pop()
if("function"!=typeof o)throw new TypeError("The last argument must be of type Function")
var i=this,f=function(){return o.apply(i,arguments)}
t.apply(this,e).then((function(t){n.nextTick(f.bind(null,null,t))}),(function(t){n.nextTick(x.bind(null,t,f))}))}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),Object.defineProperties(e,o(t)),e}},32202:function(t,e,r){"use strict"
var n=r(82730),o=r(20935),i=r(54703),f=r(69869),u=i("Object.prototype.toString"),a=r(95739)(),c="undefined"==typeof globalThis?r.g:globalThis,s=o(),p=i("String.prototype.slice"),y={},l=Object.getPrototypeOf
a&&f&&l&&n(s,(function(t){if("function"==typeof c[t]){var e=new c[t]
if(Symbol.toStringTag in e){var r=l(e),n=f(r,Symbol.toStringTag)
if(!n){var o=l(r)
n=f(o,Symbol.toStringTag)}y[t]=n.get}}}))
var h=r(47493)
t.exports=function(t){return!!h(t)&&(a&&Symbol.toStringTag in t?function(t){var e=!1
return n(y,(function(r,n){if(!e)try{var o=r.call(t)
o===n&&(e=o)}catch(t){}})),e}(t):p(u(t),8,-1))}},20935:function(t,e,r){"use strict"
var n=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],o="undefined"==typeof globalThis?r.g:globalThis
t.exports=function(){for(var t=[],e=0;e<n.length;e++)"function"==typeof o[n[e]]&&(t[t.length]=n[e])
return t}}}])

//# sourceMappingURL=602-10e114198cdc60215e5b.js.map