import { FetchCacheConfigType } from "./models/cache";
import {
  BACKEND_API_URL,
  BackendAPIResponseType,
} from "@shared/configs/backend";

export async function fetchWithCache<T>(
  url: string,
  config?: FetchCacheConfigType
): Promise<BackendAPIResponseType<T>> {
  try {
    const cacheConfig = config || {};
    const response = await fetch(`${BACKEND_API_URL}${url}`, {
      cache: "force-cache",
      next: {
        revalidate: cacheConfig.ttl,
        tags: cacheConfig.tags,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return {
          message: "",
          status: "NOT_FOUND",
        };
      }

      if (response.status === 401) {
        return {
          message: "",
          status: "UNAUTHORIZED",
        };
      }

      return {
        message:
          response.statusText ||
          "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.",
        status: "ERROR",
      };
    }

    const data = await response.json();

    return {
      data: data as T,
      status: "SUCCESS",
    };
  } catch (error) {
    console.warn("Error fetching data:", error);

    return {
      message: "서버와의 연결에 실패했습니다. 나중에 다시 시도해주세요.",
      status: "ERROR",
    };
  }
}
