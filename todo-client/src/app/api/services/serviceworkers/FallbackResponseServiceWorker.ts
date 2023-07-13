// line for typescript friendly service worker + in tsconfig in compilerOptions.lib
import {TaskList} from "../../../../features"
import {loremTasks, rainbowStyle} from "../../../const"

declare let self: ServiceWorkerGlobalScope
export default null

const serviceWorkerName = "[FallbackResponse SW]:"
self.addEventListener("install", function (event) {
    // Skip the 'waiting' lifecycle phase, to go directly from 'installed' to 'activated', even if
    // there are still previous incarnations of this service worker registration active.
    console.log(`${serviceWorkerName} install`)
    event.waitUntil(self.skipWaiting())
})

self.addEventListener("activate", function (event) {
    // Claim any clients immediately, so that the page will be under SW control without reloading.
    console.log(`${serviceWorkerName} activate`)
    event.waitUntil(self.clients.claim())
})

self.addEventListener("fetch", function (event) {
    const regex = /(http|https):\/\/localhost:3000/
    if (event.request.url.match(regex)) {
        console.log(`${serviceWorkerName} Method: ${event.request.method}; URL: ${event.request.url}`)
        event.respondWith(
            fetch(event.request).then(function (response) {
                if (!response.ok) {
                    throw Error("response status " + response.status)
                }

                // If we got back a non-error HTTP response, return it to the page.
                return response
            }).catch(function (error) {
                // For demo purposes, use a pared-down, static YouTube API response as fallback.
                const fallbackResponse: TaskList = loremTasks

                console.warn(`%c Your backend failed (as Joe Mama)`, rainbowStyle)
                console.warn(`Constructing a fallback response, due to an error while fetching the real response:
                  ${error.name}, ${error.stack}\nresponding with`, fallbackResponse)

                // Construct the fallback response via an in-memory variable. In a real application,
                // you might use something like `return fetch(FALLBACK_URL)` instead,
                // to retrieve the fallback response via the network.
                return new Response(JSON.stringify(fallbackResponse), {
                    headers: {"Content-Type": "application/json"},
                })
            }),
        )
    }
})
