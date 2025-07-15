"use client";

import styled from "styled-components";

import { UserType } from "@shared/lib/auth";

interface Props {
  user: UserType;
}

export function UserProfile({ user }: Readonly<Props>) {
  return (
    <Container>
      <Avatar
        src={user.user_metadata.avatar_url || "/default-avatar.png"}
        alt="User Avatar"
      />
      <UserName>{user.id}</UserName>
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

const UserName = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
