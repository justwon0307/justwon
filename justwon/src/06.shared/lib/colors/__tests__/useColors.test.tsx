import { useMemo } from "react";
import { render } from "@testing-library/react";

import { ColorContext, lightTheme, useColors } from "@shared/lib/colors";

jest.unmock("@shared/lib/colors");

const MockComponent = () => {
  const { colors } = useColors();

  return <div>{colors.primary}</div>;
};

const MockProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useMemo(
    () => ({
      colors: lightTheme,
      isDarkMode: false,
      toggleTheme: jest.fn(),
    }),
    []
  );

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

describe("useColors", () => {
  it("should throw an error if used outside of ColorsProvider", () => {
    expect(() => render(<MockComponent />)).toThrow(
      "useColors must be used within a ColorProvider"
    );
  });

  it("should return colors when used within ColorsProvider", () => {
    render(
      <MockProvider>
        <MockComponent />
      </MockProvider>
    );
  });
});
