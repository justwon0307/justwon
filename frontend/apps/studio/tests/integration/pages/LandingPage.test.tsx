import { render } from "@testing-library/react";
import { redirect } from "@tanstack/react-router";

import { LandingPage, indexPageLoader } from "@pages/landing";

describe("index page", () => {
  describe("component", () => {
    it("renders nothing", () => {
      const { container } = render(<LandingPage />);

      expect(container.firstChild).toBeNull();
    });
  });

  describe("beforeLoad", () => {
    it("redirects to /editor if authenticated", () => {
      expect(() =>
        indexPageLoader({ context: { isAuthenticated: true } }),
      ).toThrow();

      expect(redirect).toHaveBeenCalledWith({ to: "/editor" });
    });

    it("redirects to /login if not authenticated", () => {
      expect(() =>
        indexPageLoader({ context: { isAuthenticated: false } }),
      ).toThrow();

      expect(redirect).toHaveBeenCalledWith({ to: "/login" });
    });
  });
});
