import { BlogInitializerResponseType } from "../models/response";
import { BASE_URL } from "@shared/api/config";
import { APIError, APIResponseType } from "@shared/api/models";

/**
 * 블로그 초기화 데이터 조회 (Server에서 실행)
 *  - 카테고리 그룹, 포스트 타입, 시리즈, 태그 등을 불러온다
 */

async function fetchData(): Promise<
  APIResponseType<BlogInitializerResponseType>
> {
  try {
    const response = await fetch(`${BASE_URL}api/v1/blog/initialize/`, {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 3, // 3시간
        tags: ["blog-initializer"], // 캐시 무효화 태그
      },
    });

    if (!response.ok) {
      return {
        message: "블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다.",
        status: "ERROR",
      };
    }

    const data = await response.json();

    return {
      data: data as BlogInitializerResponseType,
      status: "SUCCESS",
    };
  } catch {
    return {
      message: "블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다.",
      status: "ERROR",
    };
  }
}

export async function initializeBlog(): Promise<BlogInitializerResponseType> {
  const result = await fetchData();

  if (result.status === "ERROR") {
    throw new APIError(result.message);
  }

  return result.data;
}
