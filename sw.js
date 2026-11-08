const CACHE_NAME = 'flow-motion-v0.3-logo1';
const CORE = ['./','./index.html','./manifest.webmanifest','./assets/flow-motion-logo.png','./assets/icon-192.png','./assets/icon-512.png','./assets/flow-motion-mark.svg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
 if (e.request.method !== 'GET') return;
 e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
  if (res && res.ok && new URL(e.request.url).origin === self.location.origin) { const copy=res.clone(); caches.open(CACHE_NAME).then(c=>c.put(e.request,copy)); }
  return res;
 }).catch(() => caches.match('./index.html'))));
});
