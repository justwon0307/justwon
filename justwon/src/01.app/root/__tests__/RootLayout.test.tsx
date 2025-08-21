import { render } from "@testing-library/react";

import { RootLayout, metadata } from "@app/root";
import { getElementFromAsyncServerComponent } from "@test-utils/renderer";

jest.mock("@widgets/headers", () => ({
  RootHeader: () => <div>Root Header</div>,
}));

describe("RootLayout", () => {
  it("renders the RootLayout with children", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});

    const element = await getElementFromAsyncServerComponent(RootLayout, {
      children: <div>Test Content</div>,
    });
    const { container, getByText } = render(element);

    expect(container).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("has correct metadata", () => {
    expect(metadata.title).toBe("JustWon");
    expect(metadata.description).toBe("");
  });
});
