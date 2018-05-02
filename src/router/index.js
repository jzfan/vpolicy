import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import insure from '@/components/insure'
import benefits from '@/components/benefits'
import oauthUrl from '@/components/oauth/url'
import oauthCallback from '@/components/oauth/callback'
import account from '@/components/account'
import charge from '@/components/charge'
import fc3dInsure from '@/components/fc3dInsure'
import ssqInsure from '@/components/ssqInsure'
import policiesList from '@/components/policiesList'
import store from '../store'

Vue.use(Router)

let router = new Router({
  linkExactActiveClass: 'has-text-primary',
  mode: 'history', 
  routes: [
      {path: '/policiesList', name: 'policiesList', component: policiesList },
      {path: '/ssqInsure', name: 'ssqInsure', component: ssqInsure },
      {path: '/fc3dInsure', name: 'fc3dInsure', component: fc3dInsure },
      {path: '/charge', name: 'charge', component: charge },
      {path: '/account', name: 'account', component: account },
      {path: '/oauth/url', name: 'oauthUrl', component: oauthUrl },
    	{path: '/oauth/callback', name: 'oauthCallback', component: oauthCallback },
    	{path: '/benefits', name: 'benefits', component: benefits },
    	{path: '/insure', name: 'insure', component: insure },
    	{path: '/', name: 'index', component: index },
   ]
})

router.beforeEach((to, from, next) => {
  store.state.path = to.name
  if(!store.state.user.api_token && to.path != '/oauth/url' && to.path != '/oauth/callback'){
    localStorage.setItem('beforeLoginUrl', to.fullPath) // 保存用户进入的url
    next('/oauth/url')
    return false
  }
  next()
})

export default router
