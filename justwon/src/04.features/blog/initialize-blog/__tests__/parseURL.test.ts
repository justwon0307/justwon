import { parseBlogURL } from "../utils/parseURL";
import { sampleCategoryGroups } from "@entities/blog/categories";

describe("parseBlogURL", () => {
  it("should parse a valid blog URL", () => {
    const url = "/blog/web-development/frontend";
    const result = parseBlogURL(sampleCategoryGroups, url);
    expect(result.selectedCategoryGroup?.slug).toBe("web-development");
    expect(result.selectedCategory?.group.slug).toBe("web-development");
  });

  it("should return null for an invalid category group URL", () => {
    const url = "/blog/invalid";
    const result = parseBlogURL(sampleCategoryGroups, url);
    expect(result.selectedCategory).toBeNull();
    expect(result.selectedCategory).toBeNull();
  });

  it("should return null for an invalid category URL", () => {
    const url = "/blog/web-development/invalid";
    const result = parseBlogURL(sampleCategoryGroups, url);
    expect(result.selectedCategoryGroup?.slug).toBe("web-development");
    expect(result.selectedCategory).toBeNull();
  });

  it("should return null for a non-blog URL", () => {
    const url = "/not-blog/category-group/category";
    const result = parseBlogURL(sampleCategoryGroups, url);
    expect(result.selectedCategoryGroup).toBeNull();
    expect(result.selectedCategory).toBeNull();
  });
});
