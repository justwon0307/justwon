import { fireEvent } from "@testing-library/react";

import { ErrorFallback } from "@widgets/error";
import { renderWithProviders } from "@test-utils/renderer";

describe("ErrorFallback", () => {
  it("renders basic error and handles refresh correctly", () => {
    const { getByText } = renderWithProviders(
      <ErrorFallback message="An error occurred" />
    );

    fireEvent.click(getByText("새로고침"));
  });

  it("renders with custom reload text", () => {
    const { getByText } = renderWithProviders(
      <ErrorFallback message="An error occurred" reloadText="Reload Now" />
    );

    expect(getByText("Reload Now")).toBeInTheDocument();
  });
});
