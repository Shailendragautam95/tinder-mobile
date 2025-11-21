import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://172.25.91.121:8000/api", // your backend IP
  timeout: 5000,
});

export default axiosClient;
