import type { ReactNode } from "react";
import { AuthProvider as Provider } from "@justkits/auth";
import { toast } from "@justwon/designs/components";

import { LoadingWidget } from "@widgets/loading";
import { refreshTokenAPI } from "@features/auth/refresh-token";
import { api } from "@shared/api/axios";

export function AuthProvider({ children }: { children: ReactNode }) {
  const onLoginSuccess = () => {
    toast(
      "다른 탭에서 로그인에 성공하여 세션이 갱신되었습니다!",
      { type: "success" },
      true,
    );
  };

  return (
    <Provider
      instance={api}
      fallback={<LoadingWidget />}
      tokenRefreshAPICall={refreshTokenAPI}
      onLoginSuccess={onLoginSuccess}
    >
      {children}
    </Provider>
  );
}
