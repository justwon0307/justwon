import { JSX, ReactElement, PropsWithChildren } from "react";
import { render } from "@testing-library/react";

import { ClerkProvider, StylesProvider } from "@app/providers";

export function renderWithProviders(ui: ReactElement) {
  function Wrapper({ children }: Readonly<PropsWithChildren>): JSX.Element {
    return (
      <ClerkProvider>
        <StylesProvider>{children}</StylesProvider>
      </ClerkProvider>
    );
  }

  return { ...render(ui, { wrapper: Wrapper }) };
}
