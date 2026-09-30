import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/users'
})

export const mapsApi = axios.create({
    baseURL: `https://app.geocodeapi.io/api/v1/search?apikey=${process.env.REACT_APP_GEOCODE_KEY}&text=`
})

export default api;