"use client";

import { ReactNode } from "react";

import { Text } from "../../atoms/Text/Text";
import { usePositionShift } from "../../lib/positions/usePositionShift";
import { styles } from "./styles.css";

interface Props {
  text: string;
  /**
   * 툴팁을 띄우는 기준이 되는 Trigger 요소
   */
  children: ReactNode;
}

/**
 * 간단하게 사용할 수 있는 툴팁 컴포넌트.
 * 사용할 컴포넌트를 툴팁으로 감싸고,
 * 툴팁에 표시할 텍스트를 text prop으로 전달하면 된다.
 * @param param0
 * @returns
 */
export function Tooltip({ text, children }: Readonly<Props>) {
  const { placement, shiftX, wrapperRef } = usePositionShift();

  return (
    <div role="tooltip" className={styles.wrapper} ref={wrapperRef}>
      {children}
      <Text
        as="span"
        variant="bodySmall"
        className={styles.tooltip({ placement })}
        style={{ transform: `translateX(calc(-50% + ${shiftX}px))` }}
      >
        {text}
        <div
          className={styles.tooltipArrow({ placement })}
          style={{ transform: `translateX(calc(-50% - ${shiftX}px))` }}
        />
      </Text>
    </div>
  );
}
