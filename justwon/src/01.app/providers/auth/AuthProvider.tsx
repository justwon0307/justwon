"use client";

import "client-only";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";

import { AuthContext, AuthContextType, UserType } from "@shared/lib/auth";
import { createBrowserClient } from "@shared/lib/supabase";

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshCount, setRefreshCount] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const supabase = createBrowserClient();

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => listener.subscription.unsubscribe();
  }, [refreshCount]);

  const logout = useCallback(async () => {
    const supabase = createBrowserClient();
    await supabase.auth.signOut();
    setUser(null);
  }, []);

  const refreshState = useCallback(() => {
    setRefreshCount((prev) => prev + 1);
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      loading,
      logout,
      refresh: refreshState,
    }),
    [user, loading, logout, refreshState]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
