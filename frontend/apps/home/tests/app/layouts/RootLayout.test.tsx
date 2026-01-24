import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { RootLayout } from "@app/layouts/root";

describe("RootLayout", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );

    expect(getByText("Test Child")).toBeTruthy();
  });
});
