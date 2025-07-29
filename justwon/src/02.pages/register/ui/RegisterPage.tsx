"use client";

import { SignUp } from "@clerk/nextjs";

import { Container } from "./styles";

export function RegisterPage() {
  return (
    <Container>
      <SignUp path="/register" />
    </Container>
  );
}
