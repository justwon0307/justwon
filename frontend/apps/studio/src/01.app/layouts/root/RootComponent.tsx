import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Alerter, Toaster } from "@justwon/designs/components";

export function RootComponent() {
  return (
    <>
      <Outlet />
      <Alerter />
      <Toaster />
      <TanStackRouterDevtools />
    </>
  );
}
