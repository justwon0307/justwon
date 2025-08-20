"use client";

import "client-only";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { parseBlogURL } from "../utils/parseURL";
import {
  BlogCategoryContext,
  BlogCategoryContextType,
  BlogCategoryGroupContext,
  BlogCategoryGroupContextType,
  CategoryGroupType,
  CategoryType,
} from "@entities/blog/categories";

interface Props {
  children: ReactNode;
}

export function BlogProvider({ children }: Readonly<Props>) {
  const [categoryGroups, setCategoryGroups] = useState<CategoryGroupType[]>([]);

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

  const groupValue: BlogCategoryGroupContextType = useMemo(
    () => ({
      setCategoryGroups,
      selectedCategoryGroup,
    }),
    [selectedCategoryGroup]
  );

  const categoryValue: BlogCategoryContextType = useMemo(
    () => ({
      selectedCategory,
    }),
    [selectedCategory]
  );

  return (
    <BlogCategoryGroupContext.Provider value={groupValue}>
      <BlogCategoryContext.Provider value={categoryValue}>
        {children}
      </BlogCategoryContext.Provider>
    </BlogCategoryGroupContext.Provider>
  );
}
