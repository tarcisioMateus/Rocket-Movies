import axios from "axios"

export const api = axios.create(
  {
    baseURL: 'https://rocketmovies-api-zev5.onrender.com'
  }
)