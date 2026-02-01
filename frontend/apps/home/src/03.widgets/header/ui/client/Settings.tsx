"use client";

import { useState } from "react";
import { Button } from "@justwon/designs/components";
import { AppIcon } from "@justwon/designs/icons";

import { ThemeToggleModal } from "@features/settings/toggle-theme";
import { styles } from "./styles.css";

export function Settings() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
        className={styles.button}
        aria-label="Settings"
        onClick={openModal}
        data-testid="settings-button"
      >
        <AppIcon icon="settings" size={28} />
      </Button>
      <ThemeToggleModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
