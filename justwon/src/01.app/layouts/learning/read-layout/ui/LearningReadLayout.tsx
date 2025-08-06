import { ReactNode } from "react";

import { ContentWrapper, DefaultLayout, Divider } from "@widgets/layouts";
import { LearningNewPostButton } from "@features/learning/create-post";
import {
  LearningCategoryGroupMenu,
  getAllCategories,
} from "@entities/learning";
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
 * 학습 섹션의 읽기 페이지들 전용 레이아웃 컴포넌트
 *   - 화면 왼쪽에 사이드바, 메인 콘텐츠 영역 상단에 서브헤더가 있고,
 *   - 서브헤더 아래에 콘텐츠 영역이 위치한다.
 */

export async function LearningReadLayout({ children }: Readonly<Props>) {
  const categoryGroups = await getAllCategories();

  return (
    <DefaultLayout>
      <SidebarContainer>
        <div className="header padding">
          <SearchButton />
          <LearningNewPostButton />
        </div>
        <SidebarDivider />
        <div className="main padding">
          <SidebarTitle>Learning</SidebarTitle>
          <SidebarItemContainer>
            {categoryGroups.map((group) => (
              <LearningCategoryGroupMenu key={group.id} group={group} />
            ))}
          </SidebarItemContainer>
        </div>
      </SidebarContainer>
      <Divider />
      <ContentWrapper>{children}</ContentWrapper>
    </DefaultLayout>
  );
}
