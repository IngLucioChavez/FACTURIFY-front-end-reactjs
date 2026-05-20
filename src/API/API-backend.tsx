import axios from "axios"

const BASE_URL = import.meta.env.VITE_BACK_LARAVEL

export const APIBackEnd = axios.create({
    baseURL: `${BASE_URL}`
});
