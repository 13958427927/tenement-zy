import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: () => import('views/Layout'),
    children: [
      {
        name: '首页',
        path: '/layout/home',
        component: () => import('views/home')
      },
      {
        name: '找房',
        path: '/layout/list',
        component: () => import('views/list')
      },
      {
        name: '咨询',
        path: '/layout/news',
        component: () => import('views/news')
      },
      {
        name: '我的',
        path: '/layout/profile',
        component: () => import('views/profile')
      }
    ]
  },
  {
    name: '登录界面',
    path: '/layout/login',
    component: () => import('views/login')
  },
  {
    name: '地图找房',
    path: '/layout/map',
    component: () => import('views/Themap')
  },
  {
    name: '城市列表',
    path: '/layout/city',
    component: () => import('views/City')
  },
  {
    name: '发布房源',
    path: '/layout/rent/add',
    component: () => import('views/rent')
  }
]
const router = new VueRouter({
  routes
})

export default router
