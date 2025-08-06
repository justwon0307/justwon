"use client";

import "client-only";
import { createContext, useContext } from "react";

import {
  LearningCategoryType,
  LearningCategoryGroupType,
} from "../models/categories";

export interface LearningContextType {
  categoryGroups: LearningCategoryGroupType[];
  selectedCategoryGroup: LearningCategoryGroupType | null;
  selectedCategory: LearningCategoryType | null;
}

export const LearningContext = createContext<LearningContextType | undefined>(
  undefined
);

export function useLearning(): LearningContextType {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error("useLearning must be used within a LearningProvider");
  }
  return context;
}
