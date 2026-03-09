import { redirect } from "@tanstack/react-router";
import type { RouterAuthContext } from "@justkits/react-jwt";
import { toast } from "@justwon/designs/components";

export function loginRequired({ context }: { context: RouterAuthContext }) {
  if (!context.isAuthenticated) {
    // 로그인 되어있지 않으면, alert를 띄우고, 로그인 페이지로 리다이렉트
    toast("로그인이 필요한 페이지입니다. 로그인 페이지로 이동합니다.", {
      type: "warning",
      duration: 3000,
      position: "bottom-right",
    });

    throw redirect({ to: "/login" });
  }
}

export function guestsOnly({ context }: { context: RouterAuthContext }) {
  if (context.isAuthenticated) {
    // 이미 로그인 되어있으면, alert를 띄우고, 에디터 페이지로 리다이렉트
    toast("이미 로그인된 상태입니다. 에디터 페이지로 이동합니다.", {
      type: "info",
      duration: 3000,
      position: "bottom-right",
    });

    throw redirect({ to: "/editor" });
  }
}
