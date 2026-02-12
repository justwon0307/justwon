import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { AuthProvider } from "@justkits/auth";
import "@justwon/designs/globals.css";

import { LoadingWidget } from "@widgets/loading";
import { refreshTokenAPI } from "@features/auth/refresh-token";
import { api } from "@shared/api/axios";
import { routeTree } from "./routeTree.gen.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
  },
});
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider
        instance={api}
        fallback={<LoadingWidget />}
        tokenRefreshAPICall={refreshTokenAPI}
      >
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
