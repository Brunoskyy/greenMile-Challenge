import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/users'
})

export const mapsApi = axios.create({
    baseURL: 'https://app.geocodeapi.io/api/v1/search?apikey=5969a0e0-e39e-11ea-977b-138842b7205d&text='
})

export default api;