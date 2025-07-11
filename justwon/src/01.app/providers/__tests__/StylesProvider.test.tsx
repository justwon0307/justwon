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
  const { toggleTheme } = useColors();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
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

    const button = getByText("Toggle Theme");

    fireEvent.click(button);
  });
});
