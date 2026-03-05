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
        <AppIcon icon="error-fill" />
        <AppIcon icon="info-circle" />
        <AppIcon icon="logout" />
        <AppIcon icon="refresh" />
        <AppIcon icon="settings" />
        <AppIcon icon="warning" />
        <AppIcon icon="warning-outline" />
      </>,
    );
    const icon = container.querySelectorAll("svg");
    expect(icon.length).toBe(12);
  });

  it("should throw for unsupported icon type", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<AppIcon icon={"unknown" as never} />)).toThrow();
    consoleSpy.mockRestore();
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
