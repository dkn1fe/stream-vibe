import { getTokenFromLocalStorage } from "@/helpers/localStorage.helper";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000/auth/",
});

instance.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
