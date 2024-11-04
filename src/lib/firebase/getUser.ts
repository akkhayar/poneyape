"use server";

import { auth as adminAuth } from "../firebase/firebase-admin";

export const getUserById = async (id: string) => {
  const user = await adminAuth.getUser(id);
  return user;
};
