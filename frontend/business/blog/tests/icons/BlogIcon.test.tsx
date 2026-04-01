import { render } from "@testing-library/react";

import { BlogIcon } from "@/icons/BlogIcons";

describe("BlogIcon", () => {
  it("should render all icons and handles size props correctly", () => {
    const { container } = render(
      <>
        <BlogIcon icon="brain" />
        <BlogIcon icon="dashboard" />
        <BlogIcon icon="decision" />
        <BlogIcon icon="diagnosis" />
        <BlogIcon icon="document" />
        <BlogIcon icon="history" />
        <BlogIcon icon="monitor" size={16} />
      </>,
    );
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(7);

    const brainIcon = icons[0];
    const monitorIcon = icons[6];

    // default size is 24
    expect(brainIcon.getAttribute("width")).toBe("24");
    expect(brainIcon.getAttribute("height")).toBe("24");

    expect(monitorIcon.getAttribute("width")).toBe("16");
    expect(monitorIcon.getAttribute("height")).toBe("16");
  });
});
