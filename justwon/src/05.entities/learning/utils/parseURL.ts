import {
  LearningCategoryGroupType,
  LearningCategoryType,
} from "../models/categories";

type LearningURLParserReturnType = {
  selectedCategoryGroup: LearningCategoryGroupType | null;
  selectedCategory: LearningCategoryType | null;
};

export function parseLearningURL(
  categoryGroups: LearningCategoryGroupType[],
  pathname: string
): LearningURLParserReturnType {
  if (!pathname.startsWith("/learning/")) {
    return {
      selectedCategoryGroup: null,
      selectedCategory: null,
    };
  }

  const catGrpSlug = pathname.split("/")[2];
  const catSlug = pathname.split("/")[3];

  let selectedCategoryGroup: LearningCategoryGroupType | null = null;
  let selectedCategory: LearningCategoryType | null = null;

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
