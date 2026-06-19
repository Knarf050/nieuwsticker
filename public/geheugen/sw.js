/* Nieuwsgeheugen service worker (gehost onder /geheugen/) — installeerbaar + offline.
   Verhoog CACHE bij elke wijziging om een verse versie uit te rollen. */
const CACHE = 'nieuwsgeheugen-v1';
const SHELL = [
  '/geheugen/', '/geheugen/index.html', '/geheugen/geheugen-data.js', '/geheugen/manifest.webmanifest',
  '/geheugen/icon-192.png', '/geheugen/icon-512.png', '/geheugen/icon-maskable-512.png', '/geheugen/apple-touch-icon.png'
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

// Cache-first met achtergrond-update. Alleen binnen de /geheugen/-scope actief,
// dus de nieuws-app op de root en de woo-app blijven onaangeroerd.
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
      }).catch(() => cached || caches.match('/geheugen/'));
      return cached || netwerk;
    })
  );
});
