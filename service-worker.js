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
    "revision": "fedfcd011422eb2d1f6dc15170ebc360"
  },
  {
    "url": "assets/css/0.styles.f642cec9.css",
    "revision": "a5c2b4350d316b9cfa36a5793258556b"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/121-1.c1cc3cb5.jpg",
    "revision": "c1cc3cb527f0fdd76c33ede159e142c1"
  },
  {
    "url": "assets/img/122.a9a5f5f4.png",
    "revision": "a9a5f5f42f789b72dd2bf636896b519c"
  },
  {
    "url": "assets/img/137-1.dcefb6bb.png",
    "revision": "dcefb6bb548bf392abc3b8b453ccac32"
  },
  {
    "url": "assets/img/342-1.ed07372f.jpg",
    "revision": "ed07372f6ff40f3a5c4f7e329c07e0c0"
  },
  {
    "url": "assets/img/424-1.f9b966d7.jpg",
    "revision": "f9b966d7a781335541a55d62acf701c9"
  },
  {
    "url": "assets/img/LCP-09-1.8ca4bb1f.jpg",
    "revision": "8ca4bb1f0f5c52df0f640a04eea9f054"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c6bcee41.js",
    "revision": "20755307cda3be20b073418343729f7a"
  },
  {
    "url": "assets/js/100.3a1516b8.js",
    "revision": "96e6cd31d3ae7a72ad3eabeb37bc3f0b"
  },
  {
    "url": "assets/js/101.02ea2a07.js",
    "revision": "e4414514337563cbc46d84526f829093"
  },
  {
    "url": "assets/js/102.8a5f142a.js",
    "revision": "55a7269592e10524298db9738e061819"
  },
  {
    "url": "assets/js/103.af0c11ca.js",
    "revision": "3e8bbca70ca45ead6be35f26bf7552a0"
  },
  {
    "url": "assets/js/104.66ea2467.js",
    "revision": "38198ec4f2c8377bea0fa795fc40981e"
  },
  {
    "url": "assets/js/105.ddc966cd.js",
    "revision": "c24eede19fe68173d6528beb735e0c36"
  },
  {
    "url": "assets/js/106.5057e75a.js",
    "revision": "653f30a23b8264303ddd7429a3bd03c6"
  },
  {
    "url": "assets/js/107.d961e09b.js",
    "revision": "242db0292572ba05bb7cf92ebd4467a4"
  },
  {
    "url": "assets/js/108.140c7c9b.js",
    "revision": "03f54c3a8f2d67919ef66ba8fece587f"
  },
  {
    "url": "assets/js/109.f426a590.js",
    "revision": "b005292678196d348b7ca0d4260b089a"
  },
  {
    "url": "assets/js/11.1efe1bc9.js",
    "revision": "0fcc70ebffa0a44f816b4c5d82a6264b"
  },
  {
    "url": "assets/js/110.cb1490c6.js",
    "revision": "1b861f0c6376059c8ccab0d5e2405ebe"
  },
  {
    "url": "assets/js/111.1ed1d44f.js",
    "revision": "ee3b231fda859e7325982f1c875b7f4c"
  },
  {
    "url": "assets/js/112.7dd1a62e.js",
    "revision": "63f6a8e50b2704bfdfb642fa4951010b"
  },
  {
    "url": "assets/js/113.187325c7.js",
    "revision": "1d428545e6ddb239969e117d95c85ce4"
  },
  {
    "url": "assets/js/114.af35db68.js",
    "revision": "5165e257718f63749aff4f7ac4a1a0f6"
  },
  {
    "url": "assets/js/115.87554526.js",
    "revision": "ced823a962a0130e805245f8dd550698"
  },
  {
    "url": "assets/js/116.ff0736b1.js",
    "revision": "cf62972141d0010eb932cff073b7f165"
  },
  {
    "url": "assets/js/117.5c391b37.js",
    "revision": "b3fbbf3e41245552c1b665e52dfeb6dd"
  },
  {
    "url": "assets/js/118.865d3480.js",
    "revision": "7d303cfdca1f22b1b333248782aa2a26"
  },
  {
    "url": "assets/js/119.6a012d27.js",
    "revision": "deffd6bf7211c27e7c3d759c78791bf7"
  },
  {
    "url": "assets/js/12.ecc1dddd.js",
    "revision": "91b66b36faab7a8a8429eca459e2b7d0"
  },
  {
    "url": "assets/js/120.3af771b3.js",
    "revision": "b1e048dd6adde7fa59392366fc8d0f52"
  },
  {
    "url": "assets/js/121.e76f8327.js",
    "revision": "cee0b90e071f963d17cc60a8d3d1c78a"
  },
  {
    "url": "assets/js/122.eb53bf9d.js",
    "revision": "051a92fe05e3b38d08be253676f9f9d4"
  },
  {
    "url": "assets/js/123.62db3174.js",
    "revision": "f574614555716cc23f1a306234daf319"
  },
  {
    "url": "assets/js/124.00d9870d.js",
    "revision": "c6b86996d352dbc6bada85c1b4bc769b"
  },
  {
    "url": "assets/js/125.e5d384d9.js",
    "revision": "129b06adff7abec9611b65edd47b841d"
  },
  {
    "url": "assets/js/126.2212b07f.js",
    "revision": "38fb4e9f862e85bdb44625bccf719be6"
  },
  {
    "url": "assets/js/127.1509f6a5.js",
    "revision": "50e58e6470217c0d990650a358a52732"
  },
  {
    "url": "assets/js/128.3f39b215.js",
    "revision": "557a2d2b739a8aec4ed44f36a2df955a"
  },
  {
    "url": "assets/js/129.e6859a18.js",
    "revision": "eefe11d81f9cdbba3188f2f11f57d71d"
  },
  {
    "url": "assets/js/13.778aed16.js",
    "revision": "5aafdbe9634bbbb9deee0d4c2b6d07ec"
  },
  {
    "url": "assets/js/130.510e526c.js",
    "revision": "1cee896d3f99a2190448259bff0f60d5"
  },
  {
    "url": "assets/js/131.ee472d81.js",
    "revision": "af5afbafe24df8866bc8abaa14566bb3"
  },
  {
    "url": "assets/js/132.e90a8cdd.js",
    "revision": "27080bae6f181e21674da7b7c77906ff"
  },
  {
    "url": "assets/js/133.1f785e83.js",
    "revision": "e4c5aed18f48d1315d7757d3ac1be881"
  },
  {
    "url": "assets/js/134.8857881d.js",
    "revision": "7898627994d47d5af5a10b2face2e0a9"
  },
  {
    "url": "assets/js/135.2ed135cb.js",
    "revision": "4fd0627b93de09ed5036e3729f1de48e"
  },
  {
    "url": "assets/js/136.19d18ba8.js",
    "revision": "ef83203f819d69898311ca1be4145f01"
  },
  {
    "url": "assets/js/137.3329d9f9.js",
    "revision": "e4c15000fe337ea16ced64479d6a400c"
  },
  {
    "url": "assets/js/138.8f1cfc4c.js",
    "revision": "fd2caac4307d01bee8cb42af5fd36759"
  },
  {
    "url": "assets/js/139.b84831eb.js",
    "revision": "60f468ab2a23917f9dc7419f8818cdbc"
  },
  {
    "url": "assets/js/14.19a8b99c.js",
    "revision": "294b190bf498b30777e109901ebd12ac"
  },
  {
    "url": "assets/js/140.d0c3d66a.js",
    "revision": "3bfb120eb22e2296fb8059fcf00db0de"
  },
  {
    "url": "assets/js/141.91eb5852.js",
    "revision": "47a3ae163759bff98f5b7f87ab142e33"
  },
  {
    "url": "assets/js/142.4bf75073.js",
    "revision": "7228ff7ab2556c0dd90b2c1755a74bc6"
  },
  {
    "url": "assets/js/143.f6e5b21c.js",
    "revision": "b4b0d96963fae118646e0fb814016f75"
  },
  {
    "url": "assets/js/144.bf1174fc.js",
    "revision": "381b22c43ba92fa203f6586f320dfc74"
  },
  {
    "url": "assets/js/145.444b5597.js",
    "revision": "9c2011066d3b6a3ab049ebe21d85922c"
  },
  {
    "url": "assets/js/146.651e0626.js",
    "revision": "e3884d30608c6bdd4f073b6b71640abb"
  },
  {
    "url": "assets/js/147.65e72b37.js",
    "revision": "dd502ac6f153dbcf814a1056d44194a8"
  },
  {
    "url": "assets/js/148.266e9231.js",
    "revision": "b139fd9b85cb2517f9067126eaed2aad"
  },
  {
    "url": "assets/js/149.bfd7ba5f.js",
    "revision": "1d7695fa2bc1f8e6be7145ca2f97595a"
  },
  {
    "url": "assets/js/15.67389f00.js",
    "revision": "0759b9b569be6126119381423b588f72"
  },
  {
    "url": "assets/js/150.6ed8c503.js",
    "revision": "3e0d88ed5092f5478153da8914ad9362"
  },
  {
    "url": "assets/js/151.0cb3cbe4.js",
    "revision": "6be8ece93b9a71b737ea8b24ef1b0d35"
  },
  {
    "url": "assets/js/152.41a47844.js",
    "revision": "116b67814d499724e029896211f03e87"
  },
  {
    "url": "assets/js/153.2a832a3e.js",
    "revision": "46179b3df61a6c246ebe8ec02ccd51ee"
  },
  {
    "url": "assets/js/154.582b96a8.js",
    "revision": "a3622e6b8e7a72004c425768bfb2cf7a"
  },
  {
    "url": "assets/js/155.21cf69db.js",
    "revision": "3a3be9cb1afe4dc8180467a0d9b6eaec"
  },
  {
    "url": "assets/js/156.ebf08713.js",
    "revision": "0952e54b26b0d1a46fa762395e1dc3fe"
  },
  {
    "url": "assets/js/157.7592392a.js",
    "revision": "dfa5b4e3b4b11cd635087e2eeeb380fe"
  },
  {
    "url": "assets/js/158.40acd99f.js",
    "revision": "4d3a8a78c954a206c6b2c427aa531cb2"
  },
  {
    "url": "assets/js/159.d277a126.js",
    "revision": "19a7f0a08f5651cd80d05b08416d54fe"
  },
  {
    "url": "assets/js/16.1c3919a2.js",
    "revision": "cb1ff1b8d1e555bc8af89a8131197536"
  },
  {
    "url": "assets/js/160.59d4492d.js",
    "revision": "e426342e4a2cf2313b7d42779dfa988e"
  },
  {
    "url": "assets/js/161.ea259e70.js",
    "revision": "e4f324b3d6c53662d3f4ff611bb5f9c3"
  },
  {
    "url": "assets/js/162.98fd7a2f.js",
    "revision": "a0346b772d87f47ec5d1f05ac8630905"
  },
  {
    "url": "assets/js/163.d8e1b03a.js",
    "revision": "f982ddf25707fe90d6bc2d37107b23fa"
  },
  {
    "url": "assets/js/164.553ab1b0.js",
    "revision": "e3967ca4e97c8615895bf471eeb6bb28"
  },
  {
    "url": "assets/js/165.edaedeeb.js",
    "revision": "3ba49188dd64335e8b0ca03728c2e83a"
  },
  {
    "url": "assets/js/166.15ca3f14.js",
    "revision": "3b0bc067faa8da758462c720d0bdd8c5"
  },
  {
    "url": "assets/js/167.e2004674.js",
    "revision": "45bacf3613523c916021b182bd78c64a"
  },
  {
    "url": "assets/js/168.3698e2e2.js",
    "revision": "42cbefb8de43b456834a536ad0428dcb"
  },
  {
    "url": "assets/js/169.78e8d585.js",
    "revision": "6df898876c1fa6e5f0bb39687c2f541f"
  },
  {
    "url": "assets/js/17.e1f31430.js",
    "revision": "8a88b36190c2e88dd735b25c6ac3a6fe"
  },
  {
    "url": "assets/js/170.ea4e0133.js",
    "revision": "966b52e9fa65e6db2b118d3957696242"
  },
  {
    "url": "assets/js/171.59818760.js",
    "revision": "b45cab014d7d2fbd59a5482ddeaa079d"
  },
  {
    "url": "assets/js/172.1b7e2915.js",
    "revision": "03c74cf7238dfde5a05852cac251e46a"
  },
  {
    "url": "assets/js/18.50b15429.js",
    "revision": "a29b4c7350239c1e242c5b10005f2b5f"
  },
  {
    "url": "assets/js/19.ab9a87de.js",
    "revision": "4e26a436db19891ca59eefcd63cda85e"
  },
  {
    "url": "assets/js/2.8ebd4b9b.js",
    "revision": "ff10804ba4695e2c92f7719287535b0c"
  },
  {
    "url": "assets/js/20.2b153f43.js",
    "revision": "b8a26ed353a6b5515ab401c65f405ca2"
  },
  {
    "url": "assets/js/21.8fe5ff78.js",
    "revision": "4bd762d465bfa7e65db2ebe46192982e"
  },
  {
    "url": "assets/js/22.712b5062.js",
    "revision": "32428dfdb0974ad2231940b2b45da068"
  },
  {
    "url": "assets/js/23.d4169bd7.js",
    "revision": "e39b6be169140ec847840667e2b0adbe"
  },
  {
    "url": "assets/js/24.ce656951.js",
    "revision": "f20d641fbb44550d59cd7d29ca31dffb"
  },
  {
    "url": "assets/js/25.db008987.js",
    "revision": "689f52a609c4957b6944d8252d69b65a"
  },
  {
    "url": "assets/js/26.55d9d8cb.js",
    "revision": "8e68bedc3c0c0350ad93d74898cfb640"
  },
  {
    "url": "assets/js/27.79a7e95a.js",
    "revision": "9bbe9db924404fde48198535846991f2"
  },
  {
    "url": "assets/js/28.b9fde2ae.js",
    "revision": "ce89b87f720b18fc287f6da761d4dc59"
  },
  {
    "url": "assets/js/29.7e58b466.js",
    "revision": "7100f3e5ac4d8bb21cfe2c1910cbe9bd"
  },
  {
    "url": "assets/js/3.344ad1c6.js",
    "revision": "68c8140afa6b1d4fe8b8df3c4f1b3eee"
  },
  {
    "url": "assets/js/30.3868ebcb.js",
    "revision": "c7a2024a7fe6616e83b243b79fc09e44"
  },
  {
    "url": "assets/js/31.ce8165c2.js",
    "revision": "a5a7ab68b89bc27aedafd6453be6675e"
  },
  {
    "url": "assets/js/32.f20b4d07.js",
    "revision": "db78b46b23071118e5297eb46496a8d7"
  },
  {
    "url": "assets/js/33.3d396a87.js",
    "revision": "a4c3189bd240345b1b29a573a2947e78"
  },
  {
    "url": "assets/js/34.6b681309.js",
    "revision": "25ce0c411281eb48274024638a1c52de"
  },
  {
    "url": "assets/js/35.21fd1dc1.js",
    "revision": "2418e007c714178d18ebc14cfb186572"
  },
  {
    "url": "assets/js/36.c8652f99.js",
    "revision": "a35357dc94da14d9a5c85497227344dc"
  },
  {
    "url": "assets/js/37.59a4dc16.js",
    "revision": "86d0a4646801307a9049bad9e4d3d6ec"
  },
  {
    "url": "assets/js/38.e479e625.js",
    "revision": "671573d9c9d0641ce972e51ec5b2d59f"
  },
  {
    "url": "assets/js/39.c8fb7ab3.js",
    "revision": "d039b976fb9ba4e166fb2dcc2cbe9d10"
  },
  {
    "url": "assets/js/4.e66a5f1a.js",
    "revision": "251e430ba9597fbdcb2ec71469e71830"
  },
  {
    "url": "assets/js/40.02341b5b.js",
    "revision": "9d22345ed4b33d299a2ce839600612f7"
  },
  {
    "url": "assets/js/41.9da0f58d.js",
    "revision": "c7b7a66c0144d8e59e3a9758334470ee"
  },
  {
    "url": "assets/js/42.a966ac6b.js",
    "revision": "9dfc0e1c490f2f1686ff9d70d684f1db"
  },
  {
    "url": "assets/js/43.0dea70f2.js",
    "revision": "39284f091b0efaeb57225f6d7e1834fb"
  },
  {
    "url": "assets/js/44.ebe9cd7b.js",
    "revision": "7befeac8b10d3b7acf74d6c4d74ec92d"
  },
  {
    "url": "assets/js/45.9b579243.js",
    "revision": "937265b991fd36d0416f760d255ed881"
  },
  {
    "url": "assets/js/46.308fd4af.js",
    "revision": "27f001fbbeee9c9c7b7f950a90b63451"
  },
  {
    "url": "assets/js/47.81131a16.js",
    "revision": "b59877e2d403099d1f75000bfaa27215"
  },
  {
    "url": "assets/js/48.c384c8b1.js",
    "revision": "f18f4751990a8a4dbc6fc6e1ae559284"
  },
  {
    "url": "assets/js/49.6ed7b213.js",
    "revision": "0c8ac83b1abff3c135d918c15a47306a"
  },
  {
    "url": "assets/js/5.7e48fffb.js",
    "revision": "b0db47a88462acac3176248321e8a519"
  },
  {
    "url": "assets/js/50.8728300d.js",
    "revision": "d8aaba15f801702afeb828172f34cfa7"
  },
  {
    "url": "assets/js/51.056e6832.js",
    "revision": "41dc3ea0e5a9c2adc722716bb11dbe11"
  },
  {
    "url": "assets/js/52.b3996141.js",
    "revision": "2fea9de88c367e77a71422fbd97eadc6"
  },
  {
    "url": "assets/js/53.15079244.js",
    "revision": "e74b946c6d21245b7145b6e98ec4578d"
  },
  {
    "url": "assets/js/54.d59eebf6.js",
    "revision": "92c923273dc3e8614f27637077d4dc1e"
  },
  {
    "url": "assets/js/55.5ce146e4.js",
    "revision": "0fd7f13723d30704390df12ae3d85f96"
  },
  {
    "url": "assets/js/56.84aca297.js",
    "revision": "86dcd201b35d5db5c8fd9af901aeae49"
  },
  {
    "url": "assets/js/57.efa72ee1.js",
    "revision": "1dae1fe110510b29fff6e90e06426e9b"
  },
  {
    "url": "assets/js/58.0460decf.js",
    "revision": "4432f0686fc6113d92971da77139d341"
  },
  {
    "url": "assets/js/59.55faee58.js",
    "revision": "07312b0341862667534d7fc486e85182"
  },
  {
    "url": "assets/js/6.be4a3961.js",
    "revision": "84fc90bc7e4ac82e090eca4e3806d6af"
  },
  {
    "url": "assets/js/60.a2f25d37.js",
    "revision": "a8f41492a02309411cc8e0ebaa6e3030"
  },
  {
    "url": "assets/js/61.b04af5af.js",
    "revision": "c527f9a9cd7739b42dcef97efd0b5743"
  },
  {
    "url": "assets/js/62.b945b17c.js",
    "revision": "03288b2ea20cdee20e7935826b38cb49"
  },
  {
    "url": "assets/js/63.c5020a33.js",
    "revision": "2c470a613e1e3dfc7ee82fd19401ef86"
  },
  {
    "url": "assets/js/64.332b3b35.js",
    "revision": "c5b8d7589deb5a93ab36de9f2ad0f5ff"
  },
  {
    "url": "assets/js/65.bcf76bb6.js",
    "revision": "d654dfb5e96f776a6aec067584bdee13"
  },
  {
    "url": "assets/js/66.cdbb036c.js",
    "revision": "460bc2e6d5d65c164172c363a0d4261c"
  },
  {
    "url": "assets/js/67.bd9a7303.js",
    "revision": "d20ef62581ffae21c0dd0701f196687c"
  },
  {
    "url": "assets/js/68.b5e1286c.js",
    "revision": "17151cce6b1c41fbc081dcf85199377a"
  },
  {
    "url": "assets/js/69.713d1529.js",
    "revision": "fb9894949dc9db7a79653debe7e4d63e"
  },
  {
    "url": "assets/js/7.d779800d.js",
    "revision": "54cffd268797afc72842c7116a0eb4e6"
  },
  {
    "url": "assets/js/70.d797e0cf.js",
    "revision": "cb1c3c86fe5915f2a063be5efe3db066"
  },
  {
    "url": "assets/js/71.af159b2e.js",
    "revision": "27f347752089d1bff1834f328d05cf2b"
  },
  {
    "url": "assets/js/72.62fe57d0.js",
    "revision": "e4dc1ba72805108ac67fd2dba4984b2e"
  },
  {
    "url": "assets/js/73.34db524f.js",
    "revision": "2fce50c0f6ce7c99879b4f7c9dcb76f4"
  },
  {
    "url": "assets/js/74.955db922.js",
    "revision": "b493c95c466e450b572735339b21bb71"
  },
  {
    "url": "assets/js/75.c82bb2a1.js",
    "revision": "32c9db3041f31edcb34235a8e532c796"
  },
  {
    "url": "assets/js/76.e2df0b35.js",
    "revision": "c1f64ee1629fb7f39c61f2a45bc5478d"
  },
  {
    "url": "assets/js/77.a3dbfcbd.js",
    "revision": "66f4b724eadf828ede5ffe54809c308c"
  },
  {
    "url": "assets/js/78.3e1056af.js",
    "revision": "6ca7a258f6658be52b028bd91b23f4bd"
  },
  {
    "url": "assets/js/79.199c6d64.js",
    "revision": "ae5fe0767964638562e8f38552327888"
  },
  {
    "url": "assets/js/8.da08061b.js",
    "revision": "cf79f964ab3ac555fd55dac0bf108986"
  },
  {
    "url": "assets/js/80.8015b1e7.js",
    "revision": "f49c562cc092d939cf75291b75924782"
  },
  {
    "url": "assets/js/81.f6f754e7.js",
    "revision": "cbb079ef0cebb7f8fa6b7b102c66299d"
  },
  {
    "url": "assets/js/82.bd857330.js",
    "revision": "47dc35257113e92b2dbb012ba86e5f25"
  },
  {
    "url": "assets/js/83.249ef5c9.js",
    "revision": "c3bbc38e3d27e119907b13d07a1d7552"
  },
  {
    "url": "assets/js/84.3d39036b.js",
    "revision": "b9e96524c31d30f503ec62f21c685c71"
  },
  {
    "url": "assets/js/85.6d882f02.js",
    "revision": "c3c63ca94e0eda169a55a76257927601"
  },
  {
    "url": "assets/js/86.15b03124.js",
    "revision": "875a447e0c4b9fab9da72e229fae7473"
  },
  {
    "url": "assets/js/87.1d8589f2.js",
    "revision": "d4826188df3f46860c2a1a789a04da75"
  },
  {
    "url": "assets/js/88.abefdef3.js",
    "revision": "1eed058a2286904d598ad8fa1171d2df"
  },
  {
    "url": "assets/js/89.9c15e18d.js",
    "revision": "90f25a0e56ea0f7e619c3cd9de643d24"
  },
  {
    "url": "assets/js/9.6377b8ae.js",
    "revision": "bb415165e52749d6d31063e576109f94"
  },
  {
    "url": "assets/js/90.b6fc1c1f.js",
    "revision": "ecebafcd722731d255043f1644189a02"
  },
  {
    "url": "assets/js/91.f3fa5843.js",
    "revision": "2c3f173befabcb41a4434495eaf8413e"
  },
  {
    "url": "assets/js/92.8063686b.js",
    "revision": "7c596cf3695063bfad8557279e38083f"
  },
  {
    "url": "assets/js/93.1d1158c6.js",
    "revision": "0d5861bb35d8790b9eea1be17b524a44"
  },
  {
    "url": "assets/js/94.6d579e5c.js",
    "revision": "cb576746af70ae8828c279b6e80f2ad1"
  },
  {
    "url": "assets/js/95.5070fa23.js",
    "revision": "4e3f5e4f5786a1196d6c896b5456ac8f"
  },
  {
    "url": "assets/js/96.e97a6c62.js",
    "revision": "edcee2de5f192345386873bd6887edc4"
  },
  {
    "url": "assets/js/97.9fb6bbd3.js",
    "revision": "57c430a3edb2aed8635d5b20d8fe7a50"
  },
  {
    "url": "assets/js/98.8d5cd05f.js",
    "revision": "91f64b55577c7798e7bc5e753a88e7ab"
  },
  {
    "url": "assets/js/99.93d3b285.js",
    "revision": "329a5f0af827d9679c03bacd43db34dd"
  },
  {
    "url": "assets/js/app.86e001c7.js",
    "revision": "12044ad7c146246f654073a2dc73678b"
  },
  {
    "url": "index.html",
    "revision": "0f5cafffaf06ffbf38fdc78cd237e36e"
  },
  {
    "url": "problems/backtrack/131.html",
    "revision": "04605974b89a63ad8b7f82ae06b4cac0"
  },
  {
    "url": "problems/backtrack/22.html",
    "revision": "453e75c65709bc8ad56aabf494e238ff"
  },
  {
    "url": "problems/backtrack/437.html",
    "revision": "a930072129da022241deece7e547c78a"
  },
  {
    "url": "problems/backtrack/index.html",
    "revision": "e7a7c4a33ce7528b32a2acd97c064994"
  },
  {
    "url": "problems/bfs-and-dfs/1028.html",
    "revision": "d2d7bac75fad1607fb0c9b75e1191c41"
  },
  {
    "url": "problems/bfs-and-dfs/1372.html",
    "revision": "869aacb5993eb8de3ea0c8d10de8a194"
  },
  {
    "url": "problems/bfs-and-dfs/1466.html",
    "revision": "75238f5d50d7f5f70b8d0c8502e3379a"
  },
  {
    "url": "problems/bfs-and-dfs/199.html",
    "revision": "8cd987db0f293ed39ed4330036a61116"
  },
  {
    "url": "problems/bfs-and-dfs/236.html",
    "revision": "6ede1d813203e0aa65b5078ebd731896"
  },
  {
    "url": "problems/bfs-and-dfs/257.html",
    "revision": "dbf6b8fce8cb08307b13a0d87a1b7e97"
  },
  {
    "url": "problems/bfs-and-dfs/543.html",
    "revision": "85b296403140ba8f3165c2d9b785f451"
  },
  {
    "url": "problems/bfs-and-dfs/695.html",
    "revision": "fe73c608e822b09c58286ca57727f64f"
  },
  {
    "url": "problems/bfs-and-dfs/994.html",
    "revision": "7810162b600863538081922926c53955"
  },
  {
    "url": "problems/bfs-and-dfs/index.html",
    "revision": "5df5c49fec8a0068c96b1fd879e902c1"
  },
  {
    "url": "problems/bfs-and-dfs/lcof-13.html",
    "revision": "cb667f35f05d549618e5149cfa1fc6ff"
  },
  {
    "url": "problems/bfs-and-dfs/LCP-09.html",
    "revision": "5a90d2ce7261b0f12ff04120a3fe1f52"
  },
  {
    "url": "problems/bit-operation/136.html",
    "revision": "f729c630db2ef5e9723fb2400d874c0c"
  },
  {
    "url": "problems/bit-operation/137.html",
    "revision": "d7bfbabdc5436f406bd4367087436ab9"
  },
  {
    "url": "problems/bit-operation/1486.html",
    "revision": "5de62f848869d4ea38b64da3b93eb787"
  },
  {
    "url": "problems/bit-operation/231.html",
    "revision": "c72579bd772ffa0de44451b4dc2705d7"
  },
  {
    "url": "problems/bit-operation/260.html",
    "revision": "905cbe2fcdcb129f269cd1a74ca27e83"
  },
  {
    "url": "problems/bit-operation/326.html",
    "revision": "c35c2c03bf02f2ec41952209ac3d3cb2"
  },
  {
    "url": "problems/bit-operation/342.html",
    "revision": "bd706daf73c29c63c2985ef6a596b89d"
  },
  {
    "url": "problems/bit-operation/372.html",
    "revision": "24034946c97dbf09b8dc49941798a52a"
  },
  {
    "url": "problems/bit-operation/397.html",
    "revision": "dbb7ba0c971a65d8df8f8faf28c49533"
  },
  {
    "url": "problems/bit-operation/index.html",
    "revision": "ca5d13df6cd9e3ea2bd311f4b4a9483b"
  },
  {
    "url": "problems/data-structure/1.html",
    "revision": "aeaa325250603a3acff7476aa75172aa"
  },
  {
    "url": "problems/data-structure/101.html",
    "revision": "a63c3e34d087c99adec09e387c70a831"
  },
  {
    "url": "problems/data-structure/105.html",
    "revision": "294e4f9a8e0017da29f9e512c0345b41"
  },
  {
    "url": "problems/data-structure/106.html",
    "revision": "ea02dbe611f7f20cb800fc095cb37619"
  },
  {
    "url": "problems/data-structure/110.html",
    "revision": "8e5e5b575b0da7d8b4142a3692a18960"
  },
  {
    "url": "problems/data-structure/1111.html",
    "revision": "8e1e4497f0f93cff8d6bae321d0b6b27"
  },
  {
    "url": "problems/data-structure/1160.html",
    "revision": "c804f9c0a6320df2184b4eb708f18a6c"
  },
  {
    "url": "problems/data-structure/1383.html",
    "revision": "d5702b54a4bda2f0f3ad485910398c53"
  },
  {
    "url": "problems/data-structure/1403.html",
    "revision": "7422df3cea1d50390370c601eda356b7"
  },
  {
    "url": "problems/data-structure/1475.html",
    "revision": "2d22c3ce46c16737949ca89be584ccf3"
  },
  {
    "url": "problems/data-structure/1487.html",
    "revision": "19a510726bd3215e1b8d72b4703d6fdc"
  },
  {
    "url": "problems/data-structure/206.html",
    "revision": "a5916e6c269b8f48c3501d9f059de542"
  },
  {
    "url": "problems/data-structure/24.html",
    "revision": "943664df89464ba599f8a83e4a5ff946"
  },
  {
    "url": "problems/data-structure/25.html",
    "revision": "03e3327103b147f58edece73b847c3ef"
  },
  {
    "url": "problems/data-structure/307.html",
    "revision": "b162fa362b95be947289d28bcf57d8f1"
  },
  {
    "url": "problems/data-structure/394.html",
    "revision": "40ad76d233d256da067ba599e9e85c55"
  },
  {
    "url": "problems/data-structure/41.html",
    "revision": "5fb893d527b3f8f2b266a9fedc086e1b"
  },
  {
    "url": "problems/data-structure/538.html",
    "revision": "3f9f56fe276a69f48e539174625cb453"
  },
  {
    "url": "problems/data-structure/820.html",
    "revision": "2de80c84c15177ba45fc5a2912c7192f"
  },
  {
    "url": "problems/data-structure/84.html",
    "revision": "c25de9d667e7b9c9ddedb5195d21547c"
  },
  {
    "url": "problems/data-structure/890.html",
    "revision": "2bf70dea0108d2b824a55c6b6666d94e"
  },
  {
    "url": "problems/data-structure/92.html",
    "revision": "23e21bbfe5d8d66e14489d0577a4b5a1"
  },
  {
    "url": "problems/data-structure/index.html",
    "revision": "aed7725881889e24024c21b4510c00e0"
  },
  {
    "url": "problems/data-structure/lcof-59-II.html",
    "revision": "b160fdd373082f9742abd5486cc5554c"
  },
  {
    "url": "problems/design/297.html",
    "revision": "9c7ce09f324e0f50777acf3ec3c71b96"
  },
  {
    "url": "problems/design/index.html",
    "revision": "eb94d9976ffe512626e748359aebb704"
  },
  {
    "url": "problems/divide-and-conquer/1095.html",
    "revision": "5178ee36f11cbced8f344e645b7dc9d2"
  },
  {
    "url": "problems/divide-and-conquer/1482.html",
    "revision": "bcab943dbea15abaf4b3a7fc4dee1322"
  },
  {
    "url": "problems/divide-and-conquer/1488.html",
    "revision": "2ba4c0363b62cb63ebf594d415f4c455"
  },
  {
    "url": "problems/divide-and-conquer/240.html",
    "revision": "74be802e7d29f560c080c8f7580bd290"
  },
  {
    "url": "problems/divide-and-conquer/33.html",
    "revision": "8e4d535335ee6817e2aabaf30969b876"
  },
  {
    "url": "problems/divide-and-conquer/74.html",
    "revision": "fafabeff861a6b46e9d88dc3d4af3a76"
  },
  {
    "url": "problems/divide-and-conquer/index.html",
    "revision": "e286f0eb9ce975470f8c216f0dc834b5"
  },
  {
    "url": "problems/divide-and-conquer/lcci-10.01.html",
    "revision": "8d195bf801bd97eec55f3aadc51431e4"
  },
  {
    "url": "problems/divide-and-conquer/lcof-40.html",
    "revision": "204b274405835afa85de862ec1e3aac9"
  },
  {
    "url": "problems/dp/1012.html",
    "revision": "76d6b573c3d547e1491256ce57ea11eb"
  },
  {
    "url": "problems/dp/1048.html",
    "revision": "44f94336ff6f26cb7b9381df1c2b6a2c"
  },
  {
    "url": "problems/dp/115.html",
    "revision": "f4df563247235d8a9d9b312b837ce21c"
  },
  {
    "url": "problems/dp/1162.html",
    "revision": "39e909e3380b0974cdb08783eac09672"
  },
  {
    "url": "problems/dp/120.html",
    "revision": "8d79275288292f84881af5ddf66fbaff"
  },
  {
    "url": "problems/dp/121.html",
    "revision": "397912dcf7de744eaf21cb18c48f6c84"
  },
  {
    "url": "problems/dp/122.html",
    "revision": "6c3fd9d2851af79e8904befe1c505aa9"
  },
  {
    "url": "problems/dp/1227.html",
    "revision": "4e1ac57116f5d6e894787231b7d5e890"
  },
  {
    "url": "problems/dp/123.html",
    "revision": "78587c89a286f6f758bbf6b3a2fe6df1"
  },
  {
    "url": "problems/dp/132.html",
    "revision": "ea544a536aba064bc107509af537f2ed"
  },
  {
    "url": "problems/dp/139.html",
    "revision": "7124662172190bca4a83d21d5816d0a5"
  },
  {
    "url": "problems/dp/140.html",
    "revision": "c5419dcd7ec5649c638c456e42773ecd"
  },
  {
    "url": "problems/dp/1434.html",
    "revision": "d43100614f7cab776a006b35c86ffa06"
  },
  {
    "url": "problems/dp/1444.html",
    "revision": "8cd4b1df6cc57c3525c6c20a4a22b639"
  },
  {
    "url": "problems/dp/1478.html",
    "revision": "62397b5b125cbfaa32a9314956973eb6"
  },
  {
    "url": "problems/dp/1483.html",
    "revision": "0939d0c4200fa56836c561d00ebf32fd"
  },
  {
    "url": "problems/dp/152.html",
    "revision": "8340af8e5403a5b78d13f718613cbdf1"
  },
  {
    "url": "problems/dp/188.html",
    "revision": "6d87120199e88d59520c00571ae77836"
  },
  {
    "url": "problems/dp/198.html",
    "revision": "39dc0fc23610693fd2c03ab8e89c356f"
  },
  {
    "url": "problems/dp/221.html",
    "revision": "b9410e40048bdc14c6f342bd8ffafbae"
  },
  {
    "url": "problems/dp/300.html",
    "revision": "243b7cba7ab0438c66000660c48de7a5"
  },
  {
    "url": "problems/dp/309.html",
    "revision": "544d80f512517369745b3c6c3308feb3"
  },
  {
    "url": "problems/dp/343.html",
    "revision": "1f069cfc298abf4b02b35725104f3ace"
  },
  {
    "url": "problems/dp/377.html",
    "revision": "fbd1a9bcf0b5cb22854a846a46428813"
  },
  {
    "url": "problems/dp/5.html",
    "revision": "633b35eda8d6aca76842ebc8b55b7fb5"
  },
  {
    "url": "problems/dp/542.html",
    "revision": "b08aea40ca60f78a5a79d99d3f49bdac"
  },
  {
    "url": "problems/dp/714.html",
    "revision": "f3cdc5d6021b59b07ed606e1469c3d46"
  },
  {
    "url": "problems/dp/764.html",
    "revision": "a595bb72c84a7e395bd6d43c3d4a80b8"
  },
  {
    "url": "problems/dp/85.html",
    "revision": "ba98b371d21cfe4e53b49818cd8e6cf3"
  },
  {
    "url": "problems/dp/983.html",
    "revision": "67d072afe24316e9051bdeec1e35ae95"
  },
  {
    "url": "problems/dp/index.html",
    "revision": "45f4f29998eef865c0a811f11e942ed3"
  },
  {
    "url": "problems/dp/lcci-08.11.html",
    "revision": "0b0f529f34949a3511c2b56dfb8677d3"
  },
  {
    "url": "problems/dp/lcci-17.16.html",
    "revision": "c6f1f44fc38819650a6122237d91d42d"
  },
  {
    "url": "problems/dp/lcof-46.html",
    "revision": "87ec50d61660eb3e1cabc17c89481a9f"
  },
  {
    "url": "problems/dp/lcof-48.html",
    "revision": "fc7ffd7cbdefb1ab4e3618be392e0379"
  },
  {
    "url": "problems/graph/index.html",
    "revision": "13aa42511ef5c3fb09ece790ddec36f9"
  },
  {
    "url": "problems/greedy/1405.html",
    "revision": "57702dd42634f06408f0cb671b6148aa"
  },
  {
    "url": "problems/greedy/55.html",
    "revision": "64b526c38e5dc1f1a7b54f46b09b3d64"
  },
  {
    "url": "problems/greedy/870.html",
    "revision": "3975a35f4fdf6b91c045e32b8dead8e0"
  },
  {
    "url": "problems/greedy/index.html",
    "revision": "eae8f53f5bc2aadde193cc7e2cdadcac"
  },
  {
    "url": "problems/math/1071.html",
    "revision": "a8d67949cdfb4e2cf4fc3637415c3ad3"
  },
  {
    "url": "problems/math/1103.html",
    "revision": "9f7394c3cf9f3562ba249cf3d1229aeb"
  },
  {
    "url": "problems/math/268.html",
    "revision": "7b9eb09b113f3589adcab877fb3f3c79"
  },
  {
    "url": "problems/math/50.html",
    "revision": "12be4d3b9e557ef18801e82dbc0ec2e2"
  },
  {
    "url": "problems/math/892.html",
    "revision": "7c85e07ed49ac96147b441854bde9f26"
  },
  {
    "url": "problems/math/914.html",
    "revision": "8cbd64725ddf76c64fed7a1b96876e2a"
  },
  {
    "url": "problems/math/index.html",
    "revision": "f88a4630551255c52b1b0b7ea50a2bbe"
  },
  {
    "url": "problems/others/1013.html",
    "revision": "c727bd5915d93adac4596df04d00f358"
  },
  {
    "url": "problems/others/1014.html",
    "revision": "2c6b1d962fbe040d3ceb8cf15c783a47"
  },
  {
    "url": "problems/others/1248.html",
    "revision": "5dd18f0c159b7cce1672c244979b0f21"
  },
  {
    "url": "problems/others/1300.html",
    "revision": "b14bad0e70ebbb17719df8b34fb82a12"
  },
  {
    "url": "problems/others/1371.html",
    "revision": "724e32c252701dffa2dfbe0d956fa312"
  },
  {
    "url": "problems/others/1404.html",
    "revision": "6a4de8572b395b46eebfb8696dfbdf83"
  },
  {
    "url": "problems/others/1431.html",
    "revision": "94d084094575415dc1fedf032688d30a"
  },
  {
    "url": "problems/others/1432.html",
    "revision": "0475b2422fa051756be8379efad5a6db"
  },
  {
    "url": "problems/others/1433.html",
    "revision": "4041788b607b116df32d26ecbe8a8781"
  },
  {
    "url": "problems/others/1476.html",
    "revision": "3252bd804b38a8dc3cf28be02c0d8107"
  },
  {
    "url": "problems/others/169.html",
    "revision": "eb5c0df9bd2514b15c18c8ddc868af86"
  },
  {
    "url": "problems/others/229.html",
    "revision": "3c81a5d5783400adbebe39a7c5e774d0"
  },
  {
    "url": "problems/others/289.html",
    "revision": "aab227b60a6c0196fcbae92cb1369750"
  },
  {
    "url": "problems/others/523.html",
    "revision": "d138a51a58b282c343041b66de5839da"
  },
  {
    "url": "problems/others/560.html",
    "revision": "38d738fd84ed9294bac0b34fb2503650"
  },
  {
    "url": "problems/others/807.html",
    "revision": "5401087eaeeba6623b717c7f5ab69853"
  },
  {
    "url": "problems/others/974.html",
    "revision": "d4ef8f5f6d03c483811c7eff706e87a6"
  },
  {
    "url": "problems/others/index.html",
    "revision": "cb7c7c7edf98359e18733aca0f28f22a"
  },
  {
    "url": "problems/sliding-window/1004.html",
    "revision": "8e04f5f6d314d13f3a8aa54edb14397c"
  },
  {
    "url": "problems/sliding-window/1040.html",
    "revision": "92cb0493e682b4434205550ef10d4138"
  },
  {
    "url": "problems/sliding-window/1477.html",
    "revision": "46cbc96235b7f997ad66629c2d09f1cb"
  },
  {
    "url": "problems/sliding-window/30.html",
    "revision": "d2b049129a5953794d441b799f4e46d6"
  },
  {
    "url": "problems/sliding-window/424.html",
    "revision": "a101f9fcd5ea589d2bd9d5f3a99ffb16"
  },
  {
    "url": "problems/sliding-window/57-II.html",
    "revision": "aa49469e4c7d7f0e14e5ab23120649b5"
  },
  {
    "url": "problems/sliding-window/59-I.html",
    "revision": "b06a9c6310bef0e36e1649c7d872831c"
  },
  {
    "url": "problems/sliding-window/76.html",
    "revision": "c9895dff2f6b627854fdc85423b21b7e"
  },
  {
    "url": "problems/sliding-window/992.html",
    "revision": "ef6892a4898fadac7089c096ccb9c7a9"
  },
  {
    "url": "problems/sliding-window/995.html",
    "revision": "1ca6ca3c63ce57cd723c704c81ff0315"
  },
  {
    "url": "problems/sliding-window/index.html",
    "revision": "b1a2ff103b31459a68f808133714054c"
  },
  {
    "url": "problems/sort/1460.html",
    "revision": "6e565fec8429b58becc1455cde6f14ba"
  },
  {
    "url": "problems/sort/56.html",
    "revision": "e162fc97476b98a5bb2a7d79591d2294"
  },
  {
    "url": "problems/sort/945.html",
    "revision": "d2a999741e462dd07529081c702b3e2b"
  },
  {
    "url": "problems/sort/index.html",
    "revision": "ad7c669df3cfb7fb9dc480e238d518e0"
  },
  {
    "url": "problems/two-pointers/11.html",
    "revision": "7559f84b219d06181a48be5ee8bb4b87"
  },
  {
    "url": "problems/two-pointers/151.html",
    "revision": "29fb223f021a4bd6adeedb460c2fd10e"
  },
  {
    "url": "problems/two-pointers/202.html",
    "revision": "a9159751a473ec1408aee8546f2d92e3"
  },
  {
    "url": "problems/two-pointers/234.html",
    "revision": "f1f1373ac9b56e2c0950bfe04d1029d8"
  },
  {
    "url": "problems/two-pointers/26.html",
    "revision": "7423fe737d72be917022df1fd6614475"
  },
  {
    "url": "problems/two-pointers/287.html",
    "revision": "dca413dee78fddecb6544a98c38c7645"
  },
  {
    "url": "problems/two-pointers/611.html",
    "revision": "9cae0172e0e0faa4c76bedeca281e13a"
  },
  {
    "url": "problems/two-pointers/680.html",
    "revision": "430ca20474309ee9442e0ac5b8af8a93"
  },
  {
    "url": "problems/two-pointers/876.html",
    "revision": "733756ff4fdc40e4f8ce747096660fab"
  },
  {
    "url": "problems/two-pointers/index.html",
    "revision": "593965a6d96f93e153b38959262b04dd"
  },
  {
    "url": "problems/two-pointers/lcci-01.06.html",
    "revision": "584ac78dc18112c392d1700331603dea"
  },
  {
    "url": "theory/graph-theory/拓扑排序.html",
    "revision": "f4b66e7748cbd008a6b0aad90fad2948"
  },
  {
    "url": "theory/graph-theory/欧拉回路.html",
    "revision": "05a71208bf573df8b426a53311cb116f"
  },
  {
    "url": "theory/graph-theory/欧拉环路.html",
    "revision": "68571676c7fb9352aeee0dda5d660b89"
  },
  {
    "url": "theory/index.html",
    "revision": "d003d3769145c428a8f079fc19c1cb59"
  },
  {
    "url": "theory/number-theory/catalan.html",
    "revision": "b34bb4b1c159a84970b11a6e7059cfb9"
  },
  {
    "url": "theory/sort/quick-sort/quickSort.html",
    "revision": "a227df44d3406db0928ed9fab922a788"
  },
  {
    "url": "theory/string/string-matching-series/bf-and-rk.html",
    "revision": "0c2da9bf2ea92268a2f0c5f778fce7ef"
  },
  {
    "url": "theory/techniques/二分查找.html",
    "revision": "47452ee40af2a23547538049ffa01313"
  },
  {
    "url": "theory/techniques/数位dp(undo).html",
    "revision": "9be3fd6bf215b3da58b87647037d327b"
  },
  {
    "url": "theory/techniques/滑动窗口(undo).html",
    "revision": "4cea22c68cf85daf9e7dd305fedea78c"
  },
  {
    "url": "theory/techniques/状态压缩(undo).html",
    "revision": "2dfce0ab1986bd62500f4d78941a096e"
  },
  {
    "url": "theory/techniques/递归.html",
    "revision": "6b96ff4cabbeb323765368d1c05f65f7"
  },
  {
    "url": "theory/tree/segment-tree.html",
    "revision": "17a82dfba03a43f78fd1a01b85d64625"
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
