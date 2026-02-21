import { render } from "@testing-library/react";

import { AppIcon } from "@/icons";

describe("AppIcon", () => {
  it("should render all icons correctly (default props)", () => {
    const { container } = render(
      <>
        <AppIcon icon="bell" />
        <AppIcon icon="check-circle" />
        <AppIcon icon="check-fill" />
        <AppIcon icon="check" />
        <AppIcon icon="close" />
        <AppIcon icon="info-circle" />
        <AppIcon icon="settings" />
        <AppIcon icon="warning-outline" />
      </>,
    );
    const icon = container.querySelectorAll("svg");
    expect(icon.length).toBe(8);
  });

  it("should render correctly with custom size and color", () => {
    const testSize = 32;
    const { container } = render(<AppIcon icon="settings" size={testSize} />);
    const icon = container.querySelector("svg");

    expect(icon).toBeTruthy();
    expect(icon?.getAttribute("width")).toBe(String(testSize));
    expect(icon?.getAttribute("height")).toBe(String(testSize));
  });
});
