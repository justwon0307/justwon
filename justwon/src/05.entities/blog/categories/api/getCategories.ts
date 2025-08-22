import "server-only";

import { CATEGORY_CACHE_TTL, CATEGORY_LIST_CACHE_TAG } from "../configs/cache";
import { CategoryGroupType } from "../models/category-group";
import { BackendAPIError } from "@shared/configs/backend";
import { fetchWithCache } from "@shared/lib/fetch";

export async function getCategories(): Promise<CategoryGroupType[]> {
  const result = await fetchWithCache<CategoryGroupType[]>(`/v1/blog/groups/`, {
    ttl: CATEGORY_CACHE_TTL,
    tags: [CATEGORY_LIST_CACHE_TAG],
  });

  if (result.status === "SUCCESS") {
    // 데이터가 리스트가 아니면, 오류 처리
    if (!Array.isArray(result.data)) {
      throw new BackendAPIError("카테고리 데이터가 올바르지 않습니다.");
    }

    return result.data;
  }

  throw new BackendAPIError(result.message);
}
