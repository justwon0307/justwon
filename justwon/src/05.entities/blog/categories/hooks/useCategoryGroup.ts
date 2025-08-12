"use client";

import "client-only";
import { createContext, useContext } from "react";

import { CategoryGroupType } from "../models/categories";

export interface BlogCategoryGroupContextType {
  selectedCategoryGroup: CategoryGroupType | null;
}

export const BlogCategoryGroupContext = createContext<
  BlogCategoryGroupContextType | undefined
>(undefined);

export function useBlogCategoryGroup(): BlogCategoryGroupContextType {
  const context = useContext(BlogCategoryGroupContext);

  if (!context) {
    throw new Error("useBlogCategoryGroup must be used within a BlogProvider");
  }

  return context;
}
