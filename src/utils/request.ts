import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 50000,
})

request.interceptors.request.use((config) => {
  return config
}, (error) => {
  console.error(error)
})

request.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  console.error(error)
})

export default request
