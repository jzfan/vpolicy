import Vue from 'vue'
import Vuex from 'vuex'
import env from '../.env.js'

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
	  increaseRank(state, n) {
	  	state.user.rank += n
	  },
	  setQrcode (state, ticket) {
	  	state.user.qrcode_ticket = ticket
	  	localStorage.setItem('user', JSON.stringify(state.user))
	  },
	  points2Ticket (state) {
	  	if (state.user.points >= env.POINTS_QTY_FOR_TICKET) {
		  	state.user.points -= env.POINTS_QTY_FOR_TICKET
		  	state.user.tickets_qty +=1
		  	localStorage.setItem('user', JSON.stringify(state.user))
	  	}
	  },
	  rank2Tickets (state) {
	  	if (state.user.rank_remain >= 1) {
	  		state.user.rank_remain -= 1
	  		state.user.tickets_qty += 1
	  		localStorage.setItem('user', JSON.stringify(state.user))
	  	}
	  },
	  sign (state, user) {
		user.signed = true
		state.user = user
	  	localStorage.setItem('user', JSON.stringify(state.user))
	  },
	  withdraw (state) {
	  	state.user.account = 0
	  	localStorage.setItem('user', JSON.stringify(state.user))
	  }
	}
})