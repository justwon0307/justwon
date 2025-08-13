import axios from "axios";

import { BlogInitializerResponseType } from "../models/response";
import { APIError, APIResponseType } from "@shared/api/models";

/**
 * 블로그 초기화 데이터 조회
 *   - 관리자를 위한 데이터이므로, 절대 캐시해서는 안되고, 항상 최신 데이터를 가져온다.
 *   - 자동으로 토큰을 주입하여 요청하는 axios 인스턴스를 사용한다.
 */

export async function initializeBlogForAdmin(): Promise<
  APIResponseType<BlogInitializerResponseType>
> {
  try {
    const response = await axios.get("api/admin/blog/initialize/");

    if (response.status !== 200) {
      throw new APIError(
        response.data.message ||
          "블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다."
      );
    }

    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof APIError
        ? error.message
        : "알 수 없는 오류가 발생했습니다."
    );
  }
}
