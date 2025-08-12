import {
  getCategoryDetails,
  sampleCategoryDetails,
} from "@entities/blog/categories";

describe("getCategoryDetails", () => {
  it("should fetch category details correctly", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleCategoryDetails),
    });

    const details = await getCategoryDetails("test-category");
    expect(details).toEqual(sampleCategoryDetails);
  });

  it("should handle fetch error", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValue({ message: "Bad request" }),
    });

    await expect(getCategoryDetails("test-category")).rejects.toThrow(
      "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요."
    );
  });

  it("should handle unknown error", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    await expect(getCategoryDetails("test-category")).rejects.toThrow(
      "서버와의 연결에 실패했습니다. 나중에 다시 시도해주세요."
    );
  });
});
