/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, waitFor } from "@testing-library/react";
import { Session } from "@supabase/supabase-js";

import { AuthProvider } from "@app/providers";
import { sampleUser, useAuth } from "@shared/lib/auth";
import * as Supabase from "@shared/lib/supabase";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/lib/auth");

const MockComponent = () => {
  const { user, logout, refresh } = useAuth();

  return (
    <div>
      {user ? `User: ${user.id}` : "No user logged in"}
      <button onClick={logout}>Logout</button>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
};

describe("AuthProvider", () => {
  let stateChangeHandler: (
    event: string,
    session: Session | null
  ) => void = () => {};

  it("handles no initial auth session and login", async () => {
    jest.spyOn(Supabase, "createBrowserClient").mockReturnValue({
      auth: {
        getUser: jest.fn().mockResolvedValue({ data: { user: null } }),
        onAuthStateChange: jest.fn((handler) => {
          stateChangeHandler = handler;
          return { data: { subscription: { unsubscribe: jest.fn() } } };
        }),
      },
    } as any);

    const { getByText } = renderWithProviders(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(getByText("No user logged in")).toBeInTheDocument();
    });

    waitFor(() => {
      stateChangeHandler("SIGNED_IN", { user: sampleUser } as Session);
    });

    await waitFor(() => {
      expect(getByText(`User: ${sampleUser.id}`)).toBeInTheDocument();
    });

    fireEvent.click(getByText("Refresh"));

    waitFor(() => {
      stateChangeHandler("SIGNED_IN", { user: sampleUser } as Session);
    });
  });

  it("handles initial auth session and logout", async () => {
    const mockUser = {
      id: "user123",
      user_metadata: { avatar_url: "/avatar.png" },
    };

    jest.spyOn(Supabase, "createBrowserClient").mockReturnValue({
      auth: {
        getUser: jest.fn().mockResolvedValue({ data: { user: mockUser } }),
        onAuthStateChange: jest.fn().mockReturnValue({
          data: { subscription: { unsubscribe: jest.fn() } },
        }),
        signOut: jest.fn().mockResolvedValue({ error: null }),
      },
    } as any);

    const { getByText } = renderWithProviders(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(getByText(`User: ${mockUser.id}`)).toBeInTheDocument();
    });

    const logoutButton = getByText("Logout");
    logoutButton.click();

    waitFor(() => {
      stateChangeHandler("SIGNED_OUT", null);
    });

    await waitFor(() => {
      expect(getByText("No user logged in")).toBeInTheDocument();
    });
  });
});
