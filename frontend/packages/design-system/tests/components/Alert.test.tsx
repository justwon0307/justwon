import { act, fireEvent, render } from "@testing-library/react";

import { showAlert, showConfirm, Alerter } from "@/components";

describe("Alert", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  describe("showAlert", () => {
    it("should display alert with correct title and message and handle close", async () => {
      const { getByText, queryByText } = render(<Alerter />);

      act(() => {
        showAlert("Test Alert", "This is a test alert message");
      });

      expect(getByText("Test Alert")).toBeTruthy();
      expect(getByText("This is a test alert message")).toBeTruthy();

      await act(async () => {
        fireEvent.click(getByText("확인"));
      });

      // exit 애니메이션이 300ms 동안 진행된 후 Alert가 제거됩니다.
      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(queryByText("Test Alert")).toBeFalsy();
      expect(queryByText("This is a test alert message")).toBeFalsy();
    });

    it("should handle close callback", async () => {
      const { getByText, queryByText } = render(<Alerter />);

      const onCloseMock = vi.fn();

      act(() => {
        showAlert(
          "Test Alert with Callback",
          "This is a test alert message",
          onCloseMock,
        );
      });

      expect(getByText("Test Alert with Callback")).toBeTruthy();
      expect(getByText("This is a test alert message")).toBeTruthy();

      await act(async () => {
        fireEvent.click(getByText("확인"));
      });

      // exit 애니메이션이 300ms 동안 진행된 후 Alert가 제거됩니다.
      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(onCloseMock).toHaveBeenCalled();

      expect(queryByText("Test Alert with Callback")).toBeFalsy();
      expect(queryByText("This is a test alert message")).toBeFalsy();
    });
  });

  describe("showConfirm", () => {
    it("should display confirm with correct title and message and handle confirm", async () => {
      const { getByText, queryByText } = render(<Alerter />);

      const onConfirmMock = vi.fn();

      act(() => {
        showConfirm(
          "Test Confirm",
          "This is a test confirm message",
          onConfirmMock,
        );
      });

      expect(getByText("Test Confirm")).toBeTruthy();
      expect(getByText("This is a test confirm message")).toBeTruthy();

      await act(async () => {
        fireEvent.click(getByText("확인"));
      });

      // exit 애니메이션이 300ms 동안 진행된 후 Confirm이 제거됩니다.
      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(onConfirmMock).toHaveBeenCalled();

      expect(queryByText("Test Confirm")).toBeFalsy();
      expect(queryByText("This is a test confirm message")).toBeFalsy();
    });

    it("should handle cancel (no callback)", async () => {
      const { getByText, queryByText } = render(<Alerter />);

      act(() => {
        showConfirm(
          "Test Confirm Cancel",
          "This is a test confirm message",
          vi.fn(),
        );
      });

      expect(getByText("Test Confirm Cancel")).toBeTruthy();
      expect(getByText("This is a test confirm message")).toBeTruthy();

      await act(async () => {
        fireEvent.click(getByText("취소"));
      });

      // exit 애니메이션이 300ms 동안 진행된 후 Confirm이 제거됩니다.
      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(queryByText("Test Confirm Cancel")).toBeFalsy();
      expect(queryByText("This is a test confirm message")).toBeFalsy();
    });

    it("should handle cancel (with callback)", async () => {
      const { getByText, queryByText } = render(<Alerter />);

      const onCancelMock = vi.fn();

      act(() => {
        showConfirm(
          "Test Confirm Cancel Callback",
          "This is a test confirm message",
          vi.fn(),
          onCancelMock,
        );
      });

      expect(getByText("Test Confirm Cancel Callback")).toBeTruthy();
      expect(getByText("This is a test confirm message")).toBeTruthy();

      await act(async () => {
        fireEvent.click(getByText("취소"));
      });

      // exit 애니메이션이 300ms 동안 진행된 후 Confirm이 제거됩니다.
      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(onCancelMock).toHaveBeenCalled();

      expect(queryByText("Test Confirm Cancel Callback")).toBeFalsy();
      expect(queryByText("This is a test confirm message")).toBeFalsy();
    });
  });

  describe("manager", () => {
    it("should warn if showAlert is called without Alerter mounted", () => {
      const consoleWarnMock = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      act(() => {
        showAlert("No Alerter", "This should warn in console");
      });

      expect(consoleWarnMock).toHaveBeenCalledWith(
        expect.stringContaining(
          "[Alert] called without an <Alerter> mounted in the tree. " +
            "Add <Alerter /> to your app root so alerts are displayed.",
        ),
      );

      consoleWarnMock.mockRestore();
    });

    it("should warn if showAlert is called while another alert is active", () => {
      const { getByText } = render(<Alerter />);
      const consoleWarnMock = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      act(() => {
        showAlert("First Alert", "This is the first alert");
        showAlert("Second Alert", "This should warn in console");
      });

      expect(getByText("First Alert")).toBeTruthy();
      expect(getByText("This is the first alert")).toBeTruthy();

      expect(consoleWarnMock).toHaveBeenCalledWith(
        expect.stringContaining(
          "[Alert] called while another alert is in progress. Ignoring.",
        ),
      );

      consoleWarnMock.mockRestore();
    });

    it("corner case: should not warn if production environment even if multiple alerts are triggered", () => {
      vi.stubEnv("NODE_ENV", "production");

      const { getByText } = render(<Alerter />);

      const consoleWarnMock = vi
        .spyOn(console, "warn")
        .mockImplementation(() => {});

      act(() => {
        showAlert("First Alert", "This is the first alert");
        showAlert("Second Alert", "This should warn in console");
      });

      expect(getByText("First Alert")).toBeTruthy();
      expect(getByText("This is the first alert")).toBeTruthy();

      expect(consoleWarnMock).not.toHaveBeenCalled();

      consoleWarnMock.mockRestore();
      vi.unstubAllEnvs();
    });
  });
});
