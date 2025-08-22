import { sampleCategoryDetails } from "@entities/blog/categories";
import { getCategoryDetails } from "@entities/blog/categories/server";
import * as FetchAPI from "@shared/lib/fetch";

describe("getCategoryDetails", () => {
  it("should return category details", async () => {
    jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "SUCCESS",
      data: sampleCategoryDetails,
    });

    const categoryDetails = await getCategoryDetails("sample-slug");

    expect(categoryDetails).toEqual(sampleCategoryDetails);
  });

  it("should throw an error if the fetch fails", async () => {
    const mockFetch = jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "ERROR",
      message: "Fetch failed",
    });

    await expect(getCategoryDetails("sample-slug")).rejects.toThrow("Fetch failed");
    expect(mockFetch).toHaveBeenCalled();
  });

  it("should call notFound if the category is not found", async () => {
    const mockFetch = jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "NOT_FOUND",
      message: "Category not found",
    });

    await expect(getCategoryDetails("non-existent-slug")).rejects.toThrow();
    expect(mockFetch).toHaveBeenCalled();
  });
});
