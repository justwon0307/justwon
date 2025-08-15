import { BlogLandingPage } from "@pages/blog/landing";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("BlogLandingPage", () => {
  const render = async () => {
    const element = await getElementFromAsyncServerComponent(
      BlogLandingPage,
      {}
    );

    return renderWithProviders(element);
  };

  it("renders without crashing", async () => {
    await render();
  });
});
