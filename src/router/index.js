import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Index from '../views/Index'
import zhuye from '../components/menu/zhuye'
import yonghu from '../components/menu/yonghu'
import wenzhang from '../components/menu/wenzhang'
import shezhi from '../components/menu/shezhi'
import echarts from '../components/menu/echarts'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/Login"
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: "/zhuye",
    children: [{
        path: "/zhuye",
        component: zhuye
      },
      {
        path: "/yonghu",
        component: yonghu
      },
      {
        path: "/wenzhang",
        component: wenzhang
      },
      {
        path: "/shezhi",
        component: shezhi
      },
      {
        path: "/echarts",
        component: echarts
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 挂载全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   if (to.path == '/Login') {
//     next();
//   } else {
//     alert('2')
//     next('/Login');
//   }
// })

export default router