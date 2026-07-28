import { NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

/* -------------------- POST (already correct) -------------------- */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = request.cookies.get("token")?.value;

if (!token) {
  return NextResponse.json(
    { message: "Unauthorized" },
    { status: 401 }
  );
}

const user = verifyToken(token) as {
  email: string;
  name: string;
  role: string;
};
    console.log("JOB SAVED");
    console.log("BODY RECEIVED:", body);

    const db = client.db("jobhub");
    const jobs = db.collection("jobs");

    const newJob = {
  jobTitle: body.jobTitle,
  companyName: body.companyName,
  location: body.location,
  salary: body.salary,
  description: body.description,

  // Recruiter Details
  recruiterEmail: user.email,
  recruiterName: user.name,
  recruiterRole: user.role,

  createdAt: new Date(),
};

    await jobs.insertOne(newJob);

    return NextResponse.json({
      message: "Job posted successfully",
    });
  } catch (error) {
    console.error("Job Post Error:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

/* -------------------- GET (ADD THIS BELOW POST) -------------------- */
export async function GET() {
  try {
    const db = client.db("jobhub");
    const jobs = db.collection("jobs");

    const allJobs = await jobs.find({}).toArray();
    console.log("ALL JOBS:", allJobs);

    return NextResponse.json(allJobs);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching jobs" },
      { status: 500 }
    );
  }
}

  