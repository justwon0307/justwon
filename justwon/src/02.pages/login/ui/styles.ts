"use client";

import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

export const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 280px;
  padding: 16px 24px;

  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
