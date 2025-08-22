import { JSX, ReactElement, PropsWithChildren } from "react";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";

import { StylesProvider } from "@app/root/providers";

/*export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
}*/

export function renderWithProviders(
  ui: ReactElement
  //{ client = createTestQueryClient() } = {}
) {
  function Wrapper({ children }: Readonly<PropsWithChildren>): JSX.Element {
    return <StylesProvider>{children}</StylesProvider>;
  }

  return { ...render(ui, { wrapper: Wrapper }) }; //, client };
}

export async function getElementFromAsyncServerComponent<P>(
  componentFn: (props: P) => Promise<ReactElement>,
  props: P
): Promise<ReactElement> {
  return await componentFn(props);
}
