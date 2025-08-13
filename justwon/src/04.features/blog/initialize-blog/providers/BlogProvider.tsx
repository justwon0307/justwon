"use client";

import "client-only";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { BlogInitializerResponseType } from "../models/response";
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
  data: BlogInitializerResponseType;
}

export function BlogProvider({ children, data }: Readonly<Props>) {
  const [selectedCategoryGroup, setSelectedCategoryGroup] =
    useState<CategoryGroupType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );

  const pathname = usePathname();

  useEffect(() => {
    const { selectedCategoryGroup, selectedCategory } = parseBlogURL(
      data.category_groups,
      pathname
    );
    setSelectedCategoryGroup(selectedCategoryGroup);
    setSelectedCategory(selectedCategory);
  }, [pathname, data]);

  const groupValue: BlogCategoryGroupContextType = useMemo(
    () => ({
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
