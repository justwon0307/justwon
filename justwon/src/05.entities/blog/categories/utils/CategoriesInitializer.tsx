"use client";

import { useEffect } from "react";

import { useBlogCategoryGroup } from "../hooks/useCategoryGroup";
import { CategoryGroupType } from "../models/category-group";

interface Props {
  data: CategoryGroupType[];
}

export function CategoriesInitializer({ data }: Readonly<Props>) {
  const { setCategoryGroups } = useBlogCategoryGroup();

  useEffect(() => {
    setCategoryGroups(data);
  }, [data, setCategoryGroups]);

  return null;
}
