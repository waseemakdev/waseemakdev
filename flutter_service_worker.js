'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8bc3cb2dbaa5e60bc25dcb180dffd01b",
".git/config": "e2a30f9c298f1fce6f64420121be9911",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "941c4f36c2fe45e5049d30c79265ca0d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "af805ea9872e70593e702d9078ea0054",
".git/logs/refs/heads/main": "70f9fb547cfc43e94e89d87488f61396",
".git/logs/refs/remotes/origin/main": "b517bef0dfaee14465d65650cd038e05",
".git/objects/01/ceb172423f70c1f620d1faf756bf0104bb9219": "c0a69f30945d36b5e6372976519154c6",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/06/a1e473775c8ef56a12f2a260d5da06dc5b1149": "71d4ea47d0ff89dd433d608b4561cbfc",
".git/objects/0f/608b68289efe6da7f114eb2c97e12fe5377860": "f556694ef9dd07275a736845bee12b35",
".git/objects/10/46514aea81b18e9700933a4b2ff3028b25ef58": "d93c9e1d77ac428767d2a153e666938e",
".git/objects/12/829221dc9c86086b97b2e346a835a4bb291ec0": "c366ab34530209e9e6f959629f835996",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/2fef6ff80c14dfa9edd1b78c7d841cc8d4db22": "5a17396c3693552ec13dbe230b644a28",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/27/16924e088e313205afabecf7236197336fadbf": "0390167b68c5f6063136bcb7be8d4ed8",
".git/objects/27/362f45b21318c227cb424972a87de285b0eafb": "917cba596c40cbbc2ab0ff4db008e33b",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/33/f3c33332c9afb5d45bd092e38a0b4001cff7be": "b4ae6caac7cffa65f3df57ff59c61710",
".git/objects/36/03fce23bd63ad778b46a41adceba09076dd30d": "5cf5ad9351c0e8c06bc2ca0b517ed8c4",
".git/objects/36/33e104bad86afa51e22f7a0d7b2d62cb675710": "2dbcad4e5c8850256ef4e74d7c665964",
".git/objects/3b/6217f047ad7df22c8fe21f975871a090f2bdca": "cc471f3506db7cd7ab1a8ec64b106ec9",
".git/objects/3c/bca5b8a90520901782a09b4c5d97379435ded1": "67abb08441805f6ac88946baed773586",
".git/objects/3d/360469f43d64e476e942e20ffbece278c6495c": "a94093ef8e51271ae6b5381b9ccb9ab8",
".git/objects/40/96846c6385299a4f6dc672f63746581248fdeb": "83f23f60967915d70dadc62a41a28c03",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/44134e19002d5f3b92f83eb07c9f43e1ea377d": "906ef636c0c0441093a0cfbb547d9039",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/58/4ba9b0ef8d8482924f77bcc4a5c145a7344e54": "91ae3df8796c1b5998d11720c167da92",
".git/objects/5e/44327944e52aadc6eb09cffa1b34d80437f9b3": "40e451242e7e7b8d871d3aeae58599fc",
".git/objects/5e/f7aeeea08c4f1249d8fe59e64f9b62a8a8af40": "4f87b4e054b2a1732c92b69cf8f09513",
".git/objects/60/8b27fa6aee09f0f87fc88b446e8b29d2007ea4": "3af3d2b2432f89d5667299f4ad48cba3",
".git/objects/63/ee36b2e30cc251e1d5dd9d7bc93794641f8696": "a8c45eac266055500ed504a6dab6767a",
".git/objects/65/aeef3c1acd6a50163c330c5b957438554db19d": "a30e82fc15b50ac29d50dc4f6ef7ee6e",
".git/objects/65/f228de07aa159438241d491f41d487a7806316": "ad7cd9fac6ba44ceb50333ca9a9ff061",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/31fbbaff75fa0cd36024fd77d5d0b1ade5b38a": "3245e1dbf040664267634b7ee670ff6e",
".git/objects/6e/a33077c5e6b373a74814f4ebb3b94175d986b0": "37c409d195c11b64377dd944ef14e051",
".git/objects/73/5092439b42bd701d75887d03149efe3de486cb": "a5877ca957d073d36f7aca345f99cb9a",
".git/objects/73/bbff64b49b24d00621617e3aaa1f30a2032f3a": "11c6131782494c661fa94655937c9021",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/78/40df780434edf5199ebe43e3016d37b666f058": "f5aadb21017ce6577d139805ff7bd67e",
".git/objects/79/8d6db9e1dab7ac88ad2ae1414aba6e25e4e086": "a8c377c8c3899cd3a65826a4a74309c7",
".git/objects/79/ff535ed6d74afb7327a8f29e4aec49f2decb98": "9551d3c6bf21b538d6276d7b61ba0f3a",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/86/552391be9bc9fbe7637d26b7b535096cad2e0a": "a044d8169ab0740f96c7149af6774122",
".git/objects/87/2fae99507e51cef96cdf4cf7c7169c2f90e088": "5c36f000ef6980666eec06eec7095e91",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/8e/998ce405afc7e040e0eb25abfdc38f6a4e0cfa": "ae4bc397abf266c2cdb946918d6d45fc",
".git/objects/93/67166987666379daa5d58ba05f040bb51c9992": "5dfa7bf7195ceba8806b28cd15a8f2c2",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/6f8dba069f21f4e4e85c80788a1c8a7851f384": "96ca902590a020b058b5be1eab4ef467",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/362e148a0ee39661bdd219b0d6e05bca404b04": "144f4c722dd5fd1893e7db42abcaf8b8",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/7a7f85d0053730d17901719ac5f8742b2b573b": "3fe82f7d6629b2df54d46e677afba4b9",
".git/objects/a2/b67ac282788883425ac9d8b3b70517acbd8387": "45683fcf95d6b8e220f515e74f6aad1f",
".git/objects/a4/17c057124b96423ee71aefe8b387dc2aeb0d4a": "ec8b5e788c08619aea591aabe73de2c5",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/b4/21ff8526546183991031da4c183fe4510c29b3": "bab2ecb481191b708e2eca5ebed51822",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8d399dc1302c3671d4e8de17bd976242da620f": "065cfef7b959be596c53737dd5b0227f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/c30bb5b00d009d8b6da5f06dcfa59901f23955": "bf23698d5e937e3d3de82ad06d538965",
".git/objects/c1/1136801fe34381faf28d4cbc01a5038a5603f5": "64e387640e2c9da4a947cabc35a127d6",
".git/objects/c1/3b4407a688124e95c9e2b2ca2bea3903d1dcbc": "9201fd687cfbbd0bbe4728f7f3178bea",
".git/objects/c3/26b6bbfae7f5aaa7636bedc4b0eeaf9e673611": "a09fc56fe4311128785d59343daa266b",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/f4e6ff64c160bf7faec48165babd2fcd312113": "ddf25e449a422c829be0f73dff669e76",
".git/objects/d0/69fc154576f740d6b3379937d4b81cffc3e076": "4f7aec101932f1f37b5ca5519586289c",
".git/objects/d2/bf870d3be83e2d1614c53ef2024da4c743eabc": "063e7ae151c447db01648826f991721e",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/5e81c17b9155ed4444a0aee5d2d443ad310da1": "f759d779aac18db6343d37ec4376b3dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/ca5edee5a055ca7470d7e91819ea32efdd6c0c": "515ce1117d88e50d09b614807ce3dc8b",
".git/objects/e1/5838ce1dfeee2a1714057be582f1da4ca601f3": "69cad546effa672d62e73e0407b7b173",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/88c32da14de376d2163205445dc062028500f7": "d2db96d37f399bc0fd8007b1d859f36d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/f9d799298306444d07cd6f902de1a4fcbaa0a5": "2c864480a254ba9df589b5d30a0a2623",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/10744c2996b5438c0e58303d437f287dfaeef3": "ed9e1bda71eadaeca7e01e3f4246f82b",
".git/objects/ff/58dbe42f7a4359e5db8be464b8471a6abe7c34": "441e4dcb14953e97747feaeeb2d2c955",
".git/objects/ff/f21253426b092d027023946cde1bd259f5fe80": "da336c1230f4f7bf3e359c26cce592b1",
".git/refs/heads/main": "6e2b1cd9f8f48e17bb5c774d5d3724bc",
".git/refs/remotes/origin/main": "6e2b1cd9f8f48e17bb5c774d5d3724bc",
"assets/AssetManifest.bin": "8d8b4655322c78c6503e5957ae7c1319",
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
"flutter_bootstrap.js": "283537f50b94881928dc0bed90a9e247",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ff02ba620edf156a93eb4f64ad5d5c2",
"/": "0ff02ba620edf156a93eb4f64ad5d5c2",
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
