import { BlogCategoryPage, generateMetadata } from "@pages/blog/category";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("BlogCategoryPage", () => {
  const render = async (slug: string) => {
    const elements = await getElementFromAsyncServerComponent(
      BlogCategoryPage,
      {
        params: Promise.resolve({
          catSlug: slug,
          catGrpSlug: "test-category-group",
        }),
      }
    );

    return renderWithProviders(elements);
  };

  it("renders the category page with the correct title", async () => {
    const { getByText } = await render("test-category");

    expect(getByText("Category: test-category")).toBeInTheDocument();
    expect(
      getByText("카테고리 이름 & 아이콘 & 핵심 개념 및 학습 포인트")
    ).toBeInTheDocument();
  });
});

describe("generateMetadata", () => {
  it("returns the correct metadata for the category page", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        catSlug: "test-category",
        catGrpSlug: "test-category-group",
      }),
    });

    expect(metadata.title).toBe("test-category | JustWon");
    expect(metadata.description).toBe("");
  });
});
