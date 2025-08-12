import { CategoryDetailsType } from "../models/categories";
import { BASE_URL } from "@shared/api/config";
import { APIError, APIResponseType } from "@shared/api/models";

/**
 * 카테고리 상세 조회 (Server에서 실행)
 *   - 카테고리의 상세 정보를 불러온다
 */

async function fetchData(
  slug: string
): Promise<APIResponseType<CategoryDetailsType>> {
  try {
    const response = await fetch(`${BASE_URL}api/v1/blog/categories/${slug}/`, {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 3, // 3시간
        tags: [`category-${slug}`], // 캐시 무효화 태그
      },
    });

    if (!response.ok) {
      return {
        message: "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.",
        status: "ERROR",
      };
    }

    const data = await response.json();

    return {
      data: data as CategoryDetailsType,
      status: "SUCCESS",
    };
  } catch {
    return {
      message: "서버와의 연결에 실패했습니다. 나중에 다시 시도해주세요.",
      status: "ERROR",
    };
  }
}

export async function getCategoryDetails(
  slug: string
): Promise<CategoryDetailsType> {
  const result = await fetchData(slug);

  if (result.status === "ERROR") {
    throw new APIError(result.message);
  }

  return result.data;
}
