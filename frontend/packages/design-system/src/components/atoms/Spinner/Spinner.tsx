import { clsx } from "clsx";

import { rotate, useRotateAnimation } from "../../../theme";
import { styles } from "./styles.css";

interface Props {
  size?: number;
  width?: number;
}

export function Spinner({ size = 48, width = 4 }: Readonly<Props>) {
  const { spinning, style } = useRotateAnimation(800, 0, true);

  return (
    <div
      className={clsx(styles.spinner, rotate({ spinning }))}
      style={{
        ...style,
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${width}px`,
      }}
      data-testid="spinner"
    />
  );
}
