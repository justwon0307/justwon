import { ReactNode } from "react";

import { ContentWrapper, DefaultLayout } from "@widgets/layouts";
import {
  SidebarContainer,
  SidebarItemContainer,
  SidebarTitle,
} from "@widgets/sidebar";
import { OpenAdminMenuButton } from "@features/blog/admin-menu";
import { GoToNewPostButton } from "@features/blog/create-post";
import { initializeBlog } from "@features/blog/initialize-blog";
import { CategoryGroupMenu } from "@entities/blog/categories";
import { SearchButton } from "@shared/ui/Searchbar";

interface Props {
  children: ReactNode;
}

/**
 * 블로그 섹션의 읽기 페이지들 전용 레이아웃 컴포넌트
 *   - 화면 왼쪽에 사이드바, 메인 콘텐츠 영역 상단에 서브헤더가 있고,
 *   - 서브헤더 아래에 콘텐츠 영역이 위치한다.
 */

export async function BlogReadLayout({ children }: Readonly<Props>) {
  const data = await initializeBlog();

  return (
    <DefaultLayout>
      <SidebarContainer>
        <div className="header padding">
          <SearchButton />
          <GoToNewPostButton />
          <OpenAdminMenuButton />
        </div>
        <div className="sidebar-divider" />
        <div className="main padding">
          <SidebarTitle>Blog</SidebarTitle>
          <SidebarItemContainer>
            {data.category_groups.map((group) => (
              <CategoryGroupMenu key={group.id} group={group} />
            ))}
          </SidebarItemContainer>
        </div>
      </SidebarContainer>
      <div className="vertical-divider" />
      <ContentWrapper>{children}</ContentWrapper>
    </DefaultLayout>
  );
}
