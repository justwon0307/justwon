import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@justkits/auth";

/**
 * Admin 앱이기 때문에 Landing 페이지를 따로 렌더링하지 않고, 라우팅 기능을 담당한다.
 */
export function LandingPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/editor" });
    } else {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, navigate]);

  return null;
}
