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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "0261d0b7bf1df7e0bad0d3f6dac3dc4f"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "4c205e0b4bcc00745f3919f59aaca239"
  },
  {
    "url": "assets/css/0.styles.683d4db1.css",
    "revision": "2c9328e614d8d7c9621e1df4c32d8546"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9a0a9a98.js",
    "revision": "5057569dc9815077ee7d2239c288f873"
  },
  {
    "url": "assets/js/11.fda23a57.js",
    "revision": "17b4b1432ea3f61de7240ff26aeb21de"
  },
  {
    "url": "assets/js/12.e2b6b404.js",
    "revision": "82ae2832a81ab95ad8a57eaee51dbbac"
  },
  {
    "url": "assets/js/13.2b616a60.js",
    "revision": "66acaad5a75aadc7c40d2732d6b34b55"
  },
  {
    "url": "assets/js/14.3666446b.js",
    "revision": "534feacb11ebe4cd8e6931d47701f542"
  },
  {
    "url": "assets/js/15.ff2e74a3.js",
    "revision": "d245f72c7a759ef81739c9223558e5c6"
  },
  {
    "url": "assets/js/16.8bda3983.js",
    "revision": "ba4cb64ef9a9aa54e4d09ced225e570d"
  },
  {
    "url": "assets/js/17.cc913dac.js",
    "revision": "1cba65c394d893ad345116fb9408376e"
  },
  {
    "url": "assets/js/18.12c6fb8d.js",
    "revision": "db46217255d2c186163922e0462d514d"
  },
  {
    "url": "assets/js/19.f3055e56.js",
    "revision": "1c8e6d68c623321ec5e810f212573801"
  },
  {
    "url": "assets/js/2.7c0322be.js",
    "revision": "d2f5f24249ac8ddd7ff685d95196f4b8"
  },
  {
    "url": "assets/js/20.649ffdfb.js",
    "revision": "1fe014dff70b4e991fb8ccc2436eb583"
  },
  {
    "url": "assets/js/21.127aec14.js",
    "revision": "ba94ab4ee7a1cb37991a560d9291e6ef"
  },
  {
    "url": "assets/js/22.45ea55d4.js",
    "revision": "66cc00c9f000172011bf37386babaeef"
  },
  {
    "url": "assets/js/23.6eef9b82.js",
    "revision": "731a950f1d045cb91b580516862ef053"
  },
  {
    "url": "assets/js/24.aca97ea9.js",
    "revision": "a2d12407b19c61a374e5b8e2f6dae3be"
  },
  {
    "url": "assets/js/25.b038c38e.js",
    "revision": "6f8c8b6fa79946b9798fe4ba65b58da5"
  },
  {
    "url": "assets/js/27.a4b4ad76.js",
    "revision": "32a584906c605aa37aa1eaf937a193d8"
  },
  {
    "url": "assets/js/3.61039f57.js",
    "revision": "17124352913d5e75858d752c264f9b4f"
  },
  {
    "url": "assets/js/4.c4e9c6bf.js",
    "revision": "90773e0bf4d6aedee55e1e07f94825f3"
  },
  {
    "url": "assets/js/5.5c786487.js",
    "revision": "5d6006d2429229aaa5ffde7d71976163"
  },
  {
    "url": "assets/js/6.39c15d54.js",
    "revision": "f0306f9ae855a5709fc912bdfb73d3e8"
  },
  {
    "url": "assets/js/7.ee8333dc.js",
    "revision": "092f44f9b407c40b73864c16ea45c86b"
  },
  {
    "url": "assets/js/8.62f9d997.js",
    "revision": "66bf12cafa81a9fa5719be210656ce33"
  },
  {
    "url": "assets/js/9.73326d59.js",
    "revision": "255f60e84533194dda0653b6ccba0ddb"
  },
  {
    "url": "assets/js/app.5af26a2c.js",
    "revision": "c5432722066d7af936f92c2338f5f56c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5f17f87657563f2f94bfdaf8dcdf7788"
  },
  {
    "url": "design/index.html",
    "revision": "94069fe802bb400c6721685b1966730b"
  },
  {
    "url": "index.html",
    "revision": "02bf6c1c876a60118a8501291c24c57f"
  },
  {
    "url": "intro/index.html",
    "revision": "aff735d7b6c6a583bc9918d95c329a6f"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ac9237673a554747a7880f2092d14be9"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "be2ac3734fddeb5f1feb566856db90f6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8f9a95689f1b4e1511ce16368cca4e66"
  },
  {
    "url": "software/index.html",
    "revision": "482ea28df9e837a672726850413a70e5"
  },
  {
    "url": "test/index.html",
    "revision": "3d3191035da09d918cfafa53317036c7"
  },
  {
    "url": "use cases/index.html",
    "revision": "74eeb261314d8a14380803ee4d809709"
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
