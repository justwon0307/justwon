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

export type AdminCategoryGroupType = CategoryGroupType & {
  is_active: boolean;
};

/**
 * 카테고리 그룹 상세 조회 시 사용될 타입
 */

export type CategoryGroupDetailsType = CategoryGroupType &
  Pick<CategoryGroupFields, "kor_name" | "description">;

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

export type AdminCategoryType = CategoryType & {
  is_active: boolean;
};

/**
 * 카테고리 상세 조회 시 사용될 타입
 */

export type CategoryDetailsType = CategoryType &
  Pick<CategoryFields, "kor_name" | "description">; // & {
// posts: PostType[]; // 카테고리 하위의 포스트들
//};
