import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/wordpress/wp-json/api/',
});

export default api;
