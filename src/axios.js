import axios from 'axios'
import { API_HOST } from '../env.js'
axios.defaults.baseURL = API_HOST

export default axios