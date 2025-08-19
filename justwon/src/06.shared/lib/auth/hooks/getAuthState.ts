import "server-only";

import { AuthStateType } from "../models/auth";

/**
 * 서버에서 사용하는 인증 관련 훅.
 */

export async function getAuthState(): Promise<AuthStateType> {
  // 여기에 실제 인증 로직을 구현합니다.
  // 예를 들어, API 호출을 통해 사용자 인증 상태를 확인할 수 있습니다.

  // 현재는 더미 데이터를 반환합니다.
  return {
    isAuthenticated: false,
    user: null,
  };
}
