// src/services/index.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Set this in Vercel Env Variables
  withCredentials: true
});

export default api;
