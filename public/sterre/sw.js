/* Sterre service worker (gehost onder /sterre/) — installeerbaar + offline.
   Verhoog CACHE bij elke wijziging om een verse versie uit te rollen. */
const CACHE = 'sterre-v3';
const SHELL = [
  '/sterre/', '/sterre/index.html', '/sterre/manifest.webmanifest',
  '/sterre/icon-192.png', '/sterre/icon-512.png', '/sterre/icon-maskable-512.png', '/sterre/apple-touch-icon.png'
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

// Netwerk-eerst met cache als terugval, alleen binnen de /sterre/-scope.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (!req.url.includes('/sterre/')) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then((c) => c || caches.match('/sterre/')))
  );
});
