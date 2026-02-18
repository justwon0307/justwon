import { Fragment } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Fragment>
      <Outlet />
      <TanStackRouterDevtools />
    </Fragment>
  );
}
