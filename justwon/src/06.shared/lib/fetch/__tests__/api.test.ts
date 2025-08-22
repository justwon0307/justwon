import { fetchWithCache } from "@shared/lib/fetch";

type MockDataType = {
  id: number;
};

jest.unmock("@shared/lib/fetch");

describe("fetchWithCache", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data on successful fetch", async () => {
    const mockResponse: MockDataType = { id: 1 };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchWithCache<MockDataType>("/test");

    expect(result).toEqual({
      data: mockResponse,
      status: "SUCCESS",
    });
  });

  it("should handle 404 response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    const result = await fetchWithCache<MockDataType>("/test");

    expect(result).toEqual({
      message: "",
      status: "NOT_FOUND",
    });
  });

  it("should handle 401 response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
    });

    const result = await fetchWithCache<MockDataType>("/test");

    expect(result).toEqual({
      message: "",
      status: "UNAUTHORIZED",
    });
  });

  it("should handle other errors (with statusText)", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const result = await fetchWithCache<MockDataType>("/test");

    expect(result).toEqual({
      message: "Internal Server Error",
      status: "ERROR",
    });
  });

  it("should handle other errors (without statusText)", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "",
    });

    const result = await fetchWithCache<MockDataType>("/test");

    expect(result).toEqual({
      message: "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.",
      status: "ERROR",
    });
  });

  it("should handle network errors", async () => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network Error"));

    const result = await fetchWithCache<MockDataType>("/test");

    expect(result).toEqual({
      message: "서버와의 연결에 실패했습니다. 나중에 다시 시도해주세요.",
      status: "ERROR",
    });
  });
});
