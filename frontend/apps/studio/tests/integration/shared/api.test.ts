import { AxiosError, AxiosHeaders } from "axios";

import { api, isAPIError, APIError } from "@shared/api";

/**
 * axios.create()가 만든 실제 인스턴스(api)의 adapter만 교체한다.
 * 이렇게 하면 interceptors는 그대로 동작하면서 HTTP 요청만 가로챌 수 있다.
 */
function mockAdapter(url: string | undefined) {
  const headers = new AxiosHeaders();

  if (url === "/success-test/") {
    return Promise.resolve({
      data: "success",
      status: 200,
      statusText: "OK",
      headers,
      config: { headers },
    });
  }

  if (url === "/axios-error-test/") {
    const error = new AxiosError(
      "Not found",
      "ERR_BAD_REQUEST",
      undefined,
      undefined,
      {
        data: { message: "Not found", status: "NOT_FOUND" },
        status: 404,
        statusText: "Not Found",
        headers,
        config: { headers },
      } as never,
    );
    return Promise.reject(error);
  }

  if (url === "/axios-error-no-message/") {
    const error = new AxiosError(
      "Bad request",
      "ERR_BAD_REQUEST",
      undefined,
      undefined,
      {
        status: 400,
        statusText: "Bad Request",
        headers,
        config: { headers },
      } as never,
    );
    return Promise.reject(error);
  }

  if (url === "/api-error-test/") {
    const apiError = new APIError("Not found", "NOT_FOUND");
    return Promise.reject(apiError);
  }

  return Promise.reject(new Error("Unknown endpoint"));
}

function testGET(url: string) {
  return api.get(url);
}

describe("API Client", () => {
  beforeAll(() => {
    api.defaults.adapter = (config) => mockAdapter(config.url);
  });

  it("should return successful response correctly", async () => {
    const res = await testGET("/success-test/");
    expect(res.data).toBe("success");
  });

  it("should normalize AxiosError into APIError (with details)", async () => {
    try {
      await testGET("/axios-error-test/");
    } catch (e) {
      expect(isAPIError(e)).toBe(true);
      if (isAPIError(e)) {
        expect(e).toBeInstanceOf(APIError);
        expect(e.message).toBe("Not found");
        expect(e.status).toBe("NOT_FOUND");
      }
    }
  });

  it("should normalize AxiosError into APIError (no details)", async () => {
    // 예상대로 값이 던져지는지, 그리고 isAPIError 타입가드가 제대로 작동하는지
    try {
      await testGET("/axios-error-no-message/");
    } catch (e) {
      expect(isAPIError(e)).toBe(true);
      if (isAPIError(e)) {
        expect(e).toBeInstanceOf(APIError);
        expect(e.message).toBe("알 수 없는 에러가 발생했습니다.");
        expect(e.status).toBe("ERROR");
      }
    }
  });

  it("should handle normal APIError without alteration", async () => {
    try {
      await testGET("/api-error-test/");
    } catch (e) {
      // 이미 APIError로 변환된 에러는 그대로 반환되어야 한다.
      const apiError = APIError.fromUnknown(e);
      expect(apiError).toBeInstanceOf(APIError);
      expect(apiError.message).toBe("Not found");
      expect(apiError.status).toBe("NOT_FOUND");
    }
  });

  it("should normalize unknown error into APIError with fallback message", async () => {
    try {
      await testGET("/unknown-endpoint/");
    } catch (e) {
      expect(isAPIError(e)).toBe(true);
      if (isAPIError(e)) {
        expect(e).toBeInstanceOf(APIError);
        expect(e.message).toBe("알 수 없는 에러가 발생했습니다.");
        expect(e.status).toBe("ERROR");
      }
    }
  });
});
