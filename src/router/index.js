import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Index from '../views/Index'
import zhuye from '../components/menu/zhuye'
import yonghu from '../components/menu/yonghu'
import wenzhang from '../components/menu/wenzhang'
import shezhi from '../components/menu/shezhi'
import tubiao from '../components/menu/tubiao'
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
    redirect:"/zhuye",
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
        path: "/tubiao",
        component: tubiao
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router