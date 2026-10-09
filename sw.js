const K="ve-v15",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","privacy.html"];
self.addEventListener("install",e=>e.waitUntil(caches.open(K).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==K).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
