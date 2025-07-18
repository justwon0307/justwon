"use client";

import { createContext, useContext } from "react";

import { UserType } from "../models/types";

export interface AuthContextType {
  user: UserType | null;
  loading: boolean;
  logout: () => Promise<void>;
  refresh: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
