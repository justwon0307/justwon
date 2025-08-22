import { sampleCategoryGroups } from "@entities/blog/categories";
import { getCategories } from "@entities/blog/categories/server";
import * as FetchAPI from "@shared/lib/fetch";

describe("getCategories", () => {
  it("should return category groups", async () => {
    const mockFetch = jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "SUCCESS",
      data: sampleCategoryGroups,
    });

    const categories = await getCategories();

    expect(mockFetch).toHaveBeenCalledWith("/v1/blog/groups/", {
      ttl: 300, // 테스트모드에선 5분으로 설정
      tags: ["blog-categories"],
    });
    expect(categories).toEqual(sampleCategoryGroups);
  });

  it("should throw an error if the response is not an array", async () => {
    const mockFetch = jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "SUCCESS",
      data: { invalid: "data" },
    });

    await expect(getCategories()).rejects.toThrow(
      "카테고리 데이터가 올바르지 않습니다."
    );
    expect(mockFetch).toHaveBeenCalled();
  });

  it("should throw an error if the fetch fails", async () => {
    const mockFetch = jest.spyOn(FetchAPI, "fetchWithCache").mockResolvedValue({
      status: "ERROR",
      message: "Fetch failed",
    });

    await expect(getCategories()).rejects.toThrow("Fetch failed");
    expect(mockFetch).toHaveBeenCalled();
  });
});
