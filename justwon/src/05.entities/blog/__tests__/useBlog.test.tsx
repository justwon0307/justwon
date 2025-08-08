import { useBlog } from "@entities/blog";
import { renderWithProviders } from "@test-utils/renderer";

const TestComponent = () => {
  const { selectedCategoryGroup, selectedCategory } = useBlog();

  return (
    <div>
      {selectedCategoryGroup ? (
        <p>Selected Category Group: {selectedCategoryGroup.name}</p>
      ) : (
        <p>No category group selected</p>
      )}
      {selectedCategory ? (
        <p>Selected Category: {selectedCategory.name}</p>
      ) : (
        <p>No category selected</p>
      )}
    </div>
  );
};

describe("useBlog", () => {
  it("should raise an error when used outside of BlogProvider", () => {
    expect(() => {
      renderWithProviders(<TestComponent />);
    }).toThrow("useBlog must be used within a BlogProvider");
  });
});
