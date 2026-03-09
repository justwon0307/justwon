import { render } from "@testing-library/react";
import * as AuthContext from "@justkits/react-jwt";

import { GuestsOnlyLayout } from "@app/layouts/guestsonly";

describe("GuestsOnlyLayout", () => {
  it("renders children when not authenticated", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: false,
      login: vi.fn(),
      logout: vi.fn(),
    });

    const { getByText } = render(<GuestsOnlyLayout />);

    const content = getByText("Outlet");
    expect(content).toBeTruthy();
  });

  it("renders null when authenticated", () => {
    vi.spyOn(AuthContext, "useAuth").mockReturnValue({
      isAuthenticated: true,
      login: vi.fn(),
      logout: vi.fn(),
    });

    const { container } = render(<GuestsOnlyLayout />);

    expect(container.firstChild).toBeNull();
  });
});
