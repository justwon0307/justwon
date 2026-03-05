import { render } from "@testing-library/react";

import {
  JustwonLogo,
  JustwonHorizontalLogo,
  StudioLogo,
  StudioHorizontalLogo,
} from "@/brand";

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

describe("Studio Logos", () => {
  it("renders StudioLogo correctly", () => {
    render(<StudioLogo />);
    const logo = document.querySelector("svg");
    expect(logo).toBeDefined();
  });

  it("renders StudioHorizontalLogo correctly", () => {
    render(<StudioHorizontalLogo />);
    const logo = document.querySelector("svg");
    expect(logo).toBeDefined();
  });
});
