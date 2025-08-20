import { fireEvent, render, waitFor } from "@testing-library/react";

import { StylesProvider } from "@app/root/providers";
import { useColors } from "@shared/lib/colors";

jest.unmock("@shared/lib/colors");
jest.mock("next/navigation", () => ({
  useServerInsertedHTML: (cb: () => React.ReactNode) => {
    return cb();
  },
}));

const MockComponent = () => {
  const { colors, isDarkMode, toggleTheme } = useColors();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current mode: {isDarkMode ? "Dark" : "Light"}</p>
      <p>Primary color: {colors.primary}</p>
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

  it("toggles theme correctly", async () => {
    const { getByText } = render(
      <StylesProvider>
        <MockComponent />
      </StylesProvider>
    );

    await waitFor(() => {
      expect(getByText("Current mode: Light")).toBeInTheDocument();
      expect(getByText("Primary color: #1E3A8A")).toBeInTheDocument();
    });

    const button = getByText("Toggle Theme");

    fireEvent.click(button);

    await waitFor(() => {
      expect(getByText("Current mode: Dark")).toBeInTheDocument();
      expect(getByText("Primary color: #818CF8")).toBeInTheDocument();
    });
  });
});
