"use client";

import "client-only";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useColors } from "@shared/lib/colors";
import { AppIcon } from "@shared/ui/Icons";

interface Props {
  tab: "projects" | "blog" | "about";
}

export function Tab({ tab }: Readonly<Props>) {
  const { colors } = useColors();
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${tab}`);

  return (
    <Link href={`/${tab}`} className={isActive ? "active" : ""}>
      <AppIcon
        icon={tab}
        size={18}
        color={isActive ? colors.primary : colors.gray900}
      />
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </Link>
  );
}
