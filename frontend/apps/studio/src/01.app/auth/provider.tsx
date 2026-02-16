import type { ReactNode } from "react";
import { AuthProvider as Provider } from "@justkits/auth";

import { LoadingWidget } from "@widgets/loading";
import { refreshTokenAPI } from "@features/auth/refresh-token";
import { api } from "@shared/api/axios";

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <Provider
      instance={api}
      fallback={<LoadingWidget />}
      tokenRefreshAPICall={refreshTokenAPI}
    >
      {children}
    </Provider>
  );
}
