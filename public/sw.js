/* Opruim-service-worker voor de root.
   Een eerdere versie registreerde een service worker op '/'. Nu staat de
   nieuws-app weer op de root (zonder service worker) en leeft Woo Quest onder
   /woo/. Deze worker maakt de oude registratie + caches schoon en herlaadt de
   pagina, zodat terugkerende bezoekers weer de actuele nieuws-app zien. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((c) => c.navigate(c.url));
  })());
});
