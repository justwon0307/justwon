"use client";

import "client-only";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { CategoryType } from "../../models/categories";
import { useColors } from "@shared/lib/colors";
import { AppIcon } from "@shared/ui/Icons";

interface Props {
  category: CategoryType;
}

export function CategoryCard({ category }: Readonly<Props>) {
  const { colors } = useColors();

  return (
    <Link href={`/blog/${category.group.slug}/${category.slug}`}>
      <Container>
        <Image
          src={category.cover_image}
          alt={category.name}
          width={240}
          height={135}
        />
        <h3>
          <AppIcon icon={category.icon} color={colors.gray900} size={16} />
          {category.name}
        </h3>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 8px;

  > img {
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }

  > h3 {
    display: flex;
    align-items: center;
    margin: 8px 4px;
    padding: 0 8px;
    gap: 8px;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
