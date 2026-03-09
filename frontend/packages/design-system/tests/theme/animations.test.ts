import { act, renderHook } from "@testing-library/react";

import { useRotateAnimation } from "@/theme";

describe("animation corner cases", () => {
  describe("useRotateAnimation", () => {
    it("should not start spinning if already spinning (default options)", () => {
      vi.useFakeTimers();

      const { result } = renderHook(() => useRotateAnimation());

      // 초기에는 spinning이 false여야 함
      expect(result.current.spinning).toBe(false);

      // 첫 번째 호출로 스피닝 시작
      act(() => result.current.startSpinning());
      expect(result.current.spinning).toBe(true);

      // 두 번째 호출로 스피닝 시도 (이미 스피닝 중이므로 무시되어야 함)
      act(() => result.current.startSpinning());
      expect(result.current.spinning).toBe(true); // 여전히 true여야 함

      // 타이머가 만료된 후에는 spinning이 false로 돌아와야 함
      act(() => vi.advanceTimersByTime(1200)); // duration(600ms) * iterations(2) = 1200ms
      expect(result.current.spinning).toBe(false);
    });

    it("should start spinning on render with startImmediately option", () => {
      const { result } = renderHook(() => useRotateAnimation(1000, 3, true));

      // startImmediately 옵션이 true이므로 초기 상태에서 spinning이 true여야 함
      expect(result.current.spinning).toBe(true);

      // 타이머가 만료되기 전에 startSpinning을 호출해도 spinning이 유지되어야 함
      act(() => result.current.startSpinning());
      expect(result.current.spinning).toBe(true);
    });

    it("should handle infinite iterations correctly", () => {
      const { result } = renderHook(() => useRotateAnimation(500, 0, true));

      // startImmediately 옵션이 true이므로 초기 상태에서 spinning이 true여야 함
      expect(result.current.spinning).toBe(true);

      // 타이머가 만료되기 전에 startSpinning을 호출해도 spinning이 유지되어야 함
      act(() => result.current.startSpinning());
      expect(result.current.spinning).toBe(true);
    });
  });
});
