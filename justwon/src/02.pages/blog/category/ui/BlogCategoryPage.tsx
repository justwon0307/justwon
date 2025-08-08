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

export async function BlogCategoryPage({ params }: Readonly<Props>) {
  const { catSlug, catGrpSlug } = await params;

  const blogLandingBreadcrumbItem = {
    label: "Blog",
    href: "/blog",
  };

  const categoryGroupBreadcrumbItem = {
    label: catGrpSlug,
    href: `/blog/${catGrpSlug}`,
  };

  const categoryBreadcrumbItem = {
    label: catSlug,
    href: `/blog/${catGrpSlug}/${catSlug}`,
  };

  return (
    <PageWrapper>
      <BreadcrumbContainer>
        <BreadcrumbItem item={blogLandingBreadcrumbItem} />
        <BreadcrumbItem item={categoryGroupBreadcrumbItem} />
        <BreadcrumbItem item={categoryBreadcrumbItem} isLastItem />
      </BreadcrumbContainer>
      <PageContents>
        <h1>Category: {catSlug}</h1>
        <span>카테고리 이름 & 아이콘 & 핵심 개념 및 학습 포인트</span>
        <span>진도 표시 / 퍼센트 바 (쿠키 / 로컬 스토리지 기반)</span>
        <span>이런 글도 추천 섹션</span>
        <span>퀴즈 / 자가 진단</span>
        <span></span>
      </PageContents>
    </PageWrapper>
  );
}
