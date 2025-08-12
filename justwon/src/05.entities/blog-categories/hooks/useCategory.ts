"use client";

import "client-only";
import { createContext, useContext } from "react";

import { CategoryType } from "../models/categories";

export interface BlogCategoryContextType {
  selectedCategory: CategoryType | null;
}

export const BlogCategoryContext = createContext<
  BlogCategoryContextType | undefined
>(undefined);

export function useBlogCategory(): BlogCategoryContextType {
  const context = useContext(BlogCategoryContext);

  if (!context) {
    throw new Error("useBlogCategory must be used within a BlogProvider");
  }

  return context;
}
