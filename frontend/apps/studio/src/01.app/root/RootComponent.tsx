import { Fragment } from "react";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "@justwon/designs/components";

export function RootComponent() {
  return (
    <Fragment>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
      <Toaster />
      <TanStackRouterDevtools />
    </Fragment>
  );
}
