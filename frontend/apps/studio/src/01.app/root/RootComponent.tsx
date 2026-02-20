import { Fragment } from "react";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export function RootComponent() {
  return (
    <Fragment>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
      <TanStackRouterDevtools />
    </Fragment>
  );
}
