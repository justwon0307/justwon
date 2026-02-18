import { fireEvent, render, waitFor } from "@testing-library/react";

import { Form } from "@/components";

describe("Form", () => {
  it("renders form component correctly", async () => {
    const onSubmit = vi.fn();

    const { getByText, getByTestId, queryByTestId } = render(
      <Form data-testid="test-form" onSubmit={onSubmit}>
        <p>Test Child</p>
      </Form>,
    );

    expect(getByTestId("test-form")).toBeTruthy();
    // Child가 렌더링되는지 확인
    expect(getByText("Test Child")).toBeTruthy();

    // 버튼이 없는지 확인하고
    expect(queryByTestId("form-submit-button")).toBeNull();
    // 버튼이 없으면, form submit으로 인한 onSubmit을 확인한다
    fireEvent.submit(getByTestId("test-form"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it("renders form with error message correctly", async () => {
    const onSubmit = vi.fn();

    const { getByText, getByTestId } = render(
      <Form
        className="test-class"
        data-testid="test-form"
        errorMsg="Test Error"
        errorMsgSize="md"
        disabled
        onSubmit={onSubmit}
      >
        <p>Test Child</p>
      </Form>,
    );

    expect(getByTestId("test-form")).toBeTruthy();
    // className이 적용되는지 확인
    expect(getByTestId("test-form").className).toContain("test-class");
    // errorMsg가 렌더링되는지 확인
    expect(getByText("Test Error")).toBeTruthy();

    // disabled 상태에서 form submit이 발생해도 onSubmit이 호출되지 않는지 확인
    fireEvent.submit(getByTestId("test-form"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(0);
    });
  });

  it("renders form with submit button correctly", async () => {
    const onSubmit = vi.fn();

    const { getByText, getByTestId } = render(
      <Form buttonLabel="Submit!" data-testid="test-form" onSubmit={onSubmit}>
        <p>Test Child</p>
      </Form>,
    );

    expect(getByTestId("test-form")).toBeTruthy();
    // 버튼이 렌더링되는지 확인
    expect(getByText("Submit!")).toBeTruthy();

    // 버튼이 클릭되었을 때, onSubmit이 호출되는지 확인
    fireEvent.click(getByTestId("form-submit-button"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
