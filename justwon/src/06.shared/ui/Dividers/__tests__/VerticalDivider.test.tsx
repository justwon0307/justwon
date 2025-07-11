import { render } from "@testing-library/react";

import { VerticalDivider } from "@shared/ui/Dividers";

describe("VerticalDivider", () => {
  it("should render default divider", () => {
    render(<VerticalDivider />);
  });

  it("should render bold divider", () => {
    render(<VerticalDivider $bold />);
  });
});
