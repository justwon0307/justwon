import { render } from "@testing-library/react";

import { EditorPage } from "@pages/editor";

describe("EditorPage", () => {
  it("renders the editor page content", () => {
    const { getByText } = render(<EditorPage />);

    const content = getByText('Hello "/editor"!');
    expect(content).toBeTruthy();
  });
});
