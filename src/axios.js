import axios from 'axios'
import env from '../.env.js'
if (window.location.href.startsWith('http://192')) {
	axios.defaults.baseURL = env.DEV_API_HOST
} else {
	axios.defaults.baseURL = env.PRO_API_HOST
}

export default axios