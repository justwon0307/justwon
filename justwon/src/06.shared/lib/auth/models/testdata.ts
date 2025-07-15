import { UserType } from "./types";

export const sampleUser: UserType = {
  id: "user123",
  user_metadata: {
    avatar_url: "/avatar.png",
    full_name: "John Doe",
  },
  app_metadata: {},
  aud: "authenticated",
  created_at: "2025-01-01T00:00:00Z",
};
