/**
 * service-worker.js - PWA Service Worker for WOIPS Platform
 * Version: 1.0.0
 */

const CACHE_NAME = 'woips-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/main.css',
    '/assets/css/woips.css',
    '/assets/css/olymap.css',
    '/assets/css/olymnote.css',
    '/assets/js/main.js',
    '/assets/js/router.js',
    '/assets/js/woips.js',
    '/assets/js/olymap.js',
    '/assets/js/olymnote.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css',
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap',
    'https://cdn.jsdelivr.net/npm/sweetalert2@11',
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

// Install event - cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone the request
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(response => {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            // Don't cache Drive URLs
                            if (!event.request.url.includes('drive.google.com')) {
                                cache.put(event.request, responseToCache);
                            }
                        });

                    return response;
                });
            })
            .catch(() => {
                // Fallback for offline
                if (event.request.url.includes('.html')) {
                    return caches.match('/index.html');
                }
            })
    );
});

// Background sync for offline data (if needed)
self.addEventListener('sync', event => {
    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});

async function syncData() {
    // Implement data sync logic if needed
    console.log('Syncing data...');
}
