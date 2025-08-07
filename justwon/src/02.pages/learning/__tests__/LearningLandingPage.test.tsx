import { LearningLandingPage } from "@pages/learning/landing";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("LearningLandingPage", () => {
  const render = async () => {
    const element = await getElementFromAsyncServerComponent(
      LearningLandingPage,
      {}
    );

    return renderWithProviders(element);
  };

  it("renders without crashing", async () => {
    await render();
  });
});
