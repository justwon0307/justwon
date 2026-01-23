import { ThemeMode } from "@/types/theme";

const STORAGE_KEY = "theme-mode";

/**
 * 로컬 스토리지에 저장된 테마 모드 불러오기
 * @returns 저장된 테마 모드 (system/light/dark). 기본값은 "system"
 */
export function loadStoredMode(): ThemeMode {
  if (globalThis.window === undefined) return "system";

  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored === "system" || stored === "light" || stored === "dark") {
    return stored;
  }

  return "system";
}

/**
 * 로컬 스토리지에 테마 모드 저장하기
 * @param mode 저장할 테마 모드 (system/light/dark)
 */
export function saveStoredMode(mode: ThemeMode): void {
  if (globalThis.window === undefined) return;

  localStorage.setItem(STORAGE_KEY, mode);
}
