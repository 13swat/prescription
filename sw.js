// Offline support: cache the app shell, serve from cache, refresh in the background.
// Bump VERSION whenever you change any file so phones pick up the update.
const VERSION = "rx-v3";
const FILES = [
  "./", "index.html", "manifest.webmanifest",
  "vendor/jspdf-2.5.1.umd.min.js", "vendor/jspdf-autotable-3.8.2.min.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => {
    const net = fetch(e.request).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
