import { fireEvent, waitFor } from "@testing-library/react";
import * as Navigation from "next/navigation";

import { LoginPage } from "@pages/login";
import * as Supabase from "@shared/lib/supabase";
import { renderWithProviders } from "@test-utils/renderer";

const mockUseRouter = Navigation.useRouter as jest.Mock;
const mockUseSearchParams = Navigation.useSearchParams as jest.Mock;
const mockCreateServerClient = Supabase.createServerClient as jest.Mock;

describe("LoginPage: admin login", () => {
  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      refresh: jest.fn(),
      replace: jest.fn(),
    });
    mockUseSearchParams.mockReturnValue(new URLSearchParams({ mode: "admin" }));
    mockCreateServerClient.mockResolvedValue({
      auth: {
        signInWithPassword: jest.fn().mockResolvedValue({ error: null }),
      },
    });
  });

  it("handles back press", () => {
    const { getByTestId, getByText } = renderWithProviders(<LoginPage />);

    expect(getByText("관리자 로그인")).toBeInTheDocument();

    fireEvent.click(getByTestId("back"));
  });

  it("handles admin login correctly", async () => {
    const { getByTestId, getByText } = renderWithProviders(<LoginPage />);

    fireEvent.change(getByTestId("email"), {
      target: { value: "new@email.com" },
    });
    fireEvent.change(getByTestId("password"), {
      target: { value: "newpassword" },
    });

    mockCreateServerClient.mockResolvedValueOnce({
      auth: {
        signInWithPassword: jest
          .fn()
          .mockResolvedValue({ error: { message: "Invalid Credentials" } }),
      },
    });
    fireEvent.click(getByTestId("submit"));

    await waitFor(() => {
      expect(getByText("Invalid Credentials")).toBeInTheDocument();
    });

    mockCreateServerClient.mockResolvedValueOnce({
      auth: {
        signInWithPassword: jest.fn().mockResolvedValue({ error: null }),
      },
    });
    fireEvent.click(getByTestId("submit"));

    await waitFor(() => {
      expect(mockUseRouter().replace).toHaveBeenCalledWith("/");
    });
  });

  it("handles admin login with returnTo param", async () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams({ mode: "admin", returnTo: "/blog" })
    );

    const { getByTestId } = renderWithProviders(<LoginPage />);

    fireEvent.change(getByTestId("email"), {
      target: { value: "new@email.com" },
    });
    fireEvent.change(getByTestId("password"), {
      target: { value: "newpassword" },
    });

    mockCreateServerClient.mockResolvedValue({
      auth: {
        signInWithPassword: jest.fn().mockResolvedValue({ error: null }),
      },
    });
    fireEvent.click(getByTestId("submit"));

    await waitFor(() => {
      expect(mockUseRouter().replace).toHaveBeenCalledWith("/blog");
    });
  });
});
