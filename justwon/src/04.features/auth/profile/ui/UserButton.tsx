"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import { UserProfile } from "@entities/profile";
import { useAuth, UserType } from "@shared/lib/auth";
import { AppIcon } from "@shared/ui/Icons";
import { useColors } from "@shared/lib/colors";
import { useRouter } from "next/navigation";

interface Props {
  user: UserType;
}

export function UserButton({ user }: Readonly<Props>) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { logout } = useAuth();
  const { colors } = useColors();
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle click outside to close the menu
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".user-button")) {
      setMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    if (window.confirm("정말로 로그아웃 하시겠습니까?")) {
      await logout();
      setMenuOpen(false);
      router.push("/login");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Button className="user-button" onClick={toggleMenu} data-testid="user-button">
        <UserProfile user={user} />
      </Button>
      {menuOpen && (
        <Menu>
          <button onClick={handleLogout} className="logout">
            <AppIcon icon="logout" size={18} color={colors.error} />
            Log out
          </button>
        </Menu>
      )}
    </>
  );
}

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  gap: 8px;
  position: absolute;
  top: 48px;
  right: 36px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 10;

  > button {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  button.logout {
    color: ${({ theme }) => theme.colors.error};
  }
`;
