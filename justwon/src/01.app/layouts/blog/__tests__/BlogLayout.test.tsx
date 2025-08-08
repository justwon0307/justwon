import { BlogLayout } from "@app/layouts/blog";
import { sampleCategoryGroups } from "@entities/blog";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

describe("BlogLayout", () => {
  const render = async () => {
    const element = await getElementFromAsyncServerComponent(BlogLayout, {
      children: <div>Test Content</div>,
    });

    return renderWithProviders(element);
  };

  it("fetches categories data successfully", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(sampleCategoryGroups),
    });

    await render();
  });

  it("handles data fetch error correctly", async () => {
    // empty array error
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([]),
    });

    const { getByText } = await render();
    expect(getByText("카테고리 데이터가 없습니다.")).toBeInTheDocument();
  });
});
