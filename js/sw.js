var CACHE_NAME = "my-site-cache-v4";
var urlsToCache = [
  "index.html",
  "css/animate.css",
  "css/font-awesome.min.css",
  "css/owl.carousel.min.css",
  "css/owl.theme.default.min.css",
  "js/jquery.ajaxchimp.min.js",
  "js/jquery.sticky.js",
  "js/main.js",
  "js/mixitup.min.js",
  "js/owl.carousel.min.js",
  "js/tilt.jquery.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    /* Este método estende o evento ONINSTALL e aplica um estado ao evento chamado ONINSTALLING */
    caches
      .open(
        CACHE_NAME
      ) /* O objeto caches é criado com um namespace e retorna uma Promise */
      .then(function (cache) {
        console.log("Cache aberto");
        return cache.addAll(
          urlsToCache
        ); /* E por fim, conseguimos manipular o objeto de cache corrente */
      })
  );
});
