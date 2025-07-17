"use client";

import { LoginButton, Wrapper } from "./styles";
import { useColors } from "@shared/lib/colors";
import { Divider } from "@shared/ui/Dividers";
import { AppIcon, Logo } from "@shared/ui/Icons";

interface Props {
  toggleMode: () => void;
}

export function LoginButtons({ toggleMode }: Readonly<Props>) {
  const { colors } = useColors();

  const googleLogin = () => {
    window.alert("Coming soon!");
  };

  const githubLogin = () => {
    window.alert("Coming soon!");
  };

  return (
    <Wrapper>
      <h1>Login or Signup with:</h1>
      <LoginButton onClick={googleLogin} data-testid="google-login">
        <Logo name="google" size={24} />
        Google
      </LoginButton>
      <LoginButton onClick={githubLogin} data-testid="github-login">
        <Logo name="github" size={24} />
        GitHub
      </LoginButton>
      <Divider $color={colors.gray200} $bold />
      <LoginButton onClick={toggleMode} data-testid="admin-login">
        <AppIcon icon="admin" size={24} />
        Admin Login
      </LoginButton>
    </Wrapper>
  );
}
