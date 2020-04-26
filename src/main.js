import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import vuetify from './plugins/vuetify'

import DialogComponent from '@/components/dialog/component'
// component globally
Vue.component('DialogComponent', DialogComponent)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
