"use client";

import styled from "styled-components";

import { UserType } from "@shared/lib/auth";
import { AppIcon } from "@shared/ui/Icons";

interface Props {
  user: UserType;
}

export function UserProfile({ user }: Readonly<Props>) {
  return (
    <Container>
      {user.user_metadata.avatar_url ? (
        <Avatar src={user.user_metadata.avatar_url} alt="User Avatar" />
      ) : (
        <AppIcon icon="profile" size={24} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
