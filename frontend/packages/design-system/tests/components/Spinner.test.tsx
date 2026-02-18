import { render } from "@testing-library/react";

import { Spinner } from "@/components";
import {
  spinnerDiameter,
  spinnerWidth,
} from "@/components/atoms/Spinner/styles.css";

function unwrapVar(cssVar: string) {
  return cssVar.replace(/^var\((.+)\)$/, "$1");
}

describe("Spinner", () => {
  it("should render default spinner", () => {
    const { getByTestId } = render(<Spinner />);

    const element = getByTestId("spinner");
    expect(element.style.getPropertyValue(unwrapVar(spinnerDiameter))).toBe(
      "48px",
    );
    expect(element.style.getPropertyValue(unwrapVar(spinnerWidth))).toBe("4px");
  });

  it("should render spinner with custom size and width", () => {
    const { getByTestId } = render(<Spinner size={64} width={8} />);

    const element = getByTestId("spinner");
    expect(element.style.getPropertyValue(unwrapVar(spinnerDiameter))).toBe(
      "64px",
    );
    expect(element.style.getPropertyValue(unwrapVar(spinnerWidth))).toBe("8px");
  });
});
