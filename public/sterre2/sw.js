/* Sterre 2 service worker (gehost onder /sterre2/) — installeerbaar + offline.
   Verhoog CACHE bij elke wijziging om een verse versie uit te rollen. */
const CACHE = 'sterre2-v3';
const SHELL = [
  '/sterre2/', '/sterre2/index.html', '/sterre2/manifest.webmanifest',
  '/sterre2/icon-192.png', '/sterre2/icon-512.png', '/sterre2/icon-maskable-512.png', '/sterre2/apple-touch-icon.png',
  '/sterre2/app.js'
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

// Netwerk-eerst met cache als terugval, alleen binnen de /sterre2/-scope.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith('/sterre2/')) return;

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
    // Alleen een hele pagina mag terugvallen op de startpagina; een script of
    // plaatje dat ontbreekt moet gewoon mislukken, anders krijgt het HTML terug.
    }).catch(() => caches.match(req).then((c) => c || (req.mode === 'navigate' ? caches.match('/sterre2/') : Response.error())))
  );
});
