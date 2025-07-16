"use client";

import "client-only";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { UserProfile } from "@entities/profile";
import { useAuth } from "@shared/lib/auth";
import { AppIcon } from "@shared/ui/Icons";

export function AuthTab() {
  const { user } = useAuth();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPath =
    pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

  if (!user) {
    return (
      <Link
        href={{
          pathname: "/login",
          query: { returnTo: currentPath },
        }}
      >
        <AppIcon icon="login" size={18} color="#123456" />
      </Link>
    );
  }

  return <UserProfile user={user} />;
}
