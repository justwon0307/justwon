import { render } from "@testing-library/react";

import { Divider } from "@shared/ui/Dividers";

jest.unmock("@shared/ui/Dividers");

describe("Divider", () => {
  it("should render default divider", () => {
    render(<Divider />);
  });

  it("should render bold divider", () => {
    render(<Divider bold />);
  });
});
