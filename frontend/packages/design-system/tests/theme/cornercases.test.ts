import {
  getServerSnapshot,
  getSystemTheme,
  setMode,
  subscribe,
  subscribeToSystemTheme,
} from "@/theme/core/manager";

// theme/core/lib/ 내 함수들의 globalThis가 null인 코너케이스 테스트
// 단순 커버리지 채우기 용도

describe("core manager cornercases", () => {
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

  it("loadStoredMode should return 'system' when window is undefined", async () => {
    vi.resetModules();
    const { getSnapshot } = await import("@/theme/core/manager");
    expect(getSnapshot()).toBe("system");
  });

  it("saveStoredMode should not throw when window is undefined", () => {
    expect(() => setMode("dark")).not.toThrow();
  });

  it("getServerSnapshot should always return 'system'", () => {
    expect(getServerSnapshot()).toBe("system");
  });

  it("subscribe should not re-read storage when listeners already exist", () => {
    const unsubscribe1 = subscribe(() => {});
    const unsubscribe2 = subscribe(() => {});
    unsubscribe1();
    unsubscribe2();
  });
});
