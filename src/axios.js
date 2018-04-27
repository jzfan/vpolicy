import axios from 'axios'
import env from '../.env.js'
axios.defaults.baseURL = env.API_HOST

export default axios