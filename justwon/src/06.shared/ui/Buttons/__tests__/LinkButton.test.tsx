import { LinkButton } from "@shared/ui/Buttons";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Buttons");

describe("LinkButton", () => {
  it("renders correctly", () => {
    const { getByRole } = renderWithProviders(
      <LinkButton href="/test">Test</LinkButton>
    );
    expect(getByRole("link")).toHaveTextContent("Test");
  });
});
