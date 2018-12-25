import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('client/home/home.vue')
    },
    {
      path: '/login',
      component: () => import('client/login/login.vue')
    },
    {
      path: '/register',
      component: () => import('client/register/register.vue')
    },
    {
      path: '/detail/:id',
      component: () => import('client/detail/detail')
    },
    {
      path: '/user',
      component: () => import('client/user/user')
    }
  ]

})
