import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import insure from '@/components/insure'
import benefits from '@/components/benefits'
import oauth from '@/components/oauth'
import account from '@/components/account'
import store from '../store'

Vue.use(Router)

let router = new Router({
  linkExactActiveClass: 'has-text-primary',
  routes: [
      {path: '/account', name: 'account', component: account },
    	{path: '/oauth', name: 'oauth', component: oauth },
    	{path: '/benefits', name: 'benefits', component: benefits },
    	{path: '/insure', name: 'insure', component: insure },
    	{path: '/', name: 'index', component: index },
   ]
})

router.beforeEach((to, from, next) => {
  store.state.path = to.name
  if(!store.state.user.api_token && to.path != '/oauth'){
    localStorage.setItem('beforeLoginUrl', to.fullPath) // 保存用户进入的url
    next('/oauth')
    return false
  }
  next()
})

export default router
