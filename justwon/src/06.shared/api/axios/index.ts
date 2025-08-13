import axios from "axios";

import { getToken } from "@shared/lib/auth";

/**
 * 해당 App에서는 axios를 개인화된 요청이 필요할 때만 사용한다.
 *   - 예시: Bookmarks, 댓글 목록 등
 *   - 이외의 경우는 fetch를 사용한다.
 */

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.timeout = 2000; // 2 seconds
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-JustWon-Client"] = "justwon-web";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(async (request) => {
  const token = await getToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});
