import { Text } from "@justwon/designs/components";

import { LoginForm } from "@features/auth/login";
import { styles } from "./styles.css";

export function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Text variant="titleLarge" className={styles.text}>
          JustWon Studio
        </Text>
        <LoginForm />
      </div>
    </div>
  );
}
