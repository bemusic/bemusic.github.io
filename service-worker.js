if(!self.define){let e,l={}
const i=(i,s)=>(i=new URL(i+".js",s).href,l[i]||new Promise((l=>{if("document"in self){const e=document.createElement("script")
e.src=i,e.onload=l,document.head.appendChild(e)}else e=i,importScripts(i),l()})).then((()=>{let e=l[i]
if(!e)throw new Error(`Module ${i} didn’t register its module`)
return e})))
self.define=(s,u)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href
if(l[b])return
let d={}
const n=e=>i(e,b),r={module:{uri:b},exports:d,require:n}
l[b]=Promise.all(s.map((e=>r[e]||n(e)))).then((e=>(u(...e),d)))}}define(["./workbox-c38ef750"],(function(e){"use strict"
self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:null},{url:"/build/204-9aaef0b3bcebabc69fff.js",revision:null},{url:"/build/204-9aaef0b3bcebabc69fff.js.LICENSE.txt",revision:"0c4468b456f01181a7391f35b36bb4e6"},{url:"/build/230-454dd78263e9626d1311.js",revision:null},{url:"/build/230-454dd78263e9626d1311.js.LICENSE.txt",revision:"9312913abd3ec291e09a77758d4b839e"},{url:"/build/238-b623e51cda5982a3ec51.js",revision:null},{url:"/build/238-b623e51cda5982a3ec51.js.LICENSE.txt",revision:"f2d459d39369cda96ed259beba6bbc16"},{url:"/build/267-69d09c93bd69d5582ec7.js",revision:null},{url:"/build/289-f61bc37649b970338534.js",revision:null},{url:"/build/289-f61bc37649b970338534.js.LICENSE.txt",revision:"c32dc5264e0f32a35c5d50797b6466f0"},{url:"/build/419-368f459a71eeb62aea3f.js",revision:null},{url:"/build/44-214670e4104180ca5b01.js",revision:null},{url:"/build/44-214670e4104180ca5b01.js.LICENSE.txt",revision:"dbeaecba8741c0ff61f04d985df6dbce"},{url:"/build/452-42747e820bdd07d9061d.js",revision:null},{url:"/build/452-42747e820bdd07d9061d.js.LICENSE.txt",revision:"5f39ec92d632dd1dd85e0f960f3dd11e"},{url:"/build/509-4d45555b4bab094ca945.js",revision:null},{url:"/build/509-4d45555b4bab094ca945.js.LICENSE.txt",revision:"8baa8727df1982ec4620a918911df65a"},{url:"/build/546-7c3f1a157bcf4e991356.js",revision:null},{url:"/build/546-7c3f1a157bcf4e991356.js.LICENSE.txt",revision:"74fec55ce6f68099fc1f356d34539c66"},{url:"/build/602-e0b23b8c0e09305cb2bf.js",revision:null},{url:"/build/602-e0b23b8c0e09305cb2bf.js.LICENSE.txt",revision:"76fd105b961a925329d605e9c3bb7706"},{url:"/build/604-832ca5eece724d219b8f.js",revision:null},{url:"/build/630-86a3ce56fd867c17a96e.js",revision:null},{url:"/build/630-86a3ce56fd867c17a96e.js.LICENSE.txt",revision:"f7b599e3f88bf94d2af5d3f60873a311"},{url:"/build/649-6f2a7ecd646296fb5efa.js",revision:null},{url:"/build/649-6f2a7ecd646296fb5efa.js.LICENSE.txt",revision:"927fb9b752590ea5907d47bfe2b430d4"},{url:"/build/740-818aa140bb154369575a.js",revision:null},{url:"/build/742-a3bf12701c2c3136a435.js",revision:null},{url:"/build/742-a3bf12701c2c3136a435.js.LICENSE.txt",revision:"275fe79abee3b697f1673c8bd9c58856"},{url:"/build/770-13b0beab0afc7590645b.js",revision:null},{url:"/build/849-53e6dd69532107225dd8.js",revision:null},{url:"/build/849-53e6dd69532107225dd8.js.LICENSE.txt",revision:"ef96be5508dccc0c57f47a2c623380a4"},{url:"/build/858-b782a8d9664f07d48415.js",revision:null},{url:"/build/863-8c1bba936c2a7c6a36e5.js",revision:null},{url:"/build/891-3ac78b9dc2c84b71e8d7.js",revision:null},{url:"/build/902-2010ddbbcbf1c97c2af2.js",revision:null},{url:"/build/905-1c0cc5b169360bbdbcc7.js",revision:null},{url:"/build/905-1c0cc5b169360bbdbcc7.js.LICENSE.txt",revision:"e5067c2807f8c6eeca3663552efd09fb"},{url:"/build/91-4b45ed2582ceb0cd5231.js",revision:null},{url:"/build/928-c2f5089f3701e6103aa8.js",revision:null},{url:"/build/946-3fc3c6fe5d233bac730d.js",revision:null},{url:"/build/946-3fc3c6fe5d233bac730d.js.LICENSE.txt",revision:"da6e1857291de4855bb602d67c39a264"},{url:"/build/948-dd55343324f16d6ecce1.js",revision:null},{url:"/build/959-19c5d6d83de512283f4b.js",revision:null},{url:"/build/970-2ace66f8acc326c4bc5e.js",revision:null},{url:"/build/982-4d1e7adfa50c116e581a.js",revision:null},{url:"/build/app-519393f0165e35fec790.js",revision:null},{url:"/build/assets/DJBM-528abc75136e5320490c.png",revision:null},{url:"/build/assets/a-603b4275d603bc93dac1.jpg",revision:null},{url:"/build/assets/b-2d3edd33c1c9cd89bea7.jpg",revision:null},{url:"/build/assets/bg-title-96740f604d8ed581e83b.jpg",revision:null},{url:"/build/assets/bgm-642fdd0fdc1101d9bdbe.ogg",revision:null},{url:"/build/assets/c-206a9f6836290a1d32ad.jpg",revision:null},{url:"/build/assets/default-206a9f6836290a1d32ad.jpg",revision:null},{url:"/build/assets/dj-fb89bc0fb54b70cd3f50.png",revision:null},{url:"/build/assets/go-fa33b4ede606d5bb0e7d.ogg",revision:null},{url:"/build/assets/guitar-slice-007-bb068ac4fe378b72c62e.ogg",revision:null},{url:"/build/assets/intro-3491d2d11922b7b8d961.ogg",revision:null},{url:"/build/assets/kick-5630994b871cb6fedd63.ogg",revision:null},{url:"/build/assets/logo-with-shadow-f78db43c1a8aabfbace5.svg",revision:null},{url:"/build/assets/snare-ffe551da746a0486959b.ogg",revision:null},{url:"/build/boot.js",revision:"f3d171c03278e9c09b5c8f19ba63519c"},{url:"/build/comingSoon-be28be70391a9031a3f6.js",revision:null},{url:"/build/comingSoonDemo-40c0484b0df83b37ba7a.js",revision:null},{url:"/build/comingSoonDemo-40c0484b0df83b37ba7a.js.LICENSE.txt",revision:"c32dc5264e0f32a35c5d50797b6466f0"},{url:"/build/environment-544c1c4b5ab4c9016420.js",revision:null},{url:"/build/environment-544c1c4b5ab4c9016420.js.LICENSE.txt",revision:"40317424793af269757456ed8292606e"},{url:"/build/game-0091a58a0cf5c8b274b7.js",revision:null},{url:"/build/gameEngine-48b33f89fc7e65b898cb.js",revision:null},{url:"/build/music-809c4e2005b10544e284.js",revision:null},{url:"/build/music-809c4e2005b10544e284.js.LICENSE.txt",revision:"c32dc5264e0f32a35c5d50797b6466f0"},{url:"/build/playground-aa5b72ffd0bb990d7a91.js",revision:null},{url:"/build/previewer-bccba8ce427473240dd4.js",revision:null},{url:"/build/stbvorbis-39e31c246e1377f14242.js",revision:null},{url:"/build/sync-e918db7f3c533d2f69d0.js",revision:null},{url:"/build/sync-e918db7f3c533d2f69d0.js.LICENSE.txt",revision:"f7b599e3f88bf94d2af5d3f60873a311"},{url:"/build/test-23f2da9a9815900ce6a8.js",revision:null}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/"),{allowlist:[/^\/(?:\?.*)?$/]})),e.registerRoute(/^.*\.bemuse$/,new e.CacheFirst({cacheName:"bemuse-song-assets",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^.*\.(bms|bme|bml|bmson)$/,new e.NetworkFirst({cacheName:"bemuse-song-charts",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^.*\/index\.json$/,new e.NetworkFirst({cacheName:"bemuse-servers",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^.*\/metadata\.json$/,new e.NetworkFirst({cacheName:"bemuse-song-assets",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^\/skins\//,new e.StaleWhileRevalidate({cacheName:"bemuse-skin",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^\/res\//,new e.StaleWhileRevalidate({cacheName:"bemuse-res",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}))
