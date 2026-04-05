const CACHE_NAME = 'bankosa-pwa-v1';

const urlsToCache = [
  './',
  './index.html',
  'https://your-poster-image-url-here.jpg',   // ← Change to your actual poster URL
  'bankosa logo.jpg'                          // ← Change to your actual logo filename
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
