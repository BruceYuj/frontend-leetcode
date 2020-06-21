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
    "revision": "baf03f565f6c1a666b6c518d4fe7908b"
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
    "url": "assets/img/122-1.a9a5f5f4.png",
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
    "url": "assets/js/10.febf24f7.js",
    "revision": "86d85f9ca2adf4d14d369be804f541e9"
  },
  {
    "url": "assets/js/100.3278f6a6.js",
    "revision": "a28cf0b0ad26fc314eed085e347d2a32"
  },
  {
    "url": "assets/js/101.10e6ccb5.js",
    "revision": "e71e7d47740cc4098df73db249744c86"
  },
  {
    "url": "assets/js/102.767f0470.js",
    "revision": "422ad981d95c791ff611288655d2b568"
  },
  {
    "url": "assets/js/103.0160ce03.js",
    "revision": "7bcf06103e1f9d84c032af40e838ce87"
  },
  {
    "url": "assets/js/104.4503716c.js",
    "revision": "6803c07ffe752215cce6dde8e01137ce"
  },
  {
    "url": "assets/js/105.3ca8e61d.js",
    "revision": "c3a957985d003992fb7b93b3ba6cc9ed"
  },
  {
    "url": "assets/js/106.01fb8164.js",
    "revision": "5c0afa9405a233e5cf3390288909308d"
  },
  {
    "url": "assets/js/107.40dabccf.js",
    "revision": "4eeb7443f43af44c233d566aa465f280"
  },
  {
    "url": "assets/js/108.5afeb5a3.js",
    "revision": "ad43a959cc1778c94781fc9c0667ee73"
  },
  {
    "url": "assets/js/109.df8e936d.js",
    "revision": "71f1918d23c85c3ec758032e2406a81d"
  },
  {
    "url": "assets/js/11.1efe1bc9.js",
    "revision": "0fcc70ebffa0a44f816b4c5d82a6264b"
  },
  {
    "url": "assets/js/110.3446aebd.js",
    "revision": "5a54119eabba73458aa90051e4126af6"
  },
  {
    "url": "assets/js/111.6ca53d52.js",
    "revision": "7530611bd67a144995c16f1750ba020c"
  },
  {
    "url": "assets/js/112.51c53098.js",
    "revision": "d885e2f4cc36d27536043e1b507ad95d"
  },
  {
    "url": "assets/js/113.8d6f3d7a.js",
    "revision": "1c2613296864f664195232bff55c002a"
  },
  {
    "url": "assets/js/114.4a82091c.js",
    "revision": "de98ba36637860f8ae5622f2f8fc63af"
  },
  {
    "url": "assets/js/115.1c1d36f9.js",
    "revision": "ce3a2b786d979235dde49b0d0b98475f"
  },
  {
    "url": "assets/js/116.b0fc19a0.js",
    "revision": "87a976d856abcfe2085e35d71220f5f2"
  },
  {
    "url": "assets/js/117.d9e9fccd.js",
    "revision": "25733c911e11db6b0aae8b2b121e3cb4"
  },
  {
    "url": "assets/js/118.b3a7c0de.js",
    "revision": "2bd7ba83ffe0b01501b2841a1ed31fd5"
  },
  {
    "url": "assets/js/119.316fbf87.js",
    "revision": "ed0b96a20e71b5c1af6d7412a84c156c"
  },
  {
    "url": "assets/js/12.ecc1dddd.js",
    "revision": "91b66b36faab7a8a8429eca459e2b7d0"
  },
  {
    "url": "assets/js/120.ab9fd284.js",
    "revision": "923593dcb6e6528cfda49c38c795eebc"
  },
  {
    "url": "assets/js/121.3ae1695f.js",
    "revision": "2e16dbeed347d2643dd7d23641a98038"
  },
  {
    "url": "assets/js/122.d8ee95b8.js",
    "revision": "befde10509f0aba089c7562cc93b0258"
  },
  {
    "url": "assets/js/123.8c769517.js",
    "revision": "a6be00e18e90ee3e5fd8607d1ee85603"
  },
  {
    "url": "assets/js/124.3e214a7a.js",
    "revision": "321b8943c32d01e205189da4ae6e67e0"
  },
  {
    "url": "assets/js/125.f2dae426.js",
    "revision": "c1f97058e9cc6d2497cd8f64e695d184"
  },
  {
    "url": "assets/js/126.d145c8c6.js",
    "revision": "7a64a85d7491651f29ad85bef2810b2e"
  },
  {
    "url": "assets/js/127.d8ec5dd0.js",
    "revision": "a9e6a837f883f481324a95bf26ed5186"
  },
  {
    "url": "assets/js/128.74234d83.js",
    "revision": "703f867a8efe9e400be218920eb1410a"
  },
  {
    "url": "assets/js/129.52323c15.js",
    "revision": "33889fab213bc5dbfa8296fe61f64216"
  },
  {
    "url": "assets/js/13.778aed16.js",
    "revision": "5aafdbe9634bbbb9deee0d4c2b6d07ec"
  },
  {
    "url": "assets/js/130.43f28dd8.js",
    "revision": "12ac17f2ae5d72bc61dfe37eba4d41cd"
  },
  {
    "url": "assets/js/131.fd9a1763.js",
    "revision": "53e395960dfb7ef4206c62fc7ee0cdff"
  },
  {
    "url": "assets/js/132.acb084db.js",
    "revision": "42c66295e7497518c5252be431bddedb"
  },
  {
    "url": "assets/js/133.90376d78.js",
    "revision": "c6662cfd99d23a529fdca1ccabd3fa24"
  },
  {
    "url": "assets/js/134.9566cb55.js",
    "revision": "5fb779f13b76e51d30fc08596f8e6ba3"
  },
  {
    "url": "assets/js/135.7f385832.js",
    "revision": "3ff2f1d671aea36c428c16c5c20c5a23"
  },
  {
    "url": "assets/js/136.c34f8a71.js",
    "revision": "f0c09dea33fe3b0a157750a8e60a6929"
  },
  {
    "url": "assets/js/137.6a64065c.js",
    "revision": "fd0332fef6ff81236f224541465e6868"
  },
  {
    "url": "assets/js/138.a6455084.js",
    "revision": "e47f6766b7dcaf1059e53c062fea237e"
  },
  {
    "url": "assets/js/139.1295a2af.js",
    "revision": "f46b80fa547cf263645f98cfd3a0d9e2"
  },
  {
    "url": "assets/js/14.56880145.js",
    "revision": "f7bebce6540d6bd04bec69ebd9723797"
  },
  {
    "url": "assets/js/140.0ccde89d.js",
    "revision": "a89e307fa3f15dcd392bc95880b86401"
  },
  {
    "url": "assets/js/141.b7df3631.js",
    "revision": "90053f9cd29f2ce36b0d38807bbdafdd"
  },
  {
    "url": "assets/js/142.5a90fb0f.js",
    "revision": "1f006044a832c4a6def79def97bbc327"
  },
  {
    "url": "assets/js/143.007924a5.js",
    "revision": "285a263bdd37b9ec05d3aab95fa277e4"
  },
  {
    "url": "assets/js/144.adbdf3b7.js",
    "revision": "2c478c118ad9a277466002cea0d1a433"
  },
  {
    "url": "assets/js/145.695e55ba.js",
    "revision": "b7ce35f6b27e03ab08db2c36ed817725"
  },
  {
    "url": "assets/js/146.294c91b7.js",
    "revision": "0745a99843916d778347ca628ed42614"
  },
  {
    "url": "assets/js/147.092bd731.js",
    "revision": "37042f800ce976fec4e21d6c7dd87f54"
  },
  {
    "url": "assets/js/148.b569fa03.js",
    "revision": "cc978e11c71eaa2e5fa1d329f095c440"
  },
  {
    "url": "assets/js/149.15ddb386.js",
    "revision": "a6f3650cc37825b86e213741785b4837"
  },
  {
    "url": "assets/js/15.aae96c43.js",
    "revision": "21e70b4a0037a0b570139209c2e79abe"
  },
  {
    "url": "assets/js/150.0a35da24.js",
    "revision": "ab5839c65c39e44e32340cec904cedfc"
  },
  {
    "url": "assets/js/151.c54f9d96.js",
    "revision": "59614214f6d753ed1f8c753e17287dc8"
  },
  {
    "url": "assets/js/152.1ae2a5b1.js",
    "revision": "9d3d6a384f32e2fe0887a34517b1cc8b"
  },
  {
    "url": "assets/js/153.594c3f73.js",
    "revision": "0136cdb94d8cea6fc75c76fd17e6d24a"
  },
  {
    "url": "assets/js/154.89088569.js",
    "revision": "1820215bfaa99fb59b2a9e74d40662c0"
  },
  {
    "url": "assets/js/155.e1eb6892.js",
    "revision": "6d0fe4bfa71894a7e51b5caefc65175a"
  },
  {
    "url": "assets/js/156.754a6f46.js",
    "revision": "713138653bea62f0cfc88f91ff5458ef"
  },
  {
    "url": "assets/js/157.e3392140.js",
    "revision": "03d84e69d41fe54fe549c7462f64a257"
  },
  {
    "url": "assets/js/158.2aeff8d1.js",
    "revision": "145fc9844edc638b9fe4e1b5e83486b6"
  },
  {
    "url": "assets/js/159.48ae6f06.js",
    "revision": "a49595e7883d9801c6e1813aa9d2fc14"
  },
  {
    "url": "assets/js/16.1c3919a2.js",
    "revision": "cb1ff1b8d1e555bc8af89a8131197536"
  },
  {
    "url": "assets/js/160.7c9320be.js",
    "revision": "f826a37a8300e090d8caca194763f201"
  },
  {
    "url": "assets/js/161.b3164ba6.js",
    "revision": "47f03b3ace8849f0447a2104618aacdb"
  },
  {
    "url": "assets/js/162.272fc7c7.js",
    "revision": "da8f9f6716c0c62b443afd7c82aaabd4"
  },
  {
    "url": "assets/js/163.d5fa4f02.js",
    "revision": "4525d76c1c60d7c53105b563e88ad17d"
  },
  {
    "url": "assets/js/164.545ea195.js",
    "revision": "3e1374d7d141aecc0dae4fa7350533d2"
  },
  {
    "url": "assets/js/165.85e69ad5.js",
    "revision": "f06006dcbb155f3ad54936b0f79c1fc1"
  },
  {
    "url": "assets/js/166.03f828c3.js",
    "revision": "d350a1fa9418c6bd80100b8007bb098e"
  },
  {
    "url": "assets/js/167.f0715e28.js",
    "revision": "2a9c2178ba8062eba227e25e9a2dc1fb"
  },
  {
    "url": "assets/js/168.5551d53e.js",
    "revision": "44d04dda9d6e3e992c06c194a076ecdf"
  },
  {
    "url": "assets/js/169.ef677933.js",
    "revision": "3414f9e995f4a689c014717577a9bed2"
  },
  {
    "url": "assets/js/17.e1f31430.js",
    "revision": "8a88b36190c2e88dd735b25c6ac3a6fe"
  },
  {
    "url": "assets/js/170.1f82276b.js",
    "revision": "babfb10b1d34873c3e787a0e201c32a3"
  },
  {
    "url": "assets/js/171.4abf61fc.js",
    "revision": "4cf1c0d508d7c4b8939e6b98220bdc55"
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
    "url": "assets/js/2.6b78e4fc.js",
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
    "url": "assets/js/36.f146e4d1.js",
    "revision": "fc706e7494067a17c4423da9c29c3bf6"
  },
  {
    "url": "assets/js/37.ec646cbc.js",
    "revision": "63bf1833675e3cd8f7658fab7988b06e"
  },
  {
    "url": "assets/js/38.2beaec87.js",
    "revision": "91a44440e9b6a1b78b170d37f82b0169"
  },
  {
    "url": "assets/js/39.fd670f4c.js",
    "revision": "3cc01e8c3243d128e248566af7d8d368"
  },
  {
    "url": "assets/js/4.94967eb3.js",
    "revision": "94906d1f3b4ffa0873b9ca127a45b9f2"
  },
  {
    "url": "assets/js/40.25a4af94.js",
    "revision": "0f78ce17995f7ef03b0feb4cbe6b1255"
  },
  {
    "url": "assets/js/41.34b46f11.js",
    "revision": "78cef4ac4af0d57320d90f13dbba8dd3"
  },
  {
    "url": "assets/js/42.53fccc58.js",
    "revision": "36f21f7dc2dd9bbb912f73dc4fa54662"
  },
  {
    "url": "assets/js/43.efc05dec.js",
    "revision": "3f02ef50b8a4fdc42abeb3bb751a6d7f"
  },
  {
    "url": "assets/js/44.465eb8eb.js",
    "revision": "ebb0703978bb8cf12333e23821b1dbc9"
  },
  {
    "url": "assets/js/45.5001296d.js",
    "revision": "1299ee0d2d27ced0144e22e0bacf4a0a"
  },
  {
    "url": "assets/js/46.f0c47b7c.js",
    "revision": "b371bfc1a0e8c9b907747ae58ed9d581"
  },
  {
    "url": "assets/js/47.dc87dafc.js",
    "revision": "a3e3e254e5ac7b96eea548a739ca31d3"
  },
  {
    "url": "assets/js/48.5ca93cbf.js",
    "revision": "df7f56d62f4bf265d1fc2bfc27b8b51b"
  },
  {
    "url": "assets/js/49.18232add.js",
    "revision": "1779b5a8a9a8d98fea8bdde21499e020"
  },
  {
    "url": "assets/js/5.7e48fffb.js",
    "revision": "b0db47a88462acac3176248321e8a519"
  },
  {
    "url": "assets/js/50.ba1d6e5a.js",
    "revision": "af6b4d277764b01484fe08970b846a4c"
  },
  {
    "url": "assets/js/51.fbcab07c.js",
    "revision": "ae18190dd5b05365e144735600119efa"
  },
  {
    "url": "assets/js/52.5bdd0a5a.js",
    "revision": "b788bba36d9702d9467e943d553dbf90"
  },
  {
    "url": "assets/js/53.08a5b337.js",
    "revision": "cd6ff241290c0f62704fa160c3cb5bb7"
  },
  {
    "url": "assets/js/54.695d78bb.js",
    "revision": "412dc941e283f977dd21adf0e5f6ae2a"
  },
  {
    "url": "assets/js/55.dd03f23b.js",
    "revision": "33ae90cf5720d66962b8eeb0559e9d5c"
  },
  {
    "url": "assets/js/56.7697d0a8.js",
    "revision": "a87f20eca16929a5518b23229f8ec98c"
  },
  {
    "url": "assets/js/57.06d7b377.js",
    "revision": "2a8c5717d1b6b8f87fad40697693dc6c"
  },
  {
    "url": "assets/js/58.6b787c37.js",
    "revision": "844eb7cb4824834f88da02b973eb593a"
  },
  {
    "url": "assets/js/59.5125678d.js",
    "revision": "46f62298221373de0306b57a58ed9760"
  },
  {
    "url": "assets/js/6.be4a3961.js",
    "revision": "84fc90bc7e4ac82e090eca4e3806d6af"
  },
  {
    "url": "assets/js/60.c2150f6a.js",
    "revision": "c5d438c11ed508134f14bc5a92a568f1"
  },
  {
    "url": "assets/js/61.b59f02d0.js",
    "revision": "5dc775e93ff19eac65e4c2a4035355eb"
  },
  {
    "url": "assets/js/62.a748cba9.js",
    "revision": "672b647eef503751e344354ee28f5bcc"
  },
  {
    "url": "assets/js/63.b7ba44fb.js",
    "revision": "dcd66b164bd2c4cfc58fc2759609d218"
  },
  {
    "url": "assets/js/64.36c1f912.js",
    "revision": "860fb71453107b5dc84df34e6e7b14ae"
  },
  {
    "url": "assets/js/65.afa3c824.js",
    "revision": "069860ba887981d8ede6602391621d3d"
  },
  {
    "url": "assets/js/66.7bfb075d.js",
    "revision": "f1f4c112c41fe3fdd0ad1c489e1ff89d"
  },
  {
    "url": "assets/js/67.36c0bebf.js",
    "revision": "b10294037f8a2c6f68055195efad8935"
  },
  {
    "url": "assets/js/68.2e2f3c1b.js",
    "revision": "97e8950419777a618fa7e377688adb6e"
  },
  {
    "url": "assets/js/69.e0aa1da9.js",
    "revision": "a241416792090fcb91f7f1cd7e4f8a22"
  },
  {
    "url": "assets/js/7.d779800d.js",
    "revision": "54cffd268797afc72842c7116a0eb4e6"
  },
  {
    "url": "assets/js/70.6e444e6e.js",
    "revision": "55b6eac44e7d5d5fe271b1ee084639fa"
  },
  {
    "url": "assets/js/71.7a6f4fbb.js",
    "revision": "1dbdab4e79f418e87e15d1301f0e9265"
  },
  {
    "url": "assets/js/72.a12de229.js",
    "revision": "8c485fbe66c40ddb3a5d8c95be19438e"
  },
  {
    "url": "assets/js/73.57452733.js",
    "revision": "7f9f75c48b6e5e423db53e4705511d96"
  },
  {
    "url": "assets/js/74.d78ab62d.js",
    "revision": "3ed853b27f0fdc83a3899ec065353d9e"
  },
  {
    "url": "assets/js/75.a9f252f0.js",
    "revision": "a8f39d67d74c0d45fc1f04e6b42a43fb"
  },
  {
    "url": "assets/js/76.cff2eec0.js",
    "revision": "39af9036ecb50deaee5fd0e6201758fe"
  },
  {
    "url": "assets/js/77.732ccb46.js",
    "revision": "732a462f740240b093cd49e02497bed9"
  },
  {
    "url": "assets/js/78.459eb22f.js",
    "revision": "e055d6a9534a2508e4b0c845eed4f599"
  },
  {
    "url": "assets/js/79.575bb5fb.js",
    "revision": "aa919dec28917c30f67b76ca4ce2f5e0"
  },
  {
    "url": "assets/js/8.c33dd1e5.js",
    "revision": "f1d52e64e29393cb450c0d96ea20d221"
  },
  {
    "url": "assets/js/80.baa13240.js",
    "revision": "53792bcc899b8252932e673612c9c3b6"
  },
  {
    "url": "assets/js/81.94cf1fb6.js",
    "revision": "d2e7c8782ee74667bf85fda6a8fd1934"
  },
  {
    "url": "assets/js/82.400d27ce.js",
    "revision": "68fc2e9cdb3ca858cec33c1be5f05d96"
  },
  {
    "url": "assets/js/83.bd5d846b.js",
    "revision": "de7bb76d6d2b85dea78cbca5ba44de35"
  },
  {
    "url": "assets/js/84.ca4e325a.js",
    "revision": "3d7e48b571708ea923bbecbcb254e8de"
  },
  {
    "url": "assets/js/85.4c2e5550.js",
    "revision": "d226e0d2598fd671838b9bd8a49b105f"
  },
  {
    "url": "assets/js/86.dbbc440d.js",
    "revision": "aadfb9fe63c538bd532d2228c85cd7af"
  },
  {
    "url": "assets/js/87.6193a52a.js",
    "revision": "5286a64f871c32d69f9a7829c01467e7"
  },
  {
    "url": "assets/js/88.4f231990.js",
    "revision": "74766f6dda888c70388530817c5e33a1"
  },
  {
    "url": "assets/js/89.e1b56cbb.js",
    "revision": "1a50ec5e57059778f0e9457774195066"
  },
  {
    "url": "assets/js/9.74d02ae6.js",
    "revision": "24b5c3a8942261d1895523f8842c3d9a"
  },
  {
    "url": "assets/js/90.b583f379.js",
    "revision": "94f73e14aec5c100c5672bca2dcf0001"
  },
  {
    "url": "assets/js/91.f77db477.js",
    "revision": "93255da77b0b21e6b06d12c69a368707"
  },
  {
    "url": "assets/js/92.5e7f3bad.js",
    "revision": "fd6df3a94b211bdd7242b151e3958f71"
  },
  {
    "url": "assets/js/93.041a152f.js",
    "revision": "98f50f894249a0a7a38d667fbb8ff0ee"
  },
  {
    "url": "assets/js/94.1f0cd441.js",
    "revision": "da6235119299188b812230ca4a56ce6f"
  },
  {
    "url": "assets/js/95.a048afdd.js",
    "revision": "0265922b0693cf2f3228061f1d83f230"
  },
  {
    "url": "assets/js/96.4317b6e2.js",
    "revision": "6e922c534c5027b573a08395779ef1bb"
  },
  {
    "url": "assets/js/97.b75924a6.js",
    "revision": "223fab6917a08ccc028970b1e3e7b0ad"
  },
  {
    "url": "assets/js/98.20fbf047.js",
    "revision": "751d2038eb455e1aa1b99b90d3938714"
  },
  {
    "url": "assets/js/99.19ed91e0.js",
    "revision": "060a0326f1c23064e08539f5c7077eae"
  },
  {
    "url": "assets/js/app.cf22bc6e.js",
    "revision": "a3a39466b38f435f35d3b0a9780b8922"
  },
  {
    "url": "index.html",
    "revision": "08da2a55da13af9fa94a88eaace56cc7"
  },
  {
    "url": "problems/backtrack/131.html",
    "revision": "a47195a5698b7940d9a8bbd3a1eb715c"
  },
  {
    "url": "problems/backtrack/22.html",
    "revision": "7b3fbd77dc753421afb94dc9575dc722"
  },
  {
    "url": "problems/backtrack/437.html",
    "revision": "c0eb986fe3fa69c8904c279aed47d2d8"
  },
  {
    "url": "problems/backtrack/index.html",
    "revision": "4eb24f2acaeaba01ca231e8f31b3ec8f"
  },
  {
    "url": "problems/bfs-and-dfs/1028.html",
    "revision": "db1649bcc04c1771b3f4bac11ce3badc"
  },
  {
    "url": "problems/bfs-and-dfs/1372.html",
    "revision": "1a87cfe0858c3180d465375c5b64ade5"
  },
  {
    "url": "problems/bfs-and-dfs/1466.html",
    "revision": "64a818954d18a71f1679040f95d72fd4"
  },
  {
    "url": "problems/bfs-and-dfs/199.html",
    "revision": "c9e228bd3b7c7ed16224752eae272380"
  },
  {
    "url": "problems/bfs-and-dfs/236.html",
    "revision": "ac03d35aa1b38a5c391f2ed0184fa386"
  },
  {
    "url": "problems/bfs-and-dfs/257.html",
    "revision": "b0d34f433e32d27d59233f7e3ac06572"
  },
  {
    "url": "problems/bfs-and-dfs/543.html",
    "revision": "19d525b4a795a81cb9e862e92c2fc817"
  },
  {
    "url": "problems/bfs-and-dfs/695.html",
    "revision": "4f98cc0b0e342f187f27154e0aa8e8d5"
  },
  {
    "url": "problems/bfs-and-dfs/994.html",
    "revision": "24bb36abeb09ef16d5abd5d8a85f5fa4"
  },
  {
    "url": "problems/bfs-and-dfs/index.html",
    "revision": "4b4b00513be9cfde7186802ee2d8006d"
  },
  {
    "url": "problems/bfs-and-dfs/lcof-13.html",
    "revision": "abf24b61b8acf2eac9979b89bf8941d4"
  },
  {
    "url": "problems/bfs-and-dfs/LCP-09.html",
    "revision": "ee048ace7f186b4151f8a95cf7cd9c83"
  },
  {
    "url": "problems/bit-operation/136.html",
    "revision": "e086946f33b4f1de7fee88fd1bd4d0aa"
  },
  {
    "url": "problems/bit-operation/137.html",
    "revision": "b9fb43d560a507a95047727efedffd98"
  },
  {
    "url": "problems/bit-operation/1486.html",
    "revision": "02784549e8e755efb3074311e694f221"
  },
  {
    "url": "problems/bit-operation/231.html",
    "revision": "3a3f2f8e23ff0338f599514a0407d7b6"
  },
  {
    "url": "problems/bit-operation/260.html",
    "revision": "e33cc828fb8df14d76bb474fea338636"
  },
  {
    "url": "problems/bit-operation/326.html",
    "revision": "3d57aa016a93c6f925129f4aa3180507"
  },
  {
    "url": "problems/bit-operation/342.html",
    "revision": "86994da4db7f636cd9b30edc4e686466"
  },
  {
    "url": "problems/bit-operation/372.html",
    "revision": "5f604d16285c449f10ec40ad99bb9733"
  },
  {
    "url": "problems/bit-operation/397.html",
    "revision": "6a34ca52e912229db29836839e537a4f"
  },
  {
    "url": "problems/bit-operation/index.html",
    "revision": "74aa711ea4f636ec8fc507fcb535dddb"
  },
  {
    "url": "problems/data-structure/101.html",
    "revision": "c53e11d211c613173464323d16cd3d69"
  },
  {
    "url": "problems/data-structure/105.html",
    "revision": "631adeb04d5492c8894325d3b90ea12d"
  },
  {
    "url": "problems/data-structure/106.html",
    "revision": "685e012a4470f10a93d54a8e5a61ee1e"
  },
  {
    "url": "problems/data-structure/110.html",
    "revision": "336e18973833fac905efd9e9e04aad7e"
  },
  {
    "url": "problems/data-structure/1111.html",
    "revision": "6ea488377c8d6a86a1f196264cd8c59f"
  },
  {
    "url": "problems/data-structure/1160.html",
    "revision": "ccfbb240bd589d307717610ad4d7b2d8"
  },
  {
    "url": "problems/data-structure/1383.html",
    "revision": "4de2827a76f9a3a8001c2433aab3763f"
  },
  {
    "url": "problems/data-structure/1403.html",
    "revision": "0e623618b748805cec8d1c79493f93d1"
  },
  {
    "url": "problems/data-structure/1475.html",
    "revision": "efa9faec54c421cec2f3669d19a31d4a"
  },
  {
    "url": "problems/data-structure/1487.html",
    "revision": "4419630f418c9a7b54cf2cded8839df7"
  },
  {
    "url": "problems/data-structure/206.html",
    "revision": "ff734f3595a5c49605219279c0f92dac"
  },
  {
    "url": "problems/data-structure/24.html",
    "revision": "6daa68bfb48a885c053941c97c531d2e"
  },
  {
    "url": "problems/data-structure/25.html",
    "revision": "a7fb9856f6cc5ec03f2287b2638dbbc5"
  },
  {
    "url": "problems/data-structure/307.html",
    "revision": "4ca9b34aa691a60b4f4091ccbe1c666c"
  },
  {
    "url": "problems/data-structure/394.html",
    "revision": "8fb1dc8fceba687396615d1994e9433f"
  },
  {
    "url": "problems/data-structure/41.html",
    "revision": "4eb51108404c1891b4ab7f0daabfd8b1"
  },
  {
    "url": "problems/data-structure/538.html",
    "revision": "b971370d7e6c151a606a4d36450cce54"
  },
  {
    "url": "problems/data-structure/820.html",
    "revision": "345dd308792621c5b8bc045d62db346e"
  },
  {
    "url": "problems/data-structure/84.html",
    "revision": "d967087e2552db1093b36e81d05c2ab9"
  },
  {
    "url": "problems/data-structure/890.html",
    "revision": "b66cb54b7e4febb979452737d3022bbb"
  },
  {
    "url": "problems/data-structure/92.html",
    "revision": "649ce02f69251b082d2c846f2aaea34d"
  },
  {
    "url": "problems/data-structure/index.html",
    "revision": "10584d3d063631830e9197f41c34e791"
  },
  {
    "url": "problems/data-structure/lcof-59-II.html",
    "revision": "866590688c1090ce2099edb73904a383"
  },
  {
    "url": "problems/design/297.html",
    "revision": "cb013d1490ff28aa37f3cdcb26bb1271"
  },
  {
    "url": "problems/design/index.html",
    "revision": "b71578e0382426c2fd4fafbb035c8315"
  },
  {
    "url": "problems/divide-and-conquer/1095.html",
    "revision": "e804183ea47f7fc00f5a52203c50ed8f"
  },
  {
    "url": "problems/divide-and-conquer/1482.html",
    "revision": "0a27648b5657024eaf0e8c4a03945850"
  },
  {
    "url": "problems/divide-and-conquer/1488.html",
    "revision": "493fa5e4e6a3093f24029bf183dea3f0"
  },
  {
    "url": "problems/divide-and-conquer/240.html",
    "revision": "cf0efe3d0ccc9cc23747220a694c5dfd"
  },
  {
    "url": "problems/divide-and-conquer/33.html",
    "revision": "8b36a0ddb7e603bd4b29f1c3dd2daf6a"
  },
  {
    "url": "problems/divide-and-conquer/74.html",
    "revision": "e199eed87d2479a7184dbf6727d986cc"
  },
  {
    "url": "problems/divide-and-conquer/index.html",
    "revision": "e16cf0dd3f25df95cd73243dc8e46f68"
  },
  {
    "url": "problems/divide-and-conquer/lcci-10.01.html",
    "revision": "9c44964fe117d503dc46b6bc49bdfd12"
  },
  {
    "url": "problems/divide-and-conquer/lcof-40.html",
    "revision": "7a86425f1bfa1326309757de0b09edcf"
  },
  {
    "url": "problems/dp/1012.html",
    "revision": "6e8a99450d9c345cfff4593bc916f261"
  },
  {
    "url": "problems/dp/1048.html",
    "revision": "a144f33191a88c0b9f5ecb29fbbaeaeb"
  },
  {
    "url": "problems/dp/115.html",
    "revision": "cdb5794493f9fc33a64ac8b13ae88ef9"
  },
  {
    "url": "problems/dp/1162.html",
    "revision": "68bce28374b5b4777a0af18b5c3705cc"
  },
  {
    "url": "problems/dp/120.html",
    "revision": "e64ddd5b801a3956469b4c6fce022a52"
  },
  {
    "url": "problems/dp/121.html",
    "revision": "5f8c5f2c5da6409fe319f8fbfb386e05"
  },
  {
    "url": "problems/dp/122.html",
    "revision": "c01b63160bf8446a3847dabf04355c41"
  },
  {
    "url": "problems/dp/1227.html",
    "revision": "5c83a8d6f8b20657e94483fd295b7a4a"
  },
  {
    "url": "problems/dp/123.html",
    "revision": "eaa4672e9e9fd615449695b76fb47b2e"
  },
  {
    "url": "problems/dp/132.html",
    "revision": "230ecb6179933e77cbb9ff999339e237"
  },
  {
    "url": "problems/dp/139.html",
    "revision": "62e54025f8648ac0a6bd63da0e382abe"
  },
  {
    "url": "problems/dp/140.html",
    "revision": "72c25da687161871d7025a7aa8b1c6ef"
  },
  {
    "url": "problems/dp/1434.html",
    "revision": "0feddfc2c5c225dcf5617a3a62fc8c64"
  },
  {
    "url": "problems/dp/1444.html",
    "revision": "63a1b64a2e8430ff7afb0b6fc6869128"
  },
  {
    "url": "problems/dp/1478.html",
    "revision": "e3b77df9bc77601aed47097eb045aa6e"
  },
  {
    "url": "problems/dp/1483.html",
    "revision": "476a51b9f7b777ddf86ecc90e21895d0"
  },
  {
    "url": "problems/dp/152.html",
    "revision": "d1ddb856f9b0fdcc42dbbfc65bf44b21"
  },
  {
    "url": "problems/dp/188.html",
    "revision": "07bfcba303cc450115b1b8672cde707c"
  },
  {
    "url": "problems/dp/198.html",
    "revision": "41535469f078ac502eed749712972fa4"
  },
  {
    "url": "problems/dp/221.html",
    "revision": "8802633b55dfcf035a3b041b1d584262"
  },
  {
    "url": "problems/dp/300.html",
    "revision": "34c3d11245bb210fbdb78583f33e3a48"
  },
  {
    "url": "problems/dp/309.html",
    "revision": "34e37f8af9341f75081ab43f6b995dc9"
  },
  {
    "url": "problems/dp/343.html",
    "revision": "99353c280b58ab8133f198802f4adcf5"
  },
  {
    "url": "problems/dp/377.html",
    "revision": "3b6a3a804784c160441c16ec326f7efe"
  },
  {
    "url": "problems/dp/5.html",
    "revision": "019c360f8cce7b0084501eaee226105c"
  },
  {
    "url": "problems/dp/542.html",
    "revision": "03682861e3d168c694f08286d8f132d0"
  },
  {
    "url": "problems/dp/714.html",
    "revision": "dc297bde5813f871c1914c6e755d6ecc"
  },
  {
    "url": "problems/dp/764.html",
    "revision": "90d5c70a552928d3e6af341c7d0cb731"
  },
  {
    "url": "problems/dp/85.html",
    "revision": "2c3281d10824f1dbc430dc44852d93ab"
  },
  {
    "url": "problems/dp/983.html",
    "revision": "627a87be6d511c959bc6a99d72ec4559"
  },
  {
    "url": "problems/dp/index.html",
    "revision": "ad4c01aa7453598b2c89ef9991fc65a6"
  },
  {
    "url": "problems/dp/lcci-08.11.html",
    "revision": "4d1d5478405ee7fbfaad938c65c84a50"
  },
  {
    "url": "problems/dp/lcci-17.16.html",
    "revision": "b8f438d494a9357b409cfea395978fc3"
  },
  {
    "url": "problems/dp/lcof-46.html",
    "revision": "3def742a6578784d642f3f1d54a390b6"
  },
  {
    "url": "problems/dp/lcof-48.html",
    "revision": "3896ae67f202d619f6511a5b94492678"
  },
  {
    "url": "problems/graph/index.html",
    "revision": "7fce9de923f5694b1a6ad67bad9bc95e"
  },
  {
    "url": "problems/greedy/1405.html",
    "revision": "540d9a7c2864555d7db18275b905e876"
  },
  {
    "url": "problems/greedy/55.html",
    "revision": "7c2816ecf86abc96e6a939300c8247ba"
  },
  {
    "url": "problems/greedy/870.html",
    "revision": "a4fe6098af9d97366158e0acd5659cce"
  },
  {
    "url": "problems/greedy/index.html",
    "revision": "80fa5ba142e0512a6ee9952a715e4c64"
  },
  {
    "url": "problems/math/1071.html",
    "revision": "98b71b8e4b8a04298eb020b19ed3861e"
  },
  {
    "url": "problems/math/1103.html",
    "revision": "78e8dfa76f1e81d6f77e739be4895e89"
  },
  {
    "url": "problems/math/268.html",
    "revision": "b8a31b521487f1781d48629144e9bf14"
  },
  {
    "url": "problems/math/50.html",
    "revision": "1e43de27b585dc1057752768cf335f29"
  },
  {
    "url": "problems/math/892.html",
    "revision": "9c3dce559024c6da38865556d6e857f3"
  },
  {
    "url": "problems/math/914.html",
    "revision": "b8567ef5026a4d341ac3b9da60948a7c"
  },
  {
    "url": "problems/math/index.html",
    "revision": "3123f7c379b2e0319c7228c9c7f4ef71"
  },
  {
    "url": "problems/others/1013.html",
    "revision": "b849be2ce7eca6bbe44e9c6b6965facb"
  },
  {
    "url": "problems/others/1014.html",
    "revision": "b80c0f073f63f6631109a46b41221841"
  },
  {
    "url": "problems/others/1248.html",
    "revision": "95f8dbda6f9ba345941a4d26404ac6b5"
  },
  {
    "url": "problems/others/1300.html",
    "revision": "c19c22c112c7572ffb26170fea8041c0"
  },
  {
    "url": "problems/others/1371.html",
    "revision": "cad37975caa2776387f8e6f991e5152d"
  },
  {
    "url": "problems/others/1404.html",
    "revision": "ab3bdd143c3dcc63733e87f776ce864b"
  },
  {
    "url": "problems/others/1431.html",
    "revision": "f629268aacbe5317951697b22227c05a"
  },
  {
    "url": "problems/others/1432.html",
    "revision": "e3b84d4f3d6235e101c168384b353f8b"
  },
  {
    "url": "problems/others/1433.html",
    "revision": "1b5b2e29cd466ef8cb3eeae2efea21a0"
  },
  {
    "url": "problems/others/1476.html",
    "revision": "0e565bdecb743f70891b208d1385e82c"
  },
  {
    "url": "problems/others/169.html",
    "revision": "58add2f6337dd77dd749e922c3a88294"
  },
  {
    "url": "problems/others/229.html",
    "revision": "2d203d001f81fd2bb2f551f3cd50ae4a"
  },
  {
    "url": "problems/others/289.html",
    "revision": "de7d21d098188fa958d304b403a44199"
  },
  {
    "url": "problems/others/523.html",
    "revision": "ece72e8e8e6eee051890f6d3a5d0b58a"
  },
  {
    "url": "problems/others/560.html",
    "revision": "bd22a66a366a993f462aa5a67c491605"
  },
  {
    "url": "problems/others/807.html",
    "revision": "ae587bcc2092873dc4ceda57900db2fd"
  },
  {
    "url": "problems/others/974.html",
    "revision": "a2d3ebe0d148b6cd7efd256863186c20"
  },
  {
    "url": "problems/others/index.html",
    "revision": "1a7ba7609cbae46488a13931a5b535e3"
  },
  {
    "url": "problems/sliding-window/1004.html",
    "revision": "e52d89fb108455aa1ed722e2faa23404"
  },
  {
    "url": "problems/sliding-window/1040.html",
    "revision": "a2ecd31b4a3feaa542f8aa821c2d6406"
  },
  {
    "url": "problems/sliding-window/1477.html",
    "revision": "0a731a7dde669e31da51a921eb694dd7"
  },
  {
    "url": "problems/sliding-window/30.html",
    "revision": "4d238e9be38000718c897c57d20e0f10"
  },
  {
    "url": "problems/sliding-window/424.html",
    "revision": "1dbe2469dc7032977897d481cb099b96"
  },
  {
    "url": "problems/sliding-window/57-II.html",
    "revision": "afedc492e128936728c95795048f1755"
  },
  {
    "url": "problems/sliding-window/59-I.html",
    "revision": "d45c5516693e8e3f5055066cc133a101"
  },
  {
    "url": "problems/sliding-window/76.html",
    "revision": "73e8733e298bfe551f7271279dc88594"
  },
  {
    "url": "problems/sliding-window/992.html",
    "revision": "ae3ada71a2c10f44ad0cf47bcebb40e7"
  },
  {
    "url": "problems/sliding-window/995.html",
    "revision": "a8cc1c9b966108912804c6f0322b407e"
  },
  {
    "url": "problems/sliding-window/index.html",
    "revision": "26dcb17ca9857370544741a083f142e9"
  },
  {
    "url": "problems/sort/1460.html",
    "revision": "d8a45fd90808539306c55adcdab17bb9"
  },
  {
    "url": "problems/sort/56.html",
    "revision": "f3bead400c89f5c6bec69698c71a4a41"
  },
  {
    "url": "problems/sort/945.html",
    "revision": "3d8ea8e5b6f6d41f2528c557e95976d0"
  },
  {
    "url": "problems/sort/index.html",
    "revision": "585b343d652d7dfb276e23341a02529c"
  },
  {
    "url": "problems/two-pointers/11.html",
    "revision": "6f154ef48515d1808c0a95174b3a62a0"
  },
  {
    "url": "problems/two-pointers/151.html",
    "revision": "9697a166441fa3dd57e86b762c1cb4c9"
  },
  {
    "url": "problems/two-pointers/202.html",
    "revision": "86425625323a684015d37f1529d13ab6"
  },
  {
    "url": "problems/two-pointers/234.html",
    "revision": "c1f6c7a934003154998cb3ae5124fbd0"
  },
  {
    "url": "problems/two-pointers/26.html",
    "revision": "1898c81eb683305fe42ac0ca56960e9f"
  },
  {
    "url": "problems/two-pointers/287.html",
    "revision": "fe63bcef5dd8acdde4c73f25809f1870"
  },
  {
    "url": "problems/two-pointers/611.html",
    "revision": "84a0cde19a481b885f8e822ad32e7ea7"
  },
  {
    "url": "problems/two-pointers/680.html",
    "revision": "db28462f32eae2d2659f32c227831377"
  },
  {
    "url": "problems/two-pointers/876.html",
    "revision": "abcd3208b066dbb1ba629fe1dfa6670a"
  },
  {
    "url": "problems/two-pointers/index.html",
    "revision": "98d94178588c6e628632fbbc1066b346"
  },
  {
    "url": "problems/two-pointers/lcci-01.06.html",
    "revision": "d8f5c6bb93dae340e99411c546b3f2b2"
  },
  {
    "url": "theory/graph-theory/拓扑排序.html",
    "revision": "98a876513d6eb0320ecbf81cf4484f2a"
  },
  {
    "url": "theory/graph-theory/欧拉回路.html",
    "revision": "9a5c8b901a159297fc4cf7f270947dbb"
  },
  {
    "url": "theory/graph-theory/欧拉环路.html",
    "revision": "758582d369f29a1d8e288c3ee5cf767d"
  },
  {
    "url": "theory/index.html",
    "revision": "fdef044f93e0fbeaa6bb66f9778febb0"
  },
  {
    "url": "theory/number-theory/catalan.html",
    "revision": "ec632408e8340493f4261a7477cd86c2"
  },
  {
    "url": "theory/sort/quick-sort/quickSort.html",
    "revision": "94848a6b71b6c3286ddba2f458d156b1"
  },
  {
    "url": "theory/string/string-matching-series/bf-and-rk.html",
    "revision": "3071db47617cd48a79064d242f008ac6"
  },
  {
    "url": "theory/techniques/二分查找.html",
    "revision": "51c9c0949bb2fc66ffeffef42dd057c6"
  },
  {
    "url": "theory/techniques/数位dp(undo).html",
    "revision": "96cfbf759bc9d49d5dc7f4055599874e"
  },
  {
    "url": "theory/techniques/滑动窗口(undo).html",
    "revision": "33e649ebcf72d4d1b7e912bbd8d7a690"
  },
  {
    "url": "theory/techniques/状态压缩(undo).html",
    "revision": "165689c85e767c30e55df57d2ae8f7e3"
  },
  {
    "url": "theory/techniques/递归.html",
    "revision": "dac8c61c3686b338cbf0bfb02ec07a7c"
  },
  {
    "url": "theory/tree/segment-tree.html",
    "revision": "b2c8db4b1acbbed3c292f3d99dcff727"
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
