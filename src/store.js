import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  user: {
	  	api_token: null
	  },
	  path: null,
	  code: null
	},
	mutations: {
	  setUser (state, user) {
	  	localStorage.setItem('user', JSON.stringify(user))
	    state.user = user
	  },
	  selectedCode (state, code) {
	  	state.code = code
	  }
	}
})