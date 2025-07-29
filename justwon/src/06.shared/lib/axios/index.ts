import { auth } from "@clerk/nextjs/server";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 2000, // 2 seconds
  headers: {
    "Content-Type": "application/json",
    "X-JustWon-Client": "justwon-web",
  },
  withCredentials: true,
});

instance.interceptors.request.use(async (request) => {
  const { getToken } = await auth();
  const token = await getToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export { instance as axiosInstance };
