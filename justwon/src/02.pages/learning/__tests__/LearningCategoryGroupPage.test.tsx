import {
  LearningCategoryGroupPage,
  generateMetadata,
} from "@pages/learning/category-group";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("LearningCategoryGroupPage", () => {
  const render = async (slug: string) => {
    const elements = await getElementFromAsyncServerComponent(
      LearningCategoryGroupPage,
      { params: Promise.resolve({ catGrpSlug: slug }) }
    );

    return renderWithProviders(elements);
  };

  it("renders the page with correct title and breadcrumb", async () => {
    const { getByText } = await render("test-category-group");

    expect(
      getByText("Category Group: test-category-group")
    ).toBeInTheDocument();
  });
});

describe("generateMetadata", () => {
  it("returns correct metadata for the category group", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ catGrpSlug: "test-category-group" }),
    });

    expect(metadata.title).toBe("test-category-group | JustWon");
    expect(metadata.description).toBe("");
  });
});
