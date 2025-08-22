import { sampleCategoryGroupDetails } from "@entities/blog/categories";
import { getCategoryGroupDetails } from "@entities/blog/categories/server";
import * as FetchAPI from "@shared/lib/fetch";

describe("getCategoryGroupDetails", () => {
  it("should return category group details", async () => {
    jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "SUCCESS",
      data: sampleCategoryGroupDetails,
    });

    const categoryGroupDetails = await getCategoryGroupDetails("sample-slug");

    expect(categoryGroupDetails).toEqual(sampleCategoryGroupDetails);
  });

  it("should throw an error if the fetch fails", async () => {
    const mockFetch = jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "ERROR",
      message: "Fetch failed",
    });

    await expect(getCategoryGroupDetails("sample-slug")).rejects.toThrow(
      "Fetch failed"
    );
    expect(mockFetch).toHaveBeenCalled();
  });

  it("should call notFound if the category group is not found", async () => {
    const mockFetch = jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "NOT_FOUND",
      message: "Category group not found",
    });

    await expect(
      getCategoryGroupDetails("non-existent-slug")
    ).rejects.toThrow();
    expect(mockFetch).toHaveBeenCalled();
  });
});
