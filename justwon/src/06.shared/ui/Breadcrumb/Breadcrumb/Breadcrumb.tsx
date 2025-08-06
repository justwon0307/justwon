"use client";

import Link from "next/link";
import styled from "styled-components";

import { AppIcon } from "@shared/ui/Icons";

export type BreadcrumbItemType = {
  label: string;
  href: string;
  key: string | number;
};

interface Props {
  items: BreadcrumbItemType[];
}

/**
 * 현재 페이지의 Breadcrumb 컴포넌트
 *   - 마지막 아이템은 링크가 없고, 현재 페이지를 나타내며, 스타일이 다르게 적용된다.
 */

export function Breadcrumb({ items }: Readonly<Props>) {
  const isLastItem = (index: number) => index === items.length - 1;

  return (
    <Container>
      {items.map((item, index) => (
        <Item key={item.key}>
          {isLastItem(index) ? (
            <span className="current">{item.label}</span>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
          {!isLastItem(index) && <AppIcon icon="chevron-right" size={16} />}
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 4px;
  border-radius: 4px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Geist", sans-serif;

  .current {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 600;
  }
`;
