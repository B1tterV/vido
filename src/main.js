import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/main.css'
import './mirageServer.js'

import '@/assets/styles.scss'
import '@/assets/scss/style.scss'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueMask from 'v-mask'
Vue.use(VueMask)

import VueResource from 'vue-resource'
Vue.use(VueResource)


import vClickOutside from 'v-click-outside' 
Vue.use(vClickOutside)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC4viWtBofqHACiUPly7WmxopLmfAi9t8U",
    libraries: 'places',
    region: 'En',
    language: 'en',
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
