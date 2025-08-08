import type { Metadata } from "next";
import Image from "next/image";

import { PageContents, PageWrapper } from "@widgets/layouts";
import { BreadcrumbContainer, BreadcrumbItem } from "@shared/ui/Breadcrumb";
import { Title } from "@shared/ui/Texts";

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

export async function BlogCategoryGroupPage({ params }: Readonly<Props>) {
  const { catGrpSlug } = await params;

  const blogLandingBreadcrumbItem = {
    label: "Blog",
    href: "/blog",
  };

  const categoryGroupBreadcrumbItem = {
    label: catGrpSlug,
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
        <Title title="Blog Category Group" icon="start" />
        <Image
          src="https://cdn.justwon.dev/images/blog-category-group.jpg"
          alt="Blog Category Group"
          width={600}
          height={400}
        />
        <span>타이틀 & 설명 (주제 범위, 학습 목표)</span>
        <span>대표 이미지 / 아이콘 (개념 맵, 다이어그램 등)</span>
        <span>하위 카테고리 카드 디자인 (이름, 아이콘, 간략 설명)</span>
      </PageContents>
    </PageWrapper>
  );
}
