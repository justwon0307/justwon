import { LoginPage, metadata } from "@pages/login";
import { renderWithProviders } from "@test-utils/renderer";

describe("LoginPage", () => {
  it("renders without crashing", () => {
    const { getByText } = renderWithProviders(<LoginPage />);
    expect(getByText("로그인 페이지")).toBeInTheDocument();
  });

  it("has correct metadata", () => {
    expect(metadata.title).toBe("로그인 | JustWon");
  });
});
