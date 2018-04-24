<template>
  <div id="app" class="has-navbar-fixed-top">
    <hero :is=heroCurrent></hero>
    <div class="section">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <footerbar></footerbar>
  </div>
</template>

<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

<script>
import heroIndex from './components/hero'
import heroAccount from './components/heroAccount'
import footerbar from './components/footerbar'
import store from './store'
export default {
  name: 'App',
  components: {heroIndex, heroAccount, footerbar},
  computed: {
    heroCurrent() {
      return store.state.path == 'account' ? heroAccount : heroIndex
    } 
  }
}
</script>

<style lang='sass'>
@import '../node_modules/bulma/bulma.sass'
</style>


