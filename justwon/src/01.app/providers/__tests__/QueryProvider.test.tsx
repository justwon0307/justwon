import { render } from "@testing-library/react";

import { QueryProvider } from "@app/providers";

describe("QueryProvider", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <QueryProvider>
        <div>Test Child</div>
      </QueryProvider>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });
});
