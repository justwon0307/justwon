import { cleanup, fireEvent, render } from "@testing-library/react";

import { RootLayout } from "@app/layouts/root";

const originalError = console.error;
// RootLayout이 html을 반환해서 발생하는 경고 무시
beforeAll(() => {
  console.error = (...args: Parameters<typeof console.error>) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("cannot be a child of")
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

describe("RootLayout 테스트", () => {
  const ChildComponent = () => <div>Test Child</div>;

  afterEach(() => {
    cleanup();
  });

  it("children을 content 영역에 렌더링 한다", () => {
    const { getByText } = render(
      <RootLayout>
        <ChildComponent />
      </RootLayout>,
    );
    expect(getByText("Test Child")).toBeTruthy();
  });

  it("메인 로고를 클릭하면 '/'으로 이동", () => {
    const { getByTestId } = render(
      <RootLayout>
        <ChildComponent />
      </RootLayout>,
    );

    const logoLink = getByTestId("main-logo");
    expect((logoLink as HTMLAnchorElement).href).toContain("/");
    fireEvent.click(logoLink);
  });

  it("메인 탭 4개가 있고 (Projects, Devlog, Non-dev, About) 클릭하면 각각 해당 탭으로 이동", () => {
    const { getByText } = render(
      <RootLayout>
        <ChildComponent />
      </RootLayout>,
    );

    const tabs = ["Projects", "Devlog", "Non-dev", "About"];
    expect(tabs.length).toBe(4);

    tabs.forEach((tab) => {
      const tabElement = getByText(tab) as HTMLAnchorElement;
      expect(tabElement).toBeTruthy();
      expect(tabElement.href).toContain(
        `/${tab.toLowerCase().replace(" ", "-")}`,
      );
    });
  });

  it("설정을 누르면 설정 모달이 열리고, 테마를 변경할 수 있다", () => {
    const { getByTestId, getByText } = render(
      <RootLayout>
        <ChildComponent />
      </RootLayout>,
    );

    const settingsButton = getByTestId("settings-button");
    fireEvent.click(settingsButton);

    expect(getByText("테마 선택")).toBeTruthy();

    const lightThemeButton = getByText("light");
    const darkThemeButton = getByText("dark");
    const systemThemeButton = getByText("system");

    expect(lightThemeButton).toBeTruthy();
    expect(darkThemeButton).toBeTruthy();
    expect(systemThemeButton).toBeTruthy();

    fireEvent.click(darkThemeButton);

    // 모달 닫기
    const closeButton = getByText("테마 선택").nextSibling as HTMLElement;
    fireEvent.click(closeButton);
  });
});
