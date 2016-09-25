!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="build/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t,e=arguments.length,n=Array(e),r=0;e>r;r++)n[r]=arguments[r];(t=console).log.apply(t,["[serviceworker]"].concat(n))}function u(t,e){t.respondWith(caches.open(e).then(function(e){return e.match(t.request).then(function(n){return n||fetch(t.request).then(function(n){return o("[caching forever]",t.request.url),e.put(t.request,n.clone()),n})})}))}function i(t,e){t.respondWith(caches.open(e).then(function(e){return fetch(t.request).then(function(n){return n&&n.ok?(o("[cached]",t.request.url),e.put(t.request,n.clone()),n):e.match(t.request)})["catch"](function(){return e.match(t.request)})}))}function s(t,e){t.respondWith(caches.open(e).then(function(e){return e.match(t.request).then(function(n){var r=fetch(t.request).then(function(n){return n&&n.ok&&(o("[updated]",t.request.url),e.put(t.request,n.clone())),n});return n||r})}))}var c=n(1),a=r(c);n(2),o("I am a service worker! "+a["default"]);var l="app",f="site-v"+a["default"],h="site-v"+a["default"],p="skin-v"+a["default"],d="songs";self.addEventListener("install",function(t){t.waitUntil(caches.open(f).then(function(t){return t.addAll(["/"])}))}),self.addEventListener("activate",function(){o("Service worker activated!")}),self.addEventListener("fetch",function(t){var e=location.origin+"/build/",n=location.origin+"/skins/",r=location.origin+"/res/",o=location.origin,c=t.request;return c.url.startsWith(e)&&c.url!==e+"boot.js"?u(t,l):c.url.match(/assets\/[^\/]+\.bemuse$/)?u(t,d):c.url.match(/\.(bms|bme|bml)$/)?i(t,d):c.url.match(/\/index\.json$/)?i(t,d):c.url.match(/\/assets\/metadata\.json$/)?i(t,d):c.url.startsWith(n)?s(t,p):c.url.startsWith(r)?s(t,h):c.url.startsWith(o)?i(t,f):c.url.startsWith("https://fonts.googleapis.com/")?s(t,p):void 0})},function(t,e,n){"use strict";t.exports=n(3)},function(t,e){!function(){var t=Cache.prototype.addAll,e=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(e)var n=e[1],r=parseInt(e[2]);t&&(!e||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(t){function e(t){this.name="NetworkError",this.code=19,this.message=t}var n=this;return e.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var n=new URL(t.url).protocol;if("http:"!==n&&"https:"!==n)throw new e("Invalid scheme");return fetch(t.clone())}))}).then(function(r){if(r.some(function(t){return!t.ok}))throw new e("Incorrect response status");return Promise.all(r.map(function(e,r){return n.put(t[r],e)}))}).then(function(){})},Cache.prototype.add=function(t){return this.addAll([t])})}()},function(t,e){t.exports="33.0.1"}]);
//# sourceMappingURL=f79f43e2e59385d9c08f.serviceworker.js.map