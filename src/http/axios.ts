import axios from 'axios'

export const URL_API = 'http://localhost:5800/quiz'

const api = axios.create({
    withCredentials: true,
    baseURL: URL_API
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default api