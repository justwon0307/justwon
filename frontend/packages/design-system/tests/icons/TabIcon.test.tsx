import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { TabIcon } from "@/icons";

describe("TabIcon", () => {
  it("should render all icons and handles size props correctly", () => {
    const { container } = render(
      <>
        <TabIcon tab="about" />
        <TabIcon tab="devlog" />
        <TabIcon tab="non-dev" size={16} />
        <TabIcon tab="projects" />
      </>,
    );
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(4);

    const aboutIcon = icons[0];
    const nonDevIcon = icons[2];

    // default size is 24
    expect(aboutIcon.getAttribute("width")).toBe("24");
    expect(aboutIcon.getAttribute("height")).toBe("24");

    expect(nonDevIcon.getAttribute("width")).toBe("16");
    expect(nonDevIcon.getAttribute("height")).toBe("16");
  });
});
