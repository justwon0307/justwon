import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { JustwonLogo, JustwonHorizontalLogo } from "@/brand";

describe("Justwon Logos", () => {
  it("renders JustwonLogo correctly", () => {
    render(<JustwonLogo />);
    const logo = document.querySelector("svg");
    expect(logo).toBeDefined();
  });

  it("renders JustwonHorizontalLogo correctly", () => {
    render(<JustwonHorizontalLogo />);
    const logo = document.querySelector("svg");
    expect(logo).toBeDefined();
  });
});
