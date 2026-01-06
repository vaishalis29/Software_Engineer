import axios from "axios";

const API = axios.create({
  baseURL: "https://software-engineer-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});


// 🔐 TOKEN AUTO ATTACH
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
