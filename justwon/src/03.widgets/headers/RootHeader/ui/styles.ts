"use client";

import styled from "styled-components";

/**
 * RootHeader의 스타일 컴포넌트.
 *   - Responsive 디자인을 적용하였다.
 *   - 내부에 .tabs 클래스를 사용하여 탭들을 감싸면 된다
 */

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px; // 태블릿 설정

  border-bottom: 0.5px solid ${({ theme }) => theme.colors.divider};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    // 모바일 설정
    padding: 0 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    // 데스크탑 설정
    padding: 0 32px;
  }

  .tabs {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    gap: 16px;

    .divider {
      align-self: stretch;
      width: 1px;
      background-color: ${({ theme }) => theme.colors.divider};
    }
  }
`;
