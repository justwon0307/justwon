"use client";

import Link from "next/link";
import styled from "styled-components";

import { LearningCategoryType } from "../models/categories";

interface Props {
  category: LearningCategoryType;
}

export function LearningCategoryButton({ category }: Readonly<Props>) {
  return (
    <Button href={`/learning/?catId=${category.id}`}>
      <span>{category.name}</span>
      <span className="count">{category.num_posts}</span>
    </Button>
  );
}

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  text-decoration: none;
  color: inherit;
  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  .count {
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 0.825rem;
    line-height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray300};
  }
`;
