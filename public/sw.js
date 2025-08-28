// Service Worker for Ultra-Performance Caching
const CACHE_NAME = 'penal-lawyer-v1.0.3';
const STATIC_CACHE = 'static-v1.0.3';
const DYNAMIC_CACHE = 'dynamic-v1.0.3';

// Critical resources to precache
const PRECACHE_RESOURCES = [
  '/',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/pages/Index.tsx',
  '/lovable-uploads/49019fba-compressed-320w.png',
  '/lovable-uploads/49019fba-compressed-400w.png',
  '/lovable-uploads/49019fba-desktop-800w.png',
  'https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2',
  'https://fonts.gstatic.com/s/sacramento/v13/buEzpo6gcdjy0EiZMBUG0CoV_NxLeiw.woff2'
];

// Install event - precache critical resources
self.addEventListener('install', (event) => {
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_RESOURCES.map(url => new Request(url, { mode: 'no-cors' })));
    }).catch(err => {
      console.warn('SW: Precache failed for some resources', err);
    })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - advanced caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-HTTP requests
  if (!request.url.startsWith('http')) return;
  
  // Strategy 1: Cache First for static assets (CSS, JS, Images, Fonts)
  if (request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'image' || 
      request.destination === 'font' ||
      url.pathname.includes('/assets/') ||
      url.pathname.includes('.css') ||
      url.pathname.includes('.js') ||
      url.pathname.includes('.woff') ||
      url.pathname.includes('.png') ||
      url.pathname.includes('.jpg') ||
      url.pathname.includes('.jpeg') ||
      url.pathname.includes('.webp') ||
      url.pathname.includes('.avif')) {
    
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request).then((response) => {
          // Only cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }
  
  // Strategy 2: Stale While Revalidate for HTML pages and API calls
  if (request.destination === 'document' || 
      url.pathname.includes('/api/') ||
      request.headers.get('accept')?.includes('text/html')) {
    
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
        
        // Return cached version immediately if available, fetch in background
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }
  
  // Strategy 3: Network First for everything else
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});

// Background sync for improved reliability
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('SW: Background sync triggered')
    );
  }
});

// Push notification handling (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/lovable-uploads/c40b182c-b51b-42af-b1d1-50bf623b2110.png',
        badge: '/lovable-uploads/c40b182c-b51b-42af-b1d1-50bf623b2110.png'
      })
    );
  }
});