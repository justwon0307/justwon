import { CategoryGroupType, CategoryType } from "../models/categories";

type BlogURLParserReturnType = {
  selectedCategoryGroup: CategoryGroupType | null;
  selectedCategory: CategoryType | null;
};

export function parseBlogURL(
  categoryGroups: CategoryGroupType[],
  pathname: string
): BlogURLParserReturnType {
  if (!pathname.startsWith("/blog/")) {
    return {
      selectedCategoryGroup: null,
      selectedCategory: null,
    };
  }

  const catGrpSlug = pathname.split("/")[2];
  const catSlug = pathname.split("/")[3];

  let selectedCategoryGroup: CategoryGroupType | null = null;
  let selectedCategory: CategoryType | null = null;

  if (catGrpSlug) {
    selectedCategoryGroup =
      categoryGroups.find((group) => group.slug === catGrpSlug) ?? null;

    if (catSlug) {
      selectedCategory =
        selectedCategoryGroup?.categories.find(
          (category) => category.slug === catSlug
        ) ?? null;
    }
  }

  return {
    selectedCategoryGroup,
    selectedCategory,
  };
}
