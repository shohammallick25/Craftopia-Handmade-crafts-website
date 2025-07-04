const CACHE_NAME = "craftopia-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./assets/css/style.css",
  "./assets/js/script.js",
  "./assets/images/hero-banner-1.jpg",
  "./assets/images/hero-banner-2.jpg",
  "./favicon.svg",
  // add other key images & assets
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
