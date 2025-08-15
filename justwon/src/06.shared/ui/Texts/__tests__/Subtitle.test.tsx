import { Subtitle } from "@shared/ui/Texts";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Texts");

describe("Subtitle", () => {
  it("renders the subtitle with the correct text", () => {
    const { getByText } = renderWithProviders(
      <Subtitle title="Test Subtitle" />
    );
    expect(getByText("Test Subtitle")).toBeInTheDocument();
  });
});
