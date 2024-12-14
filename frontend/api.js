import axios from 'axios';

const api = axios.create({
  baseURL: 'https://digital-amilahara-nf42.vercel.app', // Replace with your backend base URL
  // baseURL: 'http://localhost:3000', // Replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers here
  },
});

api.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    // Handle the response error
    return Promise.reject(error);
  }
);

export default api;
