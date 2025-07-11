import { render } from "@testing-library/react";

import { RootHeader } from "@widgets/header";

describe("RootHeader", () => {
  it("should render the header with links", () => {
    const { getByText } = render(<RootHeader />);

    expect(getByText("JustWon")).toBeInTheDocument();
    expect(getByText("Projects")).toBeInTheDocument();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Study")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });
});
