import type { Metadata } from "next";

import { PageContents, PageWrapper } from "@widgets/layouts";
import {
  CategoryCard,
  getCategoryGroupDetails,
} from "@entities/blog/categories";
import { BreadcrumbContainer, BreadcrumbItem } from "@shared/ui/Breadcrumb";
import { Callout, Title } from "@shared/ui/Texts";

interface Props {
  params: Promise<{ catGrpSlug: string }>;
}

export async function generateMetadata({
  params,
}: Readonly<Props>): Promise<Metadata> {
  const { catGrpSlug } = await params;

  const data = await getCategoryGroupDetails(catGrpSlug);

  return {
    title: `${data.name} | JustWon`,
    description: data.description,
  };
}

/**
 * 카테고리 그룹 페이지
 *   - 그룹에 대한 간단한 설명과, 카테고리 목록을 보여주는 대시보드를 렌더링
 */

export async function BlogCategoryGroupPage({ params }: Readonly<Props>) {
  const { catGrpSlug } = await params;

  const data = await getCategoryGroupDetails(catGrpSlug);

  const blogLandingBreadcrumbItem = {
    label: "Blog",
    href: "/blog",
  };

  const categoryGroupBreadcrumbItem = {
    label: data.name,
    href: `/blog/${catGrpSlug}`,
  };

  return (
    <PageWrapper>
      <div className="header">
        <BreadcrumbContainer>
          <BreadcrumbItem item={blogLandingBreadcrumbItem} />
          <BreadcrumbItem item={categoryGroupBreadcrumbItem} isLastItem />
        </BreadcrumbContainer>
      </div>
      <PageContents>
        <Title title={data.name} icon={data.icon} />
        <Callout text={data.description} />
        <div className="content-divider" />
        <h3 className="subtitle">분류</h3>
        <div className="list">
          {data.categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </PageContents>
    </PageWrapper>
  );
}
