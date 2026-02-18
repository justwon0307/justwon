import { refreshTokenAPI } from "@features/auth/refresh-token";
import { api } from "@shared/api";

describe("refreshTokenAPI", () => {
  it("should return a new access token", async () => {
    vi.spyOn(api, "post").mockResolvedValue({ data: "new-access-token" });

    const result = await refreshTokenAPI();

    expect(result).toEqual("new-access-token");
  });
});
