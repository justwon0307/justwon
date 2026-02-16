import { LoadingWidget } from "@widgets/loading";
import { renderWithProviders } from "@tests/render";

describe("LoadingWidget", () => {
  it("renders the loading spinner", () => {
    const { getByText } = renderWithProviders(<LoadingWidget />);
    const spinner = getByText("Loading...");
    expect(spinner).toBeTruthy();
  });
});
