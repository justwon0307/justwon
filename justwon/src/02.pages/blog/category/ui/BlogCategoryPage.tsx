import type { Metadata } from "next";

import { PageContents, PageWrapper } from "@widgets/layouts";
import { getCategoryDetails } from "@entities/blog";
import { BreadcrumbContainer, BreadcrumbItem } from "@shared/ui/Breadcrumb";
import { Callout, Title } from "@shared/ui/Texts";

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

  const data = await getCategoryDetails(catSlug);

  return {
    title: `${data.name} | JustWon`,
    description: data.description,
  };
}

/**
 * 카테고리 페이지
 *   - 카테고리 그룹 ID와 카테고리 ID가 모두 있을 때는 해당 카테고리의 글 목록을 보여주는 페이지로 렌더링
 */

export async function BlogCategoryPage({ params }: Readonly<Props>) {
  const { catSlug, catGrpSlug } = await params;

  const data = await getCategoryDetails(catSlug);

  const blogLandingBreadcrumbItem = {
    label: "Blog",
    href: "/blog",
  };

  const categoryGroupBreadcrumbItem = {
    label: data.group.name,
    href: `/blog/${catGrpSlug}`,
  };

  const categoryBreadcrumbItem = {
    label: data.name,
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
        <Title title={data.name} icon={data.icon} />
        <Callout text={data.description} />
        <div className="content-divider" />
        <h3 className="subtitle">게시글 목록</h3>
        <div className="list">{/* 게시글 목록 렌더링 */}</div>
      </PageContents>
    </PageWrapper>
  );
}
