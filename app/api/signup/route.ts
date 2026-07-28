import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import client from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

const hashedPassword = await bcrypt.hash(body.password, 10);

const db = client.db("jobhub");
const users = db.collection("users");
const existingUser = await users.findOne({
  email: body.email,
});

if (existingUser) {
  return NextResponse.json(
    {
      message: "Email already exists",
    },
    {
      status: 400,
    }
  );
}

await users.insertOne({
  name: body.name,
  email: body.email,
  password: hashedPassword,
  role: body.role,
});

   return NextResponse.json({
  message: "Account created successfully 🎉",
});
  } catch (error) {
  console.error("Signup Error:", error);

  return NextResponse.json(
    {
      message: "Something went wrong",
      error: String(error),
    },
    { status: 500 }
  );
  }
}