import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import client from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const db = client.db("jobhub");
    const users = db.collection("users");

    const user = await users.findOne({
  email: body.email,
});

if (!user) {
  return NextResponse.json(
    { message: "Invalid Email or Password" },
    { status: 401 }
  );
}

const isPasswordValid = await bcrypt.compare(
  body.password,
  user.password
);

if (!isPasswordValid) {
  return NextResponse.json(
    { message: "Invalid Email or Password" },
    { status: 401 }
  );
}

   const token = jwt.sign(
  {
    email: user.email,
    name: user.name,
    role: user.role,
  },
  process.env.JWT_SECRET!,
  {
    expiresIn: "1d",
  }
);

const response = NextResponse.json({
  message: "Login Successful",
  role: user.role,
});

response.cookies.set("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 60 * 60 * 24,
  path: "/",
});

return response;
  } catch (error) {
    console.error("Login Error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}