import {
  BlogCategoryGroupPage,
  generateMetadata,
} from "@pages/blog/category-group";
import {
  BlogProvider,
  sampleCategoryGroupDetails,
  sampleCategoryGroups,
} from "@entities/blog";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

(global.fetch as jest.Mock).mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(sampleCategoryGroupDetails),
});

describe("BlogCategoryGroupPage", () => {
  const render = async (slug: string) => {
    const elements = await getElementFromAsyncServerComponent(
      BlogCategoryGroupPage,
      { params: Promise.resolve({ catGrpSlug: slug }) }
    );

    return renderWithProviders(
      <BlogProvider initialCategoryGroups={sampleCategoryGroups}>
        {elements}
      </BlogProvider>
    );
  };

  it("renders the page with correct title and breadcrumb", async () => {
    const { getByText } = await render("test-category-group");

    expect(
      getByText(sampleCategoryGroupDetails.description)
    ).toBeInTheDocument();
  });
});

describe("generateMetadata", () => {
  it("returns correct metadata for the category group", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ catGrpSlug: "test-category-group" }),
    });

    expect(metadata.title).toBe(`${sampleCategoryGroupDetails.name} | JustWon`);
    expect(metadata.description).toBe(sampleCategoryGroupDetails.description);
  });
});
