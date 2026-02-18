import { render } from "@testing-library/react";

import { ThemeCard } from "@/theme";

describe("ThemeCard", () => {
  it("should render correctly", () => {
    const { getAllByText } = render(
      <>
        <ThemeCard theme="light" />
        <ThemeCard theme="dark" />
        <ThemeCard theme="system" />
      </>,
    );

    expect(getAllByText("Aa")).toHaveLength(4); // 1 light + 1 dark + 2 system
  });
});
