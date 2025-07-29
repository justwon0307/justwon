import { render } from "@testing-library/react";

import { AppIcon } from "@shared/ui/Icons";

jest.unmock("@shared/ui/Icons");
jest.mock("../files/project.svg", () => () => null);

describe("AppIcon", () => {
  it("should render default icon", () => {
    render(<AppIcon icon="projects" />);
  });

  it("should handle invalid icon", () => {
    render(<AppIcon icon="invalid" />);
  });
});
