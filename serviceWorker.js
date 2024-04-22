const staticYams = "yams-game-site-v1";
const assets = [
  "/",
  "/index.html",
  "/game.html",
  "/public/assets/css/style.css",
  "/public/assets/js/function.js",
  "/public/assets/js/game.js",
  "/public/assets/img/1.png",
  "/public/assets/img/2.png",
  "/public/assets/img/3.png",
  "/public/assets/img/4.png",
  "/public/assets/img/5.png",
  "/public/assets/img/6.png",
  "/public/assets/img/border.jpg",
  "/public/assets/img/bg-desk.png",
  "/public/assets/img/yamsTitle.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticYams).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
