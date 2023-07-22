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

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const startRequest = error.config
    if (error.response.status == 401 && error.config && !error.config.isRetry) {
        startRequest.isRetry = true
        try {
            const res = await axios.get(`${URL_API}/refresh`, {withCredentials: true})
            localStorage.setItem('token', res.data.accessToken)
            return api.request(res)
        } catch (e) {
            console.log(e)
        }
    }
    throw error;
})

export default api