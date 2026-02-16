import { fireEvent, waitFor } from "@testing-library/react";

import { LoginPage } from "@pages/login";
import * as API from "@shared/api";
import { renderWithProviders } from "@tests/render";

// useForm의 여러 케이스들을 login 페이지를 이용해 테스트한다.
describe("useform corner cases", () => {
  it("renders error message on login failure (unknown error)", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {}); // console.error 무시
    vi.spyOn(API.api, "post").mockRejectedValue({});
    vi.spyOn(API, "isAPIError").mockReturnValue(false);

    const { getByTestId, getByText } = renderWithProviders(<LoginPage />);

    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const submitButton = getByTestId("form-submit-button");

    fireEvent.change(emailInput, { target: { value: "new@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("알 수 없는 오류가 발생했습니다.")).toBeTruthy();
    });
  });

  it("handles schema validation errors", async () => {
    const { getByTestId, getByText } = renderWithProviders(<LoginPage />);

    const emailInput = getByTestId("email-input");
    const passwordInput = getByTestId("password-input");
    const submitButton = getByTestId("form-submit-button");

    fireEvent.change(emailInput, { target: { value: "not-a-valid-email" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("유효한 이메일 주소를 입력해주세요.")).toBeTruthy();
    });

    // 코너 케이스: error 메시지가 있는 상태에서 버튼 클릭 테스트
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("유효한 이메일 주소를 입력해주세요.")).toBeTruthy();
    });
  });
});
