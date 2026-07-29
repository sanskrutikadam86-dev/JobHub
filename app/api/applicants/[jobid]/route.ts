import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/mongodb";


export async function GET(
  req: NextRequest,
  { params }: { params: { jobid: string } }
) {
  try {
    const { jobid } =  params;

    const db = client.db("jobhub");

    const applications = db.collection("applications");

    const applicants = await applications
      .find({
        jobid: jobid,
      })
      .sort({
        appliedAt: -1,
      })
      .toArray();

    return NextResponse.json(applicants);
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