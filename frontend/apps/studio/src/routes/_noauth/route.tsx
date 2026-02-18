import { createFileRoute } from "@tanstack/react-router";

import { RequireNoAuth } from "@app/auth";

export const Route = createFileRoute("/_noauth")({
  component: RequireNoAuth,
});
