import { fireEvent } from "@testing-library/react";

import { ExpandableSidebarItem } from "@shared/ui/Sidebar";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Sidebar");

describe("ExpandableSidebarItem", () => {
  it("should render correctly", () => {
    const { getByTestId } = renderWithProviders(
      <ExpandableSidebarItem title="Test Item" href="/test">
        <div>Child Content</div>
      </ExpandableSidebarItem>
    );

    fireEvent.click(getByTestId("toggle"));
  });

  it("should render active sidebar item", () => {
    renderWithProviders(
      <ExpandableSidebarItem title="Active Item" href="/test" isActive>
        <div>Active Content</div>
      </ExpandableSidebarItem>
    );
  });
});
