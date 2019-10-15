import Vue from 'vue'
import Router from 'vue-router'
import { homedir } from 'os';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name:'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path:'/album/:id',
      name:'album',
      component: ()=>import('./views/Album.vue'),
    },
    {
      path:'/search/:words',
      name:'search',
      component: ()=>import('./views/Search.vue')
    },
    {
      path:'/userlist/:id',
      name:'userlist',
      component: ()=>import('./views/List.vue'),
    },
    {
      path:"*",component: () => import('./views/Home.vue')
    }

  ]
})