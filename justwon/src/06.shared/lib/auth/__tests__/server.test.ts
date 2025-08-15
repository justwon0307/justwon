import { getToken, isLoggedIn } from "@shared/lib/auth";

jest.unmock("@shared/lib/auth");
jest.mock("@clerk/nextjs/server", () => ({
  auth: jest.fn(() => ({
    getToken: jest.fn().mockResolvedValue("mocked-token"),
    userId: "mocked-user-id",
  })),
}));

describe("Auth Module", () => {
  it("should return a token", async () => {
    const token = await getToken();
    expect(token).toBe("mocked-token");
  });

  it("should confirm user is logged in", async () => {
    const loggedIn = await isLoggedIn();
    expect(loggedIn).toBe(true);
  });
});
