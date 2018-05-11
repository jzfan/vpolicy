import axios from './axios'
import store from './store'
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
function getSsqHistoryCountData(cb) {
	getWinNumberCountByCode('ssq', cb)
}
function getFc3dHistoryCountData(cb) {
	getWinNumberCountByCode('fc3d', cb)
}
function getWinNumberCountByCode(code, cb) {
	axios.get(`/lotteries/count?code=${code}`)
		.then(res => cb(res.data))
}
function getCurrentNotice(cb) {
	axios.get('/lotteries/current')
		.then(res => cb(res.data))
}
function getHistoryListByPage(code, cb) {
	axios.get(`/lotteries/${code}/history`)
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
	getSsqHistoryCountData,
	getFc3dHistoryCountData,
	getCurrentNotice,
	getHistoryListByPage
}