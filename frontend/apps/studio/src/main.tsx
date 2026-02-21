import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "@justwon/designs/globals.css";

import { AuthProvider } from "@app/auth";
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
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>,
);
