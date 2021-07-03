import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
Vue.config.productionTip = false


Vue.prototype.$https = Axios.create({
  baseURL: process.env.VUE_APP_API_URL

})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
