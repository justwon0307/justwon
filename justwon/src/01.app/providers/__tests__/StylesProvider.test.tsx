import { fireEvent, render } from "@testing-library/react";

import { StylesProvider } from "@app/providers";
import { useColors } from "@shared/lib/colors";

jest.unmock("@shared/lib/colors");
jest.mock("next/navigation", () => ({
  useServerInsertedHTML: (cb: () => React.ReactNode) => {
    return cb();
  },
}));

const MockComponent = () => {
  const { isDarkMode, toggleTheme } = useColors();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current mode: {isDarkMode ? "Dark" : "Light"}</p>
    </div>
  );
};

describe("StylesProvider", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <StylesProvider>
        <MockComponent />
      </StylesProvider>
    );
    expect(container).toBeInTheDocument();
  });

  it("toggles theme correctly", () => {
    const { getByText } = render(
      <StylesProvider>
        <MockComponent />
      </StylesProvider>
    );

    expect(getByText("Current mode: Light")).toBeInTheDocument();

    const button = getByText("Toggle Theme");

    fireEvent.click(button);

    expect(getByText("Current mode: Dark")).toBeInTheDocument();
  });
});
