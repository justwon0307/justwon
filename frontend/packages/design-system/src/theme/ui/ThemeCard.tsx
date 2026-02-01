import { styles } from "./card.css";

interface Props {
  theme: "light" | "dark" | "system";
}

export function ThemeCard({ theme }: Readonly<Props>) {
  if (theme === "light") return <Light />;
  if (theme === "dark") return <Dark />;

  return (
    <div className={styles.system}>
      <Light />
      <Dark />
    </div>
  );
}

function Light() {
  return (
    <div className={styles.background.light}>
      <div className={styles.paper.light}>
        <span className={styles.text.light}>Aa</span>
      </div>
    </div>
  );
}

function Dark() {
  return (
    <div className={styles.background.dark}>
      <div className={styles.paper.dark}>
        <span className={styles.text.dark}>Aa</span>
      </div>
    </div>
  );
}
