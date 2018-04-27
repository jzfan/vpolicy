<template>
</template>
<script>
import axios from '../../axios'
import store from '../../store'
import router from '../../router'
export default {
  created () {
    let code = window.location.search.substr(1).split('&').find(function(v){return v.includes('code')}).split('=')[1]
    // localStorage.setItem('code', code)
    axios.get(`/oauth/user?code=${code}`)
      .then(res => {
        store.commit('setUser', res.data)
        router.push(localStorage.getItem('beforeLoginUrl'))
        // console.log(res.data)
      }).catch(err => {
        console.log(err.response)
      })
  },
}
</script>