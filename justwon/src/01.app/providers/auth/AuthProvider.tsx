"use client";

import "client-only";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useUser } from "@clerk/nextjs";

import { AuthContext, AuthContextType, UserType } from "@shared/lib/auth";

/**
 * Clerk에서 제공하는 User 중, 해당 앱에 필요한 정보만 추출하여 제공하는 Wrapper Provider.
 */

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<UserType | null>(null);

  const { user: clerkUser } = useUser();

  useEffect(() => {
    if (clerkUser) {
      setUser({
        id: clerkUser.id,
        username: clerkUser.username || "",
        is_admin: clerkUser.publicMetadata?.role === "admin" || false,
      });
    } else {
      setUser(null);
    }
  }, [clerkUser]);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
