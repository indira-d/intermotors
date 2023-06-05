import axios from 'axios'

// const BASE_URL = 'http://3.68.70.11:9000/api/v1'

const BASE_URL = 'https://api.inter-motors.co/api/v1'

export const publicRequest = axios.create({
	baseURL: BASE_URL
})