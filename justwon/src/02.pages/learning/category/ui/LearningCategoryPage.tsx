import type { Metadata } from "next";

import { PageContents, PageWrapper } from "@widgets/layouts";
import { BreadcrumbContainer, BreadcrumbItem } from "@shared/ui/Breadcrumb";

interface Props {
  params: Promise<{
    catGrpSlug: string;
    catSlug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const { catSlug } = await params;

  return {
    title: `${catSlug} | JustWon`,
    description: "",
  };
}

/**
 * 카테고리 페이지
 *   - 카테고리 그룹 ID와 카테고리 ID가 모두 있을 때는 해당 카테고리의 글 목록을 보여주는 페이지로 렌더링
 */

export async function LearningCategoryPage({ params }: Readonly<Props>) {
  const { catSlug, catGrpSlug } = await params;

  const learningLandingBreadcrumbItem = {
    label: "Learning",
    href: "/learning",
  };

  const categoryGroupBreadcrumbItem = {
    label: catGrpSlug,
    href: `/learning/${catGrpSlug}`,
  };

  const categoryBreadcrumbItem = {
    label: catSlug,
    href: `/learning/${catGrpSlug}/${catSlug}`,
  };

  return (
    <PageWrapper>
      <BreadcrumbContainer>
        <BreadcrumbItem item={learningLandingBreadcrumbItem} />
        <BreadcrumbItem item={categoryGroupBreadcrumbItem} />
        <BreadcrumbItem item={categoryBreadcrumbItem} isLastItem />
      </BreadcrumbContainer>
      <PageContents>
        <h1>Category: {catSlug}</h1>
        <div>해당 카테고리의 글 목록을 보여주는 페이지로 렌더링</div>
      </PageContents>
    </PageWrapper>
  );
}
