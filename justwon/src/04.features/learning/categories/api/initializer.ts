import { LearningCategoryGroupType } from "@entities/learning";
import { BASE_URL } from "@shared/api/config";
import { APIResponseType } from "@shared/api/models";

/**
 * Learning 페이지 초기화 함수
 *   - 카테고리, 태그 등을 불러온다
 */

export async function initializeLearning(): Promise<
  APIResponseType<LearningCategoryGroupType[]>
> {
  // 서버에 캐시를 사용한다
  // 해당 정보가 변경될 일이 많이 없으니, 캐시 만료 시간을 길게 설정한다

  try {
    const response = await fetch(`${BASE_URL}api/v1/learning/`, {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 3, // 3시간
        tags: ["learning-initializer"],
      },
    });

    if (!response.ok) {
      return {
        message: "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.",
        status: "ERROR",
      };
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return {
        message: "데이터 형식이 올바르지 않습니다.",
        status: "ERROR",
      };
    }

    if (data.length === 0) {
      return {
        message: "카테고리 데이터가 없습니다.",
        status: "ERROR",
      };
    }

    return {
      data: data as LearningCategoryGroupType[],
      status: "SUCCESS",
    };
  } catch {
    return {
      message: "서버와의 연결에 실패했습니다. 나중에 다시 시도해주세요.",
      status: "ERROR",
    };
  }
}
