/* Sterre service worker (gehost onder /sterre/) — installeerbaar + offline.
   Verhoog CACHE bij elke wijziging om een verse versie uit te rollen. */
const CACHE = 'sterre-v17';
const SHELL = [
  '/sterre/', '/sterre/index.html', '/sterre/manifest.webmanifest',
  '/sterre/icon-192.png', '/sterre/icon-512.png', '/sterre/icon-maskable-512.png', '/sterre/apple-touch-icon.png',
  '/sterre/stem/stem.json'
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
  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith('/sterre/')) return;

  // Audio helemaal met rust laten. Een <audio>-element haalt het bestand in
  // stukjes op (Range-aanvragen) en dat loopt op iOS mis zodra een service
  // worker ertussen zit: het zoeken mislukt en je hoort niets.
  if (req.headers.has('range')) return;
  if (/\.(mp3|wav|m4a|ogg)$/i.test(url.pathname)) return;

  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(req).then((c) => c || caches.match('/sterre/')))
  );
});
