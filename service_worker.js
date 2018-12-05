self.addEventListener('install', event => {
    async function onInstall() {
        const cache = await caches.open('static');
        await cache.addAll([
            'images/momenton.png'
        ]);
        return cache;
    }

    event.waitUntil(onInstall());
});

self.addEventListener('activate', event => {
    console.log('Service Worker Activated');
});

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    if (url.pathname.endsWith('test.png')) {
        event.respondWith(async function () {
            const cache = await caches.open('static');
            url.pathname = 'images/momenton.png';
            event.request.URL = url;
            const cachedResponse = await cache.match(url);
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }());
    }
});