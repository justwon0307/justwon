import { act, renderHook } from "@testing-library/react";

import { usePositionShift } from "@/components/lib/positions/usePositionShift";

describe("usePositionShift corner cases", () => {
  it("wrapperRef is null", () => {
    // renderHook provides no DOM element for the ref, so wrapperRef.current is null.
    // useLayoutEffect fires and hits the early return guard.
    const { result } = renderHook(() => usePositionShift());

    expect(result.current.placement).toBe("bottom");
    expect(result.current.shiftX).toBe(0);

    // Verify calling checkPosition explicitly with a null ref also returns early
    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result.current.wrapperRef as any).current = null;
      result.current.checkPosition();
    });

    expect(result.current.placement).toBe("bottom");
    expect(result.current.shiftX).toBe(0);
  });

  it("wrapperRef has no children", () => {
    const { result } = renderHook(() => usePositionShift());

    // A div with no children: lastElementChild is null → elementRect is null
    const emptyDiv = document.createElement("div");

    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result.current.wrapperRef as any).current = emptyDiv;
      result.current.checkPosition();
    });

    expect(result.current.placement).toBe("bottom");
    expect(result.current.shiftX).toBe(0);
  });
});
