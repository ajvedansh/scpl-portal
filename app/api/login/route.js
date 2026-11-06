import { NextResponse } from "next/server";

// DEMO ONLY. Replace with a call to your real agent-login API / database,
// compare hashed passwords, and issue a signed session token (JWT or Auth.js).
const DEMO = { username: "agent", password: "agent123" };

export async function POST(request) {
  const { username, password } = await request.json();

  if (username !== DEMO.username || password !== DEMO.password) {
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("scpl_token", "demo-session-token", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}
