import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: import.meta.env.VITE_KEY,
        language: "pt-BR",
        page: 1,
      }
});

export default api;