import { APP_MODE } from "@shared/configs/app";

export const CATEGORY_CACHE_TTL =
  APP_MODE === "production" ? 60 * 60 * 3 : 5 * 60; // 개발 / 테스트면 5분, 프로덕션이면 3시간

export const CATEGORY_LIST_CACHE_TAG = "blog-categories";

export const CATEGORY_GROUP_DETAILS_CACHE_TAG = (slug: string) =>
  `blog-category-group-${slug}`;

export const CATEGORY_DETAILS_CACHE_TAG = (slug: string) =>
  `blog-category-${slug}`;
