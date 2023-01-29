import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.JSON_API_URL,
});

export default axiosInstance;
