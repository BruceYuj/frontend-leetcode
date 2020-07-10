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
    "revision": "6df35012fb7c608f6f17c44b05aa7d9d"
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
    "url": "assets/js/100.a7ec3e0b.js",
    "revision": "00b3cd3aa290cccf66ab67ca12362021"
  },
  {
    "url": "assets/js/101.d21ddbe0.js",
    "revision": "bc96a08f94e49577e8f2968593ca5711"
  },
  {
    "url": "assets/js/102.9e8d5187.js",
    "revision": "c2fb40bd2233daafb588cf7f4241ec67"
  },
  {
    "url": "assets/js/103.af0c11ca.js",
    "revision": "3e8bbca70ca45ead6be35f26bf7552a0"
  },
  {
    "url": "assets/js/104.17b55229.js",
    "revision": "2a3788da5225c6898e762eed73786033"
  },
  {
    "url": "assets/js/105.ddc966cd.js",
    "revision": "c24eede19fe68173d6528beb735e0c36"
  },
  {
    "url": "assets/js/106.230badd3.js",
    "revision": "d364a7a213556b66da7c85ecac1e9cf3"
  },
  {
    "url": "assets/js/107.38dfb815.js",
    "revision": "c2573754d276cd49e5c4fcb958221f6d"
  },
  {
    "url": "assets/js/108.fcefde3c.js",
    "revision": "e7b9a1511deeba51979ee5fcc838619c"
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
    "url": "assets/js/111.09fc52fe.js",
    "revision": "06665acc1d1a601559236bd0fd8e00b7"
  },
  {
    "url": "assets/js/112.32a554d3.js",
    "revision": "e7b818937693b61f0ae7f83bc526f532"
  },
  {
    "url": "assets/js/113.e9870519.js",
    "revision": "d52073f865af35436c768710d92902cb"
  },
  {
    "url": "assets/js/114.9a36aee8.js",
    "revision": "5f2df403469b6e772a7975df9bffed90"
  },
  {
    "url": "assets/js/115.87554526.js",
    "revision": "ced823a962a0130e805245f8dd550698"
  },
  {
    "url": "assets/js/116.b53054e4.js",
    "revision": "b069c800fb10b890617f973f66c8dc43"
  },
  {
    "url": "assets/js/117.fbb99d88.js",
    "revision": "7f05965d8753aa1a2786141b10b084c1"
  },
  {
    "url": "assets/js/118.cf1167ed.js",
    "revision": "3e38a2874460ffcffd9dfa20726c4ae7"
  },
  {
    "url": "assets/js/119.6d4dda02.js",
    "revision": "35f6aa63ae43e4be954b8c57f02e774f"
  },
  {
    "url": "assets/js/12.ecc1dddd.js",
    "revision": "91b66b36faab7a8a8429eca459e2b7d0"
  },
  {
    "url": "assets/js/120.21526e59.js",
    "revision": "a70597d40cd0b52b28fc1742b5508a1f"
  },
  {
    "url": "assets/js/121.455c2b9b.js",
    "revision": "07473e8abfcfef83b416d9ec280bbb08"
  },
  {
    "url": "assets/js/122.6d52b86a.js",
    "revision": "7cb1abfc92684acf4276b36fe6ab9af9"
  },
  {
    "url": "assets/js/123.1dbea553.js",
    "revision": "8ca180559f5f791886ea7e363819631e"
  },
  {
    "url": "assets/js/124.7610d630.js",
    "revision": "fc008e0c390eb0b5ff92f0e812f8ec8f"
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
    "url": "assets/js/127.ba218bb1.js",
    "revision": "c8687b3ac5c4acf5b290f13f76eccafd"
  },
  {
    "url": "assets/js/128.49f665b3.js",
    "revision": "f2230367cd88c09e8a2b6f95bdf48387"
  },
  {
    "url": "assets/js/129.8d36d10b.js",
    "revision": "5592706d473d4270d6e9f27598fde6ef"
  },
  {
    "url": "assets/js/13.778aed16.js",
    "revision": "5aafdbe9634bbbb9deee0d4c2b6d07ec"
  },
  {
    "url": "assets/js/130.2bbb54ce.js",
    "revision": "d117ba2e219d1e49aaa6275c91879371"
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
    "url": "assets/js/144.7b5fabdf.js",
    "revision": "4b9b9a3ea2e7e531209c179311ee7a4f"
  },
  {
    "url": "assets/js/145.352e3b74.js",
    "revision": "a955bbbb098ea822da6270012f30fd9b"
  },
  {
    "url": "assets/js/146.651e0626.js",
    "revision": "e3884d30608c6bdd4f073b6b71640abb"
  },
  {
    "url": "assets/js/147.fe89699a.js",
    "revision": "cd74c1e4f5d9fae8cee587acb5d1dac4"
  },
  {
    "url": "assets/js/148.63543bcc.js",
    "revision": "38dcad14652843e09dcf7ae2999638f6"
  },
  {
    "url": "assets/js/149.1da73b4a.js",
    "revision": "1ad436399ca16fd8aa010de406470e0d"
  },
  {
    "url": "assets/js/15.67389f00.js",
    "revision": "0759b9b569be6126119381423b588f72"
  },
  {
    "url": "assets/js/150.588f7232.js",
    "revision": "7545bdc6cd95f4f0fbdb7f288bf5616e"
  },
  {
    "url": "assets/js/151.435775ea.js",
    "revision": "2a544abd37e3561ebebb45860aa4f27c"
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
    "url": "assets/js/157.0e03748c.js",
    "revision": "3d84edbb83369059faa3f41475c3a903"
  },
  {
    "url": "assets/js/158.4f8f7104.js",
    "revision": "409d0241a254c196e715eae7ca28f7aa"
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
    "url": "assets/js/160.36b8f399.js",
    "revision": "9cca773fb95066362cc8081039d539c8"
  },
  {
    "url": "assets/js/161.6b7a4a89.js",
    "revision": "094c43dbfd0c61e60535fd8ea3393e04"
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
    "url": "assets/js/165.8cdadbf4.js",
    "revision": "e0e3e9988a8b95e4718d3a34155bfd14"
  },
  {
    "url": "assets/js/166.8383f726.js",
    "revision": "dbd26ac5516a1138bd338792a0c4a549"
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
    "url": "assets/js/21.93725d94.js",
    "revision": "4da162a591fc10e4298b1ed89d5189bf"
  },
  {
    "url": "assets/js/22.6c3acc73.js",
    "revision": "6e9cfcfddea5fd8c56c36c142f9b8c2b"
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
    "url": "assets/js/38.ba1a1b4c.js",
    "revision": "aeaab065c852d92cebd8fccad3a49855"
  },
  {
    "url": "assets/js/39.a4146923.js",
    "revision": "2a2ef75c73ebe911654c27d6143d3475"
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
    "url": "assets/js/56.5e3f23a9.js",
    "revision": "489517ac7e76ca7789f81dc2b515dcda"
  },
  {
    "url": "assets/js/57.c2c01c13.js",
    "revision": "81d4e0b31bc9b36e0c54c4b0c5b53a2a"
  },
  {
    "url": "assets/js/58.df14fef2.js",
    "revision": "201cfb05793be66a045f9e541203cf3c"
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
    "url": "assets/js/88.6ebe9a0c.js",
    "revision": "61d542c41f06a49600f5cab3942fe7be"
  },
  {
    "url": "assets/js/89.faafb51a.js",
    "revision": "b7329a48e1c747517ffafd276cb96b01"
  },
  {
    "url": "assets/js/9.6377b8ae.js",
    "revision": "bb415165e52749d6d31063e576109f94"
  },
  {
    "url": "assets/js/90.6629cb2c.js",
    "revision": "47d051c8cd78314ae9fec0eeb641ec09"
  },
  {
    "url": "assets/js/91.82af88e8.js",
    "revision": "27ed19e3e56ff10a4203be4b2c80a913"
  },
  {
    "url": "assets/js/92.6a5dbb43.js",
    "revision": "a50544de7717cc7714467de5c26733a8"
  },
  {
    "url": "assets/js/93.15159568.js",
    "revision": "a2a7183a98b250944f4c24a8efc1607c"
  },
  {
    "url": "assets/js/94.a41173ee.js",
    "revision": "cfeb016239769b4dc774d4788193b61c"
  },
  {
    "url": "assets/js/95.ad312d5a.js",
    "revision": "72d890964acdb7e7168e8a713ce82f55"
  },
  {
    "url": "assets/js/96.967d0466.js",
    "revision": "0956ffc76f66725d6597b1be666fe213"
  },
  {
    "url": "assets/js/97.17a5492a.js",
    "revision": "b27479f71409b0b1869769ff5c8e77d2"
  },
  {
    "url": "assets/js/98.34d4fc66.js",
    "revision": "34f81ca4131de12cf4ff363d821e67a8"
  },
  {
    "url": "assets/js/99.34bd3c37.js",
    "revision": "7e8ba22ec180af47e1366c89d3dbbb28"
  },
  {
    "url": "assets/js/app.825cce26.js",
    "revision": "90b0667aeb1cb8d3f18cf54a03c05bfe"
  },
  {
    "url": "index.html",
    "revision": "6db055c5ff9aae629929775bb9d0b098"
  },
  {
    "url": "problems/backtrack/131.html",
    "revision": "c0ed721bb40029652285ccdbaa49845b"
  },
  {
    "url": "problems/backtrack/22.html",
    "revision": "8d11335b973d280a9898ac23ffbdf913"
  },
  {
    "url": "problems/backtrack/437.html",
    "revision": "0e5437dc9c27a4e2397c63471ec6a40c"
  },
  {
    "url": "problems/backtrack/index.html",
    "revision": "f980c1b87de312f6577f447dd3f39add"
  },
  {
    "url": "problems/bfs-and-dfs/1028.html",
    "revision": "fef3ebd40600974aa04ac2526d704109"
  },
  {
    "url": "problems/bfs-and-dfs/1372.html",
    "revision": "733a02d53af97a4a01de64ffc3c8e599"
  },
  {
    "url": "problems/bfs-and-dfs/1466.html",
    "revision": "905d9ca91c65b9dead8c92bd73e5796a"
  },
  {
    "url": "problems/bfs-and-dfs/199.html",
    "revision": "e0be08de70a25405e3064bd5f14e3427"
  },
  {
    "url": "problems/bfs-and-dfs/236.html",
    "revision": "bc36b937ea96f3a69ac6795e9a5463ea"
  },
  {
    "url": "problems/bfs-and-dfs/257.html",
    "revision": "3ba05ed6398262b1c860c719358e2368"
  },
  {
    "url": "problems/bfs-and-dfs/543.html",
    "revision": "d9958310345e248b1e9749d37e08545b"
  },
  {
    "url": "problems/bfs-and-dfs/695.html",
    "revision": "8d86acbccf9ea1919492b93d4f9f67e0"
  },
  {
    "url": "problems/bfs-and-dfs/994.html",
    "revision": "39c1706896bfd40350a0230215532633"
  },
  {
    "url": "problems/bfs-and-dfs/index.html",
    "revision": "7424324ce37167a2f7fdae553fe8f7ba"
  },
  {
    "url": "problems/bfs-and-dfs/lcof-13.html",
    "revision": "7460651b082d86b1d56c53475980e8da"
  },
  {
    "url": "problems/bfs-and-dfs/LCP-09.html",
    "revision": "f201e4b81a45230941ebfba38f5bf369"
  },
  {
    "url": "problems/bit-operation/136.html",
    "revision": "013f15a0bd5938cc0b97db401d63f4be"
  },
  {
    "url": "problems/bit-operation/137.html",
    "revision": "9c04fd9bc095102051722dc98be08c9d"
  },
  {
    "url": "problems/bit-operation/1486.html",
    "revision": "701728ef680aecc1106836d8c6fd3249"
  },
  {
    "url": "problems/bit-operation/231.html",
    "revision": "50eb80de6e1f34c011e5bbf8b874e224"
  },
  {
    "url": "problems/bit-operation/260.html",
    "revision": "c1a03560bbdf99c0462083d4d1b833ca"
  },
  {
    "url": "problems/bit-operation/326.html",
    "revision": "2e7c1d100f62d2b3daef34b1f9f960a8"
  },
  {
    "url": "problems/bit-operation/342.html",
    "revision": "e66bcb5accd0904f300d263cc968a1a3"
  },
  {
    "url": "problems/bit-operation/372.html",
    "revision": "6e786a463b2da63dea1cf3c24b92a596"
  },
  {
    "url": "problems/bit-operation/397.html",
    "revision": "acef02d448cea2e29493744ebdf064ca"
  },
  {
    "url": "problems/bit-operation/index.html",
    "revision": "0fc02a3f86aa8b9070c72d74f73741f7"
  },
  {
    "url": "problems/data-structure/1.html",
    "revision": "38f2c4a8494dc48e4c5fdb472a5715b4"
  },
  {
    "url": "problems/data-structure/101.html",
    "revision": "70bb496f817773d500d2800c51f8b312"
  },
  {
    "url": "problems/data-structure/105.html",
    "revision": "c1e6c6d4be0d22cd5a2ef05968fe6128"
  },
  {
    "url": "problems/data-structure/106.html",
    "revision": "ab81ac20f09a2307143c82c0e90cee38"
  },
  {
    "url": "problems/data-structure/110.html",
    "revision": "cc0b1dbfd342fc4ce4e209116b91786e"
  },
  {
    "url": "problems/data-structure/1111.html",
    "revision": "5ac245454b42d13eac36a166c382e930"
  },
  {
    "url": "problems/data-structure/1160.html",
    "revision": "71639916f21a7d53c1caab62a6200c76"
  },
  {
    "url": "problems/data-structure/1383.html",
    "revision": "a3cee99d3ccb645fdea2747147de4afb"
  },
  {
    "url": "problems/data-structure/1403.html",
    "revision": "fd7b21725339245947502024670064fd"
  },
  {
    "url": "problems/data-structure/1475.html",
    "revision": "a460af419eb5b5eaa37cf9225cddfed2"
  },
  {
    "url": "problems/data-structure/1487.html",
    "revision": "3c3de0c52dd63287aa513aa6007a1f07"
  },
  {
    "url": "problems/data-structure/206.html",
    "revision": "25ff8cb65c2175acd086695aae25738f"
  },
  {
    "url": "problems/data-structure/24.html",
    "revision": "b6c70e3be9720d06686986b8381d89e3"
  },
  {
    "url": "problems/data-structure/25.html",
    "revision": "9bcfa54c05017c11b3275c84196d1f70"
  },
  {
    "url": "problems/data-structure/307.html",
    "revision": "c8255449b3e6eae1999c6d7fc1edd6bd"
  },
  {
    "url": "problems/data-structure/394.html",
    "revision": "aaef4b5d3232fab8b09625139dcab280"
  },
  {
    "url": "problems/data-structure/41.html",
    "revision": "0b1f3a64d571f1b3992f37229948dfec"
  },
  {
    "url": "problems/data-structure/538.html",
    "revision": "0ec5248bd13865b6994ccb8855f5a586"
  },
  {
    "url": "problems/data-structure/820.html",
    "revision": "93d1d002e1c7c7b24ffb1ce211f2a2b6"
  },
  {
    "url": "problems/data-structure/84.html",
    "revision": "ac32f5a99e167b9b4aca7cce363ae4e2"
  },
  {
    "url": "problems/data-structure/890.html",
    "revision": "60e4a6bb4b8490469f4d08cf61faf1ee"
  },
  {
    "url": "problems/data-structure/92.html",
    "revision": "bebce3f18cbb7bee04fe93a27b8a23a4"
  },
  {
    "url": "problems/data-structure/index.html",
    "revision": "4380ae9c40046c2eb0f57df93dd18670"
  },
  {
    "url": "problems/data-structure/lcof-59-II.html",
    "revision": "c20ff0e90b1435f62f21c46026f7f2d2"
  },
  {
    "url": "problems/design/297.html",
    "revision": "63e9b01e01f562cfa3fc444ac7049287"
  },
  {
    "url": "problems/design/index.html",
    "revision": "d767f04f22fe5a1ccc039e9eafe505e9"
  },
  {
    "url": "problems/divide-and-conquer/1095.html",
    "revision": "02bef961853907e2afa872c8aead6890"
  },
  {
    "url": "problems/divide-and-conquer/1482.html",
    "revision": "56987be7044ec45c5bc6beb68ead3723"
  },
  {
    "url": "problems/divide-and-conquer/1488.html",
    "revision": "4bf8fa54ade09548208018856d0d9b3f"
  },
  {
    "url": "problems/divide-and-conquer/240.html",
    "revision": "b76265af3e41a472544e9d929d47b24c"
  },
  {
    "url": "problems/divide-and-conquer/33.html",
    "revision": "a8491ee759b17d440c3cf7e67992afb9"
  },
  {
    "url": "problems/divide-and-conquer/74.html",
    "revision": "ff178cc6b9c2e9fab183f148fc23638d"
  },
  {
    "url": "problems/divide-and-conquer/index.html",
    "revision": "6225e91b2446083f5dbac29366f662ad"
  },
  {
    "url": "problems/divide-and-conquer/lcci-10.01.html",
    "revision": "348657ea98b1bdf37b2dab1ba7ecc3a2"
  },
  {
    "url": "problems/divide-and-conquer/lcof-40.html",
    "revision": "61c2d0e2cf3e9c5669907395beb37ea1"
  },
  {
    "url": "problems/dp/1012.html",
    "revision": "293916036d6f97119c4642f2768a67d4"
  },
  {
    "url": "problems/dp/1048.html",
    "revision": "80a2f2e0bf11f7c0c5ae56c19e775402"
  },
  {
    "url": "problems/dp/115.html",
    "revision": "0931dcb47822ed2fb9c5bab68f087a75"
  },
  {
    "url": "problems/dp/1162.html",
    "revision": "d5f57b30613fd3f366cb97ab94ab518b"
  },
  {
    "url": "problems/dp/120.html",
    "revision": "c2f5c5fc95b4f6dcf46078e67c00a2f6"
  },
  {
    "url": "problems/dp/121.html",
    "revision": "82c4a6378c325be6c757291c528b9567"
  },
  {
    "url": "problems/dp/122.html",
    "revision": "fd4c759923baa14bf2787c285ad95eab"
  },
  {
    "url": "problems/dp/1227.html",
    "revision": "a89c27f4a4e4baa329364299e952a0f5"
  },
  {
    "url": "problems/dp/123.html",
    "revision": "4eda0149b9fca417fd0ba8cb2584913d"
  },
  {
    "url": "problems/dp/132.html",
    "revision": "cba45ec8f95ddc84a51f8d2e76df515e"
  },
  {
    "url": "problems/dp/139.html",
    "revision": "22214b2fc29e6696a026ced24f12c087"
  },
  {
    "url": "problems/dp/140.html",
    "revision": "70e6eb8bc873f01254f53c6df3585dc1"
  },
  {
    "url": "problems/dp/1434.html",
    "revision": "34fbde6087a0dd003023fe5de30f6699"
  },
  {
    "url": "problems/dp/1444.html",
    "revision": "a387870c82d7abb46cd9fb22af7fb418"
  },
  {
    "url": "problems/dp/1478.html",
    "revision": "ac0e568c5cbd31497d892c85152b6e97"
  },
  {
    "url": "problems/dp/1483.html",
    "revision": "36b17cdd06ebea6673afd0fcd546a3f8"
  },
  {
    "url": "problems/dp/152.html",
    "revision": "c9f5a53dd979def826aa6eb65f7da7b3"
  },
  {
    "url": "problems/dp/188.html",
    "revision": "dac3bc21ac1cededbaa1b0ea4c40a1c0"
  },
  {
    "url": "problems/dp/198.html",
    "revision": "e73b881ccbe38feb00817609f2a41fa2"
  },
  {
    "url": "problems/dp/221.html",
    "revision": "445563abcf07f897ab6478cf9bf1f0bf"
  },
  {
    "url": "problems/dp/300.html",
    "revision": "a89f7bb2423903b2ad30532d1a27d4cd"
  },
  {
    "url": "problems/dp/309.html",
    "revision": "39e251fe61ee5f34144c8064a67faeae"
  },
  {
    "url": "problems/dp/343.html",
    "revision": "868f3b48d241fce37be337b9e417f20a"
  },
  {
    "url": "problems/dp/377.html",
    "revision": "21f64fddd0a649d8d36a848ebbf5e53b"
  },
  {
    "url": "problems/dp/5.html",
    "revision": "6ff793b30ce2da155d2ef93cfad1f7f1"
  },
  {
    "url": "problems/dp/542.html",
    "revision": "1ddaa45ec7697336e4e9df2c6fdae7c1"
  },
  {
    "url": "problems/dp/714.html",
    "revision": "bee92c24d306e0517cd203be58071ee7"
  },
  {
    "url": "problems/dp/764.html",
    "revision": "8fb935255a39fd7cbfd763406eb0a438"
  },
  {
    "url": "problems/dp/85.html",
    "revision": "05cce0bc790f3fd6d57ec0b12c4aac3a"
  },
  {
    "url": "problems/dp/983.html",
    "revision": "ecd02d7681ae56c2abeb0e3afd5571f4"
  },
  {
    "url": "problems/dp/index.html",
    "revision": "5bd6bf8a552b7d8ae94843ddab773913"
  },
  {
    "url": "problems/dp/lcci-08.11.html",
    "revision": "ef342cf981532df653e2b44a9f23f4f8"
  },
  {
    "url": "problems/dp/lcci-17.16.html",
    "revision": "aa3308fdab80c49350f5d473feccc4fe"
  },
  {
    "url": "problems/dp/lcof-46.html",
    "revision": "d48f04a0e5f4b831432cc5865c034093"
  },
  {
    "url": "problems/dp/lcof-48.html",
    "revision": "b6756f4431ceacf47be2855ce30b2a30"
  },
  {
    "url": "problems/graph/index.html",
    "revision": "f65915eb286154f74688e279eddd25f2"
  },
  {
    "url": "problems/greedy/1405.html",
    "revision": "09877796c299ea669fe1203e5c7ca8eb"
  },
  {
    "url": "problems/greedy/55.html",
    "revision": "a7176a5ee491c751d657a20e858f41f7"
  },
  {
    "url": "problems/greedy/870.html",
    "revision": "526d83c58ca7f0fa9f685dfdd560fd24"
  },
  {
    "url": "problems/greedy/index.html",
    "revision": "39d1b2a94d68ddf4cafeda08be30417e"
  },
  {
    "url": "problems/math/1071.html",
    "revision": "8593d033abfcfef3a09d4bbf05d9e811"
  },
  {
    "url": "problems/math/1103.html",
    "revision": "1fb09a30122d4b368e58abcb7d173330"
  },
  {
    "url": "problems/math/268.html",
    "revision": "94e502e7dae37b1257e39caf7e0c0b95"
  },
  {
    "url": "problems/math/50.html",
    "revision": "17c99eb9bcd9cb7d4f2b1b7779ff8946"
  },
  {
    "url": "problems/math/892.html",
    "revision": "78253b0fe46e79db357eefbd37db1bf1"
  },
  {
    "url": "problems/math/914.html",
    "revision": "31ae85e746c8ed284546d85b6b22e379"
  },
  {
    "url": "problems/math/index.html",
    "revision": "23b92d2276d3495182dcaa1a312310fc"
  },
  {
    "url": "problems/others/1013.html",
    "revision": "0d9c5be10e8ff7293824f29f71f80a21"
  },
  {
    "url": "problems/others/1014.html",
    "revision": "6ad8415701c8d1343d3fddfa520a499d"
  },
  {
    "url": "problems/others/1248.html",
    "revision": "e529f88fb58c592b6749151518356aa7"
  },
  {
    "url": "problems/others/1300.html",
    "revision": "58ff9455c5cc85e248e7b66a49d19b5d"
  },
  {
    "url": "problems/others/1371.html",
    "revision": "8eac825523b01dfd16d529f95bae1812"
  },
  {
    "url": "problems/others/1404.html",
    "revision": "07600a5f0f97df73fa44eca72f007b23"
  },
  {
    "url": "problems/others/1431.html",
    "revision": "fef457734031080779e01e7cf09d925b"
  },
  {
    "url": "problems/others/1432.html",
    "revision": "96472968f778fbb2f488c1adf6057b59"
  },
  {
    "url": "problems/others/1433.html",
    "revision": "49fd9f90a2264596fd3822290fd65081"
  },
  {
    "url": "problems/others/1476.html",
    "revision": "635c7a44b4938fd91cacf4bf95b8e49f"
  },
  {
    "url": "problems/others/169.html",
    "revision": "0f49638c641e35489ff0c216ce4f77c6"
  },
  {
    "url": "problems/others/229.html",
    "revision": "7bb3eaaedb04b0e0b7e27ecfab50008c"
  },
  {
    "url": "problems/others/289.html",
    "revision": "83df07ccd35b275255b07b618ff79596"
  },
  {
    "url": "problems/others/523.html",
    "revision": "968f20fc291ed3cfe3d379044efd02aa"
  },
  {
    "url": "problems/others/560.html",
    "revision": "f0f6c292610d38eb3c5de24a7641b928"
  },
  {
    "url": "problems/others/807.html",
    "revision": "f09f108a434b2ed78f93a3a500c22294"
  },
  {
    "url": "problems/others/974.html",
    "revision": "7924f648cd8109b79ce139a18347947f"
  },
  {
    "url": "problems/others/index.html",
    "revision": "094f0f0a9cdd7888c552ffbbbe1bf4b4"
  },
  {
    "url": "problems/sliding-window/1004.html",
    "revision": "8d51bcafb77ced76f813a92084deebe9"
  },
  {
    "url": "problems/sliding-window/1040.html",
    "revision": "1bc766012c7ee26aa5e7dca45d48bb52"
  },
  {
    "url": "problems/sliding-window/1477.html",
    "revision": "aba50d525ce5a1384f95c3539c395a8e"
  },
  {
    "url": "problems/sliding-window/30.html",
    "revision": "222c0d50bc2003e7f27b1325e99437e4"
  },
  {
    "url": "problems/sliding-window/424.html",
    "revision": "29e75aa477b516fee66ba8b7154cd20c"
  },
  {
    "url": "problems/sliding-window/57-II.html",
    "revision": "4e1fb98af1e2a87c634a81ac4782e4f3"
  },
  {
    "url": "problems/sliding-window/59-I.html",
    "revision": "551cdfaea7da39a090648d5772a3ab25"
  },
  {
    "url": "problems/sliding-window/76.html",
    "revision": "ef19ef0b1d426144ac141016b7338d0c"
  },
  {
    "url": "problems/sliding-window/992.html",
    "revision": "6c5c4bcdba2ea902fc2e446d04461d4d"
  },
  {
    "url": "problems/sliding-window/995.html",
    "revision": "ddc129b642dc9b940acdcc3ace50217d"
  },
  {
    "url": "problems/sliding-window/index.html",
    "revision": "3220b0c81a7709e7029a6ef59a7e9e04"
  },
  {
    "url": "problems/sort/1460.html",
    "revision": "991c68fc5ec1aeb20857a3ab34d7b707"
  },
  {
    "url": "problems/sort/56.html",
    "revision": "4a4c843313cf0964ef82980b971dacaf"
  },
  {
    "url": "problems/sort/945.html",
    "revision": "178683957deb54baf2a7b8760f0785f6"
  },
  {
    "url": "problems/sort/index.html",
    "revision": "e30ecda427a2e4f82eef44742f5169e0"
  },
  {
    "url": "problems/two-pointers/11.html",
    "revision": "59b8875a57133c3e60d98cd037c6dfd2"
  },
  {
    "url": "problems/two-pointers/151.html",
    "revision": "ec579acdb0df8b18a7b7f35ed48a1a4a"
  },
  {
    "url": "problems/two-pointers/202.html",
    "revision": "760aa831d90259b7819710cfc3a14dae"
  },
  {
    "url": "problems/two-pointers/234.html",
    "revision": "1f3c6be1113129ac96d43a5d2680edc7"
  },
  {
    "url": "problems/two-pointers/26.html",
    "revision": "ecb59ab00ad6e4878395a9074dfae53c"
  },
  {
    "url": "problems/two-pointers/287.html",
    "revision": "1ba340c2836b1bb6c3b58227ac4dd887"
  },
  {
    "url": "problems/two-pointers/611.html",
    "revision": "6b1b825dab7e0751a726123a310a96e3"
  },
  {
    "url": "problems/two-pointers/680.html",
    "revision": "d0049086827936321c1a52bf970e9fbd"
  },
  {
    "url": "problems/two-pointers/876.html",
    "revision": "b3cdf649c8d81296dbf151671fd0660d"
  },
  {
    "url": "problems/two-pointers/index.html",
    "revision": "a0924b67a364a6f5d8a7796a7f5d8206"
  },
  {
    "url": "problems/two-pointers/lcci-01.06.html",
    "revision": "31dce2e6dae9c713a080febac17ed703"
  },
  {
    "url": "theory/graph-theory/拓扑排序.html",
    "revision": "e3175651fd09103afbdb6fade3809e6c"
  },
  {
    "url": "theory/graph-theory/欧拉回路.html",
    "revision": "4876e752793fca870a4f3b0f6c1cf7c0"
  },
  {
    "url": "theory/graph-theory/欧拉环路.html",
    "revision": "2be084c836f39650c9dccadfa8590fd2"
  },
  {
    "url": "theory/index.html",
    "revision": "c5802bc0364f285fbb2462b58144488e"
  },
  {
    "url": "theory/number-theory/catalan.html",
    "revision": "b360fcd1bd4f3e90074402b1dfb84008"
  },
  {
    "url": "theory/sort/quick-sort/quickSort.html",
    "revision": "992b6f4f1b6f2e05366c23b0d672ab72"
  },
  {
    "url": "theory/string/string-matching-series/bf-and-rk.html",
    "revision": "1567dc59c9ec3df1093f7590328ad330"
  },
  {
    "url": "theory/techniques/二分查找.html",
    "revision": "f974a443bc6df82a6097c0e3e26d4a2c"
  },
  {
    "url": "theory/techniques/数位dp(undo).html",
    "revision": "1d1b89177e01ecce6ab5d553c1465d08"
  },
  {
    "url": "theory/techniques/滑动窗口(undo).html",
    "revision": "2a25eebdf9f13467847bb91a48fd8208"
  },
  {
    "url": "theory/techniques/状态压缩(undo).html",
    "revision": "79fb289ed7095bb23c512e4b36b6e580"
  },
  {
    "url": "theory/techniques/递归.html",
    "revision": "81caf7e3b3005719713218d38a8c13a8"
  },
  {
    "url": "theory/tree/segment-tree.html",
    "revision": "b68a241a4128dc782ee51138fde95bc2"
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
