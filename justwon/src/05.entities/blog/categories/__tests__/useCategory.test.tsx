import { useBlogCategory } from "@entities/blog/categories";
import { renderWithProviders } from "@test-utils/renderer";

const TestComponent = () => {
  const { selectedCategory } = useBlogCategory();

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

describe("useBlogCategory", () => {
  it("should raise an error when used outside of BlogProvider", () => {
    expect(() => {
      renderWithProviders(<TestComponent />);
    }).toThrow("useBlogCategory must be used within a BlogProvider");
  });
});
