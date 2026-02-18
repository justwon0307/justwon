import { useEffect } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { ProtectedRoute, useAuth } from "@justkits/auth";

export function RequireAuth() {
  const navigate = useNavigate();

  const fallback = () => {
    navigate({ to: "/login" });
  };

  return (
    <ProtectedRoute onUnauthorized={fallback}>
      <Outlet />
    </ProtectedRoute>
  );
}

export function RequireNoAuth() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/editor" });
    }
  }, [navigate, isAuthenticated]);

  return <Outlet />;
}
