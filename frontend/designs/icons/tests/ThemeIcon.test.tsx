import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { ThemeIcon } from "../src/theme/ThemeIcon";

describe("ThemeIcon", () => {
  it("should render all icons correctly (default props)", () => {
    const { container } = render(
      <>
        <ThemeIcon theme="light" />
        <ThemeIcon theme="dark" />
        <ThemeIcon theme="system" />
      </>,
    );
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(3);
  });

  it("should render correctly with custom size and color", () => {
    const testSize = 24;
    const testColor = "green";
    const { container } = render(
      <ThemeIcon theme="light" size={testSize} color={testColor} />,
    );
    const icon = container.querySelector("svg");

    expect(icon).toBeTruthy();
    expect(icon?.getAttribute("width")).toBe(String(testSize));
    expect(icon?.getAttribute("height")).toBe(String(testSize));
    expect(icon?.getAttribute("color")).toBe(testColor);
  });
});
