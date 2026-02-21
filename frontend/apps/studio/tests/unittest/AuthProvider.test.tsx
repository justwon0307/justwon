import { AuthProvider } from "@app/auth";
import { fireEvent, render } from "@testing-library/react";

describe("AuthProvider", () => {
  it("handles login success and shows toast notification", () => {
    const { getByText } = render(
      <AuthProvider>
        <div>Test Child</div>
      </AuthProvider>,
    );

    // vitest.setup.tsx에서 mock해둔 버튼을 눌러 로그인 성공 시나리오를 시뮬레이트
    fireEvent.click(getByText("Login Success"));
  });
});
