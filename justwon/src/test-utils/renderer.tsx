import { JSX, ReactElement, PropsWithChildren } from "react";
import { render, RenderResult } from "@testing-library/react";

import { ClerkProvider, StylesProvider } from "@app/providers";

export function renderWithProviders(ui: ReactElement): RenderResult {
  function Wrapper({ children }: Readonly<PropsWithChildren>): JSX.Element {
    return (
      <ClerkProvider>
        <StylesProvider>{children}</StylesProvider>
      </ClerkProvider>
    );
  }

  return { ...render(ui, { wrapper: Wrapper }) };
}

export async function renderWithProvidersAsync<P>(
  componentFn: (props: P) => Promise<ReactElement>,
  props: P
): Promise<RenderResult> {
  const element = await componentFn(props);

  return renderWithProviders(element);
}
