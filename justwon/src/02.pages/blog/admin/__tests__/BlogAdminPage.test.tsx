import { BlogAdminPage } from "@pages/blog/admin";
import { renderWithProviders } from "@test-utils/renderer";

describe("BlogAdminPage", () => {
  it("displays the correct title and description", async () => {
    const { getByText } = renderWithProviders(<BlogAdminPage />);

    expect(getByText("블로그 관리 페이지")).toBeInTheDocument();
    expect(
      getByText("여기서 블로그 게시물을 관리할 수 있습니다.")
    ).toBeInTheDocument();
  });
});
