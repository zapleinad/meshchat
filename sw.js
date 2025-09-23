const CACHE_NAME = 'meshchat-v1.0.0';
const STATIC_CACHE = 'meshchat-static-v1.0.0';

const CACHE_FILES = [
  './index.html',
  './manifest.json',
];

self.addEventListener('install', event => {
  console.log('[SW] Instalando Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Cache aberto');
        return cache.addAll(CACHE_FILES);
      })
      .then(() => {
        console.log('[SW] Todos os arquivos foram cacheados');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[SW] Erro ao cachear arquivos:', error);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Ativando Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== CACHE_NAME) {
              console.log('[SW] Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker ativado');
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (!request.url.startsWith('http')) {
    return;
  }

  if (request.method === 'GET') {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            console.log('[SW] Servindo do cache:', request.url);
            return cachedResponse;
          }

          return fetch(request)
            .then(response => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(request, responseToCache);
                });

              console.log('[SW] Buscado da rede e cacheado:', request.url);
              return response;
            })
            .catch(error => {
              console.log('[SW] Erro ao buscar da rede:', request.url, error);
              
              if (request.destination === 'document') {
                return caches.match('./index.html');
              }
              
              throw error;
            });
        })
    );
  }
});

console.log('[SW] Service Worker carregado');