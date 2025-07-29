"use client";

import "client-only";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { useAuth } from "@shared/lib/auth";
import { AppIcon } from "@shared/ui/Icons";

export function AuthTab() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Link
        href={{
          pathname: "/login",
        }}
      >
        <AppIcon icon="login" size={18} color="#123456" />
      </Link>
    );
  }

  return (
    <div className="user-button">
      <UserButton />
    </div>
  );
}
