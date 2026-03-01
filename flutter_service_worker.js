'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d8b4655322c78c6503e5957ae7c1319",
"assets/AssetManifest.bin.json": "cb5ae0030c072b6a8d1649548a7d4161",
"assets/AssetManifest.json": "5dd6bfb2a6bd2f945afabc96de0a9fa5",
"assets/assets/images/1Catalog_app.jpg": "185a4904c4e68f60235cfc612c390b66",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/App.jpg": "74accf28b89dc06aeb863928289435f4",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/Catalog_app.jpg": "8416ec18f04e3c6e81d130fbce1df8c6",
"assets/assets/images/chatgptbot.png": "f59027a55c35975eeb87bd9177a71b09",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/Favicon.png": "30cc5c75e1143b391e701f9d18c96bdb",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/layyfoisy.jpg": "c55dfd128ea66125dfcb6a5dcb8bd2f2",
"assets/assets/images/play.png": "afbbe7f1d6221c04f7ef6f6e032c854c",
"assets/assets/images/playstore.png": "de187e0c337de5648f8dc4afe29ecbd4",
"assets/assets/images/pro1.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/pro1_copy.png": "a21de45c69ae727cbe072f61d5126142",
"assets/assets/images/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/images/profile_pic.png": "f76467e2076df661ebbef9ffd3a9abd3",
"assets/assets/images/profile_pic2.png": "4c62393703891a10a62d76519d5f3c38",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/stack.svg": "43c21785313583509cc2dcc660ce8813",
"assets/assets/images/tech/adobexd.svg": "b8da2ed8570c5aa71d61402e90954300",
"assets/assets/images/tech/api.svg": "65c19716cde7fd4c78d62fcb533574de",
"assets/assets/images/tech/bootstrap.svg": "c76fa2ef8bce9784bd01defdaca2c725",
"assets/assets/images/tech/coding_illustration.svg": "8065caccd25ea37091a1c2c43f33fa59",
"assets/assets/images/tech/css.svg": "ada650097f50fd5c8d21fe6beee3ae9f",
"assets/assets/images/tech/dart.svg": "cb365d2438413170998483cf8785e182",
"assets/assets/images/tech/dart_frog.svg": "eb3beda681c6950296f91f69b2f496df",
"assets/assets/images/tech/express.svg": "ebd3647e8a8ede235a1a55be4ce72743",
"assets/assets/images/tech/figma.svg": "3b4c426dbbcc25a0095228af9e328322",
"assets/assets/images/tech/firebase.svg": "1e6703b786837f2d5b80d7a7bc3dbb84",
"assets/assets/images/tech/flask.svg": "e6867ecd77262949f3c22d44c02c46c8",
"assets/assets/images/tech/flutter.svg": "3093fb700a6cb4bcd6e2db3a1ea136bb",
"assets/assets/images/tech/github.svg": "326e390c9c9c9461b44230fd561ce6ae",
"assets/assets/images/tech/html.svg": "9eb69e3b5b90a2b8e93494c2a464200f",
"assets/assets/images/tech/jira.svg": "5e9f8380013984d99f07cf3bceba42d3",
"assets/assets/images/tech/js.svg": "9abf1dd81e0bc48d9c77f840e3410dfb",
"assets/assets/images/tech/mongo.svg": "06dd048e873d49932aa9d0a94b79c972",
"assets/assets/images/tech/node.svg": "2308cb2159cc6e88cd9750c6e1daa734",
"assets/assets/images/tech/notion.svg": "949de186f3eae5ebe208f7f52fa4e55e",
"assets/assets/images/tech/postgres.svg": "e98dedb84201406879a9b764fe922e11",
"assets/assets/images/tech/sql.svg": "5433d59214a5d8c71ca6cd96e74eec04",
"assets/assets/images/tech/trello.svg": "b2c1c2dd285ee2c88cb1e502e547b8f5",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fd4897b0c345e7c8bb4f80c8edccab2c",
"assets/NOTICES": "29630a0d0e8b1acb797b1d153c05da50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "67795ec11cf8f00d0feb23700b72e9f4",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9693091ae9b7d47f10afd53597301cb1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cafe0c11bcac055ed8e235a49276efe0",
"/": "cafe0c11bcac055ed8e235a49276efe0",
"main.dart.js": "6c6148f8a122d6222c1c8ab8e183f168",
"manifest.json": "ae4706af8328a241ca66f2711920903f",
"version.json": "e859ae82bcfee3dc07250572a39521b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
