import { LoginPage } from "@pages/login";
import { renderWithProviders } from "@test-utils/renderer";

describe("LoginPage: ui", () => {
  it("renders correctly", async () => {
    renderWithProviders(<LoginPage />);
  });
});
