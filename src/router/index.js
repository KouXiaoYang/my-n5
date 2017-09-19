import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Home'

Vue.use(Router)//使用路由插件

export default new Router({
  routes: [
    
    
    {
     path: '/home',
     name: 'Home',
     component: Home
   },
    {
     path: '/list',
     name: 'List',
     component: List
   },
   {
    path: '/brand',
    name: 'Brand',
    component: Brand
  },
   {
    path: '/car',
    name: 'Car',
    component: Car
  },
  {
   path: '/mine',
   name: 'Mine',
   component: Mine
 }
  ]
})
