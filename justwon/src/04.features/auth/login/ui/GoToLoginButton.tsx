import Link from "next/link";

import { AppIcon } from "@shared/ui/Icons";

export function GoToLoginButton() {
  return (
    <Link href="/login">
      <AppIcon icon="login" size={18} />
    </Link>
  );
}
