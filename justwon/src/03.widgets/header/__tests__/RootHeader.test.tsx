import * as Navigation from "next/navigation";

import { RootHeader } from "@widgets/header";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("RootHeader", () => {
  const render = async () => {
    const elements = await getElementFromAsyncServerComponent(RootHeader, {});

    return renderWithProviders(elements);
  };

  it("renders correctly", async () => {
    const mockUsePathname = Navigation.usePathname as jest.Mock;
    mockUsePathname.mockReturnValue("/projects");

    const { container } = await render();

    expect(container).toBeTruthy();
  });
});
