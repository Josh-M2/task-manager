import axios from "axios";

const beURL = `${import.meta.env.VITE_BE_URL}/api`;

const axiosInstance = axios.create({
  baseURL: beURL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
