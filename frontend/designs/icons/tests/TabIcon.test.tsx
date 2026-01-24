import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { TabIcon } from "@/tab/TabIcon";

describe("TabIcon", () => {
  it("should render all icons correctly (default props)", () => {
    const { container } = render(
      <>
        <TabIcon tab="about" />
        <TabIcon tab="devlog" />
        <TabIcon tab="non-dev" />
        <TabIcon tab="projects" />
      </>,
    );
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(4);
  });

  it("should render correctly with custom size and color", () => {
    const testSize = 32;
    const testColor = "blue";
    const { container } = render(
      <TabIcon tab="about" size={testSize} color={testColor} />,
    );
    const icon = container.querySelector("svg");

    expect(icon).toBeTruthy();
    expect(icon?.getAttribute("width")).toBe(String(testSize));
    expect(icon?.getAttribute("height")).toBe(String(testSize));
    expect(icon?.getAttribute("color")).toBe(testColor);
  });
});
