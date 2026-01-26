import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { ThemeScript } from "../src/theme/ThemeScript";

describe("ThemeScript", () => {
  it("should render children correctly (default)", () => {
    const { container } = render(<ThemeScript />);
    expect(container).toBeTruthy();
  });
});
