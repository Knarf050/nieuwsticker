/* Triviant service worker (gehost onder /triviant/) — installeerbaar + offline.
   Verhoog CACHE bij elke wijziging om een verse versie uit te rollen. */
const CACHE = 'triviant-v2';
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

// Netwerk-eerst, met de cache als fallback voor offline gebruik. Zo krijgt een
// terugkerende speler altijd de nieuwste versie (bijv. een net uitgebreide
// vragenbank) zodra er verbinding is — cache-eerst hield anders altijd een
// verouderde, eerder gecachte versie vast totdat de cache toevallig ververst was.
// Alleen binnen de /triviant/-scope actief.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res && (res.ok || res.type === 'opaque')) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then((cached) => cached || caches.match('/triviant/')))
  );
});
