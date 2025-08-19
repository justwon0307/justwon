import Link from "next/link";

import { HeaderTab } from "./ui/HeaderTab";
import { HeaderContainer } from "./ui/styles";
import { GoToLoginButton } from "@features/auth/login";
import { UserButton } from "@entities/user";
import { getAuthState } from "@shared/lib/auth";
import { LogoHorizontal } from "@shared/ui/Icons";

/**
 * 앱의 가장 상단에 위치하는 헤더 컴포넌트로, (서버 컴포넌트)
 * 로고와 메인 탭, 검색바, 그리고 사용자 프로필 버튼을 포함한다.
 *
 * 사용자 인증 상태에 따라 로그인 버튼 또는 사용자 프로필 버튼을 표시한다.
 */

export async function RootHeader() {
  const { isAuthenticated, user } = await getAuthState();

  return (
    <HeaderContainer>
      <Link href="/">
        <LogoHorizontal size={32} />
      </Link>
      <div className="tabs">
        <HeaderTab tab="projects" />
        <HeaderTab tab="blog" />
        <HeaderTab tab="about" />
        <div className="divider" />
        {isAuthenticated ? <UserButton user={user} /> : <GoToLoginButton />}
      </div>
    </HeaderContainer>
  );
}
