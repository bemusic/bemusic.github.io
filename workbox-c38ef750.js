define(["exports"],(function(e){"use strict"
try{self["workbox:core:6.5.3"]&&_()}catch(e){}const t=(()=>{"__WB_DISABLE_DEV_LOGS"in self||(self.__WB_DISABLE_DEV_LOGS=!1)
let e=!1
const t={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b",groupCollapsed:"#3498db",groupEnd:null},s=function(s,r){if(self.__WB_DISABLE_DEV_LOGS)return
if("groupCollapsed"===s&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent))return void console[s](...r)
const a=e?[]:["%cworkbox",[`background: ${t[s]}`,"border-radius: 0.5em","color: white","font-weight: bold","padding: 2px 0.5em"].join(";")]
console[s](...a,...r),"groupCollapsed"===s&&(e=!0),"groupEnd"===s&&(e=!1)},r={},a=Object.keys(t)
for(const e of a){const t=e
r[t]=(...e)=>{s(t,e)}}return r})(),s={"invalid-value":({paramName:e,validValueDescription:t,value:s})=>{if(!e||!t)throw new Error("Unexpected input to 'invalid-value' error.")
return`The '${e}' parameter was given a value with an unexpected value. ${t} Received a value of ${JSON.stringify(s)}.`},"not-an-array":({moduleName:e,className:t,funcName:s,paramName:r})=>{if(!(e&&t&&s&&r))throw new Error("Unexpected input to 'not-an-array' error.")
return`The parameter '${r}' passed into '${e}.${t}.${s}()' must be an array.`},"incorrect-type":({expectedType:e,paramName:t,moduleName:s,className:r,funcName:a})=>{if(!(e&&t&&s&&a))throw new Error("Unexpected input to 'incorrect-type' error.")
return`The parameter '${t}' passed into '${s}.${r?`${r}.`:""}${a}()' must be of type ${e}.`},"incorrect-class":({expectedClassName:e,paramName:t,moduleName:s,className:r,funcName:a,isReturnValueProblem:n})=>{if(!e||!s||!a)throw new Error("Unexpected input to 'incorrect-class' error.")
const o=r?`${r}.`:""
return n?`The return value from '${s}.${o}${a}()' must be an instance of class ${e}.`:`The parameter '${t}' passed into '${s}.${o}${a}()' must be an instance of class ${e}.`},"missing-a-method":({expectedMethod:e,paramName:t,moduleName:s,className:r,funcName:a})=>{if(!(e&&t&&s&&r&&a))throw new Error("Unexpected input to 'missing-a-method' error.")
return`${s}.${r}.${a}() expected the '${t}' parameter to expose a '${e}' method.`},"add-to-cache-list-unexpected-type":({entry:e})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(e)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:e,secondEntry:t})=>{if(!e||!t)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.")
return`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`},"plugin-error-request-will-fetch":({thrownErrorMessage:e})=>{if(!e)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.")
return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${e}'.`},"invalid-cache-name":({cacheNameId:e,value:t})=>{if(!e)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'")
return`You must provide a name containing at least one character for setCacheDetails({${e}: '...'}). Received a value of '${JSON.stringify(t)}'`},"unregister-route-but-not-found-with-method":({method:e})=>{if(!e)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.")
return`The route you're trying to unregister was not  previously registered for the method type '${e}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:e})=>`Replaying the background sync queue '${e}' failed.`,"duplicate-queue-name":({name:e})=>`The Queue name '${e}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:e,paramName:t})=>`The '${e}()' method can only be used when the '${t}' is used in the constructor.`,"unsupported-route-type":({moduleName:e,className:t,funcName:s,paramName:r})=>`The supplied '${r}' parameter was an unsupported type. Please check the docs for ${e}.${t}.${s} for valid input types.`,"not-array-of-class":({value:e,expectedClass:t,moduleName:s,className:r,funcName:a,paramName:n})=>`The supplied '${n}' parameter must be an array of '${t}' objects. Received '${JSON.stringify(e)},'. Please check the call to ${s}.${r}.${a}() to fix the issue.`,"max-entries-or-age-required":({moduleName:e,className:t,funcName:s})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${e}.${t}.${s}`,"statuses-or-headers-required":({moduleName:e,className:t,funcName:s})=>`You must define either config.statuses or config.headersin ${e}.${t}.${s}`,"invalid-string":({moduleName:e,funcName:t,paramName:s})=>{if(!s||!e||!t)throw new Error("Unexpected input to 'invalid-string' error.")
return`When using strings, the '${s}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${e}.${t}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'unit-must-be-bytes' error.")
return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${e}"`},"single-range-only":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'single-range-only' error.")
return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${e}"`},"invalid-range-values":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'invalid-range-values' error.")
return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${e}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:e,start:t,end:s})=>`The start (${t}) and end (${s}) values in the Range are not satisfiable by the cached response, which is ${e} bytes.`,"attempt-to-cache-non-get-request":({url:e,method:t})=>`Unable to cache '${e}' because it is a '${t}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:e})=>`There was an attempt to cache '${e}' but the response was not defined.`,"no-response":({url:e,error:t})=>{let s=`The strategy could not generate a response for '${e}'.`
return t&&(s+=` The underlying error is ${t}.`),s},"bad-precaching-response":({url:e,status:t})=>`The precaching request for '${e}' failed`+(t?` with an HTTP status of ${t}.`:"."),"non-precached-url":({url:e})=>`createHandlerBoundToURL('${e}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:e})=>`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:e,url:t})=>`Unable to find a precached response in ${e} for ${t}.`,"cross-origin-copy-response":({origin:e})=>`workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${e}.`,"opaque-streams-source":({type:e})=>{const t=`One of the workbox-streams sources resulted in an '${e}' response.`
return"opaqueredirect"===e?`${t} Please do not use a navigation request that results in a redirect as a source.`:`${t} Please ensure your sources are CORS-enabled.`}},r=(e,t={})=>{const r=s[e]
if(!r)throw new Error(`Unable to find message for code '${e}'.`)
return r(t)}
class a extends Error{constructor(e,t){super(r(e,t)),this.name=e,this.details=t}}const n=(e,t,s)=>{if("function"!==typeof e[t])throw s.expectedMethod=t,new a("missing-a-method",s)},o=(e,t)=>{if(!Array.isArray(e))throw new a("not-an-array",t)},i=(e,t,s)=>{if(!(e instanceof t))throw s.expectedClassName=t.name,new a("incorrect-class",s)},c=(e,t,s)=>{if(!t.includes(e))throw s.validValueDescription=`Valid values are ${JSON.stringify(t)}.`,new a("invalid-value",s)},h=(e,t,s)=>{if(typeof e!==t)throw s.expectedType=t,new a("incorrect-type",s)},u=(e,t,s)=>{const r=new a("not-array-of-class",s)
if(!Array.isArray(e))throw r
for(const s of e)if(!(s instanceof t))throw r}
try{self["workbox:routing:6.5.3"]&&_()}catch(e){}const l=["DELETE","GET","HEAD","PATCH","POST","PUT"],d=e=>e&&"object"==typeof e?(n(e,"handle",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),e):(h(e,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),{handle:e})
class p{constructor(e,t,s="GET"){h(e,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"match"}),s&&c(s,l,{paramName:"method"}),this.handler=d(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=d(e)}}class f extends p{constructor(e,s,r){i(e,RegExp,{moduleName:"workbox-routing",className:"RegExpRoute",funcName:"constructor",paramName:"pattern"})
super((({url:s})=>{const r=e.exec(s.href)
if(r){if(s.origin===location.origin||0===r.index)return r.slice(1)
t.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${s.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`)}}),s,r)}}const g=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")
class m{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e})
s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:s}=e.data
t.debug("Caching URLs from the window",s.urlsToCache)
const r=Promise.all(s.urlsToCache.map((t=>{"string"==typeof t&&(t=[t])
const s=new Request(...t)
return this.handleRequest({request:s,event:e})})))
e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:s}){i(e,Request,{moduleName:"workbox-routing",className:"Router",funcName:"handleRequest",paramName:"options.request"})
const r=new URL(e.url,location.href)
if(!r.protocol.startsWith("http"))return void t.debug("Workbox Router only supports URLs that start with 'http'.")
const a=r.origin===location.origin,{params:n,route:o}=this.findMatchingRoute({event:s,request:e,sameOrigin:a,url:r})
let c=o&&o.handler
const h=[]
c&&(h.push(["Found a route to handle this request:",o]),n&&h.push(["Passing the following params to the route's handler:",n]))
const u=e.method
if(!c&&this._defaultHandlerMap.has(u)&&(h.push(`Failed to find a matching route. Falling back to the default handler for ${u}.`),c=this._defaultHandlerMap.get(u)),!c)return void t.debug(`No route found for: ${g(r)}`)
let l
t.groupCollapsed(`Router is responding to: ${g(r)}`),h.forEach((e=>{Array.isArray(e)?t.log(...e):t.log(e)})),t.groupEnd()
try{l=c.handle({url:r,request:e,event:s,params:n})}catch(e){l=Promise.reject(e)}const d=o&&o.catchHandler
return l instanceof Promise&&(this._catchHandler||d)&&(l=l.catch((async a=>{if(d){t.groupCollapsed(`Error thrown when responding to:  ${g(r)}. Falling back to route's Catch Handler.`),t.error("Error thrown by:",o),t.error(a),t.groupEnd()
try{return await d.handle({url:r,request:e,event:s,params:n})}catch(e){e instanceof Error&&(a=e)}}if(this._catchHandler)return t.groupCollapsed(`Error thrown when responding to:  ${g(r)}. Falling back to global Catch Handler.`),t.error("Error thrown by:",o),t.error(a),t.groupEnd(),this._catchHandler.handle({url:r,request:e,event:s})
throw a}))),l}findMatchingRoute({url:e,sameOrigin:s,request:r,event:a}){const n=this._routes.get(r.method)||[]
for(const o of n){let n
const i=o.match({url:e,sameOrigin:s,request:r,event:a})
if(i)return i instanceof Promise&&t.warn(`While routing ${g(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`,o),n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:o,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,d(e))}setCatchHandler(e){this._catchHandler=d(e)}registerRoute(e){h(e,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),n(e,"match",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),h(e.handler,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),n(e.handler,"handle",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.handler"}),h(e.method,"string",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.method"}),this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new a("unregister-route-but-not-found-with-method",{method:e.method})
const t=this._routes.get(e.method).indexOf(e)
if(!(t>-1))throw new a("unregister-route-route-not-registered")
this._routes.get(e.method).splice(t,1)}}let w
const y=()=>(w||(w=new m,w.addFetchListener(),w.addCacheListener()),w)
function b(e,s,r){let n
if("string"==typeof e){const o=new URL(e,location.href)
{if(!e.startsWith("/")&&!e.startsWith("http"))throw new a("invalid-string",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"})
const s=e.startsWith("http")?o.pathname:e,r="[*:?+]"
new RegExp(`${r}`).exec(s)&&t.debug(`The '$capture' parameter contains an Express-style wildcard character (${r}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`)}n=new p((({url:s})=>(s.pathname===o.pathname&&s.origin!==o.origin&&t.debug(`${e} only partially matches the cross-origin URL ${s.toString()}. This route will only handle cross-origin requests if they match the entire URL.`),s.href===o.href)),s,r)}else if(e instanceof RegExp)n=new f(e,s,r)
else if("function"==typeof e)n=new p(e,s,r)
else{if(!(e instanceof p))throw new a("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"})
n=e}return y().registerRoute(n),n}try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}class N{constructor(e={}){if(!e.statuses&&!e.headers)throw new a("statuses-or-headers-required",{moduleName:"workbox-cacheable-response",className:"CacheableResponse",funcName:"constructor"})
e.statuses&&o(e.statuses,{moduleName:"workbox-cacheable-response",className:"CacheableResponse",funcName:"constructor",paramName:"config.statuses"}),e.headers&&h(e.headers,"object",{moduleName:"workbox-cacheable-response",className:"CacheableResponse",funcName:"constructor",paramName:"config.headers"}),this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){i(e,Response,{moduleName:"workbox-cacheable-response",className:"CacheableResponse",funcName:"isResponseCacheable",paramName:"response"})
let s=!0
if(this._statuses&&(s=this._statuses.includes(e.status)),this._headers&&s&&(s=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),!s){t.groupCollapsed(`The request for '${g(e.url)}' returned a response that does not meet the criteria for being cached.`),t.groupCollapsed("View cacheability criteria here."),t.log("Cacheable statuses: "+JSON.stringify(this._statuses)),t.log("Cacheable headers: "+JSON.stringify(this._headers,null,2)),t.groupEnd()
const s={}
e.headers.forEach(((e,t)=>{s[t]=e})),t.groupCollapsed("View response status and headers here."),t.log(`Response status: ${e.status}`),t.log("Response headers: "+JSON.stringify(s,null,2)),t.groupEnd(),t.groupCollapsed("View full response details here."),t.log(e.headers),t.log(e),t.groupEnd(),t.groupEnd()}return s}}const R={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},v=e=>[R.prefix,e,R.suffix].filter((e=>e&&e.length>0)).join("-"),$=e=>e||v(R.precache),C=e=>e||v(R.runtime)
function k(e,t){const s=new URL(e)
for(const e of t)s.searchParams.delete(e)
return s.href}class x{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const T=new Set
try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}function q(e){return"string"==typeof e?new Request(e):e}class U{constructor(e,t){this._cacheKeys={},i(t.event,ExtendableEvent,{moduleName:"workbox-strategies",className:"StrategyHandler",funcName:"constructor",paramName:"options.event"}),Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new x,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map
for(const e of this._plugins)this._pluginStateMap.set(e,{})
this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this
let r=q(e)
if("navigate"===r.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse
if(e)return t.log(`Using a preloaded navigation response for '${g(r.url)}'`),e}const n=this.hasCallback("fetchDidFail")?r.clone():null
try{for(const e of this.iterateCallbacks("requestWillFetch"))r=await e({request:r.clone(),event:s})}catch(e){if(e instanceof Error)throw new a("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const o=r.clone()
try{let e
e=await fetch(r,"navigate"===r.mode?void 0:this._strategy.fetchOptions),t.debug(`Network request for '${g(r.url)}' returned a response with status '${e.status}'.`)
for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:o,response:e})
return e}catch(e){throw t.log(`Network request for '${g(r.url)}' threw an error.`,e),n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:o.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone()
return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const s=q(e)
let r
const{cacheName:a,matchOptions:n}=this._strategy,o=await this.getCacheKey(s,"read"),i=Object.assign(Object.assign({},n),{cacheName:a})
r=await caches.match(o,i),r?t.debug(`Found a cached response in '${a}'.`):t.debug(`No cached response found in '${a}'.`)
for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:a,matchOptions:n,cachedResponse:r,request:o,event:this.event})||void 0
return r}async cachePut(e,s){const r=q(e)
var n
await(n=0,new Promise((e=>setTimeout(e,n))))
const o=await this.getCacheKey(r,"write")
{if(o.method&&"GET"!==o.method)throw new a("attempt-to-cache-non-get-request",{url:g(o.url),method:o.method})
const e=s.headers.get("Vary")
e&&t.debug(`The response for ${g(o.url)} has a 'Vary: ${e}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`)}if(!s)throw t.error(`Cannot cache non-existent response for '${g(o.url)}'.`),new a("cache-put-with-no-response",{url:g(o.url)})
const i=await this._ensureResponseSafeToCache(s)
if(!i)return t.debug(`Response '${g(o.url)}' will not be cached.`,i),!1
const{cacheName:c,matchOptions:h}=this._strategy,u=await self.caches.open(c),l=this.hasCallback("cacheDidUpdate"),d=l?await async function(e,t,s,r){const a=k(t.url,s)
if(t.url===a)return e.match(t,r)
const n=Object.assign(Object.assign({},r),{ignoreSearch:!0}),o=await e.keys(t,n)
for(const t of o)if(a===k(t.url,s))return e.match(t,r)}(u,o.clone(),["__WB_REVISION__"],h):null
t.debug(`Updating the '${c}' cache with a new Response for ${g(o.url)}.`)
try{await u.put(o,l?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){t.log(`About to run ${T.size} callbacks to clean up caches.`)
for(const e of T)await e(),t.log(e,"is complete.")
t.log("Finished running callbacks.")}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:d,newResponse:i.clone(),request:o,event:this.event})
return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`
if(!this._cacheKeys[s]){let r=e
for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=q(await e({mode:t,request:r,event:this.event,params:this.params}))
this._cacheKeys[s]=r}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0
return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),r=r=>{const a=Object.assign(Object.assign({},r),{state:s})
return t[e](a)}
yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e
for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let s=e,r=!1
for(const e of this.iterateCallbacks("cacheWillUpdate"))if(s=await e({request:this.request,response:s,event:this.event})||void 0,r=!0,!s)break
return r||(s&&200!==s.status&&(s=void 0),s&&200!==s.status&&(0===s.status?t.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`):t.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))),s}}class E{constructor(e={}){this.cacheName=C(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e)
return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request})
const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,a=new U(this,{event:t,request:s,params:r}),n=this._getResponse(a,s,t)
return[n,this._awaitComplete(n,a,s,t)]}async _getResponse(e,s,r){let n
await e.runCallbacks("handlerWillStart",{event:r,request:s})
try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new a("no-response",{url:s.url})}catch(a){if(a instanceof Error)for(const t of e.iterateCallbacks("handlerDidError"))if(n=await t({error:a,event:r,request:s}),n)break
if(!n)throw a
t.log(`While responding to '${g(s.url)}', an ${a instanceof Error?a.toString():""} error occurred. Using a fallback response provided by a handlerDidError plugin.`)}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:r,request:s,response:n})
return n}async _awaitComplete(e,t,s,r){let a,n
try{a=await e}catch(n){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(n=e)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:s,response:a,error:n}),t.destroy(),n)throw n}}const L=(e,t)=>`Using ${e} to respond to '${g(t.url)}'`,P=e=>{e&&(t.groupCollapsed("View the final response here."),t.log(e||"[No response returned]"),t.groupEnd())}
const S={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null}
function K(e,t){const s=t()
return e.waitUntil(s),s}try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}function O(e){if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:e})
if("string"==typeof e){const t=new URL(e,location.href)
return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e
if(!s)throw new a("add-to-cache-list-unexpected-type",{entry:e})
if(!t){const e=new URL(s,location.href)
return{cacheKey:e.href,url:e.href}}const r=new URL(s,location.href),n=new URL(s,location.href)
return r.searchParams.set("__WB_REVISION__",t),{cacheKey:r.href,url:n.href}}class W{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url
s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class A{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url)
return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}function M(e){const s=e.length
s>0&&(t.groupCollapsed(`During precaching cleanup, ${s} cached request${1===s?" was":"s were"} deleted.`),((e,s)=>{t.groupCollapsed(e)
for(const e of s)t.log(e)
t.groupEnd()})("Deleted Cache Requests",e),t.groupEnd())}function D(e,s){if(0!==s.length){t.groupCollapsed(e)
for(const e of s)t.log(e)
t.groupEnd()}}let F,H
async function I(e,t){let s=null
if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new a("cross-origin-copy-response",{origin:s})
const r=e.clone(),n={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},o=t?t(n):n,i=function(){if(void 0===F){const e=new Response("")
if("body"in e)try{new Response(e.body),F=!0}catch(e){F=!1}F=!1}return F}()?r.body:await r.blob()
return new Response(i,o)}class j extends E{constructor(e={}){e.cacheName=$(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(j.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e)
return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let r
const n=s.params||{}
if(!this._fallbackToNetwork)throw new a("missing-precache-entry",{cacheName:this.cacheName,url:e.url})
{t.warn(`The precached response for ${g(e.url)} in ${this.cacheName} was not found. Falling back to the network.`)
const a=n.integrity,o=e.integrity,i=!o||o===a
if(r=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?o||a:void 0})),a&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded()
await s.cachePut(e,r.clone())&&t.log(`A response for ${g(e.url)} was used to "repair" the precache.`)}}{const a=n.cacheKey||await s.getCacheKey(e,"read")
t.groupCollapsed("Precaching is responding to: "+g(e.url)),t.log(`Serving the precached url: ${g(a instanceof Request?a.url:a)}`),t.groupCollapsed("View request details here."),t.log(e),t.groupEnd(),t.groupCollapsed("View response details here."),t.log(r),t.groupEnd(),t.groupEnd()}return r}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded()
const s=await t.fetch(e)
if(!await t.cachePut(e,s.clone()))throw new a("bad-precaching-response",{url:e.url,status:s.status})
return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0
for(const[s,r]of this.plugins.entries())r!==j.copyRedirectedCacheableResponsesPlugin&&(r===j.defaultPrecacheCacheabilityPlugin&&(e=s),r.cacheWillUpdate&&t++)
0===t?this.plugins.push(j.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}j.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},j.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:e}){return e.redirected?await I(e):e}}
class V{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new j({cacheName:$(e),plugins:[...t,new A({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){o(e,{moduleName:"workbox-precaching",className:"PrecacheController",funcName:"addToCacheList",paramName:"entries"})
const s=[]
for(const r of e){"string"==typeof r?s.push(r):r&&void 0===r.revision&&s.push(r.url)
const{cacheKey:e,url:n}=O(r),o="string"!=typeof r&&r.revision?"reload":"default"
if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e})
if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==r.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:n})
this._cacheKeysToIntegrities.set(e,r.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,o),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`
t.warn(e)}}}install(e){return K(e,(async()=>{const s=new W
this.strategy.plugins.push(s)
for(const[t,s]of this._urlsToCacheKeys){const r=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),n=new Request(t,{integrity:r,cache:a,credentials:"same-origin"})
await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:n,event:e}))}const{updatedURLs:r,notUpdatedURLs:a}=s
return function(e,s){const r=e.length,a=s.length
if(r||a){let n=`Precaching ${r} file${1===r?"":"s"}.`
a>0&&(n+=` ${a} file${1===a?" is":"s are"} already cached.`),t.groupCollapsed(n),D("View newly precached URLs.",e),D("View previously precached URLs.",s),t.groupEnd()}}(r,a),{updatedURLs:r,notUpdatedURLs:a}}))}activate(e){return K(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),r=[]
for(const a of t)s.has(a.url)||(await e.delete(a),r.push(a.url))
return M(r),{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href)
return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t)
if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e)
if(!t)throw new a("non-precached-url",{url:e})
return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}const B=()=>(H||(H=new V),H)
class G extends p{constructor(e,s){super((({request:r})=>{const a=e.getURLsToCacheKeys()
for(const t of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:r=!0,urlManipulation:a}={}){const n=new URL(e,location.href)
n.hash="",yield n.href
const o=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s)
return e}(n,t)
if(yield o.href,s&&o.pathname.endsWith("/")){const e=new URL(o.href)
e.pathname+=s,yield e.href}if(r){const e=new URL(o.href)
e.pathname+=".html",yield e.href}if(a){const e=a({url:n})
for(const t of e)yield t.href}}(r.url,s)){const s=a.get(t)
if(s){return{cacheKey:s,integrity:e.getIntegrityForCacheKey(s)}}}t.debug("Precaching did not find a match for "+g(r.url))}),e.strategy)}}e.CacheFirst=class extends E{async _handle(e,s){const r=[]
i(e,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"makeRequest",paramName:"request"})
let n,o=await s.cacheMatch(e)
if(o)r.push(`Found a cached response in the '${this.cacheName}' cache.`)
else{r.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`)
try{o=await s.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}o?r.push("Got response from network."):r.push("Unable to get a response from the network.")}t.groupCollapsed(L(this.constructor.name,e))
for(const e of r)t.log(e)
if(P(o),t.groupEnd(),!o)throw new a("no-response",{url:e.url,error:n})
return o}},e.CacheableResponsePlugin=class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new N(e)}},e.NavigationRoute=class extends p{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){u(t,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.allowlist"}),u(s,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.denylist"}),super((e=>this._match(e)),e),this._allowlist=t,this._denylist=s}_match({url:e,request:s}){if(s&&"navigate"!==s.mode)return!1
const r=e.pathname+e.search
for(const e of this._denylist)if(e.test(r))return t.log(`The navigation route ${r} is not being used, since the URL matches this denylist pattern: ${e.toString()}`),!1
return this._allowlist.some((e=>e.test(r)))?(t.debug(`The navigation route ${r} is being used.`),!0):(t.log(`The navigation route ${r} is not being used, since the URL being navigated to doesn't match the allowlist.`),!1)}},e.NetworkFirst=class extends E{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(S),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._networkTimeoutSeconds&&h(this._networkTimeoutSeconds,"number",{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"constructor",paramName:"networkTimeoutSeconds"})}async _handle(e,s){const r=[]
i(e,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"handle",paramName:"makeRequest"})
const n=[]
let o
if(this._networkTimeoutSeconds){const{id:t,promise:a}=this._getTimeoutPromise({request:e,logs:r,handler:s})
o=t,n.push(a)}const c=this._getNetworkPromise({timeoutId:o,request:e,logs:r,handler:s})
n.push(c)
const h=await s.waitUntil((async()=>await s.waitUntil(Promise.race(n))||await c)())
t.groupCollapsed(L(this.constructor.name,e))
for(const e of r)t.log(e)
if(P(h),t.groupEnd(),!h)throw new a("no-response",{url:e.url})
return h}_getTimeoutPromise({request:e,logs:t,handler:s}){let r
return{promise:new Promise((a=>{r=setTimeout((async()=>{t.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`),a(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:r}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:r}){let a,n
try{n=await r.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}return e&&clearTimeout(e),n?s.push("Got response from network."):s.push("Unable to get a response from the network. Will respond with a cached response."),!a&&n||(n=await r.cacheMatch(t),n?s.push(`Found a cached response in the '${this.cacheName}' cache.`):s.push(`No response found in the '${this.cacheName}' cache.`)),n}},e.StaleWhileRevalidate=class extends E{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(S)}async _handle(e,s){const r=[]
i(e,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"handle",paramName:"request"})
const n=s.fetchAndCachePut(e).catch((()=>{}))
s.waitUntil(n)
let o,c=await s.cacheMatch(e)
if(c)r.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`)
else{r.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`)
try{c=await n}catch(e){e instanceof Error&&(o=e)}}t.groupCollapsed(L(this.constructor.name,e))
for(const e of r)t.log(e)
if(P(c),t.groupEnd(),!c)throw new a("no-response",{url:e.url,error:o})
return c}},e.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},e.createHandlerBoundToURL=function(e){return B().createHandlerBoundToURL(e)},e.precacheAndRoute=function(e,t){!function(e){B().precache(e)}(e),function(e){const t=B()
b(new G(t,e))}(t)},e.registerRoute=b}))
