if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let r={};const o=e=>i(e,d),c={module:{uri:d},exports:r,require:o};a[d]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(s(...e),r)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/HEdA4DLpa27TunKgdKHXq/_buildManifest.js",revision:"d8963c6657102db1f2fa51dc81a43a6f"},{url:"/_next/static/HEdA4DLpa27TunKgdKHXq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e762574-c176787585df7b8d.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/153-293df3d671a9d7fc.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/159-d25cedcb444dfae4.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/178-5594725ef147376f.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/337-281b0bcbb6b4885c.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/361-1f9af3d89e33a729.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/362-56e5094591fb8d9d.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/52ab8b6c-396ab777cf15bd6c.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/53c13509-666417ee1343b406.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/555-76beecc17efc974e.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/607-8c4af6aa307e96ea.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/734-7b06010ca23ecdc1.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/741-d9e80177a0e359c5.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/795d4814-3459caf4a6595d43.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/882-5cd013162f79d171.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/8e1d74a4-eedc0071386ae527.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/908-74eb929365e91f0a.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/94730671-83fc47911635ed8c.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/96-b8ba5f9ad88a5b6b.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/966-cdc82998703e1534.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/auth/login/page-1d566e8fcf859a1a.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/auth/register/page-3745c5696915ce62.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/bookmarks/page-1c7af6d332512865.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/layout-cd9afc40c10aedb3.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/not-found-26aa3e63215aa2ac.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/page-95ba252760d0051c.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/surah/%5Bid%5D/error-7b8056c090e4a263.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/surah/%5Bid%5D/page-e0011a7c25709b5e.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/app/surah/layout-e652e948417c2583.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/c916193b-3702092a0c507191.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/f8025e75-72191e88c924e5ad.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/fc2f6fa8-571d3a493423b912.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/fd9d1056-916e779f75f5cf30.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/framework-b370f160bb96059c.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/main-app-c693823fe214f7ed.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/main-e03de4dea0d32edb.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/pages/_app-d21e88acd55d90f1.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/pages/_error-d6107f1aac0c574c.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fe037f990c7ce50a.js",revision:"HEdA4DLpa27TunKgdKHXq"},{url:"/_next/static/css/e2053a16008995f3.css",revision:"e2053a16008995f3"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android/android-launchericon-144-144.png",revision:"9ac62cd0b175ee49493b8ac0da0357a8"},{url:"/android/android-launchericon-192-192.png",revision:"d22eca640efc8829fed59617b54fc0e1"},{url:"/android/android-launchericon-48-48.png",revision:"bafbe3f73f5d920de3f5472aa1a703fb"},{url:"/android/android-launchericon-512-512.png",revision:"cf0314d5988b97d9a4901f75b9df74f8"},{url:"/android/android-launchericon-72-72.png",revision:"763b91da7db502312bbd9f48829b1bad"},{url:"/android/android-launchericon-96-96.png",revision:"78d34331bd38b73a8d32308425ae4d57"},{url:"/icon-512.png",revision:"2ee73e17dda58908905c29cf6dd3ea8d"},{url:"/icon-lampion-100.png",revision:"8004d2223a6b8b7e3674c01ab67f6718"},{url:"/icon-lampion.png",revision:"bf6eaea410dbd6223f47b10ce7e815c4"},{url:"/ios/100.png",revision:"92e2595df5fed27749dc0f93b0d79808"},{url:"/ios/1024.png",revision:"d905ede91fb3e11483f1a9a9cc676f5a"},{url:"/ios/114.png",revision:"3dbf77cb760a467dba7dc76819940cd6"},{url:"/ios/120.png",revision:"1a5878e90457fbf7019434146b31950d"},{url:"/ios/128.png",revision:"725bf6abb48bf42330be6602aaeb7000"},{url:"/ios/144.png",revision:"9ac62cd0b175ee49493b8ac0da0357a8"},{url:"/ios/152.png",revision:"60d0bc9e05978e932ede976481b09bee"},{url:"/ios/16.png",revision:"c531b07b31e31592693e1eeb81ac50d9"},{url:"/ios/167.png",revision:"2f6b819484ecc5824cd7d2486fa636c2"},{url:"/ios/180.png",revision:"8bd8f905c260d1bcd1e14925d5206f9a"},{url:"/ios/192.png",revision:"d22eca640efc8829fed59617b54fc0e1"},{url:"/ios/20.png",revision:"d1be1c3916b46bb33995c4e24e86b987"},{url:"/ios/256.png",revision:"ef796ef35592144ed7554f87d0a82944"},{url:"/ios/29.png",revision:"52b24a1903c07984630e9b9bdab8cecd"},{url:"/ios/32.png",revision:"1b74ee8886e9d213080bc36892527556"},{url:"/ios/40.png",revision:"f5517aecf7b1912cf80123e9554a06df"},{url:"/ios/50.png",revision:"c0a4bc1314c36b2f48b202ca99fa6343"},{url:"/ios/512.png",revision:"cf0314d5988b97d9a4901f75b9df74f8"},{url:"/ios/57.png",revision:"90a82e14f6bca57b435033810513058e"},{url:"/ios/58.png",revision:"71c27d69cbf0972d7ab2dc6e69aee8b0"},{url:"/ios/60.png",revision:"e34924f33fc8c688c14cda653c1ff6b4"},{url:"/ios/64.png",revision:"333f07da1dbe95395acde790c6cb75eb"},{url:"/ios/72.png",revision:"763b91da7db502312bbd9f48829b1bad"},{url:"/ios/76.png",revision:"0c24a4f69bd21508e94ffff3e6da104b"},{url:"/ios/80.png",revision:"6638ab7cc4e436fcaf56203ec50fc159"},{url:"/ios/87.png",revision:"0e8aa71a4dec5d23e692e732d185977a"},{url:"/manifest.json",revision:"3ecf94de0c8e82c603ebc0ca037c74ed"},{url:"/mosque-icon-100.png",revision:"59a0dbe6d3be1af473fa46286616a59e"},{url:"/mosque-icon.png",revision:"bed589e32dbb854418896e384029eb0f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sw.js",revision:"2700e2f971f1be03e42c976d04b10afe"},{url:"/sw.js.map",revision:"cc1662560c4a049bfd6927d289a81ecd"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/windows11/LargeTile.scale-100.png",revision:"790f426efdb30e01b335b775c2ceba92"},{url:"/windows11/LargeTile.scale-125.png",revision:"e0571ff913291fef5d4d4c6720bb3026"},{url:"/windows11/LargeTile.scale-150.png",revision:"ec882eac556fc640f58a644babf56ffa"},{url:"/windows11/LargeTile.scale-200.png",revision:"4e71d16bc0ccc5f90436a9f1839b22b1"},{url:"/windows11/LargeTile.scale-400.png",revision:"2c2d0fbba7b27569b18478298a4825ed"},{url:"/windows11/SmallTile.scale-100.png",revision:"1c108ca9881023dd150f473a43c69918"},{url:"/windows11/SmallTile.scale-125.png",revision:"0d245d36ff1c40e85f9f63f5a6c7cf45"},{url:"/windows11/SmallTile.scale-150.png",revision:"fe710daed8745ed2927bbd2e1c0a3554"},{url:"/windows11/SmallTile.scale-200.png",revision:"17074ebf452d227db7872f1fd059b551"},{url:"/windows11/SmallTile.scale-400.png",revision:"1aae05942e3f1f6b97eaecfd28c42ec6"},{url:"/windows11/SplashScreen.scale-100.png",revision:"e5226d36b866ef9406c399344e6c68c6"},{url:"/windows11/SplashScreen.scale-125.png",revision:"e323ddd70c1209931ca2c5494d30c7df"},{url:"/windows11/SplashScreen.scale-150.png",revision:"ec8219260ca73ca01dd2ba6e2481d69e"},{url:"/windows11/SplashScreen.scale-200.png",revision:"30866f2477d4db3354f3c72c0b90b4b6"},{url:"/windows11/SplashScreen.scale-400.png",revision:"f1e27b71a8a1c0c5eb3058e40684a6f2"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"65f2afbe37e4d827fe924b686d7a1005"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"2a996c2b38adff98ddc68d7654c6a03f"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"6684c99b649b64f42e6ea287c7cb155b"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"fdb5bcc7b3a4facb7f61fe22e9d1e945"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"a224ba87589d18af23edf6d565ab6d78"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"04f3da2f4e35740d28de6066c8a6a064"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"606083e2a8e8755907f666d70fb90abe"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"d6bdf1a392b01ffc24e96398ddb3ec7e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"04762b5d6dc087f1ea9a290a76b5c930"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"0e4de4431bf13087a47158423e4797dc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"8ab879d8071e0f0be2ab3397d1f5e42b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"eafe32ed5e7dda480aca80fab1620013"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"d721826fcf81a17bbfb64505b0504c62"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"b2bf6e9a5e336533cd1f1d58e80cfa1d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"461d853aab78c2d2ce610d75a851a60d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"7bd772ab028fcc200b855719f4e374a7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"bff6cdb01d6fa34515e07933467c41d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"c212523df9731a565dece2e11838f521"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"3b2bcbadc87879a2c7d73a6b4e102bc7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"55f0f0800b1e885d1788db0226b7f01c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"04f3da2f4e35740d28de6066c8a6a064"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"606083e2a8e8755907f666d70fb90abe"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"d6bdf1a392b01ffc24e96398ddb3ec7e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"04762b5d6dc087f1ea9a290a76b5c930"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"0e4de4431bf13087a47158423e4797dc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"8ab879d8071e0f0be2ab3397d1f5e42b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"eafe32ed5e7dda480aca80fab1620013"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"d721826fcf81a17bbfb64505b0504c62"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"b2bf6e9a5e336533cd1f1d58e80cfa1d"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"461d853aab78c2d2ce610d75a851a60d"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"7bd772ab028fcc200b855719f4e374a7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"bff6cdb01d6fa34515e07933467c41d5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"c212523df9731a565dece2e11838f521"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"3b2bcbadc87879a2c7d73a6b4e102bc7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"55f0f0800b1e885d1788db0226b7f01c"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"b2bf6e9a5e336533cd1f1d58e80cfa1d"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"7f7453606c638a7759481af7df718231"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"cf5885870f155219fdf81261ae8f4091"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"781c7adec8e2c28333f6400f4d0025a6"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"5d5e6ca0c3ae49a5d0d4cf4a687566ce"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"04f3da2f4e35740d28de6066c8a6a064"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"606083e2a8e8755907f666d70fb90abe"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"d6bdf1a392b01ffc24e96398ddb3ec7e"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"04762b5d6dc087f1ea9a290a76b5c930"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"0e4de4431bf13087a47158423e4797dc"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"8ab879d8071e0f0be2ab3397d1f5e42b"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"eafe32ed5e7dda480aca80fab1620013"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"d721826fcf81a17bbfb64505b0504c62"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"b2bf6e9a5e336533cd1f1d58e80cfa1d"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"461d853aab78c2d2ce610d75a851a60d"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"7bd772ab028fcc200b855719f4e374a7"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"bff6cdb01d6fa34515e07933467c41d5"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"c212523df9731a565dece2e11838f521"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"3b2bcbadc87879a2c7d73a6b4e102bc7"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"55f0f0800b1e885d1788db0226b7f01c"},{url:"/windows11/StoreLogo.scale-100.png",revision:"c0a4bc1314c36b2f48b202ca99fa6343"},{url:"/windows11/StoreLogo.scale-125.png",revision:"eee728d48805c4f3fa39a3abc39d0b73"},{url:"/windows11/StoreLogo.scale-150.png",revision:"7208f035aa57d5f8213a56ea0e601cc0"},{url:"/windows11/StoreLogo.scale-200.png",revision:"92e2595df5fed27749dc0f93b0d79808"},{url:"/windows11/StoreLogo.scale-400.png",revision:"65dcdd059096a1019e5731c53f81b280"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"3ac1d5d7f6134c1d64d9eb45cc30f567"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"e814416fa25338ee63938f1ba1f04bbc"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"870f9027616d5e7468c27309aad89d5b"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"e5226d36b866ef9406c399344e6c68c6"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"30866f2477d4db3354f3c72c0b90b4b6"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
