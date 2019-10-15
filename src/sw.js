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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "App.vue",
    "revision": "b898668e6a30da33eeb4c297ae34e7fe"
  },
  {
    "url": "assets/audio.svg",
    "revision": "8f8f3d19c8bbe65f1169893f70d1f722"
  },
  {
    "url": "assets/blue-sphere-312.png",
    "revision": "9a8bb1dbdf3a99bdbe75dcc8932cc20e"
  },
  {
    "url": "assets/common/aixosPost.js",
    "revision": "10ec68e4ed0bcbd309385edf8debb9a5"
  },
  {
    "url": "assets/common/axiosLoading.js",
    "revision": "3a2bc395ae3577af045d7a9c400f4ee8"
  },
  {
    "url": "assets/common/common.css",
    "revision": "5a97d8e875f90d43f19db6f56963353f"
  },
  {
    "url": "assets/common/reqdata.js",
    "revision": "22992074deaf6caf34a7a2e92ef8258e"
  },
  {
    "url": "assets/logo.png",
    "revision": "fb9e725eb12c5bb839eca2003a38431e"
  },
  {
    "url": "background.js",
    "revision": "f0fc2c6ba5c0e33441cf5679d5c42622"
  },
  {
    "url": "main.js",
    "revision": "b936720c6b9dc81cc09ae4ed6e251e2e"
  },
  {
    "url": "router.js",
    "revision": "0bdca654c99be647177cbf80a2233794"
  },
  {
    "url": "store.js",
    "revision": "ddb505f5a5bae7db3467611827e02492"
  },
  {
    "url": "views/Album.vue",
    "revision": "74785d4e23c5d24086c65b94146d11c5"
  },
  {
    "url": "views/Home.vue",
    "revision": "16b3d98e9b10873d631a1856b90b6e2c"
  },
  {
    "url": "views/List.vue",
    "revision": "e4da047d1c92c20fe7b26b8715232f41"
  },
  {
    "url": "views/lyric.vue",
    "revision": "f98158ff074605cff7479d6f45734f5e"
  },
  {
    "url": "views/Search.vue",
    "revision": "e1aa6c5121b79421ab6595dfdfe22010"
  },
  {
    "url": "views/Suggest.vue",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});