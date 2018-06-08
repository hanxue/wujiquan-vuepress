/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "35cbcca43826c2278e00836188ca4dbf"
  },
  {
    "url": "about/index.html",
    "revision": "56596f9d0b67fc2fbee9142f0cb2d156"
  },
  {
    "url": "articles/class-video.html",
    "revision": "3678e39d37409f44eecf9991416b9364"
  },
  {
    "url": "articles/index.html",
    "revision": "b049cbe135f44d5d165b51985bd81b06"
  },
  {
    "url": "articles/master-yu-accepting-disciples-april-2018.html",
    "revision": "a921d0bbcbac5e1454f98a97c4d96066"
  },
  {
    "url": "articles/regular-classes-in-beijing.html",
    "revision": "b81ca938c737a746d02534039e180231"
  },
  {
    "url": "articles/short-term-course-for-health.html",
    "revision": "8d7baa308c8ddb5606aca0c3f0c5ebd8"
  },
  {
    "url": "assets/css/14.styles.069008a2.css",
    "revision": "f6a8a025fbad004e2eae71de71a745da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.b4ccc6e3.js",
    "revision": "f1a6960b88eb6b94565d56a23da56752"
  },
  {
    "url": "assets/js/1.dd4ce715.js",
    "revision": "12d45c42c2b3ae5d5b817ec6028047be"
  },
  {
    "url": "assets/js/10.a2e17264.js",
    "revision": "b2b456682dd201f378d1252dbc36c01c"
  },
  {
    "url": "assets/js/11.86842927.js",
    "revision": "08abfc1d0ad5cc6d99ebb63b6670679e"
  },
  {
    "url": "assets/js/12.d2b6fab0.js",
    "revision": "f702eade918aa8b9f9a589912b857fac"
  },
  {
    "url": "assets/js/13.b8c186f8.js",
    "revision": "807f3f2845d3a2049e889cf69f7a7ea7"
  },
  {
    "url": "assets/js/2.5c699541.js",
    "revision": "958030a718803a14903b92fe7369368f"
  },
  {
    "url": "assets/js/3.b8b503b8.js",
    "revision": "b17fa1b669c91b1754c9540b32ed8ead"
  },
  {
    "url": "assets/js/4.b2ab07ab.js",
    "revision": "9b292db76fe5c1432437eaeffb57e4ee"
  },
  {
    "url": "assets/js/5.30fbf293.js",
    "revision": "fb39666e8ec34220170a7cbd68fc7670"
  },
  {
    "url": "assets/js/6.f16fe9c8.js",
    "revision": "8773ce2f28486c3f94d23c1c4b623df4"
  },
  {
    "url": "assets/js/7.e0882c09.js",
    "revision": "74cb7d5d56dfcd888d41544528e99c70"
  },
  {
    "url": "assets/js/8.6672ef74.js",
    "revision": "440506551ce4baa0c116cc30f7d48c72"
  },
  {
    "url": "assets/js/9.b7ee17bd.js",
    "revision": "62d1c74c9d18e764fca0b8375e46527d"
  },
  {
    "url": "assets/js/app.73d61608.js",
    "revision": "1fb6a4839331db42da69cdcbd98b6318"
  },
  {
    "url": "beijing/index.html",
    "revision": "bcae17893165553978c784e0129b9109"
  },
  {
    "url": "images/abraham_lincoln_wujiquan_quote.jpg",
    "revision": "97d98c625538b5dba68685e8841c1467"
  },
  {
    "url": "images/arrow_pointing_left.png",
    "revision": "56d53b1bc0df8b5de3dcef4fb829753f"
  },
  {
    "url": "images/marian_wechat_qr_code.jpeg",
    "revision": "d33eab0274922d780c072dc58afdef5f"
  },
  {
    "url": "images/Wujiquan_logo.jpeg",
    "revision": "ea9aa25c165de8a27b92b1d673dcfa7b"
  },
  {
    "url": "index.html",
    "revision": "e3e7c838ea68bb3b8ec51177d608a3cf"
  },
  {
    "url": "yandex_275d906ec807d022.html",
    "revision": "1d9b7c8445c9be62366270e64b8f9ffb"
  },
  {
    "url": "zh/articles/class-video.html",
    "revision": "52f0c8dca93bdf847550ea70c3b5cf89"
  },
  {
    "url": "zh/articles/index.html",
    "revision": "c4f15c958a6daf42f6fbfe9af2aa852d"
  },
  {
    "url": "zh/articles/master-yu-accepting-disciples-april-2018.html",
    "revision": "3da5d364dfbba2a08ac6abe88cbb4030"
  },
  {
    "url": "zh/articles/regular-classes-in-beijing.html",
    "revision": "f59487af7073edf6d5cda6177bd7f94c"
  },
  {
    "url": "zh/articles/short-term-course-for-health.html",
    "revision": "a1f0ce41e7415f84b664c28ff5e0d76a"
  },
  {
    "url": "zh/index.html",
    "revision": "1d8f7d54bf62dea1259e76e596ee1897"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
