"use client";

import "client-only";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import { useBlogCategory } from "../hooks/useCategory";
import { useBlogCategoryGroup } from "../hooks/useCategoryGroup";
import { CategoryGroupType, CategoryType } from "../models/categories";
import { ExpandableMenu } from "@shared/ui/Menus";

interface Props {
  group: CategoryGroupType;
}

/**
 * 블로그 카테고리 그룹 메뉴 컴포넌트 (사이드바에서 사용)
 *   - Interactive하기 때문에, 클라이언트 컴포넌트
 */

export function CategoryGroupMenu({ group }: Readonly<Props>) {
  const { selectedCategoryGroup } = useBlogCategoryGroup();
  const { selectedCategory } = useBlogCategory();

  const router = useRouter();

  const handleCategoryClick = (category: CategoryType) => {
    router.push(`/blog/${category.group.slug}/${category.slug}/`);
  };

  const handleMenuClick = () => {
    router.push(`/blog/${group.slug}/`);
  };

  return (
    <ExpandableMenu
      title={group.name}
      icon={group.icon}
      onMenuClick={handleMenuClick}
      isActive={group.id === selectedCategoryGroup?.id}
      key={group.id}
    >
      {group.categories.map((category) => (
        <CategoryButton
          key={category.id}
          className={category.id === selectedCategory?.id ? "active" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          <span>{category.name}</span>
          <span className="count">{category.num_posts}</span>
        </CategoryButton>
      ))}
    </ExpandableMenu>
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
