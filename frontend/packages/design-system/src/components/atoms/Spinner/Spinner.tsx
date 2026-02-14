import { assignInlineVars } from "@vanilla-extract/dynamic";

import { spinnerDiameter, spinnerWidth, styles } from "./styles.css";

interface Props {
  size?: number;
  width?: number;
}

export function Spinner({ size = 48, width = 4 }: Readonly<Props>) {
  return (
    <div
      className={styles.spinner}
      style={{
        ...assignInlineVars({
          [spinnerDiameter]: `${size}px`,
          [spinnerWidth]: `${width}px`,
        }),
      }}
    />
  );
}
