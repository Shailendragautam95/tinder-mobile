import axios from "axios";

const client = axios.create({
  baseURL: "http://10.0.2.2:8000/api", // Android Emulator URL
  timeout: 10000,
});

export default client;
