import {
  BlogCategoryGroupPage,
  generateMetadata,
} from "@pages/blog/category-group";
import { sampleCategoryGroupDetails } from "@entities/blog/categories";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

jest.mock("@entities/blog/categories", () => {
  const originalModule = jest.requireActual("@entities/blog/categories");
  return {
    ...originalModule,
    useBlogCategory: jest.fn(),
    useBlogCategoryGroup: jest.fn(),
  };
});

describe("BlogCategoryGroupPage", () => {
  const render = async (slug: string) => {
    const elements = await getElementFromAsyncServerComponent(
      BlogCategoryGroupPage,
      { params: Promise.resolve({ catGrpSlug: slug }) }
    );

    return renderWithProviders(elements);
  };

  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleCategoryGroupDetails),
    });
  });

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
