import { createFileRoute } from "@tanstack/react-router";

import { indexPageLoader, LandingPage } from "@pages/landing";

export const Route = createFileRoute("/")({
  beforeLoad: indexPageLoader,
  component: LandingPage,
});
