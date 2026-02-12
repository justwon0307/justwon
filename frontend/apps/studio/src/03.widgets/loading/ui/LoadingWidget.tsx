import { Spinner } from "@justwon/designs/components";

import { styles } from "./styles.css";

export function LoadingWidget() {
  return (
    <div className={styles.container}>
      <Spinner size={64} width={8} />
    </div>
  );
}
