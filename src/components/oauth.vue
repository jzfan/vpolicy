<template>
</template>
<script>
import axios from '../axios'
import store from '../store'
import router from '../router'
export default {
  created () {
      // 检测会员有没有登录
      let user = localStorage.getItem('user')
      if(user == null || user.token == null){
        axios.get('/oauth')
             .then(res => {
                store.commit('setUser', res.data)
                router.push( localStorage.getItem('beforeLoginUrl') )
             })
      }
  },
}
</script>