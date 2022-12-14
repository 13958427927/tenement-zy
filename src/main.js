import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import plugins from '@/plugins'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
// Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
