import { Badge } from "@shared/ui/Badge";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Badge");

describe("Badge", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithProviders(<Badge label="Test Badge" />);
    expect(getByText("Test Badge")).toBeInTheDocument();
  });
});
