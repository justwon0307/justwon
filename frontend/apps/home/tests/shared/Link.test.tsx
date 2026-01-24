import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

import { Link } from "@shared/ui/Link";

vi.unmock("next/link");

describe("Link", () => {
  it("should render a link with default styles", () => {
    const { getByText } = render(
      <Link href="https://example.com">Example Link</Link>,
    );
    const element = getByText("Example Link");
    expect(element.className).toContain("linkDefaultStyle");
  });

  it("should apply custom className along with default styles", () => {
    const { getByText } = render(
      <Link href="https://example.com" className="custom-class">
        Styled Link
      </Link>,
    );
    const element = getByText("Styled Link");
    expect(element.className).toContain("custom-class");
  });
});
