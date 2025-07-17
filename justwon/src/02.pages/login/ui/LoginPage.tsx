"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";

import { Box, Container } from "./styles";
import { AdminLoginForm, LoginButtons } from "@features/auth/login";
import { useAuth } from "@shared/lib/auth";

export function LoginPage() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "admin";

  const [returnTo, setReturnTo] = useState<string>("/");
  const [isAdminMode, setIsAdminMode] = useState<boolean>(initialMode);

  const { user } = useAuth();
  const router = useRouter();

  const [dir, setDir] = useState(0);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    setReturnTo(searchParams.get("returnTo") ?? "/");
  }, [searchParams]);

  useEffect(() => {
    if (user) {
      router.replace(returnTo);
    }
  }, [user, returnTo, router]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    // admin 모드면 앞으로(+1), 기본 모드면 뒤로(-1)
    setDir(isAdminMode ? 1 : -1);
  }, [isAdminMode]);

  const switchToAdmin = () => {
    setIsAdminMode(true);
    const p = new URLSearchParams({ returnTo });
    p.set("mode", "admin");
    router.replace(`/login?${p}`);
  };

  const switchToDefault = () => {
    setIsAdminMode(false);
    const p = new URLSearchParams({ returnTo });
    p.delete("mode");
    router.replace(`/login?${p}`);
  };

  const slide = useMemo(
    () => ({
      initial: { x: dir > 0 ? -300 : 300, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: dir > 0 ? 300 : -300, opacity: 0 },
    }),
    [dir]
  );

  return (
    <Container>
      <AnimatePresence mode="popLayout">
        {isAdminMode ? (
          <Box key="admin-login" {...slide} transition={{ duration: 0.4 }}>
            <AdminLoginForm toggleMode={switchToDefault} returnTo={returnTo} />
          </Box>
        ) : (
          <Box key="login-buttons" {...slide} transition={{ duration: 0.4 }}>
            <LoginButtons toggleMode={switchToAdmin} />
          </Box>
        )}
      </AnimatePresence>
    </Container>
  );
}
