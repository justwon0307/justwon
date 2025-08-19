import axios from "axios";

import { injectToken } from "./utils/tokenInjector";
import { BACKEND_API_URL } from "@shared/configs/backend";

const axiosInstance = axios.create({
  baseURL: BACKEND_API_URL,
  timeout: 2000, // 2 seconds
  headers: {
    "Content-Type": "application/json",
    "X-JustWon-Client": "justwon-web",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(injectToken);

export { axiosInstance };
