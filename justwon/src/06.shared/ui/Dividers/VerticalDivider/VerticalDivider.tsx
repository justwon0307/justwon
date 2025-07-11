"use client";

import styled from "styled-components";

interface Props {
  $bold?: boolean;
  $color?: string;
}

export const VerticalDivider = styled.div<Props>`
  align-self: stretch;
  width: ${({ $bold }) => ($bold ? "2px" : "1px")};
  background-color: ${({ $color }) => $color};
`;
