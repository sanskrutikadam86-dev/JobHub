import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = verifyToken(token);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid Token" },
      { status: 401 }
    );
  }
}