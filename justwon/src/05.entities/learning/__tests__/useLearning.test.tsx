import { useLearning } from "@entities/learning";
import { renderWithProviders } from "@test-utils/renderer";

const TestComponent = () => {
  const { selectedCategory } = useLearning();

  return (
    <div>
      {selectedCategory ? (
        <p>Selected Category: {selectedCategory.name}</p>
      ) : (
        <p>No category selected</p>
      )}
    </div>
  );
};

describe("useLearning", () => {
  it("should raise an error when used outside of LearningProvider", () => {
    expect(() => {
      renderWithProviders(<TestComponent />);
    }).toThrow("useLearning must be used within a LearningProvider");
  });
});
