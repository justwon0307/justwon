"use client";

import styled from "styled-components";

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled(Vertical)`
  flex: 1;
  padding: 8px 16px;
`;

export const Contents = styled(Vertical)`
  flex: 1;
  gap: 8px;
`;
