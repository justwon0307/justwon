import { describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, waitFor } from "@testing-library/react";

import { Modal } from "@/components";

describe("Modal", () => {
  it("should render the modal with title and content", async () => {
    const { getByText, queryByText, rerender } = render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <p>This is a test modal content.</p>
      </Modal>,
    );

    expect(getByText("This is a test modal content.")).toBeTruthy();

    // close
    rerender(
      <Modal isOpen={false} onClose={vi.fn()}>
        <p>This is a test modal content.</p>
      </Modal>,
    );

    await waitFor(() => {
      expect(queryByText("This is a test modal content.")).not.toBeTruthy();
    });
  });

  it("should handle close on click/taps", async () => {
    const onClose = vi.fn();
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal Content</p>
      </Modal>,
    );

    // should NOT close when clicking inside the dialog
    fireEvent.mouseDown(getByTestId("modal-dialog"));
    await waitFor(() => expect(onClose).not.toHaveBeenCalled());

    fireEvent.mouseDown(getByTestId("modal-overlay"));
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });

  it("should handle close using keyboard (Esc)", async () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        <p>Modal Content</p>
      </Modal>,
    );

    // should NOT close when any other key is pressed
    fireEvent.keyDown(window, { key: "A" }); // NOSONAR
    await waitFor(() => expect(onClose).not.toHaveBeenCalled());

    // should close when Escape key is pressed
    fireEvent.keyDown(window, { key: "Escape" }); // NOSONAR
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });

  it("should ignore close modal when it is already closing", async () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={onClose} animationDuration={200}>
        <p>Modal Content</p>
      </Modal>,
    );

    // should start closing when overlay is clicked
    const overlay = getByTestId("modal-overlay");
    fireEvent.mouseDown(overlay);
    act(() => vi.advanceTimersByTime(100));
    expect(onClose).not.toHaveBeenCalled();

    // should ignore further close attempts while closing
    fireEvent.mouseDown(overlay);
    act(() => vi.advanceTimersByTime(100));
    expect(onClose).toHaveBeenCalledTimes(1);

    vi.restoreAllMocks();
  });
});
