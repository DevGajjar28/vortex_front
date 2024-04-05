import axios from "axios";
// import { signOut } from "../pages/Registration";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";

const api = axios.create({
  baseURL: process.env.DJANGO_BACKEND_URL,
});

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh_token = localStorage.getItem("refresh");
      if (refresh_token) {
        try {
          const res = await api.post("/api/login/refresh/", { refresh: refresh_token });
          localStorage.setItem("token", res?.access);
          localStorage.setItem("refresh", res?.refresh);
          api.defaults.headers["Authorization"] = `Bearer ${res.data.access}`;
          originalRequest.headers["Authorization"] = `Bearer ${res.data.access}`;
          return api(originalRequest);
        } catch (refreshError) {
          console.log("Token refresh failed:", refreshError);
          // signOut();  Log out the user if token refresh fails
          // Optionally, you can clear localStorage or redirect to login
        }
      } else {
        console.log("Refresh token not found");
        // signOut();  Log out the user if refresh token is missing
        // Optionally, you can clear localStorage or redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default api;
