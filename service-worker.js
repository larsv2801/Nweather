self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v2').then((cache) => {
      return cache.addAll([
        '/Nweather/',
        '/Nweather/index.html',
        '/Nweather/manifest.json',
        '/Nweather/wolk144.png',
        '/Nweather/wolk192.png',
        '/Nweather/wolk512.png',
        '/Nweather/wolk.svg',
        '/Nweather/arrow.svg',
        '/Nweather/bliksem.svg',
        '/Nweather/hagel.svg',
        '/Nweather/luchtdrukding.svg',
        '/Nweather/maan.svg',
        '/Nweather/mist.svg',
        '/Nweather/regen.svg',
        '/Nweather/sneeuw.svg',
        '/Nweather/sunrise.svg',
        '/Nweather/zon.svg',
        '/Nweather/zon+wolk.svg',
        '/Nweather/Inter-Light.otf',
        '/Nweather/Ndot57-Regular.otf',
        '/Nweather/nothingloader.gif',
        '/Nweather/screenshot1.png',
        '/Nweather/screenshot2.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});