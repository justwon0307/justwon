"use client";

import "client-only";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import { useLearning } from "../contexts/useLearning";
import {
  LearningCategoryGroupType,
  LearningCategoryType,
} from "../models/categories";
import { ExpandableSidebarItem } from "@shared/ui/Sidebar";

interface Props {
  group: LearningCategoryGroupType;
}

/**
 * 학습 카테고리 그룹 메뉴 컴포넌트
 *   - Interactive하기 때문에, 클라이언트 컴포넌트
 */

export function LearningCategoryGroupMenu({ group }: Readonly<Props>) {
  const { selectedCategoryGroup, selectedCategory } = useLearning();

  const router = useRouter();

  const handleCategoryClick = (category: LearningCategoryType) => {
    router.push(`/learning/${category.category_group_slug}/${category.slug}/`);
  };

  return (
    <ExpandableSidebarItem
      title={group.name}
      href={`/learning/${group.slug}/`}
      isActive={group.id === selectedCategoryGroup?.id}
      key={group.id}
    >
      {group.categories.map((category) => (
        <CategoryButton
          key={category.id}
          onClick={() => handleCategoryClick(category)}
          className={category.id === selectedCategory?.id ? "active" : ""}
        >
          <span>{category.name}</span>
          <span className="count">{category.num_posts}</span>
        </CategoryButton>
      ))}
    </ExpandableSidebarItem>
  );
}

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  text-decoration: none;
  color: inherit;
  border-radius: 8px;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.gray400};

    .count {
      background-color: ${({ theme }) => theme.colors.backgroundDefault};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.gray300};

    .count {
      background-color: ${({ theme }) => theme.colors.backgroundDefault};
    }
  }

  .count {
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 0.825rem;
    line-height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;
