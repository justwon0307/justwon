import { ReactNode } from "react";

import { ContentWrapper, DefaultLayout, Divider } from "@widgets/layouts";
import { GoToNewPostButton } from "@features/blog/create-post";
import { CategoryGroupMenu, getAllCategoryGroups } from "@entities/blog";
import { SearchButton } from "@shared/ui/Searchbar";
import {
  SidebarContainer,
  SidebarDivider,
  SidebarItemContainer,
  SidebarTitle,
} from "@shared/ui/Sidebar";

interface Props {
  children: ReactNode;
}

/**
 * 블로그 섹션의 읽기 페이지들 전용 레이아웃 컴포넌트
 *   - 화면 왼쪽에 사이드바, 메인 콘텐츠 영역 상단에 서브헤더가 있고,
 *   - 서브헤더 아래에 콘텐츠 영역이 위치한다.
 */

export async function BlogReadLayout({ children }: Readonly<Props>) {
  const categoryGroups = await getAllCategoryGroups();

  return (
    <DefaultLayout>
      <SidebarContainer>
        <div className="header padding">
          <SearchButton />
          <GoToNewPostButton />
        </div>
        <SidebarDivider />
        <div className="main padding">
          <SidebarTitle>Blog</SidebarTitle>
          <SidebarItemContainer>
            {categoryGroups.map((group) => (
              <CategoryGroupMenu key={group.id} group={group} />
            ))}
          </SidebarItemContainer>
        </div>
      </SidebarContainer>
      <Divider />
      <ContentWrapper>{children}</ContentWrapper>
    </DefaultLayout>
  );
}
