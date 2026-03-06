import { fireEvent, render } from "@testing-library/react";

import { Popover } from "@/components";

function TestTrigger() {
  return <span>Trigger</span>;
}

describe("Popover", () => {
  it("renders with default props and handles click events", () => {
    const { getByText } = render(
      <Popover trigger={<TestTrigger />}>Popover Content</Popover>,
    );

    const triggerButton = getByText("Trigger");
    const popoverContent = getByText("Popover Content");

    // 기본적으로 trigger 버튼만 렌더링되어야 함
    expect(triggerButton).toBeTruthy();
    // Popover 내용은 보이지 않아야 함 (vanilla extract를 쓰기 때문에, visible_false로 확인한다)
    expect(popoverContent.className).toContain("visible_false");

    fireEvent.click(triggerButton);
    // 클릭 후 Popover 내용이 보여야 함 (visible_true로 확인한다)
    expect(popoverContent.className).toContain("visible_true");

    // Popover 외부를 클릭하면 Popover가 닫혀야 함
    fireEvent.mouseDown(document.body);
    expect(popoverContent.className).toContain("visible_false");
  });

  it("renders warning popover with title, description and custom width", () => {
    const { getByText } = render(
      <Popover
        trigger={<TestTrigger />}
        title="Popover Title"
        description="This is a description."
        variant="warning"
        width={200}
      >
        Warning Popover Content
      </Popover>,
    );

    const triggerButton = getByText("Trigger");
    const popoverContent = getByText("Warning Popover Content");
    const title = getByText("Popover Title");
    const description = getByText("This is a description.");

    // trigger 버튼과 Popover 내용, 제목, 설명이 렌더링되어야 함
    expect(triggerButton).toBeTruthy();
    expect(popoverContent).toBeTruthy();
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();

    // Popover 내용은 보이지 않아야 함 (visible_false로 확인한다)
    expect(popoverContent.className).toContain("visible_false");

    fireEvent.click(triggerButton);
    // 클릭 후 Popover 내용이 보여야 함 (visible_true로 확인한다)
    expect(popoverContent.className).toContain("visible_true");

    // Popover 외부를 클릭하면 Popover가 닫혀야 함
    fireEvent.mouseDown(document.body);
    expect(popoverContent.className).toContain("visible_false");
  });
});
