import { Outlet } from "@tanstack/react-router";
import { useAuth } from "@justkits/react-jwt";
import { StudioHorizontalLogo } from "@justwon/designs/brand";

import { UserButton } from "@widgets/auth";
import { styles } from "./styles.css";

export function AdminOnlyLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <header className={styles.header}>
        <StudioHorizontalLogo size={32} />
        <UserButton />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
