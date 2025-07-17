import { fireEvent, waitFor } from "@testing-library/react";
import * as Navigation from "next/navigation";

import { RootHeader } from "@widgets/header";
import * as AuthAPI from "@shared/lib/auth";
import { renderWithProviders } from "@test-utils/renderer";

const mockUseSearchParams = Navigation.useSearchParams as jest.Mock;

describe("RootHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
    jest.spyOn(AuthAPI, "useAuth").mockReturnValue({
      user: null,
      loading: false,
      logout: jest.fn(),
      refresh: jest.fn(),
    });
  });

  it("should render the header with links (unauthorized)", () => {
    const { getByText } = renderWithProviders(<RootHeader />);

    expect(getByText("JustWon")).toBeInTheDocument();
    expect(getByText("Projects")).toBeInTheDocument();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Study")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();

    expect(getByText("login-icon")).toBeInTheDocument(); // mocked icon
  });

  it("handles login link path correctly", () => {
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams({ search: "query" })
    );

    renderWithProviders(<RootHeader />);
  });

  it("should render user profile when authenticated", () => {
    jest.spyOn(AuthAPI, "useAuth").mockReturnValue({
      user: AuthAPI.sampleUser,
      loading: false,
      logout: jest.fn(),
      refresh: jest.fn(),
    });

    const { getByAltText, getByTestId } = renderWithProviders(<RootHeader />);

    expect(getByTestId("user-button")).toBeInTheDocument();
    expect(getByAltText("User Avatar")).toHaveAttribute("src", "/avatar.png");
  });

  it("should show default avatar if user metadata is missing", async () => {
    jest.spyOn(AuthAPI, "useAuth").mockReturnValue({
      user: { ...AuthAPI.sampleUser, user_metadata: {} },
      loading: false,
      logout: jest.fn(),
      refresh: jest.fn(),
    });

    const { getByTestId, getByText } = renderWithProviders(<RootHeader />);

    expect(getByText("profile-icon")).toBeInTheDocument();

    fireEvent.click(getByTestId("user-button"));
    expect(getByText("Log out")).toBeInTheDocument();

    // 1차 시도: 로그아웃 취소
    jest.spyOn(window, "confirm").mockReturnValueOnce(false);
    fireEvent.click(getByText("Log out"));

    // 2차 시도: 로그아웃 확인
    fireEvent.click(getByTestId("user-button"));
    jest.spyOn(window, "confirm").mockReturnValueOnce(true);
    fireEvent.click(getByText("Log out"));

    await waitFor(() => {
      expect(AuthAPI.useAuth().logout).toHaveBeenCalled();
    });
  });
});
