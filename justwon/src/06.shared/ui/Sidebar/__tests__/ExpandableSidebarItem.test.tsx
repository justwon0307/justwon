import { fireEvent } from "@testing-library/react";

import { ExpandableSidebarItem } from "@shared/ui/Sidebar";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Sidebar");

describe("ExpandableSidebarItem", () => {
  it("should render correctly and handle clicks", () => {
    const { getByTestId } = renderWithProviders(
      <ExpandableSidebarItem title="Test Item" href="/test">
        <div>Child Content</div>
      </ExpandableSidebarItem>
    );

    fireEvent.click(getByTestId("sidebar-toggle"));
    fireEvent.click(getByTestId("sidebar-link"));
  });

  it("should render active sidebar item", () => {
    renderWithProviders(
      <ExpandableSidebarItem title="Active Item" href="/test" isActive>
        <div>Active Content</div>
      </ExpandableSidebarItem>
    );
  });
});
