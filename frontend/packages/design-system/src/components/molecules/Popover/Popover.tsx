"use client";

import { ReactNode, useState } from "react";
import { clsx } from "clsx";

import { AppIcon } from "../../../icons";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { useClickOutside } from "../../lib/events/useClickOutside";
import { usePositionShift } from "../../lib/positions/usePositionShift";
import { styles } from "./styles.css";

interface Props {
  /**
   * Popover의 contents
   */
  children: ReactNode;
  /**
   * Popover를 띄우는 요소. 내부에서 자체적으로 클릭 이벤트를 처리하기 때문에, Button으로 감싸지 않아도 된다.
   */
  trigger: ReactNode;
  variant?: "default" | "warning";
  width?: number;
  title?: string;
  description?: string;
  className?: string;
}

export function Popover({
  children,
  trigger,
  variant = "default",
  width,
  title,
  description,
  className,
}: Readonly<Props>) {
  const [visible, setVisible] = useState<boolean>(false);
  const { placement, shiftX, wrapperRef, checkPosition } = usePositionShift({
    offsetX: 32,
  });

  const openPopover = () => setVisible(true);
  const closePopover = () => setVisible(false);
  useClickOutside(wrapperRef, closePopover);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <Button
        className={styles.button}
        onClick={openPopover}
        onMouseEnter={checkPosition}
        onFocus={checkPosition}
      >
        {trigger}
      </Button>
      <div
        className={clsx(styles.popover({ placement, visible }), className)}
        style={{
          transform: `translateX(calc(-50% + ${shiftX}px))`,
          width: width ? `${width}px` : "max-content",
        }}
      >
        {title && (
          <div className={styles.titleWrapper}>
            {variant === "warning" && <AppIcon icon="warning" size={20} />}
            <Text variant="titleSmall" as="h2" className={styles.title}>
              {title}
            </Text>
          </div>
        )}
        {description && (
          <Text variant="description" as="h3">
            {description}
          </Text>
        )}
        {children}
      </div>
    </div>
  );
}
