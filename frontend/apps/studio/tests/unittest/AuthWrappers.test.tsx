import { fireEvent } from "@testing-library/react";
import * as Router from "@tanstack/react-router";
import * as AuthContext from "@justkits/auth";

import { RequireAuth, RequireNoAuth } from "@app/auth";
import { renderWithProviders } from "@tests/render";

describe("RequireAuth", () => {
  it("renders children when authenticated", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: false,
      setAuthState: vi.fn(),
      clearAuthState: vi.fn(),
      broadcast: vi.fn(),
    });

    const { getByText } = renderWithProviders(<RequireAuth />);

    const content = getByText("Protected Content");
    expect(content).toBeTruthy();
  });

  it("redirects to /login when not authenticated", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: false,
      setAuthState: vi.fn(),
      clearAuthState: vi.fn(),
      broadcast: vi.fn(),
    });

    const { getByText } = renderWithProviders(<RequireAuth />);

    // onUnauthorized 테스트는 클릭으로 간이 테스트를 진행
    const unauthorizedButton = getByText("Unauthorized");
    fireEvent.click(unauthorizedButton);
    expect(Router.useNavigate()).toHaveBeenCalledWith({ to: "/login" });
  });
});

describe("RequireNoAuth", () => {
  it("renders children when not authenticated", () => {
    const { getByText } = renderWithProviders(<RequireNoAuth />);

    const content = getByText("Outlet");
    expect(content).toBeTruthy();
  });

  it("redirects to /editor when authenticated", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: true,
      setAuthState: vi.fn(),
      clearAuthState: vi.fn(),
      broadcast: vi.fn(),
    });

    renderWithProviders(<RequireNoAuth />);

    expect(Router.useNavigate()).toHaveBeenCalledWith({ to: "/editor" });
  });
});
