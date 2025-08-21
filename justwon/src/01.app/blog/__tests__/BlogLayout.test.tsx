import * as NextJSNavigationAPI from "next/navigation";

import { BlogLayout } from "@app/blog";
import { renderWithProviders } from "@test-utils/renderer";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  Suspense: jest.fn(({ children, fallback }) => (
    <div>
      {children}

      {fallback}
    </div>
  )),
}));
jest.mock("../ui/BlogCategoryList", () => ({
  ...jest.requireActual("../ui/BlogCategoryList"),
  BlogCategoryList: jest.fn(() => <div>Blog Category List</div>),
}));

describe("BlogLayout", () => {
  beforeEach(() => {
    jest
      .spyOn(NextJSNavigationAPI, "usePathname")
      .mockReturnValue("/blog/web-development/frontend");
  });

  it("renders the BlogLayout with children and modal", async () => {
    jest.mock("react", () => ({
      ...jest.requireActual("react"),
      Suspense: jest.fn(({ children }) => <div>{children}</div>),
    }));

    const { container, getByText } = renderWithProviders(
      <BlogLayout modal={<div className="modal">Modal Content</div>}>
        <div className="content-wrapper">Main Content</div>
      </BlogLayout>
    );

    expect(container).toBeInTheDocument();
    expect(container.querySelector(".sidebar-main")).toHaveTextContent("Blog");
    expect(container.querySelector(".content-wrapper")).toHaveTextContent(
      "Main Content"
    );
    expect(container.querySelector(".modal")).toHaveTextContent(
      "Modal Content"
    );
    expect(getByText("Blog Category List")).toBeInTheDocument();
  });
});
