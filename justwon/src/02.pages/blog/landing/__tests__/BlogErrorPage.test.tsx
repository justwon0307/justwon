import { fireEvent } from "@testing-library/react";

import { BlogErrorPage } from "@pages/blog/landing";
import { renderWithProviders } from "@test-utils/renderer";

describe("BlogErrorPage", () => {
  it("renders correctly", () => {
    const error = new Error("Blog Error");
    const reset = jest.fn();

    const { getByText } = renderWithProviders(
      <BlogErrorPage error={error} reset={reset} />
    );

    expect(getByText("Blog Error")).toBeInTheDocument();

    fireEvent.click(getByText("다시 시도하기"));
  });
});
