import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueCookies from 'vue-cookies'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
