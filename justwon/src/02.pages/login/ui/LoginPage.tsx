"use client";

import { SignIn } from "@clerk/nextjs";

import { Container } from "./styles";

export function LoginPage() {
  return (
    <Container>
      <SignIn path="/login" />
    </Container>
  );
}
