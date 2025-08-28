// Service Worker for performance optimization
const CACHE_NAME = 'avocat-penal-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  // Critical images
  '/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png',
  '/lovable-uploads/e6b30f85-12f8-4f74-b39f-a1f4eda76d6a.png',
  '/lovable-uploads/c40b182c-b51b-42af-b1d1-50bf623b2110.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((fetchResponse) => {
            // Don't cache non-successful responses or opaque responses
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }

            // Clone response for caching
            const responseToCache = fetchResponse.clone();

            // Cache static assets and images
            if (event.request.url.includes('/lovable-uploads/') || 
                event.request.url.includes('.css') || 
                event.request.url.includes('.js')) {
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, responseToCache));
            }

            return fetchResponse;
          });
      })
      .catch(() => {
        // Return offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      })
  );
});