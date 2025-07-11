import { render } from "@testing-library/react";

import { HomePage } from "@pages/home";

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(<HomePage />);
  });
});
