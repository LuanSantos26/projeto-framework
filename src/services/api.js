import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost8080",
});
export default api;
