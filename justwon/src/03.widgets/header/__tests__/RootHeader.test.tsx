/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Navigation from "next/navigation";
import * as ClerkServer from "@clerk/nextjs/server";

import { RootHeader } from "@widgets/header";
import { renderWithProvidersAsync } from "@test-utils/renderer";

jest.mock("@clerk/nextjs/server", () => ({
  auth: jest.fn(() => Promise.resolve({ userId: null })),
}));
const mockUseSearchParams = Navigation.useSearchParams as jest.Mock;
const mockAuthAPI = ClerkServer.auth as jest.MockedFunction<
  typeof ClerkServer.auth
>;

describe("RootHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });

  it("should render the header with links (unauthorized)", async () => {
    const mockUsePathname = Navigation.usePathname as jest.Mock;
    mockUsePathname.mockReturnValue("/projects");

    const { getByText } = await renderWithProvidersAsync(() => RootHeader());

    expect(getByText("main-logo-horizontal")).toBeInTheDocument();
    expect(getByText("Projects")).toBeInTheDocument();
    expect(getByText("Blog")).toBeInTheDocument();
    expect(getByText("Learning")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();

    expect(getByText("login-icon")).toBeInTheDocument(); // mocked icon
  });

  it("should render user profile when authenticated", async () => {
    mockAuthAPI.mockResolvedValue({ userId: "test-user-id" } as any);

    const { getByTestId } = await renderWithProvidersAsync(() => RootHeader());

    expect(getByTestId("user-button")).toBeInTheDocument();
  });
});
