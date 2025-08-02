import { auth } from "@clerk/nextjs/server";
import axios from "axios";

/**
 * 해당 App에서는 axios를 개인화된 요청이 필요할 때만 사용한다.
 *   - 예시: Bookmarks, 댓글 목록 등
 *   - 이외의 경우는 fetch를 사용한다.
 */

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
