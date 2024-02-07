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
    "url": "404.html",
    "revision": "a7ba9b8ef7043d88ea48ab4e1d392a4f"
  },
  {
    "url": "about.html",
    "revision": "e68a139f2e264e0105f9fbc69e449c28"
  },
  {
    "url": "assets/css/0.styles.f3aaaf2b.css",
    "revision": "26a2e4177bad3100c36a2927e608983d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/test.png",
    "revision": "1a4c83ad8f6bbba465e14395b1cc1e98"
  },
  {
    "url": "assets/js/1.1b0facc3.js",
    "revision": "1c7ae0e52a6bd8fef946249c64a67c0f"
  },
  {
    "url": "assets/js/10.7a73e9aa.js",
    "revision": "ac1830d830f4a5ddc545b8f5702d453c"
  },
  {
    "url": "assets/js/11.e29d68a7.js",
    "revision": "ca6714b329f56a5edbbe03bd96298169"
  },
  {
    "url": "assets/js/12.4624cd9b.js",
    "revision": "0b4d3296d58ec64db1b9259e603a71fa"
  },
  {
    "url": "assets/js/13.d19fbe91.js",
    "revision": "370da169fdc72b6a01833d0af940029c"
  },
  {
    "url": "assets/js/14.ab193c6d.js",
    "revision": "40fc4654a1d419a661923605f3c9226c"
  },
  {
    "url": "assets/js/15.7b53c914.js",
    "revision": "7c1f51c75e2106597bc706ce1b5c99be"
  },
  {
    "url": "assets/js/16.78cf9935.js",
    "revision": "8dd5523775cde7514f8ec6893f45168f"
  },
  {
    "url": "assets/js/17.fe0bb0d4.js",
    "revision": "4dd9a6646bfdecc65134817c0ae0c26e"
  },
  {
    "url": "assets/js/18.5c461771.js",
    "revision": "8d0d25194b9f6ce0954dfa28086c7d0a"
  },
  {
    "url": "assets/js/19.0b360770.js",
    "revision": "0805f5621ab1c913e8894a33849e440a"
  },
  {
    "url": "assets/js/2.9ef47524.js",
    "revision": "f19aa2c024b6c34d9efa19fa015a461d"
  },
  {
    "url": "assets/js/20.1c3bf0da.js",
    "revision": "fd5300cf1d7e09306e369e80e934e40b"
  },
  {
    "url": "assets/js/21.026684e0.js",
    "revision": "5ef6d3c4e2e5a7c91d029665edeb38f2"
  },
  {
    "url": "assets/js/22.e6bd54ae.js",
    "revision": "a9be0563b791d28b92492cbfba524873"
  },
  {
    "url": "assets/js/23.9237d6d8.js",
    "revision": "a576a14066ae0f542e025f26368c6ca2"
  },
  {
    "url": "assets/js/24.0d68aa53.js",
    "revision": "05112397b1d8f64d07462678bc124a26"
  },
  {
    "url": "assets/js/25.408ab893.js",
    "revision": "4933fbab929dae4bd88b1504ebb1f7fc"
  },
  {
    "url": "assets/js/3.218ffbac.js",
    "revision": "fa4c6c059a57f37b2d2b9ab023a34091"
  },
  {
    "url": "assets/js/4.a7aeb368.js",
    "revision": "5bc970ee643f598fd3efabebcb1fb556"
  },
  {
    "url": "assets/js/5.6fb317e7.js",
    "revision": "52e10948c2eb8e28d542adf98a5aeb6d"
  },
  {
    "url": "assets/js/6.16b2dcbe.js",
    "revision": "77d35d09e7a6455e783bce48fa464e7d"
  },
  {
    "url": "assets/js/7.152620db.js",
    "revision": "5c62e1b02479d947b90e4645d980ad8b"
  },
  {
    "url": "assets/js/app.7c7126bc.js",
    "revision": "80bc8638bb7ffad634e9bf5a094c77dd"
  },
  {
    "url": "assets/js/vendors~docsearch.d28eab8b.js",
    "revision": "d5220e24c285820e35c659e1cd654c22"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "d72e18f44bd3ba25e57af1877808c92d"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "709f577af6ab3895468fd8a871a868b7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7f282c09c835bb60f85e0d3ca6f1f498"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "9b7b297027fa7ecb947656336ae41d65"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "8cc18e81a464e08a4e5eaaa5d7dd5ec8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "aeabbcfb0d8585c5afdfcd661a6091e9"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "875ea1d592d3ad7848535a96ce35158b"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "1a4c83ad8f6bbba465e14395b1cc1e98"
  },
  {
    "url": "index.html",
    "revision": "a5345abfcc2e5b187d682fb8ed42af1d"
  },
  {
    "url": "test.png",
    "revision": "1a4c83ad8f6bbba465e14395b1cc1e98"
  }
].concat(self.__precacheManifest || []);
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
