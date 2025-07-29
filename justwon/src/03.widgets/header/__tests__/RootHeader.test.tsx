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

  it("should render user profile when authenticated", () => {
    jest.spyOn(AuthAPI, "useAuth").mockReturnValue({
      user: AuthAPI.sampleUser,
    });

    const { getByTestId } = renderWithProviders(<RootHeader />);

    expect(getByTestId("user-button")).toBeInTheDocument();
  });

  it("should render active tab correctly", () => {
    const mockUsePathname = Navigation.usePathname as jest.Mock;
    mockUsePathname.mockReturnValue("/projects");

    renderWithProviders(<RootHeader />);
  });
});
