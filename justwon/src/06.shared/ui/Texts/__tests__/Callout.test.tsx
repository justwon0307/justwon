import { Callout } from "@shared/ui/Texts";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Texts");

describe("Callout", () => {
  it("renders notion style callout", () => {
    const { getByText } = renderWithProviders(
      <Callout text="This is a callout" />
    );
    expect(getByText("This is a callout")).toBeInTheDocument();
  });

  it("renders github style callout", () => {
    const { getByText } = renderWithProviders(
      <Callout
        text="Custom icon and color"
        icon="info"
        color="#ff0000"
        style="github"
      />
    );
    expect(getByText("Custom icon and color")).toBeInTheDocument();
  });

  it("renders without custom color", () => {
    const { getByText } = renderWithProviders(
      <Callout text="Custom color callout" style="github" />
    );
    expect(getByText("Custom color callout")).toBeInTheDocument();
  });
});
