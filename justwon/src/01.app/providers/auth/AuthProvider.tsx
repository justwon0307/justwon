"use client";

import "client-only";
import { ReactNode, useEffect, useMemo, useState } from "react";

import { AuthContext, AuthContextType, UserType } from "@shared/lib/auth";
import { createBrowserClient } from "@shared/lib/supabase";

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const supabase = createBrowserClient();

    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    const supabase = createBrowserClient();
    await supabase.auth.signOut();
    setUser(null);
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      loading,
      logout,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
