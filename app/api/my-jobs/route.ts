import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";
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

    const user = verifyToken(token) as {
      email: string;
      role: string;
    };

    const db = client.db("jobhub");
    const jobs = db.collection("jobs");

    const myJobs = await jobs.find({
      userId: user.email,
    }).toArray();

    return NextResponse.json(myJobs);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}