import { render } from "@testing-library/react";

import { RootComponent } from "@app/layouts/root";

describe("RootComponent", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<RootComponent />);

    // 해당 컴포넌트들은 단순 텍스트를 렌더링하도록 vitest.setup.tsx에서 모킹해두었다
    expect(getByText("Alerter")).toBeTruthy();
    expect(getByText("Toaster")).toBeTruthy();
    expect(getByText("TanStackRouterDevtools")).toBeTruthy();
    expect(getByText("Outlet")).toBeTruthy();
  });
});
