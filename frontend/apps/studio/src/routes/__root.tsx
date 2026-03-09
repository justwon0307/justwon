import { createRootRouteWithContext } from "@tanstack/react-router";

import { RootComponent } from "@app/layouts/root";

interface RouterContext {
  auth: {
    isAuthenticated: boolean;
  };
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});
