"use client";

import { usePathname } from "next/navigation";
import { TabIcon } from "@justwon/designs/icons";

import { TabOptions } from "../models/tabs";
import { Link } from "@shared/ui/Link";
import { styles } from "./styles.css";

interface Props {
  tab: TabOptions;
}

export function MainTab({ tab }: Readonly<Props>) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${tab}`);

  return (
    <Link href={`/${tab}`} className={styles.tab({ active: isActive })}>
      <TabIcon tab={tab} />
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </Link>
  );
}
