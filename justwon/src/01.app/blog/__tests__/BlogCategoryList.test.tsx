import { fireEvent } from "@testing-library/react";
import { useMemo } from "react";
import * as NextJSNavigationAPI from "next/navigation";

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
      selectedCategoryGroup: sampleCategoryGroups[0],
    }),
    []
  );

  const categoryValue = useMemo(
    () => ({
      selectedCategory: sampleCategoryGroups[0].categories[0],
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

  it("handles clicks", async () => {
    jest
      .spyOn(NextJSNavigationAPI, "usePathname")
      .mockReturnValue("/blog/web-development/frontend");

    const { getByText } = await render();

    fireEvent.click(getByText("Web Development")); // 카테고리 그룹 클릭
    fireEvent.click(getByText("Frontend")); // 카테고리 클릭
    fireEvent.click(getByText("Backend")); // 다른 카테고리 클릭
  });
});
