import { getAllCategories, sampleCategoryGroups } from "@entities/learning";

describe("getAllCategories", () => {
  it("should fetch correctly", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleCategoryGroups),
    });

    const categories = await getAllCategories();
    expect(categories).toEqual(sampleCategoryGroups);
  });

  it("should handle fetch error", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValue({ message: "Bad request" }),
    });

    await expect(getAllCategories()).rejects.toThrow(
      "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요."
    );
  });

  it("should handle non-array response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ message: "Not an array" }),
    });

    await expect(getAllCategories()).rejects.toThrow(
      "데이터 형식이 올바르지 않습니다."
    );
  });

  it("should handle empty data response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([]),
    });

    await expect(getAllCategories()).rejects.toThrow(
      "카테고리 데이터가 없습니다."
    );
  });

  it("should handle unknown error", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    await expect(getAllCategories()).rejects.toThrow(
      "서버와의 연결에 실패했습니다. 나중에 다시 시도해주세요."
    );
  });
});
