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
    "revision": "c82ad5078253c648b33a473f3805c7b8"
  },
  {
    "url": "about/index.html",
    "revision": "6d96caecaed23de6e7e323e028dd5ab7"
  },
  {
    "url": "articles/class-video.html",
    "revision": "bbbd7560fb861653a9ffc5d67fe5cc85"
  },
  {
    "url": "articles/short-term-course-for-health.html",
    "revision": "accdc30932ad089204cb30eec29e2f16"
  },
  {
    "url": "assets/css/5.styles.1d6de0dd.css",
    "revision": "f6a8a025fbad004e2eae71de71a745da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.e2d866d3.js",
    "revision": "9a2f5affede8f569200f0f6b83f5d958"
  },
  {
    "url": "assets/js/1.f48b71c5.js",
    "revision": "9cc508d38ade76aef273438ab7971c6d"
  },
  {
    "url": "assets/js/2.51ccdcc7.js",
    "revision": "946a2dbe52f63954bafe3e3bbd774c1c"
  },
  {
    "url": "assets/js/3.cd251504.js",
    "revision": "b9e9f2e1377833287a7c6bccd0bf3fb4"
  },
  {
    "url": "assets/js/4.355f528f.js",
    "revision": "10c68122f93dbb651dd3283b06b0b0ef"
  },
  {
    "url": "assets/js/app.5543d199.js",
    "revision": "5417012bf743c1d274464d93c0550121"
  },
  {
    "url": "beijing/index.html",
    "revision": "092dbbed039b8a8f3eefbecc43c344be"
  },
  {
    "url": "images/abraham_lincoln_wujiquan_quote.jpg",
    "revision": "97d98c625538b5dba68685e8841c1467"
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
    "revision": "818409113974ce4d5021ae003e0b26b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
