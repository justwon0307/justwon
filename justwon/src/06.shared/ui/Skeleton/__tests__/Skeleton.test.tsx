import { Skeleton } from "@shared/ui/Skeleton";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Skeleton");

describe("Skeleton", () => {
  it("renders the default skeleton component", () => {
    const { getByTestId } = renderWithProviders(<Skeleton />);

    expect(getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders skeleton with custom width, height, and border radius (strings)", () => {
    const { getByTestId } = renderWithProviders(
      <Skeleton $width="200px" $height="100px" $borderRadius="8px" />
    );

    const skeleton = getByTestId("skeleton");
    expect(skeleton).toHaveStyle("width: 200px");
    expect(skeleton).toHaveStyle("height: 100px");
  });

  it("renders skeleton with custom width, height, and border radius (numbers)", () => {
    const { getByTestId } = renderWithProviders(
      <Skeleton $width={200} $height={100} $borderRadius={8} />
    );

    const skeleton = getByTestId("skeleton");
    expect(skeleton).toHaveStyle("width: 200px");
    expect(skeleton).toHaveStyle("height: 100px");
  });
});
