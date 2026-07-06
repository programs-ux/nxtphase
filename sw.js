/* NXT Phase Learning — service worker
   App shell: network-first (updates land on reload), cache fallback offline.
   Fonts: cache-first. The Wellness Hub ZIP lookup passes through untouched
   and already degrades gracefully offline. */

const CACHE = 'nxtphase-shell-v6';
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './app.js',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  if (url.origin === location.origin) {
    // Network-first with forced revalidation ('no-cache') so the browser's
    // HTTP heuristic cache can never pin a stale app shell. Cached copy when offline.
    const fresh = e.request.mode === 'navigate'
      ? fetch(e.request.url, { cache: 'no-cache' })
      : fetch(e.request, { cache: 'no-cache' });
    e.respondWith(
      fresh
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
          return res;
        })
        .catch(() =>
          caches.match(e.request, { ignoreSearch: true })
            .then((r) => r || caches.match('./index.html'))
        )
    );
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    // Cache-first: fonts never change and this keeps them working offline.
    e.respondWith(
      caches.match(e.request).then(
        (r) =>
          r ||
          fetch(e.request).then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
            return res;
          })
      )
    );
  }
  // Everything else (e.g. api.zippopotam.us) goes straight to the network.
});
