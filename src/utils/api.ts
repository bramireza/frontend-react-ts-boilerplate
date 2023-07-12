import axios from "axios";
import { config } from "../configs";

const api = axios.create({
  baseURL: config.API_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

export default api;
