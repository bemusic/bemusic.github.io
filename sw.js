var serviceWorkerOption = {"assets":["/build/d99ca46656b6f36f19d4.worker.js","/build/d99ca46656b6f36f19d4.worker.js.LICENSE.txt","/build/ea410328703171d8f693d3a404a11a8f.jpg","/build/ad5c8959ea47d80c4de028b26525ac67.png","/build/7d6d69a86d70e4e52079c5ce873435c6.jpg","/build/354b30433269481d2f132496a0d13f64.ogg","/build/38fbcad5f2b14ca6ffc359446f7ec455.ogg","/build/0cfe6fe9284bd4c4fcc04d66ee85c398.jpg","/build/2efb5f12353c594bbb072de4ff9ee61d.jpg","/build/524548e9ff6b24858d1764de44a25293.svg","/build/d718cbbbd47977b6ca96abbf6b9054c3.ogg","/build/c3e8436ef4e3bcc1fbc987075279be07.ogg","/build/aaeef09f2847a09d179f45cfe118d7e7.ogg","/build/c1df64d6d6f13f3a38362aea7cc70a3f.ogg","/build/e733dbfbb80f232b5704be73413ff476.ogg","/build/vendors~app~comingSoonDemo~environment~game~playground~sync~test-2e6816059950576f6668.js","/build/vendors~app~comingSoonDemo~game~music~playground~previewer~test-4fba9a7882eca7897b27.js","/build/vendors~app~game~music~playground~previewer~sync~test-cea8a740e9cf23a04b41.js","/build/vendors~app~comingSoonDemo~game~playground~previewer~test-1ab07a23b10e449b7c1d.js","/build/vendors~environment~previewer-b7e887853790283ff318.js","/build/app-0d918bbe63103c37ed2d.js","/build/boot.js","/build/comingSoon-25db6d2b89f55702affc.js","/build/comingSoonDemo-d5496c731fac8f8e31fd.js","/build/environment-6ca0900a1ef6b8fdec19.js","/build/game-cf19b1bef5d01e06ce69.js","/build/gameEngine-feabf5faf1324ebcc12c.js","/build/music-9680306f2f0d0a995c89.js","/build/playground-243ef7ac42e409a19ee3.js","/build/previewer-9e578fc3adcde7da40ad.js","/build/stbvorbis-54a8523f16dee4f31199.js","/build/sync-2c6b6362a9a74c6be5b6.js","/build/test-1d2bb6eeb1094cea119b.js","/build/vendors~environment-708c1db7502d975cdf40.js","/build/vendors~gameEngine-8138dd1e62afdabece05.js","/build/vendors~music-bbda6a362fbbcaae109a.js","/build/vendors~sync-ca2cbd7078478704b3f1.js","/build/22-f62e1468aec5e8e240e0.js","/build/app-0d918bbe63103c37ed2d.js.LICENSE.txt","/build/comingSoonDemo-d5496c731fac8f8e31fd.js.LICENSE.txt","/build/game-cf19b1bef5d01e06ce69.js.LICENSE.txt","/build/playground-243ef7ac42e409a19ee3.js.LICENSE.txt","/build/previewer-9e578fc3adcde7da40ad.js.LICENSE.txt","/build/test-1d2bb6eeb1094cea119b.js.LICENSE.txt","/build/vendors~app~comingSoonDemo~environment~game~playground~sync~test-2e6816059950576f6668.js.LICENSE.txt","/build/vendors~app~comingSoonDemo~game~music~playground~previewer~test-4fba9a7882eca7897b27.js.LICENSE.txt","/build/vendors~app~game~music~playground~previewer~sync~test-cea8a740e9cf23a04b41.js.LICENSE.txt","/build/vendors~environment-708c1db7502d975cdf40.js.LICENSE.txt","/build/vendors~music-bbda6a362fbbcaae109a.js.LICENSE.txt","/build/vendors~sync-ca2cbd7078478704b3f1.js.LICENSE.txt"]};
        
        !function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e){t.exports="52.2.3"},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r).a;function u(...t){console.log("%c serviceworker %c","background:yellow;color:black","",...t)}u("I am a service worker! "+o);const i="site-v"+o,c="site-v"+o,s="skin-v"+o,a="songs";function l(t,e){t.respondWith(caches.open(e).then((function(e){return e.match(t.request).then((function(n){return n||fetch(t.request).then((function(n){return u("Cache forever:",t.request.url),e.put(t.request,n.clone()),n}))}))})))}function f(t,e){t.respondWith(caches.open(e).then((function(e){return fetch(t.request).then((function(n){return n&&n.ok?(u("Fetch OK:",t.request.url),e.put(t.request,n.clone()),n):e.match(t.request)})).catch((function(){return e.match(t.request)}))})))}function h(t,e){t.respondWith(caches.open(e).then((function(e){return e.match(t.request).then((function(n){const r=fetch(t.request).then((function(n){return n&&n.ok&&(u("Updated:",t.request.url),e.put(t.request,n.clone())),n}));return n||r}))})))}self.addEventListener("install",(function(t){t.waitUntil(caches.open(i).then((t=>t.addAll(["/"]))).then((()=>self.skipWaiting())))})),self.addEventListener("activate",(function(){return u("Service worker activated! Claiming clients now!"),self.clients.claim()})),self.addEventListener("fetch",(function(t){const e=t.request;if(e.headers.get("range"))return void u("Bailing out for ranged request.",t.request.url);const n=location.origin+"/project";if(e.url.startsWith(n)||e.url===n)return void u("Bailing out for project website.");const r=location.origin+"/build/",o=location.origin+"/skins/",d=location.origin+"/res/",p=location.origin;return e.url.startsWith(r)&&e.url!==r+"boot.js"?l(t,"app"):e.url.match(/assets\/[^/]+\.bemuse$/)?l(t,a):e.url.match(/\.(bms|bme|bml)$/)||e.url.match(/\/index\.json$/)||e.url.match(/\/assets\/metadata\.json$/)?f(t,a):e.url.startsWith(o)?h(t,s):e.url.startsWith(d)?h(t,c):e.url.startsWith(p)?f(t,i):e.url.startsWith("https://fonts.googleapis.com/")?h(t,s):void 0}))}]);
//# sourceMappingURL=sw.js.map