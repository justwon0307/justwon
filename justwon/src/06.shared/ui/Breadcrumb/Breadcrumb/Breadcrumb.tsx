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

export function Breadcrumb({ items }: Readonly<Props>) {
  return (
    <Container>
      {items.map((item, index) => (
        <Item key={item.key}>
          <Link href={item.href}>
            <span>{item.label}</span>
          </Link>
          {index < items.length - 1 && (
            <AppIcon icon="chevron-right" size={16} />
          )}
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Geist", sans-serif;
`;
