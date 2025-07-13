import { render } from "@testing-library/react";

import { Logo } from "@shared/ui/Icons";

jest.unmock("@shared/ui/Icons");
jest.mock("../files/github.svg", () => () => null);

describe("Logo", () => {
  it("should render default logo", () => {
    render(<Logo name="github" />);
  });

  it("should handle invalid logo", () => {
    render(<Logo name="invalid" />);
  });
});
