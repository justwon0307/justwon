import { render } from "@testing-library/react";

import { TabIcon } from "@/icons";

describe("TabIcon", () => {
  it("should render all icons and handles size props correctly", () => {
    const { container } = render(
      <>
        <TabIcon tab="about" />
        <TabIcon tab="devlog" />
        <TabIcon tab="lounge" size={16} />
        <TabIcon tab="projects" />
      </>,
    );
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(4);

    const aboutIcon = icons[0];
    const loungeIcon = icons[2];

    // default size is 20
    expect(aboutIcon.getAttribute("width")).toBe("20");
    expect(aboutIcon.getAttribute("height")).toBe("20");

    expect(loungeIcon.getAttribute("width")).toBe("16");
    expect(loungeIcon.getAttribute("height")).toBe("16");
  });
});
