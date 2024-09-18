import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // URL de tu API en Django

// Crear una instancia de Axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token JWT en cada solicitud
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token).access}`;
  }
  return config;
});

export default axiosInstance;
