import axios from "axios";

import { APIError } from "./error";

const BASE_URL = import.meta.env.VITE_API_URL;

function buildInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    timeout: 5000, // 5 seconds
    headers: {
      "Content-Type": "application/json",
      "X-JUSTWON-CLIENT": "justwon-studio",
    },
  });

  // 응답 에러를 정규화
  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(APIError.fromUnknown(error)),
  );
  return instance;
}

export const api = buildInstance();
