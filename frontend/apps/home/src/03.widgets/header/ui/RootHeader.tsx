import { JustwonHorizontalLogo } from "@justwon/designs/brand";
import { AppIcon } from "@justwon/designs/icons";
import { Button } from "@justwon/designs/components";

import {
  dividerStyles,
  headerContainerStyles,
  headerTabsStyles,
  linkStyles,
  buttonStyles,
} from "./styles.css";
import { MainTab, tabs } from "@entities/app/tabs";
import { Link } from "@shared/ui/Link";

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
        <div className={dividerStyles} />
        <Button className={buttonStyles} aria-label="Settings">
          <AppIcon icon="settings" size={28} />
        </Button>
      </div>
    </div>
  );
}
