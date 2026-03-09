import { createFileRoute } from "@tanstack/react-router";

import { LoginPage } from "@pages/login";

export const Route = createFileRoute("/_guestsonly/login")({
  component: LoginPage,
});
