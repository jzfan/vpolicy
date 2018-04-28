import axios from './axios'
import store from './store'
function authHeader() {
	let api_token = store.state.user.api_token
	return {
		headers: {Authorization: `Bearer ${api_token}`}
	}
}
function getPolicy(code, cb) {
	axios.get(`/policies/next?code=${code}`, authHeader())
		.then(res => {
			cb(res.data)
		})
}
function createPolicy(code, number, cb) {
	axios.post('/policies', {code: code, number: number}, authHeader())
		.then(res => {
			cb(res.data)
		})
}
function activePolicy(code, id, cb) {
	axios.post(`/policies/${id}/active`, {}, authHeader())
		.then(res => {
			cb(res.data)
		})
}
export {
	createPolicy,
	activePolicy,
	getPolicy
}