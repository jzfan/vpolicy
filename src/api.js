import axios from './axios'
import store from './store'
import {lotteryChartQueryLimitErrorFlash} from './functions'
function getExpect(cb) {
	axios.get('/expects')
		.then(res => cb(res.data))
}
function authHeader() {
	let api_token = store.state.user.api_token
	return {
		headers: {Authorization: `Bearer ${api_token}`}
	}
}
function getPolicy(code, cb) {
	axios.get(`/policies/next?code=${code}`, authHeader())
		.then(res => cb(res.data))
}
function getPoliciesList(cb) {
	axios.get('/policies', authHeader())
		.then(res => cb(res.data))
}
function createPolicy(code, number, cb) {
	axios.post('/policies', {code: code, number: number}, authHeader())
		.then(res => cb(res.data))
}
function activePolicy(code, id, cb) {
	axios.post(`/policies/${id}/active`, {}, authHeader())
		.then(res => cb(res.data))
}
function acceptPrize(id, cb) {
	axios.patch(`/policies/${id}`, {status: 'rewarded'}, authHeader())
		.then(res => cb(res.data))
}
function getPageByUrl (url, cb) {
	axios.get(url, authHeader())
		.then(res => cb(res.data))
}
function getTickets(n, cb) {
	axios.put('/users', {tickets_qty: n}, authHeader())
		.then(res => {
			store.commit('increaseTickets', n)
		})
}
function getWinNumberCountByCode(code, n, q, cb) {
	let url = `/lotteries/count?code=${code}&limit=${n}&q=${q}`
	axios.get(url)
		.then(res => cb(res.data)).catch(err => lotteryChartQueryLimitErrorFlash(n, q))
}
function getCurrentNotice(cb) {
	axios.get('/lotteries/current')
		.then(res => cb(res.data))
}
function getHistoryListByPage(code, cb) {
	axios.get(`/lotteries/${code}/history`)
		.then(res => cb(res.data))
}
function takeHongbao(policy_id, cb) {
	axios.put('/accounts', {policy_id, type: 'increment'}, authHeader())
		.then(res => {
			cb(res.data)
			store.state.user.account += 200
			localStorage.setItem('user', JSON.stringify(store.state.user))
		})
}
function getQrcode(cb) {
	axios.post('/qrcodes', {}, authHeader())
		.then(res => cb(res.data))
}
function points2Ticket(cb) {
	axios.get('/tickets/bypoints', authHeader())
		.then(res => cb(res.data))
}
function rank2Tickets(cb) {
	axios.get('/tickets/byrank', authHeader())
		.then(res => cb(res.data))
}
function getPointsByDailySignUp(cb) {
	axios.get('/sign', authHeader())
		.then(res => cb(res.data))
}
export {
	createPolicy,
	activePolicy,
	getPolicy,
	getExpect,
	getPoliciesList,
	acceptPrize,
	getPageByUrl,
	getTickets,
	getWinNumberCountByCode,
	getCurrentNotice,
	getHistoryListByPage,
	takeHongbao,
	getQrcode,
	points2Ticket,
	rank2Tickets,
	getPointsByDailySignUp
}