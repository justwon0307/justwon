import { JustwonHorizontalLogo } from "@justwon/designs/brand";

import { Settings } from "./client/Settings";
import { MainTab, tabs } from "@entities/app/tabs";
import { Link } from "@shared/ui/Link";
import { styles } from "./styles.css";

export function RootHeader() {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.link} data-testid="main-logo">
        <JustwonHorizontalLogo size={32} />
      </Link>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <MainTab key={tab} tab={tab} />
        ))}
      </div>
      <div className={styles.divider} />
      <Settings />
    </header>
  );
}
