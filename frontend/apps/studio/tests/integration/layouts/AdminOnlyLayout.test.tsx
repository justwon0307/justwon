import { fireEvent, render } from "@testing-library/react";
import * as AuthContext from "@justkits/react-jwt";
import * as DSComponents from "@justwon/designs/components";
import * as DSTheme from "@justwon/designs/theme";

import { AdminOnlyLayout } from "@app/layouts/adminonly";

describe("AdminOnlyLayout", () => {
  it("renders null when not authenticated", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: false,
      login: vi.fn(),
      logout: vi.fn(),
    });

    const { container } = render(<AdminOnlyLayout />);

    expect(container.firstChild).toBeNull();
  });

  it("renders children when authenticated and handles logout correctly", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: true,
      login: vi.fn(),
      logout: vi.fn(),
    });
    vi.spyOn(DSComponents, "showConfirm").mockImplementation(
      (_, __, onConfirm) => {
        // 바로 onConfirm 콜백 실행 (사용자가 "확인"을 클릭했다고 가정)
        onConfirm();
      },
    );

    const { getByText, getAllByAltText } = render(<AdminOnlyLayout />);

    // 먼저 헤더와 메인 요소가 제대로 렌더링 되는지 확인
    expect(getByText("StudioHorizontalLogo")).toBeTruthy();
    expect(getByText("Outlet")).toBeTruthy();
    // UserAvatar에 avatar 이미지가 렌더링 되는지 확인 (UserButton, UserProfile 두번 렌더링 되기 때문에, 하나만 확인)
    expect(getAllByAltText("User Avatar")[0]).toHaveProperty(
      "src",
      "http://localhost:3000/test-avatar-url",
    );

    fireEvent.click(getByText("logout")); // 로그아웃 아이콘 버튼 클릭

    // 로그아웃 함수가 호출되는지 확인
    expect(AuthContext.useAuth().logout).toHaveBeenCalled();
  });

  describe("corner cases", () => {
    it("renders default avatar when user avatar_url is null", () => {
      vi.spyOn(AuthContext, "useUser").mockReturnValue({
        user: { uuid: "test-uuid", username: "test-user", avatar_url: null },
        refreshUser: vi.fn(),
      });

      const { getAllByAltText } = render(<AdminOnlyLayout />);

      expect(getAllByAltText("User Avatar")[0]).toHaveProperty(
        "src",
        "https://cdn.justwon.dev/profiles/profile.png",
      );
    });

    it("renders default avatar when user avatar_url is empty", () => {
      vi.spyOn(AuthContext, "useUser").mockReturnValue({
        user: { uuid: "test-uuid", username: "test-user", avatar_url: "" },
        refreshUser: vi.fn(),
      });

      const { getAllByAltText } = render(<AdminOnlyLayout />);

      expect(getAllByAltText("User Avatar")[0]).toHaveProperty(
        "src",
        "https://cdn.justwon.dev/profiles/profile.png",
      );
    });

    describe("user is null, but isAuthenticated is true", () => {
      const refreshUserMock = vi.fn();
      beforeEach(() => {
        refreshUserMock.mockReset();
        vi.spyOn(AuthContext, "useUser").mockReturnValue({
          user: null,
          refreshUser: refreshUserMock,
        });
      });

      it("renders warning popover when user is null", () => {
        const { getByText } = render(<AdminOnlyLayout />);

        expect(getByText("오류 발생")).toBeTruthy();
        expect(getByText("유저 정보를 불러오는데 실패했습니다.")).toBeTruthy();
        expect(
          getByText(
            "아래 버튼을 눌러 다시 시도하거나, 페이지를 새로고침 해주세요.",
          ),
        ).toBeTruthy();

        // refetchUser 함수 호출 테스트
        fireEvent.click(getByText("다시 시도하기"));

        expect(refreshUserMock).toHaveBeenCalled();
      });

      it("refresh user button doesn't work when icon is already spinning (already refreshing)", () => {
        vi.spyOn(DSTheme, "useRotateAnimation").mockReturnValue({
          spinning: true,
          startSpinning: vi.fn(),
          style: {},
        });
        const { getByText } = render(<AdminOnlyLayout />);

        // refetchUser 함수 호출 테스트
        fireEvent.click(getByText("다시 시도하기"));

        expect(refreshUserMock).not.toHaveBeenCalled();
      });
    });
  });
});
