import * as AuthContext from "@justkits/auth";
import * as Router from "@tanstack/react-router";

import { LandingPage } from "@pages/landing";
import { renderWithProviders } from "@tests/render";

describe("LandingPage", () => {
  it("redirects to /login if not authenticated", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: false,
      setAuthState: vi.fn(),
      clearAuthState: vi.fn(),
      broadcast: vi.fn(),
    });

    renderWithProviders(<LandingPage />);

    expect(Router.useNavigate()).toHaveBeenCalledWith({ to: "/login" });
  });

  it("redirects to /editor if authenticated", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: true,
      setAuthState: vi.fn(),
      clearAuthState: vi.fn(),
      broadcast: vi.fn(),
    });

    renderWithProviders(<LandingPage />);

    expect(Router.useNavigate()).toHaveBeenCalledWith({ to: "/editor" });
  });
});
