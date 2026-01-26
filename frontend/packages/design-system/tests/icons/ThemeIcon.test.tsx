import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { ThemeIcon } from "@/icons";

describe("ThemeIcon", () => {
  it("should render all icons correctly and handle size props correctly", () => {
    const { container } = render(
      <>
        <ThemeIcon theme="light" />
        <ThemeIcon theme="dark" size={12} />
        <ThemeIcon theme="system" />
      </>,
    );
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(3);

    const lightIcon = icons[0];
    const darkIcon = icons[1];

    expect(lightIcon.getAttribute("width")).toBe("24");
    expect(lightIcon.getAttribute("height")).toBe("24");

    expect(darkIcon.getAttribute("width")).toBe("12");
    expect(darkIcon.getAttribute("height")).toBe("12");
  });
});
