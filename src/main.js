import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Axios from 'axios'
import './mock.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css'
import $ from 'jquery'
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = "http://localhost:8080/";
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use($)
new Vue({
    router,
    store,
    render: h => h(App)
  },
  // router.beforeEach((to, from, next) => {
  //   // to 要进入的理由
  //   // from 从哪来 要离开的路由对象
  //   // next 通行证
  //   if (to.path == '/Login') {
  //     next(); //直接进入到指定的路由
  //   } else {
  //     alert('请先登录')
  //     next('/Login')
  //   }
  // })

).$mount('#app')