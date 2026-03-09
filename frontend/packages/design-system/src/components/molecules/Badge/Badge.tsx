import { ReactNode } from "react";

import { styles } from "./styles.css";

interface Props {
  label: string;
  color?: string;
  left?: ReactNode;
  right?: ReactNode;
}

/**
 * 뱃지 컴포넌트
 * @property {string} label - 뱃지에 표시될 텍스트
 * @property {string} [color] - 뱃지의 배경색. !! 반드시 hex 코드로 전달 !!
 * @property {ReactNode} [left] - 뱃지 왼쪽에 표시될 요소
 * @property {ReactNode} [right] - 뱃지 오른쪽에 표시될 요소
 */
export function Badge({ label, color, left, right }: Readonly<Props>) {
  return (
    <span
      className={styles.badge}
      style={{ color, backgroundColor: `${color}20` }}
    >
      {left}
      {label}
      {right}
    </span>
  );
}
