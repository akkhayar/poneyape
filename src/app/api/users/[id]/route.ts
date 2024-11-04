// app/api/users/[id]/route.ts

import { NextResponse } from "next/server";

import { getUserById } from "@/lib/firebase/getUser";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const user = await getUserById(id);
    return NextResponse.json({
      id: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  } catch (error) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}
