import { JSX, ReactElement, PropsWithChildren } from "react";
import { render } from "@testing-library/react";

import { StylesProvider } from "@app/providers";

export function renderWithProviders(ui: ReactElement) {
  function Wrapper({ children }: Readonly<PropsWithChildren>): JSX.Element {
    return <StylesProvider>{children}</StylesProvider>;
  }

  return { ...render(ui, { wrapper: Wrapper }) };
}
