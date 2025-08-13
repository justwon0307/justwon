import { auth } from "@clerk/nextjs/server";

export const getToken = async () => {
  const { getToken } = await auth();

  return await getToken();
};

export const isLoggedIn = async () => {
  const { userId } = await auth();

  return !!userId;
};
