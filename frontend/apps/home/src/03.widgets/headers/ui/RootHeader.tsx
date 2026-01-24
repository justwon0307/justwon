import Link from "next/link";
import { JustwonHorizontalLogo } from "@justwon/assets";

import {
  headerContainerStyles,
  headerTabsStyles,
  linkStyles,
} from "./styles.css";
import { MainTab, tabs } from "@entities/app/tabs";

export function RootHeader() {
  return (
    <div className={headerContainerStyles}>
      <Link href="/" className={linkStyles}>
        <JustwonHorizontalLogo size={32} />
      </Link>
      <div className={headerTabsStyles}>
        {tabs.map((tab) => (
          <MainTab key={tab} tab={tab} />
        ))}
      </div>
    </div>
  );
}
