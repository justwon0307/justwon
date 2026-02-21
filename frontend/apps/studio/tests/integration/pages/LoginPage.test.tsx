import { fireEvent, waitFor } from "@testing-library/react";
import * as Router from "@tanstack/react-router";

import { LoginPage } from "@pages/login";
import * as API from "@shared/api";
import { renderWithProviders } from "@tests/render";

describe("LoginPage", () => {
  it("should render the login page and handle login success", async () => {
    vi.spyOn(API.api, "post").mockResolvedValue({ data: "fake-token" });

    const { getByTestId } = renderWithProviders(<LoginPage />);

    const usernameInput = getByTestId("username-input");
    const passwordInput = getByTestId("password-input");
    const submitButton = getByTestId("form-submit-button");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(Router.useNavigate()).toHaveBeenCalledWith({
        to: "/editor",
        replace: true,
      });
    });
  });

  it("renders error message on login failure", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {}); // console.error 무시
    vi.spyOn(API.api, "post").mockRejectedValue({
      message: "Invalid credentials",
      status: "ERROR",
    });
    vi.spyOn(API, "isAPIError").mockReturnValue(true);

    const { getByTestId, getByText, queryByText } = renderWithProviders(
      <LoginPage />,
    );

    const usernameInput = getByTestId("username-input");
    const passwordInput = getByTestId("password-input");
    const submitButton = getByTestId("form-submit-button");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("Invalid credentials")).toBeTruthy();
    });

    // 입력값을 변경하면, 에러 메시지가 사라지는지 확인
    fireEvent.change(usernameInput, { target: { value: "anotheruser" } });

    await waitFor(() => {
      expect(queryByText("Invalid credentials")).toBeFalsy();
    });
  });
});
