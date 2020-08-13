import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'

Vue.config.productionTip = false

var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')
require('viewport-units-buggyfill').init({
  hacks: hacks
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
