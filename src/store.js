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
	  },
	  setQrcode (state, ticket) {
	  	state.user.qrcode_ticket = ticket
	  	localStorage.setItem('user', JSON.stringify(state.user))
	  },
	  points2Ticket (state) {
	  	if (state.user.points >= 200) {
		  	state.user.points -= 200
		  	state.user.tickets_qty +=1
		  	localStorage.setItem('user', JSON.stringify(state.user))
	  	}
	  },
	  rank2Tickets (state) {
	  	if (state.user.rank_remain >= 1) {
	  		state.user.rank_remain -= 1
	  		state.user.tickets_qty +=10
	  		localStorage.setItem('user', JSON.stringify(state.user))
	  	}
	  }
	}
})