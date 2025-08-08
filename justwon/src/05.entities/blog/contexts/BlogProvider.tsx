"use client";

import "client-only";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { BlogContext, BlogContextType } from "./useBlog";
import { CategoryGroupType, CategoryType } from "../models/categories";
import { parseBlogURL } from "../utils/parseURL";

interface Props {
  children: ReactNode;
  initialCategoryGroups: CategoryGroupType[];
}

/**
 * 클라이언트 사이드에서 블로그 데이터를 사용하기 위한 Context Provider (블로그 섹션 전역에 사용)
 * TODO: 서버 사이드에서 revalidateTag를 했을 때, 클라이언트 사이드에서도 해당 정보를 갱신할 수 있도록 구현해야 한다.
 */

export function BlogProvider({
  children,
  initialCategoryGroups,
}: Readonly<Props>) {
  const [categoryGroups, setCategoryGroups] = useState<CategoryGroupType[]>(
    initialCategoryGroups
  );
  const [selectedCategoryGroup, setSelectedCategoryGroup] =
    useState<CategoryGroupType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );

  const pathname = usePathname();

  useEffect(() => {
    const { selectedCategoryGroup, selectedCategory } = parseBlogURL(
      categoryGroups,
      pathname
    );
    setSelectedCategoryGroup(selectedCategoryGroup);
    setSelectedCategory(selectedCategory);
  }, [pathname, categoryGroups]);

  const value: BlogContextType = useMemo(
    () => ({
      categoryGroups,
      selectedCategoryGroup,
      selectedCategory,
    }),
    [categoryGroups, selectedCategoryGroup, selectedCategory]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
