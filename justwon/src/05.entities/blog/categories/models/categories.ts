// 1. 카테고리 그룹

type CategoryGroupFields = {
  id: number;
  name: string;
  kor_name: string;
  slug: string;
  icon: string;
  description: string;
};

/**
 * 카테고리 조회 시 사용될 reference를 위한 타입
 */

export type CategoryGroupRelatedType = Pick<
  CategoryGroupFields,
  "id" | "name" | "slug"
>;

/**
 * 카테고리 그룹 리스트 조회 시 사용될 타입
 */

export type CategoryGroupType = Pick<
  CategoryGroupFields,
  "id" | "name" | "slug" | "icon"
> & {
  categories: CategoryType[];
};

/**
 * 카테고리 그룹 상세 조회 시 사용될 타입
 */

export type CategoryGroupDetailsType = Pick<
  CategoryGroupFields,
  "id" | "name" | "kor_name" | "slug" | "icon" | "description"
> & {
  categories: CategoryType[];
};

// 2. 카테고리 그룹 하위의 카테고리

type CategoryFields = {
  id: number;
  name: string;
  kor_name: string;
  slug: string;
  icon: string;
  cover_image_url: string;
  description: string;
};

/**
 * 카테고리 목록 조회 시 사용될 타입 (카테고리 그룹의 하위 리스트로 조회된다)
 */

export type CategoryType = Pick<
  CategoryFields,
  "id" | "name" | "icon" | "slug" | "cover_image_url"
> & {
  num_posts: number;
  group: CategoryGroupRelatedType;
};

/**
 * 카테고리 상세 조회 시 사용될 타입
 */

export type CategoryDetailsType = Pick<
  CategoryFields,
  "id" | "name" | "kor_name" | "slug" | "icon" | "description"
> & {
  group: CategoryGroupRelatedType;
  // posts: PostType[]; // 카테고리 하위의 포스트들
};
