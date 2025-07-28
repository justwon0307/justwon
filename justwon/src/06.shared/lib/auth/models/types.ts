export type UserProfileType = {
  id: string;
  username: string;
  role: "admin" | "member";
  avatar_url?: string;
};
