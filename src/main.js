import $ from 'jquery'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = "http://localhost:8080/";
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use($)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')