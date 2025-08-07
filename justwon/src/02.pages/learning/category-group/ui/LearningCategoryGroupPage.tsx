import type { Metadata } from "next";

import { PageContents, PageWrapper } from "@widgets/layouts";
import { BreadcrumbContainer, BreadcrumbItem } from "@shared/ui/Breadcrumb";

interface Props {
  params: Promise<{ catGrpSlug: string }>;
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const { catGrpSlug } = await params;

  return {
    title: `${catGrpSlug} | JustWon`,
    description: "",
  };
}

/**
 * 카테고리 그룹 페이지
 *   - 그룹에 대한 간단한 설명과, 카테고리 목록을 보여주는 대시보드를 렌더링
 */

export async function LearningCategoryGroupPage({ params }: Readonly<Props>) {
  const { catGrpSlug } = await params;

  const learningLandingBreadcrumbItem = {
    label: "Learning",
    href: "/learning",
  };

  const categoryGroupBreadcrumbItem = {
    label: catGrpSlug,
    href: `/learning/${catGrpSlug}`,
  };

  return (
    <PageWrapper>
      <BreadcrumbContainer>
        <BreadcrumbItem item={learningLandingBreadcrumbItem} />
        <BreadcrumbItem item={categoryGroupBreadcrumbItem} isLastItem />
      </BreadcrumbContainer>
      <PageContents>
        <h1>Category Group: {catGrpSlug}</h1>
        대시보드: 카테고리 그룹 ID만 있을 때는 해당 카테고리 그룹의 설명과
        카테고리 목록을 보여주는 대시보드를 렌더링
      </PageContents>
    </PageWrapper>
  );
}
