import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const url = request.nextUrl.clone();
  if (token && url.pathname.includes("auth")) {
    return NextResponse.redirect("http://localhost:3000");
  }
  return NextResponse.next();
}
