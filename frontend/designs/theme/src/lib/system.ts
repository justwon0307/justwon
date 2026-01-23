import { ResolvedTheme } from "@/types/theme";

/**
 * 시스템 모드일 시 사용하는, 시스템 테마 조회 함수
 * @returns 시스템 테마 ("light" 또는 "dark")
 */
export function getSystemTheme(): ResolvedTheme {
  if (globalThis.window === undefined) {
    return "light";
  }
  return globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * 시스템 테마 변경 리스너 등록
 * @param callback
 * @returns cleanup 함수
 */
export function subscribeToSystemTheme(
  callback: (theme: ResolvedTheme) => void,
): () => void {
  if (globalThis.window === undefined) {
    return () => {};
  }

  const mediaQuery = globalThis.window.matchMedia(
    "(prefers-color-scheme: dark)",
  );

  const handleChange = (e: MediaQueryListEvent) => {
    const newTheme: ResolvedTheme = e.matches ? "dark" : "light";
    callback(newTheme);
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
}
