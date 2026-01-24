import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { RootHeader } from "@widgets/header";

describe("RootHeader", () => {
  it("should render correctly", () => {
    const { getByText } = render(<RootHeader />);

    expect(getByText("JustwonHorizontalLogo")).toBeTruthy();
    expect(getByText("Projects")).toBeTruthy();
    expect(getByText("Devlog")).toBeTruthy();
    expect(getByText("Non-dev")).toBeTruthy();
    expect(getByText("About")).toBeTruthy();
  });
});
