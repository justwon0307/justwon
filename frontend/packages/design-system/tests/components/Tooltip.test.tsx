import { fireEvent, render } from "@testing-library/react";

import { Tooltip } from "@/components";

function TestComponent() {
  return (
    <Tooltip text="Tooltip Text">
      <button>Hover me</button>
    </Tooltip>
  );
}

describe("Tooltip", () => {
  it("renders the tooltip text when hovered (left-side of page + bottom of trigger)", () => {
    const { getByText } = render(<TestComponent />);

    fireEvent.mouseOver(getByText("Hover me"));

    const tooltip = getByText("Tooltip Text");

    expect(tooltip).toBeTruthy();

    expect(tooltip.style.transform).toBe("translateX(calc(-50% + 16px))");
    expect(tooltip.className).toContain("placement_bottom");
  });

  it("renders the tooltip on the right-side of page", () => {
    // Simulate a 400px wide viewport
    const originalInnerWidth = window.innerWidth;
    Object.defineProperty(globalThis.window, "innerWidth", {
      value: 400,
      configurable: true,
      writable: true,
    });

    // 두번째 호출: 툴팁
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      left: 300,
      width: 100,
      right: 400,
      top: 30,
      bottom: 60,
      height: 30,
      x: 300,
      y: 30,
      toJSON: () => {},
    });
    // 첫번째 호출: 래퍼
    vi.spyOn(
      HTMLElement.prototype,
      "getBoundingClientRect",
    ).mockReturnValueOnce({
      left: 340,
      width: 20,
      right: 360,
      top: 0,
      bottom: 30,
      height: 30,
      x: 340,
      y: 0,
      toJSON: () => {},
    });

    const { getByText } = render(<TestComponent />);

    expect(getByText("Tooltip Text").style.transform).toBe(
      "translateX(calc(-50% + -16px))",
    );

    vi.restoreAllMocks();
    Object.defineProperty(globalThis.window, "innerWidth", {
      value: originalInnerWidth,
      configurable: true,
      writable: true,
    });
  });

  it("positions the tooltip center of page + top of trigger", () => {
    // jsdom defaults: innerHeight = 768, innerWidth = 1024.
    // 두번째 호출: 툴팁
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      left: 150,
      width: 100,
      right: 250,
      top: 720,
      bottom: 820,
      height: 100,
      x: 150,
      y: 720,
      toJSON: () => {},
    });
    // 첫번째 호출: 래퍼
    vi.spyOn(
      HTMLElement.prototype,
      "getBoundingClientRect",
    ).mockReturnValueOnce({
      left: 190,
      width: 20,
      right: 210,
      top: 690,
      bottom: 720,
      height: 30,
      x: 190,
      y: 690,
      toJSON: () => {},
    });

    const { getByText } = render(<TestComponent />);

    const tooltip = getByText("Tooltip Text");

    expect(tooltip.className).toContain("placement_top");
    expect(tooltip.style.transform).toBe("translateX(calc(-50% + 0px))");

    vi.restoreAllMocks();
  });
});
