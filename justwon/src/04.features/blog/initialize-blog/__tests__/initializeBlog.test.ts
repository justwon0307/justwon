import {
  initializeBlog,
  sampleBlogInitializerResponse,
} from "@features/blog/initialize-blog";

describe("initializeBlog", () => {
  it("should initialize the blog with the correct data", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleBlogInitializerResponse),
    });

    const response = await initializeBlog();

    expect(response).toEqual(sampleBlogInitializerResponse);
  });

  it("should throw an error if the fetch fails with error message", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      text: jest.fn().mockResolvedValue("Bad Request"),
    });

    await expect(initializeBlog()).rejects.toThrow(
      "블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다."
    );
  });

  it("should handle network errors gracefully", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network Error"));

    await expect(initializeBlog()).rejects.toThrow(
      "블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다."
    );
  });
});
