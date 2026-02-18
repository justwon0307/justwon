import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "@app/auth";

const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function getTestClient() {
  return testQueryClient;
}

export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <QueryClientProvider client={testQueryClient}>
      <AuthProvider>{ui}</AuthProvider>
    </QueryClientProvider>,
  );
}
