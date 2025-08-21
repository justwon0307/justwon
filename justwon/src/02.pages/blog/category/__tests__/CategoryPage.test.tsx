import { CategoryPage, generateMetadata } from "@pages/blog/category";
import { sampleCategoryDetails } from "@entities/blog/categories";
import { getCategoryDetails } from "@entities/blog/categories/server";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

jest.mock("@entities/blog/categories/server");

describe("CategoryPage", () => {
  const render = async (slug: string) => {
    const elements = await getElementFromAsyncServerComponent(CategoryPage, {
      params: Promise.resolve({
        catSlug: slug,
        catGrpSlug: "test-category-group",
      }),
    });
    return renderWithProviders(elements);
  };

  beforeEach(() => {
    (getCategoryDetails as jest.Mock).mockResolvedValue(sampleCategoryDetails);
  });

  it("renders the category page with the correct title", async () => {
    const { getByText } = await render("test-category");

    expect(getByText(sampleCategoryDetails.description)).toBeInTheDocument();
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
