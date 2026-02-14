import { render } from "@testing-library/react";

import { Button } from "@/components";

describe("Button", () => {
  it("should render with default button tag", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const element = getByText("Click Me");
    expect(element.tagName).toBe("BUTTON");
    expect(element.className).toContain("button");
  });

  it("should merge custom className with default button class", () => {
    const { getByText } = render(
      <Button className="custom-class">Styled Button</Button>,
    );
    const element = getByText("Styled Button");
    expect(element.className).toContain("button");
    expect(element.className).toContain("custom-class");
  });
});
