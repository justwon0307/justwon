"use client";

import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

import { Container } from "./styles";

export const metadata: Metadata = {
  title: "로그인",
};

export function LoginPage() {
  return (
    <Container>
      <SignIn path="/login" />
    </Container>
  );
}
