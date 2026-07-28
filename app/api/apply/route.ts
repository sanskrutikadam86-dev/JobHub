import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const db = client.db("jobhub");

  const jobs = db.collection("jobs");
const applications = db.collection("applications");

const job = await jobs.findOne({
  _id: new ObjectId(body.jobId),
});

if (!job) {
  return NextResponse.json(
    {
      message: "Job not found",
    },
    {
      status: 404,
    }
  );
}

await applications.insertOne({
  jobid: body.jobid,

  jobTitle: job.jobTitle,
  companyName: job.companyName,
  location: job.location,
  salary: job.salary,

  name: body.fullName,
  email: body.email,
  phone: body.phone,
  qualification: body.qualification,
  experience: body.experience,
  coverLetter: body.coverLetter,

  status: "Pending",

  appliedAt: new Date(),
});

    return NextResponse.json({
      message: "Application submitted successfully 🎉",
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}