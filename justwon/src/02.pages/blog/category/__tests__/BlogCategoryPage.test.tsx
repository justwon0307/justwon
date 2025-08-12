import { BlogCategoryPage, generateMetadata } from "@pages/blog/category";
import {
  BlogProvider,
  sampleCategoryDetails,
  sampleCategoryGroups,
} from "@entities/blog";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

(global.fetch as jest.Mock).mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(sampleCategoryDetails),
});

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

    return renderWithProviders(
      <BlogProvider initialCategoryGroups={sampleCategoryGroups}>
        {elements}
      </BlogProvider>
    );
  };

  it("renders the category page with the correct title", async () => {
    const { getByText } = await render("test-category");

    expect(
      getByText(`${sampleCategoryDetails.description}`)
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

    expect(metadata.title).toBe(`${sampleCategoryDetails.name} | JustWon`);
    expect(metadata.description).toBe(sampleCategoryDetails.description);
  });
});
