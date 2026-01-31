import { Button, Modal, Text } from "@justwon/designs/components";
import { AppIcon } from "@justwon/designs/icons";
import { ThemeCard, useTheme, type ThemeMode } from "@justwon/designs/theme";

import { buttonStyles, styles } from "./styles.css";

interface Props {
  closeModal: () => void;
  isOpen: boolean;
}

export function ThemeToggleModal({ closeModal, isOpen }: Readonly<Props>) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      placement="top"
      className={styles.container}
    >
      <div className={styles.header}>
        <Text variant="titleLarge">테마 선택</Text>
        <Button
          onClick={closeModal}
          aria-label="Close Settings"
          className={styles.closeButton}
        >
          <AppIcon icon="close" size={24} />
        </Button>
      </div>
      <div className={styles.content}>
        <ThemeToggleButton theme="light" />
        <ThemeToggleButton theme="dark" />
        <ThemeToggleButton theme="system" />
      </div>
    </Modal>
  );
}

interface ButtonProps {
  theme: ThemeMode;
}

function ThemeToggleButton({ theme }: Readonly<ButtonProps>) {
  const { mode: activeTheme, setThemeMode } = useTheme();

  const isActive = theme === activeTheme;

  return (
    <Button
      className={buttonStyles.button({ active: isActive })}
      onClick={() => setThemeMode(theme)}
    >
      <div className={buttonStyles.cardWrapper({ active: isActive })}>
        <ThemeCard theme={theme} />
        {isActive && (
          <div className={buttonStyles.check}>
            <AppIcon icon="check-fill" size={24} />
          </div>
        )}
      </div>
      {theme}
    </Button>
  );
}
