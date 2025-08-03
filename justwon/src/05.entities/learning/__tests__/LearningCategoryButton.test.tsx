import { LearningCategoryButton, sampleCategories } from "@entities/learning";
import { renderWithProviders } from "@test-utils/renderer";

describe("LearningCategoryButton", () => {
  it("renders correctly", () => {
    renderWithProviders(
      <LearningCategoryButton category={sampleCategories[0]} />
    );
  });
});
