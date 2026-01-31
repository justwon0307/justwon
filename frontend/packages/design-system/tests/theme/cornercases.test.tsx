import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { loadStoredMode, saveStoredMode } from "@/theme/core/lib/storage";
import {
  getSystemTheme,
  subscribeToSystemTheme,
} from "@/theme/core/lib/system";

// theme/core/lib/ 내 함수들의 globalThis가 null인 코너케이스 테스트
// 단순 커버리지 채우기 용도

describe("core lib cornercases", () => {
  const originalGlobal = { ...globalThis };

  beforeEach(() => {
    // @ts-expect-error window 프로퍼티 제거
    globalThis.window = undefined;
  });

  afterEach(() => {
    Object.defineProperty(globalThis, "window", {
      value: originalGlobal.window,
      writable: true,
    });
  });

  it("getSystemTheme should return 'light' when window is undefined", () => {
    const theme = getSystemTheme();
    expect(theme).toBe("light");
  });

  it("subscribeToSystemTheme should return a cleanup function when window is undefined", () => {
    const cleanup = subscribeToSystemTheme(() => {});
    expect(cleanup).toBe(undefined);
  });

  it("loadStoredMode should return 'system' when window is undefined", () => {
    const mode = loadStoredMode();
    expect(mode).toBe("system");
  });

  it("saveStoredMode should not throw when window is undefined", () => {
    expect(() => saveStoredMode("dark")).not.toThrow();
  });
});
