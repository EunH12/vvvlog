import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import vuetify from './plugins/vuetify'
import ClickButton from '@/components/ClickButton'
import SvgIcons from '@/components/SvgIcons'
import axios from 'axios'

import DialogComponent from '@/components/dialog/component'
// component globally
Vue.component('DialogComponent', DialogComponent)
Vue.component('ClickButton', ClickButton)
Vue.component('SvgIcons', SvgIcons)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
