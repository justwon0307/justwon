import "server-only";
import { notFound } from "next/navigation";

import {
  CATEGORY_CACHE_TTL,
  CATEGORY_GROUP_DETAILS_CACHE_TAG,
} from "../configs/cache";
import { CategoryGroupDetailsType } from "../models/category-group";
import { BackendAPIError } from "@shared/configs/backend";
import { fetchWithCache } from "@shared/lib/fetch";

/**
 * 카테고리 그룹 상세 조회 (Server에서 실행)
 *   - 카테고리 그룹의 상세 정보를 불러온다
 */

export async function getCategoryGroupDetails(
  slug: string
): Promise<CategoryGroupDetailsType> {
  const result = await fetchWithCache<CategoryGroupDetailsType>(
    `/v1/blog/groups/${slug}/`,
    {
      ttl: CATEGORY_CACHE_TTL,
      tags: [CATEGORY_GROUP_DETAILS_CACHE_TAG(slug)],
    }
  );

  if (result.status === "SUCCESS") {
    return result.data;
  }

  if (result.status === "NOT_FOUND") {
    notFound();
  }

  throw new BackendAPIError(result.message);
}
