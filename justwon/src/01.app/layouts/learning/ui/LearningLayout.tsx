import { ContentWrapper, DefaultLayout, Divider } from "@widgets/layouts";
import {
  CategoryGroupSidebar,
  initializeLearning,
} from "@features/learning/categories";
import { LearningCategoryGroupType } from "@entities/learning";
import { APIResponseType } from "@shared/api/models";
import {
  SidebarContainer,
  SidebarErrorWrapper,
  SidebarTitle,
} from "@shared/ui/Sidebar";

export async function LearningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const result: APIResponseType<LearningCategoryGroupType[]> =
    await initializeLearning();

  return (
    <DefaultLayout>
      <SidebarContainer>
        <SidebarTitle>Learning</SidebarTitle>
        {result.status === "SUCCESS" ? (
          <CategoryGroupSidebar groups={result.data} />
        ) : (
          <SidebarErrorWrapper>
            <p>{result.message}</p>
          </SidebarErrorWrapper>
        )}
      </SidebarContainer>
      <Divider />
      <ContentWrapper>{children}</ContentWrapper>
    </DefaultLayout>
  );
}
