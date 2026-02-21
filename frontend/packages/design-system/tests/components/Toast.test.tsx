import { render, act, fireEvent } from "@testing-library/react";

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

    const { getByText, queryByText } = render(<Toaster />);

    act(() => {
      toast("Permanent Toast", { duration: 0 });
    });

    expect(getByText("Permanent Toast")).toBeTruthy();

    fireEvent.click(getByText("닫기"));

    act(() => {
      vi.advanceTimersByTime(300); // 300ms 동안 exit 애니메이션이 진행된 후 Toast가 제거됩니다.
    });

    expect(queryByText("Permanent Toast")).toBeFalsy();
  });

  it("should handle deferred toasts", () => {
    act(() => {
      toast("Deferred Toast", {}, true);
    });

    const { getByText } = render(<Toaster />);

    act(() => {
      toast("Dummy Toast Call", {}, true); // Coverage Purpose (deferOrDispatch의 else branch 커버)
    });

    expect(getByText("Deferred Toast")).toBeTruthy();
  });

  it("correctly prints warning when toast is called without Toaster", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});

    toast("Toast without Toaster");

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "[Toast] toast() was called without a <Toaster> mounted in the tree. " +
        "Add <Toaster /> to your app root so toasts are displayed.",
    );

    consoleWarnSpy.mockRestore();
  });
});
