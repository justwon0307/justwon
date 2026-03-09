import { useUser } from "@justkits/react-jwt";
import { Button, Text } from "@justwon/designs/components";
import { AppIcon } from "@justwon/designs/icons";
import { rotate, useRotateAnimation } from "@justwon/designs/theme";

import { styles } from "./styles.css";

export function RefetchUserButton() {
  const { refreshUser } = useUser();
  const { spinning, startSpinning, style } = useRotateAnimation();

  const handleClick = async () => {
    if (spinning) return;
    startSpinning();
    await refreshUser();
  };

  return (
    <Button className={styles.button} onClick={handleClick}>
      <AppIcon
        icon="refresh"
        size={20}
        className={rotate({ spinning })}
        style={style}
      />
      <Text variant="bodySmall" as="span">
        다시 시도하기
      </Text>
    </Button>
  );
}
