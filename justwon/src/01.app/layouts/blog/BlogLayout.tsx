import { ReactNode } from "react";

import { ErrorFallback } from "@widgets/error";
import { ContentWrapper, DefaultLayout } from "@widgets/layouts";
import {
  SidebarContainer,
  SidebarItemContainer,
  SidebarTitle,
} from "@widgets/sidebar";
import { OpenAdminModalButton } from "@features/blog/admin";
import { GoToNewPostButton } from "@features/blog/create-post";
import { BlogProvider, initializeBlog } from "@features/blog/initialize-blog";
import { CategoryGroupMenu } from "@entities/blog/categories";
import { APIError } from "@shared/api/models";
import { SearchButton } from "@shared/ui/Searchbar";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

/**
 * 블로그 페이지들 레이아웃 컴포넌트
 *   - 화면 왼쪽에 사이드바, 메인 콘텐츠 영역 상단에 서브헤더가 있고,
 *   - 서브헤더 아래에 콘텐츠 영역이 위치한다.
 */

export async function BlogLayout({ children, modal }: Readonly<Props>) {
  try {
    const data = await initializeBlog();

    return (
      <BlogProvider data={data}>
        <DefaultLayout>
          <SidebarContainer>
            <div className="header padding">
              <SearchButton />
              <GoToNewPostButton />
              <OpenAdminModalButton />
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
          {modal}
        </DefaultLayout>
      </BlogProvider>
    );
  } catch (error: unknown) {
    return (
      <ErrorFallback
        message={
          error instanceof APIError
            ? error.message
            : "데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요."
        }
      />
    );
  }
}
