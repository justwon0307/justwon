import { act, fireEvent, render, waitFor } from "@testing-library/react";

import { Modal, useModal } from "@/components";

function TestComponent() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <p>This is a test modal content.</p>
      </Modal>
    </div>
  );
}

describe("Modal", () => {
  it("should render correctly and handle close on click/taps", async () => {
    const { getByTestId, getByText, queryByTestId } = render(<TestComponent />);

    // 초기에는 모달이 닫혀 있어야 함
    await waitFor(() => expect(queryByTestId("modal-dialog")).not.toBeTruthy());

    // Open Modal 버튼 클릭 시 모달이 열려야 함
    fireEvent.click(getByText("Open Modal"));
    await waitFor(() => expect(getByTestId("modal-dialog")).toBeTruthy());

    // dialog 내부 클릭 시 모달이 닫히지 않아야 함
    fireEvent.mouseDown(getByTestId("modal-dialog"));
    await waitFor(() => expect(getByTestId("modal-dialog")).toBeTruthy());

    // overlay 클릭 시 모달이 닫혀야 함
    fireEvent.mouseDown(getByTestId("modal-overlay"));
    await waitFor(() => expect(queryByTestId("modal-dialog")).not.toBeTruthy());
  });

  it("should handle close using keyboard (Esc)", async () => {
    const { getByTestId, getByText, queryByTestId } = render(<TestComponent />);

    // Open Modal 버튼 클릭 시 모달이 열려야 함
    fireEvent.click(getByText("Open Modal"));
    await waitFor(() => expect(getByTestId("modal-dialog")).toBeTruthy());

    // 다른 키를 눌러도 모달이 닫히지 않아야 함
    fireEvent.keyDown(globalThis.window, { key: "A" });
    await waitFor(() => expect(getByTestId("modal-dialog")).toBeTruthy());

    // Escape 키를 누르면 모달이 닫혀야 함
    fireEvent.keyDown(globalThis.window, { key: "Escape" });
    await waitFor(() => expect(queryByTestId("modal-dialog")).not.toBeTruthy());
  });

  it("should ignore close modal when it is already closing", () => {
    vi.useFakeTimers();

    const { getByTestId, getByText, queryByTestId } = render(<TestComponent />);

    // Open Modal 버튼 클릭 시 모달이 열려야 함
    fireEvent.click(getByText("Open Modal"));
    expect(getByTestId("modal-dialog")).toBeTruthy();

    // overlay 클릭 시 모달이 닫히기 시작해야 함
    const overlay = getByTestId("modal-overlay");
    fireEvent.mouseDown(overlay);
    act(() => vi.advanceTimersByTime(100));
    expect(getByTestId("modal-dialog")).toBeTruthy();

    // 닫히는 중에 다시 overlay 클릭 시 모달이 닫히지 않아야 함
    fireEvent.mouseDown(overlay);
    act(() => vi.advanceTimersByTime(200));
    expect(queryByTestId("modal-dialog")).not.toBeTruthy();

    vi.restoreAllMocks();
  });
});
