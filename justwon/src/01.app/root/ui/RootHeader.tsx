import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { HeaderTab } from "@widgets/tab";
import { HeaderContainer, Tabs } from "./styles";
import { isLoggedIn } from "@shared/lib/auth";
import { AppIcon, LogoHorizontal } from "@shared/ui/Icons";

/**
 * 앱의 가장 상단에 위치하는 헤더 컴포넌트로,
 * 로고와 여러 탭, 그리고 사용자 프로필 버튼을 포함한다.
 *
 * 사용자 인증 상태에 따라 로그인 버튼 또는 사용자 프로필 버튼을 표시한다.
 */

export async function RootHeader() {
  const authenticated = await isLoggedIn();

  return (
    <HeaderContainer>
      <Link href="/" className="title">
        <LogoHorizontal size={32} />
      </Link>
      <Tabs>
        <HeaderTab tab="projects" />
        <HeaderTab tab="blog" />
        <HeaderTab tab="about" />
        <div className="divider" />
        {authenticated ? (
          <div className="user-button">
            <UserButton />
          </div>
        ) : (
          <Link
            href={{
              pathname: "/login",
            }}
          >
            <AppIcon icon="login" size={18} />
          </Link>
        )}
      </Tabs>
    </HeaderContainer>
  );
}
