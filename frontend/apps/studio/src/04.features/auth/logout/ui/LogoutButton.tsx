import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@justkits/react-jwt";
import { Button, showConfirm, Tooltip } from "@justwon/designs/components";
import { AppIcon } from "@justwon/designs/icons";

import { styles } from "./styles.css";

export function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate({ to: "/login", replace: true });
  };

  const handleButtonClick = async () => {
    showConfirm("로그아웃", "정말 로그아웃 하시겠습니까?", onLogout);
  };

  return (
    <Tooltip text="로그아웃">
      <Button onClick={handleButtonClick} className={styles.button}>
        <AppIcon icon="logout" />
      </Button>
    </Tooltip>
  );
}
