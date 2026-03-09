import { createFileRoute } from "@tanstack/react-router";

import { guestsOnly } from "@app/auth";
import { GuestsOnlyLayout } from "@app/layouts/guestsonly";

export const Route = createFileRoute("/_guestsonly")({
  beforeLoad: guestsOnly,
  component: GuestsOnlyLayout,
});
