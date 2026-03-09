import { type ReactNode } from "react";
import { AuthProvider as Provider } from "@justkits/react-jwt";
import { toast } from "@justwon/designs/components";

import { selectAccessToken, shouldRefresh } from "./selectors";
import { LoadingWidget } from "@widgets/loading";
import { api } from "@shared/api/axios";

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Readonly<Props>) {
  const onLoginSuccessSync = () => {
    toast(
      "다른 탭에서 인증 상태에 변화가 감지되었습니다. 페이지를 새로고침 해주세요!",
      {
        type: "success",
      },
    );
  };

  const onLogoutSync = () => {
    toast("다른 탭에서 로그아웃하였습니다!", {
      type: "info",
    });
  };

  const onRefreshFail = () => {
    toast("세션이 만료되었습니다. 다시 로그인해주세요.", {
      type: "warning",
    });
  };

  return (
    <Provider
      instance={api}
      fallback={<LoadingWidget />}
      config={{
        selectors: {
          accessToken: selectAccessToken,
        },
        onSessionSync: {
          reloadOnLogin: false,
          LOGIN_SUCCESS: onLoginSuccessSync,
          LOGOUT: onLogoutSync,
        },
        onRefreshFail,
        shouldRefresh: shouldRefresh,
      }}
    >
      {children}
    </Provider>
  );
}
