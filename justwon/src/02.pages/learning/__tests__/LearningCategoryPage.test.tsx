import {
  LearningCategoryPage,
  generateMetadata,
} from "@pages/learning/category";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("LearningCategoryPage", () => {
  const render = async (slug: string) => {
    const elements = await getElementFromAsyncServerComponent(
      LearningCategoryPage,
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
      getByText("해당 카테고리의 글 목록을 보여주는 페이지로 렌더링")
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
