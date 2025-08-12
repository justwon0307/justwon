import { fireEvent } from "@testing-library/react";

import { ExpandableMenu } from "@shared/ui/Menus";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Menus");

describe("ExpandableMenu", () => {
  it("should render correctly and handle clicks", () => {
    const { getByTestId } = renderWithProviders(
      <ExpandableMenu
        title="Test Menu"
        icon="test-icon"
        onMenuClick={jest.fn()}
      >
        <div>Child Content</div>
      </ExpandableMenu>
    );

    fireEvent.click(getByTestId("menu-link"));
    fireEvent.click(getByTestId("menu-toggle"));
  });

  it("should render active menu item", () => {
    const { getByTestId } = renderWithProviders(
      <ExpandableMenu
        title="Active Menu"
        icon="active-icon"
        onMenuClick={jest.fn()}
        isActive
      >
        <div>Active Content</div>
      </ExpandableMenu>
    );

    fireEvent.click(getByTestId("menu-link"));
  });
});
