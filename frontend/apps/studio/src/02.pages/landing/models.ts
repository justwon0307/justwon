import { redirect } from "@tanstack/react-router";
import type { RouterAuthContext } from "@justkits/react-jwt";

// index 루트에 접근 시도 시 auth 상태를 판단하여 editor나 login으로 리디렉트 시킨다
export function indexPageLoader({ context }: { context: RouterAuthContext }) {
  if (context.isAuthenticated) {
    throw redirect({ to: "/editor" });
  } else {
    throw redirect({ to: "/login" });
  }
}
