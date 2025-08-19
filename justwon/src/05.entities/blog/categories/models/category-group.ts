import { CategoryType } from "./category";

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
