import { render } from "@testing-library/react";

import { Logo, LogoHorizontal } from "@shared/ui/Icons";

jest.unmock("@shared/ui/Icons");
jest.mock("../files/justwon.svg", () => () => null);
jest.mock("../files/justwon-horizontal.svg", () => () => null);

describe("Logo", () => {
  it("should render default logo", () => {
    render(<Logo />);
  });
});

describe("LogoHorizontal", () => {
  it("should render horizontal logo", () => {
    render(<LogoHorizontal />);
  });
});
