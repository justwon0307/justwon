import { createRootRouteWithContext } from "@tanstack/react-router";
import type { RouterAuthContext } from "@justkits/react-jwt";

import { RootComponent } from "@app/layouts/root";

export const Route = createRootRouteWithContext<RouterAuthContext>()({
  component: RootComponent,
});
