import { useBlogCategoryGroup } from "@entities/blog/categories";
import { renderWithProviders } from "@test-utils/renderer";

const TestComponent = () => {
  const { selectedCategoryGroup } = useBlogCategoryGroup();

  return (
    <div>
      {selectedCategoryGroup ? (
        <p>Selected Category Group: {selectedCategoryGroup.name}</p>
      ) : (
        <p>No category group selected</p>
      )}
    </div>
  );
};

describe("useBlogCategoryGroup", () => {
  it("should raise an error when used outside of BlogProvider", () => {
    expect(() => {
      renderWithProviders(<TestComponent />);
    }).toThrow("useBlogCategoryGroup must be used within a BlogProvider");
  });
});
