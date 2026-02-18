import { fireEvent, render } from "@testing-library/react";

import { TextInput } from "@/components";

describe("TextInput", () => {
  it("renders the TextInput component", () => {
    const { getByTestId } = render(
      <TextInput
        label="Username"
        placeholder="Enter your username"
        data-testid="test-input"
      />,
    );
    const inputElement = getByTestId("test-input") as HTMLInputElement;
    expect(inputElement).toBeTruthy();
    expect(inputElement.placeholder).toBe("Enter your username");

    fireEvent.change(inputElement, { target: { value: "testuser" } });
    expect(inputElement.value).toBe("testuser");
  });
});
