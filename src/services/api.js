import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
//URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=9779d0001c7c70d9533b349ebcc3ed04&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export default api;
