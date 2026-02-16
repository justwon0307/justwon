import { createFileRoute } from "@tanstack/react-router";

import { RequireNoAuth } from "@app/router/wrappers";

export const Route = createFileRoute("/_noauth")({
  component: RequireNoAuth,
});
