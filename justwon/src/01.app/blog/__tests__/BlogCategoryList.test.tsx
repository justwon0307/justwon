import { useMemo } from "react";

import { BlogCategoryList } from "../ui/BlogCategoryList";
import {
  BlogCategoryGroupContext,
  BlogCategoryContext,
  sampleCategoryGroups,
} from "@entities/blog/categories";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

jest.mock("@entities/blog/categories/server", () => ({
  getCategories: jest.fn(() => Promise.resolve(sampleCategoryGroups)),
}));

const TestProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useMemo(
    () => ({
      setCategoryGroups: jest.fn(),
      selectedCategoryGroup: null,
    }),
    []
  );

  const categoryValue = useMemo(
    () => ({
      selectedCategory: null,
    }),
    []
  );

  return (
    <BlogCategoryGroupContext.Provider value={value}>
      <BlogCategoryContext.Provider value={categoryValue}>
        {children}
      </BlogCategoryContext.Provider>
    </BlogCategoryGroupContext.Provider>
  );
};

describe("BlogCategoryList", () => {
  const render = async () => {
    const element = await getElementFromAsyncServerComponent(
      BlogCategoryList,
      {}
    );
    return renderWithProviders(<TestProvider>{element}</TestProvider>);
  };

  it("renders the BlogCategoryList component", async () => {
    const { container } = await render();

    expect(container).toBeInTheDocument();
  });
});
