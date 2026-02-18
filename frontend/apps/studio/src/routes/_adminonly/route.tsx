import { createFileRoute } from "@tanstack/react-router";

import { RequireAuth } from "@app/auth";

export const Route = createFileRoute("/_adminonly")({
  component: RequireAuth,
});
