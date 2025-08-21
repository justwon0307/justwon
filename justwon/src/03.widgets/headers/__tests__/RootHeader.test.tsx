import * as NextJSNavigationAPI from "next/navigation";

import { RootHeader } from "@widgets/headers";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("RootHeader", () => {
  const render = async () => {
    const elements = await getElementFromAsyncServerComponent(RootHeader, {});

    return renderWithProviders(elements);
  };

  beforeEach(() => {
    jest.spyOn(NextJSNavigationAPI, "usePathname").mockReturnValue("/blog");
  });

  it("renders correctly when user is not authenticated", async () => {
    const { getByText } = await render();

    expect(getByText("main-logo-horizontal")).toBeInTheDocument();
    expect(getByText("Projects")).toBeInTheDocument();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });
});
