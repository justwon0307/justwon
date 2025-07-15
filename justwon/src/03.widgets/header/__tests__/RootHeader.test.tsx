import { RootHeader } from "@widgets/header";
import * as AuthAPI from "@shared/lib/auth";
import { renderWithProviders } from "@test-utils/renderer";

describe("RootHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(AuthAPI, "useAuth").mockReturnValue({
      user: null,
      loading: false,
      logout: jest.fn(),
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
    const mockUser = {
      id: "user123",
      user_metadata: { avatar_url: "/avatar.png" },
    };
    jest.spyOn(AuthAPI, "useAuth").mockReturnValue({
      user: AuthAPI.sampleUser,
      loading: false,
      logout: jest.fn(),
    });

    const { getByText, getByAltText } = renderWithProviders(<RootHeader />);

    expect(getByText(mockUser.id)).toBeInTheDocument();
    expect(getByAltText("User Avatar")).toHaveAttribute(
      "src",
      mockUser.user_metadata.avatar_url
    );
  });

  it("should show default avatar if user metadata is missing", () => {
    jest.spyOn(AuthAPI, "useAuth").mockReturnValue({
      user: { ...AuthAPI.sampleUser, user_metadata: {} },
      loading: false,
      logout: jest.fn(),
    });

    const { getByAltText } = renderWithProviders(<RootHeader />);

    expect(getByAltText("User Avatar")).toHaveAttribute(
      "src",
      "/default-avatar.png"
    );
  });
});
