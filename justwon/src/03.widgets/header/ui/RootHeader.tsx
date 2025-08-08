import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { Tab } from "./_tab";
import { Container, Divider, Tabs } from "./styles";
import { AppIcon, LogoHorizontal } from "@shared/ui/Icons";

/**
 * 앱의 가장 상단에 위치하는 헤더 컴포넌트로,
 * 로고와 여러 탭, 그리고 사용자 프로필 버튼을 포함한다.
 * 
 * 사용자 인증 상태에 따라 로그인 버튼 또는 사용자 프로필 버튼을 표시한다.
 */

export async function RootHeader() {
  const { userId } = await auth();

  return (
    <Container>
      <Link href="/" className="title">
        <LogoHorizontal size={32} />
      </Link>
      <Tabs>
        <Tab tab="projects" />
        <Tab tab="blog" />
        <Tab tab="about" />
        <Divider />
        {userId ? (
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
    </Container>
  );
}
