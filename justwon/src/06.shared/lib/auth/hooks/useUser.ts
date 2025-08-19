"use client";

import "client-only";
import { createContext, useContext } from "react";

import { UserType } from "../models/user";

/**
 * 클라이언트에서 유저 정보를 가져오는 훅.
 */

export const UserContext = createContext<UserType | null>(null);

export function useUser(): UserType | null {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return user;
}
