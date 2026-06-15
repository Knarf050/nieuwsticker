/* Woo Quest service worker — maakt de app installeerbaar en offline-bruikbaar.
   Verhoog CACHE bij elke wijziging om een verse versie uit te rollen. */
const CACHE = 'woo-quest-v2';
const SHELL = [
  '/', '/index.html', '/woo-data.js', '/manifest.webmanifest',
  '/icon-192.png', '/icon-512.png', '/icon-maskable-512.png', '/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache-first met achtergrond-update (stale-while-revalidate). Werkt ook voor
// de CDN-scripts (React, Tailwind, Babel) zodat de app offline blijft draaien.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((cached) => {
      const netwerk = fetch(req).then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached || caches.match('/'));
      return cached || netwerk;
    })
  );
});
