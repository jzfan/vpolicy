<template>
</template>
<script>
import axios from '../../axios'
import store from '../../store'
import router from '../../router'
export default {
  created () {
      // 检测会员有没有登录
      let user = localStorage.getItem('user')
      if(user == null || user.token == null){
        axios.get('/oauth/url')
             .then(res => {
              window.location = res.data
             })
      }
  },
}
</script>