import { sampleCategoryGroups } from "../data/testCategories";
import { parseLearningURL } from "../utils/parseURL";

describe("parseLearningURL", () => {
  it("should parse a valid learning URL", () => {
    const url = "/learning/web-development/frontend";
    const result = parseLearningURL(sampleCategoryGroups, url);
    expect(result.selectedCategoryGroup?.id).toBe(1);
    expect(result.selectedCategory?.category_group_id).toBe(1);
  });

  it("should return null for an invalid category group URL", () => {
    const url = "/learning/invalid";
    const result = parseLearningURL(sampleCategoryGroups, url);
    expect(result.selectedCategory).toBeNull();
    expect(result.selectedCategory).toBeNull();
  });

  it("should return null for an invalid category URL", () => {
    const url = "/learning/web-development/invalid";
    const result = parseLearningURL(sampleCategoryGroups, url);
    expect(result.selectedCategoryGroup?.id).toBe(1);
    expect(result.selectedCategory).toBeNull();
  });

  it("should return null for a non-learning URL", () => {
    const url = "/not-learning/category-group/category";
    const result = parseLearningURL(sampleCategoryGroups, url);
    expect(result.selectedCategoryGroup).toBeNull();
    expect(result.selectedCategory).toBeNull();
  });
});
