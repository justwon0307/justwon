import { fireEvent, render, waitFor } from "@testing-library/react";
import type { AxiosError, AxiosResponse } from "axios";
import { redirect } from "@tanstack/react-router";
import { toast } from "@justwon/designs/components";

import { App } from "@app/App";
import { loginRequired, guestsOnly } from "@app/auth";
import { shouldRefresh, selectAccessToken } from "@app/auth/selectors";

// vitest.setup.tsx에서 간편하게 테스트할 수 있도록 버튼들을 모킹해두었다.
describe("AuthProvider", () => {
  it("handles onLoginSuccessSync correctly", async () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId("login-success-btn"));

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith(
        "다른 탭에서 인증 상태에 변화가 감지되었습니다. 페이지를 새로고침 해주세요!",
        { type: "success" },
      );
    });
  });

  it("handles onLogoutSync correctly", async () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId("logout-btn"));

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith("다른 탭에서 로그아웃하였습니다!", {
        type: "info",
      });
    });
  });

  it("handles onRefreshFail correctly", async () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId("refresh-fail-btn"));

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith(
        "세션이 만료되었습니다. 다시 로그인해주세요.",
        { type: "warning" },
      );
    });
  });
});

describe("selectors", () => {
  describe("shouldRefresh", () => {
    it("returns true for 401 with TOKEN_EXPIRED", () => {
      const error = {
        response: {
          status: 401,
          data: { code: "TOKEN_EXPIRED" },
        },
      } as AxiosError;

      expect(shouldRefresh(error)).toBe(true);
    });

    it("returns false for non-401 errors", () => {
      const error = {
        response: {
          status: 500,
          data: {},
        },
      } as AxiosError;

      expect(shouldRefresh(error)).toBe(false);
    });

    it("returns false for 401 without TOKEN_EXPIRED", () => {
      const error = {
        response: {
          status: 401,
          data: { code: "OTHER_ERROR" },
        },
      } as AxiosError;

      expect(shouldRefresh(error)).toBe(false);
    });
  });

  describe("selectAccessToken", () => {
    it("extracts access token from response", () => {
      const response = {
        data: {
          access: "test-access-token",
        },
      } as AxiosResponse;

      expect(selectAccessToken(response)).toBe("test-access-token");
    });
  });
});

describe("loaders", () => {
  describe("loginRequired", () => {
    it("loginRequired calls toast and redirect when not authenticated", () => {
      expect(() =>
        loginRequired({ context: { auth: { isAuthenticated: false } } }),
      ).toThrow();

      expect(toast).toHaveBeenCalledWith(
        "로그인이 필요한 페이지입니다. 로그인 페이지로 이동합니다.",
        { type: "warning", duration: 3000, position: "bottom-right" },
      );
      expect(redirect).toHaveBeenCalledWith({ to: "/login" });
    });

    it("loginRequired does nothing when authenticated", () => {
      expect(() =>
        loginRequired({ context: { auth: { isAuthenticated: true } } }),
      ).not.toThrow();
    });
  });

  describe("guestsOnly", () => {
    it("guestsOnly calls toast and redirect when authenticated", () => {
      expect(() =>
        guestsOnly({ context: { auth: { isAuthenticated: true } } }),
      ).toThrow();

      expect(toast).toHaveBeenCalledWith(
        "이미 로그인된 상태입니다. 에디터 페이지로 이동합니다.",
        { type: "info", duration: 3000, position: "bottom-right" },
      );
      expect(redirect).toHaveBeenCalledWith({ to: "/editor" });
    });

    it("guestsOnly does nothing when not authenticated", () => {
      expect(() =>
        guestsOnly({ context: { auth: { isAuthenticated: false } } }),
      ).not.toThrow();
    });
  });
});
