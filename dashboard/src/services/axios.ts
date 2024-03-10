import axios, { AxiosError } from 'axios'

const _axios = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json'
  }
})

_axios.interceptors.request.use(
  (config) => {
    if (config.headers) {
      /* empty */
    }
    return config
  },
  (e) => {
    return Promise.reject(e)
  }
)
_axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const data: any = (error as AxiosError).response?.data
    console.log('🚀 ~ data:', data.message)
    return Promise.reject(data)
  }
)
export { _axios }
