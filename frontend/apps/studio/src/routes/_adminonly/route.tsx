import { createFileRoute } from "@tanstack/react-router";

import { RequireAuth } from "@app/router/wrappers";

export const Route = createFileRoute("/_adminonly")({
  component: RequireAuth,
});
