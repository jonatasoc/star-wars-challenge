import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 15000,
});

export default api;
