import { render } from "@testing-library/react";

import { Justwon } from "@/components/Justwon";
import { JustwonHorizontal } from "@/components/JustwonHorizontal";
import { Studio } from "@/components/Studio";
import { StudioHorizontal } from "@/components/StudioHorizontal";

describe("Justwon", () => {
  it("renders Justwon correctly", () => {
    render(<Justwon />);
    const logo = document.querySelector("svg");
    expect(logo).toBeDefined();
  });

  it("renders JustwonHorizontal correctly", () => {
    render(<JustwonHorizontal />);
    const logo = document.querySelector("svg");
    expect(logo).toBeDefined();
  });
});

describe("Studio", () => {
  it("renders Studio correctly", () => {
    render(<Studio />);
    const logo = document.querySelector("svg");
    expect(logo).toBeDefined();
  });

  it("renders StudioHorizontal correctly", () => {
    render(<StudioHorizontal />);
    const logo = document.querySelector("svg");
    expect(logo).toBeDefined();
  });
});
