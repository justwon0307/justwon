"use client";

import styled from "styled-components";

import { useColors } from "@shared/lib/colors";
import { AppIcon } from "@shared/ui/Icons";

/**
 * 검색바 컴포넌트
 *   - 단순한 버튼 역할을 함 공통 검색 모달을 열고,
 *   - 특정 페이지에서 해당 버튼을 클릭하면, 페이지 필터를 자동으로 적용한다 (github와 같은 방식)
 */

// TODO: 해당 버튼을 클릭했을 때, 검색 모달을 열도록 구현해야 함

export function SearchButton() {
  const { colors } = useColors();

  return (
    <Container>
      <AppIcon icon="search" size={18} color={colors.gray500} />
      <span>Search</span>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  gap: 8px;

  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 8px;

  > span {
    width: 100px;
    padding: 8px 0;
    color: ${({ theme }) => theme.colors.gray600};
    text-align: left;
    font-size: 0.875rem;
  }
`;
