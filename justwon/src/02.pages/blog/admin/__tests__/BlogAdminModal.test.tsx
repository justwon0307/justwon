import { BlogAdminModal } from "@pages/blog/admin";
import { renderWithProviders } from "@test-utils/renderer";

describe("BlogAdminModal", () => {
  it("renders without crashing", async () => {
    const { getByText } = renderWithProviders(<BlogAdminModal />);

    expect(getByText("블로그 관리 페이지")).toBeInTheDocument();
    expect(
      getByText("여기서 블로그 게시물을 관리할 수 있습니다.")
    ).toBeInTheDocument();
  });
});
