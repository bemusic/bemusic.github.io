!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,o){for(var s,a,u=0,c=[];u<r.length;u++)a=r[u],i[a]&&c.push.apply(c,i[a]),i[a]=0;for(s in o)t[s]=o[s];for(n&&n(r,o);c.length;)c.shift().call(null,e)};var r={},i={5:0};return e.e=function(t,n){if(0===i[t])return n.call(null,e);if(void 0!==i[t])i[t].push(n);else{i[t]=[n];var r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=e.p+""+({0:"testMode",1:"appMode",2:"gameMode",3:"syncMode",4:"testSkinMode",6:"comingSoonMode",7:"testFontMode",8:"gameEngine",9:"comingSoonDemo"}[t]||t)+"-"+{0:"bcaa628d008f7857dc01",1:"d77df1012b8b489e0cc7",2:"5914df4e1cf08acc6350",3:"60a2f147fe7c28b51550",4:"cb7c1fc58d940cac3be6",6:"9d286a9d7f3afbc009b4",7:"0536aeab98e275fda412",8:"87ea9e8fdef15ea2e00b",9:"af529369f6844106c85d"}[t]+".js",window.WebpackLoadingContext?window.WebpackLoadingContext.load(o,r):r.appendChild(o)}},e.m=t,e.c=r,e.p="build/",e(0)}({0:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},i=function(t){return t&&t.__esModule?t["default"]:t};n(357),n(352);var o=i(n(31)),s=i(n(77)),a=i(n(358)),u=i(n(179)),c=r(n(269)),l=r(n(270));window.onerror=function(t,e,n,r,i){l.show(t,e,n,r,i)};var h=s.mode||"comingSoon";a[h]?!function(){var t=new o,e=new u(t);t.watch(function(){return c.setProgress(t.progress)}),e.use(function(){a[h](function(t){c.hide(),t.main()})})}():console.error("Invalid mode:",h)},14:function(t){function e(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=u[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(i(r.parts[s],e))}else{for(var a=[],s=0;s<r.parts.length;s++)a.push(i(r.parts[s],e));u[r.id]={id:r.id,refs:1,parts:a}}}}function n(t){for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],o=i[0],s=i[1],a=i[2],u=i[3],c={css:s,media:a,sourceMap:u};n[o]?n[o].parts.push(c):e.push(n[o]={id:o,parts:[c]})}return e}function r(){var t=document.createElement("style"),e=h();return t.type="text/css",e.appendChild(t),t}function i(t,e){var n,i,o;if(e.singleton){var u=p++;n=f||(f=r()),i=s.bind(null,n,u,!1),o=s.bind(null,n,u,!0)}else n=r(),i=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}function o(t,e,n){var r=["/** >>"+e+" **/","/** "+e+"<< **/"],i=t.lastIndexOf(r[0]),o=n?r[0]+n+r[1]:"";if(t.lastIndexOf(r[0])>=0){var s=t.lastIndexOf(r[1])+r[1].length;return t.slice(0,i)+o+t.slice(s)}return t+o}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=o(t.styleSheet.cssText,e,i);else{var s=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(i&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(i))+" */",n='@import url("data:text/css;base64,'+btoa(n)+'")'}catch(o){}if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},l=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=c(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,p=0;t.exports=function(t,r){r=r||{},"undefined"==typeof r.singleton&&(r.singleton=l());var i=n(t);return e(i,r),function(t){for(var o=[],s=0;s<i.length;s++){var a=i[s],c=u[a.id];c.refs--,o.push(c)}if(t){var l=n(t);e(l,r)}for(var s=0;s<o.length;s++){var c=o[s];if(0===c.refs){for(var h=0;h<c.parts.length;h++)c.parts[h]();delete u[c.id]}}}}},22:function(t){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];t.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return t.join("")},t}},31:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var r=e[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=r(n(167)),a=e.Progress=function(){function t(){o(this,t),this.current=void 0,this.total=void 0,this.extra=void 0,this.formatter=void 0,this._observable=new s}return i(t,{report:{value:function(t,e,n){this.current=t,this.total=e,this.extra=n,this._observable.notify()}},watch:{value:function(t){var e=this;return t(this),this._observable.watch(function(){return t(e)})}},progress:{get:function(){return this.total&&void 0!==this.current&&null!==this.current?this.current/this.total:null}},toString:{value:function(){return void 0!==this.formatter?this.formatter(this):null!==this.progress?this.current+" / "+this.total:""}}}),t}();e["default"]=a,Object.defineProperty(e,"__esModule",{value:!0})},77:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},i=r(n(442));t.exports=i.parse(location.search.replace(/^\?/,""))},112:function(t,e,n){"use strict";function r(t){return null!=t&&""!==t}function i(t){return(Array.isArray(t)?t.map(i):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(r).join(" ")}e.merge=function o(t,e){if(1===arguments.length){for(var n=t[0],i=1;i<t.length;i++)n=o(n,t[i]);return n}var s=t["class"],a=e["class"];(s||a)&&(s=s||[],a=a||[],Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]),t["class"]=s.concat(a).filter(r));for(var u in e)"class"!=u&&(t[u]=e[u]);return t},e.joinClasses=i,e.cls=function(t,n){for(var r=[],o=0;o<t.length;o++)r.push(n&&n[o]?e.escape(i([t[o]])):i(t[o]));var s=i(r);return s.length?' class="'+s+'"':""},e.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},e.attr=function(t,n,r,i){return"style"===t&&(n=e.style(n)),"boolean"==typeof n||null==n?n?" "+(i?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+n+'"')},e.attrs=function(t,n){var r=[],o=Object.keys(t);if(o.length)for(var s=0;s<o.length;++s){var a=o[s],u=t[a];"class"==a?(u=i(u))&&r.push(" "+a+'="'+u+'"'):r.push(e.attr(a,u,!1,n))}return r.join("")},e.escape=function(t){var e=String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return e===""+t?t:e},e.rethrow=function s(t,e,r,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||i))throw t.message+=" on line "+r,t;try{i=i||n(445).readFileSync(e,"utf8")}catch(o){s(t,null,r)}var a=3,u=i.split("\n"),c=Math.max(r-a,0),l=Math.min(u.length,r+a),a=u.slice(c,l).map(function(t,e){var n=e+c+1;return(n==r?"  > ":"    ")+n+"| "+t}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+r+"\n"+a+"\n\n"+t.message,t}},166:function(t,e){"use strict";var n=function(){function t(t,e){for(var n in e){var r=e[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=e.Callbacks=function(){function t(e){if(r(this,t),this._callbacks={},this._nextId=1,"function"==typeof e)this.add(e);else if("object"==typeof e&&e&&e.length)for(var n=0;n<e.length;n++)this.add(e[n])}return n(t,{call:{value:function(){var t=this._callbacks;for(var e in t)t[e].apply(null,arguments)}},add:{value:function(t){var e=this,n=this._nextId++;return this._callbacks[n]=t,function(){return delete e._callbacks[n]}}}}),t}();e["default"]=i,Object.defineProperty(e,"__esModule",{value:!0})},167:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var r=e[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=r(n(166)),a=e.Observable=function(){function t(){var e=void 0===arguments[0]?void 0:arguments[0];o(this,t),this._callbacks=new s,this._value=e}return i(t,{value:{get:function(){return this._value},set:function(t){this._value=t,this.notify(t)}},notify:{value:function(t){this._callbacks.call(t)}},watch:{value:function(t){return void 0!==this._value&&t(this._value),this._callbacks.add(t)}}}),t}();e["default"]=a,Object.defineProperty(e,"__esModule",{value:!0})},179:function(t,e){"use strict";var n=function(){function t(t,e){for(var n in e){var r=e[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(t,e)}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=e.LoadingContext=function(){function t(e){r(this,t),this._progress=e}return n(t,{load:{value:function(t,e){var n=this,r=t.src,i=new XMLHttpRequest;i.open("GET",r,!0),i.responseType="blob",i.onprogress=function(t){t.total&&t.lengthComputable&&n._progress.report(t.loaded,t.total)},i.onload=function(){var n=[i.response,"\n//# sourceURL="+r],o="text/javascript",s=URL.createObjectURL(new Blob(n,{type:o}));t.src=s,e.appendChild(t)},i.send(null)}},use:{value:function(t){var e=window.WebpackLoadingContext;try{window.WebpackLoadingContext=this,t()}finally{window.WebpackLoadingContext=e}}}}),t}();e["default"]=i,Object.defineProperty(e,"__esModule",{value:!0})},269:function(t,e,n){"use strict";function r(){u.style.display="none"}function i(t){null===t?(c.classList.add("is-indeterminate"),c.style.width=""):(c.classList.remove("is-indeterminate"),c.style.width=(100*t).toFixed(2)+"%")}var o=function(t){return t&&t.__esModule?t["default"]:t};e.hide=r,e.setProgress=i,n(346);var s=o(n(320)),a=o(n(359)),u=document.createElement("div");u.id="boot",u.className="bemuse-boot",u.innerHTML=s();var c=u.querySelector(".js-progress-bar");c.classList.add("is-indeterminate"),u.querySelector(".js-version").appendChild(document.createTextNode("v"+a)),document.body.appendChild(u),Object.defineProperty(e,"__esModule",{value:!0})},270:function(t,e,n){"use strict";function r(t,e,n,r,i){var s=document.createElement("div");s.className="error-dialog",s.innerHTML=o({message:t,url:e,line:n,col:r,e:i}),document.body.appendChild(s)}var i=function(t){return t&&t.__esModule?t["default"]:t};n(347);var o=i(n(321));e.show=r,Object.defineProperty(e,"__esModule",{value:!0})},303:function(t,e,n){e=t.exports=n(22)(),e.push([t.id,".bemuse-boot{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.bemuse-boot--title{color:#8b8685}.bemuse-boot--text{letter-spacing:.5ex}.bemuse-boot--text:not(:first-child){margin-left:.5ex}.bemuse-boot--star{display:inline-block}.bemuse-boot--progress{width:100px;margin:10px auto 3px;padding:1px;border:1px solid #8b8685}.bemuse-boot--progress-bar{width:100%;background:#8b8685;height:5px}.bemuse-boot--progress-bar.is-indeterminate{background:linear-gradient(to bottom right,rgba(139,134,133,.7)0%,rgba(139,134,133,.7)25%,rgba(139,134,133,0)25%,rgba(139,134,133,0)50%,rgba(139,134,133,.7)50%,rgba(139,134,133,.7)75%,rgba(139,134,133,0)75%,rgba(139,134,133,0)100%);background-size:7px 7px;-webkit-animation:1s bemuse-boot--indeterminate linear infinite;animation:1s bemuse-boot--indeterminate linear infinite}.bemuse-boot--description{font-size:10px;color:#8b8685;text-transform:uppercase;letter-spacing:1.5ex;padding-left:1.5ex}.bemuse-boot--version{margin-top:10px;font-size:9px;font-weight:700;color:#656463}@-webkit-keyframes bemuse-boot--indeterminate{from{background-position:0 0}to{background-position:7px 0}}@keyframes bemuse-boot--indeterminate{from{background-position:0 0}to{background-position:7px 0}}",""])},304:function(t,e,n){e=t.exports=n(22)(),e.push([t.id,".error-dialog{background:#533;color:#edd;border:2px solid #b77;position:fixed;z-index:99999;top:10px;left:10px;padding:10px;max-width:640px}.error-dialog h1,.error-dialog p{margin:0;font-size:1em;line-height:1.3}.error-dialog h1{color:#fcc}.error-dialog pre{margin:1em 0 0;font-family:Menlo,Consolas,monospace;font-size:.8em;line-height:1.3;opacity:.7}.error-dialog p.error-dialog--where{font-size:.8em;color:#faa}",""])},308:function(t,e,n){e=t.exports=n(22)(),e.push([t.id,"@import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700);",""]),e.push([t.id,"",""])},309:function(t,e,n){e=t.exports=n(22)(),e.push([t.id,"canvas{image-rendering:-webkit-optimize-contrast;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}",""])},320:function(t,e,n){n(112);t.exports=function(){var t=[];return t.push('<div class="bemuse-boot--title"><span class="bemuse-boot--text">BE</span><span class="bemuse-boot--star">&#9734;</span><span class="bemuse-boot--text">MU</span><span class="bemuse-boot--star">&#9734;</span><span class="bemuse-boot--text">SE</span></div><div class="bemuse-boot--progress"><div class="bemuse-boot--progress-bar js-progress-bar"></div></div><div class="bemuse-boot--description">Loading</div><div class="bemuse-boot--version js-version"></div>'),t.join("")}},321:function(t,n,r){var i=r(112);t.exports=function(t){var n,r=[],o=t||{};return function(t,e,o,s,a){r.push("<h1>An error has occured!</h1><p>"+i.escape(null==(n=s)?"":n)+'</p><p class="error-dialog--where">'+i.escape(null==(n=a+":"+o+":"+t)?"":n)+'</p><pre wrap="wrap">'+i.escape(null==(n=e&&e.stack||"No stack trace available")?"":n)+"</pre>")}.call(this,"col"in o?o.col:"undefined"!=typeof col?col:void 0,"e"in o?o.e:"undefined"!=typeof e?e:void 0,"line"in o?o.line:"undefined"!=typeof line?line:void 0,"message"in o?o.message:"undefined"!=typeof message?message:void 0,"url"in o?o.url:"undefined"!=typeof url?url:void 0),r.join("")}},346:function(t,e,n){var r=n(303);"string"==typeof r&&(r=[[t.id,r,""]]);n(14)(r,{})},347:function(t,e,n){var r=n(304);"string"==typeof r&&(r=[[t.id,r,""]]);n(14)(r,{})},351:function(t,e,n){var r=n(308);"string"==typeof r&&(r=[[t.id,r,""]]);n(14)(r,{})},352:function(t,e,n){var r=n(309);"string"==typeof r&&(r=[[t.id,r,""]]);n(14)(r,{})},357:function(t,e,n){var r=n(351);"string"==typeof r&&(r=[[t.id,r,""]]);n(14)(r,{singleton:!1})},358:function(t,e,n){t.exports={app:function(t){n.e(1,function(){t(n(210))})},test:function(t){n.e(0,function(){t(n(217))})},comingSoon:function(t){n.e(6,function(){t(n(213))})},sync:function(t){n.e(3,function(){t(n(211))})},game:function(t){n.e(2,function(){t(n(216))})},testFont:function(t){n.e(7,function(){t(n(214))})},testSkin:function(t){n.e(4,function(){t(n(215))})}}},359:function(t){t.exports="0.15.0"},440:function(t){"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,r,i,o){r=r||"&",i=i||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(r);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var l=0;c>l;++l){var h,f,p,d,v=t[l].replace(a,"%20"),g=v.indexOf(i);g>=0?(h=v.substr(0,g),f=v.substr(g+1)):(h=v,f=""),p=decodeURIComponent(h),d=decodeURIComponent(f),e(s,p)?n(s[p])?s[p].push(d):s[p]=[s[p],d]:s[p]=d}return s};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},441:function(t){"use strict";function e(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,o,s,a){return o=o||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t?e(i(t),function(i){var a=encodeURIComponent(n(i))+s;return r(t[i])?e(t[i],function(t){return a+encodeURIComponent(n(t))}).join(o):a+encodeURIComponent(n(t[i]))}).join(o):a?encodeURIComponent(n(a))+s+encodeURIComponent(n(t)):""};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},442:function(t,e,n){"use strict";e.decode=e.parse=n(440),e.encode=e.stringify=n(441)},445:function(){}});