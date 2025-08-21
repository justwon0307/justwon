import { LandingPage } from "@pages/home";
import { renderWithProviders } from "@test-utils/renderer";

describe("LandingPage", () => {
  it("renders without crashing", () => {
    const { getByText } = renderWithProviders(<LandingPage />);
    expect(getByText("Welcome to JustWon")).toBeInTheDocument();
    expect(getByText("Your journey starts here.")).toBeInTheDocument();
  });
});
