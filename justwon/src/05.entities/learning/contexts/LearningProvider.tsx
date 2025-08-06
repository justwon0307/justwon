"use client";

import "client-only";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { LearningContext, LearningContextType } from "./useLearning";
import {
  LearningCategoryGroupType,
  LearningCategoryType,
} from "../models/categories";
import { parseLearningURL } from "../utils/parseURL";

interface Props {
  children: ReactNode;
  initialCategoryGroups: LearningCategoryGroupType[];
}

/**
 * 클라이언트 사이드에서 학습 데이터를 사용하기 위한 Context Provider (학습 섹션 전역에 사용)
 * TODO: 서버 사이드에서 revalidateTag를 했을 때, 클라이언트 사이드에서도 해당 정보를 갱신할 수 있도록 구현해야 한다.
 */

export function LearningProvider({
  children,
  initialCategoryGroups,
}: Readonly<Props>) {
  const [categoryGroups, setCategoryGroups] = useState<
    LearningCategoryGroupType[]
  >(initialCategoryGroups);
  const [selectedCategoryGroup, setSelectedCategoryGroup] =
    useState<LearningCategoryGroupType | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<LearningCategoryType | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const { selectedCategoryGroup, selectedCategory } = parseLearningURL(
      categoryGroups,
      pathname
    );
    setSelectedCategoryGroup(selectedCategoryGroup);
    setSelectedCategory(selectedCategory);
  }, [pathname, categoryGroups]);

  // TODO: 3. 현재 카테고리는 관리자가 포스트를 작성할 때, 초기 카테고리로 설정할 수도 있다

  const value: LearningContextType = useMemo(
    () => ({
      categoryGroups,
      selectedCategoryGroup,
      selectedCategory,
    }),
    [categoryGroups, selectedCategoryGroup, selectedCategory]
  );

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
}
