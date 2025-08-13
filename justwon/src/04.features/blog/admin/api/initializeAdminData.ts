import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { BlogInitializerResponseType } from "../models/response";
import { APIError } from "@shared/api/models";

/**
 * 블로그 초기화 데이터 조회
 *   - 관리자를 위한 데이터이므로, 절대 캐시해서는 안되고, 항상 최신 데이터를 가져온다.
 *   - 자동으로 토큰을 주입하여 요청하는 axios 인스턴스를 사용한다.
 */

async function initializeBlogForAdmin(): Promise<BlogInitializerResponseType> {
  const response = await axios.get("api/admin/blog/initialize/");

  return response.data;
}

export function useAdminBlogData() {
  return useQuery<BlogInitializerResponseType, APIError>({
    queryKey: ["admin-blog-data"],
    queryFn: initializeBlogForAdmin,
  });
}
