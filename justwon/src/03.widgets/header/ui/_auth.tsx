"use client";

import "client-only";
import Link from "next/link";

import { UserProfile } from "@entities/profile";
import { useAuth } from "@shared/lib/auth";
import { AppIcon } from "@shared/ui/Icons";

export function AuthTab() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Link href="/login">
        <AppIcon icon="login" size={18} color="#123456" />
      </Link>
    );
  }

  return <UserProfile user={user} />;
}
