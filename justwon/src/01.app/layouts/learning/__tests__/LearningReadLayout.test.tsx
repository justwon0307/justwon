import * as NextJSNavigationAPI from "next/navigation";

import { LearningReadLayout } from "@app/layouts/learning";
import { LearningProvider, sampleCategoryGroups } from "@entities/learning";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("LearningReadLayout", () => {
  const render = async () => {
    // wrap with provider for context

    const element = await getElementFromAsyncServerComponent(
      LearningReadLayout,
      {
        children: <div>Test Content</div>,
      }
    );

    return renderWithProviders(
      <LearningProvider initialCategoryGroups={sampleCategoryGroups}>
        {element}
      </LearningProvider>
    );
  };

  beforeEach(() => {
    jest.spyOn(NextJSNavigationAPI, "usePathname").mockReturnValue("/learning");
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleCategoryGroups),
    });
  });

  it("renders without crashing", async () => {
    const { getByText } = await render();
    expect(getByText("Learning")).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
