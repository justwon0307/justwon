import type { Metadata } from "next";

import { Container, Contents } from "./styles";
import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbItemType,
} from "@shared/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "학습 | JustWon",
  description: "",
};

/**
 * 학습 섹션의 랜딩 페이지
 *   - 카테고리 그룹 ID가 없을 때는 대시보드 형태로 렌더링
 */

export async function LearningLandingPage() {
  const breadcrumbItem: BreadcrumbItemType = {
    label: "Learning",
    href: "/learning",
  };

  return (
    <Container>
      <BreadcrumbContainer>
        <BreadcrumbItem item={breadcrumbItem} isLastItem />
      </BreadcrumbContainer>
      <Contents>
        <span>Learning Landing Page</span>
        <span>
          Hero/Intro (짧은 섹션 소개 문구. 대표 일러스트 / 코드 스니펫 배경.
          주요 목적 강조)
        </span>
        <span>검색 (이건 사이드바로 가도 됨.)</span>
        <span>
          시리즈 (시리즈 제목, 진행률, 요약, 더보기 등 // 가로 Carousel로 구현)
        </span>
        <span>
          최신 글 / 추천 글 (썸네일, 제목, 짧은 요약, 작성일, 읽기 시간 등 정보 // 최신/추천 토글로 구현)
        </span>
      </Contents>
    </Container>
  );
}
