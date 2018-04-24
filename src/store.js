import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  user: {
	  	token: null
	  },
	  path: null
	},
	mutations: {
	  setUser (state, user) {
	  	localStorage.setItem('user', JSON.stringify(user))
	    state.user = user
	  }
	}
})