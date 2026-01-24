"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TabIcon } from "@justwon/icons";

import { TabOptions } from "../models/tabs";
import { tabStyles } from "./styles.css";

interface Props {
  tab: TabOptions;
}

export function HeaderTab({ tab }: Readonly<Props>) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${tab}`);

  return (
    <Link
      href={`/${tab}`}
      className={isActive ? tabStyles.active : tabStyles.inactive}
    >
      <TabIcon tab={tab} />
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </Link>
  );
}
