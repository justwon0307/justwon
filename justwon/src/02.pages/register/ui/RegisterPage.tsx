"use client";

import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

import { Container } from "./styles";

export const metadata: Metadata = {
  title: "회원가입",
};

export function RegisterPage() {
  return (
    <Container>
      <SignUp path="/register" />
    </Container>
  );
}
