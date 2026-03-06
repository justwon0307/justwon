import { render } from "@testing-library/react";

import { Spinner } from "@/components";

describe("Spinner", () => {
  it("should render default spinner", () => {
    const { getByTestId } = render(<Spinner />);

    const element = getByTestId("spinner");
    expect(element.style.width).toBe("48px");
    expect(element.style.height).toBe("48px");
    expect(element.style.borderWidth).toBe("4px");
  });

  it("should render spinner with custom size and width", () => {
    const { getByTestId } = render(<Spinner size={64} width={8} />);

    const element = getByTestId("spinner");
    expect(element.style.width).toBe("64px");
    expect(element.style.height).toBe("64px");
    expect(element.style.borderWidth).toBe("8px");
  });
});
