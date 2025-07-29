/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Clerk from "@clerk/nextjs";

import { AuthProvider } from "@app/providers";
import { sampleUser, useAuth } from "@shared/lib/auth";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/lib/auth");

const MockComponent = () => {
  const { user } = useAuth();

  return <div>{user ? `User: ${user.id}` : "No user logged in"}</div>;
};

describe("AuthProvider", () => {
  it("handles no user correctly", () => {
    jest
      .spyOn(Clerk, "useUser")
      .mockReturnValue({ user: null, isLoaded: true, isSignedIn: false });

    const { getByText } = renderWithProviders(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );
    expect(getByText("No user logged in")).toBeInTheDocument();
  });

  it("handles authenticated user (admin) correctly", () => {
    jest.spyOn(Clerk, "useUser").mockReturnValue({
      user: { id: sampleUser.id, publicMetadata: { role: "admin" } },
    } as any);

    const { getByText } = renderWithProviders(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );
    expect(getByText(`User: ${sampleUser.id}`)).toBeInTheDocument();
  });

  it("handles authenticated user (non-admin) correctly", () => {
    jest.spyOn(Clerk, "useUser").mockReturnValue({
      user: { id: sampleUser.id, publicMetadata: { role: "member" } },
    } as any);

    const { getByText } = renderWithProviders(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );
    expect(getByText(`User: ${sampleUser.id}`)).toBeInTheDocument();
  });
});
