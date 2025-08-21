import { useBlogCategory } from "@entities/blog/categories";
import { renderWithProviders } from "@test-utils/renderer";

const MockComponent = () => {
  const { selectedCategory } = useBlogCategory();

  return (
    <div>
      <p>Selected Category: {selectedCategory?.name || "None"}</p>
    </div>
  );
};

describe("MockComponent", () => {
  it("should raise an error if used outside of BlogCategoryContext", () => {
    expect(() => renderWithProviders(<MockComponent />)).toThrow(
      "useBlogCategory must be used within a BlogProvider"
    );
  });
});
