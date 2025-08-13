import axios from "axios";

import {
  initializeBlogForAdmin,
  sampleBlogInitializerResponse,
} from "@features/blog/initialize-blog";

describe("initializeBlogForAdmin", () => {
  it("should initialize the blog with the correct data", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      status: 200,
      data: sampleBlogInitializerResponse,
    });

    const response = await initializeBlogForAdmin();

    expect(response).toEqual(sampleBlogInitializerResponse);
  });

  it("should throw error on non-200 response", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      status: 400,
      data: "Bad Request",
    });

    await expect(initializeBlogForAdmin()).rejects.toThrow(
      "블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다."
    );
  });

  it("should throw error on network failure", async () => {
    jest.spyOn(axios, "get").mockRejectedValue(new Error("Network Error"));

    await expect(initializeBlogForAdmin()).rejects.toThrow(
      "알 수 없는 오류가 발생했습니다."
    );
  });
});
