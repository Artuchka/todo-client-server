// line for typescript friendly service worker + in tsconfig in compilerOptions.lib

declare let self: ServiceWorkerGlobalScope
export default null

const CACHE_NAME = "cache_sample_IndexHtml"
const urlsToCache = ["index.html"]
const version = "v1.0.0"


const serviceWorkerPrefix = "[Cache SW]: "
//caching assets to speed up the loading time of web page
self.addEventListener("install", (event: ServiceWorkerGlobalScopeEventMap["install"]) => {
    console.log(`${serviceWorkerPrefix}install`)
    event.waitUntil(
        caches.open(version + CACHE_NAME).then((cache) => {
            console.log(`${serviceWorkerPrefix} opened cache`)
            return cache.addAll(urlsToCache)
        }),
    )
})

self.addEventListener("activate", (event: ServiceWorkerGlobalScopeEventMap["activate"]) => {
    console.log(`${serviceWorkerPrefix}activate`)
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames
                    .filter((cacheName) => {
                        return cacheName.indexOf(version) !== 0
                    })
                    .map(function (cachName) {
                        //old caches are cleared
                        return caches.delete(cachName)
                    }),
            ),
        ),
    )
})

//listen for requests
self.addEventListener("fetch", (event: ServiceWorkerGlobalScopeEventMap["fetch"]) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            console.log(`${serviceWorkerPrefix} fetch event to ${event.request.url} with ${event.request.method}`)
            return response || fetch(event.request)
        }),
    )
})
