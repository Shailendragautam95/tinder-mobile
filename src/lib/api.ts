import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.25.91.121:8000/api",
  timeout: 5000,
});
