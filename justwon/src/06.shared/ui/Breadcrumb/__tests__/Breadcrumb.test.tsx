import { Breadcrumb } from "@shared/ui/Breadcrumb";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Breadcrumb");

describe("Breadcrumb", () => {
  it("renders without crashing", () => {
    const items = [
      { label: "Home", href: "/", key: "home" },
      { label: "Products", href: "/products", key: "products" },
      {
        label: "Electronics",
        href: "/products/electronics",
        key: "electronics",
      },
    ];

    renderWithProviders(<Breadcrumb items={items} />);
  });
});
