"use client";

import "client-only";
import styled from "styled-components";

interface Props {
  $bold?: boolean;
  $color?: string;
}

export const Divider = styled.div<Props>`
  width: 100%;
  height: ${({ $bold }) => ($bold ? "2px" : "1px")};
  background-color: ${({ $color }) => $color || "#000"};
`;
