import "server-only";
import { notFound } from "next/navigation";

import {
  CATEGORY_CACHE_TTL,
  CATEGORY_DETAILS_CACHE_TAG,
} from "../configs/cache";
import { CategoryDetailsType } from "../models/category";
import { BackendAPIError } from "@shared/configs/backend";
import { fetchWithCache } from "@shared/lib/fetch";

/**
 * 카테고리 상세 조회 (Server에서 실행)
 *   - 카테고리의 상세 정보를 불러온다
 */

export async function getCategoryDetails(
  slug: string
): Promise<CategoryDetailsType> {
  const result = await fetchWithCache<CategoryDetailsType>(
    `/v1/blog/categories/${slug}/`,
    {
      ttl: CATEGORY_CACHE_TTL,
      tags: [CATEGORY_DETAILS_CACHE_TAG(slug)],
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
