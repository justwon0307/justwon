import { DefaultNotFoundPage } from "@pages/not-found";
import { renderWithProviders } from "@test-utils/renderer";

describe("DefaultNotFoundPage", () => {
  it("should render the not found page with a message and link", () => {
    const { getByText } = renderWithProviders(<DefaultNotFoundPage />);

    expect(getByText("Page Not Found")).toBeInTheDocument();
    expect(getByText("Sorry, the page you are looking for does not exist.")).toBeInTheDocument();
    expect(getByText("Go back to Home")).toBeInTheDocument();
  });
});
