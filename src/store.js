import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	  user: {
	  	api_token: null
	  },
	  path: null,
	  code: null,
	  expect: []
	},
	getters: {
		ticketsRemain: state => {
			return state.user.tickets_qty
		},
		ticketsUsed: state => {
			return state.user.tickets_used
		}
	},
	mutations: {
	  setUser (state, user) {
	  	localStorage.setItem('user', JSON.stringify(user))
	    state.user = user
	  },
	  selectedCode (state, code) {
	  	state.code = code
	  },
	  setExpect(state, data) {
	  	state.expect = data
	  },
	  ticketUsed(state) {
	  	state.user.tickets_qty -= 1
	  	state.user.tickets_used += 1
	  },
	  increaseTickets(state, n) {
	  	state.user.tickets_qty += n
	  }
	}
})