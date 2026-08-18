// Service worker mínimo — apenas permite que o navegador reconheça o app
// como instalável (PWA em modo standalone). Não faz cache agressivo para
// evitar que você veja versões antigas depois de uma atualização.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Sempre busca da rede; não intercepta nem armazena em cache.
  event.respondWith(fetch(event.request));
});
