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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "83ec5de6b54af0043a26436814cdf770"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "e2b482c70fe1379b29a1163847e5289d"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "d70d2ca901824358d95e87d74c728ac2"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "04005aae5ea80a548f0bc9f902a517be"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "8d27eecba4df55d50bc94a9818dd7824"
  },
  {
    "url": "assets/css/0.styles.48af518b.css",
    "revision": "48ecf2c4f73e5e2b1204a781dc51b72b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d6e23109.js",
    "revision": "e71559039b4b0de1b0aebdf3aba1f9b2"
  },
  {
    "url": "assets/js/11.c2798025.js",
    "revision": "624f89f30e933556d2fc596236ec1743"
  },
  {
    "url": "assets/js/12.b3b95819.js",
    "revision": "50d42388351e1ca78c22718bef251a71"
  },
  {
    "url": "assets/js/13.a4a3e2aa.js",
    "revision": "e3933a88b94c2e6dec6ece2654ea89c0"
  },
  {
    "url": "assets/js/14.cb351544.js",
    "revision": "ad8b806641caa92b37986a9c9fa60ecb"
  },
  {
    "url": "assets/js/2.92b93840.js",
    "revision": "ebcafa15ecde236617caa1bc6bd7c049"
  },
  {
    "url": "assets/js/3.eb5f0fd5.js",
    "revision": "e89d6e7fe026a743183cedccbf22fb10"
  },
  {
    "url": "assets/js/4.93235907.js",
    "revision": "8780536e7fb14f5df37ed278941caae5"
  },
  {
    "url": "assets/js/5.af29d5f5.js",
    "revision": "21d51c294d12cd457c702261a8c14ba3"
  },
  {
    "url": "assets/js/6.b6b7a54b.js",
    "revision": "2480bf336fb5d543f7d5e5266283b792"
  },
  {
    "url": "assets/js/7.15c5e698.js",
    "revision": "44dcc05b7fae5f029eb78dccdaa0603d"
  },
  {
    "url": "assets/js/8.329cb8ee.js",
    "revision": "b793de2ac5cb7023ee764e09c8ebb1ba"
  },
  {
    "url": "assets/js/9.e1929f6b.js",
    "revision": "baf797c39ee412d430babfc3b4e15985"
  },
  {
    "url": "assets/js/app.2d54a87e.js",
    "revision": "b5035e7c86592e6858c9cdf9619b6991"
  },
  {
    "url": "dylan-broussard.jpg",
    "revision": "0b5e5625d585bad01671bcbe45597fac"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "f9a055c001a573be79262f9a0d7633a2"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "453d4027cdbb16db4d04bc4835c519dc"
  },
  {
    "url": "fr/guide/composants.html",
    "revision": "9ad5321b2bbf6a5cab3128ef4eae6724"
  },
  {
    "url": "fr/guide/directives.html",
    "revision": "918c153aca0b4f3f34437c02dc2ecfbe"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "5b39e18fca1053055555f33e31ab8533"
  },
  {
    "url": "fr/guide/roadmap.html",
    "revision": "81cddc9b4adf9c652596f1151e79ffed"
  },
  {
    "url": "fr/index.html",
    "revision": "5ba5e1f2f3ff246a85a70d84691c5ee2"
  },
  {
    "url": "guide/components.html",
    "revision": "6c3bd8d3341218851ca6684acea3b1b2"
  },
  {
    "url": "guide/directives.html",
    "revision": "31e7222992b75f8d97f3252c42f06c60"
  },
  {
    "url": "guide/index.html",
    "revision": "a95e96ca0b8fafa5ee700f2022fb8dc2"
  },
  {
    "url": "guide/roadmap.html",
    "revision": "140d09109264306ae1bd91062fd67cd4"
  },
  {
    "url": "index.html",
    "revision": "3004eada7e73d92ca1224406f8ed33bf"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "1b6d0ff00665edfaee584a8fda63c694"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "0ce864fe097698234ae0b57ebb060ace"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "993055ae39702e4bb605e1773025f752"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "40c4be6b35fc5862371d4eae7169a974"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "a37a6e70d511ff19687f7a9f1275a4d9"
  },
  {
    "url": "vue.js.svg",
    "revision": "0e4fb06f0d344447816171dc75b42b36"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
