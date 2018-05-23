<template>
  <div id="app" class="has-navbar-fixed-top">
    <hero :is=heroCurrent></hero>
    <div style="padding: 1.5rem 1.5rem 4.5rem">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <flash></flash>
    <footerbar></footerbar>
  </div>
</template>

<script>
import heroIndex from './components/hero'
import heroAccount from './components/heroAccount'
import footerbar from './components/footerbar'
import store from './store'
import {getExpect} from './api'
import flash from './components/flash'
import bus from './bus'
export default {
  name: 'App',
  components: {heroIndex, heroAccount, footerbar, flash},
  created () {
    getExpect((data) => store.commit('setExpect', data))
  },
  computed: {
    heroCurrent() {
      return store.state.path == 'account' ? heroAccount : heroIndex
    } 
  }
}
</script>

<style lang='sass'>
/*@import '../node_modules/bulma/bulma.sass'*/
@import './assets/mystyle.scss'
</style>




