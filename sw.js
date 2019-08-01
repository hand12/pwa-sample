var CACHE_NAME = 'my-sw-sample-cache-v1'
var urlsToCache = [
  './',
  './style.css'
]

self.addEventListener('install', function(event) {
  console.log('update test')
  console.log('called install')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function(event) {
  console.log('called fetch')
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        console.log('matched request', response)
        if (response) {
          console.log('response return true!')
          return response
        }
        return fetch(event.request)
      })
  )
})
