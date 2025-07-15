import { useMemo } from "react";
import { render } from "@testing-library/react";

import { AuthContext, useAuth } from "@shared/lib/auth";

jest.unmock("@shared/lib/auth");

const MockComponent = () => {
  const { user } = useAuth();

  return <div>{user ? "Authenticated" : "Not Authenticated"}</div>;
};

const MockProvider = ({ children }: { children: React.ReactNode }) => {
  const contextValue = useMemo(
    () => ({
      user: null,
      loading: false,
      logout: jest.fn(),
    }),
    []
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

describe("useAuth", () => {
  it("should return user as null when not authenticated", () => {
    const { getByText } = render(
      <MockProvider>
        <MockComponent />
      </MockProvider>
    );

    expect(getByText("Not Authenticated")).toBeInTheDocument();
  });

  it("should throw an error if used outside of AuthProvider", () => {
    expect(() => render(<MockComponent />)).toThrow(
      "useAuth must be used within an AuthProvider"
    );
  });
});
