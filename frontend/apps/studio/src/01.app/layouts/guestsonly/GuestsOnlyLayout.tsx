import { Outlet } from "@tanstack/react-router";
import { useAuth } from "@justkits/react-jwt";

export function GuestsOnlyLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return null;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
}
