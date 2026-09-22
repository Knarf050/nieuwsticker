/* Triviant service worker (gehost onder /triviant/) — installeerbaar + offline.
   Verhoog CACHE bij elke wijziging om een verse versie uit te rollen. */
const CACHE = 'triviant-v1';
const SHELL = [
  '/triviant/', '/triviant/index.html', '/triviant/triviant-data.js', '/triviant/manifest.webmanifest',
  '/triviant/icon-192.png', '/triviant/icon-512.png', '/triviant/icon-maskable-512.png', '/triviant/apple-touch-icon.png'
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

// Cache-first met achtergrond-update. Alleen binnen de /triviant/-scope actief.
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
      }).catch(() => cached || caches.match('/triviant/'));
      return cached || netwerk;
    })
  );
});
