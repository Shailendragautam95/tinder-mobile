import axios from "axios";

const API_BASE_URL = "http://172.25.91.121:8000/api"; 
// Replace with your LOCAL IP (not localhost)
// Keep `/api` because Laravel routes/api.php prefix

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Optional: set token automatically (later with auth)
axiosClient.interceptors.request.use((config) => {
  // Add token later here
  return config;
});

export default axiosClient;
