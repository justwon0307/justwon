import { ReactNode, Suspense } from "react";

import { BlogProvider } from "./providers/BlogProvider";
import { BlogCategoryList, BlogCategoryLoading } from "./ui/BlogCategoryList";
import { ContentWrapper, DefaultLayout } from "@widgets/containers";
import { SidebarContainer, SidebarTitle } from "@widgets/sidebars";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

/**
 * 블로그 페이지들 레이아웃 컴포넌트
 *   - 화면 왼쪽에 사이드바, 메인 콘텐츠 영역 상단에 서브헤더가 있고,
 *   - 서브헤더 아래에 콘텐츠 영역이 위치한다.
 */

export function BlogLayout({ children, modal }: Readonly<Props>) {
  return (
    <BlogProvider>
      <DefaultLayout>
        <SidebarContainer>
          <div className="main padding">
            <SidebarTitle>Blog</SidebarTitle>
            <Suspense fallback={<BlogCategoryLoading />}>
              <BlogCategoryList />
            </Suspense>
          </div>
        </SidebarContainer>
        <div className="vertical-divider" />
        <ContentWrapper>{children}</ContentWrapper>
        {modal}
      </DefaultLayout>
    </BlogProvider>
  );
}
