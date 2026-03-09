import { createFileRoute } from "@tanstack/react-router";

import { loginRequired } from "@app/auth";
import { AdminOnlyLayout } from "@app/layouts/adminonly";

export const Route = createFileRoute("/_adminonly")({
  beforeLoad: loginRequired,
  component: AdminOnlyLayout,
});
