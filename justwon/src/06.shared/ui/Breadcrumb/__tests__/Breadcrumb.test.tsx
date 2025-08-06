import { BreadcrumbItem } from "@shared/ui/Breadcrumb";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Breadcrumb");

describe("Breadcrumb", () => {
  const item = { label: "Home", href: "/" };

  it("renders normal item correctly", () => {
    renderWithProviders(<BreadcrumbItem item={item} />);
  });

  it("renders last item correctly", () => {
    renderWithProviders(<BreadcrumbItem item={item} isLastItem />);
  });
});
