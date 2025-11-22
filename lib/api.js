import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend-render-url.onrender.com/api", // Replace with Render backend
});

export default api;
