// src/api.js
import axios from "axios";
// Django backend base URL (Render deployment)
export const API = axios.create({
  baseURL: "https://ecommerce-backend-django-59rd.onrender.com/api/",
});

export const AUTH = axios.create({
  baseURL: "https://ecommerce-backend-django-59rd.onrender.com/api/auth/",
});

// Automatically attach token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});
