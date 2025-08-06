import { initializeLearning } from "@features/learning/categories";
import {
  LearningCategoryGroupType,
  LearningProvider,
} from "@entities/learning";
import { APIResponseType } from "@shared/api/models";

/**
 * 학습 섹션 전역에서 필요한 기본 데이터를 가져오는 레이아웃 컴포넌트
 */

export async function LearningRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const result: APIResponseType<LearningCategoryGroupType[]> =
    await initializeLearning();

  return (
    <LearningProvider
      initialCategoryGroups={result.status === "SUCCESS" ? result.data : []}
    >
      {children}
    </LearningProvider>
  );
}
