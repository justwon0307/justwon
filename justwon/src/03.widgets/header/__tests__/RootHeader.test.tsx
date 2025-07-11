import { RootHeader } from "@widgets/header";
import { renderWithProviders } from "@test-utils/renderer";

describe("RootHeader", () => {
  it("should render the header with links", () => {
    const { getByText } = renderWithProviders(<RootHeader />);

    expect(getByText("JustWon")).toBeInTheDocument();
    expect(getByText("Projects")).toBeInTheDocument();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Study")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });
});
