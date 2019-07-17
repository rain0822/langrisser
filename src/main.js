import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueCookies from 'vue-cookies'
import 'buefy/dist/buefy.css'
import Storage from 'vue-web-storage'
import router from './router'

Vue.use(Buefy)
Vue.use(VueCookies)
Vue.use(Storage);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
