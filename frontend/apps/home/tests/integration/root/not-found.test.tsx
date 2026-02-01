import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { NotFound } from "@widgets/not-found";

describe("NotFound", () => {
  it("should render with default props", () => {
    const { getByText } = render(<NotFound />);

    expect(getByText("404")).toBeTruthy();
    expect(
      getByText("죄송합니다. 찾고 있는 페이지가 존재하지 않습니다."),
    ).toBeTruthy();
    expect(getByText("홈으로 돌아가기")).toBeTruthy();
  });
});
