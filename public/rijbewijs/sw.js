/* RijTheorie service worker (gehost onder /rijbewijs/) — installeerbaar + offline.
   Verhoog CACHE bij elke wijziging om een verse versie uit te rollen. */
const CACHE = 'rijtheorie-v1';
const SHELL = [
  '/rijbewijs/', '/rijbewijs/index.html', '/rijbewijs/rijbewijs-data.js', '/rijbewijs/manifest.webmanifest',
  '/rijbewijs/icon-192.png', '/rijbewijs/icon-512.png', '/rijbewijs/icon-maskable-512.png', '/rijbewijs/apple-touch-icon.png'
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

// Cache-first met achtergrond-update. Alleen binnen de /rijbewijs/-scope actief,
// zodat de andere apps in deze repo onaangeroerd blijven.
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
      }).catch(() => cached || caches.match('/rijbewijs/'));
      return cached || netwerk;
    })
  );
});
