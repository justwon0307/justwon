import { fireEvent, waitFor } from "@testing-library/react";

import { LoginPage } from "@pages/login";
import * as Auth from "@shared/lib/auth";
import { renderWithProviders } from "@test-utils/renderer";

describe("LoginPage: ui", () => {
  beforeEach(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("renders default params correctly", async () => {
    const { getByTestId, getByText } = renderWithProviders(<LoginPage />);

    expect(getByText("Login or Signup with:")).toBeInTheDocument();

    fireEvent.click(getByTestId("google-login"));
    fireEvent.click(getByTestId("github-login"));
    fireEvent.click(getByTestId("admin-login"));

    await waitFor(() => {
      expect(getByText("관리자 로그인")).toBeInTheDocument();
    });
  });

  it("handles redirect if already logged in", async () => {
    jest.spyOn(Auth, "useAuth").mockReturnValue({
      user: Auth.sampleUser,
      loading: false,
      logout: jest.fn(),
    });

    renderWithProviders(<LoginPage />);
  });
});
