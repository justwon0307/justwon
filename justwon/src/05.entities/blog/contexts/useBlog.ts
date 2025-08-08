"use client";

import "client-only";
import { createContext, useContext } from "react";

import { CategoryType, CategoryGroupType } from "../models/categories";

export interface BlogContextType {
  categoryGroups: CategoryGroupType[];
  selectedCategoryGroup: CategoryGroupType | null;
  selectedCategory: CategoryType | null;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function useBlog(): BlogContextType {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }

  return context;
}
