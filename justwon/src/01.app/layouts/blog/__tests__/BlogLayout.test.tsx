import { BlogLayout } from "@app/layouts/blog";
import {
  initializeBlog,
  sampleBlogInitializerResponse,
} from "@features/blog/initialize-blog";
import { APIError } from "@shared/api/models";
import {
  getElementFromAsyncServerComponent,
  renderWithProviders,
} from "@test-utils/renderer";

jest.mock("@features/blog/initialize-blog", () => {
  const originalModule = jest.requireActual("@features/blog/initialize-blog");
  return {
    ...originalModule,
    initializeBlog: jest.fn(),
  };
});

describe("BlogLayout", () => {
  const render = async () => {
    const element = await getElementFromAsyncServerComponent(BlogLayout, {
      children: <div>Test Content</div>,
    });

    return renderWithProviders(element);
  };

  it("fetches categories data successfully", async () => {
    (initializeBlog as jest.Mock).mockResolvedValue(
      sampleBlogInitializerResponse
    );

    await render();
  });

  it("handles data fetch error correctly", async () => {
    // empty array error
    (initializeBlog as jest.Mock).mockRejectedValue(
      new APIError("블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다.")
    );

    const { getByText } = await render();

    expect(
      getByText("블로그 초기화 데이터를 불러오는 중 오류가 발생했습니다.")
    ).toBeInTheDocument();
  });

  it("handles unknown error correctly", async () => {
    (initializeBlog as jest.Mock).mockRejectedValue(new Error("Unknown error"));

    const { getByText } = await render();

    expect(
      getByText("데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.")
    ).toBeInTheDocument();
  });
});
