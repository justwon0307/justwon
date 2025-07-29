import { RegisterPage } from "@pages/register";
import { renderWithProviders } from "@test-utils/renderer";

describe("RegisterPage: ui", () => {
  it("renders correctly", async () => {
    renderWithProviders(<RegisterPage />);
  });
});
