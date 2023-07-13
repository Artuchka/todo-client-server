export function initServiceWorkers() {
    registerServiceWorkerCacher()
    registerServiceWorkerFallbacker()

    // (navigator as Navigator).serviceWorker.getRegistrations().then(registration => {
    //   console.log({registration})
    // })
}


function registerServiceWorkerCacher() {
    if ("serviceWorker" in navigator) {
        (navigator as Navigator).serviceWorker
            .register(new URL("./CacheServiceWorker.ts", import.meta.url), {scope: "/domain/to/cache"})
            .then(waitUntilInstalled)
            .then(logRegistrationInfo)
            .catch((error: Error) => {
                console.log("Service Worker registration failed:", error)
            })
    }
}

function registerServiceWorkerFallbacker() {
    if ("serviceWorker" in navigator) {
        (navigator as Navigator).serviceWorker
            .register(new URL("./FallbackResponseServiceWorker.ts", import.meta.url), {scope: "/"})
            .then(waitUntilInstalled)
            .then(logRegistrationInfo)
            .catch((error: Error) => {
                console.log("Service Worker registration failed:", error)
            })
    }
}

function waitUntilInstalled(registration: ServiceWorkerRegistration): Promise<ServiceWorkerRegistration> {
    return new Promise(function (resolve, reject) {
        if (registration.installing) {
            // If the current registration represents the "installing" service worker, then wait
            // until the installation step (during which the resources are pre-fetched) completes
            // to display the file list.
            registration.installing.addEventListener("statechange", function (e: Event & {
                target: {
                    state: string
                }
            }) {
                if (e.target.state === "installed") {
                    resolve(registration)
                } else if (e.target.state === "redundant") {
                    reject()
                }
            })
        } else {
            // Otherwise, if this isn't the "installing" service worker, then installation must have been
            // completed during a previous visit to this page, and the resources are already pre-fetched.
            // So we can show the list of files right away.
            resolve(registration)
        }
    })
}

function logRegistrationInfo(registration: ServiceWorkerRegistration) {
    console.log(
        `Service Worker registered\nScope: ${registration.scope}\nFilename: ${registration.active.scriptURL.split("_").at(-2)}`,
    )
}
