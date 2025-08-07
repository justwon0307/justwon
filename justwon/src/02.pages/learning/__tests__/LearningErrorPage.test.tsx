import { fireEvent } from "@testing-library/react";

import { LearningErrorPage } from "@pages/learning/landing";
import { renderWithProviders } from "@test-utils/renderer";

describe("LearningErrorPage", () => {
  it("renders correctly", () => {
    const error = new Error("Learning Error");
    const reset = jest.fn();

    const { getByText } = renderWithProviders(
      <LearningErrorPage error={error} reset={reset} />
    );

    expect(getByText("Learning Error")).toBeInTheDocument();

    fireEvent.click(getByText("다시 시도하기"));
  });
});
