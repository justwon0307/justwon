import { useBlogCategoryGroup } from "@entities/blog/categories";
import { renderWithProviders } from "@test-utils/renderer";

const MockComponent = () => {
  const { selectedCategoryGroup } = useBlogCategoryGroup();

  return (
    <div>
      <p>Selected Category Group: {selectedCategoryGroup?.name || "None"}</p>
    </div>
  );
};

describe("MockComponent", () => {
  it("should raise an error if used outside of BlogCategoryGroupContext", () => {
    expect(() => renderWithProviders(<MockComponent />)).toThrow(
      "useBlogCategoryGroup must be used within a BlogProvider"
    );
  });
});
