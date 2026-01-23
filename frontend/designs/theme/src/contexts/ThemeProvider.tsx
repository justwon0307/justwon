"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

import { ThemeContext } from "./useTheme";
import { loadStoredMode, saveStoredMode } from "@/lib/storage";
import { getSystemTheme, subscribeToSystemTheme } from "@/lib/system";
import { ResolvedTheme, ThemeMode } from "@/types/theme";

interface Props {
  children: ReactNode;
}

/**
 * light-dart()로 선언해놓은 CSS 변수가 제대로 동작하도록 설정
 * @param targetResolved 적용할 테마 모드
 */
function applyTheme(targetResolved: ResolvedTheme) {
  // light-dark() 설정이 제대로 적용되도록
  document.documentElement.dataset.theme = targetResolved;
  document.documentElement.style.colorScheme = targetResolved;
}

export function ThemeProvider({ children }: Readonly<Props>) {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const stored = loadStoredMode();
    setMode(stored);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    saveStoredMode(mode);

    if (mode === "system") {
      applyTheme(getSystemTheme());
    } else {
      // 그렇지 않다면, 지정한 모드로 고정
      applyTheme(mode);
    }
  }, [mode, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    return subscribeToSystemTheme((theme) => {
      if (mode === "system") {
        applyTheme(theme);
      }
    });
  }, [mode, isMounted]);

  const value = useMemo(() => ({ mode, setThemeMode: setMode }), [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
