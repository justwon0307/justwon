import { render } from "@testing-library/react";

import { Text } from "@/components";

describe("Text", () => {
  it("should render with default tag based on variant", () => {
    const { getByText } = render(
      <>
        <Text variant="titleLarge">Title Large</Text>
        <Text variant="titleSmall">Title Small</Text>
        <Text variant="bodyLarge">Body Large</Text>
        <Text variant="bodySmall">Body Small</Text>
      </>,
    );
    const element = getByText("Title Large");
    expect(element.tagName).toBe("H1");
    expect(element.className).toContain("titleLarge");

    const element2 = getByText("Title Small");
    expect(element2.tagName).toBe("H2");
    expect(element2.className).toContain("titleSmall");

    const element3 = getByText("Body Large");
    expect(element3.tagName).toBe("P");
    expect(element3.className).toContain("bodyLarge");

    const element4 = getByText("Body Small");
    expect(element4.tagName).toBe("SPAN");
    expect(element4.className).toContain("bodySmall");
  });

  it("should render with custom tag when 'as' prop is provided", () => {
    const { getByText } = render(
      <Text variant="bodyLarge" as="div">
        Custom Tag
      </Text>,
    );
    const element = getByText("Custom Tag");
    expect(element.tagName).toBe("DIV");
    expect(element.className).toContain("bodyLarge");
  });

  it("should merge custom className with variant class", () => {
    const { getByText } = render(
      <Text variant="bodySmall" className="custom-class">
        Merged Class
      </Text>,
    );
    const element = getByText("Merged Class");
    expect(element.className).toContain("bodySmall");
    expect(element.className).toContain("custom-class");
  });
});
