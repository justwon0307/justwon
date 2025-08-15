import { Title } from "@shared/ui/Texts";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Texts");

describe("Title", () => {
  it("renders correctly with given title and icon", () => {
    const { getByText } = renderWithProviders(
      <Title title="Test Title" icon="sample" />
    );

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("sample-icon")).toBeInTheDocument();
  });
});
