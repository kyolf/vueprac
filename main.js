var app = new Vue({
  el: '.app',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app2 = new Vue({
  el: '.app2',
  data: {
    seen: true
  }
})