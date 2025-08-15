import { SearchButton } from "@shared/ui/Searchbar";
import { renderWithProviders } from "@test-utils/renderer";

jest.unmock("@shared/ui/Searchbar");

describe("SearchButton", () => {
  it("renders correctly", () => {
    renderWithProviders(<SearchButton />);
  });
});
