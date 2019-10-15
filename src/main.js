import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common/common.css'
import axios from 'axios'
axios.defaults.baseURL = 'https:/music.api.umcoder.com';
axios.defaults.timeout=5000;
Vue.prototype.$http=axios;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')