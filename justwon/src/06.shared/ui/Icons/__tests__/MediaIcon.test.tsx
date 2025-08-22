import { render } from "@testing-library/react";

import { MediaIcon } from "@shared/ui/Icons";

jest.unmock("@shared/ui/Icons");
jest.mock("../files/computer.svg", () => () => null);

describe("MediaIcon", () => {
  it("should render default icon", () => {
    render(<MediaIcon name="computer" />);
  });

  it("should render default icon with custom props", () => {
    render(<MediaIcon name="computer" size={24} isActive />);
  });

  it("should handle invalid icon", () => {
    jest.spyOn(console, "warn").mockImplementation(() => {});

    render(<MediaIcon name="invalid" />);
  });
});
