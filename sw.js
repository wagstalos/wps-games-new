var CACHE_NAME = "my-site-cache-v4";
var urlsToCache = [
  "index.html",
  "css/animate.css",
  "css/font-awesome.min.css",
  "css/owl.carousel.min.css",
  "css/owl.theme.default.min.css",
  "css/style.css",
  "fonts/fontawesome-webfont.eot",
  "fonts/fontawesome-webfont.svg",
  "fonts/fontawesome-webfont.ttf",
  "fonts/fontawesome-webfont.woff",
  "fonts/fontawesome-webfont.woff2",
  "fonts/FontAwesome.otf",
  "fonts/Linearicons-Free.eot",
  "fonts/Linearicons-Free.svg",
  "fonts/Linearicons-Free.ttf",
  "fonts/Linearicons-Free.woff",
  "fonts/Linearicons-Free.woff2",
  "fonts/fontawesome-webfont.svg",
  "js/vendor/bootstrap.min.js",
  "js/vendor/jquery-2.2.4.min.js",
  "js/jquery-min.js",
  "js/jquery.ajaxchimp.min.js",
  "js/jquery.nicescroll.min.js",
  "js/jquery.sticky.js",
  "js/main.js",
  "js/manifest.json",
  "js/mixitup.min.js",
  "js/owl.carousel.min.js",
  "js/sw.js",
  "js/tilt.jquery.js",
  "img/animacao.svg",
  "img/animar.svg",
  "img/animat-diamond-color.gif",
  "img/animat-responsive-color.gif",
  "img/animat-rocket-color.gif",
  "img/app-prodigium.png",
  "img/bandeira.svg",
  "img/banner_final.png",
  "img/banner-foquete.png",
  "img/banner.jpg",
  "img/banner.png",
  "img/bg-contato.png",
  "img/bg-contato.svg",
  "img/bg-projetos.jpg",
  "img/bg-rodape.png",
  "img/controle.svg",
  "img/faixa.png",
  "img/gamepad-console.svg",
  "img/icone.png",
  "img/img_vaca.png",
  "img/img-jogos.png",
  "img/jogo.jpg",
  "img/jogo1.jpg",
  "img/jogo2.jpg",
  "img/jogo3.jpg",
  "img/jogo4.jpg",
  "img/jogo5.jpg",
  "img/jogo6.jpg",
  "img/jogo7.jpg",
  "img/jogo8.jpg",
  "img/jogo9.jpg",
  "img/jogo10.jpg",
  "img/jogo11.jpg",
  "img/jogo12.jpg",
  "img/jogo13.jpg",
  "img/jogo14.jpg",
  "img/jogo15.jpg",
  "img/jogo16.png",
  "img/jogo17.jpg",
  "img/kart.png",
  "img/kart.svg",
  "img/launcher-icon-1-5x.png",
  "img/launcher-icon-1x.png",
  "img/launcher-icon-2x.png",
  "img/launcher-icon-3x.png",
  "img/launcher-icon-4x.png",
  "img/logo.png",
  "img/message.gif",
  "img/pattern.png",
  "img/site-dpcontent.jpg",
  "img/site-draloysio.jpg",
  "img/site-prodigium.png",
  "img/site-wagner.png",
  "img/site1.png",
  "img/site2.png",
  "img/site3.png",
  "img/site4.png",
  "img/startup.svg",
  "img/wpsgamesicon.png",
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

self.addEventListener("install", function (event) {
  event.waitUntil(
    /* Este método estende o evento ONINSTALL e aplica um estado ao evento chamado ONINSTALLING */
    caches
      .open(
        CACHE_NAME
      ) /* O objeto caches é criado com um namespace e retorna uma Promise */
      .then(function (cache) {
        // console.log('Cache aberto');
        return cache.addAll(
          urlsToCache
        ); /* E por fim, conseguimos manipular o objeto de cache corrente */
      })
  );
});

self.addEventListener("activate", function (event) {
  console.log("activate");
  event.waitUntil(
    cache.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(CACHE_NAME) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
