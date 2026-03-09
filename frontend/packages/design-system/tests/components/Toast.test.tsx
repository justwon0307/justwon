import { act, fireEvent, render } from "@testing-library/react";

import { toast, Toaster } from "@/components";

describe("Toast", () => {
  it("should render all types of toasts", () => {
    vi.useFakeTimers();

    const { getByText, queryByText } = render(<Toaster />);

    act(() => {
      toast("Default Toast");
      toast("Success Toast", { type: "success" });
      toast("Warning Toast", { type: "warning" });
      toast("Info Toast", {
        type: "info",
        description: "This is an info toast",
      }); // With Description
    });

    expect(getByText("Default Toast")).toBeTruthy();
    expect(getByText("Success Toast")).toBeTruthy();
    expect(getByText("Warning Toast")).toBeTruthy();
    expect(getByText("Info Toast")).toBeTruthy();
    expect(getByText("This is an info toast")).toBeTruthy();

    // 기본값인 3초가 지나면 exit 애니메이션이 시작되고, 3.3초 후에 Toast가 제거됩니다.
    act(() => {
      vi.advanceTimersByTime(3300); // 3초 후에 exit 애니메이션이 시작됨
    });

    expect(queryByText("Default Toast")).toBeFalsy();
    expect(queryByText("Success Toast")).toBeFalsy();
    expect(queryByText("Warning Toast")).toBeFalsy();
    expect(queryByText("Info Toast")).toBeFalsy();
  });

  it("should handle 0 duration and close button", () => {
    vi.useFakeTimers();

    const { getByText, getByRole, queryByText } = render(<Toaster />);

    act(() => {
      toast("Permanent Toast", { duration: 0 });
    });

    expect(getByText("Permanent Toast")).toBeTruthy();

    fireEvent.click(getByRole("button"));

    act(() => {
      vi.advanceTimersByTime(300); // 300ms 동안 exit 애니메이션이 진행된 후 Toast가 제거됩니다.
    });

    expect(queryByText("Permanent Toast")).toBeFalsy();
  });

  it("should pause timer on hover and resume on mouse leave", () => {
    vi.useFakeTimers();

    const { getByText, getByRole, queryByText } = render(<Toaster />);

    act(() => {
      toast("Hover Toast", { duration: 5000 });
    });

    expect(getByText("Hover Toast")).toBeTruthy();

    const toastEl = getByRole("button").parentElement!;

    // Pause the timer by hovering — covers pauseTimer body (lines 31-37, TRUE branches)
    fireEvent.mouseEnter(toastEl);

    act(() => {
      vi.advanceTimersByTime(6000); // Would've expired if not paused
    });

    expect(getByText("Hover Toast")).toBeTruthy();

    // Resume — then let it expire
    fireEvent.mouseLeave(toastEl);

    act(() => {
      vi.advanceTimersByTime(5300); // remaining ~5000ms + 300ms exit animation
    });

    expect(queryByText("Hover Toast")).toBeFalsy();
  });

  it("should handle double mouseEnter without mouseLeave", () => {
    vi.useFakeTimers();

    const { getByRole } = render(<Toaster />);

    act(() => {
      toast("Double Hover Toast", { duration: 5000 });
    });

    const toastEl = getByRole("button").parentElement!;

    // First mouseEnter: clears timer and startedAt (TRUE branches in pauseTimer)
    fireEvent.mouseEnter(toastEl);
    // Second mouseEnter: timerRef and startedAtRef are already null (FALSE branches in pauseTimer)
    fireEvent.mouseEnter(toastEl);
  });

  it("should render toast at bottom position using slideUp animation", () => {
    vi.useFakeTimers();

    const { getByText } = render(<Toaster />);

    act(() => {
      toast("Bottom Toast", { position: "bottom" });
    });

    expect(getByText("Bottom Toast")).toBeTruthy();
  });

  it("should queue toast when Toaster is not mounted and flush on mount", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});

    toast("Queued Toast");

    expect(consoleWarnSpy).not.toHaveBeenCalled();
    consoleWarnSpy.mockRestore();

    // Mount Toaster after queuing — queued toast should be flushed immediately
    const { getByText } = render(<Toaster />);
    expect(getByText("Queued Toast")).toBeTruthy();
  });

  it("corner case: remaining time is zero on hover", () => {
    vi.useFakeTimers();

    const startTime = Date.now(); // captured before effects run, so startedAtRef = startTime

    const { getByRole } = render(<Toaster />);

    act(() => {
      toast("Expired Toast", { duration: 1000 });
    });

    const toastEl = getByRole("button").parentElement!;

    // Advance Date.now() by the full duration WITHOUT firing the timer.
    // pauseTimer will compute: remaining = 1000 - (startTime+1000 - startTime) = 0
    vi.setSystemTime(startTime + 1000);

    fireEvent.mouseEnter(toastEl); // pauseTimer: remaining becomes 0, timer cleared
    // startTimer: remaining = 0 <= 0 → returns early (TRUE branch on line 25)
    fireEvent.mouseLeave(toastEl);
  });
});
